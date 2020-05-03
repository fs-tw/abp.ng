/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/users/users.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Confirmation, ConfirmationService, getPasswordValidators } from '@abp/ng.theme.shared';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators, } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, pluck, switchMap, take } from 'rxjs/operators';
import snq from 'snq';
import { CreateUser, DeleteUser, GetUserById, GetUserRoles, GetUsers, UpdateUser, } from '../../actions/identity.actions';
import { IdentityService } from '../../services/identity.service';
import { IdentityState } from '../../states/identity.state';
var UsersComponent = /** @class */ (function () {
    function UsersComponent(confirmationService, fb, store, identityService) {
        var _this = this;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.store = store;
        this.identityService = identityService;
        this.visiblePermissions = false;
        this.pageQuery = { maxResultCount: 10 };
        this.loading = false;
        this.modalBusy = false;
        this.sortOrder = '';
        this.sortKey = '';
        this.permissionManagementKey = "PermissionManagement.PermissionManagementComponent" /* PermissionManagement */;
        this.trackByFn = (/**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        function (index, item) { return Object.keys(item)[0] || index; });
        this.onVisiblePermissionChange = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.visiblePermissions = event;
        });
    }
    Object.defineProperty(UsersComponent.prototype, "roleGroups", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return snq((/**
             * @return {?}
             */
            function () { return (/** @type {?} */ (((/** @type {?} */ (_this.form.get('roleNames')))).controls)); }), []);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UsersComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.get();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    UsersComponent.prototype.onSearch = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.pageQuery.filter = value;
        this.get();
    };
    /**
     * @return {?}
     */
    UsersComponent.prototype.buildForm = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.identityService.getAllRoles().subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var items = _a.items;
            _this.roles = items;
            _this.form = _this.fb.group({
                userName: [_this.selected.userName || '', [Validators.required, Validators.maxLength(256)]],
                email: [
                    _this.selected.email || '',
                    [Validators.required, Validators.email, Validators.maxLength(256)],
                ],
                name: [_this.selected.name || '', [Validators.maxLength(64)]],
                surname: [_this.selected.surname || '', [Validators.maxLength(64)]],
                phoneNumber: [_this.selected.phoneNumber || '', [Validators.maxLength(16)]],
                lockoutEnabled: [_this.selected.lockoutEnabled || (_this.selected.id ? false : true)],
                twoFactorEnabled: [_this.selected.twoFactorEnabled || (_this.selected.id ? false : true)],
                roleNames: _this.fb.array(_this.roles.map((/**
                 * @param {?} role
                 * @return {?}
                 */
                function (role) {
                    var _a;
                    return _this.fb.group((_a = {},
                        _a[role.name] = [
                            _this.selected.id
                                ? !!snq((/**
                                 * @return {?}
                                 */
                                function () { return _this.selectedUserRoles.find((/**
                                 * @param {?} userRole
                                 * @return {?}
                                 */
                                function (userRole) { return userRole.id === role.id; })); }))
                                : role.isDefault,
                        ],
                        _a));
                }))),
            });
            /** @type {?} */
            var passwordValidators = getPasswordValidators(_this.store);
            _this.form.addControl('password', new FormControl('', tslib_1.__spread(passwordValidators)));
            if (!_this.selected.userName) {
                _this.form.get('password').setValidators(tslib_1.__spread(passwordValidators, [Validators.required]));
                _this.form.get('password').updateValueAndValidity();
            }
        }));
    };
    /**
     * @return {?}
     */
    UsersComponent.prototype.openModal = /**
     * @return {?}
     */
    function () {
        this.buildForm();
        this.isModalVisible = true;
    };
    /**
     * @return {?}
     */
    UsersComponent.prototype.add = /**
     * @return {?}
     */
    function () {
        this.selected = (/** @type {?} */ ({}));
        this.selectedUserRoles = (/** @type {?} */ ([]));
        this.openModal();
    };
    /**
     * @param {?} id
     * @return {?}
     */
    UsersComponent.prototype.edit = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        this.store
            .dispatch(new GetUserById(id))
            .pipe(switchMap((/**
         * @return {?}
         */
        function () { return _this.store.dispatch(new GetUserRoles(id)); })), pluck('IdentityState'), take(1))
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            _this.selected = state.selectedUser;
            _this.selectedUserRoles = state.selectedUserRoles || [];
            _this.openModal();
        }));
    };
    /**
     * @return {?}
     */
    UsersComponent.prototype.save = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.form.valid || this.modalBusy)
            return;
        this.modalBusy = true;
        var roleNames = this.form.value.roleNames;
        /** @type {?} */
        var mappedRoleNames = snq((/**
         * @return {?}
         */
        function () {
            return roleNames.filter((/**
             * @param {?} role
             * @return {?}
             */
            function (role) { return !!role[Object.keys(role)[0]]; })).map((/**
             * @param {?} role
             * @return {?}
             */
            function (role) { return Object.keys(role)[0]; }));
        }), []);
        this.store
            .dispatch(this.selected.id
            ? new UpdateUser(tslib_1.__assign({}, this.selected, this.form.value, { id: this.selected.id, roleNames: mappedRoleNames }))
            : new CreateUser(tslib_1.__assign({}, this.form.value, { roleNames: mappedRoleNames })))
            .pipe(finalize((/**
         * @return {?}
         */
        function () { return (_this.modalBusy = false); })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.isModalVisible = false;
            _this.get();
        }));
    };
    /**
     * @param {?} id
     * @param {?} userName
     * @return {?}
     */
    UsersComponent.prototype.delete = /**
     * @param {?} id
     * @param {?} userName
     * @return {?}
     */
    function (id, userName) {
        var _this = this;
        this.confirmationService
            .warn('AbpIdentity::UserDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
            messageLocalizationParams: [userName],
        })
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            if (status === Confirmation.Status.confirm) {
                _this.store.dispatch(new DeleteUser(id)).subscribe((/**
                 * @return {?}
                 */
                function () { return _this.get(); }));
            }
        }));
    };
    /**
     * @param {?} page
     * @return {?}
     */
    UsersComponent.prototype.onPageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.pageQuery.skipCount = (page - 1) * this.pageQuery.maxResultCount;
        this.get();
    };
    /**
     * @return {?}
     */
    UsersComponent.prototype.get = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loading = true;
        this.store
            .dispatch(new GetUsers(this.pageQuery))
            .pipe(finalize((/**
         * @return {?}
         */
        function () { return (_this.loading = false); })))
            .subscribe();
    };
    /**
     * @param {?} providerKey
     * @return {?}
     */
    UsersComponent.prototype.openPermissionsModal = /**
     * @param {?} providerKey
     * @return {?}
     */
    function (providerKey) {
        var _this = this;
        this.providerKey = providerKey;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.visiblePermissions = true;
        }), 0);
    };
    UsersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-users',
                    template: "<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Users' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Users.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewUser' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <label\r\n        ><input\r\n          type=\"search\"\r\n          class=\"form-control form-control-sm\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          (input.debounce)=\"onSearch($event.target.value)\"\r\n      /></label>\r\n    </div>\r\n    <abp-table\r\n      *ngIf=\"[150, 250, 250, 250] as columnWidths\"\r\n      [abpLoading]=\"loading\"\r\n      [abpLoadingDelay]=\"500\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [colgroupTemplate]=\"tableColGroup\"\r\n      [headerTemplate]=\"tableHeader\"\r\n      [bodyTemplate]=\"tableBody\"\r\n      [value]=\"data$ | async\"\r\n      [rows]=\"pageQuery.maxResultCount\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [scrollable]=\"true\"\r\n      (pageChange)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template #tableColGroup>\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template #tableHeader>\r\n        <tr>\r\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n          <th (click)=\"sortOrderIcon.sort('userName')\">\r\n            {{ 'AbpIdentity::UserName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              sortKey=\"userName\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n          <th (click)=\"sortOrderIcon.sort('email')\">\r\n            {{ 'AbpIdentity::EmailAddress' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              sortKey=\"email\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            ></abp-sort-order-icon>\r\n          </th>\r\n          <th (click)=\"sortOrderIcon.sort('phoneNumber')\">\r\n            {{ 'AbpIdentity::PhoneNumber' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              sortKey=\"phoneNumber\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tableBody let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"edit(data.id)\"\r\n                >\r\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.ManagePermissions'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"openPermissionsModal(data.id)\"\r\n                >\r\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.userName)\"\r\n                >\r\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>{{ data.userName }}</td>\r\n          <td>{{ data.email }}</td>\r\n          <td>{{ data.phoneNumber }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </abp-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\" (disappear)=\"form = null\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-template #loaderRef\r\n      ><div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div\r\n    ></ng-template>\r\n\r\n    <form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n      <ngb-tabset>\r\n        <ngb-tab [title]=\"'AbpIdentity::UserInformations' | abpLocalization\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"mt-2 fade-in-top\">\r\n              <div class=\"form-group\">\r\n                <label for=\"user-name\">{{ 'AbpIdentity::UserName' | abpLocalization }}</label\r\n                ><span> * </span>\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"user-name\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"userName\"\r\n                  autofocus\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label>\r\n                <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"surname\">{{\r\n                  'AbpIdentity::DisplayName:Surname' | abpLocalization\r\n                }}</label>\r\n                <input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">{{ 'AbpIdentity::Password' | abpLocalization }}</label\r\n                ><span *ngIf=\"!selected.userName\"> * </span>\r\n                <input\r\n                  type=\"password\"\r\n                  id=\"password\"\r\n                  autocomplete=\"new-password\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"password\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">{{ 'AbpIdentity::EmailAddress' | abpLocalization }}</label\r\n                ><span> * </span>\r\n                <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"phone-number\">{{ 'AbpIdentity::PhoneNumber' | abpLocalization }}</label>\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"phone-number\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"phoneNumber\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"custom-checkbox custom-control mb-2\">\r\n                <input\r\n                  type=\"checkbox\"\r\n                  id=\"lockout-checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  formControlName=\"lockoutEnabled\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"lockout-checkbox\">{{\r\n                  'AbpIdentity::DisplayName:LockoutEnabled' | abpLocalization\r\n                }}</label>\r\n              </div>\r\n\r\n              <div class=\"custom-checkbox custom-control mb-2\">\r\n                <input\r\n                  type=\"checkbox\"\r\n                  id=\"two-factor-checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  formControlName=\"twoFactorEnabled\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"two-factor-checkbox\">{{\r\n                  'AbpIdentity::DisplayName:TwoFactorEnabled' | abpLocalization\r\n                }}</label>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab [title]=\"'AbpIdentity::Roles' | abpLocalization\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"mt-2 fade-in-top\">\r\n              <div\r\n                *ngFor=\"let roleGroup of roleGroups; let i = index; trackBy: trackByFn\"\r\n                class=\"custom-checkbox custom-control mb-2\"\r\n              >\r\n                <input\r\n                  type=\"checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  [attr.id]=\"'roles-' + i\"\r\n                  [formControl]=\"roleGroup.controls[roles[i].name]\"\r\n                />\r\n                <label class=\"custom-control-label\" [attr.for]=\"'roles-' + i\">{{\r\n                  roles[i].name\r\n                }}</label>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n      </ngb-tabset>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"form?.invalid\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'U' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: permissionManagementKey\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n"
                }] }
    ];
    /** @nocollapse */
    UsersComponent.ctorParameters = function () { return [
        { type: ConfirmationService },
        { type: FormBuilder },
        { type: Store },
        { type: IdentityService }
    ]; };
    UsersComponent.propDecorators = {
        modalContent: [{ type: ViewChild, args: ['modalContent', { static: false },] }]
    };
    tslib_1.__decorate([
        Select(IdentityState.getUsers),
        tslib_1.__metadata("design:type", Observable)
    ], UsersComponent.prototype, "data$", void 0);
    tslib_1.__decorate([
        Select(IdentityState.getUsersTotalCount),
        tslib_1.__metadata("design:type", Observable)
    ], UsersComponent.prototype, "totalCount$", void 0);
    return UsersComponent;
}());
export { UsersComponent };
if (false) {
    /** @type {?} */
    UsersComponent.prototype.data$;
    /** @type {?} */
    UsersComponent.prototype.totalCount$;
    /** @type {?} */
    UsersComponent.prototype.modalContent;
    /** @type {?} */
    UsersComponent.prototype.form;
    /** @type {?} */
    UsersComponent.prototype.selected;
    /** @type {?} */
    UsersComponent.prototype.selectedUserRoles;
    /** @type {?} */
    UsersComponent.prototype.roles;
    /** @type {?} */
    UsersComponent.prototype.visiblePermissions;
    /** @type {?} */
    UsersComponent.prototype.providerKey;
    /** @type {?} */
    UsersComponent.prototype.pageQuery;
    /** @type {?} */
    UsersComponent.prototype.isModalVisible;
    /** @type {?} */
    UsersComponent.prototype.loading;
    /** @type {?} */
    UsersComponent.prototype.modalBusy;
    /** @type {?} */
    UsersComponent.prototype.sortOrder;
    /** @type {?} */
    UsersComponent.prototype.sortKey;
    /** @type {?} */
    UsersComponent.prototype.permissionManagementKey;
    /** @type {?} */
    UsersComponent.prototype.trackByFn;
    /** @type {?} */
    UsersComponent.prototype.onVisiblePermissionChange;
    /**
     * @type {?}
     * @private
     */
    UsersComponent.prototype.confirmationService;
    /**
     * @type {?}
     * @private
     */
    UsersComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    UsersComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    UsersComponent.prototype.identityService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5pZGVudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEcsT0FBTyxFQUFFLFNBQVMsRUFBVSxXQUFXLEVBQW1CLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBR0wsV0FBVyxFQUNYLFdBQVcsRUFFWCxVQUFVLEdBQ1gsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixRQUFRLEVBQ1IsVUFBVSxHQUNYLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU1RDtJQWtERSx3QkFDVSxtQkFBd0MsRUFDeEMsRUFBZSxFQUNmLEtBQVksRUFDWixlQUFnQztRQUoxQyxpQkFLSTtRQUpNLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixvQkFBZSxHQUFmLGVBQWUs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RSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7O2dCQWpNRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHVxVkFBcUM7aUJBQ3RDOzs7O2dCQTdCc0IsbUJBQW1CO2dCQUt4QyxXQUFXO2dCQUtJLEtBQUs7Z0JBYWIsZUFBZTs7OytCQWNyQixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUFMNUM7UUFEQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQzswQ0FDeEIsVUFBVTtpREFBc0I7SUFHdkM7UUFEQyxNQUFNLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDOzBDQUM1QixVQUFVO3VEQUFTO0lBeUxsQyxxQkFBQztDQUFBLEFBbE1ELElBa01DO1NBOUxZLGNBQWM7OztJQUN6QiwrQkFDdUM7O0lBRXZDLHFDQUNnQzs7SUFFaEMsc0NBQytCOztJQUUvQiw4QkFBZ0I7O0lBRWhCLGtDQUE0Qjs7SUFFNUIsMkNBQXVDOztJQUV2QywrQkFBMkI7O0lBRTNCLDRDQUEyQjs7SUFFM0IscUNBQW9COztJQUVwQixtQ0FBd0Q7O0lBRXhELHdDQUF3Qjs7SUFFeEIsaUNBQWdCOztJQUVoQixtQ0FBa0I7O0lBRWxCLG1DQUFlOztJQUVmLGlDQUFhOztJQUViLGlEQUErRTs7SUFFL0UsbUNBQTZGOztJQUU3RixtREFFRTs7Ozs7SUFPQSw2Q0FBZ0Q7Ozs7O0lBQ2hELDRCQUF1Qjs7Ozs7SUFDdkIsK0JBQW9COzs7OztJQUNwQix5Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQlAgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb24sIENvbmZpcm1hdGlvblNlcnZpY2UsIGdldFBhc3N3b3JkVmFsaWRhdG9ycyB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBUcmFja0J5RnVuY3Rpb24sIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFic3RyYWN0Q29udHJvbCxcclxuICBGb3JtQXJyYXksXHJcbiAgRm9ybUJ1aWxkZXIsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUdyb3VwLFxyXG4gIFZhbGlkYXRvcnMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbmFsaXplLCBwbHVjaywgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7XHJcbiAgQ3JlYXRlVXNlcixcclxuICBEZWxldGVVc2VyLFxyXG4gIEdldFVzZXJCeUlkLFxyXG4gIEdldFVzZXJSb2xlcyxcclxuICBHZXRVc2VycyxcclxuICBVcGRhdGVVc2VyLFxyXG59IGZyb20gJy4uLy4uL2FjdGlvbnMvaWRlbnRpdHkuYWN0aW9ucyc7XHJcbmltcG9ydCB7IElkZW50aXR5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2lkZW50aXR5JztcclxuaW1wb3J0IHsgSWRlbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaWRlbnRpdHkuc2VydmljZSc7XHJcbmltcG9ydCB7IElkZW50aXR5U3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZXMvaWRlbnRpdHkuc3RhdGUnO1xyXG5pbXBvcnQgeyBlUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnRzIH0gZnJvbSAnQGFicC9uZy5wZXJtaXNzaW9uLW1hbmFnZW1lbnQnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC11c2VycycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXJzLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAU2VsZWN0KElkZW50aXR5U3RhdGUuZ2V0VXNlcnMpXHJcbiAgZGF0YSQ6IE9ic2VydmFibGU8SWRlbnRpdHkuVXNlckl0ZW1bXT47XHJcblxyXG4gIEBTZWxlY3QoSWRlbnRpdHlTdGF0ZS5nZXRVc2Vyc1RvdGFsQ291bnQpXHJcbiAgdG90YWxDb3VudCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbW9kYWxDb250ZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgbW9kYWxDb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBmb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIHNlbGVjdGVkOiBJZGVudGl0eS5Vc2VySXRlbTtcclxuXHJcbiAgc2VsZWN0ZWRVc2VyUm9sZXM6IElkZW50aXR5LlJvbGVJdGVtW107XHJcblxyXG4gIHJvbGVzOiBJZGVudGl0eS5Sb2xlSXRlbVtdO1xyXG5cclxuICB2aXNpYmxlUGVybWlzc2lvbnMgPSBmYWxzZTtcclxuXHJcbiAgcHJvdmlkZXJLZXk6IHN0cmluZztcclxuXHJcbiAgcGFnZVF1ZXJ5OiBBQlAuUGFnZVF1ZXJ5UGFyYW1zID0geyBtYXhSZXN1bHRDb3VudDogMTAgfTtcclxuXHJcbiAgaXNNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gIGxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgbW9kYWxCdXN5ID0gZmFsc2U7XHJcblxyXG4gIHNvcnRPcmRlciA9ICcnO1xyXG5cclxuICBzb3J0S2V5ID0gJyc7XHJcblxyXG4gIHBlcm1pc3Npb25NYW5hZ2VtZW50S2V5ID0gZVBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50cy5QZXJtaXNzaW9uTWFuYWdlbWVudDtcclxuXHJcbiAgdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248QWJzdHJhY3RDb250cm9sPiA9IChpbmRleCwgaXRlbSkgPT4gT2JqZWN0LmtleXMoaXRlbSlbMF0gfHwgaW5kZXg7XHJcblxyXG4gIG9uVmlzaWJsZVBlcm1pc3Npb25DaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICB0aGlzLnZpc2libGVQZXJtaXNzaW9ucyA9IGV2ZW50O1xyXG4gIH07XHJcblxyXG4gIGdldCByb2xlR3JvdXBzKCk6IEZvcm1Hcm91cFtdIHtcclxuICAgIHJldHVybiBzbnEoKCkgPT4gKHRoaXMuZm9ybS5nZXQoJ3JvbGVOYW1lcycpIGFzIEZvcm1BcnJheSkuY29udHJvbHMgYXMgRm9ybUdyb3VwW10sIFtdKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb25maXJtYXRpb25TZXJ2aWNlOiBDb25maXJtYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIHByaXZhdGUgaWRlbnRpdHlTZXJ2aWNlOiBJZGVudGl0eVNlcnZpY2UsXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0KCk7XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnBhZ2VRdWVyeS5maWx0ZXIgPSB2YWx1ZTtcclxuICAgIHRoaXMuZ2V0KCk7XHJcbiAgfVxyXG5cclxuICBidWlsZEZvcm0oKSB7XHJcbiAgICB0aGlzLmlkZW50aXR5U2VydmljZS5nZXRBbGxSb2xlcygpLnN1YnNjcmliZSgoeyBpdGVtcyB9KSA9PiB7XHJcbiAgICAgIHRoaXMucm9sZXMgPSBpdGVtcztcclxuICAgICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgdXNlck5hbWU6IFt0aGlzLnNlbGVjdGVkLnVzZXJOYW1lIHx8ICcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMjU2KV1dLFxyXG4gICAgICAgIGVtYWlsOiBbXHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkLmVtYWlsIHx8ICcnLFxyXG4gICAgICAgICAgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWwsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDI1NildLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbmFtZTogW3RoaXMuc2VsZWN0ZWQubmFtZSB8fCAnJywgW1ZhbGlkYXRvcnMubWF4TGVuZ3RoKDY0KV1dLFxyXG4gICAgICAgIHN1cm5hbWU6IFt0aGlzLnNlbGVjdGVkLnN1cm5hbWUgfHwgJycsIFtWYWxpZGF0b3JzLm1heExlbmd0aCg2NCldXSxcclxuICAgICAgICBwaG9uZU51bWJlcjogW3RoaXMuc2VsZWN0ZWQucGhvbmVOdW1iZXIgfHwgJycsIFtWYWxpZGF0b3JzLm1heExlbmd0aCgxNildXSxcclxuICAgICAgICBsb2Nrb3V0RW5hYmxlZDogW3RoaXMuc2VsZWN0ZWQubG9ja291dEVuYWJsZWQgfHwgKHRoaXMuc2VsZWN0ZWQuaWQgPyBmYWxzZSA6IHRydWUpXSxcclxuICAgICAgICB0d29GYWN0b3JFbmFibGVkOiBbdGhpcy5zZWxlY3RlZC50d29GYWN0b3JFbmFibGVkIHx8ICh0aGlzLnNlbGVjdGVkLmlkID8gZmFsc2UgOiB0cnVlKV0sXHJcbiAgICAgICAgcm9sZU5hbWVzOiB0aGlzLmZiLmFycmF5KFxyXG4gICAgICAgICAgdGhpcy5yb2xlcy5tYXAocm9sZSA9PlxyXG4gICAgICAgICAgICB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgICBbcm9sZS5uYW1lXTogW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5pZFxyXG4gICAgICAgICAgICAgICAgICA/ICEhc25xKCgpID0+IHRoaXMuc2VsZWN0ZWRVc2VyUm9sZXMuZmluZCh1c2VyUm9sZSA9PiB1c2VyUm9sZS5pZCA9PT0gcm9sZS5pZCkpXHJcbiAgICAgICAgICAgICAgICAgIDogcm9sZS5pc0RlZmF1bHQsXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0b3JzID0gZ2V0UGFzc3dvcmRWYWxpZGF0b3JzKHRoaXMuc3RvcmUpO1xyXG5cclxuICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2woJ3Bhc3N3b3JkJywgbmV3IEZvcm1Db250cm9sKCcnLCBbLi4ucGFzc3dvcmRWYWxpZGF0b3JzXSkpO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkLnVzZXJOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS5zZXRWYWxpZGF0b3JzKFsuLi5wYXNzd29yZFZhbGlkYXRvcnMsIFZhbGlkYXRvcnMucmVxdWlyZWRdKTtcclxuICAgICAgICB0aGlzLmZvcm0uZ2V0KCdwYXNzd29yZCcpLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwoKSB7XHJcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xyXG4gICAgdGhpcy5pc01vZGFsVmlzaWJsZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBhZGQoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0ge30gYXMgSWRlbnRpdHkuVXNlckl0ZW07XHJcbiAgICB0aGlzLnNlbGVjdGVkVXNlclJvbGVzID0gW10gYXMgSWRlbnRpdHkuUm9sZUl0ZW1bXTtcclxuICAgIHRoaXMub3Blbk1vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBlZGl0KGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKG5ldyBHZXRVc2VyQnlJZChpZCkpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRVc2VyUm9sZXMoaWQpKSksXHJcbiAgICAgICAgcGx1Y2soJ0lkZW50aXR5U3RhdGUnKSxcclxuICAgICAgICB0YWtlKDEpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKHN0YXRlOiBJZGVudGl0eS5TdGF0ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzdGF0ZS5zZWxlY3RlZFVzZXI7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXJSb2xlcyA9IHN0YXRlLnNlbGVjdGVkVXNlclJvbGVzIHx8IFtdO1xyXG4gICAgICAgIHRoaXMub3Blbk1vZGFsKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIGlmICghdGhpcy5mb3JtLnZhbGlkIHx8IHRoaXMubW9kYWxCdXN5KSByZXR1cm47XHJcbiAgICB0aGlzLm1vZGFsQnVzeSA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgeyByb2xlTmFtZXMgfSA9IHRoaXMuZm9ybS52YWx1ZTtcclxuICAgIGNvbnN0IG1hcHBlZFJvbGVOYW1lcyA9IHNucShcclxuICAgICAgKCkgPT5cclxuICAgICAgICByb2xlTmFtZXMuZmlsdGVyKHJvbGUgPT4gISFyb2xlW09iamVjdC5rZXlzKHJvbGUpWzBdXSkubWFwKHJvbGUgPT4gT2JqZWN0LmtleXMocm9sZSlbMF0pLFxyXG4gICAgICBbXSxcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2goXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5pZFxyXG4gICAgICAgICAgPyBuZXcgVXBkYXRlVXNlcih7XHJcbiAgICAgICAgICAgICAgLi4udGhpcy5zZWxlY3RlZCxcclxuICAgICAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXHJcbiAgICAgICAgICAgICAgaWQ6IHRoaXMuc2VsZWN0ZWQuaWQsXHJcbiAgICAgICAgICAgICAgcm9sZU5hbWVzOiBtYXBwZWRSb2xlTmFtZXMsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IG5ldyBDcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXHJcbiAgICAgICAgICAgICAgcm9sZU5hbWVzOiBtYXBwZWRSb2xlTmFtZXMsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICApXHJcbiAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+ICh0aGlzLm1vZGFsQnVzeSA9IGZhbHNlKSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdldCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZShpZDogc3RyaW5nLCB1c2VyTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2VcclxuICAgICAgLndhcm4oJ0FicElkZW50aXR5OjpVc2VyRGVsZXRpb25Db25maXJtYXRpb25NZXNzYWdlJywgJ0FicElkZW50aXR5OjpBcmVZb3VTdXJlJywge1xyXG4gICAgICAgIG1lc3NhZ2VMb2NhbGl6YXRpb25QYXJhbXM6IFt1c2VyTmFtZV0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoKHN0YXR1czogQ29uZmlybWF0aW9uLlN0YXR1cykgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IENvbmZpcm1hdGlvbi5TdGF0dXMuY29uZmlybSkge1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlVXNlcihpZCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdldCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcikge1xyXG4gICAgdGhpcy5wYWdlUXVlcnkuc2tpcENvdW50ID0gKHBhZ2UgLSAxKSAqIHRoaXMucGFnZVF1ZXJ5Lm1heFJlc3VsdENvdW50O1xyXG5cclxuICAgIHRoaXMuZ2V0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQoKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2gobmV3IEdldFVzZXJzKHRoaXMucGFnZVF1ZXJ5KSlcclxuICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4gKHRoaXMubG9hZGluZyA9IGZhbHNlKSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIG9wZW5QZXJtaXNzaW9uc01vZGFsKHByb3ZpZGVyS2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMucHJvdmlkZXJLZXkgPSBwcm92aWRlcktleTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnZpc2libGVQZXJtaXNzaW9ucyA9IHRydWU7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbn1cclxuIl19