/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/users/users.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ConfigState } from '@abp/ng.core';
import { ConfirmationService } from '@abp/ng.theme.shared';
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
        if (+(passwordRules['Abp.Identity.Password.RequiredUniqueChars'] || 0) > 0) {
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
                            !!snq((/**
                             * @return {?}
                             */
                            function () { return _this.selectedUserRoles.find((/**
                             * @param {?} userRole
                             * @return {?}
                             */
                            function (userRole) { return userRole.id === role.id; })); })),
                        ],
                        _a));
                }))),
            });
            /** @type {?} */
            var passwordValidators = [
                validatePassword(_this.passwordRulesArr),
                Validators.minLength(_this.requiredPasswordLength),
                Validators.maxLength(32),
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
            if (status === "confirm" /* confirm */) {
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
                    template: "<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Users' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Users.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewUser' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <label\r\n        ><input\r\n          type=\"search\"\r\n          class=\"form-control form-control-sm\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          (input.debounce)=\"onSearch($event.target.value)\"\r\n      /></label>\r\n    </div>\r\n    <abp-table\r\n      *ngIf=\"[150, 250, 250, 250] as columnWidths\"\r\n      [abpLoading]=\"loading\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [colgroupTemplate]=\"tableColGroup\"\r\n      [headerTemplate]=\"tableHeader\"\r\n      [bodyTemplate]=\"tableBody\"\r\n      [value]=\"data$ | async\"\r\n      [rows]=\"pageQuery.maxResultCount\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [scrollable]=\"true\"\r\n      (pageChange)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template #tableColGroup>\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template #tableHeader>\r\n        <tr>\r\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n          <th (click)=\"sortOrderIcon.sort('userName')\">\r\n            {{ 'AbpIdentity::UserName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              sortKey=\"userName\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n          <th (click)=\"sortOrderIcon.sort('email')\">\r\n            {{ 'AbpIdentity::EmailAddress' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              sortKey=\"email\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            ></abp-sort-order-icon>\r\n          </th>\r\n          <th (click)=\"sortOrderIcon.sort('phoneNumber')\">\r\n            {{ 'AbpIdentity::PhoneNumber' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              sortKey=\"phoneNumber\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tableBody let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"edit(data.id)\"\r\n                >\r\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.ManagePermissions'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"providerKey = data.id; visiblePermissions = true\"\r\n                >\r\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.userName)\"\r\n                >\r\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>{{ data.userName }}</td>\r\n          <td>{{ data.email }}</td>\r\n          <td>{{ data.phoneNumber }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </abp-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\" (disappear)=\"form = null\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-template #loaderRef\r\n      ><div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div\r\n    ></ng-template>\r\n\r\n    <form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n      <ngb-tabset>\r\n        <ngb-tab [title]=\"'AbpIdentity::UserInformations' | abpLocalization\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"mt-2 fade-in-top\">\r\n              <div class=\"form-group\">\r\n                <label for=\"user-name\">{{ 'AbpIdentity::UserName' | abpLocalization }}</label\r\n                ><span> * </span>\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"user-name\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"userName\"\r\n                  autofocus\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label>\r\n                <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"surname\">{{\r\n                  'AbpIdentity::DisplayName:Surname' | abpLocalization\r\n                }}</label>\r\n                <input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">{{ 'AbpIdentity::Password' | abpLocalization }}</label\r\n                ><span *ngIf=\"!selected.userName\"> * </span>\r\n                <input\r\n                  type=\"password\"\r\n                  id=\"password\"\r\n                  autocomplete=\"new-password\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"password\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">{{ 'AbpIdentity::EmailAddress' | abpLocalization }}</label\r\n                ><span> * </span>\r\n                <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"phone-number\">{{ 'AbpIdentity::PhoneNumber' | abpLocalization }}</label>\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"phone-number\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"phoneNumber\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"custom-checkbox custom-control mb-2\">\r\n                <input\r\n                  type=\"checkbox\"\r\n                  id=\"lockout-checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  formControlName=\"lockoutEnabled\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"lockout-checkbox\">{{\r\n                  'AbpIdentity::DisplayName:LockoutEnabled' | abpLocalization\r\n                }}</label>\r\n              </div>\r\n\r\n              <div class=\"custom-checkbox custom-control mb-2\">\r\n                <input\r\n                  type=\"checkbox\"\r\n                  id=\"two-factor-checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  formControlName=\"twoFactorEnabled\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"two-factor-checkbox\">{{\r\n                  'AbpIdentity::DisplayName:TwoFactorEnabled' | abpLocalization\r\n                }}</label>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab [title]=\"'AbpIdentity::Roles' | abpLocalization\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"mt-2 fade-in-top\">\r\n              <div\r\n                *ngFor=\"let roleGroup of roleGroups; let i = index; trackBy: trackByFn\"\r\n                class=\"custom-checkbox custom-control mb-2\"\r\n              >\r\n                <input\r\n                  type=\"checkbox\"\r\n                  name=\"Roles[0].IsAssigned\"\r\n                  value=\"true\"\r\n                  class=\"custom-control-input\"\r\n                  [attr.id]=\"'roles-' + i\"\r\n                  [formControl]=\"roleGroup.controls[roles[i].name]\"\r\n                />\r\n                <label class=\"custom-control-label\" [attr.for]=\"'roles-' + i\">{{\r\n                  roles[i].name\r\n                }}</label>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n      </ngb-tabset>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"form?.invalid\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'U' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: 'PermissionManagement.PermissionManagementComponent'\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5pZGVudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQU8sV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBVyxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQVUsV0FBVyxFQUFtQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUdMLFdBQVcsRUFDWCxXQUFXLEVBRVgsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQ0wsVUFBVSxFQUNWLFVBQVUsRUFDVixRQUFRLEVBQ1IsV0FBVyxFQUNYLFlBQVksRUFDWixRQUFRLEVBQ1IsVUFBVSxHQUNYLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVEO0lBb0RFLHdCQUNVLG1CQUF3QyxFQUN4QyxFQUFlLEVBQ2YsS0FBWTtRQUh0QixpQkFJSTtRQUhNLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQU87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eEIsVUFBVTtpREFBc0I7SUFHdkM7UUFEQyxNQUFNLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDOzBDQUM1QixVQUFVO3VEQUFTO0lBNk1sQyxxQkFBQztDQUFBLEFBdE5ELElBc05DO1NBbE5ZLGNBQWM7OztJQUN6QiwrQkFDdUM7O0lBRXZDLHFDQUNnQzs7SUFFaEMsc0NBQytCOztJQUUvQiw4QkFBZ0I7O0lBRWhCLGtDQUE0Qjs7SUFFNUIsMkNBQXVDOztJQUV2QywrQkFBMkI7O0lBRTNCLDRDQUEyQjs7SUFFM0IscUNBQW9COztJQUVwQixtQ0FBd0Q7O0lBRXhELHdDQUF3Qjs7SUFFeEIsaUNBQWdCOztJQUVoQixtQ0FBa0I7O0lBRWxCLG1DQUFlOztJQUVmLGlDQUFhOztJQUViLDBDQUF1Qzs7SUFFdkMsZ0RBQTJCOztJQUUzQixtQ0FBNkY7O0lBRTdGLG1EQUVFOzs7OztJQU9BLDZDQUFnRDs7Ozs7SUFDaEQsNEJBQXVCOzs7OztJQUN2QiwrQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQlAsIENvbmZpZ1N0YXRlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSwgVG9hc3RlciB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBUcmFja0J5RnVuY3Rpb24sIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFic3RyYWN0Q29udHJvbCxcclxuICBGb3JtQXJyYXksXHJcbiAgRm9ybUJ1aWxkZXIsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUdyb3VwLFxyXG4gIFZhbGlkYXRvcnMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBQYXNzd29yZFJ1bGVzLCB2YWxpZGF0ZVBhc3N3b3JkIH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgU2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgcGx1Y2ssIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQge1xyXG4gIENyZWF0ZVVzZXIsXHJcbiAgRGVsZXRlVXNlcixcclxuICBHZXRSb2xlcyxcclxuICBHZXRVc2VyQnlJZCxcclxuICBHZXRVc2VyUm9sZXMsXHJcbiAgR2V0VXNlcnMsXHJcbiAgVXBkYXRlVXNlcixcclxufSBmcm9tICcuLi8uLi9hY3Rpb25zL2lkZW50aXR5LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBJZGVudGl0eSB9IGZyb20gJy4uLy4uL21vZGVscy9pZGVudGl0eSc7XHJcbmltcG9ydCB7IElkZW50aXR5U3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZXMvaWRlbnRpdHkuc3RhdGUnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC11c2VycycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXJzLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAU2VsZWN0KElkZW50aXR5U3RhdGUuZ2V0VXNlcnMpXHJcbiAgZGF0YSQ6IE9ic2VydmFibGU8SWRlbnRpdHkuVXNlckl0ZW1bXT47XHJcblxyXG4gIEBTZWxlY3QoSWRlbnRpdHlTdGF0ZS5nZXRVc2Vyc1RvdGFsQ291bnQpXHJcbiAgdG90YWxDb3VudCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbW9kYWxDb250ZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgbW9kYWxDb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBmb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIHNlbGVjdGVkOiBJZGVudGl0eS5Vc2VySXRlbTtcclxuXHJcbiAgc2VsZWN0ZWRVc2VyUm9sZXM6IElkZW50aXR5LlJvbGVJdGVtW107XHJcblxyXG4gIHJvbGVzOiBJZGVudGl0eS5Sb2xlSXRlbVtdO1xyXG5cclxuICB2aXNpYmxlUGVybWlzc2lvbnMgPSBmYWxzZTtcclxuXHJcbiAgcHJvdmlkZXJLZXk6IHN0cmluZztcclxuXHJcbiAgcGFnZVF1ZXJ5OiBBQlAuUGFnZVF1ZXJ5UGFyYW1zID0geyBtYXhSZXN1bHRDb3VudDogMTAgfTtcclxuXHJcbiAgaXNNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gIGxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgbW9kYWxCdXN5ID0gZmFsc2U7XHJcblxyXG4gIHNvcnRPcmRlciA9ICcnO1xyXG5cclxuICBzb3J0S2V5ID0gJyc7XHJcblxyXG4gIHBhc3N3b3JkUnVsZXNBcnIgPSBbXSBhcyBQYXNzd29yZFJ1bGVzO1xyXG5cclxuICByZXF1aXJlZFBhc3N3b3JkTGVuZ3RoID0gMTtcclxuXHJcbiAgdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248QWJzdHJhY3RDb250cm9sPiA9IChpbmRleCwgaXRlbSkgPT4gT2JqZWN0LmtleXMoaXRlbSlbMF0gfHwgaW5kZXg7XHJcblxyXG4gIG9uVmlzaWJsZVBlcm1pc3Npb25DaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICB0aGlzLnZpc2libGVQZXJtaXNzaW9ucyA9IGV2ZW50O1xyXG4gIH07XHJcblxyXG4gIGdldCByb2xlR3JvdXBzKCk6IEZvcm1Hcm91cFtdIHtcclxuICAgIHJldHVybiBzbnEoKCkgPT4gKHRoaXMuZm9ybS5nZXQoJ3JvbGVOYW1lcycpIGFzIEZvcm1BcnJheSkuY29udHJvbHMgYXMgRm9ybUdyb3VwW10sIFtdKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb25maXJtYXRpb25TZXJ2aWNlOiBDb25maXJtYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXQoKTtcclxuXHJcbiAgICBjb25zdCBwYXNzd29yZFJ1bGVzOiBBQlAuRGljdGlvbmFyeTxzdHJpbmc+ID0gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChcclxuICAgICAgQ29uZmlnU3RhdGUuZ2V0U2V0dGluZ3MoJ0lkZW50aXR5LlBhc3N3b3JkJyksXHJcbiAgICApO1xyXG5cclxuICAgIGlmICgocGFzc3dvcmRSdWxlc1snQWJwLklkZW50aXR5LlBhc3N3b3JkLlJlcXVpcmVEaWdpdCddIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcclxuICAgICAgdGhpcy5wYXNzd29yZFJ1bGVzQXJyLnB1c2goJ251bWJlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgocGFzc3dvcmRSdWxlc1snQWJwLklkZW50aXR5LlBhc3N3b3JkLlJlcXVpcmVMb3dlcmNhc2UnXSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIHRoaXMucGFzc3dvcmRSdWxlc0Fyci5wdXNoKCdzbWFsbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgocGFzc3dvcmRSdWxlc1snQWJwLklkZW50aXR5LlBhc3N3b3JkLlJlcXVpcmVVcHBlcmNhc2UnXSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIHRoaXMucGFzc3dvcmRSdWxlc0Fyci5wdXNoKCdjYXBpdGFsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCsocGFzc3dvcmRSdWxlc1snQWJwLklkZW50aXR5LlBhc3N3b3JkLlJlcXVpcmVkVW5pcXVlQ2hhcnMnXSB8fCAwKSA+IDApIHtcclxuICAgICAgdGhpcy5wYXNzd29yZFJ1bGVzQXJyLnB1c2goJ3NwZWNpYWwnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcigrcGFzc3dvcmRSdWxlc1snQWJwLklkZW50aXR5LlBhc3N3b3JkLlJlcXVpcmVkTGVuZ3RoJ10pKSB7XHJcbiAgICAgIHRoaXMucmVxdWlyZWRQYXNzd29yZExlbmd0aCA9ICtwYXNzd29yZFJ1bGVzWydBYnAuSWRlbnRpdHkuUGFzc3dvcmQuUmVxdWlyZWRMZW5ndGgnXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2VhcmNoKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucGFnZVF1ZXJ5LmZpbHRlciA9IHZhbHVlO1xyXG4gICAgdGhpcy5nZXQoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkRm9ybSgpIHtcclxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFJvbGVzKCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMucm9sZXMgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KElkZW50aXR5U3RhdGUuZ2V0Um9sZXMpO1xyXG4gICAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICB1c2VyTmFtZTogW3RoaXMuc2VsZWN0ZWQudXNlck5hbWUgfHwgJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCgyNTYpXV0sXHJcbiAgICAgICAgZW1haWw6IFtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuZW1haWwgfHwgJycsXHJcbiAgICAgICAgICBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMjU2KV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBuYW1lOiBbdGhpcy5zZWxlY3RlZC5uYW1lIHx8ICcnLCBbVmFsaWRhdG9ycy5tYXhMZW5ndGgoNjQpXV0sXHJcbiAgICAgICAgc3VybmFtZTogW3RoaXMuc2VsZWN0ZWQuc3VybmFtZSB8fCAnJywgW1ZhbGlkYXRvcnMubWF4TGVuZ3RoKDY0KV1dLFxyXG4gICAgICAgIHBob25lTnVtYmVyOiBbdGhpcy5zZWxlY3RlZC5waG9uZU51bWJlciB8fCAnJywgW1ZhbGlkYXRvcnMubWF4TGVuZ3RoKDE2KV1dLFxyXG4gICAgICAgIGxvY2tvdXRFbmFibGVkOiBbdGhpcy5zZWxlY3RlZC5sb2Nrb3V0RW5hYmxlZCB8fCAodGhpcy5zZWxlY3RlZC5pZCA/IGZhbHNlIDogdHJ1ZSldLFxyXG4gICAgICAgIHR3b0ZhY3RvckVuYWJsZWQ6IFt0aGlzLnNlbGVjdGVkLnR3b0ZhY3RvckVuYWJsZWQgfHwgKHRoaXMuc2VsZWN0ZWQuaWQgPyBmYWxzZSA6IHRydWUpXSxcclxuICAgICAgICByb2xlTmFtZXM6IHRoaXMuZmIuYXJyYXkoXHJcbiAgICAgICAgICB0aGlzLnJvbGVzLm1hcChyb2xlID0+XHJcbiAgICAgICAgICAgIHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAgIFtyb2xlLm5hbWVdOiBbXHJcbiAgICAgICAgICAgICAgICAhIXNucSgoKSA9PiB0aGlzLnNlbGVjdGVkVXNlclJvbGVzLmZpbmQodXNlclJvbGUgPT4gdXNlclJvbGUuaWQgPT09IHJvbGUuaWQpKSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBwYXNzd29yZFZhbGlkYXRvcnMgPSBbXHJcbiAgICAgICAgdmFsaWRhdGVQYXNzd29yZCh0aGlzLnBhc3N3b3JkUnVsZXNBcnIpLFxyXG4gICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKHRoaXMucmVxdWlyZWRQYXNzd29yZExlbmd0aCksXHJcbiAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzIpLFxyXG4gICAgICBdO1xyXG5cclxuICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2woJ3Bhc3N3b3JkJywgbmV3IEZvcm1Db250cm9sKCcnLCBbLi4ucGFzc3dvcmRWYWxpZGF0b3JzXSkpO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkLnVzZXJOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS5zZXRWYWxpZGF0b3JzKFsuLi5wYXNzd29yZFZhbGlkYXRvcnMsIFZhbGlkYXRvcnMucmVxdWlyZWRdKTtcclxuICAgICAgICB0aGlzLmZvcm0uZ2V0KCdwYXNzd29yZCcpLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwoKSB7XHJcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xyXG4gICAgdGhpcy5pc01vZGFsVmlzaWJsZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBhZGQoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0ge30gYXMgSWRlbnRpdHkuVXNlckl0ZW07XHJcbiAgICB0aGlzLnNlbGVjdGVkVXNlclJvbGVzID0gW10gYXMgSWRlbnRpdHkuUm9sZUl0ZW1bXTtcclxuICAgIHRoaXMub3Blbk1vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBlZGl0KGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKG5ldyBHZXRVc2VyQnlJZChpZCkpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRVc2VyUm9sZXMoaWQpKSksXHJcbiAgICAgICAgcGx1Y2soJ0lkZW50aXR5U3RhdGUnKSxcclxuICAgICAgICB0YWtlKDEpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKHN0YXRlOiBJZGVudGl0eS5TdGF0ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzdGF0ZS5zZWxlY3RlZFVzZXI7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXJSb2xlcyA9IHN0YXRlLnNlbGVjdGVkVXNlclJvbGVzO1xyXG4gICAgICAgIHRoaXMub3Blbk1vZGFsKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIGlmICghdGhpcy5mb3JtLnZhbGlkIHx8IHRoaXMubW9kYWxCdXN5KSByZXR1cm47XHJcbiAgICB0aGlzLm1vZGFsQnVzeSA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgeyByb2xlTmFtZXMgfSA9IHRoaXMuZm9ybS52YWx1ZTtcclxuICAgIGNvbnN0IG1hcHBlZFJvbGVOYW1lcyA9IHNucShcclxuICAgICAgKCkgPT5cclxuICAgICAgICByb2xlTmFtZXMuZmlsdGVyKHJvbGUgPT4gISFyb2xlW09iamVjdC5rZXlzKHJvbGUpWzBdXSkubWFwKHJvbGUgPT4gT2JqZWN0LmtleXMocm9sZSlbMF0pLFxyXG4gICAgICBbXSxcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2goXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5pZFxyXG4gICAgICAgICAgPyBuZXcgVXBkYXRlVXNlcih7XHJcbiAgICAgICAgICAgICAgLi4udGhpcy5zZWxlY3RlZCxcclxuICAgICAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXHJcbiAgICAgICAgICAgICAgaWQ6IHRoaXMuc2VsZWN0ZWQuaWQsXHJcbiAgICAgICAgICAgICAgcm9sZU5hbWVzOiBtYXBwZWRSb2xlTmFtZXMsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IG5ldyBDcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgICAuLi50aGlzLmZvcm0udmFsdWUsXHJcbiAgICAgICAgICAgICAgcm9sZU5hbWVzOiBtYXBwZWRSb2xlTmFtZXMsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICApXHJcbiAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+ICh0aGlzLm1vZGFsQnVzeSA9IGZhbHNlKSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdldCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZShpZDogc3RyaW5nLCB1c2VyTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2VcclxuICAgICAgLndhcm4oJ0FicElkZW50aXR5OjpVc2VyRGVsZXRpb25Db25maXJtYXRpb25NZXNzYWdlJywgJ0FicElkZW50aXR5OjpBcmVZb3VTdXJlJywge1xyXG4gICAgICAgIG1lc3NhZ2VMb2NhbGl6YXRpb25QYXJhbXM6IFt1c2VyTmFtZV0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoKHN0YXR1czogVG9hc3Rlci5TdGF0dXMpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBUb2FzdGVyLlN0YXR1cy5jb25maXJtKSB7XHJcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVVc2VyKGlkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuZ2V0KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnBhZ2VRdWVyeS5za2lwQ291bnQgPSAocGFnZSAtIDEpICogdGhpcy5wYWdlUXVlcnkubWF4UmVzdWx0Q291bnQ7XHJcblxyXG4gICAgdGhpcy5nZXQoKTtcclxuICB9XHJcblxyXG4gIGdldCgpIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnN0b3JlXHJcbiAgICAgIC5kaXNwYXRjaChuZXcgR2V0VXNlcnModGhpcy5wYWdlUXVlcnkpKVxyXG4gICAgICAucGlwZShmaW5hbGl6ZSgoKSA9PiAodGhpcy5sb2FkaW5nID0gZmFsc2UpKSlcclxuICAgICAgLnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=