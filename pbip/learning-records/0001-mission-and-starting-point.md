# Mission set: read agent-written PBIP at the file level; strong PBIX prior, zero format prior

Shaun (2026-07-31) set the mission: make PBIP/TMDL/PBIR diffs reviewable so agent-built
reports in `powerbi-pbip` can be reviewed before merge (merge = prod deploy), steered
precisely, and debugged when validation fails.

**Established prior knowledge:** fluent traditional PBIX author (Desktop click-path, model
view, DAX — do not re-teach concepts); already operates the agentic workflow daily
(onboarded + greenfield reports shipped via CI/CD), so the *workflow* is familiar — only
the on-disk representation is opaque. No hands-on TMDL/PBIR reading yet.

**Implications:** skip all "what is a measure/relationship" material; teach spelling, not
semantics. Frame exercises as PR review, not authoring. Use his own repo's files as every
specimen. Explicitly connect each layer to the installed skills/MCPs the agents use — he
asked for this mapping directly.
