import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

// ABP Core
import { provideAbpCore, withOptions } from '@abp/ng.core';
import { provideAbpOAuth } from '@abp/ng.oauth';

// Environment and locale
import { environment } from '../environments/environment';
import { registerLocaleForEsBuild } from '@abp/ng.core/locale';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),

    // ABP Core 配置
    provideAbpCore(
      withOptions({
        environment,
        registerLocaleFn: registerLocaleForEsBuild(),
        sendNullsAsQueryParam: false,
        skipGetAppConfiguration: false,
      })
    ),

    // ABP OAuth 配置
    provideAbpOAuth(),

    // 設定預設語言
    { provide: LOCALE_ID, useValue: 'zh-Hant' },
  ],
};
