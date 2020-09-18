# [Abp](https://github.com/abpframework/abp)+[ng-alain](https://ng-alain.github.io/ng-alain/#/dashboard/v1) by [Nx](https://nx.dev)
# abp's ng-packs sourcecode import
- git submodule update --init --recursive
# Backend prepare
Make sure abp cli  already updated.
``` cmd
abp new MyCompanyName.MyProjectName -t app --ui none
Execute DbMigrator to generate Database (Set as statup porject at visual studio)
Execute HttpApi.Host to host web (Set as statup porject at visual studio)
```
# Frontend build
``` javascript
npm i
npm run build
ng serve dev-app (for [abp](https://github.com/abpframework/abp) theme)
ng serve ng-alain-app (for [ng-alain](https://ng-alain.github.io/ng-alain/#/dashboard/v1) theme)
```


# How to work with abp'sourcecode
in this repository , i try to create monorepo by [Nx](https://nx.dev) for debug all sourcecode together  , include:
- packages folder put abp's all [libary](https://github.com/yinchang0626/abp.ng.packages) 
- themes folder put dev default(abp) theme and other customization themes(ng-alain ngx-admin..) 
- apps folder put angular application projectType for every theme
- libs folder put extend abp's packages or other libray, you can create alternative component or router for abp's package
- tsconfig.json i set all package path to sourcecode unless  @abp/ng.theme.shared,if not will get error from @abp/ng.theme.shared

# Application
- ng-alain-app
<p align="center"><img src="https://raw.githubusercontent.com/yinchang0626/abp.ng/develop/docs/ng-alain-app.png" width="900"></p>


This project was generated using [Nx](https://nx.dev).
