/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tenants/tenants.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TenantManagementService, TenantsComponent as AbpTenantsComponent } from '@abp/ng.tenant-management';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
export class TenantsComponent extends AbpTenantsComponent {
    /**
     * @param {?} _confirmationService
     * @param {?} _tenantService
     * @param {?} _fb
     * @param {?} _store
     */
    constructor(_confirmationService, _tenantService, _fb, _store) {
        super(_confirmationService, _tenantService, _fb, _store);
        this._confirmationService = _confirmationService;
        this._tenantService = _tenantService;
        this._fb = _fb;
        this._store = _store;
    }
}
TenantsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-alain-tenants',
                template: "<page-header [title]=\"'AbpTenantManagement::Tenants' | abpLocalization\"></page-header>\r\n<nz-card [nzBordered]=\"false\">\r\n  <form nz-form [nzLayout]=\"'inline'\" class=\"search__form\">\r\n      <div nz-row [nzGutter]=\"{ xs: 8, sm: 8, md: 8, lg: 24, xl: 48, xxl: 48 }\">\r\n        <div nz-col nzMd=\"8\" nzSm=\"24\">\r\n          <nz-form-item>\r\n            <nz-form-label nzFor=\"no\">{{'AbpIdentity::PagerSearch' | abpLocalization }}</nz-form-label>\r\n            <nz-form-control>\r\n              <input nz-input type=\"search\" [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n                (input.debounce)=\"onSearch($event.target.value)\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </div>\r\n      </div>\r\n    </form>\r\n<button nz-button [abpPermission]=\"'AbpTenantManagement.Tenants.Create'\" (click)=\"addTenant()\" [nzType]=\"'primary'\">\r\n  <i nz-icon nzType=\"plus\"></i>\r\n  <span>{{ 'AbpTenantManagement::NewTenant' | abpLocalization }}</span>\r\n</button>\r\n<div class=\"my-md\"></div>\r\n<nz-table #basicTable [nzData]=\"data$ | async\" [nzPageSize]=\"pageQuery.maxResultCount\" [nzTotal]=\"totalCount$ | async\"\r\n  [nzLoading]=\"loading\" [nzFrontPagination]=\"false\" (nzPageIndexChange)=\"onPageChange($event)\">\r\n  <thead>\r\n    <tr>\r\n      <th>{{ 'AbpTenantManagement::DisplayName:TenantName' | abpLocalization }}</th>\r\n      <th>{{ 'AbpTenantManagement::Actions' | abpLocalization }}</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let data of basicTable.data\">\r\n      <td>{{ data.name }}</td>\r\n      <td>\r\n          <a nz-dropdown [nzDropdownMenu]=\"opMenu\">\r\n            {{ 'AbpTenantManagement::Actions' | abpLocalization }}\r\n            <i nz-icon nzType=\"down\"></i>\r\n          </a>\r\n          <nz-dropdown-menu #opMenu=\"nzDropdownMenu\">\r\n            <ul nz-menu>\r\n              <li nz-menu-item *abpPermission=\"'AbpTenantManagement.Tenants.Update'\" (click)=\"editTenant(data.id)\">\r\n                {{ 'AbpTenantManagement::Edit' | abpLocalization }}</li>\r\n              <li nz-menu-item *abpPermission=\"'AbpTenantManagement.Tenants.ManageConnectionStrings'\"\r\n                (click)=\"onEditConnectionString(data.id)\">\r\n                {{ 'AbpTenantManagement::Permission:ManageConnectionStrings' | abpLocalization }}</li>\r\n              <li nz-menu-item *abpPermission=\"'AbpTenantManagement.Tenants.ManageFeatures'\"\r\n                (click)=\"providerKey = data.id; visibleFeatures = true\">\r\n                {{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}</li>\r\n              <li nz-menu-item *abpPermission=\"'AbpTenantManagement.Tenants.Delete'\"\r\n                (click)=\"delete(data.id, data.name)\">{{ 'AbpTenantManagement::Delete' | abpLocalization }}</li>\r\n            </ul>\r\n          </nz-dropdown-menu>\r\n        </td>\r\n    </tr>\r\n  </tbody>\r\n</nz-table>\r\n</nz-card>\r\n\r\n<nz-modal [(nzVisible)]=\"isModalVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n(nzOnCancel)=\"isModalVisible=false\">\r\n<ng-template #modalTitle>\r\n  {{ selectedModalContent.title | abpLocalization }}\r\n</ng-template>\r\n\r\n<ng-template #modalContent>\r\n  <ng-container *ngTemplateOutlet=\"selectedModalContent?.template\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #modalFooter>\r\n  <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n    {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n  </button>\r\n  <button nz-button nzType=\"primary\" (click)=\"save()\"  [nzLoading]=\"loading\">\r\n    {{\r\n    'AbpIdentity::Save' | abpLocalization\r\n    }}\r\n  </button>\r\n</ng-template>\r\n</nz-modal>\r\n\r\n\r\n\r\n<ng-template #tenantModalTemplate>\r\n<form nz-form [formGroup]=\"tenantForm\" (ngSubmit)=\"save()\" [nzLayout]=\"'vertical'\">\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"24\" [nzXs]=\"24\" nzRequired nzFor=\"role-name\">\r\n      {{ 'AbpTenantManagement::TenantName' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control [nzSm]=\"24\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"name\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item *ngIf=\"tenantForm.controls.adminEmailAddress\">\r\n    <nz-form-label [nzSm]=\"24\" [nzXs]=\"24\" nzRequired nzFor=\"role-adminEmailAddress\">\r\n      {{ 'AbpTenantManagement::DisplayName:AdminEmailAddress' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control [nzSm]=\"24\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"adminEmailAddress\" type=\"email\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item *ngIf=\"tenantForm.controls.adminPassword\">\r\n    <nz-form-label [nzSm]=\"24\" [nzXs]=\"24\" nzRequired nzFor=\"role-adminPassword\">\r\n      {{ 'AbpTenantManagement::DisplayName:AdminPassword' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control [nzSm]=\"24\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"adminPassword\" type=\"password\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n</ng-template>\r\n\r\n<ng-template #connectionStringModalTemplate>\r\n<form nz-form [nzLayout]=\"'vertical'\" [formGroup]=\"defaultConnectionStringForm\" (ngSubmit)=\"save()\">\r\n  <nz-form-item>\r\n    <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\r\n      <label nz-checkbox formControlName=\"useSharedDatabase\">\r\n        <span>\r\n          {{\r\n                'AbpTenantManagement::DisplayName:UseSharedDatabase' | abpLocalization\r\n          }}\r\n        </span>\r\n      </label>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item *ngIf=\"!useSharedDatabase\">\r\n    <nz-form-label [nzSm]=\"24\" [nzXs]=\"24\" nzRequired nzFor=\"defaultConnectionString\">\r\n      {{ 'AbpTenantManagement::DisplayName:DefaultConnectionString' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control [nzSm]=\"24\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"defaultConnectionString\" id=\"defaultConnectionString\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n</ng-template>\r\n\r\n<ng-alain-feature-management [(visible)]=\"visibleFeatures\" providerName=\"T\" [providerKey]=\"providerKey\">\r\n</ng-alain-feature-management>"
            }] }
];
/** @nocollapse */
TenantsComponent.ctorParameters = () => [
    { type: ConfirmationService },
    { type: TenantManagementService },
    { type: FormBuilder },
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TenantsComponent.prototype._confirmationService;
    /**
     * @type {?}
     * @private
     */
    TenantsComponent.prototype._tenantService;
    /**
     * @type {?}
     * @private
     */
    TenantsComponent.prototype._fb;
    /**
     * @type {?}
     * @private
     */
    TenantsComponent.prototype._store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvdGVuYW50LW1hbmFnZW1lbnQvbmctYWxhaW4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90ZW5hbnRzL3RlbmFudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGdCQUFnQixJQUFJLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0csT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFNBQVMsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLcEMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLG1CQUFtQjs7Ozs7OztJQUNyRCxZQUNZLG9CQUF5QyxFQUN6QyxjQUF1QyxFQUN2QyxHQUFnQixFQUNoQixNQUFhO1FBRXJCLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBTGpELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFDekMsbUJBQWMsR0FBZCxjQUFjLENBQXlCO1FBQ3ZDLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBTztJQUd6QixDQUFDOzs7WUFaSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsK3RNQUF1QzthQUN4Qzs7OztZQVBRLG1CQUFtQjtZQURuQix1QkFBdUI7WUFHdkIsV0FBVztZQUNYLEtBQUs7Ozs7Ozs7SUFPTixnREFBaUQ7Ozs7O0lBQ2pELDBDQUErQzs7Ozs7SUFDL0MsK0JBQXdCOzs7OztJQUN4QixrQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW5hbnRNYW5hZ2VtZW50U2VydmljZSwgVGVuYW50c0NvbXBvbmVudCBhcyBBYnBUZW5hbnRzQ29tcG9uZW50IH0gZnJvbSAnQGFicC9uZy50ZW5hbnQtbWFuYWdlbWVudCc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmctYWxhaW4tdGVuYW50cycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RlbmFudHMuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVuYW50c0NvbXBvbmVudCBleHRlbmRzIEFicFRlbmFudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfY29uZmlybWF0aW9uU2VydmljZTogQ29uZmlybWF0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF90ZW5hbnRTZXJ2aWNlOiBUZW5hbnRNYW5hZ2VtZW50U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihfY29uZmlybWF0aW9uU2VydmljZSwgX3RlbmFudFNlcnZpY2UsIF9mYiwgX3N0b3JlKTtcclxuICAgIH1cclxufVxyXG4iXX0=