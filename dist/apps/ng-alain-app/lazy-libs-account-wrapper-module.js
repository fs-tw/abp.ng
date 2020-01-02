(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-libs-account-wrapper-module"],{

/***/ "../../libs/account/ng-alain/src/index.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/index.ts ***!
  \******************************************************************************************/
/*! exports provided: AccountNgAlainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_account_ng_alain_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/account-ng-alain.module */ "../../libs/account/ng-alain/src/lib/account-ng-alain.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountNgAlainModule", function() { return _lib_account_ng_alain_module__WEBPACK_IMPORTED_MODULE_1__["AccountNgAlainModule"]; });





/***/ }),

/***/ "../../libs/account/ng-alain/src/lib/account-ng-alain-routing.module.ts":
/*!************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/account-ng-alain-routing.module.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AccountNgAlainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNgAlainRoutingModule", function() { return AccountNgAlainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "../../libs/account/ng-alain/src/lib/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "../../libs/account/ng-alain/src/lib/components/register/register.component.ts");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fs/ng-alain/basic */ "../../themes/ng-alain/basic/src/index.ts");
/* harmony import */ var _components_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/manage-profile/manage-profile.component */ "../../libs/account/ng-alain/src/lib/components/manage-profile/manage-profile.component.ts");








var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_6__["LayoutDefaultComponent"],
        children: [
            {
                canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                path: 'manage-profile',
                component: _components_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_7__["ManageProfileComponent"],
            }
        ],
    },
    {
        path: '',
        component: _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_6__["LayoutPassportComponent"],
        children: [
            { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginComponent"] },
            { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["UserRegisterComponent"] },
        ],
    },
];
var AccountNgAlainRoutingModule = /** @class */ (function () {
    function AccountNgAlainRoutingModule() {
    }
    AccountNgAlainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AccountNgAlainRoutingModule);
    return AccountNgAlainRoutingModule;
}());



/***/ }),

/***/ "../../libs/account/ng-alain/src/lib/account-ng-alain.module.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/account-ng-alain.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AccountNgAlainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNgAlainModule", function() { return AccountNgAlainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fs_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fs/account */ "../../libs/account/src/index.ts");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fs/ng-alain/basic */ "../../themes/ng-alain/basic/src/index.ts");
/* harmony import */ var _account_ng_alain_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-ng-alain-routing.module */ "../../libs/account/ng-alain/src/lib/account-ng-alain-routing.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "../../libs/account/ng-alain/src/lib/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "../../libs/account/ng-alain/src/lib/components/register/register.component.ts");
/* harmony import */ var _components_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/manage-profile/manage-profile.component */ "../../libs/account/ng-alain/src/lib/components/manage-profile/manage-profile.component.ts");
/* harmony import */ var _components_personal_settings_personal_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/personal-settings/personal-settings.component */ "../../libs/account/ng-alain/src/lib/components/personal-settings/personal-settings.component.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "../../libs/account/ng-alain/src/lib/components/change-password/change-password.component.ts");
/* harmony import */ var _components_auth_wrapper_auth_wrapper_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/auth-wrapper/auth-wrapper.component */ "../../libs/account/ng-alain/src/lib/components/auth-wrapper/auth-wrapper.component.ts");
/* harmony import */ var _components_tenant_box_tenant_box_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tenant-box/tenant-box.component */ "../../libs/account/ng-alain/src/lib/components/tenant-box/tenant-box.component.ts");













var AccountNgAlainModule = /** @class */ (function () {
    function AccountNgAlainModule() {
    }
    AccountNgAlainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _components_auth_wrapper_auth_wrapper_component__WEBPACK_IMPORTED_MODULE_11__["AuthWrapperComponent"],
                _components_tenant_box_tenant_box_component__WEBPACK_IMPORTED_MODULE_12__["TenantBoxComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["UserLoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["UserRegisterComponent"],
                _components_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_8__["ManageProfileComponent"],
                _components_personal_settings_personal_settings_component__WEBPACK_IMPORTED_MODULE_9__["PersonalSettingsComponent"],
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordComponent"]
            ],
            imports: [
                _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_4__["NgAlainBasicModule"],
                _account_ng_alain_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountNgAlainRoutingModule"],
                _fs_account__WEBPACK_IMPORTED_MODULE_1__["AccountModule"]
            ]
        })
    ], AccountNgAlainModule);
    return AccountNgAlainModule;
}());



/***/ }),

/***/ "../../libs/account/ng-alain/src/lib/components/auth-wrapper/auth-wrapper.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/auth-wrapper/auth-wrapper.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: AuthWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthWrapperComponent", function() { return AuthWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AuthWrapperComponent = /** @class */ (function () {
    function AuthWrapperComponent() {
    }
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
            selector: 'ng-alain-auth-wrapper',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-wrapper.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ng-alain/src/lib/components/auth-wrapper/auth-wrapper.component.html")).default,
        })
    ], AuthWrapperComponent);
    return AuthWrapperComponent;
}());



/***/ }),

/***/ "../../libs/account/ng-alain/src/lib/components/change-password/change-password.component.less":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/change-password/change-password.component.less ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvYWNjb3VudC9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RkFBNEY7QUFDNUYsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0Qiw2RkFBNkYiLCJmaWxlIjoibGlicy9hY2NvdW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "../../libs/account/ng-alain/src/lib/components/change-password/change-password.component.ts":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/change-password/change-password.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.account */ "../../packages/account/src/public-api.ts");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");






var ChangePasswordComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChangePasswordComponent, _super);
    function ChangePasswordComponent(_fb, _store, _toasterService) {
        var _this = _super.call(this, _fb, _store, _toasterService) || this;
        _this._fb = _fb;
        _this._store = _store;
        _this._toasterService = _toasterService;
        return _this;
    }
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }
    ]; };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ng-alain-change-password-form',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ng-alain/src/lib/components/change-password/change-password.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.component.less */ "../../libs/account/ng-alain/src/lib/components/change-password/change-password.component.less")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}(_abp_ng_account__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordComponent"]));



/***/ }),

