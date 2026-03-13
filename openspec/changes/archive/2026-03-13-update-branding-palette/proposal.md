# Proposal: Update Branding Palette

This proposal outlines the update of the project's visual identity with a new, vibrant color palette. It focuses on replacing the existing muted tones with a modern, high-contrast dark theme centered around deep purples and hot pink.

## Problem
Currently, branding colors are scattered throughout the codebase. While some are centralized in `src/layouts/Layout.astro` as CSS variables, many components use hardcoded hex values (e.g., `#1414149c`, `#A9FF5B`). This makes global palette updates difficult and inconsistent.

## Proposed Solution
Centralize all branding colors into CSS variables within `src/layouts/Layout.astro` and update them to the new palette:
- **Background**: `#06020C` (Very dark purple/black)
- **Primary Accent**: `#C92FFF` (Light Purple)
- **Secondary Accent**: `#5D15D9` (Deep Violet)
- **Tertiary Accent**: `#FF1493` (Hot Pink) - *Selected vibrant Hot Pink hex.*

All hardcoded hex values in components will be replaced with these variables or derived functional variables (e.g., `--border-subtle`).

## Scope
- `src/layouts/Layout.astro`: Update `:root` variables.
- `src/components/nav.astro`: Replace `#A9FF5B` with Tertiary Accent.
- `src/components/home.astro` & `src/React/LetterGlitch.tsx`: Update glitch colors.
- All components: Replace hardcoded colors with standardized variables.
- `tailwind.config.mjs`: (Optional) Extend Tailwind theme with these variables for better developer experience.

## Benefits
- Consistent visual identity across all components.
- Single source of truth for all branding colors.
- Improved maintainability and easier future palette shifts.
