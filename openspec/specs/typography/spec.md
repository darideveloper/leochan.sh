# typography Specification

## Purpose
TBD - created by archiving change update-typography-vcr-osd. Update Purpose after archive.
## Requirements
### Requirement: Typography System - VCR OSD MONO Headings
The portfolio website SHALL use 'VCR OSD MONO' for all semantic heading elements to ensure a consistent retro-digital aesthetic.

#### Scenario: Font Installation and Registration
- **Given** the `VCR_OSD_MONO.ttf` font file is already in `public/fonts/`.
- **When** the developer registers the font via `@font-face` in the global layout.
- **Then** the font family should be available for use across the website.

#### Scenario: Global Heading Style Application
- **Given** the global layout contains a CSS rule targeting `h1` through `h6`.
- **When** the `font-family` property is set to "VCR OSD MONO".
- **Then** all headings in any Astro or React component should automatically adopt the new font.

#### Scenario: Performance Optimization via Preload
- **Given** the `Layout.astro` file.
- **When** a `<link rel="preload">` tag for the `/fonts/VCR_OSD_MONO.ttf` file is added to the `<head>`.
- **Then** the browser should prioritize loading the font, minimizing visual layout shifts.

#### Scenario: Tailwind Accessibility
- **Given** the `tailwind.config.mjs` file.
- **When** a `vcr` font family is added to the theme extensions.
- **Then** developers should be able to apply the font manually using the `font-vcr` utility class.

