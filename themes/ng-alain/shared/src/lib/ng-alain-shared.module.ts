import { CoreModule, LazyLoadService } from '@abp/ng.core';
import { NgModule, LOCALE_ID, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { SharedModule } from '@fs/ng-alain';
import { default as ngLang } from '@angular/common/locales/zh';
import { NZ_I18N, zh_CN as zorroLang, NzModalModule } from 'ng-zorro-antd';
import { ALAIN_I18N_TOKEN, DELON_LOCALE, zh_CN as delonLang } from '@delon/theme';
import { registerLocaleData } from '@angular/common';
import { I18NService } from '@fs/ng-alain';
import { StartupService } from '@fs/ng-alain';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SimpleInterceptor } from '@delon/auth';
import { DefaultInterceptor } from '@fs/ng-alain';
export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}
const APPINIT_PROVIDES = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true,
  },
];

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

const I18NSERVICE_PROVIDES = [{ provide: ALAIN_I18N_TOKEN, useClass: I18NService, multi: false }];
const INTERCEPTOR_PROVIDES = [
  //{ provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
  //{ provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
];
export function I18nHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/tmp/i18n/`, '.json');
}

const I18NSERVICE_MODULES = [
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: I18nHttpLoaderFactory,
      deps: [HttpClient],
    },
  }),
];
const GLOBAL_THIRD_MODULES = [];
import { JsonSchemaModule } from '@fs/ng-alain';
import { ConfirmationService } from './services/confirmation.service';
import { ToasterService } from './services/toaster.service';
import { ConfirmationService as AbpConfirmationService, ToasterService as AbpToasterService } from '@abp/ng.theme.shared';

const FORM_MODULES = [JsonSchemaModule];
@NgModule({
  declarations: [
  ],
  imports: [
    CoreModule,
    CommonModule,
    ThemeSharedModule,//abp
    SharedModule,//alain
    //...I18NSERVICE_MODULES,
    ...GLOBAL_THIRD_MODULES,
    ...FORM_MODULES
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
        ...APPINIT_PROVIDES,
        ...LANG_PROVIDES,
        ...INTERCEPTOR_PROVIDES,
        ...I18NSERVICE_PROVIDES
      ]
    };
  }

}
