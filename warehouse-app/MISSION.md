# Mission: Own DreamCast (the warehouse forecast app)

## The one-liner
Understand Matt's DreamCast (repo `warehouse-forecast-app`) well enough to maintain it, debug
it in production, and ship changes end-to-end (twice-daily Databricks→Postgres sync → FastAPI
engines → React frontend → EC2 deploy) with confidence.

## Who I am
- **Role:** Data engineer at Love to Dream. I own the Databricks `dwh` warehouse this app
  reads from.
- **Fluent:** Python and SQL. **Familiar:** FastAPI (I run FastAPI-based MCP servers).
  **Working knowledge:** Postgres, Docker.
- **Beginner:** TypeScript. The `typescript/` workspace covers lessons 1–2 only
  (primitives, functions, arrays, objects, type aliases; no arrow functions, async, or React).
- **Zero:** React.

## Why this matters (the real-world driver)
1. **Keep it running.** The sync depends on `dwh` tables I change. When a sync breaks or a
   number looks wrong, I need to find the cause fast.
2. **Ship changes safely.** There is no test suite; a projection harness is the gate, and
   pushing to `main` deploys to production via Bitbucket Pipelines.
3. **Answer business questions.** Explain why the app recommends a transfer, a buy, or an
   alert, from the algorithm down.
4. **Decide its future.** As a possible owner, make informed calls on hosting, tooling and
   migration.

## Definition of "done" (what mastery looks like)
- I can draw the architecture from memory.
- I can trace any number on screen back through React → API → service → Postgres table →
  sync step → `dwh` source.
- I can add a new field end-to-end across sync, backend and frontend.
- I can run the projection harness and interpret its output.
- I can deploy, and roll back.
- I can read and modify Matt's React/TypeScript pages.
- I can explain each engine and its parameters: weeks-of-cover, the demand series and its
  rules, inbound grading, stock alerts, warehouse transfers, Amazon FBA / Iconic replenishment
  and the weekly order workflow, factory buys, compliance holds, ranging.

## Constraints & context
- Every specimen comes from the real repo (`/home/eushaun/repos/warehouse-forecast-app` on the
  WSL machine; a separate Windows clone exists).
- Since v2.22 DreamCast is also the record for ranging and SKU statuses (`sku_range`), and
  Databricks is due to read it back, so data now flows both ways between the app and `dwh`.
- TypeScript/React taught just-in-time, bridging from the `typescript/` workspace.
- Lessons short + interactive (house default).
- **Privacy:** this is an internal company codebase. The workspace is published (2026-10-04),
  but the unredacted briefings and `PRIVATE-NOTES.md` stay gitignored. Public files never carry
  hostnames, account or instance IDs, NetSuite entity IDs, security gaps or real stock/sales
  figures (synthetic only). See `NOTES.md` for the full list.

## Out of scope (for now)
- Rewriting or re-architecting the app.
- React mastery for its own sake.
- The Databricks side (already mine).

## Status
- **Mission set:** 2026-10-03
- **Rebuilt against v2.26:** 2026-11-13 (app renamed DreamCast; five markets; the app now owns
  records). The mission itself is unchanged. See `learning-records/0003-*`.
- See `learning-records/` for how this mission evolves.
