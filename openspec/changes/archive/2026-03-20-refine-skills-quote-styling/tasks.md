# Tasks: Refine Skills Quote Styling

## Implementation Tasks

- [x] **1. Modify `src/components/home.astro` - Skills Section**
    - [x] Update the quote paragraph (`<p>`) classes:
        - Change `text-md md:text-lg` to `text-2xl md:text-4xl`.
        - Change `text-[var(--white-icon)]` to `text-[var(--white)]`.
- [x] **2. (Optional) Adjust Decorative Quote Icons**
    - [x] If the larger text overflows or looks unbalanced, adjust the `-top-10` or `-bottom-16` positioning of the decorative quote icons.

## Validation Tasks

- [x] **1. Visual Verification**
    - [x] Confirm quote is white and significantly larger.
- [x] **2. Build Verification**
    - [x] Run `npm run build` to ensure no build regressions.
- [x] **3. Spec Validation**
    - [x] Run `openspec validate refine-skills-quote-styling --strict`.
