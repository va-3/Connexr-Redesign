# Decision Log

> Architectural and brand decisions that shape this project. Add a new entry at the top whenever a non-trivial decision is made. Older decisions stay in place — they're how we (and offshore contributors, and your future self) understand why the code looks the way it does.

Format inspired by [ADRs](https://adr.github.io/) but lighter. Keep each entry short and dated.

---

## [0004] 2026-04-28 — Two-stage Claude Design plan: wireframes → high-fidelity (supersedes ADR 0002)

**Status:** Accepted (supersedes ADR 0002)

**Context:** ADR 0002 committed to a single direction without exploration to save Claude Design quota. After completing the design system and one realized landing page, two issues surfaced: (a) the realized page contained fabricated content (fake product UI, fake metrics, fictional testimonials, fictional client names) that was caught and removed, and (b) we never actually compared layout / information-architecture directions — we accepted the first generation. The team also confirmed the architecture split: ALL frontend lives in Claude Design; only backend lives in Claude Code.

**Decision:** Run a proper two-stage Claude Design flow before production handoff:
1. **Wireframe round** — two layout / IA variants in one canvas (Variant A — Classical / symmetric / sparse; Variant B — Editorial / asymmetric / dense). Both use the locked design-system tokens. Compare composition, hierarchy, and section flow only.
2. **High-fidelity round** — winner is expanded across all 13 sections, all 3 breakpoints (desktop / tablet / mobile), with full interaction states and zero fabricated content.

Both rounds use the prompts in `/docs/CLAUDE-DESIGN-PROMPTS.md`, which encode lessons learned from the design-system phase: zero-fabrication rules per content type, type-led hero discipline (no fake product UI), placeholder labeling rule (italic + "pending" suffix), no dead code in JSX exports, Title Case H1, real responsive output.

**Consequences:**
- ADR 0002 is superseded. Single-direction commitment was a quota-driven compromise; with the design system done, the variant exploration is now affordable.
- Layout-vs-aesthetic separation is enforced: wireframe round tests layout only; aesthetic is locked by the design system already.
- Content fabrication is banned at the prompt level for every fabrication type seen in v1.
- Claude Design = frontend; Claude Code = backend. No manual JSX → React port unless explicitly chosen.

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
