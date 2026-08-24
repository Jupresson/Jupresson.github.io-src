# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A solo-built personal portfolio website (Astro 6, static site) showcasing game-development projects, with full English/Finnish bilingual support. Deploys to GitHub Pages via a separate target repo.

## Commands

```sh
npm install       # install dependencies
npm run dev        # local dev server
npm run build       # production build to dist/ — this is the primary/only quality check; run it after content or component changes
npm run preview      # preview the production build
```

There is no test suite or linter configured. `npm run build` (which also runs in CI) is the correctness check — it will fail on broken content typing, bad routes, or Astro syntax errors.

## Architecture

**Content-driven, single catch-all route.** All page text, project data, and locale copy live in `src/content/siteContent.ts` (~1100 lines) as a typed `pageEntries` array. `src/pages/[...route].astro` is the only route file — it generates every static page (both locales) by reading `pageEntries`, resolving locale + slug from the URL, and dispatching to one of three page templates (`HomePage`, `ProjectListPage`, `ProjectDetailPage`) based on the content's `kind` discriminant (`"home" | "project-list" | "project-detail"`).

To add or edit a project/page: edit `src/content/siteContent.ts` (add a `PageEntry` with `en`/`fi` content), and drop any new image under `public/`. No route file changes needed.

**i18n (`src/i18n/site.ts`).** Locale is derived purely from the URL path — `/fi` prefix means Finnish, anything else is English (no query params, cookies, or headers). Key functions: `getLocaleFromPathname`, `stripLocaleFromPathname`, `localizePath` (canonical path → locale-prefixed path), `getLanguageSwitchPath` (used by the language toggle in the header), `formatTemplate` (simple `{key}` string interpolation for templated copy, e.g. taglines). All page content types (`HomePageContent`, `ProjectListPageContent`, `ProjectDetailPageContent`) and shared shapes (`ProjectCardData`, `DetailRow`, `SocialLink`) are also defined here.

**Templates vs. components vs. layout.**
- `src/layouts/Layout.astro` — shared HTML shell: metadata (canonical URL, OG/Twitter cards, locale tags, SVG favicon), header, footer.
- `src/templates/` — one Astro component per page `kind` (Home, ProjectList, ProjectDetail), composed from `src/components/` (Header, footer, Project card, links section).
- `src/css/` — one stylesheet per area (base, header, footer, home, links, project, projectpagebase) rather than a single global stylesheet or CSS-in-JS.

**Client-side JS is minimal and file-based**, not bundled Astro islands: `public/ReadMoreToggle.js` powers expandable "read more" sections and is referenced directly from templates/layout. Theme (dark/light) switching is similarly lightweight vanilla JS. Keep new interactivity in this same plain-JS style unless there's a strong reason to introduce a framework/island.

**Some content fields contain raw HTML** (e.g. `introHtml` fields in `siteContent.ts`) — edit these carefully, they are not escaped.

## Deploy

`.github/workflows/build-and-sync.yml` runs on every push to `main`: `npm ci` → `npm run build` → clones the separate GitHub Pages target repo (`Jupresson/jupresson.github.io`) over SSH using the `PAGES_DEPLOY_KEY` deploy-key secret → replaces its contents with `dist/` → commits and pushes. This source repo never serves pages directly. Keep `site`/`base` in `astro.config.mjs` aligned with the published Pages URL if it ever changes.

## Known gaps (from README)

- Some project timeline placeholders still need filling in `siteContent.ts`.
- `siteContent.ts` is intended to eventually be split into per-project files as content grows.
- No automated checks exist yet for locale routing or the build.
