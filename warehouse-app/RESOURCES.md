# Resources

High-trust sources for grounding lessons. Local = the repo itself and its upstream (primary
source of truth); Tier 1 = official docs for the confirmed stack; Communities = for wisdom.

Format per entry: **Title** — type · why it's trusted · what it's good for · `URL`

---

## Local — the primary source of truth

- **`warehouse-forecast-app` repo (DreamCast)** — the real thing · every lesson's specimens come
  from here · `/home/eushaun/repos/warehouse-forecast-app` on the WSL machine (a separate Windows
  clone exists). Lessons cite `origin/main` @ `380ff8f` (v2.26, 2026-11-13); production runs
  `origin/main`, so check `git log origin/main` before trusting line numbers.
- **Root `CLAUDE.md` (5 KB)** — what DreamCast is, the routing table to every other doc, the
  rules that apply everywhere, the markets table, versioning · read first. Since the 2026-11-09
  restructure it routes to per-directory files that hold the detail:
  `backend/CLAUDE.md` (scheduler, cache, auth/roles, MCP, migrations, local testing),
  `backend/app/services/CLAUDE.md` (the best single module map, incl. the sync step list),
  `backend/app/routers/CLAUDE.md` (endpoints, order-stage rules),
  `backend/app/models/CLAUDE.md` (every table, dead ones listed), `frontend/CLAUDE.md`
  (structure, conventions, every page). Rule stated there: describe current behaviour only.
- **`forecast-calculations.md`** — how every figure is calculated, per market; data sources;
  quirks; the plain-division register; constants · THE domain reference. Start with "The shared
  model" and "Markets and warehouses" (`:8-78`).
- **`CHANGELOG.md`** — developer history, newest first, with harness numbers on the day · the
  "why" behind a rule. The user-facing version of record is `CHANGELOG` in
  `frontend/src/components/Layout.tsx` (no git tags; `package.json` stays `0.0.0`).
- **Repo skills (`.claude/skills/`)** — `release`, `prod-ops`, `test-branch-stack`,
  `projection-harness` · the procedures for shipping, operating, testing a branch, and the gate.
- **`PROJECTION-ALIGNMENT-PLAN.md`** — Matt's design rationale for the one-primitive engine ·
  read "Why", "Target" and "Decisions from the business (Matt, 9 September 2026)".
  Other plans: `MCP-PLAN.md`, `STOCK-ROLLING-PLAN.md`, `MERCH-ROADMAP.md`,
  `CASE-PACK-OVERRIDE-PLAN.md`, `AMAZON-STOCK-RECONCILIATION-PLAN.md`.
- **`backend/app/tools/compare_projections.py`** — the projection harness · the regression gate
  for any engine change (`dump` / `compare`); its header docstring is the manual.
- **The repo's git history** — Matt's commit bodies carry Why / What changed / harness result.
- **Codebase briefing (2026-11-13)** — `reference/briefing-2026-11-13.md` (gitignored) · a
  seven-section maintainer briefing written against `380ff8f`, incl. what changed since October
  and a re-check of earlier findings · use for orientation, verify against code before citing;
  regenerate when the repo moves on. `briefing-2026-10-03.md` (`0b134ca`) is history only.
- **Databricks `dwh` catalog** — the upstream the sync reads from (`dwh.netsuite.*`,
  `dwh.netsuite2.*`, `dwh.merch.*`, `dwh.amazon_seller_central.*`, `dwh.shipping.*`) · Shaun's own
  warehouse except the shipping master; use for tracing numbers back to source.

## Tier 1 — Official docs for the confirmed stack

Versions from `backend/requirements.txt`, `frontend/package.json` and the Dockerfiles.

**Backend**
- **Python 3.12** — official docs · the runtime (`python:3.12-slim`) ·
  `https://docs.python.org/3.12/`
- **FastAPI 0.115** — official docs · routing, dependencies, response models; "Bigger
  Applications" is the `APIRouter` pattern the app uses ·
  `https://fastapi.tiangolo.com/tutorial/bigger-applications/`
- **Pydantic 2.10 / pydantic-settings 2.7** — official docs · response schemas
  (`extra="ignore"` drops undeclared fields) and `config.py` settings ·
  `https://docs.pydantic.dev/latest/`
