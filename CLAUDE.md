# CLAUDE.md - PetShop

This repository is a bootstrap for the "ЗОО БАКАЛИЯ" website.

## Project Summary

Build a modern, warm, professional one page website for a small neighborhood pet shop in Sofia, Bulgaria.

The website must help mobile visitors quickly understand:

- what the shop offers
- where it is located
- how to call
- why the shop is trustworthy and local
- that it is suitable for every pet owner looking for personal service

Deployment target: Contabo VPS with a custom domain.

## Current Stack

No application stack has been created yet.

Default recommendation unless the user changes direction:

- static HTML/CSS/JavaScript or a small static site generator
- no database
- no server-side app unless needed
- Nginx on Contabo VPS for hosting

## Key Assets

- `PetShopLogo.png` - existing logo and main visual identity source
- `docs/brief/zoo-bakalia-original-prompt.md` - full original site prompt
- `docs/ai/PROJECT_CONTEXT.md` - project context and business requirements
- `docs/ai/DEVELOPMENT_WORKFLOW.md` - workflow, verification, and publishing notes
- `docs/ai/AGENTS_AND_SUBAGENTS.md` - agent and subagent operating model

## Design Rules

Use `ui-ux-pro-max` for UI/UX work.

Baseline:

- mobile-first
- Bulgarian copy
- warm yellow, saturated blue, coral/red, graphite, cream/white
- local, friendly, professional tone
- clear CTAs for call and Google Maps
- sticky mobile CTA is expected
- strong accessibility: contrast, semantic headings, focus states, alt text, 44px touch targets
- optimized images with stable dimensions to avoid layout shift

Avoid:

- sterile corporate design
- luxury or overly minimal pet boutique styling
- emoji icons in production UI
- decorative animation that hurts performance or accessibility
- unnecessary dependencies

## Build Commands

Not detected yet.

When a stack is introduced, document commands here, for example:

```powershell
# TODO: replace after implementation
npm install
npm run build
```

## Test Commands

Not detected yet.

When a stack is introduced, document commands here, for example:

```powershell
# TODO: replace after implementation
npm test
```

## Verification Before Completion

Before claiming work is complete:

1. Run the project build command if one exists.
2. Run tests if a test runner exists.
3. For UI work, run a browser check on mobile and desktop widths.
4. Check `git status --short`.
5. Report what passed and what could not be run.

## Git Hygiene

- Stage specific files only.
- Do not commit secrets, `.env`, local sessions, generated build output, or temporary browser/agent files.
- Do not use `--no-verify`.
- Do not force push unless the user explicitly asks and confirms.

## Hooks

Claude project settings live in `.claude/settings.json`.

The current session-start hook delegates to the global AlcorAI hook runner:

```text
%USERPROFILE%\.claude\hooks\run-hook.cmd session-start
```

If hooks fail, continue safely and report the failure instead of bypassing security rules.
