# Proposal: Relocate Hero Quote to Skills Section

## Why
The goal of this change is to refine the home page layout by removing the prominent quote from the Hero section and relocating it to the Skills section. Simultaneously, the large "NEKOCORP" logo and title currently in the Skills section will be completely removed to create a more balanced and professional UI.

## What Changes
- **UI Refactoring:** Remove the quote block from the Hero section in `src/components/home.astro`.
- **UI Removal:** Delete the large logo image and "NEKOCORP" text from the right column of the Skills section in `src/components/home.astro`.
- **UI Relocation:** Place the quote block (including decorative icons) into the right column of the Skills section where the logo was previously located.
- **Styling & Alignment:** Ensure the relocated quote is visually balanced, responsive, and maintains the "Cyber-Glass" aesthetic.

## Assumptions
- The "NEKOCORP" branding remains present in other areas (Navigation, Footer, Meta tags) as per existing specs.
- The removal of the large logo in the Skills section is intentional to reduce visual clutter and prioritize the professional slogan.

## Spec Deltas
- `openspec/specs/slogan/spec.md`: Update the positioning requirement for the professional slogan.
- `openspec/specs/branding/spec.md`: (Optional/Implicit) The requirement for a large logo in the Skills section is not explicitly in the specs but the removal should be noted if it affects any general branding guidelines.
