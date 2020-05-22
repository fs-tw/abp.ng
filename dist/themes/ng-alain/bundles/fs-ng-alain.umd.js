(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/common/locales/zh'), require('@angular/common/locales/en'), require('@angular/common/locales/zh-Hant'), require('ng-zorro-antd'), require('date-fns/locale/en'), require('date-fns/locale/zh_cn'), require('date-fns/locale/zh_tw'), require('@ngx-translate/core'), require('@delon/theme'), require('ng-zorro-antd/i18n'), require('@angular/router'), require('@angular/common/http'), require('@delon/auth'), require('@delon/acl'), require('@ant-design/icons-angular/icons'), require('@angular/forms'), require('@delon/abc'), require('@delon/chart'), require('@delon/form'), require('ngx-countdown'), require('ngx-ueditor'), require('ngx-tinymce'), require('@delon/mock'), require('mockjs'), require('date-fns')) :
    typeof define === 'function' && define.amd ? define('@fs/ng-alain', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/common/locales/zh', '@angular/common/locales/en', '@angular/common/locales/zh-Hant', 'ng-zorro-antd', 'date-fns/locale/en', 'date-fns/locale/zh_cn', 'date-fns/locale/zh_tw', '@ngx-translate/core', '@delon/theme', 'ng-zorro-antd/i18n', '@angular/router', '@angular/common/http', '@delon/auth', '@delon/acl', '@ant-design/icons-angular/icons', '@angular/forms', '@delon/abc', '@delon/chart', '@delon/form', 'ngx-countdown', 'ngx-ueditor', 'ngx-tinymce', '@delon/mock', 'mockjs', 'date-fns'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['ng-alain'] = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.ng.common, global.ng.common.locales.zh, global.ng.common.locales.en, global.ng.common.locales['zh-Hant'], global.ngZorroAntd, global.df_en, global.df_zh_cn, global.df_zh_tw, global.core$1, global.theme, global.i18n, global.ng.router, global.ng.common.http, global.auth, global.acl, global.icons, global.ng.forms, global.abc, global.chart, global.form, global.ngxCountdown, global.ngxUeditor, global.ngxTinymce, global.mock, global.mockjs, global.dateFns));
}(this, (function (exports, core, rxjs, operators, common, ngZh, ngEn, ngZhTw, ngZorroAntd, df_en, df_zh_cn, df_zh_tw, core$1, theme, i18n, router, http, auth, acl, icons, forms, abc, chart, form, ngxCountdown, ngxUeditor, ngxTinymce, mock, mockjs, dateFns) { 'use strict';

    ngZh = ngZh && ngZh.hasOwnProperty('default') ? ngZh['default'] : ngZh;
    ngEn = ngEn && ngEn.hasOwnProperty('default') ? ngEn['default'] : ngEn;
    ngZhTw = ngZhTw && ngZhTw.hasOwnProperty('default') ? ngZhTw['default'] : ngZhTw;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
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
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/core/i18n/i18n.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function LangData() { }
    if (false) {
        /** @type {?} */
        LangData.prototype.text;
        /** @type {?} */
        LangData.prototype.ng;
        /** @type {?} */
        LangData.prototype.zorro;
        /** @type {?} */
        LangData.prototype.dateFns;
        /** @type {?} */
        LangData.prototype.delon;
        /** @type {?} */
        LangData.prototype.abbr;
    }
    /** @type {?} */
    var DEFAULT = 'zh-CN';
    /** @type {?} */
    var LANGS = {
        'zh-CN': {
            text: '简体中文',
            ng: ngZh,
            zorro: ngZorroAntd.zh_CN,
            dateFns: df_zh_cn,
            delon: theme.zh_CN,
            abbr: '🇨🇳',
        },
        'zh-Hant': {
            text: '繁体中文',
            ng: ngZhTw,
            zorro: ngZorroAntd.zh_TW,
            dateFns: df_zh_tw,
            delon: theme.zh_TW,
            abbr: '🇭🇰',
        },
        'en-US': {
            text: 'English',
            ng: ngEn,
            zorro: ngZorroAntd.en_US,
            dateFns: df_en,
            delon: theme.en_US,
            abbr: '🇬🇧',
        },
    };
    var I18NService = /** @class */ (function () {
        function I18NService(settings, nzI18nService, delonLocaleService, translate) {
            this.nzI18nService = nzI18nService;
            this.delonLocaleService = delonLocaleService;
            this.translate = translate;
            this._default = DEFAULT;
            this.change$ = new rxjs.BehaviorSubject(null);
            this._langs = Object.keys(LANGS).map((/**
             * @param {?} code
             * @return {?}
             */
            function (code) {
                /** @type {?} */
                var item = LANGS[code];
                return { code: code, text: item.text, abbr: item.abbr };
            }));
            // `@ngx-translate/core` 预先知道支持哪些语言
            /** @type {?} */
            var lans = this._langs.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.code; }));
            translate.addLangs(lans);
            /** @type {?} */
            var defaultLan = settings.layout.lang || translate.getBrowserLang();
            if (lans.includes(defaultLan)) {
                this._default = defaultLan;
            }
            this.updateLangData(this._default);
        }
        /**
         * @private
         * @param {?} lang
         * @return {?}
         */
        I18NService.prototype.updateLangData = /**
         * @private
         * @param {?} lang
         * @return {?}
         */
        function (lang) {
            /** @type {?} */
            var item = LANGS[lang];
            common.registerLocaleData(item.ng);
            this.nzI18nService.setLocale(item.zorro);
            this.nzI18nService.setDateLocale(item.dateFns);
            ((/** @type {?} */ (window))).__locale__ = item.dateFns;
            this.delonLocaleService.setLocale(item.delon);
        };
        Object.defineProperty(I18NService.prototype, "change", {
            get: /**
             * @return {?}
             */
            function () {
                return (/** @type {?} */ (this.change$.asObservable().pipe(operators.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return w != null; })))));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} lang
         * @return {?}
         */
        I18NService.prototype.use = /**
         * @param {?} lang
         * @return {?}
         */
        function (lang) {
            var _this = this;
            lang = lang || this.translate.getDefaultLang();
            if (this.currentLang === lang)
                return;
            this.updateLangData(lang);
            this.translate.use(lang).subscribe((/**
             * @return {?}
             */
            function () { return _this.change$.next(lang); }));
        };
        /** 获取语言列表 */
        /**
         * 获取语言列表
         * @return {?}
         */
        I18NService.prototype.getLangs = /**
         * 获取语言列表
         * @return {?}
         */
        function () {
            return this._langs;
        };
        /** 翻译 */
        /**
         * 翻译
         * @param {?} key
         * @param {?=} interpolateParams
         * @return {?}
         */
        I18NService.prototype.fanyi = /**
         * 翻译
         * @param {?} key
         * @param {?=} interpolateParams
         * @return {?}
         */
        function (key, interpolateParams) {
            return this.translate.instant(key, interpolateParams);
        };
        Object.defineProperty(I18NService.prototype, "defaultLang", {
            /** 默认语言 */
            get: /**
             * 默认语言
             * @return {?}
             */
            function () {
                return this._default;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(I18NService.prototype, "currentLang", {
            /** 当前语言 */
            get: /**
             * 当前语言
             * @return {?}
             */
            function () {
                return this.translate.currentLang || this.translate.getDefaultLang() || this._default;
            },
            enumerable: true,
            configurable: true
        });
        I18NService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        I18NService.ctorParameters = function () { return [
            { type: theme.SettingsService },
            { type: ngZorroAntd.NzI18nService },
            { type: theme.DelonLocaleService },
            { type: core$1.TranslateService }
        ]; };
        /** @nocollapse */ I18NService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function I18NService_Factory() { return new I18NService(core.ɵɵinject(theme.SettingsService), core.ɵɵinject(i18n.NzI18nService), core.ɵɵinject(theme.DelonLocaleService), core.ɵɵinject(core$1.TranslateService)); }, token: I18NService, providedIn: "root" });
        return I18NService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        I18NService.prototype._default;
        /**
         * @type {?}
         * @private
         */
        I18NService.prototype.change$;
        /**
         * @type {?}
         * @private
         */
        I18NService.prototype._langs;
        /**
         * @type {?}
         * @private
         */
        I18NService.prototype.nzI18nService;
        /**
         * @type {?}
         * @private
         */
        I18NService.prototype.delonLocaleService;
        /**
         * @type {?}
         * @private
         */
        I18NService.prototype.translate;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/core/i18n/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: environments/environment.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.
    /** @type {?} */
    var environment = {
        SERVER_URL: "./",
        production: false,
        useHash: true,
        hmr: false,
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/core/net/default.interceptor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CODEMESSAGE = {
        200: '服务器成功返回请求的数据。',
        201: '新建或修改数据成功。',
        202: '一个请求已经进入后台排队（异步任务）。',
        204: '删除数据成功。',
        400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
        401: '用户没有权限（令牌、用户名、密码错误）。',
        403: '用户得到授权，但是访问是被禁止的。',
        404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
        406: '请求的格式不可得。',
        410: '请求的资源被永久删除，且不会再得到的。',
        422: '当创建一个对象时，发生一个验证错误。',
        500: '服务器发生错误，请检查服务器。',
        502: '网关错误。',
        503: '服务不可用，服务器暂时过载或维护。',
        504: '网关超时。',
    };
    /**
     * 默认HTTP拦截器，其注册细节见 `app.module.ts`
     */
    var DefaultInterceptor = /** @class */ (function () {
        function DefaultInterceptor(injector) {
            this.injector = injector;
        }
        Object.defineProperty(DefaultInterceptor.prototype, "notification", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                return this.injector.get(ngZorroAntd.NzNotificationService);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @param {?} url
         * @return {?}
         */
        DefaultInterceptor.prototype.goTo = /**
         * @private
         * @param {?} url
         * @return {?}
         */
        function (url) {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.injector.get(router.Router).navigateByUrl(url); }));
        };
        /**
         * @private
         * @param {?} ev
         * @return {?}
         */
        DefaultInterceptor.prototype.checkStatus = /**
         * @private
         * @param {?} ev
         * @return {?}
         */
        function (ev) {
            if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
                return;
            }
            /** @type {?} */
            var errortext = CODEMESSAGE[ev.status] || ev.statusText;
            this.notification.error("\u8BF7\u6C42\u9519\u8BEF " + ev.status + ": " + ev.url, errortext);
        };
        /**
         * @private
         * @param {?} ev
         * @return {?}
         */
        DefaultInterceptor.prototype.handleData = /**
         * @private
         * @param {?} ev
         * @return {?}
         */
        function (ev) {
            // 可能会因为 `throw` 导出无法执行 `_HttpClient` 的 `end()` 操作
            if (ev.status > 0) {
                this.injector.get(theme._HttpClient).end();
            }
            this.checkStatus(ev);
            // 业务处理：一些通用操作
            switch (ev.status) {
                case 200:
                    // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
                    // 例如响应内容：
                    //  错误内容：{ status: 1, msg: '非法参数' }
                    //  正确内容：{ status: 0, response: {  } }
                    // 则以下代码片断可直接适用
                    // if (event instanceof HttpResponse) {
                    //     const body: any = event.body;
                    //     if (body && body.status !== 0) {
                    //         this.msg.error(body.msg);
                    //         // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
                    //         // this.http.get('/').subscribe() 并不会触发
                    //         return throwError({});
                    //     } else {
                    //         // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
                    //         return of(new HttpResponse(Object.assign(event, { body: body.response })));
                    //         // 或者依然保持完整的格式
                    //         return of(event);
                    //     }
                    // }
                    break;
                case 401:
                    this.notification.error("\u672A\u767B\u5F55\u6216\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u3002", "");
                    // 清空 token 信息
                    ((/** @type {?} */ (this.injector.get(auth.DA_SERVICE_TOKEN)))).clear();
                    this.goTo('/passport/login');
                    break;
                case 403:
                case 404:
                case 500:
                    this.goTo("/exception/" + ev.status);
                    break;
                default:
                    if (ev instanceof http.HttpErrorResponse) {
                        console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', ev);
                        return rxjs.throwError(ev);
                    }
                    break;
            }
            return rxjs.of(ev);
        };
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        DefaultInterceptor.prototype.intercept = /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        function (req, next) {
            var _this = this;
            // 统一加上服务端前缀
            /** @type {?} */
            var url = req.url;
            if (!url.startsWith('https://') && !url.startsWith('http://')) {
                url = environment.SERVER_URL + url;
            }
            /** @type {?} */
            var newReq = req.clone({ url: url });
            return next.handle(newReq).pipe(operators.mergeMap((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                // 允许统一对请求错误处理
                if (event instanceof http.HttpResponseBase)
                    return _this.handleData(event);
                // 若一切都正常，则后续操作
                return rxjs.of(event);
            })), operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return _this.handleData(err); })));
        };
        DefaultInterceptor.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DefaultInterceptor.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        return DefaultInterceptor;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DefaultInterceptor.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/core/net/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: style-icons-auto.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ICONS_AUTO = [
        icons.AlipayCircleOutline,
        icons.ApiOutline,
        icons.AppstoreOutline,
        icons.ArrowDownOutline,
        icons.BookOutline,
        icons.CloudOutline,
        icons.CopyrightOutline,
        icons.CustomerServiceOutline,
        icons.DashboardOutline,
        icons.DatabaseOutline,
        icons.DingdingOutline,
        icons.DislikeOutline,
        icons.DownloadOutline,
        icons.ForkOutline,
        icons.FrownOutline,
        icons.FullscreenExitOutline,
        icons.FullscreenOutline,
        icons.GithubOutline,
        icons.GlobalOutline,
        icons.HddOutline,
        icons.LaptopOutline,
        icons.LikeOutline,
        icons.LockOutline,
        icons.LogoutOutline,
        icons.MailOutline,
        icons.MenuFoldOutline,
        icons.MenuUnfoldOutline,
        icons.MessageOutline,
        icons.PayCircleOutline,
        icons.PieChartOutline,
        icons.PrinterOutline,
        icons.RocketOutline,
        icons.ScanOutline,
        icons.SettingOutline,
        icons.ShareAltOutline,
        icons.ShoppingCartOutline,
        icons.SoundOutline,
        icons.StarOutline,
        icons.TaobaoCircleOutline,
        icons.TaobaoOutline,
        icons.TeamOutline,
        icons.ToolOutline,
        icons.TrophyOutline,
        icons.UsbOutline,
        icons.UserOutline,
        icons.WeiboCircleOutline
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: style-icons.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ICONS = [icons.InfoOutline, icons.BulbOutline, icons.ProfileOutline, icons.ExceptionOutline, icons.LinkOutline];

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/core/startup/startup.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * 用于应用启动时
     * 一般用来获取应用所需要的基础数据等
     */
    var StartupService = /** @class */ (function () {
        function StartupService(iconSrv, menuService, translate, i18n, settingService, aclService, titleService, httpClient) {
            this.menuService = menuService;
            this.translate = translate;
            this.i18n = i18n;
            this.settingService = settingService;
            this.aclService = aclService;
            this.titleService = titleService;
            this.httpClient = httpClient;
            iconSrv.addIcon.apply(iconSrv, __spread(ICONS_AUTO, ICONS));
        }
        /**
         * @return {?}
         */
        StartupService.prototype.load = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // only works with promises
            // https://github.com/angular/angular/issues/15088
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                rxjs.zip(_this.httpClient.get("assets/tmp/i18n/" + _this.i18n.defaultLang + ".json"), _this.httpClient.get('assets/tmp/app-data.json'))
                    .pipe(
                // 接收其他拦截器后产生的异常消息
                operators.catchError((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b = __read(_a, 2), langData = _b[0], appData = _b[1];
                    resolve(null);
                    return [langData, appData];
                })))
                    .subscribe((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    // setting language data
                    //this.translate.setTranslation(this.i18n.defaultLang, langData);
                    //this.translate.setDefaultLang(this.i18n.defaultLang);
                    var _b = __read(_a, 2), langData = _b[0], appData = _b[1];
                    // setting language data
                    //this.translate.setTranslation(this.i18n.defaultLang, langData);
                    //this.translate.setDefaultLang(this.i18n.defaultLang);
                    // application data
                    /** @type {?} */
                    var res = appData;
                    // 应用信息：包括站点名、描述、年份
                    _this.settingService.setApp(res.app);
                    // 用户信息：包括姓名、头像、邮箱地址
                    //this.settingService.setUser(res.user);
                    // ACL：设置权限为全量
                    //this.aclService.setFull(true);
                    // 初始化菜单
                    //this.menuService.add(res.menu);
                    // 设置页面标题的后缀
                    _this.titleService.default = '';
                    _this.titleService.suffix = res.app.name;
                }), (/**
                 * @return {?}
                 */
                function () { }), (/**
                 * @return {?}
                 */
                function () {
                    resolve(null);
                }));
            }));
        };
        StartupService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        StartupService.ctorParameters = function () { return [
            { type: ngZorroAntd.NzIconService },
            { type: theme.MenuService },
            { type: core$1.TranslateService },
            { type: I18NService, decorators: [{ type: core.Inject, args: [theme.ALAIN_I18N_TOKEN,] }] },
            { type: theme.SettingsService },
            { type: acl.ACLService },
            { type: theme.TitleService },
            { type: http.HttpClient }
        ]; };
        return StartupService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        StartupService.prototype.menuService;
        /**
         * @type {?}
         * @private
         */
        StartupService.prototype.translate;
        /**
         * @type {?}
         * @private
         */
        StartupService.prototype.i18n;
        /**
         * @type {?}
         * @private
         */
        StartupService.prototype.settingService;
        /**
         * @type {?}
         * @private
         */
        StartupService.prototype.aclService;
        /**
         * @type {?}
         * @private
         */
        StartupService.prototype.titleService;
        /**
         * @type {?}
         * @private
         */
        StartupService.prototype.httpClient;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/core/startup/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/core/module-import-guard.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // https://angular.io/guide/styleguide#style-04-12
    /**
     * @param {?} parentModule
     * @param {?} moduleName
     * @return {?}
     */
    function throwIfAlreadyLoaded(parentModule, moduleName) {
        if (parentModule) {
            throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
        }
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/core/core.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoreModule = /** @class */ (function () {
        function CoreModule(parentModule) {
            throwIfAlreadyLoaded(parentModule, 'CoreModule');
        }
        CoreModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [],
                    },] }
        ];
        /** @nocollapse */
        CoreModule.ctorParameters = function () { return [
            { type: CoreModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        return CoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/core/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/shared/shared.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var THIRDMODULES = [ngZorroAntd.NgZorroAntdModule, ngxCountdown.CountdownModule, ngxUeditor.UEditorModule, ngxTinymce.NgxTinymceModule];
    // #endregion
    // #region your componets & directives
    /** @type {?} */
    var COMPONENTS = [];
    /** @type {?} */
    var DIRECTIVES = [];
    // #endregion
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread([
                            common.CommonModule,
                            forms.FormsModule,
                            router.RouterModule,
                            forms.ReactiveFormsModule,
                            theme.AlainThemeModule.forChild(),
                            abc.DelonABCModule,
                            chart.DelonChartModule,
                            acl.DelonACLModule,
                            form.DelonFormModule
                        ], THIRDMODULES),
                        declarations: __spread(COMPONENTS, DIRECTIVES),
                        exports: __spread([
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            router.RouterModule,
                            theme.AlainThemeModule,
                            abc.DelonABCModule,
                            chart.DelonChartModule,
                            acl.DelonACLModule,
                            form.DelonFormModule,
                            // i18n
                            core$1.TranslateModule
                        ], THIRDMODULES, COMPONENTS, DIRECTIVES),
                    },] }
        ];
        return SharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/shared/json-schema/json-schema.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
    // import { UeditorWidget } from './widgets/ueditor/ueditor.widget';
    /** @type {?} */
    var SCHEMA_THIRDS_COMPONENTS = [
    // TinymceWidget,
    // UeditorWidget
    ];
    var JsonSchemaModule = /** @class */ (function () {
        function JsonSchemaModule(widgetRegistry) {
            // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
            // widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
        }
        JsonSchemaModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: SCHEMA_THIRDS_COMPONENTS,
                        entryComponents: SCHEMA_THIRDS_COMPONENTS,
                        imports: [SharedModule, form.DelonFormModule.forRoot()],
                        exports: __spread(SCHEMA_THIRDS_COMPONENTS),
                    },] }
        ];
        /** @nocollapse */
        JsonSchemaModule.ctorParameters = function () { return [
            { type: form.WidgetRegistry }
        ]; };
        return JsonSchemaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/shared/json-schema/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/shared/utils/yuan.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * 转化成RMB元字符串
     * @param {?} value
     * @param {?=} digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    function yuan(value, digits) {
        if (digits === void 0) { digits = 2; }
        if (typeof value === 'number') {
            value = value.toFixed(digits);
        }
        return "&yen " + value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/shared/utils/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/shared/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: _mock/_profile.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var basicGoods = [
        {
            id: '1234561',
            name: '矿泉水 550ml',
            barcode: '12421432143214321',
            price: '2.00',
            num: '1',
            amount: '2.00',
        },
        {
            id: '1234562',
            name: '凉茶 300ml',
            barcode: '12421432143214322',
            price: '3.00',
            num: '2',
            amount: '6.00',
        },
        {
            id: '1234563',
            name: '好吃的薯片',
            barcode: '12421432143214323',
            price: '7.00',
            num: '4',
            amount: '28.00',
        },
        {
            id: '1234564',
            name: '特别好吃的蛋卷',
            barcode: '12421432143214324',
            price: '8.50',
            num: '3',
            amount: '25.50',
        },
    ];
    /** @type {?} */
    var basicProgress = [
        {
            key: '1',
            time: '2017-10-01 14:10',
            rate: '联系客户',
            status: 'processing',
            operator: '取货员 ID1234',
            cost: '5mins',
        },
        {
            key: '2',
            time: '2017-10-01 14:05',
            rate: '取货员出发',
            status: 'success',
            operator: '取货员 ID1234',
            cost: '1h',
        },
        {
            key: '3',
            time: '2017-10-01 13:05',
            rate: '取货员接单',
            status: 'success',
            operator: '取货员 ID1234',
            cost: '5mins',
        },
        {
            key: '4',
            time: '2017-10-01 13:00',
            rate: '申请审批通过',
            status: 'success',
            operator: '系统',
            cost: '1h',
        },
        {
            key: '5',
            time: '2017-10-01 12:00',
            rate: '发起退货申请',
            status: 'success',
            operator: '用户',
            cost: '5mins',
        },
    ];
    /** @type {?} */
    var advancedOperation1 = [
        {
            key: 'op1',
            type: '订购关系生效',
            name: '曲丽丽',
            status: 'agree',
            updatedAt: '2017-10-03  19:23:12',
            memo: '-',
        },
        {
            key: 'op2',
            type: '财务复审',
            name: '付小小',
            status: 'reject',
            updatedAt: '2017-10-03  19:23:12',
            memo: '不通过原因',
        },
        {
            key: 'op3',
            type: '部门初审',
            name: '周毛毛',
            status: 'agree',
            updatedAt: '2017-10-03  19:23:12',
            memo: '-',
        },
        {
            key: 'op4',
            type: '提交订单',
            name: '林东东',
            status: 'agree',
            updatedAt: '2017-10-03  19:23:12',
            memo: '很棒',
        },
        {
            key: 'op5',
            type: '创建订单',
            name: '汗牙牙',
            status: 'agree',
            updatedAt: '2017-10-03  19:23:12',
            memo: '-',
        },
    ];
    /** @type {?} */
    var advancedOperation2 = [
        {
            key: 'op1',
            type: '订购关系生效',
            name: '曲丽丽',
            status: 'agree',
            updatedAt: '2017-10-03  19:23:12',
            memo: '-',
        },
    ];
    /** @type {?} */
    var advancedOperation3 = [
        {
            key: 'op1',
            type: '创建订单',
            name: '汗牙牙',
            status: 'agree',
            updatedAt: '2017-10-03  19:23:12',
            memo: '-',
        },
    ];
    /** @type {?} */
    var PROFILES = {
        'GET /profile/progress': basicProgress,
        'GET /profile/goods': basicGoods,
        'GET /profile/advanced': {
            advancedOperation1: advancedOperation1,
            advancedOperation2: advancedOperation2,
            advancedOperation3: advancedOperation3,
        },
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: _mock/_rule.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var list = [];
    for (var i = 0; i < 46; i += 1) {
        list.push({
            key: i,
            disabled: i % 6 === 0,
            href: 'https://ant.design',
            avatar: [
                'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
                'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
            ][i % 2],
            no: "TradeCode " + i,
            title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
            owner: '曲丽丽',
            description: '这是一段描述',
            callNo: Math.floor(Math.random() * 1000),
            status: Math.floor(Math.random() * 10) % 4,
            updatedAt: new Date("2017-07-" + (i < 18 ? '0' + (Math.floor(i / 2) + 1) : Math.floor(i / 2) + 1)),
            createdAt: new Date("2017-07-" + (i < 18 ? '0' + (Math.floor(i / 2) + 1) : Math.floor(i / 2) + 1)),
            progress: Math.ceil(Math.random() * 100),
        });
    }
    /**
     * @param {?} params
     * @return {?}
     */
    function getRule(params) {
        /** @type {?} */
        var ret = __spread(list);
        if (params.sorter) {
            /** @type {?} */
            var s_1 = params.sorter.split('_');
            ret = ret.sort((/**
             * @param {?} prev
             * @param {?} next
             * @return {?}
             */
            function (prev, next) {
                if (s_1[1] === 'descend') {
                    return next[s_1[0]] - prev[s_1[0]];
                }
                return prev[s_1[0]] - next[s_1[0]];
            }));
        }
        if (params.statusList && params.statusList.length > 0) {
            ret = ret.filter((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return params.statusList.indexOf(data.status) > -1; }));
        }
        if (params.no) {
            ret = ret.filter((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data.no.indexOf(params.no) > -1; }));
        }
        return ret;
    }
    /**
     * @param {?} nos
     * @return {?}
     */
    function removeRule(nos) {
        nos.split(',').forEach((/**
         * @param {?} no
         * @return {?}
         */
        function (no) {
            /** @type {?} */
            var idx = list.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.no === no; }));
            if (idx !== -1)
                list.splice(idx, 1);
        }));
        return true;
    }
    /**
     * @param {?} description
     * @return {?}
     */
    function saveRule(description) {
        /** @type {?} */
        var i = Math.ceil(Math.random() * 10000);
        list.unshift({
            key: i,
            href: 'https://ant.design',
            avatar: [
                'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
                'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
            ][i % 2],
            no: "TradeCode " + i,
            title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
            owner: '曲丽丽',
            description: description,
            callNo: Math.floor(Math.random() * 1000),
            status: Math.floor(Math.random() * 10) % 2,
            updatedAt: new Date(),
            createdAt: new Date(),
            progress: Math.ceil(Math.random() * 100),
        });
    }
    var ɵ0 = /**
     * @param {?} req
     * @return {?}
     */
    function (req) { return getRule(req.queryString); }, ɵ1 = /**
     * @param {?} req
     * @return {?}
     */
    function (req) { return removeRule(req.queryString.nos); }, ɵ2 = /**
     * @param {?} req
     * @return {?}
     */
    function (req) { return saveRule(req.body.description); };
    /** @type {?} */
    var RULES = {
        '/rule': (ɵ0),
        'DELETE /rule': (ɵ1),
        'POST /rule': (ɵ2),
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: _mock/_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // region: mock data
    /** @type {?} */
    var titles = ['Alipay', 'Angular', 'Ant Design', 'Ant Design Pro', 'Bootstrap', 'React', 'Vue', 'Webpack'];
    /** @type {?} */
    var avatars = [
        'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
        'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
        'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
        'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
        'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
        'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
        'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
        'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
    ];
    /** @type {?} */
    var covers = [
        'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
        'https://gw.alipayobjects.com/zos/rmsportal/alaPpKWajEbIYEUvvVNf.png',
        'https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png',
        'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
    ];
    /** @type {?} */
    var desc = [
        '那是一种内在的东西， 他们到达不了，也无法触及的',
        '希望是一个好东西，也许是最好的，好东西是不会消亡的',
        '生命就像一盒巧克力，结果往往出人意料',
        '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
        '那时候我只会想自己想要什么，从不想自己拥有什么',
    ];
    /** @type {?} */
    var user = [
        '卡色',
        'cipchk',
        '付小小',
        '曲丽丽',
        '林东东',
        '周星星',
        '吴加好',
        '朱偏右',
        '鱼酱',
        '乐哥',
        '谭小仪',
        '仲尼',
    ];
    // endregion
    /**
     * @param {?=} count
     * @return {?}
     */
    function getFakeList(count) {
        if (count === void 0) { count = 20; }
        /** @type {?} */
        var list = [];
        for (var i = 0; i < count; i += 1) {
            list.push({
                id: "fake-list-" + i,
                owner: user[i % 10],
                title: titles[i % 8],
                avatar: avatars[i % 8],
                cover: parseInt((i / 4).toString(), 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
                status: ['active', 'exception', 'normal'][i % 3],
                percent: Math.ceil(Math.random() * 50) + 50,
                logo: avatars[i % 8],
                href: 'https://ant.design',
                updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
                createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
                subDescription: desc[i % 5],
                description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
                activeUser: Math.ceil(Math.random() * 100000) + 100000,
                newUser: Math.ceil(Math.random() * 1000) + 1000,
                star: Math.ceil(Math.random() * 100) + 100,
                like: Math.ceil(Math.random() * 100) + 100,
                message: Math.ceil(Math.random() * 10) + 10,
                content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
                members: [
                    {
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
                        name: '曲丽丽',
                    },
                    {
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
                        name: '王昭君',
                    },
                    {
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
                        name: '董娜娜',
                    },
                ],
            });
        }
        return list;
    }
    /**
     * @return {?}
     */
    function getNotice() {
        return [
            {
                id: 'xxx1',
                title: titles[0],
                logo: avatars[0],
                description: '那是一种内在的东西， 他们到达不了，也无法触及的',
                updatedAt: new Date(),
                member: '科学搬砖组',
                href: '',
                memberLink: '',
            },
            {
                id: 'xxx2',
                title: titles[1],
                logo: avatars[1],
                description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
                updatedAt: new Date('2017-07-24'),
                member: '全组都是吴彦祖',
                href: '',
                memberLink: '',
            },
            {
                id: 'xxx3',
                title: titles[2],
                logo: avatars[2],
                description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
                updatedAt: new Date(),
                member: '中二少女团',
                href: '',
                memberLink: '',
            },
            {
                id: 'xxx4',
                title: titles[3],
                logo: avatars[3],
                description: '那时候我只会想自己想要什么，从不想自己拥有什么',
                updatedAt: new Date('2017-07-23'),
                member: '程序员日常',
                href: '',
                memberLink: '',
            },
            {
                id: 'xxx5',
                title: titles[4],
                logo: avatars[4],
                description: '凛冬将至',
                updatedAt: new Date('2017-07-23'),
                member: '高逼格设计天团',
                href: '',
                memberLink: '',
            },
            {
                id: 'xxx6',
                title: titles[5],
                logo: avatars[5],
                description: '生命就像一盒巧克力，结果往往出人意料',
                updatedAt: new Date('2017-07-23'),
                member: '骗你来学计算机',
                href: '',
                memberLink: '',
            },
        ];
    }
    /**
     * @return {?}
     */
    function getActivities() {
        return [
            {
                id: 'trend-1',
                updatedAt: new Date(),
                user: {
                    name: '林东东',
                    avatar: avatars[0],
                },
                group: {
                    name: '高逼格设计天团',
                    link: 'http://github.com/',
                },
                project: {
                    name: '六月迭代',
                    link: 'http://github.com/',
                },
                template: '在 @{group} 新建项目 @{project}',
            },
            {
                id: 'trend-2',
                updatedAt: new Date(),
                user: {
                    name: '付小小',
                    avatar: avatars[1],
                },
                group: {
                    name: '高逼格设计天团',
                    link: 'http://github.com/',
                },
                project: {
                    name: '六月迭代',
                    link: 'http://github.com/',
                },
                template: '在 @{group} 新建项目 @{project}',
            },
            {
                id: 'trend-3',
                updatedAt: new Date(),
                user: {
                    name: '曲丽丽',
                    avatar: avatars[2],
                },
                group: {
                    name: '中二少女团',
                    link: 'http://github.com/',
                },
                project: {
                    name: '六月迭代',
                    link: 'http://github.com/',
                },
                template: '在 @{group} 新建项目 @{project}',
            },
            {
                id: 'trend-4',
                updatedAt: new Date(),
                user: {
                    name: '周星星',
                    avatar: avatars[3],
                },
                project: {
                    name: '5 月日常迭代',
                    link: 'http://github.com/',
                },
                template: '将 @{project} 更新至已发布状态',
            },
            {
                id: 'trend-5',
                updatedAt: new Date(),
                user: {
                    name: '朱偏右',
                    avatar: avatars[4],
                },
                project: {
                    name: '工程效能',
                    link: 'http://github.com/',
                },
                comment: {
                    name: '留言',
                    link: 'http://github.com/',
                },
                template: '在 @{project} 发布了 @{comment}',
            },
            {
                id: 'trend-6',
                updatedAt: new Date(),
                user: {
                    name: '乐哥',
                    avatar: avatars[5],
                },
                group: {
                    name: '程序员日常',
                    link: 'http://github.com/',
                },
                project: {
                    name: '品牌迭代',
                    link: 'http://github.com/',
                },
                template: '在 @{group} 新建项目 @{project}',
            },
        ];
    }
    var ɵ0$1 = /**
     * @param {?} req
     * @return {?}
     */
    function (req) { return getFakeList(req.queryString.count); }, ɵ1$1 = /**
     * @return {?}
     */
    function () { return getNotice(); }, ɵ2$1 = /**
     * @return {?}
     */
    function () { return getActivities(); }, ɵ3 = /**
     * @return {?}
     */
    function () {
        throw new mock.MockStatusError(401);
    }, ɵ4 = /**
     * @return {?}
     */
    function () {
        throw new mock.MockStatusError(403);
    }, ɵ5 = /**
     * @return {?}
     */
    function () {
        throw new mock.MockStatusError(404);
    }, ɵ6 = /**
     * @return {?}
     */
    function () {
        throw new mock.MockStatusError(500);
    };
    /** @type {?} */
    var APIS = {
        '/api/list': (ɵ0$1),
        '/api/notice': (ɵ1$1),
        '/api/activities': (ɵ2$1),
        '/api/401': (ɵ3),
        '/api/403': (ɵ4),
        '/api/404': (ɵ5),
        '/api/500': (ɵ6),
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: _mock/_chart.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // region: mock data
    /** @type {?} */
    var visitData = [];
    /** @type {?} */
    var beginDay = new Date().getTime();
    /** @type {?} */
    var fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
    for (var i$1 = 0; i$1 < fakeY.length; i$1 += 1) {
        visitData.push({
            x: dateFns.format(new Date(beginDay + 1000 * 60 * 60 * 24 * i$1), 'YYYY-MM-DD'),
            y: fakeY[i$1],
        });
    }
    /** @type {?} */
    var visitData2 = [];
    /** @type {?} */
    var fakeY2 = [1, 6, 4, 8, 3, 7, 2];
    for (var i$1 = 0; i$1 < fakeY2.length; i$1 += 1) {
        visitData2.push({
            x: dateFns.format(new Date(beginDay + 1000 * 60 * 60 * 24 * i$1), 'YYYY-MM-DD'),
            y: fakeY2[i$1],
        });
    }
    /** @type {?} */
    var salesData = [];
    for (var i$1 = 0; i$1 < 12; i$1 += 1) {
        salesData.push({
            x: i$1 + 1 + "\u6708",
            y: Math.floor(Math.random() * 1000) + 200,
        });
    }
    /** @type {?} */
    var searchData = [];
    for (var i$1 = 0; i$1 < 50; i$1 += 1) {
        searchData.push({
            index: i$1 + 1,
            keyword: "\u641C\u7D22\u5173\u952E\u8BCD-" + i$1,
            count: Math.floor(Math.random() * 1000),
            range: Math.floor(Math.random() * 100),
            status: Math.floor((Math.random() * 10) % 2),
        });
    }
    /** @type {?} */
    var salesTypeData = [
        {
            x: '家用电器',
            y: 4544,
        },
        {
            x: '食用酒水',
            y: 3321,
        },
        {
            x: '个护健康',
            y: 3113,
        },
        {
            x: '服饰箱包',
            y: 2341,
        },
        {
            x: '母婴产品',
            y: 1231,
        },
        {
            x: '其他',
            y: 1231,
        },
    ];
    /** @type {?} */
    var salesTypeDataOnline = [
        {
            x: '家用电器',
            y: 244,
        },
        {
            x: '食用酒水',
            y: 321,
        },
        {
            x: '个护健康',
            y: 311,
        },
        {
            x: '服饰箱包',
            y: 41,
        },
        {
            x: '母婴产品',
            y: 121,
        },
        {
            x: '其他',
            y: 111,
        },
    ];
    /** @type {?} */
    var salesTypeDataOffline = [
        {
            x: '家用电器',
            y: 99,
        },
        {
            x: '个护健康',
            y: 188,
        },
        {
            x: '服饰箱包',
            y: 344,
        },
        {
            x: '母婴产品',
            y: 255,
        },
        {
            x: '其他',
            y: 65,
        },
    ];
    /** @type {?} */
    var offlineData = [];
    for (var i$1 = 0; i$1 < 10; i$1 += 1) {
        offlineData.push({
            name: "\u95E8\u5E97" + i$1,
            cvr: Math.ceil(Math.random() * 9) / 10,
        });
    }
    /** @type {?} */
    var offlineChartData = [];
    for (var i$1 = 0; i$1 < 20; i$1 += 1) {
        offlineChartData.push({
            x: new Date().getTime() + 1000 * 60 * 30 * i$1,
            y1: Math.floor(Math.random() * 100) + 10,
            y2: Math.floor(Math.random() * 100) + 10,
        });
    }
    /** @type {?} */
    var radarOriginData = [
        {
            name: '个人',
            ref: 10,
            koubei: 8,
            output: 4,
            contribute: 5,
            hot: 7,
        },
        {
            name: '团队',
            ref: 3,
            koubei: 9,
            output: 6,
            contribute: 3,
            hot: 1,
        },
        {
            name: '部门',
            ref: 4,
            koubei: 1,
            output: 6,
            contribute: 5,
            hot: 7,
        },
    ];
    //
    /** @type {?} */
    var radarData = [];
    /** @type {?} */
    var radarTitleMap = {
        ref: '引用',
        koubei: '口碑',
        output: '产量',
        contribute: '贡献',
        hot: '热度',
    };
    radarOriginData.forEach((/**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        Object.keys(item).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (key !== 'name') {
                radarData.push({
                    name: item.name,
                    label: radarTitleMap[key],
                    value: item[key],
                });
            }
        }));
    }));
    // endregion
    /** @type {?} */
    var CHARTS = {
        '/chart': JSON.parse(JSON.stringify({
            visitData: visitData,
            visitData2: visitData2,
            salesData: salesData,
            searchData: searchData,
            offlineData: offlineData,
            offlineChartData: offlineChartData,
            salesTypeData: salesTypeData,
            salesTypeDataOnline: salesTypeDataOnline,
            salesTypeDataOffline: salesTypeDataOffline,
            radarData: radarData,
        })),
        '/chart/visit': JSON.parse(JSON.stringify(visitData)),
        '/chart/tags': mockjs.mock({
            'list|100': [{ x: '@city', 'value|1-100': 150, 'category|0-2': 1 }],
        }),
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: _mock/_pois.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var POIS = {
        '/pois': {
            total: 2,
            list: [
                {
                    id: 10000,
                    user_id: 1,
                    name: '测试品牌',
                    branch_name: '测试分店',
                    geo: 310105,
                    country: '中国',
                    province: '上海',
                    city: '上海市',
                    district: '长宁区',
                    address: '中山公园',
                    tel: '15900000000',
                    categories: '美食,粤菜,湛江菜',
                    lng: 121.41707989151003,
                    lat: 31.218656214644792,
                    recommend: '推荐品',
                    special: '特色服务',
                    introduction: '商户简介',
                    open_time: '营业时间',
                    avg_price: 260,
                    reason: null,
                    status: 1,
                    status_str: '待审核',
                    status_wx: 1,
                    modified: 1505826527288,
                    created: 1505826527288,
                },
                {
                    id: 10001,
                    user_id: 2,
                    name: '测试品牌2',
                    branch_name: '测试分店2',
                    geo: 310105,
                    country: '中国',
                    province: '上海',
                    city: '上海市',
                    district: '长宁区',
                    address: '中山公园',
                    tel: '15900000000',
                    categories: '美食,粤菜,湛江菜',
                    lng: 121.41707989151003,
                    lat: 31.218656214644792,
                    recommend: '推荐品',
                    special: '特色服务',
                    introduction: '商户简介',
                    open_time: '营业时间',
                    avg_price: 260,
                    reason: null,
                    status: 1,
                    status_str: '待审核',
                    status_wx: 1,
                    modified: 1505826527288,
                    created: 1505826527288,
                },
            ],
        },
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: _mock/_user.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var list$1 = [];
    /** @type {?} */
    var total = 50;
    for (var i$2 = 0; i$2 < total; i$2 += 1) {
        list$1.push({
            id: i$2 + 1,
            disabled: i$2 % 6 === 0,
            href: 'https://ant.design',
            avatar: [
                'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
                'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
            ][i$2 % 2],
            no: "TradeCode " + i$2,
            title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i$2,
            owner: '曲丽丽',
            description: '这是一段描述',
            callNo: Math.floor(Math.random() * 1000),
            status: Math.floor(Math.random() * 10) % 4,
            updatedAt: new Date("2017-07-" + (Math.floor(i$2 / 2) + 1)),
            createdAt: new Date("2017-07-" + (Math.floor(i$2 / 2) + 1)),
            progress: Math.ceil(Math.random() * 100),
        });
    }
    /**
     * @param {?} params
     * @return {?}
     */
    function genData(params) {
        /** @type {?} */
        var ret = __spread(list$1);
        /** @type {?} */
        var pi = +params.pi;
        /** @type {?} */
        var ps = +params.ps;
        /** @type {?} */
        var start = (pi - 1) * ps;
        if (params.no) {
            ret = ret.filter((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data.no.indexOf(params.no) > -1; }));
        }
        return { total: ret.length, list: ret.slice(start, ps * pi) };
    }
    /**
     * @param {?} id
     * @param {?} value
     * @return {?}
     */
    function saveData(id, value) {
        /** @type {?} */
        var item = list$1.find((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.id === id; }));
        if (!item)
            return { msg: '无效用户信息' };
        Object.assign(item, value);
        return { msg: 'ok' };
    }
    var ɵ0$2 = /**
     * @param {?} req
     * @return {?}
     */
    function (req) { return genData(req.queryString); }, ɵ1$2 = /**
     * @param {?} req
     * @return {?}
     */
    function (req) { return list$1.find((/**
     * @param {?} w
     * @return {?}
     */
    function (w) { return w.id === +req.params.id; })); }, ɵ2$2 = /**
     * @param {?} req
     * @return {?}
     */
    function (req) { return saveData(+req.params.id, req.body); }, ɵ3$1 = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        /** @type {?} */
        var data = req.body;
        if (!(data.userName === 'admin' || data.userName === 'user') || data.password !== 'ng-alain.com') {
            return { msg: "Invalid username or password\uFF08admin/ng-alain.com\uFF09" };
        }
        return {
            msg: 'ok',
            user: {
                token: '123456789',
                name: data.userName,
                email: data.userName + "@qq.com",
                id: 10000,
                time: +new Date(),
            },
        };
    };
    /** @type {?} */
    var USERS = {
        '/user': (ɵ0$2),
        '/user/:id': (ɵ1$2),
        'POST /user/:id': (ɵ2$2),
        '/user/current': {
            name: 'Cipchk',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
            userid: '00000001',
            email: 'cipchk@qq.com',
            signature: '海纳百川，有容乃大',
            title: '交互专家',
            group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
            tags: [
                {
                    key: '0',
                    label: '很有想法的',
                },
                {
                    key: '1',
                    label: '专注撩妹',
                },
                {
                    key: '2',
                    label: '帅~',
                },
                {
                    key: '3',
                    label: '通吃',
                },
                {
                    key: '4',
                    label: '专职后端',
                },
                {
                    key: '5',
                    label: '海纳百川',
                },
            ],
            notifyCount: 12,
            country: 'China',
            geographic: {
                province: {
                    label: '上海',
                    key: '330000',
                },
                city: {
                    label: '市辖区',
                    key: '330100',
                },
            },
            address: 'XX区XXX路 XX 号',
            phone: '你猜-你猜你猜猜猜',
        },
        'POST /user/avatar': 'ok',
        'POST /login/account': (ɵ3$1),
        'POST /register': {
            msg: 'ok',
        },
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: _mock/_geo.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DATA = [
        {
            name: '上海',
            id: '310000',
        },
        {
            name: '市辖区',
            id: '310100',
        },
        {
            name: '北京',
            id: '110000',
        },
        {
            name: '市辖区',
            id: '110100',
        },
        {
            name: '浙江省',
            id: '330000',
        },
        {
            name: '杭州市',
            id: '330100',
        },
        {
            name: '宁波市',
            id: '330200',
        },
        {
            name: '温州市',
            id: '330300',
        },
        {
            name: '嘉兴市',
            id: '330400',
        },
        {
            name: '湖州市',
            id: '330500',
        },
        {
            name: '绍兴市',
            id: '330600',
        },
        {
            name: '金华市',
            id: '330700',
        },
        {
            name: '衢州市',
            id: '330800',
        },
        {
            name: '舟山市',
            id: '330900',
        },
        {
            name: '台州市',
            id: '331000',
        },
        {
            name: '丽水市',
            id: '331100',
        },
    ];
    var ɵ0$3 = /**
     * @return {?}
     */
    function () { return DATA.filter((/**
     * @param {?} w
     * @return {?}
     */
    function (w) { return w.id.endsWith('0000'); })); }, ɵ1$3 = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        /** @type {?} */
        var pid = (req.params.id || '310000').slice(0, 2);
        return DATA.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.id.slice(0, 2) === pid && !w.id.endsWith('0000'); }));
    };
    /** @type {?} */
    var GEOS = {
        '/geo/province': (ɵ0$3),
        '/geo/:id': (ɵ1$3),
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: _mock/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/delon.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0$4 = {
        "PROFILES": PROFILES,
        "RULES": RULES,
        "APIS": APIS,
        "CHARTS": CHARTS,
        "POIS": POIS,
        "USERS": USERS,
        "GEOS": GEOS
    };
    /** @type {?} */
    var MOCK_MODULES = true ? [mock.DelonMockModule.forRoot({
            data: ɵ0$4
        })] : [];
    /** @type {?} */
    var REUSETAB_PROVIDES = [
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: ReuseTabStrategy,
    //   deps: [ReuseTabService],
    // },
    ];
    /**
     * @return {?}
     */
    function fnPageHeaderConfig() {
        return __assign({}, new abc.PageHeaderConfig(), { homeI18n: 'home' });
    }
    /**
     * @return {?}
     */
    function fnDelonAuthConfig() {
        return __assign({}, new auth.DelonAuthConfig(), { login_url: '/passport/login' });
    }
    /**
     * @return {?}
     */
    function fnSTConfig() {
        return __assign({}, new abc.STConfig(), { modal: { size: 'lg' } });
    }
    /** @type {?} */
    var GLOBAL_CONFIG_PROVIDES = [
        // TIPS：@delon/abc 有大量的全局配置信息，例如设置所有 `st` 的页码默认为 `20` 行
        { provide: abc.STConfig, useFactory: fnSTConfig },
        { provide: abc.PageHeaderConfig, useFactory: fnPageHeaderConfig },
        { provide: auth.DelonAuthConfig, useFactory: fnDelonAuthConfig },
    ];
    // #endregion
    var DelonModule = /** @class */ (function () {
        function DelonModule(parentModule) {
            throwIfAlreadyLoaded(parentModule, 'DelonModule');
        }
        /**
         * @return {?}
         */
        DelonModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DelonModule,
                providers: __spread(REUSETAB_PROVIDES, GLOBAL_CONFIG_PROVIDES),
            };
        };
        DelonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread([theme.AlainThemeModule.forRoot(), acl.DelonACLModule.forRoot()], MOCK_MODULES),
                    },] }
        ];
        /** @nocollapse */
        DelonModule.ctorParameters = function () { return [
            { type: DelonModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        return DelonModule;
    }());

    exports.CoreModule = CoreModule;
    exports.DefaultInterceptor = DefaultInterceptor;
    exports.DelonModule = DelonModule;
    exports.I18NService = I18NService;
    exports.ICONS = ICONS;
    exports.ICONS_AUTO = ICONS_AUTO;
    exports.JsonSchemaModule = JsonSchemaModule;
    exports.SCHEMA_THIRDS_COMPONENTS = SCHEMA_THIRDS_COMPONENTS;
    exports.SharedModule = SharedModule;
    exports.StartupService = StartupService;
    exports.fnDelonAuthConfig = fnDelonAuthConfig;
    exports.fnPageHeaderConfig = fnPageHeaderConfig;
    exports.fnSTConfig = fnSTConfig;
    exports.throwIfAlreadyLoaded = throwIfAlreadyLoaded;
    exports.yuan = yuan;
    exports.ɵa = PROFILES;
    exports.ɵb = RULES;
    exports.ɵc = APIS;
    exports.ɵd = CHARTS;
    exports.ɵe = POIS;
    exports.ɵf = USERS;
    exports.ɵg = GEOS;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-ng-alain.umd.js.map
