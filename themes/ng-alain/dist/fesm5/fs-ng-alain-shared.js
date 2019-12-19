import { __spread } from 'tslib';
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
    var startupServiceLoad = (/**
     * @return {?}
     */
    function () { return startupService.load(); });
    return startupServiceLoad;
}
/** @type {?} */
var APPINIT_PROVIDES = [
    StartupService,
    {
        provide: APP_INITIALIZER,
        useFactory: StartupServiceFactory,
        deps: [StartupService],
        multi: true,
    },
];
/** @type {?} */
var LANG = {
    abbr: 'zh',
    ng: ngLang,
    zorro: zh_CN,
    delon: zh_CN$1,
};
registerLocaleData(LANG.ng, LANG.abbr);
var ɵ0 = LANG.abbr, ɵ1 = LANG.zorro, ɵ2 = LANG.delon;
/** @type {?} */
var LANG_PROVIDES = [
    { provide: LOCALE_ID, useValue: ɵ0 },
    { provide: NZ_I18N, useValue: ɵ1 },
    { provide: DELON_LOCALE, useValue: ɵ2 },
];
/** @type {?} */
var I18NSERVICE_PROVIDES = [{ provide: ALAIN_I18N_TOKEN, useClass: I18NService, multi: false }];
/** @type {?} */
var INTERCEPTOR_PROVIDES = [
//{ provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
//{ provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
];
/**
 * @param {?} http
 * @return {?}
 */
function I18nHttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, "assets/tmp/i18n/", '.json');
}
/** @type {?} */
var I18NSERVICE_MODULES = [
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: I18nHttpLoaderFactory,
            deps: [HttpClient],
        },
    }),
];
/** @type {?} */
var GLOBAL_THIRD_MODULES = [];
/** @type {?} */
var FORM_MODULES = [JsonSchemaModule];
var NgAlainSharedModule = /** @class */ (function () {
    function NgAlainSharedModule() {
    }
    /**
     * @return {?}
     */
    NgAlainSharedModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgAlainSharedModule,
            providers: __spread(APPINIT_PROVIDES, LANG_PROVIDES, INTERCEPTOR_PROVIDES, I18NSERVICE_PROVIDES)
        };
    };
    NgAlainSharedModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: __spread([
                        CoreModule,
                        CommonModule,
                        ThemeSharedModule,
                        SharedModule
                    ], GLOBAL_THIRD_MODULES, FORM_MODULES),
                    exports: [SharedModule, ThemeSharedModule],
                    entryComponents: []
                },] }
    ];
    return NgAlainSharedModule;
}());

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
