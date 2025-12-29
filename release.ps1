<#
.SYNOPSIS
    發布 npm packages 到 GitHub Package Registry

.DESCRIPTION
    使用 versions.json 控制版本和發布設定
    支援互動式選單或指令參數

.PARAMETER BumpType
    版本升級類型：patch, minor, major

.PARAMETER SkipGit
    跳過 Git commit 和 tag

.EXAMPLE
    .\release.ps1                    # 互動模式
    .\release.ps1 -BumpType patch    # 直接 patch 升版
#>

param (
    [Parameter(Mandatory = $false)]
    [ValidateSet("patch", "minor", "major", "none", "")]
    [string]$BumpType = "",

    [Parameter(Mandatory = $false)]
    [switch]$SkipGit = $false
)

# ============================================================================
# 函數定義
# ============================================================================

function Show-Menu {
    param (
        [string]$Title,
        [string[]]$Options,
        [int]$Default = 0
    )

    Write-Host ""
    Write-Host "  $Title" -ForegroundColor Cyan
    Write-Host "  ─────────────────────────────" -ForegroundColor Gray

    for ($i = 0; $i -lt $Options.Count; $i++) {
        $marker = if ($i -eq $Default) { ">" } else { " " }
        $color = if ($i -eq $Default) { "Yellow" } else { "White" }
        Write-Host "  $marker [$($i + 1)] $($Options[$i])" -ForegroundColor $color
    }

    Write-Host ""
    $selection = Read-Host "  Enter selection (1-$($Options.Count)) [default: $($Default + 1)]"

    if ([string]::IsNullOrWhiteSpace($selection)) {
        return $Default
    }

    $index = [int]$selection - 1
    if ($index -ge 0 -and $index -lt $Options.Count) {
        return $index
    }

    return $Default
}

function Get-BumpedVersion {
    param (
        [string]$CurrentVersion,
        [string]$BumpType
    )

    $parts = $CurrentVersion.Split(".")
    $major = [int]$parts[0]
    $minor = [int]$parts[1]
    $patch = [int]$parts[2]

    switch ($BumpType) {
        "patch" { $patch++ }
        "minor" { $minor++; $patch = 0 }
        "major" { $major++; $minor = 0; $patch = 0 }
    }

    return "$major.$minor.$patch"
}

function Update-PackageJsonVersion {
    param (
        [string]$PackagePath,
        [string]$Version
    )

    $packageJsonPath = Join-Path $PackagePath "package.json"

    if (-not (Test-Path $packageJsonPath)) {
        return $false
    }

    $content = Get-Content $packageJsonPath -Raw | ConvertFrom-Json
    $content.version = $Version
    $content | ConvertTo-Json -Depth 10 | Set-Content $packageJsonPath -Encoding UTF8

    return $true
}

function Test-PackageExistsInRegistry {
    param (
        [string]$PackageName,
        [string]$Version,
        [string]$Registry
    )

    try {
        $result = npm view "${PackageName}@${Version}" version --registry $Registry 2>&1
        return ($LASTEXITCODE -eq 0 -and $result -eq $Version)
    } catch {
        return $false
    }
}

# ============================================================================
# 主程式
# ============================================================================

$ErrorActionPreference = "Stop"
$projectRoot = $PSScriptRoot

Write-Host ""
Write-Host "=======================================" -ForegroundColor Magenta
Write-Host "  📦 Release to GitHub Package Registry" -ForegroundColor Magenta
Write-Host "=======================================" -ForegroundColor Magenta

# 讀取 versions.json
$versionsFile = Join-Path $projectRoot "versions.json"
if (-not (Test-Path $versionsFile)) {
    Write-Host "❌ versions.json not found" -ForegroundColor Red
    exit 1
}

$versionsJson = Get-Content $versionsFile -Raw | ConvertFrom-Json
$registry = $versionsJson.registry

Write-Host ""
Write-Host "📍 Registry: $registry" -ForegroundColor Cyan

# 收集 enabled packages
$enabledPackages = @()
foreach ($pkgEntry in $versionsJson.packages.PSObject.Properties) {
    $pkgConfig = $pkgEntry.Value
    if ($pkgConfig.enabled) {
        $enabledPackages += @{
            Key = $pkgEntry.Name
            PackageName = $pkgConfig.packageName
            Version = $pkgConfig.version
            Path = $pkgConfig.path
            DistPath = $pkgConfig.distPath
            BuildTarget = $pkgConfig.buildTarget
        }
    }
}

Write-Host "📦 Enabled packages: $($enabledPackages.Count)" -ForegroundColor Cyan

