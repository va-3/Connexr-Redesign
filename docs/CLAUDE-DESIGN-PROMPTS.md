# Claude Design — Production Prompts (v2)

> Paste-ready prompts for the wireframe and high-fidelity rounds in Claude Design. Both prompts incorporate lessons learned from the design-system phase: zero-fabrication rules, type-led hero discipline, senior-FE quality bar, no dead code in exports.

---

## Architecture

| Layer | Tool |
|---|---|
| Brand, design system, wireframes, frontend, all visual surfaces | **Claude Design** (`claude.ai/design`) |
| Backend (lead capture, content management, analytics, deployment) | **Claude Code** (this repo) |

The Claude Design export becomes the production frontend. Claude Code wraps it with backend services. No manual JSX → React port unless we explicitly choose to.

---

## When to use which prompt

```
1. Open claude.ai/design → New project: "Connexr Landing v2 — wireframes"
   Attach: Connexr design system + /docs/DESIGN-BRIEF.md
2. Paste PROMPT 1 (Wireframe Round) below
3. Answer Claude's plan-mode questions tightly (numbered, short)
4. Review both wireframe variants
5. Pick a winner (Variant A or Variant B)
6. In the SAME project, paste PROMPT 2 (High-Fidelity Round). Replace [X] with the winning letter.
7. Polish via Tweaks panel + Edits (free)
8. Export to Claude Code
```

---

## PROMPT 1 — Wireframe Round (v2, tightened)

