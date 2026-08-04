# Resources

High-trust sources for grounding lessons. Tier 1 = authoritative/primary; Tier 2 = strong
secondary; Local = Shaun's own repo + installed tooling; Communities = for wisdom.

Format per entry: **Title** — type · why it's trusted · what it's good for · `URL`

---

## Tier 1 — Primary / authoritative (Microsoft)

- **Power BI Desktop projects (PBIP) overview** — official docs · the canonical definition
  of the project format · top-level anatomy (.pbip / .SemanticModel / .Report / .gitignore),
  benefits, limitations ·
  `https://learn.microsoft.com/power-bi/developer/projects/projects-overview`
- **Project semantic model folder** — official docs · authoritative file-by-file reference
  for `*.SemanticModel` (definition.pbism, definition\ TMDL folder, model.bim, .pbi\,
  diagramLayout, .platform) ·
  `https://learn.microsoft.com/power-bi/developer/projects/projects-dataset`
- **Project report folder** — official docs · authoritative file-by-file reference for
  `*.Report` (definition.pbir, definition\ PBIR folder, pages/visuals/bookmarks tables,
  naming convention, size limits, external-edit rules) ·
  `https://learn.microsoft.com/power-bi/developer/projects/projects-report`
- **Tabular Model Definition Language (TMDL)** — official docs · the language spec ·
  indentation rules, `=` vs `:` delimiters, expressions, `ref` ordering, casing, backtick
  verbatim blocks ·
  `https://learn.microsoft.com/analysis-services/tmdl/tmdl-overview`
- **PBIR enhanced report format** — official docs · why PBIR exists, one-file-per-visual
  layout, public JSON schemas, batch-edit scenarios ·
  `https://learn.microsoft.com/power-bi/developer/embedded/projects-enhanced-report-format`
- **PBIR JSON schemas (microsoft/json-schemas)** — schema repo · the ground truth every
  PBIR file's `$schema` points at; use for property-level questions ·
  `https://github.com/microsoft/json-schemas/tree/main/fabric/item/report/definition`
- **TMDL view in Power BI Desktop** — official docs · the GUI↔code bridge; scripting
  objects out of a live model · `https://learn.microsoft.com/power-bi/transform-model/desktop-tmdl-view`
- **Deploy PBIP with fabric-cicd** — official docs · matches the repo's actual deploy
  mechanism · `https://learn.microsoft.com/power-bi/developer/projects/projects-deploy-fabric-cicd`

## Tier 2 — Strong secondary

- **Tabular Editor documentation** — vendor docs from the tool the repo's BPA/`te` CLI uses ·
  practical TMDL + TOM handling outside Desktop · `https://docs.tabulareditor.com/`
- **Rui Romano's blog/repos (Microsoft PM for PBIP/PBIR)** — the feature owner's worked
  examples & scripts · `https://github.com/RuiRomano`
- **Power BI implementation planning — content lifecycle** — official guidance · where
  PBIP + git + CI/CD fit in ALM ·
  `https://learn.microsoft.com/power-bi/guidance/powerbi-implementation-planning-content-lifecycle-management-overview`

## Local — Shaun's own estate (prime lesson material)

- **`powerbi-pbip` repo** — the real thing · every lesson's specimens come from here ·
  `CLAUDE.md` (hard rules: merge=prod, display names load-bearing, `* -text`),
  `deploy/README.md` (onboarding playbook), `deploy/validate.py` (the structural gate).
- **Installed skills/agents the workflow uses** (name → layer they touch):
  `pbip:pbip` (project structure/renames/forks) · `pbip:tmdl` (TMDL authoring) ·
  `pbip:pbir-format` (PBIR JSON reference) · `pbip:pbip-validator` agent (structure checks) ·
  `semantic-models:semantic-model`, `:dax`, `:power-query` (model work) ·
  `reports:pbir-cli`, `reports:create-pbi-report`, `new-report` (report work) ·
  `pbi-desktop:connect-pbid` + **powerbi-modeling MCP** (live model via TOM) ·
  `tabular-editor:te-cli` (model CLI) · `fabric-cli:fabric-cli` (service side).

## Communities — for wisdom

- **Fabric Community — Power BI Developer forum** — official, MS staff answer PBIP/PBIR
  questions · `https://community.fabric.microsoft.com/t5/Developer/bd-p/Developer`
- **r/PowerBI** — broad practitioner discussion, active on PBIP/CI-CD workflows ·
  `https://www.reddit.com/r/PowerBI/`
- **Tabular Editor community forum** — deep TMDL/TOM expertise ·
  `https://community.tabulareditor.com/`

---
_Last updated: 2026-07-31. Never trust parametric knowledge — verify claims against these
(MS Learn MCP `microsoft_docs_search`/`fetch` is the fastest way)._

- **Displaying the list of selected items in Power BI** — SQLBI article · canonical
  CONCATENATEX-builds-text treatment by Ferrari/Russo · the pattern behind the narrative
  measures · `https://www.sqlbi.com/articles/displaying-the-list-of-selected-items-in-power-bi/`
- **Add text boxes with dynamic values** — official docs · the textbox feature the narrative
  panel renders through · binding measures into text runs ·
  `https://learn.microsoft.com/power-bi/create-reports/power-bi-reports-add-text-and-shapes`
