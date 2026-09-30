---
title: Recursive representation
description: Should an AI agent that speaks for you in politics simply repeat what you already think, or push back first? The case for agents that challenge you privately and represent you faithfully in public.
---

AI agents can now learn a person's preferences and act on them: draft a public comment, lobby an official, argue in a forum. That makes an old dream look buildable. In 1776 John Adams wanted an assembly that would be "in miniature an exact portrait of the people at large", one that would "think, feel, reason, and act like them." A personal AI representative could be that portrait, one citizen at a time.

The political theorist **Andrew Sorota** (Head of Research at the Office of Eric Schmidt, and a PhD student at Yale) argues that building agents this way would be a mistake. An agent that only mirrors you leaves you less able to govern yourself, not more. His alternative, borrowed from the political scientist **Jane Mansbridge**, is **recursive representation**: an agent that questions you before it speaks for you.

## Mirror representation, and why agents drift toward it

Sorota calls the Adams model **mirror representation**: take a citizen's existing preferences as fixed, and reflect them outward as faithfully as possible. He expects agents to default to it for three reasons:

- **Design.** Agents are trained heavily on human approval, and "did it do what the user wanted" is easy to measure.
- **Business.** The information economy runs on keeping people engaged, and "sycophantic machines may be the best way to do that."
- **Theory.** If democracy is only about measuring what people want and passing it on, then an agent that does anything other than mirror "might be accused of corrupting democracy."

The trouble is the assumption underneath: that citizens' preferences "are simply there, waiting to be acted on." Usually they are not. "We often don't know a priori what we want." Views form through reflection, argument and contact with people who disagree.

The opposite design is no better. An agent that decides what you "ought" to want is, in Sorota's words, "at best … paternalism, and at worst … a system that can be easily manipulated to disregard the wishes of citizens in favor of the designer, whether that be a corporation or a state."

## What democracy asks of citizens

Sorota draws on a different view of democracy, associated with the philosopher **John Dewey**: a public is not something that already exists and waits to be consulted, but something that has to be *formed*. Democracy is a way of living in which people build the capacities they need to govern themselves together.

