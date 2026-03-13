# Tasks: Translate Portfolio to French

## Implementation

### Phase 1: Layout & Meta
- [x] Update `src/layouts/Layout.astro` to set `lang="fr"`. <!-- id: 1 -->
- [x] Translate all metadata (title, description, Open Graph, JSON-LD) in `src/layouts/Layout.astro`. <!-- id: 2 -->

### Phase 2: Navigation & Home
- [x] Update `navItems` labels in `src/components/nav.astro` to French. <!-- id: 3 -->
- [x] Translate hero content in `src/components/home.astro`. <!-- id: 4 -->

### Phase 3: What I Do (React)
- [x] Translate `skills` object and `CategoryIcons` keys in `src/React/SkillsList.tsx`. <!-- id: 5 -->
- [x] Update the header "What I do?" to "Ce que je fais ?". <!-- id: 6 -->

### Phase 4: Projects & Contact
- [x] Update `projects` statuses and headers in `src/components/projects.astro`. <!-- id: 7 -->
- [x] Translate "More projects on" link text in `src/components/projects.astro`. <!-- id: 8 -->
- [x] Translate section headers and form placeholders/labels in `src/components/contact.astro`. <!-- id: 9 -->
- [x] Update the success message, script alerts, and location in `src/components/contact.astro`. <!-- id: 10 -->
- [x] Update all `aria-label` attributes to French across all components. <!-- id: 10.1 -->

### Phase 5: Footer
- [x] Translate "Built with", "Styled with", "Deployed on" labels in `src/components/footer.astro`. <!-- id: 11 -->
- [x] Translate copyright and license notice in `src/components/footer.astro`. <!-- id: 12 -->
- [x] Check Spotify embed URL for `locale=fr_FR`. <!-- id: 13 -->

## Validation
- [x] Run a production build to ensure no compile errors: `npm run build`. <!-- id: 14 -->
- [x] Visually verify layout responsiveness with translated text using `get_screenshot` for all sections. <!-- id: 15 -->
- [x] Verify that all `aria-label` attributes are correctly translated. <!-- id: 16 -->
