# Tasks: Apply Glassmorphism Effects

## Phase 1: Implementation

### 1. SkillsList.tsx (React)
- [x] Add `backdrop-blur-md` class to the main skill category container `div`. <!-- id: 1 -->
- [x] Ensure hover state transitions (`hover:bg-opacity-80`) work correctly with the blur. <!-- id: 2 -->

### 2. projects.astro (Astro)
- [x] Add `backdrop-blur-sm` class to the project action buttons (GitHub and Preview). <!-- id: 3 -->
- [x] Add `backdrop-blur-sm` class to the "More projects" button at the bottom. <!-- id: 4 -->

### 3. contact.astro (Astro)
- [x] Add `backdrop-blur-md` class to `input` fields (Nom, E-mail). <!-- id: 5 -->
- [x] Add `backdrop-blur-md` class to the `textarea` (Message). <!-- id: 6 -->
- [x] Ensure focus states maintain the glass aesthetic. <!-- id: 7 -->

### 4. nav.astro (Astro)
- [x] Verify that the `scrolling` class correctly applies `bg-surface` and `backdrop-blur-xl`. <!-- id: 8 -->
- [x] Refine borders and transitions for the glassy navigation bar. <!-- id: 9 -->

## Phase 2: Validation
- [ ] Visual inspection across different devices (Desktop, Mobile). <!-- id: 10 -->
- [ ] Verify no regressions in text readability. <!-- id: 11 -->
- [ ] Perform a production build: `npm run build`. <!-- id: 12 -->
