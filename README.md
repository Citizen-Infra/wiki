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

Suggestions and corrections are welcome.

- **Small fixes** — use the **"Edit page"** link at the bottom of any page to propose a change directly on GitHub.
- **New or larger changes** — content lives in `src/content/docs/<section>/`. Add a Markdown file with `title` and `description` frontmatter, then register it in the `sidebar` in `astro.config.mjs` so it appears in navigation. Open a pull request.

Pages cite their sources, and figures should trace to a public source. Working with Claude Code or another AI assistant? See [`CLAUDE.md`](./CLAUDE.md) for the repo's conventions.

## License

Released under the [MIT License](./LICENSE).