/***/ "../../libs/account/ng-alain/src/lib/components/login/login.component.less":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/login/login.component.less ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n:host ::ng-deep .ant-tabs .ant-tabs-bar {\n  margin-bottom: 24px;\n  text-align: center;\n  border-bottom: 0;\n}\n:host ::ng-deep .ant-tabs-tab {\n  font-size: 16px;\n  line-height: 24px;\n}\n:host ::ng-deep .ant-input-affix-wrapper .ant-input:not(:first-child) {\n  padding-left: 34px;\n}\n:host ::ng-deep .icon {\n  margin-left: 16px;\n  color: rgba(0, 0, 0, 0.2);\n  font-size: 24px;\n  vertical-align: middle;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n:host ::ng-deep .icon:hover {\n  color: #1890ff;\n}\n:host ::ng-deep .other {\n  margin-top: 24px;\n  line-height: 22px;\n  text-align: left;\n}\n:host ::ng-deep .other nz-tooltip {\n  vertical-align: middle;\n}\n:host ::ng-deep .other .register {\n  float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvYWNjb3VudC9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiLCJsaWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9jb21wb25lbnRzL2xvZ2luL0M6L1VzZXJzL1lpbkNoYW5nL0RvY3VtZW50cy9Xb3Jrcy9HaXRIdWIvYWJwLm5nL2xpYnMvYWNjb3VudC9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEZBQTRGO0FBQzVGLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FDRjdGO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FESUY7QUNQQTtFQU1NLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRElOO0FDWkE7RUFXTSxlQUFBO0VBQ0EsaUJBQUE7QURJTjtBQ2hCQTtFQWVNLGtCQUFBO0FESU47QUNuQkE7RUFrQk0saUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBRElOO0FDSE07RUFDRSxjQUFBO0FES1I7QUM5QkE7RUE2Qk0sZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FESU47QUNuQ0E7RUFpQ1Esc0JBQUE7QURLUjtBQ3RDQTtFQW9DUSxZQUFBO0FES1IiLCJmaWxlIjoibGlicy9hY2NvdW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIGF0LXJ1bGUtZW1wdHktbGluZS1iZWZvcmUsYXQtcnVsZS1uYW1lLXNwYWNlLWFmdGVyLGF0LXJ1bGUtbm8tdW5rbm93biAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMsc3RyaW5nLW5vLW5ld2xpbmUgKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNjhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC10YWJzIC5hbnQtdGFicy1iYXIge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC10YWJzLXRhYiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyIC5hbnQtaW5wdXQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICBwYWRkaW5nLWxlZnQ6IDM0cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmljb24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG59XG46aG9zdCA6Om5nLWRlZXAgLmljb246aG92ZXIge1xuICBjb2xvcjogIzE4OTBmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAub3RoZXIge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbjpob3N0IDo6bmctZGVlcCAub3RoZXIgbnotdG9vbHRpcCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG46aG9zdCA6Om5nLWRlZXAgLm90aGVyIC5yZWdpc3RlciB7XG4gIGZsb2F0OiByaWdodDtcbn1cbiIsIkBpbXBvcnQgJ35AZGVsb24vdGhlbWUvc3R5bGVzL2RlZmF1bHQnO1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDM2OHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgOjpuZy1kZWVwIHtcbiAgICAuYW50LXRhYnMgLmFudC10YWJzLWJhciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG4gICAgLmFudC10YWJzLXRhYiB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB9XG4gICAgLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyIC5hbnQtaW5wdXQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgcGFkZGluZy1sZWZ0OiAzNHB4O1xuICAgIH1cbiAgICAuaWNvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogQHByaW1hcnktY29sb3I7XG4gICAgICB9XG4gICAgfVxuICAgIC5vdGhlciB7XG4gICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbnotdG9vbHRpcCB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgICAucmVnaXN0ZXIge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "../../libs/account/ng-alain/src/lib/components/login/login.component.ts":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/login/login.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.account */ "../../packages/account/src/public-api.ts");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");







var UserLoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserLoginComponent, _super);
    function UserLoginComponent(_fb, _oauthService, _store, _toasterService, _options) {
        return _super.call(this, _fb, _oauthService, _store, _toasterService, _options) || this;
    }
    UserLoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['ACCOUNT_OPTIONS',] }] }
    ]; };
    UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ng-alain-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ng-alain/src/lib/components/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.less */ "../../libs/account/ng-alain/src/lib/components/login/login.component.less")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])('ACCOUNT_OPTIONS')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"], Object])
    ], UserLoginComponent);
    return UserLoginComponent;
}(_abp_ng_account__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]));



/***/ }),

/***/ "../../libs/account/ng-alain/src/lib/components/manage-profile/manage-profile.component.less":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/manage-profile/manage-profile.component.less ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host {\n  display: block;\n  padding-top: 24px;\n}\n.main {\n  display: flex;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  overflow: auto;\n  background-color: #fff;\n}\n.menu {\n  width: 224px;\n  border-right: 1px solid #e8e8e8;\n}\n.menu ::ng-deep .ant-menu-inline {\n  border: none;\n}\n.menu ::ng-deep .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {\n  font-weight: bold;\n}\n.content {\n  flex: 1;\n  padding-top: 8px;\n  padding-right: 40px;\n  padding-bottom: 8px;\n  padding-left: 40px;\n}\n.content .title {\n  margin-bottom: 12px;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 28px;\n}\n.content ::ng-deep .ant-list-split .ant-list-item:last-child {\n  border-bottom: 1px solid #e8e8e8;\n}\n.content ::ng-deep .ant-list-item {\n  padding-top: 14px;\n  padding-bottom: 14px;\n}\n@media screen and (max-width: 767px) {\n  .main {\n    flex-direction: column;\n  }\n  .main .menu {\n    width: 100%;\n    border: none;\n  }\n  .main .content {\n    padding: 40px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvYWNjb3VudC9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvbWFuYWdlLXByb2ZpbGUvbWFuYWdlLXByb2ZpbGUuY29tcG9uZW50Lmxlc3MiLCJsaWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9jb21wb25lbnRzL21hbmFnZS1wcm9maWxlL0M6L1VzZXJzL1lpbkNoYW5nL0RvY3VtZW50cy9Xb3Jrcy9HaXRIdWIvYWJwLm5nL2xpYnMvYWNjb3VudC9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvbWFuYWdlLXByb2ZpbGUvbWFuYWdlLXByb2ZpbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEZBQTRGO0FBQzVGLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FDRDdGO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FER0Y7QUNBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7QURDRjtBQ0hBO0VBS00sWUFBQTtBRENOO0FDTkE7RUFRTSxpQkFBQTtBRENOO0FDSUE7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURGRjtBQ0hBO0VBT0ksbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FEREo7QUNWQTtFQWVNLGdDQUFBO0FERk47QUNiQTtFQWtCTSxpQkFBQTtFQUNBLG9CQUFBO0FERk47QUNPQTtFQUNFO0lBQ0Usc0JBQUE7RURMRjtFQ0lBO0lBR0ksV0FBQTtJQUNBLFlBQUE7RURKSjtFQ0FBO0lBT0ksYUFBQTtFREpKO0FBQ0YiLCJmaWxlIjoibGlicy9hY2NvdW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy9tYW5hZ2UtcHJvZmlsZS9tYW5hZ2UtcHJvZmlsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIGF0LXJ1bGUtZW1wdHktbGluZS1iZWZvcmUsYXQtcnVsZS1uYW1lLXNwYWNlLWFmdGVyLGF0LXJ1bGUtbm8tdW5rbm93biAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMsc3RyaW5nLW5vLW5ld2xpbmUgKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xufVxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5tZW51IHtcbiAgd2lkdGg6IDIyNHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZThlOGU4O1xufVxuLm1lbnUgOjpuZy1kZWVwIC5hbnQtbWVudS1pbmxpbmUge1xuICBib3JkZXI6IG5vbmU7XG59XG4ubWVudSA6Om5nLWRlZXAgLmFudC1tZW51Om5vdCguYW50LW1lbnUtaG9yaXpvbnRhbCkgLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250ZW50IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuLmNvbnRlbnQgLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG4uY29udGVudCA6Om5nLWRlZXAgLmFudC1saXN0LXNwbGl0IC5hbnQtbGlzdC1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcbn1cbi5jb250ZW50IDo6bmctZGVlcCAuYW50LWxpc3QtaXRlbSB7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5tYWluIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5tYWluIC5tZW51IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgLm1haW4gLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ35AZGVsb24vdGhlbWUvc3R5bGVzL2RlZmF1bHQnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cblxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJvZHktYmFja2dyb3VuZDtcbn1cblxuLm1lbnUge1xuICB3aWR0aDogMjI0cHg7XG4gIGJvcmRlci1yaWdodDogQGJvcmRlci13aWR0aC1iYXNlIEBib3JkZXItc3R5bGUtYmFzZSBAYm9yZGVyLWNvbG9yLXNwbGl0O1xuICA6Om5nLWRlZXAge1xuICAgIC5hbnQtbWVudS1pbmxpbmUge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICAuYW50LW1lbnU6bm90KC5hbnQtbWVudS1ob3Jpem9udGFsKSAuYW50LW1lbnUtaXRlbS1zZWxlY3RlZCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbn1cblxuLmNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIC50aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBjb2xvcjogQGhlYWRpbmctY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIH1cbiAgOjpuZy1kZWVwIHtcbiAgICAuYW50LWxpc3Qtc3BsaXQgLmFudC1saXN0LWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcbiAgICB9XG4gICAgLmFudC1saXN0LWl0ZW0ge1xuICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQG1vYmlsZS1tYXgpIHtcbiAgLm1haW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLm1lbnUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "../../libs/account/ng-alain/src/lib/components/manage-profile/manage-profile.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/manage-profile/manage-profile.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: ManageProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProfileComponent", function() { return ManageProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");




var ManageProfileComponent = /** @class */ (function () {
    function ManageProfileComponent() {
        this.selectedTab = 0;
    }
    ManageProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ng-alain-manage-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-profile.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ng-alain/src/lib/components/manage-profile/manage-profile.component.html")).default,
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]))])],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-profile.component.less */ "../../libs/account/ng-alain/src/lib/components/manage-profile/manage-profile.component.less")).default]
        })
    ], ManageProfileComponent);
    return ManageProfileComponent;
}());



