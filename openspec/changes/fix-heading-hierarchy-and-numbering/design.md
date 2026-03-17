# Design: Heading Hierarchy & Section Numbering

## Problem
The current heading structure across `leochan.sh` has several SEO and accessibility issues:
1. **Duplicate `<h1>` on Homepage:** Both `StartupSequence` and `Home` components use `<h1>`.
2. **Missing `<h1>` on `/cv`:** The dedicated CV page starts with an `<h2>`.
3. **Inconsistent Section Numbering:** `Projects` is `[02]` and `Contact` is `[05]`, while `Home` and `CV` have no numbering. This doesn't match the actual section order (`Home` -> `CV` -> `Projects` -> `Contact`).
4. **Hierarchy Mismatch:** `CV` internal headings (`h3`) conflict with the proposed `h3` for section titles.

## Proposed Solution

### 1. Heading Tag Normalization
- **`StartupSequence.tsx`:** Convert the `<h1>` to an `<h2>`. Maintain visual prominence using the same Tailwind classes (`text-2xl md:text-7xl font-bold tracking-[0.1em] text-white drop-shadow-[0_0_20px_var(--primary)]`).
- **`CV.astro`:** Introduce a `titleTag` prop (defaulting to `"h2"`) to allow it to be rendered as an `<h1>` on the dedicated `/cv` page and as an `<h2>` (or part of the new header pattern) on the homepage.

### 2. Standardized Section Header Pattern
All main sections (`Home`, `CV`, `Projects`, `Contact`) will adopt a consistent two-line header pattern using `TypingText`:
- **Line 1 (`h2`):** A small, "terminal-log" style label (e.g., `[ INITIALIZING ]`, `[ RETRIEVING_BIO ]`).
- **Line 2 (`h3`):** The numbered section title following the `[0X] _TITLE` format.

### 3. Sequential Numbering
The sections will be renumbered to match their visual and navigation order:
1. `[01] _WHOAMI` (Home)
2. `[02] _RESUME` (CV)
3. `[03] _NEKOCORP_INFRA` (Projects)
4. `[04] _ESTABLISH_CONNECTION` (Contact)

### 4. Recursive Heading Downgrade in CV
Since the `CV` section title will now be an `<h3>`, the internal headings within `CV.astro` (About Me, Tech Stack, Experience, etc.) will be downgraded from `<h3>` to `<h4>`, and their sub-headings (Company name, etc.) from `<h4>` to `<h5>`.

## Component Changes

### `src/React/StartupSequence.tsx`
- Replace `<h1>` with `<h2>`.

### `src/components/cv.astro`
- Add `titleTag` prop.
- Render the name using the `titleTag`.
- Add the `[ RETRIEVING_BIO ]` and `[02] _RESUME` headers at the top of the section.
- Downgrade internal `h3` -> `h4` and `h4` -> `h5`.

### `src/components/home.astro`
- Add the `[ INITIALIZING ]` and `[01] _WHOAMI` headers.

### `src/components/projects.astro`
- Update `h3` to `[03] _NEKOCORP_INFRA`.

### `src/components/contact.astro`
- Update `h3` to `[04] _ESTABLISH_CONNECTION`.

## Verification Plan
- **Manual Audit:** Inspect the DOM on `/` and `/cv` using browser dev tools.
- **Accessibility Check:** Use a screen reader or accessibility tool (e.g., WAVE, Lighthouse) to verify a single logical heading outline.
- **Visual Regression:** Ensure the styles of the headers remain consistent with the "Cyber-Glass" aesthetic.
