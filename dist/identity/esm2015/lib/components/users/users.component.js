/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/users/users.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ConfigState } from '@abp/ng.core';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators, } from '@angular/forms';
import { validatePassword } from '@ngx-validate/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, pluck, switchMap, take } from 'rxjs/operators';
import snq from 'snq';
import { CreateUser, DeleteUser, GetUserById, GetUserRoles, GetUsers, UpdateUser, } from '../../actions/identity.actions';
import { IdentityState } from '../../states/identity.state';
import { IdentityService } from '../../services/identity.service';
export class UsersComponent {
    /**
     * @param {?} confirmationService
     * @param {?} fb
     * @param {?} store
     * @param {?} identityService
     */
    constructor(confirmationService, fb, store, identityService) {
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
        this.passwordRulesArr = (/** @type {?} */ ([]));
        this.requiredPasswordLength = 1;
        this.trackByFn = (/**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        (index, item) => Object.keys(item)[0] || index);
        this.onVisiblePermissionChange = (/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.visiblePermissions = event;
        });
    }
    /**
     * @return {?}
     */
    get roleGroups() {
        return snq((/**
         * @return {?}
         */
        () => (/** @type {?} */ (((/** @type {?} */ (this.form.get('roleNames')))).controls))), []);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.get();
        /** @type {?} */
        const passwordRules = this.store.selectSnapshot(ConfigState.getSettings('Identity.Password'));
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onSearch(value) {
        this.pageQuery.filter = value;
        this.get();
    }
    /**
     * @return {?}
     */
    buildForm() {
        this.identityService.getAllRoles().subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ items }) => {
            this.roles = items;
            this.form = this.fb.group({
                userName: [this.selected.userName || '', [Validators.required, Validators.maxLength(256)]],
                email: [
                    this.selected.email || '',
                    [Validators.required, Validators.email, Validators.maxLength(256)],
                ],
                name: [this.selected.name || '', [Validators.maxLength(64)]],
                surname: [this.selected.surname || '', [Validators.maxLength(64)]],
                phoneNumber: [this.selected.phoneNumber || '', [Validators.maxLength(16)]],
                lockoutEnabled: [this.selected.lockoutEnabled || (this.selected.id ? false : true)],
                twoFactorEnabled: [this.selected.twoFactorEnabled || (this.selected.id ? false : true)],
                roleNames: this.fb.array(this.roles.map((/**
                 * @param {?} role
                 * @return {?}
                 */
                role => this.fb.group({
                    [role.name]: [
                        this.selected.id
                            ? !!snq((/**
                             * @return {?}
                             */
                            () => this.selectedUserRoles.find((/**
                             * @param {?} userRole
                             * @return {?}
                             */
                            userRole => userRole.id === role.id))))
                            : role.isDefault,
                    ],
                })))),
            });
            /** @type {?} */
            const passwordValidators = [
                validatePassword(this.passwordRulesArr),
                Validators.minLength(this.requiredPasswordLength),
                Validators.maxLength(128),
            ];
            this.form.addControl('password', new FormControl('', [...passwordValidators]));
            if (!this.selected.userName) {
                this.form.get('password').setValidators([...passwordValidators, Validators.required]);
                this.form.get('password').updateValueAndValidity();
            }
        }));
    }
    /**
     * @return {?}
     */
    openModal() {
        this.buildForm();
        this.isModalVisible = true;
    }
    /**
     * @return {?}
     */
    add() {
        this.selected = (/** @type {?} */ ({}));
        this.selectedUserRoles = (/** @type {?} */ ([]));
        this.openModal();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    edit(id) {
        this.store
            .dispatch(new GetUserById(id))
            .pipe(switchMap((/**
         * @return {?}
         */
        () => this.store.dispatch(new GetUserRoles(id)))), pluck('IdentityState'), take(1))
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            this.selected = state.selectedUser;
            this.selectedUserRoles = state.selectedUserRoles || [];
            this.openModal();
        }));
    }
    /**
     * @return {?}
     */
    save() {
        if (!this.form.valid || this.modalBusy)
            return;
        this.modalBusy = true;
        const { roleNames } = this.form.value;
        /** @type {?} */
        const mappedRoleNames = snq((/**
         * @return {?}
         */
        () => roleNames.filter((/**
         * @param {?} role
         * @return {?}
         */
        role => !!role[Object.keys(role)[0]])).map((/**
         * @param {?} role
         * @return {?}
         */
        role => Object.keys(role)[0]))), []);
        this.store
            .dispatch(this.selected.id
            ? new UpdateUser(Object.assign({}, this.selected, this.form.value, { id: this.selected.id, roleNames: mappedRoleNames }))
            : new CreateUser(Object.assign({}, this.form.value, { roleNames: mappedRoleNames })))
            .pipe(finalize((/**
         * @return {?}
         */
        () => (this.modalBusy = false))))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.isModalVisible = false;
            this.get();
        }));
    }
    /**
     * @param {?} id
     * @param {?} userName
     * @return {?}
     */
    delete(id, userName) {
        this.confirmationService
            .warn('AbpIdentity::UserDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
            messageLocalizationParams: [userName],
        })
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        (status) => {
            if (status === Confirmation.Status.confirm) {
                this.store.dispatch(new DeleteUser(id)).subscribe((/**
                 * @return {?}
                 */
                () => this.get()));
            }
        }));
    }
    /**
     * @param {?} page
     * @return {?}
     */
    onPageChange(page) {
        this.pageQuery.skipCount = (page - 1) * this.pageQuery.maxResultCount;
        this.get();
    }
    /**
     * @return {?}
     */
    get() {
        this.loading = true;
        this.store
            .dispatch(new GetUsers(this.pageQuery))
            .pipe(finalize((/**
         * @return {?}
         */
        () => (this.loading = false))))
            .subscribe();
    }
    /**
     * @param {?} providerKey
     * @return {?}
     */
    openPermissionsModal(providerKey) {
        this.providerKey = providerKey;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.visiblePermissions = true;
        }), 0);
    }
}
UsersComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-users',
                template: "<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Users' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Users.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewUser' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <label\r\n        ><input\r\n          type=\"search\"\r\n          class=\"form-control form-control-sm\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          (input.debounce)=\"onSearch($event.target.value)\"\r\n      /></label>\r\n    </div>\r\n    <abp-table\r\n      *ngIf=\"[150, 250, 250, 250] as columnWidths\"\r\n      [abpLoading]=\"loading\"\r\n      [abpLoadingDelay]=\"500\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [colgroupTemplate]=\"tableColGroup\"\r\n      [headerTemplate]=\"tableHeader\"\r\n      [bodyTemplate]=\"tableBody\"\r\n      [value]=\"data$ | async\"\r\n      [rows]=\"pageQuery.maxResultCount\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [scrollable]=\"true\"\r\n      (pageChange)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template #tableColGroup>\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template #tableHeader>\r\n        <tr>\r\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n          <th (click)=\"sortOrderIcon.sort('userName')\">\r\n            {{ 'AbpIdentity::UserName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              sortKey=\"userName\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n          <th (click)=\"sortOrderIcon.sort('email')\">\r\n            {{ 'AbpIdentity::EmailAddress' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              sortKey=\"email\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            ></abp-sort-order-icon>\r\n          </th>\r\n          <th (click)=\"sortOrderIcon.sort('phoneNumber')\">\r\n            {{ 'AbpIdentity::PhoneNumber' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              sortKey=\"phoneNumber\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tableBody let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"edit(data.id)\"\r\n                >\r\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.ManagePermissions'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"openPermissionsModal(data.id)\"\r\n                >\r\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.userName)\"\r\n                >\r\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>{{ data.userName }}</td>\r\n          <td>{{ data.email }}</td>\r\n          <td>{{ data.phoneNumber }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </abp-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\" (disappear)=\"form = null\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-template #loaderRef\r\n      ><div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div\r\n    ></ng-template>\r\n\r\n    <form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n      <ngb-tabset>\r\n        <ngb-tab [title]=\"'AbpIdentity::UserInformations' | abpLocalization\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"mt-2 fade-in-top\">\r\n              <div class=\"form-group\">\r\n                <label for=\"user-name\">{{ 'AbpIdentity::UserName' | abpLocalization }}</label\r\n                ><span> * </span>\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"user-name\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"userName\"\r\n                  autofocus\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label>\r\n                <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"surname\">{{\r\n                  'AbpIdentity::DisplayName:Surname' | abpLocalization\r\n                }}</label>\r\n                <input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">{{ 'AbpIdentity::Password' | abpLocalization }}</label\r\n                ><span *ngIf=\"!selected.userName\"> * </span>\r\n                <input\r\n                  type=\"password\"\r\n                  id=\"password\"\r\n                  autocomplete=\"new-password\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"password\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">{{ 'AbpIdentity::EmailAddress' | abpLocalization }}</label\r\n                ><span> * </span>\r\n                <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"phone-number\">{{ 'AbpIdentity::PhoneNumber' | abpLocalization }}</label>\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"phone-number\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"phoneNumber\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"custom-checkbox custom-control mb-2\">\r\n                <input\r\n                  type=\"checkbox\"\r\n                  id=\"lockout-checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  formControlName=\"lockoutEnabled\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"lockout-checkbox\">{{\r\n                  'AbpIdentity::DisplayName:LockoutEnabled' | abpLocalization\r\n                }}</label>\r\n              </div>\r\n\r\n              <div class=\"custom-checkbox custom-control mb-2\">\r\n                <input\r\n                  type=\"checkbox\"\r\n                  id=\"two-factor-checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  formControlName=\"twoFactorEnabled\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"two-factor-checkbox\">{{\r\n                  'AbpIdentity::DisplayName:TwoFactorEnabled' | abpLocalization\r\n                }}</label>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab [title]=\"'AbpIdentity::Roles' | abpLocalization\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"mt-2 fade-in-top\">\r\n              <div\r\n                *ngFor=\"let roleGroup of roleGroups; let i = index; trackBy: trackByFn\"\r\n                class=\"custom-checkbox custom-control mb-2\"\r\n              >\r\n                <input\r\n                  type=\"checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  [attr.id]=\"'roles-' + i\"\r\n                  [formControl]=\"roleGroup.controls[roles[i].name]\"\r\n                />\r\n                <label class=\"custom-control-label\" [attr.for]=\"'roles-' + i\">{{\r\n                  roles[i].name\r\n                }}</label>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n      </ngb-tabset>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"form?.invalid\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'U' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: 'PermissionManagement.PermissionManagementComponent'\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n"
            }] }
];
/** @nocollapse */
UsersComponent.ctorParameters = () => [
    { type: ConfirmationService },
    { type: FormBuilder },
    { type: Store },
    { type: IdentityService }
];
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
    /**
     * @type {?}
     * @private
     */
    UsersComponent.prototype.identityService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5pZGVudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQU8sV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFVLFdBQVcsRUFBbUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFHTCxXQUFXLEVBQ1gsV0FBVyxFQUVYLFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBaUIsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixRQUFRLEVBQ1IsVUFBVSxHQUNYLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUtsRSxNQUFNLE9BQU8sY0FBYzs7Ozs7OztJQWdEekIsWUFDVSxtQkFBd0MsRUFDeEMsRUFBZSxFQUNmLEtBQVksRUFDWixlQUFnQztRQUhoQyx3QkFBbUIsR0FBbkIs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LFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsb3NWQUFxQzthQUN0Qzs7OztZQTdCUSxtQkFBbUI7WUFLMUIsV0FBVztZQU1JLEtBQUs7WUFjYixlQUFlOzs7MkJBWXJCLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztBQUw1QztJQURDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO3NDQUN4QixVQUFVOzZDQUFzQjtBQUd2QztJQURDLE1BQU0sQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7c0NBQzVCLFVBQVU7bURBQVM7OztJQUpoQywrQkFDdUM7O0lBRXZDLHFDQUNnQzs7SUFFaEMsc0NBQytCOztJQUUvQiw4QkFBZ0I7O0lBRWhCLGtDQUE0Qjs7SUFFNUIsMkNBQXVDOztJQUV2QywrQkFBMkI7O0lBRTNCLDRDQUEyQjs7SUFFM0IscUNBQW9COztJQUVwQixtQ0FBd0Q7O0lBRXhELHdDQUF3Qjs7SUFFeEIsaUNBQWdCOztJQUVoQixtQ0FBa0I7O0lBRWxCLG1DQUFlOztJQUVmLGlDQUFhOztJQUViLDBDQUF1Qzs7SUFFdkMsZ0RBQTJCOztJQUUzQixtQ0FBNkY7O0lBRTdGLG1EQUVFOzs7OztJQU9BLDZDQUFnRDs7Ozs7SUFDaEQsNEJBQXVCOzs7OztJQUN2QiwrQkFBb0I7Ozs7O0lBQ3BCLHlDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFCUCwgQ29uZmlnU3RhdGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlLCBDb25maXJtYXRpb24gfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVHJhY2tCeUZ1bmN0aW9uLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBBYnN0cmFjdENvbnRyb2wsXHJcbiAgRm9ybUFycmF5LFxyXG4gIEZvcm1CdWlsZGVyLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1Hcm91cCxcclxuICBWYWxpZGF0b3JzLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUGFzc3dvcmRSdWxlcywgdmFsaWRhdGVQYXNzd29yZCB9IGZyb20gJ0BuZ3gtdmFsaWRhdGUvY29yZSc7XHJcbmltcG9ydCB7IFNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmluYWxpemUsIHBsdWNrLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHtcclxuICBDcmVhdGVVc2VyLFxyXG4gIERlbGV0ZVVzZXIsXHJcbiAgR2V0VXNlckJ5SWQsXHJcbiAgR2V0VXNlclJvbGVzLFxyXG4gIEdldFVzZXJzLFxyXG4gIFVwZGF0ZVVzZXIsXHJcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pZGVudGl0eS5hY3Rpb25zJztcclxuaW1wb3J0IHsgSWRlbnRpdHkgfSBmcm9tICcuLi8uLi9tb2RlbHMvaWRlbnRpdHknO1xyXG5pbXBvcnQgeyBJZGVudGl0eVN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGVzL2lkZW50aXR5LnN0YXRlJztcclxuaW1wb3J0IHsgSWRlbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaWRlbnRpdHkuc2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLXVzZXJzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdXNlcnMuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBTZWxlY3QoSWRlbnRpdHlTdGF0ZS5nZXRVc2VycylcclxuICBkYXRhJDogT2JzZXJ2YWJsZTxJZGVudGl0eS5Vc2VySXRlbVtdPjtcclxuXHJcbiAgQFNlbGVjdChJZGVudGl0eVN0YXRlLmdldFVzZXJzVG90YWxDb3VudClcclxuICB0b3RhbENvdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG5cclxuICBAVmlld0NoaWxkKCdtb2RhbENvbnRlbnQnLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBtb2RhbENvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgc2VsZWN0ZWQ6IElkZW50aXR5LlVzZXJJdGVtO1xyXG5cclxuICBzZWxlY3RlZFVzZXJSb2xlczogSWRlbnRpdHkuUm9sZUl0ZW1bXTtcclxuXHJcbiAgcm9sZXM6IElkZW50aXR5LlJvbGVJdGVtW107XHJcblxyXG4gIHZpc2libGVQZXJtaXNzaW9ucyA9IGZhbHNlO1xyXG5cclxuICBwcm92aWRlcktleTogc3RyaW5nO1xyXG5cclxuICBwYWdlUXVlcnk6IEFCUC5QYWdlUXVlcnlQYXJhbXMgPSB7IG1heFJlc3VsdENvdW50OiAxMCB9O1xyXG5cclxuICBpc01vZGFsVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBtb2RhbEJ1c3kgPSBmYWxzZTtcclxuXHJcbiAgc29ydE9yZGVyID0gJyc7XHJcblxyXG4gIHNvcnRLZXkgPSAnJztcclxuXHJcbiAgcGFzc3dvcmRSdWxlc0FyciA9IFtdIGFzIFBhc3N3b3JkUnVsZXM7XHJcblxyXG4gIHJlcXVpcmVkUGFzc3dvcmRMZW5ndGggPSAxO1xyXG5cclxuICB0cmFja0J5Rm46IFRyYWNrQnlGdW5jdGlvbjxBYnN0cmFjdENvbnRyb2w+ID0gKGluZGV4LCBpdGVtKSA9PiBPYmplY3Qua2V5cyhpdGVtKVswXSB8fCBpbmRleDtcclxuXHJcbiAgb25WaXNpYmxlUGVybWlzc2lvbkNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgIHRoaXMudmlzaWJsZVBlcm1pc3Npb25zID0gZXZlbnQ7XHJcbiAgfTtcclxuXHJcbiAgZ2V0IHJvbGVHcm91cHMoKTogRm9ybUdyb3VwW10ge1xyXG4gICAgcmV0dXJuIHNucSgoKSA9PiAodGhpcy5mb3JtLmdldCgncm9sZU5hbWVzJykgYXMgRm9ybUFycmF5KS5jb250cm9scyBhcyBGb3JtR3JvdXBbXSwgW10pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSBpZGVudGl0eVNlcnZpY2U6IElkZW50aXR5U2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXQoKTtcclxuXHJcbiAgICBjb25zdCBwYXNzd29yZFJ1bGVzOiBBQlAuRGljdGlvbmFyeTxzdHJpbmc+ID0gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChcclxuICAgICAgQ29uZmlnU3RhdGUuZ2V0U2V0dGluZ3MoJ0lkZW50aXR5LlBhc3N3b3JkJyksXHJcbiAgICApO1xyXG5cclxuICAgIGlmICgocGFzc3dvcmRSdWxlc1snQWJwLklkZW50aXR5LlBhc3N3b3JkLlJlcXVpcmVEaWdpdCddIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcclxuICAgICAgdGhpcy5wYXNzd29yZFJ1bGVzQXJyLnB1c2goJ251bWJlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgocGFzc3dvcmRSdWxlc1snQWJwLklkZW50aXR5LlBhc3N3b3JkLlJlcXVpcmVMb3dlcmNhc2UnXSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIHRoaXMucGFzc3dvcmRSdWxlc0Fyci5wdXNoKCdzbWFsbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgocGFzc3dvcmRSdWxlc1snQWJwLklkZW50aXR5LlBhc3N3b3JkLlJlcXVpcmVVcHBlcmNhc2UnXSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIHRoaXMucGFzc3dvcmRSdWxlc0Fyci5wdXNoKCdjYXBpdGFsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAocGFzc3dvcmRSdWxlc1snQWJwLklkZW50aXR5LlBhc3N3b3JkLlJlcXVpcmVOb25BbHBoYW51bWVyaWMnXSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5wYXNzd29yZFJ1bGVzQXJyLnB1c2goJ3NwZWNpYWwnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcigrcGFzc3dvcmRSdWxlc1snQWJwLklkZW50aXR5LlBhc3N3b3JkLlJlcXVpcmVkTGVuZ3RoJ10pKSB7XHJcbiAgICAgIHRoaXMucmVxdWlyZWRQYXNzd29yZExlbmd0aCA9ICtwYXNzd29yZFJ1bGVzWydBYnAuSWRlbnRpdHkuUGFzc3dvcmQuUmVxdWlyZWRMZW5ndGgnXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2VhcmNoKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucGFnZVF1ZXJ5LmZpbHRlciA9IHZhbHVlO1xyXG4gICAgdGhpcy5nZXQoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkRm9ybSgpIHtcclxuICAgIHRoaXMuaWRlbnRpdHlTZXJ2aWNlLmdldEFsbFJvbGVzKCkuc3Vic2NyaWJlKCh7IGl0ZW1zIH0pID0+IHtcclxuICAgICAgdGhpcy5yb2xlcyA9IGl0ZW1zO1xyXG4gICAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICB1c2VyTmFtZTogW3RoaXMuc2VsZWN0ZWQudXNlck5hbWUgfHwgJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCgyNTYpXV0sXHJcbiAgICAgICAgZW1haWw6IFtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuZW1haWwgfHwgJycsXHJcbiAgICAgICAgICBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMjU2KV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBuYW1lOiBbdGhpcy5zZWxlY3RlZC5uYW1lIHx8ICcnLCBbVmFsaWRhdG9ycy5tYXhMZW5ndGgoNjQpXV0sXHJcbiAgICAgICAgc3VybmFtZTogW3RoaXMuc2VsZWN0ZWQuc3VybmFtZSB8fCAnJywgW1ZhbGlkYXRvcnMubWF4TGVuZ3RoKDY0KV1dLFxyXG4gICAgICAgIHBob25lTnVtYmVyOiBbdGhpcy5zZWxlY3RlZC5waG9uZU51bWJlciB8fCAnJywgW1ZhbGlkYXRvcnMubWF4TGVuZ3RoKDE2KV1dLFxyXG4gICAgICAgIGxvY2tvdXRFbmFibGVkOiBbdGhpcy5zZWxlY3RlZC5sb2Nrb3V0RW5hYmxlZCB8fCAodGhpcy5zZWxlY3RlZC5pZCA/IGZhbHNlIDogdHJ1ZSldLFxyXG4gICAgICAgIHR3b0ZhY3RvckVuYWJsZWQ6IFt0aGlzLnNlbGVjdGVkLnR3b0ZhY3RvckVuYWJsZWQgfHwgKHRoaXMuc2VsZWN0ZWQuaWQgPyBmYWxzZSA6IHRydWUpXSxcclxuICAgICAgICByb2xlTmFtZXM6IHRoaXMuZmIuYXJyYXkoXHJcbiAgICAgICAgICB0aGlzLnJvbGVzLm1hcChyb2xlID0+XHJcbiAgICAgICAgICAgIHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAgIFtyb2xlLm5hbWVdOiBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLmlkXHJcbiAgICAgICAgICAgICAgICAgID8gISFzbnEoKCkgPT4gdGhpcy5zZWxlY3RlZFVzZXJSb2xlcy5maW5kKHVzZXJSb2xlID0+IHVzZXJSb2xlLmlkID09PSByb2xlLmlkKSlcclxuICAgICAgICAgICAgICAgICAgOiByb2xlLmlzRGVmYXVsdCxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBwYXNzd29yZFZhbGlkYXRvcnMgPSBbXHJcbiAgICAgICAgdmFsaWRhdGVQYXNzd29yZCh0aGlzLnBhc3N3b3JkUnVsZXNBcnIpLFxyXG4gICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKHRoaXMucmVxdWlyZWRQYXNzd29yZExlbmd0aCksXHJcbiAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTI4KSxcclxuICAgICAgXTtcclxuXHJcbiAgICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKCdwYXNzd29yZCcsIG5ldyBGb3JtQ29udHJvbCgnJywgWy4uLnBhc3N3b3JkVmFsaWRhdG9yc10pKTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5zZWxlY3RlZC51c2VyTmFtZSkge1xyXG4gICAgICAgIHRoaXMuZm9ybS5nZXQoJ3Bhc3N3b3JkJykuc2V0VmFsaWRhdG9ycyhbLi4ucGFzc3dvcmRWYWxpZGF0b3JzLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSk7XHJcbiAgICAgICAgdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKCkge1xyXG4gICAgdGhpcy5idWlsZEZvcm0oKTtcclxuICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYWRkKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHt9IGFzIElkZW50aXR5LlVzZXJJdGVtO1xyXG4gICAgdGhpcy5zZWxlY3RlZFVzZXJSb2xlcyA9IFtdIGFzIElkZW50aXR5LlJvbGVJdGVtW107XHJcbiAgICB0aGlzLm9wZW5Nb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgZWRpdChpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN0b3JlXHJcbiAgICAgIC5kaXNwYXRjaChuZXcgR2V0VXNlckJ5SWQoaWQpKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0VXNlclJvbGVzKGlkKSkpLFxyXG4gICAgICAgIHBsdWNrKCdJZGVudGl0eVN0YXRlJyksXHJcbiAgICAgICAgdGFrZSgxKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKChzdGF0ZTogSWRlbnRpdHkuU3RhdGUpID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gc3RhdGUuc2VsZWN0ZWRVc2VyO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRVc2VyUm9sZXMgPSBzdGF0ZS5zZWxlY3RlZFVzZXJSb2xlcyB8fCBbXTtcclxuICAgICAgICB0aGlzLm9wZW5Nb2RhbCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICBpZiAoIXRoaXMuZm9ybS52YWxpZCB8fCB0aGlzLm1vZGFsQnVzeSkgcmV0dXJuO1xyXG4gICAgdGhpcy5tb2RhbEJ1c3kgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHsgcm9sZU5hbWVzIH0gPSB0aGlzLmZvcm0udmFsdWU7XHJcbiAgICBjb25zdCBtYXBwZWRSb2xlTmFtZXMgPSBzbnEoXHJcbiAgICAgICgpID0+XHJcbiAgICAgICAgcm9sZU5hbWVzLmZpbHRlcihyb2xlID0+ICEhcm9sZVtPYmplY3Qua2V5cyhyb2xlKVswXV0pLm1hcChyb2xlID0+IE9iamVjdC5rZXlzKHJvbGUpWzBdKSxcclxuICAgICAgW10sXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKFxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuaWRcclxuICAgICAgICAgID8gbmV3IFVwZGF0ZVVzZXIoe1xyXG4gICAgICAgICAgICAgIC4uLnRoaXMuc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLnNlbGVjdGVkLmlkLFxyXG4gICAgICAgICAgICAgIHJvbGVOYW1lczogbWFwcGVkUm9sZU5hbWVzLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBuZXcgQ3JlYXRlVXNlcih7XHJcbiAgICAgICAgICAgICAgLi4udGhpcy5mb3JtLnZhbHVlLFxyXG4gICAgICAgICAgICAgIHJvbGVOYW1lczogbWFwcGVkUm9sZU5hbWVzLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgKVxyXG4gICAgICAucGlwZShmaW5hbGl6ZSgoKSA9PiAodGhpcy5tb2RhbEJ1c3kgPSBmYWxzZSkpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nZXQoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoaWQ6IHN0cmluZywgdXNlck5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlXHJcbiAgICAgIC53YXJuKCdBYnBJZGVudGl0eTo6VXNlckRlbGV0aW9uQ29uZmlybWF0aW9uTWVzc2FnZScsICdBYnBJZGVudGl0eTo6QXJlWW91U3VyZScsIHtcclxuICAgICAgICBtZXNzYWdlTG9jYWxpemF0aW9uUGFyYW1zOiBbdXNlck5hbWVdLFxyXG4gICAgICB9KVxyXG4gICAgICAuc3Vic2NyaWJlKChzdGF0dXM6IENvbmZpcm1hdGlvbi5TdGF0dXMpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBDb25maXJtYXRpb24uU3RhdHVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVVzZXIoaWQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZXQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uUGFnZUNoYW5nZShwYWdlOiBudW1iZXIpIHtcclxuICAgIHRoaXMucGFnZVF1ZXJ5LnNraXBDb3VudCA9IChwYWdlIC0gMSkgKiB0aGlzLnBhZ2VRdWVyeS5tYXhSZXN1bHRDb3VudDtcclxuXHJcbiAgICB0aGlzLmdldCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KCkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKG5ldyBHZXRVc2Vycyh0aGlzLnBhZ2VRdWVyeSkpXHJcbiAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSkpKVxyXG4gICAgICAuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuUGVybWlzc2lvbnNNb2RhbChwcm92aWRlcktleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnByb3ZpZGVyS2V5ID0gcHJvdmlkZXJLZXk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy52aXNpYmxlUGVybWlzc2lvbnMgPSB0cnVlO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==