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

## PROMPT 2 — High-Fidelity Round (Variant B locked, v3 — incorporates wireframe audit fixes)

> Use AFTER reviewing the wireframe round. This version is locked to Variant B (the Editorial / asymmetric direction picked 2026-04-29) and bakes in the 8 fixes identified in the wireframe audit.

```
Variant B from the wireframe round is the locked production layout. The Connexr design system is attached. /docs/DESIGN-BRIEF.md is the canonical brief. Zero-fabrication rules from the wireframe round still apply.

This is the production page. It must clear a 20-year senior frontend engineer's review on the first generation. One-shot, then I'll polish via Tweaks panel.

LOCKED LAYOUT — carry forward from Variant B wireframe exactly:
  Asymmetric 60/40 hero with funnel schematic (3 clusters × 6 nodes, thin orange lines, "fig. 01 — signal flow" + "triage · dedup · route" mono labels) → Mono-label single-row Trust strip with 6 placeholder cells → Sticky-head Services 4/8 split with 6 cards in 2-col right grid → Tech Partners single dense row with "Platform partners →" mono label → Vertical sidebar Service Tabs → Dark navy-950 LeoRix asymmetric panel → Featured + 5 supporting Industries grid → Sidebar + 4-stat Proof grid with NDA link → Horizontal 5-step Methodology rail → Single subscribe Resources block → Symmetric navy-950 CTA Strip → 5-col Footer.

WIREFRAME FIXES — apply these exactly in this build:
  1. Embed all design system tokens INLINE in the <style> block. Do NOT link to external tokens.css. Output must be a single self-contained HTML file with zero external dependencies. No Cloudflare scripts, no email-protection markup, no third-party services.
  2. Subscribe input: render as a static input with "Email address" placeholder text in slate-500 italic. No <a> tags, no email-obfuscation markup. Just a plain styled input next to the orange Subscribe button.
  3. Trust strip: change the "Selected enterprise engagements" eyebrow to neutral "Trusted by enterprise IT teams" — until real logos land, no claim of "engagements". Keep the 6 placeholder cells exactly.
  4. LeoRix paragraph: replace the architectural claims with capability-only description. Exact copy: "Operator-grade reasoning for AIOps incident response. Available standalone or as part of a Managed AIOps engagement. Compliance posture inherits from your tenant. Specifications available on request." Keep the "Read the spec →" link and the orange accent bar.
  5. Service Tabs "What's included" bullets: soften contract-implying phrases. Replace "We carry the pager" with "Embedded on-call rotation". Replace "Quarterly executive read-out" with "Quarterly engagement review". Maintain operator-credible tone but avoid contractual specificity.
  6. Industries section: change "Featured industry" tag on Healthcare to plain "Industry". Remove the "Sector view →" link entirely. Keep the visual featuring (2fr column, span-2-rows) — that's a layout choice, not a content claim.
  7. Curly typographic quotes/apostrophes throughout: don't → don't, you'll → you'll, etc. Em-dashes (—) for parentheticals. En-dashes (–) for ranges. Never straight apostrophes.
  8. Orange accent discipline — per-section cap of THREE intentional touchpoints maximum. In hero specifically: keep cert dots + primary CTA + thin schematic lines. Drop orange node fill from right cluster — left, mid, AND right clusters all in navy. The orange in the hero is connector lines + CTA + dots, nothing else.

PRODUCTION ADDITIONS — beyond the wireframe:

RESPONSIVE — render three breakpoints in vertically stacked panels:
  • Desktop 1440px — primary panel, all 13 sections, includes nav scrolled-with-blur state visible at top
  • Tablet 768px — Services head stacks ABOVE cards (no longer sticky-side); LeoRix grid stacks vertically; method rail wraps 3 + 2 across two rows; partners row wraps 3 + 3; Industries collapses to 2-col with Healthcare still featured (full width); cert chips wrap; footer columns become 2-up
  • Mobile 375px — single column throughout; method rail stacks vertically; schematic compresses to fit hero column at reduced node spacing; subscribe input full-width above the button (stacked); footer columns 1-up
  No horizontal overflow at any width. No content reflow that creates layout shift.

NAV — production:
  • Sticky 64px, default state + scrolled-with-blur (8px) state both shown on desktop frame, separated by a small canvas annotation "← scrolled state"
  • Skip-to-content link as FIRST focusable element of the page. Visually hidden by default (clip-path or sr-only), reveals as orange chip top-left when focused.
  • Mobile drawer ≤768px: hamburger icon top-right → slide-in panel from right, full-height, navy-950 background, white nav links, white CTA, focus-trap when open. Render the OPEN state in the mobile frame.

INTERACTION STATES — annotate with small mono labels next to elements ("← hover", "← focus-visible", "← active", "← disabled"):
  • Primary CTA (orange): all 5 states — default / hover (orange-600) / focus-visible (2px orange-500 ring + 2px white inner ring) / active (-1px transform) / disabled (40% opacity, no cursor)
  • Secondary CTA (navy ghost): default + hover (slate-100 bg) + focus-visible
  • Ghost CTA: default + hover + focus-visible
  • Service & Industry cards: default + hover (border slate-200 → navy-200, shadow-sm → shadow-md). NO translate, NO scale. Cursor pointer.
  • Service Tabs sidebar: default tab + active tab (left border 2px orange-500, color navy-900, weight 600) + hover tab (color slate-500 → navy-700). Below the default Managed AIOps panel, show ONE alternate panel (AI Transformation) so reviewers see the tab swap.
  • Subscribe input: default + focus-visible (2px orange-500 ring outside the bordered container)

TYPE RHYTHM — production polish (these are the senior-FE tells):
  • Display sizes ≥48px: line-height 1.05, letter-spacing -0.025em
  • H3 (32px): line-height 1.15, tracking -0.015em
  • Body 16-18px: line-height 1.55, no tracking
  • Caption 12-14px: line-height 1.4-1.5, tracking 0.02em
  • Eyebrow 12px UPPERCASE: tracking 0.08em
  • Hanging punctuation on bullet lists; baseline alignment of step numbers with step names; em-dash in mid-sentence is hair-spaced

IMAGE / DECOR POLICY:
  • No stock photos. No AI illustrations. No blob shapes. No gradient meshes. No 3D anything.
  • Hero schematic preserved with the right-cluster orange→navy fix. Funnel topology intact: 6-6-6 nodes, thin orange connecting lines, faint cluster guides, mono labels.
  • Decorative slots elsewhere = abstract geometric placeholders (a thin orange rule, a single small dot, a clean grid pattern). Already present in wireframe — preserve.
  • Cert chips render as styled monochrome text chips (existing approach), never logo images.
  • Trust strip = 6 placeholder cells. No text wordmarks, no fake company names.

QUALITY BAR (must clear in one shot):
  • Every spacing value on the 8pt grid (4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160). No 13px, no 21px.
  • Border radii from {0, 4, 8, 12} only. No pills.
  • Hierarchy via type weight + size + spatial separation, NOT color saturation.
  • Per-section orange cap: 3 intentional touchpoints maximum.
  • Body contrast ≥ 4.5:1 on every surface. White-on-navy-950 contrast ≥ 7:1.
  • All copy uses curly typographic quotes and em-dashes. Zero straight apostrophes.
  • JSX export contains only rendered components. No dead code, no unused functions.
  • All buttons render with their full state set as specified.

ZERO-FABRICATION — non-negotiable, carries from wireframe:
  • No invented client names, metrics, testimonials, product UI, article titles, or architectural claims about LeoRix.
  • All placeholders italicized slate-500 with "(pending)" or "— pending" suffix where applicable.
  • Industry captions = capabilities only, max 6 words each.
  • Methodology one-liners describe PROCESS, not outcomes.
  • Service descriptions = capabilities, no contract-implying language unless explicitly verified.

OUTPUT:
  • One scrollable canvas. Three labeled panels stacked top-to-bottom: Desktop 1440 / Tablet 768 / Mobile 375.
  • Each breakpoint renders all 13 sections.
  • Interaction-state annotations on the desktop frame (small mono labels).
  • All design system tokens embedded inline. Single self-contained HTML file.

When uncertainty exists, prefer the more conservative interpretation aligned with the locked wireframe. If a reference would push the design outside the locked tokens, surface the conflict before generating — do not break the system.

Generate the production page in one continuous canvas with the 3 breakpoint panels. Surface for review before export.
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
