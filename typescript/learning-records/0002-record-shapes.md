# 0002 — Arrays, objects, and record shapes

**Date:** 2026-06-12
**Status:** Active
**Lesson:** [0002-arrays-objects-record-shapes.html](../lessons/0002-arrays-objects-record-shapes.html)

## Context

Learner reported Lesson 1 was "simple enough" — completed same day, no friction. Confirms an experienced programmer absorbing syntax remaps quickly; lesson density can stay at this level or slightly higher, but watch for the first genuinely *new* concept (unions/narrowing) as the real difficulty test.

## What was taught (Lesson 2)

- Arrays: `string[]` syntax, `.push`, `.length`, indexing; `[string]` ≠ array (tuple trap); **no negative indexing** (`.at(-1)` instead)
- `const` array contents are still mutable — `const` only pins the binding
- `for...of` for values; **`for...in` trap** (iterates indices — Python muscle-memory hazard)
- Objects as **TypedDicts, not dicts**: fixed known fields, dot access, compiler-checked typos and missing fields
- Type aliases (`type X = {...}`), optional properties (`?` ≈ `NotRequired`)
- Teaser planted: hovering optional field shows `string | undefined` → union types next-ish

## Key insight to reinforce

The "typo test" and "missing-field test" are the data engineer's payoff moments: the two classic dict bugs (`KeyError` at runtime) become compile errors. If retention wobbles later, return to this contrast.

## Deliberately deferred (flagged to learner)

- Union types & narrowing, `null` vs `undefined` (teased via hover in step 5)
- Real dict equivalents: `Record<string, T>` / `Map` (explicitly parked — learner was told objects ≠ dicts)
- Arrow functions, `map`/`filter` (named as next lesson)
- `interface` vs `type` (mentioned as "same job, compare later")

## Signals to check next session

- Did `totalRows` (let accumulator + for...of + +=) come together unaided?
- Quiz Q4 (`of` vs `in`) — the highest-risk Python-habit transfer error
- Warm-up retrieval of Lesson 1's erasure model — if missed, re-drill before new content

## Next in the ZPD

Functions as values: arrow functions, `map`/`filter`/`reduce` as the list-comprehension replacement. Then unions/narrowing (`null`/`undefined` story). Both are prerequisites for reading MCP SDK code, which leans heavily on callbacks.
