# Mission: Read What the Agent Writes (PBIP / TMDL / PBIR)

## The one-liner
Make the PBIP text formats as readable to me as the rendered report — so I can review an
agent's work at the **file level** (the git diff), not just by eyeballing the final output.

## Who I am
- **Role:** Data/BI developer at Love to Dream. Fluent in **traditional PBIX authoring** in
  Power BI Desktop — visuals, model view, DAX, the full click-path.
- **How I work now:** Reports are built and migrated by **Claude Code agents** in the
  `powerbi-pbip` repo (PBIP projects, TMDL models, PBIR reports, fabric-cicd deploys where
  **merging to `main` IS the prod deploy**).
- **The gap:** I can't read what the agent actually built. The `.tmdl` and `visual.json`
  files are a black box, so my review happens only at the rendered-output level — after the
  fact, and blind to anything the canvas doesn't show.

## Why this matters (the real-world driver)
1. **PR review with teeth** — merging to `main` deploys to production. I need to read a
   TMDL/PBIR diff and know what changed *before* I approve, not discover it in the Service.
2. **Steering agents precisely** — "change the format string on `[Sales]` in
   `Measures - Base.tmdl`" gets a better result than "make the revenue card look right."
   Knowing the file map makes my prompts sharper and the agent's work cheaper to verify.
3. **Unblocking failures** — when `deploy/validate.py` fails, a rename cascades wrong, or
   Desktop refuses to open a project, I want to diagnose it in the files myself.

## Definition of "done" (what mastery looks like)
- Given any PBIP folder, I can name every file/folder and its job without looking it up.
- Given a git diff touching `.tmdl` files, I can say precisely what changed in the model
  (measure? column? partition M? relationship? just lineage noise?).
- Given a diff touching PBIR JSON, I can say what changed in the report (layout? binding?
  formatting? filters?) and whether it's risky.
- Before dispatching an agent, I can predict which files the requested change *should*
  touch — and flag the PR when it touches more.

## Constraints & context
- Ground everything in **my own repo** (`C:\Users\ShaunLim\repos\powerbi-pbip`) — real
  projects: EMEA Performance Dashboard (thick), Weekly Sales Summary (thin), Shipping
  Report V2, Sales Reports shared model, Amazon Seller Central trio.
- Reference the **installed tooling** the agents actually use (pbip/tmdl/pbir-format
  skills, semantic-models & reports skills, powerbi-modeling MCP, connect-pbid, te CLI,
  deploy/validate.py) so lessons double as a map of the agentic workflow.
- Repo realities apply: Desktop owns file formats (`* -text`, CRLF), display names are
  load-bearing for fabric-cicd, Pro-license refresh limits.
- Lessons short + interactive (same style as the spark/typescript workspaces).

## Out of scope (for now)
- Writing DAX itself (already fluent) and report *design* judgment (covered by work skills).
- Fabric Git integration / deployment pipelines beyond what the repo's fabric-cicd flow uses.
- TMSL / model.bim beyond recognizing it as the legacy sibling of TMDL.

## Status
- **Mission set:** 2026-07-31
- See `learning-records/` for how this mission evolves.
