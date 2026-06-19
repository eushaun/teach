# Resources

High-quality, high-trust resources for learning TypeScript. Trust levels: ⭐⭐⭐ = authoritative/official, ⭐⭐ = well-regarded community resource, ⭐ = useful but verify.

## Primary knowledge sources

| Resource | URL | Trust | Notes | Status |
|---|---|---|---|---|
| TypeScript for the New Programmer | https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html | ⭐⭐⭐ | Official intro written for people *without* a JS background — exactly our situation | Lesson 1 primary source |
| The TypeScript Handbook | https://www.typescriptlang.org/docs/handbook/intro.html | ⭐⭐⭐ | The official reference. Best as a companion, not a front-to-back read | Unexplored |
| Total TypeScript Essentials (free book) | https://www.totaltypescript.com/books/total-typescript-essentials | ⭐⭐⭐ | Matt Pocock's free 16-chapter book. Editor-first method: learn types by watching what the compiler tells you. Our likely backbone text | Unexplored |
| How to Learn TypeScript (guide) | https://www.totaltypescript.com/learn-typescript | ⭐⭐ | Pocock's roadmap of what to learn in what order — useful for sequencing lessons | Skimmed for curriculum |
| The Modern JavaScript Tutorial | https://javascript.info/ | ⭐⭐ | The standard free reference for JavaScript runtime concepts (event loop, prototypes, async). Dip in when a JS-runtime concept needs depth | Unexplored |
| MDN JavaScript Reference | https://developer.mozilla.org/en-US/docs/Web/JavaScript | ⭐⭐⭐ | Authoritative reference for the JS standard library TS sits on | Unexplored |

## Practice environments

| Resource | URL | Trust | Notes | Status |
|---|---|---|---|---|
| TypeScript Playground | https://www.typescriptlang.org/play | ⭐⭐⭐ | Official in-browser editor with live type checking. Zero-install practice — used from Lesson 1 | In use |

## Mission-specific (MCP)

| Resource | URL | Trust | Notes | Status |
|---|---|---|---|---|
| MCP TypeScript SDK (official) | https://github.com/modelcontextprotocol/typescript-sdk | ⭐⭐⭐ | The north-star target. Runs on Node/Bun/Deno; servers via `McpServer` + stdio or Streamable HTTP | Saved for milestone |
| MCP TS SDK docs | https://ts.sdk.modelcontextprotocol.io/ | ⭐⭐⭐ | Rendered SDK documentation incl. server quickstart | Saved for milestone |

## Communities (wisdom)

| Community | Where | Notes | Status |
|---|---|---|---|
| r/typescript | https://www.reddit.com/r/typescript/ | Active subreddit; good for "is this idiomatic?" questions | Not joined |
| TypeScript Community Discord | https://discord.com/invite/typescript | Real-time help; linked from official TS site | Not joined |
| MCP GitHub Discussions | https://github.com/modelcontextprotocol/typescript-sdk/discussions | Where MCP-specific questions get authoritative answers | Not joined |

## Sequencing notes

- Lessons 1–N use the **Playground** to defer Node.js/tooling setup until syntax basics are in place.
- **Total TypeScript Essentials** chapters will be assigned as parallel reading once the user is past "hello types".
- **javascript.info** is consulted per-topic (not front-to-back) when runtime behaviour needs explaining — e.g. `null` vs `undefined`, equality, async.
