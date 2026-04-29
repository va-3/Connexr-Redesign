# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) once releases begin.

---

## [Unreleased]

### Added
- Initial repository scaffolding: README, CONTRIBUTING, CHANGELOG, CODE_OF_CONDUCT, LICENSE, .gitignore, .editorconfig.
- GitHub PR template and three issue templates (bug report, feature request, design change).
- v1 design system under `/design-system`, generated via Claude Design and bug-fixed.
- Canonical brand brief at `/docs/DESIGN-BRIEF.md`.
- Claude Design playbook (`docs/CLAUDE-DESIGN-PLAYBOOK.md`) documenting the v1 generation process.

### Fixed
- Nav CTA button wrapping at narrow viewports (`design-system/ui_kits/marketing-site/styles.css`): added `flex-shrink: 0` alongside existing `white-space: nowrap`.
- Hero H1 case corrected from sentence case to Title Case to match the registered brand slogan ("AI at the Core. Scale at Speed.") in `design-system/ui_kits/marketing-site/components.jsx`.
- Removed fabricated content from the design-system marketing-site UI kit: fake LeoRix product UI, fake stats, fictional Mara Chen testimonial, fictional client names in trust strip, invented article titles in Resources. Now uses explicitly labeled placeholders.

### Changed
- ADR 0002 superseded by ADR 0004: instead of a single committed direction, we now run a two-stage Claude Design flow (wireframe → high-fidelity) with proper layout exploration before production handoff. See `docs/DECISIONS.md`.

### Added
- `docs/CLAUDE-DESIGN-PROMPTS.md`: paste-ready Wireframe and High-Fidelity prompts encoding zero-fabrication rules, type-led hero discipline, placeholder labeling, no-dead-code export, Title Case H1, and 3-breakpoint responsive requirements.
- `frontend/`: new top-level folder containing the polished Variant B landing page (`Production.html`), design tokens (`tokens.css`), brand assets, and the wireframe reference round under `frontend/reference/`. Replaces `design-system/ui_kits/marketing-site/` as the canonical landing-page deliverable; the v1 UI kit is kept under `design-system/` for component-primitive reference but is no longer the production target.

### Fixed (post-production-export)
- 10 straight apostrophes in `Production.html` copy converted to curly typographic U+2019 (`don't`, `What's`, `we'll` contractions). 0 straight contractions remain. Brief specifies curly throughout.

### Changed
- Split the landing-page artifact into two files for distinct audiences. The original `frontend/Production.html` is renamed to `frontend/Handover.html` (the engineering handoff spec — multi-state, multi-breakpoint, annotated). A new `frontend/Final-Desktop.html` is the clean stakeholder preview (single desktop view, no annotations, no state demos, no canvas chrome). README in `frontend/` updated to explain when to use each.
- `docs/CLAUDE-DESIGN-PROMPTS.md` extended with two new paste-ready prompts: PROMPT 3 (Stakeholder Preview — single-desktop, marquee Trust strip, fully wired ARIA tablist) and PROMPT 4 (Hero Architecture Spin — replaces the funnel schematic with a five-layer operating-stack diagram on a cream surface, compliance envelope as structural element, single pulsing accent on the LeoRix node). Both keep the locked design tokens, zero-fabrication rules, and senior-FE quality bar.

---

## Format

Each release is a level-2 heading with date in ISO-8601 (`## [1.0.0] - 2026-MM-DD`). Inside each release, group changes under:

- `### Added` — new features
- `### Changed` — changes to existing behavior
- `### Deprecated` — soon-to-be-removed features
- `### Removed` — features removed
- `### Fixed` — bug fixes
- `### Security` — security-related changes

Reference issues and PRs by number: `(#42)`.
