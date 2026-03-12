# Project Context

## Purpose
A high-performance personal portfolio for Oscar Andres Hernandez Pineda, a Software Developer. The project aims to showcase interactive digital experiences, technical expertise in frontend and backend development, and a commitment to modern web standards (performance, SEO, and accessibility).

## Tech Stack
- **Framework:** Astro 5.x (Static Site Generation)
- **Component Model:** React 19.x (Islands architecture for interactive elements)
- **Styling:** Tailwind CSS (Custom animations, variable-based theme)
- **Database/Backend:** Firebase Firestore (for dynamic content/contact forms)
- **Graphics:** OGL (High-performance WebGL-based visuals)
- **Language:** TypeScript 5.x (Strict typing across the codebase)
- **Asset Management:** Sharp (Image optimization), Montserrat Variable Font
- **Environment:** Node.js (ESM), Vite-based build pipeline

## Project Conventions

### Code Style
- **Formatting:** Prettier with `prettier-plugin-astro` for consistent code formatting.
- **Naming:**
  - `Kebab-case` for Astro components and standard files.
  - `PascalCase` for React components (`src/React/*.tsx`).
  - `@/` and `@components/` aliases for clean, absolute-style imports.
- **Typing:** Strict TypeScript; avoid `any` wherever possible.
- **CSS:** Use Tailwind CSS for 95% of styling; global CSS variables in `Layout.astro` for core theme values (`--background`, `--sec`, etc.).
- **Astro Specifics:** Preference for `clsx` over `class:list` for complex or conditional classes (as per local rules).

### Architecture Patterns
- **Static First:** SSG-by-default using Astro's `output: "static"`.
- **Islands Architecture:** Interactive components are isolated as React "islands" in `src/React/` and hydrated only when necessary (e.g., `client:load`).
- **Layout-Centric:** A single `Layout.astro` manages the HTML shell, SEO metadata, JSON-LD structured data, and global style injections.
- **Component-Driven:** Page sections are modularized into independent Astro components (`src/components/`).

### Testing Strategy
- **Status:** TBD. No automated testing framework is currently configured.
- **Future Direction:** Consider Playwright for E2E testing of interactive "islands" and Vitest for utility logic.

### Git Workflow
- **Commit Pattern:** Strictly follow Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`, `docs:`).
- **Branching:** Portfolio-scale project; direct commits to `main` are standard, or short-lived feature branches for significant experiments.

## Domain Context
- **SEO & Performance:** High focus on Core Web Vitals and discoverability (Schema.org integration, canonical URLs, preloaded fonts).
- **Interactivity:** Uses WebGL/OGL for "extra" visual flair (e.g., glitch effects, interactive backgrounds) that differentiates it from standard static sites.

## Important Constraints
- **Static Deployment:** Must be compatible with static hosting providers (Vercel/Netlify). No server-side logic at runtime except for client-side Firebase interactions.
- **Firebase Security:** All API keys and config must be handled via environment variables (prefixed with `PUBLIC_` where appropriate for client-side access).

## External Dependencies
- **Firebase:** Firestore for real-time data or form submissions.
- **Vercel:** Target hosting and deployment platform.
- **SVGL:** Source for some SVG icons.
