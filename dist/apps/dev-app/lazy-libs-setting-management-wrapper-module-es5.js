function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-libs-setting-management-wrapper-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../packages/setting-management/src/lib/components/setting-management.component.html":
  /*!****************************************************************************************************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/setting-management/src/lib/components/setting-management.component.html ***!
    \****************************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsPackagesSettingManagementSrcLibComponentsSettingManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row entry-row\">\r\n  <div class=\"col-auto\">\r\n    <h1 class=\"content-header-title\">{{ 'AbpSettingManagement::Settings' | abpLocalization }}</h1>\r\n  </div>\r\n  <div id=\"breadcrumb\" class=\"col-md-auto pl-md-0\">\r\n    <abp-breadcrumb></abp-breadcrumb>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"text-lg-right pt-2\" id=\"AbpContentToolbar\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"SettingManagementWrapper\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-3\">\r\n          <ul class=\"nav flex-column nav-pills\" id=\"nav-tab\" role=\"tablist\">\r\n            <li\r\n              *abpFor=\"let setting of settings; trackBy: trackByFn\"\r\n              (click)=\"selected = setting\"\r\n              class=\"nav-item pointer\"\r\n              [abpPermission]=\"setting.requiredPolicy\"\r\n            >\r\n              <a\r\n                class=\"nav-link\"\r\n                [id]=\"setting.name + '-tab'\"\r\n                role=\"tab\"\r\n                [class.active]=\"setting.name === selected.name\"\r\n                >{{ setting.name | abpLocalization }}</a\r\n              >\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-12 col-md-9\">\r\n          <div *ngIf=\"settings.length\" class=\"tab-content\">\r\n            <div class=\"tab-pane fade show active\" [id]=\"selected.name + '-tab'\" role=\"tabpanel\">\r\n              <ng-container *ngComponentOutlet=\"selected.component\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "../../packages/setting-management/src/lib/actions/setting-management.actions.ts":
  /*!*********************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/setting-management/src/lib/actions/setting-management.actions.ts ***!
    \*********************************************************************************************************************************/

  /*! exports provided: SetSelectedSettingTab */

  /***/
  function packagesSettingManagementSrcLibActionsSettingManagementActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetSelectedSettingTab", function () {
      return SetSelectedSettingTab;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var SetSelectedSettingTab = function SetSelectedSettingTab(payload) {
      _classCallCheck(this, SetSelectedSettingTab);

      this.payload = payload;
    };

    SetSelectedSettingTab.type = '[SettingManagement] Set Selected Tab';
    /***/
  },

  /***/
  "../../packages/setting-management/src/lib/components/setting-management.component.ts":
  /*!**************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/setting-management/src/lib/components/setting-management.component.ts ***!
    \**************************************************************************************************************************************/

  /*! exports provided: SettingManagementComponent */

  /***/
  function packagesSettingManagementSrcLibComponentsSettingManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingManagementComponent", function () {
      return SettingManagementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.theme.shared */
    "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");
    /* harmony import */


    var _states_setting_management_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../states/setting-management.state */
    "../../packages/setting-management/src/lib/states/setting-management.state.ts");
    /* harmony import */


    var _actions_setting_management_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../actions/setting-management.actions */
    "../../packages/setting-management/src/lib/actions/setting-management.actions.ts");

    var SettingManagementComponent =
    /*#__PURE__*/
    function () {
      function SettingManagementComponent(router, store) {
        _classCallCheck(this, SettingManagementComponent);

        this.router = router;
        this.store = store;
        this.settings = [];

        this.trackByFn = function (_, item) {
          return item.name;
        };
      }

      _createClass(SettingManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.settings = Object(_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["getSettingTabs"])().filter(function (setting) {
            return _this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_5__["ConfigState"].getGrantedPolicy(setting.requiredPolicy));
          }).sort(function (a, b) {
            return a.order - b.order;
          });

          if (!this.selected && this.settings.length) {
            this.selected = this.settings[0];
          }
        }
      }, {
        key: "selected",
        set: function set(value) {
          this.store.dispatch(new _actions_setting_management_actions__WEBPACK_IMPORTED_MODULE_7__["SetSelectedSettingTab"](value));
        },
        get: function get() {
          var value = this.store.selectSnapshot(_states_setting_management_state__WEBPACK_IMPORTED_MODULE_6__["SettingManagementState"].getSelectedTab);

          if ((!value || !value.component) && this.settings.length) {
            return this.settings[0];
          }

          return value;
        }
      }]);

      return SettingManagementComponent;
    }();

    SettingManagementComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    SettingManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'abp-setting-management',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./setting-management.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../packages/setting-management/src/lib/components/setting-management.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])], SettingManagementComponent);
    /***/
  },

  /***/
  "../../packages/setting-management/src/lib/setting-management-routing.module.ts":
  /*!********************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/setting-management/src/lib/setting-management-routing.module.ts ***!
    \********************************************************************************************************************************/

  /*! exports provided: SettingManagementRoutingModule */

  /***/
  function packagesSettingManagementSrcLibSettingManagementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingManagementRoutingModule", function () {
      return SettingManagementRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_setting_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/setting-management.component */
    "../../packages/setting-management/src/lib/components/setting-management.component.ts");

    var routes = [{
      path: '',
      component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["DynamicLayoutComponent"],
      children: [{
        path: '',
        component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableRouteContainerComponent"],
        data: {
          requiredPolicy: 'AbpAccount.SettingManagement',
          replaceableComponent: {
            key: 'SettingManagement.SettingManagementComponent',
            defaultComponent: _components_setting_management_component__WEBPACK_IMPORTED_MODULE_4__["SettingManagementComponent"]
          }
        }
      }]
    }];

    var SettingManagementRoutingModule = function SettingManagementRoutingModule() {
      _classCallCheck(this, SettingManagementRoutingModule);
    };

    SettingManagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], SettingManagementRoutingModule);
    /***/
  },

  /***/
  "../../packages/setting-management/src/lib/setting-management.module.ts":
  /*!************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/setting-management/src/lib/setting-management.module.ts ***!
    \************************************************************************************************************************/

  /*! exports provided: SettingManagementModule */

  /***/
  function packagesSettingManagementSrcLibSettingManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingManagementModule", function () {
      return SettingManagementModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");
    /* harmony import */


    var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.theme.shared */
    "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _setting_management_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./setting-management-routing.module */
    "../../packages/setting-management/src/lib/setting-management-routing.module.ts");
    /* harmony import */


    var _components_setting_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/setting-management.component */
    "../../packages/setting-management/src/lib/components/setting-management.component.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _states_setting_management_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./states/setting-management.state */
    "../../packages/setting-management/src/lib/states/setting-management.state.ts");

    var SettingManagementModule = function SettingManagementModule() {
      _classCallCheck(this, SettingManagementModule);
    };

    SettingManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_components_setting_management_component__WEBPACK_IMPORTED_MODULE_5__["SettingManagementComponent"]],
      imports: [_setting_management_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingManagementRoutingModule"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["NgxsModule"].forFeature([_states_setting_management_state__WEBPACK_IMPORTED_MODULE_7__["SettingManagementState"]])]
    })], SettingManagementModule);
    /***/
  },

  /***/
  "../../packages/setting-management/src/lib/states/setting-management.state.ts":
  /*!******************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/setting-management/src/lib/states/setting-management.state.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: SettingManagementState */

  /***/
  function packagesSettingManagementSrcLibStatesSettingManagementStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingManagementState", function () {
      return SettingManagementState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _actions_setting_management_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/setting-management.actions */
    "../../packages/setting-management/src/lib/actions/setting-management.actions.ts");

    var SettingManagementState =
    /*#__PURE__*/
    function () {
      function SettingManagementState() {
        _classCallCheck(this, SettingManagementState);
      }

      _createClass(SettingManagementState, [{
        key: "settingManagementAction",
        value: function settingManagementAction(_ref, _ref2) {
          var patchState = _ref.patchState;
          var payload = _ref2.payload;
          patchState({
            selectedTab: payload
          });
        }
      }], [{
        key: "getSelectedTab",
        value: function getSelectedTab(_ref3) {
          var selectedTab = _ref3.selectedTab;
          return selectedTab;
        }
      }]);

      return SettingManagementState;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_setting_management_actions__WEBPACK_IMPORTED_MODULE_2__["SetSelectedSettingTab"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_setting_management_actions__WEBPACK_IMPORTED_MODULE_2__["SetSelectedSettingTab"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], SettingManagementState.prototype, "settingManagementAction", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], SettingManagementState, "getSelectedTab", null);
    SettingManagementState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'SettingManagementState',
      defaults: {
        selectedTab: {}
      }
    })], SettingManagementState);
    /***/
  },

  /***/
  "../../packages/setting-management/src/public-api.ts":
  /*!*****************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/setting-management/src/public-api.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: SettingManagementModule, SettingManagementComponent */

  /***/
  function packagesSettingManagementSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lib_setting_management_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/setting-management.module */
    "../../packages/setting-management/src/lib/setting-management.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SettingManagementModule", function () {
      return _lib_setting_management_module__WEBPACK_IMPORTED_MODULE_1__["SettingManagementModule"];
    });
    /* harmony import */


    var _lib_components_setting_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/components/setting-management.component */
    "../../packages/setting-management/src/lib/components/setting-management.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SettingManagementComponent", function () {
      return _lib_components_setting_management_component__WEBPACK_IMPORTED_MODULE_2__["SettingManagementComponent"];
    });
    /***/

  },

  /***/
  "./src/app/lazy-libs/setting-management-wrapper.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/lazy-libs/setting-management-wrapper.module.ts ***!
    \****************************************************************/

  /*! exports provided: SettingManagementWrapperModule */

  /***/
  function srcAppLazyLibsSettingManagementWrapperModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingManagementWrapperModule", function () {
      return SettingManagementWrapperModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _abp_ng_setting_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.setting-management */
    "../../packages/setting-management/src/public-api.ts");

    var SettingManagementWrapperModule = function SettingManagementWrapperModule() {
      _classCallCheck(this, SettingManagementWrapperModule);
    };

    SettingManagementWrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_abp_ng_setting_management__WEBPACK_IMPORTED_MODULE_2__["SettingManagementModule"]]
    })], SettingManagementWrapperModule);
    /***/
  }
}]);
//# sourceMappingURL=lazy-libs-setting-management-wrapper-module-es5.js.map