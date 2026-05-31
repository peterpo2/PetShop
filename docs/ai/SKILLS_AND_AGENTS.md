# Skills And Agents - PetShop

## Installed / Available Skills

Project-local:

- `.codex/skills/ui-ux-pro-max` - installed via `npx uipro-cli init --ai codex`

Global/session skills expected in Codex:

- `brainstorming`
- `test-driven-development`
- `systematic-debugging`
- `executing-plans`
- `subagent-driven-development`
- `requesting-code-review`
- `playwright`
- `security-best-practices`
- `aspnet-core` if ASP.NET Core is introduced

## UI/UX Pro Max Usage

The requested GitHub skill was installed from:

`https://github.com/nextlevelbuilder/ui-ux-pro-max-skill`

Official install command used:

```powershell
npx uipro-cli init --ai codex
```

Useful command for this project:

```powershell
python .codex\skills\ui-ux-pro-max\scripts\search.py "local pet supplies shop yellow blue red friendly neighborhood static website" --design-system -p "ZOO BAKALIA"
```

Observed recommendation:

- pattern: social proof + trust
- style: accessible and ethical
- typography direction: rounded, friendly fonts such as Varela Round / Nunito Sans
- key checks: focus rings, ARIA labels, reduced motion, 44px touch targets, 375/768/1024/1440 responsive checks

Project adaptation:

- keep the logo palette as the source of truth instead of replacing it with the generic generated blue/yellow palette
- use social proof lightly because there is only one known real review
- prioritize contact clarity, location clarity, and fast mobile usage

## Skill Routing Rules

| Situation | Use |
| --- | --- |
| New site direction or uncertain scope | `brainstorming` |
| Visual design, typography, color, layout, interaction, accessibility | `ui-ux-pro-max` |
| Browser QA, screenshots, link checks | `playwright` |
| Bug or broken behavior | `systematic-debugging` |
| Testable feature or behavior | `test-driven-development` |
| Approved multi-step implementation | `executing-plans` |
| Explicit request for parallel agents/subagents | `subagent-driven-development` or the available multi-agent tool |
| Security-sensitive changes or deployment review | `security-best-practices` |
| ASP.NET Core implementation | `aspnet-core` |

## Helper Resources

- `PetShopLogo.png` - brand identity and logo colors
- `docs/brief/zoo-bakalia-original-prompt.md` - full user prompt
- `.alcor/install.ps1` - AlcorAI bootstrap guidance
- `.alcor/manifest.json` - expected AI setup files
- `.claude/settings.json` - Claude hook configuration

## Agent Boundaries

- The main agent owns git, final integration, verification, and user communication.
- Subagents can review or implement isolated slices.
- A subagent must not push, commit, or change shared config unless explicitly assigned.
- A subagent must not revert unrelated local changes.
