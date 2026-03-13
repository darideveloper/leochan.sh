# Spec: Global Branding Palette

This specification defines the requirements for a centralized and modern branding color system across the project.

## ADDED Requirements

### Requirement: Centralized CSS Branding Variables
The project SHALL use a single source of truth for all branding and theme colors defined in `src/layouts/Layout.astro`.

#### Scenario: Defining Core Brand Colors
Given the global layout file `src/layouts/Layout.astro`,
When the `:root` pseudo-selector is defined,
Then it MUST contain variables for:
- `--background`: `#06020C`
- `--surface`: `#14101A9C`
- `--primary`: `#C92FFF`
- `--primary-light`: `#E0A3FF`
- `--secondary`: `#5D15D9`
- `--tertiary`: `#FF1493`
- `--foreground`: `#EFEFEF`
- `--muted`: `#FFFFFF80`
- `--border-subtle`: `#FFFFFF15`

### Requirement: Standardized UI Elements
All standard browser UI elements such as scrollbars and text selection MUST reflect the branding palette.

#### Scenario: Selection and Scrollbar Styling
Given `src/layouts/Layout.astro`,
When styling `::selection` and scrollbar components,
Then the colors MUST be derived from the core branding variables (`--primary`, `--background`, etc.).

### Requirement: Standardized Tailwind Color Classes
The core branding variables MUST be integrated into Tailwind CSS for consistent usage.

#### Scenario: Mapping CSS Variables to Tailwind Colors
Given `tailwind.config.mjs`,
When extending the theme colors,
Then the following mappings should exist:
- `background`: `var(--background)`
- `surface`: `var(--surface)`
- `primary`: `var(--primary)`
- `secondary`: `var(--secondary)`
- `tertiary`: `var(--tertiary)`
- `foreground`: `var(--foreground)`
- `muted`: `var(--muted)`
- `border-subtle`: `var(--border-subtle)`

### Requirement: Removal of Hardcoded Hex Colors
All components and styles MUST avoid hardcoded hex values in favor of the centralized variables or Tailwind classes.

#### Scenario: Updating Component Styles
Given any component,
When applying colors for backgrounds, borders, or text,
Then the styles MUST use standardized Tailwind classes instead of hex values.
