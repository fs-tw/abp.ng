// tslint:disable: no-duplicate-imports
import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, LOCALE_ID, NgModule, ModuleWithProviders } from '@angular/core';

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

// #region i18n services
import { I18NService } from '@fs/theme.ng-alain/core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// 加载i18n语言文件
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

const I18NSERVICE_PROVIDES = [
  { provide: ALAIN_I18N_TOKEN, useClass: I18NService, multi: false }
];

// #endregion

// #region global third module

const GLOBAL_THIRD_MODULES = [
];

// #endregion

// #region JSON Schema form (using @delon/form)
import { JsonSchemaModule } from '@fs/theme.ng-alain/shared';
const FORM_MODULES = [JsonSchemaModule];
// #endregion

// #region Http Interceptors
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { DefaultInterceptor } from '@fs/theme.ng-alain/core';
// import { SimpleInterceptor } from '@delon/auth';
const INTERCEPTOR_PROVIDES = [
  // { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
  // { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
];
// #endregion

// #region Startup Service
import { StartupService } from '@fs/theme.ng-alain/core';
export function StartupServiceFactory(startupService: StartupService) {
  let fun = () => startupService.load();
  return fun;
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
// #endregion

import { CoreModule } from '@fs/theme.ng-alain/core';
import { GlobalConfigModule } from './global-config.module';
//import { LayoutModule } from './layout/layout.module';
import { STWidgetModule } from '@fs/theme.ng-alain/shared';


// #endregion

// #region global third module
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgAlainSharedModule } from '@fs/theme.ng-alain/shared';
import { NgAlainBasicModule } from '@fs/theme.ng-alain/basic';
import { INITIAL_PROVIDERS, INITIAL_THEME_CORE_PROVIDERS, Options, ThemeCoreModule } from '@fs/theme.core';
import * as _ from 'lodash';
import { NgxValidateCoreModule } from '@ngx-validate/core';

@NgModule({
  imports: [
    NgxValidateCoreModule.forRoot({
      //targetSelector: 'nz-input-group',
      blueprints: {
        creditCard: 'AbpValidation::ThisFieldIsNotAValidCreditCardNumber.',
        email: 'AbpValidation::ThisFieldIsNotAValidEmailAddress.',
        invalid: 'AbpValidation::ThisFieldIsNotValid.',
        max: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        maxlength:
          'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
        min: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        minlength:
          'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
        ngbDate: 'AbpValidation::ThisFieldIsNotValid.',
        passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
        range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        required: 'AbpValidation::ThisFieldIsRequired.',
        url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
      },
      errorTemplate: ValidationErrorComponent,
    }),
    //ThemeCoreModule.forRoot(),
    NgAlainSharedModule.forRoot(),
    NgAlainBasicModule.forRoot(),
  ],
})
export class RootModule { }

// #endregion
import { AlainConfigService } from '@delon/util';
import { THEMECORE_OPTIONS } from '@fs/theme.core';
import { ValidationErrorComponent } from '@fs/theme.ng-alain/basic';

@NgModule({
  imports: [
    GlobalConfigModule.forRoot(),
    CoreModule,
    //LayoutModule,
    STWidgetModule,
    RootModule,
    // ...I18NSERVICE_MODULES,
    ...GLOBAL_THIRD_MODULES,
    ...FORM_MODULES,
  ],
  providers: [
    AlainConfigService,//Issue: https://github.com/ng-alain/ng-alain/issues/1624
    ...LANG_PROVIDES,
    // ...INTERCEPTOR_PROVIDES,
    // ...I18NSERVICE_PROVIDES,
    // ...APPINIT_PROVIDES
  ],
})
export class ThemeNgAlainModule {
  static forRoot(options: Options = { loadCodes: false }): ModuleWithProviders<ThemeNgAlainModule> {
    return {
      ngModule: ThemeNgAlainModule,
      providers: [
        { provide: THEMECORE_OPTIONS, useValue: options }
      ],
    };
  }
}
