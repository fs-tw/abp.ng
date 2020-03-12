# [Abp](https://github.com/abpframework/abp)+[ng-alain](https://ng-alain.github.io/ng-alain/#/dashboard/v1)+[ngx-admin](https://github.com/akveo/ngx-admin) by [Nx](https://nx.dev)
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
ng build abp.core
ng build abp.theme-shared
ng serve dev-app (for [abp](https://github.com/abpframework/abp) theme)
ng serve ng-alain-app (for [ng-alain](https://ng-alain.github.io/ng-alain/#/dashboard/v1) theme)
ng serve ngx-admin-app (for [ngx-admin](https://github.com/akveo/ngx-admin) theme)
```


# How to work with abp'sourcecode
in this repository , i try to create monorepo by [Nx](https://nx.dev) for debug all sourcecode together  , include:
- packages folder put abp's all [libary](https://github.com/yinchang0626/abp.ng.packages) 
- themes folder put dev default(abp) theme and other customization themes(ng-alain ngx-admin..) 
- apps folder put angular application projectType for every theme
- libs folder put extend abp's packages or other libray, you can create alternative component or router for abp's package
- tsconfig.json i set all package path to sourcecode unless  @abp/ng.theme.shared,if not will get error from @abp/ng.theme.shared

# Application
- ngx-admin-app
<p align="center"><img src="https://raw.githubusercontent.com/yinchang0626/abp.ng/develop/docs/ngx-admin-app.png" width="900"></p>
- ng-alain-app
<p align="center"><img src="https://raw.githubusercontent.com/yinchang0626/abp.ng/develop/docs/ng-alain-app.png" width="900"></p>


This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>




🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@abp/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
