function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-libs-tenant-management-wrapper-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../packages/feature-management/src/lib/components/feature-management/feature-management.component.html":
  /*!***********************************************************************************************************************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/components/feature-management/feature-management.component.html ***!
    \***********************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsPackagesFeatureManagementSrcLibComponentsFeatureManagementFeatureManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<abp-modal size=\"md\" [(visible)]=\"visible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ 'AbpFeatureManagement::Features' | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <form *ngIf=\"form\" (ngSubmit)=\"save()\" [formGroup]=\"form\" validateOnSubmit>\r\n      <div\r\n        class=\"row my-3\"\r\n        *ngFor=\"let feature of features$ | async; let i = index\"\r\n        [ngSwitch]=\"feature.valueType.name\"\r\n      >\r\n        <div class=\"col-4\">{{ feature.name }}</div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'ToggleStringValueType'\">\r\n          <input type=\"checkbox\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'FreeTextStringValueType'\">\r\n          <input type=\"text\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!(features$ | async)?.length\">\r\n        {{ 'AbpFeatureManagement::NoFeatureFoundMessage' | abpLocalization }}\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <ng-container *ngIf=\"(features$ | async)?.length\">\r\n      <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n        {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid || modalBusy\" (click)=\"save()\">\r\n        {{ 'AbpFeatureManagement::Save' | abpLocalization }}\r\n      </abp-button>\r\n    </ng-container>\r\n  </ng-template>\r\n</abp-modal>\r\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../packages/tenant-management/src/lib/components/tenants/tenants.component.html":
  /*!************************************************************************************************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/components/tenants/tenants.component.html ***!
    \************************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsPackagesTenantManagementSrcLibComponentsTenantsTenantsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpTenantManagement::Tenants' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpTenantManagement.Tenants.Create'\"\r\n          id=\"create-tenants\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"addTenant()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpTenantManagement::NewTenant' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <label\r\n        ><input\r\n          type=\"search\"\r\n          class=\"form-control form-control-sm\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          (input.debounce)=\"onSearch($event.target.value)\"\r\n      /></label>\r\n    </div>\r\n    <p-table\r\n      *ngIf=\"[150, 0] as columnWidths\"\r\n      [value]=\"data$ | async\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [lazy]=\"true\"\r\n      [lazyLoadOnInit]=\"false\"\r\n      [paginator]=\"true\"\r\n      [rows]=\"10\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [loading]=\"loading\"\r\n      [resizableColumns]=\"true\"\r\n      [scrollable]=\"true\"\r\n      (onLazyLoad)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template pTemplate=\"colgroup\">\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"emptymessage\" let-columns>\r\n        <tr\r\n          abp-table-empty-message\r\n          [attr.colspan]=\"columnWidths.length\"\r\n          localizationResource=\"AbpTenantManagement\"\r\n          localizationProp=\"NoDataAvailableInDatatable\"\r\n        ></tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th>{{ 'AbpTenantManagement::Actions' | abpLocalization }}</th>\r\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('name')\">\r\n            {{ 'AbpTenantManagement::TenantName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              sortKey=\"name\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpTenantManagement::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"editTenant(data.id)\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.ManageConnectionStrings'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"onEditConnectionString(data.id)\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Permission:ManageConnectionStrings' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.ManageFeatures'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"providerKey = data.id; visibleFeatures = true\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.name)\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>{{ data.name }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ selectedModalContent.title | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-container *ngTemplateOutlet=\"selectedModalContent?.template\"></ng-container>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"isDisabledSaveButton\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<ng-template #tenantModalTemplate>\r\n  <form [formGroup]=\"tenantForm\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <div class=\"mt-2\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">{{ 'AbpTenantManagement::TenantName' | abpLocalization }}</label>\r\n        <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" autofocus />\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #connectionStringModalTemplate>\r\n  <form [formGroup]=\"defaultConnectionStringForm\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <div class=\"form-group\">\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          id=\"useSharedDatabase\"\r\n          type=\"checkbox\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"useSharedDatabase\"\r\n          autofocus\r\n          (ngModelChange)=\"onSharedDatabaseChange($event)\"\r\n        />\r\n        <label for=\"useSharedDatabase\" class=\"custom-control-label\">{{\r\n          'AbpTenantManagement::DisplayName:UseSharedDatabase' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"!useSharedDatabase\">\r\n      <label for=\"defaultConnectionString\">{{\r\n        'AbpTenantManagement::DisplayName:DefaultConnectionString' | abpLocalization\r\n      }}</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"defaultConnectionString\"\r\n        class=\"form-control\"\r\n        formControlName=\"defaultConnectionString\"\r\n      />\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<abp-feature-management\r\n  *abpReplaceableTemplate=\"{\r\n    inputs: {\r\n      providerName: { value: 'T' },\r\n      providerKey: { value: providerKey },\r\n      visible: { value: visibleFeatures, twoWay: true }\r\n    },\r\n    outputs: { visibleChange: onVisibleFeaturesChange },\r\n    componentKey: 'FeatureManagement.FeatureManagementComponent'\r\n  }\"\r\n  [(visible)]=\"visibleFeatures\"\r\n  providerName=\"T\"\r\n  [providerKey]=\"providerKey\"\r\n>\r\n</abp-feature-management>\r\n";
    /***/
  },

  /***/
  "../../packages/feature-management/src/lib/actions/feature-management.actions.ts":
  /*!*********************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/actions/feature-management.actions.ts ***!
    \*********************************************************************************************************************************/

  /*! exports provided: GetFeatures, UpdateFeatures */

  /***/
  function packagesFeatureManagementSrcLibActionsFeatureManagementActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetFeatures", function () {
      return GetFeatures;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateFeatures", function () {
      return UpdateFeatures;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var GetFeatures = function GetFeatures(payload) {
      _classCallCheck(this, GetFeatures);

      this.payload = payload;
    };

    GetFeatures.type = '[FeatureManagement] Get Features';

    var UpdateFeatures = function UpdateFeatures(payload) {
      _classCallCheck(this, UpdateFeatures);

      this.payload = payload;
    };

    UpdateFeatures.type = '[FeatureManagement] Update Features';
    /***/
  },

  /***/
  "../../packages/feature-management/src/lib/actions/index.ts":
  /*!************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/actions/index.ts ***!
    \************************************************************************************************************/

  /*! exports provided: GetFeatures, UpdateFeatures */

  /***/
  function packagesFeatureManagementSrcLibActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _feature_management_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./feature-management.actions */
    "../../packages/feature-management/src/lib/actions/feature-management.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GetFeatures", function () {
      return _feature_management_actions__WEBPACK_IMPORTED_MODULE_1__["GetFeatures"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateFeatures", function () {
      return _feature_management_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateFeatures"];
    });
    /***/

  },

  /***/
  "../../packages/feature-management/src/lib/components/feature-management/feature-management.component.ts":
  /*!*********************************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/components/feature-management/feature-management.component.ts ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: FeatureManagementComponent */

  /***/
  function packagesFeatureManagementSrcLibComponentsFeatureManagementFeatureManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureManagementComponent", function () {
      return FeatureManagementComponent;
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


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../actions */
    "../../packages/feature-management/src/lib/actions/index.ts");
    /* harmony import */


    var _states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../states */
    "../../packages/feature-management/src/lib/states/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var FeatureManagementComponent =
    /*#__PURE__*/
    function () {
      function FeatureManagementComponent(store) {
        _classCallCheck(this, FeatureManagementComponent);

        this.store = store;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalBusy = false;
      }

      _createClass(FeatureManagementComponent, [{
        key: "openModal",
        value: function openModal() {
          if (!this.providerKey || !this.providerName) {
            throw new Error('Provider Key and Provider Name are required.');
          }

          this.getFeatures();
        }
      }, {
        key: "getFeatures",
        value: function getFeatures() {
          var _this = this;

          this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_4__["GetFeatures"]({
            providerKey: this.providerKey,
            providerName: this.providerName
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])('FeatureManagementState', 'features')).subscribe(function (features) {
            _this.buildForm(features);
          });
        }
      }, {
        key: "buildForm",
        value: function buildForm(features) {
          var formGroupObj = {};

          for (var i = 0; i < features.length; i++) {
            formGroupObj[i] = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](features[i].value === 'false' ? null : features[i].value);
          }

          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"](formGroupObj);
        }
      }, {
        key: "save",
        value: function save() {
          var _this2 = this;

          if (this.modalBusy) return;
          this.modalBusy = true;
          var features = this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_5__["FeatureManagementState"].getFeatures);
          features = features.map(function (feature, i) {
            return {
              name: feature.name,
              value: !_this2.form.value[i] || _this2.form.value[i] === 'false' ? null : _this2.form.value[i]
            };
          });
          this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_4__["UpdateFeatures"]({
            providerKey: this.providerKey,
            providerName: this.providerName,
            features: features
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            return _this2.modalBusy = false;
          })).subscribe(function () {
            _this2.visible = false;
          });
        }
      }, {
        key: "visible",
        get: function get() {
          return this._visible;
        },
        set: function set(value) {
          this._visible = value;
          this.visibleChange.emit(value);
          if (value) this.openModal();
        }
      }]);

      return FeatureManagementComponent;
    }();

    FeatureManagementComponent.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FeatureManagementComponent.prototype, "providerKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], FeatureManagementComponent.prototype, "providerName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])], FeatureManagementComponent.prototype, "visible", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FeatureManagementComponent.prototype, "visibleChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_states__WEBPACK_IMPORTED_MODULE_5__["FeatureManagementState"].getFeatures), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], FeatureManagementComponent.prototype, "features$", void 0);
    FeatureManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'abp-feature-management',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feature-management.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../packages/feature-management/src/lib/components/feature-management/feature-management.component.html"))["default"],
      exportAs: 'abpFeatureManagement'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], FeatureManagementComponent);
    /***/
  },

  /***/
  "../../packages/feature-management/src/lib/components/index.ts":
  /*!***************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/components/index.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: FeatureManagementComponent */

  /***/
  function packagesFeatureManagementSrcLibComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _feature_management_feature_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./feature-management/feature-management.component */
    "../../packages/feature-management/src/lib/components/feature-management/feature-management.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FeatureManagementComponent", function () {
      return _feature_management_feature_management_component__WEBPACK_IMPORTED_MODULE_1__["FeatureManagementComponent"];
    });
    /***/

  },

  /***/
  "../../packages/feature-management/src/lib/feature-management.module.ts":
  /*!************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/feature-management.module.ts ***!
    \************************************************************************************************************************/

  /*! exports provided: FeatureManagementModule */

  /***/
  function packagesFeatureManagementSrcLibFeatureManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureManagementModule", function () {
      return FeatureManagementModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../dist/core/fesm2015/abp-ng.core.js");
    /* harmony import */


    var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.theme.shared */
    "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _components_feature_management_feature_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/feature-management/feature-management.component */
    "../../packages/feature-management/src/lib/components/feature-management/feature-management.component.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _states_feature_management_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./states/feature-management.state */
    "../../packages/feature-management/src/lib/states/feature-management.state.ts");

    var FeatureManagementModule = function FeatureManagementModule() {
      _classCallCheck(this, FeatureManagementModule);
    };

    FeatureManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_components_feature_management_feature_management_component__WEBPACK_IMPORTED_MODULE_4__["FeatureManagementComponent"]],
      imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forFeature([_states_feature_management_state__WEBPACK_IMPORTED_MODULE_6__["FeatureManagementState"]])],
      exports: [_components_feature_management_feature_management_component__WEBPACK_IMPORTED_MODULE_4__["FeatureManagementComponent"]]
    })], FeatureManagementModule);
    /***/
  },

  /***/
  "../../packages/feature-management/src/lib/services/feature-management.service.ts":
  /*!**********************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/services/feature-management.service.ts ***!
    \**********************************************************************************************************************************/

  /*! exports provided: FeatureManagementService */

  /***/
  function packagesFeatureManagementSrcLibServicesFeatureManagementServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureManagementService", function () {
      return FeatureManagementService;
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


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../dist/core/fesm2015/abp-ng.core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");

    var FeatureManagementService =
    /*#__PURE__*/
    function () {
      function FeatureManagementService(rest, store) {
        _classCallCheck(this, FeatureManagementService);

        this.rest = rest;
        this.store = store;
      }

      _createClass(FeatureManagementService, [{
        key: "getFeatures",
        value: function getFeatures(params) {
          var request = {
            method: 'GET',
            url: '/api/abp/features',
            params: params
          };
          return this.rest.request(request);
        }
      }, {
        key: "updateFeatures",
        value: function updateFeatures(_ref) {
          var features = _ref.features,
              providerKey = _ref.providerKey,
              providerName = _ref.providerName;
          var request = {
            method: 'PUT',
            url: '/api/abp/features',
            body: {
              features: features
            },
            params: {
              providerKey: providerKey,
              providerName: providerName
            }
          };
          return this.rest.request(request);
        }
      }]);

      return FeatureManagementService;
    }();

    FeatureManagementService.ctorParameters = function () {
      return [{
        type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    FeatureManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])], FeatureManagementService);
    /***/
  },

  /***/
  "../../packages/feature-management/src/lib/states/feature-management.state.ts":
  /*!******************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/states/feature-management.state.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: FeatureManagementState */

  /***/
  function packagesFeatureManagementSrcLibStatesFeatureManagementStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureManagementState", function () {
      return FeatureManagementState;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_feature_management_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/feature-management.actions */
    "../../packages/feature-management/src/lib/actions/feature-management.actions.ts");
    /* harmony import */


    var _services_feature_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/feature-management.service */
    "../../packages/feature-management/src/lib/services/feature-management.service.ts");

    var FeatureManagementState =
    /*#__PURE__*/
    function () {
      function FeatureManagementState(featureManagementService) {
        _classCallCheck(this, FeatureManagementState);

        this.featureManagementService = featureManagementService;
      }

      _createClass(FeatureManagementState, [{
        key: "getFeatures",
        value: function getFeatures(_ref2, _ref3) {
          var patchState = _ref2.patchState;
          var payload = _ref3.payload;
          return this.featureManagementService.getFeatures(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_ref4) {
            var features = _ref4.features;
            return patchState({
              features: features
            });
          }));
        }
      }, {
        key: "updateFeatures",
        value: function updateFeatures(_, _ref5) {
          var payload = _ref5.payload;
          return this.featureManagementService.updateFeatures(payload);
        }
      }], [{
        key: "getFeatures",
        value: function getFeatures(_ref6) {
          var features = _ref6.features;
          return features || [];
        }
      }]);

      return FeatureManagementState;
    }();

    FeatureManagementState.ctorParameters = function () {
      return [{
        type: _services_feature_management_service__WEBPACK_IMPORTED_MODULE_4__["FeatureManagementService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_feature_management_actions__WEBPACK_IMPORTED_MODULE_3__["GetFeatures"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_feature_management_actions__WEBPACK_IMPORTED_MODULE_3__["GetFeatures"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], FeatureManagementState.prototype, "getFeatures", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_feature_management_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateFeatures"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_feature_management_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateFeatures"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], FeatureManagementState.prototype, "updateFeatures", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], FeatureManagementState, "getFeatures", null);
    FeatureManagementState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'FeatureManagementState',
      defaults: {
        features: {}
      }
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feature_management_service__WEBPACK_IMPORTED_MODULE_4__["FeatureManagementService"]])], FeatureManagementState);
    /***/
  },

  /***/
  "../../packages/feature-management/src/lib/states/index.ts":
  /*!***********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/lib/states/index.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: FeatureManagementState */

  /***/
  function packagesFeatureManagementSrcLibStatesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _feature_management_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./feature-management.state */
    "../../packages/feature-management/src/lib/states/feature-management.state.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FeatureManagementState", function () {
      return _feature_management_state__WEBPACK_IMPORTED_MODULE_1__["FeatureManagementState"];
    });
    /***/

  },

  /***/
  "../../packages/feature-management/src/public-api.ts":
  /*!*****************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/feature-management/src/public-api.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: FeatureManagementModule, FeatureManagementComponent */

  /***/
  function packagesFeatureManagementSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lib_feature_management_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/feature-management.module */
    "../../packages/feature-management/src/lib/feature-management.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FeatureManagementModule", function () {
      return _lib_feature_management_module__WEBPACK_IMPORTED_MODULE_1__["FeatureManagementModule"];
    });
    /* harmony import */


    var _lib_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/components */
    "../../packages/feature-management/src/lib/components/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FeatureManagementComponent", function () {
      return _lib_components__WEBPACK_IMPORTED_MODULE_2__["FeatureManagementComponent"];
    });
    /***/

  },

  /***/
  "../../packages/tenant-management/src/lib/actions/index.ts":
  /*!***********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/actions/index.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: GetTenants, GetTenantById, CreateTenant, UpdateTenant, DeleteTenant */

  /***/
  function packagesTenantManagementSrcLibActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tenant_management_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tenant-management.actions */
    "../../packages/tenant-management/src/lib/actions/tenant-management.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GetTenants", function () {
      return _tenant_management_actions__WEBPACK_IMPORTED_MODULE_1__["GetTenants"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GetTenantById", function () {
      return _tenant_management_actions__WEBPACK_IMPORTED_MODULE_1__["GetTenantById"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateTenant", function () {
      return _tenant_management_actions__WEBPACK_IMPORTED_MODULE_1__["CreateTenant"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateTenant", function () {
      return _tenant_management_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateTenant"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DeleteTenant", function () {
      return _tenant_management_actions__WEBPACK_IMPORTED_MODULE_1__["DeleteTenant"];
    });
    /***/

  },

  /***/
  "../../packages/tenant-management/src/lib/actions/tenant-management.actions.ts":
  /*!*******************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/actions/tenant-management.actions.ts ***!
    \*******************************************************************************************************************************/

  /*! exports provided: GetTenants, GetTenantById, CreateTenant, UpdateTenant, DeleteTenant */

  /***/
  function packagesTenantManagementSrcLibActionsTenantManagementActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetTenants", function () {
      return GetTenants;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetTenantById", function () {
      return GetTenantById;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTenant", function () {
      return CreateTenant;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateTenant", function () {
      return UpdateTenant;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteTenant", function () {
      return DeleteTenant;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var GetTenants = function GetTenants(payload) {
      _classCallCheck(this, GetTenants);

      this.payload = payload;
    };

    GetTenants.type = '[TenantManagement] Get Tenant';

    var GetTenantById = function GetTenantById(payload) {
      _classCallCheck(this, GetTenantById);

      this.payload = payload;
    };

    GetTenantById.type = '[TenantManagement] Get Tenant By Id';

    var CreateTenant = function CreateTenant(payload) {
      _classCallCheck(this, CreateTenant);

      this.payload = payload;
    };

    CreateTenant.type = '[TenantManagement] Create Tenant';

    var UpdateTenant = function UpdateTenant(payload) {
      _classCallCheck(this, UpdateTenant);

      this.payload = payload;
    };

    UpdateTenant.type = '[TenantManagement] Update Tenant';

    var DeleteTenant = function DeleteTenant(payload) {
      _classCallCheck(this, DeleteTenant);

      this.payload = payload;
    };

    DeleteTenant.type = '[TenantManagement] Delete Tenant';
    /***/
  },

  /***/
  "../../packages/tenant-management/src/lib/components/index.ts":
  /*!**************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/components/index.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: TenantsComponent */

  /***/
  function packagesTenantManagementSrcLibComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tenants_tenants_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tenants/tenants.component */
    "../../packages/tenant-management/src/lib/components/tenants/tenants.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TenantsComponent", function () {
      return _tenants_tenants_component__WEBPACK_IMPORTED_MODULE_1__["TenantsComponent"];
    });
    /***/

  },

  /***/
  "../../packages/tenant-management/src/lib/components/tenants/tenants.component.ts":
  /*!**********************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/components/tenants/tenants.component.ts ***!
    \**********************************************************************************************************************************/

  /*! exports provided: TenantsComponent */

  /***/
  function packagesTenantManagementSrcLibComponentsTenantsTenantsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantsComponent", function () {
      return TenantsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @abp/ng.theme.shared */
    "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../actions/tenant-management.actions */
    "../../packages/tenant-management/src/lib/actions/tenant-management.actions.ts");
    /* harmony import */


    var _services_tenant_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/tenant-management.service */
    "../../packages/tenant-management/src/lib/services/tenant-management.service.ts");
    /* harmony import */


    var _states_tenant_management_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../states/tenant-management.state */
    "../../packages/tenant-management/src/lib/states/tenant-management.state.ts");

    var TenantsComponent =
    /*#__PURE__*/
    function () {
      function TenantsComponent(confirmationService, tenantService, fb, store) {
        var _this3 = this;

        _classCallCheck(this, TenantsComponent);

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

        this.onVisibleFeaturesChange = function (value) {
          _this3.visibleFeatures = value;
        };
      }

      _createClass(TenantsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.get();
        }
      }, {
        key: "onSearch",
        value: function onSearch(value) {
          this.pageQuery.filter = value;
          this.get();
        }
      }, {
        key: "createTenantForm",
        value: function createTenantForm() {
          this.tenantForm = this.fb.group({
            name: [this.selected.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(256)]]
          });
        }
      }, {
        key: "createDefaultConnectionStringForm",
        value: function createDefaultConnectionStringForm() {
          this.defaultConnectionStringForm = this.fb.group({
            useSharedDatabase: this._useSharedDatabase,
            defaultConnectionString: [this.defaultConnectionString || '']
          });
        }
      }, {
        key: "openModal",
        value: function openModal(title, template, type) {
          this.selectedModalContent = {
            title: title,
            template: template,
            type: type
          };
          this.isModalVisible = true;
        }
      }, {
        key: "onEditConnectionString",
        value: function onEditConnectionString(id) {
          var _this4 = this;

          this.store.dispatch(new _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_7__["GetTenantById"](id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('TenantManagementState', 'selectedItem'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (selected) {
            _this4.selected = selected;
            return _this4.tenantService.getDefaultConnectionString(id);
          })).subscribe(function (fetchedConnectionString) {
            _this4._useSharedDatabase = fetchedConnectionString ? false : true;
            _this4.defaultConnectionString = fetchedConnectionString ? fetchedConnectionString : '';

            _this4.createDefaultConnectionStringForm();

            _this4.openModal('AbpTenantManagement::ConnectionStrings', _this4.connectionStringModalTemplate, 'saveConnStr');
          });
        }
      }, {
        key: "addTenant",
        value: function addTenant() {
          this.selected = {};
          this.createTenantForm();
          this.openModal('AbpTenantManagement::NewTenant', this.tenantModalTemplate, 'saveTenant');
        }
      }, {
        key: "editTenant",
        value: function editTenant(id) {
          var _this5 = this;

          this.store.dispatch(new _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_7__["GetTenantById"](id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('TenantManagementState', 'selectedItem')).subscribe(function (selected) {
            _this5.selected = selected;

            _this5.createTenantForm();

            _this5.openModal('AbpTenantManagement::Edit', _this5.tenantModalTemplate, 'saveTenant');
          });
        }
      }, {
        key: "save",
        value: function save() {
          var type = this.selectedModalContent.type;
          if (!type) return;
          if (type === 'saveTenant') this.saveTenant();else if (type === 'saveConnStr') this.saveConnectionString();
        }
      }, {
        key: "saveConnectionString",
        value: function saveConnectionString() {
          var _this6 = this;

          if (this.modalBusy) return;
          this.modalBusy = true;

          if (this.useSharedDatabase || !this.useSharedDatabase && !this.connectionString) {
            this.tenantService.deleteDefaultConnectionString(this.selected.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this6.modalBusy = false;
            })).subscribe(function () {
              _this6.isModalVisible = false;
            });
          } else {
            this.tenantService.updateDefaultConnectionString({
              id: this.selected.id,
              defaultConnectionString: this.connectionString
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this6.modalBusy = false;
            })).subscribe(function () {
              _this6.isModalVisible = false;
            });
          }
        }
      }, {
        key: "saveTenant",
        value: function saveTenant() {
          var _this7 = this;

          if (!this.tenantForm.valid || this.modalBusy) return;
          this.modalBusy = true;
          this.store.dispatch(this.selected.id ? new _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateTenant"](Object.assign({}, this.selected, this.tenantForm.value, {
            id: this.selected.id
          })) : new _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_7__["CreateTenant"](this.tenantForm.value)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            return _this7.modalBusy = false;
          })).subscribe(function () {
            _this7.isModalVisible = false;

            _this7.get();
          });
        }
      }, {
        key: "delete",
        value: function _delete(id, name) {
          var _this8 = this;

          this.confirmationService.warn('AbpTenantManagement::TenantDeletionConfirmationMessage', 'AbpTenantManagement::AreYouSure', {
            messageLocalizationParams: [name]
          }).subscribe(function (status) {
            if (status === "confirm"
            /* confirm */
            ) {
                _this8.store.dispatch(new _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_7__["DeleteTenant"](id)).subscribe(function () {
                  return _this8.get();
                });
              }
          });
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(data) {
          this.pageQuery.skipCount = data.first;
          this.pageQuery.maxResultCount = data.rows;
          this.get();
        }
      }, {
        key: "get",
        value: function get() {
          var _this9 = this;

          this.loading = true;
          this.store.dispatch(new _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_7__["GetTenants"](this.pageQuery)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            return _this9.loading = false;
          })).subscribe();
        }
      }, {
        key: "onSharedDatabaseChange",
        value: function onSharedDatabaseChange(value) {
          if (!value) {
            setTimeout(function () {
              var defaultConnectionString = document.getElementById('defaultConnectionString');

              if (defaultConnectionString) {
                defaultConnectionString.focus();
              }
            }, 0);
          }
        }
      }, {
        key: "useSharedDatabase",
        get: function get() {
          return this.defaultConnectionStringForm.get('useSharedDatabase').value;
        }
      }, {
        key: "connectionString",
        get: function get() {
          return this.defaultConnectionStringForm.get('defaultConnectionString').value;
        }
      }, {
        key: "isDisabledSaveButton",
        get: function get() {
          if (!this.selectedModalContent) return false;

          if (this.selectedModalContent.type === 'saveConnStr' && this.defaultConnectionStringForm && this.defaultConnectionStringForm.invalid) {
            return true;
          } else if (this.selectedModalContent.type === 'saveTenant' && this.tenantForm && this.tenantForm.invalid) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return TenantsComponent;
    }();

    TenantsComponent.ctorParameters = function () {
      return [{
        type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]
      }, {
        type: _services_tenant_management_service__WEBPACK_IMPORTED_MODULE_8__["TenantManagementService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_states_tenant_management_state__WEBPACK_IMPORTED_MODULE_9__["TenantManagementState"].get), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])], TenantsComponent.prototype, "data$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_states_tenant_management_state__WEBPACK_IMPORTED_MODULE_9__["TenantManagementState"].getTenantsTotalCount), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])], TenantsComponent.prototype, "totalCount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tenantModalTemplate', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])], TenantsComponent.prototype, "tenantModalTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('connectionStringModalTemplate', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])], TenantsComponent.prototype, "connectionStringModalTemplate", void 0);
    TenantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'abp-tenants',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tenants.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../packages/tenant-management/src/lib/components/tenants/tenants.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], _services_tenant_management_service__WEBPACK_IMPORTED_MODULE_8__["TenantManagementService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])], TenantsComponent);
    /***/
  },

  /***/
  "../../packages/tenant-management/src/lib/services/index.ts":
  /*!************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/services/index.ts ***!
    \************************************************************************************************************/

  /*! exports provided: TenantManagementService, TenantManagementStateService */

  /***/
  function packagesTenantManagementSrcLibServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tenant_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tenant-management.service */
    "../../packages/tenant-management/src/lib/services/tenant-management.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementService", function () {
      return _tenant_management_service__WEBPACK_IMPORTED_MODULE_1__["TenantManagementService"];
    });
    /* harmony import */


    var _tenant_management_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tenant-management-state.service */
    "../../packages/tenant-management/src/lib/services/tenant-management-state.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementStateService", function () {
      return _tenant_management_state_service__WEBPACK_IMPORTED_MODULE_2__["TenantManagementStateService"];
    });
    /***/

  },

  /***/
  "../../packages/tenant-management/src/lib/services/tenant-management-state.service.ts":
  /*!**************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/services/tenant-management-state.service.ts ***!
    \**************************************************************************************************************************************/

  /*! exports provided: TenantManagementStateService */

  /***/
  function packagesTenantManagementSrcLibServicesTenantManagementStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementStateService", function () {
      return TenantManagementStateService;
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


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _states_tenant_management_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../states/tenant-management.state */
    "../../packages/tenant-management/src/lib/states/tenant-management.state.ts");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions */
    "../../packages/tenant-management/src/lib/actions/index.ts");

    var TenantManagementStateService =
    /*#__PURE__*/
    function () {
      function TenantManagementStateService(store) {
        _classCallCheck(this, TenantManagementStateService);

        this.store = store;
      }

      _createClass(TenantManagementStateService, [{
        key: "get",
        value: function get() {
          return this.store.selectSnapshot(_states_tenant_management_state__WEBPACK_IMPORTED_MODULE_3__["TenantManagementState"].get);
        }
      }, {
        key: "getTenantsTotalCount",
        value: function getTenantsTotalCount() {
          return this.store.selectSnapshot(_states_tenant_management_state__WEBPACK_IMPORTED_MODULE_3__["TenantManagementState"].getTenantsTotalCount);
        }
      }, {
        key: "dispatchGetTenants",
        value: function dispatchGetTenants() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return this.store.dispatch(_construct(_actions__WEBPACK_IMPORTED_MODULE_4__["GetTenants"], args));
        }
      }, {
        key: "dispatchGetTenantById",
        value: function dispatchGetTenantById() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return this.store.dispatch(_construct(_actions__WEBPACK_IMPORTED_MODULE_4__["GetTenantById"], args));
        }
      }, {
        key: "dispatchCreateTenant",
        value: function dispatchCreateTenant() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return this.store.dispatch(_construct(_actions__WEBPACK_IMPORTED_MODULE_4__["CreateTenant"], args));
        }
      }, {
        key: "dispatchUpdateTenant",
        value: function dispatchUpdateTenant() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          return this.store.dispatch(_construct(_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateTenant"], args));
        }
      }, {
        key: "dispatchDeleteTenant",
        value: function dispatchDeleteTenant() {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          return this.store.dispatch(_construct(_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteTenant"], args));
        }
      }]);

      return TenantManagementStateService;
    }();

    TenantManagementStateService.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    TenantManagementStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], TenantManagementStateService);
    /***/
  },

  /***/
  "../../packages/tenant-management/src/lib/services/tenant-management.service.ts":
  /*!********************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/services/tenant-management.service.ts ***!
    \********************************************************************************************************************************/

  /*! exports provided: TenantManagementService */

  /***/
  function packagesTenantManagementSrcLibServicesTenantManagementServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementService", function () {
      return TenantManagementService;
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


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../dist/core/fesm2015/abp-ng.core.js");

    var TenantManagementService =
    /*#__PURE__*/
    function () {
      function TenantManagementService(rest) {
        _classCallCheck(this, TenantManagementService);

        this.rest = rest;
      }

      _createClass(TenantManagementService, [{
        key: "getTenant",
        value: function getTenant() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var request = {
            method: 'GET',
            url: '/api/multi-tenancy/tenants',
            params: params
          };
          return this.rest.request(request);
        }
      }, {
        key: "getTenantById",
        value: function getTenantById(id) {
          var request = {
            method: 'GET',
            url: "/api/multi-tenancy/tenants/".concat(id)
          };
          return this.rest.request(request);
        }
      }, {
        key: "deleteTenant",
        value: function deleteTenant(id) {
          var request = {
            method: 'DELETE',
            url: "/api/multi-tenancy/tenants/".concat(id)
          };
          return this.rest.request(request);
        }
      }, {
        key: "createTenant",
        value: function createTenant(body) {
          var request = {
            method: 'POST',
            url: '/api/multi-tenancy/tenants',
            body: body
          };
          return this.rest.request(request);
        }
      }, {
        key: "updateTenant",
        value: function updateTenant(body) {
          var url = "/api/multi-tenancy/tenants/".concat(body.id);
          delete body.id;
          var request = {
            method: 'PUT',
            url: url,
            body: body
          };
          return this.rest.request(request);
        }
      }, {
        key: "getDefaultConnectionString",
        value: function getDefaultConnectionString(id) {
          var url = "/api/multi-tenancy/tenants/".concat(id, "/default-connection-string");
          var request = {
            method: 'GET',
            responseType: "text"
            /* Text */
            ,
            url: url
          };
          return this.rest.request(request);
        }
      }, {
        key: "updateDefaultConnectionString",
        value: function updateDefaultConnectionString(payload) {
          var url = "/api/multi-tenancy/tenants/".concat(payload.id, "/default-connection-string");
          var request = {
            method: 'PUT',
            url: url,
            params: {
              defaultConnectionString: payload.defaultConnectionString
            }
          };
          return this.rest.request(request);
        }
      }, {
        key: "deleteDefaultConnectionString",
        value: function deleteDefaultConnectionString(id) {
          var url = "/api/multi-tenancy/tenants/".concat(id, "/default-connection-string");
          var request = {
            method: 'DELETE',
            url: url
          };
          return this.rest.request(request);
        }
      }]);

      return TenantManagementService;
    }();

    TenantManagementService.ctorParameters = function () {
      return [{
        type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }];
    };

    TenantManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"]])], TenantManagementService);
    /***/
  },

  /***/
  "../../packages/tenant-management/src/lib/states/index.ts":
  /*!**********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/states/index.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: TenantManagementState */

  /***/
  function packagesTenantManagementSrcLibStatesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _tenant_management_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tenant-management.state */
    "../../packages/tenant-management/src/lib/states/tenant-management.state.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementState", function () {
      return _tenant_management_state__WEBPACK_IMPORTED_MODULE_1__["TenantManagementState"];
    });
    /***/

  },

  /***/
  "../../packages/tenant-management/src/lib/states/tenant-management.state.ts":
  /*!****************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/states/tenant-management.state.ts ***!
    \****************************************************************************************************************************/

  /*! exports provided: TenantManagementState */

  /***/
  function packagesTenantManagementSrcLibStatesTenantManagementStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementState", function () {
      return TenantManagementState;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/tenant-management.actions */
    "../../packages/tenant-management/src/lib/actions/tenant-management.actions.ts");
    /* harmony import */


    var _services_tenant_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/tenant-management.service */
    "../../packages/tenant-management/src/lib/services/tenant-management.service.ts");

    var TenantManagementState =
    /*#__PURE__*/
    function () {
      function TenantManagementState(tenantManagementService) {
        _classCallCheck(this, TenantManagementState);

        this.tenantManagementService = tenantManagementService;
      }

      _createClass(TenantManagementState, [{
        key: "get",
        value: function get(_ref7, _ref8) {
          var patchState = _ref7.patchState;
          var payload = _ref8.payload;
          return this.tenantManagementService.getTenant(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (result) {
            return patchState({
              result: result
            });
          }));
        }
      }, {
        key: "getById",
        value: function getById(_ref9, _ref10) {
          var patchState = _ref9.patchState;
          var payload = _ref10.payload;
          return this.tenantManagementService.getTenantById(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (selectedItem) {
            return patchState({
              selectedItem: selectedItem
            });
          }));
        }
      }, {
        key: "delete",
        value: function _delete(_, _ref11) {
          var payload = _ref11.payload;
          return this.tenantManagementService.deleteTenant(payload);
        }
      }, {
        key: "add",
        value: function add(_, _ref12) {
          var payload = _ref12.payload;
          return this.tenantManagementService.createTenant(payload);
        }
      }, {
        key: "update",
        value: function update(_ref13, _ref14) {
          var getState = _ref13.getState;
          var payload = _ref14.payload;
          return this.tenantManagementService.updateTenant(Object.assign({}, getState().selectedItem, payload));
        }
      }], [{
        key: "get",
        value: function get(_ref15) {
          var result = _ref15.result;
          return result.items || [];
        }
      }, {
        key: "getTenantsTotalCount",
        value: function getTenantsTotalCount(_ref16) {
          var result = _ref16.result;
          return result.totalCount;
        }
      }]);

      return TenantManagementState;
    }();

    TenantManagementState.ctorParameters = function () {
      return [{
        type: _services_tenant_management_service__WEBPACK_IMPORTED_MODULE_4__["TenantManagementService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["GetTenants"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["GetTenants"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], TenantManagementState.prototype, "get", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["GetTenantById"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["GetTenantById"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], TenantManagementState.prototype, "getById", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteTenant"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteTenant"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], TenantManagementState.prototype, "delete", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["CreateTenant"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["CreateTenant"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], TenantManagementState.prototype, "add", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateTenant"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_tenant_management_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateTenant"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], TenantManagementState.prototype, "update", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)], TenantManagementState, "get", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Number)], TenantManagementState, "getTenantsTotalCount", null);
    TenantManagementState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'TenantManagementState',
      defaults: {
        result: {},
        selectedItem: {}
      }
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tenant_management_service__WEBPACK_IMPORTED_MODULE_4__["TenantManagementService"]])], TenantManagementState);
    /***/
  },

  /***/
  "../../packages/tenant-management/src/lib/tenant-management-routing.module.ts":
  /*!******************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/tenant-management-routing.module.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: TenantManagementRoutingModule */

  /***/
  function packagesTenantManagementSrcLibTenantManagementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementRoutingModule", function () {
      return TenantManagementRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../dist/core/fesm2015/abp-ng.core.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/tenants/tenants.component */
    "../../packages/tenant-management/src/lib/components/tenants/tenants.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'tenants',
      pathMatch: 'full'
    }, {
      path: '',
      component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["DynamicLayoutComponent"],
      canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["PermissionGuard"]],
      children: [{
        path: 'tenants',
        component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableRouteContainerComponent"],
        data: {
          requiredPolicy: 'AbpTenantManagement.Tenants',
          replaceableComponent: {
            key: 'TenantManagement.TenantsComponent',
            defaultComponent: _components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_4__["TenantsComponent"]
          }
        }
      }]
    }];

    var TenantManagementRoutingModule = function TenantManagementRoutingModule() {
      _classCallCheck(this, TenantManagementRoutingModule);
    };

    TenantManagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], TenantManagementRoutingModule);
    /***/
  },

  /***/
  "../../packages/tenant-management/src/lib/tenant-management.module.ts":
  /*!**********************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/lib/tenant-management.module.ts ***!
    \**********************************************************************************************************************/

  /*! exports provided: TenantManagementModule */

  /***/
  function packagesTenantManagementSrcLibTenantManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementModule", function () {
      return TenantManagementModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../dist/core/fesm2015/abp-ng.core.js");
    /* harmony import */


    var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.theme.shared */
    "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/table */
    "../../node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/tenants/tenants.component */
    "../../packages/tenant-management/src/lib/components/tenants/tenants.component.ts");
    /* harmony import */


    var _states_tenant_management_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./states/tenant-management.state */
    "../../packages/tenant-management/src/lib/states/tenant-management.state.ts");
    /* harmony import */


    var _tenant_management_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./tenant-management-routing.module */
    "../../packages/tenant-management/src/lib/tenant-management-routing.module.ts");
    /* harmony import */


    var _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @abp/ng.feature-management */
    "../../packages/feature-management/src/public-api.ts");
    /* harmony import */


    var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-validate/core */
    "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");

    var TenantManagementModule = function TenantManagementModule() {
      _classCallCheck(this, TenantManagementModule);
    };

    TenantManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_7__["TenantsComponent"]],
      imports: [_tenant_management_routing_module__WEBPACK_IMPORTED_MODULE_9__["TenantManagementRoutingModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forFeature([_states_tenant_management_state__WEBPACK_IMPORTED_MODULE_8__["TenantManagementState"]]), _ngx_validate_core__WEBPACK_IMPORTED_MODULE_11__["NgxValidateCoreModule"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], _abp_ng_feature_management__WEBPACK_IMPORTED_MODULE_10__["FeatureManagementModule"]]
    })], TenantManagementModule);
    /***/
  },

  /***/
  "../../packages/tenant-management/src/public-api.ts":
  /*!****************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management/src/public-api.ts ***!
    \****************************************************************************************************/

  /*! exports provided: TenantManagementModule, GetTenants, GetTenantById, CreateTenant, UpdateTenant, DeleteTenant, TenantsComponent, TenantManagementService, TenantManagementStateService, TenantManagementState */

  /***/
  function packagesTenantManagementSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lib_tenant_management_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/tenant-management.module */
    "../../packages/tenant-management/src/lib/tenant-management.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementModule", function () {
      return _lib_tenant_management_module__WEBPACK_IMPORTED_MODULE_1__["TenantManagementModule"];
    });
    /* harmony import */


    var _lib_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/actions */
    "../../packages/tenant-management/src/lib/actions/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GetTenants", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["GetTenants"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GetTenantById", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["GetTenantById"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateTenant", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["CreateTenant"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateTenant", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateTenant"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DeleteTenant", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteTenant"];
    });
    /* harmony import */


    var _lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/components */
    "../../packages/tenant-management/src/lib/components/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TenantsComponent", function () {
      return _lib_components__WEBPACK_IMPORTED_MODULE_3__["TenantsComponent"];
    });
    /* harmony import */


    var _lib_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lib/services */
    "../../packages/tenant-management/src/lib/services/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementService", function () {
      return _lib_services__WEBPACK_IMPORTED_MODULE_4__["TenantManagementService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementStateService", function () {
      return _lib_services__WEBPACK_IMPORTED_MODULE_4__["TenantManagementStateService"];
    });
    /* harmony import */


    var _lib_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lib/states */
    "../../packages/tenant-management/src/lib/states/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementState", function () {
      return _lib_states__WEBPACK_IMPORTED_MODULE_5__["TenantManagementState"];
    });
    /***/

  },

  /***/
  "./src/app/lazy-libs/tenant-management-wrapper.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/lazy-libs/tenant-management-wrapper.module.ts ***!
    \***************************************************************/

  /*! exports provided: TenantManagementWrapperModule */

  /***/
  function srcAppLazyLibsTenantManagementWrapperModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementWrapperModule", function () {
      return TenantManagementWrapperModule;
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


    var _abp_ng_tenant_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.tenant-management */
    "../../packages/tenant-management/src/public-api.ts");

    var TenantManagementWrapperModule = function TenantManagementWrapperModule() {
      _classCallCheck(this, TenantManagementWrapperModule);
    };

    TenantManagementWrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_abp_ng_tenant_management__WEBPACK_IMPORTED_MODULE_2__["TenantManagementModule"]]
    })], TenantManagementWrapperModule);
    /***/
  }
}]);
//# sourceMappingURL=lazy-libs-tenant-management-wrapper-module-es5.js.map