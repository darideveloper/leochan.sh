# Change: Apply "Cyber-Glass" Aesthetic

## Why
The current UI features a standard flat dark mode. The client requested stepping away from this flat UI to a more dimensional, "Cyber-Glass" aesthetic to enhance depth and visual immersion.

## What Changes
- **Background Blur:** Upgrade standard Tailwind utilities (`backdrop-blur-sm/md`) to a custom implementation with at least `20px` blur for "Smoked Glass" panels.
- **Neon Edge:** Replace simple solid borders with a 1px gradient border (Light Purple to Hot Pink) using a pseudo-element approach to ensure compatibility with `border-radius`.
- **Interaction Styling:** Add a faint box-shadow on hover to simulate a physical glow and floating effect.
- **Affected Elements:** Project cards, SkillsList items, contact form inputs, and the startup sequence button.
- **Robustness:** Include `@supports` fallbacks for browsers lacking `backdrop-filter` support.

## Impact
- **Affected specs:** `ui-glassmorphism`, `ui-elements`.
- **Affected code:** `src/layouts/Layout.astro`, `src/components/projects.astro`, `src/React/SkillsList.tsx`, `src/components/contact.astro`, `src/React/StartupSequence.tsx`.
