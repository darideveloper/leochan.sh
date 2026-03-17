# Proposal: Fix Heading Hierarchy & Section Numbering

## Summary
The current heading structure across `leochan.sh` is inconsistent, causing SEO and accessibility issues. The homepage has multiple `<h1>` tags, and the dedicated `/cv` page has none. Section headers are inconsistently numbered and formatted, failing to reflect the actual navigation flow. This change will normalize heading tags, standardize the section header pattern, and ensure sequential renumbering.

## Motivation
- **SEO & Accessibility:** A single, clear `<h1>` per page is critical for search engines and assistive technology.
- **Visual Consistency:** Standardizing the header pattern across all sections reinforces the "Unix Terminal" aesthetic.
- **Logical Structure:** Sequential numbering that matches the visual flow (`Home`, `CV`, `Projects`, `Contact`) provides a more coherent user experience.

## Capabilities
- **Heading Tag Normalization:** Use a single `<h1>` for the primary page title and appropriate heading levels for sub-sections.
- **Dynamic CV Header:** Adapt the CV header level based on its context (homepage section vs. full page).
- **Sequential Section Numbering:** Assign logical, sequential numbers (`[01]` through `[04]`) to main site sections.

## Constraints
- **Styling Preservation:** Changes to heading tags MUST NOT alter their visual appearance (e.g., font size, weight, color).
- **Component Reusability:** The `CV.astro` component must continue to serve both the homepage and the `/cv` page seamlessly.
