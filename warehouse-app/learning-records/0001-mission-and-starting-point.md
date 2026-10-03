# Mission set: own the warehouse forecast app; strong data/Python prior, TypeScript L1–L2, no React

Shaun (2026-10-03) set the mission: understand Matt's `warehouse-forecast-app` well enough to
maintain it, debug it in production, and ship changes end-to-end (sync → FastAPI → React →
EC2 deploy), as its possible future owner.

**Established prior knowledge:** fluent Python and SQL; owns the Databricks `dwh` warehouse
the app syncs from; familiar with FastAPI (runs FastAPI-based MCP servers); working knowledge
of Postgres and Docker. TypeScript covered only to `typescript/` lessons 1–2 (primitives,
functions, arrays, objects, type aliases; no arrow functions, async, or React). No React.

**Implications:** skip Python, SQL and HTTP basics. Spend effort on the app's architecture,
its domain algorithms (weeks-of-cover, alerts, transfers, FBA/Iconic replenishment, factory
buys, compliance holds), and just-in-time React/TypeScript with Python analogies. Frame
exercises as maintainer tasks (trace a number, add a field, diagnose a sync, review a PR).

**Privacy decision:** the codebase is internal, so `warehouse-app/` is gitignored in this
public repo pending Shaun's call on whether/how to publish.
