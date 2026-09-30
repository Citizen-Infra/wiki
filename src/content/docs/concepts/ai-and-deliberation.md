---
title: Can AI scale deliberation?
description: Real deliberation is slow and in-person. Can technology scale it — or does automating the friction destroy the very thing that makes it work?
---

Good deliberation is slow, structured, and usually in-person — which raises an obvious temptation: use technology to scale it to millions. Hélène Landemore's answer is a careful *maybe*, and it comes with a sharp test for telling helpful tools from harmful ones.

## First, what deliberation actually is

Deliberation is structured exchange in which everyone is roughly *equally* exposed to the arguments and can respond to them. By that definition, a lot of what gets called "scaling deliberation" isn't:

- **Mass online text platforms**, where millions thumbs-up fragments of each other's opinions, are **aggregation** — a wisdom-of-crowds process. Genuinely useful, but a different thing: too fragmented to be deliberation.
- **Agentic AI "deliberating" on your behalf** is furthest of all. Outsource it entirely and you lose the *democratic muscle* — the capacity to understand the issue and make the conclusion your own. What's left is blind deference.

## A test: complementary vs competitive tools

David Krakauer (Santa Fe Institute) distinguishes **complementary cognitive artifacts**, which build your capacity — like an abacus, which makes you better at arithmetic *even after you put it down* — from **competitive** ones, which replace it — like a calculator, which leaves you helpless without it. Good deliberation tech is complementary: it strengthens people's ability to deliberate. The danger is "efficiency" that smooths away the productive friction — the trust-building, and the slow collective work of sense-making (one practitioner draws the line at letting AI *cluster* people's ideas, because doing that work together is where understanding and ownership are born). The friction often *is* the point; see [civic love](/concepts/civic-love/).

## Worth testing, carefully

The boundaries are genuinely unknown, so experiment — while keeping the human core. Some promising uses are clearly assistive: AI helped Israeli and Palestinian peace activists find consensus framings (via [Remesh](/toolkit/decide-together/)) when face-to-face talks had stalled; "values warm-up" tools help people articulate what they care about *before* a deliberation. The question to ask of any tool is Krakauer's: **does this build the democratic muscle, or replace it?**

Peace processes make the boundary especially sharp. Small rooms can build trust and handle nuance, but they cannot hear everyone affected by a conflict. AI-supported public deliberation can add breadth — translation, structured reactions, and maps of several positions at once — while human meetings retain the relational work. The design goal is not to replace one with the other, but to connect them. In conflict settings that also means treating anonymity, identified testimony, surveillance risk, and culturally specific translation as context-dependent choices rather than defaults.

## A framework for judging each use

For a more systematic version of the same instinct, Sammy McKinney's study of AI in citizens' assemblies maps **17 possible applications** across an assembly's whole life cycle (translation, facilitation, aggregation, clustering public input, generating consensus statements, inclusive learning materials, and more) and scores each against three kinds of good. **Democratic goods:** does it help *inclusiveness, popular control, considered judgment,* and *transparency*? **Institutional goods:** does it improve *efficiency* and *scalability*? **Ethical integrity:** does it respect *privacy*, avoid *imposition* of an off-the-shelf tool on a local context, and mitigate *bias*? His conclusion mirrors Krakauer's test: AI can raise both democratic quality and institutional capacity *if* the right safeguards are kept — human oversight, ethical data governance, co-design with participants, and hybrid human-plus-AI designs. Peacebuilding research widens the checklist further: who controls the infrastructure, whether technological dependency reproduces colonial power, and whether the environmental cost is justified. For the bigger question of which *direction* to scale, see [the five dimensions of scaling deliberation](/concepts/scaling-deliberation/).

## Approximating mass deliberation

