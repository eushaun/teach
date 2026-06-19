# 0001 — Mission set & starting point calibrated

- **Date:** 2026-06-19
- **Status:** Active

## Context
First session. Shaun is a data engineer building pipelines on Databricks, fluent in
PySpark syntax, who wants to understand the Spark **engine** underneath the API.

## Decisions
1. **Mission** = make Databricks pipelines faster/cheaper/debuggable + design them well,
   by building a real mental model of the engine (not memorising knobs). Recorded in
   `MISSION.md`.
2. **Outcomes chosen** (via questioning): performance & cost tuning, debugging failures,
   architecture decisions. (He did *not* pick "deep mental model for its own sake" — so
   keep theory in service of the three practical outcomes.)
3. **Starting ZPD** = "engine is mostly a black box." Confirmed by self-assessment.
   Therefore begin at the **execution model** (driver/executor, lazy eval,
   job→stage→task, shuffle boundary) — the map everything else hangs on.

## Non-obvious insights to carry forward
- He's past syntax — **do not re-teach the DataFrame API.** Effort budget goes to
  internals.
- "Black box" + practical outcomes means: teach the minimum theory needed, then
  immediately connect to a UI/plan/tuning payoff so it doesn't feel abstract.
- The job→stage→task hierarchy + shuffle-boundary concept is the prerequisite for
  reading the Spark UI (a later lesson) — so it must be solid before L4.

## What this drives next
- Lesson 1: The Execution Model (lazy eval + job/stage/task + shuffle boundary).
- Glossary reference doc seeded; must be reused verbatim in later lessons.
- Likely sequence after L1: Catalyst/explain → shuffle deep-dive → Spark UI reading.
