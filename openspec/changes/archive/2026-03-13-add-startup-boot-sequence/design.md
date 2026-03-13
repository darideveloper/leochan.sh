# Design: Startup Boot Sequence

## Architecture Overview
The startup sequence will be implemented as a specialized React island (`StartupSequence.tsx`) integrated into the global `Layout.astro`. This ensures the sequence can manage complex asynchronous timing and UI state while the rest of the site's static content is being parsed by the browser.

### Components
1.  **`StartupSequence.tsx` (React):**
    - **Logic:** Manages an array of "boot logs" and their timing.
    - **State:** Tracks the current phase (`boot`, `welcome`, `complete`).
    - **Persistence:** Checks `sessionStorage.getItem('hasBooted')` on mount.
2.  **`Layout.astro` (Astro):**
    - **Modification:** Injects the `StartupSequence` component at the top level of the `body`.
    - **Global Styles:** Provides the necessary `--background` and `font-vcr` context.

## State Machine
The sequence progresses through three distinct phases:
1.  **`booting`:** Displays terminal-style logs with randomized "processing" delays.
2.  **`welcome`:** Displays a centered, branded "Welcome to NEKOCORP_OS" message or logo.
3.  **`finishing`:** Triggers a CSS transition (slide-up or fade-out) to reveal the main site.
4.  **`complete`:** Removes the overlay from the DOM and restores body scrolling.

## Visual Implementation
- **Typography:** Uses `VCR OSD MONO` for all terminal text.
- **Color Palette:**
  - Status `[ OK ]`: `var(--primary)` (#C92FFF).
  - Highlighting `[ VERIFIED ]`: `var(--tertiary)` (#FF1493).
  - Background: `var(--background)` (#06020C).
- **Background Effects:** Reuses the grain and scanline logic from `TerminalBackground.astro` to ensure visual continuity.
- **Skip Mechanism:** A subtle "Press any key to skip" or "SKIP" button in the bottom right corner.

## Sequence Logs
A curated list of logs that match the user's professional profile:
- `Initializing NEKOCORP_OS Kernel v5.0.1...`
- `Loading Zero-Trust Authentication Modules... [ OK ]`
- `Mounting Virtual File Systems (/mnt/projects)... [ OK ]`
- `Starting Network Security Manager (WAF/LB)... [ OK ]`
- `Applying Infrastructure Automation (Ansible/Python)... [ OK ]`
- `Verifying Identity via secure_tunnel... [ VERIFIED ]`
- `System status: NO SPIES ALLOWED.`
- `Handing over control to Leonard-Anton...`

## Performance & SEO
- **Initial Visibility:** The component will check `sessionStorage` and immediately hide itself if the user has already seen the animation during the current session.
- **SEO Impact:** Since the overlay is strictly on top of the content and not replacing it, search engine crawlers will see the full page structure without needing to execute the JavaScript sequence.
- **Bundle Size:** Minimal dependency on external libraries; leverages standard React hooks (`useState`, `useEffect`).
