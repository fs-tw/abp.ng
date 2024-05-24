import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideApp } from './app.provide';
import { APP_ROUTES_PROVIDER } from './app.routes';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_TW } from 'ng-zorro-antd/i18n';
import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  provideAngularQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental';

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    APP_ROUTES_PROVIDER,
    provideApp(),

    { provide: NZ_I18N, useValue: zh_TW },
    importProvidersFrom(NzIconModule.forRoot(icons)),
    provideAngularQuery(new QueryClient()),
  ],
};
