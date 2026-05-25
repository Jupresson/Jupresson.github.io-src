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

## Automatic deployment and sync to jupresson.github.io

This repository is the source for the site. The compiled `dist/` output is automatically synced to the separate `Jupresson/jupresson.github.io` repository by a GitHub Actions workflow.

How it works:

- The workflow runs on pushes to `main` in this repo.
- It installs dependencies and runs `npm run build` to produce `dist/`.
- The workflow checks out the target `jupresson.github.io` repo (using an SSH deploy key), copies `dist/` into that repo, then commits and pushes the update so GitHub Pages serves the generated site.

Required setup (one-time):

1. Create an SSH key pair on your machine (recommended `ed25519`):

```powershell
ssh-keygen -t ed25519 -C "deploy@jupresson" -f ./.github/deploy_key -N ""
```

2. Add the **public** key (the `.pub` file) as a Deploy key in the target repository `Jupresson/jupresson.github.io` and enable write access.

3. Add the **private** key contents as a repository secret in this repo named `PAGES_DEPLOY_KEY` (the workflow expects that exact secret name).

4. If the workflow uses known hosts verification, ensure the Actions runner can reach `github.com` (usually fine). If the workflow requires a specific branch in the target repo, confirm the workflow settings and target branch.

Notes and troubleshooting:

- If the action fails with SSH errors, verify the private key in the secret matches the public key added to the target repo and that write access is enabled for the deploy key.
- Check the workflow run logs in Actions for the exact `scp`/`git` error messages.
- If you prefer Personal Access Tokens instead of an SSH deploy key, you can adapt the workflow, but be careful with token scopes and repository access.
- If you change the `site` or `base` value in `astro.config.mjs`, ensure the target repo and Pages settings match the public URL.

What the workflow updates:

- Copies the built `dist/` site into the target repository and pushes a commit with the generated files.
- The target repo is the one that GitHub Pages will serve (no manual copy required after initial setup).

Want me to verify or modify the workflow file itself? I can inspect the `.github/workflows` files and update instructions or the workflow to match your preferred branch or target settings.

## Editing content

- Home page, project content, and locale-specific text live in `src/content/siteContent.ts`.
- Path and locale helpers live in `src/i18n/site.ts`.
- Shared layout and navigation live in `src/layouts/Layout.astro` and `src/components/Header.astro`.
- The read-more behavior comes from `public/ReadMoreToggle.js`.

## Notes

- Some content includes HTML directly in the content data, so edits should be made carefully.
- Project images, CVs, and other static assets live in `public/`.
- If you deploy this as a repo-based GitHub Pages site, double-check the `base` setting in `astro.config.mjs`.