Landemore's deeper worry is a legitimacy one: a democracy's laws are fully legitimate only if they could have issued from inclusive deliberation among everyone, yet real deliberation breaks down past a few hundred people. Her wager is that AI might let us *approximate* mass deliberation well enough to count. She floats two models: **mass online deliberation** (a single shared space, à la Wikipedia, where an algorithm clusters everyone's proposals into a manageable bird's-eye view — proposed by engineer Cyril Velikanov), and **many rotating mini-publics** (enrol the whole population in randomly-selected assemblies and rotate them until, in effect, everyone has deliberated with everyone). Neither needs *all* citizens: she speculates that enrolling 10–15% — still millions of people, and representative if truly random — might be a "good enough" threshold for legitimacy. France's [Great National Debate](/run-reports/french-great-national-debate/) was a low-tech gesture in this direction. For the fuller map of what "scaling" can mean, see [five dimensions of scaling deliberation](/concepts/scaling-deliberation/).

## What the field is building

In 2025 about seventy researchers and technologists mapped the LLM tools being built for public discourse, and published the result as a report and an open database. They sorted each tool by **when** it acts (before people engage, while they engage, or after), **where** (social media, deliberative platforms, or elsewhere), **what for** (grouped as helping people feel welcome, connect, learn, and act), and **how** (summarising, moderating, facilitating, tailoring participation to each person, or checking facts).

A few patterns stand out in their account:

- **On social media, most tools clean up after the fact.** Moderation and safety is the most common job, and few tools act *before* people engage. Most are third-party add-ons that users have to go out of their way to install, which limits their reach to people who were already careful.
- **On deliberative platforms, "consensus" is usually soft**: shared values, common themes, or ranked ideas, not a vote threshold. Nearly all the tools keep people in charge of the outcome, and most still need a human somewhere in the loop, for example to check translations on sensitive political topics.
- **The report's own open question** is that "facilitation" is too broad a label: nobody has yet mapped what the many smaller jobs inside it are.
- **Named risks:** a summary can quietly drop unpopular views, people may not be able to see how an outcome was reached, and a persuasive tool can steer the people who chose to use it.

A worked example of several tools used together: after Kenya's 2024 "Gen-Z" protests, the peacebuilding group Build Up, with the youth NGO Siasa Place and the radio programme *The Situation Room*, spent four months building a space called zKE. It joined in-person youth assemblies and the radio show to a WhatsApp bot, Talk to the City for voice notes, [Polis](/toolkit/decide-together/) to find the most widely shared proposals, and a Remesh session to bring it together. Its aim was not to remove the conflict but, in Build Up's words, to "turn it from destructive to constructive."

This is the practical, tool-level companion to [AI for participation](/concepts/ai-for-participation/) and [synthetic participation](/concepts/synthetic-participation/). For platforms in this space, see [Decide & make sense together](/toolkit/decide-together/).

## Sources

- Hélène Landemore — DemocracyNext (2026): [youtube.com/watch?v=sgFUtZCgAqI](https://www.youtube.com/watch?v=sgFUtZCgAqI).
- David Krakauer — on complementary vs competitive cognitive artifacts.
- Lisa Schirch, [“Scaling Future Peacemaking through AI-Powered Public Deliberation”](https://warpreventioninitiative.org/peace-science-digest/scaling-future-peacemaking-ai/), *Peace Science Digest* (2026).
- DeVerna, Grüning, Hickey, Jaber, Kamin, Miller, Mirza, Pei & Stanski, [*Mapping LLM Tools for Public Discourse, Pluralism & Social Cohesion*](https://www.prosocialdesign.org/blog/report-mapping-llm-tools-for-public-discourse-pluralism-social-cohesion), Prosocial Design Network, Plurality Institute and Council on Technology & Social Cohesion (2025).
- Build Up, ["From social media polarization to online deliberation"](https://howtobuildup.medium.com/from-social-media-polarization-to-online-deliberation-a89d1851e135) (2025).
- Martin Wählisch & Benedikt Kufus, [“Leveraging AI in peace processes: A framework for digital dialogues”](https://doi.org/10.1017/dap.2025.10031), *Data & Policy* (2025).