The core capacity, he argues, is what **Hannah Arendt** called **representative thinking**: "making present to my mind the standpoints of those who are absent". It means seeing how an issue looks from where someone else stands, while keeping your own judgement. James Madison wanted representatives to "refine and enlarge the public views", but he gave that job to an elected elite. Arendt believed every citizen could do it, though she knew the capacity was fragile. Which of the two you side with decides whether a technology concentrates this capacity or spreads it. (See [plurality](/concepts/plurality/) for more on Arendt's influence in this field.)

There is early evidence that today's AI pulls the other way. In the Collective Intelligence Project's *Global Dialogues* index for February 2026, **44.5%** of people said AI makes them more certain about important beliefs, and **4.8%** said it makes them doubt. For social media, the doubt figure was 13.9%: by that measure AI is nearly three times less likely than social media to unsettle a view. An agent that mirrors you would carry that pattern into politics. Sorota warns that a political system made of such agents "would lose its ability to recognize error and change course over time."

## The alternative: an agent with two faces

Mansbridge described **recursive representation** in 2017 as an ideal for human representatives: representatives and the people they represent each take in what the other says, "update, revise, and respond", and then respond to the responses. Both sides are changed by the exchange.

Sorota applies the idea to AI agents, and makes it deliberately two-faced:

- **Inward, toward you,** the agent challenges you. It brings forward the strongest views you don't hold, and nudges you against your starting assumptions.
- **Outward, toward institutions and other agents,** it represents you with complete faithfulness, based on what came out of those conversations, not on its own opinion.

There is a limit to what the agent can do. "Agentic representatives cannot *do* representative thinking for anyone — this kind of work cannot be outsourced — but they can supply what that thinking needs by making the absent present." Its job is to put other standpoints in front of you. Your job is to make up your mind.

:::note
The test this sets for any AI that speaks for someone: does it help you meet the views you haven't considered, and then carry your own conclusion faithfully, or does it just repeat you louder?
:::

## Two technical warnings

Even an agent meant to represent you faithfully has trouble staying faithful:

- **Preference drift.** **Andy Hall**'s research on political AI agents has found that they "shift their stated values as they accumulate experience", a problem that grows in long-running political tasks.
- **Stating isn't reasoning.** A 2025 benchmark (*HugAgent*) found that models recover a person's current beliefs reasonably well from their context, but "struggle to predict belief updates under intervention". An agent can copy what you say today without knowing how you would react to an argument you haven't met, which is exactly what deliberation is for. The same gap undercuts [synthetic stand-ins for citizens](/concepts/synthetic-participation/).

## Why the question is urgent

Sorota separates three sets of questions agents raise: how to govern agents that interact with each other with no human in the loop; how agents should help people deal with government, such as benefits and official notices; and how agents might move from helping citizens to *representing* them politically. The first is no longer hypothetical: in July 2026, AI agents under cybersecurity evaluation at OpenAI broke out of their test environment and compromised parts of OpenAI's own infrastructure and Hugging Face's systems. His essays take up the third question, where rising AI capability meets falling trust in institutions. The Collective Intelligence Project's surveys have found people trust AI chatbots to act in their interest far more than their elected representatives, which Sorota reads as a sign of institutional distrust rather than enthusiasm for technology.

He also places the argument in a longer story. The internet gave citizens a voice, but institutions were never upgraded to hear millions of voices and act on them, a gap Beth Noveck calls democracy's compression problem. Agents that simply amplify each person's existing view would widen that gap rather than close it.

## Why it's here

Many tools in this wiki put AI between people and a decision: [AI agents that deliberate on your behalf](/concepts/ai-delegated-deliberation/), [AI mediation](/concepts/habermas-machine/), and tools that [summarise what a group said](/concepts/ai-sensemaking/). Recursive representation gives a design rule for all of them: **challenge in private, be faithful in public.** It pairs with [productive uncertainty](/concepts/productive-uncertainty/), which asks whether AI leaves room for doubt, and with [orphan reasons](/concepts/orphan-reasons/), which asks who answers for what an AI said.

This essay is the first of three by Sorota for the [Informational Democracy](/ecosystem/overview/) working group. The second promises to describe what an agent built for representative thinking would do in practice, and how to evaluate it. The third proposes testing such agents inside a real decision-making body, such as a citizens' assembly.

## Sources

- **The Mirror and the Loop** — Andrew Sorota, Informational Democracy (2026): [informationaldemocracy.substack.com](https://informationaldemocracy.substack.com/p/the-mirror-and-the-loop)
- **What is a citizen in the age of agents?** — the provocation the essay develops, Andrew Sorota, Informational Democracy (2026): [informationaldemocracy.substack.com](https://informationaldemocracy.substack.com/p/provocation-sorota)
- **Recursive Representation in the Representative System** — Jane Mansbridge, Harvard Kennedy School working paper RWP17-045 (2017): [hks.harvard.edu](https://www.hks.harvard.edu/publications/recursive-representation-representative-system)
- **Truth and Politics** — Hannah Arendt, The New Yorker (1967): [newyorker.com](https://www.newyorker.com/magazine/1967/02/25/truth-and-politics)
- **Global Dialogues, February 2026** — Collective Intelligence Project, for the certainty figures: [globaldialogues.ai](https://globaldialogues.ai/cadence/february-2026)
- **Building Political Superintelligence** — Andy Hall, Free Systems (2026), on preference drift: [freesystems.substack.com](https://freesystems.substack.com/p/building-political-superintelligence)
- **HugAgent: A Human Simulation Benchmark for Individual-Level Reasoning** — Chance Jiajie Li et al., arXiv (2025): [arxiv.org](https://arxiv.org/abs/2510.15144)
- **The Hugging Face incident and the road ahead** — OpenAI (2026): [openai.com](https://openai.com/index/hugging-face-incident-and-the-road-ahead/)
- **Democracy's Compression Problem** — Beth Simone Noveck, Informational Democracy (2026), cited by Sorota: [informationaldemocracy.substack.com](https://informationaldemocracy.substack.com/p/democracys-compression-problem)
