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

## Session log

- **2026-06-12 (session 1)**: Workspace created. Lesson 0001 delivered: what TS is, const/let, primitive types, typed functions, inference. Playground-based.
- **2026-06-12 (session 2)**: Lesson 0002 delivered: arrays, for...of, objects-as-TypedDicts, type aliases, optional properties. Warm-up retrieval of L1 added (spacing). Union types teased. Next: arrow functions + map/filter, then unions/narrowing.
