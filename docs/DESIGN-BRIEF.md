# Connexr — Brand & Design Brief

> Upload this file as context when creating the design system in Claude Design (`claude.ai/design` → Design Systems → Create). Also upload `connexr-logo.png` from this same folder.

---

## Company

**Name:** Connexr (a division of RSA Tech Group)
**Category:** B2B AI Managed Services & AIOps consultancy
**Heritage:** 15 years (RSA Tech Group)
**Buyers:** CIOs, CTOs, VP IT, Heads of SRE/Platform at enterprise companies (500+ employees)
**Competitors:** Accenture, IBM Consulting, Kyndryl, Cognizant
**Differentiator:** AI-native ops execution, not slide-deck consulting
**Certifications:** SOC 2 Type II · HIPAA · ISO/IEC 27001:2022 · GDPR

## Voice

- Austere, technical, authoritative — confidence by precision, not adjectives
- Operator-credible — implies "we've actually run 3am incidents at scale," not "we'll write you a deck"
- No marketing fluff, no AI hype words ("revolutionary", "cutting-edge", "next-gen", "game-changing", "unleash")
- Verbs over nouns, specifics over generalities, numbers over claims

## Brand Tokens (extracted from connexr.com — DO NOT change without approval)

### Colors

| Token | Hex | HSL | Usage |
|---|---|---|---|
| **navy-900 (primary)** | `#122560` | 229 59% 27% | Logo wordmark, primary text on light, dark surfaces |
| **navy-950 (deep)** | `#0F1629` | 222 47% 11% | Body text on light bg, deepest backgrounds |
| **orange-500 (accent / CTA)** | `#F27A1A` | 39 100% 50% | Logo mark dots, primary CTAs, focus rings, single accent moments |
| **bg-50** | `#F8FAFC` | 222 47% 98% | Light section backgrounds |
| **white** | `#FFFFFF` | — | Card surfaces |
| **slate-500 (muted)** | `#64748B` | 215 16% 47% | Secondary text, captions, dividers |
| **slate-200 (border)** | `#E2E8F0` | 214 32% 91% | Hairlines, card borders, input borders |

**Color discipline (non-negotiable):**
- **One** accent color visible per section. Never rainbow.
- Orange `#F27A1A` is for the SINGLE primary CTA per section, focus rings, and small mark moments only. It is NOT a section background.
- Navy `#122560` is the brand. It dominates.
- All status / chart colors (success, warn, error) live in muted palettes — never neon.

### Typography

| Role | Font | Weights | Notes |
|---|---|---|---|
| **Logo** | DM Sans | 700 | Baked into the PNG — do not re-render |
| **Headings (h1–h6)** | DM Sans | 600, 700 | Matches the logo wordmark — brand consistency |
| **Body** | **IBM Plex Sans** | 400, 500 | Replaces Inter — pairs with DM Sans, used by IBM/Datadog/GitLab |
| **Mono / ticker / code / console** | **IBM Plex Mono** | 400, 500 | For status tickers, code blocks, AIOps console moments |
| **Editorial display (secondary)** | **IBM Plex Serif** | 700 | For variants needing serif gravitas (Enterprise Authority, Hypermaximal Editorial). Free, family-coherent with Plex Sans/Mono. Override on h1/h2 only — body remains Plex Sans. |

**Font discipline:**
- Inter is **banned** (overused, default-AI signal).
- No more than 2 typefaces visible per section + 1 mono accent if relevant.
- Letter-spacing on display sizes ≥ 48px: `-0.02em` to `-0.03em`.
- Body line-height: 1.55. Display line-height: 1.1 to 1.15.

### Type Scale (locked)

```
12px → caption / label
14px → small body, nav links
16px → body default
18px → body large, lead paragraphs
24px → h4
32px → h3
48px → h2 / hero subtitle
72px → h1 desktop
96px → display / brutalist hero only
```

### Spacing System (8pt grid — LOCKED)

