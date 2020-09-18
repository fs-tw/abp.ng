# Reference
### [Abp GitHub](https://github.com/abpframework/abp)   
### [ng-alain GitHub](https://ng-alain.github.io/ng-alain/#/dashboard/v1)  
### [Nx document](https://nx.dev)


# 1.Create Backend Project
Make sure abp cli  already updated.
``` cmd
abp new MyCompanyName.MyProjectName -t app --ui none
Execute DbMigrator to generate Database (Set as statup porject at visual studio)
Execute HttpApi.Host to host web (Set as statup porject at visual studio)
```
 See [abp document:ABP CLI](https://docs.abp.io/en/abp/latest) to get more information.
# 2.Angular applications

``` javascript
//prepare package
npm i
nx workspace-schematic merge-config

//start up angular
ng serve tmpl.ng-alain-app
//PS.environment.ts url must match your backend url.
 
```

# How to work with abp'sourcecode
in this repository , i try to create monorepo by [Nx](https://nx.dev) for debug all sourcecode together  , include:
- packages folder put abp's all [libary](https://github.com/yinchang0626/abp.ng.packages) 
- themes folder put dev default(abp) theme and other customization themes(ng-alain) 
- apps folder put angular application projectType for every theme
- libs folder put extend abp's packages or other libray, you can create alternative component or router for abp's package
- tsconfig.json:set all package path to sourcecode unless  @abp/ng.theme.shared,if not will get error from @abp/ng.theme.shared

# Application

- Origin Source:[https://github.com/ng-alain/ng-alain](<https://github.com/ng-alain/ng-alain>)
- ng-alain-app  
<p align="center"><img src="https://raw.githubusercontent.com/yinchang0626/abp.ng/develop/docs/ng-alain-app.png" width="900"></p>  


- Origin Source:[https://github.com/abpframework/abp](<https://github.com/abpframework/abp>)
- dev-app:  
[abp angular application](<https://docs.abp.io/en/abp/latest>)


# Note
 
``` cmd
nx workspace-schematic merge-config
```
this command will read all `config folder`'s json and Create/Update `angular.json`,`tsconfig.json`,`tsconfig.prod.json`,`nx.json`.

##  Generate an application

TODO


## Generate a library

TODO


## Development server

Run `ng serve tmpl.ng-alain-app` or `ng serve tmpl.dev-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `run npm build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

TODO

## Running end-to-end tests

TODO
