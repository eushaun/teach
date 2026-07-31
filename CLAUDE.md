# CLAUDE.md

Personal learning repo. Each top-level folder (`spark/`, `typescript/`, `pbip/`) is a
self-contained teaching workspace driven by the **`/teach` skill**, which is vendored at
`.claude/skills/teach/` and auto-synced from upstream (see README for the hook details and
one-time per-machine install). This file is what a fresh Claude Code session on any device
needs to continue the teaching work.

## How to resume work here (any device)

1. **Invoke the `teach` skill first** — it defines the whole workflow (missions, lessons,
   learning records, zone of proximal development). If `/teach` isn't installed yet, do the
   README's one-time copy step.
2. **Load the workspace state before authoring anything**: the topic's `MISSION.md` (why),
   `NOTES.md` (teaching preferences, conventions, **lesson roadmap**), and
   `learning-records/*.md` (what Shaun already knows — sets the difficulty floor).
   `NOTES.md` is the per-topic brain; keep it current as you teach.
3. Ground lesson claims in `RESOURCES.md` sources, not parametric memory.

## House conventions (all workspaces)

- **Assets are per-workspace copies** in `<topic>/assets/`: `course.css` (Tufte-ish design
  system), `quiz.css` + `quiz.js` (declarative quiz widgets — markup contract documented in
  the `quiz.js` header: `.qz-classify`, `.qz-pick`, `.qz-reveal`), `tables.css` (reference
  tables + attention badges, currently in `pbip/`). Reuse/extend components; never inline
  what a future lesson would duplicate. When starting a new workspace, copy assets from the
  most recent one.
- Lessons: `lessons/000N-<slug>.html`, sequential; one tangible win each; numbered
  citations → refs list; end with a primary-source callout, a "your teacher is one message
  away" callout, and nav links. Reference docs and a glossary live in `reference/`;
  link glossary terms via `#anchors` and keep terminology consistent with it.
- Learning records: `learning-records/000N-<slug>.md`, ADR-style, only decision-grade
  insights (formats in the skill folder).

## Specimens from other repos

Lessons deliberately teach from Shaun's real work files (e.g. `pbip/` quotes
`repos/powerbi-pbip`; `spark/` lesson 2 teaches his production FIFO pipeline from
`ltd-dbx-asset-bundle`). **Those repos may not exist on the current device.** The excerpts
already embedded in lessons/NOTES are sufficient context — never fabricate specimen
content; if a planned lesson needs fresh material from a repo that isn't present (or `gh`
access you don't have), say so and either ask Shaun or scope the lesson to what's in hand.

## Publishing — GitHub Pages

- Live site: **https://eushaun.github.io/teach/** (GitHub Pages, `main` branch, root;
  `.nojekyll` = files served verbatim). Every push deploys automatically in ~1–2 min.
- **`index.html` is hand-curated** — when a lesson or reference doc ships, add its line to
  the right workspace section in the same commit. New workspaces get a new section there
  and a row in `README.md`.
- No custom domain — deliberately deferred (2026-07-31); don't set one up unasked.

## Git & privacy

- **This repo is PUBLIC** (`github.com/eushaun/teach`) and the Pages site is public too.
  Never commit secrets/credentials. Lessons may reference employer (LTD) internals only to
  the degree the teaching needs — prefer trimming identifiers (GUIDs, connection strings)
  that don't teach anything. When in doubt, ask Shaun before pushing.
- Commit directly to `main`, message style `topic: what shipped` (see history), and
  **push at the end of each session** — git is how devices stay in sync.
