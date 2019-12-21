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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-libs-tenant-management-wrapper-module"], {
        /***/ "../../libs/feature-management/ng-alain/src/index.ts": 
        /*!*****************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/feature-management/ng-alain/src/index.ts ***!
          \*****************************************************************************************************/
        /*! exports provided: FeatureManagementNgAlainModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/index */ "../../libs/feature-management/ng-alain/src/lib/index.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureManagementNgAlainModule", function () { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["FeatureManagementNgAlainModule"]; });
            /***/ 
        }),
        /***/ "../../libs/feature-management/ng-alain/src/lib/components/feature-management/feature-management.component.ts": 
        /*!**************************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/feature-management/ng-alain/src/lib/components/feature-management/feature-management.component.ts ***!
          \**************************************************************************************************************************************************************/
        /*! exports provided: FeatureManagementComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureManagementComponent", function () { return FeatureManagementComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            /* harmony import */ var _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.feature-management */ "../../packages/feature-management/src/public-api.ts");
            var FeatureManagementComponent = /** @class */ (function (_super) {
                __extends(FeatureManagementComponent, _super);
                function FeatureManagementComponent(_store) {
                    var _this = _super.call(this, _store) || this;
                    _this._store = _store;
                    return _this;
                }
                Object.defineProperty(FeatureManagementComponent.prototype, "visible", {
                    get: function () {
                        return this._visible;
                    },
                    set: function (value) {
                        this._visible = value;
                        this.visibleChange.emit(value);
                        if (value)
                            this.openModal();
                    },
                    enumerable: true,
                    configurable: true
                });
                return FeatureManagementComponent;
            }(_abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_3__["FeatureManagementComponent"]));
            FeatureManagementComponent.ctorParameters = function () { return [
                { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], FeatureManagementComponent.prototype, "providerKey", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], FeatureManagementComponent.prototype, "providerName", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
            ], FeatureManagementComponent.prototype, "visible", null);
            FeatureManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'ng-alain-feature-management',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feature-management.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature-management/ng-alain/src/lib/components/feature-management/feature-management.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
            ], FeatureManagementComponent);
            /***/ 
        }),
        /***/ "../../libs/feature-management/ng-alain/src/lib/feature-management-ng-alain.module.ts": 
        /*!**************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/feature-management/ng-alain/src/lib/feature-management-ng-alain.module.ts ***!
          \**************************************************************************************************************************************/
        /*! exports provided: FeatureManagementNgAlainModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureManagementNgAlainModule", function () { return FeatureManagementNgAlainModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _fs_feature_management__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fs/feature-management */ "../../libs/feature-management/src/index.ts");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../node_modules/@abp/ng.core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fs/ng-alain/basic */ "../../themes/ng-alain/basic/src/index.ts");
            /* harmony import */ var _components_feature_management_feature_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/feature-management/feature-management.component */ "../../libs/feature-management/ng-alain/src/lib/components/feature-management/feature-management.component.ts");
            var FeatureManagementNgAlainModule = /** @class */ (function () {
                function FeatureManagementNgAlainModule() {
                }
                return FeatureManagementNgAlainModule;
            }());
            FeatureManagementNgAlainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [_components_feature_management_feature_management_component__WEBPACK_IMPORTED_MODULE_5__["FeatureManagementComponent"]],
                    imports: [
                        _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                        _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_4__["NgAlainBasicModule"],
                        _fs_feature_management__WEBPACK_IMPORTED_MODULE_1__["FeatureManagementModule"]
                    ],
                    exports: [_components_feature_management_feature_management_component__WEBPACK_IMPORTED_MODULE_5__["FeatureManagementComponent"]]
                })
            ], FeatureManagementNgAlainModule);
            /***/ 
        }),
        /***/ "../../libs/feature-management/ng-alain/src/lib/index.ts": 
        /*!*********************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/feature-management/ng-alain/src/lib/index.ts ***!
          \*********************************************************************************************************/
        /*! exports provided: FeatureManagementNgAlainModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _feature_management_ng_alain_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature-management-ng-alain.module */ "../../libs/feature-management/ng-alain/src/lib/feature-management-ng-alain.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureManagementNgAlainModule", function () { return _feature_management_ng_alain_module__WEBPACK_IMPORTED_MODULE_1__["FeatureManagementNgAlainModule"]; });
            /***/ 
        }),
        /***/ "../../libs/feature-management/src/index.ts": 
        /*!********************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/feature-management/src/index.ts ***!
          \********************************************************************************************/
        /*! exports provided: FeatureManagementModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _lib_feature_management_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/feature-management.module */ "../../libs/feature-management/src/lib/feature-management.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureManagementModule", function () { return _lib_feature_management_module__WEBPACK_IMPORTED_MODULE_1__["FeatureManagementModule"]; });
            /***/ 
        }),
        /***/ "../../libs/feature-management/src/lib/feature-management.module.ts": 
        /*!********************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/feature-management/src/lib/feature-management.module.ts ***!
          \********************************************************************************************************************/
        /*! exports provided: FeatureManagementModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureManagementModule", function () { return FeatureManagementModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.feature-management */ "../../packages/feature-management/src/public-api.ts");
            var FeatureManagementModule = /** @class */ (function () {
                function FeatureManagementModule() {
                }
                return FeatureManagementModule;
            }());
            FeatureManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_2__["FeatureManagementModule"]],
                    exports: [_abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_2__["FeatureManagementModule"]]
                })
            ], FeatureManagementModule);
            /***/ 
        }),
        /***/ "../../libs/tenant-management/ng-alain/src/index.ts": 
        /*!****************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/tenant-management/ng-alain/src/index.ts ***!
          \****************************************************************************************************/
        /*! exports provided: TenantManagementNgAlainModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/index */ "../../libs/tenant-management/ng-alain/src/lib/index.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantManagementNgAlainModule", function () { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["TenantManagementNgAlainModule"]; });
            /***/ 
        }),
        /***/ "../../libs/tenant-management/ng-alain/src/lib/components/tenants/tenants.component.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/tenant-management/ng-alain/src/lib/components/tenants/tenants.component.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: TenantsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantsComponent", function () { return TenantsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _abp_ng_tenant_management__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.tenant-management */ "../../packages/tenant-management/src/public-api.ts");
            /* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            var TenantsComponent = /** @class */ (function (_super) {
                __extends(TenantsComponent, _super);
                function TenantsComponent(_confirmationService, _tenantService, _fb, _store) {
                    var _this = _super.call(this, _confirmationService, _tenantService, _fb, _store) || this;
                    _this._confirmationService = _confirmationService;
                    _this._tenantService = _tenantService;
                    _this._fb = _fb;
                    _this._store = _store;
                    return _this;
                }
                return TenantsComponent;
            }(_abp_ng_tenant_management__WEBPACK_IMPORTED_MODULE_1__["TenantsComponent"]));
            TenantsComponent.ctorParameters = function () { return [
                { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] },
                { type: _abp_ng_tenant_management__WEBPACK_IMPORTED_MODULE_1__["TenantManagementService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
                { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
            ]; };
            TenantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'ng-alain-tenants',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tenants.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/tenant-management/ng-alain/src/lib/components/tenants/tenants.component.html")).default,
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
                    _abp_ng_tenant_management__WEBPACK_IMPORTED_MODULE_1__["TenantManagementService"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
            ], TenantsComponent);
            /***/ 
        }),
        /***/ "../../libs/tenant-management/ng-alain/src/lib/index.ts": 
        /*!********************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/tenant-management/ng-alain/src/lib/index.ts ***!
          \********************************************************************************************************/
        /*! exports provided: TenantManagementNgAlainModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _tenant_management_ng_alain_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenant-management-ng-alain.module */ "../../libs/tenant-management/ng-alain/src/lib/tenant-management-ng-alain.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantManagementNgAlainModule", function () { return _tenant_management_ng_alain_module__WEBPACK_IMPORTED_MODULE_1__["TenantManagementNgAlainModule"]; });
            /***/ 
        }),
        /***/ "../../libs/tenant-management/ng-alain/src/lib/tenant-management-ng-alain-routing.module.ts": 
        /*!********************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/tenant-management/ng-alain/src/lib/tenant-management-ng-alain-routing.module.ts ***!
          \********************************************************************************************************************************************/
        /*! exports provided: TenantManagementNgAlainRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementNgAlainRoutingModule", function () { return TenantManagementNgAlainRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.core */ "../../node_modules/@abp/ng.core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fs/ng-alain/basic */ "../../themes/ng-alain/basic/src/index.ts");
            /* harmony import */ var _components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tenants/tenants.component */ "../../libs/tenant-management/ng-alain/src/lib/components/tenants/tenants.component.ts");
            var routes = [
                { path: '', redirectTo: 'tenants', pathMatch: 'full' },
                {
                    path: 'tenants',
                    component: _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_4__["LayoutDefaultComponent"],
                    canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]],
                    data: { requiredPolicy: 'AbpTenantManagement.Tenants' },
                    children: [{ path: '', component: _components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_5__["TenantsComponent"] }],
                },
            ];
            var TenantManagementNgAlainRoutingModule = /** @class */ (function () {
                function TenantManagementNgAlainRoutingModule() {
                }
                return TenantManagementNgAlainRoutingModule;
            }());
            TenantManagementNgAlainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], TenantManagementNgAlainRoutingModule);
            /***/ 
        }),
        /***/ "../../libs/tenant-management/ng-alain/src/lib/tenant-management-ng-alain.module.ts": 
        /*!************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/tenant-management/ng-alain/src/lib/tenant-management-ng-alain.module.ts ***!
          \************************************************************************************************************************************/
        /*! exports provided: TenantManagementNgAlainModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementNgAlainModule", function () { return TenantManagementNgAlainModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _fs_tenant_management__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fs/tenant-management */ "../../libs/tenant-management/src/index.ts");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../node_modules/@abp/ng.core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fs/ng-alain/basic */ "../../themes/ng-alain/basic/src/index.ts");
            /* harmony import */ var _tenant_management_ng_alain_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tenant-management-ng-alain-routing.module */ "../../libs/tenant-management/ng-alain/src/lib/tenant-management-ng-alain-routing.module.ts");
            /* harmony import */ var _components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tenants/tenants.component */ "../../libs/tenant-management/ng-alain/src/lib/components/tenants/tenants.component.ts");
            /* harmony import */ var _fs_feature_management_ng_alain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fs/feature-management/ng-alain */ "../../libs/feature-management/ng-alain/src/index.ts");
            var TenantManagementNgAlainModule = /** @class */ (function () {
                function TenantManagementNgAlainModule() {
                }
                return TenantManagementNgAlainModule;
            }());
            TenantManagementNgAlainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [_components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_6__["TenantsComponent"]],
                    imports: [
                        _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                        _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_4__["NgAlainBasicModule"],
                        _tenant_management_ng_alain_routing_module__WEBPACK_IMPORTED_MODULE_5__["TenantManagementNgAlainRoutingModule"],
                        _fs_tenant_management__WEBPACK_IMPORTED_MODULE_1__["TenantManagementModule"],
                        _fs_feature_management_ng_alain__WEBPACK_IMPORTED_MODULE_7__["FeatureManagementNgAlainModule"]
                    ]
                })
            ], TenantManagementNgAlainModule);
            /***/ 
        }),
        /***/ "../../libs/tenant-management/src/index.ts": 
        /*!*******************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/tenant-management/src/index.ts ***!
          \*******************************************************************************************/
        /*! exports provided: TenantManagementModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _lib_tenant_management_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/tenant-management.module */ "../../libs/tenant-management/src/lib/tenant-management.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantManagementModule", function () { return _lib_tenant_management_module__WEBPACK_IMPORTED_MODULE_1__["TenantManagementModule"]; });
            /***/ 
        }),
        /***/ "../../libs/tenant-management/src/lib/tenant-management.module.ts": 
        /*!******************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/tenant-management/src/lib/tenant-management.module.ts ***!
          \******************************************************************************************************************/
        /*! exports provided: TenantManagementModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementModule", function () { return TenantManagementModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _abp_ng_tenant_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.tenant-management */ "../../packages/tenant-management/src/public-api.ts");
            /* harmony import */ var _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.feature-management */ "../../packages/feature-management/src/public-api.ts");
            /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "../../node_modules/primeng/table.js");
            /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
            var TenantManagementModule = /** @class */ (function () {
                function TenantManagementModule() {
                }
                return TenantManagementModule;
            }());
            TenantManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_abp_ng_tenant_management__WEBPACK_IMPORTED_MODULE_2__["TenantManagementModule"]],
                    exports: [
                        primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                        _abp_ng_tenant_management__WEBPACK_IMPORTED_MODULE_2__["TenantManagementModule"],
                        _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_3__["FeatureManagementModule"]
                    ]
                })
            ], TenantManagementModule);
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/feature-management/ng-alain/src/lib/components/feature-management/feature-management.component.html": 
        /*!****************************************************************************************************************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/feature-management/ng-alain/src/lib/components/feature-management/feature-management.component.html ***!
          \****************************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nz-modal [(nzVisible)]=\"visible\"\r\n          [nzTitle]=\"modalTitle\"\r\n          [nzContent]=\"modalContent\"\r\n          [nzFooter]=\"modalFooter\"\r\n          (nzOnCancel)=\"visible=false\"\r\n>\r\n  <ng-template #modalTitle>\r\n    <h3>{{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #modalContent>\r\n    <ng-template #loaderRef>\r\n      <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n    </ng-template>\r\n\r\n    <form nz-form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n\r\n\r\n      <div class=\"row my-3\"\r\n           *ngFor=\"let feature of features$ | async; let i = index\"\r\n           [ngSwitch]=\"feature.valueType.name\">\r\n        <div class=\"col-4\">{{ feature.name }}</div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'ToggleStringValueType'\">\r\n          <input type=\"checkbox\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'FreeTextStringValueType'\">\r\n          <input type=\"text\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #modalFooter>\r\n    <button nz-button nzType=\"default\" (click)=\"visible=false\">\r\n      {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"save()\">\r\n      {{\r\n      'AbpFeatureManagement::Save' | abpLocalization\r\n      }}\r\n    </button>\r\n  </ng-template>\r\n</nz-modal>\r\n");
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/tenant-management/ng-alain/src/lib/components/tenants/tenants.component.html": 
        /*!*****************************************************************************************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/tenant-management/ng-alain/src/lib/components/tenants/tenants.component.html ***!
          \*****************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<page-header [title]=\"'AbpTenantManagement::Tenants' | abpLocalization\"></page-header>\r\n<nz-card [nzBordered]=\"false\">\r\n  <button nz-button [abpPermission]=\"'AbpTenantManagement.Tenants.Create'\" (click)=\"addTenant()\" [nzType]=\"'primary'\">\r\n    <i nz-icon nzType=\"plus\"></i>\r\n    <span>{{ 'AbpTenantManagement::NewTenant' | abpLocalization }}</span>\r\n  </button>\r\n  <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n    <label>\r\n      <input type=\"search\" class=\"form-control form-control-sm\" [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n        (input.debounce)=\"onSearch($event.target.value)\" />\r\n    </label>\r\n  </div>\r\n  <p-table *ngIf=\"[150, 0] as columnWidths\" [value]=\"data$ | async\" [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n    [lazy]=\"true\" [lazyLoadOnInit]=\"false\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalCount$ | async\"\r\n    [loading]=\"loading\" [resizableColumns]=\"true\" [scrollable]=\"true\" (onLazyLoad)=\"onPageChange($event)\">\r\n    <ng-template pTemplate=\"colgroup\">\r\n      <colgroup>\r\n        <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n      </colgroup>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"emptymessage\" let-columns>\r\n      <tr abp-table-empty-message [attr.colspan]=\"columnWidths.length\" localizationResource=\"AbpTenantManagement\"\r\n        localizationProp=\"NoDataAvailableInDatatable\"></tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n      <tr>\r\n        <th>{{ 'AbpTenantManagement::Actions' | abpLocalization }}</th>\r\n        <th pResizableColumn (click)=\"sortOrderIcon.sort('name')\">\r\n          {{ 'AbpTenantManagement::TenantName' | abpLocalization }}\r\n          <abp-sort-order-icon #sortOrderIcon key=\"name\" [(selectedKey)]=\"sortKey\" [(order)]=\"sortOrder\">\r\n          </abp-sort-order-icon>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-data>\r\n      <tr>\r\n        <td>\r\n          <a nz-dropdown [nzDropdownMenu]=\"opMenu\">\r\n            {{ 'AbpTenantManagement::Actions' | abpLocalization }}\r\n            <i nz-icon nzType=\"down\"></i>\r\n          </a>\r\n          <nz-dropdown-menu #opMenu=\"nzDropdownMenu\">\r\n            <ul nz-menu>\r\n              <li nz-menu-item [abpPermission]=\"'AbpTenantManagement.Tenants.Update'\" (click)=\"editTenant(data.id)\">\r\n                {{ 'AbpTenantManagement::Edit' | abpLocalization }}</li>\r\n              <li nz-menu-item [abpPermission]=\"'AbpTenantManagement.Tenants.ManageConnectionStrings'\"\r\n                (click)=\"onEditConnectionString(data.id)\">\r\n                {{ 'AbpTenantManagement::Permission:ManageConnectionStrings' | abpLocalization }}</li>\r\n              <li nz-menu-item [abpPermission]=\"'AbpTenantManagement.Tenants.ManageFeatures'\"\r\n                (click)=\"providerKey = data.id; visibleFeatures = true\">\r\n                {{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}</li>\r\n              <li nz-menu-item [abpPermission]=\"'AbpTenantManagement.Tenants.Delete'\"\r\n                (click)=\"delete(data.id, data.name)\">{{ 'AbpTenantManagement::Delete' | abpLocalization }}</li>\r\n            </ul>\r\n          </nz-dropdown-menu>\r\n        </td>\r\n        <td>{{ data.name }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</nz-card>\r\n\r\n<nz-modal [(nzVisible)]=\"isModalVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n  (nzOnCancel)=\"isModalVisible=false\">\r\n  <ng-template #modalTitle>\r\n    {{ selectedModalContent.title | abpLocalization }}\r\n  </ng-template>\r\n\r\n  <ng-template #modalContent>\r\n    <ng-container *ngTemplateOutlet=\"selectedModalContent?.template\"></ng-container>\r\n  </ng-template>\r\n\r\n  <ng-template #modalFooter>\r\n    <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"save()\">\r\n      {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n      }}\r\n    </button>\r\n  </ng-template>\r\n</nz-modal>\r\n\r\n\r\n\r\n<ng-template #tenantModalTemplate>\r\n  <form [formGroup]=\"tenantForm\" (ngSubmit)=\"save()\">\r\n    <nz-form-item>\r\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"role-name\">\r\n        {{ 'AbpTenantManagement::TenantName' | abpLocalization }}</nz-form-label>\r\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n        <input nz-input formControlName=\"name\" />\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #connectionStringModalTemplate>\r\n  <form [formGroup]=\"defaultConnectionStringForm\" (ngSubmit)=\"save()\">\r\n    <nz-form-item>\r\n      <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\r\n        <label nz-checkbox formControlName=\"useSharedDatabase\">\r\n          <span>\r\n            {{\r\n                  'AbpTenantManagement::DisplayName:UseSharedDatabase' | abpLocalization\r\n            }}\r\n          </span>\r\n        </label>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item *ngIf=\"!useSharedDatabase\">\r\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"defaultConnectionString\">\r\n        {{ 'AbpTenantManagement::DisplayName:DefaultConnectionString' | abpLocalization }}</nz-form-label>\r\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n        <input nz-input formControlName=\"defaultConnectionString\" id=\"defaultConnectionString\" />\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-alain-feature-management [(visible)]=\"visibleFeatures\" providerName=\"T\" [providerKey]=\"providerKey\">\r\n</ng-alain-feature-management>");
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/feature-management/src/lib/components/feature-management/feature-management.component.html": 
        /*!***********************************************************************************************************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/components/feature-management/feature-management.component.html ***!
          \***********************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<abp-modal size=\"md\" [(visible)]=\"visible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ 'AbpFeatureManagement::Features' | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <form *ngIf=\"form\" (ngSubmit)=\"save()\" [formGroup]=\"form\" validateOnSubmit>\r\n      <div\r\n        class=\"row my-3\"\r\n        *ngFor=\"let feature of features$ | async; let i = index\"\r\n        [ngSwitch]=\"feature.valueType.name\"\r\n      >\r\n        <div class=\"col-4\">{{ feature.name }}</div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'ToggleStringValueType'\">\r\n          <input type=\"checkbox\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'FreeTextStringValueType'\">\r\n          <input type=\"text\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!(features$ | async)?.length\">\r\n        {{ 'AbpFeatureManagement::NoFeatureFoundMessage' | abpLocalization }}\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <ng-container *ngIf=\"(features$ | async)?.length\">\r\n      <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n        {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid || modalBusy\" (click)=\"save()\">\r\n        {{ 'AbpFeatureManagement::Save' | abpLocalization }}\r\n      </abp-button>\r\n    </ng-container>\r\n  </ng-template>\r\n</abp-modal>\r\n");
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/tenant-management/src/lib/components/tenants/tenants.component.html": 
        /*!************************************************************************************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/components/tenants/tenants.component.html ***!
          \************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpTenantManagement::Tenants' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpTenantManagement.Tenants.Create'\"\r\n          id=\"create-tenants\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"addTenant()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpTenantManagement::NewTenant' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <label\r\n        ><input\r\n          type=\"search\"\r\n          class=\"form-control form-control-sm\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          (input.debounce)=\"onSearch($event.target.value)\"\r\n      /></label>\r\n    </div>\r\n    <p-table\r\n      *ngIf=\"[150, 0] as columnWidths\"\r\n      [value]=\"data$ | async\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [lazy]=\"true\"\r\n      [lazyLoadOnInit]=\"false\"\r\n      [paginator]=\"true\"\r\n      [rows]=\"10\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [loading]=\"loading\"\r\n      [resizableColumns]=\"true\"\r\n      [scrollable]=\"true\"\r\n      (onLazyLoad)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template pTemplate=\"colgroup\">\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"emptymessage\" let-columns>\r\n        <tr\r\n          abp-table-empty-message\r\n          [attr.colspan]=\"columnWidths.length\"\r\n          localizationResource=\"AbpTenantManagement\"\r\n          localizationProp=\"NoDataAvailableInDatatable\"\r\n        ></tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th>{{ 'AbpTenantManagement::Actions' | abpLocalization }}</th>\r\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('name')\">\r\n            {{ 'AbpTenantManagement::TenantName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              key=\"name\"\r\n              [(selectedKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpTenantManagement::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"editTenant(data.id)\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.ManageConnectionStrings'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"onEditConnectionString(data.id)\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Permission:ManageConnectionStrings' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.ManageFeatures'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"providerKey = data.id; visibleFeatures = true\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.name)\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>{{ data.name }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ selectedModalContent.title | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-container *ngTemplateOutlet=\"selectedModalContent?.template\"></ng-container>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"isDisabledSaveButton\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<ng-template #tenantModalTemplate>\r\n  <form [formGroup]=\"tenantForm\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <div class=\"mt-2\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">{{ 'AbpTenantManagement::TenantName' | abpLocalization }}</label>\r\n        <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" autofocus />\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #connectionStringModalTemplate>\r\n  <form [formGroup]=\"defaultConnectionStringForm\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <div class=\"form-group\">\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          id=\"useSharedDatabase\"\r\n          type=\"checkbox\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"useSharedDatabase\"\r\n          autofocus\r\n          (ngModelChange)=\"onSharedDatabaseChange($event)\"\r\n        />\r\n        <label for=\"useSharedDatabase\" class=\"custom-control-label\">{{\r\n          'AbpTenantManagement::DisplayName:UseSharedDatabase' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"!useSharedDatabase\">\r\n      <label for=\"defaultConnectionString\">{{\r\n        'AbpTenantManagement::DisplayName:DefaultConnectionString' | abpLocalization\r\n      }}</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"defaultConnectionString\"\r\n        class=\"form-control\"\r\n        formControlName=\"defaultConnectionString\"\r\n      />\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<abp-feature-management [(visible)]=\"visibleFeatures\" providerName=\"T\" [providerKey]=\"providerKey\">\r\n</abp-feature-management>\r\n");
            /***/ 
        }),
        /***/ "../../packages/feature-management/src/lib/actions/feature-management.actions.ts": 
        /*!*********************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/actions/feature-management.actions.ts ***!
          \*********************************************************************************************************************************/
        /*! exports provided: GetFeatures, UpdateFeatures */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFeatures", function () { return GetFeatures; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFeatures", function () { return UpdateFeatures; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            var GetFeatures = /** @class */ (function () {
                function GetFeatures(payload) {
                    this.payload = payload;
                }
                return GetFeatures;
            }());
            GetFeatures.type = '[FeatureManagement] Get Features';
            var UpdateFeatures = /** @class */ (function () {
                function UpdateFeatures(payload) {
                    this.payload = payload;
                }
                return UpdateFeatures;
            }());
            UpdateFeatures.type = '[FeatureManagement] Update Features';
            /***/ 
        }),
        /***/ "../../packages/feature-management/src/lib/actions/index.ts": 
        /*!************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/actions/index.ts ***!
          \************************************************************************************************************/
        /*! exports provided: GetFeatures, UpdateFeatures */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _feature_management_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature-management.actions */ "../../packages/feature-management/src/lib/actions/feature-management.actions.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFeatures", function () { return _feature_management_actions__WEBPACK_IMPORTED_MODULE_1__["GetFeatures"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateFeatures", function () { return _feature_management_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateFeatures"]; });
            /***/ 
        }),
        /***/ "../../packages/feature-management/src/lib/components/feature-management/feature-management.component.ts": 
        /*!*********************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/components/feature-management/feature-management.component.ts ***!
          \*********************************************************************************************************************************************************/
        /*! exports provided: FeatureManagementComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureManagementComponent", function () { return FeatureManagementComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions */ "../../packages/feature-management/src/lib/actions/index.ts");
            /* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../states */ "../../packages/feature-management/src/lib/states/index.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
            var FeatureManagementComponent = /** @class */ (function () {
                function FeatureManagementComponent(store) {
                    this.store = store;
                    this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.modalBusy = false;
                }
                Object.defineProperty(FeatureManagementComponent.prototype, "visible", {
                    get: function () {
                        return this._visible;
                    },
                    set: function (value) {
                        this._visible = value;
                        this.visibleChange.emit(value);
                        if (value)
                            this.openModal();
                    },
                    enumerable: true,
                    configurable: true
                });
                FeatureManagementComponent.prototype.openModal = function () {
                    if (!this.providerKey || !this.providerName) {
                        throw new Error('Provider Key and Provider Name are required.');
                    }
                    this.getFeatures();
                };
                FeatureManagementComponent.prototype.getFeatures = function () {
                    var _this = this;
                    this.store
                        .dispatch(new _actions__WEBPACK_IMPORTED_MODULE_4__["GetFeatures"]({
                        providerKey: this.providerKey,
                        providerName: this.providerName,
                    }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])('FeatureManagementState', 'features'))
                        .subscribe(function (features) {
                        _this.buildForm(features);
                    });
                };
                FeatureManagementComponent.prototype.buildForm = function (features) {
                    var formGroupObj = {};
                    for (var i = 0; i < features.length; i++) {
                        formGroupObj[i] = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](features[i].value === 'false' ? null : features[i].value);
                    }
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"](formGroupObj);
                };
                FeatureManagementComponent.prototype.save = function () {
                    var _this = this;
                    if (this.modalBusy)
                        return;
                    this.modalBusy = true;
                    var features = this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_5__["FeatureManagementState"].getFeatures);
                    features = features.map(function (feature, i) { return ({
                        name: feature.name,
                        value: !_this.form.value[i] || _this.form.value[i] === 'false' ? null : _this.form.value[i],
                    }); });
                    this.store
                        .dispatch(new _actions__WEBPACK_IMPORTED_MODULE_4__["UpdateFeatures"]({
                        providerKey: this.providerKey,
                        providerName: this.providerName,
                        features: features,
                    }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return (_this.modalBusy = false); }))
                        .subscribe(function () {
                        _this.visible = false;
                    });
                };
                return FeatureManagementComponent;
            }());
            FeatureManagementComponent.ctorParameters = function () { return [
                { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], FeatureManagementComponent.prototype, "providerKey", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], FeatureManagementComponent.prototype, "providerName", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
            ], FeatureManagementComponent.prototype, "visible", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], FeatureManagementComponent.prototype, "visibleChange", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_states__WEBPACK_IMPORTED_MODULE_5__["FeatureManagementState"].getFeatures),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
            ], FeatureManagementComponent.prototype, "features$", void 0);
            FeatureManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'abp-feature-management',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feature-management.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/feature-management/src/lib/components/feature-management/feature-management.component.html")).default,
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
            ], FeatureManagementComponent);
            /***/ 
        }),
        /***/ "../../packages/feature-management/src/lib/components/index.ts": 
        /*!***************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/components/index.ts ***!
          \***************************************************************************************************************/
        /*! exports provided: FeatureManagementComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _feature_management_feature_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature-management/feature-management.component */ "../../packages/feature-management/src/lib/components/feature-management/feature-management.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureManagementComponent", function () { return _feature_management_feature_management_component__WEBPACK_IMPORTED_MODULE_1__["FeatureManagementComponent"]; });
            /***/ 
        }),
        /***/ "../../packages/feature-management/src/lib/feature-management.module.ts": 
        /*!************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/feature-management.module.ts ***!
          \************************************************************************************************************************/
        /*! exports provided: FeatureManagementModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureManagementModule", function () { return FeatureManagementModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../node_modules/@abp/ng.core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _components_feature_management_feature_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/feature-management/feature-management.component */ "../../packages/feature-management/src/lib/components/feature-management/feature-management.component.ts");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            /* harmony import */ var _states_feature_management_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./states/feature-management.state */ "../../packages/feature-management/src/lib/states/feature-management.state.ts");
            var FeatureManagementModule = /** @class */ (function () {
                function FeatureManagementModule() {
                }
                return FeatureManagementModule;
            }());
            FeatureManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [_components_feature_management_feature_management_component__WEBPACK_IMPORTED_MODULE_4__["FeatureManagementComponent"]],
                    imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forFeature([_states_feature_management_state__WEBPACK_IMPORTED_MODULE_6__["FeatureManagementState"]])],
                    exports: [_components_feature_management_feature_management_component__WEBPACK_IMPORTED_MODULE_4__["FeatureManagementComponent"]],
                })
            ], FeatureManagementModule);
            /***/ 
        }),
        /***/ "../../packages/feature-management/src/lib/services/feature-management.service.ts": 
        /*!**********************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/services/feature-management.service.ts ***!
          \**********************************************************************************************************************************/
        /*! exports provided: FeatureManagementService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureManagementService", function () { return FeatureManagementService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../node_modules/@abp/ng.core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            var FeatureManagementService = /** @class */ (function () {
                function FeatureManagementService(rest, store) {
                    this.rest = rest;
                    this.store = store;
                }
                FeatureManagementService.prototype.getFeatures = function (params) {
                    var request = {
                        method: 'GET',
                        url: '/api/abp/features',
                        params: params,
                    };
                    return this.rest.request(request);
                };
                FeatureManagementService.prototype.updateFeatures = function (_a) {
                    var features = _a.features, providerKey = _a.providerKey, providerName = _a.providerName;
                    var request = {
                        method: 'PUT',
                        url: '/api/abp/features',
                        body: { features: features },
                        params: { providerKey: providerKey, providerName: providerName },
                    };
                    return this.rest.request(request);
                };
                return FeatureManagementService;
            }());
            FeatureManagementService.ctorParameters = function () { return [
                { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
                { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
            ]; };
            FeatureManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root',
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
            ], FeatureManagementService);
            /***/ 
        }),
        /***/ "../../packages/feature-management/src/lib/states/feature-management.state.ts": 
        /*!******************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/states/feature-management.state.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: FeatureManagementState */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureManagementState", function () { return FeatureManagementState; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _actions_feature_management_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/feature-management.actions */ "../../packages/feature-management/src/lib/actions/feature-management.actions.ts");
            /* harmony import */ var _services_feature_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/feature-management.service */ "../../packages/feature-management/src/lib/services/feature-management.service.ts");
            var FeatureManagementState = /** @class */ (function () {
                function FeatureManagementState(featureManagementService) {
                    this.featureManagementService = featureManagementService;
                }
                FeatureManagementState.getFeatures = function (_a) {
                    var features = _a.features;
                    return features || [];
                };
                FeatureManagementState.prototype.getFeatures = function (_a, _b) {
                    var patchState = _a.patchState;
                    var payload = _b.payload;
                    return this.featureManagementService.getFeatures(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_a) {
                        var features = _a.features;
                        return patchState({
                            features: features,
                        });
                    }));
                };
                FeatureManagementState.prototype.updateFeatures = function (_, _a) {
                    var payload = _a.payload;
                    return this.featureManagementService.updateFeatures(payload);
                };
                return FeatureManagementState;
            }());
            FeatureManagementState.ctorParameters = function () { return [
                { type: _services_feature_management_service__WEBPACK_IMPORTED_MODULE_4__["FeatureManagementService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_feature_management_actions__WEBPACK_IMPORTED_MODULE_3__["GetFeatures"]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_feature_management_actions__WEBPACK_IMPORTED_MODULE_3__["GetFeatures"]]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
            ], FeatureManagementState.prototype, "getFeatures", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_feature_management_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateFeatures"]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_feature_management_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateFeatures"]]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
            ], FeatureManagementState.prototype, "updateFeatures", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
            ], FeatureManagementState, "getFeatures", null);
            FeatureManagementState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
                    name: 'FeatureManagementState',
                    defaults: { features: {} },
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feature_management_service__WEBPACK_IMPORTED_MODULE_4__["FeatureManagementService"]])
            ], FeatureManagementState);
            /***/ 
        }),
        /***/ "../../packages/feature-management/src/lib/states/index.ts": 
        /*!***********************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/states/index.ts ***!
          \***********************************************************************************************************/
        /*! exports provided: FeatureManagementState */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _feature_management_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature-management.state */ "../../packages/feature-management/src/lib/states/feature-management.state.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureManagementState", function () { return _feature_management_state__WEBPACK_IMPORTED_MODULE_1__["FeatureManagementState"]; });
            /***/ 
        }),
        /***/ "../../packages/feature-management/src/public-api.ts": 
        /*!*****************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/public-api.ts ***!
          \*****************************************************************************************************/
        /*! exports provided: FeatureManagementModule, FeatureManagementComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _lib_feature_management_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/feature-management.module */ "../../packages/feature-management/src/lib/feature-management.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureManagementModule", function () { return _lib_feature_management_module__WEBPACK_IMPORTED_MODULE_1__["FeatureManagementModule"]; });
            /* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/components */ "../../packages/feature-management/src/lib/components/index.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureManagementComponent", function () { return _lib_components__WEBPACK_IMPORTED_MODULE_2__["FeatureManagementComponent"]; });
            /***/ 
        }),
        /***/ "../../packages/tenant-management/src/lib/actions/index.ts": 
        /*!***********************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/actions/index.ts ***!
          \***********************************************************************************************************/
        /*! exports provided: GetTenants, GetTenantById, CreateTenant, UpdateTenant, DeleteTenant */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _tenant_management_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenant-management.actions */ "../../packages/tenant-management/src/lib/actions/tenant-management.actions.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetTenants", function () { return _tenant_management_actions__WEBPACK_IMPORTED_MODULE_1__["GetTenants"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetTenantById", function () { return _tenant_management_actions__WEBPACK_IMPORTED_MODULE_1__["GetTenantById"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateTenant", function () { return _tenant_management_actions__WEBPACK_IMPORTED_MODULE_1__["CreateTenant"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateTenant", function () { return _tenant_management_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateTenant"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteTenant", function () { return _tenant_management_actions__WEBPACK_IMPORTED_MODULE_1__["DeleteTenant"]; });
            /***/ 
        }),
        /***/ "../../packages/tenant-management/src/lib/actions/tenant-management.actions.ts": 
        /*!*******************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/actions/tenant-management.actions.ts ***!
          \*******************************************************************************************************************************/
        /*! exports provided: GetTenants, GetTenantById, CreateTenant, UpdateTenant, DeleteTenant */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTenants", function () { return GetTenants; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTenantById", function () { return GetTenantById; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTenant", function () { return CreateTenant; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTenant", function () { return UpdateTenant; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTenant", function () { return DeleteTenant; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            var GetTenants = /** @class */ (function () {
                function GetTenants(payload) {
                    this.payload = payload;
                }
                return GetTenants;
            }());
            GetTenants.type = '[TenantManagement] Get Tenant';
            var GetTenantById = /** @class */ (function () {
                function GetTenantById(payload) {
                    this.payload = payload;
                }
                return GetTenantById;
            }());
            GetTenantById.type = '[TenantManagement] Get Tenant By Id';
            var CreateTenant = /** @class */ (function () {
                function CreateTenant(payload) {
                    this.payload = payload;
                }
                return CreateTenant;
            }());
            CreateTenant.type = '[TenantManagement] Create Tenant';
            var UpdateTenant = /** @class */ (function () {
                function UpdateTenant(payload) {
                    this.payload = payload;
                }
                return UpdateTenant;
            }());
            UpdateTenant.type = '[TenantManagement] Update Tenant';
            var DeleteTenant = /** @class */ (function () {
                function DeleteTenant(payload) {
                    this.payload = payload;
                }
                return DeleteTenant;
            }());
            DeleteTenant.type = '[TenantManagement] Delete Tenant';
            /***/ 
        }),
        /***/ "../../packages/tenant-management/src/lib/components/index.ts": 
        /*!**************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/components/index.ts ***!
          \**************************************************************************************************************/
        /*! exports provided: TenantsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _tenants_tenants_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenants/tenants.component */ "../../packages/tenant-management/src/lib/components/tenants/tenants.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantsComponent", function () { return _tenants_tenants_component__WEBPACK_IMPORTED_MODULE_1__["TenantsComponent"]; });
            /***/ 
        }),
        /***/ "../../packages/tenant-management/src/lib/components/tenants/tenants.component.ts": 
        /*!**********************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/components/tenants/tenants.component.ts ***!
          \**********************************************************************************************************************************/
        /*! exports provided: TenantsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantsComponent", function () { return TenantsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/tenant-management.actions */ "../../packages/tenant-management/src/lib/actions/tenant-management.actions.ts");
            /* harmony import */ var _services_tenant_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/tenant-management.service */ "../../packages/tenant-management/src/lib/services/tenant-management.service.ts");
            /* harmony import */ var _states_tenant_management_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../states/tenant-management.state */ "../../packages/tenant-management/src/lib/states/tenant-management.state.ts");
            var TenantsComponent = /** @class */ (function () {
                function TenantsComponent(confirmationService, tenantService, fb, store) {
                    this.confirmationService = confirmationService;
                    this.tenantService = tenantService;
                    this.fb = fb;
                    this.store = store;
                    this.selectedModalContent = {};
                    this.visibleFeatures = false;
                    this.pageQuery = {};
                    this.loading = false;
                    this.modalBusy = false;
                    this.sortOrder = '';
                    this.sortKey = '';
                }
                Object.defineProperty(TenantsComponent.prototype, "useSharedDatabase", {
                    get: function () {
                        return this.defaultConnectionStringForm.get('useSharedDatabase').value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TenantsComponent.prototype, "connectionString", {
                    get: function () {
                        return this.defaultConnectionStringForm.get('defaultConnectionString').value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TenantsComponent.prototype, "isDisabledSaveButton", {
                    get: function () {
                        if (!this.selectedModalContent)
                            return false;
                        if (this.selectedModalContent.type === 'saveConnStr' &&
                            this.defaultConnectionStringForm &&
                            this.defaultConnectionStringForm.invalid) {
                            return true;
                        }
                        else if (this.selectedModalContent.type === 'saveTenant' &&
                            this.tenantForm &&
                            this.tenantForm.invalid) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                TenantsComponent.prototype.ngOnInit = function () {
                    this.get();
                };
                TenantsComponent.prototype.onSearch = function (value) {
                    this.pageQuery.filter = value;
                    this.get();
                };
                TenantsComponent.prototype.createTenantForm = function () {
                    this.tenantForm = this.fb.group({
                        name: [this.selected.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(256)]],
                    });
                };
                TenantsComponent.prototype.createDefaultConnectionStringForm = function () {
                    this.defaultConnectionStringForm = this.fb.group({
                        useSharedDatabase: this._useSharedDatabase,
                        defaultConnectionString: [this.defaultConnectionString || ''],
                    });
                };
                TenantsComponent.prototype.openModal = function (title, template, type) {
                    this.selectedModalContent = {
                        title: title,
                        template: template,
                        type: type,
                    };
                    this.isModalVisible = true;
                };
                TenantsComponent.prototype.onEditConnectionString = function (id) {
                    var _this = this;
                    this.store
                        .dispatch(new _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_7__["GetTenantById"](id))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('TenantManagementState', 'selectedItem'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (selected) {
                        _this.selected = selected;
                        return _this.tenantService.getDefaultConnectionString(id);
                    }))
                        .subscribe(function (fetchedConnectionString) {
                        _this._useSharedDatabase = fetchedConnectionString ? false : true;
                        _this.defaultConnectionString = fetchedConnectionString ? fetchedConnectionString : '';
                        _this.createDefaultConnectionStringForm();
                        _this.openModal('AbpTenantManagement::ConnectionStrings', _this.connectionStringModalTemplate, 'saveConnStr');
                    });
                };
                TenantsComponent.prototype.addTenant = function () {
                    this.selected = {};
                    this.createTenantForm();
                    this.openModal('AbpTenantManagement::NewTenant', this.tenantModalTemplate, 'saveTenant');
                };
                TenantsComponent.prototype.editTenant = function (id) {
                    var _this = this;
                    this.store
                        .dispatch(new _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_7__["GetTenantById"](id))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('TenantManagementState', 'selectedItem'))
                        .subscribe(function (selected) {
                        _this.selected = selected;
                        _this.createTenantForm();
                        _this.openModal('AbpTenantManagement::Edit', _this.tenantModalTemplate, 'saveTenant');
                    });
                };
                TenantsComponent.prototype.save = function () {
                    var type = this.selectedModalContent.type;
                    if (!type)
                        return;
                    if (type === 'saveTenant')
                        this.saveTenant();
                    else if (type === 'saveConnStr')
                        this.saveConnectionString();
                };
                TenantsComponent.prototype.saveConnectionString = function () {
                    var _this = this;
                    if (this.modalBusy)
                        return;
                    this.modalBusy = true;
                    if (this.useSharedDatabase || (!this.useSharedDatabase && !this.connectionString)) {
                        this.tenantService
                            .deleteDefaultConnectionString(this.selected.id)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return (_this.modalBusy = false); }))
                            .subscribe(function () {
                            _this.isModalVisible = false;
                        });
                    }
                    else {
                        this.tenantService
                            .updateDefaultConnectionString({
                            id: this.selected.id,
                            defaultConnectionString: this.connectionString,
                        })
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return (_this.modalBusy = false); }))
                            .subscribe(function () {
                            _this.isModalVisible = false;
                        });
                    }
                };
                TenantsComponent.prototype.saveTenant = function () {
                    var _this = this;
                    if (!this.tenantForm.valid || this.modalBusy)
                        return;
                    this.modalBusy = true;
                    this.store
                        .dispatch(this.selected.id
                        ? new _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateTenant"](Object.assign({}, this.selected, this.tenantForm.value, { id: this.selected.id }))
                        : new _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_7__["CreateTenant"](this.tenantForm.value))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return (_this.modalBusy = false); }))
                        .subscribe(function () {
                        _this.isModalVisible = false;
                        _this.get();
                    });
                };
                TenantsComponent.prototype.delete = function (id, name) {
                    var _this = this;
                    this.confirmationService
                        .warn('AbpTenantManagement::TenantDeletionConfirmationMessage', 'AbpTenantManagement::AreYouSure', {
                        messageLocalizationParams: [name],
                    })
                        .subscribe(function (status) {
                        if (status === "confirm" /* confirm */) {
                            _this.store.dispatch(new _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_7__["DeleteTenant"](id)).subscribe(function () { return _this.get(); });
                        }
                    });
                };
                TenantsComponent.prototype.onPageChange = function (data) {
                    this.pageQuery.skipCount = data.first;
                    this.pageQuery.maxResultCount = data.rows;
                    this.get();
                };
                TenantsComponent.prototype.get = function () {
                    var _this = this;
                    this.loading = true;
                    this.store
                        .dispatch(new _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_7__["GetTenants"](this.pageQuery))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return (_this.loading = false); }))
                        .subscribe();
                };
                TenantsComponent.prototype.onSharedDatabaseChange = function (value) {
                    if (!value) {
                        setTimeout(function () {
                            var defaultConnectionString = document.getElementById('defaultConnectionString');
                            if (defaultConnectionString) {
                                defaultConnectionString.focus();
                            }
                        }, 0);
                    }
                };
                return TenantsComponent;
            }());
            TenantsComponent.ctorParameters = function () { return [
                { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"] },
                { type: _services_tenant_management_service__WEBPACK_IMPORTED_MODULE_8__["TenantManagementService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_states_tenant_management_state__WEBPACK_IMPORTED_MODULE_9__["TenantManagementState"].get),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
            ], TenantsComponent.prototype, "data$", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_states_tenant_management_state__WEBPACK_IMPORTED_MODULE_9__["TenantManagementState"].getTenantsTotalCount),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
            ], TenantsComponent.prototype, "totalCount$", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tenantModalTemplate', { static: false }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])
            ], TenantsComponent.prototype, "tenantModalTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('connectionStringModalTemplate', { static: false }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])
            ], TenantsComponent.prototype, "connectionStringModalTemplate", void 0);
            TenantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'abp-tenants',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tenants.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/tenant-management/src/lib/components/tenants/tenants.component.html")).default,
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
                    _services_tenant_management_service__WEBPACK_IMPORTED_MODULE_8__["TenantManagementService"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
            ], TenantsComponent);
            /***/ 
        }),
        /***/ "../../packages/tenant-management/src/lib/constants/index.ts": 
        /*!*************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/constants/index.ts ***!
          \*************************************************************************************************************/
        /*! exports provided: TENANT_MANAGEMENT_ROUTES */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "../../packages/tenant-management/src/lib/constants/routes.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TENANT_MANAGEMENT_ROUTES", function () { return _routes__WEBPACK_IMPORTED_MODULE_1__["TENANT_MANAGEMENT_ROUTES"]; });
            /***/ 
        }),
        /***/ "../../packages/tenant-management/src/lib/constants/routes.ts": 
        /*!**************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/constants/routes.ts ***!
          \**************************************************************************************************************/
        /*! exports provided: TENANT_MANAGEMENT_ROUTES */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TENANT_MANAGEMENT_ROUTES", function () { return TENANT_MANAGEMENT_ROUTES; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /**
             *
             * @deprecated since version 0.9.0
             */
            var TENANT_MANAGEMENT_ROUTES = {
                routes: [
                    {
                        name: 'AbpTenantManagement::Menu:TenantManagement',
                        path: 'tenant-management',
                        parentName: 'AbpUiNavigation::Menu:Administration',
                        layout: "application" /* application */,
                        iconClass: 'fa fa-users',
                        children: [
                            {
                                path: 'tenants',
                                name: 'AbpTenantManagement::Tenants',
                                order: 1,
                                requiredPolicy: 'AbpTenantManagement.Tenants',
                            },
                        ],
                    },
                ],
            };
            /***/ 
        }),
        /***/ "../../packages/tenant-management/src/lib/services/index.ts": 
        /*!************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/services/index.ts ***!
          \************************************************************************************************************/
        /*! exports provided: TenantManagementService, TenantManagementStateService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _tenant_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenant-management.service */ "../../packages/tenant-management/src/lib/services/tenant-management.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantManagementService", function () { return _tenant_management_service__WEBPACK_IMPORTED_MODULE_1__["TenantManagementService"]; });
            /* harmony import */ var _tenant_management_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tenant-management-state.service */ "../../packages/tenant-management/src/lib/services/tenant-management-state.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantManagementStateService", function () { return _tenant_management_state_service__WEBPACK_IMPORTED_MODULE_2__["TenantManagementStateService"]; });
            /***/ 
        }),
        /***/ "../../packages/tenant-management/src/lib/services/tenant-management-state.service.ts": 
        /*!**************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/services/tenant-management-state.service.ts ***!
          \**************************************************************************************************************************************/
        /*! exports provided: TenantManagementStateService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementStateService", function () { return TenantManagementStateService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            /* harmony import */ var _states_tenant_management_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../states/tenant-management.state */ "../../packages/tenant-management/src/lib/states/tenant-management.state.ts");
            var TenantManagementStateService = /** @class */ (function () {
                function TenantManagementStateService(store) {
                    this.store = store;
                }
                TenantManagementStateService.prototype.get = function () {
                    return this.store.selectSnapshot(_states_tenant_management_state__WEBPACK_IMPORTED_MODULE_3__["TenantManagementState"].get);
                };
                TenantManagementStateService.prototype.getTenantsTotalCount = function () {
                    return this.store.selectSnapshot(_states_tenant_management_state__WEBPACK_IMPORTED_MODULE_3__["TenantManagementState"].getTenantsTotalCount);
                };
                return TenantManagementStateService;
            }());
            TenantManagementStateService.ctorParameters = function () { return [
                { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
            ]; };
            TenantManagementStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root',
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
            ], TenantManagementStateService);
            /***/ 
        }),
        /***/ "../../packages/tenant-management/src/lib/services/tenant-management.service.ts": 
        /*!********************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/services/tenant-management.service.ts ***!
          \********************************************************************************************************************************/
        /*! exports provided: TenantManagementService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementService", function () { return TenantManagementService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../node_modules/@abp/ng.core/fesm2015/abp-ng.core.js");
            var TenantManagementService = /** @class */ (function () {
                function TenantManagementService(rest) {
                    this.rest = rest;
                }
                TenantManagementService.prototype.getTenant = function (params) {
                    if (params === void 0) { params = {}; }
                    var request = {
                        method: 'GET',
                        url: '/api/multi-tenancy/tenants',
                        params: params
                    };
                    return this.rest.request(request);
                };
                TenantManagementService.prototype.getTenantById = function (id) {
                    var request = {
                        method: 'GET',
                        url: "/api/multi-tenancy/tenants/" + id
                    };
                    return this.rest.request(request);
                };
                TenantManagementService.prototype.deleteTenant = function (id) {
                    var request = {
                        method: 'DELETE',
                        url: "/api/multi-tenancy/tenants/" + id
                    };
                    return this.rest.request(request);
                };
                TenantManagementService.prototype.createTenant = function (body) {
                    var request = {
                        method: 'POST',
                        url: '/api/multi-tenancy/tenants',
                        body: body
                    };
                    return this.rest.request(request);
                };
                TenantManagementService.prototype.updateTenant = function (body) {
                    var url = "/api/multi-tenancy/tenants/" + body.id;
                    delete body.id;
                    var request = {
                        method: 'PUT',
                        url: url,
                        body: body
                    };
                    return this.rest.request(request);
                };
                TenantManagementService.prototype.getDefaultConnectionString = function (id) {
                    var url = "/api/multi-tenancy/tenants/" + id + "/default-connection-string";
                    var request = {
                        method: 'GET',
                        responseType: "text" /* Text */,
                        url: url
                    };
                    return this.rest.request(request);
                };
                TenantManagementService.prototype.updateDefaultConnectionString = function (payload) {
                    var url = "/api/multi-tenancy/tenants/" + payload.id + "/default-connection-string";
                    var request = {
                        method: 'PUT',
                        url: url,
                        params: { defaultConnectionString: payload.defaultConnectionString }
                    };
                    return this.rest.request(request);
                };
                TenantManagementService.prototype.deleteDefaultConnectionString = function (id) {
                    var url = "/api/multi-tenancy/tenants/" + id + "/default-connection-string";
                    var request = {
                        method: 'DELETE',
                        url: url
                    };
                    return this.rest.request(request);
                };
                return TenantManagementService;
            }());
            TenantManagementService.ctorParameters = function () { return [
                { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
            ]; };
            TenantManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
            ], TenantManagementService);
            /***/ 
        }),
        /***/ "../../packages/tenant-management/src/lib/states/index.ts": 
        /*!**********************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/states/index.ts ***!
          \**********************************************************************************************************/
        /*! exports provided: TenantManagementState */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _tenant_management_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenant-management.state */ "../../packages/tenant-management/src/lib/states/tenant-management.state.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantManagementState", function () { return _tenant_management_state__WEBPACK_IMPORTED_MODULE_1__["TenantManagementState"]; });
            /***/ 
        }),
        /***/ "../../packages/tenant-management/src/lib/states/tenant-management.state.ts": 
        /*!****************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/states/tenant-management.state.ts ***!
          \****************************************************************************************************************************/
        /*! exports provided: TenantManagementState */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementState", function () { return TenantManagementState; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/tenant-management.actions */ "../../packages/tenant-management/src/lib/actions/tenant-management.actions.ts");
            /* harmony import */ var _services_tenant_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/tenant-management.service */ "../../packages/tenant-management/src/lib/services/tenant-management.service.ts");
            var TenantManagementState = /** @class */ (function () {
                function TenantManagementState(tenantManagementService) {
                    this.tenantManagementService = tenantManagementService;
                }
                TenantManagementState.get = function (_a) {
                    var result = _a.result;
                    return result.items || [];
                };
                TenantManagementState.getTenantsTotalCount = function (_a) {
                    var result = _a.result;
                    return result.totalCount;
                };
                TenantManagementState.prototype.get = function (_a, _b) {
                    var patchState = _a.patchState;
                    var payload = _b.payload;
                    return this.tenantManagementService.getTenant(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (result) { return patchState({
                        result: result,
                    }); }));
                };
                TenantManagementState.prototype.getById = function (_a, _b) {
                    var patchState = _a.patchState;
                    var payload = _b.payload;
                    return this.tenantManagementService.getTenantById(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (selectedItem) { return patchState({
                        selectedItem: selectedItem,
                    }); }));
                };
                TenantManagementState.prototype.delete = function (_, _a) {
                    var payload = _a.payload;
                    return this.tenantManagementService.deleteTenant(payload);
                };
                TenantManagementState.prototype.add = function (_, _a) {
                    var payload = _a.payload;
                    return this.tenantManagementService.createTenant(payload);
                };
                TenantManagementState.prototype.update = function (_a, _b) {
                    var getState = _a.getState;
                    var payload = _b.payload;
                    return this.tenantManagementService.updateTenant(Object.assign({}, getState().selectedItem, payload));
                };
                return TenantManagementState;
            }());
            TenantManagementState.ctorParameters = function () { return [
                { type: _services_tenant_management_service__WEBPACK_IMPORTED_MODULE_4__["TenantManagementService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["GetTenants"]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["GetTenants"]]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
            ], TenantManagementState.prototype, "get", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["GetTenantById"]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["GetTenantById"]]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
            ], TenantManagementState.prototype, "getById", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteTenant"]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteTenant"]]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
            ], TenantManagementState.prototype, "delete", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["CreateTenant"]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["CreateTenant"]]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
            ], TenantManagementState.prototype, "add", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateTenant"]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateTenant"]]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
            ], TenantManagementState.prototype, "update", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)
            ], TenantManagementState, "get", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Number)
            ], TenantManagementState, "getTenantsTotalCount", null);
            TenantManagementState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
                    name: 'TenantManagementState',
                    defaults: { result: {}, selectedItem: {} },
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tenant_management_service__WEBPACK_IMPORTED_MODULE_4__["TenantManagementService"]])
            ], TenantManagementState);
            /***/ 
        }),
        /***/ "../../packages/tenant-management/src/lib/tenant-management-routing.module.ts": 
        /*!******************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/tenant-management-routing.module.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: TenantManagementRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementRoutingModule", function () { return TenantManagementRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../node_modules/@abp/ng.core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tenants/tenants.component */ "../../packages/tenant-management/src/lib/components/tenants/tenants.component.ts");
            var routes = [
                { path: '', redirectTo: 'tenants', pathMatch: 'full' },
                {
                    path: 'tenants',
                    component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["DynamicLayoutComponent"],
                    canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["PermissionGuard"]],
                    data: { requiredPolicy: 'AbpTenantManagement.Tenants' },
                    children: [{ path: '', component: _components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_4__["TenantsComponent"] }],
                },
            ];
            var TenantManagementRoutingModule = /** @class */ (function () {
                function TenantManagementRoutingModule() {
                }
                return TenantManagementRoutingModule;
            }());
            TenantManagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
                })
            ], TenantManagementRoutingModule);
            /***/ 
        }),
        /***/ "../../packages/tenant-management/src/lib/tenant-management.module.ts": 
        /*!**********************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/tenant-management.module.ts ***!
          \**********************************************************************************************************************/
        /*! exports provided: TenantManagementModule, TenantManagementProviders */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementModule", function () { return TenantManagementModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementProviders", function () { return TenantManagementProviders; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../node_modules/@abp/ng.core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
            /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "../../node_modules/primeng/table.js");
            /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tenants/tenants.component */ "../../packages/tenant-management/src/lib/components/tenants/tenants.component.ts");
            /* harmony import */ var _states_tenant_management_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./states/tenant-management.state */ "../../packages/tenant-management/src/lib/states/tenant-management.state.ts");
            /* harmony import */ var _tenant_management_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tenant-management-routing.module */ "../../packages/tenant-management/src/lib/tenant-management-routing.module.ts");
            /* harmony import */ var _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @abp/ng.feature-management */ "../../packages/feature-management/src/public-api.ts");
            /* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
            var TenantManagementModule = /** @class */ (function () {
                function TenantManagementModule() {
                }
                return TenantManagementModule;
            }());
            TenantManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [_components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_7__["TenantsComponent"]],
                    imports: [
                        _tenant_management_routing_module__WEBPACK_IMPORTED_MODULE_9__["TenantManagementRoutingModule"],
                        _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forFeature([_states_tenant_management_state__WEBPACK_IMPORTED_MODULE_8__["TenantManagementState"]]),
                        _ngx_validate_core__WEBPACK_IMPORTED_MODULE_11__["NgxValidateCoreModule"],
                        _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
                        primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                        _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
                        _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_10__["FeatureManagementModule"],
                    ],
                })
            ], TenantManagementModule);
            /**
             *
             * @deprecated since version 0.9.0
             */
            function TenantManagementProviders() {
                return [];
            }
            /***/ 
        }),
        /***/ "../../packages/tenant-management/src/public-api.ts": 
        /*!****************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/public-api.ts ***!
          \****************************************************************************************************/
        /*! exports provided: TenantManagementModule, TenantManagementProviders, TenantsComponent, TenantManagementState, GetTenants, GetTenantById, CreateTenant, UpdateTenant, DeleteTenant, TENANT_MANAGEMENT_ROUTES, TenantManagementService, TenantManagementStateService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _lib_tenant_management_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/tenant-management.module */ "../../packages/tenant-management/src/lib/tenant-management.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantManagementModule", function () { return _lib_tenant_management_module__WEBPACK_IMPORTED_MODULE_1__["TenantManagementModule"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantManagementProviders", function () { return _lib_tenant_management_module__WEBPACK_IMPORTED_MODULE_1__["TenantManagementProviders"]; });
            /* harmony import */ var _lib_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/actions */ "../../packages/tenant-management/src/lib/actions/index.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetTenants", function () { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["GetTenants"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetTenantById", function () { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["GetTenantById"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateTenant", function () { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["CreateTenant"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateTenant", function () { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateTenant"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteTenant", function () { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteTenant"]; });
            /* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components */ "../../packages/tenant-management/src/lib/components/index.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantsComponent", function () { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["TenantsComponent"]; });
            /* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/constants */ "../../packages/tenant-management/src/lib/constants/index.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TENANT_MANAGEMENT_ROUTES", function () { return _lib_constants__WEBPACK_IMPORTED_MODULE_4__["TENANT_MANAGEMENT_ROUTES"]; });
            /* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/services */ "../../packages/tenant-management/src/lib/services/index.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantManagementService", function () { return _lib_services__WEBPACK_IMPORTED_MODULE_5__["TenantManagementService"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantManagementStateService", function () { return _lib_services__WEBPACK_IMPORTED_MODULE_5__["TenantManagementStateService"]; });
            /* harmony import */ var _lib_states__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/states */ "../../packages/tenant-management/src/lib/states/index.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantManagementState", function () { return _lib_states__WEBPACK_IMPORTED_MODULE_6__["TenantManagementState"]; });
            /***/ 
        }),
        /***/ "./src/app/lazy-libs/tenant-management-wrapper.module.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/lazy-libs/tenant-management-wrapper.module.ts ***!
          \***************************************************************/
        /*! exports provided: TenantManagementWrapperModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementWrapperModule", function () { return TenantManagementWrapperModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fs_tenant_management_ng_alain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fs/tenant-management/ng-alain */ "../../libs/tenant-management/ng-alain/src/index.ts");
            var TenantManagementWrapperModule = /** @class */ (function () {
                function TenantManagementWrapperModule() {
                }
                return TenantManagementWrapperModule;
            }());
            TenantManagementWrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_fs_tenant_management_ng_alain__WEBPACK_IMPORTED_MODULE_2__["TenantManagementNgAlainModule"]],
                })
            ], TenantManagementWrapperModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=lazy-libs-tenant-management-wrapper-module-es2015.js.map
//# sourceMappingURL=lazy-libs-tenant-management-wrapper-module-es5.js.map
//# sourceMappingURL=lazy-libs-tenant-management-wrapper-module-es5.js.map