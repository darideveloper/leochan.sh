# Tasks: Update Typography to VCR OSD MONO

## Phase 1: Setup & Font Installation
- [x] Font `VCR_OSD_MONO.ttf` is already in `public/fonts/`.
- [x] Verify font file accessibility via local dev server.

## Phase 2: Global Configuration
- [x] Add `@font-face` for 'VCR OSD MONO' using `/fonts/VCR_OSD_MONO.ttf` in `src/layouts/Layout.astro`.
- [x] Add `<link rel="preload">` in `Layout.astro` for the new font.
- [x] Update Tailwind configuration (`tailwind.config.mjs`) to include the `vcr` font family.

## Phase 3: Style Application
- [x] Add global CSS rule for `h1, h2, h3, h4, h5, h6` in `Layout.astro` to apply the 'VCR OSD MONO' font.

## Phase 4: Validation
- [x] Audit home page headings (Astro).
- [x] Audit project page headings (Astro).
- [x] Audit skills section headings (React).
- [x] Verify font loading in browser dev tools (Network tab).
- [x] Confirm no significant layout shifts (CLS check).
