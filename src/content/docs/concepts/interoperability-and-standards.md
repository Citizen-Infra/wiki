---
title: Connecting the tools — interoperability & standards
description: There are thousands of civic-tech tools and they mostly can't talk to each other. The slow, unglamorous work of interoperability and shared standards is how the field grows up.
---

The [Civic Tech Field Guide](/ecosystem/overview/) lists more than 11,000 projects. One app might have ten users; another a hundred; [Brasil Participativo](/toolkit/decide-together/) has well over a million. Almost none of them talk to each other. Closing that gap — making the tools, and the data inside them, **interoperable** — is one of the quieter but more important frontiers in citizen infrastructure.

## Why it's hard, and why it matters

It's genuinely surprising that a field this open-source and pro-social hasn't built shared plumbing already. Part of the reason is that everyone is busy keeping their own project alive. But the payoff is large, and it isn't only technical: **connecting the tools also connects the teams and people behind them.** Groups working on the same problem in different countries discover each other, share goals, and start building together. Interoperability is, in part, how a scattered field becomes a movement.

## What's starting to move

After years of stagnation, a few things picked up momentum:

- **A trade body.** [ACTE — Association Civic Tech Europe](/ecosystem/overview/) represents participation-platform companies at the EU level — a sign the sector is maturing, and a way to channel existing public resources toward participation tools.
- **Bilateral team-ups.** Platforms increasingly acknowledge that different tools are good for different parts of a process, and partner up directly (for example, [Go Vocal](/toolkit/decide-together/) working with others). Useful, but still one-off and hand-built.
- **Open standards.** There's an open standard for mapping hiking trails — there should be one for describing participation projects, participants, supporters, and public action. Italy's **[publiccode.yml](https://github.com/publiccodeyml/publiccode.yml)** (Developers Italia) is a step in this direction: a metadata standard that describes public-sector software so it can be found and understood across borders.
- **Aggregators.** [Metagov](/ecosystem/overview/) is building a tool with the Scottish Government to combine many participation tools into one coherent experience, alongside ontology work to give the field a shared vocabulary. A related proposal, [civic intelligence infrastructure](/concepts/civic-intelligence-infrastructure/), goes a step further — normalising the *output* of many incompatible tools into one legible intelligence layer.
- **A name for the connective layer.** A 2026 FAccT paper by Iñaki Goñi, Maggie Hughes and Stuart Lynn calls this middleware **"second-order technologies"** — the standards, ontologies, and adapters that let the first-order tools citizens actually use coexist and connect — and its "connective democratic tissue." It contrasts two live models: Metagov's *standards-led* approach (a shared data ontology and "process cards" — inclusive, but distant from real deployments), and the Scottish venture **CrownShy**'s *adapter-led* one (wrappers and gateways that bridge existing tools like Pol.is inside a single platform — close to the ground, but concentrating gatekeeping power in one intermediary). Their point: interoperability is a socio-technical and *political* process, not a neutral technical fix, and it is chronically underfunded.
- **Protocols nobody can capture.** [RadicalxChange](/ecosystem/overview/)'s *Plural Stack* argues Europe's answer to Big Tech isn't its own national champions or yet more regulation but **open, interoperable protocols** that no single actor can monopolise — grounded in diverse ecosystems, community-led standards, decentralisation, and user/creator value, and worked through technical, economic, and social layers. The same instinct as [protocol](/concepts/protocol/) and [plurality](/concepts/plurality/), aimed squarely at digital sovereignty.
- **Honest comparison.** People Powered and the Field Guide reviewed around 30 participation platforms for which features they have, whether you can *export your data*, and what they interoperate with — the baseline that real interoperability has to clear.

## Standards need people and implementations

In her [oral history of interoperability work](https://protocol.ecologies.info/interviews/dusseault-interoperability/), Lisa Dusseault distinguishes agreeing on a data format from making services work together. Sending a calendar attachment is one task; letting a different application access and manage a calendar is another. She co-authored **CalDAV**, whose [published specification](https://www.rfc-editor.org/rfc/rfc4791) builds on WebDAV and iCalendar to define calendar access. A shared format is a useful foundation, not proof that every service supports the same workflow.

Dusseault describes standards work as coalition-building as well as writing specifications. Reusing agreed components reduced the questions her collaborators had to reopen; involving implementers helped connect the design to software people could use. She argues for including contributors from large companies while remaining alert to their employers' interests. That is a practitioner's judgment about adoption, not a guarantee against capture.

She also warns that formally open participation can lose voices when people are treated badly and leave. In her account, moderation is part of making participation possible, not simply a restriction on it. For a community choosing shared infrastructure, ask **who can contribute, who can afford the work, how harmful conduct is handled, and who actually implements the result**. These questions connect interoperability with [community governance](/concepts/modular-politics/), rather than treating it as plumbing alone.

## Who has the power to implement a standard?

Robin Berjon's [web-standards oral history](https://protocol.ecologies.info/interviews/berjon-web_standards/) adds a political question to the technical one. In his account, voluntary standards depended partly on competing implementers needing to work together. As implementation power concentrated, he argues, formally shared processes became less able to discipline dominant companies. This is his interpretation of the field's history, not an independently measured finding that every standards body is captured.

He also describes shared testing as a way to bridge competing communities. **[Web Platform Tests](https://web-platform-tests.org/)** is a cross-browser test suite: its common tests help projects check whether independent implementations behave compatibly. That is a concrete practice communities can ask about when evaluating infrastructure: not only “Is there a specification?” but **“What shows that separate implementations work together, and who maintains that evidence?”**

For Berjon, protocol design should consider institutions between the individual and the global network: which groups can make decisions, at what level, and with what capabilities. This connects standards to [modular governance](/concepts/modular-politics/) and [capture risk](/concepts/decentralized-landscape/#capture-risk), rather than assuming that open technical rules settle questions of power.

## Connect public data without handing over decisions

Boston's **OpenContext** illustrates a different connection: between an AI assistant and a city's public-data catalogue. In a [9 March 2026 interview](https://rebootdemocracy.ai/blog/boston-agentic-middleware), Santiago Garces, introduced there as Boston's CIO, describes finding datasets, generating SQL queries and moving computation into the data portal rather than asking the model to analyse large downloads itself. These are the interviewee's account of the approach, not independent accuracy results.

Boston's [official portal now lists OpenContext as a beta](https://data.boston.gov/showcase/opencontext-democratizing-the-city-of-boston-s-open-data-currently-in-beta) and links a public [CityOfBoston repository](https://github.com/CityOfBoston/OpenContext). The interview's proposed extensions to service requests, identity and payments should not be confused with verified functions of that beta.

Model Context Protocol (MCP) provides a common interface for connecting AI applications to tools and data. It does not, by itself, guarantee correct answers, safe access or permission to act. Its [security principles](https://modelcontextprotocol.org/specification/2026-07-28) require implementers to build consent, access controls and data protections. Boston's [published employee policy](https://www.boston.gov/government/cabinets/innovation-and-technology/city-boston-generative-artificial-intelligence-gen-ai) separately prohibits using generative AI to determine eligibility for services or benefits. **Being able to query public records is not authority to decide someone's entitlement.**

For residents, the practical starting point is the [official data catalogue and beta documentation](/toolkit/understand-public-decisions/#explore-city-datasets). Check the dataset's coverage, update date and definitions before relying on an answer. Boston's [data strategy](https://www.boston.gov/departments/analytics-team/our-city-wide-data-strategy) likewise treats documentation, lineage and trust as foundations for using AI, not optional extras.

## Make meeting records reusable

Public documents are not automatically a connected public record. In [*Publishing Dutch governmental meetings as linked data*](https://ontola.io/blog/publishing-dutch-governmental-meetings-as-linked-data/) (15 December 2019), Ontola describes bringing incompatible meeting systems together: extracting text from PDFs, mapping records into a common model, retaining source metadata and giving resources resolvable identifiers. The aim was to let different applications reuse meeting information rather than each rebuilding the same collection. Topic and location classifications were additional interpretations, not the original record itself.

The practical lesson is to preserve relationships as well as text: **which document belongs to which agenda item and meeting, from which authority, and in which version?** This makes search results easier to understand and check. [OpenBesluitvorming](/toolkit/understand-public-decisions/#search-dutch-meeting-documents) provides a current route into Dutch local and regional records, built through collaboration involving Ontola, VNG and the Open State Foundation.

But interoperability also needs continuity through change. The current [migration guide](https://openbesluitvorming.nl/docs/migration-guide) says the replacement search API does not support the old RDF resolver, JSON-LD or RDF content negotiation, and that old numeric identifiers cannot be looked up there. The 2019 article therefore explains an earlier architecture, not a guarantee about today's interface. VNG's [ORI standard documentation](https://vng-realisatie.github.io/ODS-Open-Raadsinformatie/) is a separate reference for the shared government-information model and interfaces. Check the version and actual implementation before assuming two systems connect.

## A familiar idea, wearing work clothes

In commerce, [open networks](/concepts/open-networks/) apply shared protocols to discovery and transactions across apps. The distinction between a common specification and a network's participation rules matters: technical connection is not the same as fair terms or a democratic say.

Interoperability is the practical cousin of ideas already in this wiki: [protocol](/concepts/protocol/) (coordinating without a central ruler), [modular politics](/concepts/modular-politics/) (composing governance from interchangeable parts), and the [Commoning Standard](/concepts/commoning-standard/) (shared, reusable patterns for self-governance). Standards are how those ideas stop being philosophy and start being plumbing.

## Sources

- Robin Berjon, [*Web standards*](https://protocol.ecologies.info/interviews/berjon-web_standards/), interviewed by Nathan Schneider, Protocol Oral History Project (published 1 August 2025); [Web Platform Tests documentation](https://web-platform-tests.org/) verifies the shared test suite's purpose.
- Lisa Dusseault, [*Interoperability standards*](https://protocol.ecologies.info/interviews/dusseault-interoperability/), interviewed by Nathan Schneider, Protocol Oral History Project (published 10 October 2025); [RFC 4791: CalDAV](https://www.rfc-editor.org/rfc/rfc4791) verifies its authorship and scope.
- Ontola, [*Publishing Dutch governmental meetings as linked data*](https://ontola.io/blog/publishing-dutch-governmental-meetings-as-linked-data/) (15 December 2019), checked alongside [OpenBesluitvorming](https://openbesluitvorming.nl/), its current migration guide and VNG's standard documentation linked above.
- [*Building an “Agentic Middleware” for the City Government: Boston’s Experiment with Model Context Protocol*](https://rebootdemocracy.ai/blog/boston-agentic-middleware), Reboot Democracy, interview with Santiago Garces (9 March 2026), checked alongside the official beta listing, repository, employee policy and data strategy linked above.
- Matt Stempeck — Democracy Innovators Podcast (2026): [youtube.com/watch?v=jQ-PZUNkNfg](https://www.youtube.com/watch?v=jQ-PZUNkNfg).
- [publiccode.yml](https://github.com/publiccodeyml/publiccode.yml) — Developers Italia metadata standard.
- "Europe Doesn't Need Its Own Big Tech. It Needs Protocols Nobody Can Capture" (The Plural Stack) — RadicalxChange, 2026: [radicalxchange.org](https://www.radicalxchange.org/updates/blog/the-plural-stack/)
- "Connective Democratic Tissue: Second-Order Technologies for Civic Ecosystems" — Iñaki Goñi, Maggie Hughes & Stuart Lynn, ACM FAccT (2026): [doi.org/10.1145/3805689.3812416](https://doi.org/10.1145/3805689.3812416)
