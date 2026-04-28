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
