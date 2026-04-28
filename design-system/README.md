# Connexr Design System

> AI-native enterprise IT operations. The brand is austere, technical, and operator-credible — confidence by precision, not adjectives.

This design system encodes Connexr's brand and product UI vocabulary so designers and agents can produce on-brand artifacts (landing pages, decks, dashboards, throwaway prototypes) without re-litigating tokens.

---

## At a Glance

| | |
|---|---|
| **Company** | Connexr — a division of RSA Tech Group |
| **Category** | B2B AI Managed Services & AIOps consultancy |
| **Heritage** | 15 years (RSA Tech Group) |
| **Buyers** | CIOs, CTOs, VP IT, Heads of SRE / Platform at 500+ employee enterprises |
| **Competitors** | Accenture, IBM Consulting, Kyndryl, Cognizant |
| **Differentiator** | AI-native ops execution — not slide-deck consulting |
| **Flagship product** | LeoRix AI |
| **Compliance** | SOC 2 Type II · HIPAA · ISO/IEC 27001:2022 · GDPR |

**Surfaces in this system**
- **Marketing site** (`connexr.com`) — primary surface; 13-section canonical landing structure (Nav, Hero, Trust strip, Services, Tech partners, Service tabs, LeoRix AI, Industries, Proof, Why Connexr, Resources, CTA strip, Footer).
- **AIOps console / product moments** — secondary; mono-typography ticker frames, alert cards, status read-outs.

---

## Sources

This system was built from the following inputs. None are pre-loaded for the reader; track them down separately if you need higher-fidelity recreations.

- `uploads/DESIGN-BRIEF.md` — canonical brand & token reference (single source of truth — overrides everything else here on conflict).
- `uploads/connexr-logo.png` — full brand lock-up (logo mark + wordmark + endorsement line).
- **GitHub repo:** `va-3/Connexr-Redesign` (branch `main`) — *empty placeholder at time of build (only an 18-byte README). No production code, no Figma exports, no component library.* If a real codebase is added later, re-run the design-system pass to capture component implementations.

> **Caveat for the reader:** because the GitHub repo has no source code, every UI component in `ui_kits/` is a faithful interpretation of the design brief, **not** a recreation of shipping code. Spacing, color, type, and component patterns come straight from the brief; specific section copy and microcopy below are written to match the documented voice.

---

## Index — what's in this folder

```
README.md                  ← you are here
SKILL.md                   ← agent skill manifest (works as a Claude Code skill too)
colors_and_type.css        ← LOCKED tokens (color, type, spacing, radius, shadow, motion)
assets/
  connexr-logo.png         ← full lock-up (3000×833, transparent)
  connexr-wordmark.png     ← wordmark only
  connexr-mark.png         ← logo mark only (orbital C with orange dots)
  connexr-logo-white.png   ← navy → white variant for dark surfaces
preview/                   ← design-system specimen cards (registered as assets)
ui_kits/
  marketing-site/          ← 13-section landing page recreation
    index.html
    *.jsx                  ← Nav, Hero, ServiceCard, StatCard, Footer, etc.
  aiops-console/           ← console / dashboard moments
    index.html
    *.jsx
uploads/
  DESIGN-BRIEF.md          ← original brief (do not edit)
  connexr-logo.png         ← original logo
```

---

## CONTENT FUNDAMENTALS

> Operator-credible. We've actually run 3am incidents at scale — we don't write decks about it.

### Voice
- **Austere, technical, authoritative.** Confidence comes from precision, not adjectives.
- **Operator-credible.** Implies real on-call experience. Verbs over nouns. Specifics over generalities. Numbers over claims.
- **No hype words.** *Banned:* revolutionary, cutting-edge, next-gen, game-changing, unleash, supercharge, transform, AI-powered, AI-driven, AI-✨.
- **No filler.** "We help enterprises ___" is a tell. Lead with the action: "Triage 2.8M alerts. Cut MTTR 64%."

### Pronouns & POV
- **"We"** for Connexr — used sparingly, when the agent doing the action matters.
- **"You / your team"** for the buyer — when describing outcomes they get.
- Avoid "I", avoid "ours", avoid possessive flexing ("our world-class team").
- Third-person product references when possible: "LeoRix AI triages…" (not "Our LeoRix AI…").

