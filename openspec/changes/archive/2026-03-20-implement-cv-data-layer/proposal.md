# Proposal: Implement CV Data Layer

## Why
Currently, the CV data in `src/data/cv.ts` is exported as a direct object and consumed directly by `src/components/cv.astro`. While functional, this lacks a proper abstraction layer. Implementing a formal data retrieval function (`getCVData`) brings the CV implementation in line with the portfolio project's architecture, preparing the frontend for future migration to a real backend (Django) without changing component logic.

## What Changes
1. **Refactor Data Source**: Update `src/data/cv.ts` to include a formal `getCVData()` utility function.
2. **Standardize Retrieval**: Update `src/components/cv.astro` to fetch data via the utility function instead of direct object import.
3. **SSG Compatibility**: Ensure that the data is correctly fetched during the Astro build process for static site generation.

## Scope
- `src/data/cv.ts`: Add retrieval functions and ensure proper interface exports.
- `src/components/cv.astro`: Update data consumption logic.

## Risks
- Minor risk of breaking CV rendering if interface properties are changed (mitigated by keeping the existing structure).
