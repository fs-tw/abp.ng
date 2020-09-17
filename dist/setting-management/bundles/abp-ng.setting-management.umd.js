(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@abp/ng.theme.shared'), require('@angular/core'), require('@ngxs/store'), require('rxjs'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.setting-management', ['exports', '@abp/ng.core', '@abp/ng.theme.shared', '@angular/core', '@ngxs/store', 'rxjs', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng['setting-management'] = {}), global.ng_core, global.ng_theme_shared, global.ng.core, global.store, global.rxjs, global.ng.router));
}(this, (function (exports, ng_core, ng_theme_shared, core, store, rxjs, router) { 'use strict';

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

    var SetSelectedSettingTab = /** @class */ (function () {
        function SetSelectedSettingTab(payload) {
            this.payload = payload;
        }
        return SetSelectedSettingTab;
    }());
    SetSelectedSettingTab.type = '[SettingManagement] Set Selected Tab';

    exports.ɵc = /** @class */ (function () {
        function SettingManagementState() {
        }
        SettingManagementState.getSelectedTab = function (_a) {
            var selectedTab = _a.selectedTab;
            return selectedTab;
        };
        SettingManagementState.prototype.settingManagementAction = function (_a, _b) {
            var patchState = _a.patchState;
            var payload = _b.payload;
            patchState({
                selectedTab: payload,
            });
        };
        return SettingManagementState;
    }());
    __decorate([
        store.Action(SetSelectedSettingTab),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, SetSelectedSettingTab]),
        __metadata("design:returntype", void 0)
    ], exports.ɵc.prototype, "settingManagementAction", null);
    __decorate([
        store.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], exports.ɵc, "getSelectedTab", null);
    exports.ɵc = __decorate([
        store.State({
            name: 'SettingManagementState',
            defaults: {},
        }),
        core.Injectable()
    ], exports.ɵc);

    exports.SettingManagementComponent = /** @class */ (function () {
        function SettingManagementComponent(store, settingTabs) {
            this.store = store;
            this.settingTabs = settingTabs;
            this.subscription = new rxjs.Subscription();
            this.settings = [];
            this.trackByFn = function (_, item) { return item.name; };
        }
        Object.defineProperty(SettingManagementComponent.prototype, "selected", {
            get: function () {
                var value = this.store.selectSnapshot(exports.ɵc.getSelectedTab);
                return (value === null || value === void 0 ? void 0 : value.component) ? value : this.settings[0] || {};
            },
            set: function (value) {
                this.store.dispatch(new SetSelectedSettingTab(value));
            },
            enumerable: true,
            configurable: true
        });
        SettingManagementComponent.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        SettingManagementComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscription.add(this.settingTabs.visible$.subscribe(function (settings) {
                _this.settings = settings;
                if (!_this.selected)
                    _this.selected = _this.settings[0];
            }));
        };
        return SettingManagementComponent;
    }());
    exports.SettingManagementComponent = __decorate([
        core.Component({
            selector: 'abp-setting-management',
            template: "<div class=\"row entry-row\">\r\n  <div class=\"col-auto\">\r\n    <h1 class=\"content-header-title\">{{ 'AbpSettingManagement::Settings' | abpLocalization }}</h1>\r\n  </div>\r\n  <div id=\"breadcrumb\" class=\"col-lg-auto pl-lg-0\">\r\n    <abp-breadcrumb></abp-breadcrumb>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"text-lg-right pt-2\" id=\"AbpContentToolbar\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"SettingManagementWrapper\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-3\">\r\n          <ul class=\"nav flex-column nav-pills\" id=\"nav-tab\" role=\"tablist\">\r\n            <li\r\n              *abpFor=\"let setting of settings; trackBy: trackByFn\"\r\n              (click)=\"selected = setting\"\r\n              class=\"nav-item pointer\"\r\n              [abpPermission]=\"setting.requiredPolicy\"\r\n            >\r\n              <a\r\n                class=\"nav-link\"\r\n                [id]=\"setting.name + '-tab'\"\r\n                role=\"tab\"\r\n                [class.active]=\"setting.name === selected.name\"\r\n                >{{ setting.name | abpLocalization }}</a\r\n              >\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-12 col-md-9\">\r\n          <div *ngIf=\"settings.length\" class=\"tab-content\">\r\n            <div class=\"tab-pane fade show active\" [id]=\"selected.name + '-tab'\" role=\"tabpanel\">\r\n              <ng-container *ngComponentOutlet=\"selected.component\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
        }),
        __metadata("design:paramtypes", [store.Store, ng_core.SettingTabsService])
    ], exports.SettingManagementComponent);

    var ɵ0 = {
        requiredPolicy: 'AbpAccount.SettingManagement',
        replaceableComponent: {
            key: "SettingManagement.SettingManagementComponent" /* SettingManagement */,
            defaultComponent: exports.SettingManagementComponent,
        },
    };
    var routes = [
        {
            path: '',
            component: ng_core.DynamicLayoutComponent,
            canActivate: [ng_core.AuthGuard],
            children: [
                {
                    path: '',
                    component: ng_core.ReplaceableRouteContainerComponent,
                    data: ɵ0,
                },
            ],
        },
    ];
    exports.ɵa = /** @class */ (function () {
        function SettingManagementRoutingModule() {
        }
        return SettingManagementRoutingModule;
    }());
    exports.ɵa = __decorate([
        core.NgModule({
            imports: [router.RouterModule.forChild(routes)],
            exports: [router.RouterModule],
        })
    ], exports.ɵa);

    var SettingManagementModule_1;
    exports.SettingManagementModule = SettingManagementModule_1 = /** @class */ (function () {
        function SettingManagementModule() {
        }
        SettingManagementModule.forChild = function () {
            return {
                ngModule: SettingManagementModule_1,
                providers: [],
            };
        };
        SettingManagementModule.forLazy = function () {
            return new ng_core.LazyModuleFactory(SettingManagementModule_1.forChild());
        };
        return SettingManagementModule;
    }());
    exports.SettingManagementModule = SettingManagementModule_1 = __decorate([
        core.NgModule({
            declarations: [exports.SettingManagementComponent],
            exports: [exports.SettingManagementComponent],
            imports: [
                exports.ɵa,
                ng_core.CoreModule,
                ng_theme_shared.ThemeSharedModule,
                store.NgxsModule.forFeature([exports.ɵc]),
            ],
        })
    ], exports.SettingManagementModule);

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ɵd = SetSelectedSettingTab;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abp-ng.setting-management.umd.js.map