/***/ }),

/***/ "../../libs/account/ng-alain/src/lib/components/personal-settings/personal-settings.component.less":
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/personal-settings/personal-settings.component.less ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\nnz-form-item {\n  margin-bottom: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvYWNjb3VudC9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvcGVyc29uYWwtc2V0dGluZ3MvcGVyc29uYWwtc2V0dGluZ3MuY29tcG9uZW50Lmxlc3MiLCJsaWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9jb21wb25lbnRzL3BlcnNvbmFsLXNldHRpbmdzL0M6L1VzZXJzL1lpbkNoYW5nL0RvY3VtZW50cy9Xb3Jrcy9HaXRIdWIvYWJwLm5nL2xpYnMvYWNjb3VudC9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvcGVyc29uYWwtc2V0dGluZ3MvcGVyc29uYWwtc2V0dGluZ3MuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEZBQTRGO0FBQzVGLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FDRDdGO0VBQ0Usa0JBQUE7QURHRiIsImZpbGUiOiJsaWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9jb21wb25lbnRzL3BlcnNvbmFsLXNldHRpbmdzL3BlcnNvbmFsLXNldHRpbmdzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyxzdHJpbmctbm8tbmV3bGluZSAqL1xubnotZm9ybS1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuIiwiQGltcG9ydCAnfkBkZWxvbi90aGVtZS9zdHlsZXMvZGVmYXVsdCc7XG5cbm56LWZvcm0taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "../../libs/account/ng-alain/src/lib/components/personal-settings/personal-settings.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/personal-settings/personal-settings.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: PersonalSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalSettingsComponent", function() { return PersonalSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.account */ "../../packages/account/src/public-api.ts");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");






var PersonalSettingsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PersonalSettingsComponent, _super);
    function PersonalSettingsComponent(_fb, _store, _toasterService) {
        var _this = _super.call(this, _fb, _store, _toasterService) || this;
        _this._fb = _fb;
        _this._store = _store;
        _this._toasterService = _toasterService;
        return _this;
    }
    PersonalSettingsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }
    ]; };
    PersonalSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ng-alain-personal-settings-form',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-settings.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ng-alain/src/lib/components/personal-settings/personal-settings.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personal-settings.component.less */ "../../libs/account/ng-alain/src/lib/components/personal-settings/personal-settings.component.less")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], PersonalSettingsComponent);
    return PersonalSettingsComponent;
}(_abp_ng_account__WEBPACK_IMPORTED_MODULE_1__["PersonalSettingsComponent"]));



/***/ }),

/***/ "../../libs/account/ng-alain/src/lib/components/register/register.component.less":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/register/register.component.less ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n:host ::ng-deep h3 {\n  margin-bottom: 20px;\n  font-size: 16px;\n}\n:host ::ng-deep .submit {\n  width: 50%;\n}\n:host ::ng-deep .login {\n  float: right;\n  line-height: 40px;\n}\n::ng-deep .register-password-cdk .success,\n::ng-deep .register-password-cdk .warning,\n::ng-deep .register-password-cdk .error {\n  transition: color 0.3s;\n}\n::ng-deep .register-password-cdk .success {\n  color: #52c41a;\n}\n::ng-deep .register-password-cdk .warning {\n  color: #faad14;\n}\n::ng-deep .register-password-cdk .error {\n  color: #f5222d;\n}\n::ng-deep .register-password-cdk .progress-pass > .progress .ant-progress-bg {\n  background-color: #faad14;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvYWNjb3VudC9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmxlc3MiLCJsaWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9jb21wb25lbnRzL3JlZ2lzdGVyL0M6L1VzZXJzL1lpbkNoYW5nL0RvY3VtZW50cy9Xb3Jrcy9HaXRIdWIvYWJwLm5nL2xpYnMvYWNjb3VudC9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEZBQTRGO0FBQzVGLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FDRjdGO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FESUY7QUNQQTtFQU1NLG1CQUFBO0VBQ0EsZUFBQTtBRElOO0FDWEE7RUFVTSxVQUFBO0FESU47QUNkQTtFQWFNLFlBQUE7RUFDQSxpQkFBQTtBRElOO0FDQUE7OztFQUtNLHNCQUFBO0FEQU47QUNMQTtFQVFNLGNBQUE7QURBTjtBQ1JBO0VBV00sY0FBQTtBREFOO0FDWEE7RUFjTSxjQUFBO0FEQU47QUNkQTtFQWtCUSx5QkFBQTtBRERSIiwiZmlsZSI6ImxpYnMvYWNjb3VudC9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBhdC1ydWxlLWVtcHR5LWxpbmUtYmVmb3JlLGF0LXJ1bGUtbmFtZS1zcGFjZS1hZnRlcixhdC1ydWxlLW5vLXVua25vd24gKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzLHN0cmluZy1uby1uZXdsaW5lICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzY4cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIGgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zdWJtaXQge1xuICB3aWR0aDogNTAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5sb2dpbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG46Om5nLWRlZXAgLnJlZ2lzdGVyLXBhc3N3b3JkLWNkayAuc3VjY2Vzcyxcbjo6bmctZGVlcCAucmVnaXN0ZXItcGFzc3dvcmQtY2RrIC53YXJuaW5nLFxuOjpuZy1kZWVwIC5yZWdpc3Rlci1wYXNzd29yZC1jZGsgLmVycm9yIHtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbn1cbjo6bmctZGVlcCAucmVnaXN0ZXItcGFzc3dvcmQtY2RrIC5zdWNjZXNzIHtcbiAgY29sb3I6ICM1MmM0MWE7XG59XG46Om5nLWRlZXAgLnJlZ2lzdGVyLXBhc3N3b3JkLWNkayAud2FybmluZyB7XG4gIGNvbG9yOiAjZmFhZDE0O1xufVxuOjpuZy1kZWVwIC5yZWdpc3Rlci1wYXNzd29yZC1jZGsgLmVycm9yIHtcbiAgY29sb3I6ICNmNTIyMmQ7XG59XG46Om5nLWRlZXAgLnJlZ2lzdGVyLXBhc3N3b3JkLWNkayAucHJvZ3Jlc3MtcGFzcyA+IC5wcm9ncmVzcyAuYW50LXByb2dyZXNzLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYWQxNDtcbn1cbiIsIkBpbXBvcnQgJ35AZGVsb24vdGhlbWUvc3R5bGVzL2RlZmF1bHQnO1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDM2OHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgOjpuZy1kZWVwIHtcbiAgICBoMyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAuc3VibWl0IHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgIC5sb2dpbiB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBsaW5lLWhlaWdodDogQGJ0bi1oZWlnaHQtbGc7XG4gICAgfVxuICB9XG59XG46Om5nLWRlZXAge1xuICAucmVnaXN0ZXItcGFzc3dvcmQtY2RrIHtcbiAgICAuc3VjY2VzcyxcbiAgICAud2FybmluZyxcbiAgICAuZXJyb3Ige1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgICB9XG4gICAgLnN1Y2Nlc3Mge1xuICAgICAgY29sb3I6IEBzdWNjZXNzLWNvbG9yO1xuICAgIH1cbiAgICAud2FybmluZyB7XG4gICAgICBjb2xvcjogQHdhcm5pbmctY29sb3I7XG4gICAgfVxuICAgIC5lcnJvciB7XG4gICAgICBjb2xvcjogQGVycm9yLWNvbG9yO1xuICAgIH1cbiAgICAucHJvZ3Jlc3MtcGFzcyA+IC5wcm9ncmVzcyB7XG4gICAgICAuYW50LXByb2dyZXNzLWJnIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdhcm5pbmctY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "../../libs/account/ng-alain/src/lib/components/register/register.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/register/register.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _abp_ng_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.account */ "../../packages/account/src/public-api.ts");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");








var UserRegisterComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserRegisterComponent, _super);
    function UserRegisterComponent(_fb, _accountService, _oauthService, _store, _toasterService) {
        var _this = _super.call(this, _fb, _accountService, _oauthService, _store, _toasterService) || this;
        _this._fb = _fb;
        _this._accountService = _accountService;
        _this._oauthService = _oauthService;
        _this._store = _store;
        _this._toasterService = _toasterService;
        return _this;
    }
    UserRegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _abp_ng_account__WEBPACK_IMPORTED_MODULE_3__["AccountService"] },
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_5__["OAuthService"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
        { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }
    ]; };
    UserRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fs-register',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ng-alain/src/lib/components/register/register.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.less */ "../../libs/account/ng-alain/src/lib/components/register/register.component.less")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _abp_ng_account__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_5__["OAuthService"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}(_abp_ng_account__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]));



