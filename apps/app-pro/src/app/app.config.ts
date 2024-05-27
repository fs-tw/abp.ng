import { provideAnimations } from '@angular/platform-browser/animations';
import {
  ApplicationConfig,
  LOCALE_ID,
  importProvidersFrom,
} from '@angular/core';
import { provideApp } from './app.provide';
import { APP_ROUTES_PROVIDER } from './app.routes';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { zh_TW } from 'ng-zorro-antd/i18n';
import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

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
    {
      provide: NZ_I18N,
      useFactory: (localId: {
        localizationService: { latestLang: string };
      }) => {
        switch (localId.localizationService.latestLang) {
          case 'en':
            return en_US;
          case 'zh_Hant':
            return zh_TW;
          default:
            return zh_TW;
        }
      },
      deps: [LOCALE_ID],
    },
    importProvidersFrom(NzIconModule.forRoot(icons)),
  ],
};
