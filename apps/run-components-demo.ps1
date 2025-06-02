# 生成元件
Write-Host "正在生成元件..." -ForegroundColor Green
npx nx generate @fs-tw/schematics:entity `
    --name=users/user `
    --project=dev-app `
    --createFormType=IdentityUserCreateDto `
    --directory=features `
    --url=https://localhost:44300/api/abp/api-definition?IncludeTypes=true `
    --editFormType=IdentityUserUpdateDto `
    --entityType=IdentityUserDto `
    --entityServiceType=IdentityUserService `
    --listInputType=GetIdentityUsersInput `
    --no-interactive

Write-Host "`n元件生成完成！" -ForegroundColor Green