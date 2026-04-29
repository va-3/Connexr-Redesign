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
  1. Embed all design system tokens INLINE in the <style> block. Do NOT link to external tokens.css. Output must be a single self-contained HTML file with NO JavaScript dependencies and NO Cloudflare scripts. Google Fonts @import for DM Sans + IBM Plex Sans/Mono/Serif IS required (it's how the locked typography loads). No third-party scripts beyond the Google Fonts CSS @import.
  2. Subscribe input: render as <input type="email" name="email" aria-label="Email address" placeholder="Email address" /> with placeholder styled slate-500 italic, next to the orange Subscribe button. No <a> tags around the input, no email-obfuscation markup, no JS wiring.
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
  • Skip-to-content link as FIRST focusable element of the page. Visually hidden by default (clip-path or sr-only), reveals as orange chip top-left when focused. The link's href="#main"; page content is wrapped in <main id="main" tabindex="-1"> so the skip target exists.
  • Mobile drawer ≤768px: hamburger icon top-right → slide-in panel from right, full-height, navy-950 background, white nav links, white CTA, focus-trap when open. Hamburger button has aria-label="Open navigation". Render the OPEN state in the mobile frame.
  • Logo assets: reference at ./assets/connexr-logo.png (nav and footer, with the white variant connexr-logo-white.png on dark surfaces). Do NOT inline as data URI. Do NOT redraw as inline SVG. The assets folder is part of the design system bundle.

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
  • Cert chips: in Hero, each chip has a small orange-500 leading dot prefix (existing .cert-chip.dot pattern from wireframe). In Proof and Footer, chips render plain (text only, no dot). This visual variation is intentional — preserve it. Never logo images.
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

## PROMPT 3 — Stakeholder Preview (single-desktop, interactive)

> Generates a NEW file (`Preview.html`) alongside the existing `Production.html` — does not overwrite. Single canonical desktop view, viewport-fluid for MacBook screens, with a marquee Trust strip and a fully wired Service Tabs component. Use for stakeholder review when the multi-state engineering spec is too cluttered.

```
The Connexr design system is attached. /docs/DESIGN-BRIEF.md is the canonical brief. The locked Variant B layout from the production round stays canonical.

Build a NEW artifact in this project — DO NOT modify the existing Production.html. Save the new file as `Preview.html`. This is a stakeholder-grade preview for visual review on a MacBook, with light interactivity baked in. It is NOT an engineering spec — strip all spec affordances (no breakpoint frames, no annotation layers, no state demonstration blocks, no canvas chrome).

LAYOUT & VIEWPORT
- Single desktop preview, viewport-fluid: layout fills the available width with content max-width 1440px centered. Scales gracefully on common MacBook viewports (1440 / 1512 / 1728). No fixed 1440px wrapper, no canvas chrome, no panel labels.
- Use the locked Variant B layout exactly: 60/40 asymmetric hero with funnel schematic, sticky-head Services 4/8 split, vertical sidebar Service Tabs, dark navy-950 LeoRix asymmetric panel, featured + 5 supporting Industries grid, sidebar + 4-stat Proof, horizontal 5-step Methodology rail, single-subscribe Resources, navy-950 CTA Strip, 5-col Footer.

PINNED CTA STATES
- Primary "Book a demo" CTAs (nav, hero, CTA strip): default state — orange-500 fill, white text, no ring.
- Both "Explore the platform →" CTAs (hero + CTA strip): rendered with the focus-visible state pinned via a `.focus` class so the 2px orange-500 ring is visible without keyboard tabbing. This is the page's only state demonstration.
- All other interactive elements stay in default.

TRUST STRIP — infinite marquee
- Replace the static 6-cell trust strip with an infinite horizontal marquee of 8–10 abstract logo placeholders. Each placeholder is a geometric monogram (circle / square / hexagon / triangle / diamond / capsule), ~120×64px, slate-500 1.5px stroke on transparent background, with a small mono caption "PLACEHOLDER 01" / "PLACEHOLDER 02" centered beneath.
- Animation: seamless horizontal scroll, ~30s per loop, paused on hover. Use CSS `transform: translateX()` with `will-change: transform`; do NOT animate `left`/`margin`. Duplicate the marquee track inline so the loop is unbroken (no JS-driven seam).
- Mask the marquee edges with a 64px linear-gradient fade on left + right so logos don't pop in/out abruptly.
- Respect `prefers-reduced-motion: reduce`: when set, freeze the animation and render a static row of 6 placeholders centered in the viewport.
- ZERO-FABRICATION applies: do NOT invent real company names or wordmarks. Placeholders are abstract geometric shapes only. Eyebrow stays "Trusted by enterprise IT teams".

SERVICE TABS — functional component
- The 3-tab component (Managed AIOps / AI Transformation / Cloud & Infrastructure) is fully wired with vanilla JS, no framework dependencies, no external libraries.
- Tab switching: click swaps the active panel; only the active panel is rendered visible (use the `hidden` attribute on inactive panels). Active tab styling: orange-500 left border, navy-900 weight-600 text.
- ARIA: `role="tablist"` on the sidebar container, `role="tab"` with `aria-selected="true|false"` and `aria-controls="<panel-id>"` on each tab, `tabindex="0"` on the active tab and `tabindex="-1"` on the inactive ones, `role="tabpanel"` with `aria-labelledby="<tab-id>"` on each content panel.
- Keyboard navigation: ArrowDown/ArrowUp move focus between tabs without activating; Enter or Space activates the focused tab and moves focus to its panel; Home jumps to first tab, End jumps to last.
- Each panel uses the existing capability bullets from the locked Variant B layout. No new copy, no contract-implying language ("SLA-backed", "we carry the pager"), no invented metrics.

ZERO-FABRICATION — carries from production, non-negotiable
- No invented client names, metrics, testimonials, product UI, article titles, or architectural claims about LeoRix. Trust strip = abstract geometric placeholders only.
- LeoRix section: capability-only paragraph + "Read the spec →" link. NO stats grid, NO product screenshot.
- Proof section: italic "Pending" stat boxes + cert chips + "Case study available under NDA — request access →" link.
- Resources: single "Insights coming soon — subscribe →" block with semantic `<input type="email" name="email" aria-label="Email address">`.
- All copy uses curly typographic apostrophes (U+2019) and em-dashes (U+2014). Zero straight apostrophes.

QUALITY BAR
- 8pt grid throughout. Radii from {0, 4, 8, 12}. Per-section orange cap of 3 intentional touchpoints. Hierarchy via type weight + size + spatial separation, not color saturation.
- Single self-contained HTML file. Tokens inlined. Google Fonts @import for DM Sans + IBM Plex Sans/Mono/Serif (the one allowed external load). Logo references at `./assets/connexr-logo.png` and `connexr-logo-white.png` — relative path, not data-URI'd, not redrawn as inline SVG.
- Semantic HTML: `<header>` with `<nav>`, `<main id="main" tabindex="-1">`, `<section>` per content block, `<footer>`. Skip-to-content link as first focusable element with `href="#main"`, hidden by default, revealed on focus.
- Focus-visible state on every interactive element renders the 2px orange-500 ring per the existing pattern.
- No dead code in the HTML/JS export — every defined component, class, or function is used.

OUTPUT
- Save as `Preview.html` (new file alongside Production.html — do NOT overwrite the existing file).
- Single canonical desktop preview. No three-breakpoint stack, no canvas frame, no panel labels, no annotation labels, no state demonstration blocks.
- Surface for review before export.
```

---

## PROMPT 4 — Hero Architecture Spin (replaces the funnel schematic)

> Surgical replacement of the hero right-column schematic in the existing `Production.html`. Swaps the saturated funnel-shape diagram for a labeled five-layer operating-system schematic in an engineering-drawing aesthetic. Cream surface, Plex Mono labels, compliance envelope as structural element, single pulsing accent on the LeoRix node.

```
The Connexr design system is attached. /docs/DESIGN-BRIEF.md is the canonical brief. The locked Variant B layout from the production round stays canonical.

SCOPE: replace ONLY the hero right-column schematic in Production.html. Do NOT regenerate or modify any other section, copy, or component. The hero left column (eyebrow, H1, subline, CTAs, cert chips), all 12 other sections, and the canvas chrome (panel labels, breakpoint frames) remain identical to the current Production.html. Apply the same hero-schematic replacement consistently across all three breakpoints (desktop 1440 / tablet 768 / mobile 375).

REPLACE THE HERO SCHEMATIC

The current hero right visual is a funnel-shape SVG with three vertical clusters of 6 nodes connected by thin orange lines. That pattern reads as generic enterprise-IT clipart — saturated across the competitive set. Replace it with a deliberate, labeled architecture schematic rendered in an engineering-drawing register that reads as Connexr's own internal operating-system reference, not a stock template.

VISUAL TREATMENT — "blueprint reference"

The new schematic occupies the same hero right column (40% width on desktop, 4:3 aspect ratio surface). Material treatment:

- Surface: a 12px border-radius cream panel (#FAF8F1) with a 1px slate-200 outer hairline. The cream is intentional — it's warmer than pure white and signals "engineering reference document" rather than "marketing graphic". This is the only #FAF8F1 surface on the page; do not introduce it elsewhere.
- Internal padding: 32px. All internal spacing on the strict 8pt grid (4, 8, 12, 16, 24, 32, 48).
- Stroke-only construction throughout. Navy #122560 hairlines at 1px (default) and 2px (layer outlines). No filled shapes except the single accent node described below.
- Typography on the diagram: IBM Plex Mono only. 11px slate-500 (#64748B) for layer body labels, 10px UPPERCASE letter-spacing 0.08em for layer titles, 9px slate-400 for footnote-style annotations. No display typeface inside the diagram — it is reference material, not editorial.
- Reference annotations in the engineering-drawing tradition: "fig. 01 — leorix runtime, simplified" mono caption anchored top-left of the surface; "§ schematic-01.0" mono caption anchored bottom-right; faint 2-2 dotted dimension lines (1px slate-300) connecting external labels to their target rectangles where helpful.
- No drop shadows, no gradients, no glow effects, no glass morphism. The surface is flat by intent.

STRUCTURE — five-layer operating stack with compliance envelope

The diagram renders the LeoRix AIOps runtime as a five-layer vertical stack inside the cream surface. Each layer is a 2px slate-300 outlined rectangle, 8px border-radius, with an inner 1px slate-200 hairline 8px inside the outer outline (creating a thin double-line treatment that reads as engineering-drawing convention). Each layer carries a section-number title on the left and 2–4 sub-component descriptors on the right.

From top to bottom (vertical stack, equal heights, 12px gaps between layers):

  § 01 · INGEST          telemetry · logs · traces · tickets
  § 02 · SUPPRESS        correlation · dedup · noise floor
  § 03 · ENRICH          LeoRix AI · root-cause inference · runbook selection
  § 04 · ACT             auto-remediate · escalate · runbook execution
  § 05 · ATTEST          evidence trail · audit log · change record

A dotted-perimeter "compliance envelope" wraps the entire 5-layer stack. The envelope is a 2px slate-300 dashed (4-4 dasharray) rounded-rect with 12px border-radius, padded 16px outside the layer rectangles. Along the top edge of the envelope, centered, in IBM Plex Mono 10px slate-500 letter-spacing 0.06em UPPERCASE: "ATTESTED · SOC 2 TYPE II · HIPAA · ISO 27001 · GDPR". This makes the certifications part of the architecture, not a separate footer ornament.

ACCENT — the only orange in the schematic

Layer 03 (ENRICH) is the load-bearing element. Its outer rectangle outline is rendered in orange-500 #F27A1A (1px stroke, matching weight; no fill). Inside layer 03, immediately preceding the "LeoRix AI" text, a small filled orange-500 circle (radius 3px) anchored on the same baseline as the layer label.

That circle is the single live element: a subtle pulse animation. CSS keyframe only, no JavaScript:
- transform: scale(1.0) → scale(1.4) → scale(1.0) over 2.4s, ease-in-out
- opacity: 1.0 → 0.55 → 1.0 in lockstep
- transform-origin: center
- animation: infinite
- will-change: transform, opacity for GPU-accelerated motion
- Wrap the entire @keyframes + animation declaration in @media (prefers-reduced-motion: no-preference) { ... }. Users with prefers-reduced-motion: reduce see the schematic fully static — the dot remains visible but does not animate.

Orange appears nowhere else in the schematic. The hairlines, layer outlines (except 03), labels, dimension lines, captions, and compliance envelope are all navy or slate. The single-accent-per-section rule is respected.

LAYOUT BEHAVIOR ACROSS BREAKPOINTS

- Desktop 1440px: schematic surface fills the right 40% column, full 4:3 aspect ratio.
- Tablet 768px: hero stacks single-column; schematic surface sits below the hero copy block at full container width, height auto, maintaining 4:3 internally.
- Mobile 375px: schematic surface compresses to fit the column. Layer rectangles remain full-width within the surface; sub-component label text wraps to a second line if needed; mono labels reduce to 10px for layer body, 9px for titles. Pulse animation continues to honor prefers-reduced-motion.

SVG IMPLEMENTATION SPEC

- Inline <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid meet" role="img" aria-label="LeoRix AIOps runtime — five-layer architecture: ingest, suppress, enrich, act, attest, wrapped by an attested compliance envelope (SOC 2 Type II, HIPAA, ISO 27001, GDPR).">
- Internal <text> elements use IBM Plex Mono via the existing @import (already loaded for the page). Do NOT add a second font load.
- All <rect>, <line>, <text> elements in the schematic carry the same fill/stroke pattern; no inline color overrides except the orange accent rectangle and circle.
- The animated <circle> is the only element with the .pulse class. CSS for the pulse keyframe is added inside the existing <style> block, not as a separate <style> tag.

ZERO-FABRICATION (non-negotiable)

- No invented metrics: no "47 alerts", no "MTTR ↓ 64%", no specific timing claims, no version strings. The schematic is structural, not data-driven.
- No invented client names, no specific tool brands inside the schematic (no "Splunk", "Datadog", "ServiceNow" labels — those belong in the existing Tech Partners section, not the architecture).
- LeoRix label inside layer 03 reads exactly "LeoRix AI · root-cause inference · runbook selection" — capability descriptors only, no quantified claims, no version number.
- Compliance envelope text is exactly the four certifications already attested by Connexr: SOC 2 Type II, HIPAA, ISO 27001, GDPR. Do not add others.
- "fig. 01" caption and "§ schematic-01.0" reference are typographic engineering-drawing convention — they do not invent a series of figures or sections that exist elsewhere.

QUALITY BAR

- 8pt grid throughout the schematic surface (padding, layer heights, gaps, label offsets).
- Per-section orange-accent cap respected (the orange outline + pulse dot count as the section's accent moments).
- Hairlines at 1px or 2px only. No fills except the pulse dot.
- Type-led hierarchy inside the schematic (size + weight + spatial separation, not color).
- Cream surface #FAF8F1 used only here on the page — distinguishes the schematic from white card surfaces and dark navy-950 sections.
- Single self-contained SVG inlined in the HTML. No external image asset. No JavaScript framework. No animation library.
- Curly typographic apostrophes (U+2019) and em-dashes (U+2014) in any new label copy. Zero straight apostrophes.

DO NOT TOUCH

- Hero left column (eyebrow, H1 "AI at the Core. Scale at Speed.", subline, two CTAs, four cert chips with orange dots) — unchanged.
- Trust strip, Services, Tech Partners, Service Tabs, LeoRix AI section, Industries, Proof, Methodology, Resources, CTA Strip, Footer — unchanged.
- The locked Variant B layout structure — unchanged.
- The button-states reference block in the desktop frame — unchanged.
- Tablet and mobile breakpoint frames — only the schematic content within their respective heroes changes; the rest of each frame is unchanged.

OUTPUT

Surface the updated Production.html with the new hero schematic on the canvas for review. Annotate the schematic in the desktop frame with a small mono label below the surface: "← architecture schematic · static + single pulse on LeoRix node · respects prefers-reduced-motion". Apply the same schematic to tablet and mobile breakpoints, with the responsive behavior described above. Re-export when approved.
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
