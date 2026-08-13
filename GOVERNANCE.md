# Governance

How changes are proposed, reviewed, and published on the Citizen Infrastructure wiki.

This is a **public knowledge commons**, stewarded by the
[Citizen Infrastructure Builders Club (CIBC)](https://cibc.notion.site). Anyone may
propose a change; CIBC maintainers review what gets published.

## Roles

| Role | Who | Can |
|------|-----|-----|
| **Contributor** | Anyone with a GitHub account | Propose changes via a fork or the "Edit page" link on any page. No special access needed. |
| **Maintainer** | CIBC members in the [`wiki-editors`](https://github.com/orgs/Citizen-Infra/teams/wiki-editors) team | Everything a contributor can, plus push branches, review, approve, and merge PRs. |
| **Owner** | Citizen-Infra org admins | Everything a maintainer can, plus manage the team, repo settings, and branch protection. |

Maintainer rights are granted by adding a CIBC member to the `wiki-editors` team —
one invite, no per-page or per-repo setup. Owners manage that team.

## How a change lands

Every change to `main` goes through a pull request; there are no direct pushes
(owners excepted, for maintenance). To merge, a PR needs:

1. **A green `build` check** — `npm run build` must pass. It catches broken internal
   links and pages that aren't wired into the sidebar. This is the same gate you run
   locally before pushing.
2. **One approving review** from a maintainer or owner.
3. **Resolved review conversations.**

A maintainer then squash-merges, and Netlify publishes `main` automatically —
**merge = live** at [wiki.citizeninfra.org](https://wiki.citizeninfra.org).

- **Contributors** (no merge rights) propose via a PR from a fork; a maintainer
  reviews and merges it.
- **Maintainers'** own PRs still need one approving review from another maintainer or
  owner — nobody self-merges unreviewed work.
- **Owners** retain a direct path to `main` for maintenance only.

### What counts as maintenance

"Maintenance" is deliberately narrow. One case is defined so far:

- **Queue-only appends.** Adding approved sources to `docs/source-queue.md` — in
  practice the handoff at the end of a CIBC links digest — may be committed
  straight to `main` by an owner, after the candidates have been deduplicated
  against both the Queue and Processed sections and explicitly approved. Use a
  plain imperative message, e.g. `queue: add 6 sources from the 2026-08-10 cibc
  digest`.

  The `build` check is not required for these, and that is a statement about
  scope rather than a shortcut: Starlight publishes from `src/content/docs/`,
  while `docs/` is an ordinary repository folder, so a queue append cannot
  change a published page or a sidebar entry.

This exception does **not** cover research extractions, content-backlog issues,
wiki pages, sidebar or overview edits, or anything else that reaches a reader.
Those follow the pull-request path above, build check and review included.

Anything else an owner wants to treat as maintenance needs a clause here first.
Adding one is itself a reviewed change.

## What gets accepted

The editorial standards a review checks against — verify every name and figure
against a primary source, cite-don't-republish semi-private sources, no AI attribution
in pages or commit trailers — live in [`CONTRIBUTING.md`](./CONTRIBUTING.md) and
[`CLAUDE.md`](./CLAUDE.md).

## Becoming a maintainer

Active contributors who are CIBC members can ask an owner to be added to the
`wiki-editors` team. CIBC membership itself is handled in
[Notion](https://cibc.notion.site), not here.
