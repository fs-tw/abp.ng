// #region default language
// 参考：https://ng-alain.com/docs/i18n
import { LOCALE_ID } from '@angular/core';
import { default as ngLang } from '@angular/common/locales/zh';
import { DELON_LOCALE, zh_TW as delonLang } from '@delon/theme';
import { zhCN as dateLang } from 'date-fns/locale';
import { NZ_DATE_LOCALE, NZ_I18N, zh_TW as zorroLang } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
export const LANG = {
  abbr: 'zh',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang,
};
export const LANG_PROVIDES = [
  { provide: LOCALE_ID, useValue: LANG.abbr },
  { provide: NZ_I18N, useValue: LANG.zorro },
  { provide: NZ_DATE_LOCALE, useValue: LANG.date },
  { provide: DELON_LOCALE, useValue: LANG.delon },
];
// register angular
registerLocaleData(LANG.ng, LANG.abbr);
// #endregion