## 1. Global Styles & Theme
- [x] 1.1 Add `.cyber-glass` class to `<style is:global>` in `src/layouts/Layout.astro`.
- [x] 1.2 Implement `backdrop-filter: blur(20px)` and Smoked Glass background.
- [x] 1.3 Implement `::before` pseudo-element for 1px gradient neon border (`var(--primary-light)` to `var(--tertiary)`).
- [x] 1.4 Implement interactive hover state with box-shadow glow and subtle background shift.
- [x] 1.5 Add `@supports` fallback for browsers without `backdrop-filter` support.

## 2. Project Section Refactor
- [x] 2.1 Replace inline classes on project cards in `src/components/projects.astro` with `.cyber-glass`.
- [x] 2.2 Apply `.cyber-glass` to Preview and GitHub action buttons in `src/components/projects.astro`.
- [x] 2.3 Apply `.cyber-glass` to the "cat ./more_projects.log" button at the bottom of the section.

## 3. Skills Section Refactor
- [x] 3.1 Replace inline classes on category headers in `src/React/SkillsList.tsx` with `.cyber-glass`.
- [x] 3.2 Ensure consistent spacing and rounded-2xl utility retention.

## 4. Contact Form Refactor
- [x] 4.1 Wrap `<input>` and `<textarea>` elements in individual `<div>` containers in `src/components/contact.astro`.
- [x] 4.2 Apply `.cyber-glass` to the new wrapper containers.
- [x] 4.3 Update native input/textarea styles to `bg-transparent border-none` for seamless integration.
- [x] 4.4 Ensure focus states are handled via the wrapper container (e.g., secondary glow).

## 5. UI Consistency
- [x] 5.1 Apply `.cyber-glass` to the "Skip sequence" button in `src/React/StartupSequence.tsx`.

## 6. Validation
- [x] 6.1 Verify 20px blur and gradient borders across all updated components.
- [x] 6.2 Confirm hover glow effects and interactive states.
- [x] 6.3 Ensure form input functionality is preserved after wrapping.
- [x] 6.4 Test `@supports` fallback by manually disabling `backdrop-filter` in dev tools.
