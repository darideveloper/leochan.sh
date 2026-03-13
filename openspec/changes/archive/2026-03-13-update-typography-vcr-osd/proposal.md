# Proposal: Update Typography to VCR OSD MONO

## Why
The project owner wants a specific retro-digital aesthetic for headings and titles. Changing the typography to 'VCR OSD MONO' for these elements will reinforce the interactive, tech-focused, and slightly nostalgic feel of the portfolio.

## What Changes
- Register the 'VCR OSD MONO' font file (`public/fonts/VCR_OSD_MONO.ttf`) via `@font-face` in `src/layouts/Layout.astro`.
- Update global CSS styles in `Layout.astro` to apply the new font to all heading tags (`h1` through `h6`).
- Preload the new font for performance.
- (Optional) Add the font to `tailwind.config.mjs` for manual usage if needed.

## Outcomes
- All `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements across the site will use 'VCR OSD MONO'.
- Other text will continue to use the existing 'Montserrat Variable' for readability.
- The change is applied globally from a single location (`Layout.astro`), ensuring consistency and minimal code duplication.

## Vague Details & Risks
- **Font Availability:** The font is already provided as `public/fonts/VCR_OSD_MONO.ttf`.
- **Text Sizing:** 'VCR OSD MONO' is a monospace font and might occupy different widths compared to Montserrat. Some headings might require minor font-size or tracking (letter-spacing) adjustments to avoid layout shifts.
- **Specific Components:** Some components (like `SkillsList.tsx`) use `h3` tags. These will automatically adopt the new font.

## Relationships
- Modifies `src/layouts/Layout.astro` global styles.
- Complements the existing `Montserrat Variable` font setup.
- Affects all components using semantic HTML heading tags.
