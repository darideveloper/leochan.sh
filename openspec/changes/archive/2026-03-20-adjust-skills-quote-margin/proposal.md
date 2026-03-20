# Proposal: Adjust Skills Quote Margin

## Why
The goal of this change is to add a top margin to the professional quote in the Skills section, specifically for desktop viewports, to achieve a more visually balanced and centered layout relative to the technical stack on the left.

## What Changes
- **UI Adjustment:** Add `lg:mt-12` (or similar) to the quote container in `src/components/home.astro`.
- **Styling:** Ensure the change only affects large screens and doesn't disrupt the mobile stacking flow.

## Assumptions
- The `items-center` on the parent container is already doing its job, but a manual adjustment is needed to account for the visual weight of the SkillsList or the decorative quotes.

## Spec Deltas
- `openspec/specs/slogan/spec.md`: Update the positioning requirements for the professional slogan in the Skills section.