/***/ }),

/***/ "../../libs/account/ng-alain/src/lib/components/tenant-box/tenant-box.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/tenant-box/tenant-box.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: TenantBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantBoxComponent", function() { return TenantBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _abp_ng_account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @abp/ng.account */ "../../packages/account/src/public-api.ts");






var TenantBoxComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TenantBoxComponent, _super);
    function TenantBoxComponent(_store, _toasterService, _accountService) {
        var _this = _super.call(this, _store, _toasterService, _accountService) || this;
        _this._store = _store;
        _this._toasterService = _toasterService;
        _this._accountService = _accountService;
        return _this;
    }
    TenantBoxComponent.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ToasterService"] },
        { type: _abp_ng_account__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])
    ], TenantBoxComponent.prototype, "mainContentRef", void 0);
    TenantBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ng-alain-tenant-box',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tenant-box.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ng-alain/src/lib/components/tenant-box/tenant-box.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ToasterService"],
            _abp_ng_account__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])
    ], TenantBoxComponent);
    return TenantBoxComponent;
}(_abp_ng_account__WEBPACK_IMPORTED_MODULE_4__["TenantBoxComponent"]));



/***/ }),

/***/ "../../libs/account/src/index.ts":
/*!*********************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/src/index.ts ***!
  \*********************************************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_account_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/account.module */ "../../libs/account/src/lib/account.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return _lib_account_module__WEBPACK_IMPORTED_MODULE_1__["AccountModule"]; });





/***/ }),

/***/ "../../libs/account/src/lib/account.module.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/src/lib/account.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abp_ng_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.account */ "../../packages/account/src/public-api.ts");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm5/ngx-validate-core.js");




