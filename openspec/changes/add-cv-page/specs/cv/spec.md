# Spec Delta: CV Page

## ADDED Requirements

### Requirement: Dedicated CV Page
The CV MUST be accessible via a dedicated URL `/cv`.
- **Path**: `/cv`
- **Layout**: MUST use the standard `Layout` component to maintain "Nekocorp" branding.
- **Content**: MUST replicate the same CV content and styling as the homepage section.

#### Scenario: Navigating to Dedicated CV Page
- **Given** a user navigates directly to `https://leonardanton.me/cv`.
- **When** the page loads.
- **Then** the user should see the complete CV section as a full-page view, including the `TerminalBackground` and `StartupSequence` (if not already booted).

### Requirement: DRY CV Content Management
The CV content MUST be extracted into a shared data structure to ensure a single source of truth for both the homepage section and the dedicated page.
- **Data Store**: `src/data/cv.ts`
- **Reusability**: Both `src/components/cv.astro` and any other component requiring CV data MUST import from this shared store.

#### Scenario: Updating CV Content
- **Given** a change is needed for a professional experience entry.
- **When** the developer updates the entry in `src/data/cv.ts`.
- **Then** the updated content MUST automatically reflect on both the homepage `/` and the dedicated `/cv` page.
