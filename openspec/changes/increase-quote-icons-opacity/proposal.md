# Proposal: Increase Quote Icons Opacity

## Goal
The goal of this change is to make the large decorative quotes in the Skills section more visible by increasing their opacity by 30%. This will enhance the overall visual depth and "Cyber-Glass" feel of the section.

## Scope
- **UI Adjustment:** Change the opacity of the `<span>` elements (the decorative `“` and `”`) in the Skills section from `opacity-10` to `opacity-40`.
- **Component Update:** Modify `src/components/home.astro` accordingly.

## Assumptions
- "Increase in 30%" means adding 30 percentage points to the current 10%, resulting in 40% (`opacity-40`).

## Spec Deltas
- `openspec/specs/slogan/spec.md`: Update the visual requirement for the decorative quote icons.
