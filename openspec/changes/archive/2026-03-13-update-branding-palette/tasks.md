# Tasks: Update Branding Palette

- [x] **Infrastructure: Centralize Colors**
    - [x] Update `:root` variables in `src/layouts/Layout.astro` with new values and standardized names.
    - [x] Update `tailwind.config.mjs` to map CSS variables to Tailwind colors.
- [x] **Global Refactor: Replace Hardcoded Hexes**
    - [x] Identify and replace all instances of `#06020C` (if any), `#C92FFF`, `#5D15D9`, and `#FF1493` (or their old equivalents) with Tailwind classes or CSS variables.
    - [x] Replace `#1414149c` with a semi-transparent version of `--background`.
    - [x] Replace `#ffffff10` with `--border-subtle`.
- [x] **Component-Specific Updates**
    - [x] `src/components/nav.astro`: Update nav indicator and mobile menu styles.
    - [x] `src/components/home.astro`: Update `glitchColors` array.
    - [x] `src/React/LetterGlitch.tsx`: Ensure it respects passed `glitchColors` or uses CSS variables.
    - [x] `src/components/contact.astro`: Update focus ring colors.
- [x] **Validation**
    - [x] Visual inspection of the entire site (home, projects, contact).
    - [x] Verify that no hardcoded hex values remain (except within the `:root` definition).
