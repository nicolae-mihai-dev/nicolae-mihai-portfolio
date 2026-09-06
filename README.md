# Nicolae Mihai — Developer Portfolio

Personal developer portfolio built with Next.js and TypeScript, focused on web development work, services, technical experience, and contact information.

**Live site:** https://nicolae-mihai-dev.netlify.app

## Overview

The portfolio showcases modern frontend development, CMS implementation, API integrations, and responsive web development.

It is a production-ready Next.js application with a custom design system, reusable components, dynamic service pages, SEO configuration, and a protected contact form.

## Tech Stack

- Next.js
- React
- TypeScript
- CSS Modules
- Zod
- Resend
- Cloudflare Turnstile
- Netlify

## Features

- Responsive portfolio interface
- Reusable component architecture
- Dynamic service pages
- Custom typography and design tokens
- Contact form with server-side validation
- Email delivery through Resend
- Cloudflare Turnstile bot protection
- Honeypot spam protection
- Netlify rate limiting
- SEO metadata, `robots.txt`, and XML sitemap

## Contact Form Architecture

The contact form uses multiple protection layers:

- Client-side validation and submission state handling
- Server-side validation with Zod
- Cloudflare Turnstile verification
- Honeypot bot detection
- Request rate limiting
- Server-side email delivery with Resend

Sensitive environment variables are kept server-side and are not committed to the repository.

## Local Development

Clone the repository:

```bash
git clone https://github.com/nicolae-mihai-dev/nicolae-mihai-portfolio.git
cd nicolae-mihai-portfolio
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file based on `.env.example`:

```env
RESEND_API_KEY=
RESEND_FROM_EMAIL=
CONTACT_TO_EMAIL=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```

`RESEND_FROM_EMAIL` should use a verified Resend sender before production. `CONTACT_TO_EMAIL` is the inbox that receives inquiries.

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run typecheck
npm run lint
npm run build
npm audit
```

## Deployment

The project can be deployed with Netlify and automatically redeployed when changes are pushed to the main branch. Configure the same server-side environment variables in Netlify before deploying.

## Author

Nicolae Mihai

Web Developer focused on React, Next.js, WordPress, HubSpot CMS, responsive implementation, and modern web applications.

Portfolio: https://nicolae-mihai-dev.netlify.app
GitHub: https://github.com/nicolae-mihai-dev
