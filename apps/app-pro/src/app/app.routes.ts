import {
  Routes,
  provideRouter,
  withComponentInputBinding
} from '@angular/router';
import { ReplaceableComponentsService, RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eThemeLeptonXComponents } from '@volosoft/abp.ng.theme.lepton-x';
import { NavbarRoutesComponent } from './shared/components/navbar-routes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
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
  {
    path: 'users-v7',
    loadChildren: () =>
      import('./features/users-v7/users-v7.routes')
  }
];

export const APP_ROUTES_PROVIDER = [
  provideRouter(routes, withComponentInputBinding()),
  {
    provide: APP_INITIALIZER,
    useFactory: configureRoutes,
    deps: [RoutesService],
    multi: true,
  },
  {
    provide: APP_INITIALIZER,
    useFactory: replaceableComponent,
    deps: [ReplaceableComponentsService],
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
        order: 0,
        layout: eLayoutType.application,
      },
      {
        path: '/users-v7',
        name: 'Demo',
        iconClass: 'fas fa-chart-line',
        order: 1,
        layout: eLayoutType.application,
        //requiredPolicy: 'Further.Dashboard.Host  || Further.Dashboard.Tenant',
      },
    ]);
  };
}

function replaceableComponent(replaceableComponentsService: ReplaceableComponentsService) {
  return () => {
    replaceableComponentsService.add({
      key: eThemeLeptonXComponents.Routes,
      component: NavbarRoutesComponent,
    });
  }
}
