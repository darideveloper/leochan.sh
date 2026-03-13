---
change-id: add-professional-slogan
status: implemented
title: Add Professional Slogan to Hero Section
author: Gemini CLI
date: 2026-03-13
---

# Proposal: Add Professional Slogan to Hero Section

## Summary
Incorporate a high-impact professional slogan into the website's Hero section to better communicate the developer's unique value proposition, specifically highlighting expertise in complex systems (IT infrastructure and aviation) and strict security/procedural standards.

## Motivation
The current hero section focuses primarily on "frontend development." The user's new slogan provides essential context about their background in aviation and complex systems, which distinguishes them from typical software developers and appeals to high-stakes technical environments.

## Proposed Changes
- Add a new paragraph to `src/components/home.astro` containing the slogan.
- Style the slogan to be visually distinct yet integrated with the existing typography.
- Translate the slogan to French to maintain consistency with the rest of the site's content.

## Design Overview
The slogan will be placed as a secondary professional statement below the primary "Software Developer" title and frontend description. It will use the project's `--white-icon` color for a subtle yet readable contrast.

## Expectations
- The slogan is clearly visible in the Hero section on both mobile and desktop.
- The typography matches the existing `Montserrat` variable font.
- The translation is natural and professional.
