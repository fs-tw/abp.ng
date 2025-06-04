# 確保在正確目錄中執行
Set-Location (Split-Path $PSScriptRoot -Parent)

# 執行 nx generate 命令
npx nx generate @fs-tw/schematics:application `
    --name=dev-app `
    --directory=apps/dev-app `
    --template=app `
    --no-interactive