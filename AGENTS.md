# AGENTS.md

Repo conventions, build gates and editorial rules live in **[CLAUDE.md](CLAUDE.md)**.
Read it before changing anything.

The procedure for turning an external source into wiki pages is
**[docs/processing-sources.md](docs/processing-sources.md)**, and the worklist it
draws from is **[docs/source-queue.md](docs/source-queue.md)**.

Three things worth knowing before your first edit:

- A new page in `src/content/docs/` is unreachable until its `{ slug: '...' }` is added to the `sidebar` array in `astro.config.mjs`. This is the most common mistake here.
- `npm run build` is the gate for published content and catches broken links, missing pages and orphan pages. Do not push published-content changes without a clean build.
- `main` is protected and deploys on merge. Work on a branch and open a PR. The one exception is a queue-only append to `docs/source-queue.md`, defined under "What counts as maintenance" in **[GOVERNANCE.md](GOVERNANCE.md)** — read the clause there rather than assuming its scope.
