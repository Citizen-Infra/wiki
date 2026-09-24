---
title: Productive uncertainty
description: Some doubts are gaps in knowledge that a number can close. Others are what keep a question open, and AI tools built for confident answers may be quietly wearing down our capacity to hold them.
---

Most people who build AI treat uncertainty as a problem to be measured and, ideally, removed: the system should say how sure it is, and be right about how sure it is. The legal scholar **Sylvie Delacroix** (King's College London) argues that this reasonable instinct is also "a democratic liability". Some uncertainty is not a gap to be closed. It is what keeps an important question open, and "holding it open is where judgment lives." She calls it **productive uncertainty**, and her worry is that the AI we now write and talk through is designed to make it disappear.

## Two kinds of uncertainty

Delacroix separates two things that go by the same name.

- **A gap in knowledge.** More data or a better method would settle it. Whether a cough is bacterial is this kind of question, and a number such as a probability or a confidence score represents it well.
- **A situation open to more than one legitimate reading**, or one where values pull against each other. No further fact settles it.

Her example is a GP with two minutes left in a consultation. The patient has said something about her husband, sideways, inside a sentence about something else, and there is a small bruise. Writing it down might protect her. It might also endanger her, or start a process that ends with children taken into care. There is no threshold above which the note becomes safe to write. What the GP needs, Delacroix says, is not a probability but for the question to stay open a little longer, and somewhere to take it.

Attach a number to the second kind of uncertainty and "the number does not represent what remained open. It closes it, in a form that looks like measurement." A measure of reliability narrows attention, which is its job: it tells you what you can safely ignore. That helps when the question is which known option is most likely right. It gets in the way when the question is what you should be paying attention to at all.

## Where doubts get worked out

Much of good judgement, Delacroix argues, is a trained capacity to *notice* that something is off before you can say why. That capacity is not fixed. It is built and kept up by places where uncertainty is allowed to surface. In her book *Habitual Ethics?* she calls them **in-between spaces**: small settings, neither a formal committee nor a private chat, where a hunch can become an argument others can weigh. A case conference is one. The corridor after something has gone badly is another.

These spaces are fragile. They exist only while someone is willing to voice an unease that has not found its words yet, and someone else is willing to stay with it. Anything that makes the first easier to skip, or the second less necessary, thins them out without anyone deciding to.

## Two places it is already happening

**The clinical record.** AI "ambient documentation" tools now listen to consultations and draft the notes, and Delacroix says England's 2025 ten-year health plan commits to spreading them across general practice. The drafts are fluent, and a doctor reviewing them under time pressure tends to cut hedging language rather than add it back. The GP's uncertain sentence gets written as a fact, or not at all. Then a loop takes over: systems learn from existing notes, write new notes in their image, doctors accept them with light edits, trainees learn from the result, and the next systems are trained on the flattened record. "Nobody in this loop makes a bad decision. The loop runs." And the conversation where the GP might have said *I wasn't sure what I heard* has one less reason to happen, because the record already says what happened.

**Marking schoolwork.** This has happened once before in a form everyone could see. In August 2020, with exams cancelled, England used an algorithm to adjust teachers' predicted grades against each school's past results, and about [39% of A-level grades came out lower](https://www.cnbc.com/2020/08/21/computer-algorithm-caused-a-grading-crisis-in-british-schools.html) than teachers predicted. Delacroix notes that the policy lasted four days, because the harm landed on everyone on the same morning and students could stand outside the Department for Education with placards naming the algorithm. AI marking tools are arriving differently: one task at a time, as a competent draft comment the teacher lightly adjusts. The adjustment she would have made was often a hedge, a note that this pupil's work is hard to place, and that hedge is where her judgement lived and where a conversation with a colleague would have started. "There is no morning on which this happens to everyone, and no algorithm to name on a placard."

## Why the usual safeguards miss it

Delacroix looks at three current responses and finds they all stop short:

- **Technical:** getting models to report how reliable their outputs are. Useful for the first kind of uncertainty. For the second, a number appears anyway and settles by stipulation what should have stayed open.
- **Evaluative:** testing deployed systems for accuracy and time saved. Necessary, but it asks whether the system works *within* current practice, not what happens to the practice once the system becomes its environment.
- **Regulatory:** she reports that in July 2026 the UK's medicines regulator confirmed that AI tools for transcribing, summarising and drafting clinical notes fall outside medical device rules, leaving procurement and the individual clinician as the remaining checks.

All three treat the professional as one person using one tool. None works at the level where a profession's standards are formed and revised. "Audits, evaluations and benchmarks see what registers. The conversation that did not take place registers nowhere."

:::note[The loss nobody sees]
"A news feed tuned for capture may feel like capture. An assistant tuned for resolution will feel like competence and care."
:::

## Why this is a democratic question

Delacroix writes about doctors and teachers because the capacity at stake, noticing that the usual way of doing things has stopped working and holding that open long enough to say something better, is the same one citizens need in public life. She sees two direct links, not analogies.

**Public reasons start in rooms like these.** What counts as a sign of abuse, what a fair mark is, what a safe note looks like: these standards are worked out among professionals and then travel into guidance, inspection and law. "A public that governs on records inherits whatever the records can hold." Minutes, consultation responses and inspection reports are now drafted with the same tools, under the same time pressure.

**Answerability lives in the hedge.** The GP's hesitant note recorded that a person had noticed something and not yet decided what it meant. Remove the hedge and the record still says what happened, but no one stands behind it. A profession whose records lose their hedges ends up producing, at scale, the kind of reasons nobody can answer for that Théophile Pénigaud calls [orphan reasons](/concepts/orphan-reasons/). Delacroix describes herself as looking at the same erosion from the other side.

She also argues that keeping a full record of every conversation, one common answer to AI that closes things down, cannot fix this. A record can recover what was said and set aside. It cannot recover what was never said because attention had been steered elsewhere. "A complete record of a thinner deliberation is still thin."

## What would have to change

Delacroix leaves solutions to her next essay, but names the shift: from designing for **one user and one system** to designing for **a community that keeps refining how its tools express doubt** as its practice changes. There is no single correct way to express uncertainty that can't be put in numbers, so the way a system does it has to be adjustable in use, by the people who use it.

Her sketch: a group of teachers meets regularly to work out which uncertainties they need to be able to voice, and how their tools should express doubt. They could take an open-source model, build a small dataset from their own discussions about which outputs helped their judgement, and refine the model on that, with no commercial provider involved. The meetings themselves would be an in-between space. For primary care, where a GP practice can't adapt its own tools, she points to **public procurement**: a condition that no system is deployed without a way for the profession to revise how it expresses doubt. What no contract can supply, she adds, is the profession's will to ask for it. Her own experiments with "uncertainty scaffolds" were due to begin a human phase in autumn 2026; results are pending.

## Why it's here

Much of this wiki is about tools that help people deliberate, and many of them summarise, map or [make sense of](/concepts/ai-sensemaking/) what participants said. Productive uncertainty gives a test worth putting to each: **does the tool leave room for a doubt that has not found its words yet, or does it turn every hesitation into a finding?** It pairs with [orphan reasons](/concepts/orphan-reasons/) (who answers for what the AI said), and with the wider critique in [does AI weaken democratic institutions?](/concepts/does-ai-weaken-institutions/). Delacroix is writing for the [Informational Democracy](/ecosystem/overview/) working group; two more essays are forthcoming.

## Sources

- **In-Between Spaces** — Sylvie Delacroix, Informational Democracy (2026): [informationaldemocracy.substack.com](https://informationaldemocracy.substack.com/p/in-between-spaces)
- **We are building conversational infrastructure that cannot hold the kind of uncertainty democracy runs on** — the provocation the essay develops, Sylvie Delacroix, Informational Democracy (2026): [informationaldemocracy.substack.com](https://informationaldemocracy.substack.com/p/provocation-delacroix)
- **Habitual Ethics?** — Sylvie Delacroix, Hart Publishing (2022), where the idea of in-between spaces comes from: [doi.org/10.5040/9781509920440](https://doi.org/10.5040/9781509920440)
- **How a computer algorithm caused a grading crisis in British schools** — CNBC (2020), for the 2020 A-level figure: [cnbc.com](https://www.cnbc.com/2020/08/21/computer-algorithm-caused-a-grading-crisis-in-british-schools.html)
