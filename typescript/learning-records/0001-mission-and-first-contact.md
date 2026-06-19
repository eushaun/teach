# 0001 — Mission established; first contact with TypeScript

**Date:** 2026-06-12
**Status:** Active
**Lesson:** [0001-typescript-through-python-eyes.html](../lessons/0001-typescript-through-python-eyes.html)

## Context

Fresh workspace. Learner is a data engineer (Python + SQL, daily stack: Airbyte/Databricks/Power BI) with **zero JavaScript**. Mission: comfortable fluency in TypeScript, motivated by MCP servers, LLM-assisted coding, and ecosystem direction. ~30 min/session.

## Decisions

1. **Teach TypeScript as the language** rather than JavaScript-first. JS runtime concepts get introduced inline when they matter, each anchored to a Python equivalent. Backed by the official "TypeScript for the New Programmer" guide, which endorses this path.
2. **Playground before tooling.** Browser-based practice until syntax basics are solid; Node.js/npm/tsc setup gets its own lesson later. Avoids losing a 30-min session to environment friction.
3. **North-star milestone:** a working MCP server in TypeScript using the official SDK.

## What was taught (Lesson 1)

- Mental model: types are **enforced, then erased** (mandatory mypy → plain JS)
- `const`/`let` (default `const`), camelCase, semicolons
- Primitives: `string`, `number` (no int/float split!), `boolean`
- Function syntax: `def f(x: int) -> str:` → `function f(x: number): string { }`
- Template literals as f-strings; `console.log` as `print`
- Type inference + hover-to-inspect as a core skill

## Deliberately deferred (flagged to learner, not yet taught)

- `null` vs `undefined` (Python's one `None` vs TS's two nothing-values)
- `==` vs `===` and truthiness differences (`[]` and `{}` are truthy!)
- Arrays/objects, arrow functions, async — future lessons

## Signals to check next session

- Did they complete the Playground exercise (especially writing `isLarge` unaided)?
- Quiz performance — especially Q1 (erasure) and Q5 (compile-time vs runtime), the two questions that test the core mental model
- If shaky: re-drill the mental model with new examples before introducing arrays/objects

## Next in the ZPD

Arrays and objects (lists/dicts equivalents) → describing record shapes with type aliases — directly relevant to a data engineer and the on-ramp to reading MCP SDK code.
