# Connexr — Marketing site UI kit

A faithful interpretation of the canonical 13-block Connexr landing page, built directly from `DESIGN-BRIEF.md`. No source code was available to mirror, so this kit is the design brief made visual — not a recreation of shipping production code.

## Files
- `index.html` — full assembled landing page (the demo).
- `components.jsx` — modular React components, all exposed on `window`.
- `styles.css` — kit-local CSS (uses tokens from `/colors_and_type.css`).

## Components

| Component | Purpose |
|---|---|
| `Nav` | Sticky 64px top nav, logo + 5 links + orange CTA. |
| `Hero` | Asymmetric 7/5 grid; copy + ticker panel. |
| `HeroPanel` | Live-triage console mock (IBM Plex Mono). |
| `TrustStrip` | 6-cell client logo wall. |
| `SectionHeader` | Eyebrow + h2 + lead, locked spacing. |
| `ServiceCard` | The one card. White, 1px slate-200, 8px radius. |
| `ServicesSection` | 3×2 service grid. |
| `PartnersSection` | Tech partners row. |
| `ServiceTabs` | 3-tab deep dive (interactive). |
| `LeoRixSection` | Dark navy-950 product callout + 4-up stats. |
| `IndustriesSection` | 3×2 hairline-divided industries grid. |
| `ProofSection` | 4-stat row + serif pull-quote case study + cert chips. |
| `MethodologySection` | 5-step orange-bar discover → optimize. |
| `ResourcesSection` | 1 featured + 3 supporting articles. |
| `CtaStrip` | Closing dark band. |
| `Footer` | 5-col footer on navy-950 with white-variant logo. |
| `Button` | Variants: primary / secondary / ghost · sizes md / lg. |
| `Icon` | 1.5px-stroke, 24px Lucide-style glyphs. |

## What's intentionally absent

- No login / signup / pricing screens — none in the brief.
- No blog detail page — only the index card grid.
- No carousel or auto-rotate behavior (banned by the brief).
- No animations beyond CSS hover transitions (subtle motion only).
- No mobile nav drawer — to keep the kit small. Add when needed.

## Caveats

- Industry labels and case-study quotes are written *in the Connexr voice*, not lifted from real customer interviews. Replace before shipping.
- Trust-strip names are fictional placeholders. Swap for real customer marks.
- Tech partner cells are typeset names, not real partner marks. Swap for licensed logos.
