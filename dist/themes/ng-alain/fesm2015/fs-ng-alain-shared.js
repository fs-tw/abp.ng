import { CoreModule } from '@abp/ng.core';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { StartupService, I18NService, JsonSchemaModule, SharedModule } from '@fs/ng-alain';
import ngLang from '@angular/common/locales/zh';
import { zh_CN, NZ_I18N } from 'ng-zorro-antd';
import { zh_CN as zh_CN$1, DELON_LOCALE, ALAIN_I18N_TOKEN } from '@delon/theme';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-alain-shared.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} startupService
 * @return {?}
 */
function StartupServiceFactory(startupService) {
    /** @type {?} */
    const startupServiceLoad = (/**
     * @return {?}
     */
    () => startupService.load());
    return startupServiceLoad;
}
/** @type {?} */
const APPINIT_PROVIDES = [
    StartupService,
    {
        provide: APP_INITIALIZER,
        useFactory: StartupServiceFactory,
        deps: [StartupService],
        multi: true,
    },
];
/** @type {?} */
const LANG = {
    abbr: 'zh',
    ng: ngLang,
    zorro: zh_CN,
    delon: zh_CN$1,
};
registerLocaleData(LANG.ng, LANG.abbr);
const ɵ0 = LANG.abbr, ɵ1 = LANG.zorro, ɵ2 = LANG.delon;
/** @type {?} */
const LANG_PROVIDES = [
    { provide: LOCALE_ID, useValue: ɵ0 },
    { provide: NZ_I18N, useValue: ɵ1 },
    { provide: DELON_LOCALE, useValue: ɵ2 },
];
/** @type {?} */
const I18NSERVICE_PROVIDES = [{ provide: ALAIN_I18N_TOKEN, useClass: I18NService, multi: false }];
/** @type {?} */
const INTERCEPTOR_PROVIDES = [
//{ provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
//{ provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
];
/**
 * @param {?} http
 * @return {?}
 */
function I18nHttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, `assets/tmp/i18n/`, '.json');
}
/** @type {?} */
const I18NSERVICE_MODULES = [
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: I18nHttpLoaderFactory,
            deps: [HttpClient],
        },
    }),
];
/** @type {?} */
const GLOBAL_THIRD_MODULES = [];
/** @type {?} */
const FORM_MODULES = [JsonSchemaModule];
class NgAlainSharedModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
NgAlainSharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    CoreModule,
                    CommonModule,
                    ThemeSharedModule,
                    SharedModule,
                    //...I18NSERVICE_MODULES,
                    ...GLOBAL_THIRD_MODULES,
                    ...FORM_MODULES
                ],
                exports: [SharedModule, ThemeSharedModule],
                entryComponents: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: fs-ng-alain-shared.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { I18nHttpLoaderFactory, NgAlainSharedModule, StartupServiceFactory };
//# sourceMappingURL=fs-ng-alain-shared.js.map
