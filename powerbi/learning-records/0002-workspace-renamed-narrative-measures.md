# 0002 — Workspace renamed to `powerbi`; narrative-measures lesson issued

**Date:** 2026-07-31
**Status:** active

## What happened
- Workspace folder renamed `pbip/` → `powerbi/` at Shaun's request (broader than the file
  formats: the mission now naturally covers reading agent-built DAX *systems*, not only
  project anatomy). Root `index.html` links updated. Mission text unchanged — still
  "read what the agent writes."
- Lesson 2 issued: **Reading the Narrative Measures** — driven by Shaun asking "how did you
  build the narrative measures?" right after the EMEA narrative panel shipped (powerbi-pbip
  PR #23). Reference card `narrative-measure-idioms.html` added alongside.

## Zone of proximal development (evidence)
- Shaun is DAX-fluent and just *lived* the subject matter: he reviewed the panel on canvas,
  found the Total-row bug, and his own Desktop save triggered the binding-freeze incident.
  The lesson leans on that experience — the freeze diff is the emotional anchor.
- Lesson therefore skips DAX basics entirely and teaches three things only: the clause
  pipeline (guard → clause → filtered CONCATENATEX), gates vs clauses (line visibility lives
  in TMDL, never report JSON), and the healthy-vs-frozen binding diff pattern.

## Non-obvious insights to carry forward
- Review-framing works best when tied to an incident he personally hit — future lessons
  should mine real PR/incident history from `powerbi-pbip` (the ledger in
  `.superpowers/sdd/progress.md` is a lesson-topic goldmine).
- Public-repo constraint honoured: lesson uses the real structures/paths but synthetic
  numbers (round figures like £120,000) — this is now the workspace convention (noted in
  NOTES.md).

## Open threads for next session
- Retrieval check on lesson 2's three patterns (spacing: revisit in ~1 week).
- Candidate next topics, mission-ranked: reading partition M diffs (query folding stakes),
  reading relationship/calc-table TMDL (the invalid-column-ID cold-open class), slicer
  saved-state (`objects.general.filter` vs `filterConfig` — which one a diff actually changes).
