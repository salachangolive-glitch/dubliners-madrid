# Sports event campaigns (Dubliners)

Reusable pipeline: one row in `src/data/sports-event-registry.ts` drives home promo, agenda helper, and (when `pageMode: 'generated'`) static fan/meetup pages.

## Register an event

Edit `SPORTS_EVENT_REGISTRY` with:

| Field | Purpose |
|--------|---------|
| `sport`, `competition`, `teamsEn` / `teamsEs` | Agenda + page identity |
| `madridDateKey`, `madridTime`, `startIso` | Madrid kick-off + JSON-LD |
| `fanOrigin` | Optional city/country for fan landing tone |
| `languages`, `paths` | EN/ES (+ NL, etc.) URLs |
| `priority` | Home order when several promos overlap |
| `broadcastConfirmed` | `true` → “live on our screens”; `false` → meeting point only |
| `promoStart`, `homeTakeDown` | Home highlight window (`data-show-until` + build filter) |
| `pageMode` | `external` (existing page) or `generated` (`/campaign/[id]`) |

## Outputs per event

1. **Page** — `external`: keep `src/pages/...`; `generated`: built from `SportsEventCampaignPage.astro`.
2. **Home** — `HomeSportsEventHighlights` on `/` and `/es/` (hidden after `homeTakeDown`).
3. **CTA** — GA4 `sports_event_cta_click` with `bar` + `language` + `campaign_id` (no Ads).
4. **Agenda** — call `campaignToFixtureRow()` in `src/lib/sportsEventCampaigns.ts` and add to `FIXTURES` (or future sync).
5. **Visit block** — address, hours, map, metro, no reservations on generated pages.
6. **Take-down** — home strip removed automatically; URLs stay indexable.

## Rules

- No duplicate mass pages; unique copy per campaign.
- Banned on copy: oficial/official, best, mejor, proyector.
- No O’Reilly’s / Four Corner on Dubliners campaign pages.
- No channel name unless operator confirms broadcast on screens.

## Demo entries (Nov 2026)

- `zalgiris-euroleague-2026-11-25` — external pages, screens confirmed.
- `portugal-nations-league-meetup-2026-11-20` — generated meetup, screens **not** confirmed.