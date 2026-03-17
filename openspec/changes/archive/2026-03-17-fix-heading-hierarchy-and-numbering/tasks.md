# Tasks: Fix Heading Hierarchy & Section Numbering

## Setup
- [x] 0.1 Prepare development environment.

## 1. Normalize Heading Tags
- [x] 1.1 Update `src/React/StartupSequence.tsx`: Replace `<h1>` with `<h2>` for "NEKOCORP_OS".
- [x] 1.2 Update `src/components/cv.astro`:
    - [x] Add `titleTag` prop.
    - [x] Use `titleTag` (rendered via `Tag = titleTag`) for the name header.
- [x] 1.3 Update `src/pages/cv.astro`: Pass `titleTag="h1"` to the `<CV />` component.

## 2. Standardize Section Headers & Numbering
- [x] 2.1 Update `src/components/home.astro`:
    - [x] Add `<h2>[ INITIALIZING ]</h2>` with `TypingText`.
    - [x] Wrap `NEKOCORP` in `<h3>[01] _WHOAMI</h3>` logic if appropriate, or ensure it exists as a section header before the branding.
- [x] 2.2 Update `src/components/cv.astro`:
    - [x] Add `<h2>[ RETRIEVING_BIO ]</h2>` and `<h3>[02] _RESUME</h3>` headers at the top of the section (only when NOT in full-page mode).
    - [x] Downgrade internal headings: `h3` -> `h4` and `h4` -> `h5`.
- [x] 2.3 Update `src/components/projects.astro`:
    - [x] Update index to `[03] _NEKOCORP_INFRA`.
- [x] 2.4 Update `src/components/contact.astro`:
    - [x] Update index to `[04] _ESTABLISH_CONNECTION`.

## 3. Validation
- [x] 3.1 Verify homepage heading outline (should be `h1` -> `h2` -> `h3`).
- [x] 3.2 Verify `/cv` page heading outline (should start with `h1`).
- [x] 3.3 Verify sequential numbering `[01]` through `[04]` in the visual flow.
