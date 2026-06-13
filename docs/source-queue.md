# Source ingestion queue

Sources (videos, talks, articles) to process into the wiki, in order. Each is
processed via the `/process-source` flow → wiki pages + a per-source
`content-backlog` GitHub issue. The per-session log lives in `process-notes.md`;
the full ingestion history is in memory (`project_cibc_wiki.md`).

**How to use:** add a line under **Queue** — the URL plus an optional note. I work
top to bottom, and when one is done I move it to **Processed** with its date and
issue number. (This file is committed, so the queue survives across sessions.)

## Queue

- [ ] https://www.youtube.com/watch?v=RtgvyXRttw4
- [ ] https://www.youtube.com/watch?v=HNpd5Fa-ze8
- [ ] https://www.youtube.com/watch?v=bIGWZY-fCk0
- [ ] https://www.youtube.com/watch?v=FHpcdHiyCXw
- [ ] https://www.youtube.com/watch?v=pBoDmyv8eqU
- [ ] https://www.youtube.com/watch?v=1yW1omYoxYw
- [ ] https://www.youtube.com/watch?v=G5O7BozdFtI
- [ ] https://www.youtube.com/watch?v=lKkvITqB8Zw
- [ ] https://www.youtube.com/watch?v=S0cmxZzu5wA
- [ ] https://www.youtube.com/watch?v=B9RQlwyeYCY
- [ ] https://www.youtube.com/watch?v=u_azC4tgpRU
- [ ] https://www.youtube.com/watch?v=mx4gQptRdXk
- [ ] https://www.youtube.com/watch?v=Ol37-FfWKck
- [ ] https://www.youtube.com/watch?v=sgFq4ty8wSI
- [ ] https://www.youtube.com/watch?v=8OS0knZwh28
- [ ] https://www.youtube.com/watch?v=lRg___84eJQ
- [ ] https://www.youtube.com/watch?v=cmHHZ1_cyeY
- [ ] https://www.youtube.com/watch?v=pca6kIiAPe8
- [ ] https://www.youtube.com/watch?v=M3H-w4Osajk
- [ ] https://www.youtube.com/watch?v=kvJVCgBprwY
- [ ] https://www.youtube.com/watch?v=Wm_nuJ2xEoE
- [ ] https://www.youtube.com/watch?v=vgFB9opxRKs
- [ ] https://www.youtube.com/watch?v=HRO4JGUYnt8
- [ ] https://www.youtube.com/watch?v=ucKz_EmO-c0
- [ ] https://www.youtube.com/watch?v=_OVZJtw-xkA
- [ ] https://www.youtube.com/watch?v=jlOnf8wmhYc
- [ ] https://www.youtube.com/watch?v=R-JVbHzQa5I
- [ ] https://www.youtube.com/watch?v=N3MOfLBnYBI
- [ ] https://www.youtube.com/watch?v=XCBEuSp_heI
- [ ] https://www.youtube.com/watch?v=Bhz1LIEku7M
- [ ] https://www.youtube.com/watch?v=dLq2vr3j-nM
- [ ] https://www.youtube.com/watch?v=oyYsTyLBBpc
- [ ] https://www.youtube.com/watch?v=-5Lq2uaOgBw
- [ ] https://www.youtube.com/watch?v=qKTS0mfXRCk
- [ ] https://www.youtube.com/watch?v=HzxW3a9jAxE
- [ ] https://www.youtube.com/watch?v=mOfvIfg2XlE
- [ ] https://www.youtube.com/watch?v=RbvrMnv5g6w
- [ ] https://www.youtube.com/watch?v=ib8I9WqM93M
- [ ] https://www.youtube.com/watch?v=aXgne-9F7uU
- [ ] https://www.youtube.com/watch?v=-cCguFRH7f4
- [ ] https://www.youtube.com/watch?v=YmBwy6OYIVo
- [ ] https://www.youtube.com/watch?v=GJrkdf-Aytc
- [ ] https://www.youtube.com/watch?v=3CTJXS9WA1E
- [ ] https://www.youtube.com/watch?v=q5vsCia1QBU
- [ ] https://www.youtube.com/watch?v=T7Ilbu-24Bo
- [ ] https://www.youtube.com/watch?v=Wseyp_JvNYQ
- [ ] https://www.youtube.com/watch?v=1qLhm7iRyGY
- [ ] https://www.youtube.com/watch?v=CjwyCt9LZvI
- [ ] https://www.youtube.com/watch?v=zrhxeZfRz9A
- [ ] https://www.youtube.com/watch?v=kQyOyPo-pwA
- [ ] https://www.youtube.com/watch?v=fqDyGfjJZJI
- [ ] https://www.youtube.com/watch?v=eAkcea8rO7E
- [ ] https://www.youtube.com/watch?v=7h6X7WBANKY
- [ ] https://www.youtube.com/watch?v=3jNaLhEhgYc
- [ ] https://www.youtube.com/watch?v=GycOcQn3EvI
- [ ] https://www.youtube.com/watch?v=SbIz83NRBVY
- [ ] https://www.youtube.com/watch?v=9q0EsXY4TS0
- [ ] https://www.youtube.com/watch?v=snnk_8q1w_4
- [ ] https://www.youtube.com/watch?v=aofZqy8y8RA
- [ ] https://www.youtube.com/watch?v=ogtpxA6brGo
- [ ] https://www.youtube.com/watch?v=ttAFeJM-3x8
- [ ] https://www.youtube.com/watch?v=xSFCmLOBG9g
- [ ] https://www.youtube.com/watch?v=kURvQJQpt8M
- [ ] https://www.youtube.com/watch?v=NBGYgUdphuk
- [ ] https://www.youtube.com/watch?v=RNkkEU7EoOk
- [ ] https://www.youtube.com/watch?v=nvL3vqMzznY
- [ ] https://www.youtube.com/watch?v=OQxMGMB5kL8
- [ ] https://www.youtube.com/watch?v=y9Jna4svs90
- [ ] https://www.youtube.com/watch?v=-WS15nbBG0M
- [ ] https://www.youtube.com/watch?v=yXBAtdyBto0
- [ ] https://www.youtube.com/watch?v=N8CXgBSQhcA
- [ ] https://www.youtube.com/watch?v=leWAxhreI6E
- [ ] https://www.youtube.com/watch?v=9UYjLiKvx68
- [ ] https://www.youtube.com/watch?v=wLxWrTXn7z0
- [ ] https://www.youtube.com/watch?v=Vdgh1asfrqM
- [ ] https://www.youtube.com/watch?v=ElBSUQyC_ak
- [ ] https://www.youtube.com/watch?v=xMDoE6fIAXE
- [ ] https://www.youtube.com/watch?v=yg5ihasHAek
- [ ] https://www.youtube.com/watch?v=RW7aoRfrw84
- [ ] https://www.youtube.com/watch?v=4l02748Zs_0
- [ ] https://www.youtube.com/watch?v=VBeTDk_A8Yg
- [ ] https://www.youtube.com/watch?v=Oa_dRBN4zdA
- [ ] https://www.youtube.com/watch?v=rf1nXskea9Q
- [ ] https://www.youtube.com/watch?v=S-3ESBzGg4Q
- [ ] https://www.youtube.com/watch?v=cd0eJqV_XPk
- [ ] https://www.youtube.com/watch?v=vqOsCgSs0e8
- [ ] https://www.youtube.com/watch?v=dnIOrPYgszk
- [ ] https://www.youtube.com/watch?v=7ZZ3xmEwkos
- [ ] https://www.youtube.com/watch?v=n08jFDe8g6c
- [ ] https://www.youtube.com/watch?v=-6V0qmDZ2gg
- [ ] https://www.youtube.com/watch?v=KbKymchp-54
- [ ] https://www.youtube.com/watch?v=zQLWBnQYd4M
- [ ] https://www.youtube.com/watch?v=YRQLybWlPJk
- [ ] https://www.youtube.com/watch?v=j7i72bJSBZE
- [ ] https://www.youtube.com/watch?v=admufe52j0I
- [ ] https://www.youtube.com/watch?v=SbUViuFITTI
- [ ] https://www.youtube.com/watch?v=m_EkUpH5L4Y
- [ ] https://www.youtube.com/watch?v=TVNWBE4XwTw
- [ ] https://www.youtube.com/watch?v=hJsWRNurV9g
- [ ] https://www.youtube.com/watch?v=U0YJ0C81n4s
- [ ] https://www.youtube.com/watch?v=KCSsKV5F4xc
- [ ] https://www.youtube.com/watch?v=hZpKdfbrd6o
- [ ] https://www.youtube.com/watch?v=UC-fkuyvSVY
- [ ] https://www.youtube.com/watch?v=KFZ4OdW7Mg8
- [ ] https://www.youtube.com/watch?v=ZN1XDn-tVbc
- [ ] https://www.youtube.com/watch?v=tEhpNXYXxZo
- [ ] https://www.youtube.com/watch?v=BYYvIckMVak
- [ ] https://www.youtube.com/watch?v=2D4gHP5nsgk
- [ ] https://www.youtube.com/watch?v=POLwnybqUrY
- [ ] https://www.youtube.com/watch?v=dBHUCdoTMKE
- [ ] https://www.youtube.com/watch?v=_J4WxRRY2RQ

