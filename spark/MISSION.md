# Mission: Understand the Spark Engine

## The one-liner
Turn the Spark engine from a black box into a mental model I can *reason with* — so I
can make my Databricks pipelines faster, cheaper, and easier to debug, and design them
well from the start.

## Who I am
- **Role:** Data engineer building pipelines on the **Databricks** platform.
- **Current skill:** Fluent in **Spark / PySpark syntax** (DataFrame & SQL APIs). I can
  write working pipelines.
- **The gap:** What happens *underneath* the API is largely a black box. I write code
  that works, but I don't yet know what the engine does with it, so I can't reliably
  predict cost, performance, or failure.

## Why this matters (the real-world driver)
I selected three outcomes — all practical, not theory for its own sake:

1. **Performance & cost tuning** — read query plans, fix shuffles & skew, right-size
   partitions, exploit AQE and caching to make pipelines faster and cheaper.
2. **Debugging failures** — diagnose OOMs, spills, skew, stuck stages, and slow jobs by
   reading the Spark UI and DAG to find the *real* bottleneck (not guess).
3. **Architecture decisions** — choose partitioning, join, and file-layout strategies up
   front; know when streaming vs batch; understand how Delta interacts with the engine.

Every lesson should connect back to at least one of these. The through-line:
**"How does knowing this make my Databricks pipeline faster, cheaper, or easier to fix?"**

## Definition of "done" (what mastery looks like)
- I can take an arbitrary PySpark snippet and predict how the engine will execute it
  (jobs, stages, shuffles) *before* running it.
- I can open the Spark UI on a slow job and locate the bottleneck within minutes.
- I can read `df.explain()` output and act on it.
- I can name the right tuning lever for a given symptom (skew, spill, small files,
  exploding shuffle) and explain *why* it works.

## Constraints & context
- Platform is **Databricks** (so: Photon, Delta Lake, Unity Catalog, AQE-on-by-default,
  serverless/classic compute are all in scope where relevant).
- Engine version baseline: modern Spark 3.x/4.x behavior (AQE enabled by default).
- Starting point (2026-06-19): execution model is the foundation — everything else
  builds on it.

## Status
- **Mission set:** 2026-06-19
- See `learning-records/` for how this mission evolves.
