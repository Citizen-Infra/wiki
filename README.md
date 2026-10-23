# Citizen Infrastructure

A free, public, plain-language resource **for citizens** about *citizen infrastructure* — the tools, methods, and real-world experiments that help people act together: deliberation and citizens' assemblies, civic tech, the commons, and notable run reports of participation in practice.

**Live site → [wiki.citizeninfra.org](https://wiki.citizeninfra.org)**

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

## Shared visual foundation

The source consumes [Citizen-Infra/design-system](https://github.com/Citizen-Infra/design-system) `0.2.0-draft.1`, pinned in both package manifests to immutable HTTPS Git revision `6df5682711d11d1dde20453d0e06a78aca48b34f`. `src/styles/open-index.css` maps its roles into Starlight without creating another palette or replacing the framework's search, sidebar or theme controller. Public Sans is bundled locally through the package CSS; no font CDN is used. Desktop retains the shared expressive type scale. The wiki's mobile adapter uses an 18px-equivalent reading size, 16px controls/navigation, 14px metadata and 30px article headings, with at least 44px-equivalent controls. These application-only overrides use rem units, preserve user resizing and do not change the shared package.

`FoundationHead.astro` mirrors Starlight's resolved theme without another preference store, measures the intrinsic masthead for correct fixed-position offsets at enlarged text, and reflects accessible menu/search labels without replacing their interaction handlers. It omits Starlight's unresolved default favicon reference when no `public/favicon.svg` exists; no replacement artwork is generated. `FoundationFooter.astro` retains the default footer and adds access to the Public Sans OFL notice. Markdown tables retain their original content and native semantics inside labelled, keyboard-focusable scroll regions. No new logo or image artwork is included.

Page headings wrap at word boundaries, with emergency wrapping only when one token exceeds the entire column. At the desktop contents breakpoint, the right rail has its own responsive 10–14rem width and compact 1rem link text, independent of the left navigation. The article receives the remaining space, with its maximum width tied to the shared 68ch reading measure rather than a smaller fixed-width cap; the contents scrolls in its own sticky column below the masthead.

After an explicitly authorized foundation update: change both immutable pins, run a clean install, then `npm run sync-foundation-assets` to refresh the upstream licence notices. Run `npm run build && npm test` and inspect real search/navigation/theme states before publication. The foundation's full MIT notice is retained at `public/licenses/cibc-design-system-MIT.txt` and shipped with the site; Public Sans retains OFL at `public/fonts/OFL-Public-Sans.txt`; wiki content remains CC BY 4.0.

## Contributing

Suggestions and corrections are welcome — anyone with repo access can add or edit pages, and a merged PR goes live automatically.

- **Small fixes** — use the **"Edit page"** link at the bottom of any page to propose a change directly on GitHub.
- **New content** — pages are written by *decomposing external sources* (talks, papers, articles) into the right sections, following this workflow:
  1. **Pick a source.** Take one from the backlog in [`docs/source-queue.md`](./docs/source-queue.md) (or add one), and claim it by opening an issue titled `Process: <title>` labelled **`processing`** so two people don't do the same one. New here? Look for **`good first source`**.
  2. **Process it.** Verify every name and figure against a primary source (omit what you can't verify), route each item to its section via the content map, and write pages from [`docs/templates/`](./docs/templates/). Claude Code users can run the in-repo command **`/process-source <url>`** (in `.claude/commands/`), which walks the whole flow; by hand, follow the same sequence. Content lives in `src/content/docs/<section>/` — register each new page's `{ slug }` in the `sidebar` in `astro.config.mjs` and on its section overview page (adding a file alone won't add it to navigation).
  3. **Ship it.** Branch, run `npm run build` (the gate — must pass), and open a PR. Once the build check is green, a maintainer reviews and merges it; Netlify deploys `main` automatically.

Pages cite their sources, and figures trace to a public source. **Full step-by-step guide → [`CONTRIBUTING.md`](./CONTRIBUTING.md)**; how changes are reviewed and who can merge → [`GOVERNANCE.md`](./GOVERNANCE.md); routing map + editorial discipline → [`CLAUDE.md`](./CLAUDE.md).

## License

The content of this wiki is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](./LICENSE) — you're free to share and adapt it, including commercially, as long as you give appropriate credit.

© 2026 Citizen Infrastructure Builders Club
