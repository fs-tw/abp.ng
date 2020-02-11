/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/roles/roles.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ConfirmationService, Toaster } from '@abp/ng.theme.shared';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, pluck } from 'rxjs/operators';
import { CreateRole, DeleteRole, GetRoleById, GetRoles, UpdateRole, } from '../../actions/identity.actions';
import { IdentityState } from '../../states/identity.state';
var RolesComponent = /** @class */ (function () {
    function RolesComponent(confirmationService, fb, store) {
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
        this.onVisiblePermissionChange = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.visiblePermissions = event;
        });
    }
    /**
     * @return {?}
     */
    RolesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.get();
    };
    /**
     * @return {?}
     */
    RolesComponent.prototype.buildForm = /**
     * @return {?}
     */
    function () {
        this.form = this.fb.group({
            name: new FormControl({ value: this.selected.name || '', disabled: this.selected.isStatic }, [
                Validators.required,
                Validators.maxLength(256),
            ]),
            isDefault: [this.selected.isDefault || false],
            isPublic: [this.selected.isPublic || false],
        });
    };
    /**
     * @return {?}
     */
    RolesComponent.prototype.openModal = /**
     * @return {?}
     */
    function () {
        this.buildForm();
        this.isModalVisible = true;
    };
    /**
     * @return {?}
     */
    RolesComponent.prototype.add = /**
     * @return {?}
     */
    function () {
        this.selected = (/** @type {?} */ ({}));
        this.openModal();
    };
    /**
     * @param {?} id
     * @return {?}
     */
    RolesComponent.prototype.edit = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        this.store
            .dispatch(new GetRoleById(id))
            .pipe(pluck('IdentityState', 'selectedRole'))
            .subscribe((/**
         * @param {?} selectedRole
         * @return {?}
         */
        function (selectedRole) {
            _this.selected = selectedRole;
            _this.openModal();
        }));
    };
    /**
     * @return {?}
     */
    RolesComponent.prototype.save = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.form.valid)
            return;
        this.modalBusy = true;
        this.store
            .dispatch(this.selected.id
            ? new UpdateRole(tslib_1.__assign({}, this.selected, this.form.value, { id: this.selected.id }))
            : new CreateRole(this.form.value))
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
     * @param {?} name
     * @return {?}
     */
    RolesComponent.prototype.delete = /**
     * @param {?} id
     * @param {?} name
     * @return {?}
     */
    function (id, name) {
        var _this = this;
        this.confirmationService
            .warn('AbpIdentity::RoleDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
            messageLocalizationParams: [name],
        })
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            if (status === Toaster.Status.confirm) {
                _this.store.dispatch(new DeleteRole(id)).subscribe((/**
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
    RolesComponent.prototype.onPageChange = /**
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
    RolesComponent.prototype.get = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loading = true;
        this.store
            .dispatch(new GetRoles(this.pageQuery))
            .pipe(finalize((/**
         * @return {?}
         */
        function () { return (_this.loading = false); })))
            .subscribe();
    };
    /**
     * @return {?}
     */
    RolesComponent.prototype.onClickSaveButton = /**
     * @return {?}
     */
    function () {
        this.formRef.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    };
    RolesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-roles',
                    template: "<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Roles' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Roles.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewRole' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <abp-table\r\n      *ngIf=\"[150, 0] as columnWidths\"\r\n      [abpLoading]=\"loading\"\r\n      [abpLoadingDelay]=\"500\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [colgroupTemplate]=\"tableColGroup\"\r\n      [headerTemplate]=\"tableHeader\"\r\n      [bodyTemplate]=\"tableBody\"\r\n      [value]=\"data$ | async\"\r\n      [rows]=\"pageQuery.maxResultCount\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [scrollable]=\"true\"\r\n      (pageChange)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template #tableColGroup>\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template #tableHeader>\r\n        <tr>\r\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n          <th (click)=\"sortOrderIcon.sort('name')\">\r\n            {{ 'AbpIdentity::RoleName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              sortKey=\"name\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            ></abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tableBody let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Roles.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"edit(data.id)\"\r\n                >\r\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Roles.ManagePermissions'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"providerKey = data.name; visiblePermissions = true\"\r\n                >\r\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Roles.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.name)\"\r\n                >\r\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            {{ data.name\r\n            }}<span *ngIf=\"data.isDefault\" class=\"badge badge-pill badge-success ml-1\">{{\r\n              'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n            }}</span>\r\n            <span *ngIf=\"data.isPublic\" class=\"badge badge-pill badge-info ml-1\">{{\r\n              'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n            }}</span>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </abp-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <form #formRef [formGroup]=\"form\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n      <div class=\"form-group\">\r\n        <label for=\"role-name\">{{ 'AbpIdentity::RoleName' | abpLocalization }}</label\r\n        ><span> * </span>\r\n        <input autofocus type=\"text\" id=\"role-name\" class=\"form-control\" formControlName=\"name\" />\r\n      </div>\r\n\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"role-is-default\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"isDefault\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"role-is-default\">{{\r\n          'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"role-is-public\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"isPublic\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"role-is-public\">{{\r\n          'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid\" (click)=\"onClickSaveButton()\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'R' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true },\r\n        hideBadges: { value: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: 'PermissionManagement.PermissionManagementComponent'\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n\r\n<!-- <abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"{\r\n    inputs: {\r\n      providerName: { value: 'R' },\r\n      providerKey: { value: providerKey },\r\n      visible: { value: visiblePermissions, twoWay: true },\r\n      hideBadges: { value: true }\r\n    },\r\n    outputs: { visibleChange: onVisiblePermissionChange },\r\n    componentKey: 'PermissionManagement.PermissionManagementComponent'\r\n  }\"\r\n  [(visible)]=\"visiblePermissions\"\r\n  [providerKey]=\"providerKey\"\r\n  [hideBadges]=\"true\"\r\n  providerName=\"R\"\r\n>\r\n</abp-permission-management> -->\r\n"
                }] }
    ];
    /** @nocollapse */
    RolesComponent.ctorParameters = function () { return [
        { type: ConfirmationService },
        { type: FormBuilder },
        { type: Store }
    ]; };
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
    return RolesComponent;
}());
export { RolesComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5pZGVudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3JvbGVzL3JvbGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLFVBQVUsR0FDWCxNQUFNLGdDQUFnQyxDQUFDO0FBRXhDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU1RDtJQXNDRSx3QkFDVSxtQkFBd0MsRUFDeEMsRUFBZSxFQUNmLEtBQVk7UUFIdEIsaUJBSUk7UUFITSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBeEJ0Qix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFJM0IsY0FBUyxHQUF3QixFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUV4RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsY0FBUyxHQUFHLEVBQUUs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QkE5SEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixnc09BQXFDO2lCQUN0Qzs7OztnQkFuQlEsbUJBQW1CO2dCQUVuQixXQUFXO2dCQUNILEtBQUs7OzswQkE0Q25CLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7O0lBekJ6RDtRQURDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDOzBDQUN4QixVQUFVO2lEQUFzQjtJQUd2QztRQURDLE1BQU0sQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7MENBQzVCLFVBQVU7dURBQVM7SUFzSGxDLHFCQUFDO0NBQUEsQUEvSEQsSUErSEM7U0EzSFksY0FBYzs7O0lBQ3pCLCtCQUN1Qzs7SUFFdkMscUNBQ2dDOztJQUVoQyw4QkFBZ0I7O0lBRWhCLGtDQUE0Qjs7SUFFNUIsd0NBQXdCOztJQUV4Qiw0Q0FBMkI7O0lBRTNCLHFDQUFvQjs7SUFFcEIsbUNBQXdEOztJQUV4RCxpQ0FBZ0I7O0lBRWhCLG1DQUFrQjs7SUFFbEIsbUNBQWU7O0lBRWYsaUNBQWE7O0lBRWIsaUNBQ3FDOztJQUVyQyxtREFFRTs7Ozs7SUFHQSw2Q0FBZ0Q7Ozs7O0lBQ2hELDRCQUF1Qjs7Ozs7SUFDdkIsK0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSwgVG9hc3RlciB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgcGx1Y2sgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7XHJcbiAgQ3JlYXRlUm9sZSxcclxuICBEZWxldGVSb2xlLFxyXG4gIEdldFJvbGVCeUlkLFxyXG4gIEdldFJvbGVzLFxyXG4gIFVwZGF0ZVJvbGUsXHJcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pZGVudGl0eS5hY3Rpb25zJztcclxuaW1wb3J0IHsgSWRlbnRpdHkgfSBmcm9tICcuLi8uLi9tb2RlbHMvaWRlbnRpdHknO1xyXG5pbXBvcnQgeyBJZGVudGl0eVN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGVzL2lkZW50aXR5LnN0YXRlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLXJvbGVzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcm9sZXMuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9sZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBTZWxlY3QoSWRlbnRpdHlTdGF0ZS5nZXRSb2xlcylcclxuICBkYXRhJDogT2JzZXJ2YWJsZTxJZGVudGl0eS5Sb2xlSXRlbVtdPjtcclxuXHJcbiAgQFNlbGVjdChJZGVudGl0eVN0YXRlLmdldFJvbGVzVG90YWxDb3VudClcclxuICB0b3RhbENvdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG5cclxuICBmb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIHNlbGVjdGVkOiBJZGVudGl0eS5Sb2xlSXRlbTtcclxuXHJcbiAgaXNNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gIHZpc2libGVQZXJtaXNzaW9ucyA9IGZhbHNlO1xyXG5cclxuICBwcm92aWRlcktleTogc3RyaW5nO1xyXG5cclxuICBwYWdlUXVlcnk6IEFCUC5QYWdlUXVlcnlQYXJhbXMgPSB7IG1heFJlc3VsdENvdW50OiAxMCB9O1xyXG5cclxuICBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIG1vZGFsQnVzeSA9IGZhbHNlO1xyXG5cclxuICBzb3J0T3JkZXIgPSAnJztcclxuXHJcbiAgc29ydEtleSA9ICcnO1xyXG5cclxuICBAVmlld0NoaWxkKCdmb3JtUmVmJywgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBFbGVtZW50UmVmIH0pXHJcbiAgZm9ybVJlZjogRWxlbWVudFJlZjxIVE1MRm9ybUVsZW1lbnQ+O1xyXG5cclxuICBvblZpc2libGVQZXJtaXNzaW9uQ2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgdGhpcy52aXNpYmxlUGVybWlzc2lvbnMgPSBldmVudDtcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29uZmlybWF0aW9uU2VydmljZTogQ29uZmlybWF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0KCk7XHJcbiAgfVxyXG5cclxuICBidWlsZEZvcm0oKSB7XHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgbmFtZTogbmV3IEZvcm1Db250cm9sKHsgdmFsdWU6IHRoaXMuc2VsZWN0ZWQubmFtZSB8fCAnJywgZGlzYWJsZWQ6IHRoaXMuc2VsZWN0ZWQuaXNTdGF0aWMgfSwgW1xyXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMjU2KSxcclxuICAgICAgXSksXHJcbiAgICAgIGlzRGVmYXVsdDogW3RoaXMuc2VsZWN0ZWQuaXNEZWZhdWx0IHx8IGZhbHNlXSxcclxuICAgICAgaXNQdWJsaWM6IFt0aGlzLnNlbGVjdGVkLmlzUHVibGljIHx8IGZhbHNlXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKCkge1xyXG4gICAgdGhpcy5idWlsZEZvcm0oKTtcclxuICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYWRkKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHt9IGFzIElkZW50aXR5LlJvbGVJdGVtO1xyXG4gICAgdGhpcy5vcGVuTW9kYWwoKTtcclxuICB9XHJcblxyXG4gIGVkaXQoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2gobmV3IEdldFJvbGVCeUlkKGlkKSlcclxuICAgICAgLnBpcGUocGx1Y2soJ0lkZW50aXR5U3RhdGUnLCAnc2VsZWN0ZWRSb2xlJykpXHJcbiAgICAgIC5zdWJzY3JpYmUoc2VsZWN0ZWRSb2xlID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWRSb2xlO1xyXG4gICAgICAgIHRoaXMub3Blbk1vZGFsKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIGlmICghdGhpcy5mb3JtLnZhbGlkKSByZXR1cm47XHJcbiAgICB0aGlzLm1vZGFsQnVzeSA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2goXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5pZFxyXG4gICAgICAgICAgPyBuZXcgVXBkYXRlUm9sZSh7IC4uLnRoaXMuc2VsZWN0ZWQsIC4uLnRoaXMuZm9ybS52YWx1ZSwgaWQ6IHRoaXMuc2VsZWN0ZWQuaWQgfSlcclxuICAgICAgICAgIDogbmV3IENyZWF0ZVJvbGUodGhpcy5mb3JtLnZhbHVlKSxcclxuICAgICAgKVxyXG4gICAgICAucGlwZShmaW5hbGl6ZSgoKSA9PiAodGhpcy5tb2RhbEJ1c3kgPSBmYWxzZSkpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nZXQoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2VcclxuICAgICAgLndhcm4oJ0FicElkZW50aXR5OjpSb2xlRGVsZXRpb25Db25maXJtYXRpb25NZXNzYWdlJywgJ0FicElkZW50aXR5OjpBcmVZb3VTdXJlJywge1xyXG4gICAgICAgIG1lc3NhZ2VMb2NhbGl6YXRpb25QYXJhbXM6IFtuYW1lXSxcclxuICAgICAgfSlcclxuICAgICAgLnN1YnNjcmliZSgoc3RhdHVzOiBUb2FzdGVyLlN0YXR1cykgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IFRvYXN0ZXIuU3RhdHVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVJvbGUoaWQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZXQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uUGFnZUNoYW5nZShwYWdlOiBudW1iZXIpIHtcclxuICAgIHRoaXMucGFnZVF1ZXJ5LnNraXBDb3VudCA9IChwYWdlIC0gMSkgKiB0aGlzLnBhZ2VRdWVyeS5tYXhSZXN1bHRDb3VudDtcclxuXHJcbiAgICB0aGlzLmdldCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KCkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKG5ldyBHZXRSb2xlcyh0aGlzLnBhZ2VRdWVyeSkpXHJcbiAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSkpKVxyXG4gICAgICAuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrU2F2ZUJ1dHRvbigpIHtcclxuICAgIHRoaXMuZm9ybVJlZi5uYXRpdmVFbGVtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgIG5ldyBFdmVudCgnc3VibWl0JywgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19