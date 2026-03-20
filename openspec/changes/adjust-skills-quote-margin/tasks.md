# Tasks: Adjust Skills Quote Margin

## Implementation Tasks

- [x] **1. Modify `src/components/home.astro` - Skills Section**
    - [x] Add `lg:mt-12` to the `div` wrapping the quote inside the right-hand column of the Skills section (around line 159).

## Validation Tasks

- [x] **1. Visual Verification**
    - [x] Confirm quote is shifted down slightly on desktop to achieve better visual balance.
- [x] **2. Build Verification**
    - [x] Run `npm run build` to ensure no build regressions.
- [x] **3. Spec Validation**
    - [x] Run `openspec validate adjust-skills-quote-margin --strict`.
