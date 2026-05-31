# PetShop - ЗОО БАКАЛИЯ

Repository for the upcoming one page website for `ЗОО БАКАЛИЯ`, a small neighborhood pet shop in Sofia, Bulgaria.

## Current State

The repository currently contains:

- project AI/agent instructions
- the original website brief
- the existing logo asset
- UI/UX Pro Max skill installed for project-local Codex usage
- deployment and workflow documentation

No production website stack has been implemented yet.

## Primary Brief

Read the full site prompt here:

`docs/brief/zoo-bakalia-original-prompt.md`

Business details:

- Brand: `ЗОО БАКАЛИЯ`
- Address: `ж.к. Зона Б-5-3, ул. „Средна гора“ 16, 1303 София`
- Phone: `088 828 4284`
- Hosting target: Contabo VPS with custom domain

## Recommended Implementation Direction

Unless requirements change, build the first version as a static website:

- HTML/CSS with minimal JavaScript, or a small static site generator
- mobile-first layout
- optimized assets
- no database
- no account system
- no e-commerce checkout
- deploy behind Nginx on the VPS

## AI Project Docs

- `AGENTS.md` - Codex/project agent rules
- `CLAUDE.md` - Claude/project workflow rules
- `docs/ai/PROJECT_CONTEXT.md` - business and product context
- `docs/ai/DEVELOPMENT_WORKFLOW.md` - workflow, verification, deployment flow
- `docs/ai/AGENTS_AND_SUBAGENTS.md` - agent/subagent model
- `docs/ai/SKILLS_AND_AGENTS.md` - skill routing and helper resources
- `docs/ai/HOOKS.md` - hook behavior and troubleshooting
- `docs/deployment/CONTABO_VPS.md` - deployment notes

## Local Preview

This is currently a static website. Open `index.html` directly, or serve the folder locally:

```powershell
python -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Docker

Build and run with Docker Compose:

```powershell
docker compose up --build -d
```

Then open:

```text
http://localhost:8091
```

Stop the container:

```powershell
docker compose down
```

## Build

No build step is required for the current static version.

## Test

No automated test runner is configured yet. Minimum manual checks are mobile width, desktop width, CTA links, keyboard focus, and console errors.

## Git Hygiene

Stage specific files only. Do not commit secrets, `.env` files, local session state, generated build output, or deployment credentials.