```
Allowed values: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160 (px)
Section vertical padding (desktop): 96px
Section vertical padding (tablet):  64px
Section vertical padding (mobile):  48px
Container max-width: 1280px
Container horizontal padding: 48px desktop / 24px mobile
Grid: 12 columns, 24px gutters
```

**Never use** non-grid values like 13px, 19px, 21px, 28px. If a value isn't in the allowed list, round to the nearest.

### Border Radius

```
0   → editorial / brutalist directions
4px → inputs, small chips
8px → cards (default)
12px → large surfaces (hero panels)
9999px → never (no pill CTAs in the default system)
```

### Iconography

- Stroke-based, 1.5px uniform stroke, 24×24 default size
- Single-color (navy or current text color) — no gradient fills
- Source: Lucide / Phosphor (regular weight) — NOT Material Icons, NOT FontAwesome

---

## Component Patterns Required

### Nav (sticky top, 64px height)
- Logo left (height 28px → ~100px wide)
- 5 nav items: Services / Products / Industries / Insights / Company
- "Book a demo" CTA right (orange `#F27A1A`, white text, 8px radius)
- Border-bottom 1px slate-200, white bg with 92% opacity + backdrop-blur on scroll

### Button System (4 states each)

```
Primary CTA:    bg orange-500   text white   hover bg #DB6A0E   focus 2px orange ring   disabled 40% opacity
Secondary:      bg navy-900     text white   hover bg navy-950
Ghost:          bg transparent  text navy    hover bg slate-100   border slate-200
Link:           text navy       underline-on-hover only
```
All buttons: 12px vertical padding, 24px horizontal, 14px text, 500 weight, 8px radius.

### Section Header
- Eyebrow label (12px UPPERCASE, slate-500, letter-spacing 0.08em) → optional
- H2 (32px, DM Sans 700, navy-900)
- Lead paragraph (18px, IBM Plex Sans 400, navy-950, max-width 640px)
- 48px bottom margin to first content row

### Service Card
- White bg, 1px slate-200 border, 8px radius
- 32px internal padding
- Icon top (24px, navy)
- H4 title (24px, DM Sans 600)
- Body (16px, IBM Plex Sans 400, slate-600)
- Optional "Read more →" link bottom (navy, 14px, underline on hover)
- Hover: border navy-200, subtle shadow `0 8px 24px rgba(18,37,96,0.06)`

### Stat Card (Proof section)
- Number (48px, DM Sans 700, navy-900) with optional unit (24px regular)
- Label below (14px UPPERCASE, slate-500, 0.08em letter-spacing)
- Optional small caption (12px, slate-500)
- 8px gap, no border by default

### Footer
- Dark navy-950 bg, white-ish text (white at 80% on body, 100% on headings)
- 5-column grid: brand block + 4 link columns
- 48px section padding, 32px between rows
- Bottom strip: copyright left, social right (icons only, 20px, white at 60%)

---

## Section Order (the canonical 13-block landing structure)

1. **Nav** (sticky)
2. **Hero** — headline + subline + 2 CTAs + 4 trust badges (cert chips)
3. **Trust Strip** — 6 client logos (placeholders ok)
4. **Services Overview** — 3×2 service card grid
5. **Tech Partners** — AWS / Azure / GCP / ServiceNow / Datadog / Microsoft 365
6. **Service Tabs** — 3-tab deep-dive (Managed AIOps / AI Transformation / Cloud)
7. **LeoRix AI** — flagship product callout, dark section
8. **Industries** — Healthcare / FinTech / Manufacturing / Insurance / Retail / AIOps & IT Ops
9. **Proof** — 4 stats + 1 case study + 4 cert badges
10. **Why Connexr** — 5-step methodology (Discover → Architect → Build → Deploy → Optimize)
11. **Resources** — 1 featured + 2 supporting articles
12. **CTA Strip** — full-width dark band with "Book a demo" CTA
13. **Footer**

---

## Hero Copy (default)

