# Contributing to Connexr Redesign

This document is the contract. Read it before opening a PR. The rules apply to internal Connexr engineers, RSA Tech employees, and offshore contractors equally.

---

## TL;DR

1. Branch off `main`. Never push directly to `main`.
2. Branch name = `<type>/<short-kebab-description>` (see [Branch naming](#branch-naming)).
3. Commit messages = [Conventional Commits](https://www.conventionalcommits.org/).
4. Open a PR against `main`. Fill out the template. Link an issue.
5. PR requires **1 approving review** and **CI green** before merge.
6. Merges use **squash and merge** with the PR title as the squashed commit message (also Conventional Commits format).

---

## Branch naming

Format: `<type>/<short-kebab-description>`

| Type | When to use | Example |
|---|---|---|
| `feat` | New feature or capability | `feat/leorix-section-mobile` |
| `fix` | Bug fix in production code | `fix/nav-button-wrap-768px` |
| `docs` | Documentation-only changes | `docs/update-design-decisions` |
| `chore` | Repo / tooling / dependencies | `chore/upgrade-next-15-3` |
| `refactor` | Code restructure without behavior change | `refactor/extract-button-component` |
| `style` | Formatting only (no code change) | `style/run-prettier` |
| `test` | Tests added or fixed | `test/hero-snapshot-coverage` |
| `perf` | Performance improvement | `perf/defer-tech-partners-images` |
| `ci` | CI / release tooling | `ci/playwright-on-pr` |

Keep descriptions short — kebab case, ≤ 5 words.

---

## Commit messages — Conventional Commits

Format:

```
<type>(<optional-scope>): <subject>

<optional body>

<optional footer (issue refs, breaking changes)>
```

Examples:

```
feat(marketing-site): add LeoRix AI dark callout section
fix(nav): prevent CTA button from wrapping at narrow viewports
docs(design-system): document orange accent usage rule
chore(deps): bump next from 15.0.0 to 15.0.4
refactor(hero): extract HeroPanel into its own component
```

**Subject line rules:**
- Max 72 characters
- Imperative mood ("add", not "added" or "adds")
- No trailing period
- Lowercase first letter (except acronyms / proper nouns)

**Body:**
- Wrap at 72 characters
- Explain *why*, not *what* (the diff shows the what)
- Reference the issue: `Refs #42` or `Closes #42`

**Breaking changes** must include a `BREAKING CHANGE:` footer:

```
feat(api): change lead-capture endpoint contract

BREAKING CHANGE: /api/lead now expects { email, company } instead of
{ email, companyName }. Update all clients before merging.
```

---

## Pull request process

1. **Open the PR against `main`.** Use the [PR template](.github/PULL_REQUEST_TEMPLATE.md) — it is auto-populated.
2. **Title** uses Conventional Commits format. The squashed commit message will be the title verbatim.
3. **Link the issue.** Every PR must reference a tracked issue. If one doesn't exist, open it first.
4. **CI must pass.** Lint, type-check, build, and tests all green. Do not merge with red CI.
5. **One approving review** from a maintainer is required.
6. **Resolve all review comments** before merge — either by addressing them or by replying with rationale.
7. **Squash and merge.** Do not use rebase-and-merge or create-merge-commit unless explicitly approved.
8. **Delete the branch** after merge (GitHub does this automatically when configured).

### What requires a more rigorous review

- Changes to `design-system/colors_and_type.css` (LOCKED tokens — needs design lead sign-off)
- Changes to brand assets in `design-system/assets/`
- Anything touching authentication, SSR/RSC boundaries, or external API contracts
- Performance-critical paths (LCP, CLS contributors, hydration cost)

For these, request review from at least two maintainers and call it out in the PR description.

---

## Code review expectations

**Reviewers:**
- Respond within 1 business day. If you can't, reassign.
- Prefer suggestions over critiques. Use GitHub's "suggest change" feature for trivial diffs.
- Approve only when you'd be willing to ship the change yourself.
- Block (`Request changes`) only for substantive issues — taste-only feedback is `Comment`.

**Authors:**
- Keep PRs focused. <400 lines of diff is the target. >800 lines should be split.
- Provide a self-review on your own PR before requesting review (catches obvious issues, saves rounds).
- Don't force-push to a PR that has been reviewed — push fixup commits instead.

---

## Definition of done

A change is "done" when:

- [ ] Code compiles and tests pass locally
- [ ] CI is green
- [ ] At least one approving review
- [ ] All review comments resolved
- [ ] Documentation updated (if behavior changed)
- [ ] CHANGELOG entry added under the appropriate `### Unreleased` section
- [ ] Linked issue is closed by the PR (`Closes #N`)

---

## Repository hygiene

- **No secrets** in commits — ever. Use `.env.local` (gitignored) or the deployment platform's secret manager.
- **No `console.log`** in committed code. Use a proper logger (when we add one).
- **No commented-out code.** If it's worth keeping, use git history.
- **No force-push to `main`.** Force-push to feature branches is OK (push to your own branch only).
- **Don't commit large binaries** (>1 MB) without discussion. Logos, fonts, and screenshots are exceptions.

---

## Brand & design system rules

The design system tokens in `design-system/colors_and_type.css` are LOCKED. They reflect the live Connexr brand and were extracted from the production site's CSS variables.

**Do not change without** (a) a design-change issue, (b) approval from the project lead, and (c) a corresponding update to `docs/DESIGN-BRIEF.md` and `design-system/README.md`.

Anti-defaults (banned in any artifact):

- Inter font anywhere
- Purple-to-blue or pink-to-violet gradients
- Glass morphism (except the one nav rule)
- Pill CTAs (radius 9999)
- Rainbow accents
- Sparkle emojis (✨ 🚀 etc.)
- Floating tilted dashboard mockups
- Auto-rotating logo carousels
- Stock photos of business people
- Hype words: revolutionary, next-gen, cutting-edge, unleash, game-changing

The full list lives in [`design-system/README.md`](./design-system/README.md#anti-defaults-banned-by-category).

---

## Questions

Open an issue with the `question` label, or reach out to the project lead directly.
