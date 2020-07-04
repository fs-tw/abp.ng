(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core'), require('@abp/ng.theme.shared'), require('rxjs'), require('rxjs/operators'), require('@ngxs/store'), require('@angular/router'), require('snq'), require('@ngx-validate/core'), require('@ng-bootstrap/ng-bootstrap')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.theme.basic', ['exports', '@angular/core', '@abp/ng.core', '@abp/ng.theme.shared', 'rxjs', 'rxjs/operators', '@ngxs/store', '@angular/router', 'snq', '@ngx-validate/core', '@ng-bootstrap/ng-bootstrap'], factory) :
    (global = global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng.theme = global.abp.ng.theme || {}, global.abp.ng.theme.basic = {}), global.ng.core, global.ng_core, global.ng_theme_shared, global.rxjs, global.rxjs.operators, global.store, global.ng.router, global.snq, global.core$1, global.ngBootstrap));
}(this, (function (exports, core, ng_core, ng_theme_shared, rxjs, operators, store, router, snq, core$1, ngBootstrap) { 'use strict';

    snq = snq && Object.prototype.hasOwnProperty.call(snq, 'default') ? snq['default'] : snq;

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

    exports.ɵb = /** @class */ (function () {
        function AccountLayoutComponent() {
        }
        return AccountLayoutComponent;
    }());
    // required for dynamic component
    exports.ɵb.type = "account" /* account */;
    exports.ɵb = __decorate([
        core.Component({
            selector: 'abp-layout-account',
            template: "\n    <router-outlet></router-outlet>\n    <abp-confirmation></abp-confirmation>\n    <abp-toast-container right=\"30px\" bottom=\"30px\"></abp-toast-container>\n  "
        })
    ], exports.ɵb);

    exports.ɵa = /** @class */ (function () {
        function ApplicationLayoutComponent() {
            this.isCollapsed = true;
            this.logoComponentKey = "Theme.LogoComponent" /* Logo */;
            this.routesComponentKey = "Theme.RoutesComponent" /* Routes */;
            this.navItemsComponentKey = "Theme.NavItemsComponent" /* NavItems */;
        }
        ApplicationLayoutComponent.prototype.checkWindowWidth = function () {
            var _this = this;
            setTimeout(function () {
                if (window.innerWidth < 992) {
                    if (_this.smallScreen === false) {
                        _this.isCollapsed = false;
                        setTimeout(function () {
                            _this.isCollapsed = true;
                        }, 100);
                    }
                    _this.smallScreen = true;
                }
                else {
                    _this.smallScreen = false;
                }
            }, 0);
        };
        ApplicationLayoutComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.checkWindowWidth();
            rxjs.fromEvent(window, 'resize')
                .pipe(ng_core.takeUntilDestroy(this), operators.debounceTime(150))
                .subscribe(function () {
                _this.checkWindowWidth();
            });
        };
        ApplicationLayoutComponent.prototype.ngOnDestroy = function () { };
        return ApplicationLayoutComponent;
    }());
    // required for dynamic component
    exports.ɵa.type = "application" /* application */;
    exports.ɵa = __decorate([
        core.Component({
            selector: 'abp-layout-application',
            template: "<nav\r\n  class=\"navbar navbar-expand-lg navbar-dark bg-dark shadow-sm flex-column flex-md-row mb-4\"\r\n  id=\"main-navbar\"\r\n  style=\"min-height: 4rem;\"\r\n>\r\n  <div class=\"container\">\r\n    <abp-logo *abpReplaceableTemplate=\"{ componentKey: logoComponentKey }\"></abp-logo>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      [attr.aria-expanded]=\"!isCollapsed\"\r\n      (click)=\"isCollapsed = !isCollapsed\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse\" [class.overflow-hidden]=\"smallScreen\" id=\"main-navbar-collapse\">\r\n      <ng-container *ngTemplateOutlet=\"!smallScreen ? navigations : null\"></ng-container>\r\n\r\n      <div *ngIf=\"smallScreen\" [@collapseWithMargin]=\"isCollapsed ? 'collapsed' : 'expanded'\">\r\n        <ng-container *ngTemplateOutlet=\"navigations\"></ng-container>\r\n      </div>\r\n\r\n      <ng-template #navigations>\r\n        <abp-routes\r\n          *abpReplaceableTemplate=\"{\r\n            componentKey: routesComponentKey,\r\n            inputs: {\r\n              smallScreen: { value: smallScreen }\r\n            }\r\n          }\"\r\n          class=\"mx-auto\"\r\n          [smallScreen]=\"smallScreen\"\r\n        ></abp-routes>\r\n\r\n        <abp-nav-items\r\n          *abpReplaceableTemplate=\"{\r\n            componentKey: navItemsComponentKey\r\n          }\"\r\n        ></abp-nav-items>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<!-- [@slideFromBottom]=\"outlet.isActivated && outlet.activatedRoute?.routeConfig?.path\" TODO: throws ExpressionChangedAfterItHasBeenCheck when animation is active. It should be fixed -->\r\n<div class=\"container\">\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</div>\r\n",
            animations: [ng_theme_shared.slideFromBottom, ng_theme_shared.collapseWithMargin]
        })
    ], exports.ɵa);

    exports.ɵc = /** @class */ (function () {
        function EmptyLayoutComponent() {
        }
        return EmptyLayoutComponent;
    }());
    exports.ɵc.type = "empty" /* empty */;
    exports.ɵc = __decorate([
        core.Component({
            selector: 'abp-layout-empty',
            template: "\n    <router-outlet></router-outlet>\n    <abp-confirmation></abp-confirmation>\n    <abp-toast-container right=\"30px\" bottom=\"30px\"></abp-toast-container>\n  "
        })
    ], exports.ɵc);

    exports.ɵe = /** @class */ (function () {
        function LogoComponent(store) {
            this.store = store;
        }
        Object.defineProperty(LogoComponent.prototype, "appInfo", {
            get: function () {
                return this.store.selectSnapshot(ng_core.ConfigState.getApplicationInfo);
            },
            enumerable: true,
            configurable: true
        });
        return LogoComponent;
    }());
    exports.ɵe = __decorate([
        core.Component({
            selector: 'abp-logo',
            template: "\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      <img\n        *ngIf=\"appInfo.logoUrl; else appName\"\n        [src]=\"appInfo.logoUrl\"\n        [alt]=\"appInfo.name\"\n        width=\"100%\"\n        height=\"auto\"\n      />\n    </a>\n\n    <ng-template #appName>\n      {{ appInfo.name }}\n    </ng-template>\n  "
        }),
        __metadata("design:paramtypes", [store.Store])
    ], exports.ɵe);

    exports.ɵh = /** @class */ (function () {
        function CurrentUserComponent(authService, router) {
            this.authService = authService;
            this.router = router;
        }
        Object.defineProperty(CurrentUserComponent.prototype, "smallScreen", {
            get: function () {
                return window.innerWidth < 992;
            },
            enumerable: true,
            configurable: true
        });
        CurrentUserComponent.prototype.ngOnInit = function () { };
        CurrentUserComponent.prototype.logout = function () {
            var _this = this;
            this.authService.logout().subscribe(function () {
                _this.router.navigate(['/'], { state: { redirectUrl: _this.router.url } });
            });
        };
        return CurrentUserComponent;
    }());
    __decorate([
        store.Select(ng_core.ConfigState.getOne('currentUser')),
        __metadata("design:type", rxjs.Observable)
    ], exports.ɵh.prototype, "currentUser$", void 0);
    exports.ɵh = __decorate([
        core.Component({
            selector: 'abp-current-user',
            // tslint:disable-next-line: component-max-inline-declarations
            template: "\n    <ng-template #loginBtn>\n      <a role=\"button\" class=\"nav-link\" routerLink=\"/account/login\">{{\n        'AbpAccount::Login' | abpLocalization\n      }}</a>\n    </ng-template>\n    <div\n      *ngIf=\"(currentUser$ | async)?.isAuthenticated; else loginBtn\"\n      ngbDropdown\n      class=\"dropdown\"\n      #currentUserDropdown=\"ngbDropdown\"\n      display=\"static\"\n    >\n      <a\n        ngbDropdownToggle\n        class=\"nav-link\"\n        href=\"javascript:void(0)\"\n        role=\"button\"\n        id=\"dropdownMenuLink\"\n        data-toggle=\"dropdown\"\n        aria-haspopup=\"true\"\n        aria-expanded=\"false\"\n      >\n        {{ (currentUser$ | async)?.userName }}\n      </a>\n      <div\n        class=\"dropdown-menu dropdown-menu-right border-0 shadow-sm\"\n        aria-labelledby=\"dropdownMenuLink\"\n        [class.d-block]=\"smallScreen && currentUserDropdown.isOpen()\"\n      >\n        <a class=\"dropdown-item\" routerLink=\"/account/manage-profile\"\n          ><i class=\"fa fa-cog mr-1\"></i>{{ 'AbpAccount::ManageYourProfile' | abpLocalization }}</a\n        >\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\"\n          ><i class=\"fa fa-power-off mr-1\"></i>{{ 'AbpUi::Logout' | abpLocalization }}</a\n        >\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [ng_core.AuthService, router.Router])
    ], exports.ɵh);

    exports.ɵi = /** @class */ (function () {
        function LanguagesComponent(store) {
            this.store = store;
        }
        Object.defineProperty(LanguagesComponent.prototype, "smallScreen", {
            get: function () {
                return window.innerWidth < 992;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LanguagesComponent.prototype, "defaultLanguage$", {
            get: function () {
                var _this = this;
                return this.languages$.pipe(operators.map(function (languages) { return snq(function () { return languages.find(function (lang) { return lang.cultureName === _this.selectedLangCulture; }).displayName; }); }, ''));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LanguagesComponent.prototype, "dropdownLanguages$", {
            get: function () {
                var _this = this;
                return this.languages$.pipe(operators.map(function (languages) { return snq(function () { return languages.filter(function (lang) { return lang.cultureName !== _this.selectedLangCulture; }); }); }, []));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LanguagesComponent.prototype, "selectedLangCulture", {
            get: function () {
                return this.store.selectSnapshot(ng_core.SessionState.getLanguage);
            },
            enumerable: true,
            configurable: true
        });
        LanguagesComponent.prototype.ngOnInit = function () { };
        LanguagesComponent.prototype.onChangeLang = function (cultureName) {
            this.store.dispatch(new ng_core.SetLanguage(cultureName));
        };
        return LanguagesComponent;
    }());
    __decorate([
        store.Select(ng_core.ConfigState.getDeep('localization.languages')),
        __metadata("design:type", rxjs.Observable)
    ], exports.ɵi.prototype, "languages$", void 0);
    exports.ɵi = __decorate([
        core.Component({
            selector: 'abp-languages',
            // tslint:disable-next-line: component-max-inline-declarations
            template: "\n    <div\n      *ngIf=\"(dropdownLanguages$ | async)?.length > 0\"\n      class=\"dropdown\"\n      ngbDropdown\n      #languageDropdown=\"ngbDropdown\"\n      display=\"static\"\n    >\n      <a\n        ngbDropdownToggle\n        class=\"nav-link\"\n        href=\"javascript:void(0)\"\n        role=\"button\"\n        id=\"dropdownMenuLink\"\n        data-toggle=\"dropdown\"\n        aria-haspopup=\"true\"\n        aria-expanded=\"false\"\n      >\n        {{ defaultLanguage$ | async }}\n      </a>\n      <div\n        class=\"dropdown-menu dropdown-menu-right border-0 shadow-sm\"\n        aria-labelledby=\"dropdownMenuLink\"\n        [class.d-block]=\"smallScreen && languageDropdown.isOpen()\"\n      >\n        <a\n          *ngFor=\"let lang of dropdownLanguages$ | async\"\n          href=\"javascript:void(0)\"\n          class=\"dropdown-item\"\n          (click)=\"onChangeLang(lang.cultureName)\"\n          >{{ lang?.displayName }}</a\n        >\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [store.Store])
    ], exports.ɵi);

    exports.ɵf = /** @class */ (function () {
        function NavItemsComponent(navItems) {
            this.navItems = navItems;
            this.trackByFn = function (_, element) { return element.id; };
        }
        return NavItemsComponent;
    }());
    exports.ɵf = __decorate([
        core.Component({
            selector: 'abp-nav-items',
            template: "<ul class=\"navbar-nav\">\r\n  <li\r\n    class=\"nav-item d-flex align-items-center\"\r\n    *ngFor=\"let item of navItems.items$ | async; trackBy: trackByFn\"\r\n    [abpPermission]=\"item.requiredPolicy\"\r\n  >\r\n    <ng-container\r\n      *ngIf=\"item.component; else htmlTemplate\"\r\n      [ngComponentOutlet]=\"item.component\"\r\n    ></ng-container>\r\n\r\n    <ng-template #htmlTemplate>\r\n      <div [innerHTML]=\"item.html\" (click)=\"item.action ? item.action() : null\"></div>\r\n    </ng-template>\r\n  </li>\r\n</ul>\r\n"
        }),
        __metadata("design:paramtypes", [ng_theme_shared.NavItemsService])
    ], exports.ɵf);

    exports.ɵg = /** @class */ (function () {
        function RoutesComponent(routes) {
            this.routes = routes;
            this.trackByFn = function (_, item) { return item.name; };
        }
        RoutesComponent.prototype.isDropdown = function (node) {
            return !node.isLeaf || this.routes.hasChildren(node.name);
        };
        return RoutesComponent;
    }());
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean)
    ], exports.ɵg.prototype, "smallScreen", void 0);
    exports.ɵg = __decorate([
        core.Component({
            selector: 'abp-routes',
            template: "<ul class=\"navbar-nav\">\r\n  <ng-container\r\n    *ngFor=\"let route of routes.visible$ | async; trackBy: trackByFn\"\r\n    [ngTemplateOutlet]=\"isDropdown(route) ? dropdownLink : defaultLink\"\r\n    [ngTemplateOutletContext]=\"{ $implicit: route }\"\r\n  >\r\n  </ng-container>\r\n\r\n  <ng-template #defaultLink let-route>\r\n    <li class=\"nav-item\" *abpPermission=\"route.requiredPolicy\">\r\n      <a class=\"nav-link\" [routerLink]=\"[route.path]\"\r\n        ><i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i>\r\n        {{ route.name | abpLocalization }}</a\r\n      >\r\n    </li>\r\n  </ng-template>\r\n\r\n  <ng-template #dropdownLink let-route>\r\n    <li\r\n      #navbarRootDropdown\r\n      class=\"nav-item dropdown\"\r\n      display=\"static\"\r\n      *ngIf=\"route.children?.length\"\r\n      [abpPermission]=\"route.requiredPolicy\"\r\n      (click)=\"\r\n        navbarRootDropdown.expand\r\n          ? (navbarRootDropdown.expand = false)\r\n          : (navbarRootDropdown.expand = true)\r\n      \"\r\n    >\r\n      <a\r\n        class=\"nav-link dropdown-toggle\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n        href=\"javascript:void(0)\"\r\n      >\r\n        <i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i>\r\n        {{ route.name | abpLocalization }}\r\n      </a>\r\n      <div\r\n        #routeContainer\r\n        class=\"dropdown-menu border-0 shadow-sm\"\r\n        (click)=\"$event.preventDefault(); $event.stopPropagation()\"\r\n        [class.d-block]=\"smallScreen && navbarRootDropdown.expand\"\r\n      >\r\n        <ng-container *ngTemplateOutlet=\"forTemplate; context: { $implicit: route }\"></ng-container>\r\n      </div>\r\n    </li>\r\n  </ng-template>\r\n\r\n  <ng-template #forTemplate let-route>\r\n    <ng-container *ngFor=\"let child of route.children\">\r\n      <ng-template\r\n        [ngTemplateOutlet]=\"child.children?.length ? dropdownChild : defaultChild\"\r\n        [ngTemplateOutletContext]=\"{ $implicit: child }\"\r\n      ></ng-template>\r\n    </ng-container>\r\n  </ng-template>\r\n\r\n  <ng-template #defaultChild let-child>\r\n    <div class=\"dropdown-submenu\" *abpPermission=\"child.requiredPolicy\">\r\n      <a class=\"dropdown-item\" [routerLink]=\"[child.path]\">\r\n        <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n        {{ child.name | abpLocalization }}</a\r\n      >\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #dropdownChild let-child>\r\n    <div\r\n      class=\"dropdown-submenu\"\r\n      ngbDropdown\r\n      #dropdownSubmenu=\"ngbDropdown\"\r\n      placement=\"right-top\"\r\n      [autoClose]=\"true\"\r\n      [abpPermission]=\"child.requiredPolicy\"\r\n    >\r\n      <div ngbDropdownToggle [class.dropdown-toggle]=\"false\">\r\n        <a\r\n          abpEllipsis=\"210px\"\r\n          [abpEllipsisEnabled]=\"!smallScreen\"\r\n          role=\"button\"\r\n          class=\"btn d-block text-left dropdown-toggle\"\r\n        >\r\n          <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n          {{ child.name | abpLocalization }}\r\n        </a>\r\n      </div>\r\n      <div\r\n        #childrenContainer\r\n        class=\"dropdown-menu border-0 shadow-sm\"\r\n        [class.d-block]=\"smallScreen && dropdownSubmenu.isOpen()\"\r\n      >\r\n        <ng-container *ngTemplateOutlet=\"forTemplate; context: { $implicit: child }\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</ul>\r\n"
        }),
        __metadata("design:paramtypes", [ng_core.RoutesService])
    ], exports.ɵg);

    exports.ɵd = /** @class */ (function (_super) {
        __extends(ValidationErrorComponent, _super);
        function ValidationErrorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ValidationErrorComponent.prototype, "abpErrors", {
            get: function () {
                if (!this.errors || !this.errors.length)
                    return [];
                return this.errors.map(function (error) {
                    if (!error.message)
                        return error;
                    var index = error.message.indexOf('[');
                    if (index > -1) {
                        return Object.assign(Object.assign({}, error), { message: error.message.slice(0, index), interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(',') });
                    }
                    return error;
                });
            },
            enumerable: true,
            configurable: true
        });
        return ValidationErrorComponent;
    }(core$1.ValidationErrorComponent));
    exports.ɵd = __decorate([
        core.Component({
            selector: 'abp-validation-error',
            template: "\n    <div class=\"invalid-feedback\" *ngFor=\"let error of abpErrors; trackBy: trackByFn\">\n      {{ error.message | abpLocalization: error.interpoliteParams }}\n    </div>\n  ",
            changeDetection: core.ChangeDetectionStrategy.OnPush,
            encapsulation: core.ViewEncapsulation.None
        })
    ], exports.ɵd);

    var BASIC_THEME_NAV_ITEM_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: configureNavItems,
            deps: [ng_theme_shared.NavItemsService],
            multi: true,
        },
    ];
    function configureNavItems(navItems) {
        return function () {
            navItems.addItems([
                {
                    id: "Theme.LanguagesComponent" /* Languages */,
                    order: 100,
                    component: exports.ɵi,
                },
                {
                    id: "Theme.CurrentUserComponent" /* CurrentUser */,
                    order: 101,
                    component: exports.ɵh,
                },
            ]);
        };
    }

    var styles = "\n.content-header-title {\n    font-size: 24px;\n}\n.entry-row {\n    margin-bottom: 15px;\n}\n#main-navbar-tools a.dropdown-toggle {\n    text-decoration: none;\n    color: #fff;\n}\n.navbar .dropdown-submenu {\n    position: relative;\n}\n.navbar .dropdown-menu {\n    margin: 0;\n    padding: 0;\n}\n.navbar .dropdown-menu a {\n    font-size: .9em;\n    padding: 10px 15px;\n    display: block;\n    min-width: 210px;\n    text-align: left;\n    border-radius: 0.25rem;\n    min-height: 44px;\n}\n[dir=rtl] .navbar .dropdown-menu a {\n    text-align: right!important;\n}\n.navbar .dropdown-submenu a::after {\n    transform: rotate(-90deg);\n    position: absolute;\n    right: 16px;\n    top: 18px;\n}\n[dir=rtl] .navbar .dropdown-submenu a::after {\n    transform: rotate(90deg);\n    left: 16px;\n    right: auto;\n    top: 20px;\n}\n.navbar .dropdown-submenu .dropdown-menu {\n    top: 0;\n    left: 100%;\n}\n.card-header .btn {\n    padding: 2px 6px;\n}\n.card-header h5 {\n    margin: 0;\n}\n.container > .card {\n    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n@media screen and (min-width: 992px) {\n    .navbar .dropdown:hover > .dropdown-menu {\n        display: block;\n    }\n\n    .navbar .dropdown-submenu:hover > .dropdown-menu {\n        display: block;\n    }\n}\n.input-validation-error {\n    border-color: #dc3545;\n}\n.field-validation-error {\n    font-size: 0.8em;\n}\n.ui-table .ui-table-tbody > tr.empty-row > div.empty-row-content {\n    border: 1px solid #c8c8c8;\n  }\n.abp-loading {\n    background: rgba(0, 0, 0, 0.1);\n}\n.modal-backdrop {\nbackground-color: rgba(0, 0, 0, 0.6);\n}\n\n.confirmation .confirmation-backdrop {\n\t background: rgba(0, 0, 0, 0.7) !important;\n}\n .confirmation .confirmation-dialog {\n\t border: none;\n\t border-radius: 10px;\n\t background-color: #fff;\n\t box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.5);\n}\n .confirmation .confirmation-dialog .icon-container .icon {\n\t stroke: #fff;\n\t color: #fff;\n}\n .confirmation .confirmation-dialog .icon-container.info .icon {\n\t stroke: #2f96b4;\n\t color: #2f96b4;\n}\n .confirmation .confirmation-dialog .icon-container.success .icon {\n\t stroke: #51a351;\n\t color: #51a351;\n}\n .confirmation .confirmation-dialog .icon-container.warning .icon {\n\t stroke: #f89406;\n\t color: #f89406;\n}\n .confirmation .confirmation-dialog .icon-container.error .icon {\n\t stroke: #bd362f;\n\t color: #bd362f;\n}\n .confirmation .confirmation-dialog .content .title {\n\t color: #222;\n}\n .confirmation .confirmation-dialog .content .message {\n\t color: #777;\n}\n .confirmation .confirmation-dialog .footer {\n\t background: transparent;\n}\n .confirmation .confirmation-dialog .footer .confirmation-button {\n\t background-color: #eee;\n\t color: #777;\n}\n .confirmation .confirmation-dialog .footer .confirmation-button:hover, .confirmation .confirmation-dialog .footer .confirmation-button:focus, .confirmation .confirmation-dialog .footer .confirmation-button:active {\n\t background-color: #bbb;\n}\n .confirmation .confirmation-dialog .footer .confirmation-button--confirm {\n\t background-color: #2f96b4;\n\t color: #fff;\n}\n .confirmation .confirmation-dialog .footer .confirmation-button--confirm:hover {\n\t background-color: #2e819b;\n}\n.ui-table .pagination-wrapper {\n    background-color: #f4f4f4;\n    border: 1px solid #c8c8c8;\n}\n.bordered .datatable-body-row {\n    border-top: 1px solid #eee;\n    margin-top: -1px;\n}\n";

    var BASIC_THEME_STYLES_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: configureStyles,
            deps: [ng_core.DomInsertionService, store.Store],
            multi: true,
        },
    ];
    function configureStyles(domInsertion, store) {
        return function () {
            domInsertion.insertContent(ng_core.CONTENT_STRATEGY.AppendStyleToHead(styles));
            initLayouts(store);
        };
    }
    function initLayouts(store) {
        store.dispatch([
            new ng_core.AddReplaceableComponent({
                key: "Theme.ApplicationLayoutComponent" /* ApplicationLayout */,
                component: exports.ɵa,
            }),
            new ng_core.AddReplaceableComponent({
                key: "Theme.AccountLayoutComponent" /* AccountLayout */,
                component: exports.ɵb,
            }),
            new ng_core.AddReplaceableComponent({
                key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
                component: exports.ɵc,
            }),
        ]);
    }

    var ThemeBasicModule_1;
    var LAYOUTS = [exports.ɵa, exports.ɵb, exports.ɵc];
    exports.ThemeBasicModule = ThemeBasicModule_1 = /** @class */ (function () {
        function ThemeBasicModule() {
        }
        ThemeBasicModule.forRoot = function () {
            return {
                ngModule: ThemeBasicModule_1,
                providers: [BASIC_THEME_NAV_ITEM_PROVIDERS, BASIC_THEME_STYLES_PROVIDERS],
            };
        };
        return ThemeBasicModule;
    }());
    exports.ThemeBasicModule = ThemeBasicModule_1 = __decorate([
        core.NgModule({
            declarations: __spread(LAYOUTS, [
                exports.ɵd,
                exports.ɵe,
                exports.ɵf,
                exports.ɵg,
                exports.ɵh,
                exports.ɵi,
            ]),
            exports: __spread(LAYOUTS, [
                exports.ɵd,
                exports.ɵe,
                exports.ɵf,
                exports.ɵg,
                exports.ɵh,
                exports.ɵi,
            ]),
            imports: [
                ng_core.CoreModule,
                ng_theme_shared.ThemeSharedModule,
                ngBootstrap.NgbCollapseModule,
                ngBootstrap.NgbDropdownModule,
                core$1.NgxValidateCoreModule,
                core$1.NgxValidateCoreModule.forRoot({
                    targetSelector: '.form-group',
                    blueprints: {
                        creditCard: 'AbpValidation::ThisFieldIsNotAValidCreditCardNumber.',
                        email: 'AbpValidation::ThisFieldIsNotAValidEmailAddress.',
                        invalid: 'AbpValidation::ThisFieldIsNotValid.',
                        max: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                        maxlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
                        min: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                        minlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
                        ngbDate: 'AbpValidation::ThisFieldIsNotValid.',
                        passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
                        range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                        required: 'AbpValidation::ThisFieldIsRequired.',
                        url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
                    },
                    errorTemplate: exports.ɵd,
                }),
            ],
            entryComponents: __spread(LAYOUTS, [exports.ɵd, exports.ɵh, exports.ɵi]),
        })
    ], exports.ThemeBasicModule);

    /*
     * Public API Surface of theme-basic
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AccountLayoutComponent = exports.ɵb;
    exports.ApplicationLayoutComponent = exports.ɵa;
    exports.BASIC_THEME_NAV_ITEM_PROVIDERS = BASIC_THEME_NAV_ITEM_PROVIDERS;
    exports.BASIC_THEME_STYLES_PROVIDERS = BASIC_THEME_STYLES_PROVIDERS;
    exports.CurrentUserComponent = exports.ɵh;
    exports.EmptyLayoutComponent = exports.ɵc;
    exports.LAYOUTS = LAYOUTS;
    exports.LanguagesComponent = exports.ɵi;
    exports.LogoComponent = exports.ɵe;
    exports.NavItemsComponent = exports.ɵf;
    exports.RoutesComponent = exports.ɵg;
    exports.ValidationErrorComponent = exports.ɵd;
    exports.configureNavItems = configureNavItems;
    exports.configureStyles = configureStyles;
    exports.ɵj = BASIC_THEME_NAV_ITEM_PROVIDERS;
    exports.ɵk = configureNavItems;
    exports.ɵl = BASIC_THEME_STYLES_PROVIDERS;
    exports.ɵm = configureStyles;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abp-ng.theme.basic.umd.js.map
