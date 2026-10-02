# [YOUR COMPANY NAME] — Rebar Detailing & BIM Services Website

A production-ready marketing website for a rebar / reinforcement detailing and BIM services company. Built as a static frontend (React + Vite + TypeScript + Tailwind CSS). Page content (services, projects, FAQs, technology, standards) is plain TypeScript data you edit directly in the codebase. Contact-form enquiries are the one thing that gets written to Excel — every submission is saved as a row and can be downloaded as an `.xlsx` workbook.

## Technology stack

- **React 19 + TypeScript** — component architecture
- **Vite** — build tooling, dev server
- **Tailwind CSS v4** — styling, via `@tailwindcss/vite`
- **react-router-dom** — client-side routing (`/` and `/admin`)
- **ExcelJS** — used only to build and download the saved contact enquiries as `.xlsx` (chosen over SheetJS/`xlsx` specifically because this site never parses untrusted spreadsheet uploads, so ExcelJS's write-only API avoids SheetJS's open parsing-related CVEs)
- **lucide-react** — icon set

No backend, no database, no PHP/WordPress/Apache — it builds to static files (`dist/`) that run on any static host.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Pages

This is a multi-page site (not a single scrolling page) — each area of content has its own route:

| Route          | Page             | Contains |
|-----------------|------------------|----------|
| `/`             | Home             | Hero image slider (3 slides), capability strip, "why it matters" overview, quick links out to every other page, final CTA |
| `/about`        | About            | Company/approach, quality-controlled workflow |
| `/services`     | Services         | Service cards, deliverables |
| `/projects`     | Projects         | Project types, project portfolio |
| `/technology`   | Technology       | Software list, **live 3D model preview**, supported standards |
| `/process`      | Process          | Seven-step workflow, quality checklist |
| `/resources`    | Resources        | FAQ |
| `/contact`      | Contact          | Enquiry form |
| `/admin`        | Enquiries        | Local backup of saved enquiries + Excel export |

Every page shares the same `Navbar` and `Footer`; most end with a `CTA` section linking to `/contact`.

## Project structure

```
src/
  components/       one folder per section (Hero, Services, Projects, ...)
    shared/
      PageHeader.tsx        dark banner used at the top of every sub-page
      RotatingRebarModel.tsx  the CSS 3D rotating reinforcement cage
    Technology/
      Model3DShowcase.tsx    video-player-style frame around the rotating
                              model, with a play/pause control, on /technology
  pages/            one folder per route (Home, AboutPage, ServicesPage,
                     ProjectsPage, TechnologyPage, ProcessPage,
                     ResourcesPage, ContactPage, Admin, NotFound)
  services/
    contactService.ts      handles a contact-form submission end to end
    submissionsService.ts  saves enquiries locally + exports them to .xlsx
  types/            shared TypeScript interfaces
  data/
    content.ts      site content: services, projects, project types,
                     technology, standards, FAQ — edit this file directly
  config/
    siteConfig.ts    company name, tagline, contact details, brand colors

google-apps-script/
  Code.gs            paste into a Google Sheet's Apps Script editor to
                      receive enquiries as new rows in real time
```

## Home page slider

The Home hero is a 3-slide sliding image banner. Everything about it is controlled from **`src/data/heroSlides.ts`**: background image, small label, headline, paragraph, and button text/links for each slide. Images live in `public/images/slides/` — replace `slide-1.png`, `slide-2.svg`, `slide-3.svg` with your own (1920×1080+, landscape, JPG/WebP, under ~400 KB) and update the filenames in `heroSlides.ts`. The slider component itself is `src/components/Hero/HeroSlider.tsx`; autoplay speed is `HERO_AUTOPLAY_MS` in the same data file.

## The rotating 3D model

`/technology` features a continuously rotating reinforcement cage — built as a genuine CSS 3D object (`RotatingRebarModel.tsx`: vertical bars and horizontal tie rings placed in 3D space with `perspective`/`rotateY`/`translateZ`, spun on a CSS `@keyframes` loop), not a video file, an image slider, or a heavy 3D library. This keeps it dependency-free and fast.

On `/technology`, it's wrapped in `Model3DShowcase.tsx` — a video-player-styled frame (HUD labels, a play/pause control) standing in for embedded video, since no licensed 3D/video footage is available to source into the project. If you'd rather use a real video there later, swap the `<RotatingRebarModel />` for a `<video>` element with your own `.mp4`/`.webm` file.

**Reduced motion:** the site's global `prefers-reduced-motion` handling (in `index.css`) automatically collapses the rotation to a single, effectively static frame for anyone with that OS/browser setting — no separate logic needed per component.

## Editing site content

All page content lives in **`src/data/content.ts`** as plain TypeScript arrays — `services`, `projectTypes`, `projects`, `technology`, `standards`, `faqItems`, `team`. To add, remove, or edit a service, project, FAQ, etc., open that file and edit the array directly (each item is a small object — copy an existing entry as a template). No spreadsheet, build step, or data-loading layer is involved; it's just imported straight into the components that render it (`Services.tsx`, `Projects.tsx`, `Technology.tsx`, `Standards.tsx`, `FAQ.tsx`, `ProjectTypes.tsx`).

Company-wide details (name, tagline, email, phone, address, LinkedIn, stats) live in **`src/config/siteConfig.ts`**.

## Contact form → Excel

When a visitor submits the contact form:

