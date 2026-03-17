# cv Specification

## Purpose
TBD - created by archiving change add-cv-page. Update Purpose after archive.
## Requirements
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

### Requirement: CV Content Structure
The CV section MUST include the following specific content provided by the user:
- **Header**: Léonard-Anton Llosa, Future Network & Security Engineer.
- **Contact Details**: Email (leonard@nekocorp.fr), Tel (+33662386596), LinkedIn link, and Driver's License status.
- **About Me**: A professional summary highlighting passions for complex systems, BUT R&T background, and field experience at TotalEnergies.
- **Technical Skills**: Grouped into "Systems & DevSecOps", "Networks & Cybersecurity", and "Development & Scripting".
- **Professional Experience**: IT Process Automation Engineer at TotalEnergies (TGITS) Pau for two periods (2025-2026).
- **Education**: Detailed academic path at IUT Mont de Marsan (Cybersecurity) and Lycée Saint Cricq.
- **Project Management**: "Nekocorp" Homelab deployment and High School Automated Watering system.
- **Aeronautical Skills**: 20h flight time on Robin DR400, LAPL Student Pilot, Airbus A320 simulator experience.
- **Languages**: French (Mother tongue) and English (TOEIC 940).
- **Interests**: Server/Network management, PC Gaming, Automobiles, Aviation, Video Editing.

#### Scenario: Displaying CV on Desktop
- **Given** a user is viewing the site on a desktop browser.
- **When** they scroll to the `_RESUME` section.
- **Then** they should see a two-column grid layout where technical skills and personal details are on the left, and experience/education are on the right.

### Requirement: Cyber-Glass Aesthetic Integration
The CV section MUST use the project's established "Cyber-Glass" visual style.
- **Backgrounds**: Must use `.cyber-glass` utility class for content containers.
- **Typography**: Headers must use `VCR OSD MONO` font; body text must use `JetBrains Mono` or `Montserrat`.
- **Accents**: Important keywords and headers must use the project's primary (`--primary`) and secondary (`--sec`) colors.

#### Scenario: Highlighting Skills
- **Given** the technical skills list.
- **When** rendered in the CV section.
- **Then** each skill category should be clearly labeled and each skill should be represented as a stylized badge or list item with neon accents.

### Requirement: Navigation Link
The main navigation bar MUST include a link to the CV section.
- **Label**: `_RESUME`.
- **Icon**: A document or profile-related SVG icon.
- **Behavior**: Smooth scroll to the CV section when clicked.

#### Scenario: Navigating to CV
- **Given** a user is at the top of the page.
- **When** they click the `_RESUME` link in the navigation bar.
- **Then** the page should smoothly scroll to the CV section and the link should be marked as "active".

