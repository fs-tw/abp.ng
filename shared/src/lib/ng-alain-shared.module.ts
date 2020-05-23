import { NgModule, LOCALE_ID, ModuleWithProviders } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { SharedModule } from './ng-alain/shared.module';
import { default as ngLang } from '@angular/common/locales/zh';
import { NZ_I18N, zh_TW as zorroLang } from 'ng-zorro-antd';
import { DELON_LOCALE, zh_TW as delonLang } from '@delon/theme';
import { registerLocaleData } from '@angular/common';
import { ThemeCoreModule } from '@fs/theme.core';

@NgModule({
  imports: [
    ThemeCoreModule,//fs,abp
    ThemeSharedModule,//abp
    SharedModule,//alain
  ],
  exports: [SharedModule,ThemeCoreModule, ThemeSharedModule]
})
export class NgAlainSharedModule {

}