1. The submission is saved immediately via `submissionsService.ts`, which keeps a running list of enquiries in the browser's `localStorage` (so it survives page reloads) — this is effectively an in-browser Excel-backed inbox.
2. From the contact form's confirmation message, or from **`/admin`** ("Enquiries"), you can click **Download all as Excel** at any time to export every saved submission to an `.xlsx` workbook (columns: id, submitted date, name, company, email, phone, project type, service, location, message).
3. `/admin` also lists every saved enquiry in a table and lets you clear them once you've exported/actioned them.

### Important limitation of the local copy

This is a static frontend with no server, so there is no central place for a browser to durably write a file on its own. The local copy at `/admin` lives **only in the browser/device that submitted the form** — it is not synced across visitors or devices, and clearing browser data clears it. Treat it as a backup, not your primary inbox, once you've set up real-time sync below.

### Google Sheets integration (recommended)

This gets every enquiry, from every visitor, landing as a new row in a shared Google Sheet the instant it's submitted — no downloads, no merging files.

1. Create a new Google Sheet (any name).
2. In the Sheet, open **Extensions → Apps Script**.
3. Delete the placeholder code and paste in the contents of `google-apps-script/Code.gs` from this repo.
4. Click **Deploy → New deployment**. Select type **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**, authorize the script when prompted, and copy the **Web app URL** it gives you (ends in `/exec`).
6. Set that URL as `VITE_FORM_ENDPOINT` in your `.env` (or in your host's environment variables):
   ```bash
   cp .env.example .env
   # then edit .env:
   VITE_FORM_ENDPOINT=https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXX/exec
   ```
7. Rebuild/redeploy the site. Submit a test enquiry through the contact form and confirm a new row appears in the Sheet (an "Enquiries" tab is created automatically on first submission, with headers).

**Note on confirmation:** Google Apps Script Web Apps don't return CORS headers a browser can read, so the site sends the request in `no-cors` mode and can't confirm the row was accepted from the response alone. In practice, if the request goes out, the row lands in the Sheet. If you need a guaranteed success/failure signal in the UI, point `VITE_FORM_ENDPOINT` at a CORS-friendly service instead (Formspree, Web3Forms, a Supabase Edge Function) — the same field works with any of those.

### Other endpoint options

`VITE_FORM_ENDPOINT` also works with any other JSON-accepting POST endpoint:

- Formspree
- Web3Forms
- A Supabase Edge Function
- Netlify Forms (wire up Netlify's own form-detection instead, or forward via a Netlify Function)

Without `VITE_FORM_ENDPOINT` set at all, the form still works fully — it just tells the visitor plainly that the enquiry was saved locally rather than pretending it was sent somewhere it wasn't.

## Environment variables

| Variable             | Purpose                                                        |
|-----------------------|------------------------------------------------------------------|
| `VITE_FORM_ENDPOINT`  | Optional. If set, each enquiry is also POSTed here as JSON.      |

Never commit `.env` — only `.env.example` is tracked (see `.gitignore`).

## Deployment

### Vercel

1. Push this repository to GitHub.
2. In Vercel: **New Project → Import** your repo.
3. Framework preset: **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add `VITE_FORM_ENDPOINT` under Environment Variables if you have one.
7. Deploy. `vercel.json` already includes an SPA rewrite so client-side routes (like `/admin`) don't 404 on refresh.

### Netlify

1. Push this repository to GitHub.
2. In Netlify: **Add new site → Import an existing project**.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add `VITE_FORM_ENDPOINT` under Site settings → Environment variables if needed.
6. Deploy. `netlify.toml` and `public/_redirects` already configure the SPA fallback.

## Customizing the brand

Edit `src/config/siteConfig.ts` for the company name, tagline, email, phone, address, and LinkedIn URL — it's the single source of truth used across the Navbar, Footer, and Contact section.

### Colors

Design tokens live in `src/index.css` under `@theme`:

```css
--color-paper: #F5F5F2;   /* background */
--color-ink: #111315;     /* primary dark */
--color-ink-soft: #1B1F22;/* secondary dark */
--color-steel: #687078;   /* body/secondary text */
--color-accent: #F28C28;  /* accent — used sparingly */
```

Change these values and every component using `bg-accent`, `text-ink`, etc. updates automatically.

### Logo

Replace `public/images/favicon.svg` and update the short mark in `Navbar.tsx` (`siteConfig.shortName`) with your actual logo treatment.

## Design language

The UI uses a "digital rebar" visual system — hairline technical grids, dimension lines, drawing-sheet-style section indices (01, 02, 03…), bar-mark callouts, and corner registration marks — instead of generic rounded SaaS cards. Typography: **Space Grotesk** for display headings, **Inter** for body copy, **IBM Plex Mono** for technical labels, bar marks, and data.

## Testing checklist before you go live

- [ ] `npm run build` completes with no TypeScript errors
- [ ] Replace every `[PLACEHOLDER]` in `siteConfig.ts` and `src/data/content.ts` with real data
- [ ] Decide on `VITE_FORM_ENDPOINT` — set it if you need enquiries centralized across devices
- [ ] Replace `public/images/favicon.svg` and OG image
- [ ] Update `index.html` canonical URL, `robots.txt`, and `sitemap.xml` with your real domain
- [ ] Review `public/privacy.html` and `public/terms.html` placeholders
- [ ] Test on mobile widths (360px–430px) and desktop (1280px–1440px)
- [ ] Confirm keyboard navigation and focus states throughout
- [ ] Submit a test enquiry and confirm it appears at `/admin` and exports correctly to Excel

## License / content disclaimer

All company details, statistics, project names, and team information in this codebase are **placeholders**. No real client names, project counts, certifications, or testimonials have been invented — replace them with verified information before publishing.
