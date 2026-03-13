# Proposal: Translate Portfolio to French

## Why
The user wants to localize the portfolio for a French-speaking audience. This change updates all visible text from English to French across all components and page metadata to ensure a consistent user experience.

## What Changes
- All visible text on the website is accurately translated into French.
- SEO metadata (title, description, Open Graph tags) is updated to French.
- The `lang` attribute in the main layout is updated to `fr`.
- Accessibility (aria-labels) is updated to French.
- The visual design remains intact (no layout breakage due to text length changes).

## Scope
- `src/layouts/Layout.astro`: Metadata and `lang` attribute.
- `src/components/nav.astro`: Navigation labels.
- `src/components/home.astro`: Hero section content.
- `src/components/projects.astro`: Section headers, project statuses, and "more" button.
- `src/components/contact.astro`: Section headers, location, form placeholders, and button.
- `src/React/SkillsList.tsx`: Section header and skill categories/descriptions.
- `src/components/footer.astro`: "Built with", copyright notice, and other footer text.
- `src/components/logoWall.astro`: Tech names (mostly universal, but labels like "eager"/"lazy" are dev-only).

## Vague Details & Risks
- **Text Length:** French translations are often longer than English. Some UI elements (like navigation or project cards) might need minor padding/gap adjustments if text overflows.
- **Specific Terminology:** Some technical terms (e.g., "Frontend", "Single Page Applications") are often kept in English or have specific French equivalents (e.g., "Applications à page unique"). I will use standard French tech industry terms.
- **Spotify Embed:** The Spotify embed `locale=en_US` should be updated to `locale=fr_FR` if supported.
- **Formspree:** The contact form submission (Formspree) handles data, but the success message in the component should be translated.

## Relationships
- This change modifies existing UI components.
- No new features or architectural changes are introduced.
- This is a purely content-based change.
