# Proposal: Add Startup Boot Sequence

## Summary
Implement a terminal-style boot sequence and a branded welcome screen that precedes the main portfolio content. This feature aims to enhance the "Cyber-Glass" aesthetic and reinforce the Nekocorp branding by simulating a system startup (NEKOCORP_OS).

## Goals
- **Immersive Branding:** Create a high-impact first impression that aligns with the user's Cybersecurity & Infrastructure background.
- **Visual Continuity:** Reuse existing terminal effects (scanlines, grain, interference) for a seamless transition to the main site.
- **Performance-Aware:** Ensure the sequence is lightweight and does not negatively impact Core Web Vitals (LCP/CLS) for repeat visitors.
- **Accessibility & UX:** Provide a clear "Skip" option and ensure the site remains fully accessible once the sequence finishes.

## Non-Goals
- **Interactive Terminal:** This is a simulated, non-interactive sequence; users cannot type commands.
- **Blocking SEO:** The main site content must be present in the initial HTML to ensure search engines can index it properly.
- **Global State Management:** Use simple `sessionStorage` instead of complex state libraries for persistence.

## Dependencies
- **React:** For managing the asynchronous log generation and transition states.
- **Astro:** For the layout integration and initial shell.
- **Tailwind CSS:** For the overlay styling and animations.

## Risks & Mitigations
- **Hydration Flash:** Main content might flicker before the overlay renders.
  - *Mitigation:* Include the overlay container directly in the `Layout.astro` HTML with an `is:inline` script to manage initial visibility.
- **Motion Sensitivity:** The flickering logs and transitions might affect some users.
  - *Mitigation:* Respect `prefers-reduced-motion` by skipping the animation or significantly simplifying it.
- **Repeat Visitors:** Watching the same 3-second animation every time is frustrating.
  - *Mitigation:* Use `sessionStorage` to track if the user has already seen the boot sequence during their current session.