var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_abp_ng_account__WEBPACK_IMPORTED_MODULE_2__["AccountModule"]],
            exports: [_abp_ng_account__WEBPACK_IMPORTED_MODULE_2__["AccountModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_3__["NgxValidateCoreModule"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ng-alain/src/lib/components/auth-wrapper/auth-wrapper.component.html":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/auth-wrapper/auth-wrapper.component.html ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-alain-tenant-box [mainContentRef]=\"mainContentRef\">\r\n\r\n</ng-alain-tenant-box>\r\n\r\n<ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ng-alain/src/lib/components/change-password/change-password.component.html":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/change-password/change-password.component.html ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [mapErrorsFn]=\"mapErrorsFn\">\r\n  <nz-form-item>\r\n    <!--<nz-form-label nzRequired nzFor=\"current-password\">{{ 'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization }}</nz-form-label>-->\r\n    <nz-form-control>\r\n      <input nz-input type=\"password\" formControlName=\"password\" id=\"current-password\" placeholder=\"{{'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization}}\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <!--<nz-form-label nzRequired nzFor=\"new-password\">{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}</nz-form-label>-->\r\n    <nz-form-control>\r\n      <input nz-input type=\"password\" formControlName=\"newPassword\" id=\"new-password\" placeholder=\"{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <!--<nz-form-label nzRequired nzFor=\"confirm-new-password\">{{ 'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization }}</nz-form-label>-->\r\n    <nz-form-control>\r\n      <input nz-input type=\"password\" formControlName=\"repeatNewPassword\" id=\"confirm-new-password\" placeholder=\"{{ 'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization }}\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <button nz-button nzType=\"primary\">\r\n    {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}\r\n  </button>\r\n\r\n</form>\r\n\r\n\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ng-alain/src/lib/components/login/login.component.html":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/login/login.component.html ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-alain-auth-wrapper [mainContentRef]=\"mainContentRef\">\r\n  <ng-template #mainContentRef>\r\n    <form nz-form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" role=\"form\">\r\n      <nz-tabset [nzAnimated]=\"false\" class=\"tabs\">\r\n        <nz-tab [nzTitle]=\"'AbpAccount::Login' | abpLocalization\">\r\n          <nz-form-item>\r\n            <nz-form-control [nzErrorTip]=\"'Please enter mobile number!' | abpLocalization\">\r\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"user\">\r\n                <input nz-input formControlName=\"username\" placeholder=\"{{'AbpAccount::UserNameOrEmailAddress' | abpLocalization}}\" />\r\n              </nz-input-group>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control [nzErrorTip]=\"'Please enter password!' | abpLocalization\">\r\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"lock\">\r\n                <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"{{ 'AbpAccount::Password' | abpLocalization }}\" />\r\n              </nz-input-group>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </nz-tab>\r\n      </nz-tabset>\r\n      <nz-form-item>\r\n        <nz-col [nzSpan]=\"12\">\r\n          <label nz-checkbox formControlName=\"remember\">{{ 'AbpAccount::RememberMe' | abpLocalization }}</label>\r\n        </nz-col>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <button nz-button type=\"submit\" nzType=\"primary\" nzSize=\"large\" [nzLoading]=\"inProgress\" nzBlock>\r\n          {{ 'AbpAccount::Login' | abpLocalization }}\r\n        </button>\r\n      </nz-form-item>\r\n    </form>\r\n    <div class=\"other\">\r\n      <a class=\"register\" routerLink=\"/account/register\">{{ 'AbpAccount::Register' | abpLocalization }}</a>\r\n    </div>\r\n  </ng-template>\r\n</ng-alain-auth-wrapper>\r\n\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ng-alain/src/lib/components/manage-profile/manage-profile.component.html":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/manage-profile/manage-profile.component.html ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row entry-row\">\r\n  <div class=\"col-auto\"></div>\r\n  <div id=\"breadcrumb\" class=\"col-md-auto pl-md-0\"></div>\r\n  <div class=\"col\"></div>\r\n</div>\r\n<div class=\"main\">\r\n  <div class=\"menu\">\r\n    <ul nz-menu nzMode=\"inline\">\r\n      <li nz-menu-item [nzSelected]=\"selectedTab === 0\" (click)=\"selectedTab = 0\">\r\n        {{\r\n            'AbpUi::ChangePassword' | abpLocalization\r\n        }}\r\n      </li>\r\n      <li nz-menu-item [nzSelected]=\"selectedTab === 1\" (click)=\"selectedTab = 1\">\r\n        {{\r\n            'AbpAccount::PersonalSettings' | abpLocalization\r\n        }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"title\">{{ 'AbpAccount::ChangePassword' | abpLocalization }}</div>\r\n    <ng-alain-change-password-form *ngIf=\"selectedTab === 0\"></ng-alain-change-password-form>\r\n    <ng-alain-personal-settings-form *ngIf=\"selectedTab === 1\"></ng-alain-personal-settings-form>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ng-alain/src/lib/components/personal-settings/personal-settings.component.html":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/personal-settings/personal-settings.component.html ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form novalidate *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"username\">{{ 'AbpIdentity::DisplayName:UserName' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"userName\" id=\"username\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"name\" id=\"name\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"surname\">{{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"surname\" id=\"surname\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"email-address\">{{ 'AbpIdentity::DisplayName:Email' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"email\" id=\"email-address\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"phone-number\">{{ 'AbpIdentity::DisplayName:PhoneNumber' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"phoneNumber\" id=\"phone-number\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <button nz-button nzType=\"primary\">\r\n    {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}\r\n  </button>\r\n</form>\r\n\r\n\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ng-alain/src/lib/components/register/register.component.html":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/register/register.component.html ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-alain-auth-wrapper [mainContentRef]=\"mainContentRef\">\r\n  <ng-template #mainContentRef>\r\n    <h3>{{ 'AbpAccount::Register' | abpLocalization }}</h3>\r\n    <form nz-form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\">\r\n            <input nz-input formControlName=\"username\" placeholder=\"{{ 'AbpAccount::UserName' | abpLocalization }}\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\">\r\n            <input nz-input formControlName=\"email\" placeholder=\"{{ 'AbpAccount::EmailAddress' | abpLocalization }}\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\">\r\n            <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"{{ 'AbpAccount::Password' | abpLocalization }}\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <button nz-button nzType=\"primary\" nzSize=\"large\" type=\"submit\" [nzLoading]=\"inProgress\" class=\"submit\">\r\n          {{ 'AbpAccount::Register' | abpLocalization }}\r\n        </button>\r\n        <a class=\"login\" routerLink=\"/account/login\">{{ 'AbpAccount::Login' | abpLocalization }}</a>\r\n      </nz-form-item>\r\n    </form>\r\n  </ng-template>\r\n</ng-alain-auth-wrapper>\r\n\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/account/ng-alain/src/lib/components/tenant-box/tenant-box.component.html":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/account/ng-alain/src/lib/components/tenant-box/tenant-box.component.html ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <nz-card nzTitle=\"{{'AbpUiMultiTenancy::Tenant' | abpLocalization}} ({{ tenantName || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }}) \" [nzExtra]=\"extraTemplate\">\r\n    <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n  </nz-card>\r\n  <ng-template #extraTemplate>\r\n    <a id=\"AbpTenantSwitchLink\"\r\n       href=\"javascript:void(0);\"\r\n       class=\"btn btn-sm mt-3 btn-outline-primary\"\r\n       (click)=\"onSwitch()\">{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a>\r\n  </ng-template>\r\n\r\n  <nz-modal [nzStyle]=\"{ top: '20px' }\"\r\n            [(nzVisible)]=\"isModalVisible\"\r\n            [nzTitle]=\"modalTitle\"\r\n            [nzContent]=\"modalContent\"\r\n            [nzFooter]=\"modalFooter\"\r\n            (nzOnCancel)=\"isModalVisible=false\">\r\n    <ng-template #modalTitle>\r\n      Switch Tenan\r\n    </ng-template>\r\n\r\n    <ng-template #modalContent>\r\n      <ng-template #loaderRef>\r\n        <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n      </ng-template>\r\n\r\n      <form nz-form *ngIf=\"tenant; else loaderRef\"  (ngSubmit)=\"save()\">\r\n\r\n\r\n        <nz-form-item>\r\n          <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}</nz-form-label>\r\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzExtra=\"{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}\">\r\n            <input nz-input [(ngModel)]=\"tenant.name\" id=\"name\" name=\"name\" />\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n      </form>\r\n    </ng-template>\r\n\r\n    <ng-template #modalFooter>\r\n      <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n        {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n      </button>\r\n      <button nz-button nzType=\"primary\" (click)=\"save()\">\r\n        {{\r\n      'AbpTenantManagement::Save' | abpLocalization\r\n        }}\r\n      </button>\r\n    </ng-template>\r\n  </nz-modal>\r\n\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/auth-wrapper/auth-wrapper.component.html":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/auth-wrapper/auth-wrapper.component.html ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"mx-auto col col-md-5\">\r\n    <abp-tenant-box\r\n      *abpReplaceableTemplate=\"{ componentKey: 'Account.TenantBoxComponent' }\"\r\n    ></abp-tenant-box>\r\n\r\n    <div class=\"abp-account-container\">\r\n      <div class=\"card mt-3 shadow-sm rounded\">\r\n        <div class=\"card-body p-5\">\r\n          <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n        </div>\r\n        <ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/change-password/change-password.component.html":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/change-password/change-password.component.html ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [mapErrorsFn]=\"mapErrorsFn\" validateOnSubmit>\r\n  <div class=\"form-group\">\r\n    <label for=\"current-password\">{{\r\n      'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization\r\n    }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"current-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"password\"\r\n      autofocus\r\n      autocomplete=\"current-password\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"new-password\">{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"new-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"newPassword\"\r\n      autocomplete=\"new-password\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"confirm-new-password\">{{\r\n      'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization\r\n    }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"confirm-new-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"repeatNewPassword\"\r\n      autocomplete=\"new-password\"\r\n    />\r\n  </div>\r\n  <abp-button\r\n    iconClass=\"fa fa-check\"\r\n    buttonClass=\"btn btn-primary color-white\"\r\n    buttonType=\"submit\"\r\n    [loading]=\"inProgress\"\r\n    [disabled]=\"form?.invalid\"\r\n    >{{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r\n  >\r\n</form>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/login/login.component.html":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/login/login.component.html ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<abp-auth-wrapper\r\n  *abpReplaceableTemplate=\"{\r\n    componentKey: 'Account.AuthWrapperComponent',\r\n    inputs: {\r\n      mainContentRef: { value: mainContentRef },\r\n      cancelContentRef: { value: cancelContentRef }\r\n    }\r\n  }\"\r\n  [mainContentRef]=\"mainContentRef\"\r\n  [cancelContentRef]=\"cancelContentRef\"\r\n>\r\n</abp-auth-wrapper>\r\n<ng-template #mainContentRef>\r\n  <h4>{{ 'AbpAccount::Login' | abpLocalization }}</h4>\r\n  <strong>\r\n    {{ 'AbpAccount::AreYouANewUser' | abpLocalization }}\r\n    <a class=\"text-decoration-none\" routerLink=\"/account/register\">{{\r\n      'AbpAccount::Register' | abpLocalization\r\n    }}</a>\r\n  </strong>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" validateOnSubmit class=\"mt-4\">\r\n    <div class=\"form-group\">\r\n      <label for=\"login-input-user-name-or-email-address\">{{\r\n        'AbpAccount::UserNameOrEmailAddress' | abpLocalization\r\n      }}</label>\r\n      <input\r\n        class=\"form-control\"\r\n        type=\"text\"\r\n        id=\"login-input-user-name-or-email-address\"\r\n        formControlName=\"username\"\r\n        autocomplete=\"username\"\r\n        autofocus\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"login-input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label>\r\n      <input\r\n        class=\"form-control\"\r\n        type=\"password\"\r\n        id=\"login-input-password\"\r\n        formControlName=\"password\"\r\n        autocomplete=\"current-password\"\r\n      />\r\n    </div>\r\n    <div class=\"form-check\" validationTarget validationStyle>\r\n      <label class=\"form-check-label\" for=\"login-input-remember-me\">\r\n        <input\r\n          class=\"form-check-input\"\r\n          type=\"checkbox\"\r\n          id=\"login-input-remember-me\"\r\n          formControlName=\"remember\"\r\n        />\r\n        {{ 'AbpAccount::RememberMe' | abpLocalization }}\r\n      </label>\r\n    </div>\r\n    <abp-button\r\n      [loading]=\"inProgress\"\r\n      buttonType=\"submit\"\r\n      name=\"Action\"\r\n      buttonClass=\"btn-block btn-lg mt-3 btn btn-primary\"\r\n    >\r\n      {{ 'AbpAccount::Login' | abpLocalization }}\r\n    </abp-button>\r\n  </form>\r\n</ng-template>\r\n<ng-template #cancelContentRef>\r\n  <div class=\"card-footer text-center border-0\">\r\n    <a routerLink=\"/\">\r\n      <button type=\"button\" name=\"Action\" value=\"Cancel\" class=\"px-2 py-0 btn btn-link\">\r\n        {{ 'AbpAccount::Cancel' | abpLocalization }}\r\n      </button>\r\n    </a>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/manage-profile/manage-profile.component.html":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/manage-profile/manage-profile.component.html ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"AbpContentToolbar\"></div>\r\n\r\n<div class=\"card border-0 shadow-sm\">\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <ul class=\"nav flex-column nav-pills\" id=\"nav-tab\" role=\"tablist\">\r\n          <li class=\"nav-item\" (click)=\"selectedTab = 0\">\r\n            <a\r\n              class=\"nav-link\"\r\n              [ngClass]=\"{ active: selectedTab === 0 }\"\r\n              role=\"tab\"\r\n              href=\"javascript:void(0)\"\r\n              >{{ 'AbpUi::ChangePassword' | abpLocalization }}</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item\" (click)=\"selectedTab = 1\">\r\n            <a\r\n              class=\"nav-link\"\r\n              [ngClass]=\"{ active: selectedTab === 1 }\"\r\n              role=\"tab\"\r\n              href=\"javascript:void(0)\"\r\n              >{{ 'AbpAccount::PersonalSettings' | abpLocalization }}</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"tab-content\" *ngIf=\"selectedTab === 0\" [@fadeIn]>\r\n          <div class=\"tab-pane active\" role=\"tabpanel\">\r\n            <h4>\r\n              {{ 'AbpIdentity::ChangePassword' | abpLocalization }}\r\n              <hr />\r\n            </h4>\r\n            <abp-change-password-form\r\n              *abpReplaceableTemplate=\"{ componentKey: 'Account.ChangePasswordComponent' }\"\r\n            ></abp-change-password-form>\r\n          </div>\r\n        </div>\r\n        <div class=\"tab-content\" *ngIf=\"selectedTab === 1\" [@fadeIn]>\r\n          <div class=\"tab-pane active\" role=\"tabpanel\">\r\n            <h4>\r\n              {{ 'AbpIdentity::PersonalSettings' | abpLocalization }}\r\n              <hr />\r\n            </h4>\r\n            <abp-personal-settings-form\r\n              *abpReplaceableTemplate=\"{ componentKey: 'Account.PersonalSettingsComponent' }\"\r\n            ></abp-personal-settings-form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/personal-settings/personal-settings.component.html":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/personal-settings/personal-settings.component.html ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form validateOnSubmit *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">{{ 'AbpIdentity::DisplayName:UserName' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"text\"\r\n      id=\"username\"\r\n      class=\"form-control\"\r\n      formControlName=\"userName\"\r\n      autofocus\r\n      (keydown.space)=\"$event.preventDefault()\"\r\n    />\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label\r\n        ><input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"surname\">{{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</label\r\n        ><input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email-address\">{{ 'AbpIdentity::DisplayName:Email' | abpLocalization }}</label\r\n    ><span> * </span><input type=\"text\" id=\"email-address\" class=\"form-control\" formControlName=\"email\" />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"phone-number\">{{ 'AbpIdentity::DisplayName:PhoneNumber' | abpLocalization }}</label\r\n    ><input type=\"text\" id=\"phone-number\" class=\"form-control\" formControlName=\"phoneNumber\" />\r\n  </div>\r\n  <abp-button\r\n    buttonType=\"submit\"\r\n    iconClass=\"fa fa-check\"\r\n    buttonClass=\"btn btn-primary color-white\"\r\n    [loading]=\"inProgress\"\r\n    [disabled]=\"form?.invalid || form?.pristine\"\r\n  >\r\n    {{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r\n  >\r\n</form>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/register/register.component.html":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/register/register.component.html ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<abp-auth-wrapper\r\n  *abpReplaceableTemplate=\"{\r\n    componentKey: 'Account.AuthWrapperComponent',\r\n    inputs: {\r\n      mainContentRef: { value: mainContentRef }\r\n    }\r\n  }\"\r\n  [mainContentRef]=\"mainContentRef\"\r\n>\r\n</abp-auth-wrapper>\r\n<ng-template #mainContentRef>\r\n  <h4>{{ 'AbpAccount::Register' | abpLocalization }}</h4>\r\n  <strong>\r\n    {{ 'AbpAccount::AlreadyRegistered' | abpLocalization }}\r\n    <a class=\"text-decoration-none\" routerLink=\"/account/login\">{{\r\n      'AbpAccount::Login' | abpLocalization\r\n    }}</a>\r\n  </strong>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" validateOnSubmit class=\"mt-4\">\r\n    <div class=\"form-group\">\r\n      <label for=\"input-user-name\">{{ 'AbpAccount::UserName' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input\r\n        autofocus\r\n        type=\"text\"\r\n        id=\"input-user-name\"\r\n        class=\"form-control\"\r\n        formControlName=\"username\"\r\n        autocomplete=\"username\"\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"input-email-address\">{{ 'AbpAccount::EmailAddress' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input type=\"email\" id=\"input-email-address\" class=\"form-control\" formControlName=\"email\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input\r\n        type=\"password\"\r\n        id=\"input-password\"\r\n        class=\"form-control\"\r\n        formControlName=\"password\"\r\n        autocomplete=\"current-password\"\r\n      />\r\n    </div>\r\n    <abp-button\r\n      [loading]=\"inProgress\"\r\n      buttonType=\"submit\"\r\n      name=\"Action\"\r\n      buttonClass=\"btn-block btn-lg mt-3 btn btn-primary\"\r\n    >\r\n      {{ 'AbpAccount::Register' | abpLocalization }}\r\n    </abp-button>\r\n  </form>\r\n</ng-template>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/tenant-box/tenant-box.component.html":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/tenant-box/tenant-box.component.html ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card shadow-sm rounded mb-3\">\r\n  <div class=\"card-body px-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <span style=\"font-size: 0.8em;\" class=\"text-uppercase text-muted\">{{\r\n          'AbpUiMultiTenancy::Tenant' | abpLocalization\r\n        }}</span\r\n        ><br />\r\n        <h6 class=\"m-0 d-inline-block\">\r\n          <span>\r\n            {{ tenantName || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }}\r\n          </span>\r\n        </h6>\r\n      </div>\r\n      <div class=\"col-auto\">\r\n        <a\r\n          id=\"AbpTenantSwitchLink\"\r\n          href=\"javascript:void(0);\"\r\n          class=\"btn btn-sm mt-3 btn-outline-primary\"\r\n          (click)=\"onSwitch()\"\r\n          >{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"inProgress\">\r\n  <ng-template #abpHeader>\r\n    <h5>Switch Tenant</h5>\r\n  </ng-template>\r\n  <ng-template #abpBody>\r\n    <form (ngSubmit)=\"save()\">\r\n      <div class=\"mt-2\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}</label>\r\n          <input [(ngModel)]=\"tenant.name\" type=\"text\" id=\"name\" name=\"tenant\" class=\"form-control\" autofocus />\r\n        </div>\r\n        <p>{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}</p>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n  <ng-template #abpFooter>\r\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button buttonType=\"button\" buttonClass=\"btn btn-primary\" (click)=\"save()\">\r\n      <i class=\"fa fa-check mr-1\"></i> <span>{{ 'AbpTenantManagement::Save' | abpLocalization }}</span>\r\n    </abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n");

/***/ }),

