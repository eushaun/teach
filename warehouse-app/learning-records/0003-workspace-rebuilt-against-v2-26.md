# Workspace rebuilt against DreamCast v2.26; lesson 1 restarted as an architecture deep-dive

2026-11-13. The app moved 57 commits (v1.15 → v2.26, `0b134ca` → `380ff8f`) after this
workspace was built, and most of the October material went stale: twice-daily sync with a
different step list, five markets instead of two, inbound grading reading the shipping master
first, the app owning ranging and statuses (`sku_range`), a backend-enforced reader role, a
rebuilt factory buy, a much larger demand series, an MCP server, and a new docs layout. The
workspace was rebuilt from a fresh briefing (`reference/briefing-2026-11-13.md`, gitignored).

**Replaced:** the October lesson 1 ("The Map: Four Layers, One Primitive", file deleted) with
`0001-the-map-five-boxes-one-primitive.html`; `reference/architecture-map.html` and
`reference/glossary.html` regenerated; `NOTES.md` roadmap re-planned (L1–L13); `MISSION.md`
and `RESOURCES.md` refreshed. Records 0001–0002 stay as history. The mission itself is
unchanged.

**The mental model changed from "four layers" to "five boxes".** Sync → Store (mirrors +
rollups + the record, which Airbyte reads back into `dwh.dreamcast` since 2026-11-12) → Engine (one primitive, three inputs, then readings, policy, review
rules) → API (REST + MCP) → UI, with Infra around them. The primitive (`projection.py`) is the
one thing that did not change, which is itself the lesson: every feature since went into the
inputs.

**Starting point:** Shaun asked to learn the architecture specifically and to start the course
fresh. No exercise evidence exists from the old lesson 1, so nothing from it counts as learned;
LR-0001's statement of prior knowledge (Python, SQL, FastAPI, Postgres, Docker fluent or
familiar; TypeScript L1–L2; no React) still sets the floor.

**Privacy decision:** location IDs for all five markets are now allowed in public files
(Shaun's rule "location IDs are fine", widened from US/AU). Where auth, roles or operations
fail stays in `PRIVATE-NOTES.md`; lessons teach the design only.

**Signals to check next session:** Exercise A (ten paths into six boxes) shows which boundary
is blurry, likely Engine vs API for `cache.py` and `auth.py`. Exercise F: can he draw the five
boxes and the Riverside trace cold, and does he say "shipping master" for grading's first
source? If yes, L2 opens straight on `projection.py`; if not, open with the recall check.
