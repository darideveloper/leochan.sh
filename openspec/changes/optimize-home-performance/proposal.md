# Optimize Home Page Performance

## Summary
Address several performance bottlenecks on the home page, specifically targeting excessive GPU usage and main thread blocking. This will improve frame rates, scrolling performance, and initial load times.

## Motivation
Currently, the home page experiences significant stuttering and performance issues due to expensive CSS filters (`backdrop-filter` and `filter: blur`), layout-triggering scroll animations, aggressive React component hydration, and an inefficient canvas redraw loop in `LetterGlitch`. These issues can cause battery drain, device overheating, and poor user experience, particularly on mobile devices.

## Goals
- Drastically reduce GPU load by optimizing background blur and glassmorphism effects.
- Ensure 60FPS scroll performance by refactoring the navigation bar to use CSS transforms or alternative methods that don't trigger reflow.
- Reduce main thread blocking by lazy loading off-screen React components.
- Optimize the `LetterGlitch` canvas animation to only redraw what is strictly necessary.