### Casing
- **Sentence case** for headings, buttons, nav, labels. *"Book a demo"*, not *"Book A Demo"*.
- **Title case** is reserved for proper nouns and product names: LeoRix AI, RSA Tech Group, ServiceNow.
- **UPPERCASE** only for eyebrow labels (12px, letter-spacing 0.08em). Never run-length copy.
- All-caps headlines longer than 5 words are banned.

### Punctuation & microtype
- **Em-dashes** (`—`) between independent clauses. No double-hyphens (`--`).
- **Curly apostrophes** (`'`) and curly quotes (`"…"`). Never straight (`'…"`).
- **No exclamation points.** Operators don't shout.
- **Numbers as digits** when ≥10 or any unit ("4 regions", "12 industries", "2.8M alerts").
- **Ranges with en-dash** (`–`): "P1–P3 incidents".

### Numbers — real, not inflated
- **Use real proxies.** "42 enterprise engagements, 2.8M alerts triaged in 2025" beats "1000+ customers".
- Cite units. "MTTR ↓ 64%" beats "MTTR way down".
- No star ratings without context. No "trusted by 1000s".

### Emoji
- **Banned in product surface.** No 🚀 / 💡 / ✨ / 1️⃣ / ✅.
- Unicode glyphs *are* fine sparingly as data-density tools (`→`, `↑`, `↓`, `·`, `—`, `±`, `°`).

### Examples — voice in action

| ✅ Sounds like Connexr | ❌ Sounds like a generic AI startup |
|---|---|
| "AI at the core. Scale at speed." | "Unleash next-gen AI to revolutionize your IT." |
| "Triage 2.8M alerts. Cut MTTR 64%. Hand back 11k engineer-hours." | "🚀 Supercharge your team with AI-powered insights!" |
| "We run AIOps in production for healthcare, fintech, manufacturing." | "Our cutting-edge platform empowers enterprises everywhere." |
| "Book a demo" | "Get started for free →" |
| "P1 incident in payments. Auto-correlated 47 alerts to 1 root cause." | "Smart insights ✨ for incident management" |
| "SOC 2 Type II · HIPAA · ISO 27001 · GDPR" | "Trusted by enterprises worldwide" |

### Section anatomy (canonical)
1. **Eyebrow label** *(optional, 12px UPPERCASE)* — context tag: `Managed AIOps`, `Methodology`, `Case study`.
2. **H2** *(48px DM Sans 700)* — declarative, ≤ 8 words.
3. **Lead paragraph** *(18px Plex Sans, max-width 640px)* — one operator-grade sentence.
4. **Content** — cards / stats / tabs.
5. **One** primary CTA — orange, `Book a demo` or `Read the case study →`.

---

## VISUAL FOUNDATIONS

> Quiet confidence. Navy dominates. Orange is the single accent moment.

### Color
- **Navy `#122560` is the brand.** It dominates 60–80% of any composition: logo wordmark, headings, dark-section backgrounds, primary text.
- **Orange `#F27A1A` is the accent.** *One* visible orange moment per section: the primary CTA, the focus ring, the small mark dot. Never as a section background. Never gradient-paired with navy.
- **All other color is muted.** Status colors are 600/100 pairs (deep ink + 8% tint), never neon. Charts use navy + 1 accent + slate fills.
- **No purple-to-blue gradients. No mesh blobs. No glow.** Those are AI tells.

### Typography
- **DM Sans 700** for everything that wants to feel like the wordmark — h1, h2, h3, hero.
- **IBM Plex Sans 400/500** for body. Line-height 1.55. Replaces Inter (which is banned).
- **IBM Plex Mono 400** for tickers, status read-outs, log-style content, code. Used as a *texture*, not a default.
- **IBM Plex Serif 700** is reserved for editorial / hypermaximal directions on h1/h2 only — body always remains Plex Sans.
- **Display tracking** at 48px+ is `-0.02em` to `-0.03em`. Body has no tracking.
- **Hierarchy via weight + size, not color.** Reserve color for accent.

### Backgrounds
- **White (`#FFFFFF`)** card surfaces inside light sections.
- **`#F8FAFC`** light sections — alternate with white to create rhythm.
- **`#0F1629` (navy-950)** dark sections — used for the LeoRix AI block and the closing CTA strip. Always paired with navy-900 type elsewhere on the page (so the navy connects, not contrasts).
- **No full-bleed photography behind copy.** Photography lives in dedicated panels with hard edges.
- **No textures, no patterns, no hand-drawn illustrations.** A 1px slate-200 hairline is the ornament budget.
- **No gradients in the default system.** A single allowed exception: a near-flat radial *protection gradient* (`rgba(15,22,41,0)` → `rgba(15,22,41,0.6)`) under hero copy on top of imagery, only when a photo is unavoidable.

