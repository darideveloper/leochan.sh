# Design: Professional CV Section

## Architecture
The CV section will be implemented as a new Astro component: `src/components/cv.astro`. It will be a full-width `section` with an ID of `cv` (or `resume`).

### UI Components
- **`CVHeader`**: A sticky or high-visibility header containing Léonard-Anton's name, current title ("Future Network & Security Engineer"), and primary contact links.
- **`CVSection`**: A reusable wrapper for each CV category (About Me, Skills, Experience, etc.) that uses the `.cyber-glass` utility class for a consistent look.
- **`SkillBadge`**: A small, styled tag for technical skills, utilizing the project's color palette (`--primary`, `--secondary`, etc.).
- **`TimelineItem`**: A component or pattern for listing professional experience and education chronologically.

### Layout Logic
- **Desktop (>= 1024px)**: A two-column grid.
  - Left Column (Narrow): Header, About Me, Technical Skills, Languages, Interests.
  - Right Column (Wide): Professional Experience, Education & Degrees, Project Management, Aeronautical Skills.
- **Mobile (< 1024px)**: A single-column vertical stack for all sections.

### Styling
- **Typography**: Headers will use `VCR OSD MONO` (via `TypingText` or plain tags), and body text will use `JetBrains Mono` or `Montserrat`.
- **Colors**: Deep dark backgrounds (`--background`), neon accents (`--primary`, `--sec`), and subtle borders (`--border-subtle`).
- **Glassmorphism**: Extensive use of `backdrop-filter: blur()` and semi-transparent backgrounds via the `.cyber-glass` class.

## Data Structure
The CV content will be managed statically within the component to maintain performance, though structured in a way that allows for easy future migration to a CMS or local JSON.

## Accessibility
- Proper semantic HTML (`section`, `h2`, `h3`, `ul`, `li`).
- High contrast ratios for text.
- Screen-reader friendly links and aria-labels.
