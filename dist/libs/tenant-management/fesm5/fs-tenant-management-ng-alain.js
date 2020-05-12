import { TenantManagementModule } from '@fs/tenant-management';
import { AddReplaceableComponent, CoreModule } from '@abp/ng.core';
import { Component, NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { __extends } from 'tslib';
import { TenantManagementService, TenantsComponent as TenantsComponent$1 } from '@abp/ng.tenant-management';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { FeatureManagementNgAlainModule } from '@fs/feature-management/ng-alain';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tenants/tenants.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TenantsComponent = /** @class */ (function (_super) {
    __extends(TenantsComponent, _super);
    function TenantsComponent(_confirmationService, _tenantService, _fb, _store) {
        var _this = _super.call(this, _confirmationService, _tenantService, _fb, _store) || this;
        _this._confirmationService = _confirmationService;
        _this._tenantService = _tenantService;
        _this._fb = _fb;
        _this._store = _store;
        return _this;
    }
    TenantsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-alain-tenants',
                    template: "<page-header [title]=\"'AbpTenantManagement::Tenants' | abpLocalization\"></page-header>\r\n<nz-card [nzBordered]=\"false\">\r\n  <form nz-form [nzLayout]=\"'inline'\" class=\"search__form\">\r\n      <div nz-row [nzGutter]=\"{ xs: 8, sm: 8, md: 8, lg: 24, xl: 48, xxl: 48 }\">\r\n        <div nz-col nzMd=\"8\" nzSm=\"24\">\r\n          <nz-form-item>\r\n            <nz-form-label nzFor=\"no\">{{'AbpIdentity::PagerSearch' | abpLocalization }}</nz-form-label>\r\n            <nz-form-control>\r\n              <input nz-input type=\"search\" [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n                (input.debounce)=\"onSearch($event.target.value)\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </div>\r\n      </div>\r\n    </form>\r\n<button nz-button [abpPermission]=\"'AbpTenantManagement.Tenants.Create'\" (click)=\"addTenant()\" [nzType]=\"'primary'\">\r\n  <i nz-icon nzType=\"plus\"></i>\r\n  <span>{{ 'AbpTenantManagement::NewTenant' | abpLocalization }}</span>\r\n</button>\r\n<div class=\"my-md\"></div>\r\n<nz-table #basicTable [nzData]=\"data$ | async\" [nzPageSize]=\"pageQuery.maxResultCount\" [nzTotal]=\"totalCount$ | async\"\r\n  [nzLoading]=\"loading\" [nzFrontPagination]=\"false\" (nzPageIndexChange)=\"onPageChange($event)\">\r\n  <thead>\r\n    <tr>\r\n      <th>{{ 'AbpTenantManagement::DisplayName:TenantName' | abpLocalization }}</th>\r\n      <th>{{ 'AbpTenantManagement::Actions' | abpLocalization }}</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let data of basicTable.data\">\r\n      <td>{{ data.name }}</td>\r\n      <td>\r\n          <a nz-dropdown [nzDropdownMenu]=\"opMenu\">\r\n            {{ 'AbpTenantManagement::Actions' | abpLocalization }}\r\n            <i nz-icon nzType=\"down\"></i>\r\n          </a>\r\n          <nz-dropdown-menu #opMenu=\"nzDropdownMenu\">\r\n            <ul nz-menu>\r\n              <li nz-menu-item *abpPermission=\"'AbpTenantManagement.Tenants.Update'\" (click)=\"editTenant(data.id)\">\r\n                {{ 'AbpTenantManagement::Edit' | abpLocalization }}</li>\r\n              <li nz-menu-item *abpPermission=\"'AbpTenantManagement.Tenants.ManageConnectionStrings'\"\r\n                (click)=\"onEditConnectionString(data.id)\">\r\n                {{ 'AbpTenantManagement::Permission:ManageConnectionStrings' | abpLocalization }}</li>\r\n              <li nz-menu-item *abpPermission=\"'AbpTenantManagement.Tenants.ManageFeatures'\"\r\n                (click)=\"providerKey = data.id; visibleFeatures = true\">\r\n                {{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}</li>\r\n              <li nz-menu-item *abpPermission=\"'AbpTenantManagement.Tenants.Delete'\"\r\n                (click)=\"delete(data.id, data.name)\">{{ 'AbpTenantManagement::Delete' | abpLocalization }}</li>\r\n            </ul>\r\n          </nz-dropdown-menu>\r\n        </td>\r\n    </tr>\r\n  </tbody>\r\n</nz-table>\r\n</nz-card>\r\n\r\n<nz-modal [(nzVisible)]=\"isModalVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n(nzOnCancel)=\"isModalVisible=false\">\r\n<ng-template #modalTitle>\r\n  {{ selectedModalContent.title | abpLocalization }}\r\n</ng-template>\r\n\r\n<ng-template #modalContent>\r\n  <ng-container *ngTemplateOutlet=\"selectedModalContent?.template\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #modalFooter>\r\n  <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n    {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n  </button>\r\n  <button nz-button nzType=\"primary\" (click)=\"save()\"  [nzLoading]=\"loading\">\r\n    {{\r\n    'AbpIdentity::Save' | abpLocalization\r\n    }}\r\n  </button>\r\n</ng-template>\r\n</nz-modal>\r\n\r\n\r\n\r\n<ng-template #tenantModalTemplate>\r\n<form nz-form [formGroup]=\"tenantForm\" (ngSubmit)=\"save()\" [nzLayout]=\"'vertical'\">\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"24\" [nzXs]=\"24\" nzRequired nzFor=\"role-name\">\r\n      {{ 'AbpTenantManagement::TenantName' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control [nzSm]=\"24\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"name\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item *ngIf=\"tenantForm.controls.adminEmailAddress\">\r\n    <nz-form-label [nzSm]=\"24\" [nzXs]=\"24\" nzRequired nzFor=\"role-adminEmailAddress\">\r\n      {{ 'AbpTenantManagement::DisplayName:AdminEmailAddress' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control [nzSm]=\"24\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"adminEmailAddress\" type=\"email\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item *ngIf=\"tenantForm.controls.adminPassword\">\r\n    <nz-form-label [nzSm]=\"24\" [nzXs]=\"24\" nzRequired nzFor=\"role-adminPassword\">\r\n      {{ 'AbpTenantManagement::DisplayName:AdminPassword' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control [nzSm]=\"24\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"adminPassword\" type=\"password\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n</ng-template>\r\n\r\n<ng-template #connectionStringModalTemplate>\r\n<form nz-form [nzLayout]=\"'vertical'\" [formGroup]=\"defaultConnectionStringForm\" (ngSubmit)=\"save()\">\r\n  <nz-form-item>\r\n    <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\r\n      <label nz-checkbox formControlName=\"useSharedDatabase\">\r\n        <span>\r\n          {{\r\n                'AbpTenantManagement::DisplayName:UseSharedDatabase' | abpLocalization\r\n          }}\r\n        </span>\r\n      </label>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item *ngIf=\"!useSharedDatabase\">\r\n    <nz-form-label [nzSm]=\"24\" [nzXs]=\"24\" nzRequired nzFor=\"defaultConnectionString\">\r\n      {{ 'AbpTenantManagement::DisplayName:DefaultConnectionString' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control [nzSm]=\"24\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"defaultConnectionString\" id=\"defaultConnectionString\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n</ng-template>\r\n\r\n<ng-alain-feature-management [(visible)]=\"visibleFeatures\" providerName=\"T\" [providerKey]=\"providerKey\">\r\n</ng-alain-feature-management>"
                }] }
    ];
    /** @nocollapse */
    TenantsComponent.ctorParameters = function () { return [
        { type: ConfirmationService },
        { type: TenantManagementService },
        { type: FormBuilder },
        { type: Store }
    ]; };
    return TenantsComponent;
}(TenantsComponent$1));
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tenant-management-ng-alain.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TenantManagementNgAlainModule = /** @class */ (function () {
    function TenantManagementNgAlainModule(store) {
        this.store = store;
        store.dispatch(new AddReplaceableComponent({ component: TenantsComponent, key: 'TenantManagement.TenantsComponent' }));
    }
    TenantManagementNgAlainModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TenantsComponent],
                    entryComponents: [TenantsComponent],
                    imports: [
                        CoreModule,
                        NgAlainBasicModule,
                        TenantManagementModule,
                        FeatureManagementNgAlainModule
                    ]
                },] }
    ];
    /** @nocollapse */
    TenantManagementNgAlainModule.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return TenantManagementNgAlainModule;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    TenantManagementNgAlainModule.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: fs-tenant-management-ng-alain.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TenantManagementNgAlainModule, TenantsComponent as ɵa };
//# sourceMappingURL=fs-tenant-management-ng-alain.js.map
