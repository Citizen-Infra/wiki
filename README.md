# Citizen Infrastructure

A free, public, plain-language resource **for citizens** about *citizen infrastructure* — the tools, methods, and real-world experiments that help people act together: deliberation and citizens' assemblies, civic tech, the commons, and notable run reports of participation in practice.

**Live site → [citizen-infra.netlify.app](https://citizen-infra.netlify.app)**

It's organised into sections you can browse from the sidebar: the idea behind citizen infrastructure, plain-language **Concepts**, a practical **toolkit** grouped by what you're trying to do, **Run Reports** on specific deliberations, **Stories** of grassroots action, the wider **ecosystem** of organisations, and a **library** of sources.

This resource is published and stewarded by the **Citizen Infrastructure Builders Club (CIBC)**. It's a resource *for citizens*, not a members' handbook — anything about the club itself (membership, joining, governance) lives at [cibc.notion.site](https://cibc.notion.site).

## Built with

[Astro](https://astro.build) + [Starlight](https://starlight.astro.build), deployed on [Netlify](https://www.netlify.com). Content is Markdown.

## Run it locally

Requires Node ≥ 22.12.

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview the built site
```

## Contributing

Suggestions and corrections are welcome — anyone with repo access can add or edit pages, and a merged PR goes live automatically.

- **Small fixes** — use the **"Edit page"** link at the bottom of any page to propose a change directly on GitHub.
- **New content** — pages are written by *decomposing external sources* (talks, papers, articles) into the right sections, following this workflow:
  1. **Pick a source.** Take one from the backlog in [`docs/source-queue.md`](./docs/source-queue.md) (or add one), and claim it by opening an issue titled `Process: <title>` labelled **`processing`** so two people don't do the same one. New here? Look for **`good first source`**.
  2. **Process it.** Verify every name and figure against a primary source (omit what you can't verify), route each item to its section via the content map, and write pages from [`docs/templates/`](./docs/templates/). Claude Code users can run the in-repo command **`/process-source <url>`** (in `.claude/commands/`), which walks the whole flow; by hand, follow the same sequence. Content lives in `src/content/docs/<section>/` — register each new page's `{ slug }` in the `sidebar` in `astro.config.mjs` and on its section overview page (adding a file alone won't add it to navigation).
  3. **Ship it.** Branch, run `npm run build` (the gate — must pass), open a PR, and self-merge once the build check is green. Netlify deploys `main` automatically.

Pages cite their sources, and figures trace to a public source. **Full step-by-step guide → [`CONTRIBUTING.md`](./CONTRIBUTING.md)**; routing map + editorial discipline → [`CLAUDE.md`](./CLAUDE.md).

## License

The content of this wiki is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](./LICENSE) — you're free to share and adapt it, including commercially, as long as you give appropriate credit.

© 2026 Citizen Infrastructure Builders Club
