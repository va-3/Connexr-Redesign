# Connexr × Claude Design — 2-Hour Playbook (v2, post-QA)

> Goal: 6 wireframe variants → pick winner → full landing page → export to Claude Code, in 2 hours and ~50% of weekly quota.

---

## Pre-flight (2 min)

1. Open `claude.ai/design` (web only).
2. Confirm model = **Opus 4.7** (gear icon top-right). 3× screenshot fidelity vs 4.6.
3. Have these files ready to drag in (both in `~/Desktop/connexr redesign/claude-design-kit/`):
   - `connexr-logo.png`
   - `DESIGN-BRIEF.md`

---

## STEP 1 — Create the design system (~22% quota, 5–15 min ingestion)

Top-left → **Design Systems** → **Create**.

**Company name:** `Connexr`

**Drag in both files:** `connexr-logo.png` + `DESIGN-BRIEF.md`

**Paste this prompt:**

```
Use the uploaded DESIGN-BRIEF.md as the single source of truth for this design system. Extract all tokens, component primitives, spacing rules, type scale, radii, and the anti-defaults banlist exactly as specified — do not substitute or invent values.

Two clarifications layered on top of the brief:

1. Type families locked: DM Sans (headings, matches logo), IBM Plex Sans (body — Inter is banned), IBM Plex Mono (tickers/console), IBM Plex Serif (secondary editorial display, h1/h2 only on variants that call for it). All four families are free; do not substitute.

2. Component primitives must include all four button states (default / hover / focus-visible / disabled), card hover state, and link underline-on-hover. The brief enumerates the exact specs.

When ingestion completes, surface the draft. I will verify line by line: navy #122560, orange #F27A1A, the four type families, 8pt spacing, the {0, 4, 8, 12} radius set, and the banlist coverage — before we move to project creation.
```

**While ingesting (5–15 min):** good time to text/Slack your boss — *"Keeping the live navy + orange + DM Sans logo. Swapping body font from Inter to IBM Plex Sans (used by IBM/Datadog). OK?"* Sixty-second risk hedge.

**When draft appears:** verify every token. If any drifted, reply: *"Mismatch — [token] should be [value], you produced [value]. Fix only the affected primitives."*

✅ Don't proceed until: navy `#122560`, orange `#F27A1A`, DM Sans / IBM Plex Sans / IBM Plex Mono / IBM Plex Serif, 8pt spacing, radius {0,4,8,12} all confirmed.

---

## STEP 2 — Create the project (1 min, free)

Homepage → **Create new project** → name it `Connexr Landing v1` → attach the **Connexr design system** → select **High fidelity**.

**Drag `DESIGN-BRIEF.md` into the project context window** (re-attach at project level so the section structure, hero copy, and banlist are in scope alongside the design system tokens).

---

## STEP 2A — Round 1: 3 broad-spread hero variants (~10% quota, ~10 min)