**Headline:** "AI at the Core. Scale at Speed."
**Subline:** "We run AI-native operations for enterprise IT — eliminating alert fatigue, automating incident response, and giving your team back the hours."
**Primary CTA:** Book a demo
**Secondary CTA:** Explore the platform
**Trust badges:** SOC 2 Type II · HIPAA · ISO 27001 · GDPR

---

## Anti-Defaults (BAN LIST — these are AI-vibe tells)

**Typography:**
- Inter font anywhere
- Centered-everything layouts (real designers use asymmetry deliberately)
- All-caps headlines longer than 5 words
- Mismatched font-family pairings beyond the locked stack

**Color:**
- Purple-to-blue gradients (the AI signature)
- Pink-to-violet gradients
- Neon / electric-blue glows on text or buttons
- Multi-color rainbow accent grids
- Triple-gradient hero backgrounds
- Animated mesh blobs

**Layout:**
- Floating dashboard screenshot tilted 15° in hero
- Glass morphism unless explicitly editorial-direction
- Hero with one giant emoji
- Stock photo of business people in suits
- Generic 3D laptop illustrations
- Auto-rotating "trusted by" carousel
- Mismatched border radii (mix of 4 / 12 / 16 / 24px in same view)
- Pill-shaped CTAs (radius 9999px)

**Content / copy:**
- "Revolutionary" / "next-gen" / "cutting-edge" / "unleash" / "game-changing"
- "AI ✨" sparkle emoji or badge
- "🚀 Launch faster" / "💡 Smart insights" — emoji-prefixed value props
- "1️⃣ 2️⃣ 3️⃣" emoji step lists
- Inflated ratings ("4.9★ on G2") without context
- "Powered by AI" copy
- Lorem ipsum visible anywhere

**Motion:**
- Auto-shimmer gradient sweeps
- Background mesh blobs animating
- Bouncy spring animations on hover
- Hover scale > 1.02 on cards
- Parallax on hero (causes content shift)

**REQUIRE instead:**
- Real numbers (not "1000+ customers" — give a real proxy: "42 enterprise engagements, 2.8M alerts triaged in 2025")
- Real industry names, real product names (LeoRix AI, not "our flagship product")
- Real density (cards have 3-5 data points, not one emoji + headline)
- Asymmetric hero layouts in at least 2 of 6 variants
- Subtle motion only — fade-ups at 200ms, no scale, no glow
- Buttons with all 4 states defined

---

## Senior-Dev Quality Markers (the "20-year FE veteran" bar)

A reviewer with 20 years' frontend experience should see:

1. **Spacing alignment** — every gap is an 8pt multiple. No 13px, no 21px.
2. **Type rhythm** — line-heights set per size, letter-spacing tuned at display, optical alignment of bullets.
3. **Hierarchy via type, NOT color** — importance is established by weight + size + spatial separation. Color saturation as a hierarchy tool is a junior-dev tell. Reserve color for the single accent moment per section.
4. **Content-first composition** — layout adapts to real copy length. Don't force 4-word headlines because that's all that fits; don't pad with filler if the real subline is 14 words. The design serves the message.
5. **Component states** — buttons have hover + focus-visible + active + disabled. Cards have hover. Links have underline-on-hover.
6. **Restraint** — one primary accent moment visible per section. One CTA per section. Whitespace dominates.
7. **Real-world content** — placeholder copy reads like an actual B2B product page, not lorem.
8. **Asymmetry** — at least one section in each variant breaks the centered-grid default. Centered-everything is the AI tell.
9. **Microtype** — em-dashes (—), proper apostrophes ('), no double-quotes for emphasis.
10. **Edge case awareness** — visible mobile/responsive breakpoints, focus rings, contrast above 4.5:1 on body.

---

## Output Expectations (for Session 1)

- Six wireframe-fidelity hero variants (one canvas, six panels OR six remixes)
- Each labeled with its direction name
- All inheriting the design system tokens above
- Each hero is real (not placeholder boxes) — actual headline, subline, CTAs, trust strip, and ONE supporting visual element
- After we pick a winner, Session 1 (continued) builds the winner to all 13 sections