```
The Connexr design system is attached. /docs/DESIGN-BRIEF.md is the canonical brief. Both are non-negotiable.

We're producing wireframes for the marketing site landing page. Two layout / IA variants in one canvas. We're testing composition, hierarchy, and section flow — NOT aesthetics (those are locked by the design system).

Wireframe fidelity here means: design system tokens applied for type and color (real visual treatment), but minimal decoration — no images, no illustrations, no gradient panels, no decorative graphics. Layout structure is the variable.

VARIANT A — Classical
  Symmetric centered grid. Sequential flow. Sparse density. Heritage gravitas (IBM Consulting / Stripe Press tradition).
  Hero: type-led, fully centered. Eyebrow + H1 + subline + 2 CTAs + 4 cert chips, all centered. Pure white background, no visual element on either side.
  Density: airy. One content block per section. Generous section padding.
  Cards: 3-up grid, equal weight.
  Asymmetry: at least ONE section breaks the centered rhythm.

VARIANT B — Editorial
  Asymmetric layered grid. Modern operator-credible (Linear / Vercel / Datadog tradition).
  Hero: type-led, asymmetric 60/40 split. Left = eyebrow + H1 + subline + CTAs + cert chips. Right = a clean schematic of abstract AIOps signal flow — three node clusters connected by thin orange lines, NO numbers, NO service names, NO product UI, no labels. Pure conceptual.
  Density: tight. Multiple data points per section.
  Cards: mixed treatment — 3-up, featured-and-supporting, 2-up depending on content.
  Asymmetry: default; only CTA strip and Footer stay symmetric.

HERO COPY (identical across both variants):
  Eyebrow: AIOPS · MANAGED SERVICES
  H1 (Title Case): AI at the Core. Scale at Speed.
  Subline: We run AI-native operations for enterprise IT — eliminating alert fatigue, automating incident response, and giving your team back the hours.
  Primary CTA: Book a demo
  Secondary CTA: Explore the platform
  Trust badges: SOC 2 Type II · HIPAA · ISO 27001 · GDPR

SECTION ORDER (13 sections, both variants):
  Nav → Hero → Trust Strip → Services → Tech Partners → Service Tabs → LeoRix AI → Industries → Proof → Methodology → Resources → CTA Strip → Footer

CONTENT RULES (same in both variants):
  Industries (6 cards): Healthcare · FinTech · Manufacturing · Insurance · Retail · AIOps & IT Ops
  Industry captions = capability descriptions, max 6 words each: "HIPAA-eligible deployments", "Latency- and audit-bound systems", "OT/IT convergence", "Claims, underwriting, fraud", "Peak readiness, omni-stack", "Greenfield + brownfield".
  Services (6 cards): Managed AIOps · AI Transformation · Cloud & Infrastructure · Enterprise Security · Data & Analytics · Digital Strategy
  Tech partners (6, plain — no tier badges): AWS · Azure · GCP · ServiceNow · Datadog · Microsoft 365
  Methodology (5 process steps, NOT outcomes): Discover (two-week instrumented audit) → Architect (reference architecture for compliance posture) → Build (engineering — ours, yours, or joint pod) → Deploy (cutover with rollback plan; we carry the pager) → Optimize (quarterly read-out — cost, MTTR, change-failure rate)
  Compliance chips: SOC 2 Type II · HIPAA · ISO 27001 · GDPR

ZERO-FABRICATION (non-negotiable; this project has had problems with invented content):
  - NO invented client names. Trust strip = 6 placeholder cells, slate-200 outlined rectangle, label "Client logo" centered (italic slate-500 mono 12px).
  - NO invented metrics. No "2.8M alerts", no "64% MTTR", no "42 engagements", no quantified claims. Stat slots in Proof = labeled placeholders, italic slate-500: "Uptime SLA — pending", "Engagements — pending", "MTTR reduction — pending", "Engineer-hours saved — pending". OR drop the stats row and show only cert chips + "Case study available under NDA — request access →" link if simpler reads stronger.
  - NO invented testimonials. No fictional people, quotes, or companies. Case study slot = NDA link only.
  - NO invented product UI. No fake LeoRix console, no fake dashboards, no fake metric tiles. LeoRix section = a paragraph describing what LeoRix does + a "Read the spec →" link.
  - NO invented article titles. Resources cards all show italic slate-500 "Title pending." with generic "— min read" tags and "Date pending" meta.
  - Industry captions are CAPABILITIES, not metrics — allowed.
  - Service descriptions are CAPABILITIES, not contract terms ("SLA-backed", etc.) unless verified — flagged otherwise.
  - Methodology one-liners describe PROCESS, not outcomes.

PLACEHOLDER LABELING: every placeholder is italicized, slate-500, suffixed with "(pending)" or "— pending" where appropriate. Real content (cert chips, industry names, service names, methodology step names) is NOT italicized.

OUTPUT FORMAT:
  - One scrollable canvas. Two panels stacked vertically.
  - Each panel renders all 13 sections at full desktop width (1440px).
  - Each panel labeled at top: "VARIANT A — Classical · symmetric · sparse" / "VARIANT B — Editorial · asymmetric · dense".
  - No mobile / tablet renders this round; that's the high-fidelity stage.

QUALITY BAR (mandatory in both variants):
  - Every spacing value on the 8pt grid (4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160). Section padding = 96px desktop.
  - Hierarchy via type weight + size + spatial separation, NOT color saturation.
  - One accent moment per section — orange #F27A1A used for CTA, focus ring, or single structural mark only. Never as section background. Never gradient-paired.
  - Em-dashes (—) for parenthetical clauses, curly apostrophes/quotes throughout. No straight quotes.
  - H1 in Title Case. Never lowercase.
  - Border radii from {0, 4, 8, 12} only. No pill (9999) buttons.
  - Banlist applies (Inter, purple gradients, glass morphism, neon glows, rainbow accents, sparkle emojis, hype words).
  - JSX export must contain only rendered components. No dead code.

If a reference (IBM, Stripe, Linear, etc.) would push the design outside the locked design system tokens, surface the conflict before generating — do NOT break the system to chase a reference.

DO NOT GENERATE YET. Ask me 4–5 specific questions covering ONLY:
1. Density preference per variant (both tight, both airy, or one of each as default?)
2. Resources section count (4 placeholder articles, fewer, more, or remove the section entirely if there's no content runway?)
3. Whether the LeoRix section stays in the 13-section landing OR moves to its own subpage with just a teaser block here
4. Whether any other section should be removed entirely from one or both variants
5. Anything specific to the schematic diagram in Variant B's hero that needs to be locked

Don't ask about brand voice, color, type, anti-defaults, or buyer persona — those are in the brief. Number the questions, group by topic. After I answer, generate both variants in one canvas.
```

---

## PROMPT 2 — High-Fidelity Round

> Use AFTER picking the wireframe winner. Replace `[X]` with `A` or `B`.

