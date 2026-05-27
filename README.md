# Jupresson Portfolio

Personal portfolio and project website for Jupresson, built with Astro and published as a static site in English and Finnish.

Live site: https://Jupresson.github.io/

## What it is

This repo is the source for the portfolio. It generates a homepage, a project list, and individual project pages from shared content data instead of hand-writing every page.

The site is designed to help a visitor understand the work quickly:

- bilingual navigation and content in English and Finnish
- featured projects with dedicated detail pages
- expandable long-form sections for readable project and bio text
- CV downloads and social/contact links from the home page
- static assets for project images, icons, and documents

## Demo

The deployed site is the best demo: https://Jupresson.github.io/

If you want a quick visual reference, the repo also includes the profile image and project artwork used on the site.

## Tech Stack

- Astro 6
- TypeScript
- Static site generation
- GitHub Pages deployment
- A small amount of client-side JavaScript for theme switching and the read-more toggle

## How It Works

The routing and content flow are intentionally simple:

- `src/content/siteContent.ts` stores the page text, project data, and locale-specific copy.
- `src/pages/[...route].astro` turns the content into all static routes.
- `src/i18n/site.ts` handles locale detection and localized path generation.
- `src/layouts/Layout.astro` applies the shared shell, metadata, and navigation.
- `public/ReadMoreToggle.js` powers the expandable text sections.

Adding or updating a project usually means editing the content data and dropping in a new image under `public/` if needed.

## Development

Install dependencies:

```sh
npm install
```

Run the local dev server:

```sh
npm run dev
```

Build the production site:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Editing Content

- Home page, project content, and locale-specific text live in `src/content/siteContent.ts`.
- Path and locale helpers live in `src/i18n/site.ts`.
- Shared layout and navigation live in `src/layouts/Layout.astro` and `src/components/Header.astro`.
- The read-more behavior comes from `public/ReadMoreToggle.js`.

## Build And Deploy


### Creating the PAGES_DEPLOY_KEY (Windows 11)

To enable deployment, you need to create and configure a deploy key:

1. **Generate a new SSH key (windous 11):**

	Open PowerShell and run:

	```powershell
	ssh-keygen -t ed25519 -C "github-actions deploy key" -f "$env:USERPROFILE\.ssh\pages_deploy_key"
	```

	(Press Enter for passphrase prompts to leave empty.)

2. **Add the public key to your target repository:**

	- Go to your target repo (e.g., `Jupresson/jupresson.github.io`) on GitHub.
	- Settings → Deploy keys → Add deploy key.
	- Paste the contents of `%USERPROFILE%\.ssh\pages_deploy_key.pub`.
	- Give it a name (e.g., "GitHub Actions Deploy Key").
	- Check "Allow write access".
	- Save.

3. **Add the private key as a secret in your source repository:**

	- Go to your source repo (e.g., `Jupresson.github.io-src`) on GitHub.
	- Settings → Secrets and variables → Actions → New repository secret.
	- Name: `PAGES_DEPLOY_KEY`
	- Value: Paste the contents of `%USERPROFILE%\.ssh\pages_deploy_key` (the private key, not `.pub`).
	- Save.

Your workflow will now be able to deploy using this key.

---

GitHub Actions handles the build and publish flow.

- The workflow runs on pushes to `main` and can also be started manually.
- It installs dependencies with `npm ci`.
- It runs `npm run build` to produce the static `dist/` folder.
- It uses the `PAGES_DEPLOY_KEY` secret to authenticate to the target repository.
- It clones `Jupresson/jupresson.github.io`, copies the fresh `dist/` output into it, and pushes the updated static site.

This means the source repo stays focused on the Astro app, while the separate GitHub Pages repo serves the generated files.

## Project Structure

```text
src/
├── components/        # Header, footer, project cards, and link sections
├── content/           # Site text and route data
├── css/               # Site styling
├── i18n/              # Helpers for locales, paths, and template strings
├── layouts/           # Shared layout that adds the header and footer
├── pages/             # Catch-all routing and static pages
└── templates/         # Home, project list, and project detail templates

public/
├── FacePicture.webp
├── ReadMoreToggle.js
├── LasseJaara_CV_EN.pdf
└── LasseJaara_CV_FI.pdf
```

## Notes

- Some content includes HTML directly in the data file, so edits should be made carefully.
- If you change `astro.config.mjs`, keep the `site` and `base` values aligned with the published GitHub Pages URL.
- There is no separate test suite in this repo yet; the main quality check is `npm run build` plus the GitHub Actions deployment workflow.

## Next todo


- Add source link to each project card
- Clean up code (language, site structure, card creation) By refactoring with the grill-with-docs andimprove-codebase-architecture agent skill by mattpocock
- Add a primary color to main actions/buttons
- Done 1/3 Improve text for clarity and tone
- Fix email button text scaling on mobile
- Fix header layout on mobile (all buttons should stay on one line; currently only Home and Project do)