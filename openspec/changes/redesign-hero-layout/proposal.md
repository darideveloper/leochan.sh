# Proposal: Redesign Hero Layout

## Context
The current hero section in `src/components/home.astro` uses a terminal-style command interface. To align with a more modern, high-impact "agency" aesthetic as shown in `docs/new-hero.png`, we are proposing a full layout redesign.

## Objective
Update the hero section to match the `new-hero.png` layout, emphasizing large-scale typography, glowing background effects, and a card-based stats/info section.

## Scope of Changes
- **HTML Refactoring:** Update `src/components/home.astro` with a new grid/flex layout matching the reference.
- **Styling:** Utilize Tailwind CSS classes to achieve the "cyber-glass" look (blur, transparency, gradients).
- **Branding:** Re-purpose existing brand assets (NEKOCORP logo, Montserrat font) for the new structure.

## Out of Scope
- Complete removal of `LetterGlitch` (it will be adjusted to work with the new layout).
- Changes to the project's core color palette (unless minor adjustments are needed for contrast).

## Success Criteria
- The hero layout matches the visual structure of `docs/new-hero.png`.
- The main heading is prominent and uses the specified "cyber-glass" aesthetic.
- The layout is fully responsive and accessible.
- The transition from the old terminal style to the new layout is seamless.