```
Variant [X] from the wireframe round is the locked layout system. Now expand it to PRODUCTION-FIDELITY across all 13 sections.

The Connexr design system is attached. /docs/DESIGN-BRIEF.md is the canonical brief. ZERO-FABRICATION rules from the wireframe round still apply — every placeholder remains explicitly labeled, no invented content sneaks back in.

Production-fidelity bar: this page must clear a 20-year senior frontend engineer's review on:
- 8pt grid alignment (zero ad-hoc spacing)
- Hierarchy via type weight + size + spatial separation, not color saturation
- One accent moment per section maximum
- Real asymmetry where the variant calls for it
- Full state coverage on every interactive element (default / hover / focus-visible / active / disabled)
- Em-dashes for parenthetical clauses, curly quotes throughout
- Real responsive behavior visible at 3 breakpoints
- No dead code in the JSX export

Build all 13 sections per the locked Variant [X] layout, with these production specifics:

1. NAV (sticky, 64px)
   - Logo left (28px height) + 5 nav links (Services / Products / Industries / Insights / Company) + orange CTA right.
   - Mobile drawer at ≤768px: hamburger icon → slide-in panel from right with the same 5 links + CTA, full-height, navy-950 background, white text. Tap-outside-to-close. Trap focus while open.
   - Skip-to-content link as the FIRST focusable element of the page (visually hidden until focused, then orange chip top-left).
   - Backdrop-blur (8px) when scrolled past 0; border-bottom 1px slate-200.

2. HERO
   - [Variant A: type-led, fully centered, no right-side visual.]
   - [Variant B: 60/40 asymmetric. Right side is the schematic AIOps flow diagram from the wireframe — abstract shape relationships only, no numbers, no service names, no product UI.]
   - 96px top padding desktop / 72px tablet / 48px mobile.
   - H1 Title Case ("AI at the Core. Scale at Speed.") — DM Sans 700, 72px desktop / 56px tablet / 40px mobile, line-height 1.05, tracking -0.025em.

3. TRUST STRIP — 6 placeholder cells labeled "Client logo" (italic slate-500 mono 12px in a slate-200 outlined rectangle, 88px height). Single horizontal row at desktop, 3+3 at tablet, 2+2+2 at mobile.

4. SERVICES OVERVIEW — 3×2 service card grid. Each card: 24×24 Lucide icon (navy) + h4 (24px DM Sans 600) + body (16px Plex Sans 400 slate-600) + "Read more →" link (14px Plex Sans 500 navy, underline-on-hover). 32px padding, 8px radius, 1px slate-200 border. Hover: border navy-200, shadow-md, no translate. Focus-visible: 2px orange ring.

5. TECH PARTNERS — single row of 6, equal-width cards (1px slate-200 border, 8px radius, 16px vertical padding). Plain partner names in slate-600 DM Sans 600 16px. NO tier badges (until partner-tier confirmation lands). Mobile: 3+3 layout.

6. SERVICE TABS — 3 tabs (Managed AIOps default-active, AI Transformation, Cloud & Infrastructure). Tab bar: 1px slate-200 bottom border; active tab has orange-500 2px bottom border + navy-900 text. Tab content panel: 2-col grid (description left, capability bullets right). NO contract terms unless verified.
   - Render the default state AND below it, render the AI Transformation tab's content as an alternate state.

7. LEORIX AI — dedicated dark navy-950 section. Eyebrow + h2 ("LeoRix AI. Operator-grade reasoning for AIOps.") + lead paragraph describing the agent (correlation, runbook attachment, safe remediation, clean handoff). Two CTAs (See it triage primary / Read the spec ghost). Right column: a SINGLE paragraph reinforcing what LeoRix does + a "Read the spec →" link. NO stats grid. NO fabricated metrics. NO fake product screenshot.

8. INDUSTRIES — 6-card grid using Lucide icons (heart / coins / factory / umbrella / cart / server). Each card: icon + name + 1-line capability caption (capabilities, not metrics). Hover: bg-50 surface change.

9. PROOF — section header + EITHER 4 placeholder stat boxes labeled in italic slate-500 ("Uptime SLA — pending" / "Engagements — pending" / "MTTR reduction — pending" / "Engineer-hours saved — pending") OR a simpler treatment of just cert chips + "Case study available under NDA — request access →" link. Default to the simpler version unless the variant explicitly calls for placeholders. NO Mara Chen, NO fictional case study, NO invented numbers anywhere.

10. METHODOLOGY (Why Connexr) — 5 step blocks (Discover → Architect → Build → Deploy → Optimize) with numbered circle (orange-500 mono numeral on navy-900 fill, 32px), step name (24px DM Sans 600), 1-line process description (16px Plex Sans 400 slate-600). Connecting line between steps (1px slate-300, with orange-500 break point at the active step if any). Mobile: stacked vertical with vertical connecting line on the left.

11. RESOURCES — 1 featured (2/3 width) + 2 supporting (1/3 width stacked). Image area uses navy-900 → navy-950 gradient panel (no fake screenshot). Tag (Featured / Field note / Reference) eyebrow style. Title in italic slate-500 "Title pending." (every article uses placeholder). Meta in slate-500 ("Date pending"). Hover: border navy-200, shadow-md.

12. CTA STRIP — full-width navy-950 panel, 80px section padding. H2 ("Ready to run AI-native operations in production?") + primary orange CTA right. Asymmetric horizontal layout at desktop; stacks at ≤720px.

13. FOOTER — 5-column grid (1.4fr / 1fr × 4): brand block + Services + Products + Industries + Company. White-logo variant. Bottom strip: copyright left + cert chips right, 1px white-10% top border. Each column header: 13px UPPERCASE eyebrow (white).

RESPONSIVE OUTPUT:
- Render desktop (1440px), tablet (768px), and mobile (375px) versions in three labeled panels at the bottom of the canvas.
- Mobile nav drawer present and visible (open state in one of the mobile frames).
- All grids collapse cleanly at the documented breakpoints.
- No horizontal overflow at any width.

INTERACTION STATES (mandatory annotations on canvas):
- Buttons: hover state + focus-visible state, marked with small "← hover" / "← focus-visible" indicators.
- Cards: render one card per grid in hover state.
- Service tabs: default state + alternate-tab state both visible.
- Nav: default state + scrolled-with-blur state both visible.

IMAGE POLICY:
- No stock photos. No AI illustrations. No blob shapes. No gradient meshes.
- Decorative slots = abstract geometric placeholders (a thin orange rule, a single small dot, a clean grid pattern).
- Hero's right-side visual (Variant B only) follows the schematic-flow rule from the wireframe.
- Cert chips in Hero AND Proof render as styled monochrome text chips (not logo images — licensing).
- Trust strip is the ONLY place where real logo images would eventually live; until then, placeholder cells.

ZERO-FABRICATION RULES (still non-negotiable):
- No invented client names, metrics, testimonials, product screenshots, or article titles.
- All placeholders italicized in slate-500 with "(pending)" or "— pending" suffix.
- Industry captions are CAPABILITIES, not metrics.
- Methodology one-liners describe PROCESS, not outcomes.
- Service deep-dive bullets describe CAPABILITIES, not contract terms unless verified.

NO DEAD CODE in the JSX export. Every component defined must be rendered. If a component is no longer used, remove it from the source.

Generate the full page in one continuous canvas at desktop fidelity, with the 3 breakpoint reference frames at the bottom. Surface the canvas for review before export.
```