### Layout & spacing
- **8pt grid is non-negotiable.** Allowed values: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160`. Never 13, 19, 21, 28.
- **Section vertical padding** is `96px` desktop / `64px` tablet / `48px` mobile.
- **Container** is `max-width: 1280px` with `48px` horizontal padding (`24px` mobile).
- **Grid** is 12 columns with `24px` gutters.
- **Asymmetry is preferred** in heroes — at least 2 of every 6 hero variants must break centered alignment.

### Borders & radii
- **Radii: `0 / 4 / 8 / 12`.** That's it. Pill (`9999`) is banned.
  - `0` for editorial/brutalist directions.
  - `4` for inputs and small chips.
  - `8` is the **default** — buttons, cards, dropdowns.
  - `12` for hero panels and large surfaces.
- **Borders are 1px slate-200** (`#E2E8F0`). On hover, cards step up to `navy-200` (`#B8C2DD`).
- **Never mix radii in the same view.** A 4 + 8 + 16 mosaic is a junior tell.

### Elevation
- Shadows are **navy-tinted**, never gray:
  - `--shadow-sm: 0 1px 2px rgba(18,37,96,0.05)`
  - `--shadow-md: 0 8px 24px rgba(18,37,96,0.06)` *(default card hover)*
  - `--shadow-lg: 0 20px 48px rgba(18,37,96,0.10)` *(modals, focused panels)*
- **No inner shadows.** No glow. No filter blur as decoration.
- **Focus uses a 2px orange ring**, not a shadow: `box-shadow: 0 0 0 2px var(--orange-500)`.

### Motion
- **Subtle only.** Fade-up at 200ms with 4–8px translateY. No bounce, no spring overshoot.
- **Hover scale max is 1.02.** Cards do not zoom; they raise (border + shadow).
- **No auto-shimmer**, no animated gradient sweeps, no parallax on hero.
- **Easing:** `cubic-bezier(0.2, 0, 0.2, 1)` for almost everything.
- **Durations:** `120ms` for micro (hover color), `200ms` default, `320ms` for entrances.

### Hover, press, focus, disabled
| State | Treatment |
|---|---|
| **Hover (button primary)** | Background steps `orange-500` → `orange-600 #DB6A0E`. No scale. |
| **Hover (button secondary)** | Background `navy-900` → `navy-950`. |
| **Hover (button ghost)** | Background `transparent` → `slate-100`. Border stays. |
| **Hover (card)** | Border `slate-200` → `navy-200`, shadow `none` → `--shadow-md`. No translate. |
| **Hover (link)** | Adds underline (1px, 2px offset). No color change. |
| **Press / active** | Color depth +1 step. No scale-down. |
| **Focus-visible** | 2px `orange-500` ring outside the element, 0 offset. Never on hover. |
| **Disabled** | `opacity: 0.4`. No grayscale filter. |

### Transparency, blur, glass
- **Glass / backdrop-blur is forbidden** in the default system. The single allowed use: the sticky nav, which sits at `rgba(255,255,255,0.92)` with `backdrop-filter: blur(8px)` once the page has scrolled past 0.
- **Surface alpha** is otherwise binary: `1.00` or `0.00`. No 60% white cards.

### Imagery
- **Cool, neutral, low-saturation.** Operator photography (data centers, hands on keyboards, real fixtures), not stock execs in suits.
- **No grain, no duotones, no warm filters.** If a tone-shift is needed, push toward navy by `~5%` saturation in shadows. That's it.
- **No 3D laptop renders. No tilted dashboards.**
- Always framed at hard edges, never feathered or vignetted.

### Layout rules — fixed elements
- Sticky nav `64px` tall, `1px` slate-200 bottom border once scrolled. White at 92% alpha + `blur(8px)`.
- No floating chat bubbles, no "back to top" buttons, no scroll-progress bars.
- Footer is dark navy-950, full bleed, 48px section padding.

### Cards (the one card)
- White background, `1px solid slate-200`, `border-radius: 8px`, `padding: 32px`.
- Title (`h4` / 24px DM Sans 600), 8px gap, body (16px Plex Sans 400 slate-600).
- Optional `Read more →` at the bottom (navy, 14px, underline-on-hover).
- Hover: border navy-200, shadow `--shadow-md`. No translate, no scale.

---

## ICONOGRAPHY

