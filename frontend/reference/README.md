# Reference — wireframe round outputs

These files are **historical reference**, not the deliverable. The deliverable is `../Production.html`.

## What's here

| File | Purpose |
|---|---|
| `Wireframes.html` | Both wireframe variants side by side — Variant A (Classical / symmetric / sparse) and Variant B (Editorial / asymmetric / dense). Generated 2026-04-29 in Claude Design as a layout-comparison artifact. |
| `Variant-B-Editorial.html` | The winning variant in isolation, pre-high-fidelity polish. Useful for seeing the hero composition and section flow without the high-fi state annotations. |

## Why the wireframe round happened

We needed a deliberate layout / IA comparison before committing to a single direction. Variant A and Variant B test different hypotheses:

- **Variant A — Classical** — symmetric, sparse, IBM Consulting / Stripe Press tradition. Heritage gravitas.
- **Variant B — Editorial** — asymmetric, dense, Linear / Vercel / Datadog tradition. Modern operator-credible.

Variant B was selected based on alignment with the operator-credible voice and the AIOps-buyer aesthetic expectation. See [`docs/DECISIONS.md`](../../docs/DECISIONS.md) ADR 0004 for the full decision context.

## What got fixed between wireframe → production

The wireframe round had several issues caught in the post-generation audit (see [`docs/CLAUDE-DESIGN-PROMPTS.md`](../../docs/CLAUDE-DESIGN-PROMPTS.md) for the full fix list). Key items:

- Trust strip eyebrow softened to "Trusted by enterprise IT teams"
- LeoRix paragraph rewritten as capability-only
- Industries "Featured industry" label and "Sector view →" link removed
- Subscribe input made semantic (`type="email"`, `aria-label`)
- Schematic right-cluster nodes changed from orange to navy
- Cloudflare email-protection markup eliminated
- Curly typographic apostrophes throughout
- Tokens inlined in production (no external `tokens.css` dependency)
- Skip-to-content link added with proper `<main id="main">` target
- Mobile drawer + 5 button states explicitly demoed

The production page (`../Production.html`) reflects all of these. The wireframe references here remain in their original state for posterity.

## How to view

These wireframes reference `../tokens.css` and `../assets/` (paths adjusted from the original Claude Design export). To view:

```bash
# from the repo root
cd frontend
python3 -m http.server 8080
# then open:
#   http://localhost:8080/Production.html              ← deliverable
#   http://localhost:8080/reference/Wireframes.html    ← variant comparison
#   http://localhost:8080/reference/Variant-B-Editorial.html  ← winner pre-polish
```
