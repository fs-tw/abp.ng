function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-libs-identity-wrapper-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../packages/identity/src/lib/components/roles/roles.component.html":
  /*!***********************************************************************************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/components/roles/roles.component.html ***!
    \***********************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsPackagesIdentitySrcLibComponentsRolesRolesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Roles' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Roles.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewRole' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <p-table\r\n      *ngIf=\"[150, 0] as columnWidths\"\r\n      [value]=\"data$ | async\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [lazy]=\"true\"\r\n      [lazyLoadOnInit]=\"false\"\r\n      [paginator]=\"true\"\r\n      [rows]=\"10\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [loading]=\"loading\"\r\n      [resizableColumns]=\"true\"\r\n      [scrollable]=\"true\"\r\n      (onLazyLoad)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template pTemplate=\"colgroup\">\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"emptymessage\" let-columns>\r\n        <tr\r\n          abp-table-empty-message\r\n          [attr.colspan]=\"columnWidths.length\"\r\n          localizationResource=\"AbpIdentity\"\r\n          localizationProp=\"NoDataAvailableInDatatable\"\r\n        ></tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('name')\">\r\n            {{ 'AbpIdentity::RoleName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              sortKey=\"name\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            ></abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Roles.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"edit(data.id)\"\r\n                >\r\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Roles.ManagePermissions'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"providerKey = data.name; visiblePermissions = true\"\r\n                >\r\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Roles.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.name)\"\r\n                >\r\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            {{ data.name\r\n            }}<span *ngIf=\"data.isDefault\" class=\"badge badge-pill badge-success ml-1\">{{\r\n              'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n            }}</span>\r\n            <span *ngIf=\"data.isPublic\" class=\"badge badge-pill badge-info ml-1\">{{\r\n              'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n            }}</span>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <form #formRef [formGroup]=\"form\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n      <div class=\"form-group\">\r\n        <label for=\"role-name\">{{ 'AbpIdentity::RoleName' | abpLocalization }}</label\r\n        ><span> * </span>\r\n        <input autofocus type=\"text\" id=\"role-name\" class=\"form-control\" formControlName=\"name\" />\r\n      </div>\r\n\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"role-is-default\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"isDefault\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"role-is-default\">{{\r\n          'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"role-is-public\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"isPublic\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"role-is-public\">{{\r\n          'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid\" (click)=\"onClickSaveButton()\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'R' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true },\r\n        hideBadges: { value: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: 'PermissionManagement.PermissionManagementComponent'\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n\r\n<!-- <abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"{\r\n    inputs: {\r\n      providerName: { value: 'R' },\r\n      providerKey: { value: providerKey },\r\n      visible: { value: visiblePermissions, twoWay: true },\r\n      hideBadges: { value: true }\r\n    },\r\n    outputs: { visibleChange: onVisiblePermissionChange },\r\n    componentKey: 'PermissionManagement.PermissionManagementComponent'\r\n  }\"\r\n  [(visible)]=\"visiblePermissions\"\r\n  [providerKey]=\"providerKey\"\r\n  [hideBadges]=\"true\"\r\n  providerName=\"R\"\r\n>\r\n</abp-permission-management> -->\r\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../packages/identity/src/lib/components/users/users.component.html":
  /*!***********************************************************************************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/components/users/users.component.html ***!
    \***********************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsPackagesIdentitySrcLibComponentsUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Users' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Users.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewUser' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <label\r\n        ><input\r\n          type=\"search\"\r\n          class=\"form-control form-control-sm\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          (input.debounce)=\"onSearch($event.target.value)\"\r\n      /></label>\r\n    </div>\r\n    <p-table\r\n      *ngIf=\"[150, 250, 250, 250] as columnWidths\"\r\n      [value]=\"data$ | async\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [lazy]=\"true\"\r\n      [lazyLoadOnInit]=\"false\"\r\n      [paginator]=\"true\"\r\n      [rows]=\"10\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [loading]=\"loading\"\r\n      [resizableColumns]=\"true\"\r\n      [scrollable]=\"true\"\r\n      (onLazyLoad)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template pTemplate=\"colgroup\">\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"emptymessage\" let-columns>\r\n        <tr\r\n          abp-table-empty-message\r\n          [attr.colspan]=\"columnWidths.length\"\r\n          localizationResource=\"AbpIdentity\"\r\n          localizationProp=\"NoDataAvailableInDatatable\"\r\n        ></tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('userName')\">\r\n            {{ 'AbpIdentity::UserName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              sortKey=\"userName\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('email')\">\r\n            {{ 'AbpIdentity::EmailAddress' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              sortKey=\"email\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            ></abp-sort-order-icon>\r\n          </th>\r\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('phoneNumber')\">\r\n            {{ 'AbpIdentity::PhoneNumber' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              sortKey=\"phoneNumber\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"edit(data.id)\"\r\n                >\r\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.ManagePermissions'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"providerKey = data.id; visiblePermissions = true\"\r\n                >\r\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.userName)\"\r\n                >\r\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>{{ data.userName }}</td>\r\n          <td>{{ data.email }}</td>\r\n          <td>{{ data.phoneNumber }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\" (disappear)=\"form = null\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-template #loaderRef\r\n      ><div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div\r\n    ></ng-template>\r\n\r\n    <form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n      <ngb-tabset>\r\n        <ngb-tab [title]=\"'AbpIdentity::UserInformations' | abpLocalization\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"mt-2 fade-in-top\">\r\n              <div class=\"form-group\">\r\n                <label for=\"user-name\">{{ 'AbpIdentity::UserName' | abpLocalization }}</label\r\n                ><span> * </span>\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"user-name\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"userName\"\r\n                  autofocus\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label>\r\n                <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"surname\">{{\r\n                  'AbpIdentity::DisplayName:Surname' | abpLocalization\r\n                }}</label>\r\n                <input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">{{ 'AbpIdentity::Password' | abpLocalization }}</label\r\n                ><span *ngIf=\"!selected.userName\"> * </span>\r\n                <input\r\n                  type=\"password\"\r\n                  id=\"password\"\r\n                  autocomplete=\"new-password\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"password\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">{{ 'AbpIdentity::EmailAddress' | abpLocalization }}</label\r\n                ><span> * </span>\r\n                <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"phone-number\">{{ 'AbpIdentity::PhoneNumber' | abpLocalization }}</label>\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"phone-number\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"phoneNumber\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"custom-checkbox custom-control mb-2\">\r\n                <input\r\n                  type=\"checkbox\"\r\n                  id=\"lockout-checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  formControlName=\"lockoutEnabled\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"lockout-checkbox\">{{\r\n                  'AbpIdentity::DisplayName:LockoutEnabled' | abpLocalization\r\n                }}</label>\r\n              </div>\r\n\r\n              <div class=\"custom-checkbox custom-control mb-2\">\r\n                <input\r\n                  type=\"checkbox\"\r\n                  id=\"two-factor-checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  formControlName=\"twoFactorEnabled\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"two-factor-checkbox\">{{\r\n                  'AbpIdentity::DisplayName:TwoFactorEnabled' | abpLocalization\r\n                }}</label>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab [title]=\"'AbpIdentity::Roles' | abpLocalization\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"mt-2 fade-in-top\">\r\n              <div\r\n                *ngFor=\"let roleGroup of roleGroups; let i = index; trackBy: trackByFn\"\r\n                class=\"custom-checkbox custom-control mb-2\"\r\n              >\r\n                <input\r\n                  type=\"checkbox\"\r\n                  name=\"Roles[0].IsAssigned\"\r\n                  value=\"true\"\r\n                  class=\"custom-control-input\"\r\n                  [attr.id]=\"'roles-' + i\"\r\n                  [formControl]=\"roleGroup.controls[roles[i].name]\"\r\n                />\r\n                <label class=\"custom-control-label\" [attr.for]=\"'roles-' + i\">{{\r\n                  roles[i].name\r\n                }}</label>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n      </ngb-tabset>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"form?.invalid\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'U' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: 'PermissionManagement.PermissionManagementComponent'\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../packages/permission-management/src/lib/components/permission-management.component.html":
  /*!**********************************************************************************************************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/components/permission-management.component.html ***!
    \**********************************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsPackagesPermissionManagementSrcLibComponentsPermissionManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<abp-modal [(visible)]=\"visible\" (init)=\"initModal()\" [busy]=\"modalBusy\">\r\n  <ng-container *ngIf=\"{ entityName: entityName$ | async } as data\">\r\n    <ng-template #abpHeader>\r\n      <h4>\r\n        {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} - {{ data.entityName }}\r\n      </h4>\r\n    </ng-template>\r\n    <ng-template #abpBody>\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"select-all-in-all-tabs\"\r\n          name=\"select-all-in-all-tabs\"\r\n          class=\"custom-control-input\"\r\n          [(ngModel)]=\"selectAllTab\"\r\n          (click)=\"onClickSelectAll()\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"select-all-in-all-tabs\">{{\r\n          'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n\r\n      <hr class=\"mt-2 mb-2\" />\r\n      <div class=\"row\">\r\n        <div class=\"col-4\">\r\n          <ul class=\"nav nav-pills flex-column\">\r\n            <li *ngFor=\"let group of groups$ | async; trackBy: trackByFn\" class=\"nav-item\">\r\n              <a\r\n                class=\"nav-link pointer\"\r\n                [class.active]=\"selectedGroup?.name === group?.name\"\r\n                (click)=\"onChangeGroup(group)\"\r\n                >{{ group?.displayName }}</a\r\n              >\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <h4>{{ selectedGroup?.displayName }}</h4>\r\n          <hr class=\"mt-2 mb-3\" />\r\n          <div class=\"pl-1 pt-1\">\r\n            <div class=\"custom-checkbox custom-control mb-2\">\r\n              <input\r\n                type=\"checkbox\"\r\n                id=\"select-all-in-this-tabs\"\r\n                name=\"select-all-in-this-tabs\"\r\n                class=\"custom-control-input\"\r\n                [(ngModel)]=\"selectThisTab\"\r\n                (click)=\"onClickSelectThisTab()\"\r\n              />\r\n              <label class=\"custom-control-label\" for=\"select-all-in-this-tabs\">{{\r\n                'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization\r\n              }}</label>\r\n            </div>\r\n            <hr class=\"mb-3\" />\r\n            <div\r\n              *ngFor=\"\r\n                let permission of selectedGroupPermissions$ | async;\r\n                let i = index;\r\n                trackBy: trackByFn\r\n              \"\r\n              [style.margin-left]=\"permission.margin + 'px'\"\r\n              class=\"custom-checkbox custom-control mb-2\"\r\n            >\r\n              <input\r\n                #permissionCheckbox\r\n                type=\"checkbox\"\r\n                [checked]=\"getChecked(permission.name)\"\r\n                [value]=\"getChecked(permission.name)\"\r\n                [attr.id]=\"permission.name\"\r\n                class=\"custom-control-input\"\r\n                [disabled]=\"isGrantedByOtherProviderName(permission.grantedProviders)\"\r\n              />\r\n              <label\r\n                class=\"custom-control-label\"\r\n                [attr.for]=\"permission.name\"\r\n                (click)=\"onClickCheckbox(permission, permissionCheckbox.value)\"\r\n                >{{ permission.displayName }}\r\n                <ng-container *ngIf=\"!hideBadges\">\r\n                  <span\r\n                    *ngFor=\"let provider of permission.grantedProviders\"\r\n                    class=\"badge badge-light\"\r\n                    >{{ provider.providerName }}: {{ provider.providerKey }}</span\r\n                  >\r\n                </ng-container>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template #abpFooter>\r\n      <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button iconClass=\"fa fa-check\" (click)=\"submit()\">{{\r\n        'AbpIdentity::Save' | abpLocalization\r\n      }}</abp-button>\r\n    </ng-template>\r\n  </ng-container>\r\n</abp-modal>\r\n";
    /***/
  },

  /***/
  "../../packages/identity/src/lib/actions/identity.actions.ts":
  /*!*************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/actions/identity.actions.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: GetRoles, GetRoleById, DeleteRole, CreateRole, UpdateRole, GetUsers, GetUserById, DeleteUser, CreateUser, UpdateUser, GetUserRoles */

  /***/
  function packagesIdentitySrcLibActionsIdentityActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetRoles", function () {
      return GetRoles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetRoleById", function () {
      return GetRoleById;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteRole", function () {
      return DeleteRole;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateRole", function () {
      return CreateRole;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateRole", function () {
      return UpdateRole;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetUsers", function () {
      return GetUsers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetUserById", function () {
      return GetUserById;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteUser", function () {
      return DeleteUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateUser", function () {
      return CreateUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUser", function () {
      return UpdateUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetUserRoles", function () {
      return GetUserRoles;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var GetRoles = function GetRoles(payload) {
      _classCallCheck(this, GetRoles);

      this.payload = payload;
    };

    GetRoles.type = '[Identity] Get Roles';

    var GetRoleById = function GetRoleById(payload) {
      _classCallCheck(this, GetRoleById);

      this.payload = payload;
    };

    GetRoleById.type = '[Identity] Get Role By Id';

    var DeleteRole = function DeleteRole(payload) {
      _classCallCheck(this, DeleteRole);

      this.payload = payload;
    };

    DeleteRole.type = '[Identity] Delete Role';

    var CreateRole = function CreateRole(payload) {
      _classCallCheck(this, CreateRole);

      this.payload = payload;
    };

    CreateRole.type = '[Identity] Create Role';

    var UpdateRole = function UpdateRole(payload) {
      _classCallCheck(this, UpdateRole);

      this.payload = payload;
    };

    UpdateRole.type = '[Identity] Update Role';

    var GetUsers = function GetUsers(payload) {
      _classCallCheck(this, GetUsers);

      this.payload = payload;
    };

    GetUsers.type = '[Identity] Get Users';

    var GetUserById = function GetUserById(payload) {
      _classCallCheck(this, GetUserById);

      this.payload = payload;
    };

    GetUserById.type = '[Identity] Get User By Id';

    var DeleteUser = function DeleteUser(payload) {
      _classCallCheck(this, DeleteUser);

      this.payload = payload;
    };

    DeleteUser.type = '[Identity] Delete User';

    var CreateUser = function CreateUser(payload) {
      _classCallCheck(this, CreateUser);

      this.payload = payload;
    };

    CreateUser.type = '[Identity] Create User';

    var UpdateUser = function UpdateUser(payload) {
      _classCallCheck(this, UpdateUser);

      this.payload = payload;
    };

    UpdateUser.type = '[Identity] Update User';

    var GetUserRoles = function GetUserRoles(payload) {
      _classCallCheck(this, GetUserRoles);

      this.payload = payload;
    };

    GetUserRoles.type = '[Identity] Get User Roles';
    /***/
  },

  /***/
  "../../packages/identity/src/lib/components/index.ts":
  /*!*****************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/components/index.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: UsersComponent, RolesComponent */

  /***/
  function packagesIdentitySrcLibComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _roles_roles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./roles/roles.component */
    "../../packages/identity/src/lib/components/roles/roles.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RolesComponent", function () {
      return _roles_roles_component__WEBPACK_IMPORTED_MODULE_1__["RolesComponent"];
    });
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./users/users.component */
    "../../packages/identity/src/lib/components/users/users.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"];
    });
    /***/

  },

  /***/
  "../../packages/identity/src/lib/components/roles/roles.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/components/roles/roles.component.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: RolesComponent */

  /***/
  function packagesIdentitySrcLibComponentsRolesRolesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RolesComponent", function () {
      return RolesComponent;
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


    var _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../actions/identity.actions */
    "../../packages/identity/src/lib/actions/identity.actions.ts");
    /* harmony import */


    var _states_identity_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../states/identity.state */
    "../../packages/identity/src/lib/states/identity.state.ts");

    var RolesComponent =
    /*#__PURE__*/
    function () {
      function RolesComponent(confirmationService, fb, store) {
        var _this = this;

        _classCallCheck(this, RolesComponent);

        this.confirmationService = confirmationService;
        this.fb = fb;
        this.store = store;
        this.visiblePermissions = false;
        this.pageQuery = {};
        this.loading = false;
        this.modalBusy = false;
        this.sortOrder = '';
        this.sortKey = '';

        this.onVisiblePermissionChange = function (event) {
          _this.visiblePermissions = event;
        };
      }

      _createClass(RolesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.get();
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          this.form = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
              value: this.selected.name || '',
              disabled: this.selected.isStatic
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(256)]),
            isDefault: [this.selected.isDefault || false],
            isPublic: [this.selected.isPublic || false]
          });
        }
      }, {
        key: "openModal",
        value: function openModal() {
          this.buildForm();
          this.isModalVisible = true;
        }
      }, {
        key: "add",
        value: function add() {
          this.selected = {};
          this.openModal();
        }
      }, {
        key: "edit",
        value: function edit(id) {
          var _this2 = this;

          this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__["GetRoleById"](id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('IdentityState', 'selectedRole')).subscribe(function (selectedRole) {
            _this2.selected = selectedRole;

            _this2.openModal();
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          if (!this.form.valid) return;
          this.modalBusy = true;
          this.store.dispatch(this.selected.id ? new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateRole"](Object.assign({}, this.selected, this.form.value, {
            id: this.selected.id
          })) : new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__["CreateRole"](this.form.value)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            return _this3.modalBusy = false;
          })).subscribe(function () {
            _this3.isModalVisible = false;

            _this3.get();
          });
        }
      }, {
        key: "delete",
        value: function _delete(id, name) {
          var _this4 = this;

          this.confirmationService.warn('AbpIdentity::RoleDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
            messageLocalizationParams: [name]
          }).subscribe(function (status) {
            if (status === "confirm"
            /* confirm */
            ) {
                _this4.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__["DeleteRole"](id)).subscribe(function () {
                  return _this4.get();
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
          var _this5 = this;

          this.loading = true;
          this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__["GetRoles"](this.pageQuery)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            return _this5.loading = false;
          })).subscribe();
        }
      }, {
        key: "onClickSaveButton",
        value: function onClickSaveButton() {
          this.formRef.nativeElement.dispatchEvent(new Event('submit', {
            bubbles: true,
            cancelable: true
          }));
        }
      }]);

      return RolesComponent;
    }();

    RolesComponent.ctorParameters = function () {
      return [{
        type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_states_identity_state__WEBPACK_IMPORTED_MODULE_8__["IdentityState"].getRoles), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])], RolesComponent.prototype, "data$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_states_identity_state__WEBPACK_IMPORTED_MODULE_8__["IdentityState"].getRolesTotalCount), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])], RolesComponent.prototype, "totalCount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('formRef', {
      "static": false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])], RolesComponent.prototype, "formRef", void 0);
    RolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'abp-roles',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./roles.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../packages/identity/src/lib/components/roles/roles.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])], RolesComponent);
    /***/
  },

  /***/
  "../../packages/identity/src/lib/components/users/users.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/components/users/users.component.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function packagesIdentitySrcLibComponentsUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-validate/core */
    "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var snq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! snq */
    "../../node_modules/snq/dist/snq.es5.js");
    /* harmony import */


    var _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../actions/identity.actions */
    "../../packages/identity/src/lib/actions/identity.actions.ts");
    /* harmony import */


    var _states_identity_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../states/identity.state */
    "../../packages/identity/src/lib/states/identity.state.ts");

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent(confirmationService, fb, store) {
        var _this6 = this;

        _classCallCheck(this, UsersComponent);

        this.confirmationService = confirmationService;
        this.fb = fb;
        this.store = store;
        this.visiblePermissions = false;
        this.pageQuery = {};
        this.loading = false;
        this.modalBusy = false;
        this.sortOrder = '';
        this.sortKey = '';
        this.passwordRulesArr = [];
        this.requiredPasswordLength = 1;

        this.trackByFn = function (index, item) {
          return Object.keys(item)[0] || index;
        };

        this.onVisiblePermissionChange = function (event) {
          _this6.visiblePermissions = event;
        };
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.get();
          var passwordRules = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getSettings('Identity.Password'));

          if ((passwordRules['Abp.Identity.Password.RequireDigit'] || '').toLowerCase() === 'true') {
            this.passwordRulesArr.push('number');
          }

          if ((passwordRules['Abp.Identity.Password.RequireLowercase'] || '').toLowerCase() === 'true') {
            this.passwordRulesArr.push('small');
          }

          if ((passwordRules['Abp.Identity.Password.RequireUppercase'] || '').toLowerCase() === 'true') {
            this.passwordRulesArr.push('capital');
          }

          if (+(passwordRules['Abp.Identity.Password.RequiredUniqueChars'] || 0) > 0) {
            this.passwordRulesArr.push('special');
          }

          if (Number.isInteger(+passwordRules['Abp.Identity.Password.RequiredLength'])) {
            this.requiredPasswordLength = +passwordRules['Abp.Identity.Password.RequiredLength'];
          }
        }
      }, {
        key: "onSearch",
        value: function onSearch(value) {
          this.pageQuery.filter = value;
          this.get();
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          var _this7 = this;

          this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["GetRoles"]()).subscribe(function () {
            _this7.roles = _this7.store.selectSnapshot(_states_identity_state__WEBPACK_IMPORTED_MODULE_11__["IdentityState"].getRoles);
            _this7.form = _this7.fb.group({
              userName: [_this7.selected.userName || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256)]],
              email: [_this7.selected.email || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256)]],
              name: [_this7.selected.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(64)]],
              surname: [_this7.selected.surname || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(64)]],
              phoneNumber: [_this7.selected.phoneNumber || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(16)]],
              lockoutEnabled: [_this7.selected.lockoutEnabled || (_this7.selected.id ? false : true)],
              twoFactorEnabled: [_this7.selected.twoFactorEnabled || (_this7.selected.id ? false : true)],
              roleNames: _this7.fb.array(_this7.roles.map(function (role) {
                return _this7.fb.group(_defineProperty({}, role.name, [!!Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
                  return _this7.selectedUserRoles.find(function (userRole) {
                    return userRole.id === role.id;
                  });
                })]));
              }))
            });
            var passwordValidators = [Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__["validatePassword"])(_this7.passwordRulesArr), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(_this7.requiredPasswordLength), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(32)];

            _this7.form.addControl('password', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [].concat(passwordValidators)));

            if (!_this7.selected.userName) {
              _this7.form.get('password').setValidators([].concat(passwordValidators, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]));

              _this7.form.get('password').updateValueAndValidity();
            }
          });
        }
      }, {
        key: "openModal",
        value: function openModal() {
          this.buildForm();
          this.isModalVisible = true;
        }
      }, {
        key: "add",
        value: function add() {
          this.selected = {};
          this.selectedUserRoles = [];
          this.openModal();
        }
      }, {
        key: "edit",
        value: function edit(id) {
          var _this8 = this;

          this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["GetUserById"](id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function () {
            return _this8.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["GetUserRoles"](id));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pluck"])('IdentityState'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function (state) {
            _this8.selected = state.selectedUser;
            _this8.selectedUserRoles = state.selectedUserRoles;

            _this8.openModal();
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this9 = this;

          if (!this.form.valid || this.modalBusy) return;
          this.modalBusy = true;
          var roleNames = this.form.value.roleNames;
          var mappedRoleNames = Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
            return roleNames.filter(function (role) {
              return !!role[Object.keys(role)[0]];
            }).map(function (role) {
              return Object.keys(role)[0];
            });
          }, []);
          this.store.dispatch(this.selected.id ? new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["UpdateUser"](Object.assign({}, this.selected, this.form.value, {
            id: this.selected.id,
            roleNames: mappedRoleNames
          })) : new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["CreateUser"](Object.assign({}, this.form.value, {
            roleNames: mappedRoleNames
          }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
            return _this9.modalBusy = false;
          })).subscribe(function () {
            _this9.isModalVisible = false;

            _this9.get();
          });
        }
      }, {
        key: "delete",
        value: function _delete(id, userName) {
          var _this10 = this;

          this.confirmationService.warn('AbpIdentity::UserDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
            messageLocalizationParams: [userName]
          }).subscribe(function (status) {
            if (status === "confirm"
            /* confirm */
            ) {
                _this10.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["DeleteUser"](id)).subscribe(function () {
                  return _this10.get();
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
          var _this11 = this;

          this.loading = true;
          this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["GetUsers"](this.pageQuery)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
            return _this11.loading = false;
          })).subscribe();
        }
      }, {
        key: "roleGroups",
        get: function get() {
          var _this12 = this;

          return Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
            return _this12.form.get('roleNames').controls;
          }, []);
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_states_identity_state__WEBPACK_IMPORTED_MODULE_11__["IdentityState"].getUsers), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"])], UsersComponent.prototype, "data$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_states_identity_state__WEBPACK_IMPORTED_MODULE_11__["IdentityState"].getUsersTotalCount), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"])], UsersComponent.prototype, "totalCount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('modalContent', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], UsersComponent.prototype, "modalContent", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'abp-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../packages/identity/src/lib/components/users/users.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])], UsersComponent);
    /***/
  },

  /***/
  "../../packages/identity/src/lib/identity-routing.module.ts":
  /*!************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/identity-routing.module.ts ***!
    \************************************************************************************************************/

  /*! exports provided: IdentityRoutingModule */

  /***/
  function packagesIdentitySrcLibIdentityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentityRoutingModule", function () {
      return IdentityRoutingModule;
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


    var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/roles/roles.component */
    "../../packages/identity/src/lib/components/roles/roles.component.ts");
    /* harmony import */


    var _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/users/users.component */
    "../../packages/identity/src/lib/components/users/users.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'roles',
      pathMatch: 'full'
    }, {
      path: '',
      component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["DynamicLayoutComponent"],
      canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["PermissionGuard"]],
      children: [{
        path: 'roles',
        component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableRouteContainerComponent"],
        data: {
          requiredPolicy: 'AbpIdentity.Roles',
          replaceableComponent: {
            key: 'Identity.RolesComponent',
            defaultComponent: _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_4__["RolesComponent"]
          }
        }
      }, {
        path: 'users',
        component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableRouteContainerComponent"],
        data: {
          requiredPolicy: 'AbpIdentity.Users',
          replaceableComponent: {
            key: 'Identity.UsersComponent',
            defaultComponent: _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"]
          }
        }
      }]
    }];

    var IdentityRoutingModule = function IdentityRoutingModule() {
      _classCallCheck(this, IdentityRoutingModule);
    };

    IdentityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], IdentityRoutingModule);
    /***/
  },

  /***/
  "../../packages/identity/src/lib/identity.module.ts":
  /*!****************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/identity.module.ts ***!
    \****************************************************************************************************/

  /*! exports provided: IdentityModule */

  /***/
  function packagesIdentitySrcLibIdentityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentityModule", function () {
      return IdentityModule;
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


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/roles/roles.component */
    "../../packages/identity/src/lib/components/roles/roles.component.ts");
    /* harmony import */


    var _identity_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./identity-routing.module */
    "../../packages/identity/src/lib/identity-routing.module.ts");
    /* harmony import */


    var _states_identity_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./states/identity.state */
    "../../packages/identity/src/lib/states/identity.state.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @abp/ng.theme.shared */
    "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
    /* harmony import */


    var _components_users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/users/users.component */
    "../../packages/identity/src/lib/components/users/users.component.ts");
    /* harmony import */


    var _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @abp/ng.permission-management */
    "../../packages/permission-management/src/public-api.ts");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/table */
    "../../node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-validate/core */
    "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");

    var IdentityModule = function IdentityModule() {
      _classCallCheck(this, IdentityModule);
    };

    IdentityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_components_roles_roles_component__WEBPACK_IMPORTED_MODULE_4__["RolesComponent"], _components_users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"]],
      imports: [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forFeature([_states_identity_state__WEBPACK_IMPORTED_MODULE_6__["IdentityState"]]), _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _identity_routing_module__WEBPACK_IMPORTED_MODULE_5__["IdentityRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_8__["ThemeSharedModule"], primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_10__["PermissionManagementModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__["NgxValidateCoreModule"]]
    })], IdentityModule);
    /***/
  },

  /***/
  "../../packages/identity/src/lib/services/identity-state.service.ts":
  /*!********************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/services/identity-state.service.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: IdentityStateService */

  /***/
  function packagesIdentitySrcLibServicesIdentityStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentityStateService", function () {
      return IdentityStateService;
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


    var _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/identity.actions */
    "../../packages/identity/src/lib/actions/identity.actions.ts");
    /* harmony import */


    var _states_identity_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../states/identity.state */
    "../../packages/identity/src/lib/states/identity.state.ts");

    var IdentityStateService =
    /*#__PURE__*/
    function () {
      function IdentityStateService(store) {
        _classCallCheck(this, IdentityStateService);

        this.store = store;
      }

      _createClass(IdentityStateService, [{
        key: "getRoles",
        value: function getRoles() {
          return this.store.selectSnapshot(_states_identity_state__WEBPACK_IMPORTED_MODULE_4__["IdentityState"].getRoles);
        }
      }, {
        key: "getRolesTotalCount",
        value: function getRolesTotalCount() {
          return this.store.selectSnapshot(_states_identity_state__WEBPACK_IMPORTED_MODULE_4__["IdentityState"].getRolesTotalCount);
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          return this.store.selectSnapshot(_states_identity_state__WEBPACK_IMPORTED_MODULE_4__["IdentityState"].getUsers);
        }
      }, {
        key: "getUsersTotalCount",
        value: function getUsersTotalCount() {
          return this.store.selectSnapshot(_states_identity_state__WEBPACK_IMPORTED_MODULE_4__["IdentityState"].getUsersTotalCount);
        }
      }, {
        key: "dispatchGetRoles",
        value: function dispatchGetRoles() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return this.store.dispatch(_construct(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoles"], args));
        }
      }, {
        key: "dispatchGetRoleById",
        value: function dispatchGetRoleById() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return this.store.dispatch(_construct(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoleById"], args));
        }
      }, {
        key: "dispatchDeleteRole",
        value: function dispatchDeleteRole() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return this.store.dispatch(_construct(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteRole"], args));
        }
      }, {
        key: "dispatchCreateRole",
        value: function dispatchCreateRole() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          return this.store.dispatch(_construct(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateRole"], args));
        }
      }, {
        key: "dispatchUpdateRole",
        value: function dispatchUpdateRole() {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          return this.store.dispatch(_construct(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateRole"], args));
        }
      }, {
        key: "dispatchGetUsers",
        value: function dispatchGetUsers() {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          return this.store.dispatch(_construct(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUsers"], args));
        }
      }, {
        key: "dispatchGetUserById",
        value: function dispatchGetUserById() {
          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }

          return this.store.dispatch(_construct(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserById"], args));
        }
      }, {
        key: "dispatchDeleteUser",
        value: function dispatchDeleteUser() {
          for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
          }

          return this.store.dispatch(_construct(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteUser"], args));
        }
      }, {
        key: "dispatchCreateUser",
        value: function dispatchCreateUser() {
          for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
          }

          return this.store.dispatch(_construct(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateUser"], args));
        }
      }, {
        key: "dispatchUpdateUser",
        value: function dispatchUpdateUser() {
          for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            args[_key10] = arguments[_key10];
          }

          return this.store.dispatch(_construct(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateUser"], args));
        }
      }, {
        key: "dispatchGetUserRoles",
        value: function dispatchGetUserRoles() {
          for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
            args[_key11] = arguments[_key11];
          }

          return this.store.dispatch(_construct(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserRoles"], args));
        }
      }]);

      return IdentityStateService;
    }();

    IdentityStateService.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    IdentityStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], IdentityStateService);
    /***/
  },

  /***/
  "../../packages/identity/src/lib/services/identity.service.ts":
  /*!**************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/services/identity.service.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: IdentityService */

  /***/
  function packagesIdentitySrcLibServicesIdentityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentityService", function () {
      return IdentityService;
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

    var IdentityService =
    /*#__PURE__*/
    function () {
      function IdentityService(rest) {
        _classCallCheck(this, IdentityService);

        this.rest = rest;
      }

      _createClass(IdentityService, [{
        key: "getRoles",
        value: function getRoles() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var request = {
            method: 'GET',
            url: '/api/identity/roles',
            params: params
          };
          return this.rest.request(request);
        }
      }, {
        key: "getRoleById",
        value: function getRoleById(id) {
          var request = {
            method: 'GET',
            url: "/api/identity/roles/".concat(id)
          };
          return this.rest.request(request);
        }
      }, {
        key: "deleteRole",
        value: function deleteRole(id) {
          var request = {
            method: 'DELETE',
            url: "/api/identity/roles/".concat(id)
          };
          return this.rest.request(request);
        }
      }, {
        key: "createRole",
        value: function createRole(body) {
          var request = {
            method: 'POST',
            url: '/api/identity/roles',
            body: body
          };
          return this.rest.request(request);
        }
      }, {
        key: "updateRole",
        value: function updateRole(body) {
          var url = "/api/identity/roles/".concat(body.id);
          delete body.id;
          var request = {
            method: 'PUT',
            url: url,
            body: body
          };
          return this.rest.request(request);
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var request = {
            method: 'GET',
            url: '/api/identity/users',
            params: params
          };
          return this.rest.request(request);
        }
      }, {
        key: "getUserById",
        value: function getUserById(id) {
          var request = {
            method: 'GET',
            url: "/api/identity/users/".concat(id)
          };
          return this.rest.request(request);
        }
      }, {
        key: "getUserRoles",
        value: function getUserRoles(id) {
          var request = {
            method: 'GET',
            url: "/api/identity/users/".concat(id, "/roles")
          };
          return this.rest.request(request);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          var request = {
            method: 'DELETE',
            url: "/api/identity/users/".concat(id)
          };
          return this.rest.request(request);
        }
      }, {
        key: "createUser",
        value: function createUser(body) {
          var request = {
            method: 'POST',
            url: '/api/identity/users',
            body: body
          };
          return this.rest.request(request);
        }
      }, {
        key: "updateUser",
        value: function updateUser(body) {
          var url = "/api/identity/users/".concat(body.id);
          delete body.id;
          var request = {
            method: 'PUT',
            url: url,
            body: body
          };
          return this.rest.request(request);
        }
      }]);

      return IdentityService;
    }();

    IdentityService.ctorParameters = function () {
      return [{
        type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }];
    };

    IdentityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"]])], IdentityService);
    /***/
  },

  /***/
  "../../packages/identity/src/lib/services/index.ts":
  /*!***************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/services/index.ts ***!
    \***************************************************************************************************/

  /*! exports provided: IdentityService, IdentityStateService */

  /***/
  function packagesIdentitySrcLibServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _identity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./identity.service */
    "../../packages/identity/src/lib/services/identity.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IdentityService", function () {
      return _identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"];
    });
    /* harmony import */


    var _identity_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./identity-state.service */
    "../../packages/identity/src/lib/services/identity-state.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IdentityStateService", function () {
      return _identity_state_service__WEBPACK_IMPORTED_MODULE_2__["IdentityStateService"];
    });
    /***/

  },

  /***/
  "../../packages/identity/src/lib/states/identity.state.ts":
  /*!**********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/states/identity.state.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: IdentityState */

  /***/
  function packagesIdentitySrcLibStatesIdentityStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentityState", function () {
      return IdentityState;
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


    var _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/identity.actions */
    "../../packages/identity/src/lib/actions/identity.actions.ts");
    /* harmony import */


    var _services_identity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/identity.service */
    "../../packages/identity/src/lib/services/identity.service.ts");

    var IdentityState =
    /*#__PURE__*/
    function () {
      function IdentityState(identityService) {
        _classCallCheck(this, IdentityState);

        this.identityService = identityService;
      }

      _createClass(IdentityState, [{
        key: "getRoles",
        value: function getRoles(_ref, _ref2) {
          var patchState = _ref.patchState;
          var payload = _ref2.payload;
          return this.identityService.getRoles(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (roles) {
            return patchState({
              roles: roles
            });
          }));
        }
      }, {
        key: "getRole",
        value: function getRole(_ref3, _ref4) {
          var patchState = _ref3.patchState;
          var payload = _ref4.payload;
          return this.identityService.getRoleById(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (selectedRole) {
            return patchState({
              selectedRole: selectedRole
            });
          }));
        }
      }, {
        key: "deleteRole",
        value: function deleteRole(_, _ref5) {
          var payload = _ref5.payload;
          return this.identityService.deleteRole(payload);
        }
      }, {
        key: "addRole",
        value: function addRole(_, _ref6) {
          var payload = _ref6.payload;
          return this.identityService.createRole(payload);
        }
      }, {
        key: "updateRole",
        value: function updateRole(_ref7, _ref8) {
          var getState = _ref7.getState;
          var payload = _ref8.payload;
          return this.identityService.updateRole(Object.assign({}, getState().selectedRole, payload));
        }
      }, {
        key: "getUsers",
        value: function getUsers(_ref9, _ref10) {
          var patchState = _ref9.patchState;
          var payload = _ref10.payload;
          return this.identityService.getUsers(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (users) {
            return patchState({
              users: users
            });
          }));
        }
      }, {
        key: "getUser",
        value: function getUser(_ref11, _ref12) {
          var patchState = _ref11.patchState;
          var payload = _ref12.payload;
          return this.identityService.getUserById(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (selectedUser) {
            return patchState({
              selectedUser: selectedUser
            });
          }));
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(_, _ref13) {
          var payload = _ref13.payload;
          return this.identityService.deleteUser(payload);
        }
      }, {
        key: "addUser",
        value: function addUser(_, _ref14) {
          var payload = _ref14.payload;
          return this.identityService.createUser(payload);
        }
      }, {
        key: "updateUser",
        value: function updateUser(_ref15, _ref16) {
          var getState = _ref15.getState;
          var payload = _ref16.payload;
          return this.identityService.updateUser(Object.assign({}, getState().selectedUser, payload));
        }
      }, {
        key: "getUserRoles",
        value: function getUserRoles(_ref17, _ref18) {
          var patchState = _ref17.patchState;
          var payload = _ref18.payload;
          return this.identityService.getUserRoles(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('items'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (selectedUserRoles) {
            return patchState({
              selectedUserRoles: selectedUserRoles
            });
          }));
        }
      }], [{
        key: "getRoles",
        value: function getRoles(_ref19) {
          var roles = _ref19.roles;
          return roles.items || [];
        }
      }, {
        key: "getRolesTotalCount",
        value: function getRolesTotalCount(_ref20) {
          var roles = _ref20.roles;
          return roles.totalCount || 0;
        }
      }, {
        key: "getUsers",
        value: function getUsers(_ref21) {
          var users = _ref21.users;
          return users.items || [];
        }
      }, {
        key: "getUsersTotalCount",
        value: function getUsersTotalCount(_ref22) {
          var users = _ref22.users;
          return users.totalCount || 0;
        }
      }]);

      return IdentityState;
    }();

    IdentityState.ctorParameters = function () {
      return [{
        type: _services_identity_service__WEBPACK_IMPORTED_MODULE_4__["IdentityService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoles"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoles"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], IdentityState.prototype, "getRoles", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoleById"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoleById"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], IdentityState.prototype, "getRole", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteRole"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoleById"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], IdentityState.prototype, "deleteRole", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateRole"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateRole"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], IdentityState.prototype, "addRole", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateRole"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateRole"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], IdentityState.prototype, "updateRole", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUsers"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUsers"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], IdentityState.prototype, "getUsers", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserById"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserById"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], IdentityState.prototype, "getUser", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteUser"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserById"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], IdentityState.prototype, "deleteUser", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateUser"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateUser"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], IdentityState.prototype, "addUser", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateUser"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateUser"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], IdentityState.prototype, "updateUser", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserRoles"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserRoles"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], IdentityState.prototype, "getUserRoles", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)], IdentityState, "getRoles", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Number)], IdentityState, "getRolesTotalCount", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)], IdentityState, "getUsers", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Number)], IdentityState, "getUsersTotalCount", null);
    IdentityState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'IdentityState',
      defaults: {
        roles: {},
        selectedRole: {},
        users: {},
        selectedUser: {}
      }
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_identity_service__WEBPACK_IMPORTED_MODULE_4__["IdentityService"]])], IdentityState);
    /***/
  },

  /***/
  "../../packages/identity/src/public-api.ts":
  /*!*******************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/public-api.ts ***!
    \*******************************************************************************************/

  /*! exports provided: IdentityModule, GetRoles, GetRoleById, DeleteRole, CreateRole, UpdateRole, GetUsers, GetUserById, DeleteUser, CreateUser, UpdateUser, GetUserRoles, UsersComponent, IdentityService, IdentityState, RolesComponent, IdentityStateService */

  /***/
  function packagesIdentitySrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lib_identity_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/identity.module */
    "../../packages/identity/src/lib/identity.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IdentityModule", function () {
      return _lib_identity_module__WEBPACK_IMPORTED_MODULE_1__["IdentityModule"];
    });
    /* harmony import */


    var _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/actions/identity.actions */
    "../../packages/identity/src/lib/actions/identity.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GetRoles", function () {
      return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["GetRoles"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GetRoleById", function () {
      return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["GetRoleById"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DeleteRole", function () {
      return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteRole"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateRole", function () {
      return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["CreateRole"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateRole", function () {
      return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateRole"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GetUsers", function () {
      return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["GetUsers"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GetUserById", function () {
      return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["GetUserById"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DeleteUser", function () {
      return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteUser"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateUser", function () {
      return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["CreateUser"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateUser", function () {
      return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateUser"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GetUserRoles", function () {
      return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["GetUserRoles"];
    });
    /* harmony import */


    var _lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/components */
    "../../packages/identity/src/lib/components/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return _lib_components__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RolesComponent", function () {
      return _lib_components__WEBPACK_IMPORTED_MODULE_3__["RolesComponent"];
    });
    /* harmony import */


    var _lib_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lib/services */
    "../../packages/identity/src/lib/services/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IdentityService", function () {
      return _lib_services__WEBPACK_IMPORTED_MODULE_4__["IdentityService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IdentityStateService", function () {
      return _lib_services__WEBPACK_IMPORTED_MODULE_4__["IdentityStateService"];
    });
    /* harmony import */


    var _lib_states_identity_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lib/states/identity.state */
    "../../packages/identity/src/lib/states/identity.state.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IdentityState", function () {
      return _lib_states_identity_state__WEBPACK_IMPORTED_MODULE_5__["IdentityState"];
    });
    /*
     * Public API Surface of identity
     */

    /***/

  },

  /***/
  "../../packages/permission-management/src/lib/actions/index.ts":
  /*!***************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/actions/index.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: GetPermissions, UpdatePermissions */

  /***/
  function packagesPermissionManagementSrcLibActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _permission_management_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./permission-management.actions */
    "../../packages/permission-management/src/lib/actions/permission-management.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GetPermissions", function () {
      return _permission_management_actions__WEBPACK_IMPORTED_MODULE_1__["GetPermissions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdatePermissions", function () {
      return _permission_management_actions__WEBPACK_IMPORTED_MODULE_1__["UpdatePermissions"];
    });
    /***/

  },

  /***/
  "../../packages/permission-management/src/lib/actions/permission-management.actions.ts":
  /*!***************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/actions/permission-management.actions.ts ***!
    \***************************************************************************************************************************************/

  /*! exports provided: GetPermissions, UpdatePermissions */

  /***/
  function packagesPermissionManagementSrcLibActionsPermissionManagementActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetPermissions", function () {
      return GetPermissions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdatePermissions", function () {
      return UpdatePermissions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var GetPermissions = function GetPermissions(payload) {
      _classCallCheck(this, GetPermissions);

      this.payload = payload;
    };

    GetPermissions.type = '[PermissionManagement] Get Permissions';

    var UpdatePermissions = function UpdatePermissions(payload) {
      _classCallCheck(this, UpdatePermissions);

      this.payload = payload;
    };

    UpdatePermissions.type = '[PermissionManagement] Update Permissions';
    /***/
  },

  /***/
  "../../packages/permission-management/src/lib/components/index.ts":
  /*!******************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/components/index.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: PermissionManagementComponent */

  /***/
  function packagesPermissionManagementSrcLibComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _permission_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./permission-management.component */
    "../../packages/permission-management/src/lib/components/permission-management.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementComponent", function () {
      return _permission_management_component__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementComponent"];
    });
    /***/

  },

  /***/
  "../../packages/permission-management/src/lib/components/permission-management.component.ts":
  /*!********************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/components/permission-management.component.ts ***!
    \********************************************************************************************************************************************/

  /*! exports provided: PermissionManagementComponent */

  /***/
  function packagesPermissionManagementSrcLibComponentsPermissionManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementComponent", function () {
      return PermissionManagementComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions/permission-management.actions */
    "../../packages/permission-management/src/lib/actions/permission-management.actions.ts");
    /* harmony import */


    var _states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../states/permission-management.state */
    "../../packages/permission-management/src/lib/states/permission-management.state.ts");

    var PermissionManagementComponent =
    /*#__PURE__*/
    function () {
      function PermissionManagementComponent(store, renderer) {
        _classCallCheck(this, PermissionManagementComponent);

        this.store = store;
        this.renderer = renderer;
        this.hideBadges = false;
        this._visible = false;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.permissions = [];
        this.selectThisTab = false;
        this.selectAllTab = false;
        this.modalBusy = false;

        this.trackByFn = function (_, item) {
          return item.name;
        };
      }

      _createClass(PermissionManagementComponent, [{
        key: "getChecked",
        value: function getChecked(name) {
          return (this.permissions.find(function (per) {
            return per.name === name;
          }) || {
            isGranted: false
          }).isGranted;
        }
      }, {
        key: "isGrantedByOtherProviderName",
        value: function isGrantedByOtherProviderName(grantedProviders) {
          var _this13 = this;

          if (grantedProviders.length) {
            return grantedProviders.findIndex(function (p) {
              return p.providerName !== _this13.providerName;
            }) > -1;
          }

          return false;
        }
      }, {
        key: "onClickCheckbox",
        value: function onClickCheckbox(clickedPermission, value) {
          var _this14 = this;

          if (clickedPermission.isGranted && this.isGrantedByOtherProviderName(clickedPermission.grantedProviders)) return;
          setTimeout(function () {
            _this14.permissions = _this14.permissions.map(function (per) {
              if (clickedPermission.name === per.name) {
                return Object.assign({}, per, {
                  isGranted: !per.isGranted
                });
              } else if (clickedPermission.name === per.parentName && clickedPermission.isGranted) {
                return Object.assign({}, per, {
                  isGranted: false
                });
              } else if (clickedPermission.parentName === per.name && !clickedPermission.isGranted) {
                return Object.assign({}, per, {
                  isGranted: true
                });
              }

              return per;
            });

            _this14.setTabCheckboxState();

            _this14.setGrantCheckboxState();
          }, 0);
        }
      }, {
        key: "setTabCheckboxState",
        value: function setTabCheckboxState() {
          var _this15 = this;

          this.selectedGroupPermissions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (permissions) {
            var selectedPermissions = permissions.filter(function (per) {
              return per.isGranted;
            });
            var element = document.querySelector('#select-all-in-this-tabs');

            if (selectedPermissions.length === permissions.length) {
              element.indeterminate = false;
              _this15.selectThisTab = true;
            } else if (selectedPermissions.length === 0) {
              element.indeterminate = false;
              _this15.selectThisTab = false;
            } else {
              element.indeterminate = true;
            }
          });
        }
      }, {
        key: "setGrantCheckboxState",
        value: function setGrantCheckboxState() {
          var selectedAllPermissions = this.permissions.filter(function (per) {
            return per.isGranted;
          });
          var checkboxElement = document.querySelector('#select-all-in-all-tabs');

          if (selectedAllPermissions.length === this.permissions.length) {
            checkboxElement.indeterminate = false;
            this.selectAllTab = true;
          } else if (selectedAllPermissions.length === 0) {
            checkboxElement.indeterminate = false;
            this.selectAllTab = false;
          } else {
            checkboxElement.indeterminate = true;
          }
        }
      }, {
        key: "onClickSelectThisTab",
        value: function onClickSelectThisTab() {
          var _this16 = this;

          this.selectedGroupPermissions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (permissions) {
            permissions.forEach(function (permission) {
              if (permission.isGranted && _this16.isGrantedByOtherProviderName(permission.grantedProviders)) return;

              var index = _this16.permissions.findIndex(function (per) {
                return per.name === permission.name;
              });

              _this16.permissions = [].concat(_toConsumableArray(_this16.permissions.slice(0, index)), [Object.assign({}, _this16.permissions[index], {
                isGranted: !_this16.selectThisTab
              })], _toConsumableArray(_this16.permissions.slice(index + 1)));
            });
          });
          this.setGrantCheckboxState();
        }
      }, {
        key: "onClickSelectAll",
        value: function onClickSelectAll() {
          var _this17 = this;

          this.permissions = this.permissions.map(function (permission) {
            return Object.assign({}, permission, {
              isGranted: _this17.isGrantedByOtherProviderName(permission.grantedProviders) || !_this17.selectAllTab
            });
          });
          this.selectThisTab = !this.selectAllTab;
        }
      }, {
        key: "onChangeGroup",
        value: function onChangeGroup(group) {
          this.selectedGroup = group;
          this.setTabCheckboxState();
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this18 = this;

          this.modalBusy = true;
          var unchangedPermissions = getPermissions(this.store.selectSnapshot(_states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__["PermissionManagementState"].getPermissionGroups));
          var changedPermissions = this.permissions.filter(function (per) {
            return unchangedPermissions.find(function (unchanged) {
              return unchanged.name === per.name;
            }).isGranted === per.isGranted ? false : true;
          }).map(function (_ref23) {
            var name = _ref23.name,
                isGranted = _ref23.isGranted;
            return {
              name: name,
              isGranted: isGranted
            };
          });

          if (changedPermissions.length) {
            this.store.dispatch(new _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_5__["UpdatePermissions"]({
              providerKey: this.providerKey,
              providerName: this.providerName,
              permissions: changedPermissions
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              return _this18.modalBusy = false;
            })).subscribe(function () {
              _this18.visible = false;
            });
          } else {
            this.modalBusy = false;
            this.visible = false;
          }
        }
      }, {
        key: "openModal",
        value: function openModal() {
          var _this19 = this;

          if (!this.providerKey || !this.providerName) {
            throw new Error('Provider Key and Provider Name are required.');
          }

          return this.store.dispatch(new _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_5__["GetPermissions"]({
            providerKey: this.providerKey,
            providerName: this.providerName
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('PermissionManagementState', 'permissionRes'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (permissionRes) {
            _this19.selectedGroup = permissionRes.groups[0];
            _this19.permissions = getPermissions(permissionRes.groups);
          }));
        }
      }, {
        key: "initModal",
        value: function initModal() {
          this.setTabCheckboxState();
          this.setGrantCheckboxState();
        }
      }, {
        key: "visible",
        get: function get() {
          return this._visible;
        },
        set: function set(value) {
          var _this20 = this;

          if (value === this._visible) return;

          if (value) {
            this.openModal().subscribe(function () {
              _this20._visible = true;

              _this20.visibleChange.emit(true);
            });
          } else {
            this.selectedGroup = null;
            this._visible = false;
            this.visibleChange.emit(false);
          }
        }
      }, {
        key: "selectedGroupPermissions$",
        get: function get() {
          var _this21 = this;

          return this.groups$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (groups) {
            return _this21.selectedGroup ? groups.find(function (group) {
              return group.name === _this21.selectedGroup.name;
            }).permissions : [];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (permissions) {
            return permissions.map(function (permission) {
              return Object.assign({}, permission, {
                margin: findMargin(permissions, permission),
                isGranted: _this21.permissions.find(function (per) {
                  return per.name === permission.name;
                }).isGranted
              });
            });
          }));
        }
      }]);

      return PermissionManagementComponent;
    }();

    PermissionManagementComponent.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], PermissionManagementComponent.prototype, "providerName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], PermissionManagementComponent.prototype, "providerKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], PermissionManagementComponent.prototype, "hideBadges", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])], PermissionManagementComponent.prototype, "visible", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], PermissionManagementComponent.prototype, "visibleChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__["PermissionManagementState"].getPermissionGroups), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], PermissionManagementComponent.prototype, "groups$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__["PermissionManagementState"].getEntityDisplayName), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], PermissionManagementComponent.prototype, "entityName$", void 0);
    PermissionManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'abp-permission-management',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./permission-management.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../packages/permission-management/src/lib/components/permission-management.component.html"))["default"],
      exportAs: 'abpPermissionManagement'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], PermissionManagementComponent);

    function findMargin(permissions, permission) {
      var parentPermission = permissions.find(function (per) {
        return per.name === permission.parentName;
      });

      if (parentPermission && parentPermission.parentName) {
        var margin = 20;
        return margin += findMargin(permissions, parentPermission);
      }

      return parentPermission ? 20 : 0;
    }

    function getPermissions(groups) {
      return groups.reduce(function (acc, val) {
        return [].concat(_toConsumableArray(acc), _toConsumableArray(val.permissions));
      }, []);
    }
    /***/

  },

  /***/
  "../../packages/permission-management/src/lib/permission-management.module.ts":
  /*!******************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/permission-management.module.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: PermissionManagementModule */

  /***/
  function packagesPermissionManagementSrcLibPermissionManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementModule", function () {
      return PermissionManagementModule;
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


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _components_permission_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/permission-management.component */
    "../../packages/permission-management/src/lib/components/permission-management.component.ts");
    /* harmony import */


    var _states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./states/permission-management.state */
    "../../packages/permission-management/src/lib/states/permission-management.state.ts");

    var PermissionManagementModule = function PermissionManagementModule() {
      _classCallCheck(this, PermissionManagementModule);
    };

    PermissionManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_components_permission_management_component__WEBPACK_IMPORTED_MODULE_5__["PermissionManagementComponent"]],
      imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forFeature([_states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__["PermissionManagementState"]])],
      exports: [_components_permission_management_component__WEBPACK_IMPORTED_MODULE_5__["PermissionManagementComponent"]]
    })], PermissionManagementModule);
    /***/
  },

  /***/
  "../../packages/permission-management/src/lib/services/index.ts":
  /*!****************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/services/index.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: PermissionManagementService, PermissionManagementStateService */

  /***/
  function packagesPermissionManagementSrcLibServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _permission_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./permission-management.service */
    "../../packages/permission-management/src/lib/services/permission-management.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementService", function () {
      return _permission_management_service__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementService"];
    });
    /* harmony import */


    var _permission_management_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./permission-management-state.service */
    "../../packages/permission-management/src/lib/services/permission-management-state.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementStateService", function () {
      return _permission_management_state_service__WEBPACK_IMPORTED_MODULE_2__["PermissionManagementStateService"];
    });
    /***/

  },

  /***/
  "../../packages/permission-management/src/lib/services/permission-management-state.service.ts":
  /*!**********************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/services/permission-management-state.service.ts ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: PermissionManagementStateService */

  /***/
  function packagesPermissionManagementSrcLibServicesPermissionManagementStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementStateService", function () {
      return PermissionManagementStateService;
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


    var _states_permission_management_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../states/permission-management.state */
    "../../packages/permission-management/src/lib/states/permission-management.state.ts");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions */
    "../../packages/permission-management/src/lib/actions/index.ts");

    var PermissionManagementStateService =
    /*#__PURE__*/
    function () {
      function PermissionManagementStateService(store) {
        _classCallCheck(this, PermissionManagementStateService);

        this.store = store;
      }

      _createClass(PermissionManagementStateService, [{
        key: "getPermissionGroups",
        value: function getPermissionGroups() {
          return this.store.selectSnapshot(_states_permission_management_state__WEBPACK_IMPORTED_MODULE_3__["PermissionManagementState"].getPermissionGroups);
        }
      }, {
        key: "getEntityDisplayName",
        value: function getEntityDisplayName() {
          return this.store.selectSnapshot(_states_permission_management_state__WEBPACK_IMPORTED_MODULE_3__["PermissionManagementState"].getEntityDisplayName);
        }
      }, {
        key: "dispatchGetPermissions",
        value: function dispatchGetPermissions() {
          for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
            args[_key12] = arguments[_key12];
          }

          return this.store.dispatch(_construct(_actions__WEBPACK_IMPORTED_MODULE_4__["GetPermissions"], args));
        }
      }, {
        key: "dispatchUpdatePermissions",
        value: function dispatchUpdatePermissions() {
          for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
            args[_key13] = arguments[_key13];
          }

          return this.store.dispatch(_construct(_actions__WEBPACK_IMPORTED_MODULE_4__["UpdatePermissions"], args));
        }
      }]);

      return PermissionManagementStateService;
    }();

    PermissionManagementStateService.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    PermissionManagementStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], PermissionManagementStateService);
    /***/
  },

  /***/
  "../../packages/permission-management/src/lib/services/permission-management.service.ts":
  /*!****************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/services/permission-management.service.ts ***!
    \****************************************************************************************************************************************/

  /*! exports provided: PermissionManagementService */

  /***/
  function packagesPermissionManagementSrcLibServicesPermissionManagementServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementService", function () {
      return PermissionManagementService;
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

    var PermissionManagementService =
    /*#__PURE__*/
    function () {
      function PermissionManagementService(rest) {
        _classCallCheck(this, PermissionManagementService);

        this.rest = rest;
      }

      _createClass(PermissionManagementService, [{
        key: "getPermissions",
        value: function getPermissions(params) {
          var request = {
            method: 'GET',
            url: '/api/abp/permissions',
            params: params
          };
          return this.rest.request(request);
        }
      }, {
        key: "updatePermissions",
        value: function updatePermissions(_ref24) {
          var permissions = _ref24.permissions,
              providerKey = _ref24.providerKey,
              providerName = _ref24.providerName;
          var request = {
            method: 'PUT',
            url: '/api/abp/permissions',
            body: {
              permissions: permissions
            },
            params: {
              providerKey: providerKey,
              providerName: providerName
            }
          };
          return this.rest.request(request);
        }
      }]);

      return PermissionManagementService;
    }();

    PermissionManagementService.ctorParameters = function () {
      return [{
        type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }];
    };

    PermissionManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"]])], PermissionManagementService);
    /***/
  },

  /***/
  "../../packages/permission-management/src/lib/states/index.ts":
  /*!**************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/states/index.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: PermissionManagementState */

  /***/
  function packagesPermissionManagementSrcLibStatesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _permission_management_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./permission-management.state */
    "../../packages/permission-management/src/lib/states/permission-management.state.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementState", function () {
      return _permission_management_state__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementState"];
    });
    /***/

  },

  /***/
  "../../packages/permission-management/src/lib/states/permission-management.state.ts":
  /*!************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/states/permission-management.state.ts ***!
    \************************************************************************************************************************************/

  /*! exports provided: PermissionManagementState */

  /***/
  function packagesPermissionManagementSrcLibStatesPermissionManagementStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementState", function () {
      return PermissionManagementState;
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


    var _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/permission-management.actions */
    "../../packages/permission-management/src/lib/actions/permission-management.actions.ts");
    /* harmony import */


    var _services_permission_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/permission-management.service */
    "../../packages/permission-management/src/lib/services/permission-management.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var PermissionManagementState =
    /*#__PURE__*/
    function () {
      function PermissionManagementState(permissionManagementService) {
        _classCallCheck(this, PermissionManagementState);

        this.permissionManagementService = permissionManagementService;
      }

      _createClass(PermissionManagementState, [{
        key: "permissionManagementGet",
        value: function permissionManagementGet(_ref25, _ref26) {
          var patchState = _ref25.patchState;
          var payload = _ref26.payload;
          return this.permissionManagementService.getPermissions(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (permissionResponse) {
            return patchState({
              permissionRes: permissionResponse
            });
          }));
        }
      }, {
        key: "permissionManagementUpdate",
        value: function permissionManagementUpdate(_, _ref27) {
          var payload = _ref27.payload;
          return this.permissionManagementService.updatePermissions(payload);
        }
      }], [{
        key: "getPermissionGroups",
        value: function getPermissionGroups(_ref28) {
          var permissionRes = _ref28.permissionRes;
          return permissionRes.groups || [];
        }
      }, {
        key: "getEntityDisplayName",
        value: function getEntityDisplayName(_ref29) {
          var permissionRes = _ref29.permissionRes;
          return permissionRes.entityDisplayName;
        }
      }]);

      return PermissionManagementState;
    }();

    PermissionManagementState.ctorParameters = function () {
      return [{
        type: _services_permission_management_service__WEBPACK_IMPORTED_MODULE_3__["PermissionManagementService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_2__["GetPermissions"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_2__["GetPermissions"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], PermissionManagementState.prototype, "permissionManagementGet", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_2__["UpdatePermissions"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_2__["UpdatePermissions"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], PermissionManagementState.prototype, "permissionManagementUpdate", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], PermissionManagementState, "getPermissionGroups", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", String)], PermissionManagementState, "getEntityDisplayName", null);
    PermissionManagementState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'PermissionManagementState',
      defaults: {
        permissionRes: {}
      }
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_permission_management_service__WEBPACK_IMPORTED_MODULE_3__["PermissionManagementService"]])], PermissionManagementState);
    /***/
  },

  /***/
  "../../packages/permission-management/src/public-api.ts":
  /*!********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/public-api.ts ***!
    \********************************************************************************************************/

  /*! exports provided: PermissionManagementModule, PermissionManagementState, GetPermissions, UpdatePermissions, PermissionManagementComponent, PermissionManagementService, PermissionManagementStateService */

  /***/
  function packagesPermissionManagementSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lib_permission_management_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/permission-management.module */
    "../../packages/permission-management/src/lib/permission-management.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementModule", function () {
      return _lib_permission_management_module__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementModule"];
    });
    /* harmony import */


    var _lib_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/actions */
    "../../packages/permission-management/src/lib/actions/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GetPermissions", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["GetPermissions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdatePermissions", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["UpdatePermissions"];
    });
    /* harmony import */


    var _lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/components */
    "../../packages/permission-management/src/lib/components/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementComponent", function () {
      return _lib_components__WEBPACK_IMPORTED_MODULE_3__["PermissionManagementComponent"];
    });
    /* harmony import */


    var _lib_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lib/services */
    "../../packages/permission-management/src/lib/services/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementService", function () {
      return _lib_services__WEBPACK_IMPORTED_MODULE_4__["PermissionManagementService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementStateService", function () {
      return _lib_services__WEBPACK_IMPORTED_MODULE_4__["PermissionManagementStateService"];
    });
    /* harmony import */


    var _lib_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lib/states */
    "../../packages/permission-management/src/lib/states/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionManagementState", function () {
      return _lib_states__WEBPACK_IMPORTED_MODULE_5__["PermissionManagementState"];
    });
    /*
     * Public API Surface of permission-management
     */

    /***/

  },

  /***/
  "./src/app/lazy-libs/identity-wrapper.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/lazy-libs/identity-wrapper.module.ts ***!
    \******************************************************/

  /*! exports provided: IdentityWrapperModule */

  /***/
  function srcAppLazyLibsIdentityWrapperModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentityWrapperModule", function () {
      return IdentityWrapperModule;
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


    var _abp_ng_identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.identity */
    "../../packages/identity/src/public-api.ts");

    var IdentityWrapperModule = function IdentityWrapperModule() {
      _classCallCheck(this, IdentityWrapperModule);
    };

    IdentityWrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_abp_ng_identity__WEBPACK_IMPORTED_MODULE_2__["IdentityModule"]]
    })], IdentityWrapperModule);
    /***/
  }
}]);
//# sourceMappingURL=lazy-libs-identity-wrapper-module-es5.js.map