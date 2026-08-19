# Tonghuashun Ad Blocker

## Blocked Targets
- Splash ads
- Ad API responses (getads.php)
- In-feed ads
- Analytics/tracking requests

## Files
| File | Purpose |
|---|---|
| `ths_ad_block.plugin` | Loon plugin entry - import this into Loon |
| `ths_ad_block.js` | Main script - handles splash, API, and in-feed ads |
| `ths_stat_block.js` | Stat blocker - rejects analytics at request stage |

## Import to Loon
Only import the `.plugin` file. The two JS files are auto-fetched by Loon.

Plugin URL:https://raw.githubusercontent.com/quentinjwhu/ad-block-scripts/main/ths/ths_ad_block.plugin

## Notes
- Do NOT block core domains: `trade`, `quote`, `login`.10jqka.com.cn
- After app updates, check Loon request log for new ad endpoints
- Last updated: 2026-08-19