# 如果沒有指定 BumpType，進入互動模式
if (-not $BumpType) {
    # 顯示當前版本
    Write-Host ""
    Write-Host "  Current versions:" -ForegroundColor Yellow
    foreach ($pkg in $enabledPackages) {
        Write-Host "    $($pkg.PackageName): $($pkg.Version)" -ForegroundColor White
    }

    # 選擇 BumpType
    $bumpOptions = @(
        "none (使用 versions.json 中的版本)",
        "patch ($($enabledPackages[0].Version) -> $(Get-BumpedVersion $enabledPackages[0].Version 'patch'))",
        "minor ($($enabledPackages[0].Version) -> $(Get-BumpedVersion $enabledPackages[0].Version 'minor'))",
        "major ($($enabledPackages[0].Version) -> $(Get-BumpedVersion $enabledPackages[0].Version 'major'))"
    )
    $bumpIndex = Show-Menu -Title "Select version bump:" -Options $bumpOptions -Default 1
    $BumpType = switch ($bumpIndex) {
        0 { "none" }
        1 { "patch" }
        2 { "minor" }
        3 { "major" }
    }

    # 確認 SkipGit
    $gitOptions = @("Yes - commit and tag", "No - skip git operations")
    $gitIndex = Show-Menu -Title "Create git commit and tag?" -Options $gitOptions -Default 0
    $SkipGit = ($gitIndex -eq 1)

    # 顯示確認
    $newVersion = if ($BumpType -eq "none") { $enabledPackages[0].Version } else { Get-BumpedVersion $enabledPackages[0].Version $BumpType }
    Write-Host ""
    Write-Host "  ─────────────────────────────" -ForegroundColor Gray
    Write-Host "  📋 Configuration:" -ForegroundColor Cyan
    Write-Host "     Version:   $($enabledPackages[0].Version) -> $newVersion" -ForegroundColor White
    Write-Host "     Git:       $(if ($SkipGit) { 'skip' } else { 'commit & tag' })" -ForegroundColor White
    Write-Host "  ─────────────────────────────" -ForegroundColor Gray
    Write-Host ""

    $confirm = Read-Host "  Proceed? (Y/n)"
    if ($confirm -eq "n" -or $confirm -eq "N") {
        Write-Host ""
        Write-Host "  ❌ Cancelled" -ForegroundColor Red
        exit 0
    }
}

Write-Host ""

# ============================================================
# STEP 1: 認證 GitHub Package Registry
# ============================================================
Write-Host "=======================================" -ForegroundColor Cyan
Write-Host "STEP 1: Authenticate" -ForegroundColor Cyan
Write-Host "=======================================" -ForegroundColor Cyan
Write-Host ""

