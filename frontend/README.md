# Frontend

The polished landing page mockup for Connexr — generated via Claude Design (Variant B / Editorial direction), audit-fixed, and curly-quote-polished.

This folder is the **canonical landing page artifact** for review and porting. It supersedes the v1 marketing-site UI kit at `../design-system/ui_kits/marketing-site/` (kept as historical reference).

## What's here

```
frontend/
├── README.md                      ← you are here
├── Production.html                ← the deliverable. Open this.
├── tokens.css                     ← design tokens (used by reference wireframes)
├── assets/
│   ├── connexr-logo.png           ← full lock-up
│   └── connexr-logo-white.png     ← navy → white variant for dark surfaces
└── reference/
    ├── README.md                  ← context on the wireframe round
    ├── Wireframes.html            ← Variant A + Variant B side-by-side
    └── Variant-B-Editorial.html   ← winner, before high-fi polish
```

## How to view

```bash
# from this folder
cd frontend
python3 -m http.server 8080
# then open http://localhost:8080/Production.html
```

Cross-platform alternative:

```bash
npx serve .
```

## What's in `Production.html`

Single self-contained HTML file with three breakpoints stacked vertically:

| Frame | Width | Notes |
|---|---|---|
| Desktop | 1440px | All 13 sections + button-states reference block + nav default & scrolled states |
| Tablet | 768px | Grids collapse 2-up; Services head moves above cards |
| Mobile | 375px | Single-column; mobile nav drawer rendered open |

**13 sections** (Variant B layout, locked):

1. Nav (sticky, 64px, with mobile drawer)
2. Hero — asymmetric 60/40, type-led left + abstract funnel schematic right
3. Trust strip — 6 placeholder cells (real client logos pending)
4. Services overview — sticky-head 4/8 split, 6 service cards 2-up right
5. Tech partners — single dense row, mono "Platform partners →" label
6. Service tabs — vertical sidebar, 3 practice areas, alternate-panel demo
7. LeoRix AI — dark navy-950 asymmetric panel, capability-only paragraph
8. Industries — 6 cards, Healthcare visually featured (no "Featured" label)
9. Proof — sidebar lead + 4 placeholder stat boxes + cert chips + NDA link
10. Methodology — horizontal 5-step rail (Discover → Architect → Build → Deploy → Optimize)
11. Resources — single subscribe block ("Insights coming soon — subscribe →")
12. CTA strip — full-width navy-950 panel
13. Footer — 5 columns, white logo, cert chips bottom right

## Zero-fabrication guarantees

This page contains **no invented**:

- Client names — placeholder cells in the Trust strip
- Metrics — Proof stats render as italic "Pending" labels
- Testimonials — case study slot is an "NDA — request access →" link
- Product UI — LeoRix section is paragraph + "Read the spec →" link, no fake console
- Article titles — Resources is a subscribe block only
- Architectural claims about LeoRix — capability-only language

All quantified claims, real client logos, real case studies, and real product screenshots are tracked as [content blockers in issue #4](https://github.com/va-3/Connexr-Redesign/issues/4).

## What's tokens.css for

The reference wireframes (`reference/Wireframes.html` and `reference/Variant-B-Editorial.html`) use this file as an external stylesheet. `Production.html` has the same tokens **inlined** — it's a single self-contained file with no external CSS dependency (Google Fonts @import for typography is the one allowed external load).

The canonical token reference for the broader design system lives at `../design-system/colors_and_type.css`. `tokens.css` here is a synced copy used only by the reference wireframes for portability.

## Open questions for boss review

The page is at ~95% production-grade. The remaining gap is leadership input on:

- Real client logos (issue #4)
- Real case study under NDA (issue #4)
- LeoRix product spec / dashboard imagery (issue #4)
- Tech partner tier badges — AWS/Azure/GCP partnership status (issue #4)
- Verification of Service Tab capability bullets and Methodology one-liners with the services team

## Next step after boss review

If feedback is structural (sections to add/remove/rearrange), one more focused Claude Design iteration. Otherwise we move to issue [#1 — Next.js scaffold](https://github.com/va-3/Connexr-Redesign/issues/1) and start the production port.
