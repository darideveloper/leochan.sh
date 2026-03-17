# Design: Add Powered By DariDeveloper Link

## Architectural Reasoning
The footer is a common place for developer attribution. The current layout consists of a left section for the logo/title and a right section for system status and copyright.

The "Powered By" link will be added to the right section, either after the copyright text or in a new line, following the same styling as the existing copyright link to maintain visual consistency.

## Components Affected
- `src/components/footer.astro`: The footer component.

## Data Structures & Dependencies
- No new dependencies or data structures are introduced.

## Implementation Details
- Add an `<a>` tag with:
  - `href="https://www.darideveloper.com/"`
  - `target="_blank"`
  - `rel="noopener noreferrer"`
  - `class="hover:text-[var(--white)] transition-colors underline decoration-[var(--sec-icon-tr)] underline-offset-4"` (to match the existing style)
- Place it after the existing copyright text.

## Verification Strategy
- Manually verify the footer display.
- Ensure the link opens in a new tab and points to the correct URL.
