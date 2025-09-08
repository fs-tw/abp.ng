import { bootstrapApplication } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeZhHant from '@angular/common/locales/zh-Hant';
import localeZhHantExtra from '@angular/common/locales/extra/zh-Hant';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// 註冊本地化資料
registerLocaleData(localeZhHant, 'zh-Hant', localeZhHantExtra);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
