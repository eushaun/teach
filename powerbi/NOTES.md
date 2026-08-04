# Working Notes & Preferences

## How Shaun learns best (carried over from spark/typescript workspaces)
- **Practitioner, not student.** Deep PBIX/Desktop + DAX fluency — never re-teach what a
  measure or relationship *is*; teach only how it's *spelled on disk* and how to review it.
- **His own repo is the textbook.** Every specimen comes from `powerbi-pbip` — EMEA
  Performance Dashboard (thick, byPath), Weekly Sales Summary (thin, byConnection →
  Sales Reports shared model), real agent PR diffs. Zero contrived examples.
- **Review-oriented framing.** The mission is *reading diffs before merge* (merge = prod
  deploy), not hand-authoring files from scratch. Frame exercises as PR review.
- **Map to his agentic tooling.** He explicitly asked lessons to reference the installed
  skills/MCPs (pbip:*, semantic-models:*, reports:*, powerbi-modeling MCP, connect-pbid,
  te CLI) so he understands what the agent is doing when it works.
- Lessons **short, interactive, immediate feedback** (house default).

## Teaching conventions for this workspace
- **Reuse `./assets/`** — course.css / quiz.css / quiz.js copied from the spark workspace
  (same design system; widgets documented in quiz.js header: .qz-classify, .qz-pick,
  .qz-reveal). Read assets before authoring; add new reusable widgets there.
- Tufte-ish lessons; numbered citations → refs list; primary-source callout; "teacher is
  one message away" callout; nav links; glossary anchors (`reference/glossary.html#term`).
- Maintain `reference/pbip-file-map.html` as THE compressed artifact of this course — a
  file-by-file map (what it is / review attention / which tool touches it). Update it as
  lessons deepen rather than duplicating tables in each lesson.
- Quizzes: equal-length options where formatting could leak answers; repeating binary
  buttons (SemanticModel/Report) are fine.

## Repo realities that lessons must respect (from powerbi-pbip CLAUDE.md)
- Merging to `main` IS the prod deploy; `validate` check gates PRs.
- Item display names are load-bearing (fabric-cicd matches name+type) — renames = design
  decision, teach the rename cascade carefully (pbip:pbip-validator exists for this).
- `* -text` in .gitattributes; Desktop owns formats/CRLF — never "clean up" whitespace.
- Never let Desktop save over hand-authored TMDL (it rewrites formats/CRLF) — from
  repos/.claude/rules/connect-pbid.md.
- Data lives in Databricks `dwh`; cache.abf/.pbi are gitignored plumbing.

## Spaced-repetition / retrieval plan
- L1 introduces: PBIP anatomy (3 top-level things), TMDL vs PBIR split, thick vs thin
  (byPath/byConnection), plumbing-vs-payload files. **Recall check at top of L2–L3:**
  show a bare file path, ask which layer + what kind of change a diff there implies.

## Lesson roadmap (revise as we go)
- **L1 (done): Anatomy of a PBIP project** — the file map, thick vs thin, tool→layer map.
- L2: **Reading TMDL for real** — table anatomy top-to-bottom (columns, partitions + the M
  inside, annotations), relationships.tmdl, model.tmdl ref ordering; specimen:
  `gold_netsuite_daily_sales.tmdl` + `Date.tmdl` (calculated). What's noise in a diff
  (lineageTag churn, ref reordering) vs signal.
- L3: **Reading visual.json** — position/query/objects triad; queryState projections vs
  objects formatting; filters (page.json/report.json); theme vs local overrides
  (LTDBrand.json); specimen: kpiRevenue + skuTable.
- L4: **Review a real agent PR end-to-end** — pick a merged PR from powerbi-pbip history
  (e.g. the EMEA narrative-panel PR #23 or Amazon PR #30) and re-review it cold.
- L5: **The deploy path** — validate.py gate, fabric-cicd matching by display name,
  .platform/logicalId, what "onboarded" means; failure modes (drift, .bak duplicates).
- L6: **Live-model routes** — when the agent uses powerbi-modeling MCP / connect-pbid (TOM
  on a running Desktop) vs editing files; why those two must not fight (Desktop save-over).

## Open threads
- Candidate real-PR specimens for L4: check `gh pr list --repo love-to-dream/powerbi-pbip
  --state merged` when we get there.
- He may want a printed one-pager of the file map for PR review — the reference doc is
  built print-friendly for that.

- **Public repo → synthetic numbers.** Real file paths and DAX/JSON
  structures from powerbi-pbip are fine; actual revenue/units figures are not — use round
  synthetic values (established in lesson 0002).
