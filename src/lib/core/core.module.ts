import { NgModule, Optional, SkipSelf, ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { throwIfAlreadyLoaded } from '@fs/theme.core';
import { DelonModule } from './delon/delon.module';
import { registerLocaleData } from '@angular/common';
import { default as ngLang } from '@angular/common/locales/zh-Hant';
import { NZ_I18N, zh_TW as zorroLang } from 'ng-zorro-antd';
import { DELON_LOCALE, zh_TW as delonLang } from '@delon/theme';

const LANG = {
  abbr: 'zh',
  ng: ngLang,
  zorro: zorroLang,
  delon: delonLang,
};
registerLocaleData(LANG.ng, LANG.abbr);
const LANG_PROVIDES = [
  { provide: LOCALE_ID, useValue: LANG.abbr },
  { provide: NZ_I18N, useValue: LANG.zorro },
  { provide: DELON_LOCALE, useValue: LANG.delon },
];


// @dynamic
@NgModule({
  imports: [
    DelonModule.forRoot()
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...LANG_PROVIDES
      ]
    };
  }
}
