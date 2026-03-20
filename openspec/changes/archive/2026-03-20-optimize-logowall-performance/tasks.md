# Tasks: Optimize LogoWall Performance

- [x] Localize external assets
    - [x] Download Gitea logo to `public/images/logos/gitea.webp`
    - [x] Download Cisco Duo logo to `public/images/logos/cisco-duo.svg`
    - [x] Download Cloudflare logo to `public/images/logos/cloudflare.webp`
    - [x] Download SafeLine logo to `public/images/logos/safeline.svg`
    - [x] Download GLPI logo to `public/images/logos/glpi.webp`
    - [x] Download Wireshark logo to `public/images/logos/wireshark.webp`
    - [x] Update `openspec/specs/branding/spec.md` to reflect local paths

- [x] Refactor `src/React/LogoWall.tsx` for performance
    - [x] Extract `LogoItem` into a separate memoized component (`React.memo`)
    - [x] Update `technologies` array to use local paths for all logos
    - [x] Replace `brightness-0 invert` filters with `grayscale(1) invert(1)` or CSS `opacity` for better paint performance
    - [x] Add explicit `width` and `height` (e.g., `32px`) to all image and icon containers
    - [x] Ensure `will-change: transform` is correctly applied to the scrolling container

- [x] Synchronize other components
    - [x] Update `src/components/home.astro` to use local logo paths instead of external URLs

- [x] Validation
    - [x] Verify that all logos load correctly from local paths
    - [x] Verify that the marquee animation is smooth and doesn't exhibit choppiness on mobile and desktop viewports
    - [x] Check for layout shifts during initial load using Lighthouse or DevTools