**Paste this prompt** (the last paragraph forces plan mode — don't skip):

```
The Connexr design system is attached. DESIGN-BRIEF.md is also attached at project level — the section structure, hero copy, banlist, and senior-FE quality markers in it are non-negotiable hard constraints.

We're producing landing-page hero variants in two rounds. This is round 1 — three broad-spread directions covering the widest aesthetic territory. After review, round 2 adds three more differentiated directions.

Round 1 variants (generate these now, after plan-mode Q&A):

A — Enterprise Authority
  References: IBM Consulting + Accenture
  Display family: IBM Plex Serif 700 (override DM Sans on h1/h2 only — body remains Plex Sans)
  Surface: light (bg-50 #F8FAFC)
  Mood: gravitas, heritage, "adults in the room — 15 years operating real ops"
  Hero composition: classical 12-col grid. Serif H1, restrained subline, two CTAs side-by-side, trust badge chip strip below. One subtle proof element right side — a single quoted client metric in a clean card with a real attribution (e.g., "MTTR reduced 73% — VP Infrastructure, Fortune 500 healthcare").

B — Modern AIOps Operator
  References: Datadog + Linear + PagerDuty
  Display family: DM Sans 700 (system default)
  Mono accent: IBM Plex Mono 500 — used heavily for status ticker
  Surface: dark (#0F1629)
  Mood: "we ARE the product, we run ops at your scale"
  Hero composition: asymmetric. Left = headline + subline + CTAs. Right = live AIOps console mockup (window chrome with traffic-light dots, sidebar listing 5+ services with green/amber/red status dots, 4 metric tiles showing real-feel numbers like 99.98% uptime / 4.2min MTTR / 2,847 incidents / 6 services live, scrolling incident feed with 5+ rows in Plex Mono with timestamps + severity + service + resolution status). Real density. No placeholder boxes.

C — Premium Category Leader
  References: Stripe + Vercel
  Display family: DM Sans 600 (system default, lighter weight than A's serif)
  Surface: white
  Mood: "the Stripe of AIOps consultancies — premium category leader"
  Hero composition: type-led. H1 dominates the visual weight. Generous whitespace. Single line of subline. Two CTAs. Trust badge strip horizontally below. ONE subtle visual element — either a thin orange accent line, a single muted gradient on a background panel, or a small SVG mark — no floating dashboard, no purple gradient, no AI-vibe.

Hero copy (use ACROSS all 3 variants — we're comparing aesthetics, not messaging):

  H1: "AI at the Core. Scale at Speed."
  Subline: "We run AI-native operations for enterprise IT — eliminating alert fatigue, automating incident response, and giving your team back the hours."
  Primary CTA: "Book a demo"
  Secondary CTA: "Explore the platform"
  Trust badges: SOC 2 Type II · HIPAA · ISO 27001 · GDPR

Layout output:
- One scrollable canvas, three panels stacked vertically.
- Each panel renders the hero AT FULL DESKTOP SIZE (1440px wide). No scaling-down to fit a grid.
- Each panel labeled at top-left with its letter and direction name.
- Each panel includes a 64px nav bar above the hero (logo left, 5 nav items + orange CTA right).

Quality bar — the most important paragraph in this prompt:

These must read as built by a senior frontend engineer with 20 years of experience. Not as AI-generated. That means:
- Every spacing value lands on the 8pt grid. No 13px, no 21px.
- Hierarchy via type weight + size + spatial separation. Color is reserved for the single accent moment per section.
- Real density. Variant B's console has actual data (5+ services, 4 metric tiles, 5+ incident rows). No placeholder boxes, no empty states, no "..." truncation.
- Buttons show hover and focus-visible states (annotate one of each on the canvas).
- The full anti-defaults banlist applies. Inter, purple gradients, glass morphism, neon glows, pill CTAs (radius 9999), rainbow accents, sparkle emojis, floating tilted dashboards, auto-rotating logo carousels, AI sparkle badges — none can appear in any variant.
- Asymmetry is valid and preferred for hero composition. Centered-everything is the AI tell.
- If a reference (e.g., "Datadog") would push a design outside the locked design system tokens, surface the conflict before generating — do NOT break the system to chase the reference.

DO NOT GENERATE YET. Before building, ask me 5–7 specific questions covering ONLY:
1. Variant B's console proof element — confirm the metric set and incident feed content
2. Trust badge treatment — chip strip with cert icons vs text-only inline list
3. Whether the "By RSA Tech Group" subtitle appears in nav across all variants
4. Density preference for Variant A — sparse Stripe-like or dense IBM-like
5. Whether any variant should differ in nav structure
6. Anything else specifically required to disambiguate the three compositions

Number the questions, group by variant. After I answer, generate all three variants in one canvas.
```

**Answer Claude's questions tightly** — short, numbered. Every word is quota.

**Review the 3 variants carefully.** Ask: which one would a CIO at a 1000-person enterprise screenshot and send up the chain?

**Decision point — three paths:**
- **A clear winner emerged** → skip round 2, go to Step 3 (full build of winner). Save 6% quota.
- **Mixed feelings, want more options** → continue to Step 2B for round 2.
- **All three miss** → comment on what's wrong specifically, regenerate the worst one with targeted feedback.

---

## STEP 2B — Round 2: 3 differentiated hero variants (~6% quota, ~6 min)

Only run this if round 1 didn't produce a winner.

**Paste:**

```
Round 1 reviewed. Generate round 2 — three more differentiated directions in a new scrollable canvas, same format (3 panels stacked, full desktop size, labeled, with nav bar above each).

D — Bloomberg Terminal / Palantir
  References: Bloomberg Terminal + Palantir
  Display family: IBM Plex Mono 500 (mono-led, dominant — H1 in mono)
  Body family: IBM Plex Sans
  Surface: black (#000000) base, navy-950 (#0F1629) secondary panels
  Status accents: muted green (success), muted amber (warn), muted red (crit), orange (escalation) — never neon, all status-only
  Mood: data-dense, classified-feel, operator-credible — "we've seen 3am pages, you can tell"
  Hero composition: dense. Headline + subline both in mono. Side panel: real data table with 5+ rows (incident ID / time / severity / service / status / MTTR). Top ribbon: 8 numerical KPIs in a single horizontal strip, mono, no chart fluff. Trust badges as text-only inline list at bottom. No imagery.

E — Brutalist Linear+
  References: modern Linear + brutalist tendencies
  Display family: DM Sans 700 at extreme size (96–120px h1)
  Body family: IBM Plex Sans
  Surface: pick light (white) OR dark (#0F1629) — choose whichever serves the type weight better
  Accent: orange #F27A1A used SPARINGLY — 1 to 2 occurrences total in the entire hero
  Border radius: 0 throughout (explicit override of system default for THIS variant only — square edges everywhere)
  Mood: "we don't decorate, we ship" — quietly inevitable, Stripe meets Palantir
  Hero composition: oversized H1 takes 60%+ of the visual weight. Sharp 1px hairline grid edges visible. Subline tucked tight (one line, 18px). Two CTAs as flat rectangles, no shadow, no radius. ONE small accent moment (a single orange data dot near the H1, or one underlined word). No image, no illustration, no card.

F — Hypermaximal Editorial
  References: Stripe Press + Bloomberg Businessweek + WSJ Magazine
  Display family: IBM Plex Serif 700 (editorial display, H1 + H2)
  Body family: IBM Plex Sans
  Mono accent: IBM Plex Mono for footnote-style metadata
  Surface: ivory / cream — use #FAF8F1 (off-white feels sterile here)
  Mood: institutional gravitas modernized — "old-guard authority, 2026 chassis"
  Hero composition: multi-grid. Drop cap on the first paragraph of the subline. Footnote-sized metadata next to the H1 (12px caps, e.g., "VOL. 1 / ISSUE 1 / RSA TECH GROUP"). Rule lines (1px hairlines) separating sections. Varied type sizes within a single block (12px caption + 32px subhead + 96px display, intentionally controlled). Trust badges as small printed-stamp-style chips. Asymmetric — heavy on the left, lighter on the right.

Same hero copy as round 1 (do NOT change the H1, subline, or CTAs).

Same quality bar applies (8pt grid, real density, banlist, asymmetry, type-led hierarchy, senior-FE rigor, no system-token violations to chase references).

Same layout format (one canvas, 3 panels stacked, full desktop size, labeled, nav above each).

No plan-mode this round — apply the answers I gave for round 1.
```

---

## STEP 3 — Pick the winner (~3 min, free)

Walk all 6 (or all 3 if you skipped round 2). Decision criteria:

1. Which would a CIO at a 1000-person enterprise screenshot and forward to their VP?
2. Which differentiates clearest from accenture.com and ibm.com/consulting?
3. Which most reads like senior-craftsman work, not AI-output?

Pick **one**. Comment on the others: *"Archive — committing to variant [X]."*

---

## STEP 4 — Build winner to all 13 sections (~7% quota, 5–10 min)

**Paste:**

```
Variant [X] is the locked direction. Expand it across all 13 sections from the brief:

  1. Nav (already present)
  2. Hero (already done)
  3. Trust Strip — 6 client logo placeholders, single horizontal row
  4. Services Overview — 3×2 service card grid: Managed AIOps / AI Transformation / Cloud & Infrastructure / Enterprise Security / Data & Analytics / Digital Strategy
  5. Tech Partners — single horizontal row: AWS · Azure · GCP · ServiceNow · Datadog · Microsoft 365
  6. Service Tabs — 3-tab interactive (Managed AIOps active by default, AI Transformation, Cloud). Each tab content = H3 + 3 capability bullets + small UI mockup
  7. LeoRix AI — dedicated dark section (override surface for this section if base is light), product name + tagline ("AIOps platform with autonomous incident response.") + 3 capability bullets + dashboard mockup right side
  8. Industries — 6-card grid: Healthcare / FinTech / Manufacturing / Insurance / Retail / AIOps & IT Ops (icon + label + 1-line use case each)
  9. Proof — split: (a) 4 stats horizontally — "99.98% uptime SLA" / "2,847 incidents resolved" / "4.2min avg MTTR" / "42 enterprise engagements", (b) one case study card with a quoted metric + attribution, (c) 4 cert badges — SOC 2 Type II / HIPAA / ISO 27001 / GDPR
  10. Why Connexr — 5-step methodology: Discover → Architect → Build → Deploy → Optimize. Numbered circles, 1-line description each, connecting line between
  11. Resources — 1 featured (left, 2/3 width) + 2 supporting (stacked right, 1/3 width)
  12. CTA Strip — full-width, single H2 + primary CTA, composition consistent with the variant's style
  13. Footer — 5-column, dark navy-950 bg, brand block + 4 link columns + bottom strip with copyright + small social icons

Visual continuity rules:
- Same section padding throughout (96px desktop, 64px tablet, 48px mobile).
- Same heading scale, card style, accent discipline as the hero.
- Treat the page as one composition, not 13 separate posters.

Real content (no lorem, no placeholder copy, no emoji):
- Industry use cases written specifically (e.g., Healthcare: "HIPAA-compliant AI ops for hospital systems.").
- Stats are the specific numbers above — do not change them, do not round, do not invent.
- 5-step methodology one-liners — write tight ones (8–12 words each).
- LeoRix AI tagline as quoted above.

Image policy:
- No stock photos.
- No AI illustrations.
- No blob shapes, no gradient meshes.
- Product mockups (LeoRix AI section, Service Tab panels) = stylized UI screenshots rendered with real-feel data, same Plex Mono / metric-tile language as Variant B's hero console.
- Decorative slots = abstract geometric placeholders (a thin rule, a single small orange data dot, a clean grid pattern).

Responsive:
- Show desktop (1440), tablet (768), mobile (375) at the bottom of the canvas as small reference frames. Don't fully redesign per breakpoint — just confirm graceful collapse.

Same banlist applies. Same senior-FE quality bar applies.
```

---

## STEP 5 — Polish via Tweaks panel + Edits (~10–15 min, FREE)

**Stay out of chat.** Chat is the most expensive surface — Tweaks and Edits are free.

- **Tweaks panel** (auto-generated sliders) — color saturation, type weight, section spacing, card density, hero variations.
- **Edits** (click element on canvas) — surgical fixes to specific copy / opacity / width / color.
- **Comments** (per element) — flag for the dev handoff anything that needs real data, real images, or interaction wiring.

**If you plateau** (Claude Design has diminishing returns after ~5 iterations on the same direction), restart with: *"Scrap this version. Keep brand learnings. Produce a cleaner pass with more restraint and zero AI tells."*

---

## STEP 6 — Export to Claude Code (~1 min)

Top-right → **Share** → **Export to Claude Code**. Either copy the command OR download the zip.

Send the bundle (or the command) back to me here. I'll ingest it and start the production Next.js build with backend.

---

## Quota budget (your 70% available)

| Phase | Cost | Cumulative |
|---|---|---|
| Step 1 — design system | 22% | 22% |
| Step 2 — project setup | 0% | 22% |
| Step 2A — round 1 (plan mode + 3 variants) | 11% | 33% |
| Step 2B — round 2 (3 more variants) | 6% | 39% |
| Step 3 — pick winner | 0% | 39% |
| Step 4 — full 13-section build | 7% | 46% |
| Step 5 — Tweaks + Edits | 0% | 46% |
| Step 6 — export | 0% | 46% |
| **Buffer remaining** | — | **24%** |

24% buffer covers one regen pass on the winner + a second polish prompt if needed. Comfortable.

If round 1 produces a clear winner and you skip round 2, total is **40%** — even more buffer.

---

## Failure modes & playbook

| Symptom | Action |
|---|---|
| Plan-mode questions are generic / not variant-specific | "Re-ask focused on per-variant hero proof element + trust badge layout + density. Don't ask about brand voice or buyer persona — those are already locked." |
| A variant looks AI-generic | Inline comment naming the specific reference site + the specific quality missing. Don't regenerate the whole canvas. |
| Output drifted from design system tokens | "You used [wrong value]. Brief specifies [right value]. Fix only this." |
| Quota meter ticking faster than expected | Stop chatting immediately. Switch to Tweaks panel + Edits. |
| Plateau after ~5 iterations | "Scrap, keep brand learnings, restart cleaner with more restraint." |
| Want to test mobile | Top-right Share → Duplicate project → "Show winner in mobile format." |
| Fonts not rendering correctly in canvas | Confirm IBM Plex family is loading (it's on Google Fonts). If still off, accept the canvas substitution — production Next.js build will load Plex correctly via @import. |

---

## What I need from you when you're done

1. The exported bundle (zip or command from Share → Export to Claude Code)
2. Which variant won + a sentence on why
3. Backend stack preference, or "you pick"

Then I start the production build.
