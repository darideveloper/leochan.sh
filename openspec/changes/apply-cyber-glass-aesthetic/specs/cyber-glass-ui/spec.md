## MODIFIED Requirements

### Requirement: Cyber-Glass Aesthetic for UI Panels and Cards
The standard flat dark mode panels MUST be upgraded to feature an enhanced frosted glass look with neon gradient edges and interactive hover states to increase visual depth and immersion.

#### Scenario: Viewing a panel with the Cyber-Glass aesthetic
- **WHEN** the user views a project card, skill list item, or contact form input
- **THEN** the element MUST have a background blur of at least `20px`.
- **AND** the element MUST have a 1px gradient border from Light Purple (`var(--primary-light)`) to Hot Pink (`var(--tertiary)`).
- **AND** the background of the element MUST remain translucent (e.g., `rgba(255, 255, 255, 0.05)`).
- **AND** the element MUST provide a fallback background color if `backdrop-filter` is not supported.

#### Scenario: Interacting with a Cyber-Glass panel
- **WHEN** the user hovers over a Cyber-Glass panel
- **THEN** a faint box-shadow using the primary color MUST appear to simulate a physical glow and floating effect.
- **AND** the background color MUST slightly lighten to indicate interactivity.
