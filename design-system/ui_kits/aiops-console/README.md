# Connexr — AIOps console UI kit

A focused recreation of the operator surface implied by the design brief: dark navy-950, IBM Plex Mono ticker, alert table + correlation panel + runbook.

## Files
- `index.html` — assembled console screen.
- `components.jsx` — modular components (sidebar, alert table, detail pane, runbook, ticker).
- `styles.css` — kit-local CSS.

## Components
| Component | Purpose |
|---|---|
| `Sidebar` | App nav with sections (Triage, Runbooks, Evidence, Settings). |
| `TopBar` | App-wide actions, status pill, search. |
| `StatRow` | 4-up KPIs (Open P1, MTTR, Noise, Hours back). |
| `AlertTable` | Selectable list of incidents with severity, service, status. |
| `IncidentDetail` | Selected incident — correlation, runbook, live feed. |
| `Correlation` | "47 alerts → 1 root cause" mock. |
| `Runbook` | Step-by-step, 1.5-checked, with auto-resolution. |
| `Feed` | Plex-Mono activity stream. |

## Caveats

This is a wireframe-fidelity recreation of the **implied** product surface — the design brief mentions LeoRix AI and AIOps but did not ship any console screenshots or codebase. Numbers, alert names, and service names are illustrative.
