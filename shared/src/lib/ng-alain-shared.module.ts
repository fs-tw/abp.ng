import { CoreModule } from '@abp/ng.core';
import { NgModule, LOCALE_ID, ModuleWithProviders } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { SharedModule } from '@fs/ng-alain';
import { default as ngLang } from '@angular/common/locales/zh';
import { NZ_I18N, zh_TW as zorroLang } from 'ng-zorro-antd';
import { DELON_LOCALE, zh_TW as delonLang } from '@delon/theme';
import { registerLocaleData } from '@angular/common';


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

@NgModule({
  declarations: [
  ],
  imports: [
    CoreModule,//abp
    ThemeSharedModule,//abp
    SharedModule,//alain
  ],
  exports: [SharedModule, ThemeSharedModule],
  entryComponents: [
  ]
})
export class NgAlainSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgAlainSharedModule,
      providers: [
        ...LANG_PROVIDES
      ]
    };
  }

}