- **SQLAlchemy 2.0** (+ psycopg2, sync driver) — official docs · engine/session, `text()`
  raw SQL, `DeclarativeBase` models · `https://docs.sqlalchemy.org/en/20/`
- **Alembic 1.14** — official docs · migrations `001`…`056` (head `056_demand_adjustments`) ·
  `https://alembic.sqlalchemy.org/en/latest/`
- **APScheduler 3.10** — official docs · the in-process `BackgroundScheduler` cron that runs
  the sync at 08:00 and 20:00 UTC · `https://apscheduler.readthedocs.io/en/3.x/`
- **Databricks SQL Connector for Python 3.6** — official docs · `databricks.sql.connect`,
  `fetchmany` batching in the sync (connects to a dedicated all-purpose cluster) ·
  `https://docs.databricks.com/aws/en/dev-tools/python-sql-connector`
- **MCP Python SDK 1.27** (`mcp`, FastMCP) — official docs · the `/mcp` server in
  `backend/app/mcp/` · `https://modelcontextprotocol.io/docs` (SDK:
  `https://github.com/modelcontextprotocol/python-sdk`)
- **PostgreSQL 16** — official manual · SQL dialect, `ON CONFLICT` upserts, indexes ·
  `https://www.postgresql.org/docs/16/`

**Frontend**
- **React 19** — official "Learn" track · components, props, state, effects ·
  `https://react.dev/learn`
- **TypeScript 5.9 Handbook** — official docs · continues from the `typescript/` workspace ·
  `https://www.typescriptlang.org/docs/handbook/`
- **Vite 8** — official guide · dev server, `/api` proxy, build ·
  `https://vite.dev/guide/`
- **Tailwind CSS 4** — official docs · utility classes; tokens live in `src/index.css`
  `@theme` · `https://tailwindcss.com/docs`
- **React Router 7** (`react-router-dom`) — official docs · `App.tsx` routes and guards ·
  `https://reactrouter.com/`
- **Zustand 5** — official docs · `authStore` / `marketStore` ·
  `https://zustand.docs.pmnd.rs/` (source: `https://github.com/pmndrs/zustand`)
- **TanStack Table 8** — official docs · the All SKUs grid ·
  `https://tanstack.com/table/latest/docs/introduction`
- **Axios 1.x** — official docs · the API client and its interceptors ·
  `https://axios-http.com/docs/intro`
- **MSAL.js (`@azure/msal-browser` 5)** — official Microsoft docs · Entra ID login; the app
  uses msal-browser directly, **not** `@azure/msal-react` ·
  `https://learn.microsoft.com/entra/identity-platform/msal-overview` (library:
  `https://github.com/AzureAD/microsoft-authentication-library-for-js`)
- **Recharts 3** — official docs · Velocity page charts · `https://recharts.org/`

**Infra**
- **Docker Compose** — official docs · dev stack and the on-box prod compose ·
  `https://docs.docker.com/compose/`
- **Bitbucket Pipelines** — official docs · the CI/CD that deploys on push to `main` ·
  `https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-pipelines/`
- **Amazon ECR** — official docs · where the built images live (tagged by commit SHA +
  `latest`) · `https://docs.aws.amazon.com/AmazonECR/latest/userguide/`
- **AWS Systems Manager Run Command** — official docs · how `scripts/deploy.sh` triggers the
  pull + `compose up` on EC2 ·
  `https://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html`
- **Caddy** — official docs · the reverse proxy + automatic TLS in front of the app (shared
  with two other apps on the host) ·
  `https://caddyserver.com/docs/`

## Communities — for wisdom

- **Matt (the app's author)** — the single most valuable "community" here · a handover
  conversation answers the "why" no doc will; the 2026-11-13 briefing (§4.11) lists which of the
  October questions the code has since answered, and which remain.
- **r/FastAPI** — practitioner discussion of FastAPI patterns and deployment ·
  `https://www.reddit.com/r/FastAPI/`
- **React community** — official community page (forums, Discord, Stack Overflow) ·
  `https://react.dev/community`

---
_Last updated: 2026-11-13 (rebuilt against v2.26: docs layout, MCP SDK, app name). Never trust
parametric knowledge; verify claims against these._
