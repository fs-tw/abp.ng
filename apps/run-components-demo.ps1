# 生成元件
Write-Host "正在生成元件..." -ForegroundColor Green
npx nx generate @fs-tw/schematics:components `
    --componentType=entity `
    --name=identity/user-entity `
    --project=dev-app `
    --directory=features `
    --url=https://localhost:44300/api/abp/api-definition?IncludeTypes=true `
    --entityServiceType=IdentityUserService `
    --entityType=IdentityUserDto `
    --listInputType=GetIdentityUsersInput `
    --createFormType=IdentityUserCreateDto `
    --editFormType=IdentityUserUpdateDto `
    --no-interactive

Write-Host "`n元件生成完成！" -ForegroundColor Green