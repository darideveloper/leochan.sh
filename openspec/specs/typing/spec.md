# typing Specification

## Purpose
TBD - created by archiving change add-typing-effect. Update Purpose after archive.
## Requirements
### Requirement: Component - Sequential Text Rendering
The typing component SHALL render characters one by one at a configurable speed to simulate manual terminal typing.

#### Scenario: Basic Typing Sequence
- **Given** a `TypingText` component with the text "Hello World" and a `speed` of 50ms.
- **When** the component is mounted and its `delay` has passed.
- **Then** characters should appear one after another until the full string is displayed.

### Requirement: Visual - Blinking Cursor
The typing component SHALL display a customizable cursor character that blinks at the end of the current text fragment.

#### Scenario: Active Cursor
- **Given** a `TypingText` component with `cursorChar="_"`.
- **When** the text is being typed or after completion (if configured).
- **Then** the `_` character should be visible and alternate between 100% and 0% opacity.

### Requirement: Styling - Retro Terminal Compatibility
The typing component SHALL be compatible with the `VCR OSD MONO` font and allow standard styling overrides via `className`.

#### Scenario: VCR Font Application
- **Given** a `TypingText` component.
- **When** the `font-vcr` class is applied via the `className` prop.
- **Then** the text and cursor should be rendered using the VCR OSD MONO font.

