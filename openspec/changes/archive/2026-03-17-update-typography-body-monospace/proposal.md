# Change: Apply Monospace Font for Body Descriptions

## Why
To fully embrace the "Unix Terminal" aesthetic, body descriptions and text content (such as project descriptions) should use a standard system monospace font like JetBrains Mono or Courier New, rather than a sans-serif font like Montserrat.

## What Changes
- Update Tailwind configuration to provide a monospace utility or modify the base default font stack for body paragraphs.
- Apply the monospace font family to `<p>` tags and description elements across components (e.g., `home.astro`, `projects.astro`, `contact.astro`).
- Restrict Montserrat usage to standard interface elements like navigation links or buttons.

## Impact
- Affected specs: typography
- Affected code: `tailwind.config.mjs`, `src/layouts/Layout.astro`, `src/components/*.astro`
