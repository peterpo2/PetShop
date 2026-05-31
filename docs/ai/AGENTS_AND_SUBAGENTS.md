# Agents And Subagents - PetShop

## Purpose

This project should be easy for Codex, Claude, and other AI coding agents to continue without losing the business goal, design constraints, or deployment target.

The main agent remains responsible for integration and final verification. Subagents are used only for bounded work that can run safely in parallel.

## Main Agent Responsibilities

- maintain the product direction
- decide the implementation approach
- edit shared configuration and docs
- integrate subagent output
- run verification
- manage git staging, commit, and push
- report clearly to the user

## Suggested Subagent Roles

Use these roles as task prompts, not as permanent files or personas.

| Role | Use for | Output |
| --- | --- | --- |
| Product/content reviewer | Bulgarian copy, site structure, CTA clarity | concise content notes or edited copy |
| UI/UX reviewer | layout, accessibility, responsive quality, visual consistency | checklist with actionable fixes |
| Frontend worker | isolated HTML/CSS/component implementation | direct file changes in assigned files |
| QA/browser reviewer | mobile/desktop smoke checks, broken links, console errors | verification report |
| Security/deployment reviewer | VPS deployment risks, secrets, headers, HTTPS notes | risk list and deployment checklist |
| Docs maintainer | README/AGENTS/CLAUDE/workflow updates | direct doc changes in assigned files |

## Subagent Rules

- Use subagents only when the user asks for them or the task is explicitly parallelizable.
- Give each subagent one clear objective.
- Assign a disjoint file scope for editing tasks.
- Tell subagents not to revert unrelated work.
- Do not let two agents edit the same file at the same time.
- The main agent must review final output before commit.

## Recommended Parallel Split For Website Build

When implementation begins, a safe split is:

1. Main agent: project scaffold, assets, final integration.
2. Frontend worker: page structure and responsive CSS in assigned source files.
3. UI/UX reviewer: read-only review against `ui-ux-pro-max` and logo identity.
4. QA reviewer: browser checks after the page runs locally.

## Shared Context For Every Agent

Every agent should be given:

- `AGENTS.md`
- `CLAUDE.md`
- `docs/ai/PROJECT_CONTEXT.md`
- `docs/brief/zoo-bakalia-original-prompt.md`
- `PetShopLogo.png` if visual work is involved

## UI/UX Pro Max Application

For this site, apply the following from `ui-ux-pro-max`:

- accessibility first: contrast, alt text, focus states, semantic headings
- touch targets at least 44px high/wide
- mobile-first layout
- no horizontal scrolling
- stable image dimensions to avoid layout shift
- animation only with transform/opacity and `prefers-reduced-motion`
- one primary CTA per section
- use consistent icon style; no emoji icons in production UI
- use semantic color tokens instead of raw color scatter

## Done Criteria For Agent Work

Agent work is complete only when:

- changed files are listed
- assumptions are stated
- verification is reported
- unresolved risks are named
- no secrets or generated local sessions are staged
