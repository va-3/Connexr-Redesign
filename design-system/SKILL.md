---
name: connexr-design
description: Use this skill to generate well-branded interfaces and assets for Connexr (AI-native managed services for enterprise IT, a division of RSA Tech Group), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Key files:
- `README.md` — full brand voice, visual foundations, iconography, anti-defaults, and a manifest of every other file.
- `colors_and_type.css` — LOCKED tokens (colors, type, spacing, radii, shadows, motion). Always link this; never invent values.
- `assets/` — logos (full lock-up, mark only, wordmark only, white-on-transparent for dark surfaces).
- `ui_kits/marketing-site/` — the canonical 13-block landing page recreation.
- `ui_kits/aiops-console/` — the operator surface (dark navy-950, mono ticker, alert table + runbook).
- `preview/` — small specimen cards covering colors, type, spacing, components.
- `uploads/DESIGN-BRIEF.md` — the original brand brief (treat as the single source of truth on conflicts).

If creating visual artifacts (slides, mocks, throwaway prototypes, decks), copy assets out and create static HTML files for the user to view. Always import `colors_and_type.css` so DM Sans + IBM Plex Sans/Mono/Serif load and tokens are available.

If working on production code, copy assets and read the rules in `README.md` to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (audience, surface — marketing vs product vs deck, depth of variations), and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.

**Non-negotiables:**
- Navy `#122560` dominates. Orange `#F27A1A` is one accent moment per section, never a section background, never gradient-paired.
- Inter is banned. Use DM Sans for display + headings, IBM Plex Sans for body, IBM Plex Mono for tickers/console, IBM Plex Serif for editorial only.
- 8pt grid only: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160`.
- Radii `0 / 4 / 8 / 12`. Pill (`9999`) is banned.
- Operator-credible voice. No emoji, no hype words ("revolutionary", "next-gen", "unleash"). Em-dashes and curly apostrophes.
- Subtle motion only: 200ms fade-up, no bounce, hover scale ≤ 1.02.
