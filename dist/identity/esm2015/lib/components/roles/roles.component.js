/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/roles/roles.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, pluck } from 'rxjs/operators';
import { CreateRole, DeleteRole, GetRoleById, GetRoles, UpdateRole, } from '../../actions/identity.actions';
import { IdentityState } from '../../states/identity.state';
export class RolesComponent {
    /**
     * @param {?} confirmationService
     * @param {?} fb
     * @param {?} store
     */
    constructor(confirmationService, fb, store) {
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.store = store;
        this.visiblePermissions = false;
        this.pageQuery = { maxResultCount: 10 };
        this.loading = false;
        this.modalBusy = false;
        this.sortOrder = '';
        this.sortKey = '';
        this.permissionManagementKey = "PermissionManagement.PermissionManagementComponent" /* PermissionManagement */;
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
    ngOnInit() {
        this.get();
    }
    /**
     * @return {?}
     */
    buildForm() {
        this.form = this.fb.group({
            name: new FormControl({ value: this.selected.name || '', disabled: this.selected.isStatic }, [
                Validators.required,
                Validators.maxLength(256),
            ]),
            isDefault: [this.selected.isDefault || false],
            isPublic: [this.selected.isPublic || false],
        });
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
        this.openModal();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    edit(id) {
        this.store
            .dispatch(new GetRoleById(id))
            .pipe(pluck('IdentityState', 'selectedRole'))
            .subscribe((/**
         * @param {?} selectedRole
         * @return {?}
         */
        selectedRole => {
            this.selected = selectedRole;
            this.openModal();
        }));
    }
    /**
     * @return {?}
     */
    save() {
        if (!this.form.valid)
            return;
        this.modalBusy = true;
        this.store
            .dispatch(this.selected.id
            ? new UpdateRole(Object.assign({}, this.selected, this.form.value, { id: this.selected.id }))
            : new CreateRole(this.form.value))
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
     * @param {?} name
     * @return {?}
     */
    delete(id, name) {
        this.confirmationService
            .warn('AbpIdentity::RoleDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
            messageLocalizationParams: [name],
        })
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        (status) => {
            if (status === Confirmation.Status.confirm) {
                this.store.dispatch(new DeleteRole(id)).subscribe((/**
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
            .dispatch(new GetRoles(this.pageQuery))
            .pipe(finalize((/**
         * @return {?}
         */
        () => (this.loading = false))))
            .subscribe();
    }
    /**
     * @return {?}
     */
    onClickSaveButton() {
        this.formRef.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
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
RolesComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-roles',
                template: "<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Roles' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Roles.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewRole' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <abp-table\r\n      *ngIf=\"[150, 0] as columnWidths\"\r\n      [abpLoading]=\"loading\"\r\n      [abpLoadingDelay]=\"500\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [colgroupTemplate]=\"tableColGroup\"\r\n      [headerTemplate]=\"tableHeader\"\r\n      [bodyTemplate]=\"tableBody\"\r\n      [value]=\"data$ | async\"\r\n      [rows]=\"pageQuery.maxResultCount\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [scrollable]=\"true\"\r\n      (pageChange)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template #tableColGroup>\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template #tableHeader>\r\n        <tr>\r\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n          <th (click)=\"sortOrderIcon.sort('name')\">\r\n            {{ 'AbpIdentity::RoleName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              sortKey=\"name\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            ></abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tableBody let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Roles.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"edit(data.id)\"\r\n                >\r\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Roles.ManagePermissions'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"openPermissionsModal(data.name)\"\r\n                >\r\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *ngIf=\"!data.isStatic\"\r\n                  [abpPermission]=\"'AbpIdentity.Roles.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.name)\"\r\n                >\r\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            {{ data.name\r\n            }}<span *ngIf=\"data.isDefault\" class=\"badge badge-pill badge-success ml-1\">{{\r\n              'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n            }}</span>\r\n            <span *ngIf=\"data.isPublic\" class=\"badge badge-pill badge-info ml-1\">{{\r\n              'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n            }}</span>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </abp-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <form #formRef [formGroup]=\"form\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n      <div class=\"form-group\">\r\n        <label for=\"role-name\">{{ 'AbpIdentity::RoleName' | abpLocalization }}</label\r\n        ><span> * </span>\r\n        <input autofocus type=\"text\" id=\"role-name\" class=\"form-control\" formControlName=\"name\" />\r\n      </div>\r\n\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"role-is-default\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"isDefault\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"role-is-default\">{{\r\n          'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"role-is-public\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"isPublic\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"role-is-public\">{{\r\n          'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid\" (click)=\"onClickSaveButton()\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'R' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true },\r\n        hideBadges: { value: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: permissionManagementKey\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n"
            }] }
];
/** @nocollapse */
RolesComponent.ctorParameters = () => [
    { type: ConfirmationService },
    { type: FormBuilder },
    { type: Store }
];
RolesComponent.propDecorators = {
    formRef: [{ type: ViewChild, args: ['formRef', { static: false, read: ElementRef },] }]
};
tslib_1.__decorate([
    Select(IdentityState.getRoles),
    tslib_1.__metadata("design:type", Observable)
], RolesComponent.prototype, "data$", void 0);
tslib_1.__decorate([
    Select(IdentityState.getRolesTotalCount),
    tslib_1.__metadata("design:type", Observable)
], RolesComponent.prototype, "totalCount$", void 0);
if (false) {
    /** @type {?} */
    RolesComponent.prototype.data$;
    /** @type {?} */
    RolesComponent.prototype.totalCount$;
    /** @type {?} */
    RolesComponent.prototype.form;
    /** @type {?} */
    RolesComponent.prototype.selected;
    /** @type {?} */
    RolesComponent.prototype.isModalVisible;
    /** @type {?} */
    RolesComponent.prototype.visiblePermissions;
    /** @type {?} */
    RolesComponent.prototype.providerKey;
    /** @type {?} */
    RolesComponent.prototype.pageQuery;
    /** @type {?} */
    RolesComponent.prototype.loading;
    /** @type {?} */
    RolesComponent.prototype.modalBusy;
    /** @type {?} */
    RolesComponent.prototype.sortOrder;
    /** @type {?} */
    RolesComponent.prototype.sortKey;
    /** @type {?} */
    RolesComponent.prototype.permissionManagementKey;
    /** @type {?} */
    RolesComponent.prototype.formRef;
    /** @type {?} */
    RolesComponent.prototype.onVisiblePermissionChange;
    /**
     * @type {?}
     * @private
     */
    RolesComponent.prototype.confirmationService;
    /**
     * @type {?}
     * @private
     */
    RolesComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    RolesComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5pZGVudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3JvbGVzL3JvbGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLFVBQVUsR0FDWCxNQUFNLGdDQUFnQyxDQUFDO0FBRXhDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU81RCxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBb0N6QixZQUNVLG1CQUF3QyxFQUN4QyxFQUFlLEVBQ2YsS0FBWTtRQUZaLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQU87UUExQnRCLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUkzQixjQUFTLEdBQXdCLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXhELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixjQUFTLEdB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WUFDZCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7OztZQXZJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGlqTkFBcUM7YUFDdEM7Ozs7WUFwQlEsbUJBQW1CO1lBRW5CLFdBQVc7WUFDSCxLQUFLOzs7c0JBK0NuQixTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFOztBQTNCekQ7SUFEQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztzQ0FDeEIsVUFBVTs2Q0FBc0I7QUFHdkM7SUFEQyxNQUFNLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDO3NDQUM1QixVQUFVO21EQUFTOzs7SUFKaEMsK0JBQ3VDOztJQUV2QyxxQ0FDZ0M7O0lBRWhDLDhCQUFnQjs7SUFFaEIsa0NBQTRCOztJQUU1Qix3Q0FBd0I7O0lBRXhCLDRDQUEyQjs7SUFFM0IscUNBQW9COztJQUVwQixtQ0FBd0Q7O0lBRXhELGlDQUFnQjs7SUFFaEIsbUNBQWtCOztJQUVsQixtQ0FBZTs7SUFFZixpQ0FBYTs7SUFFYixpREFBK0U7O0lBRS9FLGlDQUNxQzs7SUFFckMsbURBRUU7Ozs7O0lBR0EsNkNBQWdEOzs7OztJQUNoRCw0QkFBdUI7Ozs7O0lBQ3ZCLCtCQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFCUCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UsIENvbmZpcm1hdGlvbiB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgcGx1Y2sgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7XHJcbiAgQ3JlYXRlUm9sZSxcclxuICBEZWxldGVSb2xlLFxyXG4gIEdldFJvbGVCeUlkLFxyXG4gIEdldFJvbGVzLFxyXG4gIFVwZGF0ZVJvbGUsXHJcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pZGVudGl0eS5hY3Rpb25zJztcclxuaW1wb3J0IHsgSWRlbnRpdHkgfSBmcm9tICcuLi8uLi9tb2RlbHMvaWRlbnRpdHknO1xyXG5pbXBvcnQgeyBJZGVudGl0eVN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGVzL2lkZW50aXR5LnN0YXRlJztcclxuaW1wb3J0IHsgZVBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50cyB9IGZyb20gJ0BhYnAvbmcucGVybWlzc2lvbi1tYW5hZ2VtZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLXJvbGVzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcm9sZXMuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9sZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBTZWxlY3QoSWRlbnRpdHlTdGF0ZS5nZXRSb2xlcylcclxuICBkYXRhJDogT2JzZXJ2YWJsZTxJZGVudGl0eS5Sb2xlSXRlbVtdPjtcclxuXHJcbiAgQFNlbGVjdChJZGVudGl0eVN0YXRlLmdldFJvbGVzVG90YWxDb3VudClcclxuICB0b3RhbENvdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG5cclxuICBmb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIHNlbGVjdGVkOiBJZGVudGl0eS5Sb2xlSXRlbTtcclxuXHJcbiAgaXNNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gIHZpc2libGVQZXJtaXNzaW9ucyA9IGZhbHNlO1xyXG5cclxuICBwcm92aWRlcktleTogc3RyaW5nO1xyXG5cclxuICBwYWdlUXVlcnk6IEFCUC5QYWdlUXVlcnlQYXJhbXMgPSB7IG1heFJlc3VsdENvdW50OiAxMCB9O1xyXG5cclxuICBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIG1vZGFsQnVzeSA9IGZhbHNlO1xyXG5cclxuICBzb3J0T3JkZXIgPSAnJztcclxuXHJcbiAgc29ydEtleSA9ICcnO1xyXG5cclxuICBwZXJtaXNzaW9uTWFuYWdlbWVudEtleSA9IGVQZXJtaXNzaW9uTWFuYWdlbWVudENvbXBvbmVudHMuUGVybWlzc2lvbk1hbmFnZW1lbnQ7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2Zvcm1SZWYnLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSlcclxuICBmb3JtUmVmOiBFbGVtZW50UmVmPEhUTUxGb3JtRWxlbWVudD47XHJcblxyXG4gIG9uVmlzaWJsZVBlcm1pc3Npb25DaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICB0aGlzLnZpc2libGVQZXJtaXNzaW9ucyA9IGV2ZW50O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb25maXJtYXRpb25TZXJ2aWNlOiBDb25maXJtYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXQoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkRm9ybSgpIHtcclxuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBuYW1lOiBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogdGhpcy5zZWxlY3RlZC5uYW1lIHx8ICcnLCBkaXNhYmxlZDogdGhpcy5zZWxlY3RlZC5pc1N0YXRpYyB9LCBbXHJcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgyNTYpLFxyXG4gICAgICBdKSxcclxuICAgICAgaXNEZWZhdWx0OiBbdGhpcy5zZWxlY3RlZC5pc0RlZmF1bHQgfHwgZmFsc2VdLFxyXG4gICAgICBpc1B1YmxpYzogW3RoaXMuc2VsZWN0ZWQuaXNQdWJsaWMgfHwgZmFsc2VdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwoKSB7XHJcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xyXG4gICAgdGhpcy5pc01vZGFsVmlzaWJsZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBhZGQoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0ge30gYXMgSWRlbnRpdHkuUm9sZUl0ZW07XHJcbiAgICB0aGlzLm9wZW5Nb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgZWRpdChpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN0b3JlXHJcbiAgICAgIC5kaXNwYXRjaChuZXcgR2V0Um9sZUJ5SWQoaWQpKVxyXG4gICAgICAucGlwZShwbHVjaygnSWRlbnRpdHlTdGF0ZScsICdzZWxlY3RlZFJvbGUnKSlcclxuICAgICAgLnN1YnNjcmliZShzZWxlY3RlZFJvbGUgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZFJvbGU7XHJcbiAgICAgICAgdGhpcy5vcGVuTW9kYWwoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlKCkge1xyXG4gICAgaWYgKCF0aGlzLmZvcm0udmFsaWQpIHJldHVybjtcclxuICAgIHRoaXMubW9kYWxCdXN5ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnN0b3JlXHJcbiAgICAgIC5kaXNwYXRjaChcclxuICAgICAgICB0aGlzLnNlbGVjdGVkLmlkXHJcbiAgICAgICAgICA/IG5ldyBVcGRhdGVSb2xlKHsgLi4udGhpcy5zZWxlY3RlZCwgLi4udGhpcy5mb3JtLnZhbHVlLCBpZDogdGhpcy5zZWxlY3RlZC5pZCB9KVxyXG4gICAgICAgICAgOiBuZXcgQ3JlYXRlUm9sZSh0aGlzLmZvcm0udmFsdWUpLFxyXG4gICAgICApXHJcbiAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+ICh0aGlzLm1vZGFsQnVzeSA9IGZhbHNlKSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdldCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZShpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY29uZmlybWF0aW9uU2VydmljZVxyXG4gICAgICAud2FybignQWJwSWRlbnRpdHk6OlJvbGVEZWxldGlvbkNvbmZpcm1hdGlvbk1lc3NhZ2UnLCAnQWJwSWRlbnRpdHk6OkFyZVlvdVN1cmUnLCB7XHJcbiAgICAgICAgbWVzc2FnZUxvY2FsaXphdGlvblBhcmFtczogW25hbWVdLFxyXG4gICAgICB9KVxyXG4gICAgICAuc3Vic2NyaWJlKChzdGF0dXM6IENvbmZpcm1hdGlvbi5TdGF0dXMpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBDb25maXJtYXRpb24uU3RhdHVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVJvbGUoaWQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZXQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uUGFnZUNoYW5nZShwYWdlOiBudW1iZXIpIHtcclxuICAgIHRoaXMucGFnZVF1ZXJ5LnNraXBDb3VudCA9IChwYWdlIC0gMSkgKiB0aGlzLnBhZ2VRdWVyeS5tYXhSZXN1bHRDb3VudDtcclxuXHJcbiAgICB0aGlzLmdldCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KCkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKG5ldyBHZXRSb2xlcyh0aGlzLnBhZ2VRdWVyeSkpXHJcbiAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSkpKVxyXG4gICAgICAuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrU2F2ZUJ1dHRvbigpIHtcclxuICAgIHRoaXMuZm9ybVJlZi5uYXRpdmVFbGVtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgIG5ldyBFdmVudCgnc3VibWl0JywgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9wZW5QZXJtaXNzaW9uc01vZGFsKHByb3ZpZGVyS2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMucHJvdmlkZXJLZXkgPSBwcm92aWRlcktleTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnZpc2libGVQZXJtaXNzaW9ucyA9IHRydWU7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbn1cclxuIl19