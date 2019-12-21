(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-libs-setting-management-wrapper-module"], {
        /***/ "../../libs/setting-management/ng-alain/src/index.ts": 
        /*!*****************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/ng-alain/src/index.ts ***!
          \*****************************************************************************************************/
        /*! exports provided: SettingManagementNgAlainModule, SharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/index */ "../../libs/setting-management/ng-alain/src/lib/index.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingManagementNgAlainModule", function () { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["SettingManagementNgAlainModule"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function () { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]; });
            /***/ 
        }),
        /***/ "../../libs/setting-management/ng-alain/src/lib/index.ts": 
        /*!*********************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/ng-alain/src/lib/index.ts ***!
          \*********************************************************************************************************/
        /*! exports provided: SettingManagementNgAlainModule, SharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _setting_management_ng_alain_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting-management-ng-alain.module */ "../../libs/setting-management/ng-alain/src/lib/setting-management-ng-alain.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingManagementNgAlainModule", function () { return _setting_management_ng_alain_module__WEBPACK_IMPORTED_MODULE_1__["SettingManagementNgAlainModule"]; });
            /* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/index */ "../../libs/setting-management/ng-alain/src/lib/shared/index.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function () { return _shared_index__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]; });
            /***/ 
        }),
        /***/ "../../libs/setting-management/ng-alain/src/lib/setting-management-ng-alain-routing.module.ts": 
        /*!**********************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/ng-alain/src/lib/setting-management-ng-alain-routing.module.ts ***!
          \**********************************************************************************************************************************************/
        /*! exports provided: SettingManagementNgAlainRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingManagementNgAlainRoutingModule", function () { return SettingManagementNgAlainRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.core */ "../../node_modules/@abp/ng.core/fesm2015/abp-ng.core.js");
            /* harmony import */ var _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fs/ng-alain/basic */ "../../themes/ng-alain/basic/src/index.ts");
            /* harmony import */ var _settings_settings_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.module */ "../../libs/setting-management/ng-alain/src/lib/settings/settings.module.ts");
            var routes = [
                { path: '', pathMatch: 'full', redirectTo: 'settings' },
                {
                    path: '',
                    component: _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_4__["LayoutDefaultComponent"],
                    canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]],
                    children: [
                        {
                            path: 'settings',
                            loadChildren: function () { return _settings_settings_module__WEBPACK_IMPORTED_MODULE_5__["SettingsModule"]; }
                        },
                    ],
                }
            ];
            // @dynamic
            var SettingManagementNgAlainRoutingModule = /** @class */ (function () {
                function SettingManagementNgAlainRoutingModule() {
                }
                return SettingManagementNgAlainRoutingModule;
            }());
            SettingManagementNgAlainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], SettingManagementNgAlainRoutingModule);
            /***/ 
        }),
        /***/ "../../libs/setting-management/ng-alain/src/lib/setting-management-ng-alain.module.ts": 
        /*!**************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/ng-alain/src/lib/setting-management-ng-alain.module.ts ***!
          \**************************************************************************************************************************************/
        /*! exports provided: SettingManagementNgAlainModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingManagementNgAlainModule", function () { return SettingManagementNgAlainModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _setting_management_ng_alain_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting-management-ng-alain-routing.module */ "../../libs/setting-management/ng-alain/src/lib/setting-management-ng-alain-routing.module.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "../../libs/setting-management/ng-alain/src/lib/shared/shared.module.ts");
            /* harmony import */ var _settings_settings_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/settings.module */ "../../libs/setting-management/ng-alain/src/lib/settings/settings.module.ts");
            var SettingManagementNgAlainModule = /** @class */ (function () {
                function SettingManagementNgAlainModule() {
                }
                return SettingManagementNgAlainModule;
            }());
            SettingManagementNgAlainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                        _setting_management_ng_alain_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingManagementNgAlainRoutingModule"],
                        _settings_settings_module__WEBPACK_IMPORTED_MODULE_4__["SettingsModule"],
                    ]
                })
            ], SettingManagementNgAlainModule);
            /***/ 
        }),
        /***/ "../../libs/setting-management/ng-alain/src/lib/settings/main/main.component.css": 
        /*!*********************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/ng-alain/src/lib/settings/main/main.component.css ***!
          \*********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3NldHRpbmctbWFuYWdlbWVudC9uZy1hbGFpbi9zcmMvbGliL3NldHRpbmdzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "../../libs/setting-management/ng-alain/src/lib/settings/main/main.component.ts": 
        /*!********************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/ng-alain/src/lib/settings/main/main.component.ts ***!
          \********************************************************************************************************************************/
        /*! exports provided: MainComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function () { return MainComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            var MainComponent = /** @class */ (function () {
                function MainComponent() {
                }
                MainComponent.prototype.ngOnInit = function () {
                };
                return MainComponent;
            }());
            MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'fs-main',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/setting-management/ng-alain/src/lib/settings/main/main.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "../../libs/setting-management/ng-alain/src/lib/settings/main/main.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], MainComponent);
            /***/ 
        }),
        /***/ "../../libs/setting-management/ng-alain/src/lib/settings/settings-routing.module.ts": 
        /*!************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/ng-alain/src/lib/settings/settings-routing.module.ts ***!
          \************************************************************************************************************************************/
        /*! exports provided: SettingsRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function () { return SettingsRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "../../libs/setting-management/ng-alain/src/lib/settings/main/main.component.ts");
            var routes = [
                {
                    path: '',
                    component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
                }
            ];
            var SettingsRoutingModule = /** @class */ (function () {
                function SettingsRoutingModule() {
                }
                return SettingsRoutingModule;
            }());
            SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], SettingsRoutingModule);
            /***/ 
        }),
        /***/ "../../libs/setting-management/ng-alain/src/lib/settings/settings.module.ts": 
        /*!****************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/ng-alain/src/lib/settings/settings.module.ts ***!
          \****************************************************************************************************************************/
        /*! exports provided: SettingsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function () { return SettingsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "../../libs/setting-management/ng-alain/src/lib/shared/shared.module.ts");
            /* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "../../libs/setting-management/ng-alain/src/lib/settings/main/main.component.ts");
            /* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-routing.module */ "../../libs/setting-management/ng-alain/src/lib/settings/settings-routing.module.ts");
            var SettingsModule = /** @class */ (function () {
                function SettingsModule() {
                }
                return SettingsModule;
            }());
            SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]],
                    imports: [
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                        _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingsRoutingModule"]
                    ]
                })
            ], SettingsModule);
            /***/ 
        }),
        /***/ "../../libs/setting-management/ng-alain/src/lib/shared/index.ts": 
        /*!****************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/ng-alain/src/lib/shared/index.ts ***!
          \****************************************************************************************************************/
        /*! exports provided: SharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.module */ "../../libs/setting-management/ng-alain/src/lib/shared/shared.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function () { return _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]; });
            /***/ 
        }),
        /***/ "../../libs/setting-management/ng-alain/src/lib/shared/shared.module.ts": 
        /*!************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/ng-alain/src/lib/shared/shared.module.ts ***!
          \************************************************************************************************************************/
        /*! exports provided: SharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function () { return SharedModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fs_setting_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fs/setting-management */ "../../libs/setting-management/src/index.ts");
            /* harmony import */ var _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fs/ng-alain/basic */ "../../themes/ng-alain/basic/src/index.ts");
            var SharedModule = /** @class */ (function () {
                function SharedModule() {
                }
                return SharedModule;
            }());
            SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _fs_setting_management__WEBPACK_IMPORTED_MODULE_2__["SettingManagementModule"],
                        _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_3__["NgAlainBasicModule"],
                    ]
                })
            ], SharedModule);
            /***/ 
        }),
        /***/ "../../libs/setting-management/src/index.ts": 
        /*!********************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/src/index.ts ***!
          \********************************************************************************************/
        /*! exports provided: SettingManagementModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/index */ "../../libs/setting-management/src/lib/index.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingManagementModule", function () { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["SettingManagementModule"]; });
            /***/ 
        }),
        /***/ "../../libs/setting-management/src/lib/index.ts": 
        /*!************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/src/lib/index.ts ***!
          \************************************************************************************************/
        /*! exports provided: SettingManagementModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _setting_management_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting-management.module */ "../../libs/setting-management/src/lib/setting-management.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingManagementModule", function () { return _setting_management_module__WEBPACK_IMPORTED_MODULE_1__["SettingManagementModule"]; });
            /***/ 
        }),
        /***/ "../../libs/setting-management/src/lib/setting-management.module.ts": 
        /*!********************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/src/lib/setting-management.module.ts ***!
          \********************************************************************************************************************/
        /*! exports provided: SettingManagementModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingManagementModule", function () { return SettingManagementModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
            var SettingManagementModule = /** @class */ (function () {
                function SettingManagementModule() {
                }
                return SettingManagementModule;
            }());
            SettingManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
                })
            ], SettingManagementModule);
            /***/ 
        }),
        /***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/setting-management/ng-alain/src/lib/settings/main/main.component.html": 
        /*!**********************************************************************************************************************************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/ng-alain/src/lib/settings/main/main.component.html ***!
          \**********************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>main works!</p>\r\n");
            /***/ 
        }),
        /***/ "./src/app/lazy-libs/setting-management-wrapper.module.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/lazy-libs/setting-management-wrapper.module.ts ***!
          \****************************************************************/
        /*! exports provided: SettingManagementWrapperModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingManagementWrapperModule", function () { return SettingManagementWrapperModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fs_setting_management_ng_alain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fs/setting-management/ng-alain */ "../../libs/setting-management/ng-alain/src/index.ts");
            var SettingManagementWrapperModule = /** @class */ (function () {
                function SettingManagementWrapperModule() {
                }
                return SettingManagementWrapperModule;
            }());
            SettingManagementWrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_fs_setting_management_ng_alain__WEBPACK_IMPORTED_MODULE_2__["SettingManagementNgAlainModule"]],
                })
            ], SettingManagementWrapperModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=lazy-libs-setting-management-wrapper-module-es2015.js.map
//# sourceMappingURL=lazy-libs-setting-management-wrapper-module-es5.js.map
//# sourceMappingURL=lazy-libs-setting-management-wrapper-module-es5.js.map