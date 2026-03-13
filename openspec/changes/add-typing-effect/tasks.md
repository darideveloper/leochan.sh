# Tasks: Add Typing Effect & Blinking Cursor

## Preparation
- [x] Research: Confirm there are no existing typing libraries already in `package.json` that should be used instead. (Completed - only OGL/React/Astro)

## Implementation

### 1. Global Styles
- [x] **ADD** `@keyframes blink` and `.cursor-blink` class to `src/layouts/Layout.astro` global styles.
- [x] **VERIFY** the animation works by temporarily adding a manual `_` with `.cursor-blink` in any component.

### 2. React Typing Component
- [x] **CREATE** `src/React/TypingText.tsx` with the following props: `text`, `speed`, `delay`, `cursorChar`, `showCursor`, `className`.
- [x] **IMPLEMENT** the typing logic using `useState` and `useEffect`.
- [x] **IMPLEMENT** the cursor rendering using the `.cursor-blink` class.
- [x] **VERIFY** the component types correctly by testing it in isolation or with a temporary placement in `src/pages/index.astro`.

### 3. Integration
- [x] **REPLACE** "Salut, je suis Oscar Hernandez" in `src/components/home.astro` with `<TypingText client:load text="Salut, je suis Oscar Hernandez" />`.
- [x] **REPLACE** "Développeur Logiciel" in `src/components/home.astro` with `<TypingText client:load text="Développeur Logiciel" />`.
- [x] **ADJUST** delays so the title starts typing after the greeting is mostly complete (optional but recommended for a sequential effect).
- [x] **IDENTIFY** all headings (`h1`-`h6`) in the website.
- [x] **APPLY** `TypingText` to all identified headings in `projects.astro`, `contact.astro`, and `SkillsList.tsx`.
- [x] **USE** `client:visible` for headings that are not in the initial viewport to ensure they type when scrolled into view.

## Validation
- [x] **RUN** `npm run build` to ensure no SSR or hydration errors are introduced.
- [x] **VISUALLY CHECK** the typing speed and cursor blink consistency.
