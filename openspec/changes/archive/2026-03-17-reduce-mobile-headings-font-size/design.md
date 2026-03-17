## Context
Heading font sizes (`h1` and `h2`) on mobile viewports currently cause overflow. The goal is to reduce them by ~20% on viewports narrower than 640px.

## Decisions
- **Decision:** Combine global CSS with targeted Tailwind updates.
- **Rationale:** 
  - Using Tailwind (`text-3xl` instead of `text-4xl`) on mobile provides more granular control and follows the existing design pattern.
  - `text-4xl` (2.25rem) to `text-3xl` (1.875rem) is a ~16.7% reduction, which is close to the requested "like 20%".
  - To be exactly 20%, we could use `text-[1.8rem]` (80% of 2.25rem).

## Affected Components
1. **src/components/home.astro**: `h1` from `text-4xl` to `text-3xl` (or ~20% reduction) on mobile.
2. **src/components/cv.astro**: `h2` from `text-4xl` to `text-3xl` (or ~20% reduction) on mobile.
3. **src/React/StartupSequence.tsx**: `h1` from `text-4xl` to `text-3xl` (or ~20% reduction) on mobile.
4. **src/components/projects.astro**: `h2` from `text-lg` to `text-sm`, and `h3` from `text-4xl` to `text-3xl` on mobile.
5. **src/components/contact.astro**: `h2` from `text-lg` to `text-sm`, and `h3` from `text-4xl` to `text-3xl` on mobile.

## Alternatives Considered
- **Global CSS**: Target all `h1`, `h2` with `@media (max-width: 640px) { h1, h2 { font-size: 80% !important; } }`. 
  - **Rejection Rationale**: 80% as a relative value can be inconsistent depending on the parent's font size. Tailwind's absolute sizes are more predictable.
