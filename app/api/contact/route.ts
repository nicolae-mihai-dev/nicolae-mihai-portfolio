import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const MAX_BODY_SIZE = 10_000;
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const contactSchema = z
  .object({
    name: z.string().trim().min(2).max(80),
    email: z.string().trim().email().max(254),
    message: z.string().trim().min(10).max(5000),

    // Honeypot
    contactReference: z.string().max(200).optional().default(""),

    // Cloudflare Turnstile token
    turnstileToken: z.string().trim().min(1).max(2048),
  })
  .strict();

type TurnstileResponse = {
  success: boolean;
  hostname?: string;
  "error-codes"?: string[];
};

type TurnstileVerification = {
  errorCodes: string[];
  valid: boolean;
};

function jsonResponse(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

function sanitizeSubject(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function logDevelopment(message: string, details?: Record<string, unknown>) {
  if (process.env.NODE_ENV === "development") {
    console.info(`[contact] ${message}`, details ?? {});
  }
}

async function verifyTurnstileToken(
  token: string,
  secretKey: string,
): Promise<TurnstileVerification> {
  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret: secretKey,
      response: token,
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(8_000),
  });

  if (!response.ok) {
    throw new Error(`Turnstile Siteverify returned ${response.status}.`);
  }

  const result = (await response.json()) as TurnstileResponse;

  return {
    errorCodes: result["error-codes"] ?? [],
    valid: result.success === true,
  };
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!resendApiKey || !turnstileSecretKey) {
    console.error("Contact API configuration is incomplete.");

    return jsonResponse(
      { error: "Contact service is temporarily unavailable." },
      500,
    );
  }

  const contentType = request.headers.get("content-type");

  if (!contentType?.toLowerCase().startsWith("application/json")) {
    return jsonResponse({ error: "Unsupported content type." }, 415);
  }

  const contentLength = request.headers.get("content-length");

  if (contentLength) {
    const parsedLength = Number(contentLength);

    if (Number.isFinite(parsedLength) && parsedLength > MAX_BODY_SIZE) {
      return jsonResponse({ error: "Request payload is too large." }, 413);
    }
  }

  let rawBody: string;

  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse({ error: "Unable to read request body." }, 400);
  }

  const bodySize = new TextEncoder().encode(rawBody).byteLength;

  if (bodySize > MAX_BODY_SIZE) {
    return jsonResponse({ error: "Request payload is too large." }, 413);
  }

  let body: unknown;

  try {
    body = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ error: "Invalid JSON payload." }, 400);
  }

  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return jsonResponse(
      {
        error: "Please check the form fields.",
        fieldErrors: result.error.flatten().fieldErrors,
      },
      400,
    );
  }

  const { name, email, message, contactReference, turnstileToken } =
    result.data;

  // Honeypot triggered — silently pretend success.
  if (contactReference.trim()) {
    logDevelopment("Blocked honeypot submission.");

    return jsonResponse({ success: true }, 200);
  }

  try {
    const turnstileVerification = await verifyTurnstileToken(
      turnstileToken,
      turnstileSecretKey,
    );

    if (!turnstileVerification.valid) {
      logDevelopment("Blocked invalid Turnstile token.", {
        errorCodes: turnstileVerification.errorCodes,
      });

      return jsonResponse(
        { error: "Security verification failed. Please try again." },
        403,
      );
    }
  } catch (error) {
    console.error("Turnstile verification failure:", error);

    return jsonResponse(
      { error: "Security verification is temporarily unavailable." },
      503,
    );
  }

  try {
    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: "Nicolae Mihai Portfolio <onboarding@resend.dev>",
      to: ["nicolae.mihai.dev@gmail.com"],
      replyTo: email,
      subject: `Portfolio inquiry from ${sanitizeSubject(name)}`,
      text: [
        "New portfolio inquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Contact API Resend failure:", error);

      return jsonResponse(
        { error: "Unable to send the message right now." },
        502,
      );
    }

    return jsonResponse({ success: true }, 200);
  } catch (error) {
    console.error("Contact API unexpected failure:", error);

    return jsonResponse({ error: "Unexpected server error." }, 500);
  }
}