## Processed

- [x] #12 — Relational Technology Project (Metagov seminar) · `HbH_cYgUCWA` · 2026-06-11
- [x] #11 — The Planetary Compendium (Berggruen × Dark Matter Labs) · `hhTyUhc8Rm8` · 2026-06-11
- [x] #10 — American Conversation Project / Cortico (civic listening) · `Zm3w5PkbVPo` · 2026-06-10
- [x] #9 — Children & young people's assemblies (DemocracyNext) · `G48qf6qvU20` · 2026-06-10
- [x] #8 — David Bollier on the commons (Team Human) · `5NrkkC8tQGQ` · 2026-06-10
- [x] #7 — Landemore, "Politics Without Politicians" (DemocracyNext) · `sgFUtZCgAqI` · 2026-06-10
- [x] #6 — Brandon Nørgaard / OpenCivics · `Umpu1AmTuy8` · 2026-06-10
- [x] #5 — Stempeck, Civic Tech Field Guide & why projects succeed/fail · `jQ-PZUNkNfg` · 2026-06-10
- [x] #4 — Nathan Schneider, online governance · `jlyfhmUWX04` · 2026-06-10
- [x] #3 — Hélène Landemore, deliberative democracy · `QizItYVPA1E` · 2026-06-10
- [x] #2 — Commoning Standard (Cécile Green & Seth Frey) · `0ekd-5YuHHE` · 2026-06-10
- [x] #1 — Metagov "Civic AI" (Matt Stempeck, CTFG) · `SonfdR0_h2w` · 2026-06-09
