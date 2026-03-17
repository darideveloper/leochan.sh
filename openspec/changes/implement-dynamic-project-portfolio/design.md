# Design: Dynamic Project Portfolio

## Problem
The current project portfolio is hardcoded within `src/components/projects.astro`. This makes it difficult to scale, maintain, and provide detailed information for each project without cluttering the main page.

## Solution
Transition to a data-driven architecture using a "dummy API" (centralized TypeScript data source) and Astro's Dynamic Routes for individual project pages.

### Architecture Overview

1.  **Data Layer (Dummy API):** 
    - A centralized file `src/data/projects.ts` will hold the "source of truth".
    - It will export a structured array of projects and utility functions.
    - This allows for easy migration to a real API (e.g., Firebase or a headless CMS) in the future.

2.  **Dynamic Routing (SSG):**
    - Use Astro's `getStaticPaths()` in `src/pages/projects/[id].astro` to generate a static page for every project at build time.
    - This ensures high performance and SEO for each project.

3.  **Navigation Logic:**
    - Update `src/components/nav.astro` to handle cross-page navigation. 
    - The current smooth-scroll script assumes all hash links are on the same page. It needs to be "aware" of the current path to allow navigating back to the home page's sections from a project detail page.

### Data Schema (`Project` interface)
The new schema will include:
- `id`: Unique slug for the URL.
- `title`: Project name.
- `description`: Short summary for the card view.
- `fullDescription`: Detailed breakdown (Markdown or HTML string) for the project page.
- `image`: Optimized `ImageMetadata` imported from `@astro`.
- `technologies`: Array of strings/icons used.
- `links`: Object containing `github`, `preview`, etc.
- `status`: Project state (e.g., "Deployed", "In Development").
- `date`: Completion or start date.

### UI/UX Consistency & Boot Sequence
- The project detail page will use the same `Layout.astro` to maintain the "Cyber-Glass" aesthetic.
- **Boot Sequence:** The `StartupSequence` logic must be consistent. On subpages, it should skip the animation if `hasBooted` is present in `sessionStorage` to prevent redundant interruptions.
- **Navigation State:** The `nav.astro` component must detect if the current path is not `/` and disable the "active" highlighting for home sections, potentially replacing it with a "Back to root" context.

### Image Optimization
To maintain performance, images must be imported directly into `src/data/projects.ts` using standard ES imports:
```typescript
import myProjectImg from "../assets/projects/image.png";
// ...
image: myProjectImg as ImageMetadata,
```
This ensures Astro can still process these images through its pipeline.

## Alternatives Considered
- **Astro Content Collections:** While very powerful, a simple TypeScript file is closer to a "dummy API" as requested and easier to integrate with the existing `cv.ts` pattern found in the codebase.
- **Client-side Fetching:** Avoided to maintain the project's SSG-first and high-performance requirements.
