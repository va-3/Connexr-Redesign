# Security Policy

## Reporting a vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Please use [GitHub's private Security Advisories](https://github.com/va-3/Connexr-Redesign/security/advisories/new) to report them. This routes the report directly to the maintainers without exposing the issue publicly.

If you cannot use Security Advisories, contact the repository maintainer (see [README](./README.md)) via a private GitHub channel and request a secure disclosure path.

## What to include

- A clear description of the vulnerability and its impact
- Steps to reproduce, including code samples or proof of concept where applicable
- Affected versions / commits / environments
- Any suggested mitigations or patches

## What to expect

- **Acknowledgment within 3 business days.**
- A maintainer will triage, assess severity, and confirm a remediation plan.
- We aim to issue a fix and advisory within 30 days of acknowledgment for high-severity issues. Critical issues are fast-tracked.
- Reporters will be credited in the advisory unless they request anonymity.

## Scope

This policy covers code in this repository (design system, applications, configuration). Third-party dependencies should be reported upstream first; if the vulnerability affects how this project uses the dependency, also report here.

Out of scope:
- Issues with the public connexr.com production marketing site (redirect to RSA Tech Group operations)
- Phishing or social-engineering attempts not involving repo content
- Denial-of-service issues against test/staging infrastructure unrelated to the codebase
