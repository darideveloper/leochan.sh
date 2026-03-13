# Design: Professional Slogan in Hero Section

## Overview
This design covers the placement and styling of the professional slogan in the Hero section of the portfolio, utilizing the newly adopted "VCR OSD MONO" font for alignment with the project's title styling.

## Technical Details

### Component: `src/components/home.astro`
- **Location:** The slogan will be inserted below the existing `flex-col lg:flex-row` div containing the main title and the frontend description.
- **Styling:**
  - **Font Family:** `font-vcr` (Mapped to "VCR OSD MONO").
  - **Color:** `text-[var(--white-icon)]` (standard subtle white for secondary text).
  - **Typography:** `text-md md:text-xl` to ensure it bridges the gap between small mobile text and the large title.
  - **Layout:** `max-w-3xl` and `leading-relaxed` for readability. `mt-6` to provide vertical breathing space from the elements above.
- **Content (French Translation):** 
  "Passionné par les systèmes complexes, de l'infrastructure informatique à l'aviation, je combine expertise technique et normes strictes de sécurité et de procédure."

### Constraints
- Must maintain responsiveness (mobile/tablet/desktop).
- Must use the `font-vcr` Tailwind class as per project conventions for professional technical statements/titles.
- Must follow the project's variable-based theme for colors.