- **System:** **Lucide** (regular weight). Phosphor regular is an acceptable secondary if a glyph isn't in Lucide.
- **Style:** stroke-based, **1.5px uniform stroke**, **24×24** default size, single-color (navy, or `currentColor`).
- **Banned:** Material Icons (Google's filled style — too consumer-y), Font Awesome (kitchen-sink, inconsistent grid), gradient-fill icons, glyph-on-circle "badge" icons, hand-drawn anything.
- **Sizing scale:** `16` (inline next to label), `20` (in nav/links), `24` (default), `32` (hero/feature). 8pt grid only.
- **Color:** never orange except on the *one* accent moment per section. In practice that means most icons are navy or `currentColor`; the lone exception is e.g. a focus indicator.
- **Implementation:** load Lucide via CDN — `https://unpkg.com/lucide@latest/dist/umd/lucide.js` — and use `<i data-lucide="…">` placeholders. For SSR/static contexts, copy the SVG inline at build time.

> **Substitution flag:** Connexr's brief specifies Lucide / Phosphor but does not ship its own icon set. We're using Lucide via CDN. **Action required:** if Connexr has a curated subset (or any custom AIOps glyphs — node, alert, runbook, agent), please send them and we'll bake them into `assets/icons/`.

### Emoji & unicode
- **Emoji: never** in product UI, marketing, or decks.
- **Unicode arrows / dots / em-dashes** are encouraged as data-density tools where an icon would be too heavy: `→`, `↑`, `↓`, `·`, `—`, `±`, `°`. Treat them as type, not as icons.

### Logo

The Connexr lock-up is the **only** brand mark. It must not be reconstructed in code or SVG; always reference the PNG.

| File | Use |
|---|---|
| `assets/connexr-logo.png` | Full lock-up. Default. Min 28px height in nav. |
| `assets/connexr-wordmark.png` | Wordmark only. Use when space is tight horizontally. |
| `assets/connexr-mark.png` | Mark only (orbital C). Favicons, app icons, avatars, square crops. |
| `assets/connexr-logo-white.png` | Navy → white variant. Use only on `navy-950` surfaces (footer, dark CTA strip). Orange accents are preserved. |

**Clear-space:** logo `x-height` on all sides. **Min size:** 24px tall (mark only) / 80px wide (full lock-up). The "By RSA Tech Group" endorsement line is part of the mark — do not crop it out unless using `connexr-wordmark.png` deliberately.

---

## Anti-defaults (banned, by category)

These are AI-vibe tells. They must not appear in any Connexr artifact.

- **Type:** Inter (anywhere), centered-everything layouts, all-caps headlines > 5 words, mixed font families beyond the locked stack.
- **Color:** purple→blue gradients, pink→violet gradients, neon glows, multi-color rainbow accent grids, animated mesh blobs, triple-gradient hero backgrounds.
- **Layout:** floating dashboard tilted 15° in hero, glass morphism (except the one nav rule), giant emoji hero, stock photo of suits, 3D laptops, auto-rotating carousels, mismatched radii, pill CTAs.
- **Copy:** "revolutionary", "next-gen", "cutting-edge", "unleash", "game-changing", "AI ✨", "🚀 Launch faster", emoji-prefixed value props, "1️⃣ 2️⃣ 3️⃣" lists, fake star ratings, "Powered by AI", visible lorem ipsum.
- **Motion:** auto-shimmer sweeps, animating background blobs, bouncy springs on hover, hover scale > 1.02, parallax on hero.

## Senior-dev quality bar

A 20-year FE veteran reviewing the work should see: every gap an 8pt multiple; per-size line-heights; type tracking tuned at display sizes; hierarchy via weight + size, not color; one accent moment per section; whitespace dominates; copy reads like a real B2B page; at least one section in every variant breaks centered grid; em-dashes and curly apostrophes; full state coverage on buttons (hover + focus-visible + active + disabled); body contrast above 4.5:1.

---

## Caveats

- **No source code.** `va-3/Connexr-Redesign` is a placeholder. Every UI kit component is built from the brief, not lifted from production. Re-run when the codebase exists.
- **No Figma file.** No component library to mirror.
- **Fonts** are loaded from Google Fonts (DM Sans, IBM Plex Sans/Mono/Serif). All four are open-source — no foundry license issue. If Connexr later adopts a paid display face, swap `--font-display` and we're done.
- **Iconography** uses Lucide via CDN. If a custom Connexr glyph set exists, send it.
