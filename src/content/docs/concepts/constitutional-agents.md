---
title: Constitutional agents
description: What if a community's rulebook were written in plain language and interpreted by an AI agent — instead of frozen into code?
---

There's a deep question at the heart of any digital governance system: should the rules be **code** or **interpretation**? Should a deterministic program decide who gets banned and which proposal passes — or should something *read* the community's rules and apply judgement? [Modular politics](/concepts/modular-politics/) assumed the former. Nathan Schneider's more recent work explores the latter, and calls it **constitutional agents**.

## A plain-language constitution, interpreted by an agent

The idea: instead of freezing governance into code, a community writes its rules as a **human-readable constitution** — in plain language anyone can read and edit — and puts an **AI agent** at the centre of the system to interpret and apply it. Schneider has been testing this with a Mastodon bot: it holds a plain-text constitution, and when a member flags a post, the constitution might say "this is removed if five other members agree," or "this decision is delegated to a chosen group." The agent runs the process, keeps a ledger, and acts.

The appeal is **accessibility**. With code, implementing a new governance practice — maybe one from your own culture — means finding a programmer. With an interpreted constitution, you could just *describe what should happen in words*. That hands less power to technical experts and more to the community itself.

## The catch

Schneider is explicit about the risks: today's LLMs are "profit-driven, fundamentally extractive tools," and pure code-based systems (think DAOs) have shown how rule-by-code gets gamed by whoever's best at gaming it. He wouldn't hand an agent ultimate power. But as a way to make self-governance legible to ordinary members — and to detect the *spirit*, not just the letter, of the rules — it's a striking direction. It also rhymes with a broader shift: even AI labs (he points to Anthropic's "constitution" for its Claude models) increasingly govern models in human terms rather than pure code. See also [civic AI](/concepts/civic-ai/).

## Where the rules come from

An agent interpreting a constitution still leaves the question of who wrote it and how it changes. Evan Hadfield proposes linking public deliberation to shared governance principles that guide behaviour and become criteria for evaluating it. Participants should be able to inspect the synthesis and revisit principles as results emerge. This is a related institutional proposal, rather than a demonstrated feature of Schneider's agent; see [from public principles to an audit](/concepts/binding-vs-advisory/#from-public-principles-to-an-audit).

## From public input to evaluation criteria

The **Collective Intelligence Project's [Free Expression Evaluation](https://free-expression.weval.org/)**, conducted with Anthropic, documents one way to make public principles testable. About 2,200 adults in the US, UK and India contributed across several rounds: proposing principles, considering one another's input, resolving conflicts, choosing topics and developing question-specific criteria. A principle needed more than 85% agreement in every tested country, cultural-values quadrant, gender and age group. The resulting suite contains 360 prompts and 3,791 criteria.

Whose standards these are matters. Participants were recruited through Prolific and surveyed in English, with age, gender and education quotas; the study acknowledges that the sample is not representative of the whole world or even all perspectives in those three countries. Agreement across the tested subgroups does not settle how another community should write its rules.

The project also separates two steps in evaluation. It classified model behaviour, including caveats and refusals, but scoring responses against the full 3,791 public criteria remained a next step in the published account. A caveat's presence alone does not show whether it was justified. This is a documented case of constructing standards and an evaluation suite; it does not establish that the public has binding control over a model or that a constitutional agent implements the resulting principles.

## Sources

- Collective Intelligence Project with Anthropic, [*Free Expression Evaluation*](https://free-expression.weval.org/) (accessed 31 October 2026). Public-participation method, criteria, behaviour classification and stated next steps; the model snapshot is from March 2026.
- Evan Hadfield, [*Voice without a pipeline is legitimacy theater*](https://informationaldemocracy.substack.com/p/provocation-hadfield), Informational Democracy (2026).
- Nathan Schneider — Democracy Innovators Podcast (2026): [youtube.com/watch?v=jlyfhmUWX04](https://www.youtube.com/watch?v=jlyfhmUWX04)
