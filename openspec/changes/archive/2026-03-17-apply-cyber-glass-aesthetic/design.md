# Design: Cyber-Glass Aesthetic

## Approach
We will create a reusable CSS class (`.cyber-glass`) to implement the "Cyber-Glass" aesthetic. This ensures consistency across different components like `SkillsList`, `projects.astro`, and `contact.astro`.

### Background Blur
We will replace existing standard Tailwind utilities (`backdrop-blur-sm` and `backdrop-blur-md`) with a custom implementation applying `backdrop-filter: blur(20px);` to create a deep "Smoked Glass" effect.

### Neon Edge
To create a 1px gradient border that acts as a translucent frame, we will use a pseudo-element approach. Native CSS borders do not fully support gradients along with `border-radius` gracefully without compromising background transparency or layout.

```css
.cyber-glass {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  /* The border-radius will be applied via standard Tailwind classes like rounded-2xl or inherited */
  z-index: 1;
}

.cyber-glass::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(to bottom right, var(--primary-light), var(--tertiary));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  pointer-events: none;
  z-index: -1;
}
```

### Hover Interaction
To make the element feel like a floating physical object, we add a soft glow on hover.

```css
.cyber-glass {
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out, background 0.3s ease-in-out;
}
.cyber-glass:hover {
  box-shadow: 0 0 20px rgba(201, 47, 255, 0.2); /* var(--primary) equivalent glow */
  background: rgba(255, 255, 255, 0.08);
}
```

### Browser Fallbacks
We will employ `@supports` to ensure that browsers lacking `backdrop-filter` support get a slightly darker background so text remains readable.

```css
@supports not (backdrop-filter: blur(20px)) {
  .cyber-glass {
    background: rgba(20, 16, 26, 0.8); /* fallback background, close to var(--surface) */
  }
}
```

These styles will be defined in `src/layouts/Layout.astro` inside the `<style is:global>` block, making them globally available. The class `.cyber-glass` will then be applied to the target elements across the site, replacing existing generic styling like `bg-white/5 backdrop-blur-md border border-white/10`.
