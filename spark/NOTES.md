# Working Notes & Preferences

## How Shaun learns best (defaults — refine as we go)
- **Practitioner, not student.** Fluent in PySpark already; skip API basics, go straight
  to engine internals. Don't re-teach syntax.
- **Ground everything in Databricks reality** — Photon, Delta, AQE-on, the Spark UI he
  actually sees in his workspace.
- **Wants the "why."** He picked practical outcomes, but the route there is understanding
  internals deeply, not memorising config knobs.
- Lessons should be **short, interactive, with immediate feedback** (default teaching
  style unless he says otherwise).

## Teaching conventions for this workspace
- **Build from shared components in `./assets/` — reuse is the default.** Read `./assets/`
  before authoring any lesson; never inline-duplicate CSS/JS a future lesson would repeat.
  Current components:
  - `assets/course.css` — the design system (typography, layout, callouts, diagram helper,
    glossary styles, print). Every lesson + reference doc links it.
  - `assets/quiz.css` + `assets/quiz.js` — declarative, auto-wired quiz widgets:
    `.qz-classify` (tag items into categories), `.qz-pick` (click the correct code line),
    `.qz-reveal` (predict via multiple-choice, then reveal). Markup conventions documented
    in the header of `quiz.js`. Just write markup + include the script — no per-lesson JS.
  - When a lesson needs a new reusable thing (simulator, new widget, diagram helper), add it
    to `./assets/` as a component and link it; grow the library over time.
- Lessons: clean, Tufte-inspired; serif body; numbered citations → references list;
  print-friendly. Link the shared assets via relative paths (`../assets/...`).
- Maintain a single **glossary** (`reference/glossary.html`) and use its terms
  consistently in every lesson. Link glossary terms via `#anchor`.
- Each lesson: one tangible win, tied to the mission, ends with a "primary source" and a
  "ask your teacher" reminder.
- Quizzes: keep answer options equal-length where it could leak a clue; binary
  classifiers (e.g. Transformation/Action) are fine since the same buttons repeat.

## Spaced-repetition / retrieval plan
- Lesson 1 introduces: lazy eval, transformation vs action, job/stage/task, shuffle
  boundary. **Revisit these via a quick recall check at the top of lessons 2–3.**
- Interleave once we have ≥3 skill areas (plan-reading, UI-reading, tuning levers).

## Open threads / ideas for future lessons
- L2: Catalyst journey + reading `df.explain()` (logical → optimized → physical plan).
- L3: The shuffle in depth (narrow vs wide, why it's expensive, partitions).
- L4: Reading the Spark UI to find bottlenecks (skew, spill).
- L5: Partitions & parallelism; `spark.sql.shuffle.partitions`; AQE coalescing.
- L6: Join strategies (broadcast / sort-merge / shuffle-hash) + AQE skew join.
- L7: Memory model — spills, OOMs, caching/persist.
- L8: Databricks specifics — Photon, Delta data skipping / file layout.

## Communities (for wisdom — to surface when relevant)
- See `RESOURCES.md` → Communities section.
