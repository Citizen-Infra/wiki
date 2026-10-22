---
title: The peer-to-peer & decentralized landscape
description: The "decentralized" and "federated" world citizens keep hearing about — what it is, why it might matter, and how to tell real power-sharing from a decentralised veneer.
---

Beyond the handful of big platforms most of us use, there's a whole world of technology described as **peer-to-peer**, **decentralized**, or **federated**. It's easy to dismiss as crypto jargon — but underneath the buzzwords is a question that matters for citizens: *who controls the infrastructure our communities run on?*

## What "decentralized" actually means

On a normal platform, one company owns the servers, your identity, your data, and the rules — and can change or revoke any of them. Decentralized systems try to spread that control across many participants instead. A few examples people are building on:

- **Bluesky / the AT Protocol** — Bluesky is a social app built on a protocol that supports moving an account between data-hosting servers while retaining its protocol identity. That is not a promise that every app, private message or setting can move with it; see [the limits of credible exit](#credible-exit-is-not-the-same-as-governance).
- **Holochain** and **NextGraph** — frameworks for "local-first," encrypted apps that work peer-to-peer, without a central server holding everything.
- A wider stack of **decentralized storage and compute, digital-identity systems, and shared standards** that let independent tools work together.

Why might a citizen care? Because this is the layer underneath the tools — and owning your identity, data, and relationships is the practical antidote to the [implicit feudalism](/concepts/implicit-feudalism/) of one all-powerful admin. It lets a community run its *own* infrastructure rather than rent it.

## Credible exit is not the same as governance

In his [protocol-engineering oral history](https://protocol.ecologies.info/interviews/newbold-protocol_engineering/), Bryan Newbold calls the ability to leave a provider **credible exit**: users need a practical way to take their account elsewhere, and new providers need a viable way to join the network. He treats this as pressure on powerful operators, but explicitly says it is not sufficient for decentralisation. Being able to leave does not give everyone a vote over the system.

He separates two further questions: **who governs the protocol's design, and who has material power in the network?** An open specification and a growing set of implementations do not, by themselves, prove that control has been distributed. His interview describes efforts to change those conditions; it is not evidence that a transfer of governance was completed.

The current [account-migration guide](https://atproto.com/guides/account-migration) documents moving between personal data servers, the services hosting account data. It requires identity control and several transfer steps; a destination may restrict account creation, and some private state, such as chat data, may live in other services. No migration was performed for this guide. Check the current tools and conditions before treating exit as easy or complete.

Newbold also cautions against answering people's concerns with “fork the code.” Individuals may lack the skills or funding to do that. He hopes civic groups and other institutions can make independent infrastructure practical. This connects the technical right to leave with the [resources and standing capacity](/concepts/durable-civic-infrastructure/) needed to exercise it, not just a licence to copy software.

## The navigator problem

The space is a confusing sea of overlapping protocols. **OpenHaven** (a prototype from the Collaborative Technology Alliance) is one attempt to map it — not as a list of tools, but by starting from what you're actually trying to do: pick a **use case** ("I care about identity and trust"), refine by the **capability** you need (sovereign identity, proof of personhood, contextual disclosure), and see which tools deliver it — including a view of the whole "stack" beneath an app.

## Capture risk

The sharpest idea here: not everything labelled "decentralized" or "empowering" actually distributes power. Some tools *masquerade* as peer-to-peer while a token, a foundation, or a hidden bottleneck quietly re-centralises control. A good navigator flags this **capture risk** — helping people tell genuine power-sharing from a decentralised veneer. It's the same question the [Power Matrix](/concepts/power-matrix/) asks, applied to infrastructure, and a practical complement to the idea of [protocol](/concepts/protocol/) as coordination without a central ruler.

## Sources

- Bryan Newbold, [*Protocol engineering*](https://protocol.ecologies.info/interviews/newbold-protocol_engineering/), interviewed by Nathan Schneider, Protocol Oral History Project (published 12 August 2025); checked alongside the current [AT Protocol account-migration guide](https://atproto.com/guides/account-migration).
- Brandon Nørgaard — "OpenHaven & Civic Intelligence Infrastructure," OpenCivics Civic Innovator Session (2026): [youtu.be/Umpu1AmTuy8](https://youtu.be/Umpu1AmTuy8).
- [OpenHaven](https://openhaven.net/) — a convergence navigator for the peer-to-peer and decentralized protocol landscape (Collaborative Technology Alliance).
