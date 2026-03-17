# Tasks: Redesign Hero Layout

## Preparation
- [ ] Review `docs/new-hero.png` for layout specifics and card details.
- [ ] Confirm typography and colors used in the current `Layout.astro`.

## Implementation

### Phase 1: Layout Refactoring
- [ ] Replace existing hero section HTML in `src/components/home.astro` with the new grid-based structure.
- [ ] Implement the massive "NEKOCORP" heading and the "Agency" subtitle.
- [ ] Set up the absolute-positioned gradient background blobs.

### Phase 2: Content & Cards
- [ ] Integrate the professional description and "Get Started" link in the bottom-left area.
- [ ] Implement the three stats/info cards in the bottom-right area (Zero Trust, Infrastructure Automation, SecOps Excellence).
- [ ] Ensure cards use existing glassmorphism/surface styles for consistency.

### Phase 3: Animation & Polish
- [ ] Apply subtle entrance animations or transitions to hero elements.
- [ ] Adjust `LetterGlitch` intensity to ensure legibility of the new typography.
- [ ] Verify that `TypingText` components are either integrated or gracefully replaced if they clash with the new layout.

## Validation
- [ ] Check layout against `docs/new-hero.png` at various screen sizes.
- [ ] Run `npm run build` to ensure no compile errors.
- [ ] Verify accessibility (ARIA labels, color contrast).
- [ ] Performance check (LCP, CLS impact).
