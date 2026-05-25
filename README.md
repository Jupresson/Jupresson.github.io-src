# Jupresson Portfolio

Personal portfolio and project website for Jupresson. The site is built with Astro and rendered as a static website that works in both English and Finnish.

## What this repo does

The site provides a home page, a project listing, and individual project pages. It uses a content-first structure: pages are generated from the data in `src/content/siteContent.ts`, and `src/pages/[...route].astro` selects the correct page based on the route and locale.

Key features:

- bilingual UI: `/` and `/fi`
- project listing and project detail pages
- light and dark theme switching
- expandable “read more” sections for long text blocks
- CV download directly from the home page
- GitHub Pages deployment (`site` is set to `https://Jupresson.github.io/`)

## Structure

```text
src/
├── components/        # Header, footer, project cards, and link sections
├── content/           # Site text and route data
├── css/               # Site styling
├── i18n/              # Helpers for locales, paths, and template strings
├── layouts/           # Shared Layout that adds the header and footer
├── pages/             # Catch-all routing and static pages
└── templates/         # Home, project list, and project detail templates

public/
├── FacePicture.webp
├── ReadMoreToggle.js
├── LasseJaara_CV_EN.pdf
└── LasseJaara_CV_FI.pdf
```

## How it works

`src/pages/[...route].astro` generates all routes from the `pageEntries` list. The same content is available in both languages, and `localizePath()` adds the `/fi` prefix when needed. `Layout.astro` detects the current locale from the URL, sets the page title, loads the theme initialization logic, and renders the shared header and footer.

Project cards and project detail pages reuse the same content structures, so adding a new project usually means adding a new entry in `siteContent.ts` and, if needed, a new image in `public/`.

## Technology

- Astro 6
- TypeScript
- Static site generation
- A small amount of inline JavaScript for theme switching and read-more behavior

## Development

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Build the production site:

```sh
npm run build
```

Preview the build locally:

```sh
npm run preview
```

## Automatic deployment

This repo is the source repo. The generated site is meant to be pushed automatically to the separate `jupresson.github.io` repository.

The included GitHub Actions workflow expects an SSH private key secret named `PAGES_DEPLOY_KEY` and a matching deploy key added to `Jupresson/jupresson.github.io` with write access.

After you add that secret, every push to `main` will:

1. install dependencies
2. run `npm run build`
3. copy `dist/` into the `jupresson.github.io` repository
4. commit and push the generated files there

To finish the setup, add the public half of the key in the target repo under Settings > Deploy keys, and enable write access.

## Editing content

- Home page, project content, and locale-specific text live in `src/content/siteContent.ts`.
- Path and locale helpers live in `src/i18n/site.ts`.
- Shared layout and navigation live in `src/layouts/Layout.astro` and `src/components/Header.astro`.
- The read-more behavior comes from `public/ReadMoreToggle.js`.

## Notes

- Some content includes HTML directly in the content data, so edits should be made carefully.
- Project images, CVs, and other static assets live in `public/`.
- If you deploy this as a repo-based GitHub Pages site, double-check the `base` setting in `astro.config.mjs`.