/***/ "../../packages/account/src/lib/account-routing.module.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/account-routing.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "../../packages/account/src/lib/components/login/login.component.ts");
/* harmony import */ var _components_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/manage-profile/manage-profile.component */ "../../packages/account/src/lib/components/manage-profile/manage-profile.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "../../packages/account/src/lib/components/register/register.component.ts");







var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["DynamicLayoutComponent"],
        children: [
            {
                path: 'login',
                component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableRouteContainerComponent"],
                data: {
                    replaceableComponent: {
                        key: 'Account.LoginComponent',
                        defaultComponent: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                    },
                },
            },
            {
                path: 'register',
                component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableRouteContainerComponent"],
                data: {
                    replaceableComponent: {
                        key: 'Account.RegisterComponent',
                        defaultComponent: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                    },
                },
            },
            {
                path: 'manage-profile',
                component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableRouteContainerComponent"],
                canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                data: {
                    replaceableComponent: {
                        key: 'Account.ManageProfileComponent',
                        defaultComponent: _components_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_5__["ManageProfileComponent"],
                    },
                },
            },
        ],
    },
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "../../packages/account/src/lib/account.module.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/account.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm5/ngx-validate-core.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "../../node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-routing.module */ "../../packages/account/src/lib/account-routing.module.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "../../packages/account/src/lib/components/change-password/change-password.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "../../packages/account/src/lib/components/login/login.component.ts");
/* harmony import */ var _components_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/manage-profile/manage-profile.component */ "../../packages/account/src/lib/components/manage-profile/manage-profile.component.ts");
/* harmony import */ var _components_personal_settings_personal_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/personal-settings/personal-settings.component */ "../../packages/account/src/lib/components/personal-settings/personal-settings.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ "../../packages/account/src/lib/components/register/register.component.ts");
/* harmony import */ var _components_tenant_box_tenant_box_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tenant-box/tenant-box.component */ "../../packages/account/src/lib/components/tenant-box/tenant-box.component.ts");
/* harmony import */ var _components_auth_wrapper_auth_wrapper_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/auth-wrapper/auth-wrapper.component */ "../../packages/account/src/lib/components/auth-wrapper/auth-wrapper.component.ts");















