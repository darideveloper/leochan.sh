# Proposal: Refine Skills Quote Styling

## Goal
The goal of this change is to enhance the visual prominence of the professional quote in the Skills section by increasing its font size and ensuring its color is pure white, improving readability and impact.

## Scope
- **Color Update:** Change the quote text color from `text-[var(--white-icon)]` to `text-[var(--white)]` (or `text-white`).
- **Font Size Update:** Increase the font size by approximately 50%.
    - Mobile: `text-md` (1rem) -> `text-2xl` (1.5rem)
    - Desktop: `text-lg` (1.125rem) -> `text-3xl` (1.875rem) or `text-4xl` (2.25rem). Let's go with `text-2xl md:text-4xl` for a strong visual presence.
- **Component Update:** Modify `src/components/home.astro` accordingly.

## Assumptions
- The large decorative quotes (the background `“` and `”`) should remain with their current styling unless they clash with the larger text.

## Spec Deltas
- `openspec/specs/slogan/spec.md`: Update the styling requirements for the professional slogan in the Skills section.
