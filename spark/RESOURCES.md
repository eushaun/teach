# Resources

High-trust sources for grounding lessons. Tier 1 = authoritative/primary; Tier 2 = strong
secondary; Communities = for testing skills in the real world (wisdom).

Format per entry: **Title** — type · why it's trusted · what it's good for · `URL`

---

## Tier 1 — Primary / authoritative

- **Learning Spark, 2nd Edition** (Damji, Wenig, Das, Lee) — book (free eBook via
  Databricks) · written by Spark creators/committers at Databricks · best readable intro
  to the execution model, Catalyst, and structured APIs · covers Spark 3.0 ·
  `https://pages.databricks.com/202003-US-EB-Learning-Spark-2nd-Edition_Thank-you-ebook.html`
  (also on O'Reilly: `https://www.oreilly.com/library/view/learning-spark-2nd/9781492050032/`)

- **Apache Spark Official Docs** — official reference · the authoritative spec for engine
  behavior:
  - Cluster Mode Overview (driver/executor/job/stage/task) ·
    `https://spark.apache.org/docs/latest/cluster-overview.html`
  - RDD Programming Guide (transformations vs actions, lazy eval) ·
    `https://spark.apache.org/docs/latest/rdd-programming-guide.html`
  - Web UI guide (Jobs/Stages/SQL tabs — for debugging) ·
    `https://spark.apache.org/docs/latest/web-ui.html`
  - SQL Performance Tuning (AQE, joins, partitions, caching) ·
    `https://spark.apache.org/docs/latest/sql-performance-tuning.html`
  - SQL Reference: Window Functions (syntax, function classes, frame clause) ·
    `https://spark.apache.org/docs/latest/sql-ref-syntax-qry-select-window.html`
  - PySpark API: `pyspark.sql.Window` (the authoritative default-frame rules — unbounded
    frame without ordering, growing RANGE frame with ordering; verified against the class
    docstring in the Spark source) ·
    `https://spark.apache.org/docs/latest/api/python/reference/pyspark.sql/api/pyspark.sql.Window.html`

- **The Internals of Spark Core** (Jacek Laskowski) — online book · maintained by a
  long-time Spark/Databricks specialist · deepest free dive into the scheduler, DAG,
  shuffle, memory · `https://books.japila.pl/apache-spark-internals/`

- **The Internals of Spark SQL** (Jacek Laskowski) — online book · companion focused on
  Catalyst, query planning, AQE · `https://books.japila.pl/spark-sql-internals/`

## Tier 2 — Strong secondary

- **High Performance Spark, 2nd Ed.** (Holden Karau et al.) — book · battle-tested tuning
  patterns from a Spark committer · `https://highperformancespark.com/`

- **Databricks: Adaptive Query Execution — Speeding up Spark SQL at runtime** — vendor
  engineering blog · the canonical AQE explainer ·
  `https://www.databricks.com/blog/2020/05/29/adaptive-query-execution-speeding-up-spark-sql-at-runtime.html`

- **Databricks docs: Adaptive query execution** — platform reference for AQE behavior on
  Databricks · `https://docs.databricks.com/aws/en/optimizations/aqe`

- **Unravel: "Catalyst Analyst — A Deep Dive into Spark's Optimizer"** — deep-dive article
  on the Catalyst pipeline ·
  `https://www.unraveldata.com/resources/catalyst-analyst-a-deep-dive-into-sparks-optimizer`

- **Databricks: Introducing Window Functions in Spark SQL** (2015) — vendor engineering
  blog · the canonical intro to window specs; best pictures of ROWS vs RANGE frames ·
  used in lesson 0002 ·
  `https://www.databricks.com/blog/2015/07/15/introducing-window-functions-in-spark-sql.html`

## Communities — for wisdom (testing skills in the real world)

- **Databricks Community** (data engineering forum) — practitioners on the same platform ·
  `https://community.databricks.com/`
- **r/dataengineering** & **r/apachespark** — broad practitioner discussion ·
  `https://www.reddit.com/r/dataengineering/` · `https://www.reddit.com/r/apachespark/`
- **Apache Spark user mailing list / Stack Overflow [apache-spark]** — for precise engine
  questions · `https://stackoverflow.com/questions/tagged/apache-spark`

---
_Last updated: 2026-07-27. Never trust parametric knowledge — verify claims against these._
