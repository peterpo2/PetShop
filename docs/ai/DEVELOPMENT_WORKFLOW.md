# Development Workflow - PetShop

## Before Work

1. Read `AGENTS.md`.
2. Read `CLAUDE.md`.
3. Read `docs/ai/PROJECT_CONTEXT.md`.
4. Read `docs/ai/AGENTS_AND_SUBAGENTS.md`.
5. Check `git status --short --branch`.
6. Check whether a build/test stack exists before assuming commands.

## Planning

Use `brainstorming` for unclear or creative website direction.

For implementation work:

- write or confirm the intended scope
- keep the first production version small
- favor static deployment for the Contabo VPS target
- document any new build/test commands in `CLAUDE.md`

## Skills

Use these skills when their trigger applies:

- `ui-ux-pro-max` for UI/UX design, accessibility, layout, typography, color, responsive behavior, and visual review
- `playwright` for browser verification when a dev server or static preview exists
- `test-driven-development` when adding behavior with a testable contract
- `systematic-debugging` for bugs and unexpected behavior
- `security-best-practices` before deployment/security-sensitive changes
- `subagent-driven-development` or the available multi-agent tool when the user explicitly asks for subagents
- `aspnet-core` only if the project becomes ASP.NET Core

## Hooks

Project Claude hooks are configured in `.claude/settings.json`.

Expected session-start behavior:

```text
%USERPROFILE%\.claude\hooks\run-hook.cmd session-start
```

Hooks are helper guardrails, not a replacement for manual checks.

If a hook fails:

- do not bypass security rules
- continue with manual checks
- report the failure in the final response

## Build

No build command is detected yet.

When an implementation stack is added, update this section and `CLAUDE.md`.

## Test

No test command is detected yet.

For static UI work, minimum verification should include:

- open the page locally
- check mobile width around 375px
- check tablet width around 768px
- check desktop width around 1440px
- verify CTA links: `tel:` and Google Maps
- verify keyboard focus visibility

## Deployment Notes

Target: Contabo VPS plus custom domain.

Expected static deployment shape:

1. Build site locally.
2. Upload static files to the VPS.
3. Serve with Nginx.
4. Point domain DNS to the VPS IP.
5. Configure HTTPS with Let's Encrypt.
6. Verify the live site from mobile and desktop.

Do not commit server credentials, SSH keys, API tokens, or `.env` files.

## Commit And Publish

1. Review changed files with `git status --short`.
2. Stage specific files only.
3. Inspect staged diff.
4. Commit with a clear message.
5. Push with `git push -u origin <branch>`.

Never use `git add .`.
Never use `--no-verify`.
Never force push unless the user explicitly confirms.
