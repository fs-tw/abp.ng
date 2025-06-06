# 取得專案根目錄
$projectRoot = (Get-Item $PSScriptRoot).Parent.FullName

# 設定 NODE_AUTH_TOKEN 環境變數
$env:NODE_AUTH_TOKEN = $(gh auth token)

# 檢查 GitHub Package Registry 的登入狀態
Write-Host "正在檢查 GitHub Package Registry 登入狀態..."
$npmWhoami = npm whoami --registry=https://npm.pkg.github.com

if ($LASTEXITCODE -eq 0) {
    Write-Host "成功登入為: $npmWhoami" -ForegroundColor Green

    # 清理舊的建置結果
    Write-Host "`n清理舊的建置結果..." -ForegroundColor Cyan
    Remove-Item -Path "$projectRoot\dist\tools\schematics" -Recurse -Force -ErrorAction SilentlyContinue
     
    # 更新版本號
    Write-Host "`n更新版本號..." -ForegroundColor Cyan
    nx release

    # 執行建置
    Write-Host "`n開始建置 schematics..." -ForegroundColor Cyan
    nx build schematics    

    # 執行發布
    Write-Host "`n開始發布 schematics..." -ForegroundColor Cyan
    npx nx run schematics:nx-release-publish
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`n發布成功！" -ForegroundColor Green
    }
    else {
        Write-Host "`n發布失敗，請檢查錯誤訊息" -ForegroundColor Red
    }    
}
else {
    Write-Host "登入失敗，請確認 GitHub CLI 是否已正確登入" -ForegroundColor Red
    Write-Host "您可以使用 'gh auth login' 來登入 GitHub" -ForegroundColor Yellow
    Write-Host "gh auth login --scopes `"repo,write:packages,read:packages,delete:packages`"" -ForegroundColor Cyan    
    exit 1
}