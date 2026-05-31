# AGENTS.md - PetShop

This file is the primary project instruction source for Codex and other coding agents working in this repository.

## Project

- Name: PetShop
- Brand: ZOO BAKALIA / "ЗОО БАКАЛИЯ"
- Business: small neighborhood pet shop in Sofia, Bulgaria
- Goal: mobile-first one page website that presents the shop, products, address, phone contact, and local trust signals
- Hosting target: Contabo VPS with a custom domain
- Current implementation state: repository bootstrap and planning docs only; application stack is not implemented yet

## Required Context Before Work

Read these files before changing code or project docs:

1. `docs/ai/PROJECT_CONTEXT.md`
2. `docs/ai/DEVELOPMENT_WORKFLOW.md`
3. `docs/ai/AGENTS_AND_SUBAGENTS.md`
4. `docs/brief/zoo-bakalia-original-prompt.md`
5. `CLAUDE.md`

## Security Rules

- Never commit secrets, tokens, `.env` files, auth files, cookies, session files, private keys, or deployment credentials.
- Never print credentials or sensitive values in logs.
- Validate and sanitize all user-controlled input at site boundaries.
- Do not expose stack traces or internal error details to end users.
- Before publishing, inspect staged files with `git diff --cached --name-only` and `git diff --cached`.

## Scope Rules

- Build only what the current user request asks for.
- Prefer a static, fast, low-maintenance website unless the user explicitly asks for server-side functionality.
- Do not add a CMS, database, authentication, e-commerce checkout, admin panel, analytics, or cookie banner unless requested.
- Do not rewrite generated AlcorAI files unless the task is specifically about agent/hook/project setup.
- Keep changes small, reviewable, and easy to deploy to a VPS.

## Skill Routing

Use the smallest useful skill set for the task:

| Task | Required skill |
| --- | --- |
| New feature, unclear scope, UX/content direction | `brainstorming` |
| UI/UX design, layout, accessibility, responsive polish | `ui-ux-pro-max` |
| Static HTML/CSS build or visual QA | `playwright` when browser verification is needed |
| Bug investigation | `systematic-debugging` |
| Tests for a feature or bugfix | `test-driven-development` |
| Executing an approved implementation plan | `executing-plans` |
| Parallel implementation or explicit subagent request | `subagent-driven-development` plus the available multi-agent tool |
| Security review | `security-best-practices` |
| ASP.NET Core work, only if a .NET app is introduced | `aspnet-core` |

The user asked to try `nextlevelbuilder/ui-ux-pro-max-skill`; it is installed locally as Codex skill `ui-ux-pro-max`. Restart Codex if the skill is not automatically available in a future session.

## Agent And Subagent Model

- The main agent owns final decisions, file edits, verification, commit hygiene, and user communication.
- Subagents may be used only when the user explicitly asks for agents/subagents or when a task is large enough to split safely.
- Subagents must receive bounded ownership: one concern, clear files or read-only scope, and no permission to revert unrelated work.
- Do not spawn multiple agents to edit the same files at the same time.
- Review subagent output before incorporating it.

See `docs/ai/AGENTS_AND_SUBAGENTS.md` for the project-specific roles.

## Site Design Baseline

The site should be:

- Bulgarian language first
- mobile-first and fast
- warm, local, professional, and not corporate
- visually based on `PetShopLogo.png`
- brand colors: warm yellow, saturated blue, coral/red, graphite, white/cream
- accessible: visible focus states, sufficient contrast, semantic headings, alt text, 44px touch targets
- direct CTA focused: call, open location, view products

Avoid:

- dark corporate SaaS styling
- generic stock-like visuals
- emoji icons in production UI; use SVG or image assets
- oversized marketing fluff
- unnecessary JavaScript

## Git And Publishing

- Stage specific files only. Never use `git add .`.
- Run available verification before commit. If no build/test stack exists, state that clearly.
- Never use `--no-verify`.
- Publishing the branch means `git push -u origin <branch>`.
- If the remote rejects push because of auth or branch protection, report the exact issue and stop.
