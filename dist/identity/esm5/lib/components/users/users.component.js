/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/users/users.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ConfigState } from '@abp/ng.core';
import { ConfirmationService, Toaster } from '@abp/ng.theme.shared';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators, } from '@angular/forms';
import { validatePassword } from '@ngx-validate/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, pluck, switchMap, take } from 'rxjs/operators';
import snq from 'snq';
import { CreateUser, DeleteUser, GetRoles, GetUserById, GetUserRoles, GetUsers, UpdateUser, } from '../../actions/identity.actions';
import { IdentityState } from '../../states/identity.state';
var UsersComponent = /** @class */ (function () {
    function UsersComponent(confirmationService, fb, store) {
        var _this = this;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.store = store;
        this.visiblePermissions = false;
        this.pageQuery = { maxResultCount: 10 };
        this.loading = false;
        this.modalBusy = false;
        this.sortOrder = '';
        this.sortKey = '';
        this.passwordRulesArr = (/** @type {?} */ ([]));
        this.requiredPasswordLength = 1;
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
        /** @type {?} */
        var passwordRules = this.store.selectSnapshot(ConfigState.getSettings('Identity.Password'));
        if ((passwordRules['Abp.Identity.Password.RequireDigit'] || '').toLowerCase() === 'true') {
            this.passwordRulesArr.push('number');
        }
        if ((passwordRules['Abp.Identity.Password.RequireLowercase'] || '').toLowerCase() === 'true') {
            this.passwordRulesArr.push('small');
        }
        if ((passwordRules['Abp.Identity.Password.RequireUppercase'] || '').toLowerCase() === 'true') {
            this.passwordRulesArr.push('capital');
        }
        if ((passwordRules['Abp.Identity.Password.RequireNonAlphanumeric'] || '').toLowerCase() === 'true') {
            this.passwordRulesArr.push('special');
        }
        if (Number.isInteger(+passwordRules['Abp.Identity.Password.RequiredLength'])) {
            this.requiredPasswordLength = +passwordRules['Abp.Identity.Password.RequiredLength'];
        }
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
        this.store.dispatch(new GetRoles()).subscribe((/**
         * @return {?}
         */
        function () {
            _this.roles = _this.store.selectSnapshot(IdentityState.getRoles);
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
                            _this.selectedUserRoles.length
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
            var passwordValidators = [
                validatePassword(_this.passwordRulesArr),
                Validators.minLength(_this.requiredPasswordLength),
                Validators.maxLength(128),
            ];
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
            _this.selectedUserRoles = state.selectedUserRoles;
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
            if (status === Toaster.Status.confirm) {
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
    UsersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-users',
                    template: "<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Users' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Users.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewUser' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <label\r\n        ><input\r\n          type=\"search\"\r\n          class=\"form-control form-control-sm\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          (input.debounce)=\"onSearch($event.target.value)\"\r\n      /></label>\r\n    </div>\r\n    <abp-table\r\n      *ngIf=\"[150, 250, 250, 250] as columnWidths\"\r\n      [abpLoading]=\"loading\"\r\n      [abpLoadingDelay]=\"500\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [colgroupTemplate]=\"tableColGroup\"\r\n      [headerTemplate]=\"tableHeader\"\r\n      [bodyTemplate]=\"tableBody\"\r\n      [value]=\"data$ | async\"\r\n      [rows]=\"pageQuery.maxResultCount\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [scrollable]=\"true\"\r\n      (pageChange)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template #tableColGroup>\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template #tableHeader>\r\n        <tr>\r\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n          <th (click)=\"sortOrderIcon.sort('userName')\">\r\n            {{ 'AbpIdentity::UserName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              sortKey=\"userName\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n          <th (click)=\"sortOrderIcon.sort('email')\">\r\n            {{ 'AbpIdentity::EmailAddress' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              sortKey=\"email\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            ></abp-sort-order-icon>\r\n          </th>\r\n          <th (click)=\"sortOrderIcon.sort('phoneNumber')\">\r\n            {{ 'AbpIdentity::PhoneNumber' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              sortKey=\"phoneNumber\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tableBody let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"edit(data.id)\"\r\n                >\r\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.ManagePermissions'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"providerKey = data.id; visiblePermissions = true\"\r\n                >\r\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.userName)\"\r\n                >\r\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>{{ data.userName }}</td>\r\n          <td>{{ data.email }}</td>\r\n          <td>{{ data.phoneNumber }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </abp-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\" (disappear)=\"form = null\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-template #loaderRef\r\n      ><div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div\r\n    ></ng-template>\r\n\r\n    <form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n      <ngb-tabset>\r\n        <ngb-tab [title]=\"'AbpIdentity::UserInformations' | abpLocalization\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"mt-2 fade-in-top\">\r\n              <div class=\"form-group\">\r\n                <label for=\"user-name\">{{ 'AbpIdentity::UserName' | abpLocalization }}</label\r\n                ><span> * </span>\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"user-name\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"userName\"\r\n                  autofocus\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label>\r\n                <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"surname\">{{\r\n                  'AbpIdentity::DisplayName:Surname' | abpLocalization\r\n                }}</label>\r\n                <input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">{{ 'AbpIdentity::Password' | abpLocalization }}</label\r\n                ><span *ngIf=\"!selected.userName\"> * </span>\r\n                <input\r\n                  type=\"password\"\r\n                  id=\"password\"\r\n                  autocomplete=\"new-password\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"password\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">{{ 'AbpIdentity::EmailAddress' | abpLocalization }}</label\r\n                ><span> * </span>\r\n                <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"phone-number\">{{ 'AbpIdentity::PhoneNumber' | abpLocalization }}</label>\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"phone-number\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"phoneNumber\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"custom-checkbox custom-control mb-2\">\r\n                <input\r\n                  type=\"checkbox\"\r\n                  id=\"lockout-checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  formControlName=\"lockoutEnabled\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"lockout-checkbox\">{{\r\n                  'AbpIdentity::DisplayName:LockoutEnabled' | abpLocalization\r\n                }}</label>\r\n              </div>\r\n\r\n              <div class=\"custom-checkbox custom-control mb-2\">\r\n                <input\r\n                  type=\"checkbox\"\r\n                  id=\"two-factor-checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  formControlName=\"twoFactorEnabled\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"two-factor-checkbox\">{{\r\n                  'AbpIdentity::DisplayName:TwoFactorEnabled' | abpLocalization\r\n                }}</label>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab [title]=\"'AbpIdentity::Roles' | abpLocalization\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"mt-2 fade-in-top\">\r\n              <div\r\n                *ngFor=\"let roleGroup of roleGroups; let i = index; trackBy: trackByFn\"\r\n                class=\"custom-checkbox custom-control mb-2\"\r\n              >\r\n                <input\r\n                  type=\"checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  [attr.id]=\"'roles-' + i\"\r\n                  [formControl]=\"roleGroup.controls[roles[i].name]\"\r\n                />\r\n                <label class=\"custom-control-label\" [attr.for]=\"'roles-' + i\">{{\r\n                  roles[i].name\r\n                }}</label>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n      </ngb-tabset>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"form?.invalid\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'U' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: 'PermissionManagement.PermissionManagementComponent'\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n"
                }] }
    ];
    /** @nocollapse */
    UsersComponent.ctorParameters = function () { return [
        { type: ConfirmationService },
        { type: FormBuilder },
        { type: Store }
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
    UsersComponent.prototype.passwordRulesArr;
    /** @type {?} */
    UsersComponent.prototype.requiredPasswordLength;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5pZGVudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQU8sV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFVLFdBQVcsRUFBbUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFHTCxXQUFXLEVBQ1gsV0FBVyxFQUVYLFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBaUIsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsUUFBUSxFQUNSLFdBQVcsRUFDWCxZQUFZLEVBQ1osUUFBUSxFQUNSLFVBQVUsR0FDWCxNQUFNLGdDQUFnQyxDQUFDO0FBRXhDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RDtJQW9ERSx3QkFDVSxtQkFBd0MsRUFDeEMsRUFBZSxFQUNmLEtBQVk7UUFIdEIsaUJBSUk7UUFITSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBakN0Qix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFJM0IsY0FBUyxHQUF3QixFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUl4RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFYixxQkFBZ0IsR0FBRyxtQkFBQSxFQUFFLEVBQWlCLENBQUM7UUFFdkMsMkJBQXNCLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLGNBQVM7Ozs7O1FBQXFDLFVBQUMsS0FBSyxFQUFFLElBQUksSUFBSyxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUE3QixDQUE2QixFQUFDO1FBRTdGLDhCQUF5Qjs7OztRQUFHLFVBQUEsS0FBSztZQUMvQixLQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUMsRUFBQztJQVVDLENBQUM7SUFSSixzQkFBSSxzQ0FBVTs7OztRQUFkO1lBQUEsaUJBRUM7WUFEQyxPQUFPLEdBQUc7OztZQUFDLHFCQUFNLG1CQUFBLENBQUMsbUJBQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQWEsQ0FBQyxDQUFDLFFBQVEsRUFBZSxHQUFBLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUYsQ0FBQzs7O09BQUE7Ozs7SUFRRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7O1lBRUwsYUFBYSxHQUEyQixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FDckUsV0FBVyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUM3QztRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsb0NBQW9DLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxNQUFNLEVBQUU7WUFDeEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QztRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsd0NBQXdDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxNQUFNLEVBQUU7WUFDNUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQztRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsd0NBQXdDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxNQUFNLEVBQUU7WUFDNUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN2QztRQUVELElBQ0UsQ0FBQyxhQUFhLENBQUMsOENBQThDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxNQUFNLEVBQzlGO1lBQ0EsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN2QztRQUVELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLEVBQUU7WUFDNUUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUMsYUFBYSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDdEY7SUFDSCxDQUFDOzs7OztJQUVELGlDQUFROzs7O0lBQVIsVUFBUyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDOzs7O0lBRUQsa0NBQVM7OztJQUFUO1FBQUEsaUJBd0NDO1FBdkNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQyxTQUFTOzs7UUFBQztZQUM1QyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvRCxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUN4QixRQUFRLEVBQUUsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUYsS0FBSyxFQUFFO29CQUNMLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLEVBQUU7b0JBQ3pCLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ25FO2dCQUNELElBQUksRUFBRSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUQsT0FBTyxFQUFFLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNsRSxXQUFXLEVBQUUsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFFLGNBQWMsRUFBRSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25GLGdCQUFnQixFQUFFLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2RixTQUFTLEVBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQ3RCLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRzs7OztnQkFBQyxVQUFBLElBQUk7O29CQUNqQixPQUFBLEtBQUksQ0FBQyxFQUFFLENBQUMsS0FBSzt3QkFDWCxHQUFDLElBQUksQ0FBQyxJQUFJLElBQUc7NEJBQ1gsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU07Z0NBQzNCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzs7O2dDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSTs7OztnQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBdkIsQ0FBdUIsRUFBQyxFQUFoRSxDQUFnRSxFQUFDO2dDQUMvRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7eUJBQ25COzRCQUNEO2dCQU5GLENBTUUsRUFDSCxDQUNGO2FBQ0YsQ0FBQyxDQUFDOztnQkFFRyxrQkFBa0IsR0FBRztnQkFDekIsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDO2dCQUN2QyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQztnQkFDakQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7YUFDMUI7WUFFRCxLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxtQkFBTSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7WUFFL0UsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO2dCQUMzQixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLGtCQUFLLGtCQUFrQixHQUFFLFVBQVUsQ0FBQyxRQUFRLEdBQUUsQ0FBQztnQkFDdEYsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzthQUNwRDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGtDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsNEJBQUc7OztJQUFIO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBQSxFQUFFLEVBQXFCLENBQUM7UUFDeEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLG1CQUFBLEVBQUUsRUFBdUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCw2QkFBSTs7OztJQUFKLFVBQUssRUFBVTtRQUFmLGlCQWFDO1FBWkMsSUFBSSxDQUFDLEtBQUs7YUFDUCxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDN0IsSUFBSSxDQUNILFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUF6QyxDQUF5QyxFQUFDLEVBQzFELEtBQUssQ0FBQyxlQUFlLENBQUMsRUFDdEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBcUI7WUFDL0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7WUFDakQsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELDZCQUFJOzs7SUFBSjtRQUFBLGlCQThCQztRQTdCQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWQsSUFBQSxxQ0FBUzs7WUFDWCxlQUFlLEdBQUcsR0FBRzs7O1FBQ3pCO1lBQ0UsT0FBQSxTQUFTLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLEVBQUMsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFwQixDQUFvQixFQUFDO1FBQXhGLENBQXdGLEdBQzFGLEVBQUUsQ0FDSDtRQUVELElBQUksQ0FBQyxLQUFLO2FBQ1AsUUFBUSxDQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNkLENBQUMsQ0FBQyxJQUFJLFVBQVUsc0JBQ1QsSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFDbEIsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUNwQixTQUFTLEVBQUUsZUFBZSxJQUMxQjtZQUNKLENBQUMsQ0FBQyxJQUFJLFVBQVUsc0JBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQ2xCLFNBQVMsRUFBRSxlQUFlLElBQzFCLENBQ1A7YUFDQSxJQUFJLENBQUMsUUFBUTs7O1FBQUMsY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBeEIsQ0FBd0IsRUFBQyxDQUFDO2FBQzlDLFNBQVM7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsS0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7SUFFRCwrQkFBTTs7Ozs7SUFBTixVQUFPLEVBQVUsRUFBRSxRQUFnQjtRQUFuQyxpQkFVQztRQVRDLElBQUksQ0FBQyxtQkFBbUI7YUFDckIsSUFBSSxDQUFDLDhDQUE4QyxFQUFFLHlCQUF5QixFQUFFO1lBQy9FLHlCQUF5QixFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUM7YUFDRCxTQUFTOzs7O1FBQUMsVUFBQyxNQUFzQjtZQUNoQyxJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtnQkFDckMsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7Z0JBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxHQUFHLEVBQUUsRUFBVixDQUFVLEVBQUMsQ0FBQzthQUNyRTtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFRCxxQ0FBWTs7OztJQUFaLFVBQWEsSUFBWTtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztRQUV0RSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDOzs7O0lBRUQsNEJBQUc7OztJQUFIO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSzthQUNQLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDdEMsSUFBSSxDQUFDLFFBQVE7OztRQUFDLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQXRCLENBQXNCLEVBQUMsQ0FBQzthQUM1QyxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDOztnQkF6TkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQix1dFZBQXFDO2lCQUN0Qzs7OztnQkE3QlEsbUJBQW1CO2dCQUsxQixXQUFXO2dCQU1JLEtBQUs7OzsrQkEwQm5CLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQUw1QztRQURDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDOzBDQUN4QixVQUFVO2lEQUFzQjtJQUd2QztRQURDLE1BQU0sQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7MENBQzVCLFVBQVU7dURBQVM7SUFpTmxDLHFCQUFDO0NBQUEsQUExTkQsSUEwTkM7U0F0TlksY0FBYzs7O0lBQ3pCLCtCQUN1Qzs7SUFFdkMscUNBQ2dDOztJQUVoQyxzQ0FDK0I7O0lBRS9CLDhCQUFnQjs7SUFFaEIsa0NBQTRCOztJQUU1QiwyQ0FBdUM7O0lBRXZDLCtCQUEyQjs7SUFFM0IsNENBQTJCOztJQUUzQixxQ0FBb0I7O0lBRXBCLG1DQUF3RDs7SUFFeEQsd0NBQXdCOztJQUV4QixpQ0FBZ0I7O0lBRWhCLG1DQUFrQjs7SUFFbEIsbUNBQWU7O0lBRWYsaUNBQWE7O0lBRWIsMENBQXVDOztJQUV2QyxnREFBMkI7O0lBRTNCLG1DQUE2Rjs7SUFFN0YsbURBRUU7Ozs7O0lBT0EsNkNBQWdEOzs7OztJQUNoRCw0QkFBdUI7Ozs7O0lBQ3ZCLCtCQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFCUCwgQ29uZmlnU3RhdGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlLCBUb2FzdGVyIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFRyYWNrQnlGdW5jdGlvbiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQWJzdHJhY3RDb250cm9sLFxyXG4gIEZvcm1BcnJheSxcclxuICBGb3JtQnVpbGRlcixcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtR3JvdXAsXHJcbiAgVmFsaWRhdG9ycyxcclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFBhc3N3b3JkUnVsZXMsIHZhbGlkYXRlUGFzc3dvcmQgfSBmcm9tICdAbmd4LXZhbGlkYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbmFsaXplLCBwbHVjaywgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7XHJcbiAgQ3JlYXRlVXNlcixcclxuICBEZWxldGVVc2VyLFxyXG4gIEdldFJvbGVzLFxyXG4gIEdldFVzZXJCeUlkLFxyXG4gIEdldFVzZXJSb2xlcyxcclxuICBHZXRVc2VycyxcclxuICBVcGRhdGVVc2VyLFxyXG59IGZyb20gJy4uLy4uL2FjdGlvbnMvaWRlbnRpdHkuYWN0aW9ucyc7XHJcbmltcG9ydCB7IElkZW50aXR5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2lkZW50aXR5JztcclxuaW1wb3J0IHsgSWRlbnRpdHlTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlcy9pZGVudGl0eS5zdGF0ZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLXVzZXJzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdXNlcnMuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBTZWxlY3QoSWRlbnRpdHlTdGF0ZS5nZXRVc2VycylcclxuICBkYXRhJDogT2JzZXJ2YWJsZTxJZGVudGl0eS5Vc2VySXRlbVtdPjtcclxuXHJcbiAgQFNlbGVjdChJZGVudGl0eVN0YXRlLmdldFVzZXJzVG90YWxDb3VudClcclxuICB0b3RhbENvdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG5cclxuICBAVmlld0NoaWxkKCdtb2RhbENvbnRlbnQnLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBtb2RhbENvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgc2VsZWN0ZWQ6IElkZW50aXR5LlVzZXJJdGVtO1xyXG5cclxuICBzZWxlY3RlZFVzZXJSb2xlczogSWRlbnRpdHkuUm9sZUl0ZW1bXTtcclxuXHJcbiAgcm9sZXM6IElkZW50aXR5LlJvbGVJdGVtW107XHJcblxyXG4gIHZpc2libGVQZXJtaXNzaW9ucyA9IGZhbHNlO1xyXG5cclxuICBwcm92aWRlcktleTogc3RyaW5nO1xyXG5cclxuICBwYWdlUXVlcnk6IEFCUC5QYWdlUXVlcnlQYXJhbXMgPSB7IG1heFJlc3VsdENvdW50OiAxMCB9O1xyXG5cclxuICBpc01vZGFsVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBtb2RhbEJ1c3kgPSBmYWxzZTtcclxuXHJcbiAgc29ydE9yZGVyID0gJyc7XHJcblxyXG4gIHNvcnRLZXkgPSAnJztcclxuXHJcbiAgcGFzc3dvcmRSdWxlc0FyciA9IFtdIGFzIFBhc3N3b3JkUnVsZXM7XHJcblxyXG4gIHJlcXVpcmVkUGFzc3dvcmRMZW5ndGggPSAxO1xyXG5cclxuICB0cmFja0J5Rm46IFRyYWNrQnlGdW5jdGlvbjxBYnN0cmFjdENvbnRyb2w+ID0gKGluZGV4LCBpdGVtKSA9PiBPYmplY3Qua2V5cyhpdGVtKVswXSB8fCBpbmRleDtcclxuXHJcbiAgb25WaXNpYmxlUGVybWlzc2lvbkNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgIHRoaXMudmlzaWJsZVBlcm1pc3Npb25zID0gZXZlbnQ7XHJcbiAgfTtcclxuXHJcbiAgZ2V0IHJvbGVHcm91cHMoKTogRm9ybUdyb3VwW10ge1xyXG4gICAgcmV0dXJuIHNucSgoKSA9PiAodGhpcy5mb3JtLmdldCgncm9sZU5hbWVzJykgYXMgRm9ybUFycmF5KS5jb250cm9scyBhcyBGb3JtR3JvdXBbXSwgW10pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmdldCgpO1xyXG5cclxuICAgIGNvbnN0IHBhc3N3b3JkUnVsZXM6IEFCUC5EaWN0aW9uYXJ5PHN0cmluZz4gPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFxyXG4gICAgICBDb25maWdTdGF0ZS5nZXRTZXR0aW5ncygnSWRlbnRpdHkuUGFzc3dvcmQnKSxcclxuICAgICk7XHJcblxyXG4gICAgaWYgKChwYXNzd29yZFJ1bGVzWydBYnAuSWRlbnRpdHkuUGFzc3dvcmQuUmVxdWlyZURpZ2l0J10gfHwgJycpLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJykge1xyXG4gICAgICB0aGlzLnBhc3N3b3JkUnVsZXNBcnIucHVzaCgnbnVtYmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKChwYXNzd29yZFJ1bGVzWydBYnAuSWRlbnRpdHkuUGFzc3dvcmQuUmVxdWlyZUxvd2VyY2FzZSddIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcclxuICAgICAgdGhpcy5wYXNzd29yZFJ1bGVzQXJyLnB1c2goJ3NtYWxsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKChwYXNzd29yZFJ1bGVzWydBYnAuSWRlbnRpdHkuUGFzc3dvcmQuUmVxdWlyZVVwcGVyY2FzZSddIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcclxuICAgICAgdGhpcy5wYXNzd29yZFJ1bGVzQXJyLnB1c2goJ2NhcGl0YWwnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIChwYXNzd29yZFJ1bGVzWydBYnAuSWRlbnRpdHkuUGFzc3dvcmQuUmVxdWlyZU5vbkFscGhhbnVtZXJpYyddIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSdcclxuICAgICkge1xyXG4gICAgICB0aGlzLnBhc3N3b3JkUnVsZXNBcnIucHVzaCgnc3BlY2lhbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKCtwYXNzd29yZFJ1bGVzWydBYnAuSWRlbnRpdHkuUGFzc3dvcmQuUmVxdWlyZWRMZW5ndGgnXSkpIHtcclxuICAgICAgdGhpcy5yZXF1aXJlZFBhc3N3b3JkTGVuZ3RoID0gK3Bhc3N3b3JkUnVsZXNbJ0FicC5JZGVudGl0eS5QYXNzd29yZC5SZXF1aXJlZExlbmd0aCddO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TZWFyY2godmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5wYWdlUXVlcnkuZmlsdGVyID0gdmFsdWU7XHJcbiAgICB0aGlzLmdldCgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRGb3JtKCkge1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0Um9sZXMoKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5yb2xlcyA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoSWRlbnRpdHlTdGF0ZS5nZXRSb2xlcyk7XHJcbiAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgIHVzZXJOYW1lOiBbdGhpcy5zZWxlY3RlZC51c2VyTmFtZSB8fCAnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDI1NildXSxcclxuICAgICAgICBlbWFpbDogW1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZC5lbWFpbCB8fCAnJyxcclxuICAgICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsLCBWYWxpZGF0b3JzLm1heExlbmd0aCgyNTYpXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG5hbWU6IFt0aGlzLnNlbGVjdGVkLm5hbWUgfHwgJycsIFtWYWxpZGF0b3JzLm1heExlbmd0aCg2NCldXSxcclxuICAgICAgICBzdXJuYW1lOiBbdGhpcy5zZWxlY3RlZC5zdXJuYW1lIHx8ICcnLCBbVmFsaWRhdG9ycy5tYXhMZW5ndGgoNjQpXV0sXHJcbiAgICAgICAgcGhvbmVOdW1iZXI6IFt0aGlzLnNlbGVjdGVkLnBob25lTnVtYmVyIHx8ICcnLCBbVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTYpXV0sXHJcbiAgICAgICAgbG9ja291dEVuYWJsZWQ6IFt0aGlzLnNlbGVjdGVkLmxvY2tvdXRFbmFibGVkIHx8ICh0aGlzLnNlbGVjdGVkLmlkID8gZmFsc2UgOiB0cnVlKV0sXHJcbiAgICAgICAgdHdvRmFjdG9yRW5hYmxlZDogW3RoaXMuc2VsZWN0ZWQudHdvRmFjdG9yRW5hYmxlZCB8fCAodGhpcy5zZWxlY3RlZC5pZCA/IGZhbHNlIDogdHJ1ZSldLFxyXG4gICAgICAgIHJvbGVOYW1lczogdGhpcy5mYi5hcnJheShcclxuICAgICAgICAgIHRoaXMucm9sZXMubWFwKHJvbGUgPT5cclxuICAgICAgICAgICAgdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgICAgW3JvbGUubmFtZV06IFtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRVc2VyUm9sZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgID8gISFzbnEoKCkgPT4gdGhpcy5zZWxlY3RlZFVzZXJSb2xlcy5maW5kKHVzZXJSb2xlID0+IHVzZXJSb2xlLmlkID09PSByb2xlLmlkKSlcclxuICAgICAgICAgICAgICAgICAgOiByb2xlLmlzRGVmYXVsdCxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBwYXNzd29yZFZhbGlkYXRvcnMgPSBbXHJcbiAgICAgICAgdmFsaWRhdGVQYXNzd29yZCh0aGlzLnBhc3N3b3JkUnVsZXNBcnIpLFxyXG4gICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKHRoaXMucmVxdWlyZWRQYXNzd29yZExlbmd0aCksXHJcbiAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTI4KSxcclxuICAgICAgXTtcclxuXHJcbiAgICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKCdwYXNzd29yZCcsIG5ldyBGb3JtQ29udHJvbCgnJywgWy4uLnBhc3N3b3JkVmFsaWRhdG9yc10pKTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5zZWxlY3RlZC51c2VyTmFtZSkge1xyXG4gICAgICAgIHRoaXMuZm9ybS5nZXQoJ3Bhc3N3b3JkJykuc2V0VmFsaWRhdG9ycyhbLi4ucGFzc3dvcmRWYWxpZGF0b3JzLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSk7XHJcbiAgICAgICAgdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKCkge1xyXG4gICAgdGhpcy5idWlsZEZvcm0oKTtcclxuICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYWRkKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHt9IGFzIElkZW50aXR5LlVzZXJJdGVtO1xyXG4gICAgdGhpcy5zZWxlY3RlZFVzZXJSb2xlcyA9IFtdIGFzIElkZW50aXR5LlJvbGVJdGVtW107XHJcbiAgICB0aGlzLm9wZW5Nb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgZWRpdChpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN0b3JlXHJcbiAgICAgIC5kaXNwYXRjaChuZXcgR2V0VXNlckJ5SWQoaWQpKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0VXNlclJvbGVzKGlkKSkpLFxyXG4gICAgICAgIHBsdWNrKCdJZGVudGl0eVN0YXRlJyksXHJcbiAgICAgICAgdGFrZSgxKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKChzdGF0ZTogSWRlbnRpdHkuU3RhdGUpID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gc3RhdGUuc2VsZWN0ZWRVc2VyO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRVc2VyUm9sZXMgPSBzdGF0ZS5zZWxlY3RlZFVzZXJSb2xlcztcclxuICAgICAgICB0aGlzLm9wZW5Nb2RhbCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICBpZiAoIXRoaXMuZm9ybS52YWxpZCB8fCB0aGlzLm1vZGFsQnVzeSkgcmV0dXJuO1xyXG4gICAgdGhpcy5tb2RhbEJ1c3kgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHsgcm9sZU5hbWVzIH0gPSB0aGlzLmZvcm0udmFsdWU7XHJcbiAgICBjb25zdCBtYXBwZWRSb2xlTmFtZXMgPSBzbnEoXHJcbiAgICAgICgpID0+XHJcbiAgICAgICAgcm9sZU5hbWVzLmZpbHRlcihyb2xlID0+ICEhcm9sZVtPYmplY3Qua2V5cyhyb2xlKVswXV0pLm1hcChyb2xlID0+IE9iamVjdC5rZXlzKHJvbGUpWzBdKSxcclxuICAgICAgW10sXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKFxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuaWRcclxuICAgICAgICAgID8gbmV3IFVwZGF0ZVVzZXIoe1xyXG4gICAgICAgICAgICAgIC4uLnRoaXMuc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLnNlbGVjdGVkLmlkLFxyXG4gICAgICAgICAgICAgIHJvbGVOYW1lczogbWFwcGVkUm9sZU5hbWVzLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBuZXcgQ3JlYXRlVXNlcih7XHJcbiAgICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxyXG4gICAgICAgICAgICAgIHJvbGVOYW1lczogbWFwcGVkUm9sZU5hbWVzLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgKVxyXG4gICAgICAucGlwZShmaW5hbGl6ZSgoKSA9PiAodGhpcy5tb2RhbEJ1c3kgPSBmYWxzZSkpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nZXQoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoaWQ6IHN0cmluZywgdXNlck5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlXHJcbiAgICAgIC53YXJuKCdBYnBJZGVudGl0eTo6VXNlckRlbGV0aW9uQ29uZmlybWF0aW9uTWVzc2FnZScsICdBYnBJZGVudGl0eTo6QXJlWW91U3VyZScsIHtcclxuICAgICAgICBtZXNzYWdlTG9jYWxpemF0aW9uUGFyYW1zOiBbdXNlck5hbWVdLFxyXG4gICAgICB9KVxyXG4gICAgICAuc3Vic2NyaWJlKChzdGF0dXM6IFRvYXN0ZXIuU3RhdHVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gVG9hc3Rlci5TdGF0dXMuY29uZmlybSkge1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlVXNlcihpZCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdldCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcikge1xyXG4gICAgdGhpcy5wYWdlUXVlcnkuc2tpcENvdW50ID0gKHBhZ2UgLSAxKSAqIHRoaXMucGFnZVF1ZXJ5Lm1heFJlc3VsdENvdW50O1xyXG5cclxuICAgIHRoaXMuZ2V0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQoKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2gobmV3IEdldFVzZXJzKHRoaXMucGFnZVF1ZXJ5KSlcclxuICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4gKHRoaXMubG9hZGluZyA9IGZhbHNlKSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19