$env:NODE_AUTH_TOKEN = $(gh auth token)
$npmWhoami = npm whoami --registry=$registry 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Not logged in to GitHub Package Registry" -ForegroundColor Red
    Write-Host "💡 Run: gh auth login --scopes `"repo,write:packages,read:packages`"" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Logged in as: $npmWhoami" -ForegroundColor Green
Write-Host ""

# ============================================================
# STEP 2: 更新版本
# ============================================================
if ($BumpType -and $BumpType -ne "none") {
    Write-Host "=======================================" -ForegroundColor Cyan
    Write-Host "STEP 2: Update Versions" -ForegroundColor Cyan
    Write-Host "=======================================" -ForegroundColor Cyan
    Write-Host ""

    $newVersion = Get-BumpedVersion $enabledPackages[0].Version $BumpType

    # 更新 versions.json
    foreach ($pkg in $enabledPackages) {
        $versionsJson.packages.($pkg.Key).version = $newVersion
    }
    $versionsJson | ConvertTo-Json -Depth 10 | Set-Content $versionsFile -Encoding UTF8
    Write-Host "✅ Updated versions.json -> $newVersion" -ForegroundColor Green

    # 更新各 package.json
    foreach ($pkg in $enabledPackages) {
        $pkgPath = Join-Path $projectRoot $pkg.Path
        if (Update-PackageJsonVersion -PackagePath $pkgPath -Version $newVersion) {
            Write-Host "✅ Updated $($pkg.PackageName) -> $newVersion" -ForegroundColor Green
        }
        $pkg.Version = $newVersion
    }

    Write-Host ""
} else {
    $newVersion = $enabledPackages[0].Version
}

# ============================================================
# STEP 3: Build
# ============================================================
Write-Host "=======================================" -ForegroundColor Cyan
Write-Host "STEP 3: Build Packages" -ForegroundColor Cyan
Write-Host "=======================================" -ForegroundColor Cyan
Write-Host ""

$buildFailed = $false

foreach ($pkg in $enabledPackages) {
    Write-Host "🏗️  Building $($pkg.PackageName)..." -ForegroundColor Yellow

    # 清理舊的建置結果
    $distFullPath = Join-Path $projectRoot $pkg.DistPath
    if (Test-Path $distFullPath) {
        Remove-Item -Path $distFullPath -Recurse -Force -ErrorAction SilentlyContinue
    }

    # 執行建置
    npx nx run $pkg.BuildTarget

    if ($LASTEXITCODE -eq 0) {
        Write-Host "   ✅ Build successful" -ForegroundColor Green
    } else {
        Write-Host "   ❌ Build failed" -ForegroundColor Red
        $buildFailed = $true
    }
    Write-Host ""
}

if ($buildFailed) {
    Write-Host "❌ Build failed. Aborting release." -ForegroundColor Red
    exit 1
}

# ============================================================
# STEP 4: Publish
# ============================================================
Write-Host "=======================================" -ForegroundColor Cyan
Write-Host "STEP 4: Publish to Registry" -ForegroundColor Cyan
Write-Host "=======================================" -ForegroundColor Cyan
Write-Host ""

$publishResults = @{
    Success = @()
    Failed = @()
    Skipped = @()
}

foreach ($pkg in $enabledPackages) {
    Write-Host "🚀 Publishing $($pkg.PackageName)@$($pkg.Version)..." -ForegroundColor Yellow

    # 檢查是否已存在
    if (Test-PackageExistsInRegistry -PackageName $pkg.PackageName -Version $pkg.Version -Registry $registry) {
        Write-Host "   ⏭️  Already exists in registry, skipping" -ForegroundColor Yellow
        $publishResults.Skipped += $pkg
        Write-Host ""
        continue
    }

    # 發布
    $distFullPath = Join-Path $projectRoot $pkg.DistPath
    Push-Location $distFullPath

    npm publish --registry $registry

    if ($LASTEXITCODE -eq 0) {
        Write-Host "   ✅ Published successfully" -ForegroundColor Green
        $publishResults.Success += $pkg
    } else {
        Write-Host "   ❌ Publish failed" -ForegroundColor Red
        $publishResults.Failed += $pkg
    }

    Pop-Location
    Write-Host ""
}

# ============================================================
# STEP 5: Git Commit & Tag
# ============================================================
if (-not $SkipGit -and ($publishResults.Success.Count -gt 0 -or ($BumpType -and $BumpType -ne "none"))) {
    Write-Host "=======================================" -ForegroundColor Cyan
    Write-Host "STEP 5: Git Commit & Tag" -ForegroundColor Cyan
    Write-Host "=======================================" -ForegroundColor Cyan
    Write-Host ""

    $gitStatus = git status --porcelain 2>&1
    if ($gitStatus) {
        $commitMessage = "chore: release v$newVersion"
        git add .
        git commit -m $commitMessage

        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Git commit successful" -ForegroundColor Green
        }
    }

    # 建立 tag
    $tagName = "v$newVersion"
    $existingTag = git tag -l $tagName
    if (-not $existingTag) {
        git tag $tagName
        Write-Host "✅ Created tag: $tagName" -ForegroundColor Green
    } else {
        Write-Host "⏭️  Tag already exists: $tagName" -ForegroundColor Yellow
    }

    Write-Host ""
}

# ============================================================
# 完成報告
# ============================================================
Write-Host "=======================================" -ForegroundColor Magenta
Write-Host "🎉 Release Complete!" -ForegroundColor Magenta
Write-Host "=======================================" -ForegroundColor Magenta
Write-Host ""
Write-Host "📊 Results:" -ForegroundColor Cyan
Write-Host "   ✅ Published: $($publishResults.Success.Count)" -ForegroundColor Green
Write-Host "   ⏭️  Skipped:   $($publishResults.Skipped.Count)" -ForegroundColor Yellow
Write-Host "   ❌ Failed:    $($publishResults.Failed.Count)" -ForegroundColor Red
Write-Host ""

if ($publishResults.Success.Count -gt 0) {
    Write-Host "✅ Successfully published:" -ForegroundColor Green
    foreach ($pkg in $publishResults.Success) {
        Write-Host "   $($pkg.PackageName)@$($pkg.Version)" -ForegroundColor White
    }
    Write-Host ""
}

if (-not $SkipGit) {
    Write-Host "💡 Next steps:" -ForegroundColor Yellow
    Write-Host "   git push" -ForegroundColor Gray
    Write-Host "   git push origin --tags" -ForegroundColor Gray
    Write-Host ""
}

if ($publishResults.Failed.Count -gt 0) {
    exit 1
}
