# Roadmap set (L1–L11); Lesson 1 issued as "the map"

2026-10-03. With the codebase briefing in hand, the course was laid out as eleven lessons
(NOTES.md): the map → projection → demand → inbound grading → sync → endpoint + cache →
React/TS just-in-time → harness + deploy → FBA replenishment → other engines → maintainer's
audit. Lesson 1 (`lessons/0001-the-map-four-layers-one-primitive.html`) is the map: four
layers, the one-primitive recipe, and one Dashboard cover traced from pixel to `dwh`.

**Why L1 is the map:** Shaun's zone of proximal development is the app's *architecture and
domain*, not the languages. Python, SQL, FastAPI shapes and the `dwh` source tables are
already his (LR-0001). The unknowns are where things live, why the engine is one primitive,
and which inputs feed which number. A map first makes every later lesson a zoom-in rather
than a new territory. React/TypeScript stay deferred to L7, just-in-time.

**Privacy (restated):** (updated 2026-10-04: the workspace is now published; the unredacted
briefing and `PRIVATE-NOTES.md` stay gitignored.) Public content carries no instance IDs, IPs, production hostname,
NetSuite entity IDs, people's names beyond Matt and Shaun, or real figures (synthetic only).

**Doc/code contradictions to raise with Matt** (from the briefing, verified in code):
safety stock and the promo calendar never reach Ship Qty; AU is half-wired (FBM split,
alert thresholds, dispatch-evidence grading, Amazon mapping/range all US-only); a failed
sync step leaves the cache un-invalidated with no alert. Production-side findings to verify
live in the local `PRIVATE-NOTES.md` (not in the repo). One more found while authoring L1: the Dashboard's
cover tooltip still says Chicago is measured on depletion, but since v1.10 the code uses
E-Com sales × 0.75.

**Signals to check next session:** Exercise A (classify 8 paths into layers): any miss
shows which layer boundary is still blurry. Exercise F: can he re-draw the Riverside trace
chain cold, especially the hub → all-channel `daily_sales` hop? If yes, L2 can open
straight on `projection.py`. If not, open L2 with the recall check from NOTES.md first.
