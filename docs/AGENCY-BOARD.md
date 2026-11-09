# Agency board — Cursor execution (9 Nov 2026)

**GitHub Projects:** not created. The Cursor token (`cursor[bot]`) cannot create Projects on `salachangolive-glitch` (`does not have permission to create projects on ownerId U_kgDOE0z2dQ`). Free GitHub Projects still needs **your** click or a token with `project` scope.

Until that exists, this file is the common register. Grok does not receive it automatically. Copy or paste it into Grok, or open this Cursor Project’s Context tab.

Roles: **Owner** = you · **Strategy** = Grok Director General · **Execution** = this Cursor coordinator.

Statuses: Propuesta · Aprobada · En ejecución · Preparada · Publicada y verificada · Bloqueada · Resultado medido.

---

## Four teams (independent; never raid one to staff another)

| Area | Surface | Cursor owner | Do not |
| --- | --- | --- | --- |
| **Dubliners** | dublinersmadrid.es · GBP | [Dubliners marketing plan](bc-5ea694ad-3bd8-5365-a019-1aa031251f82) | Parallel edits of the same Astro files |
| **O’Connell’s** | oconnellsmadrid.es · `cloudflare-pages-static` · PR #1 | [O'Connell's marketing plan](bc-b1eacf51-f392-5e02-96b1-379fd242cd62) | Overwrite PR #1 or PR #4; retarget Pages |
| **O’Reilly’s** | Localo lander + paste | [O'Reilly's marketing plan](bc-824556cc-fa03-58de-b751-3265c33162f9) | Claim GBP published; bulk-cancel posts |
| **Chango Club** | No Cursor-linked live repo found (`sala-chango-madrid` 404) | None yet | Do not pull Dubliners/O’Connell’s agents onto Chango |

Shared (not a fifth venue): [Localo venue registers](bc-148db980-7b24-54b6-8f9b-746460eeffad) reads Maps ranks for the three bars only.

Idle NFL-weekend agents stay listed. They are **not** deleted.

---

## How Cursor and Grok share state (no auto-link)

Verified: there is **no** MCP, webhook, or API in this environment that pushes Cursor tasks to Grok or the reverse.

Handshake until GitHub Projects exists:

1. Grok writes priorities as a dated list (venue, objective, priority).
2. Owner pastes that list into this Cursor chat **or** into this file.
3. Cursor executes, updates this file and the weekly report, and puts live URLs / paste paths in the result column.
4. Owner (or Grok, if it can `gh` / browse GitHub) reads PRs on dubliners-madrid and oconnells-madrid.

Do not run the same article twice because Grok and Cursor both “thought of it.” Unique slug + this board first.

---

## File lock (avoid duplicate articles / same-file edits)

- One git writer per repo at a time: Dubliners agent on dubliners-madrid; O’Connell’s agent on `cloudflare-pages-static` / PR #1.
- O’Reilly’s paste file: one heading per agent; no git.
- New article: search the campaign register and live sitemap before a new slug.
- vis% ≠ Localo rank. Null rank = absent.

---

## QC before “Publicada y verificada”

1. Curl production **200** (Fastly: retry 404 MISS). Record Last-Modified.
2. GET DIRECTIONS uses that venue’s CID. Address correct.
3. No hours/name/Ads edits. No competitor venue names on public pages.
4. Named broadcasts only from What’s On / confirmed copy.
5. O’Reilly’s: paste path only, **not published**.
6. Localo: do not claim a deploy moved a grid until a new `finishedAt`.

---

## Open work (9 Nov 01:52 Europe/Madrid)

| Venue | Objective | Status | Link | Verified result |
| --- | --- | --- | --- | --- |
| Dubliners | Wet Plaza Mayor indoor pint | Publicada y verificada | [#42](https://github.com/salachangolive-glitch/dubliners-madrid/pull/42) | 200 https://dublinersmadrid.es/indoor-pint-when-plaza-mayor-is-wet/ |
| O’Connell’s | Saturday UK clocks | Publicada y verificada | [PR #1](https://github.com/salachangolive-glitch/oconnells-madrid/pull/1) | 200 https://oconnellsmadrid.es/madrid-clocks-saturday-english-kickoffs-this-door |
| All three | GBP descriptions | Preparada | [gbp-descriptions.md](gbp-descriptions.md) | Not pasted |
| All three | Review replies (15 each) | Preparada | [review-replies.md](review-replies.md) | Not posted |
| O’Reilly’s | 29 scheduled posts classified | Resultado medido | [oreillys-scheduled-posts.md](oreillys-scheduled-posts.md) | None to bulk-cancel; sister posts KEEP |
| O’Reilly’s | Editable website path | Propuesta | [oreillys-website-options.md](oreillys-website-options.md) | Needs owner yes before any repo |
| Localo | Rank baseline | Resultado medido | [localo-metrics.md](localo-metrics.md) | 8 Nov 15:46; next scan 15 Nov |
| Chango | First Cursor surface | Bloqueada | — | Need repo URL and GBP/Localo place |

Owner paste still the conversion bottleneck. Ads/hours/names unchanged.
