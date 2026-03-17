# Tasks: translate-and-update-content

Translate the entire website to English, update personal links, refresh tech logos, and fix a navigation bug.

## Preparation
- [x] Map all French text to English for each component <!-- id: 0 -->

## Core Updates
### 1. Hero & Branding Updates
- [x] Update greeting and job title in `src/components/home.astro` <!-- id: 1 -->
- [x] Add the professional quote beneath the job title in `src/components/home.astro` <!-- id: 2 -->
- [x] Update tech stack in `src/React/LogoWall.tsx` (remove 4, add 6 technologies) <!-- id: 3 -->

### 2. Translation & Link Updates
- [x] Translate navigation labels in `src/components/nav.astro` <!-- id: 4 -->
- [x] Translate all project statuses and titles (where applicable) in `src/components/projects.astro` <!-- id: 5 -->
- [x] Translate skills categories and details in `src/React/SkillsList.tsx` <!-- id: 6 -->
- [x] Translate contact section and update email in `src/components/contact.astro` <!-- id: 7 -->
- [x] Translate footer and update copyright/links in `src/components/footer.astro` <!-- id: 8 -->
- [x] Update personal links (Gitea and LinkedIn) across all components <!-- id: 9 -->

### 3. SEO & UX Improvements
- [x] Update page metadata and title in `src/layouts/Layout.astro` <!-- id: 10 -->
- [x] Update startup logs translation in `src/React/StartupSequence.tsx` <!-- id: 11 -->
- [x] Fix the navigation observer to highlight `_WHOAMI` at page top in `src/components/nav.astro` <!-- id: 12 -->

## Validation
- [x] Verify that all French text is gone from the UI <!-- id: 13 -->
- [x] Verify that the navigation item `_WHOAMI` is highlighted when at the top of the page <!-- id: 14 -->
- [x] Verify that all new logos are visible and correctly scaled in the `LogoWall` <!-- id: 15 -->
- [x] Verify that Gitea and LinkedIn links are correct and the Gitea icon is displayed <!-- id: 16 -->
- [x] Test the hero quote styling on mobile and desktop <!-- id: 17 -->
