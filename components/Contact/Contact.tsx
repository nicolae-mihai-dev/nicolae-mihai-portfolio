"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FiEdit3, FiLock, FiMail, FiSend, FiUser } from "react-icons/fi";

import { Button } from "@/components/Button/Button";
import { contactLinks, siteInfo } from "@/data/site";
import styles from "./Contact.module.css";

type FormStatus = "idle" | "submitting" | "success" | "error";

type ContactResponse = {
  error?: string;
  success?: boolean;
};

const CONTACT_REQUEST_TIMEOUT_MS = 12_000;

async function readContactResponse(response: Response) {
  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.toLowerCase().includes("application/json")) {
    throw new Error("The contact service returned an invalid response.");
  }

  const data: unknown = await response.json();

  if (!data || typeof data !== "object") {
    throw new Error("The contact service returned an invalid response.");
  }

  return data as ContactResponse;
}

function SocialIcon({ label }: { label: string }) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes("github")) {
    return <SiGithub />;
  }

  if (normalizedLabel.includes("linkedin")) {
    return <FaLinkedinIn />;
  }

  return null;
}

export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formMessage, setFormMessage] = useState("");
  const [turnstileSize, setTurnstileSize] = useState<
    "compact" | "flexible"
  >("flexible");

  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const submissionInFlightRef = useRef(false);

  const emailHref = `mailto:${siteInfo.email}`;
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const isSubmitting = formStatus === "submitting";

  useEffect(() => {
    const compactViewport = window.matchMedia("(max-width: 36rem)");
    const updateTurnstileSize = () => {
      setTurnstileSize(compactViewport.matches ? "compact" : "flexible");
    };

    updateTurnstileSize();
    compactViewport.addEventListener("change", updateTurnstileSize);

    return () => {
      compactViewport.removeEventListener("change", updateTurnstileSize);
    };
  }, []);

  function clearCompletedFormState() {
    if (submissionInFlightRef.current || formStatus === "idle") {
      return;
    }

    setFormStatus("idle");
    setFormMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submissionInFlightRef.current) {
      return;
    }

    if (!turnstileSiteKey) {
      setFormStatus("error");
      setFormMessage("Security verification is temporarily unavailable.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const turnstileToken = turnstileRef.current?.getResponse();

    if (!turnstileToken || turnstileRef.current?.isExpired()) {
      turnstileRef.current?.reset();
      setFormStatus("error");
      setFormMessage("Security verification failed. Please try again.");
      return;
    }

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      contactReference: String(formData.get("contactReference") ?? "").trim(),
      turnstileToken,
    };

    submissionInFlightRef.current = true;
    setFormStatus("submitting");
    setFormMessage("Sending your message...");

    try {
      const controller = new AbortController();
      const timeoutId = window.setTimeout(
        () => controller.abort(),
        CONTACT_REQUEST_TIMEOUT_MS,
      );

      let response: Response;

      try {
        response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
      } finally {
        window.clearTimeout(timeoutId);
      }

      if (response.status === 429) {
        throw new Error(
          "Too many messages sent. Please wait a minute and try again.",
        );
      }

      const data = await readContactResponse(response);

      if (!response.ok || data.success !== true) {
        throw new Error(data.error || "Unable to send your message.");
      }

      form.reset();
      turnstileRef.current?.reset();

      setFormStatus("success");
      setFormMessage("Message sent successfully. I'll get back to you soon.");
    } catch (error) {
      console.error("Contact form error:", error);

      turnstileRef.current?.reset();

      setFormStatus("error");
      setFormMessage(
        error instanceof Error && error.name === "AbortError"
          ? "The request timed out. Please try again."
          : error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      );
    } finally {
      submissionInFlightRef.current = false;
    }
  }

  return (
    <section className={styles.contact} aria-labelledby="contact-title" id="contact">
      <div className={`container ${styles.layout}`}>
        {/* LEFT */}
        <div className={styles.heading}>
          <span
            className={`${styles.label} type-label type-label--inverse type-label--ruled`}
          >
            Contact
          </span>

          <h2 className="type-section-title type-section-title--inverse" id="contact-title">
            Have a product,
            <br />
            platform or web
            <br />
            project in mind<span className={styles.titleDot}>?</span>
          </h2>

          <p
            className={`${styles.headingText} type-section-copy type-section-copy--inverse`}
          >
            Tell me what you&apos;re building. I&apos;ll help turn your ideas
            into a thoughtful, high-quality solution.
          </p>

          <div className={styles.directContact}>
            <span className={styles.emailIcon} aria-hidden="true">
              <FiMail />
            </span>

            <div className={styles.emailContent}>
              <span className={`${styles.directEmailLabel} type-kicker`}>
                Direct email
              </span>

              <a
                className={`${styles.email} type-ui-strong type-ui-strong--inverse`}
                href={emailHref}
              >
                {siteInfo.email}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.content}>
          <form
            aria-labelledby="contact-form-title"
            className={styles.form}
            onInput={clearCompletedFormState}
            onSubmit={handleSubmit}
            aria-busy={isSubmitting}
          >
            {/* HONEYPOT */}
            <div className={styles.honeypot} aria-hidden="true">
              <label htmlFor="contact-reference">Additional reference</label>

              <input
                autoComplete="off"
                data-1p-ignore="true"
                data-lpignore="true"
                id="contact-reference"
                name="contactReference"
                tabIndex={-1}
                type="text"
              />
            </div>

            <div className={styles.formTop}>
              <div className={styles.formIdentity}>
                <span className={styles.sendIcon} aria-hidden="true">
                  <FiSend />
                </span>

                <span
                  className={`${styles.formEyebrow} type-kicker`}
                  id="contact-form-title"
                >
                  Project inquiry
                </span>
              </div>

              <span className={styles.formStatus}>
                <span aria-hidden="true" />
                Available
              </span>
            </div>

            <div className={styles.formDivider} />

            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="contact-name">
                  Your name
                </label>

                <div className={styles.inputWrap}>
                  <FiUser className={styles.inputIcon} aria-hidden="true" />

                  <input
                    autoComplete="name"
                    id="contact-name"
                    maxLength={80}
                    minLength={2}
                    name="name"
                    placeholder="e.g. Taylor Reed"
                    required
                    type="text"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="contact-email">
                  Email address
                </label>

                <div className={styles.inputWrap}>
                  <FiMail className={styles.inputIcon} aria-hidden="true" />

                  <input
                    autoComplete="email"
                    id="contact-email"
                    maxLength={254}
                    name="email"
                    placeholder="you@company.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div className={`${styles.field} ${styles.fieldFull}`}>
                <label className={styles.fieldLabel} htmlFor="contact-project">
                  What can I help with?
                </label>

                <div className={styles.inputWrap}>
                  <FiEdit3 className={styles.textareaIcon} aria-hidden="true" />

                  <textarea
                    id="contact-project"
                    maxLength={5000}
                    minLength={10}
                    name="message"
                    placeholder="A short outline of the project, goal and timeline..."
                    required
                    rows={6}
                  />
                </div>
              </div>
            </div>

            {turnstileSiteKey ? (
              <div className={styles.turnstile}>
                <Turnstile
                  key={turnstileSize}
                  ref={turnstileRef}
                  onError={() => {
                    if (!submissionInFlightRef.current) {
                      setFormStatus("error");
                      setFormMessage(
                        "Security verification is temporarily unavailable.",
                      );
                    }
                  }}
                  onExpire={() => {
                    if (!submissionInFlightRef.current) {
                      setFormStatus("error");
                      setFormMessage(
                        "Security verification expired. Please try again.",
                      );
                    }
                  }}
                  onSuccess={() => {
                    if (
                      !submissionInFlightRef.current &&
                      formStatus === "error" &&
                      formMessage.startsWith("Security verification")
                    ) {
                      setFormStatus("idle");
                      setFormMessage("");
                    }
                  }}
                  options={{
                    refreshExpired: "auto",
                    refreshTimeout: "auto",
                    size: turnstileSize,
                  }}
                  siteKey={turnstileSiteKey}
                />
              </div>
            ) : (
              <p className={styles.securityNotice} role="alert">
                Security verification is temporarily unavailable.
              </p>
            )}

            <div className={styles.formFooter}>
              <div className={styles.formNote}>
                <FiLock aria-hidden="true" />

                <p aria-live="polite">
                  {formMessage ||
                    "Your message is processed so I can respond to your inquiry."}
                </p>
              </div>

              <Button
                disabled={isSubmitting || !turnstileSiteKey}
                type="submit"
                variant="warm"
              >
                {isSubmitting ? "Sending..." : "Send inquiry"}
              </Button>
            </div>
          </form>

          <nav className={styles.links} aria-label="Professional profile links">
            {contactLinks.slice(0, 2).map((link) =>
              link.href ? (
                <a
                  className={styles.socialLink}
                  href={link.href}
                  key={link.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className={styles.socialIcon} aria-hidden="true">
                    <SocialIcon label={link.label} />
                  </span>

                  <span className={styles.socialContent}>
                    <small className={`${styles.socialKicker} type-tag`}>
                      Connect on
                    </small>
                    <strong className="type-ui-strong">{link.label}</strong>
                  </span>
                </a>
              ) : (
                <span className={styles.socialLink} key={link.label}>
                  <span className={styles.socialIcon} aria-hidden="true">
                    <SocialIcon label={link.label} />
                  </span>

                  <span className={styles.socialContent}>
                    <small className={`${styles.socialKicker} type-tag`}>
                      Connect on
                    </small>
                    <strong className="type-ui-strong">{link.label}</strong>
                  </span>
                </span>
              ),
            )}
          </nav>
        </div>
      </div>
    </section>
  );
}