---

## Mid-flight rescue prompts

If a variant drifts into AI-generic territory, drop one of these as an inline comment on the offending section:

| Drift | Comment |
|---|---|
| Variant looks like a generic SaaS template | "This is reading as a generic template. The reference is [specific named site]. Push harder on [specific quality from the brief]. Don't regenerate the others — fix this one only." |
| Output drifted from design-system tokens | "You used [wrong value]. Brief specifies [right value]. Fix only this." |
| Schematic diagram has invented numbers / labels | "This schematic implies real product structure. Reduce to three abstract node clusters connected by thin orange lines, no labels, no numbers." |
| Placeholder filled in with invented content | "You filled in real content on a placeholder. Revert to italic '(pending)' — invented content is forbidden in this project." |
| Plan-mode questions are too generic | "Skip generic questions — answers are in the brief. Ask only the 5 numbered topics in the prompt." |
| Plateau after ~5 iteration rounds | "Scrap this version. Keep brand learnings. Produce a cleaner pass with more restraint and zero AI tells." |

---

## Mistakes from v1 (and where each is now banned)

| v1 Mistake | New rule that prevents it |
|---|---|
| Fabricated "leorix · live triage" hero console with fake P1 incidents | Hero composition explicitly type-led; Variant B right-side constrained to abstract schematic only |
| Fake LeoRix stats (`2.8M alerts`, `64% MTTR`, `11k hours`, `92% noise`) | LeoRix section explicitly: "NO stats grid. NO fabricated metrics." |
| Mara Chen / Northwind Health fictional testimonial | Case study slot constrained to "NDA — request access" link; no person, quote, or company |
| Fake client names in trust strip (Northwind / Gradient / Orbital / etc.) | Trust strip = 6 placeholder cells labeled "Client logo", italic slate-500 |
| Invented article titles in Resources | All articles use italic "Title pending" placeholder |
| "42 engagements" survived multiple passes | Methodology lead specifies process description only; ZERO-FABRICATION rule restated |
| HeroPanel left as dead code in JSX | Explicit "NO DEAD CODE in the JSX export" rule |
| H1 rendered lowercase ("AI at the core") | Explicit "H1 is Title Case" rule |
| Nav button wrapping at narrow viewports | Design-system styles already include `flex-shrink: 0` + `white-space: nowrap` |
