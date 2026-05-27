# Jupresson Portfolio
A solo-designed and developed **personal portfolio website** built with Astro, showcasing projects and skills across three iterative versions with full two langue support.

<table><tr>
<td>
<table>
  <tr><td><b>Type</b></td><td>Static Website</td></tr>
  <tr><td><b>Framework</b></td><td>Astro 6</td></tr>
  <tr><td><b>Languages</b></td><td>HTML, CSS, JavaScript & TypeScript</td></tr>
  <tr><td><b>Timeline</b></td><td>X X, 2025 – X X, 2026</td></tr>
  <tr><td><b>Status</b></td><td>Release · Solo</td></tr>
  <tr><td><b>Role</b></td><td>Designer & Developer</td></tr>
  <tr><td><b>Deployment</b></td><td>GitHub Pages</td></tr>
</table>
</td>
<td align="right">
  <img src="https://jupresson.github.io/ProjectPortfolioWebsiteImageSmall.webp" width="500" alt="Jupresson Portfolio"><br/>
  <a href="https://jupresson.github.io/">Live site →</a>
</td>
</tr></table>

---

## Technical Highlights

**Architecture**
- Content-driven routing: all page text, project data, and locale copy live in `src/content/siteContent.ts`, with a single catch-all route generating every static page from it.
- Reusable Astro components for header, footer, project cards, and link sections — eliminating repeated markup across pages.
- Locale detection and bilingual path generation handled through `src/i18n/site.ts`, supporting full English and Finnish navigation and content.

**Frontend**
- Fully responsive layout scaling cleanly across mobile, tablet, and desktop — full mobile support was a primary design goal.
- Lightweight client-side JavaScript for dark/light theme switching and expandable read-more sections (`public/ReadMoreToggle.js`), keeping the rest of the site purely static.

**Build & Deploy**
- GitHub Actions workflow triggered on pushes to `main`: installs with `npm ci`, builds to `dist/`, then pushes the output to a separate GitHub Pages repo using a deploy key.
- Source repo stays focused on the Astro app; the Pages repo serves only the generated static files.

---

## Project Evolution

The site went through three versions before reaching its current form:

1. **v1** — Built from scratch in plain HTML and CSS. Became too messy to scale cleanly.
2. **v2** — Rebuilt with a cleaner template, but the colors and layout were too visually heavy.
3. **v3 (current)** — Rebuilt with Astro for reusable components, proper i18n, and a responsive layout that works across all screen sizes.

Each rebuild directly informed better decisions about maintainability and scalability from the start.

---

## How It Works

- `src/content/siteContent.ts` stores the page text, project data, and locale-specific copy.
- `src/pages/[...route].astro` turns the content into all static routes.
- `src/i18n/site.ts` handles locale detection and localized path generation.
- `src/layouts/Layout.astro` applies the shared shell, metadata, and navigation.
- `public/ReadMoreToggle.js` powers the expandable text sections.

Adding or updating a project usually means editing the content data and dropping in a new image under `public/` if needed.

---

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

---

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

---

## Editing Content

- Home page, project content, and locale-specific text live in `src/content/siteContent.ts`.
- Path and locale helpers live in `src/i18n/site.ts`.
- Shared layout and navigation live in `src/layouts/Layout.astro` and `src/components/Header.astro`.
- The read-more behavior comes from `public/ReadMoreToggle.js`.

---

## Build & Deploy

### Creating the PAGES_DEPLOY_KEY (Windows 11)

1. **Generate a new SSH key:**

   Open PowerShell and run:

```powershell
   ssh-keygen -t ed25519 -C "github-actions deploy key" -f "$env:USERPROFILE\.ssh\pages_deploy_key"
```

   Press Enter for passphrase prompts to leave empty.

2. **Add the public key to your target repository:**
   - Go to your target repo on GitHub → Settings → Deploy keys → Add deploy key.
   - Paste the contents of `%USERPROFILE%\.ssh\pages_deploy_key.pub`.
   - Give it a name (e.g. "GitHub Actions Deploy Key") and check "Allow write access".

3. **Add the private key as a secret in your source repository:**
   - Go to your source repo → Settings → Secrets and variables → Actions → New repository secret.
   - Name: `PAGES_DEPLOY_KEY` — paste the contents of the private key file (not `.pub`).

GitHub Actions then handles the full build and publish flow on every push to `main`: installs via `npm ci`, builds to `dist/`, clones the Pages repo, copies the output in, and pushes.

---

## Notes

- Some content includes HTML directly in the data file, so edits should be made carefully.
- Keep `site` and `base` in `astro.config.mjs` aligned with the published GitHub Pages URL.
- No separate test suite yet — the main quality check is `npm run build` plus the Actions deployment workflow.

---

## Known Issues / Next Steps
- Project timeline start and end dates not yet filled in.
- Source link missing from individual project cards — planned addition.
- Email button text scales incorrectly on mobile.
- Header layout breaks on mobile — all nav buttons should stay on one line.
- Codebase refactor planned: language cleanup, improved site structure, and card creation improvements.
- One of three planned text clarity and tone passes completed.
- Primary color accent for main action buttons still to be added.
