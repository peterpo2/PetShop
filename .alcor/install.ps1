param(
    [string]$AlcorAiRoot,
    [switch]$DryRun
)

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent (Split-Path -Parent $PSCommandPath)

if ([string]::IsNullOrWhiteSpace($AlcorAiRoot)) {
    Write-Host "AlcorAiRoot was not provided."
    Write-Host "Run from a cloned AlcorAI repository:"
    Write-Host "  powershell -NoProfile -ExecutionPolicy Bypass -File <AlcorAI>\\scripts\\install-alcor-ai.ps1 -ProjectRoot `"$ProjectRoot`" -DryRun"
    exit 0
}

$Installer = Join-Path $AlcorAiRoot "scripts\install-alcor-ai.ps1"
if (!(Test-Path -LiteralPath $Installer)) {
    throw "AlcorAI installer not found: $Installer"
}

Write-Host "Project root: $ProjectRoot"
Write-Host "AlcorAI root: $AlcorAiRoot"
Write-Host "This bootstrap script is guidance-only in Phase 5A. Use the Desktop Orchestrator to preview and install project files."
if ($DryRun) {
    Write-Host "DryRun=True"
}