var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _components_auth_wrapper_auth_wrapper_component__WEBPACK_IMPORTED_MODULE_14__["AuthWrapperComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _components_tenant_box_tenant_box_component__WEBPACK_IMPORTED_MODULE_13__["TenantBoxComponent"],
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"],
                _components_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_10__["ManageProfileComponent"],
                _components_personal_settings_personal_settings_component__WEBPACK_IMPORTED_MODULE_11__["PersonalSettingsComponent"],
            ],
            imports: [
                _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_7__["AccountRoutingModule"],
                _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
                _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__["NgxValidateCoreModule"],
            ],
            exports: [],
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "../../packages/account/src/lib/components/auth-wrapper/auth-wrapper.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/auth-wrapper/auth-wrapper.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: AuthWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthWrapperComponent", function() { return AuthWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AuthWrapperComponent = /** @class */ (function () {
    function AuthWrapperComponent() {
    }
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
            exportAs: 'abpAuthWrapper',
        })
    ], AuthWrapperComponent);
    return AuthWrapperComponent;
}());



/***/ }),

/***/ "../../packages/account/src/lib/components/change-password/change-password.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/change-password/change-password.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm5/ngx-validate-core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");









var minLength = _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength, required = _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, maxLength = _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength;
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
                    validators: [
                        required,
                        Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__["validatePassword"])(passwordRulesArr),
                        minLength(requiredLength),
                        maxLength(32),
                    ],
                },
            ],
            repeatNewPassword: [
                '',
                {
                    validators: [
                        required,
                        Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__["validatePassword"])(passwordRulesArr),
                        minLength(requiredLength),
                        maxLength(32),
                    ],
                },
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
                _this.toasterService.success('AbpAccount::PasswordChangedMessage', 'Success', {
                    life: 5000,
                });
            },
            error: function (err) {
                _this.toasterService.error(Object(snq__WEBPACK_IMPORTED_MODULE_7__["default"])(function () { return err.error.error.message; }, 'AbpAccount::DefaultErrorMessage'), 'Error', {
                    life: 7000,
                });
            },
        });
    };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
        { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }
    ]; };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'abp-change-password-form',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/change-password/change-password.component.html")).default,
            exportAs: 'abpChangePasswordForm',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "../../packages/account/src/lib/components/index.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: ChangePasswordComponent, LoginComponent, ManageProfileComponent, RegisterComponent, PersonalSettingsComponent, TenantBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password/change-password.component */ "../../packages/account/src/lib/components/change-password/change-password.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordComponent"]; });

