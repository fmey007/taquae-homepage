# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This repo holds the homepage prototype for **Taquae**, an AI strategy consulting firm (audit, strategic advisory, and technical implementation for SMEs, startups, and public organizations). The site is in French by default with English/German translations toggled client-side.

This is a **static design prototype**, not a production app. There is no build system, package manager, framework, or test suite — the entire site is one self-contained HTML file.

## Repository structure

- `Homepage.html` — the entire site: all CSS in a `<style>` block in `<head>`, all markup in `<body>`, all JS in a `<script>` block at the end. This is the only file to edit for content/style/behavior changes.
- `assets/` — static brand assets (e.g. `logo-taquae.jpg`).
- `uploads/` — generated/uploaded images used in the mockup (e.g. hashed filenames like `logo-1781446442946.jpg`).
- `README.md` — French project description and a "next steps" checklist (productionize in React/Next.js, connect to Netlify, real content, contact form integration, SEO/analytics).

## Development workflow

There is no build, lint, or test command — this is plain HTML/CSS/JS with no dependencies.

- **Preview locally**: open `Homepage.html` directly in a browser, or serve the directory (e.g. `python3 -m http.server`) and visit it — needed for relative asset paths to resolve consistently.
- **Edit in place**: all changes (markup, styling, interactivity) happen inside `Homepage.html`. There's no compilation step.
- The README explicitly frames this as a prototype intended for handoff: production rebuild should happen in a real framework (React/Next.js recommended) rather than growing this file further.

## Architecture of `Homepage.html`

### CSS conventions
- Design tokens are defined once as CSS custom properties in `:root` (`--dark`, `--light`, `--accent`, `--display`/`--sans`/`--mono` font stacks, `--maxw`, `--gutter`, `--section-y`). Reuse these tokens instead of hardcoding colors/spacing.
- Sections alternate between `.dark` and `.light` background themes via a class on the `<section>` element (`section.dark` / `section.light`), which cascades to descendant text/muted-color rules. When adding a new section, pick one of these two modifiers and follow the existing dark/light contrast pattern.
- Layout building blocks are reused across sections: `.wrap` (max-width container), `.section-head` (eyebrow + heading + lede row), `.btn` / `.btn--ghost` / `.btn--accent` (button variants), `.eyebrow`, `.kicker`, `.lede` (typographic helpers).
- Responsive behavior uses a small number of breakpoints (`880px`, `760px`, `540px`) with `@media (max-width: …)` overrides near the rules they affect, not centralized.

### HTML structure
The page is a single long scroll of `<section>` elements, each with a `data-nav` attribute (`"dark"` or `"light"`) and a `data-screen-label` (used for design/dev orientation, not functional): Nav → Hero → Trust stats → Services (3-card grid) → Case study → About/founder → Manifesto/pillars → Lead form → Footer.

### JavaScript (vanilla, no dependencies, IIFEs at the bottom of the file)
1. **Nav scroll behavior** — toggles `.scrolled` and `.over-light` classes on `#nav` based on scroll position and which section's `data-nav` value the nav currently overlaps, so the nav bar adapts its color to dark/light sections beneath it.
2. **Scroll-reveal** — uses `IntersectionObserver` to add `.in` to `.reveal` elements as they enter the viewport (falls back to immediately revealing everything if `IntersectionObserver` is unsupported); respects `prefers-reduced-motion`.
3. **Language switch** — client-side only i18n via a `map` object keyed by `fr`/`en`/`de`, each holding `data-i18n` key → translated HTML string. Switching language rewrites `innerHTML` of every `[data-i18n]` element and updates `document.documentElement.lang`. **When changing translatable copy, update the source text in the HTML *and* the corresponding key in all three language blocks (`fr`, `en`, `de`) in this `map`.**
4. **Lead form** — client-side only; `preventDefault`s on submit, does basic required-field validation (red bottom border on empty `name`/`email`/`message`), then hides the form fields and shows `#formSuccess`. There is no backend wired up — submissions are not actually sent anywhere yet (see README's "Intégrer formulaire de contact" TODO).

## Conventions to follow

- Keep new content/sections consistent with the existing dark/light alternation and the established type system (`--display` for headings/emphasis, `--mono` for eyebrows/labels/meta, `--sans` for body copy).
- Any new user-facing copy should be wired through `data-i18n` and added to all three language dictionaries, not hardcoded in only one language.
- Don't introduce a build tool, framework, or package.json for incremental changes to this prototype — that migration is an intentional future step (see README), not something to do piecemeal.
