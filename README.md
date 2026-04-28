# Connexr Redesign

> Production redesign of [connexr.com](https://www.connexr.com) — Connexr is a B2B AI Managed Services and AIOps consultancy, a division of RSA Tech Group. Buyers are CIOs / CTOs / VP IT at 500+ employee enterprises. Competitors: Accenture, IBM Consulting, Kyndryl, Cognizant.

This repository is the canonical home for the Connexr brand redesign — design system, marketing site, and future product surfaces. It is used by Connexr engineers, RSA Tech leadership, and offshore contractors. Treat it as a production-grade codebase from day one.

---

## Project status

| Workstream | Status |
|---|---|
| Brand & design system | ✅ v1 generated via Claude Design — `/design-system` |
| Marketing site (Next.js port) | 🚧 Not yet started |
| Backend / lead capture | 🚧 Not yet specified |
| AIOps console / product UI | 🚧 Future surface |

Latest decisions and direction live in [`docs/DECISIONS.md`](./docs/DECISIONS.md). Branch and contribution rules live in [`CONTRIBUTING.md`](./CONTRIBUTING.md).

---

## Repository layout

```
.
├── .github/                  GitHub workflows, issue & PR templates
├── design-system/            v1 design system (Claude Design export, bug-fixed)
│   ├── README.md             brand voice, visual foundations, anti-defaults
│   ├── SKILL.md              registers as a /connexr-design Claude skill
│   ├── colors_and_type.css   LOCKED tokens (color, type, spacing, radius, motion)
│   ├── assets/               logo lock-up, mark, wordmark, white variant
│   ├── preview/              specimen cards (one per token category)
│   ├── ui_kits/
│   │   ├── marketing-site/   13-section landing page (HTML + JSX)
│   │   └── aiops-console/    operator surface (mono ticker, alert table)
│   ├── screenshots/          rendered references
│   └── uploads/              source brief + raw logo (do not edit)
├── docs/
│   ├── DESIGN-BRIEF.md           canonical brand & token reference
│   ├── CLAUDE-DESIGN-PLAYBOOK.md the 7-step playbook used to generate v1
│   └── DECISIONS.md              decision log (architectural / brand)
├── CHANGELOG.md              Keep a Changelog format
├── CODE_OF_CONDUCT.md        Contributor Covenant 2.1
├── CONTRIBUTING.md           branch strategy, commit format, PR process
├── LICENSE                   proprietary — RSA Tech Group
├── README.md                 you are here
└── .gitignore / .editorconfig
```

The Next.js application will land under `/apps/web` once we begin the production port.

---

## Getting started

This repository currently contains design-system source and documentation only. There is no installable application yet. The setup below is what every contributor should run on first clone.

```bash
git clone https://github.com/va-3/Connexr-Redesign.git
cd Connexr-Redesign
```

To preview the design system in a browser:

```bash
# from the repo root
cd design-system/ui_kits/marketing-site
python3 -m http.server 8080
# then open http://localhost:8080/index.html
```

Same pattern for `design-system/ui_kits/aiops-console/index.html`.

When the Next.js scaffold lands, the standard developer flow will be `pnpm install && pnpm dev`. That's tracked in `docs/DECISIONS.md`.

---

## Design system at a glance

| Token | Value |
|---|---|
| Primary brand | Navy `#122560` |
| Single accent | Orange `#F27A1A` |
| Heading family | DM Sans (matches logo wordmark) |
| Body family | IBM Plex Sans (Inter is **banned**) |
| Mono / ticker | IBM Plex Mono |
| Editorial display | IBM Plex Serif |
| Spacing | 8pt grid: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160 |
| Border radius | 0 / 4 / 8 / 12 — pill (`9999`) is **banned** |
| Voice | Operator-credible. No emoji, no hype words. |

Full specification: [`design-system/README.md`](./design-system/README.md).

---

## Working with this repo

- **Branches** off `main`. Direct commits to `main` are not allowed except for repo governance changes by the maintainer.
- **Conventional Commits** for every commit message (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`, `style:`, `perf:`, `ci:`).
- **Pull requests** require at least one approval and must reference an issue.
- **Issue templates** are in `.github/ISSUE_TEMPLATE/`. Use the right one — bug report, feature request, or design change.

The full process is in [`CONTRIBUTING.md`](./CONTRIBUTING.md).

---

## Maintainers

This repository is currently maintained by:

- **Vishnu Anapalli** ([@va-3](https://github.com/va-3)) — frontend / fullstack engineering intern, RSA Tech Group

Additional team members will be added as the project staffs up. Until then, @va-3 is the primary point of contact for code-level questions; RSA Tech Group leadership owns brand and product direction. For commercial / partnership inquiries, contact RSA Tech Group directly.

---

*Built by Connexr · A division of RSA Tech Group.*
