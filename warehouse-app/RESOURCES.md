# Resources

High-trust sources for grounding lessons. Local = the repo itself and its upstream (primary
source of truth); Tier 1 = official docs for the confirmed stack; Communities = for wisdom.

Format per entry: **Title** — type · why it's trusted · what it's good for · `URL`

---

## Local — the primary source of truth

- **`warehouse-forecast-app` repo** — the real thing · every lesson's specimens come from
  here · `C:\Users\ShaunLim\repos\warehouse-forecast-app` (local `main` @ `135eac9`;
  production runs `origin/main`, check `git log origin/main` before trusting line numbers).
- **`PROJECTION-ALIGNMENT-PLAN.md`** — Matt's design rationale for the one-primitive engine ·
  THE primary source for L1–L4 · read "Why", "Target" and "Decisions from the business
  (Matt, 9 September 2026)" first, then the progress log.
- **Its `CLAUDE.md`** — Matt's (agent-maintained) operating notes · architecture, sync steps,
  release checklist, gotchas · ~290 lines / ~120 KB, read in chunks. Partly stale in places
  (see NOTES.md open threads); the code wins on any disagreement.
- **`backend/app/tools/compare_projections.py`** — the projection harness · the regression
  gate for any engine change (`dump` / `compare`); its header docstring is the manual.
- **`frontend/src/components/Layout.tsx` `CHANGELOG`** — the version of record (v1.01 →
  v1.15); there are no git tags, and `package.json` stays `0.0.0`.
- **The repo's git history** — why things are the way they are · Matt's commit bodies carry
  Why / What changed / harness result; `edd271f` (v1.10) is the model "feature across all
  layers" commit.
- **Codebase briefing (2026-10-03)** — `reference/briefing-2026-10-03.md` · a 14-section
  newcomer briefing written against `origin/main` @ `0b134ca` · use for orientation, verify
  against code before citing; regenerate when the repo moves on.
- **Databricks `dwh` catalog** — the upstream the daily sync reads from (`dwh.netsuite.*`,
  `dwh.netsuite2.*`, `dwh.merch.*`, `dwh.amazon_seller_central.*`) · Shaun's own warehouse;
  use for tracing numbers back to source.

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
- **Alembic 1.14** — official docs · the 36 migrations (35 in the local checkout) ·
  `https://alembic.sqlalchemy.org/en/latest/`
- **APScheduler 3.10** — official docs · the in-process `BackgroundScheduler` cron that runs
  the daily sync · `https://apscheduler.readthedocs.io/en/3.x/`
- **Databricks SQL Connector for Python 3.6** — official docs · `databricks.sql.connect`,
  `fetchmany` batching in the sync ·
  `https://docs.databricks.com/aws/en/dev-tools/python-sql-connector`
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
- **Caddy** — official docs · the reverse proxy + automatic TLS in front of the app ·
  `https://caddyserver.com/docs/`

## Communities — for wisdom

- **Matt (the app's author)** — the single most valuable "community" here · a handover
  conversation answers the "why" no doc will; the briefing's §14 has 20 questions ready.
- **r/FastAPI** — practitioner discussion of FastAPI patterns and deployment ·
  `https://www.reddit.com/r/FastAPI/`
- **React community** — official community page (forums, Discord, Stack Overflow) ·
  `https://react.dev/community`

---
_Last updated: 2026-10-03 (phase 2: stack confirmed from the repo). Never trust parametric
knowledge; verify claims against these._
