import type { Metadata } from "next";
import { Barlow, Barlow_Semi_Condensed } from "next/font/google";
import { siteInfo } from "@/data/site";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-semi-condensed",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.url),
  title: {
    default: "Nicolae Mihai | Web Developer",
    template: "%s | Nicolae Mihai",
  },
  description:
    "Web Developer portfolio for Nicolae Mihai, focused on React, Next.js, WordPress, HubSpot CMS and production-quality web applications.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nicolae Mihai",
    title: "Nicolae Mihai | Web Developer",
    description:
      "React, Next.js, WordPress and HubSpot development for polished, maintainable web products.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Nicolae Mihai | Web Developer",
    description:
      "React, Next.js, WordPress and HubSpot development for polished, maintainable web products.",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowSemiCondensed.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <a className="skipLink" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
