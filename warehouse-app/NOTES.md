# Working Notes & Preferences

## How Shaun learns best (carried over from spark/typescript/powerbi workspaces)
- **Practitioner, not student.** Fluent Python + SQL, owns the `dwh` warehouse, runs FastAPI
  services. Never re-teach Python, SQL, or HTTP basics.
- **His own repo is the textbook.** Every specimen comes from `warehouse-forecast-app`
  (DreamCast; Matt's code as it actually is). Zero contrived examples.
- **Map concepts to what he'll actually do as maintainer:** debug a sync, explain a
  recommendation, ship a change, roll back a deploy.
- Lessons **short, interactive, immediate feedback** (house default). Exception he asked for:
  lesson 1 (2026-11-13 rebuild) goes deep on architecture.

## Teaching conventions for this workspace
- **Reuse `./assets/`**: course.css / quiz.css / quiz.js / tables.css started as copies of
  `powerbi/assets/`; quiz.css has since gained `.qz-classify.qz-wide` (5+ options, long items),
  and `diagram.css` (box-and-arrow system diagrams: `.sys`/`.bx`/`.arr`, `.frame`, `.pipe`,
  `ol.cycle`; contract in its header) is local to this workspace. Read assets before authoring;
  add new reusable widgets there.
- Tufte-ish lessons; numbered citations → refs list; primary-source callout; "teacher is
  one message away" callout; nav links; glossary anchors (`reference/glossary.html#term`).
- **Vocabulary (from the rebuilt L1):** the **five boxes** are Sync, Store, Engine, API, UI,
  with **Infra** around them. Store = mirrors + rollups + **the record**. Engine = one primitive
  (`projection.project`), three inputs (opening stock, `DemandSeries`, graded arrivals), then
  readings, policy, review rules. API = two front doors (REST, MCP). Use these words every lesson.

## Workspace-specific rules
- **TypeScript/React is the one area where he IS a student.** Bridge from the `typescript/`
  workspace's L1–L2 vocabulary (primitives, functions, arrays, objects, type aliases).
  Introduce arrow functions, async/await and JSX just-in-time, each with a Python analogy,
  only when a specimen needs them.
- **Frame exercises as "a maintainer's day":** trace a number, add a field, diagnose a sync
  failure, read a PR.
- **Privacy:** internal company codebase. `warehouse-app/` is public (since 2026-10-04) except the
  gitignored briefings (`reference/briefing-*.md`) and `PRIVATE-NOTES.md`. In every public file,
  strip hostnames, IPs, AWS account/instance/security-group IDs, the instance name, Secrets
  Manager paths, NetSuite entity and subsidiary IDs, customer codes, real stock/sales figures (use
  synthetic values), and people's names other than Matt and Shaun. Allowed: file paths,
  function/table/column names, `dwh.*` names, stack versions, and **NetSuite location IDs for every
  market** (US 124/135/98/127, AU 4/5/92/121, UK 65/104/105/66, EU 86/107/108/87, CA 110/125;
  widened from US/AU on 2026-11-13 under Shaun's rule "location IDs are fine"). Never: tokens,
  secrets, env values, Entra tenant/app IDs, artifact URLs.
- **Auth and security:** lessons may teach how auth, roles and market scoping are *designed* to
  work. Where they fail (gaps, bypasses, prod settings) goes in `PRIVATE-NOTES.md` only. Same for
  operational gaps listed in the briefing's section 7 (alerting, pipeline credentials, MCP prod state).
- **Briefing of record:** `reference/briefing-2026-11-13.md` (written against `origin/main` @
  `380ff8f`, v2.26; the WSL checkout was fast-forwarded to the same commit, so local = prod).
  Lessons cite `380ff8f`. Regenerate the briefing rather than trust it once the repo moves on;
  `briefing-2026-10-03.md` (`0b134ca`) is kept for history only.
- **Maintain `reference/architecture-map.html`** as THE compressed artifact of this course
  (five boxes, engine recipe, repo map, page → endpoint → service map, sync table, store groups,
  markets, roles, deploy, rules). Update it as lessons deepen rather than duplicating tables.

## Spaced-repetition / retrieval plan
- L1 introduces: the five boxes + Infra; the one-primitive recipe (three inputs → `project` →
  reading → policy → review rules); the two traces (a Riverside cover read, a Ship Qty write and
  the NetSuite loop); "the file seeds, a decision wins"; abort-before-invalidate.
- **Recall check at top of L2–L3:** (1) draw the five boxes cold; (2) show a bare repo path and
  ask which box and what a diff there would change for a planner; (3) "what does grading read
  first?" (shipping master).

## Lesson roadmap (re-planned 2026-11-13 for the app at v2.26)
- **L1 (done 2026-11-13): The map — five boxes, one primitive.** Runtime topology (one process,
  one worker, migrate→seed→serve; prod vs dev vs branch test stack); the sync (twice daily, 18
  entries, abort vs continue, cache invalidated last); the store (mirror + rollups + the record);
  the engine (one primitive, three inputs, policy, review rules); two traces; REST + MCP; the UI's
  shape; roles and five markets as designed; push-to-main deploy and the release gates.
- L2: **Reading `projection.py`** — `project()`, the readings (`weeks_of_cover`, `min_point`,
  `deficit_against`, `gap_before`, `first_stockout`), `early_arrivals` credit/drop; hand-simulate
  with synthetic numbers.
- L3: **Demand I: the series** — `DemandSeries`, `location_demand` bases per location type
  (hub / replenishment destination / channel transfer destination / depletion), the seasonal
  forecast (level, growth, clamps), constants at the top of `demand.py`.
- L4: **Demand II: the rules inside the series** — one-off orders, few sales, intermittent,
  sibling launch rates, earlier-rate when out of stock, first month over days on sale, planned
  adjustments; the promo uplift (replenishment only). Where most "wrong number" questions end.
- L5: **Inbound grading** — shipping master first, POs it doesn't describe, Amazon TO lots, TOs;
  grades, weights, overdue fade, dispatch evidence at Amazon destinations; market totals.
- L6: **The sync and its failure modes** — the 18 entries, upsert vs full replace, warm-up and
  the cluster, initial vs incremental (new-market backfill), abort vs continue, cache
  invalidation and warm-up, the cross-repo `dwh` contract; diagnosing a broken run.
- L7: **Endpoint + cache + schema** — router → service → Pydantic → cache key /
  `CALC_BASIS_VERSION`, warm-up; add a field end to end, backend half.
- L8: **React/TS just-in-time** — `App.tsx` routes and guards, a page's `useState`/`useEffect`,
  `client.ts` interceptors, `types/index.ts`; add the field, frontend half. Bridges from
  typescript L1–L2; introduces arrow functions, async/await and JSX with Python analogies.
- L9: **The gate and the deploy** — harness `dump`/`compare`, the `release` skill, Pipelines →
  ECR → SSM, rollback, the `prod-ops` skill, the branch test stack.
- L10: **Replenishment and the weekly order** — `fba_replenishment` (fee floor, source cap and
  reserves, case packs and overrides, holds, range gate, launches, promos), the order workflow
  (stages, approvers, auto-approval, audit trail, export), MCP preview/confirm.
- L11: **The other quantity engines** — transfers (routes, demand share, first transfers),
  factory buy on retail weeks (cadence, deadlines, carry, lost sales, destination split), the
  review-rule pattern across all three.
- L12: **The record and access** — `sku_range` (ranging, both statuses, seller SKU, case pack
  override, "the file seeds, a decision wins"), compliance holds; auth, roles and market scoping
  end to end; the reverse flow (live since 2026-11-12: Airbyte reads `sku_range` into
  `dwh.dreamcast`, so a `sku_range` column change is a breaking change downstream).
- L13: **A maintainer's audit** — known debt and open questions for Matt. Security and prod
  findings stay in `PRIVATE-NOTES.md`; the lesson teaches how to audit, not the findings.

## Open threads
- **Matt handover Q&A:** does Shaun want Matt looped in for a handover session? The briefing's
  section 4.11 lists which October questions the code has since answered.
- **Doc/code facts worth raising with Matt (public-safe):**
  - Safety stock is computed but still never reaches Ship Qty (`fba_replenishment.py:772-783`);
    the promo calendar does since v2.22.1.
  - AU is wired on the paths flagged in October (FBM split, alert rows, dispatch evidence,
    Iconic range) but its range calls are a stopgap seeded from sales, and its factory buy runs
    on US timing.
  - A failed abort step stops the sync before the cache is invalidated; the sidebar's "Last
    sync" reads the latest completed step of any run.
- **Reverse flow (live since 2026-11-12):** Airbyte reads `public.sku_range` directly from the
  app's Postgres (no intermediate view) into `dwh.dreamcast`. Matt's `prod-ops` skill still calls
  it pending; it is stale on this. Connection details: `PRIVATE-NOTES.md` only.
- Security and production-side findings: see the local, gitignored `PRIVATE-NOTES.md`.
