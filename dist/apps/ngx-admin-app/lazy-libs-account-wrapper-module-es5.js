var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
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
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-libs-account-wrapper-module"], {
        /***/ "../../libs/account/ngx-admin/src/index.ts": 
        /*!*******************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ngx-admin/src/index.ts ***!
          \*******************************************************************************************/
        /*! exports provided: AccountNgxAdminModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _lib_account_ngx_admin_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/account-ngx-admin.module */ "../../libs/account/ngx-admin/src/lib/account-ngx-admin.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountNgxAdminModule", function () { return _lib_account_ngx_admin_module__WEBPACK_IMPORTED_MODULE_1__["AccountNgxAdminModule"]; });
            /***/ 
        }),
        /***/ "../../libs/account/ngx-admin/src/lib/account-ngx-admin-routing.module.ts": 
        /*!**************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ngx-admin/src/lib/account-ngx-admin-routing.module.ts ***!
          \**************************************************************************************************************************/
        /*! exports provided: AccountNgxAdminRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNgxAdminRoutingModule", function () { return AccountNgxAdminRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "../../libs/account/ngx-admin/src/lib/components/login/login.component.ts");
            /* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "../../libs/account/ngx-admin/src/lib/components/register/register.component.ts");
            var routes = [
                { path: '', pathMatch: 'full', redirectTo: 'login' },
                {
                    path: '',
                    component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["DynamicLayoutComponent"],
                    children: [{ path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }, { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] }]
                },
            ];
            var AccountNgxAdminRoutingModule = /** @class */ (function () {
                function AccountNgxAdminRoutingModule() {
                }
                return AccountNgxAdminRoutingModule;
            }());
            AccountNgxAdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], AccountNgxAdminRoutingModule);
            /***/ 
        }),
        /***/ "../../libs/account/ngx-admin/src/lib/account-ngx-admin.module.ts": 
        /*!******************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ngx-admin/src/lib/account-ngx-admin.module.ts ***!
          \******************************************************************************************************************/
        /*! exports provided: AccountNgxAdminModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNgxAdminModule", function () { return AccountNgxAdminModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _fs_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fs/account */ "../../libs/account/src/index.ts");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fs_ngx_admin_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fs/ngx-admin/basic */ "../../themes/ngx-admin/basic/src/index.ts");
            /* harmony import */ var _account_ngx_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-ngx-admin-routing.module */ "../../libs/account/ngx-admin/src/lib/account-ngx-admin-routing.module.ts");
            /* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "../../libs/account/ngx-admin/src/lib/components/register/register.component.ts");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "../../libs/account/ngx-admin/src/lib/components/login/login.component.ts");
            /* harmony import */ var _components_tenant_box_tenant_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tenant-box/tenant-box.component */ "../../libs/account/ngx-admin/src/lib/components/tenant-box/tenant-box.component.ts");
            var AccountNgxAdminModule = /** @class */ (function () {
                function AccountNgxAdminModule() {
                }
                return AccountNgxAdminModule;
            }());
            AccountNgxAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _components_tenant_box_tenant_box_component__WEBPACK_IMPORTED_MODULE_8__["TenantBoxComponent"]],
                    imports: [
                        _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                        _fs_ngx_admin_basic__WEBPACK_IMPORTED_MODULE_4__["NgxAdminBasicModule"],
                        _account_ngx_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountNgxAdminRoutingModule"],
                        _fs_account__WEBPACK_IMPORTED_MODULE_1__["AccountModule"]
                    ]
                })
            ], AccountNgxAdminModule);
            /***/ 
        }),
        /***/ "../../libs/account/ngx-admin/src/lib/components/login/login.component.ts": 
        /*!**************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ngx-admin/src/lib/components/login/login.component.ts ***!
          \**************************************************************************************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _abp_ng_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.account */ "../../packages/account/src/public-api.ts");
            /* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            /* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
            var LoginComponent = /** @class */ (function (_super) {
                __extends(LoginComponent, _super);
                function LoginComponent(_fb, _oauthService, _store, _toasterService, _options) {
                    return _super.call(this, _fb, _oauthService, _store, _toasterService, _options) || this;
                }
                return LoginComponent;
            }(_abp_ng_account__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]));
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
                { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"] },
                { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
                { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['ACCOUNT_OPTIONS',] }] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'ngx-admin-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ngx-admin/src/lib/components/login/login.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])('ACCOUNT_OPTIONS')),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
                    angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
                    _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"], Object])
            ], LoginComponent);
            /***/ 
        }),
        /***/ "../../libs/account/ngx-admin/src/lib/components/register/register.component.ts": 
        /*!********************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ngx-admin/src/lib/components/register/register.component.ts ***!
          \********************************************************************************************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _abp_ng_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.account */ "../../packages/account/src/public-api.ts");
            /* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            /* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
            var RegisterComponent = /** @class */ (function (_super) {
                __extends(RegisterComponent, _super);
                function RegisterComponent(_fb, _accountService, _oauthService, _store, _toasterService) {
                    var _this = _super.call(this, _fb, _accountService, _oauthService, _store, _toasterService) || this;
                    _this._fb = _fb;
                    _this._accountService = _accountService;
                    _this._oauthService = _oauthService;
                    _this._store = _store;
                    _this._toasterService = _toasterService;
                    return _this;
                }
                return RegisterComponent;
            }(_abp_ng_account__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]));
            RegisterComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _abp_ng_account__WEBPACK_IMPORTED_MODULE_3__["AccountService"] },
                { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__["OAuthService"] },
                { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
                { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'ngx-admin-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ngx-admin/src/lib/components/register/register.component.html")).default,
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
                    _abp_ng_account__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
                    angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__["OAuthService"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
                    _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]])
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "../../libs/account/ngx-admin/src/lib/components/tenant-box/tenant-box.component.ts": 
        /*!************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ngx-admin/src/lib/components/tenant-box/tenant-box.component.ts ***!
          \************************************************************************************************************************************/
        /*! exports provided: TenantBoxComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantBoxComponent", function () { return TenantBoxComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _abp_ng_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.account */ "../../packages/account/src/public-api.ts");
            /* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            var TenantBoxComponent = /** @class */ (function (_super) {
                __extends(TenantBoxComponent, _super);
                function TenantBoxComponent(_store, _toasterService, _accountService) {
                    var _this = _super.call(this, _store, _toasterService, _accountService) || this;
                    _this._store = _store;
                    _this._toasterService = _toasterService;
                    _this._accountService = _accountService;
                    return _this;
                }
                return TenantBoxComponent;
            }(_abp_ng_account__WEBPACK_IMPORTED_MODULE_1__["TenantBoxComponent"]));
            TenantBoxComponent.ctorParameters = function () { return [
                { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
                { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] },
                { type: _abp_ng_account__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }
            ]; };
            TenantBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'ngx-admin-tenant-box',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tenant-box.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ngx-admin/src/lib/components/tenant-box/tenant-box.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
                    _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"],
                    _abp_ng_account__WEBPACK_IMPORTED_MODULE_1__["AccountService"]])
            ], TenantBoxComponent);
            /***/ 
        }),
        /***/ "../../libs/account/src/index.ts": 
        /*!*********************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/src/index.ts ***!
          \*********************************************************************************/
        /*! exports provided: AccountModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _lib_account_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/account.module */ "../../libs/account/src/lib/account.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function () { return _lib_account_module__WEBPACK_IMPORTED_MODULE_1__["AccountModule"]; });
            /***/ 
        }),
        /***/ "../../libs/account/src/lib/account.module.ts": 
        /*!**********************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/src/lib/account.module.ts ***!
          \**********************************************************************************************/
        /*! exports provided: AccountModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function () { return AccountModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _abp_ng_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.account */ "../../packages/account/src/public-api.ts");
            /* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
            var AccountModule = /** @class */ (function () {
                function AccountModule() {
                }
                return AccountModule;
            }());
            AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_abp_ng_account__WEBPACK_IMPORTED_MODULE_2__["AccountModule"]],
                    exports: [_abp_ng_account__WEBPACK_IMPORTED_MODULE_2__["AccountModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_3__["NgxValidateCoreModule"]]
                })
            ], AccountModule);
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ngx-admin/src/lib/components/login/login.component.html": 
        /*!****************************************************************************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ngx-admin/src/lib/components/login/login.component.html ***!
          \****************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ngx-admin-tenant-box></ngx-admin-tenant-box>\r\n\r\n<nb-card class=\"mt-3 shadow-sm rounded bg-light\">\r\n  <nb-card-body class=\"p-5\">\r\n    <h1 id=\"title\" class=\"title\">{{ 'AbpAccount::Login' | abpLocalization }}</h1>\r\n\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" novalidate aria-labelledby=\"title\">\r\n\r\n      <div class=\"form-control-group\">\r\n        <label class=\"label\" for=\"login-input-user-name-or-email-address\">\r\n          {{\r\n          'AbpAccount::UserNameOrEmailAddress' | abpLocalization\r\n          }}\r\n        </label>\r\n        <input nbInput\r\n               fullWidth\r\n               id=\"login-input-user-name-or-email-address\"\r\n               fieldSize=\"large\"\r\n               placeholder=\"username\"\r\n               formControlName=\"username\"\r\n               autofocus>\r\n      </div>\r\n\r\n      <div class=\"form-control-group\">\r\n        <span class=\"label-with-link\">\r\n          <label class=\"label\" for=\"login-input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label>\r\n        </span>\r\n        <input nbInput\r\n               fullWidth\r\n               formControlName=\"password\"\r\n               type=\"password\"\r\n               id=\"login-input-password\"\r\n               placeholder=\"Password\"\r\n               fieldSize=\"large\">\r\n      </div>\r\n\r\n      <div class=\"form-control-group accept-group\">\r\n        <nb-checkbox formControlName=\"remember\">{{ 'AbpAccount::RememberMe' | abpLocalization }}</nb-checkbox>\r\n      </div>\r\n\r\n      <button nbButton\r\n              fullWidth\r\n              status=\"primary\"\r\n              size=\"large\"\r\n              [disabled]=\"!form.valid\">\r\n        {{ 'AbpAccount::Login' | abpLocalization }}\r\n      </button>\r\n    </form>\r\n\r\n    <!-- <section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\r\n      or enter with:\r\n      <div class=\"socials\">\r\n        <ng-container *ngFor=\"let socialLink of socialLinks\">\r\n          <a *ngIf=\"socialLink.link\"\r\n             [routerLink]=\"socialLink.link\"\r\n             [attr.target]=\"socialLink.target\"\r\n             [attr.class]=\"socialLink.icon\"\r\n             [class.with-icon]=\"socialLink.icon\">\r\n            <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\r\n            <ng-template #title>{{ socialLink.title }}</ng-template>\r\n          </a>\r\n          <a *ngIf=\"socialLink.url\"\r\n             [attr.href]=\"socialLink.url\"\r\n             [attr.target]=\"socialLink.target\"\r\n             [attr.class]=\"socialLink.icon\"\r\n             [class.with-icon]=\"socialLink.icon\">\r\n            <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\r\n            <ng-template #title>{{ socialLink.title }}</ng-template>\r\n          </a>\r\n        </ng-container>\r\n      </div>\r\n    </section> -->\r\n\r\n    <section class=\"another-action\" aria-label=\"Register\">\r\n      {{ 'AbpAccount::AreYouANewUser' | abpLocalization }} <a class=\"text-link\" routerLink=\"/account/register\">{{ 'AbpAccount::Register' | abpLocalization }}</a>\r\n    </section>\r\n  </nb-card-body>\r\n</nb-card>\r\n");
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ngx-admin/src/lib/components/register/register.component.html": 
        /*!**********************************************************************************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ngx-admin/src/lib/components/register/register.component.html ***!
          \**********************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ngx-admin-tenant-box></ngx-admin-tenant-box>\r\n<nb-card class=\"mt-3 shadow-sm rounded bg-light\">\r\n  <nb-card-body class=\"p-5\">\r\n    <h1 id=\"title\" class=\"title\">{{ 'AbpAccount::Register' | abpLocalization }}</h1>\r\n\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" novalidate aria-labelledby=\"title\">\r\n\r\n      <div class=\"form-control-group\">\r\n        <label class=\"label\" for=\"input-user-name\">\r\n          {{\r\n          'AbpAccount::UserName' | abpLocalization\r\n          }}\r\n        </label>\r\n        <input nbInput\r\n               formControlName=\"username\"\r\n               id=\"input-user-name\"\r\n               placeholder=\"username\"\r\n               autofocus\r\n               fullWidth\r\n               fieldSize=\"large\">\r\n      </div>\r\n\r\n      <div class=\"form-control-group\">\r\n        <label class=\"label\" for=\"input-email-address\">{{ 'AbpAccount::EmailAddress' | abpLocalization }}</label>\r\n        <input nbInput\r\n               type=\"email\"\r\n               formControlName=\"email\"\r\n               id=\"input-email-address\"\r\n               placeholder=\"Email address\"\r\n               fullWidth\r\n               fieldSize=\"large\">\r\n      </div>\r\n\r\n      <div class=\"form-control-group\">\r\n        <label class=\"label\" for=\"input-password\">{{ 'AbpAccount::Password' | abpLocalization }}<</label>\r\n        <input nbInput\r\n               formControlName=\"password\"\r\n               type=\"password\"\r\n               id=\"input-password\"\r\n               name=\"password\"\r\n               placeholder=\"Password\"\r\n               fullWidth\r\n               fieldSize=\"large\">\r\n      </div>\r\n\r\n      <button nbButton\r\n              fullWidth\r\n              status=\"primary\"\r\n              size=\"large\"\r\n              [disabled]=\"!form.valid\">\r\n        {{ 'AbpAccount::Register' | abpLocalization }}\r\n      </button>\r\n    </form>\r\n\r\n    <section class=\"another-action\" aria-label=\"Sign in\">\r\n      {{ 'AbpAccount::AlreadyRegistered' | abpLocalization }} <a class=\"text-link\" routerLink=\"/account/login\">{{ 'AbpAccount::Login' | abpLocalization }}</a>\r\n    </section>\r\n\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n");
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ngx-admin/src/lib/components/tenant-box/tenant-box.component.html": 
        /*!**************************************************************************************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ngx-admin/src/lib/components/tenant-box/tenant-box.component.html ***!
          \**************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nb-card class=\"shadow-sm rounded mb-3 bg-light\">\r\n  <nb-card-body class=\"px-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <span style=\"font-size: 0.8em;\" class=\"text-uppercase text-muted\">{{\r\n          'AbpUiMultiTenancy::Tenant' | abpLocalization\r\n        }}</span\r\n        ><br />\r\n        <h6 class=\"m-0 d-inline-block\">\r\n          <span>\r\n            {{ tenantName || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }}\r\n          </span>\r\n        </h6>\r\n      </div>\r\n      <div class=\"col-auto\">\r\n        <a\r\n          id=\"AbpTenantSwitchLink\"\r\n          href=\"javascript:void(0);\"\r\n          class=\"btn btn-sm mt-3 btn-outline-primary\"\r\n          (click)=\"onSwitch()\"\r\n          >{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n<abp-modal [(visible)]=\"isModalVisible\" size=\"md\">\r\n  <ng-template #abpHeader>\r\n    <h5>Switch Tenant</h5>\r\n  </ng-template>\r\n  <ng-template #abpBody>\r\n    <form (ngSubmit)=\"save()\">\r\n      <div class=\"mt-2\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}</label>\r\n          <input [(ngModel)]=\"tenant.name\" type=\"text\" id=\"name\" name=\"tenant\" class=\"form-control\" autofocus />\r\n        </div>\r\n        <p>{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}</p>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n  <ng-template #abpFooter>\r\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">\r\n      <i class=\"fa fa-check mr-1\"></i> <span>{{ 'AbpTenantManagement::Save' | abpLocalization }}</span>\r\n    </button>\r\n  </ng-template>\r\n</abp-modal>\r\n");
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/auth-wrapper/auth-wrapper.component.html": 
        /*!************************************************************************************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/auth-wrapper/auth-wrapper.component.html ***!
          \************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"mx-auto col col-md-5\">\r\n    <abp-tenant-box></abp-tenant-box>\r\n\r\n    <div class=\"abp-account-container\">\r\n      <div class=\"card mt-3 shadow-sm rounded\">\r\n        <div class=\"card-body p-5\">\r\n          <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n        </div>\r\n        <ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/change-password/change-password.component.html": 
        /*!******************************************************************************************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/change-password/change-password.component.html ***!
          \******************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [mapErrorsFn]=\"mapErrorsFn\" validateOnSubmit>\r\n  <div class=\"form-group\">\r\n    <label for=\"current-password\">{{ 'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input type=\"password\" id=\"current-password\" class=\"form-control\" formControlName=\"password\" autofocus />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"new-password\">{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}</label\r\n    ><span> * </span><input type=\"password\" id=\"new-password\" class=\"form-control\" formControlName=\"newPassword\" />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"confirm-new-password\">{{ 'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input type=\"password\" id=\"confirm-new-password\" class=\"form-control\" formControlName=\"repeatNewPassword\" />\r\n  </div>\r\n  <abp-button\r\n    iconClass=\"fa fa-check\"\r\n    buttonClass=\"btn btn-primary color-white\"\r\n    buttonType=\"submit\"\r\n    [loading]=\"inProgress\"\r\n    [disabled]=\"form?.invalid\"\r\n    >{{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r\n  >\r\n</form>\r\n");
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/login/login.component.html": 
        /*!**********************************************************************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/login/login.component.html ***!
          \**********************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<abp-auth-wrapper [mainContentRef]=\"mainContentRef\" [cancelContentRef]=\"cancelContentRef\">\r\n  <ng-template #mainContentRef>\r\n    <h4>{{ 'AbpAccount::Login' | abpLocalization }}</h4>\r\n    <strong>\r\n      {{ 'AbpAccount::AreYouANewUser' | abpLocalization }}\r\n      <a class=\"text-decoration-none\" routerLink=\"/account/register\">{{ 'AbpAccount::Register' | abpLocalization }}</a>\r\n    </strong>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" validateOnSubmit class=\"mt-4\">\r\n      <div class=\"form-group\">\r\n        <label for=\"login-input-user-name-or-email-address\">{{\r\n          'AbpAccount::UserNameOrEmailAddress' | abpLocalization\r\n        }}</label>\r\n        <input\r\n          class=\"form-control\"\r\n          type=\"text\"\r\n          id=\"login-input-user-name-or-email-address\"\r\n          formControlName=\"username\"\r\n          autofocus\r\n        />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"login-input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label>\r\n        <input class=\"form-control\" type=\"password\" id=\"login-input-password\" formControlName=\"password\" />\r\n      </div>\r\n      <div class=\"form-check\" validationTarget validationStyle>\r\n        <label class=\"form-check-label\" for=\"login-input-remember-me\">\r\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"login-input-remember-me\" formControlName=\"remember\" />\r\n          {{ 'AbpAccount::RememberMe' | abpLocalization }}\r\n        </label>\r\n      </div>\r\n      <abp-button\r\n        [loading]=\"inProgress\"\r\n        buttonType=\"submit\"\r\n        name=\"Action\"\r\n        buttonClass=\"btn-block btn-lg mt-3 btn btn-primary\"\r\n      >\r\n        {{ 'AbpAccount::Login' | abpLocalization }}\r\n      </abp-button>\r\n    </form>\r\n  </ng-template>\r\n  <ng-template #cancelContentRef>\r\n    <div class=\"card-footer text-center border-0\">\r\n      <a routerLink=\"/\">\r\n        <button type=\"button\" name=\"Action\" value=\"Cancel\" class=\"px-2 py-0 btn btn-link\">\r\n          {{ 'AbpAccount::Cancel' | abpLocalization }}\r\n        </button>\r\n      </a>\r\n    </div>\r\n  </ng-template>\r\n</abp-auth-wrapper>\r\n");
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/manage-profile/manage-profile.component.html": 
        /*!****************************************************************************************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/manage-profile/manage-profile.component.html ***!
          \****************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"AbpContentToolbar\"></div>\r\n\r\n<div class=\"card border-0 shadow-sm\">\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <ul class=\"nav flex-column nav-pills\" id=\"nav-tab\" role=\"tablist\">\r\n          <li class=\"nav-item\" (click)=\"selectedTab = 0\">\r\n            <a class=\"nav-link\" [ngClass]=\"{ active: selectedTab === 0 }\" role=\"tab\" href=\"javascript:void(0)\">{{\r\n              'AbpUi::ChangePassword' | abpLocalization\r\n            }}</a>\r\n          </li>\r\n          <li class=\"nav-item\" (click)=\"selectedTab = 1\">\r\n            <a class=\"nav-link\" [ngClass]=\"{ active: selectedTab === 1 }\" role=\"tab\" href=\"javascript:void(0)\">{{\r\n              'AbpAccount::PersonalSettings' | abpLocalization\r\n            }}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"tab-content\" *ngIf=\"selectedTab === 0\" [@fadeIn]>\r\n          <div class=\"tab-pane active\" role=\"tabpanel\">\r\n            <h4>\r\n              {{ 'AbpIdentity::ChangePassword' | abpLocalization }}\r\n              <hr />\r\n            </h4>\r\n            <abp-change-password-form></abp-change-password-form>\r\n          </div>\r\n        </div>\r\n        <div class=\"tab-content\" *ngIf=\"selectedTab === 1\" [@fadeIn]>\r\n          <div class=\"tab-pane active\" role=\"tabpanel\">\r\n            <h4>\r\n              {{ 'AbpIdentity::PersonalSettings' | abpLocalization }}\r\n              <hr />\r\n            </h4>\r\n            <abp-personal-settings-form></abp-personal-settings-form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/personal-settings/personal-settings.component.html": 
        /*!**********************************************************************************************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/personal-settings/personal-settings.component.html ***!
          \**********************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form validateOnSubmit *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">{{ 'AbpIdentity::DisplayName:UserName' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"text\"\r\n      id=\"username\"\r\n      class=\"form-control\"\r\n      formControlName=\"userName\"\r\n      autofocus\r\n      (keydown.space)=\"$event.preventDefault()\"\r\n    />\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label\r\n        ><input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"surname\">{{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</label\r\n        ><input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email-address\">{{ 'AbpIdentity::DisplayName:Email' | abpLocalization }}</label\r\n    ><span> * </span><input type=\"text\" id=\"email-address\" class=\"form-control\" formControlName=\"email\" />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"phone-number\">{{ 'AbpIdentity::DisplayName:PhoneNumber' | abpLocalization }}</label\r\n    ><input type=\"text\" id=\"phone-number\" class=\"form-control\" formControlName=\"phoneNumber\" />\r\n  </div>\r\n  <abp-button\r\n    buttonType=\"submit\"\r\n    iconClass=\"fa fa-check\"\r\n    buttonClass=\"btn btn-primary color-white\"\r\n    [loading]=\"inProgress\"\r\n    [disabled]=\"form?.invalid || form?.pristine\"\r\n  >\r\n    {{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r\n  >\r\n</form>\r\n");
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/register/register.component.html": 
        /*!****************************************************************************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/register/register.component.html ***!
          \****************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<abp-auth-wrapper [mainContentRef]=\"mainContentRef\">\r\n  <ng-template #mainContentRef>\r\n    <h4>{{ 'AbpAccount::Register' | abpLocalization }}</h4>\r\n    <strong>\r\n      {{ 'AbpAccount::AlreadyRegistered' | abpLocalization }}\r\n      <a class=\"text-decoration-none\" routerLink=\"/account/login\">{{ 'AbpAccount::Login' | abpLocalization }}</a>\r\n    </strong>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" validateOnSubmit class=\"mt-4\">\r\n      <div class=\"form-group\">\r\n        <label for=\"input-user-name\">{{ 'AbpAccount::UserName' | abpLocalization }}</label\r\n        ><span> * </span\r\n        ><input autofocus type=\"text\" id=\"input-user-name\" class=\"form-control\" formControlName=\"username\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"input-email-address\">{{ 'AbpAccount::EmailAddress' | abpLocalization }}</label\r\n        ><span> * </span><input type=\"email\" id=\"input-email-address\" class=\"form-control\" formControlName=\"email\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label\r\n        ><span> * </span><input type=\"password\" id=\"input-password\" class=\"form-control\" formControlName=\"password\" />\r\n      </div>\r\n      <abp-button\r\n        [loading]=\"inProgress\"\r\n        buttonType=\"submit\"\r\n        name=\"Action\"\r\n        buttonClass=\"btn-block btn-lg mt-3 btn btn-primary\"\r\n      >\r\n        {{ 'AbpAccount::Register' | abpLocalization }}\r\n      </abp-button>\r\n    </form>\r\n  </ng-template>\r\n</abp-auth-wrapper>\r\n");
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/tenant-box/tenant-box.component.html": 
        /*!********************************************************************************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/tenant-box/tenant-box.component.html ***!
          \********************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card shadow-sm rounded mb-3\">\r\n  <div class=\"card-body px-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <span style=\"font-size: 0.8em;\" class=\"text-uppercase text-muted\">{{\r\n          'AbpUiMultiTenancy::Tenant' | abpLocalization\r\n        }}</span\r\n        ><br />\r\n        <h6 class=\"m-0 d-inline-block\">\r\n          <span>\r\n            {{ tenantName || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }}\r\n          </span>\r\n        </h6>\r\n      </div>\r\n      <div class=\"col-auto\">\r\n        <a\r\n          id=\"AbpTenantSwitchLink\"\r\n          href=\"javascript:void(0);\"\r\n          class=\"btn btn-sm mt-3 btn-outline-primary\"\r\n          (click)=\"onSwitch()\"\r\n          >{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"inProgress\">\r\n  <ng-template #abpHeader>\r\n    <h5>Switch Tenant</h5>\r\n  </ng-template>\r\n  <ng-template #abpBody>\r\n    <form (ngSubmit)=\"save()\">\r\n      <div class=\"mt-2\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}</label>\r\n          <input [(ngModel)]=\"tenant.name\" type=\"text\" id=\"name\" name=\"tenant\" class=\"form-control\" autofocus />\r\n        </div>\r\n        <p>{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}</p>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n  <ng-template #abpFooter>\r\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button buttonType=\"button\" buttonClass=\"btn btn-primary\" (click)=\"save()\">\r\n      <i class=\"fa fa-check mr-1\"></i> <span>{{ 'AbpTenantManagement::Save' | abpLocalization }}</span>\r\n    </abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n");
            /***/ 
        }),
        /***/ "../../packages/account/src/lib/account-routing.module.ts": 
        /*!**********************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/account-routing.module.ts ***!
          \**********************************************************************************************************/
        /*! exports provided: AccountRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function () { return AccountRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "../../packages/account/src/lib/components/login/login.component.ts");
            /* harmony import */ var _components_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/manage-profile/manage-profile.component */ "../../packages/account/src/lib/components/manage-profile/manage-profile.component.ts");
            /* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "../../packages/account/src/lib/components/register/register.component.ts");
            var routes = [
                { path: '', pathMatch: 'full', redirectTo: 'login' },
                {
                    path: '',
                    component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["DynamicLayoutComponent"],
                    children: [
                        { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                        { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
                        {
                            path: 'manage-profile',
                            component: _components_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_5__["ManageProfileComponent"],
                        },
                    ],
                },
            ];
            var AccountRoutingModule = /** @class */ (function () {
                function AccountRoutingModule() {
                }
                return AccountRoutingModule;
            }());
            AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
                })
            ], AccountRoutingModule);
            /***/ 
        }),
        /***/ "../../packages/account/src/lib/account.module.ts": 
        /*!**************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/account.module.ts ***!
          \**************************************************************************************************/
        /*! exports provided: AccountModule, AccountProviders */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function () { return AccountModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountProviders", function () { return AccountProviders; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
            /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "../../node_modules/primeng/table.js");
            /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-routing.module */ "../../packages/account/src/lib/account-routing.module.ts");
            /* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "../../packages/account/src/lib/components/change-password/change-password.component.ts");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "../../packages/account/src/lib/components/login/login.component.ts");
            /* harmony import */ var _components_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/manage-profile/manage-profile.component */ "../../packages/account/src/lib/components/manage-profile/manage-profile.component.ts");
            /* harmony import */ var _components_personal_settings_personal_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/personal-settings/personal-settings.component */ "../../packages/account/src/lib/components/personal-settings/personal-settings.component.ts");
            /* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ "../../packages/account/src/lib/components/register/register.component.ts");
            /* harmony import */ var _components_tenant_box_tenant_box_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tenant-box/tenant-box.component */ "../../packages/account/src/lib/components/tenant-box/tenant-box.component.ts");
            /* harmony import */ var _tokens_options_token__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tokens/options.token */ "../../packages/account/src/lib/tokens/options.token.ts");
            /* harmony import */ var _components_auth_wrapper_auth_wrapper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/auth-wrapper/auth-wrapper.component */ "../../packages/account/src/lib/components/auth-wrapper/auth-wrapper.component.ts");
            var AccountModule = /** @class */ (function () {
                function AccountModule() {
                }
                return AccountModule;
            }());
            AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [
                        _components_auth_wrapper_auth_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["AuthWrapperComponent"],
                        _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                        _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                        _components_tenant_box_tenant_box_component__WEBPACK_IMPORTED_MODULE_13__["TenantBoxComponent"],
                        _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"],
                        _components_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_10__["ManageProfileComponent"],
                        _components_personal_settings_personal_settings_component__WEBPACK_IMPORTED_MODULE_11__["PersonalSettingsComponent"],
                    ],
                    imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_7__["AccountRoutingModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__["NgxValidateCoreModule"]],
                    exports: [],
                })
            ], AccountModule);
            /**
             *
             * @deprecated since version 0.9
             */
            function AccountProviders(options) {
                if (options === void 0) { options = {}; }
                return [
                    { provide: _tokens_options_token__WEBPACK_IMPORTED_MODULE_14__["ACCOUNT_OPTIONS"], useValue: options },
                    {
                        provide: 'ACCOUNT_OPTIONS',
                        useFactory: _tokens_options_token__WEBPACK_IMPORTED_MODULE_14__["optionsFactory"],
                        deps: [_tokens_options_token__WEBPACK_IMPORTED_MODULE_14__["ACCOUNT_OPTIONS"]],
                    },
                ];
            }
            /***/ 
        }),
        /***/ "../../packages/account/src/lib/components/auth-wrapper/auth-wrapper.component.ts": 
        /*!**********************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/auth-wrapper/auth-wrapper.component.ts ***!
          \**********************************************************************************************************************************/
        /*! exports provided: AuthWrapperComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthWrapperComponent", function () { return AuthWrapperComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            var AuthWrapperComponent = /** @class */ (function () {
                function AuthWrapperComponent() {
                }
                return AuthWrapperComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
            ], AuthWrapperComponent.prototype, "mainContentRef", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
            ], AuthWrapperComponent.prototype, "cancelContentRef", void 0);
            AuthWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'abp-auth-wrapper',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-wrapper.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/auth-wrapper/auth-wrapper.component.html")).default,
                })
            ], AuthWrapperComponent);
            /***/ 
        }),
        /***/ "../../packages/account/src/lib/components/change-password/change-password.component.ts": 
        /*!****************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/change-password/change-password.component.ts ***!
          \****************************************************************************************************************************************/
        /*! exports provided: ChangePasswordComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () { return ChangePasswordComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            /* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
            var _a = _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"], minLength = _a.minLength, required = _a.required, maxLength = _a.maxLength;
            var PASSWORD_FIELDS = ['newPassword', 'repeatNewPassword'];
            var ChangePasswordComponent = /** @class */ (function () {
                function ChangePasswordComponent(fb, store, toasterService) {
                    this.fb = fb;
                    this.store = store;
                    this.toasterService = toasterService;
                    this.mapErrorsFn = function (errors, groupErrors, control) {
                        if (PASSWORD_FIELDS.indexOf(control.name) < 0)
                            return errors;
                        return errors.concat(groupErrors.filter(function (_a) {
                            var key = _a.key;
                            return key === 'passwordMismatch';
                        }));
                    };
                }
                ChangePasswordComponent.prototype.ngOnInit = function () {
                    var passwordRules = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getSettings('Identity.Password'));
                    var passwordRulesArr = [];
                    var requiredLength = 1;
                    if ((passwordRules['Abp.Identity.Password.RequireDigit'] || '').toLowerCase() === 'true') {
                        passwordRulesArr.push('number');
                    }
                    if ((passwordRules['Abp.Identity.Password.RequireLowercase'] || '').toLowerCase() === 'true') {
                        passwordRulesArr.push('small');
                    }
                    if ((passwordRules['Abp.Identity.Password.RequireUppercase'] || '').toLowerCase() === 'true') {
                        passwordRulesArr.push('capital');
                    }
                    if (+(passwordRules['Abp.Identity.Password.RequiredUniqueChars'] || 0) > 0) {
                        passwordRulesArr.push('special');
                    }
                    if (Number.isInteger(+passwordRules['Abp.Identity.Password.RequiredLength'])) {
                        requiredLength = +passwordRules['Abp.Identity.Password.RequiredLength'];
                    }
                    this.form = this.fb.group({
                        password: ['', required],
                        newPassword: [
                            '',
                            {
                                validators: [required, Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__["validatePassword"])(passwordRulesArr), minLength(requiredLength), maxLength(32)],
                            },
                        ],
                        repeatNewPassword: [
                            '',
                            { validators: [required, Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__["validatePassword"])(passwordRulesArr), minLength(requiredLength), maxLength(32)] },
                        ],
                    }, {
                        validators: [Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__["comparePasswords"])(PASSWORD_FIELDS)],
                    });
                };
                ChangePasswordComponent.prototype.onSubmit = function () {
                    var _this = this;
                    if (this.form.invalid)
                        return;
                    this.inProgress = true;
                    this.store
                        .dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ChangePassword"]({
                        currentPassword: this.form.get('password').value,
                        newPassword: this.form.get('newPassword').value,
                    }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return (_this.inProgress = false); }))
                        .subscribe({
                        next: function () {
                            _this.form.reset();
                            _this.toasterService.success('AbpAccount::PasswordChangedMessage', 'Success', { life: 5000 });
                        },
                        error: function (err) {
                            _this.toasterService.error(Object(snq__WEBPACK_IMPORTED_MODULE_7__["default"])(function () { return err.error.error.message; }, 'AbpAccount::DefaultErrorMessage'), 'Error', {
                                life: 7000,
                            });
                        },
                    });
                };
                return ChangePasswordComponent;
            }());
            ChangePasswordComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
                { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
                { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }
            ]; };
            ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'abp-change-password-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/change-password/change-password.component.html")).default,
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
            ], ChangePasswordComponent);
            /***/ 
        }),
        /***/ "../../packages/account/src/lib/components/index.ts": 
        /*!****************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/index.ts ***!
          \****************************************************************************************************/
        /*! exports provided: RegisterComponent, PersonalSettingsComponent, TenantBoxComponent, ChangePasswordComponent, LoginComponent, ManageProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password/change-password.component */ "../../packages/account/src/lib/components/change-password/change-password.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () { return _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordComponent"]; });
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "../../packages/account/src/lib/components/login/login.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]; });
            /* harmony import */ var _manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-profile/manage-profile.component */ "../../packages/account/src/lib/components/manage-profile/manage-profile.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManageProfileComponent", function () { return _manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_3__["ManageProfileComponent"]; });
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "../../packages/account/src/lib/components/register/register.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]; });
            /* harmony import */ var _personal_settings_personal_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-settings/personal-settings.component */ "../../packages/account/src/lib/components/personal-settings/personal-settings.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonalSettingsComponent", function () { return _personal_settings_personal_settings_component__WEBPACK_IMPORTED_MODULE_5__["PersonalSettingsComponent"]; });
            /* harmony import */ var _tenant_box_tenant_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tenant-box/tenant-box.component */ "../../packages/account/src/lib/components/tenant-box/tenant-box.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantBoxComponent", function () { return _tenant_box_tenant_box_component__WEBPACK_IMPORTED_MODULE_6__["TenantBoxComponent"]; });
            /***/ 
        }),
        /***/ "../../packages/account/src/lib/components/login/login.component.ts": 
        /*!********************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/login/login.component.ts ***!
          \********************************************************************************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/router-plugin */ "../../node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            /* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
            var _a = _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"], maxLength = _a.maxLength, minLength = _a.minLength, required = _a.required;
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(fb, oauthService, store, toasterService, options) {
                    this.fb = fb;
                    this.oauthService = oauthService;
                    this.store = store;
                    this.toasterService = toasterService;
                    this.options = options;
                    this.oauthService.configure(this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getOne('environment')).oAuthConfig);
                    this.oauthService.loadDiscoveryDocument();
                    this.form = this.fb.group({
                        username: ['', [required, maxLength(255)]],
                        password: ['', [required, maxLength(32)]],
                        remember: [false],
                    });
                }
                LoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    if (this.form.invalid)
                        return;
                    // this.oauthService.setStorage(this.form.value.remember ? localStorage : sessionStorage);
                    this.inProgress = true;
                    var tenant = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["SessionState"].getTenant);
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(this.oauthService.fetchTokenUsingPasswordFlow(this.form.get('username').value, this.form.get('password').value, new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHeaders"](Object.assign({}, (tenant && tenant.id && { __tenant: tenant.id })))))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () { return _this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["GetAppConfiguration"]()); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () {
                        var redirectUrl = Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])(function () { return window.history.state; }).redirectUrl || (_this.options || {}).redirectUrl || '/';
                        _this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__["Navigate"]([redirectUrl]));
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(function (err) {
                        _this.toasterService.error(Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])(function () { return err.error.error_description; }) ||
                            Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])(function () { return err.error.error.message; }, 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(err);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { return (_this.inProgress = false); }))
                        .subscribe();
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"] },
                { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
                { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: ['ACCOUNT_OPTIONS',] }] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'abp-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/login/login.component.html")).default,
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])('ACCOUNT_OPTIONS')),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
                    angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
                    _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_8__["ToasterService"], Object])
            ], LoginComponent);
            /***/ 
        }),
        /***/ "../../packages/account/src/lib/components/manage-profile/manage-profile.component.ts": 
        /*!**************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/manage-profile/manage-profile.component.ts ***!
          \**************************************************************************************************************************************/
        /*! exports provided: ManageProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProfileComponent", function () { return ManageProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            var ManageProfileComponent = /** @class */ (function () {
                function ManageProfileComponent() {
                    this.selectedTab = 0;
                }
                return ManageProfileComponent;
            }());
            ManageProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'abp-manage-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-profile.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/manage-profile/manage-profile.component.html")).default,
                    animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]))])],
                })
            ], ManageProfileComponent);
            /***/ 
        }),
        /***/ "../../packages/account/src/lib/components/personal-settings/personal-settings.component.ts": 
        /*!********************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/personal-settings/personal-settings.component.ts ***!
          \********************************************************************************************************************************************/
        /*! exports provided: PersonalSettingsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalSettingsComponent", function () { return PersonalSettingsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
            var _a = _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"], maxLength = _a.maxLength, required = _a.required, email = _a.email;
            var PersonalSettingsComponent = /** @class */ (function () {
                function PersonalSettingsComponent(fb, store, toasterService) {
                    this.fb = fb;
                    this.store = store;
                    this.toasterService = toasterService;
                }
                PersonalSettingsComponent.prototype.ngOnInit = function () {
                    this.buildForm();
                };
                PersonalSettingsComponent.prototype.buildForm = function () {
                    var _this = this;
                    this.store
                        .dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["GetProfile"]())
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.profile$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
                        .subscribe(function (_a) {
                        var _b = __read(_a, 2), profile = _b[1];
                        _this.form = _this.fb.group({
                            userName: [profile.userName, [required, maxLength(256)]],
                            email: [profile.email, [required, email, maxLength(256)]],
                            name: [profile.name || '', [maxLength(64)]],
                            surname: [profile.surname || '', [maxLength(64)]],
                            phoneNumber: [profile.phoneNumber || '', [maxLength(16)]],
                        });
                    });
                };
                PersonalSettingsComponent.prototype.submit = function () {
                    var _this = this;
                    if (this.form.invalid)
                        return;
                    this.inProgress = true;
                    this.store
                        .dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["UpdateProfile"](this.form.value))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return (_this.inProgress = false); }))
                        .subscribe(function () {
                        _this.toasterService.success('AbpAccount::PersonalSettingsSaved', 'Success', { life: 5000 });
                    });
                };
                return PersonalSettingsComponent;
            }());
            PersonalSettingsComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
                { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ProfileState"].getProfile),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
            ], PersonalSettingsComponent.prototype, "profile$", void 0);
            PersonalSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'abp-personal-settings-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-settings.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/personal-settings/personal-settings.component.html")).default,
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]])
            ], PersonalSettingsComponent);
            /***/ 
        }),
        /***/ "../../packages/account/src/lib/components/register/register.component.ts": 
        /*!**************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/register/register.component.ts ***!
          \**************************************************************************************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/router-plugin */ "../../node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            /* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
            /* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/account.service */ "../../packages/account/src/lib/services/account.service.ts");
            /* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
            var _a = _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"], maxLength = _a.maxLength, minLength = _a.minLength, required = _a.required, email = _a.email;
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(fb, accountService, oauthService, store, toasterService) {
                    this.fb = fb;
                    this.accountService = accountService;
                    this.oauthService = oauthService;
                    this.store = store;
                    this.toasterService = toasterService;
                    this.oauthService.configure(this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getOne('environment')).oAuthConfig);
                    this.oauthService.loadDiscoveryDocument();
                }
                RegisterComponent.prototype.ngOnInit = function () {
                    var passwordRules = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getSettings('Identity.Password'));
                    var passwordRulesArr = [];
                    var requiredLength = 1;
                    if ((passwordRules['Abp.Identity.Password.RequireDigit'] || '').toLowerCase() === 'true') {
                        passwordRulesArr.push('number');
                    }
                    if ((passwordRules['Abp.Identity.Password.RequireLowercase'] || '').toLowerCase() === 'true') {
                        passwordRulesArr.push('small');
                    }
                    if ((passwordRules['Abp.Identity.Password.RequireUppercase'] || '').toLowerCase() === 'true') {
                        passwordRulesArr.push('capital');
                    }
                    if (+(passwordRules['Abp.Identity.Password.RequiredUniqueChars'] || 0) > 0) {
                        passwordRulesArr.push('special');
                    }
                    if (Number.isInteger(+passwordRules['Abp.Identity.Password.RequiredLength'])) {
                        requiredLength = +passwordRules['Abp.Identity.Password.RequiredLength'];
                    }
                    this.form = this.fb.group({
                        username: ['', [required, maxLength(255)]],
                        password: [
                            '',
                            [required, Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__["validatePassword"])(passwordRulesArr), minLength(requiredLength), maxLength(32)],
                        ],
                        email: ['', [required, email]],
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
                    var tenant = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["SessionState"].getTenant);
                    this.accountService
                        .register(newUser)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(_this.oauthService.fetchTokenUsingPasswordFlow(newUser.userName, newUser.password, new _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHeaders"](Object.assign({}, (tenant && tenant.id && { __tenant: tenant.id }))))); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () { return _this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["GetAppConfiguration"]()); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () { return _this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_5__["Navigate"](['/'])); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(function (err) {
                        _this.toasterService.error(Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])(function () { return err.error.error_description; }) ||
                            Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])(function () { return err.error.error.message; }, 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(err);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { return (_this.inProgress = false); }))
                        .subscribe();
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
                { type: _services_account_service__WEBPACK_IMPORTED_MODULE_11__["AccountService"] },
                { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__["OAuthService"] },
                { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
                { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'abp-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/register/register.component.html")).default,
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
                    _services_account_service__WEBPACK_IMPORTED_MODULE_11__["AccountService"],
                    angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__["OAuthService"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
                    _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "../../packages/account/src/lib/components/tenant-box/tenant-box.component.ts": 
        /*!******************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/tenant-box/tenant-box.component.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: TenantBoxComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantBoxComponent", function () { return TenantBoxComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
            /* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/account.service */ "../../packages/account/src/lib/services/account.service.ts");
            var TenantBoxComponent = /** @class */ (function () {
                function TenantBoxComponent(store, toasterService, accountService) {
                    this.store = store;
                    this.toasterService = toasterService;
                    this.accountService = accountService;
                    this.tenant = {};
                }
                TenantBoxComponent.prototype.ngOnInit = function () {
                    this.tenant = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["SessionState"].getTenant) || {};
                    this.tenantName = this.tenant.name || '';
                };
                TenantBoxComponent.prototype.onSwitch = function () {
                    this.isModalVisible = true;
                };
                TenantBoxComponent.prototype.save = function () {
                    var _this = this;
                    if (this.tenant.name && !this.inProgress) {
                        this.inProgress = true;
                        this.accountService
                            .findTenant(this.tenant.name)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return (_this.inProgress = false); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
                            _this.toasterService.error(Object(snq__WEBPACK_IMPORTED_MODULE_7__["default"])(function () { return err.error.error_description; }, 'AbpUi::DefaultErrorMessage'), 'AbpUi::Error');
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
                        }))
                            .subscribe(function (_a) {
                            var success = _a.success, tenantId = _a.tenantId;
                            if (success) {
                                _this.tenant = {
                                    id: tenantId,
                                    name: _this.tenant.name,
                                };
                                _this.tenantName = _this.tenant.name;
                                _this.isModalVisible = false;
                            }
                            else {
                                _this.toasterService.error('AbpUiMultiTenancy::GivenTenantIsNotAvailable', 'AbpUi::Error', {
                                    messageLocalizationParams: [_this.tenant.name],
                                });
                                _this.tenant = {};
                            }
                            _this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["SetTenant"](success ? _this.tenant : null));
                        });
                    }
                    else {
                        this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["SetTenant"](null));
                        this.tenantName = null;
                        this.isModalVisible = false;
                    }
                };
                return TenantBoxComponent;
            }());
            TenantBoxComponent.ctorParameters = function () { return [
                { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
                { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] },
                { type: _services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"] }
            ]; };
            TenantBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'abp-tenant-box',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tenant-box.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/tenant-box/tenant-box.component.html")).default,
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"], _services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]])
            ], TenantBoxComponent);
            /***/ 
        }),
        /***/ "../../packages/account/src/lib/constants/routes.ts": 
        /*!****************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/constants/routes.ts ***!
          \****************************************************************************************************/
        /*! exports provided: ACCOUNT_ROUTES */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_ROUTES", function () { return ACCOUNT_ROUTES; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /**
             *
             * @deprecated since version 0.9
             */
            var ACCOUNT_ROUTES = {
                routes: [
                    {
                        name: 'Account',
                        path: 'account',
                        invisible: true,
                        layout: "application" /* application */,
                        children: [{ path: 'login', name: 'Login', order: 1 }, { path: 'register', name: 'Register', order: 2 }],
                    },
                ],
            };
            /***/ 
        }),
        /***/ "../../packages/account/src/lib/services/account.service.ts": 
        /*!************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/services/account.service.ts ***!
          \************************************************************************************************************/
        /*! exports provided: AccountService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function () { return AccountService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
            var AccountService = /** @class */ (function () {
                function AccountService(rest) {
                    this.rest = rest;
                }
                AccountService.prototype.findTenant = function (tenantName) {
                    var request = {
                        method: 'GET',
                        url: "/api/abp/multi-tenancy/tenants/by-name/" + tenantName,
                    };
                    return this.rest.request(request);
                };
                AccountService.prototype.register = function (body) {
                    var request = {
                        method: 'POST',
                        url: '/api/account/register',
                        body: body,
                    };
                    return this.rest.request(request, { skipHandleError: true });
                };
                return AccountService;
            }());
            AccountService.ctorParameters = function () { return [
                { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
            ]; };
            AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root',
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
            ], AccountService);
            /***/ 
        }),
        /***/ "../../packages/account/src/lib/services/index.ts": 
        /*!**************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/services/index.ts ***!
          \**************************************************************************************************/
        /*! exports provided: AccountService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.service */ "../../packages/account/src/lib/services/account.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function () { return _account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]; });
            /***/ 
        }),
        /***/ "../../packages/account/src/lib/tokens/index.ts": 
        /*!************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/tokens/index.ts ***!
          \************************************************************************************************/
        /*! exports provided: optionsFactory, ACCOUNT_OPTIONS */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _options_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.token */ "../../packages/account/src/lib/tokens/options.token.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionsFactory", function () { return _options_token__WEBPACK_IMPORTED_MODULE_1__["optionsFactory"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_OPTIONS", function () { return _options_token__WEBPACK_IMPORTED_MODULE_1__["ACCOUNT_OPTIONS"]; });
            /***/ 
        }),
        /***/ "../../packages/account/src/lib/tokens/options.token.ts": 
        /*!********************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/tokens/options.token.ts ***!
          \********************************************************************************************************/
        /*! exports provided: optionsFactory, ACCOUNT_OPTIONS */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsFactory", function () { return optionsFactory; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_OPTIONS", function () { return ACCOUNT_OPTIONS; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            function optionsFactory(options) {
                return Object.assign({ redirectUrl: '/' }, options);
            }
            var ACCOUNT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ACCOUNT_OPTIONS');
            /***/ 
        }),
        /***/ "../../packages/account/src/public-api.ts": 
        /*!******************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/public-api.ts ***!
          \******************************************************************************************/
        /*! exports provided: AccountModule, AccountProviders, RegisterComponent, PersonalSettingsComponent, TenantBoxComponent, ACCOUNT_ROUTES, optionsFactory, ACCOUNT_OPTIONS, ChangePasswordComponent, LoginComponent, ManageProfileComponent, AccountService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _lib_account_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/account.module */ "../../packages/account/src/lib/account.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function () { return _lib_account_module__WEBPACK_IMPORTED_MODULE_1__["AccountModule"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountProviders", function () { return _lib_account_module__WEBPACK_IMPORTED_MODULE_1__["AccountProviders"]; });
            /* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/components */ "../../packages/account/src/lib/components/index.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return _lib_components__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonalSettingsComponent", function () { return _lib_components__WEBPACK_IMPORTED_MODULE_2__["PersonalSettingsComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantBoxComponent", function () { return _lib_components__WEBPACK_IMPORTED_MODULE_2__["TenantBoxComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () { return _lib_components__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return _lib_components__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManageProfileComponent", function () { return _lib_components__WEBPACK_IMPORTED_MODULE_2__["ManageProfileComponent"]; });
            /* harmony import */ var _lib_constants_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/constants/routes */ "../../packages/account/src/lib/constants/routes.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_ROUTES", function () { return _lib_constants_routes__WEBPACK_IMPORTED_MODULE_3__["ACCOUNT_ROUTES"]; });
            /* harmony import */ var _lib_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/tokens */ "../../packages/account/src/lib/tokens/index.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionsFactory", function () { return _lib_tokens__WEBPACK_IMPORTED_MODULE_4__["optionsFactory"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_OPTIONS", function () { return _lib_tokens__WEBPACK_IMPORTED_MODULE_4__["ACCOUNT_OPTIONS"]; });
            /* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/services */ "../../packages/account/src/lib/services/index.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function () { return _lib_services__WEBPACK_IMPORTED_MODULE_5__["AccountService"]; });
            /***/ 
        }),
        /***/ "./src/app/lazy-libs/account-wrapper.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/lazy-libs/account-wrapper.module.ts ***!
          \*****************************************************/
        /*! exports provided: AccountWrapperModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountWrapperModule", function () { return AccountWrapperModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fs_account_ngx_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fs/account/ngx-admin */ "../../libs/account/ngx-admin/src/index.ts");
            var AccountWrapperModule = /** @class */ (function () {
                function AccountWrapperModule() {
                }
                return AccountWrapperModule;
            }());
            AccountWrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_fs_account_ngx_admin__WEBPACK_IMPORTED_MODULE_2__["AccountNgxAdminModule"]],
                })
            ], AccountWrapperModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=lazy-libs-account-wrapper-module-es2015.js.map
//# sourceMappingURL=lazy-libs-account-wrapper-module-es5.js.map
//# sourceMappingURL=lazy-libs-account-wrapper-module-es5.js.map