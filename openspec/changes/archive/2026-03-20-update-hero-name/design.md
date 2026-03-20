# Design: Update Hero Name

This change shifts the focus of the Hero section from the owner's domain (Infrastructure) to their personal identity (Léonard-Anton).

## Architectural Reasonings
- **Focus:** The previous title "INFRASTRUCTURE & Security." was topical. Replacing it with "LEONARD-ANTON" focuses on the individual's brand, making it more personal.
- **Visual Impact:** A single-line massive title creates a cleaner and more modern "brutalist" look. It simplifies the visual hierarchy of the hero section.

## Layout Changes
- **Single Line Requirement:** The title "LEONARD-ANTON" (13 chars) must fit on a single line. 
- **Font Scaling:** The current `lg:text-[9rem]` might be too wide for "LEONARD-ANTON" on some screens if the container is half-width. We might need to reduce it slightly or allow it to wrap/scale more aggressively. 
- **Removal of Subtitle:** The "& Security." `<p>` tag will be removed. The vertical spacing between the main title and the introduction text above ("Hi, I'm Leonard-Anton") and the slogan below will be adjusted to maintain visual balance.

## Design Trade-offs
- **Length vs. Size:** A 13-character name in `9rem` is significantly wider than a 14-character word like "INFRASTRUCTURE" if we consider that "INFRASTRUCTURE" has many narrow letters like 'I', 'T', 'R'. "LEONARD-ANTON" has more "wide" letters ('O', 'N', 'D', 'A').
- **Response:** We will prioritize `whitespace-nowrap` to ensure it doesn't wrap, and adjust the `clamp()` or Tailwind classes to make it fit. 

## Responsive Mapping
- **Mobile (<640px):** Adjust from `4xl` to a size that fits the name without breaking the layout. 
- **Tablet (640-1024px):** Maintain `7xl` or adjust as needed.
- **Desktop (>1024px):** `9rem` may need to be scaled down to `8rem` or `7vw` to ensure it doesn't overflow its grid column.
