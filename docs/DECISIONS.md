# Decision Log

> Architectural and brand decisions that shape this project. Add a new entry at the top whenever a non-trivial decision is made. Older decisions stay in place — they're how we (and offshore contributors, and your future self) understand why the code looks the way it does.

Format inspired by [ADRs](https://adr.github.io/) but lighter. Keep each entry short and dated.

---

## [0003] 2026-04-28 — Lock IBM Plex Sans as body font (replace Inter)

**Status:** Accepted

**Context:** The live connexr.com CSS uses `--font-body: "Inter"`. Inter is the most-used AI-generated landing page font and reads as a default-template signal to senior reviewers. Our buyer (CIO/CTO) is sensitive to that read.

**Decision:** Replace Inter with **IBM Plex Sans** (400, 500, 600). DM Sans remains the heading family (matches the logo wordmark). IBM Plex Mono for tickers/console; IBM Plex Serif for editorial display moments. All four families are open-source on Google Fonts — zero licensing cost.

**Consequences:**
- Production CSS swaps `var(--font-body)` to Plex Sans.
- Inter is added to the design system's anti-defaults / banlist.
- All future Connexr surfaces (marketing, console, decks) inherit the locked stack via `colors_and_type.css`.

---

## [0002] 2026-04-28 — Commit to Variant B-equivalent direction (operator-credible)

**Status:** Accepted

**Context:** The Claude Design v1 generation produced ONE fully realized landing direction (asymmetric 7/5 hero with live AIOps console / Datadog-Linear flavored), not the six variants in the original playbook. Critical review found it senior-FE-grade with two fixable bugs.

**Decision:** Commit to this direction rather than spend additional Claude Design quota generating five more variants. Reasons:
1. The Datadog/Linear/PagerDuty operator-credible aesthetic is the highest-fit visual language for B2B AIOps buyers.
2. The design system is comprehensive enough to support alternative directions in code if we want to A/B them later.
3. One polished direction is more useful for the boss review than six raw comparisons.

**Consequences:**
- Other five variant directions (Enterprise Authority, Premium Category Leader, Bloomberg/Palantir, Brutalist Linear+, Hypermaximal Editorial) are documented in the design brief but not realized in v1.
- If a future reviewer wants a different aesthetic, we either (a) iterate this direction in code, or (b) re-run Claude Design with a fresh project against the existing design system.

---

## [0001] 2026-04-28 — Use the live connexr.com brand tokens as canonical

**Status:** Accepted

**Context:** Earlier project memory referenced indigo `#635BFF` + near-black `#0b0b0f` as Connexr's brand colors. Inspecting the live `connexr.com` CSS revealed the actual brand tokens are navy `#122560` + orange `#F27A1A` + DM Sans heading + Inter body. The old indigo/black system was a misread from a prior Next.js scaffold.

**Decision:** Use the live tokens as canonical:
- Navy `#122560` (primary)
- Orange `#F27A1A` (single CTA accent)
- Background `#F8FAFC`, foreground `#0F1629`
- Slate scale 100–700 for neutrals
- DM Sans for headings (matches the logo wordmark — confirmed by inspection of the 3000×833 PNG)
- Body font swapped from Inter to IBM Plex Sans (see ADR 0003)

**Consequences:**
- The previous Next.js prototype at `~/Desktop/connexr redesign/connexr-landing/` is reference-only; not the production target.
- The design system tokens are LOCKED and require a design-change issue + project lead approval to modify.

---

## How to add an entry

1. Increment the ID (next is `[0004]`).
2. Use today's date (ISO-8601: `YYYY-MM-DD`).
3. Title: short, declarative, present-tense.
4. Status: `Proposed`, `Accepted`, `Deprecated`, or `Superseded by [NNNN]`.
5. Three sections: Context, Decision, Consequences.
6. Keep it under one screen. If you need more, the decision is too big — split it.
