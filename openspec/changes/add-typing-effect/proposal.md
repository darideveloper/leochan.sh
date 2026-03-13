# Proposal: Terminal-Style Typing Effect & Blinking Cursor

## Motivation
To enhance the portfolio's "terminal" and "retro-digital" aesthetic, we propose adding a typing effect with a blinking cursor for "important text" sections. This feature will create a more dynamic, "alive" user experience that aligns with the existing `VCR OSD MONO` font and OGL glitch effects.

## Proposed Changes
1. **Create `TypingText.tsx` (React Component):**
   - A reusable React component using the project's existing React 19 / TypeScript 5 stack.
   - Features: Adjustable typing speed, start delay, and a configurable blinking cursor (`_` or `|`).
   - Integration: Utilizes the `VCR OSD MONO` font by default.
2. **Apply to `home.astro`:**
   - Replace static text in key sections (e.g., the "Salut, je suis Oscar Hernandez" greeting and "Développeur Logiciel" title) with the `TypingText` component.
3. **Global Styling:**
   - Add a global CSS animation for the blinking cursor to ensure consistency across any component that might use it.

## Approach: React Component (Islands Architecture)
- **Why:** The project already uses React for interactive elements like `LetterGlitch` and `SkillsList`. A React component provides the best balance of customizability (e.g., handling multi-line strings, delays, and completion callbacks) and developer experience.
- **Hydration:** Use `client:load` to ensure the effect starts as soon as the page is ready.

## Requirements
- The component MUST accept a `text` prop (string or array of strings).
- The component MUST have a `speed` prop (ms per character).
- The component MUST show a blinking cursor at the end of the text while typing and (optionally) after completion.
- The component MUST use `VCR OSD MONO` where appropriate to maintain the terminal look.