/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "../../packages/account/src/lib/components/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]; });

/* harmony import */ var _manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-profile/manage-profile.component */ "../../packages/account/src/lib/components/manage-profile/manage-profile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManageProfileComponent", function() { return _manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_3__["ManageProfileComponent"]; });

/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "../../packages/account/src/lib/components/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]; });

/* harmony import */ var _personal_settings_personal_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-settings/personal-settings.component */ "../../packages/account/src/lib/components/personal-settings/personal-settings.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonalSettingsComponent", function() { return _personal_settings_personal_settings_component__WEBPACK_IMPORTED_MODULE_5__["PersonalSettingsComponent"]; });

/* harmony import */ var _tenant_box_tenant_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tenant-box/tenant-box.component */ "../../packages/account/src/lib/components/tenant-box/tenant-box.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantBoxComponent", function() { return _tenant_box_tenant_box_component__WEBPACK_IMPORTED_MODULE_6__["TenantBoxComponent"]; });










/***/ }),

/***/ "../../packages/account/src/lib/components/login/login.component.ts":
/*!********************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/login/login.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/router-plugin */ "../../node_modules/@ngxs/router-plugin/fesm5/ngxs-router-plugin.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");












var maxLength = _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength, minLength = _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength, required = _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required;
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
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(this.oauthService.fetchTokenUsingPasswordFlow(this.form.get('username').value, this.form.get('password').value, new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHeaders"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (tenant && tenant.id && { __tenant: tenant.id })))))
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
    return LoginComponent;
}());



/***/ }),

/***/ "../../packages/account/src/lib/components/manage-profile/manage-profile.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/manage-profile/manage-profile.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ManageProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProfileComponent", function() { return ManageProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");




var ManageProfileComponent = /** @class */ (function () {
    function ManageProfileComponent() {
        this.selectedTab = 0;
    }
    ManageProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'abp-manage-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-profile.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/account/src/lib/components/manage-profile/manage-profile.component.html")).default,
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]))])],
        })
    ], ManageProfileComponent);
    return ManageProfileComponent;
}());



/***/ }),

/***/ "../../packages/account/src/lib/components/personal-settings/personal-settings.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/personal-settings/personal-settings.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: PersonalSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalSettingsComponent", function() { return PersonalSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");








var maxLength = _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength, required = _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, email = _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email;
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
            var profile = _a[1];
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
            exportAs: 'abpPersonalSettingsForm',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]])
    ], PersonalSettingsComponent);
    return PersonalSettingsComponent;
}());



/***/ }),

/***/ "../../packages/account/src/lib/components/register/register.component.ts":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/register/register.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/router-plugin */ "../../node_modules/@ngxs/router-plugin/fesm5/ngxs-router-plugin.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/account.service */ "../../packages/account/src/lib/services/account.service.ts");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm5/ngx-validate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");














var maxLength = _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength, minLength = _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength, required = _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, email = _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email;
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(_this.oauthService.fetchTokenUsingPasswordFlow(newUser.userName, newUser.password, new _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHeaders"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (tenant && tenant.id && { __tenant: tenant.id })))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () { return _this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["GetAppConfiguration"]()); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () { return _this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_5__["Navigate"](['/'])); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(function (err) {
            _this.toasterService.error(Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])(function () { return err.error.error_description; }) ||
                Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])(function () { return err.error.error.message; }, 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(err);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { return (_this.inProgress = false); }))
            .subscribe();
    };
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
    return RegisterComponent;
}());



/***/ }),

/***/ "../../packages/account/src/lib/components/tenant-box/tenant-box.component.ts":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/components/tenant-box/tenant-box.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: TenantBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantBoxComponent", function() { return TenantBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ToasterService"],
            _services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]])
    ], TenantBoxComponent);
    return TenantBoxComponent;
}());



/***/ }),

/***/ "../../packages/account/src/lib/services/account.service.ts":
/*!************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/services/account.service.ts ***!
  \************************************************************************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");



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
    AccountService.ctorParameters = function () { return [
        { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
    ]; };
    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "../../packages/account/src/lib/services/index.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/services/index.ts ***!
  \**************************************************************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.service */ "../../packages/account/src/lib/services/account.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]; });





/***/ }),

/***/ "../../packages/account/src/lib/tokens/index.ts":
/*!************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/tokens/index.ts ***!
  \************************************************************************************************/
/*! exports provided: optionsFactory, ACCOUNT_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _options_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.token */ "../../packages/account/src/lib/tokens/options.token.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionsFactory", function() { return _options_token__WEBPACK_IMPORTED_MODULE_1__["optionsFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_OPTIONS", function() { return _options_token__WEBPACK_IMPORTED_MODULE_1__["ACCOUNT_OPTIONS"]; });





/***/ }),

/***/ "../../packages/account/src/lib/tokens/options.token.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/lib/tokens/options.token.ts ***!
  \********************************************************************************************************/
/*! exports provided: optionsFactory, ACCOUNT_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsFactory", function() { return optionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_OPTIONS", function() { return ACCOUNT_OPTIONS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


function optionsFactory(options) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ redirectUrl: '/' }, options);
}
var ACCOUNT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ACCOUNT_OPTIONS');


/***/ }),

/***/ "../../packages/account/src/public-api.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account/src/public-api.ts ***!
  \******************************************************************************************/
/*! exports provided: AccountModule, ChangePasswordComponent, LoginComponent, ManageProfileComponent, RegisterComponent, PersonalSettingsComponent, TenantBoxComponent, optionsFactory, ACCOUNT_OPTIONS, AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_account_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/account.module */ "../../packages/account/src/lib/account.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return _lib_account_module__WEBPACK_IMPORTED_MODULE_1__["AccountModule"]; });

/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/components */ "../../packages/account/src/lib/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManageProfileComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_2__["ManageProfileComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonalSettingsComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_2__["PersonalSettingsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantBoxComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_2__["TenantBoxComponent"]; });

/* harmony import */ var _lib_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/tokens */ "../../packages/account/src/lib/tokens/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionsFactory", function() { return _lib_tokens__WEBPACK_IMPORTED_MODULE_3__["optionsFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_OPTIONS", function() { return _lib_tokens__WEBPACK_IMPORTED_MODULE_3__["ACCOUNT_OPTIONS"]; });

/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services */ "../../packages/account/src/lib/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"]; });








/***/ }),

/***/ "./src/app/lazy-libs/account-wrapper.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/lazy-libs/account-wrapper.module.ts ***!
  \*****************************************************/
/*! exports provided: AccountWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountWrapperModule", function() { return AccountWrapperModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fs_account_ng_alain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fs/account/ng-alain */ "../../libs/account/ng-alain/src/index.ts");



var AccountWrapperModule = /** @class */ (function () {
    function AccountWrapperModule() {
    }
    AccountWrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_fs_account_ng_alain__WEBPACK_IMPORTED_MODULE_2__["AccountNgAlainModule"]]
        })
    ], AccountWrapperModule);
    return AccountWrapperModule;
}());



/***/ })

}]);
//# sourceMappingURL=lazy-libs-account-wrapper-module.js.map