import { NgModule, Optional, SkipSelf, ModuleWithProviders, APP_INITIALIZER, LOCALE_ID, InjectionToken } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { DelonModule } from './delon/delon.module';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { registerLocaleData } from '@angular/common';
import { default as ngLang } from '@angular/common/locales/zh';
import { NZ_I18N, zh_TW as zorroLang } from 'ng-zorro-antd';
import { DELON_LOCALE, zh_TW as delonLang } from '@delon/theme';
import { ThemeCoreModule  } from '@fs/theme-core';

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
    ThemeCoreModule,
    ThemeSharedModule.forRoot(),
    DelonModule.forRoot()
  ],
  exports: [
    ThemeCoreModule,
    DelonModule
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
