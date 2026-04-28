<!--
PR title MUST follow Conventional Commits format. Examples:
  feat(marketing-site): add LeoRix AI dark callout section
  fix(nav): prevent CTA button from wrapping below 768px
  docs(design-system): document orange accent usage rule
  chore(deps): bump next from 15.0.0 to 15.0.4
The PR title becomes the squashed commit message verbatim.
-->

## Summary

<!-- One paragraph: what does this change, and why? -->



## Linked issue

Closes #

<!-- If no issue exists yet, open one first. Every PR must reference a tracked issue. -->

## Type of change

<!-- Check ALL that apply. -->

- [ ] feat — new feature
- [ ] fix — bug fix
- [ ] docs — documentation only
- [ ] chore — repo / tooling / dependencies
- [ ] refactor — code restructure, no behavior change
- [ ] style — formatting only
- [ ] test — tests added or fixed
- [ ] perf — performance improvement
- [ ] ci — CI / release tooling

## Touched areas

- [ ] `design-system/` (LOCKED tokens — needs design lead approval)
- [ ] `docs/`
- [ ] Marketing site (Next.js app, when present)
- [ ] AIOps console / product surface (when present)
- [ ] Backend / API
- [ ] CI / build
- [ ] Other:

## Visual / UX changes

<!-- If this PR changes anything visible to a user, paste BEFORE and AFTER screenshots side-by-side. Use Playwright or a manual capture. Mobile (375), tablet (768), desktop (1440) where relevant. Skip this section ONLY if there is zero visual surface area changing. -->

| | Before | After |
|---|---|---|
| Desktop | | |
| Mobile | | |

## Test plan

<!-- How did you verify this works? Bullet the manual checks you ran. Include browsers / devices if relevant. -->

- [ ]
- [ ]
- [ ]

## CHANGELOG

- [ ] I added an entry under `## [Unreleased]` in `CHANGELOG.md` (Keep a Changelog format).
- [ ] N/A — this PR doesn't change runtime behavior or public-facing surface.

## Definition of done

- [ ] Code compiles and tests pass locally
- [ ] CI is green
- [ ] Documentation updated where behavior changed
- [ ] CHANGELOG entry added (or N/A)
- [ ] Self-review completed
- [ ] All review comments resolved before merge

## Brand / design system compliance

<!-- If this PR touches anything visual, confirm: -->

- [ ] No banned fonts (Inter, etc.)
- [ ] No purple/pink/violet gradients, glass morphism, neon glows, pill CTAs
- [ ] No emoji or hype words ("revolutionary", "next-gen", etc.)
- [ ] All spacing values land on the 8pt grid
- [ ] Border radii from the locked set: 0 / 4 / 8 / 12
- [ ] N/A — this PR has no visual surface area
