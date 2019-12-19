(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core'), require('@angular/common'), require('@abp/ng.theme.shared'), require('@fs/ng-alain'), require('@angular/common/locales/zh'), require('ng-zorro-antd'), require('@delon/theme'), require('@ngx-translate/http-loader'), require('@ngx-translate/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@fs/ng-alain/shared', ['exports', '@abp/ng.core', '@angular/core', '@angular/common', '@abp/ng.theme.shared', '@fs/ng-alain', '@angular/common/locales/zh', 'ng-zorro-antd', '@delon/theme', '@ngx-translate/http-loader', '@ngx-translate/core', '@angular/common/http'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['ng-alain'] = global.fs['ng-alain'] || {}, global.fs['ng-alain'].shared = {}), global.ng_core, global.ng.core, global.ng.common, global.ng_theme_shared, global.fs['ng-alain'], global.ng.common.locales.zh, global.ngZorroAntd, global.theme, global.httpLoader, global.core$1, global.ng.common.http));
}(this, (function (exports, ng_core, core, common, ng_theme_shared, ngAlain, ngLang, ngZorroAntd, theme, httpLoader, core$1, http) { 'use strict';

    ngLang = ngLang && ngLang.hasOwnProperty('default') ? ngLang['default'] : ngLang;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
        ngAlain.StartupService,
        {
            provide: core.APP_INITIALIZER,
            useFactory: StartupServiceFactory,
            deps: [ngAlain.StartupService],
            multi: true,
        },
    ];
    /** @type {?} */
    var LANG = {
        abbr: 'zh',
        ng: ngLang,
        zorro: ngZorroAntd.zh_CN,
        delon: theme.zh_CN,
    };
    common.registerLocaleData(LANG.ng, LANG.abbr);
    var ɵ0 = LANG.abbr, ɵ1 = LANG.zorro, ɵ2 = LANG.delon;
    /** @type {?} */
    var LANG_PROVIDES = [
        { provide: core.LOCALE_ID, useValue: ɵ0 },
        { provide: ngZorroAntd.NZ_I18N, useValue: ɵ1 },
        { provide: theme.DELON_LOCALE, useValue: ɵ2 },
    ];
    /** @type {?} */
    var I18NSERVICE_PROVIDES = [{ provide: theme.ALAIN_I18N_TOKEN, useClass: ngAlain.I18NService, multi: false }];
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
        return new httpLoader.TranslateHttpLoader(http, "assets/tmp/i18n/", '.json');
    }
    /** @type {?} */
    var I18NSERVICE_MODULES = [
        core$1.TranslateModule.forRoot({
            loader: {
                provide: core$1.TranslateLoader,
                useFactory: I18nHttpLoaderFactory,
                deps: [http.HttpClient],
            },
        }),
    ];
    /** @type {?} */
    var GLOBAL_THIRD_MODULES = [];
    /** @type {?} */
    var FORM_MODULES = [ngAlain.JsonSchemaModule];
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
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: __spread([
                            ng_core.CoreModule,
                            common.CommonModule,
                            ng_theme_shared.ThemeSharedModule,
                            ngAlain.SharedModule
                        ], GLOBAL_THIRD_MODULES, FORM_MODULES),
                        exports: [ngAlain.SharedModule, ng_theme_shared.ThemeSharedModule],
                        entryComponents: []
                    },] }
        ];
        return NgAlainSharedModule;
    }());

    exports.I18nHttpLoaderFactory = I18nHttpLoaderFactory;
    exports.NgAlainSharedModule = NgAlainSharedModule;
    exports.StartupServiceFactory = StartupServiceFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-ng-alain-shared.umd.js.map
