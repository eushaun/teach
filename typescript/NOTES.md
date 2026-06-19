# Teaching Notes

## User preferences & profile

- Data engineer: Python + SQL strong, **no JavaScript at all**
- ~30 min per session
- Mission flavour: MCP servers, LLM-assisted coding, web ecosystem literacy
- Set up workspace 2026-06-12

## Teaching strategy decisions

- **Teach TypeScript as the language**, not "JavaScript first, then TS". JS runtime concepts (null/undefined, ===, async, event loop) get introduced inline, at the moment they matter, anchored to Python equivalents. Rationale: matches official "TS for the New Programmer" guidance; avoids learning untyped idioms only to unlearn them.
- **Anchor everything to Python.** Side-by-side Python/TS comparisons are the core explanatory device. The user already *has* the concepts (functions, types via type hints, collections); we're remapping syntax and semantics.
- **Data-flavoured examples.** Rows, records, API payloads, pipelines — not foo/bar. Plays to existing intuition.
- **Playground before tooling.** Browser-based TS Playground for early lessons; Node.js + tsc + npm setup deferred to its own lesson once syntax basics exist. Avoids burning a session on environment friction.
- **Key contrast to keep hitting**: Python type hints are optional/advisory; TS types are enforced at compile time and erased at runtime. This is the single biggest mental-model shift.

## Watch-outs (Python habits that will bite)

- One `number` type — no int/float distinction ✅ taught L1
- `null` AND `undefined` where Python has just `None` (flagged L1, teased L2 via `string | undefined` hover — teach properly soon)
- Truthiness rules differ (`0`, `""`, `NaN` falsy — like Python, but `[]` and `{}` are TRUTHY, unlike Python!) — not yet taught
- `==` vs `===` — not yet taught, defer to equality lesson
- Indentation → braces; snake_case → camelCase ✅ taught L1
- `for...in` vs `for...of` — Python's `for x in` reflex grabs the wrong one ✅ taught L2 (watch for regressions)
- No negative indexing — `xs[-1]` is silently `undefined` ✅ taught L2
- Objects look like dicts but are TypedDicts ✅ taught L2; real dicts (`Record`/`Map`) still parked

## Pacing signal

- L1 was "simple enough" — learner absorbs syntax remaps fast. Keep ~current density. The first real difficulty test will be unions/narrowing (new concept, not a remap). Don't inflate lesson size based on early ease.

## Workspace conventions (assets)

Lessons and reference docs are **not** self-contained any more — they share components in `./assets/` (per the teach skill's Assets section). Build new lessons from these; never re-inline what's already a component.

- **`assets/course.css`** — the one shared stylesheet. Every lesson and reference doc links it (`../assets/course.css`). It defines the theme variables and all components: `.kicker`/`.meta`, `.pill.py`/`.pill.ts`, callouts (`.bigidea`, `.win`, `.trap`, `.note`), `.step`/`.step-num`/`.step-body`, the quiz classes, `.source-box`, `.checklist`, and the reference `dl`/`dt`/`.py-anchor`/`.subtitle`. Add new shared styles here, not inline.
- **`assets/quiz.js`** — the retrieval-quiz widget. Markup contract: a `.quiz-q` with `.qtext`, `.quiz-opt` buttons carrying `data-q` + `data-ok="yes|no"`, and a `.quiz-feedback` `<p id="fb-<q>">` whose **`data-explain`** holds the correct-answer explanation. The script is generic; per-question text lives in the markup. Warm-up questions use `data-q="w1"`, `w2`, … (id `fb-w1`).
- Lessons link the script with `<script src="../assets/quiz.js"></script>` just before `</body>`.

When a new lesson needs something reusable (a simulator, a diagram helper), add it to `./assets/` and link it — don't paste it inline.

## Session log

- **2026-06-12 (session 1)**: Workspace created. Lesson 0001 delivered: what TS is, const/let, primitive types, typed functions, inference. Playground-based.
- **2026-06-12 (session 2)**: Lesson 0002 delivered: arrays, for...of, objects-as-TypedDicts, type aliases, optional properties. Warm-up retrieval of L1 added (spacing). Union types teased. Next: arrow functions + map/filter, then unions/narrowing.
- **2026-06-19 (maintenance)**: Migrated the workspace to the updated teach skill's **Assets** model. Extracted the duplicated per-file CSS into `assets/course.css` and the duplicated quiz script into `assets/quiz.js`; relinked both lessons + both reference docs. No content/pedagogy changes. Quiz explanations now live in `data-explain` attributes. Next teaching session still: arrow functions + map/filter, then unions/narrowing.
