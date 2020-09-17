(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/common'), require('@angular/common/locales/en'), require('@angular/common/locales/zh'), require('@angular/common/locales/zh-Hant'), require('@angular/core'), require('@delon/theme'), require('@ngx-translate/core'), require('date-fns/locale'), require('ng-zorro-antd/i18n'), require('rxjs'), require('rxjs/operators'), require('@angular/common/http'), require('@angular/router'), require('@delon/auth'), require('ng-zorro-antd/notification'), require('ng-zorro-antd/modal'), require('@delon/acl'), require('ng-zorro-antd/icon'), require('@ant-design/icons-angular/icons')) :
    typeof define === 'function' && define.amd ? define('@fs/ng-alain/core', ['exports', '@angular/cdk/platform', '@angular/common', '@angular/common/locales/en', '@angular/common/locales/zh', '@angular/common/locales/zh-Hant', '@angular/core', '@delon/theme', '@ngx-translate/core', 'date-fns/locale', 'ng-zorro-antd/i18n', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/router', '@delon/auth', 'ng-zorro-antd/notification', 'ng-zorro-antd/modal', '@delon/acl', 'ng-zorro-antd/icon', '@ant-design/icons-angular/icons'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.fs = global.fs || {}, global.fs['ng-alain'] = global.fs['ng-alain'] || {}, global.fs['ng-alain'].core = {}), global.ng.cdk.platform, global.ng.common, global.ng.common.locales.en, global.ng.common.locales.zh, global.ng.common.locales.zhHant, global.ng.core, global.i1, global.i3, global.locale, global.i2, global.rxjs, global.rxjs.operators, global.ng.common.http, global.ng.router, global.auth, global.i1$1, global.i1$2, global.acl, global.icon, global.icons));
}(this, (function (exports, i4, common, ngEn, ngZh, ngZhTw, i0, i1, i3, locale, i2, rxjs, operators, http, router, auth, i1$1, i1$2, acl, icon, icons) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var ngEn__default = /*#__PURE__*/_interopDefaultLegacy(ngEn);
    var ngZh__default = /*#__PURE__*/_interopDefaultLegacy(ngZh);
    var ngZhTw__default = /*#__PURE__*/_interopDefaultLegacy(ngZhTw);

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __createBinding(o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    }
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                exports[p] = m[p];
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    result[k] = mod[k];
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

    var DEFAULT = 'zh-CN';
    var LANGS = {
        'zh-CN': {
            text: '简体中文',
            ng: ngZh__default['default'],
            zorro: i2.zh_CN,
            date: locale.zhCN,
            delon: i1.zh_CN,
            abbr: '🇨🇳',
        },
        'zh-TW': {
            text: '繁体中文',
            ng: ngZhTw__default['default'],
            zorro: i2.zh_TW,
            date: locale.zhTW,
            delon: i1.zh_TW,
            abbr: '🇭🇰',
        },
        'en-US': {
            text: 'English',
            ng: ngEn__default['default'],
            zorro: i2.en_US,
            date: locale.enUS,
            delon: i1.en_US,
            abbr: '🇬🇧',
        },
    };
    exports.I18NService = /** @class */ (function () {
        function I18NService(settings, nzI18nService, delonLocaleService, translate, platform) {
            this.settings = settings;
            this.nzI18nService = nzI18nService;
            this.delonLocaleService = delonLocaleService;
            this.translate = translate;
            this.platform = platform;
            this._default = DEFAULT;
            this.change$ = new rxjs.BehaviorSubject(null);
            this._langs = Object.keys(LANGS).map(function (code) {
                var item = LANGS[code];
                return { code: code, text: item.text, abbr: item.abbr };
            });
            // `@ngx-translate/core` 预先知道支持哪些语言
            var lans = this._langs.map(function (item) { return item.code; });
            translate.addLangs(lans);
            var defaultLan = this.getDefaultLang();
            if (lans.includes(defaultLan)) {
                this._default = defaultLan;
            }
            this.updateLangData(this._default);
        }
        I18NService.prototype.getDefaultLang = function () {
            if (!this.platform.isBrowser) {
                return DEFAULT;
            }
            if (this.settings.layout.lang) {
                return this.settings.layout.lang;
            }
            return (navigator.languages ? navigator.languages[0] : null) || navigator.language;
        };
        I18NService.prototype.updateLangData = function (lang) {
            var item = LANGS[lang];
            common.registerLocaleData(item.ng);
            this.nzI18nService.setLocale(item.zorro);
            this.nzI18nService.setDateLocale(item.date);
            this.delonLocaleService.setLocale(item.delon);
        };
        Object.defineProperty(I18NService.prototype, "change", {
            get: function () {
                return this.change$.asObservable().pipe(operators.filter(function (w) { return w != null; }));
            },
            enumerable: true,
            configurable: true
        });
        I18NService.prototype.use = function (lang) {
            var _this = this;
            lang = lang || this.translate.getDefaultLang();
            if (this.currentLang === lang) {
                return;
            }
            this.updateLangData(lang);
            this.translate.use(lang).subscribe(function () { return _this.change$.next(lang); });
        };
        /** 获取语言列表 */
        I18NService.prototype.getLangs = function () {
            return this._langs;
        };
        /** 翻译 */
        I18NService.prototype.fanyi = function (key, interpolateParams) {
            return this.translate.instant(key, interpolateParams);
        };
        Object.defineProperty(I18NService.prototype, "defaultLang", {
            /** 默认语言 */
            get: function () {
                return this._default;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(I18NService.prototype, "currentLang", {
            /** 当前语言 */
            get: function () {
                return this.translate.currentLang || this.translate.getDefaultLang() || this._default;
            },
            enumerable: true,
            configurable: true
        });
        return I18NService;
    }());
    exports.I18NService.ɵprov = i0.ɵɵdefineInjectable({ factory: function I18NService_Factory() { return new exports.I18NService(i0.ɵɵinject(i1.SettingsService), i0.ɵɵinject(i2.NzI18nService), i0.ɵɵinject(i1.DelonLocaleService), i0.ɵɵinject(i3.TranslateService), i0.ɵɵinject(i4.Platform)); }, token: exports.I18NService, providedIn: "root" });
    exports.I18NService = __decorate([
        i0.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [i1.SettingsService,
            i2.NzI18nService,
            i1.DelonLocaleService,
            i3.TranslateService,
            i4.Platform])
    ], exports.I18NService);

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
    exports.DefaultInterceptor = /** @class */ (function () {
        function DefaultInterceptor(injector) {
            this.injector = injector;
        }
        Object.defineProperty(DefaultInterceptor.prototype, "notification", {
            get: function () {
                return this.injector.get(i1$1.NzNotificationService);
            },
            enumerable: true,
            configurable: true
        });
        DefaultInterceptor.prototype.goTo = function (url) {
            var _this = this;
            setTimeout(function () { return _this.injector.get(router.Router).navigateByUrl(url); });
        };
        DefaultInterceptor.prototype.checkStatus = function (ev) {
            if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
                return;
            }
            var errortext = CODEMESSAGE[ev.status] || ev.statusText;
            this.notification.error("\u8BF7\u6C42\u9519\u8BEF " + ev.status + ": " + ev.url, errortext);
        };
        DefaultInterceptor.prototype.handleData = function (ev) {
            // 可能会因为 `throw` 导出无法执行 `_HttpClient` 的 `end()` 操作
            if (ev.status > 0) {
                this.injector.get(i1._HttpClient).end();
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
                    this.injector.get(auth.DA_SERVICE_TOKEN).clear();
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
                    }
                    break;
            }
            if (ev instanceof http.HttpErrorResponse) {
                return rxjs.throwError(ev);
            }
            else {
                return rxjs.of(ev);
            }
        };
        DefaultInterceptor.prototype.intercept = function (req, next) {
            var _this = this;
            // 统一加上服务端前缀
            var url = req.url;
            if (!url.startsWith('https://') && !url.startsWith('http://')) {
                url = "./" + url;
            }
            var newReq = req.clone({ url: url });
            return next.handle(newReq).pipe(operators.mergeMap(function (event) {
                // 允许统一对请求错误处理
                if (event instanceof http.HttpResponseBase) {
                    return _this.handleData(event);
                }
                // 若一切都正常，则后续操作
                return rxjs.of(event);
            }), operators.catchError(function (err) { return _this.handleData(err); }));
        };
        return DefaultInterceptor;
    }());
    exports.DefaultInterceptor = __decorate([
        i0.Injectable(),
        __metadata("design:paramtypes", [i0.Injector])
    ], exports.DefaultInterceptor);

    exports.MessagesService = /** @class */ (function () {
        function MessagesService(modalSrv) {
            this.modalSrv = modalSrv;
        }
        MessagesService.prototype.info = function (message, title) {
            if (title === void 0) { title = "訊息"; }
            this.modalSrv.info({
                nzTitle: title,
                nzContent: message
            });
        };
        MessagesService.prototype.success = function (message, title) {
            if (title === void 0) { title = "成功訊息"; }
            this.modalSrv.success({
                nzTitle: title,
                nzContent: message
            });
        };
        MessagesService.prototype.warn = function (message, title) {
            if (title === void 0) { title = "警告訊息"; }
            this.modalSrv.warning({
                nzTitle: title,
                nzContent: message
            });
        };
        MessagesService.prototype.error = function (message, title) {
            if (title === void 0) { title = "錯誤訊息"; }
            this.modalSrv.error({
                nzTitle: title,
                nzContent: message
            });
        };
        MessagesService.prototype.confirm = function (message, titleOrCallBack, callback) {
            if (typeof titleOrCallBack == 'string') {
                this.modalSrv.confirm({
                    nzTitle: titleOrCallBack,
                    nzContent: message,
                    nzOnOk: function () {
                        if (callback)
                            callback(true);
                    },
                    nzOnCancel: function () {
                        if (callback)
                            callback(false);
                    }
                });
            }
            else {
                this.modalSrv.confirm({
                    nzTitle: "請確認",
                    nzContent: message,
                    nzOnOk: function () {
                        if (titleOrCallBack)
                            titleOrCallBack(true);
                    },
                    nzOnCancel: function () {
                        if (titleOrCallBack)
                            titleOrCallBack(false);
                    }
                });
            }
        };
        return MessagesService;
    }());
    exports.MessagesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MessagesService_Factory() { return new exports.MessagesService(i0.ɵɵinject(i1$2.NzModalService)); }, token: exports.MessagesService, providedIn: "root" });
    exports.MessagesService = __decorate([
        i0.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [i1$2.NzModalService])
    ], exports.MessagesService);

    exports.NotifyService = /** @class */ (function () {
        function NotifyService(notification) {
            this.notification = notification;
        }
        NotifyService.prototype.showNotify = function (type, title, content) {
            this.notification.create(type, title, content);
        };
        NotifyService.prototype.success = function (content, title) {
            if (content === void 0) { content = ''; }
            if (title === void 0) { title = "成功"; }
            this.showNotify('success', title, content);
        };
        NotifyService.prototype.info = function (content, title) {
            if (content === void 0) { content = ''; }
            if (title === void 0) { title = "訊息"; }
            this.showNotify('info', title, content);
        };
        NotifyService.prototype.warning = function (content, title) {
            if (content === void 0) { content = ''; }
            if (title === void 0) { title = "警告"; }
            this.showNotify('warning', title, content);
        };
        NotifyService.prototype.error = function (content, title) {
            if (content === void 0) { content = ''; }
            if (title === void 0) { title = "錯誤"; }
            this.showNotify('error', title, content);
        };
        return NotifyService;
    }());
    exports.NotifyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NotifyService_Factory() { return new exports.NotifyService(i0.ɵɵinject(i1$1.NzNotificationService)); }, token: exports.NotifyService, providedIn: "root" });
    exports.NotifyService = __decorate([
        i0.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [i1$1.NzNotificationService])
    ], exports.NotifyService);

    // Custom icon static resources
    var ICONS = [icons.InfoOutline, icons.BulbOutline, icons.ProfileOutline, icons.ExceptionOutline, icons.LinkOutline];

    /*
    * Automatically generated by 'ng g ng-alain:plugin icon'
    * @see https://ng-alain.com/cli/plugin#icon
    */
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
     * 用于应用启动时
     * 一般用来获取应用所需要的基础数据等
     */
    exports.StartupService = /** @class */ (function () {
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
        StartupService.prototype.load = function () {
            var _this = this;
            // only works with promises
            // https://github.com/angular/angular/issues/15088
            return new Promise(function (resolve) {
                rxjs.zip(_this.httpClient.get("assets/tmp/i18n/" + _this.i18n.defaultLang + ".json"), _this.httpClient.get('assets/tmp/app-data.json'))
                    .pipe(
                // 接收其他拦截器后产生的异常消息
                operators.catchError(function (res) {
                    console.warn("StartupService.load: Network request failed", res);
                    resolve(null);
                    return [];
                }))
                    .subscribe(function (_a) {
                    var _b = __read(_a, 2), langData = _b[0], appData = _b[1];
                    // setting language data
                    _this.translate.setTranslation(_this.i18n.defaultLang, langData);
                    _this.translate.setDefaultLang(_this.i18n.defaultLang);
                    // application data
                    var res = appData;
                    // 应用信息：包括站点名、描述、年份
                    _this.settingService.setApp(res.app);
                    // 用户信息：包括姓名、头像、邮箱地址
                    //this.settingService.setUser(res.user);
                    // ACL：设置权限为全量
                    _this.aclService.setFull(true);
                    // 初始化菜单
                    _this.menuService.add(res.menu);
                    // 设置页面标题的后缀
                    _this.titleService.default = '';
                    _this.titleService.suffix = res.app.name;
                }, function () { }, function () {
                    resolve(null);
                });
            });
        };
        return StartupService;
    }());
    exports.StartupService = __decorate([
        i0.Injectable(),
        __param(3, i0.Inject(i1.ALAIN_I18N_TOKEN)),
        __metadata("design:paramtypes", [icon.NzIconService,
            i1.MenuService,
            i3.TranslateService,
            exports.I18NService,
            i1.SettingsService,
            acl.ACLService,
            i1.TitleService,
            http.HttpClient])
    ], exports.StartupService);

    // https://angular.io/guide/styleguide#style-04-12
    function throwIfAlreadyLoaded(parentModule, moduleName) {
        if (parentModule) {
            throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
        }
    }

    exports.CoreModule = /** @class */ (function () {
        function CoreModule(parentModule) {
            throwIfAlreadyLoaded(parentModule, 'CoreModule');
        }
        return CoreModule;
    }());
    exports.CoreModule = __decorate([
        i0.NgModule({
            providers: [],
        }),
        __param(0, i0.Optional()), __param(0, i0.SkipSelf()),
        __metadata("design:paramtypes", [exports.CoreModule])
    ], exports.CoreModule);

    /**
     * Generated bundle index. Do not edit.
     */

    exports.throwIfAlreadyLoaded = throwIfAlreadyLoaded;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-ng-alain-core.umd.js.map
