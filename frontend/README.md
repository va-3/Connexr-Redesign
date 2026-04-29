# Frontend

Two artifacts of the Connexr landing page (Variant B / Editorial direction), each for a different audience.

## What's here

```
frontend/
├── README.md                      ← you are here
├── Final-Desktop.html             ← BOSS / STAKEHOLDER preview. Open this first.
├── Handover.html                  ← ENGINEERING handoff spec. Use for porting.
├── tokens.css                     ← design tokens (used by reference wireframes)
├── assets/
│   ├── connexr-logo.png           ← full lock-up
│   └── connexr-logo-white.png     ← navy → white variant for dark surfaces
└── reference/
    ├── README.md                  ← context on the wireframe round
    ├── Wireframes.html            ← Variant A + Variant B side-by-side
    └── Variant-B-Editorial.html   ← winner, before high-fi polish
```

## Which file should I open?

### `Final-Desktop.html` — for stakeholder review

Single clean desktop view, 1440px wide, no annotations, no canvas chrome, no state demos. **This is what a real visitor sees.** Use this when sharing with the boss, with leadership, or with any non-engineer audience.

What it contains:
- All 13 sections in their default state
- One nav (default, before scroll)
- One service-tabs panel (Managed AIOps active, no alt-panel demo)
- All copy curly-quote-polished
- Subscribe input semantically correct (`type="email"`, `aria-label`)

What's stripped vs the Handover:
- ❌ Tablet (768px) and Mobile (375px) breakpoint frames
- ❌ "Scrolled state" nav annotation
- ❌ Button-states reference block (default / hover / focus-visible / active / disabled side-by-side)
- ❌ Alternate-tab-panel demo (the "AI Transformation tab content" rendered below the default)
- ❌ All "← hover" / "← focus-visible" / "← scrolled" annotation labels
- ❌ Canvas chrome (panel labels, frame borders, gray background)

### `Handover.html` — for engineering handoff

The full design spec — every state demoed, three breakpoints stacked, annotations on every interactive element. **This is what an engineer needs to port the page accurately to React/Next.js.** Reference this during the production port; do not share with non-engineers.

What it contains:
- Desktop 1440 / Tablet 768 / Mobile 375 breakpoint frames stacked
- Default nav AND scrolled-with-blur nav (annotated)
- All 5 button states (default / hover / focus-visible / active / disabled) demoed in a reference block beneath hero
- Default service-tabs panel + alternate "AI Transformation" panel (so the swap pattern is visible)
- Mobile drawer rendered open in the mobile frame
- Skip-to-content link rendered visible on desktop frame for review
- Per-element state annotations ("← hover", "← focus-visible", etc.)

## How to view (local server)

The server is running on port `8888` for this session. Open in a browser:

```
http://localhost:8888/Final-Desktop.html      ← stakeholder preview
http://localhost:8888/Handover.html           ← engineering spec
http://localhost:8888/reference/Wireframes.html
http://localhost:8888/reference/Variant-B-Editorial.html
```

If the server isn't running:

```bash
cd ~/Desktop/Connexr-Redesign/frontend
python3 -m http.server 8888
```

(or `npx serve .` for a cross-platform alternative).

## What's in both files (the canonical 13 sections)

1. Nav (sticky, 64px, with mobile drawer in Handover)
2. Hero — asymmetric 60/40, type-led left + abstract funnel schematic right
3. Trust strip — 6 placeholder cells (real client logos pending)
4. Services overview — sticky-head 4/8 split, 6 service cards 2-up right
5. Tech partners — single dense row, mono "Platform partners →" label
6. Service tabs — vertical sidebar, 3 practice areas
7. LeoRix AI — dark navy-950 asymmetric panel, capability-only paragraph
8. Industries — 6 cards, Healthcare visually featured (no "Featured" label)
9. Proof — sidebar lead + 4 placeholder stat boxes + cert chips + NDA link
10. Methodology — horizontal 5-step rail (Discover → Architect → Build → Deploy → Optimize)
11. Resources — single subscribe block ("Insights coming soon — subscribe →")
12. CTA strip — full-width navy-950 panel
13. Footer — 5 columns, white logo, cert chips bottom right

## Zero-fabrication guarantees (both files)

This page contains **no invented**:

- Client names — placeholder cells in the Trust strip
- Metrics — Proof stats render as italic "Pending" labels
- Testimonials — case study slot is an "NDA — request access →" link
- Product UI — LeoRix section is paragraph + "Read the spec →" link, no fake console
- Article titles — Resources is a subscribe block only
- Architectural claims about LeoRix — capability-only language

All quantified claims, real client logos, real case studies, and real product screenshots are tracked as [content blockers in issue #4](https://github.com/va-3/Connexr-Redesign/issues/4).

## What's `tokens.css` for

The reference wireframes (`reference/Wireframes.html` and `reference/Variant-B-Editorial.html`) use this file as an external stylesheet. Both `Final-Desktop.html` and `Handover.html` have the same tokens **inlined** — they're self-contained files with no external CSS dependency (Google Fonts @import for typography is the one allowed external load).

The canonical token reference for the broader design system lives at `../design-system/colors_and_type.css`. `tokens.css` here is a synced copy used only by the reference wireframes.

## Content blockers for production launch

The page is at ~95% production-grade visually. The remaining gap is leadership input on:

- Real client logos (issue #4)
- Real case study under NDA (issue #4)
- LeoRix product spec / dashboard imagery (issue #4)
- Tech partner tier badges — AWS/Azure/GCP partnership status (issue #4)
- Verification of Service Tab capability bullets and Methodology one-liners with the services team

## Next step

Send the boss the `Final-Desktop.html` link (deploy briefly to Vercel/Netlify if a portable URL is needed). Capture their feedback as a triage list. Then either:

- Iterate one more focused round in Claude Design (if feedback is structural)
- Move to issue [#1 — Next.js scaffold](https://github.com/va-3/Connexr-Redesign/issues/1) and start the production port (if feedback is content-only)
