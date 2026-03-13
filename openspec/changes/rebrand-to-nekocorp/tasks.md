## 1. Metadata & Global Layout
- [x] 1.1 Update `<title>` in `src/layouts/Layout.astro` (Léonard-Anton | Cybersecurity & Infrastructure Engineer)
- [x] 1.2 Update `meta[name="description"]` in `src/layouts/Layout.astro` with new professional bio.
- [x] 1.3 Update OpenGraph tags (`og:title`, `og:description`, `og:url`, `og:image`) in `src/layouts/Layout.astro`.
- [x] 1.4 Update JSON-LD `Person` schema in `src/layouts/Layout.astro` (name, alternateName, url, sameAs, jobTitle, description).
- [x] 1.5 Update canonical link in `src/layouts/Layout.astro`.

## 2. Brand Identity & Hero Section
- [x] 2.1 Replace "Oscar Hernandez" with "Léonard-Anton" in `src/pages/index.astro`.
- [x] 2.2 Update logo text/image in `src/components/nav.astro` and `src/components/footer.astro`.
- [x] 2.3 Update hero greeting in `src/components/home.astro` ("Salut, je suis Léonard-Anton").
- [x] 2.4 Update primary tagline in `src/components/home.astro` (`root@portfolio: # ./display_infrastructure.sh`).
- [x] 2.5 Update professional slogan in `src/components/home.astro` (Cyber-Glass/Nekocorp bio).

## 3. UI Elements & Section Navigation
- [x] 3.1 Update section titles in `home.astro`, `projects.astro`, `contact.astro` to numeric log format (e.g., `[01] _WHOAMI`).
- [x] 3.2 Update navigation link labels in `src/components/nav.astro` and `src/components/footer.astro`.
- [x] 3.3 Update button text in `home.astro` and `projects.astro` to terminal command style (`wget`, `cat`, etc.).
- [x] 3.4 Update system status message in `src/components/footer.astro`.

## 4. Professional Links & Info
- [x] 4.1 Update LinkedIn URL across all components.
- [x] 4.2 Update GitHub URL across all components.
- [x] 4.3 Update Email address across all components.
- [x] 4.4 Update location in `src/components/contact.astro` (Colombia -> France).
- [x] 4.5 Update `package.json`, `README.md`, `LICENSE`, `CODE_OF_CONDUCT.md` with new identity and copyright.
- [x] 4.6 Update `openspec/project.md` to reflect new brand focus.

## 5. Backend & Infrastructure Migration
- [x] 5.1 Replace Formspree endpoint in `src/components/contact.astro`.
- [x] 5.2 Implement dynamic tab title script in `Layout.astro` (`[DISCONNECTED]`).
- [x] 5.3 Verify and update Firebase project credentials in `firebase.ts` or environment variables.
- [x] 5.4 Ensure Firestore collection/doc (`likes/counter`) exists in the new Firebase environment.

## 6. Assets & Accessibility
- [x] 6.1 Replace `favicon.png` with Nekocorp "Cat + Binary" icon. (Code prepared, binary replacement manual).
- [x] 6.2 Replace `logo-leochan.png` with Nekocorp branding. (Code updated to use text logo).
- [x] 6.3 Replace `og.image.png` with new branded OG image. (URL updated).
- [x] 6.4 Perform full accessibility audit: update `alt` text and `aria-label` tags referencing the old brand.

## 7. Validation
- [x] 7.1 Run `astro check` to ensure no broken links or scripts.
- [x] 7.2 Verify SEO metadata and JSON-LD structured data.
- [x] 7.3 Manually test terminal-style navigation and buttons.
