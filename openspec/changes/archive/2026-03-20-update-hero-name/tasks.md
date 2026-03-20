# Tasks: Update Hero Name

- [x] **Implementation**
    - [x] Replace "INFRASTRUCTURE" with "LEONARD-ANTON" in `src/components/home.astro`.
    - [x] Remove the `<p>` tag containing "& Security." in `src/components/home.astro`.
    - [x] Adjust font size classes to ensure "LEONARD-ANTON" fits on a single line across all viewports.
    - [x] Add `whitespace-nowrap` if necessary to prevent layout break.

- [x] **Specification Updates**
    - [x] Update `openspec/specs/hero/spec.md` to reflect the change from a topical title to the portfolio owner's name.
    - [x] Ensure the "single line" requirement is documented in the spec.

- [x] **Validation**
    - [x] Run `npm run build` to ensure no build regressions.
    - [x] Manually verify responsiveness on mobile, tablet, and desktop viewports.
