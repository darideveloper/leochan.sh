# Proposal: Apply Branding Logo Across Site

## Problem Statement
The current portfolio uses generic placeholder logos or no branding at all in key areas (header, footer, favicon, metadata). A professional logo (`@public/logo-leochan.png`) exists but is not integrated, leading to a lack of visual identity.

## Proposed Solution
Integrate the `logo-leochan.png` branding across the entire site to establish a consistent professional identity. This includes:
- Keeping the existing favicon at `/favicon.png`.
- Updating OpenGraph and social sharing metadata.
- Adding the logo to the main navigation (header).
- Adding the logo to the footer.
- Updating structured data (JSON-LD).

## Scope
- `src/layouts/Layout.astro`: Favicon, OG tags, Schema.org.
- `src/components/nav.astro`: Header logo placement.
- `src/components/footer.astro`: Footer logo placement.
- `public/`: (Optional) Optimization or conversion of the logo if needed for specific formats (e.g., small favicon).

## Expected Outcomes
- Improved brand recognition and professional appearance.
- Consistent visual identity across browser tabs, social shares, and on-page content.
- Better SEO and structured data compliance.
