(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fs/account'), require('@abp/ng.core'), require('@angular/core'), require('@fs/ng-alain/basic'), require('@abp/ng.account'), require('@abp/ng.theme.shared'), require('@angular/forms'), require('@ngxs/store'), require('angular-oauth2-oidc'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('@fs/account/ng-alain', ['exports', '@fs/account', '@abp/ng.core', '@angular/core', '@fs/ng-alain/basic', '@abp/ng.account', '@abp/ng.theme.shared', '@angular/forms', '@ngxs/store', 'angular-oauth2-oidc', '@angular/animations'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs.account = global.fs.account || {}, global.fs.account['ng-alain'] = {}), global.fs.account, global.ng_core, global.ng.core, global.basic, global.ng_account, global.ng_theme_shared, global.ng.forms, global.store, global.angularOauth2Oidc, global.ng.animations));
}(this, (function (exports, account, ng_core, core, basic, ng_account, ng_theme_shared, forms, store, angularOauth2Oidc, animations) { 'use strict';

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
     * Generated from: lib/components/login/login.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserLoginComponent = /** @class */ (function (_super) {
        __extends(UserLoginComponent, _super);
        function UserLoginComponent(_fb, _oauthService, _store, _toasterService, _authService) {
            return _super.call(this, _fb, _oauthService, _store, _toasterService, _authService) || this;
        }
        UserLoginComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-alain-login',
                        template: "<ng-alain-auth-wrapper [mainContentRef]=\"mainContentRef\">\r\n  <ng-template #mainContentRef>\r\n    <form nz-form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" role=\"form\">\r\n      <nz-tabset [nzAnimated]=\"false\" class=\"tabs\">\r\n        <nz-tab [nzTitle]=\"'AbpAccount::Login' | abpLocalization\">\r\n          <nz-form-item>\r\n            <nz-form-control [nzErrorTip]=\"'Please enter mobile number!' | abpLocalization\">\r\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"user\">\r\n                <input nz-input formControlName=\"username\" placeholder=\"{{'AbpAccount::UserNameOrEmailAddress' | abpLocalization}}\" />\r\n              </nz-input-group>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control [nzErrorTip]=\"'Please enter password!' | abpLocalization\">\r\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"lock\">\r\n                <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"{{ 'AbpAccount::Password' | abpLocalization }}\" />\r\n              </nz-input-group>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </nz-tab>\r\n      </nz-tabset>\r\n      <nz-form-item>\r\n        <nz-col [nzSpan]=\"12\">\r\n          <label nz-checkbox formControlName=\"remember\">{{ 'AbpAccount::RememberMe' | abpLocalization }}</label>\r\n        </nz-col>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <button nz-button type=\"submit\" nzType=\"primary\" nzSize=\"large\" [nzLoading]=\"inProgress\" nzBlock>\r\n          {{ 'AbpAccount::Login' | abpLocalization }}\r\n        </button>\r\n      </nz-form-item>\r\n    </form>\r\n    <div class=\"other\">\r\n      <a class=\"register\" routerLink=\"/account/register\">{{ 'AbpAccount::Register' | abpLocalization }}</a>\r\n    </div>\r\n  </ng-template>\r\n</ng-alain-auth-wrapper>\r\n\r\n",
                        styles: [":host{display:block;width:368px;margin:0 auto}:host ::ng-deep .ant-tabs .ant-tabs-bar{margin-bottom:24px;text-align:center;border-bottom:0}:host ::ng-deep .ant-tabs-tab{font-size:16px;line-height:24px}:host ::ng-deep .ant-input-affix-wrapper .ant-input:not(:first-child){padding-left:34px}:host ::ng-deep .icon{margin-left:16px;color:rgba(0,0,0,.2);font-size:24px;vertical-align:middle;cursor:pointer;transition:color .3s}:host ::ng-deep .icon:hover{color:#1890ff}:host ::ng-deep .other{margin-top:24px;line-height:22px;text-align:left}:host ::ng-deep .other nz-tooltip{vertical-align:middle}:host ::ng-deep .other .register{float:right}"]
                    }] }
        ];
        /** @nocollapse */
        UserLoginComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: angularOauth2Oidc.OAuthService },
            { type: store.Store },
            { type: ng_theme_shared.ToasterService },
            { type: ng_core.AuthService }
        ]; };
        return UserLoginComponent;
    }(ng_account.LoginComponent));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/register/register.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserRegisterComponent = /** @class */ (function (_super) {
        __extends(UserRegisterComponent, _super);
        function UserRegisterComponent(_fb, _accountService, _oauthService, _store, _toasterService, _authService) {
            var _this = _super.call(this, _fb, _accountService, _oauthService, _store, _toasterService, _authService) || this;
            _this._fb = _fb;
            _this._accountService = _accountService;
            _this._oauthService = _oauthService;
            _this._store = _store;
            _this._toasterService = _toasterService;
            _this._authService = _authService;
            return _this;
        }
        UserRegisterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'fs-register',
                        template: "<ng-alain-auth-wrapper [mainContentRef]=\"mainContentRef\">\r\n  <ng-template #mainContentRef>\r\n    <h3>{{ 'AbpAccount::Register' | abpLocalization }}</h3>\r\n    <form nz-form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\">\r\n            <input nz-input formControlName=\"username\" placeholder=\"{{ 'AbpAccount::UserName' | abpLocalization }}\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\">\r\n            <input nz-input formControlName=\"email\" placeholder=\"{{ 'AbpAccount::EmailAddress' | abpLocalization }}\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\">\r\n            <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"{{ 'AbpAccount::Password' | abpLocalization }}\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <button nz-button nzType=\"primary\" nzSize=\"large\" type=\"submit\" [nzLoading]=\"inProgress\" class=\"submit\">\r\n          {{ 'AbpAccount::Register' | abpLocalization }}\r\n        </button>\r\n        <a class=\"login\" routerLink=\"/account/login\">{{ 'AbpAccount::Login' | abpLocalization }}</a>\r\n      </nz-form-item>\r\n    </form>\r\n  </ng-template>\r\n</ng-alain-auth-wrapper>\r\n\r\n",
                        styles: [":host{display:block;width:368px;margin:0 auto}:host ::ng-deep h3{margin-bottom:20px;font-size:16px}:host ::ng-deep .submit{width:50%}:host ::ng-deep .login{float:right;line-height:40px}::ng-deep .register-password-cdk .error,::ng-deep .register-password-cdk .success,::ng-deep .register-password-cdk .warning{transition:color .3s}::ng-deep .register-password-cdk .success{color:#52c41a}::ng-deep .register-password-cdk .warning{color:#faad14}::ng-deep .register-password-cdk .error{color:#f5222d}::ng-deep .register-password-cdk .progress-pass>.progress .ant-progress-bg{background-color:#faad14}"]
                    }] }
        ];
        /** @nocollapse */
        UserRegisterComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: ng_account.AccountService },
            { type: angularOauth2Oidc.OAuthService },
            { type: store.Store },
            { type: ng_theme_shared.ToasterService },
            { type: ng_core.AuthService }
        ]; };
        return UserRegisterComponent;
    }(ng_account.RegisterComponent));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        UserRegisterComponent.prototype._fb;
        /**
         * @type {?}
         * @private
         */
        UserRegisterComponent.prototype._accountService;
        /**
         * @type {?}
         * @private
         */
        UserRegisterComponent.prototype._oauthService;
        /**
         * @type {?}
         * @private
         */
        UserRegisterComponent.prototype._store;
        /**
         * @type {?}
         * @private
         */
        UserRegisterComponent.prototype._toasterService;
        /**
         * @type {?}
         * @private
         */
        UserRegisterComponent.prototype._authService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/manage-profile/manage-profile.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ManageProfileComponent = /** @class */ (function () {
        function ManageProfileComponent() {
            this.selectedTab = 0;
        }
        ManageProfileComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-alain-manage-profile',
                        template: "<div class=\"row entry-row\">\r\n  <div class=\"col-auto\"></div>\r\n  <div id=\"breadcrumb\" class=\"col-md-auto pl-md-0\"></div>\r\n  <div class=\"col\"></div>\r\n</div>\r\n<div class=\"main\">\r\n  <div class=\"menu\">\r\n    <ul nz-menu nzMode=\"inline\">\r\n      <li nz-menu-item [nzSelected]=\"selectedTab === 0\" (click)=\"selectedTab = 0\">\r\n        {{\r\n            'AbpUi::ChangePassword' | abpLocalization\r\n        }}\r\n      </li>\r\n      <li nz-menu-item [nzSelected]=\"selectedTab === 1\" (click)=\"selectedTab = 1\">\r\n        {{\r\n            'AbpAccount::PersonalSettings' | abpLocalization\r\n        }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"title\">{{ 'AbpAccount::ChangePassword' | abpLocalization }}</div>\r\n    <ng-alain-change-password-form *ngIf=\"selectedTab === 0\"></ng-alain-change-password-form>\r\n    <ng-alain-personal-settings-form *ngIf=\"selectedTab === 1\"></ng-alain-personal-settings-form>\r\n  </div>\r\n\r\n</div>\r\n",
                        animations: [animations.trigger('fadeIn', [animations.transition(':enter', animations.useAnimation(ng_theme_shared.fadeIn))])],
                        styles: [":host{display:block;padding-top:24px}.main{display:flex;width:100%;padding-top:16px;padding-bottom:16px;overflow:auto;background-color:#fff}.menu{width:224px;border-right:1px solid #e8e8e8}.menu ::ng-deep .ant-menu-inline{border:none}.menu ::ng-deep .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{font-weight:700}.content{flex:1;padding:8px 40px}.content .title{margin-bottom:12px;color:rgba(0,0,0,.85);font-weight:500;font-size:20px;line-height:28px}.content ::ng-deep .ant-list-split .ant-list-item:last-child{border-bottom:1px solid #e8e8e8}.content ::ng-deep .ant-list-item{padding-top:14px;padding-bottom:14px}@media screen and (max-width:767px){.main{flex-direction:column}.main .menu{width:100%;border:none}.main .content{padding:40px}}"]
                    }] }
        ];
        return ManageProfileComponent;
    }());
    if (false) {
        /** @type {?} */
        ManageProfileComponent.prototype.selectedTab;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/personal-settings/personal-settings.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PersonalSettingsComponent = /** @class */ (function (_super) {
        __extends(PersonalSettingsComponent, _super);
        function PersonalSettingsComponent(_fb, _store, _toasterService) {
            var _this = _super.call(this, _fb, _store, _toasterService) || this;
            _this._fb = _fb;
            _this._store = _store;
            _this._toasterService = _toasterService;
            return _this;
        }
        PersonalSettingsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-alain-personal-settings-form',
                        template: "<form novalidate *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"username\">{{ 'AbpIdentity::DisplayName:UserName' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"userName\" id=\"username\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"name\" id=\"name\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"surname\">{{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"surname\" id=\"surname\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"email-address\">{{ 'AbpIdentity::DisplayName:Email' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"email\" id=\"email-address\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"phone-number\">{{ 'AbpIdentity::DisplayName:PhoneNumber' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"phoneNumber\" id=\"phone-number\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <button nz-button nzType=\"primary\">\r\n    {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}\r\n  </button>\r\n</form>\r\n\r\n\r\n",
                        styles: ["nz-form-item{margin-bottom:0}"]
                    }] }
        ];
        /** @nocollapse */
        PersonalSettingsComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: store.Store },
            { type: ng_theme_shared.ToasterService }
        ]; };
        return PersonalSettingsComponent;
    }(ng_account.PersonalSettingsComponent));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        PersonalSettingsComponent.prototype._fb;
        /**
         * @type {?}
         * @private
         */
        PersonalSettingsComponent.prototype._store;
        /**
         * @type {?}
         * @private
         */
        PersonalSettingsComponent.prototype._toasterService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/change-password/change-password.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChangePasswordComponent = /** @class */ (function (_super) {
        __extends(ChangePasswordComponent, _super);
        function ChangePasswordComponent(_fb, _store, _toasterService) {
            var _this = _super.call(this, _fb, _store, _toasterService) || this;
            _this._fb = _fb;
            _this._store = _store;
            _this._toasterService = _toasterService;
            return _this;
        }
        ChangePasswordComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-alain-change-password-form',
                        template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [mapErrorsFn]=\"mapErrorsFn\">\r\n  <nz-form-item>\r\n    <!--<nz-form-label nzRequired nzFor=\"current-password\">{{ 'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization }}</nz-form-label>-->\r\n    <nz-form-control>\r\n      <input nz-input type=\"password\" formControlName=\"password\" id=\"current-password\" placeholder=\"{{'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization}}\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <!--<nz-form-label nzRequired nzFor=\"new-password\">{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}</nz-form-label>-->\r\n    <nz-form-control>\r\n      <input nz-input type=\"password\" formControlName=\"newPassword\" id=\"new-password\" placeholder=\"{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <!--<nz-form-label nzRequired nzFor=\"confirm-new-password\">{{ 'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization }}</nz-form-label>-->\r\n    <nz-form-control>\r\n      <input nz-input type=\"password\" formControlName=\"repeatNewPassword\" id=\"confirm-new-password\" placeholder=\"{{ 'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization }}\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <button nz-button nzType=\"primary\">\r\n    {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}\r\n  </button>\r\n\r\n</form>\r\n\r\n\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ChangePasswordComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder },
            { type: store.Store },
            { type: ng_theme_shared.ToasterService }
        ]; };
        return ChangePasswordComponent;
    }(ng_account.ChangePasswordComponent));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ChangePasswordComponent.prototype._fb;
        /**
         * @type {?}
         * @private
         */
        ChangePasswordComponent.prototype._store;
        /**
         * @type {?}
         * @private
         */
        ChangePasswordComponent.prototype._toasterService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/auth-wrapper/auth-wrapper.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthWrapperComponent = /** @class */ (function () {
        function AuthWrapperComponent() {
        }
        AuthWrapperComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-alain-auth-wrapper',
                        template: "<ng-alain-tenant-box [mainContentRef]=\"mainContentRef\">\r\n\r\n</ng-alain-tenant-box>\r\n\r\n<ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>"
                    }] }
        ];
        AuthWrapperComponent.propDecorators = {
            mainContentRef: [{ type: core.Input }],
            cancelContentRef: [{ type: core.Input }]
        };
        return AuthWrapperComponent;
    }());
    if (false) {
        /** @type {?} */
        AuthWrapperComponent.prototype.mainContentRef;
        /** @type {?} */
        AuthWrapperComponent.prototype.cancelContentRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/tenant-box/tenant-box.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TenantBoxComponent = /** @class */ (function (_super) {
        __extends(TenantBoxComponent, _super);
        function TenantBoxComponent(_store, _toasterService, _accountService) {
            var _this = _super.call(this, _store, _toasterService, _accountService) || this;
            _this._store = _store;
            _this._toasterService = _toasterService;
            _this._accountService = _accountService;
            return _this;
        }
        TenantBoxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-alain-tenant-box',
                        template: "<nz-card\r\n  *ngIf=\"(currentTenant$ | async) || {} as currentTenant\"\r\n  nzTitle=\"{{'AbpUiMultiTenancy::Tenant' | abpLocalization}} ({{ currentTenant.name || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }}) \"\r\n  [nzExtra]=\"extraTemplate\">\r\n  <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n</nz-card>\r\n<ng-template #extraTemplate>\r\n  <a id=\"AbpTenantSwitchLink\" href=\"javascript:void(0);\" class=\"btn btn-sm mt-3 btn-outline-primary\"\r\n    (click)=\"onSwitch()\">{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a>\r\n</ng-template>\r\n\r\n<nz-modal [nzStyle]=\"{ top: '20px' }\" [(nzVisible)]=\"isModalVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\"\r\n  [nzFooter]=\"modalFooter\" (nzOnCancel)=\"isModalVisible=false\">\r\n  <ng-template #modalTitle>\r\n    Switch Tenan\r\n  </ng-template>\r\n\r\n  <ng-template #modalContent>\r\n    <!-- <ng-template #loaderRef>\r\n      <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n    </ng-template> -->\r\n\r\n    <form nz-form (ngSubmit)=\"save()\">\r\n\r\n\r\n      <nz-form-item>\r\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}\r\n        </nz-form-label>\r\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\"\r\n          nzExtra=\"{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}\">\r\n          <input nz-input [(ngModel)]=\"name\" id=\"name\" name=\"tenant\" />\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #modalFooter>\r\n    <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"save()\">\r\n      {{\r\n      'AbpTenantManagement::Save' | abpLocalization\r\n        }}\r\n    </button>\r\n  </ng-template>\r\n</nz-modal>"
                    }] }
        ];
        /** @nocollapse */
        TenantBoxComponent.ctorParameters = function () { return [
            { type: store.Store },
            { type: ng_theme_shared.ToasterService },
            { type: ng_account.AccountService }
        ]; };
        TenantBoxComponent.propDecorators = {
            mainContentRef: [{ type: core.Input }]
        };
        return TenantBoxComponent;
    }(ng_account.TenantBoxComponent));
    if (false) {
        /** @type {?} */
        TenantBoxComponent.prototype.mainContentRef;
        /**
         * @type {?}
         * @private
         */
        TenantBoxComponent.prototype._store;
        /**
         * @type {?}
         * @private
         */
        TenantBoxComponent.prototype._toasterService;
        /**
         * @type {?}
         * @private
         */
        TenantBoxComponent.prototype._accountService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/account-ng-alain.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AccountNgAlainModule = /** @class */ (function () {
        function AccountNgAlainModule(store) {
            this.store = store;
            store.dispatch(new ng_core.PatchRouteByName('AbpAccount::Menu:Account', { layout: "account" /* account */ }));
            store.dispatch(new ng_core.PatchRouteByName('AbpAccount::ManageYourProfile', { layout: "application" /* application */ }));
            store.dispatch(new ng_core.AddReplaceableComponent({ component: UserLoginComponent, key: 'Account.LoginComponent' }));
            store.dispatch(new ng_core.AddReplaceableComponent({ component: UserRegisterComponent, key: 'Account.RegisterComponent' }));
            store.dispatch(new ng_core.AddReplaceableComponent({ component: ManageProfileComponent, key: 'Account.ManageProfileComponent' }));
        }
        AccountNgAlainModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            AuthWrapperComponent,
                            TenantBoxComponent,
                            UserLoginComponent,
                            UserRegisterComponent,
                            ManageProfileComponent,
                            PersonalSettingsComponent,
                            ChangePasswordComponent
                        ],
                        entryComponents: [
                            UserLoginComponent,
                            UserRegisterComponent,
                            ManageProfileComponent
                        ],
                        imports: [
                            ng_core.CoreModule,
                            basic.NgAlainBasicModule,
                            account.AccountModule
                        ]
                    },] }
        ];
        /** @nocollapse */
        AccountNgAlainModule.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        return AccountNgAlainModule;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AccountNgAlainModule.prototype.store;
    }

    exports.AccountNgAlainModule = AccountNgAlainModule;
    exports.ɵa = AuthWrapperComponent;
    exports.ɵb = TenantBoxComponent;
    exports.ɵc = UserLoginComponent;
    exports.ɵd = UserRegisterComponent;
    exports.ɵe = ManageProfileComponent;
    exports.ɵf = PersonalSettingsComponent;
    exports.ɵg = ChangePasswordComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-account-ng-alain.umd.js.map
