(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@abp/ng.theme.shared'), require('@angular/core'), require('@ng-bootstrap/ng-bootstrap'), require('@ngx-validate/core'), require('@angular/router'), require('@angular/forms'), require('@ngxs/store'), require('angular-oauth2-oidc'), require('rxjs'), require('rxjs/operators'), require('snq'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.account', ['exports', '@abp/ng.core', '@abp/ng.theme.shared', '@angular/core', '@ng-bootstrap/ng-bootstrap', '@ngx-validate/core', '@angular/router', '@angular/forms', '@ngxs/store', 'angular-oauth2-oidc', 'rxjs', 'rxjs/operators', 'snq', '@angular/animations'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng.account = {}), global.i1, global.ng_theme_shared, global.ng.core, global.ngBootstrap, global.core, global.ng.router, global.ng.forms, global.store, global.angularOauth2Oidc, global.rxjs, global.rxjs.operators, global.snq, global.ng.animations));
}(this, (function (exports, i1, ng_theme_shared, i0, ngBootstrap, core, router, forms, store, angularOauth2Oidc, rxjs, operators, snq, animations) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var snq__default = /*#__PURE__*/_interopDefaultLegacy(snq);

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

    var maxLength = forms.Validators.maxLength, minLength = forms.Validators.minLength, required = forms.Validators.required;
    exports.ɵb = /** @class */ (function () {
        function LoginComponent(fb, oauthService, store, toasterService, authService) {
            this.fb = fb;
            this.oauthService = oauthService;
            this.store = store;
            this.toasterService = toasterService;
            this.authService = authService;
            this.isSelfRegistrationEnabled = true;
            this.authWrapperKey = "Account.AuthWrapperComponent" /* AuthWrapper */;
        }
        LoginComponent.prototype.ngOnInit = function () {
            this.isSelfRegistrationEnabled =
                (this.store.selectSnapshot(i1.ConfigState.getSetting('Abp.Account.IsSelfRegistrationEnabled')) || '').toLowerCase() !== 'false';
            this.form = this.fb.group({
                username: ['', [required, maxLength(255)]],
                password: ['', [required, maxLength(128)]],
                remember: [false],
            });
        };
        LoginComponent.prototype.onSubmit = function () {
            var _this = this;
            if (this.form.invalid)
                return;
            this.inProgress = true;
            this.authService
                .login(this.form.get('username').value, this.form.get('password').value)
                .pipe(operators.catchError(function (err) {
                _this.toasterService.error(snq__default['default'](function () { return err.error.error_description; }) ||
                    snq__default['default'](function () { return err.error.error.message; }, 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
                return rxjs.throwError(err);
            }), operators.finalize(function () { return (_this.inProgress = false); }))
                .subscribe(function () {
                _this.store.dispatch(new i1.SetRemember(_this.form.get('remember').value));
            });
        };
        return LoginComponent;
    }());
    exports.ɵb = __decorate([
        i0.Component({
            selector: 'abp-login',
            template: "<abp-auth-wrapper\r\n  *abpReplaceableTemplate=\"{\r\n    componentKey: authWrapperKey,\r\n    inputs: {\r\n      mainContentRef: { value: mainContentRef },\r\n      cancelContentRef: { value: cancelContentRef }\r\n    }\r\n  }\"\r\n  [mainContentRef]=\"mainContentRef\"\r\n  [cancelContentRef]=\"cancelContentRef\"\r\n>\r\n</abp-auth-wrapper>\r\n<ng-template #mainContentRef>\r\n  <h4>{{ 'AbpAccount::Login' | abpLocalization }}</h4>\r\n  <strong *ngIf=\"isSelfRegistrationEnabled\">\r\n    {{ 'AbpAccount::AreYouANewUser' | abpLocalization }}\r\n    <a class=\"text-decoration-none\" routerLink=\"/account/register\">{{\r\n      'AbpAccount::Register' | abpLocalization\r\n    }}</a>\r\n  </strong>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" validateOnSubmit class=\"mt-4\">\r\n    <div class=\"form-group\">\r\n      <label for=\"login-input-user-name-or-email-address\">{{\r\n        'AbpAccount::UserNameOrEmailAddress' | abpLocalization\r\n      }}</label>\r\n      <input\r\n        class=\"form-control\"\r\n        type=\"text\"\r\n        id=\"login-input-user-name-or-email-address\"\r\n        formControlName=\"username\"\r\n        autocomplete=\"username\"\r\n        autofocus\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"login-input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label>\r\n      <input\r\n        class=\"form-control\"\r\n        type=\"password\"\r\n        id=\"login-input-password\"\r\n        formControlName=\"password\"\r\n        autocomplete=\"current-password\"\r\n      />\r\n    </div>\r\n    <div class=\"form-check\" validationTarget validationStyle>\r\n      <label class=\"form-check-label\" for=\"login-input-remember-me\">\r\n        <input\r\n          class=\"form-check-input\"\r\n          type=\"checkbox\"\r\n          id=\"login-input-remember-me\"\r\n          formControlName=\"remember\"\r\n        />\r\n        {{ 'AbpAccount::RememberMe' | abpLocalization }}\r\n      </label>\r\n    </div>\r\n    <abp-button\r\n      [loading]=\"inProgress\"\r\n      buttonType=\"submit\"\r\n      name=\"Action\"\r\n      buttonClass=\"btn-block btn-lg mt-3 btn btn-primary\"\r\n    >\r\n      {{ 'AbpAccount::Login' | abpLocalization }}\r\n    </abp-button>\r\n  </form>\r\n</ng-template>\r\n<ng-template #cancelContentRef>\r\n  <div class=\"card-footer text-center border-0\">\r\n    <a routerLink=\"/\">\r\n      <button type=\"button\" name=\"Action\" value=\"Cancel\" class=\"px-2 py-0 btn btn-link\">\r\n        {{ 'AbpAccount::Cancel' | abpLocalization }}\r\n      </button>\r\n    </a>\r\n  </div>\r\n</ng-template>\r\n"
        }),
        __metadata("design:paramtypes", [forms.FormBuilder,
            angularOauth2Oidc.OAuthService,
            store.Store,
            ng_theme_shared.ToasterService,
            i1.AuthService])
    ], exports.ɵb);

    exports.ɵg = /** @class */ (function () {
        function ManageProfileComponent(store) {
            this.store = store;
            this.selectedTab = 0;
            this.changePasswordKey = "Account.ChangePasswordComponent" /* ChangePassword */;
            this.personalSettingsKey = "Account.PersonalSettingsComponent" /* PersonalSettings */;
        }
        ManageProfileComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.store.dispatch(new i1.GetProfile()).subscribe(function () {
                _this.isProfileLoaded = true;
                if (_this.store.selectSnapshot(i1.ProfileState.getProfile).isExternal) {
                    _this.hideChangePasswordTab = true;
                    _this.selectedTab = 1;
                }
            });
        };
        return ManageProfileComponent;
    }());
    exports.ɵg = __decorate([
        i0.Component({
            selector: 'abp-manage-profile',
            template: "<div id=\"AbpContentToolbar\"></div>\r\n\r\n<div class=\"card border-0 shadow-sm min-h-400\" [abpLoading]=\"!isProfileLoaded\">\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-md-3\">\r\n        <ul class=\"nav flex-column nav-pills\" id=\"nav-tab\" role=\"tablist\">\r\n          <li\r\n            *ngIf=\"!hideChangePasswordTab && isProfileLoaded\"\r\n            class=\"nav-item\"\r\n            (click)=\"selectedTab = 0\"\r\n          >\r\n            <a\r\n              class=\"nav-link\"\r\n              [ngClass]=\"{ active: selectedTab === 0 }\"\r\n              role=\"tab\"\r\n              href=\"javascript:void(0)\"\r\n              >{{ 'AbpUi::ChangePassword' | abpLocalization }}</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item mb-2\" (click)=\"selectedTab = 1\">\r\n            <a\r\n              class=\"nav-link\"\r\n              [ngClass]=\"{ active: selectedTab === 1 }\"\r\n              role=\"tab\"\r\n              href=\"javascript:void(0)\"\r\n              >{{ 'AbpAccount::PersonalSettings' | abpLocalization }}</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div *ngIf=\"isProfileLoaded\" class=\"col-12 col-md-9\">\r\n        <div class=\"tab-content\" *ngIf=\"selectedTab === 0\" [@fadeIn]>\r\n          <div class=\"tab-pane active\" role=\"tabpanel\">\r\n            <h4>\r\n              {{ 'AbpIdentity::ChangePassword' | abpLocalization }}\r\n              <hr />\r\n            </h4>\r\n            <abp-change-password-form\r\n              *abpReplaceableTemplate=\"{ componentKey: changePasswordKey }\"\r\n            ></abp-change-password-form>\r\n          </div>\r\n        </div>\r\n        <div class=\"tab-content\" *ngIf=\"selectedTab === 1\" [@fadeIn]>\r\n          <div class=\"tab-pane active\" role=\"tabpanel\">\r\n            <h4>\r\n              {{ 'AbpIdentity::PersonalSettings' | abpLocalization }}\r\n              <hr />\r\n            </h4>\r\n            <abp-personal-settings-form\r\n              *abpReplaceableTemplate=\"{ componentKey: personalSettingsKey }\"\r\n            ></abp-personal-settings-form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
            animations: [animations.trigger('fadeIn', [animations.transition(':enter', animations.useAnimation(ng_theme_shared.fadeIn))])],
            styles: ["\n      .min-h-400 {\n        min-height: 400px;\n      }\n    "]
        }),
        __metadata("design:paramtypes", [store.Store])
    ], exports.ɵg);

    exports.ɵd = /** @class */ (function () {
        function AccountService(rest) {
            this.rest = rest;
            this.apiName = 'AbpAccount';
        }
        AccountService.prototype.findTenant = function (tenantName) {
            var request = {
                method: 'GET',
                url: "/api/abp/multi-tenancy/tenants/by-name/" + tenantName,
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        AccountService.prototype.register = function (body) {
            var request = {
                method: 'POST',
                url: '/api/account/register',
                body: body,
            };
            return this.rest.request(request, {
                skipHandleError: true,
                apiName: this.apiName,
            });
        };
        return AccountService;
    }());
    exports.ɵd.ɵprov = i0.ɵɵdefineInjectable({ factory: function AccountService_Factory() { return new exports.ɵd(i0.ɵɵinject(i1.RestService)); }, token: exports.ɵd, providedIn: "root" });
    exports.ɵd = __decorate([
        i0.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [i1.RestService])
    ], exports.ɵd);

    var maxLength$1 = forms.Validators.maxLength, required$1 = forms.Validators.required, email = forms.Validators.email;
    exports.ɵc = /** @class */ (function () {
        function RegisterComponent(fb, accountService, oauthService, store, toasterService, authService) {
            this.fb = fb;
            this.accountService = accountService;
            this.oauthService = oauthService;
            this.store = store;
            this.toasterService = toasterService;
            this.authService = authService;
            this.isSelfRegistrationEnabled = true;
            this.authWrapperKey = "Account.AuthWrapperComponent" /* AuthWrapper */;
        }
        RegisterComponent.prototype.ngOnInit = function () {
            this.isSelfRegistrationEnabled =
                (this.store.selectSnapshot(i1.ConfigState.getSetting('Abp.Account.IsSelfRegistrationEnabled')) || '').toLowerCase() !== 'false';
            if (!this.isSelfRegistrationEnabled) {
                this.toasterService.warn({
                    key: 'AbpAccount::SelfRegistrationDisabledMessage',
                    defaultValue: 'Self registration is disabled.',
                }, null, { life: 10000 });
                return;
            }
            this.form = this.fb.group({
                username: ['', [required$1, maxLength$1(255)]],
                password: ['', __spread([required$1], ng_theme_shared.getPasswordValidators(this.store))],
                email: ['', [required$1, email]],
            });
        };
        RegisterComponent.prototype.onSubmit = function () {
            var _this = this;
            if (this.form.invalid)
                return;
            this.inProgress = true;
            var newUser = {
                userName: this.form.get('username').value,
                password: this.form.get('password').value,
                emailAddress: this.form.get('email').value,
                appName: 'Angular',
            };
            this.accountService
                .register(newUser)
                .pipe(operators.switchMap(function () { return _this.authService.login(newUser.userName, newUser.password); }), operators.catchError(function (err) {
                _this.toasterService.error(snq__default['default'](function () { return err.error.error_description; }) ||
                    snq__default['default'](function () { return err.error.error.message; }, 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
                return rxjs.throwError(err);
            }), operators.finalize(function () { return (_this.inProgress = false); }))
                .subscribe();
        };
        return RegisterComponent;
    }());
    exports.ɵc = __decorate([
        i0.Component({
            selector: 'abp-register',
            template: "<abp-auth-wrapper\r\n  *abpReplaceableTemplate=\"{\r\n    componentKey: authWrapperKey,\r\n    inputs: {\r\n      mainContentRef: { value: mainContentRef }\r\n    }\r\n  }\"\r\n  [mainContentRef]=\"mainContentRef\"\r\n>\r\n</abp-auth-wrapper>\r\n<ng-template #mainContentRef>\r\n  <h4>{{ 'AbpAccount::Register' | abpLocalization }}</h4>\r\n  <strong>\r\n    {{ 'AbpAccount::AlreadyRegistered' | abpLocalization }}\r\n    <a class=\"text-decoration-none\" routerLink=\"/account/login\">{{\r\n      'AbpAccount::Login' | abpLocalization\r\n    }}</a>\r\n  </strong>\r\n  <form\r\n    *ngIf=\"isSelfRegistrationEnabled\"\r\n    [formGroup]=\"form\"\r\n    (ngSubmit)=\"onSubmit()\"\r\n    validateOnSubmit\r\n    class=\"mt-4\"\r\n  >\r\n    <div class=\"form-group\">\r\n      <label for=\"input-user-name\">{{ 'AbpAccount::UserName' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input\r\n        autofocus\r\n        type=\"text\"\r\n        id=\"input-user-name\"\r\n        class=\"form-control\"\r\n        formControlName=\"username\"\r\n        autocomplete=\"username\"\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"input-email-address\">{{ 'AbpAccount::EmailAddress' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input type=\"email\" id=\"input-email-address\" class=\"form-control\" formControlName=\"email\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input\r\n        type=\"password\"\r\n        id=\"input-password\"\r\n        class=\"form-control\"\r\n        formControlName=\"password\"\r\n        autocomplete=\"current-password\"\r\n      />\r\n    </div>\r\n    <abp-button\r\n      [loading]=\"inProgress\"\r\n      buttonType=\"submit\"\r\n      name=\"Action\"\r\n      buttonClass=\"btn-block btn-lg mt-3 btn btn-primary\"\r\n    >\r\n      {{ 'AbpAccount::Register' | abpLocalization }}\r\n    </abp-button>\r\n  </form>\r\n</ng-template>\r\n"
        }),
        __metadata("design:paramtypes", [forms.FormBuilder,
            exports.ɵd,
            angularOauth2Oidc.OAuthService,
            store.Store,
            ng_theme_shared.ToasterService,
            i1.AuthService])
    ], exports.ɵc);

    exports.ɵj = /** @class */ (function () {
        function AuthenticationFlowGuard(authService) {
            this.authService = authService;
        }
        AuthenticationFlowGuard.prototype.canActivate = function () {
            if (this.authService.isInternalAuth)
                return true;
            this.authService.initLogin();
            return false;
        };
        return AuthenticationFlowGuard;
    }());
    exports.ɵj = __decorate([
        i0.Injectable(),
        __metadata("design:paramtypes", [i1.AuthService])
    ], exports.ɵj);

    var ɵ0 = {
        replaceableComponent: {
            key: "Account.LoginComponent" /* Login */,
            defaultComponent: exports.ɵb,
        },
    }, ɵ1 = {
        replaceableComponent: {
            key: "Account.RegisterComponent" /* Register */,
            defaultComponent: exports.ɵc,
        },
    }, ɵ2 = {
        replaceableComponent: {
            key: "Account.ManageProfileComponent" /* ManageProfile */,
            defaultComponent: exports.ɵg,
        },
    };
    var routes = [
        { path: '', pathMatch: 'full', redirectTo: 'login' },
        {
            path: '',
            component: i1.DynamicLayoutComponent,
            children: [
                {
                    path: 'login',
                    component: i1.ReplaceableRouteContainerComponent,
                    canActivate: [exports.ɵj],
                    data: ɵ0,
                },
                {
                    path: 'register',
                    component: i1.ReplaceableRouteContainerComponent,
                    canActivate: [exports.ɵj],
                    data: ɵ1,
                },
                {
                    path: 'manage-profile',
                    component: i1.ReplaceableRouteContainerComponent,
                    canActivate: [i1.AuthGuard],
                    data: ɵ2,
                },
            ],
        },
    ];
    exports.ɵi = /** @class */ (function () {
        function AccountRoutingModule() {
        }
        return AccountRoutingModule;
    }());
    exports.ɵi = __decorate([
        i0.NgModule({
            imports: [router.RouterModule.forChild(routes)],
            exports: [router.RouterModule],
        })
    ], exports.ɵi);

    exports.ɵa = /** @class */ (function () {
        function AuthWrapperComponent(multiTenancy, store, subscription) {
            this.multiTenancy = multiTenancy;
            this.store = store;
            this.subscription = subscription;
            this.enableLocalLogin = true;
            this.tenantBoxKey = "Account.TenantBoxComponent" /* TenantBox */;
        }
        AuthWrapperComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscription.addOne(this.store.select(i1.ConfigState.getSetting('Abp.Account.EnableLocalLogin')), function (value) {
                if (value) {
                    _this.enableLocalLogin = value.toLowerCase() !== 'false';
                }
            });
        };
        return AuthWrapperComponent;
    }());
    __decorate([
        i0.Input(),
        __metadata("design:type", i0.TemplateRef)
    ], exports.ɵa.prototype, "mainContentRef", void 0);
    __decorate([
        i0.Input(),
        __metadata("design:type", i0.TemplateRef)
    ], exports.ɵa.prototype, "cancelContentRef", void 0);
    __decorate([
        store.Select(i1.ConfigState.getDeep('multiTenancy.isEnabled')),
        __metadata("design:type", rxjs.Observable)
    ], exports.ɵa.prototype, "isMultiTenancyEnabled$", void 0);
    exports.ɵa = __decorate([
        i0.Component({
            selector: 'abp-auth-wrapper',
            template: "<div class=\"row\">\r\n  <div class=\"mx-auto col col-md-5\">\r\n    <ng-container *ngIf=\"(isMultiTenancyEnabled$ | async) && multiTenancy.isTenantBoxVisible\">\r\n      <abp-tenant-box *abpReplaceableTemplate=\"{ componentKey: tenantBoxKey }\"></abp-tenant-box>\r\n    </ng-container>\r\n\r\n    <div class=\"abp-account-container\">\r\n      <div\r\n        *ngIf=\"enableLocalLogin; else disableLocalLoginTemplate\"\r\n        class=\"card mt-3 shadow-sm rounded\"\r\n      >\r\n        <div class=\"card-body p-5\">\r\n          <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n        </div>\r\n        <ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #disableLocalLoginTemplate>\r\n  <div class=\"alert alert-warning\">\r\n    <strong>{{ 'AbpAccount::InvalidLoginRequest' | abpLocalization }}</strong>\r\n    {{ 'AbpAccount::ThereAreNoLoginSchemesConfiguredForThisClient' | abpLocalization }}\r\n  </div>\r\n</ng-template>\r\n",
            exportAs: 'abpAuthWrapper',
            providers: [i1.SubscriptionService]
        }),
        __metadata("design:paramtypes", [i1.MultiTenancyService,
            store.Store,
            i1.SubscriptionService])
    ], exports.ɵa);

    var required$2 = forms.Validators.required;
    var PASSWORD_FIELDS = ['newPassword', 'repeatNewPassword'];
    exports.ɵf = /** @class */ (function () {
        function ChangePasswordComponent(fb, store, toasterService) {
            this.fb = fb;
            this.store = store;
            this.toasterService = toasterService;
            this.mapErrorsFn = function (errors, groupErrors, control) {
                if (PASSWORD_FIELDS.indexOf(String(control.name)) < 0)
                    return errors;
                return errors.concat(groupErrors.filter(function (_a) {
                    var key = _a.key;
                    return key === 'passwordMismatch';
                }));
            };
        }
        ChangePasswordComponent.prototype.ngOnInit = function () {
            this.hideCurrentPassword = !this.store.selectSnapshot(i1.ProfileState.getProfile).hasPassword;
            var passwordValidations = ng_theme_shared.getPasswordValidators(this.store);
            this.form = this.fb.group({
                password: ['', required$2],
                newPassword: [
                    '',
                    {
                        validators: __spread([required$2], passwordValidations),
                    },
                ],
                repeatNewPassword: [
                    '',
                    {
                        validators: __spread([required$2], passwordValidations),
                    },
                ],
            }, {
                validators: [core.comparePasswords(PASSWORD_FIELDS)],
            });
            if (this.hideCurrentPassword)
                this.form.removeControl('password');
        };
        ChangePasswordComponent.prototype.onSubmit = function () {
            var _this = this;
            if (this.form.invalid)
                return;
            this.inProgress = true;
            this.store
                .dispatch(new i1.ChangePassword(Object.assign(Object.assign({}, (!this.hideCurrentPassword && { currentPassword: this.form.get('password').value })), { newPassword: this.form.get('newPassword').value })))
                .pipe(operators.finalize(function () { return (_this.inProgress = false); }))
                .subscribe({
                next: function () {
                    _this.form.reset();
                    _this.toasterService.success('AbpAccount::PasswordChangedMessage', '', {
                        life: 5000,
                    });
                    if (_this.hideCurrentPassword) {
                        _this.hideCurrentPassword = false;
                        _this.form.addControl('password', new forms.FormControl('', [required$2]));
                    }
                },
                error: function (err) {
                    _this.toasterService.error(snq__default['default'](function () { return err.error.error.message; }, 'AbpAccount::DefaultErrorMessage'));
                },
            });
        };
        return ChangePasswordComponent;
    }());
    exports.ɵf = __decorate([
        i0.Component({
            selector: 'abp-change-password-form',
            template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [mapErrorsFn]=\"mapErrorsFn\" validateOnSubmit>\r\n  <div *ngIf=\"!hideCurrentPassword\" class=\"form-group\">\r\n    <label for=\"current-password\">{{\r\n      'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization\r\n    }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"current-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"password\"\r\n      autofocus\r\n      autocomplete=\"current-password\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"new-password\">{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"new-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"newPassword\"\r\n      autocomplete=\"new-password\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"confirm-new-password\">{{\r\n      'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization\r\n    }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"confirm-new-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"repeatNewPassword\"\r\n      autocomplete=\"new-password\"\r\n    />\r\n  </div>\r\n  <abp-button\r\n    iconClass=\"fa fa-check\"\r\n    buttonClass=\"btn btn-primary color-white\"\r\n    buttonType=\"submit\"\r\n    [loading]=\"inProgress\"\r\n    [disabled]=\"form?.invalid\"\r\n    >{{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r\n  >\r\n</form>\r\n",
            exportAs: 'abpChangePasswordForm'
        }),
        __metadata("design:paramtypes", [forms.FormBuilder,
            store.Store,
            ng_theme_shared.ToasterService])
    ], exports.ɵf);

    var maxLength$2 = forms.Validators.maxLength, required$3 = forms.Validators.required, email$1 = forms.Validators.email;
    exports.ɵh = /** @class */ (function () {
        function PersonalSettingsComponent(fb, store, toasterService) {
            this.fb = fb;
            this.store = store;
            this.toasterService = toasterService;
        }
        PersonalSettingsComponent.prototype.ngOnInit = function () {
            this.buildForm();
        };
        PersonalSettingsComponent.prototype.buildForm = function () {
            var profile = this.store.selectSnapshot(i1.ProfileState.getProfile);
            this.form = this.fb.group({
                userName: [profile.userName, [required$3, maxLength$2(256)]],
                email: [profile.email, [required$3, email$1, maxLength$2(256)]],
                name: [profile.name || '', [maxLength$2(64)]],
                surname: [profile.surname || '', [maxLength$2(64)]],
                phoneNumber: [profile.phoneNumber || '', [maxLength$2(16)]],
            });
        };
        PersonalSettingsComponent.prototype.submit = function () {
            var _this = this;
            if (this.form.invalid)
                return;
            this.inProgress = true;
            this.store
                .dispatch(new i1.UpdateProfile(this.form.value))
                .pipe(operators.finalize(function () { return (_this.inProgress = false); }))
                .subscribe(function () {
                _this.toasterService.success('AbpAccount::PersonalSettingsSaved', 'Success', { life: 5000 });
            });
        };
        return PersonalSettingsComponent;
    }());
    exports.ɵh = __decorate([
        i0.Component({
            selector: 'abp-personal-settings-form',
            template: "<form validateOnSubmit *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">{{ 'AbpIdentity::DisplayName:UserName' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"text\"\r\n      id=\"username\"\r\n      class=\"form-control\"\r\n      formControlName=\"userName\"\r\n      autofocus\r\n      (keydown.space)=\"$event.preventDefault()\"\r\n    />\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label\r\n        ><input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"surname\">{{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</label\r\n        ><input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email-address\">{{ 'AbpIdentity::DisplayName:Email' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input type=\"text\" id=\"email-address\" class=\"form-control\" formControlName=\"email\" />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"phone-number\">{{ 'AbpIdentity::DisplayName:PhoneNumber' | abpLocalization }}</label\r\n    ><input type=\"text\" id=\"phone-number\" class=\"form-control\" formControlName=\"phoneNumber\" />\r\n  </div>\r\n  <abp-button\r\n    buttonType=\"submit\"\r\n    iconClass=\"fa fa-check\"\r\n    buttonClass=\"btn btn-primary color-white\"\r\n    [loading]=\"inProgress\"\r\n    [disabled]=\"form?.invalid\"\r\n  >\r\n    {{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r\n  >\r\n</form>\r\n",
            exportAs: 'abpPersonalSettingsForm'
        }),
        __metadata("design:paramtypes", [forms.FormBuilder,
            store.Store,
            ng_theme_shared.ToasterService])
    ], exports.ɵh);

    exports.ɵe = /** @class */ (function () {
        function TenantBoxComponent(store, toasterService, accountService) {
            this.store = store;
            this.toasterService = toasterService;
            this.accountService = accountService;
        }
        TenantBoxComponent.prototype.onSwitch = function () {
            var tenant = this.store.selectSnapshot(i1.SessionState.getTenant);
            this.name = (tenant || {}).name;
            this.isModalVisible = true;
        };
        TenantBoxComponent.prototype.save = function () {
            var _this = this;
            if (!this.name) {
                this.setTenant(null);
                this.isModalVisible = false;
                return;
            }
            this.modalBusy = true;
            this.accountService
                .findTenant(this.name)
                .pipe(operators.finalize(function () { return (_this.modalBusy = false); }))
                .subscribe(function (_a) {
                var success = _a.success, id = _a.tenantId, name = _a.name;
                if (!success) {
                    _this.showError();
                    return;
                }
                _this.setTenant({ id: id, name: name });
                _this.isModalVisible = false;
            });
        };
        TenantBoxComponent.prototype.setTenant = function (tenant) {
            return this.store.dispatch([new i1.SetTenant(tenant), new i1.GetAppConfiguration()]);
        };
        TenantBoxComponent.prototype.showError = function () {
            this.toasterService.error('AbpUiMultiTenancy::GivenTenantIsNotAvailable', 'AbpUi::Error', {
                messageLocalizationParams: [this.name],
            });
        };
        return TenantBoxComponent;
    }());
    __decorate([
        store.Select(i1.SessionState.getTenant),
        __metadata("design:type", rxjs.Observable)
    ], exports.ɵe.prototype, "currentTenant$", void 0);
    exports.ɵe = __decorate([
        i0.Component({
            selector: 'abp-tenant-box',
            template: "<ng-container *ngIf=\"(currentTenant$ | async) || {} as currentTenant\">\r\n  <div class=\"card shadow-sm rounded mb-3\">\r\n    <div class=\"card-body px-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <span style=\"font-size: 0.8em;\" class=\"text-uppercase text-muted\">{{\r\n            'AbpUiMultiTenancy::Tenant' | abpLocalization\r\n          }}</span\r\n          ><br />\r\n          <h6 class=\"m-0 d-inline-block\">\r\n            <i>{{ currentTenant.name || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }}</i>\r\n          </h6>\r\n        </div>\r\n        <div class=\"col-auto\">\r\n          <a\r\n            id=\"AbpTenantSwitchLink\"\r\n            href=\"javascript:void(0);\"\r\n            class=\"btn btn-sm mt-3 btn-outline-primary\"\r\n            (click)=\"onSwitch()\"\r\n            >{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n    <ng-template #abpHeader>\r\n      <h5>Switch Tenant</h5>\r\n    </ng-template>\r\n    <ng-template #abpBody>\r\n      <form (ngSubmit)=\"save()\">\r\n        <div class=\"mt-2\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}</label>\r\n            <input\r\n              [(ngModel)]=\"name\"\r\n              type=\"text\"\r\n              id=\"name\"\r\n              name=\"tenant\"\r\n              class=\"form-control\"\r\n              autofocus\r\n            />\r\n          </div>\r\n          <p>{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}</p>\r\n        </div>\r\n      </form>\r\n    </ng-template>\r\n    <ng-template #abpFooter>\r\n      <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n        {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button\r\n        type=\"abp-button\"\r\n        iconClass=\"fa fa-check\"\r\n        (click)=\"save()\"\r\n        [disabled]=\"currentTenant?.name === name\"\r\n      >\r\n        <span>{{ 'AbpTenantManagement::Save' | abpLocalization }}</span>\r\n      </abp-button>\r\n    </ng-template>\r\n  </abp-modal>\r\n</ng-container>\r\n"
        }),
        __metadata("design:paramtypes", [store.Store,
            ng_theme_shared.ToasterService,
            exports.ɵd])
    ], exports.ɵe);

    var ACCOUNT_OPTIONS = new i0.InjectionToken('ACCOUNT_OPTIONS');

    function accountOptionsFactory(options) {
        return Object.assign({ redirectUrl: '/' }, options);
    }

    var AccountModule_1;
    exports.AccountModule = AccountModule_1 = /** @class */ (function () {
        function AccountModule() {
        }
        AccountModule.forChild = function (options) {
            return {
                ngModule: AccountModule_1,
                providers: [
                    exports.ɵj,
                    { provide: ACCOUNT_OPTIONS, useValue: options },
                    {
                        provide: 'ACCOUNT_OPTIONS',
                        useFactory: accountOptionsFactory,
                        deps: [ACCOUNT_OPTIONS],
                    },
                ],
            };
        };
        AccountModule.forLazy = function (options) {
            return new i1.LazyModuleFactory(AccountModule_1.forChild(options));
        };
        return AccountModule;
    }());
    exports.AccountModule = AccountModule_1 = __decorate([
        i0.NgModule({
            declarations: [
                exports.ɵa,
                exports.ɵb,
                exports.ɵc,
                exports.ɵe,
                exports.ɵf,
                exports.ɵg,
                exports.ɵh,
            ],
            imports: [
                i1.CoreModule,
                exports.ɵi,
                ng_theme_shared.ThemeSharedModule,
                ngBootstrap.NgbDropdownModule,
                core.NgxValidateCoreModule,
            ],
            exports: [],
        })
    ], exports.AccountModule);

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ACCOUNT_OPTIONS = ACCOUNT_OPTIONS;
    exports.AccountService = exports.ɵd;
    exports.AuthenticationFlowGuard = exports.ɵj;
    exports.ChangePasswordComponent = exports.ɵf;
    exports.LoginComponent = exports.ɵb;
    exports.ManageProfileComponent = exports.ɵg;
    exports.PersonalSettingsComponent = exports.ɵh;
    exports.RegisterComponent = exports.ɵc;
    exports.TenantBoxComponent = exports.ɵe;
    exports.ɵl = ACCOUNT_OPTIONS;
    exports.ɵm = accountOptionsFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abp-ng.account.umd.js.map
