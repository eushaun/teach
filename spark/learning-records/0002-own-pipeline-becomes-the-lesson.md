# 0002 — Lesson 2 taught on Shaun's own production pipeline (applied window mechanics)

Shaun shipped a FIFO inventory-aging pipeline
(`ltd-dbx-asset-bundle/pipelines/netsuite2/inventory-aging-fifo.py`) and asked to be taught
how it works — so lesson 0002 became an applied engine-view reading of his own code (the
number-line FIFO derivation, two window specs → one exchange, the cheap 23-row crossJoin,
`.cache()` before a four-action fan-out), and the queued Catalyst/`explain()` lesson was
deferred to L3. He owns and runs this code, but "teach me how it works" means the window
API surface is familiar-by-ownership, **not** yet evidence of engine understanding — the
recall hooks at the top of L3 (survival formula; ordered-running vs unordered-whole-partition
specs) are the test of whether it stuck.

## Implications

- L3 (Catalyst + `df.explain()`) should use this same pipeline as its specimen: 0002 made
  concrete physical-plan predictions (broadcast join; one Exchange + Sort feeding two Window
  operators) that he can verify against real `explain()` output — predict → verify closes
  the mission loop.
- His own shipped code proved to be the right ZPD material; repeat the pattern whenever a
  recent pipeline matches the next concept.
- Open homework left with him: should `df_ledger` (consumed twice, uncached) also be
  cached? His reasoning on this is a cheap signal of whether the lazy-eval/caching model
  landed.
