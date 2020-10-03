(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@ngxs/store'), require('rxjs'), require('rxjs/operators'), require('@angular/common/http'), require('snq'), require('angular-oauth2-oidc'), require('@angular/common'), require('@ngxs/router-plugin'), require('just-clone'), require('just-compare'), require('@angular/forms'), require('@ngxs/storage-plugin')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.core', ['exports', '@angular/core', '@angular/router', '@ngxs/store', 'rxjs', 'rxjs/operators', '@angular/common/http', 'snq', 'angular-oauth2-oidc', '@angular/common', '@ngxs/router-plugin', 'just-clone', 'just-compare', '@angular/forms', '@ngxs/storage-plugin'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng.core = {}), global.ng.core, global.ng.router, global.i1, global.rxjs, global.rxjs.operators, global.ng.common.http, global.snq, global.i1$1, global.ng.common, global.routerPlugin, global.clone, global.compare, global.ng.forms, global.storagePlugin));
}(this, (function (exports, i0, i1$2, i1, rxjs, operators, i2, snq, i1$1, common, routerPlugin, clone, compare, forms, storagePlugin) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var snq__default = /*#__PURE__*/_interopDefaultLegacy(snq);
    var clone__default = /*#__PURE__*/_interopDefaultLegacy(clone);
    var compare__default = /*#__PURE__*/_interopDefaultLegacy(compare);

    // Not an abstract class on purpose. Do not change!
    // tslint:disable-next-line: use-component-selector
    var AbstractNgModelComponent = /** @class */ (function () {
        function AbstractNgModelComponent(injector) {
            this.injector = injector;
            this.valueFn = function (value) { return value; };
            this.valueLimitFn = function (value) { return false; };
            // tslint:disable-next-line: deprecation
            this.cdRef = injector.get(i0.ChangeDetectorRef);
        }
        Object.defineProperty(AbstractNgModelComponent.prototype, "value", {
            get: function () {
                return this._value || this.defaultValue;
            },
            set: function (value) {
                value = this.valueFn(value, this._value);
                if (this.valueLimitFn(value, this._value) !== false || this.readonly)
                    return;
                this._value = value;
                this.notifyValueChange();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AbstractNgModelComponent.prototype, "defaultValue", {
            get: function () {
                return this._value;
            },
            enumerable: false,
            configurable: true
        });
        AbstractNgModelComponent.prototype.notifyValueChange = function () {
            if (this.onChange) {
                this.onChange(this.value);
            }
        };
        AbstractNgModelComponent.prototype.writeValue = function (value) {
            var _this = this;
            this._value = this.valueLimitFn(value, this._value) || value;
            setTimeout(function () { return _this.cdRef.markForCheck(); }, 0);
        };
        AbstractNgModelComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        AbstractNgModelComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        AbstractNgModelComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        return AbstractNgModelComponent;
    }());
    AbstractNgModelComponent.decorators = [
        { type: i0.Component, args: [{ template: '' },] }
    ];
    AbstractNgModelComponent.ctorParameters = function () { return [
        { type: i0.Injector }
    ]; };
    AbstractNgModelComponent.propDecorators = {
        disabled: [{ type: i0.Input }],
        readonly: [{ type: i0.Input }],
        valueFn: [{ type: i0.Input }],
        valueLimitFn: [{ type: i0.Input }],
        value: [{ type: i0.Input }]
    };

    var GetAppConfiguration = /** @class */ (function () {
        function GetAppConfiguration() {
        }
        return GetAppConfiguration;
    }());
    GetAppConfiguration.type = '[Config] Get App Configuration';
    var SetEnvironment = /** @class */ (function () {
        function SetEnvironment(environment) {
            this.environment = environment;
        }
        return SetEnvironment;
    }());
    SetEnvironment.type = '[Config] Set Environment';

    var StartLoader = /** @class */ (function () {
        function StartLoader(payload) {
            this.payload = payload;
        }
        return StartLoader;
    }());
    StartLoader.type = '[Loader] Start';
    var StopLoader = /** @class */ (function () {
        function StopLoader(payload) {
            this.payload = payload;
        }
        return StopLoader;
    }());
    StopLoader.type = '[Loader] Stop';

    var GetProfile = /** @class */ (function () {
        function GetProfile() {
        }
        return GetProfile;
    }());
    GetProfile.type = '[Profile] Get';
    var UpdateProfile = /** @class */ (function () {
        function UpdateProfile(payload) {
            this.payload = payload;
        }
        return UpdateProfile;
    }());
    UpdateProfile.type = '[Profile] Update';
    var ChangePassword = /** @class */ (function () {
        function ChangePassword(payload) {
            this.payload = payload;
        }
        return ChangePassword;
    }());
    ChangePassword.type = '[Profile] Change Password';

    // tslint:disable: max-line-length
    /**
     * @deprecated To be deleted in v4.0. Use ReplaceableComponentsService instead. See the doc (https://docs.abp.io/en/abp/latest/UI/Angular/Component-Replacement)
     */
    var AddReplaceableComponent = /** @class */ (function () {
        function AddReplaceableComponent(payload, reload) {
            this.payload = payload;
            this.reload = reload;
        }
        return AddReplaceableComponent;
    }());
    AddReplaceableComponent.type = '[ReplaceableComponents] Add';

    var RestOccurError = /** @class */ (function () {
        function RestOccurError(payload) {
            this.payload = payload;
        }
        return RestOccurError;
    }());
    RestOccurError.type = '[Rest] Error';

    var SetLanguage = /** @class */ (function () {
        function SetLanguage(payload, dispatchAppConfiguration) {
            this.payload = payload;
            this.dispatchAppConfiguration = dispatchAppConfiguration;
        }
        return SetLanguage;
    }());
    SetLanguage.type = '[Session] Set Language';
    var SetTenant = /** @class */ (function () {
        function SetTenant(payload) {
            this.payload = payload;
        }
        return SetTenant;
    }());
    SetTenant.type = '[Session] Set Tenant';
    var ModifyOpenedTabCount = /** @class */ (function () {
        function ModifyOpenedTabCount(operation) {
            this.operation = operation;
        }
        return ModifyOpenedTabCount;
    }());
    ModifyOpenedTabCount.type = '[Session] Modify Opened Tab Count';
    var SetRemember = /** @class */ (function () {
        function SetRemember(payload) {
            this.payload = payload;
        }
        return SetRemember;
    }());
    SetRemember.type = '[Session] Set Remember';

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
                if (Object.prototype.hasOwnProperty.call(b, p))
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
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
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
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
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

    function createTokenParser(format) {
        return function (string) {
            var tokens = [];
            var regex = format.replace(/\./g, '\\.').replace(/\{\s?([0-9a-zA-Z]+)\s?\}/g, function (_, token) {
                tokens.push(token);
                return '(.+)';
            });
            var matches = (string.match(regex) || []).slice(1);
            return matches.reduce(function (acc, v, i) {
                var key = tokens[i];
                acc[key] = __spread((acc[key] || []), [v]).filter(Boolean);
                return acc;
            }, {});
        };
    }
    function interpolate(text, params) {
        return text
            .replace(/(['"]?\{\s*(\d+)\s*\}['"]?)/g, function (_, match, digit) { var _a; return (_a = params[digit]) !== null && _a !== void 0 ? _a : match; })
            .replace(/\s+/g, ' ');
    }

    var SessionState_1;
    exports.ɵbi = SessionState_1 = /** @class */ (function () {
        function SessionState(oAuthService, store, actions) {
            var _this = this;
            this.oAuthService = oAuthService;
            this.store = store;
            this.actions = actions;
            actions
                .pipe(i1.ofActionSuccessful(GetAppConfiguration))
                .pipe(operators.take(1))
                .subscribe(function () {
                var _a;
                var sessionDetail = ((_a = _this.store.selectSnapshot(SessionState_1)) === null || _a === void 0 ? void 0 : _a.sessionDetail) || {};
                var fiveMinutesBefore = new Date().valueOf() - 5 * 60 * 1000;
                if (sessionDetail.lastExitTime &&
                    sessionDetail.openedTabCount === 0 &&
                    _this.oAuthService.hasValidAccessToken() &&
                    sessionDetail.remember === false &&
                    sessionDetail.lastExitTime < fiveMinutesBefore) {
                    _this.oAuthService.logOut();
                }
                _this.store.dispatch(new ModifyOpenedTabCount('increase'));
                rxjs.fromEvent(window, 'unload').subscribe(function (event) {
                    _this.store.dispatch(new ModifyOpenedTabCount('decrease'));
                });
            });
        }
        SessionState.getLanguage = function (_b) {
            var language = _b.language;
            return language;
        };
        SessionState.getTenant = function (_b) {
            var tenant = _b.tenant;
            return tenant;
        };
        SessionState.getSessionDetail = function (_b) {
            var sessionDetail = _b.sessionDetail;
            return sessionDetail;
        };
        SessionState.prototype.setLanguage = function (_b, _c) {
            var patchState = _b.patchState, dispatch = _b.dispatch;
            var payload = _c.payload, _d = _c.dispatchAppConfiguration, dispatchAppConfiguration = _d === void 0 ? true : _d;
            patchState({
                language: payload,
            });
            if (dispatchAppConfiguration)
                return dispatch(new GetAppConfiguration());
        };
        SessionState.prototype.setTenant = function (_b, _c) {
            var patchState = _b.patchState;
            var payload = _c.payload;
            patchState({
                tenant: payload,
            });
        };
        SessionState.prototype.setRemember = function (_b, _c) {
            var getState = _b.getState, patchState = _b.patchState;
            var remember = _c.payload;
            var sessionDetail = getState().sessionDetail;
            patchState({
                sessionDetail: Object.assign(Object.assign({}, sessionDetail), { remember: remember }),
            });
        };
        SessionState.prototype.modifyOpenedTabCount = function (_b, _c) {
            var getState = _b.getState, patchState = _b.patchState;
            var operation = _c.operation;
            // tslint:disable-next-line: prefer-const
            var _a = getState().sessionDetail || { openedTabCount: 0 }, openedTabCount = _a.openedTabCount, lastExitTime = _a.lastExitTime, detail = __rest(_a, ["openedTabCount", "lastExitTime"]);
            if (operation === 'increase') {
                openedTabCount++;
            }
            else if (operation === 'decrease') {
                openedTabCount--;
                lastExitTime = new Date().valueOf();
            }
            if (!openedTabCount || openedTabCount < 0) {
                openedTabCount = 0;
            }
            patchState({
                sessionDetail: Object.assign({ openedTabCount: openedTabCount,
                    lastExitTime: lastExitTime }, detail),
            });
        };
        return SessionState;
    }());
    exports.ɵbi.decorators = [
        { type: i0.Injectable }
    ];
    exports.ɵbi.ctorParameters = function () { return [
        { type: i1$1.OAuthService },
        { type: i1.Store },
        { type: i1.Actions }
    ]; };
    __decorate([
        i1.Action(SetLanguage),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, SetLanguage]),
        __metadata("design:returntype", void 0)
    ], exports.ɵbi.prototype, "setLanguage", null);
    __decorate([
        i1.Action(SetTenant),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, SetTenant]),
        __metadata("design:returntype", void 0)
    ], exports.ɵbi.prototype, "setTenant", null);
    __decorate([
        i1.Action(SetRemember),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, SetRemember]),
        __metadata("design:returntype", void 0)
    ], exports.ɵbi.prototype, "setRemember", null);
    __decorate([
        i1.Action(ModifyOpenedTabCount),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, ModifyOpenedTabCount]),
        __metadata("design:returntype", void 0)
    ], exports.ɵbi.prototype, "modifyOpenedTabCount", null);
    __decorate([
        i1.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", String)
    ], exports.ɵbi, "getLanguage", null);
    __decorate([
        i1.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], exports.ɵbi, "getTenant", null);
    __decorate([
        i1.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], exports.ɵbi, "getSessionDetail", null);
    exports.ɵbi = SessionState_1 = __decorate([
        i1.State({
            name: 'SessionState',
            defaults: { sessionDetail: { openedTabCount: 0 } },
        }),
        __metadata("design:paramtypes", [i1$1.OAuthService, i1.Store, i1.Actions])
    ], exports.ɵbi);

    var ConfigState_1;
    exports.ɵbo = ConfigState_1 = /** @class */ (function () {
        function ConfigState(http, store) {
            this.http = http;
            this.store = store;
        }
        ConfigState.getAll = function (state) {
            return state;
        };
        ConfigState.getApplicationInfo = function (state) {
            return state.environment.application || {};
        };
        ConfigState.getOne = function (key) {
            var selector = i1.createSelector([ConfigState_1], function (state) {
                return state[key];
            });
            return selector;
        };
        ConfigState.getDeep = function (keys) {
            if (typeof keys === 'string') {
                keys = keys.split('.');
            }
            if (!Array.isArray(keys)) {
                throw new Error('The argument must be a dot string or an string array.');
            }
            var selector = i1.createSelector([ConfigState_1], function (state) {
                return keys.reduce(function (acc, val) {
                    if (acc) {
                        return acc[val];
                    }
                    return undefined;
                }, state);
            });
            return selector;
        };
        ConfigState.getApiUrl = function (key) {
            var selector = i1.createSelector([ConfigState_1], function (state) {
                return (state.environment.apis[key || 'default'] || state.environment.apis.default).url;
            });
            return selector;
        };
        ConfigState.getFeature = function (key) {
            var selector = i1.createSelector([ConfigState_1], function (state) {
                return snq__default['default'](function () { return state.features.values[key]; });
            });
            return selector;
        };
        ConfigState.getSetting = function (key) {
            var selector = i1.createSelector([ConfigState_1], function (state) {
                return snq__default['default'](function () { return state.setting.values[key]; });
            });
            return selector;
        };
        ConfigState.getSettings = function (keyword) {
            var selector = i1.createSelector([ConfigState_1], function (state) {
                var settings = snq__default['default'](function () { return state.setting.values; }, {});
                if (!keyword)
                    return settings;
                var keysFound = Object.keys(settings).filter(function (key) { return key.indexOf(keyword) > -1; });
                return keysFound.reduce(function (acc, key) {
                    acc[key] = settings[key];
                    return acc;
                }, {});
            });
            return selector;
        };
        ConfigState.getGrantedPolicy = function (key) {
            var selector = i1.createSelector([ConfigState_1], function (state) {
                if (!key)
                    return true;
                var getPolicy = function (k) { return snq__default['default'](function () { return state.auth.grantedPolicies[k]; }, false); };
                var orRegexp = /\|\|/g;
                var andRegexp = /&&/g;
                // TODO: Allow combination of ANDs & ORs
                if (orRegexp.test(key)) {
                    var keys = key.split('||').filter(Boolean);
                    if (keys.length < 2)
                        return false;
                    return keys.some(function (k) { return getPolicy(k.trim()); });
                }
                else if (andRegexp.test(key)) {
                    var keys = key.split('&&').filter(Boolean);
                    if (keys.length < 2)
                        return false;
                    return keys.every(function (k) { return getPolicy(k.trim()); });
                }
                return getPolicy(key);
            });
            return selector;
        };
        ConfigState.getLocalizationResource = function (resourceName) {
            var selector = i1.createSelector([ConfigState_1], function (state) {
                return state.localization.values[resourceName];
            });
            return selector;
        };
        ConfigState.getLocalization = function (key) {
            var interpolateParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                interpolateParams[_i - 1] = arguments[_i];
            }
            if (!key)
                key = '';
            var defaultValue;
            if (typeof key !== 'string') {
                defaultValue = key.defaultValue;
                key = key.key;
            }
            var keys = key.split('::');
            var selector = i1.createSelector([ConfigState_1], function (state) {
                var warn = function (message) {
                    if (!state.environment.production)
                        console.warn(message);
                };
                if (keys.length < 2) {
                    warn('The localization source separator (::) not found.');
                    return defaultValue || key;
                }
                if (!state.localization)
                    return defaultValue || keys[1];
                var sourceName = keys[0] ||
                    snq__default['default'](function () { return state.environment.localization.defaultResourceName; }) ||
                    state.localization.defaultResourceName;
                var sourceKey = keys[1];
                if (sourceName === '_') {
                    return defaultValue || sourceKey;
                }
                if (!sourceName) {
                    warn('Localization source name is not specified and the defaultResourceName was not defined!');
                    return defaultValue || sourceKey;
                }
                var source = state.localization.values[sourceName];
                if (!source) {
                    warn('Could not find localization source: ' + sourceName);
                    return defaultValue || sourceKey;
                }
                var localization = source[sourceKey];
                if (typeof localization === 'undefined') {
                    return defaultValue || sourceKey;
                }
                // [TODO]: next line should be removed in v3.2, breaking change!!!
                interpolateParams = interpolateParams.filter(function (params) { return params != null; });
                if (localization)
                    localization = interpolate(localization, interpolateParams);
                if (typeof localization !== 'string')
                    localization = '';
                return localization || defaultValue || key;
            });
            return selector;
        };
        ConfigState.prototype.addData = function (_a) {
            var _this = this;
            var patchState = _a.patchState, dispatch = _a.dispatch;
            var apiName = 'default';
            var api = this.store.selectSnapshot(ConfigState_1.getApiUrl(apiName));
            return this.http
                .get(api + "/api/abp/application-configuration")
                .pipe(operators.tap(function (configuration) { return patchState(Object.assign({}, configuration)); }), operators.switchMap(function (configuration) {
                var lang = configuration.localization.currentCulture.cultureName;
                if (lang.includes(';')) {
                    lang = lang.split(';')[0];
                }
                document.documentElement.setAttribute('lang', lang);
                return _this.store.selectSnapshot(exports.ɵbi.getLanguage)
                    ? rxjs.of(null)
                    : dispatch(new SetLanguage(lang, false));
            }), operators.catchError(function (err) {
                dispatch(new RestOccurError(err));
                return rxjs.throwError(err);
            }));
        };
        ConfigState.prototype.setEnvironment = function (_a, _b) {
            var patchState = _a.patchState;
            var environment = _b.environment;
            return patchState({ environment: environment });
        };
        return ConfigState;
    }());
    exports.ɵbo.decorators = [
        { type: i0.Injectable }
    ];
    exports.ɵbo.ctorParameters = function () { return [
        { type: i2.HttpClient },
        { type: i1.Store }
    ]; };
    __decorate([
        i1.Action(GetAppConfiguration),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], exports.ɵbo.prototype, "addData", null);
    __decorate([
        i1.Action(SetEnvironment),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, SetEnvironment]),
        __metadata("design:returntype", void 0)
    ], exports.ɵbo.prototype, "setEnvironment", null);
    __decorate([
        i1.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], exports.ɵbo, "getAll", null);
    __decorate([
        i1.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], exports.ɵbo, "getApplicationInfo", null);
    exports.ɵbo = ConfigState_1 = __decorate([
        i1.State({
            name: 'ConfigState',
            defaults: {},
        }),
        __metadata("design:paramtypes", [i2.HttpClient, i1.Store])
    ], exports.ɵbo);

    function noop() {
        // tslint:disable-next-line: only-arrow-functions
        var fn = function () { };
        return fn;
    }
    function isUndefinedOrEmptyString(value) {
        return value === undefined || value === '';
    }
    function isNullOrUndefined(obj) {
        return obj === null || obj === undefined;
    }
    function exists(obj) {
        return !isNullOrUndefined(obj);
    }
    function isObject(obj) {
        return obj instanceof Object;
    }
    function isArray(obj) {
        return Array.isArray(obj);
    }
    function isObjectAndNotArray(obj) {
        return isObject(obj) && !isArray(obj);
    }

    // Different locales from .NET
    // Key is .NET locale, value is Angular locale
    var localesMapping = {
        'ar-sa': 'ar-SA',
        'ca-ES-valencia': 'ca-ES-VALENCIA',
        'de-de': 'de',
        'es-ES': 'es',
        'en-US': 'en',
        'fil-Latn': 'en',
        'ku-Arab': 'en',
        'ky-Cyrl': 'en',
        'mi-Latn': 'en',
        'prs-Arab': 'en',
        'qut-Latn': 'en',
        nso: 'en',
        quz: 'en',
        'fr-FR': 'fr',
        'gd-Latn': 'gd',
        'ha-Latn': 'ha',
        'ig-Latn': 'ig',
        'it-it': 'it',
        'mn-Cyrl': 'mn',
        'pt-BR': 'pt',
        'sd-Arab': 'pa-Arab',
        'sr-Cyrl-RS': 'sr-Cyrl',
        'sr-Latn-RS': 'sr-Latn',
        'tg-Cyrl': 'tg',
        'tk-Latn': 'tk',
        'tt-Cyrl': 'tt',
        'ug-Arab': 'ug',
        'yo-Latn': 'yo',
    };

    var CORE_OPTIONS = new i0.InjectionToken('CORE_OPTIONS');
    function coreOptionsFactory(_a) {
        var _b = _a.cultureNameLocaleFileMap, cultureNameLocaleFileMap = _b === void 0 ? {} : _b, options = __rest(_a, ["cultureNameLocaleFileMap"]);
        return Object.assign(Object.assign({}, options), { cultureNameLocaleFileMap: Object.assign(Object.assign({}, localesMapping), cultureNameLocaleFileMap) });
    }

    var RestService = /** @class */ (function () {
        function RestService(options, http, store) {
            this.options = options;
            this.http = http;
            this.store = store;
        }
        RestService.prototype.getApiFromStore = function (apiName) {
            return this.store.selectSnapshot(exports.ɵbo.getApiUrl(apiName));
        };
        RestService.prototype.handleError = function (err) {
            this.store.dispatch(new RestOccurError(err));
            return rxjs.throwError(err);
        };
        // TODO: Deprecate service or improve interface in v3.0
        RestService.prototype.request = function (request, config, api) {
            var _this = this;
            config = config || {};
            api = api || this.getApiFromStore(config.apiName);
            var method = request.method, params = request.params, options = __rest(request, ["method", "params"]);
            var _a = config.observe /* Body */, observe = _a === void 0 ? "body" : _a /* Body */, skipHandleError = config.skipHandleError;
            return this.http
                .request(method, api + request.url, Object.assign(Object.assign({ observe: observe }, (params && {
                params: Object.keys(params).reduce(function (acc, key) {
                    var value = params[key];
                    if (isUndefinedOrEmptyString(value))
                        return acc;
                    if (value === null && !_this.options.sendNullsAsQueryParam)
                        return acc;
                    acc[key] = value;
                    return acc;
                }, {}),
            })), options))
                .pipe(operators.catchError(function (err) { return (skipHandleError ? rxjs.throwError(err) : _this.handleError(err)); }));
        };
        return RestService;
    }());
    RestService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RestService_Factory() { return new RestService(i0.ɵɵinject(CORE_OPTIONS), i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(i1.Store)); }, token: RestService, providedIn: "root" });
    RestService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    RestService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [CORE_OPTIONS,] }] },
        { type: i2.HttpClient },
        { type: i1.Store }
    ]; };

    var oAuthStorage = localStorage;
    var AuthFlowStrategy = /** @class */ (function () {
        function AuthFlowStrategy(injector) {
            var _this = this;
            this.injector = injector;
            this.catchError = function (err) { return _this.store.dispatch(new RestOccurError(err)); };
            this.store = injector.get(i1.Store);
            this.oAuthService = injector.get(i1$1.OAuthService);
            this.oAuthConfig = this.store.selectSnapshot(exports.ɵbo.getDeep('environment.oAuthConfig'));
        }
        AuthFlowStrategy.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                var shouldClear;
                return __generator(this, function (_a) {
                    shouldClear = shouldStorageClear(this.store.selectSnapshot(exports.ɵbo.getDeep('environment.oAuthConfig.clientId')), oAuthStorage);
                    if (shouldClear)
                        clearOAuthStorage(oAuthStorage);
                    this.oAuthService.configure(this.oAuthConfig);
                    return [2 /*return*/, this.oAuthService.loadDiscoveryDocument().catch(this.catchError)];
                });
            });
        };
        return AuthFlowStrategy;
    }());
    var AuthCodeFlowStrategy = /** @class */ (function (_super_1) {
        __extends(AuthCodeFlowStrategy, _super_1);
        function AuthCodeFlowStrategy() {
            var _this = _super_1.apply(this, __spread(arguments)) || this;
            _this.isInternalAuth = false;
            return _this;
        }
        AuthCodeFlowStrategy.prototype.init = function () {
            var _super = Object.create(null, {
                init: { get: function () { return _super_1.prototype.init; } }
            });
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, _super.init.call(this)
                            .then(function () { return _this.oAuthService.tryLogin(); })
                            .then(function () {
                            if (_this.oAuthService.hasValidAccessToken() || !_this.oAuthService.getRefreshToken()) {
                                return Promise.resolve();
                            }
                            return _this.oAuthService.refreshToken();
                        })
                            .then(function () { return _this.oAuthService.setupAutomaticSilentRefresh({}, 'access_token'); })];
                });
            });
        };
        AuthCodeFlowStrategy.prototype.login = function () {
            this.oAuthService.initCodeFlow();
        };
        AuthCodeFlowStrategy.prototype.checkIfInternalAuth = function () {
            this.oAuthService.initCodeFlow();
            return false;
        };
        AuthCodeFlowStrategy.prototype.logout = function () {
            this.oAuthService.logOut();
            return rxjs.of(null);
        };
        AuthCodeFlowStrategy.prototype.destroy = function () { };
        return AuthCodeFlowStrategy;
    }(AuthFlowStrategy));
    var AuthPasswordFlowStrategy = /** @class */ (function (_super_1) {
        __extends(AuthPasswordFlowStrategy, _super_1);
        function AuthPasswordFlowStrategy() {
            var _this = _super_1.apply(this, __spread(arguments)) || this;
            _this.isInternalAuth = true;
            return _this;
        }
        AuthPasswordFlowStrategy.prototype.login = function () {
            var router = this.injector.get(i1$2.Router);
            router.navigateByUrl('/account/login');
        };
        AuthPasswordFlowStrategy.prototype.checkIfInternalAuth = function () {
            return true;
        };
        AuthPasswordFlowStrategy.prototype.logout = function () {
            var _this = this;
            var rest = this.injector.get(RestService);
            var issuer = this.store.selectSnapshot(exports.ɵbo.getDeep('environment.oAuthConfig.issuer'));
            return rest
                .request({
                method: 'GET',
                url: '/api/account/logout',
            }, null, issuer)
                .pipe(operators.tap(function () { return _this.oAuthService.logOut(); }), operators.switchMap(function () { return _this.store.dispatch(new GetAppConfiguration()); }));
        };
        AuthPasswordFlowStrategy.prototype.destroy = function () { };
        return AuthPasswordFlowStrategy;
    }(AuthFlowStrategy));
    var AUTH_FLOW_STRATEGY = {
        Code: function (injector) {
            return new AuthCodeFlowStrategy(injector);
        },
        Password: function (injector) {
            return new AuthPasswordFlowStrategy(injector);
        },
    };
    function clearOAuthStorage(storage) {
        if (storage === void 0) { storage = oAuthStorage; }
        var keys = [
            'access_token',
            'id_token',
            'refresh_token',
            'nonce',
            'PKCE_verifier',
            'expires_at',
            'id_token_claims_obj',
            'id_token_expires_at',
            'id_token_stored_at',
            'access_token_stored_at',
            'granted_scopes',
            'session_state',
        ];
        keys.forEach(function (key) { return storage.removeItem(key); });
    }
    function shouldStorageClear(clientId, storage) {
        var key = 'abpOAuthClientId';
        if (!storage.getItem(key)) {
            storage.setItem(key, clientId);
            return false;
        }
        var shouldClear = storage.getItem(key) !== clientId;
        if (shouldClear)
            storage.setItem(key, clientId);
        return shouldClear;
    }

    var AuthService = /** @class */ (function () {
        function AuthService(actions, injector, rest, oAuthService, store, options) {
            var _this = this;
            this.actions = actions;
            this.injector = injector;
            this.rest = rest;
            this.oAuthService = oAuthService;
            this.store = store;
            this.options = options;
            this.setStrategy = function () {
                var flow = _this.store.selectSnapshot(exports.ɵbo.getDeep('environment.oAuthConfig.responseType')) ||
                    'password';
                if (_this.flow === flow)
                    return;
                if (_this.strategy)
                    _this.strategy.destroy();
                _this.flow = flow;
                _this.strategy =
                    _this.flow === 'code'
                        ? AUTH_FLOW_STRATEGY.Code(_this.injector)
                        : AUTH_FLOW_STRATEGY.Password(_this.injector);
            };
            this.setStrategy();
            this.listenToSetEnvironment();
        }
        Object.defineProperty(AuthService.prototype, "isInternalAuth", {
            get: function () {
                return this.strategy.isInternalAuth;
            },
            enumerable: false,
            configurable: true
        });
        AuthService.prototype.listenToSetEnvironment = function () {
            this.actions.pipe(i1.ofActionSuccessful(SetEnvironment)).subscribe(this.setStrategy);
        };
        AuthService.prototype.login = function (username, password) {
            var _this = this;
            var tenant = this.store.selectSnapshot(exports.ɵbi.getTenant);
            return rxjs.from(this.oAuthService.fetchTokenUsingPasswordFlow(username, password, new i2.HttpHeaders(Object.assign({}, (tenant && tenant.id && { __tenant: tenant.id }))))).pipe(operators.switchMap(function () { return _this.store.dispatch(new GetAppConfiguration()); }), operators.tap(function () {
                var redirectUrl = snq__default['default'](function () { return window.history.state.redirectUrl; }) || (_this.options || {}).redirectUrl || '/';
                _this.store.dispatch(new routerPlugin.Navigate([redirectUrl]));
            }), operators.take(1));
        };
        AuthService.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.strategy.init()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        AuthService.prototype.logout = function () {
            return this.strategy.logout();
        };
        AuthService.prototype.initLogin = function () {
            this.strategy.login();
        };
        return AuthService;
    }());
    AuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(RestService), i0.ɵɵinject(i1$1.OAuthService), i0.ɵɵinject(i1.Store), i0.ɵɵinject("ACCOUNT_OPTIONS", 8)); }, token: AuthService, providedIn: "root" });
    AuthService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    AuthService.ctorParameters = function () { return [
        { type: i1.Actions },
        { type: i0.Injector },
        { type: RestService },
        { type: i1$1.OAuthService },
        { type: i1.Store },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: ['ACCOUNT_OPTIONS',] }] }
    ]; };

    function deepMerge(target, source) {
        if (isObjectAndNotArray(target) && isObjectAndNotArray(source)) {
            return deepMergeRecursively(target, source);
        }
        else if (isNullOrUndefined(target) && isNullOrUndefined(source)) {
            return {};
        }
        else {
            return exists(source) ? source : target;
        }
    }
    function deepMergeRecursively(target, source) {
        var shouldNotRecurse = isNullOrUndefined(target) ||
            isNullOrUndefined(source) || // at least one not defined
            isArray(target) ||
            isArray(source) || // at least one array
            !isObject(target) ||
            !isObject(source); // at least one not an object
        /**
         * if we will not recurse any further,
         * we will prioritize source if it is a defined value.
         */
        if (shouldNotRecurse) {
            return exists(source) ? source : target;
        }
        var keysOfTarget = Object.keys(target);
        var keysOfSource = Object.keys(source);
        var uniqueKeys = new Set(keysOfTarget.concat(keysOfSource));
        return __spread(uniqueKeys).reduce(function (retVal, key) {
            retVal[key] = deepMergeRecursively(target[key], source[key]);
            return retVal;
        }, {});
    }

    function getRemoteEnv(injector, environment) {
        var remoteEnv = environment.remoteEnv;
        var _a = remoteEnv || {}, _b = _a.headers, headers = _b === void 0 ? {} : _b, _c = _a.method, method = _c === void 0 ? 'GET' : _c, url = _a.url;
        if (!url)
            return Promise.resolve();
        var http = injector.get(i2.HttpClient);
        var store = injector.get(i1.Store);
        return http
            .request(method, url, { headers: headers })
            .pipe(operators.catchError(function (err) { return store.dispatch(new RestOccurError(err)); }), // TODO: Condiser get handle function from a provider
        operators.switchMap(function (env) { return store.dispatch(mergeEnvironments(environment, env, remoteEnv)); }))
            .toPromise();
    }
    function mergeEnvironments(local, remote, config) {
        switch (config.mergeStrategy) {
            case 'deepmerge':
                return new SetEnvironment(deepMerge(local, remote));
            case 'overwrite':
            case null:
            case undefined:
                return new SetEnvironment(remote);
            default:
                return new SetEnvironment(config.mergeStrategy(local, remote));
        }
    }

    var MultiTenancyService = /** @class */ (function () {
        function MultiTenancyService(restService, store) {
            this.restService = restService;
            this.store = store;
            this._domainTenant = null;
            this.isTenantBoxVisible = true;
            this.apiName = 'abp';
        }
        Object.defineProperty(MultiTenancyService.prototype, "domainTenant", {
            get: function () {
                return this._domainTenant;
            },
            set: function (value) {
                this._domainTenant = value;
                this.store.dispatch(new SetTenant(value));
            },
            enumerable: false,
            configurable: true
        });
        MultiTenancyService.prototype.findTenantByName = function (name, headers) {
            return this.restService.request({
                url: "/api/abp/multi-tenancy/tenants/by-name/" + name,
                method: 'GET',
                headers: headers,
            }, { apiName: this.apiName });
        };
        MultiTenancyService.prototype.findTenantById = function (id, headers) {
            return this.restService.request({ url: "/api/abp/multi-tenancy/tenants/by-id/" + id, method: 'GET', headers: headers }, { apiName: this.apiName });
        };
        return MultiTenancyService;
    }());
    MultiTenancyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MultiTenancyService_Factory() { return new MultiTenancyService(i0.ɵɵinject(RestService), i0.ɵɵinject(i1.Store)); }, token: MultiTenancyService, providedIn: "root" });
    MultiTenancyService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    MultiTenancyService.ctorParameters = function () { return [
        { type: RestService },
        { type: i1.Store }
    ]; };

    var tenancyPlaceholder = '{0}';
    function getCurrentTenancyName(appBaseUrl) {
        var _a;
        if (appBaseUrl.charAt(appBaseUrl.length - 1) !== '/')
            appBaseUrl += '/';
        var parseTokens = createTokenParser(appBaseUrl);
        var token = tenancyPlaceholder.replace(/[}{]/g, '');
        return (_a = parseTokens(window.location.href)[token]) === null || _a === void 0 ? void 0 : _a[0];
    }
    function parseTenantFromUrl(injector) {
        return __awaiter(this, void 0, void 0, function () {
            var store, multiTenancyService, environment, _b, baseUrl, tenancyName;
            return __generator(this, function (_c) {
                store = injector.get(i1.Store);
                multiTenancyService = injector.get(MultiTenancyService);
                environment = store.selectSnapshot(exports.ɵbo.getOne('environment'));
                _b = environment.application.baseUrl, baseUrl = _b === void 0 ? '' : _b;
                tenancyName = getCurrentTenancyName(baseUrl);
                if (tenancyName) {
                    multiTenancyService.isTenantBoxVisible = false;
                    return [2 /*return*/, setEnvironment(store, tenancyName)
                            .pipe(operators.switchMap(function () { return multiTenancyService.findTenantByName(tenancyName, { __tenant: '' }); }), operators.tap(function (res) {
                            multiTenancyService.domainTenant = res.success
                                ? { id: res.tenantId, name: res.name }
                                : null;
                        }))
                            .toPromise()];
                }
                return [2 /*return*/, Promise.resolve()];
            });
        });
    }
    function setEnvironment(store, tenancyName) {
        var environment = clone__default['default'](store.selectSnapshot(exports.ɵbo.getOne('environment')));
        if (environment.application.baseUrl) {
            environment.application.baseUrl = environment.application.baseUrl.replace(tenancyPlaceholder, tenancyName);
        }
        environment.oAuthConfig.issuer = environment.oAuthConfig.issuer.replace(tenancyPlaceholder, tenancyName);
        Object.keys(environment.apis).forEach(function (api) {
            Object.keys(environment.apis[api]).forEach(function (key) {
                environment.apis[api][key] = environment.apis[api][key].replace(tenancyPlaceholder, tenancyName);
            });
        });
        return store.dispatch(new SetEnvironment(environment));
    }

    function getInitialData(injector) {
        var _this = this;
        var fn = function () { return __awaiter(_this, void 0, void 0, function () {
            var store, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        store = injector.get(i1.Store);
                        options = injector.get(CORE_OPTIONS);
                        return [4 /*yield*/, getRemoteEnv(injector, options.environment)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, parseTenantFromUrl(injector)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, injector.get(AuthService).init()];
                    case 3:
                        _a.sent();
                        if (options.skipGetAppConfiguration)
                            return [2 /*return*/];
                        return [2 /*return*/, store
                                .dispatch(new GetAppConfiguration())
                                .pipe(operators.tap(function (res) { return checkAccessToken(store, injector); }))
                                .toPromise()];
                }
            });
        }); };
        return fn;
    }
    function checkAccessToken(store, injector) {
        var oAuth = injector.get(i1$1.OAuthService);
        if (oAuth.hasValidAccessToken() && !store.selectSnapshot(exports.ɵbo.getDeep('currentUser.id'))) {
            clearOAuthStorage();
        }
    }
    function localeInitializer(injector) {
        var fn = function () {
            var store = injector.get(i1.Store);
            var options = injector.get(CORE_OPTIONS);
            var lang = store.selectSnapshot(function (state) { return state.SessionState.language; }) || 'en';
            return new Promise(function (resolve, reject) {
                registerLocale(lang, options.cultureNameLocaleFileMap).then(function () { return resolve('resolved'); }, reject);
            });
        };
        return fn;
    }
    function registerLocale(locale, localeNameMap) {
        return import(
        /* webpackChunkName: "_locale-[request]"*/
        "@angular/common/locales/" + (localeNameMap[locale] || locale) + ".js").then(function (module) {
            common.registerLocaleData(module.default);
        });
    }

    // This will not be necessary when only Angukar 9.1+ is supported
    function getLocaleDirection(locale) {
        return /^(ar(-[A-Z]{2})?|ckb(-IR)?|fa(-AF)?|he|ks|lrc(-IQ)?|mzn|pa-Arab|ps(-PK)?|sd|ug|ur(-IN)?|uz-Arab|yi)$/.test(locale)
            ? 'rtl'
            : 'ltr';
    }
    function createLocalizer(localization) {
        return function (resourceName, key, defaultValue) {
            if (resourceName === '_')
                return key;
            var resource = localization.values[resourceName];
            if (!resource)
                return defaultValue;
            return resource[key] || defaultValue;
        };
    }
    function createLocalizerWithFallback(localization) {
        var findLocalization = createLocalizationFinder(localization);
        return function (resourceNames, keys, defaultValue) {
            var localized = findLocalization(resourceNames, keys).localized;
            return localized || defaultValue;
        };
    }
    function createLocalizationPipeKeyGenerator(localization) {
        var findLocalization = createLocalizationFinder(localization);
        return function (resourceNames, keys, defaultKey) {
            var _a = findLocalization(resourceNames, keys), resourceName = _a.resourceName, key = _a.key;
            return !resourceName ? defaultKey : resourceName === '_' ? key : resourceName + "::" + key;
        };
    }
    function createLocalizationFinder(localization) {
        var localize = createLocalizer(localization);
        return function (resourceNames, keys) {
            resourceNames = resourceNames.concat(localization.defaultResourceName).filter(Boolean);
            var resourceCount = resourceNames.length;
            var keyCount = keys.length;
            for (var i = 0; i < resourceCount; i++) {
                var resourceName = resourceNames[i];
                for (var j = 0; j < keyCount; j++) {
                    var key = keys[j];
                    var localized = localize(resourceName, key, null);
                    if (localized)
                        return { resourceName: resourceName, key: key, localized: localized };
                }
            }
            return { resourceName: undefined, key: undefined, localized: undefined };
        };
    }

    var LocalizationService = /** @class */ (function () {
        function LocalizationService(actions, store, injector, ngZone, otherInstance) {
            this.actions = actions;
            this.store = store;
            this.injector = injector;
            this.ngZone = ngZone;
            if (otherInstance)
                throw new Error('LocalizationService should have only one instance.');
            this.listenToSetLanguage();
        }
        Object.defineProperty(LocalizationService.prototype, "currentLang", {
            /**
             * Returns currently selected language
             */
            get: function () {
                return this.store.selectSnapshot(function (state) { return state.SessionState.language; });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LocalizationService.prototype, "languageChange", {
            get: function () {
                return this.actions.pipe(i1.ofActionSuccessful(SetLanguage), operators.filter(function (action) { return action.dispatchAppConfiguration !== false; }));
            },
            enumerable: false,
            configurable: true
        });
        LocalizationService.prototype.listenToSetLanguage = function () {
            var _this = this;
            this.languageChange.subscribe(function (_a) {
                var payload = _a.payload;
                return _this.registerLocale(payload);
            });
        };
        LocalizationService.prototype.registerLocale = function (locale) {
            var _this = this;
            var router = this.injector.get(i1$2.Router);
            var cultureNameLocaleFileMap = this.injector.get(CORE_OPTIONS).cultureNameLocaleFileMap;
            var shouldReuseRoute = router.routeReuseStrategy.shouldReuseRoute;
            router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
            router.navigated = false;
            return registerLocale(locale, cultureNameLocaleFileMap).then(function () {
                _this.ngZone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, router.navigateByUrl(router.url).catch(rxjs.noop)];
                            case 1:
                                _a.sent();
                                router.routeReuseStrategy.shouldReuseRoute = shouldReuseRoute;
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
        };
        /**
         * Returns an observable localized text with the given interpolation parameters in current language.
         * @param key Localizaton key to replace with localized text
         * @param interpolateParams Values to interpolate
         */
        LocalizationService.prototype.get = function (key) {
            var interpolateParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                interpolateParams[_i - 1] = arguments[_i];
            }
            return this.store.select(exports.ɵbo.getLocalization.apply(exports.ɵbo, __spread([key], interpolateParams)));
        };
        LocalizationService.prototype.getResource = function (resourceName) {
            return this.store.select(exports.ɵbo.getLocalizationResource(resourceName));
        };
        /**
         * Returns localized text with the given interpolation parameters in current language.
         * @param key Localization key to replace with localized text
         * @param interpolateParams Values to intepolate.
         */
        LocalizationService.prototype.instant = function (key) {
            var interpolateParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                interpolateParams[_i - 1] = arguments[_i];
            }
            return this.store.selectSnapshot(exports.ɵbo.getLocalization.apply(exports.ɵbo, __spread([key], interpolateParams)));
        };
        LocalizationService.prototype.localize = function (resourceName, key, defaultValue) {
            return this.store.select(exports.ɵbo.getOne('localization')).pipe(operators.map(createLocalizer), operators.map(function (localize) { return localize(resourceName, key, defaultValue); }));
        };
        LocalizationService.prototype.localizeSync = function (resourceName, key, defaultValue) {
            var localization = this.store.selectSnapshot(exports.ɵbo.getOne('localization'));
            return createLocalizer(localization)(resourceName, key, defaultValue);
        };
        LocalizationService.prototype.localizeWithFallback = function (resourceNames, keys, defaultValue) {
            return this.store.select(exports.ɵbo.getOne('localization')).pipe(operators.map(createLocalizerWithFallback), operators.map(function (localizeWithFallback) { return localizeWithFallback(resourceNames, keys, defaultValue); }));
        };
        LocalizationService.prototype.localizeWithFallbackSync = function (resourceNames, keys, defaultValue) {
            var localization = this.store.selectSnapshot(exports.ɵbo.getOne('localization'));
            return createLocalizerWithFallback(localization)(resourceNames, keys, defaultValue);
        };
        return LocalizationService;
    }());
    LocalizationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LocalizationService_Factory() { return new LocalizationService(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i1.Store), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(LocalizationService, 12)); }, token: LocalizationService, providedIn: "root" });
    LocalizationService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    LocalizationService.ctorParameters = function () { return [
        { type: i1.Actions },
        { type: i1.Store },
        { type: i0.Injector },
        { type: i0.NgZone },
        { type: LocalizationService, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
    ]; };

    var InternalStore = /** @class */ (function () {
        function InternalStore(initialState) {
            var _this = this;
            this.initialState = initialState;
            this.state$ = new rxjs.BehaviorSubject(this.initialState);
            this.update$ = new rxjs.Subject();
            this.sliceState = function (selector, compareFn) {
                if (compareFn === void 0) { compareFn = compare__default['default']; }
                return _this.state$.pipe(operators.map(selector), operators.distinctUntilChanged(compareFn));
            };
            this.sliceUpdate = function (selector, filterFn) {
                if (filterFn === void 0) { filterFn = function (x) { return x !== undefined; }; }
                return _this.update$.pipe(operators.map(selector), operators.filter(filterFn));
            };
        }
        Object.defineProperty(InternalStore.prototype, "state", {
            get: function () {
                return this.state$.value;
            },
            enumerable: false,
            configurable: true
        });
        InternalStore.prototype.patch = function (state) {
            this.state$.next(deepMerge(this.state, state));
            this.update$.next(state);
        };
        InternalStore.prototype.reset = function () {
            this.patch(this.initialState);
        };
        return InternalStore;
    }());

    function findRoute(routes, path) {
        var node = routes.find(function (route) { return route.path === path; });
        return node || path === '/'
            ? node
            : findRoute(routes, path
                .split('/')
                .slice(0, -1)
                .join('/'));
    }
    function getRoutePath(router, url) {
        if (url === void 0) { url = router.url; }
        var emptyGroup = { segments: [] };
        var primaryGroup = router.parseUrl(url).root.children[i1$2.PRIMARY_OUTLET];
        return '/' + (primaryGroup || emptyGroup).segments.map(function (_a) {
            var path = _a.path;
            return path;
        }).join('/');
    }
    function reloadRoute(router, ngZone) {
        var _this = this;
        var shouldReuseRoute = router.routeReuseStrategy.shouldReuseRoute;
        var setRouteReuse = function (reuse) {
            router.routeReuseStrategy.shouldReuseRoute = reuse;
        };
        setRouteReuse(function () { return false; });
        router.navigated = false;
        ngZone.run(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, router.navigateByUrl(router.url).catch(noop)];
                    case 1:
                        _a.sent();
                        setRouteReuse(shouldReuseRoute);
                        return [2 /*return*/];
                }
            });
        }); });
    }

    var ReplaceableComponentsService = /** @class */ (function () {
        function ReplaceableComponentsService(ngZone, router) {
            this.ngZone = ngZone;
            this.router = router;
            this.store = new InternalStore([]);
        }
        Object.defineProperty(ReplaceableComponentsService.prototype, "replaceableComponents$", {
            get: function () {
                return this.store.sliceState(function (state) { return state; });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReplaceableComponentsService.prototype, "replaceableComponents", {
            get: function () {
                return this.store.state;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReplaceableComponentsService.prototype, "onUpdate$", {
            get: function () {
                return this.store.sliceUpdate(function (state) { return state; });
            },
            enumerable: false,
            configurable: true
        });
        ReplaceableComponentsService.prototype.add = function (replaceableComponent, reload) {
            var replaceableComponents = __spread(this.store.state);
            var index = replaceableComponents.findIndex(function (component) { return component.key === replaceableComponent.key; });
            if (index > -1) {
                replaceableComponents[index] = replaceableComponent;
            }
            else {
                replaceableComponents.push(replaceableComponent);
            }
            this.store.patch(replaceableComponents);
            if (reload)
                reloadRoute(this.router, this.ngZone);
        };
        ReplaceableComponentsService.prototype.get = function (replaceableComponentKey) {
            return this.replaceableComponents.find(function (component) { return component.key === replaceableComponentKey; });
        };
        ReplaceableComponentsService.prototype.get$ = function (replaceableComponentKey) {
            return this.replaceableComponents$.pipe(operators.map(function (components) { return components.find(function (component) { return component.key === replaceableComponentKey; }); }));
        };
        return ReplaceableComponentsService;
    }());
    ReplaceableComponentsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ReplaceableComponentsService_Factory() { return new ReplaceableComponentsService(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i1$2.Router)); }, token: ReplaceableComponentsService, providedIn: "root" });
    ReplaceableComponentsService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    ReplaceableComponentsService.ctorParameters = function () { return [
        { type: i0.NgZone },
        { type: i1$2.Router }
    ]; };

    function pushValueTo(array) {
        return function (element) {
            array.push(element);
            return array;
        };
    }

    var BaseTreeNode = /** @class */ (function () {
        function BaseTreeNode(props) {
            this.children = [];
            this.isLeaf = true;
            Object.assign(this, props);
        }
        BaseTreeNode.create = function (props) {
            return new BaseTreeNode(props);
        };
        return BaseTreeNode;
    }());
    function createTreeFromList(list, keySelector, parentKeySelector, valueMapper) {
        var map = createMapFromList(list, keySelector, valueMapper);
        var tree = [];
        list.forEach(function (row) {
            var id = keySelector(row);
            var parentId = parentKeySelector(row);
            var node = map.get(id);
            if (!node)
                return;
            if (parentId) {
                var parent = map.get(parentId);
                if (!parent)
                    return;
                parent.children.push(node);
                parent.isLeaf = false;
                node.parent = parent;
            }
            else {
                tree.push(node);
            }
        });
        return tree;
    }
    function createMapFromList(list, keySelector, valueMapper) {
        var map = new Map();
        list.forEach(function (row) { return map.set(keySelector(row), valueMapper(row)); });
        return map;
    }

    var AbstractTreeService = /** @class */ (function () {
        function AbstractTreeService() {
            this._flat$ = new rxjs.BehaviorSubject([]);
            this._tree$ = new rxjs.BehaviorSubject([]);
            this._visible$ = new rxjs.BehaviorSubject([]);
        }
        Object.defineProperty(AbstractTreeService.prototype, "flat", {
            get: function () {
                return this._flat$.value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AbstractTreeService.prototype, "flat$", {
            get: function () {
                return this._flat$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AbstractTreeService.prototype, "tree", {
            get: function () {
                return this._tree$.value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AbstractTreeService.prototype, "tree$", {
            get: function () {
                return this._tree$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AbstractTreeService.prototype, "visible", {
            get: function () {
                return this._visible$.value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AbstractTreeService.prototype, "visible$", {
            get: function () {
                return this._visible$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        AbstractTreeService.prototype.createTree = function (items) {
            var _this = this;
            return createTreeFromList(items, function (item) { return item[_this.id]; }, function (item) { return item[_this.parentId]; }, function (item) { return BaseTreeNode.create(item); });
        };
        AbstractTreeService.prototype.filterWith = function (setOrMap) {
            var _this = this;
            return this._flat$.value.filter(function (item) { return !setOrMap.has(item[_this.id]); });
        };
        AbstractTreeService.prototype.findItemsToRemove = function (set) {
            var _this = this;
            return this._flat$.value.reduce(function (acc, item) {
                if (!acc.has(item[_this.parentId]))
                    return acc;
                var childSet = new Set([item[_this.id]]);
                var children = _this.findItemsToRemove(childSet);
                return new Set(__spread(acc, children));
            }, set);
        };
        AbstractTreeService.prototype.publish = function (flatItems, visibleItems) {
            this._flat$.next(flatItems);
            this._tree$.next(this.createTree(flatItems));
            this._visible$.next(this.createTree(visibleItems));
            return flatItems;
        };
        AbstractTreeService.prototype.add = function (items) {
            var _this = this;
            var map = new Map();
            items.forEach(function (item) { return map.set(item[_this.id], item); });
            var flatItems = this.filterWith(map);
            map.forEach(pushValueTo(flatItems));
            flatItems.sort(this.sort);
            var visibleItems = flatItems.filter(function (item) { return !_this.hide(item); });
            return this.publish(flatItems, visibleItems);
        };
        AbstractTreeService.prototype.find = function (predicate, tree) {
            var _this = this;
            if (tree === void 0) { tree = this.tree; }
            return tree.reduce(function (acc, node) { return (acc ? acc : predicate(node) ? node : _this.find(predicate, node.children)); }, null);
        };
        AbstractTreeService.prototype.patch = function (identifier, props) {
            var _this = this;
            var flatItems = this._flat$.value;
            var index = flatItems.findIndex(function (item) { return item[_this.id] === identifier; });
            if (index < 0)
                return false;
            flatItems[index] = Object.assign(Object.assign({}, flatItems[index]), props);
            flatItems.sort(this.sort);
            var visibleItems = flatItems.filter(function (item) { return !_this.hide(item); });
            return this.publish(flatItems, visibleItems);
        };
        AbstractTreeService.prototype.refresh = function () {
            return this.add([]);
        };
        AbstractTreeService.prototype.remove = function (identifiers) {
            var _this = this;
            var set = new Set();
            identifiers.forEach(function (id) { return set.add(id); });
            var setToRemove = this.findItemsToRemove(set);
            var flatItems = this.filterWith(setToRemove);
            var visibleItems = flatItems.filter(function (item) { return !_this.hide(item); });
            return this.publish(flatItems, visibleItems);
        };
        AbstractTreeService.prototype.search = function (params, tree) {
            var _this = this;
            if (tree === void 0) { tree = this.tree; }
            var searchKeys = Object.keys(params);
            return tree.reduce(function (acc, node) { return acc
                ? acc
                : searchKeys.every(function (key) { return node[key] === params[key]; })
                    ? node
                    : _this.search(params, node.children); }, null);
        };
        return AbstractTreeService;
    }());
    var AbstractNavTreeService = /** @class */ (function (_super) {
        __extends(AbstractNavTreeService, _super);
        function AbstractNavTreeService(actions, store) {
            var _this = _super.call(this) || this;
            _this.actions = actions;
            _this.store = store;
            _this.id = 'name';
            _this.parentId = 'parentName';
            _this.hide = function (item) { return item.invisible || !_this.isGranted(item); };
            _this.sort = function (a, b) {
                if (!Number.isInteger(a.order))
                    return 1;
                if (!Number.isInteger(b.order))
                    return -1;
                return a.order - b.order;
            };
            _this.subscription = _this.actions
                .pipe(i1.ofActionSuccessful(GetAppConfiguration))
                .subscribe(function () { return _this.refresh(); });
            return _this;
        }
        AbstractNavTreeService.prototype.isGranted = function (_b) {
            var requiredPolicy = _b.requiredPolicy;
            return this.store.selectSnapshot(exports.ɵbo.getGrantedPolicy(requiredPolicy));
        };
        AbstractNavTreeService.prototype.hasChildren = function (identifier) {
            var _this = this;
            var _a;
            var node = this.find(function (item) { return item[_this.id] === identifier; });
            return Boolean((_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a.length);
        };
        AbstractNavTreeService.prototype.hasInvisibleChild = function (identifier) {
            var _this = this;
            var _a;
            var node = this.find(function (item) { return item[_this.id] === identifier; });
            return (_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a.some(function (child) { return child.invisible; });
        };
        /* istanbul ignore next */
        AbstractNavTreeService.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        return AbstractNavTreeService;
    }(AbstractTreeService));
    AbstractNavTreeService.decorators = [
        { type: i0.Injectable }
    ];
    AbstractNavTreeService.ctorParameters = function () { return [
        { type: i1.Actions },
        { type: i1.Store }
    ]; };
    var RoutesService = /** @class */ (function (_super) {
        __extends(RoutesService, _super);
        function RoutesService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RoutesService;
    }(AbstractNavTreeService));
    RoutesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutesService_Factory() { return new RoutesService(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i1.Store)); }, token: RoutesService, providedIn: "root" });
    RoutesService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    var SettingTabsService = /** @class */ (function (_super) {
        __extends(SettingTabsService, _super);
        function SettingTabsService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SettingTabsService;
    }(AbstractNavTreeService));
    SettingTabsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SettingTabsService_Factory() { return new SettingTabsService(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i1.Store)); }, token: SettingTabsService, providedIn: "root" });
    SettingTabsService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];

    var SubscriptionService = /** @class */ (function () {
        function SubscriptionService() {
            this.subscription = new rxjs.Subscription();
        }
        Object.defineProperty(SubscriptionService.prototype, "isClosed", {
            get: function () {
                return this.subscription.closed;
            },
            enumerable: false,
            configurable: true
        });
        SubscriptionService.prototype.addOne = function (source$, nextOrObserver, error) {
            var subscription = source$.subscribe(nextOrObserver, error);
            this.subscription.add(subscription);
            return subscription;
        };
        SubscriptionService.prototype.closeAll = function () {
            this.subscription.unsubscribe();
        };
        SubscriptionService.prototype.closeOne = function (subscription) {
            this.removeOne(subscription);
            subscription.unsubscribe();
        };
        SubscriptionService.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        SubscriptionService.prototype.removeOne = function (subscription) {
            if (!subscription)
                return;
            this.subscription.remove(subscription);
        };
        SubscriptionService.prototype.reset = function () {
            this.subscription.unsubscribe();
            this.subscription = new rxjs.Subscription();
        };
        return SubscriptionService;
    }());
    SubscriptionService.decorators = [
        { type: i0.Injectable }
    ];

    var DynamicLayoutComponent = /** @class */ (function () {
        function DynamicLayoutComponent(injector, localizationService, replaceableComponents, subscription, dynamicLayoutComponent) {
            var _this = this;
            this.localizationService = localizationService;
            this.replaceableComponents = replaceableComponents;
            this.subscription = subscription;
            // TODO: Consider a shared enum (eThemeSharedComponents) for known layouts
            this.layouts = new Map([
                ['application', 'Theme.ApplicationLayoutComponent'],
                ['account', 'Theme.AccountLayoutComponent'],
                ['empty', 'Theme.EmptyLayoutComponent'],
            ]);
            this.isLayoutVisible = true;
            if (dynamicLayoutComponent)
                return;
            var route = injector.get(i1$2.ActivatedRoute);
            var router = injector.get(i1$2.Router);
            var routes = injector.get(RoutesService);
            this.subscription.addOne(router.events, function (event) {
                var _a;
                if (event instanceof i1$2.NavigationEnd) {
                    var expectedLayout = (route.snapshot.data || {}).layout;
                    if (!expectedLayout) {
                        var node = findRoute(routes, getRoutePath(router));
                        node = { parent: node };
                        while (node.parent) {
                            node = node.parent;
                            if (node.layout) {
                                expectedLayout = node.layout;
                                break;
                            }
                        }
                    }
                    if (!expectedLayout)
                        expectedLayout = "empty" /* empty */;
                    var key = _this.layouts.get(expectedLayout);
                    _this.layout = (_a = _this.getComponent(key)) === null || _a === void 0 ? void 0 : _a.component;
                }
            });
            this.listenToLanguageChange();
        }
        DynamicLayoutComponent.prototype.listenToLanguageChange = function () {
            var _this = this;
            this.subscription.addOne(this.localizationService.languageChange, function () {
                _this.isLayoutVisible = false;
                setTimeout(function () { return (_this.isLayoutVisible = true); }, 0);
            });
        };
        DynamicLayoutComponent.prototype.getComponent = function (key) {
            return this.replaceableComponents.get(key);
        };
        return DynamicLayoutComponent;
    }());
    DynamicLayoutComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-dynamic-layout',
                    template: "\n    <ng-container *ngTemplateOutlet=\"layout ? componentOutlet : routerOutlet\"></ng-container>\n    <ng-template #routerOutlet><router-outlet></router-outlet></ng-template>\n    <ng-template #componentOutlet\n      ><ng-container *ngIf=\"isLayoutVisible\" [ngComponentOutlet]=\"layout\"></ng-container\n    ></ng-template>\n  ",
                    providers: [SubscriptionService]
                },] }
    ];
    DynamicLayoutComponent.ctorParameters = function () { return [
        { type: i0.Injector },
        { type: LocalizationService },
        { type: ReplaceableComponentsService },
        { type: SubscriptionService },
        { type: DynamicLayoutComponent, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
    ]; };

    var ReplaceableRouteContainerComponent = /** @class */ (function () {
        function ReplaceableRouteContainerComponent(route, replaceableComponents, subscription) {
            this.route = route;
            this.replaceableComponents = replaceableComponents;
            this.subscription = subscription;
        }
        ReplaceableRouteContainerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.defaultComponent = this.route.snapshot.data.replaceableComponent.defaultComponent;
            this.componentKey = this.route.snapshot.data
                .replaceableComponent.key;
            var component$ = this.replaceableComponents
                .get$(this.componentKey)
                .pipe(operators.distinctUntilChanged());
            this.subscription.addOne(component$, function (res) {
                if (res === void 0) { res = {}; }
                _this.externalComponent = res.component;
            });
        };
        return ReplaceableRouteContainerComponent;
    }());
    ReplaceableRouteContainerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-replaceable-route-container',
                    template: "\n    <ng-container *ngComponentOutlet=\"externalComponent || defaultComponent\"></ng-container>\n  ",
                    providers: [SubscriptionService]
                },] }
    ];
    ReplaceableRouteContainerComponent.ctorParameters = function () { return [
        { type: i1$2.ActivatedRoute },
        { type: ReplaceableComponentsService },
        { type: SubscriptionService }
    ]; };

    var RouterOutletComponent = /** @class */ (function () {
        function RouterOutletComponent() {
        }
        return RouterOutletComponent;
    }());
    RouterOutletComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-router-outlet',
                    template: "\n    <router-outlet></router-outlet>\n  "
                },] }
    ];

    var AutofocusDirective = /** @class */ (function () {
        function AutofocusDirective(elRef) {
            this.elRef = elRef;
            this.delay = 0;
        }
        AutofocusDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            setTimeout(function () { return _this.elRef.nativeElement.focus(); }, this.delay);
        };
        return AutofocusDirective;
    }());
    AutofocusDirective.decorators = [
        { type: i0.Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[autofocus]'
                },] }
    ];
    AutofocusDirective.ctorParameters = function () { return [
        { type: i0.ElementRef }
    ]; };
    AutofocusDirective.propDecorators = {
        delay: [{ type: i0.Input, args: ['autofocus',] }]
    };

    var InputEventDebounceDirective = /** @class */ (function () {
        function InputEventDebounceDirective(el, subscription) {
            this.el = el;
            this.subscription = subscription;
            this.debounce = 300;
            this.debounceEvent = new i0.EventEmitter();
        }
        InputEventDebounceDirective.prototype.ngOnInit = function () {
            var _this = this;
            var input$ = rxjs.fromEvent(this.el.nativeElement, 'input').pipe(operators.debounceTime(this.debounce));
            this.subscription.addOne(input$, function (event) {
                _this.debounceEvent.emit(event);
            });
        };
        return InputEventDebounceDirective;
    }());
    InputEventDebounceDirective.decorators = [
        { type: i0.Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[input.debounce]',
                    providers: [SubscriptionService],
                },] }
    ];
    InputEventDebounceDirective.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: SubscriptionService }
    ]; };
    InputEventDebounceDirective.propDecorators = {
        debounce: [{ type: i0.Input }],
        debounceEvent: [{ type: i0.Output, args: ['input.debounce',] }]
    };

    var EllipsisDirective = /** @class */ (function () {
        function EllipsisDirective(cdRef, elRef) {
            this.cdRef = cdRef;
            this.elRef = elRef;
            this.enabled = true;
        }
        Object.defineProperty(EllipsisDirective.prototype, "inlineClass", {
            get: function () {
                return this.enabled && this.width;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EllipsisDirective.prototype, "class", {
            get: function () {
                return this.enabled && !this.width;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EllipsisDirective.prototype, "maxWidth", {
            get: function () {
                return this.enabled && this.width ? this.width || '170px' : undefined;
            },
            enumerable: false,
            configurable: true
        });
        EllipsisDirective.prototype.ngAfterViewInit = function () {
            this.title = this.title || this.elRef.nativeElement.innerText;
            this.cdRef.detectChanges();
        };
        return EllipsisDirective;
    }());
    EllipsisDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[abpEllipsis]',
                },] }
    ];
    EllipsisDirective.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: i0.ElementRef }
    ]; };
    EllipsisDirective.propDecorators = {
        width: [{ type: i0.Input, args: ['abpEllipsis',] }],
        title: [{ type: i0.HostBinding, args: ['title',] }, { type: i0.Input }],
        enabled: [{ type: i0.Input, args: ['abpEllipsisEnabled',] }],
        inlineClass: [{ type: i0.HostBinding, args: ['class.abp-ellipsis-inline',] }],
        class: [{ type: i0.HostBinding, args: ['class.abp-ellipsis',] }],
        maxWidth: [{ type: i0.HostBinding, args: ['style.max-width',] }]
    };

    var AbpForContext = /** @class */ (function () {
        function AbpForContext($implicit, index, count, list) {
            this.$implicit = $implicit;
            this.index = index;
            this.count = count;
            this.list = list;
        }
        return AbpForContext;
    }());
    var RecordView = /** @class */ (function () {
        function RecordView(record, view) {
            this.record = record;
            this.view = view;
        }
        return RecordView;
    }());
    var ForDirective = /** @class */ (function () {
        function ForDirective(tempRef, vcRef, differs) {
            this.tempRef = tempRef;
            this.vcRef = vcRef;
            this.differs = differs;
        }
        Object.defineProperty(ForDirective.prototype, "compareFn", {
            get: function () {
                return this.compareBy || compare__default['default'];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ForDirective.prototype, "trackByFn", {
            get: function () {
                return this.trackBy || (function (index, item) { return item.id || index; });
            },
            enumerable: false,
            configurable: true
        });
        ForDirective.prototype.iterateOverAppliedOperations = function (changes) {
            var _this = this;
            var rw = [];
            changes.forEachOperation(function (record, previousIndex, currentIndex) {
                if (record.previousIndex == null) {
                    var view = _this.vcRef.createEmbeddedView(_this.tempRef, new AbpForContext(null, -1, -1, _this.items), currentIndex);
                    rw.push(new RecordView(record, view));
                }
                else if (currentIndex == null) {
                    _this.vcRef.remove(previousIndex);
                }
                else {
                    var view = _this.vcRef.get(previousIndex);
                    _this.vcRef.move(view, currentIndex);
                    rw.push(new RecordView(record, view));
                }
            });
            for (var i = 0, l = rw.length; i < l; i++) {
                rw[i].view.context.$implicit = rw[i].record.item;
            }
        };
        ForDirective.prototype.iterateOverAttachedViews = function (changes) {
            var _this = this;
            for (var i = 0, l = this.vcRef.length; i < l; i++) {
                var viewRef = this.vcRef.get(i);
                viewRef.context.index = i;
                viewRef.context.count = l;
                viewRef.context.list = this.items;
            }
            changes.forEachIdentityChange(function (record) {
                var viewRef = _this.vcRef.get(record.currentIndex);
                viewRef.context.$implicit = record.item;
            });
        };
        ForDirective.prototype.projectItems = function (items) {
            if (!items.length && this.emptyRef) {
                this.vcRef.clear();
                // tslint:disable-next-line: no-unused-expression
                this.vcRef.createEmbeddedView(this.emptyRef).rootNodes;
                this.isShowEmptyRef = true;
                this.differ = null;
                return;
            }
            if (this.emptyRef && this.isShowEmptyRef) {
                this.vcRef.clear();
                this.isShowEmptyRef = false;
            }
            if (!this.differ && items) {
                this.differ = this.differs.find(items).create(this.trackByFn);
            }
            if (this.differ) {
                var changes = this.differ.diff(items);
                if (changes) {
                    this.iterateOverAppliedOperations(changes);
                    this.iterateOverAttachedViews(changes);
                }
            }
        };
        ForDirective.prototype.sortItems = function (items) {
            var _this = this;
            if (this.orderBy) {
                items.sort(function (a, b) { return (a[_this.orderBy] > b[_this.orderBy] ? 1 : a[_this.orderBy] < b[_this.orderBy] ? -1 : 0); });
            }
            else {
                items.sort();
            }
        };
        ForDirective.prototype.ngOnChanges = function () {
            var _this = this;
            var items = clone__default['default'](this.items);
            if (!Array.isArray(items))
                return;
            var compareFn = this.compareFn;
            if (typeof this.filterBy !== 'undefined' && typeof this.filterVal !== 'undefined' && this.filterVal !== '') {
                items = items.filter(function (item) { return compareFn(item[_this.filterBy], _this.filterVal); });
            }
            switch (this.orderDir) {
                case 'ASC':
                    this.sortItems(items);
                    this.projectItems(items);
                    break;
                case 'DESC':
                    this.sortItems(items);
                    items.reverse();
                    this.projectItems(items);
                    break;
                default:
                    this.projectItems(items);
            }
        };
        return ForDirective;
    }());
    ForDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[abpFor]',
                },] }
    ];
    ForDirective.ctorParameters = function () { return [
        { type: i0.TemplateRef },
        { type: i0.ViewContainerRef },
        { type: i0.IterableDiffers }
    ]; };
    ForDirective.propDecorators = {
        items: [{ type: i0.Input, args: ['abpForOf',] }],
        orderBy: [{ type: i0.Input, args: ['abpForOrderBy',] }],
        orderDir: [{ type: i0.Input, args: ['abpForOrderDir',] }],
        filterBy: [{ type: i0.Input, args: ['abpForFilterBy',] }],
        filterVal: [{ type: i0.Input, args: ['abpForFilterVal',] }],
        trackBy: [{ type: i0.Input, args: ['abpForTrackBy',] }],
        compareBy: [{ type: i0.Input, args: ['abpForCompareBy',] }],
        emptyRef: [{ type: i0.Input, args: ['abpForEmptyRef',] }]
    };

    var FormSubmitDirective = /** @class */ (function () {
        function FormSubmitDirective(formGroupDirective, host, cdRef, subscription) {
            this.formGroupDirective = formGroupDirective;
            this.host = host;
            this.cdRef = cdRef;
            this.subscription = subscription;
            this.debounce = 200;
            this.ngSubmit = new i0.EventEmitter();
            this.executedNgSubmit = false;
        }
        FormSubmitDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.subscription.addOne(this.formGroupDirective.ngSubmit, function () {
                _this.markAsDirty();
                _this.executedNgSubmit = true;
            });
            var keyup$ = rxjs.fromEvent(this.host.nativeElement, 'keyup').pipe(operators.debounceTime(this.debounce), operators.filter(function (key) { return key && key.key === 'Enter'; }));
            this.subscription.addOne(keyup$, function () {
                if (!_this.executedNgSubmit) {
                    _this.host.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
                }
                _this.executedNgSubmit = false;
            });
        };
        FormSubmitDirective.prototype.markAsDirty = function () {
            var form = this.formGroupDirective.form;
            setDirty(form.controls);
            form.markAsDirty();
            this.cdRef.detectChanges();
        };
        return FormSubmitDirective;
    }());
    FormSubmitDirective.decorators = [
        { type: i0.Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: 'form[ngSubmit][formGroup]',
                    providers: [SubscriptionService],
                },] }
    ];
    FormSubmitDirective.ctorParameters = function () { return [
        { type: forms.FormGroupDirective, decorators: [{ type: i0.Self }] },
        { type: i0.ElementRef },
        { type: i0.ChangeDetectorRef },
        { type: SubscriptionService }
    ]; };
    FormSubmitDirective.propDecorators = {
        debounce: [{ type: i0.Input }],
        notValidateOnSubmit: [{ type: i0.Input }],
        ngSubmit: [{ type: i0.Output }]
    };
    function setDirty(controls) {
        if (Array.isArray(controls)) {
            controls.forEach(function (group) {
                setDirty(group.controls);
            });
            return;
        }
        Object.keys(controls).forEach(function (key) {
            controls[key].markAsDirty();
            controls[key].updateValueAndValidity();
        });
    }

    var InitDirective = /** @class */ (function () {
        function InitDirective(elRef) {
            this.elRef = elRef;
            this.init = new i0.EventEmitter();
        }
        InitDirective.prototype.ngAfterViewInit = function () {
            this.init.emit(this.elRef);
        };
        return InitDirective;
    }());
    InitDirective.decorators = [
        { type: i0.Directive, args: [{ selector: '[abpInit]' },] }
    ];
    InitDirective.ctorParameters = function () { return [
        { type: i0.ElementRef }
    ]; };
    InitDirective.propDecorators = {
        init: [{ type: i0.Output, args: ['abpInit',] }]
    };

    var ReplaceableComponentsState_1;
    function logDeprecationMsg() {
        if (i0.isDevMode()) {
            console.warn("\n     ReplacableComponentsState has been deprecated. Use ReplaceableComponentsService instead.\n     See the doc https://docs.abp.io/en/abp/latest/UI/Angular/Component-Replacement\n     ");
        }
    }
    // tslint:disable: max-line-length
    /**
     * @deprecated To be deleted in v4.0. Use ReplaceableComponentsService instead. See the doc (https://docs.abp.io/en/abp/latest/UI/Angular/Component-Replacement)
     */
    exports.ɵv = ReplaceableComponentsState_1 = /** @class */ (function () {
        function ReplaceableComponentsState(service) {
            this.service = service;
        }
        ReplaceableComponentsState.getAll = function (_a) {
            var replaceableComponents = _a.replaceableComponents;
            logDeprecationMsg();
            return replaceableComponents || [];
        };
        ReplaceableComponentsState.getComponent = function (key) {
            var selector = i1.createSelector([ReplaceableComponentsState_1], function (state) {
                logDeprecationMsg();
                return snq__default['default'](function () { return state.replaceableComponents.find(function (component) { return component.key === key; }); });
            });
            return selector;
        };
        ReplaceableComponentsState.prototype.replaceableComponentsAction = function (_a, _b) {
            var getState = _a.getState, patchState = _a.patchState;
            var payload = _b.payload, reload = _b.reload;
            logDeprecationMsg();
            var replaceableComponents = getState().replaceableComponents;
            var index = snq__default['default'](function () { return replaceableComponents.findIndex(function (component) { return component.key === payload.key; }); }, -1);
            if (index > -1) {
                replaceableComponents[index] = payload;
            }
            else {
                replaceableComponents = __spread(replaceableComponents, [payload]);
            }
            patchState({
                replaceableComponents: replaceableComponents,
            });
            this.service.add(payload, reload);
        };
        return ReplaceableComponentsState;
    }());
    exports.ɵv.decorators = [
        { type: i0.Injectable }
    ];
    exports.ɵv.ctorParameters = function () { return [
        { type: ReplaceableComponentsService }
    ]; };
    __decorate([
        i1.Action(AddReplaceableComponent),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, AddReplaceableComponent]),
        __metadata("design:returntype", void 0)
    ], exports.ɵv.prototype, "replaceableComponentsAction", null);
    __decorate([
        i1.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Array)
    ], exports.ɵv, "getAll", null);
    exports.ɵv = ReplaceableComponentsState_1 = __decorate([
        i1.State({
            name: 'ReplaceableComponentsState',
            defaults: { replaceableComponents: [] },
        }),
        __metadata("design:paramtypes", [ReplaceableComponentsService])
    ], exports.ɵv);

    var ProfileService = /** @class */ (function () {
        function ProfileService(rest) {
            this.rest = rest;
            this.apiName = 'AbpIdentity';
        }
        ProfileService.prototype.get = function () {
            var request = {
                method: 'GET',
                url: '/api/identity/my-profile',
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        ProfileService.prototype.update = function (body) {
            var request = {
                method: 'PUT',
                url: '/api/identity/my-profile',
                body: body,
            };
            return this.rest.request(request, {
                apiName: this.apiName,
            });
        };
        ProfileService.prototype.changePassword = function (body, skipHandleError) {
            if (skipHandleError === void 0) { skipHandleError = false; }
            var request = {
                method: 'POST',
                url: '/api/identity/my-profile/change-password',
                body: body,
            };
            return this.rest.request(request, {
                skipHandleError: skipHandleError,
                apiName: this.apiName,
            });
        };
        return ProfileService;
    }());
    ProfileService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProfileService_Factory() { return new ProfileService(i0.ɵɵinject(RestService)); }, token: ProfileService, providedIn: "root" });
    ProfileService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    ProfileService.ctorParameters = function () { return [
        { type: RestService }
    ]; };

    exports.ɵy = /** @class */ (function () {
        function ProfileState(profileService) {
            this.profileService = profileService;
        }
        ProfileState.getProfile = function (_a) {
            var profile = _a.profile;
            return profile;
        };
        ProfileState.prototype.getProfile = function (_a) {
            var patchState = _a.patchState;
            return this.profileService.get().pipe(operators.tap(function (profile) { return patchState({
                profile: profile,
            }); }));
        };
        ProfileState.prototype.updateProfile = function (_a, _b) {
            var patchState = _a.patchState;
            var payload = _b.payload;
            return this.profileService.update(payload).pipe(operators.tap(function (profile) { return patchState({
                profile: profile,
            }); }));
        };
        ProfileState.prototype.changePassword = function (_, _a) {
            var payload = _a.payload;
            return this.profileService.changePassword(payload, true);
        };
        return ProfileState;
    }());
    exports.ɵy.decorators = [
        { type: i0.Injectable }
    ];
    exports.ɵy.ctorParameters = function () { return [
        { type: ProfileService }
    ]; };
    __decorate([
        i1.Action(GetProfile),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], exports.ɵy.prototype, "getProfile", null);
    __decorate([
        i1.Action(UpdateProfile),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, UpdateProfile]),
        __metadata("design:returntype", void 0)
    ], exports.ɵy.prototype, "updateProfile", null);
    __decorate([
        i1.Action(ChangePassword),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, ChangePassword]),
        __metadata("design:returntype", void 0)
    ], exports.ɵy.prototype, "changePassword", null);
    __decorate([
        i1.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], exports.ɵy, "getProfile", null);
    exports.ɵy = __decorate([
        i1.State({
            name: 'ProfileState',
            defaults: {},
        }),
        __metadata("design:paramtypes", [ProfileService])
    ], exports.ɵy);

    var PermissionDirective = /** @class */ (function () {
        function PermissionDirective(elRef, renderer, store, templateRef, vcRef) {
            this.elRef = elRef;
            this.renderer = renderer;
            this.store = store;
            this.templateRef = templateRef;
            this.vcRef = vcRef;
        }
        PermissionDirective.prototype.check = function () {
            var _this = this;
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
            this.subscription = this.store
                .select(exports.ɵbo.getGrantedPolicy(this.condition))
                .subscribe(function (isGranted) {
                if (_this.templateRef && isGranted) {
                    _this.vcRef.clear();
                    _this.vcRef.createEmbeddedView(_this.templateRef);
                }
                else if (_this.templateRef && !isGranted) {
                    _this.vcRef.clear();
                }
                else if (!isGranted && !_this.templateRef) {
                    _this.renderer.removeChild(_this.elRef.nativeElement.parentElement, _this.elRef.nativeElement);
                }
            });
        };
        PermissionDirective.prototype.ngOnInit = function () {
            if (this.templateRef && !this.condition) {
                this.vcRef.createEmbeddedView(this.templateRef);
            }
        };
        PermissionDirective.prototype.ngOnDestroy = function () {
            if (this.subscription)
                this.subscription.unsubscribe();
        };
        PermissionDirective.prototype.ngOnChanges = function (_a) {
            var condition = _a.condition;
            if ((condition || { currentValue: null }).currentValue) {
                this.check();
            }
        };
        return PermissionDirective;
    }());
    PermissionDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[abpPermission]',
                },] }
    ];
    PermissionDirective.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: i0.Renderer2 },
        { type: i1.Store },
        { type: i0.TemplateRef, decorators: [{ type: i0.Optional }] },
        { type: i0.ViewContainerRef }
    ]; };
    PermissionDirective.propDecorators = {
        condition: [{ type: i0.Input, args: ['abpPermission',] }]
    };

    var ReplaceableTemplateDirective = /** @class */ (function () {
        function ReplaceableTemplateDirective(injector, templateRef, cfRes, vcRef, replaceableComponents, subscription) {
            var _this = this;
            this.injector = injector;
            this.templateRef = templateRef;
            this.cfRes = cfRes;
            this.vcRef = vcRef;
            this.replaceableComponents = replaceableComponents;
            this.subscription = subscription;
            this.providedData = { inputs: {}, outputs: {} };
            this.context = {};
            this.defaultComponentSubscriptions = {};
            this.initialized = false;
            this.context = {
                initTemplate: function (ref) {
                    _this.resetDefaultComponent();
                    _this.defaultComponentRef = ref;
                    _this.setDefaultComponentInputs();
                },
            };
        }
        ReplaceableTemplateDirective.prototype.ngOnInit = function () {
            var _this = this;
            var component$ = this.replaceableComponents
                .get$(this.data.componentKey)
                .pipe(operators.filter(function (res) {
                if (res === void 0) { res = {}; }
                return !_this.initialized || !compare__default['default'](res.component, _this.externalComponent);
            }));
            this.subscription.addOne(component$, function (res) {
                if (res === void 0) { res = {}; }
                _this.vcRef.clear();
                _this.externalComponent = res.component;
                if (_this.defaultComponentRef) {
                    _this.resetDefaultComponent();
                }
                if (res.component) {
                    _this.setProvidedData();
                    var customInjector = i0.Injector.create({
                        providers: [{ provide: 'REPLACEABLE_DATA', useValue: _this.providedData }],
                        parent: _this.injector,
                    });
                    _this.vcRef.createComponent(_this.cfRes.resolveComponentFactory(res.component), 0, customInjector);
                }
                else {
                    _this.vcRef.createEmbeddedView(_this.templateRef, _this.context);
                }
                _this.initialized = true;
            });
        };
        ReplaceableTemplateDirective.prototype.ngOnChanges = function (changes) {
            if (snq__default['default'](function () { return changes.data.currentValue.inputs; }) && this.defaultComponentRef) {
                this.setDefaultComponentInputs();
            }
        };
        ReplaceableTemplateDirective.prototype.setDefaultComponentInputs = function () {
            var _this = this;
            if (!this.defaultComponentRef || (!this.data.inputs && !this.data.outputs))
                return;
            if (this.data.inputs) {
                for (var key in this.data.inputs) {
                    if (this.data.inputs.hasOwnProperty(key)) {
                        if (!compare__default['default'](this.defaultComponentRef[key], this.data.inputs[key].value)) {
                            this.defaultComponentRef[key] = this.data.inputs[key].value;
                        }
                    }
                }
            }
            if (this.data.outputs) {
                var _loop_1 = function (key) {
                    if (this_1.data.outputs.hasOwnProperty(key)) {
                        if (!this_1.defaultComponentSubscriptions[key]) {
                            this_1.defaultComponentSubscriptions[key] = this_1.defaultComponentRef[key].subscribe(function (value) {
                                _this.data.outputs[key](value);
                            });
                        }
                    }
                };
                var this_1 = this;
                for (var key in this.data.outputs) {
                    _loop_1(key);
                }
            }
        };
        ReplaceableTemplateDirective.prototype.setProvidedData = function () {
            var _this = this;
            this.providedData = Object.assign(Object.assign({}, this.data), { inputs: {} });
            if (!this.data.inputs)
                return;
            Object.defineProperties(this.providedData.inputs, Object.assign({}, Object.keys(this.data.inputs).reduce(function (acc, key) {
                var _a;
                return (Object.assign(Object.assign({}, acc), (_a = {}, _a[key] = Object.assign({ enumerable: true, configurable: true, get: function () { return _this.data.inputs[key].value; } }, (_this.data.inputs[key].twoWay && {
                    set: function (newValue) {
                        _this.data.inputs[key].value = newValue;
                        _this.data.outputs[key + "Change"](newValue);
                    },
                })), _a)));
            }, {})));
        };
        ReplaceableTemplateDirective.prototype.resetDefaultComponent = function () {
            var _this = this;
            Object.keys(this.defaultComponentSubscriptions).forEach(function (key) {
                _this.defaultComponentSubscriptions[key].unsubscribe();
            });
            this.defaultComponentSubscriptions = {};
            this.defaultComponentRef = null;
        };
        return ReplaceableTemplateDirective;
    }());
    ReplaceableTemplateDirective.decorators = [
        { type: i0.Directive, args: [{ selector: '[abpReplaceableTemplate]', providers: [SubscriptionService] },] }
    ];
    ReplaceableTemplateDirective.ctorParameters = function () { return [
        { type: i0.Injector },
        { type: i0.TemplateRef },
        { type: i0.ComponentFactoryResolver },
        { type: i0.ViewContainerRef },
        { type: ReplaceableComponentsService },
        { type: SubscriptionService }
    ]; };
    ReplaceableTemplateDirective.propDecorators = {
        data: [{ type: i0.Input, args: ['abpReplaceableTemplate',] }]
    };

    var StopPropagationDirective = /** @class */ (function () {
        function StopPropagationDirective(el, subscription) {
            this.el = el;
            this.subscription = subscription;
            this.stopPropEvent = new i0.EventEmitter();
        }
        StopPropagationDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.subscription.addOne(rxjs.fromEvent(this.el.nativeElement, 'click'), function (event) {
                event.stopPropagation();
                _this.stopPropEvent.emit(event);
            });
        };
        return StopPropagationDirective;
    }());
    StopPropagationDirective.decorators = [
        { type: i0.Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[click.stop]',
                    providers: [SubscriptionService],
                },] }
    ];
    StopPropagationDirective.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: SubscriptionService }
    ]; };
    StopPropagationDirective.propDecorators = {
        stopPropEvent: [{ type: i0.Output, args: ['click.stop',] }]
    };

    /**
     *
     * @deprecated To be deleted in v3.3
     */
    var VisibilityDirective = /** @class */ (function () {
        function VisibilityDirective(elRef, renderer) {
            this.elRef = elRef;
            this.renderer = renderer;
            this.completed$ = new rxjs.Subject();
        }
        VisibilityDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (!this.focusedElement && this.elRef) {
                this.focusedElement = this.elRef.nativeElement;
            }
            var observer;
            observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (!mutation.target)
                        return;
                    var htmlNodes = snq__default['default'](function () { return Array.from(mutation.target.childNodes).filter(function (node) { return node instanceof HTMLElement; }); }, []);
                    if (!htmlNodes.length) {
                        _this.removeFromDOM();
                    }
                });
            });
            observer.observe(this.focusedElement, {
                childList: true,
            });
            setTimeout(function () {
                var htmlNodes = snq__default['default'](function () { return Array.from(_this.focusedElement.childNodes).filter(function (node) { return node instanceof HTMLElement; }); }, []);
                if (!htmlNodes.length)
                    _this.removeFromDOM();
            }, 0);
            this.completed$.subscribe(function () { return observer.disconnect(); });
        };
        VisibilityDirective.prototype.disconnect = function () {
            this.completed$.next();
            this.completed$.complete();
        };
        VisibilityDirective.prototype.removeFromDOM = function () {
            if (!this.elRef.nativeElement)
                return;
            this.renderer.removeChild(this.elRef.nativeElement.parentElement, this.elRef.nativeElement);
            this.disconnect();
        };
        return VisibilityDirective;
    }());
    VisibilityDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[abpVisibility]',
                },] }
    ];
    VisibilityDirective.ctorParameters = function () { return [
        { type: i0.ElementRef, decorators: [{ type: i0.Optional }] },
        { type: i0.Renderer2 }
    ]; };
    VisibilityDirective.propDecorators = {
        focusedElement: [{ type: i0.Input, args: ['abpVisibility',] }]
    };

    var OAuthConfigurationHandler = /** @class */ (function () {
        function OAuthConfigurationHandler(actions, oAuthService, options) {
            this.actions = actions;
            this.oAuthService = oAuthService;
            this.options = options;
            this.listenToSetEnvironment();
        }
        OAuthConfigurationHandler.prototype.listenToSetEnvironment = function () {
            var _this = this;
            this.actions
                .pipe(i1.ofActionSuccessful(SetEnvironment))
                .pipe(operators.map(function (_a) {
                var environment = _a.environment;
                return environment.oAuthConfig;
            }), operators.filter(function (config) { return !compare__default['default'](config, _this.options.environment.oAuthConfig); }))
                .subscribe(function (config) {
                _this.oAuthService.configure(config);
            });
        };
        return OAuthConfigurationHandler;
    }());
    OAuthConfigurationHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function OAuthConfigurationHandler_Factory() { return new OAuthConfigurationHandler(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i1$1.OAuthService), i0.ɵɵinject(CORE_OPTIONS)); }, token: OAuthConfigurationHandler, providedIn: "root" });
    OAuthConfigurationHandler.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    OAuthConfigurationHandler.ctorParameters = function () { return [
        { type: i1.Actions },
        { type: i1$1.OAuthService },
        { type: undefined, decorators: [{ type: i0.Inject, args: [CORE_OPTIONS,] }] }
    ]; };

    var RoutesHandler = /** @class */ (function () {
        function RoutesHandler(routes, router) {
            this.routes = routes;
            this.router = router;
            this.addRoutes();
        }
        RoutesHandler.prototype.addRoutes = function () {
            var _this = this;
            var _a, _b;
            (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.forEach(function (_c) {
                var _d = _c.path, path = _d === void 0 ? '' : _d, data = _c.data;
                if (!(data === null || data === void 0 ? void 0 : data.routes))
                    return;
                if (Array.isArray(data.routes)) {
                    _this.routes.add(data.routes);
                    return;
                }
                var routes = flatRoutes([Object.assign({ path: path }, data.routes)], { path: '' });
                _this.routes.add(routes);
            });
        };
        return RoutesHandler;
    }());
    RoutesHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutesHandler_Factory() { return new RoutesHandler(i0.ɵɵinject(RoutesService), i0.ɵɵinject(i1$2.Router, 8)); }, token: RoutesHandler, providedIn: "root" });
    RoutesHandler.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    RoutesHandler.ctorParameters = function () { return [
        { type: RoutesService },
        { type: i1$2.Router, decorators: [{ type: i0.Optional }] }
    ]; };
    function flatRoutes(routes, parent) {
        if (!routes)
            return [];
        return routes.reduce(function (acc, route) {
            var _a = Object.assign(Object.assign({}, route), { parentName: parent.name, path: (parent.path + '/' + route.path).replace(/\/\//g, '/') }), children = _a.children, current = __rest(_a, ["children"]);
            acc.push.apply(acc, __spread([current], flatRoutes(children, current)));
            return acc;
        }, []);
    }

    var ApiInterceptor = /** @class */ (function () {
        function ApiInterceptor(oAuthService, store) {
            this.oAuthService = oAuthService;
            this.store = store;
        }
        ApiInterceptor.prototype.intercept = function (request, next) {
            var _this = this;
            this.store.dispatch(new StartLoader(request));
            return next
                .handle(request.clone({
                setHeaders: this.getAdditionalHeaders(request.headers),
            }))
                .pipe(operators.finalize(function () { return _this.store.dispatch(new StopLoader(request)); }));
        };
        ApiInterceptor.prototype.getAdditionalHeaders = function (existingHeaders) {
            var headers = {};
            var token = this.oAuthService.getAccessToken();
            if (!(existingHeaders === null || existingHeaders === void 0 ? void 0 : existingHeaders.has('Authorization')) && token) {
                headers['Authorization'] = "Bearer " + token;
            }
            var lang = this.store.selectSnapshot(exports.ɵbi.getLanguage);
            if (!(existingHeaders === null || existingHeaders === void 0 ? void 0 : existingHeaders.has('Accept-Language')) && lang) {
                headers['Accept-Language'] = lang;
            }
            var tenant = this.store.selectSnapshot(exports.ɵbi.getTenant);
            if (!(existingHeaders === null || existingHeaders === void 0 ? void 0 : existingHeaders.has('__tenant')) && tenant) {
                headers['__tenant'] = tenant.id;
            }
            return headers;
        };
        return ApiInterceptor;
    }());
    ApiInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function ApiInterceptor_Factory() { return new ApiInterceptor(i0.ɵɵinject(i1$1.OAuthService), i0.ɵɵinject(i1.Store)); }, token: ApiInterceptor, providedIn: "root" });
    ApiInterceptor.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    ApiInterceptor.ctorParameters = function () { return [
        { type: i1$1.OAuthService },
        { type: i1.Store }
    ]; };

    var LocalizationPipe = /** @class */ (function () {
        function LocalizationPipe(store) {
            this.store = store;
        }
        LocalizationPipe.prototype.transform = function (value) {
            if (value === void 0) { value = ''; }
            var interpolateParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                interpolateParams[_i - 1] = arguments[_i];
            }
            return this.store.selectSnapshot(exports.ɵbo.getLocalization.apply(exports.ɵbo, __spread([value], interpolateParams.reduce(function (acc, val) { return (Array.isArray(val) ? __spread(acc, val) : __spread(acc, [val])); }, []))));
        };
        return LocalizationPipe;
    }());
    LocalizationPipe.decorators = [
        { type: i0.Injectable },
        { type: i0.Pipe, args: [{
                    name: 'abpLocalization',
                },] }
    ];
    LocalizationPipe.ctorParameters = function () { return [
        { type: i1.Store }
    ]; };
    var MockLocalizationPipe = /** @class */ (function () {
        function MockLocalizationPipe() {
        }
        MockLocalizationPipe.prototype.transform = function (value) {
            if (value === void 0) { value = ''; }
            var _ = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                _[_i - 1] = arguments[_i];
            }
            return typeof value === 'string' ? value : value.defaultValue;
        };
        return MockLocalizationPipe;
    }());
    MockLocalizationPipe.decorators = [
        { type: i0.Injectable },
        { type: i0.Pipe, args: [{
                    name: 'abpLocalization',
                },] }
    ];

    var LocalizationModule = /** @class */ (function () {
        function LocalizationModule() {
        }
        return LocalizationModule;
    }());
    LocalizationModule.decorators = [
        { type: i0.NgModule, args: [{
                    exports: [LocalizationPipe],
                    declarations: [LocalizationPipe],
                },] }
    ];

    var SortPipe = /** @class */ (function () {
        function SortPipe() {
        }
        SortPipe.prototype.transform = function (value, sortOrder, sortKey) {
            if (sortOrder === void 0) { sortOrder = 'asc'; }
            sortOrder = sortOrder && sortOrder.toLowerCase();
            if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc'))
                return value;
            var numberArray = [];
            var stringArray = [];
            if (!sortKey) {
                numberArray = value.filter(function (item) { return typeof item === 'number'; }).sort();
                stringArray = value.filter(function (item) { return typeof item === 'string'; }).sort();
            }
            else {
                numberArray = value
                    .filter(function (item) { return typeof item[sortKey] === 'number'; })
                    .sort(function (a, b) { return a[sortKey] - b[sortKey]; });
                stringArray = value
                    .filter(function (item) { return typeof item[sortKey] === 'string'; })
                    .sort(function (a, b) {
                    if (a[sortKey] < b[sortKey])
                        return -1;
                    else if (a[sortKey] > b[sortKey])
                        return 1;
                    else
                        return 0;
                });
            }
            var sorted = __spread(numberArray, stringArray, value.filter(function (item) { return typeof (sortKey ? item[sortKey] : item) !== 'number' &&
                typeof (sortKey ? item[sortKey] : item) !== 'string'; }));
            return sortOrder === 'asc' ? sorted : sorted.reverse();
        };
        return SortPipe;
    }());
    SortPipe.decorators = [
        { type: i0.Injectable },
        { type: i0.Pipe, args: [{
                    name: 'abpSort',
                },] }
    ];

    var NGXS_CONFIG_PLUGIN_OPTIONS = new i0.InjectionToken('NGXS_CONFIG_PLUGIN_OPTIONS');
    var ConfigPlugin = /** @class */ (function () {
        function ConfigPlugin(options) {
            this.options = options;
            this.initialized = false;
        }
        ConfigPlugin.prototype.handle = function (state, event, next) {
            var matches = i1.actionMatcher(event);
            var isInitAction = matches(i1.InitState) || matches(i1.UpdateState);
            if (isInitAction && !this.initialized) {
                state = i1.setValue(state, 'ConfigState', Object.assign(Object.assign({}, (state.ConfigState && Object.assign({}, state.ConfigState))), this.options));
                this.initialized = true;
            }
            return next(state, event);
        };
        return ConfigPlugin;
    }());
    ConfigPlugin.decorators = [
        { type: i0.Injectable }
    ];
    ConfigPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [NGXS_CONFIG_PLUGIN_OPTIONS,] }] }
    ]; };

    var LocaleId = /** @class */ (function (_super) {
        __extends(LocaleId, _super);
        function LocaleId(localizationService) {
            var _this = _super.call(this) || this;
            _this.localizationService = localizationService;
            return _this;
        }
        LocaleId.prototype.toString = function () {
            var currentLang = this.localizationService.currentLang;
            return localesMapping[currentLang] || currentLang;
        };
        LocaleId.prototype.valueOf = function () {
            return this.toString();
        };
        return LocaleId;
    }(String));
    var LocaleProvider = {
        provide: i0.LOCALE_ID,
        useClass: LocaleId,
        deps: [LocalizationService],
    };

    Date.prototype.toLocalISOString = function () {
        var timezoneOffset = this.getTimezoneOffset();
        return new Date(this.getTime() - timezoneOffset * 60000).toISOString();
    };

    function storageFactory() {
        return oAuthStorage;
    }
    /**
     * BaseCoreModule is the module that holds
     * all imports, declarations, exports, and entryComponents
     * but not the providers.
     * This module will be imported and exported by all others.
     */
    var BaseCoreModule = /** @class */ (function () {
        function BaseCoreModule() {
        }
        return BaseCoreModule;
    }());
    BaseCoreModule.decorators = [
        { type: i0.NgModule, args: [{
                    exports: [
                        common.CommonModule,
                        i2.HttpClientModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        i1$2.RouterModule,
                        AbstractNgModelComponent,
                        AutofocusDirective,
                        DynamicLayoutComponent,
                        EllipsisDirective,
                        ForDirective,
                        FormSubmitDirective,
                        InitDirective,
                        InputEventDebounceDirective,
                        PermissionDirective,
                        ReplaceableRouteContainerComponent,
                        ReplaceableTemplateDirective,
                        RouterOutletComponent,
                        SortPipe,
                        StopPropagationDirective,
                        VisibilityDirective,
                    ],
                    imports: [
                        i1$1.OAuthModule,
                        common.CommonModule,
                        i2.HttpClientModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        i1$2.RouterModule,
                    ],
                    declarations: [
                        AbstractNgModelComponent,
                        AutofocusDirective,
                        DynamicLayoutComponent,
                        EllipsisDirective,
                        ForDirective,
                        FormSubmitDirective,
                        InitDirective,
                        InputEventDebounceDirective,
                        PermissionDirective,
                        ReplaceableRouteContainerComponent,
                        ReplaceableTemplateDirective,
                        RouterOutletComponent,
                        SortPipe,
                        StopPropagationDirective,
                        VisibilityDirective,
                    ],
                    entryComponents: [
                        RouterOutletComponent,
                        DynamicLayoutComponent,
                        ReplaceableRouteContainerComponent,
                    ],
                },] }
    ];
    /**
     * RootCoreModule is the module that will be used at root level
     * and it introduces imports useful at root level (e.g. NGXS)
     */
    var RootCoreModule = /** @class */ (function () {
        function RootCoreModule() {
        }
        return RootCoreModule;
    }());
    RootCoreModule.decorators = [
        { type: i0.NgModule, args: [{
                    exports: [BaseCoreModule, LocalizationModule],
                    imports: [
                        BaseCoreModule,
                        LocalizationModule,
                        i1.NgxsModule.forFeature([exports.ɵv, exports.ɵy, exports.ɵbi, exports.ɵbo]),
                        routerPlugin.NgxsRouterPluginModule.forRoot(),
                        storagePlugin.NgxsStoragePluginModule.forRoot(),
                        i1$1.OAuthModule.forRoot(),
                    ],
                },] }
    ];
    /**
     * TestCoreModule is the module that will be used in tests
     * and it provides mock alternatives
     */
    var TestCoreModule = /** @class */ (function () {
        function TestCoreModule() {
        }
        return TestCoreModule;
    }());
    TestCoreModule.decorators = [
        { type: i0.NgModule, args: [{
                    exports: [i1$2.RouterModule, BaseCoreModule, MockLocalizationPipe],
                    imports: [i1$2.RouterModule.forRoot([]), BaseCoreModule],
                    declarations: [MockLocalizationPipe],
                },] }
    ];
    /**
     * CoreModule is the module that is publicly available
     */
    var CoreModule = /** @class */ (function () {
        function CoreModule() {
        }
        CoreModule.forTest = function (_b) {
            var _c = (_b === void 0 ? {} : _b).baseHref, baseHref = _c === void 0 ? '/' : _c;
            return {
                ngModule: TestCoreModule,
                providers: [
                    { provide: common.APP_BASE_HREF, useValue: baseHref },
                    {
                        provide: LocalizationPipe,
                        useClass: MockLocalizationPipe,
                    },
                ],
            };
        };
        CoreModule.forRoot = function (options) {
            if (options === void 0) { options = {}; }
            var _a;
            return {
                ngModule: RootCoreModule,
                providers: [
                    LocaleProvider,
                    {
                        provide: i1.NGXS_PLUGINS,
                        useClass: ConfigPlugin,
                        multi: true,
                    },
                    {
                        provide: NGXS_CONFIG_PLUGIN_OPTIONS,
                        useValue: { environment: options.environment },
                    },
                    {
                        provide: 'CORE_OPTIONS',
                        useValue: options,
                    },
                    {
                        provide: CORE_OPTIONS,
                        useFactory: coreOptionsFactory,
                        deps: ['CORE_OPTIONS'],
                    },
                    {
                        provide: i2.HTTP_INTERCEPTORS,
                        useExisting: ApiInterceptor,
                        multi: true,
                    },
                    {
                        provide: i0.APP_INITIALIZER,
                        multi: true,
                        deps: [OAuthConfigurationHandler],
                        useFactory: noop,
                    },
                    {
                        provide: i0.APP_INITIALIZER,
                        multi: true,
                        deps: [i0.Injector],
                        useFactory: getInitialData,
                    },
                    {
                        provide: i0.APP_INITIALIZER,
                        multi: true,
                        deps: [i0.Injector],
                        useFactory: localeInitializer,
                    },
                    {
                        provide: i0.APP_INITIALIZER,
                        multi: true,
                        deps: [LocalizationService],
                        useFactory: noop,
                    },
                    {
                        provide: i0.APP_INITIALIZER,
                        multi: true,
                        deps: [RoutesHandler],
                        useFactory: noop,
                    },
                    { provide: i1$1.OAuthStorage, useFactory: storageFactory },
                    {
                        provide: storagePlugin.NGXS_STORAGE_PLUGIN_OPTIONS,
                        useValue: Object.assign(Object.assign({ storage: 0 /* LocalStorage */, serialize: JSON.stringify, deserialize: JSON.parse, beforeSerialize: ngxsStoragePluginSerialize, afterDeserialize: ngxsStoragePluginSerialize }, options.ngxsStoragePluginOptions), { key: __spread((((_a = options.ngxsStoragePluginOptions) === null || _a === void 0 ? void 0 : _a.key) || []), ['SessionState']) }),
                    },
                ],
            };
        };
        return CoreModule;
    }());
    CoreModule.decorators = [
        { type: i0.NgModule, args: [{
                    exports: [BaseCoreModule, LocalizationModule],
                    imports: [BaseCoreModule, LocalizationModule],
                    providers: [LocalizationPipe],
                },] }
    ];
    function ngxsStoragePluginSerialize(data) {
        return data;
    }

    var AuthGuard = /** @class */ (function () {
        function AuthGuard(oauthService, injector) {
            this.oauthService = oauthService;
            this.injector = injector;
        }
        AuthGuard.prototype.canActivate = function (_, state) {
            var router = this.injector.get(i1$2.Router);
            var hasValidAccessToken = this.oauthService.hasValidAccessToken();
            if (hasValidAccessToken) {
                return hasValidAccessToken;
            }
            router.navigate(['/account/login'], { state: { redirectUrl: state.url } });
            return true;
        };
        return AuthGuard;
    }());
    AuthGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(i0.ɵɵinject(i1$1.OAuthService), i0.ɵɵinject(i0.INJECTOR)); }, token: AuthGuard, providedIn: "root" });
    AuthGuard.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    AuthGuard.ctorParameters = function () { return [
        { type: i1$1.OAuthService },
        { type: i0.Injector }
    ]; };

    var PermissionGuard = /** @class */ (function () {
        function PermissionGuard(router, routes, store) {
            this.router = router;
            this.routes = routes;
            this.store = store;
        }
        PermissionGuard.prototype.canActivate = function (route, state) {
            var _this = this;
            var requiredPolicy = (route.data || {}).requiredPolicy;
            if (!requiredPolicy) {
                var routeFound = findRoute(this.routes, getRoutePath(this.router, state.url));
                requiredPolicy = routeFound === null || routeFound === void 0 ? void 0 : routeFound.requiredPolicy;
            }
            if (!requiredPolicy)
                return rxjs.of(true);
            return this.store.select(exports.ɵbo.getGrantedPolicy(requiredPolicy)).pipe(operators.tap(function (access) {
                if (!access) {
                    _this.store.dispatch(new RestOccurError({ status: 403 }));
                }
            }));
        };
        return PermissionGuard;
    }());
    PermissionGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function PermissionGuard_Factory() { return new PermissionGuard(i0.ɵɵinject(i1$2.Router), i0.ɵɵinject(RoutesService), i0.ɵɵinject(i1.Store)); }, token: PermissionGuard, providedIn: "root" });
    PermissionGuard.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    PermissionGuard.ctorParameters = function () { return [
        { type: i1$2.Router },
        { type: RoutesService },
        { type: i1.Store }
    ]; };

    var ListResultDto = /** @class */ (function () {
        function ListResultDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            for (var key in initialValues) {
                if (initialValues.hasOwnProperty(key)) {
                    this[key] = initialValues[key];
                }
            }
        }
        return ListResultDto;
    }());
    var PagedResultDto = /** @class */ (function (_super) {
        __extends(PagedResultDto, _super);
        function PagedResultDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            return _super.call(this, initialValues) || this;
        }
        return PagedResultDto;
    }(ListResultDto));
    var LimitedResultRequestDto = /** @class */ (function () {
        function LimitedResultRequestDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            this.maxResultCount = 10;
            for (var key in initialValues) {
                if (initialValues.hasOwnProperty(key)) {
                    this[key] = initialValues[key];
                }
            }
        }
        return LimitedResultRequestDto;
    }());
    var PagedResultRequestDto = /** @class */ (function (_super) {
        __extends(PagedResultRequestDto, _super);
        function PagedResultRequestDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            return _super.call(this, initialValues) || this;
        }
        return PagedResultRequestDto;
    }(LimitedResultRequestDto));
    var PagedAndSortedResultRequestDto = /** @class */ (function (_super) {
        __extends(PagedAndSortedResultRequestDto, _super);
        function PagedAndSortedResultRequestDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            return _super.call(this, initialValues) || this;
        }
        return PagedAndSortedResultRequestDto;
    }(PagedResultRequestDto));
    var EntityDto = /** @class */ (function () {
        function EntityDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            for (var key in initialValues) {
                if (initialValues.hasOwnProperty(key)) {
                    this[key] = initialValues[key];
                }
            }
        }
        return EntityDto;
    }());
    var CreationAuditedEntityDto = /** @class */ (function (_super) {
        __extends(CreationAuditedEntityDto, _super);
        function CreationAuditedEntityDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            return _super.call(this, initialValues) || this;
        }
        return CreationAuditedEntityDto;
    }(EntityDto));
    var CreationAuditedEntityWithUserDto = /** @class */ (function (_super) {
        __extends(CreationAuditedEntityWithUserDto, _super);
        function CreationAuditedEntityWithUserDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            return _super.call(this, initialValues) || this;
        }
        return CreationAuditedEntityWithUserDto;
    }(CreationAuditedEntityDto));
    var AuditedEntityDto = /** @class */ (function (_super) {
        __extends(AuditedEntityDto, _super);
        function AuditedEntityDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            return _super.call(this, initialValues) || this;
        }
        return AuditedEntityDto;
    }(CreationAuditedEntityDto));
    var AuditedEntityWithUserDto = /** @class */ (function (_super) {
        __extends(AuditedEntityWithUserDto, _super);
        function AuditedEntityWithUserDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            return _super.call(this, initialValues) || this;
        }
        return AuditedEntityWithUserDto;
    }(AuditedEntityDto));
    var FullAuditedEntityDto = /** @class */ (function (_super) {
        __extends(FullAuditedEntityDto, _super);
        function FullAuditedEntityDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            return _super.call(this, initialValues) || this;
        }
        return FullAuditedEntityDto;
    }(AuditedEntityDto));
    var FullAuditedEntityWithUserDto = /** @class */ (function (_super) {
        __extends(FullAuditedEntityWithUserDto, _super);
        function FullAuditedEntityWithUserDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            return _super.call(this, initialValues) || this;
        }
        return FullAuditedEntityWithUserDto;
    }(FullAuditedEntityDto));
    var ExtensibleObject = /** @class */ (function () {
        function ExtensibleObject(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            for (var key in initialValues) {
                if (initialValues.hasOwnProperty(key)) {
                    this[key] = initialValues[key];
                }
            }
        }
        return ExtensibleObject;
    }());
    var ExtensibleEntityDto = /** @class */ (function (_super) {
        __extends(ExtensibleEntityDto, _super);
        function ExtensibleEntityDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            return _super.call(this, initialValues) || this;
        }
        return ExtensibleEntityDto;
    }(ExtensibleObject));
    var ExtensibleCreationAuditedEntityDto = /** @class */ (function (_super) {
        __extends(ExtensibleCreationAuditedEntityDto, _super);
        function ExtensibleCreationAuditedEntityDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            return _super.call(this, initialValues) || this;
        }
        return ExtensibleCreationAuditedEntityDto;
    }(ExtensibleEntityDto));
    var ExtensibleAuditedEntityDto = /** @class */ (function (_super) {
        __extends(ExtensibleAuditedEntityDto, _super);
        function ExtensibleAuditedEntityDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            return _super.call(this, initialValues) || this;
        }
        return ExtensibleAuditedEntityDto;
    }(ExtensibleCreationAuditedEntityDto));
    var ExtensibleAuditedEntityWithUserDto = /** @class */ (function (_super) {
        __extends(ExtensibleAuditedEntityWithUserDto, _super);
        function ExtensibleAuditedEntityWithUserDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            return _super.call(this, initialValues) || this;
        }
        return ExtensibleAuditedEntityWithUserDto;
    }(ExtensibleAuditedEntityDto));
    var ExtensibleCreationAuditedEntityWithUserDto = /** @class */ (function (_super) {
        __extends(ExtensibleCreationAuditedEntityWithUserDto, _super);
        function ExtensibleCreationAuditedEntityWithUserDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            return _super.call(this, initialValues) || this;
        }
        return ExtensibleCreationAuditedEntityWithUserDto;
    }(ExtensibleCreationAuditedEntityDto));
    var ExtensibleFullAuditedEntityDto = /** @class */ (function (_super) {
        __extends(ExtensibleFullAuditedEntityDto, _super);
        function ExtensibleFullAuditedEntityDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            return _super.call(this, initialValues) || this;
        }
        return ExtensibleFullAuditedEntityDto;
    }(ExtensibleAuditedEntityDto));
    var ExtensibleFullAuditedEntityWithUserDto = /** @class */ (function (_super) {
        __extends(ExtensibleFullAuditedEntityWithUserDto, _super);
        function ExtensibleFullAuditedEntityWithUserDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            return _super.call(this, initialValues) || this;
        }
        return ExtensibleFullAuditedEntityWithUserDto;
    }(ExtensibleFullAuditedEntityDto));

    var FindTenantResultDto = /** @class */ (function () {
        function FindTenantResultDto(initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            for (var key in initialValues) {
                if (initialValues.hasOwnProperty(key)) {
                    this[key] = initialValues[key];
                }
            }
        }
        return FindTenantResultDto;
    }());

    var ApplicationConfigurationService = /** @class */ (function () {
        function ApplicationConfigurationService(rest, store) {
            this.rest = rest;
            this.store = store;
        }
        Object.defineProperty(ApplicationConfigurationService.prototype, "apiName", {
            get: function () {
                return this.store.selectSnapshot(exports.ɵbo.getDeep('environment.application.name'));
            },
            enumerable: false,
            configurable: true
        });
        ApplicationConfigurationService.prototype.getConfiguration = function () {
            var request = {
                method: 'GET',
                url: '/api/abp/application-configuration',
            };
            return this.rest.request(request, {
                apiName: this.apiName,
            });
        };
        return ApplicationConfigurationService;
    }());
    ApplicationConfigurationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ApplicationConfigurationService_Factory() { return new ApplicationConfigurationService(i0.ɵɵinject(RestService), i0.ɵɵinject(i1.Store)); }, token: ApplicationConfigurationService, providedIn: "root" });
    ApplicationConfigurationService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    ApplicationConfigurationService.ctorParameters = function () { return [
        { type: RestService },
        { type: i1.Store }
    ]; };

    var ConfigStateService = /** @class */ (function () {
        function ConfigStateService(store) {
            this.store = store;
        }
        ConfigStateService.prototype.getAll = function () {
            return this.store.selectSnapshot(exports.ɵbo.getAll);
        };
        ConfigStateService.prototype.getApplicationInfo = function () {
            return this.store.selectSnapshot(exports.ɵbo.getApplicationInfo);
        };
        ConfigStateService.prototype.getOne = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.selectSnapshot(exports.ɵbo.getOne.apply(exports.ɵbo, __spread(args)));
        };
        ConfigStateService.prototype.getDeep = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.selectSnapshot(exports.ɵbo.getDeep.apply(exports.ɵbo, __spread(args)));
        };
        ConfigStateService.prototype.getApiUrl = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.selectSnapshot(exports.ɵbo.getApiUrl.apply(exports.ɵbo, __spread(args)));
        };
        ConfigStateService.prototype.getFeature = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.selectSnapshot(exports.ɵbo.getFeature.apply(exports.ɵbo, __spread(args)));
        };
        ConfigStateService.prototype.getSetting = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.selectSnapshot(exports.ɵbo.getSetting.apply(exports.ɵbo, __spread(args)));
        };
        ConfigStateService.prototype.getSettings = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.selectSnapshot(exports.ɵbo.getSettings.apply(exports.ɵbo, __spread(args)));
        };
        ConfigStateService.prototype.getGrantedPolicy = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.selectSnapshot(exports.ɵbo.getGrantedPolicy.apply(exports.ɵbo, __spread(args)));
        };
        ConfigStateService.prototype.getLocalization = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.selectSnapshot(exports.ɵbo.getLocalization.apply(exports.ɵbo, __spread(args)));
        };
        ConfigStateService.prototype.getLocalizationResource = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.selectSnapshot(exports.ɵbo.getLocalizationResource.apply(exports.ɵbo, __spread(args)));
        };
        ConfigStateService.prototype.dispatchGetAppConfiguration = function () {
            return this.store.dispatch(new GetAppConfiguration());
        };
        ConfigStateService.prototype.dispatchSetEnvironment = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (SetEnvironment.bind.apply(SetEnvironment, __spread([void 0], args)))());
        };
        return ConfigStateService;
    }());
    ConfigStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfigStateService_Factory() { return new ConfigStateService(i0.ɵɵinject(i1.Store)); }, token: ConfigStateService, providedIn: "root" });
    ConfigStateService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    ConfigStateService.ctorParameters = function () { return [
        { type: i1.Store }
    ]; };

    var ContentProjectionService = /** @class */ (function () {
        function ContentProjectionService(injector) {
            this.injector = injector;
        }
        ContentProjectionService.prototype.projectContent = function (projectionStrategy, injector) {
            if (injector === void 0) { injector = this.injector; }
            return projectionStrategy.injectContent(injector);
        };
        return ContentProjectionService;
    }());
    ContentProjectionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ContentProjectionService_Factory() { return new ContentProjectionService(i0.ɵɵinject(i0.INJECTOR)); }, token: ContentProjectionService, providedIn: "root" });
    ContentProjectionService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    ContentProjectionService.ctorParameters = function () { return [
        { type: i0.Injector }
    ]; };

    function getShortDateFormat(configStateService) {
        var dateTimeFormat = configStateService.getDeep('localization.currentCulture.dateTimeFormat');
        return dateTimeFormat.shortDatePattern;
    }
    function getShortTimeFormat(configStateService) {
        var dateTimeFormat = configStateService.getDeep('localization.currentCulture.dateTimeFormat');
        return dateTimeFormat.shortTimePattern.replace('tt', 'a');
    }
    function getShortDateShortTimeFormat(configStateService) {
        var dateTimeFormat = configStateService.getDeep('localization.currentCulture.dateTimeFormat');
        return dateTimeFormat.shortDatePattern + " " + dateTimeFormat.shortTimePattern.replace('tt', 'a');
    }

    var LazyModuleFactory = /** @class */ (function (_super) {
        __extends(LazyModuleFactory, _super);
        function LazyModuleFactory(moduleWithProviders) {
            var _this = _super.call(this) || this;
            _this.moduleWithProviders = moduleWithProviders;
            return _this;
        }
        Object.defineProperty(LazyModuleFactory.prototype, "moduleType", {
            get: function () {
                return this.moduleWithProviders.ngModule;
            },
            enumerable: false,
            configurable: true
        });
        LazyModuleFactory.prototype.create = function (parentInjector) {
            var injector = i0.Injector.create({
                parent: parentInjector,
                providers: this.moduleWithProviders.providers,
            });
            var compiler = injector.get(i0.Compiler);
            var factory = compiler.compileModuleSync(this.moduleType);
            return factory.create(injector);
        };
        return LazyModuleFactory;
    }(i0.NgModuleFactory));

    function downloadBlob(blob, filename) {
        var blobUrl = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
        }));
        document.body.removeChild(link);
    }

    function isNumber(value) {
        /* tslint:disable-next-line:triple-equals */
        return value == Number(value);
    }

    function mapEnumToOptions(_enum) {
        var options = [];
        for (var member in _enum)
            if (!isNumber(member))
                options.push({
                    key: member,
                    value: _enum[member],
                });
        return options;
    }

    // tslint:disable: no-bitwise
    function uuid(a) {
        return a
            ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
            : ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
    }
    function generateHash(value) {
        var hashed = 0;
        var charCode;
        for (var i = 0; i < value.length; i++) {
            charCode = value.charCodeAt(i);
            hashed = (hashed << 5) - hashed + charCode;
            hashed |= 0;
        }
        return hashed;
    }
    function generatePassword(length) {
        if (length === void 0) { length = 8; }
        length = Math.min(Math.max(4, length), 128);
        var lowers = 'abcdefghijklmnopqrstuvwxyz';
        var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var numbers = '0123456789';
        var specials = '!@#$%&*()_+{}<>?[]./';
        var all = lowers + uppers + numbers + specials;
        var getRandom = function (chrSet) { return chrSet[Math.floor(Math.random() * chrSet.length)]; };
        var password = Array({ length: length });
        password[0] = getRandom(lowers);
        password[1] = getRandom(uppers);
        password[2] = getRandom(numbers);
        password[3] = getRandom(specials);
        for (var i = 4; i < length; i++) {
            password[i] = getRandom(all);
        }
        return password.sort(function () { return 0.5 - Math.random(); }).join('');
    }

    var CrossOriginStrategy = /** @class */ (function () {
        function CrossOriginStrategy(crossorigin, integrity) {
            this.crossorigin = crossorigin;
            this.integrity = integrity;
        }
        CrossOriginStrategy.prototype.setCrossOrigin = function (element) {
            if (this.integrity)
                element.setAttribute('integrity', this.integrity);
            element.setAttribute('crossorigin', this.crossorigin);
        };
        return CrossOriginStrategy;
    }());
    var CROSS_ORIGIN_STRATEGY = {
        Anonymous: function (integrity) {
            return new CrossOriginStrategy('anonymous', integrity);
        },
        UseCredentials: function (integrity) {
            return new CrossOriginStrategy('use-credentials', integrity);
        },
    };

    var DomStrategy = /** @class */ (function () {
        function DomStrategy(target, position) {
            if (target === void 0) { target = document.head; }
            if (position === void 0) { position = 'beforeend'; }
            this.target = target;
            this.position = position;
        }
        DomStrategy.prototype.insertElement = function (element) {
            this.target.insertAdjacentElement(this.position, element);
        };
        return DomStrategy;
    }());
    var DOM_STRATEGY = {
        AfterElement: function (element) {
            return new DomStrategy(element, 'afterend');
        },
        AppendToBody: function () {
            return new DomStrategy(document.body, 'beforeend');
        },
        AppendToHead: function () {
            return new DomStrategy(document.head, 'beforeend');
        },
        BeforeElement: function (element) {
            return new DomStrategy(element, 'beforebegin');
        },
        PrependToHead: function () {
            return new DomStrategy(document.head, 'afterbegin');
        },
    };

    function fromLazyLoad(element, domStrategy, crossOriginStrategy) {
        if (domStrategy === void 0) { domStrategy = DOM_STRATEGY.AppendToHead(); }
        if (crossOriginStrategy === void 0) { crossOriginStrategy = CROSS_ORIGIN_STRATEGY.Anonymous(); }
        crossOriginStrategy.setCrossOrigin(element);
        domStrategy.insertElement(element);
        return new rxjs.Observable(function (observer) {
            element.onload = function (event) {
                clearCallbacks(element);
                observer.next(event);
                observer.complete();
            };
            var handleError = createErrorHandler(observer, element);
            element.onerror = handleError;
            element.onabort = handleError;
            element.onemptied = handleError;
            element.onstalled = handleError;
            element.onsuspend = handleError;
            return function () {
                clearCallbacks(element);
                observer.complete();
            };
        });
    }
    function createErrorHandler(observer, element) {
        /* tslint:disable-next-line:only-arrow-functions */
        return function (event) {
            clearCallbacks(element);
            element.parentNode.removeChild(element);
            observer.error(event);
        };
    }
    function clearCallbacks(element) {
        element.onload = null;
        element.onerror = null;
        element.onabort = null;
        element.onemptied = null;
        element.onstalled = null;
        element.onsuspend = null;
    }

    // tslint:disable: max-line-length
    function isFunction(value) {
        return typeof value === 'function';
    }
    /**
     * @deprecated no longer working, please use SubscriptionService (https://docs.abp.io/en/abp/latest/UI/Angular/Subscription-Service) instead.
     */
    var takeUntilDestroy = function (componentInstance, destroyMethodName) {
        if (destroyMethodName === void 0) { destroyMethodName = 'ngOnDestroy'; }
        return function (source) {
            var originalDestroy = componentInstance[destroyMethodName];
            if (isFunction(originalDestroy) === false) {
                throw new Error(componentInstance.constructor.name + " is using untilDestroyed but doesn't implement " + destroyMethodName);
            }
            if (!componentInstance['__takeUntilDestroy']) {
                componentInstance['__takeUntilDestroy'] = new rxjs.Subject();
                componentInstance[destroyMethodName] = function () {
                    // tslint:disable-next-line: no-unused-expression
                    isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
                    componentInstance['__takeUntilDestroy'].next(true);
                    componentInstance['__takeUntilDestroy'].complete();
                };
            }
            return source.pipe(operators.takeUntil(componentInstance['__takeUntilDestroy']));
        };
    };

    var DomInsertionService = /** @class */ (function () {
        function DomInsertionService() {
            this.inserted = new Set();
        }
        DomInsertionService.prototype.insertContent = function (contentStrategy) {
            var hash = generateHash(contentStrategy.content);
            if (this.inserted.has(hash))
                return;
            var element = contentStrategy.insertElement();
            this.inserted.add(hash);
            return element;
        };
        DomInsertionService.prototype.removeContent = function (element) {
            var hash = generateHash(element.textContent);
            this.inserted.delete(hash);
            element.parentNode.removeChild(element);
        };
        DomInsertionService.prototype.has = function (content) {
            var hash = generateHash(content);
            return this.inserted.has(hash);
        };
        return DomInsertionService;
    }());
    DomInsertionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DomInsertionService_Factory() { return new DomInsertionService(); }, token: DomInsertionService, providedIn: "root" });
    DomInsertionService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];

    var LazyLoadService = /** @class */ (function () {
        function LazyLoadService() {
            this.loaded = new Map();
        }
        LazyLoadService.prototype.load = function (strategy, retryTimes, retryDelay) {
            var _this = this;
            if (this.loaded.has(strategy.path))
                return rxjs.of(new CustomEvent('load'));
            return strategy.createStream().pipe(operators.retryWhen(function (error$) { return rxjs.concat(error$.pipe(operators.delay(retryDelay), operators.take(retryTimes)), rxjs.throwError(new CustomEvent('error'))); }), operators.tap(function () { return _this.loaded.set(strategy.path, strategy.element); }), operators.delay(100), operators.shareReplay({ bufferSize: 1, refCount: true }));
        };
        LazyLoadService.prototype.remove = function (path) {
            var element = this.loaded.get(path);
            if (!element)
                return false;
            element.parentNode.removeChild(element);
            this.loaded.delete(path);
            return true;
        };
        return LazyLoadService;
    }());
    LazyLoadService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LazyLoadService_Factory() { return new LazyLoadService(); }, token: LazyLoadService, providedIn: "root" });
    LazyLoadService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];

    var LIST_QUERY_DEBOUNCE_TIME = new i0.InjectionToken('LIST_QUERY_DEBOUNCE_TIME');

    var ListService = /** @class */ (function () {
        function ListService(delay) {
            var _this = this;
            this.delay = delay;
            this._filter = '';
            this._maxResultCount = 10;
            this._page = 0;
            this._sortKey = '';
            this._sortOrder = '';
            this._query$ = new rxjs.ReplaySubject(1);
            this._isLoading$ = new rxjs.BehaviorSubject(false);
            this.destroy$ = new rxjs.Subject();
            this.get = function () {
                _this._query$.next({
                    filter: _this._filter || undefined,
                    maxResultCount: _this._maxResultCount,
                    skipCount: _this._page * _this._maxResultCount,
                    sorting: _this._sortOrder ? _this._sortKey + " " + _this._sortOrder : undefined,
                });
            };
            this.get();
        }
        Object.defineProperty(ListService.prototype, "filter", {
            get: function () {
                return this._filter;
            },
            set: function (value) {
                if (this._filter !== value)
                    this._page = 0;
                this._filter = value;
                this.get();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListService.prototype, "maxResultCount", {
            get: function () {
                return this._maxResultCount;
            },
            set: function (value) {
                this._maxResultCount = value;
                this.get();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListService.prototype, "page", {
            get: function () {
                return this._page;
            },
            set: function (value) {
                if (value === this._page)
                    return;
                this._page = value;
                this.get();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListService.prototype, "sortKey", {
            get: function () {
                return this._sortKey;
            },
            set: function (value) {
                this._sortKey = value;
                this.get();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListService.prototype, "sortOrder", {
            get: function () {
                return this._sortOrder;
            },
            set: function (value) {
                this._sortOrder = value;
                this.get();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListService.prototype, "query$", {
            get: function () {
                return this._query$
                    .asObservable()
                    .pipe(operators.debounceTime(this.delay || 300), operators.shareReplay({ bufferSize: 1, refCount: true }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ListService.prototype, "isLoading$", {
            get: function () {
                return this._isLoading$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        ListService.prototype.hookToQuery = function (streamCreatorCallback) {
            var _this = this;
            this._isLoading$.next(true);
            return this.query$.pipe(operators.switchMap(function (query) { return streamCreatorCallback(query).pipe(operators.catchError(function () { return rxjs.of(null); })); }), operators.filter(Boolean), operators.tap(function () { return _this._isLoading$.next(false); }), operators.shareReplay({ bufferSize: 1, refCount: true }), operators.takeUntil(this.destroy$));
        };
        ListService.prototype.ngOnDestroy = function () {
            this.destroy$.next();
        };
        return ListService;
    }());
    ListService.decorators = [
        { type: i0.Injectable }
    ];
    ListService.ctorParameters = function () { return [
        { type: Number, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [LIST_QUERY_DEBOUNCE_TIME,] }] }
    ]; };

    var ProfileStateService = /** @class */ (function () {
        function ProfileStateService(store) {
            this.store = store;
        }
        ProfileStateService.prototype.getProfile = function () {
            return this.store.selectSnapshot(exports.ɵy.getProfile);
        };
        ProfileStateService.prototype.dispatchGetProfile = function () {
            return this.store.dispatch(new GetProfile());
        };
        ProfileStateService.prototype.dispatchUpdateProfile = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (UpdateProfile.bind.apply(UpdateProfile, __spread([void 0], args)))());
        };
        ProfileStateService.prototype.dispatchChangePassword = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (ChangePassword.bind.apply(ChangePassword, __spread([void 0], args)))());
        };
        return ProfileStateService;
    }());
    ProfileStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProfileStateService_Factory() { return new ProfileStateService(i0.ɵɵinject(i1.Store)); }, token: ProfileStateService, providedIn: "root" });
    ProfileStateService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    ProfileStateService.ctorParameters = function () { return [
        { type: i1.Store }
    ]; };

    var SessionStateService = /** @class */ (function () {
        function SessionStateService(store) {
            this.store = store;
        }
        SessionStateService.prototype.getLanguage = function () {
            return this.store.selectSnapshot(exports.ɵbi.getLanguage);
        };
        SessionStateService.prototype.getTenant = function () {
            return this.store.selectSnapshot(exports.ɵbi.getTenant);
        };
        SessionStateService.prototype.getSessionDetail = function () {
            return this.store.selectSnapshot(exports.ɵbi.getSessionDetail);
        };
        SessionStateService.prototype.dispatchSetLanguage = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (SetLanguage.bind.apply(SetLanguage, __spread([void 0], args)))());
        };
        SessionStateService.prototype.dispatchSetTenant = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (SetTenant.bind.apply(SetTenant, __spread([void 0], args)))());
        };
        SessionStateService.prototype.dispatchSetRemember = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (SetRemember.bind.apply(SetRemember, __spread([void 0], args)))());
        };
        SessionStateService.prototype.dispatchModifyOpenedTabCount = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (ModifyOpenedTabCount.bind.apply(ModifyOpenedTabCount, __spread([void 0], args)))());
        };
        return SessionStateService;
    }());
    SessionStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SessionStateService_Factory() { return new SessionStateService(i0.ɵɵinject(i1.Store)); }, token: SessionStateService, providedIn: "root" });
    SessionStateService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    SessionStateService.ctorParameters = function () { return [
        { type: i1.Store }
    ]; };

    var trackBy = function (key) { return function (_, item) { return item[key]; }; };
    var trackByDeep = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return function (_, item) { return keys.reduce(function (acc, key) { return acc[key]; }, item); };
    };
    var TrackByService = /** @class */ (function () {
        function TrackByService() {
            this.by = trackBy;
            this.byDeep = trackByDeep;
        }
        return TrackByService;
    }());
    TrackByService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TrackByService_Factory() { return new TrackByService(); }, token: TrackByService, providedIn: "root" });
    TrackByService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];

    var ContainerStrategy = /** @class */ (function () {
        function ContainerStrategy(containerRef) {
            this.containerRef = containerRef;
        }
        ContainerStrategy.prototype.prepare = function () { };
        return ContainerStrategy;
    }());
    var ClearContainerStrategy = /** @class */ (function (_super) {
        __extends(ClearContainerStrategy, _super);
        function ClearContainerStrategy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ClearContainerStrategy.prototype.getIndex = function () {
            return 0;
        };
        ClearContainerStrategy.prototype.prepare = function () {
            this.containerRef.clear();
        };
        return ClearContainerStrategy;
    }(ContainerStrategy));
    var InsertIntoContainerStrategy = /** @class */ (function (_super) {
        __extends(InsertIntoContainerStrategy, _super);
        function InsertIntoContainerStrategy(containerRef, index) {
            var _this = _super.call(this, containerRef) || this;
            _this.index = index;
            return _this;
        }
        InsertIntoContainerStrategy.prototype.getIndex = function () {
            return Math.min(Math.max(0, this.index), this.containerRef.length);
        };
        return InsertIntoContainerStrategy;
    }(ContainerStrategy));
    var CONTAINER_STRATEGY = {
        Clear: function (containerRef) {
            return new ClearContainerStrategy(containerRef);
        },
        Append: function (containerRef) {
            return new InsertIntoContainerStrategy(containerRef, containerRef.length);
        },
        Prepend: function (containerRef) {
            return new InsertIntoContainerStrategy(containerRef, 0);
        },
        Insert: function (containerRef, index) {
            return new InsertIntoContainerStrategy(containerRef, index);
        },
    };

    var ContentSecurityStrategy = /** @class */ (function () {
        function ContentSecurityStrategy(nonce) {
            this.nonce = nonce;
        }
        return ContentSecurityStrategy;
    }());
    var LooseContentSecurityStrategy = /** @class */ (function (_super) {
        __extends(LooseContentSecurityStrategy, _super);
        function LooseContentSecurityStrategy(nonce) {
            return _super.call(this, nonce) || this;
        }
        LooseContentSecurityStrategy.prototype.applyCSP = function (element) {
            element.setAttribute('nonce', this.nonce);
        };
        return LooseContentSecurityStrategy;
    }(ContentSecurityStrategy));
    var NoContentSecurityStrategy = /** @class */ (function (_super) {
        __extends(NoContentSecurityStrategy, _super);
        function NoContentSecurityStrategy() {
            return _super.call(this) || this;
        }
        NoContentSecurityStrategy.prototype.applyCSP = function (_) { };
        return NoContentSecurityStrategy;
    }(ContentSecurityStrategy));
    var CONTENT_SECURITY_STRATEGY = {
        Loose: function (nonce) {
            return new LooseContentSecurityStrategy(nonce);
        },
        None: function () {
            return new NoContentSecurityStrategy();
        },
    };

    var ContentStrategy = /** @class */ (function () {
        function ContentStrategy(content, domStrategy, contentSecurityStrategy) {
            if (domStrategy === void 0) { domStrategy = DOM_STRATEGY.AppendToHead(); }
            if (contentSecurityStrategy === void 0) { contentSecurityStrategy = CONTENT_SECURITY_STRATEGY.None(); }
            this.content = content;
            this.domStrategy = domStrategy;
            this.contentSecurityStrategy = contentSecurityStrategy;
        }
        ContentStrategy.prototype.insertElement = function () {
            var element = this.createElement();
            this.contentSecurityStrategy.applyCSP(element);
            this.domStrategy.insertElement(element);
            return element;
        };
        return ContentStrategy;
    }());
    var StyleContentStrategy = /** @class */ (function (_super) {
        __extends(StyleContentStrategy, _super);
        function StyleContentStrategy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StyleContentStrategy.prototype.createElement = function () {
            var element = document.createElement('style');
            element.textContent = this.content;
            return element;
        };
        return StyleContentStrategy;
    }(ContentStrategy));
    var ScriptContentStrategy = /** @class */ (function (_super) {
        __extends(ScriptContentStrategy, _super);
        function ScriptContentStrategy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ScriptContentStrategy.prototype.createElement = function () {
            var element = document.createElement('script');
            element.textContent = this.content;
            return element;
        };
        return ScriptContentStrategy;
    }(ContentStrategy));
    var CONTENT_STRATEGY = {
        AppendScriptToBody: function (content) {
            return new ScriptContentStrategy(content, DOM_STRATEGY.AppendToBody());
        },
        AppendScriptToHead: function (content) {
            return new ScriptContentStrategy(content, DOM_STRATEGY.AppendToHead());
        },
        AppendStyleToHead: function (content) {
            return new StyleContentStrategy(content, DOM_STRATEGY.AppendToHead());
        },
        PrependStyleToHead: function (content) {
            return new StyleContentStrategy(content, DOM_STRATEGY.PrependToHead());
        },
    };

    var ContextStrategy = /** @class */ (function () {
        function ContextStrategy(context) {
            this.context = context;
        }
        /* tslint:disable-next-line:no-unused-variable */
        ContextStrategy.prototype.setContext = function (componentRef) {
            return this.context;
        };
        return ContextStrategy;
    }());
    var NoContextStrategy = /** @class */ (function (_super) {
        __extends(NoContextStrategy, _super);
        function NoContextStrategy() {
            return _super.call(this, undefined) || this;
        }
        return NoContextStrategy;
    }(ContextStrategy));
    var ComponentContextStrategy = /** @class */ (function (_super) {
        __extends(ComponentContextStrategy, _super);
        function ComponentContextStrategy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ComponentContextStrategy.prototype.setContext = function (componentRef) {
            var _this = this;
            Object.keys(this.context).forEach(function (key) { return (componentRef.instance[key] = _this.context[key]); });
            componentRef.changeDetectorRef.detectChanges();
            return this.context;
        };
        return ComponentContextStrategy;
    }(ContextStrategy));
    var TemplateContextStrategy = /** @class */ (function (_super) {
        __extends(TemplateContextStrategy, _super);
        function TemplateContextStrategy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TemplateContextStrategy.prototype.setContext = function () {
            return this.context;
        };
        return TemplateContextStrategy;
    }(ContextStrategy));
    var CONTEXT_STRATEGY = {
        None: function () {
            return new NoContextStrategy();
        },
        Component: function (context) {
            return new ComponentContextStrategy(context);
        },
        Template: function (context) {
            return new TemplateContextStrategy(context);
        },
    };

    var LoadingStrategy = /** @class */ (function () {
        function LoadingStrategy(path, domStrategy, crossOriginStrategy) {
            if (domStrategy === void 0) { domStrategy = DOM_STRATEGY.AppendToHead(); }
            if (crossOriginStrategy === void 0) { crossOriginStrategy = CROSS_ORIGIN_STRATEGY.Anonymous(); }
            this.path = path;
            this.domStrategy = domStrategy;
            this.crossOriginStrategy = crossOriginStrategy;
        }
        LoadingStrategy.prototype.createStream = function () {
            var _this = this;
            this.element = this.createElement();
            return rxjs.of(null).pipe(operators.switchMap(function () { return fromLazyLoad(_this.element, _this.domStrategy, _this.crossOriginStrategy); }));
        };
        return LoadingStrategy;
    }());
    var ScriptLoadingStrategy = /** @class */ (function (_super) {
        __extends(ScriptLoadingStrategy, _super);
        function ScriptLoadingStrategy(src, domStrategy, crossOriginStrategy) {
            return _super.call(this, src, domStrategy, crossOriginStrategy) || this;
        }
        ScriptLoadingStrategy.prototype.createElement = function () {
            var element = document.createElement('script');
            element.src = this.path;
            return element;
        };
        return ScriptLoadingStrategy;
    }(LoadingStrategy));
    var StyleLoadingStrategy = /** @class */ (function (_super) {
        __extends(StyleLoadingStrategy, _super);
        function StyleLoadingStrategy(href, domStrategy, crossOriginStrategy) {
            return _super.call(this, href, domStrategy, crossOriginStrategy) || this;
        }
        StyleLoadingStrategy.prototype.createElement = function () {
            var element = document.createElement('link');
            element.rel = 'stylesheet';
            element.href = this.path;
            return element;
        };
        return StyleLoadingStrategy;
    }(LoadingStrategy));
    var LOADING_STRATEGY = {
        AppendAnonymousScriptToBody: function (src, integrity) {
            return new ScriptLoadingStrategy(src, DOM_STRATEGY.AppendToBody(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
        },
        AppendAnonymousScriptToHead: function (src, integrity) {
            return new ScriptLoadingStrategy(src, DOM_STRATEGY.AppendToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
        },
        AppendAnonymousStyleToHead: function (src, integrity) {
            return new StyleLoadingStrategy(src, DOM_STRATEGY.AppendToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
        },
        PrependAnonymousScriptToHead: function (src, integrity) {
            return new ScriptLoadingStrategy(src, DOM_STRATEGY.PrependToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
        },
        PrependAnonymousStyleToHead: function (src, integrity) {
            return new StyleLoadingStrategy(src, DOM_STRATEGY.PrependToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
        },
    };

    var ProjectionStrategy = /** @class */ (function () {
        function ProjectionStrategy(content) {
            this.content = content;
        }
        return ProjectionStrategy;
    }());
    var ComponentProjectionStrategy = /** @class */ (function (_super) {
        __extends(ComponentProjectionStrategy, _super);
        function ComponentProjectionStrategy(component, containerStrategy, contextStrategy) {
            if (contextStrategy === void 0) { contextStrategy = CONTEXT_STRATEGY.None(); }
            var _this = _super.call(this, component) || this;
            _this.containerStrategy = containerStrategy;
            _this.contextStrategy = contextStrategy;
            return _this;
        }
        ComponentProjectionStrategy.prototype.injectContent = function (injector) {
            this.containerStrategy.prepare();
            var resolver = injector.get(i0.ComponentFactoryResolver);
            var factory = resolver.resolveComponentFactory(this.content);
            var componentRef = this.containerStrategy.containerRef.createComponent(factory, this.containerStrategy.getIndex(), injector);
            this.contextStrategy.setContext(componentRef);
            return componentRef;
        };
        return ComponentProjectionStrategy;
    }(ProjectionStrategy));
    var RootComponentProjectionStrategy = /** @class */ (function (_super) {
        __extends(RootComponentProjectionStrategy, _super);
        function RootComponentProjectionStrategy(component, contextStrategy, domStrategy) {
            if (contextStrategy === void 0) { contextStrategy = CONTEXT_STRATEGY.None(); }
            if (domStrategy === void 0) { domStrategy = DOM_STRATEGY.AppendToBody(); }
            var _this = _super.call(this, component) || this;
            _this.contextStrategy = contextStrategy;
            _this.domStrategy = domStrategy;
            return _this;
        }
        RootComponentProjectionStrategy.prototype.injectContent = function (injector) {
            var appRef = injector.get(i0.ApplicationRef);
            var resolver = injector.get(i0.ComponentFactoryResolver);
            var componentRef = resolver
                .resolveComponentFactory(this.content)
                .create(injector);
            this.contextStrategy.setContext(componentRef);
            appRef.attachView(componentRef.hostView);
            var element = componentRef.hostView.rootNodes[0];
            this.domStrategy.insertElement(element);
            return componentRef;
        };
        return RootComponentProjectionStrategy;
    }(ProjectionStrategy));
    var TemplateProjectionStrategy = /** @class */ (function (_super) {
        __extends(TemplateProjectionStrategy, _super);
        function TemplateProjectionStrategy(templateRef, containerStrategy, contextStrategy) {
            if (contextStrategy === void 0) { contextStrategy = CONTEXT_STRATEGY.None(); }
            var _this = _super.call(this, templateRef) || this;
            _this.containerStrategy = containerStrategy;
            _this.contextStrategy = contextStrategy;
            return _this;
        }
        TemplateProjectionStrategy.prototype.injectContent = function () {
            this.containerStrategy.prepare();
            var embeddedViewRef = this.containerStrategy.containerRef.createEmbeddedView(this.content, this.contextStrategy.context, this.containerStrategy.getIndex());
            embeddedViewRef.detectChanges();
            return embeddedViewRef;
        };
        return TemplateProjectionStrategy;
    }(ProjectionStrategy));
    var PROJECTION_STRATEGY = {
        AppendComponentToBody: function (component, context) {
            return new RootComponentProjectionStrategy(component, context && CONTEXT_STRATEGY.Component(context));
        },
        AppendComponentToContainer: function (component, containerRef, context) {
            return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Append(containerRef), context && CONTEXT_STRATEGY.Component(context));
        },
        AppendTemplateToContainer: function (templateRef, containerRef, context) {
            return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Append(containerRef), context && CONTEXT_STRATEGY.Template(context));
        },
        PrependComponentToContainer: function (component, containerRef, context) {
            return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Prepend(containerRef), context && CONTEXT_STRATEGY.Component(context));
        },
        PrependTemplateToContainer: function (templateRef, containerRef, context) {
            return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Prepend(containerRef), context && CONTEXT_STRATEGY.Template(context));
        },
        ProjectComponentToContainer: function (component, containerRef, context) {
            return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Clear(containerRef), context && CONTEXT_STRATEGY.Component(context));
        },
        ProjectTemplateToContainer: function (templateRef, containerRef, context) {
            return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Clear(containerRef), context && CONTEXT_STRATEGY.Template(context));
        },
    };

    function validateMinAge(_a) {
        var _b = (_a === void 0 ? {} : _a).age, age = _b === void 0 ? 18 : _b;
        return function (control) {
            if (control.pristine)
                return null;
            if (['', null, undefined].indexOf(control.value) > -1)
                return null;
            return isValidMinAge(control.value, age) ? null : { minAge: { age: age } };
        };
    }
    function isValidMinAge(value, minAge) {
        var date = new Date();
        date.setFullYear(date.getFullYear() - minAge);
        date.setHours(23, 59, 59, 999);
        return Number(new Date(value)) <= date.valueOf();
    }

    function validateCreditCard() {
        return function (control) {
            if (control.pristine)
                return null;
            if (['', null, undefined].indexOf(control.value) > -1)
                return null;
            return isValidCreditCard(String(control.value)) ? null : { creditCard: true };
        };
    }
    function isValidCreditCard(value) {
        value = value.replace(/[ -]/g, '');
        if (!/^[0-9]{13,19}$/.test(value))
            return false;
        var checksum = 0;
        var multiplier = 1;
        for (var i = value.length; i > 0; i--) {
            var digit = Number(value[i - 1]) * multiplier;
            /* tslint:disable-next-line:no-bitwise */
            checksum += (digit % 10) + ~~(digit / 10);
            multiplier = (multiplier * 2) % 3;
        }
        return checksum % 10 === 0;
    }

    function validateRange(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.maximum, maximum = _c === void 0 ? Infinity : _c, _d = _b.minimum, minimum = _d === void 0 ? 0 : _d;
        return function (control) {
            if (control.pristine)
                return null;
            if (['', null, undefined].indexOf(control.value) > -1)
                return null;
            var value = Number(control.value);
            return getMinError(value, minimum, maximum) || getMaxError(value, maximum, minimum);
        };
    }
    function getMaxError(value, max, min) {
        return value > max ? { range: { max: max, min: min } } : null;
    }
    function getMinError(value, min, max) {
        return value < min ? { range: { min: min, max: max } } : null;
    }

    function validateRequired(_a) {
        var allowEmptyStrings = (_a === void 0 ? {} : _a).allowEmptyStrings;
        return function (control) {
            return control.pristine || isValidRequired(control.value, allowEmptyStrings)
                ? null
                : { required: true };
        };
    }
    function isValidRequired(value, allowEmptyStrings) {
        if (value || value === 0 || value === false)
            return true;
        if (allowEmptyStrings && value === '')
            return true;
        return false;
    }

    function validateStringLength(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.maximumLength, maximumLength = _c === void 0 ? Infinity : _c, _d = _b.minimumLength, minimumLength = _d === void 0 ? 0 : _d;
        return function (control) {
            if (control.pristine)
                return null;
            if (['', null, undefined].indexOf(control.value) > -1)
                return null;
            var value = String(control.value);
            return getMinLengthError(value, minimumLength) || getMaxLengthError(value, maximumLength);
        };
    }
    function getMaxLengthError(value, requiredLength) {
        return value.length > requiredLength ? { maxlength: { requiredLength: requiredLength } } : null;
    }
    function getMinLengthError(value, requiredLength) {
        return value.length < requiredLength ? { minlength: { requiredLength: requiredLength } } : null;
    }

    function validateUrl() {
        return function (control) {
            if (control.pristine)
                return null;
            if (['', null, undefined].indexOf(control.value) > -1)
                return null;
            return isValidUrl(control.value) ? null : { url: true };
        };
    }
    function isValidUrl(value) {
        if (/^http(s)?:\/\/[^/]/.test(value) || /^ftp:\/\/[^/]/.test(value)) {
            var a = document.createElement('a');
            a.href = value;
            return !!a.host;
        }
        return false;
    }

    var ɵ0 = function () { return forms.Validators.email; };
    var AbpValidators = {
        creditCard: validateCreditCard,
        emailAddress: ɵ0,
        minAge: validateMinAge,
        range: validateRange,
        required: validateRequired,
        stringLength: validateStringLength,
        url: validateUrl,
    };

    /*
     * Public API Surface of core
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AUTH_FLOW_STRATEGY = AUTH_FLOW_STRATEGY;
    exports.AbpValidators = AbpValidators;
    exports.AbstractNavTreeService = AbstractNavTreeService;
    exports.AbstractNgModelComponent = AbstractNgModelComponent;
    exports.AbstractTreeService = AbstractTreeService;
    exports.AddReplaceableComponent = AddReplaceableComponent;
    exports.ApiInterceptor = ApiInterceptor;
    exports.ApplicationConfigurationService = ApplicationConfigurationService;
    exports.AuditedEntityDto = AuditedEntityDto;
    exports.AuditedEntityWithUserDto = AuditedEntityWithUserDto;
    exports.AuthCodeFlowStrategy = AuthCodeFlowStrategy;
    exports.AuthFlowStrategy = AuthFlowStrategy;
    exports.AuthGuard = AuthGuard;
    exports.AuthPasswordFlowStrategy = AuthPasswordFlowStrategy;
    exports.AuthService = AuthService;
    exports.AutofocusDirective = AutofocusDirective;
    exports.BaseCoreModule = BaseCoreModule;
    exports.BaseTreeNode = BaseTreeNode;
    exports.CONTAINER_STRATEGY = CONTAINER_STRATEGY;
    exports.CONTENT_SECURITY_STRATEGY = CONTENT_SECURITY_STRATEGY;
    exports.CONTENT_STRATEGY = CONTENT_STRATEGY;
    exports.CONTEXT_STRATEGY = CONTEXT_STRATEGY;
    exports.CORE_OPTIONS = CORE_OPTIONS;
    exports.CROSS_ORIGIN_STRATEGY = CROSS_ORIGIN_STRATEGY;
    exports.ChangePassword = ChangePassword;
    exports.ClearContainerStrategy = ClearContainerStrategy;
    exports.ComponentContextStrategy = ComponentContextStrategy;
    exports.ComponentProjectionStrategy = ComponentProjectionStrategy;
    exports.ConfigPlugin = ConfigPlugin;
    exports.ConfigState = exports.ɵbo;
    exports.ConfigStateService = ConfigStateService;
    exports.ContainerStrategy = ContainerStrategy;
    exports.ContentProjectionService = ContentProjectionService;
    exports.ContentSecurityStrategy = ContentSecurityStrategy;
    exports.ContentStrategy = ContentStrategy;
    exports.ContextStrategy = ContextStrategy;
    exports.CoreModule = CoreModule;
    exports.CreationAuditedEntityDto = CreationAuditedEntityDto;
    exports.CreationAuditedEntityWithUserDto = CreationAuditedEntityWithUserDto;
    exports.CrossOriginStrategy = CrossOriginStrategy;
    exports.DOM_STRATEGY = DOM_STRATEGY;
    exports.DomInsertionService = DomInsertionService;
    exports.DomStrategy = DomStrategy;
    exports.DynamicLayoutComponent = DynamicLayoutComponent;
    exports.EllipsisDirective = EllipsisDirective;
    exports.EntityDto = EntityDto;
    exports.ExtensibleAuditedEntityDto = ExtensibleAuditedEntityDto;
    exports.ExtensibleAuditedEntityWithUserDto = ExtensibleAuditedEntityWithUserDto;
    exports.ExtensibleCreationAuditedEntityDto = ExtensibleCreationAuditedEntityDto;
    exports.ExtensibleCreationAuditedEntityWithUserDto = ExtensibleCreationAuditedEntityWithUserDto;
    exports.ExtensibleEntityDto = ExtensibleEntityDto;
    exports.ExtensibleFullAuditedEntityDto = ExtensibleFullAuditedEntityDto;
    exports.ExtensibleFullAuditedEntityWithUserDto = ExtensibleFullAuditedEntityWithUserDto;
    exports.ExtensibleObject = ExtensibleObject;
    exports.FindTenantResultDto = FindTenantResultDto;
    exports.ForDirective = ForDirective;
    exports.FormSubmitDirective = FormSubmitDirective;
    exports.FullAuditedEntityDto = FullAuditedEntityDto;
    exports.FullAuditedEntityWithUserDto = FullAuditedEntityWithUserDto;
    exports.GetAppConfiguration = GetAppConfiguration;
    exports.GetProfile = GetProfile;
    exports.InitDirective = InitDirective;
    exports.InputEventDebounceDirective = InputEventDebounceDirective;
    exports.InsertIntoContainerStrategy = InsertIntoContainerStrategy;
    exports.InternalStore = InternalStore;
    exports.LIST_QUERY_DEBOUNCE_TIME = LIST_QUERY_DEBOUNCE_TIME;
    exports.LOADING_STRATEGY = LOADING_STRATEGY;
    exports.LazyLoadService = LazyLoadService;
    exports.LazyModuleFactory = LazyModuleFactory;
    exports.LimitedResultRequestDto = LimitedResultRequestDto;
    exports.ListResultDto = ListResultDto;
    exports.ListService = ListService;
    exports.LoadingStrategy = LoadingStrategy;
    exports.LocalizationModule = LocalizationModule;
    exports.LocalizationPipe = LocalizationPipe;
    exports.LocalizationService = LocalizationService;
    exports.LooseContentSecurityStrategy = LooseContentSecurityStrategy;
    exports.MockLocalizationPipe = MockLocalizationPipe;
    exports.ModifyOpenedTabCount = ModifyOpenedTabCount;
    exports.MultiTenancyService = MultiTenancyService;
    exports.NGXS_CONFIG_PLUGIN_OPTIONS = NGXS_CONFIG_PLUGIN_OPTIONS;
    exports.NoContentSecurityStrategy = NoContentSecurityStrategy;
    exports.NoContextStrategy = NoContextStrategy;
    exports.PROJECTION_STRATEGY = PROJECTION_STRATEGY;
    exports.PagedAndSortedResultRequestDto = PagedAndSortedResultRequestDto;
    exports.PagedResultDto = PagedResultDto;
    exports.PagedResultRequestDto = PagedResultRequestDto;
    exports.PermissionDirective = PermissionDirective;
    exports.PermissionGuard = PermissionGuard;
    exports.ProfileService = ProfileService;
    exports.ProfileState = exports.ɵy;
    exports.ProfileStateService = ProfileStateService;
    exports.ProjectionStrategy = ProjectionStrategy;
    exports.ReplaceableComponentsService = ReplaceableComponentsService;
    exports.ReplaceableComponentsState = exports.ɵv;
    exports.ReplaceableRouteContainerComponent = ReplaceableRouteContainerComponent;
    exports.ReplaceableTemplateDirective = ReplaceableTemplateDirective;
    exports.RestOccurError = RestOccurError;
    exports.RestService = RestService;
    exports.RootComponentProjectionStrategy = RootComponentProjectionStrategy;
    exports.RootCoreModule = RootCoreModule;
    exports.RouterOutletComponent = RouterOutletComponent;
    exports.RoutesService = RoutesService;
    exports.ScriptContentStrategy = ScriptContentStrategy;
    exports.ScriptLoadingStrategy = ScriptLoadingStrategy;
    exports.SessionState = exports.ɵbi;
    exports.SessionStateService = SessionStateService;
    exports.SetEnvironment = SetEnvironment;
    exports.SetLanguage = SetLanguage;
    exports.SetRemember = SetRemember;
    exports.SetTenant = SetTenant;
    exports.SettingTabsService = SettingTabsService;
    exports.SortPipe = SortPipe;
    exports.StartLoader = StartLoader;
    exports.StopLoader = StopLoader;
    exports.StopPropagationDirective = StopPropagationDirective;
    exports.StyleContentStrategy = StyleContentStrategy;
    exports.StyleLoadingStrategy = StyleLoadingStrategy;
    exports.SubscriptionService = SubscriptionService;
    exports.TemplateContextStrategy = TemplateContextStrategy;
    exports.TemplateProjectionStrategy = TemplateProjectionStrategy;
    exports.TestCoreModule = TestCoreModule;
    exports.TrackByService = TrackByService;
    exports.UpdateProfile = UpdateProfile;
    exports.VisibilityDirective = VisibilityDirective;
    exports.checkAccessToken = checkAccessToken;
    exports.clearOAuthStorage = clearOAuthStorage;
    exports.coreOptionsFactory = coreOptionsFactory;
    exports.createLocalizationPipeKeyGenerator = createLocalizationPipeKeyGenerator;
    exports.createLocalizer = createLocalizer;
    exports.createLocalizerWithFallback = createLocalizerWithFallback;
    exports.createMapFromList = createMapFromList;
    exports.createTokenParser = createTokenParser;
    exports.createTreeFromList = createTreeFromList;
    exports.deepMerge = deepMerge;
    exports.downloadBlob = downloadBlob;
    exports.exists = exists;
    exports.findRoute = findRoute;
    exports.fromLazyLoad = fromLazyLoad;
    exports.generateHash = generateHash;
    exports.generatePassword = generatePassword;
    exports.getInitialData = getInitialData;
    exports.getLocaleDirection = getLocaleDirection;
    exports.getRemoteEnv = getRemoteEnv;
    exports.getRoutePath = getRoutePath;
    exports.getShortDateFormat = getShortDateFormat;
    exports.getShortDateShortTimeFormat = getShortDateShortTimeFormat;
    exports.getShortTimeFormat = getShortTimeFormat;
    exports.interpolate = interpolate;
    exports.isArray = isArray;
    exports.isNullOrUndefined = isNullOrUndefined;
    exports.isNumber = isNumber;
    exports.isObject = isObject;
    exports.isObjectAndNotArray = isObjectAndNotArray;
    exports.isUndefinedOrEmptyString = isUndefinedOrEmptyString;
    exports.localeInitializer = localeInitializer;
    exports.mapEnumToOptions = mapEnumToOptions;
    exports.ngxsStoragePluginSerialize = ngxsStoragePluginSerialize;
    exports.noop = noop;
    exports.oAuthStorage = oAuthStorage;
    exports.parseTenantFromUrl = parseTenantFromUrl;
    exports.pushValueTo = pushValueTo;
    exports.registerLocale = registerLocale;
    exports.reloadRoute = reloadRoute;
    exports.storageFactory = storageFactory;
    exports.takeUntilDestroy = takeUntilDestroy;
    exports.trackBy = trackBy;
    exports.trackByDeep = trackByDeep;
    exports.uuid = uuid;
    exports.validateCreditCard = validateCreditCard;
    exports.validateMinAge = validateMinAge;
    exports.validateRange = validateRange;
    exports.validateRequired = validateRequired;
    exports.validateStringLength = validateStringLength;
    exports.validateUrl = validateUrl;
    exports.ɵ0 = ɵ0;
    exports.ɵa = oAuthStorage;
    exports.ɵb = AbstractNgModelComponent;
    exports.ɵba = RestService;
    exports.ɵbb = CORE_OPTIONS;
    exports.ɵbc = coreOptionsFactory;
    exports.ɵbe = GetProfile;
    exports.ɵbf = UpdateProfile;
    exports.ɵbg = ChangePassword;
    exports.ɵbj = SetLanguage;
    exports.ɵbk = SetTenant;
    exports.ɵbl = ModifyOpenedTabCount;
    exports.ɵbm = SetRemember;
    exports.ɵbp = GetAppConfiguration;
    exports.ɵbq = SetEnvironment;
    exports.ɵbs = LocaleId;
    exports.ɵbt = LocaleProvider;
    exports.ɵbu = NGXS_CONFIG_PLUGIN_OPTIONS;
    exports.ɵbv = ConfigPlugin;
    exports.ɵbw = ApiInterceptor;
    exports.ɵbx = OAuthConfigurationHandler;
    exports.ɵby = noop;
    exports.ɵbz = getInitialData;
    exports.ɵc = AutofocusDirective;
    exports.ɵca = localeInitializer;
    exports.ɵcb = RoutesHandler;
    exports.ɵcc = AbstractTreeService;
    exports.ɵcd = AbstractNavTreeService;
    exports.ɵce = RoutesService;
    exports.ɵd = DynamicLayoutComponent;
    exports.ɵe = SubscriptionService;
    exports.ɵf = LocalizationService;
    exports.ɵg = ReplaceableComponentsService;
    exports.ɵh = EllipsisDirective;
    exports.ɵi = ForDirective;
    exports.ɵj = FormSubmitDirective;
    exports.ɵk = InitDirective;
    exports.ɵl = InputEventDebounceDirective;
    exports.ɵm = PermissionDirective;
    exports.ɵn = ReplaceableRouteContainerComponent;
    exports.ɵo = ReplaceableTemplateDirective;
    exports.ɵp = RouterOutletComponent;
    exports.ɵq = SortPipe;
    exports.ɵr = StopPropagationDirective;
    exports.ɵs = VisibilityDirective;
    exports.ɵt = LocalizationPipe;
    exports.ɵu = MockLocalizationPipe;
    exports.ɵw = AddReplaceableComponent;
    exports.ɵz = ProfileService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abp-ng.core.umd.js.map
