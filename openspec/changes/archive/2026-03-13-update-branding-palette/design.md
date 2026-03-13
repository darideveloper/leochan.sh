# Design: Global Color Palette

This document defines the new centralized color system and how it will be applied across the project.

## Architecture
All core branding colors will be defined as CSS variables in `src/layouts/Layout.astro` within the `:root` selector. This ensures they are accessible to both standard CSS and Tailwind's arbitrary value syntax (`text-[var(--primary)]`).

### Core Variables Mapping
| Category | New Variable Name | New Value | Purpose |
| :--- | :--- | :--- | :--- |
| **Backgrounds** | `--background` | `#06020C` | Deep background color |
| | `--surface` | `#14101A9C`| Card/Component backgrounds (semi-transparent) |
| **Accents** | `--primary` | `#C92FFF` | Primary interactive elements, focus rings |
| | `--primary-light` | `#E0A3FF` | Lighter primary for gradients/highlights |
| | `--secondary` | `#5D15D9` | Secondary accent, deep gradients |
| | `--tertiary` | `#FF1493` | "Hot Pink" accent, status/active indicators |
| **Text/Icons** | `--foreground` | `#EFEFEF` | High-contrast text |
| | `--muted` | `#FFFFFF80` | Low-contrast text and icons |
| **Borders** | `--border-subtle` | `#FFFFFF15` | Containers borders and subtle separators |
| **UI Elements** | `--selection-bg` | `#C92FFF` | Text selection background |
| | `--scrollbar-track`| `#100A1A` | Scrollbar track color |
| | `--scrollbar-thumb`| `#5D15D9` | Scrollbar thumb color |

## Components Implementation

### 1. Navigation (`nav.astro`)
- The navigation indicator (`#A9FF5B`) -> `--tertiary` (`#FF1493`).
- `var(--component-bg)` -> `--surface`.
- Scrolling border `#ffffff10` -> `--border-subtle`.

### 2. Home Page (`home.astro`)
- Gradient `linear-gradient(135deg, #a476ff 25%, #eee5ff 50%, #a476ff 75%)` -> `linear-gradient(135deg, var(--primary) 25%, var(--primary-light) 50%, var(--primary) 75%)`.
- `glitchColors` array -> `[var(--secondary), var(--primary), "#1A0A2E"]`.

### 3. Projects & Contact
- Card backgrounds `#1414149c` -> `--surface`.
- Border separators `#ffffff10` -> `--border-subtle`.
- Focus rings `--sec` -> `--primary`.

### 4. LetterGlitch React Component
- Background `#101010` -> `--background`.
- Radial gradients will use `--background` and transparent variations.

## Tailwind Integration
`tailwind.config.mjs` will be updated to map these variables:
```javascript
theme: {
  extend: {
    colors: {
      background: 'var(--background)',
      surface: 'var(--surface)',
      primary: 'var(--primary)',
      'primary-light': 'var(--primary-light)',
      secondary: 'var(--secondary)',
      tertiary: 'var(--tertiary)',
      foreground: 'var(--foreground)',
      muted: 'var(--muted)',
      'border-subtle': 'var(--border-subtle)',
    }
  }
}
```
