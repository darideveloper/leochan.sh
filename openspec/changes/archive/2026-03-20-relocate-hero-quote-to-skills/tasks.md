# Tasks: Relocate Hero Quote to Skills Section

## Implementation Tasks

- [x] **1. Refactor `src/components/home.astro` - Hero Section**
    - [x] Remove the quote `div` (including absolute decorative `span` tags) from the Hero section (around lines 48-55).
    - [x] Ensure the remaining hero content remains well-spaced (adjusting `space-y` or margins if needed).
- [x] **2. Refactor `src/components/home.astro` - Skills Section**
    - [x] Locate the `div` containing the logo and "NEKOCORP" text (around lines 166-177).
    - [x] Remove the `img` and `span` branding elements.
    - [x] Insert the quote block removed from the Hero section into this `div`.
    - [x] Adjust the container's classes (`items-center`, `justify-center`) to ensure the quote is well-positioned relative to the `SkillsList`.
- [x] **3. Style Refinement & Responsiveness**
    - [x] Verify vertical spacing on mobile (Skills section).
    - [x] Verify alignment and balance on desktop (Skills section).
    - [x] (Optional) Consider if the decorative quote icons (the large `“` and `”`) need size adjustments for the new location.

## Validation Tasks

- [x] **1. Visual Verification**
    - [x] Confirm quote is gone from Hero.
    - [x] Confirm logo is gone from Skills.
    - [x] Confirm quote is correctly rendered in Skills section.
- [x] **2. Build Verification**
    - [x] Run `npm run build` or equivalent to ensure no build regressions.
- [x] **3. Spec Validation**
    - [x] Run `openspec validate relocate-hero-quote-to-skills --strict`.
