// tslint:disable: no-duplicate-imports
import { LOCALE_ID, NgModule, ModuleWithProviders } from '@angular/core';

// #region default language
// 参考：https://ng-alain.com/docs/i18n
import { default as ngLang } from '@angular/common/locales/zh';
import { DELON_LOCALE, zh_TW as delonLang } from '@delon/theme';
import { zhCN as dateLang } from 'date-fns/locale';
import { NZ_DATE_LOCALE, NZ_I18N, zh_TW as zorroLang } from 'ng-zorro-antd/i18n';
const LANG = {
  abbr: 'zh',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang,
};
// register angular
import { registerLocaleData } from '@angular/common';
registerLocaleData(LANG.ng, LANG.abbr);
const LANG_PROVIDES = [
  { provide: LOCALE_ID, useValue: LANG.abbr },
  { provide: NZ_I18N, useValue: LANG.zorro },
  { provide: NZ_DATE_LOCALE, useValue: LANG.date },
  { provide: DELON_LOCALE, useValue: LANG.delon },
];
// #endregion



import { CoreModule } from '@fs/theme.ng-alain/core';
import { RootModule } from './root/root.module';

@NgModule({
  imports: [
    CoreModule,
    RootModule
  ],
  providers: [
    ...LANG_PROVIDES
  ],
})
export class ThemeNgAlainModule {
  static forRoot(): ModuleWithProviders<ThemeNgAlainModule> {
    return {
      ngModule: ThemeNgAlainModule,
      providers: [
      ],
    };
  }
}
