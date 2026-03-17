# Tasks: Render Project Markdown Content

## Phase 1: Data Update
- [ ] Add `content: string` to the `Project` interface in `src/data/projects.ts`. <!-- id: 1 -->
- [ ] Update dummy data for each project with rich Markdown content (titles, lists, bold text). <!-- id: 2 -->

## Phase 2: Markdown Logic
- [ ] Import `marked` in `src/pages/projects/[id].astro`. <!-- id: 3 -->
- [ ] Implement Markdown to HTML parsing logic in the detail page. <!-- id: 4 -->

## Phase 3: UI Implementation
- [ ] Refactor the `lg:col-span-2` section in `src/pages/projects/[id].astro` to use `set:html` for Markdown rendering. <!-- id: 5 -->
- [ ] Apply styling (e.g., `prose-invert prose-mono`) to the rendered Markdown container. <!-- id: 6 -->
- [ ] Ensure Markdown headings and lists align with the VCR-OSD and MONO theme. <!-- id: 7 -->

## Phase 4: Validation
- [ ] Verify that all Markdown elements (H1-H3, lists, bold text) render correctly. <!-- id: 8 -->
- [ ] Ensure images embedded in Markdown are optimized or correctly styled. <!-- id: 9 -->
- [ ] Check for any XSS vulnerabilities (though the data is trusted as a "dummy API"). <!-- id: 10 -->
