# Working Notes & Preferences

## How Shaun learns best (carried over from spark/typescript/powerbi workspaces)
- **Practitioner, not student.** Fluent Python + SQL, owns the `dwh` warehouse, runs FastAPI
  services. Never re-teach Python, SQL, or HTTP basics.
- **His own repo is the textbook.** Every specimen comes from `warehouse-forecast-app`
  (Matt's code as it actually is). Zero contrived examples.
- **Map concepts to what he'll actually do as maintainer:** debug a sync, explain a
  recommendation, ship a change, roll back a deploy.
- Lessons **short, interactive, immediate feedback** (house default).

## Teaching conventions for this workspace
- **Reuse `./assets/`**: course.css / quiz.css / quiz.js / tables.css copied byte-identical
  from `powerbi/assets/` (widgets documented in the quiz.js header: .qz-classify, .qz-pick,
  .qz-reveal). Read assets before authoring; add new reusable widgets there.
- Tufte-ish lessons; numbered citations → refs list; primary-source callout; "teacher is
  one message away" callout; nav links; glossary anchors (`reference/glossary.html#term`).

## Workspace-specific rules
- **TypeScript/React is the one area where he IS a student.** Bridge from the `typescript/`
  workspace's L1–L2 vocabulary (primitives, functions, arrays, objects, type aliases).
  Introduce arrow functions, async/await and JSX just-in-time, each with a Python analogy,
  only when a specimen needs them.
- **Frame exercises as "a maintainer's day":** trace a number, add a field, diagnose a sync
  failure, read a PR.
- **Privacy:** internal company codebase. `warehouse-app/` is public (since 2026-10-04) except the
  gitignored briefing and `PRIVATE-NOTES.md`. In every public file, strip hostnames, account IDs, internal
  NetSuite IDs and real stock/sales figures (use synthetic values). Allowed: file paths,
  function/table/column names, location IDs (124/135/98/127, 4/5/92/121), `dwh.*` names,
  stack versions. Never: instance IDs, IPs, the production hostname, people's names other
  than Matt and Shaun, NetSuite entity IDs, real figures, tokens/secrets/env values.
- **Briefing of record:** `reference/briefing-2026-10-03.md` from 2026-10-03 (written
  against `origin/main` @ `0b134ca`). Regenerate it rather than trust it after the repo
  moves on. Lessons cite the **local checkout** (`main` @ `135eac9`, 2 commits behind) and
  say so where origin/main differs.
- **Maintain `reference/architecture-map.html`** as THE compressed artifact of this course
  (layers, engine recipe, page → endpoint → service map, sync table, rules). Update it as
  lessons deepen rather than duplicating tables in each lesson.

## Spaced-repetition / retrieval plan
- L1 introduces: the four layers (Sync / Storage / API+Engine / UI, plus Infra around them)
  and the one-primitive recipe (opening stock → `projection.project` with a `DemandSeries`
  and graded arrivals → a reading).
- **Recall check at top of L2–L3:** show a bare repo path and ask (a) which layer, (b) what a
  diff there would change for a planner.

## Lesson roadmap (revise as we go)
- **L1 (done 2026-10-03): The map — four layers and one primitive.** dwh → 18-step sync →
  Postgres → FastAPI routers/services → React SPA on EC2 behind Caddy; where each layer lives
  in the tree; the single engine recipe; one Dashboard cover bar traced from pixel to `dwh`.
- L2: **Reading `projection.py`** — the four readings (`weeks_of_cover`, `min_point`,
  `deficit_against`, `gap_before`), `early_arrivals` credit/drop, hand-simulating a
  projection with synthetic numbers.
- L3: **Demand** — `demand.location_demand` bases per location type (hub / replenishment
  destination / transfer destination / depletion); the seasonal forecast steps and constants.
- L4: **Inbound grading** — grades, timing, weights, the overdue fade, transfer orders,
  market totals.
- L5: **The sync** — the 18 steps, incremental upsert vs full replace, the cross-repo `dwh`
  contract, failure modes (step abort without cache invalidation, no alerting), diagnosing
  a broken sync.
- L6: **Endpoint pattern + cache** — router → service → Pydantic schema →
  `CALC_BASIS_VERSION`; add a field end-to-end, backend half.
- L7: **React/TS just-in-time** — reading `Dashboard.tsx` (useState/useEffect + typed
  fetchers, zustand market store, axios interceptor); add the field, frontend half
  (`types/index.ts` + page). Bridges from typescript L1–L2; introduces arrow functions,
  async/await and JSX with Python analogies.
- L8: **The gate and the deploy** — `compare_projections dump`/`compare`, the release
  checklist, Bitbucket Pipelines → ECR → SSM → EC2, rollback, prod logs.
- L9: **FBA replenishment engine** — ship qty, case packs, holds; the safety-stock /
  promo-calendar discrepancy between docs and code.
- L10: **The other engines** — transfers, factory buy, alerts, compliance holds, overstock.
- L11: **A maintainer's audit** — known debt, the AU half-wiring, security findings to verify
  in prod, open questions for Matt.

## Open threads
- **Published 2026-10-04:** workspace is public; the unredacted briefing and
  `PRIVATE-NOTES.md` stay gitignored.
- **Matt handover Q&A:** does Shaun want Matt looped in for a handover session?
- **Briefing §11 findings — candidate L11 material, and worth raising with Matt soon
  regardless of the course:**
  - Safety stock and the promo calendar never reach Ship Qty (only `target_stock`,
    `fba_replenishment.py:622-628` locally, `:627-633` on origin/main), contradicting CLAUDE.md's "promo calendar drives
    pre-stocking".
  - AU is half-wired: AU FBM entity is never split out, AU has no `alert_thresholds` rows
    (alerts likely always empty), AU Amazon skips dispatch-evidence grading (name check
    `== "Amazon"`), Amazon mapping/range are hardcoded `'US'`.
  - A failed sync step aborts the run **without** invalidating the response cache, and
    nothing alerts anyone.
  - Production-side findings to verify live in the local `PRIVATE-NOTES.md` (not in the repo).
