# Design: Terminal Typing Effect

## Architecture
The typing effect will be implemented as a **React Island** (`src/React/TypingText.tsx`) to leverage React's state management for character sequencing. This component will be hydrated in Astro using `client:load` for initial viewport elements or `client:visible` for elements further down the page.

### 1. Component Structure (`TypingText.tsx`)
- **Props:**
  - `text`: `string` or `string[]` (if multiple strings, it can cycle or just type sequentially).
  - `speed`: `number` (default 50ms).
  - `delay`: `number` (start delay in ms).
  - `cursorChar`: `string` (default `_`).
  - `showCursor`: `boolean` (default `true`).
  - `onComplete`: `() => void` (optional callback).
  - `className`: `string` (standard Tailwind/CSS passthrough).

### 2. Implementation Logic
- **Typing Engine:** A simple `useEffect` that increments a `currentText` index using `setTimeout`. This avoids complex external dependencies.
- **Blinking Cursor:** Handled via a separate CSS class with a `blink` animation defined in the global layout.

### 3. Styling Integration
- The component will default to the project's `font-vcr` utility or inherit the parent's font.
- The cursor will use a standard `span` with an `animate-pulse` or a custom `blink` keyframe.

## Global Animation (`Layout.astro`)
A new keyframe will be added to the global `<style>` block:
```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.cursor-blink {
  animation: blink 1s step-end infinite;
}
```

## Impacted Components
- `src/components/home.astro`: Will use the component for the header text.
- `src/layouts/Layout.astro`: To host the global cursor animation logic.
