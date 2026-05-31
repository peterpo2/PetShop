# Hooks - PetShop

## Current Hook Configuration

Claude hooks are configured in:

`.claude/settings.json`

The project uses a `SessionStart` hook to call the global AlcorAI hook runner:

```text
%USERPROFILE%\.claude\hooks\run-hook.cmd session-start
```

## Windows Notes

This repository is currently on Windows:

`C:\Popoff\PetShop\PetShop`

Use `cmd /c` or PowerShell-compatible commands in project hooks. Do not rely on WSL/bash unless the environment has it installed.

## Failure Behavior

If hooks fail:

1. Do not bypass security checks.
2. Continue with manual checks from `docs/ai/DEVELOPMENT_WORKFLOW.md`.
3. Report the hook failure in the final response.

## Manual Safety Checks

Before commit or push:

```powershell
git status --short
git diff --cached --name-only
git diff --cached
```

Never stage secrets, `.env`, session files, generated build output, or deployment credentials.
