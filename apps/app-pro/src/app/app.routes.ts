import {
  Routes,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('./demo/demo.routes').then((m) => m.default),
  },
  {
    path: 'basic',
    loadChildren: () =>
      import('./basic/basic.routes').then((m) => m.default),
  },
  {
    path: 'tree',
    loadChildren: () =>
      import('./tree/tree.routes').then((m) => m.default),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('@volo/abp.ng.account/public').then((m) =>
        m.AccountPublicModule.forLazy()
      ),
  },
  {
    path: 'gdpr',
    loadChildren: () =>
      import('@volo/abp.ng.gdpr').then((m) => m.GdprModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () =>
      import('@volo/abp.ng.identity').then((m) => m.IdentityModule.forLazy()),
  },
  {
    path: 'language-management',
    loadChildren: () =>
      import('@volo/abp.ng.language-management').then((m) =>
        m.LanguageManagementModule.forLazy()
      ),
  },
  {
    path: 'saas',
    loadChildren: () =>
      import('@volo/abp.ng.saas').then((m) => m.SaasModule.forLazy()),
  },
  {
    path: 'audit-logs',
    loadChildren: () =>
      import('@volo/abp.ng.audit-logging').then((m) =>
        m.AuditLoggingModule.forLazy()
      ),
  },
  {
    path: 'openiddict',
    loadChildren: () =>
      import('@volo/abp.ng.openiddictpro').then((m) =>
        m.OpeniddictproModule.forLazy()
      ),
  },
  {
    path: 'text-template-management',
    loadChildren: () =>
      import('@volo/abp.ng.text-template-management').then((m) =>
        m.TextTemplateManagementModule.forLazy()
      ),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then((m) =>
        m.SettingManagementModule.forLazy()
      ),
  },
  {
    path: 'gdpr-cookie-consent',
    loadChildren: () =>
      import('./gdpr-cookie-consent/gdpr-cookie-consent.module').then(
        (m) => m.GdprCookieConsentModule
      ),
  },
];

export const APP_ROUTES_PROVIDER = [
  provideRouter(routes, withComponentInputBinding()),
  {
    provide: APP_INITIALIZER,
    useFactory: configureRoutes,
    deps: [RoutesService],
    multi: true,
  },
];

export function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        path: '/',
        name: 'Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/demo',
        name: 'Demo',
        iconClass: 'fas fa-chart-line',
        order: 2,
        layout: eLayoutType.application,
        //requiredPolicy: 'Further.Dashboard.Host  || Further.Dashboard.Tenant',
      },
    ]);
  };
}
