/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tenants/tenants.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, pluck, switchMap, take } from 'rxjs/operators';
import { CreateTenant, DeleteTenant, GetTenantById, GetTenants, UpdateTenant, } from '../../actions/tenant-management.actions';
import { TenantManagementService } from '../../services/tenant-management.service';
import { TenantManagementState } from '../../states/tenant-management.state';
/**
 * @record
 */
function SelectedModalContent() { }
if (false) {
    /** @type {?} */
    SelectedModalContent.prototype.type;
    /** @type {?} */
    SelectedModalContent.prototype.title;
    /** @type {?} */
    SelectedModalContent.prototype.template;
}
export class TenantsComponent {
    /**
     * @param {?} confirmationService
     * @param {?} tenantService
     * @param {?} fb
     * @param {?} store
     */
    constructor(confirmationService, tenantService, fb, store) {
        this.confirmationService = confirmationService;
        this.tenantService = tenantService;
        this.fb = fb;
        this.store = store;
        this.selectedModalContent = (/** @type {?} */ ({}));
        this.visibleFeatures = false;
        this.pageQuery = { maxResultCount: 10 };
        this.loading = false;
        this.modalBusy = false;
        this.sortOrder = '';
        this.sortKey = '';
        this.onVisibleFeaturesChange = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.visibleFeatures = value;
        });
    }
    /**
     * @return {?}
     */
    get useSharedDatabase() {
        return this.defaultConnectionStringForm.get('useSharedDatabase').value;
    }
    /**
     * @return {?}
     */
    get connectionString() {
        return this.defaultConnectionStringForm.get('defaultConnectionString').value;
    }
    /**
     * @return {?}
     */
    get isDisabledSaveButton() {
        if (!this.selectedModalContent)
            return false;
        if (this.selectedModalContent.type === 'saveConnStr' &&
            this.defaultConnectionStringForm &&
            this.defaultConnectionStringForm.invalid) {
            return true;
        }
        else if (this.selectedModalContent.type === 'saveTenant' &&
            this.tenantForm &&
            this.tenantForm.invalid) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.get();
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
     * @private
     * @return {?}
     */
    createTenantForm() {
        this.tenantForm = this.fb.group({
            name: [this.selected.name || '', [Validators.required, Validators.maxLength(256)]],
        });
    }
    /**
     * @private
     * @return {?}
     */
    createDefaultConnectionStringForm() {
        this.defaultConnectionStringForm = this.fb.group({
            useSharedDatabase: this._useSharedDatabase,
            defaultConnectionString: [this.defaultConnectionString || ''],
        });
    }
    /**
     * @param {?} title
     * @param {?} template
     * @param {?} type
     * @return {?}
     */
    openModal(title, template, type) {
        this.selectedModalContent = {
            title,
            template,
            type,
        };
        this.isModalVisible = true;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    onEditConnectionString(id) {
        this.store
            .dispatch(new GetTenantById(id))
            .pipe(pluck('TenantManagementState', 'selectedItem'), switchMap((/**
         * @param {?} selected
         * @return {?}
         */
        selected => {
            this.selected = selected;
            return this.tenantService.getDefaultConnectionString(id);
        })))
            .subscribe((/**
         * @param {?} fetchedConnectionString
         * @return {?}
         */
        fetchedConnectionString => {
            this._useSharedDatabase = fetchedConnectionString ? false : true;
            this.defaultConnectionString = fetchedConnectionString ? fetchedConnectionString : '';
            this.createDefaultConnectionStringForm();
            this.openModal('AbpTenantManagement::ConnectionStrings', this.connectionStringModalTemplate, 'saveConnStr');
        }));
    }
    /**
     * @return {?}
     */
    addTenant() {
        this.selected = (/** @type {?} */ ({}));
        this.createTenantForm();
        this.openModal('AbpTenantManagement::NewTenant', this.tenantModalTemplate, 'saveTenant');
    }
    /**
     * @param {?} id
     * @return {?}
     */
    editTenant(id) {
        this.store
            .dispatch(new GetTenantById(id))
            .pipe(pluck('TenantManagementState', 'selectedItem'))
            .subscribe((/**
         * @param {?} selected
         * @return {?}
         */
        selected => {
            this.selected = selected;
            this.createTenantForm();
            this.openModal('AbpTenantManagement::Edit', this.tenantModalTemplate, 'saveTenant');
        }));
    }
    /**
     * @return {?}
     */
    save() {
        const { type } = this.selectedModalContent;
        if (!type)
            return;
        if (type === 'saveTenant')
            this.saveTenant();
        else if (type === 'saveConnStr')
            this.saveConnectionString();
    }
    /**
     * @return {?}
     */
    saveConnectionString() {
        if (this.modalBusy)
            return;
        this.modalBusy = true;
        if (this.useSharedDatabase || (!this.useSharedDatabase && !this.connectionString)) {
            this.tenantService
                .deleteDefaultConnectionString(this.selected.id)
                .pipe(take(1), finalize((/**
             * @return {?}
             */
            () => (this.modalBusy = false))))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.isModalVisible = false;
            }));
        }
        else {
            this.tenantService
                .updateDefaultConnectionString({
                id: this.selected.id,
                defaultConnectionString: this.connectionString,
            })
                .pipe(take(1), finalize((/**
             * @return {?}
             */
            () => (this.modalBusy = false))))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.isModalVisible = false;
            }));
        }
    }
    /**
     * @return {?}
     */
    saveTenant() {
        if (!this.tenantForm.valid || this.modalBusy)
            return;
        this.modalBusy = true;
        this.store
            .dispatch(this.selected.id
            ? new UpdateTenant(Object.assign({}, this.selected, this.tenantForm.value, { id: this.selected.id }))
            : new CreateTenant(this.tenantForm.value))
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
            .warn('AbpTenantManagement::TenantDeletionConfirmationMessage', 'AbpTenantManagement::AreYouSure', {
            messageLocalizationParams: [name],
        })
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        (status) => {
            if (status === "confirm" /* confirm */) {
                this.store.dispatch(new DeleteTenant(id)).subscribe((/**
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
            .dispatch(new GetTenants(this.pageQuery))
            .pipe(finalize((/**
         * @return {?}
         */
        () => (this.loading = false))))
            .subscribe();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onSharedDatabaseChange(value) {
        if (!value) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const defaultConnectionString = (/** @type {?} */ (document.getElementById('defaultConnectionString')));
                if (defaultConnectionString) {
                    defaultConnectionString.focus();
                }
            }), 0);
        }
    }
}
TenantsComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-tenants',
                template: "<div id=\"wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpTenantManagement::Tenants' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpTenantManagement.Tenants.Create'\"\r\n          id=\"create-tenants\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"addTenant()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpTenantManagement::NewTenant' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <label\r\n        ><input\r\n          type=\"search\"\r\n          class=\"form-control form-control-sm\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          (input.debounce)=\"onSearch($event.target.value)\"\r\n      /></label>\r\n    </div>\r\n    <abp-table\r\n      *ngIf=\"[150, 0] as columnWidths\"\r\n      [abpLoading]=\"loading\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [colgroupTemplate]=\"tableColGroup\"\r\n      [headerTemplate]=\"tableHeader\"\r\n      [bodyTemplate]=\"tableBody\"\r\n      [value]=\"data$ | async\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [rows]=\"pageQuery.maxResultCount\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [scrollable]=\"true\"\r\n      (pageChange)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template #tableColGroup>\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template #tableHeader let-columns>\r\n        <tr>\r\n          <th>{{ 'AbpTenantManagement::Actions' | abpLocalization }}</th>\r\n          <th (click)=\"sortOrderIcon.sort('name')\">\r\n            {{ 'AbpTenantManagement::TenantName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              sortKey=\"name\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tableBody let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpTenantManagement::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"editTenant(data.id)\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.ManageConnectionStrings'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"onEditConnectionString(data.id)\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Permission:ManageConnectionStrings' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.ManageFeatures'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"providerKey = data.id; visibleFeatures = true\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.name)\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>{{ data.name }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </abp-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ selectedModalContent.title | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-container *ngTemplateOutlet=\"selectedModalContent?.template\"></ng-container>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"isDisabledSaveButton\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<ng-template #tenantModalTemplate>\r\n  <form [formGroup]=\"tenantForm\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <div class=\"mt-2\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">{{ 'AbpTenantManagement::TenantName' | abpLocalization }}</label>\r\n        <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" autofocus />\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #connectionStringModalTemplate>\r\n  <form [formGroup]=\"defaultConnectionStringForm\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <div class=\"form-group\">\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          id=\"useSharedDatabase\"\r\n          type=\"checkbox\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"useSharedDatabase\"\r\n          autofocus\r\n          (ngModelChange)=\"onSharedDatabaseChange($event)\"\r\n        />\r\n        <label for=\"useSharedDatabase\" class=\"custom-control-label\">{{\r\n          'AbpTenantManagement::DisplayName:UseSharedDatabase' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"!useSharedDatabase\">\r\n      <label for=\"defaultConnectionString\">{{\r\n        'AbpTenantManagement::DisplayName:DefaultConnectionString' | abpLocalization\r\n      }}</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"defaultConnectionString\"\r\n        class=\"form-control\"\r\n        formControlName=\"defaultConnectionString\"\r\n      />\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<abp-feature-management\r\n  *abpReplaceableTemplate=\"{\r\n    inputs: {\r\n      providerName: { value: 'T' },\r\n      providerKey: { value: providerKey },\r\n      visible: { value: visibleFeatures, twoWay: true }\r\n    },\r\n    outputs: { visibleChange: onVisibleFeaturesChange },\r\n    componentKey: 'FeatureManagement.FeatureManagementComponent'\r\n  }\"\r\n  [(visible)]=\"visibleFeatures\"\r\n  providerName=\"T\"\r\n  [providerKey]=\"providerKey\"\r\n>\r\n</abp-feature-management>\r\n"
            }] }
];
/** @nocollapse */
TenantsComponent.ctorParameters = () => [
    { type: ConfirmationService },
    { type: TenantManagementService },
    { type: FormBuilder },
    { type: Store }
];
TenantsComponent.propDecorators = {
    tenantModalTemplate: [{ type: ViewChild, args: ['tenantModalTemplate', { static: false },] }],
    connectionStringModalTemplate: [{ type: ViewChild, args: ['connectionStringModalTemplate', { static: false },] }]
};
tslib_1.__decorate([
    Select(TenantManagementState.get),
    tslib_1.__metadata("design:type", Observable)
], TenantsComponent.prototype, "data$", void 0);
tslib_1.__decorate([
    Select(TenantManagementState.getTenantsTotalCount),
    tslib_1.__metadata("design:type", Observable)
], TenantsComponent.prototype, "totalCount$", void 0);
if (false) {
    /** @type {?} */
    TenantsComponent.prototype.data$;
    /** @type {?} */
    TenantsComponent.prototype.totalCount$;
    /** @type {?} */
    TenantsComponent.prototype.selected;
    /** @type {?} */
    TenantsComponent.prototype.tenantForm;
    /** @type {?} */
    TenantsComponent.prototype.defaultConnectionStringForm;
    /** @type {?} */
    TenantsComponent.prototype.defaultConnectionString;
    /** @type {?} */
    TenantsComponent.prototype.isModalVisible;
    /** @type {?} */
    TenantsComponent.prototype.selectedModalContent;
    /** @type {?} */
    TenantsComponent.prototype.visibleFeatures;
    /** @type {?} */
    TenantsComponent.prototype.providerKey;
    /** @type {?} */
    TenantsComponent.prototype._useSharedDatabase;
    /** @type {?} */
    TenantsComponent.prototype.pageQuery;
    /** @type {?} */
    TenantsComponent.prototype.loading;
    /** @type {?} */
    TenantsComponent.prototype.modalBusy;
    /** @type {?} */
    TenantsComponent.prototype.sortOrder;
    /** @type {?} */
    TenantsComponent.prototype.sortKey;
    /** @type {?} */
    TenantsComponent.prototype.tenantModalTemplate;
    /** @type {?} */
    TenantsComponent.prototype.connectionStringModalTemplate;
    /** @type {?} */
    TenantsComponent.prototype.onVisibleFeaturesChange;
    /**
     * @type {?}
     * @private
     */
    TenantsComponent.prototype.confirmationService;
    /**
     * @type {?}
     * @private
     */
    TenantsComponent.prototype.tenantService;
    /**
     * @type {?}
     * @private
     */
    TenantsComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    TenantsComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRlbmFudC1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGVuYW50cy90ZW5hbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsbUJBQW1CLEVBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFVLFdBQVcsRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFlBQVksRUFDWixZQUFZLEVBQ1osYUFBYSxFQUNiLFVBQVUsRUFDVixZQUFZLEdBQ2IsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUU3RSxtQ0FJQzs7O0lBSEMsb0NBQW1DOztJQUNuQyxxQ0FBYzs7SUFDZCx3Q0FBMkI7O0FBTzdCLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7SUF5RTNCLFlBQ1UsbUJBQXdDLEVBQ3hDLGFBQXNDLEVBQ3RDLEVBQWUsRUFDZixLQUFZO1FBSFosd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNm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Q2pDO1lBQ0gsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDSCxDQUFDOzs7WUExUEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixrMk9BQXVDO2FBQ3hDOzs7O1lBekJRLG1CQUFtQjtZQWFuQix1QkFBdUI7WUFYdkIsV0FBVztZQUNILEtBQUs7OztrQ0FrRW5CLFNBQVMsU0FBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7NENBR2xELFNBQVMsU0FBQywrQkFBK0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0FBNUM3RDtJQURDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUM7c0NBQzNCLFVBQVU7K0NBQWtCO0FBR25DO0lBREMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDO3NDQUN0QyxVQUFVO3FEQUFTOzs7SUFKaEMsaUNBQ21DOztJQUVuQyx1Q0FDZ0M7O0lBRWhDLG9DQUF3Qjs7SUFFeEIsc0NBQXNCOztJQUV0Qix1REFBdUM7O0lBRXZDLG1EQUFnQzs7SUFFaEMsMENBQXdCOztJQUV4QixnREFBa0Q7O0lBRWxELDJDQUF3Qjs7SUFFeEIsdUNBQW9COztJQUVwQiw4Q0FBNEI7O0lBRTVCLHFDQUF3RDs7SUFFeEQsbUNBQWdCOztJQUVoQixxQ0FBa0I7O0lBRWxCLHFDQUFlOztJQUVmLG1DQUFhOztJQVViLCtDQUNzQzs7SUFFdEMseURBQ2dEOztJQXNCaEQsbURBRUU7Ozs7O0lBR0EsK0NBQWdEOzs7OztJQUNoRCx5Q0FBOEM7Ozs7O0lBQzlDLDhCQUF1Qjs7Ozs7SUFDdkIsaUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSwgVG9hc3RlciB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmluYWxpemUsIHBsdWNrLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7XHJcbiAgQ3JlYXRlVGVuYW50LFxyXG4gIERlbGV0ZVRlbmFudCxcclxuICBHZXRUZW5hbnRCeUlkLFxyXG4gIEdldFRlbmFudHMsXHJcbiAgVXBkYXRlVGVuYW50LFxyXG59IGZyb20gJy4uLy4uL2FjdGlvbnMvdGVuYW50LW1hbmFnZW1lbnQuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVuYW50LW1hbmFnZW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFRlbmFudE1hbmFnZW1lbnRTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlcy90ZW5hbnQtbWFuYWdlbWVudC5zdGF0ZSc7XHJcblxyXG5pbnRlcmZhY2UgU2VsZWN0ZWRNb2RhbENvbnRlbnQge1xyXG4gIHR5cGU6ICdzYXZlQ29ublN0cicgfCAnc2F2ZVRlbmFudCc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtdGVuYW50cycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RlbmFudHMuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVuYW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFNlbGVjdChUZW5hbnRNYW5hZ2VtZW50U3RhdGUuZ2V0KVxyXG4gIGRhdGEkOiBPYnNlcnZhYmxlPEFCUC5CYXNpY0l0ZW1bXT47XHJcblxyXG4gIEBTZWxlY3QoVGVuYW50TWFuYWdlbWVudFN0YXRlLmdldFRlbmFudHNUb3RhbENvdW50KVxyXG4gIHRvdGFsQ291bnQkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcblxyXG4gIHNlbGVjdGVkOiBBQlAuQmFzaWNJdGVtO1xyXG5cclxuICB0ZW5hbnRGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIGRlZmF1bHRDb25uZWN0aW9uU3RyaW5nRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBkZWZhdWx0Q29ubmVjdGlvblN0cmluZzogc3RyaW5nO1xyXG5cclxuICBpc01vZGFsVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgc2VsZWN0ZWRNb2RhbENvbnRlbnQgPSB7fSBhcyBTZWxlY3RlZE1vZGFsQ29udGVudDtcclxuXHJcbiAgdmlzaWJsZUZlYXR1cmVzID0gZmFsc2U7XHJcblxyXG4gIHByb3ZpZGVyS2V5OiBzdHJpbmc7XHJcblxyXG4gIF91c2VTaGFyZWREYXRhYmFzZTogYm9vbGVhbjtcclxuXHJcbiAgcGFnZVF1ZXJ5OiBBQlAuUGFnZVF1ZXJ5UGFyYW1zID0geyBtYXhSZXN1bHRDb3VudDogMTAgfTtcclxuXHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBtb2RhbEJ1c3kgPSBmYWxzZTtcclxuXHJcbiAgc29ydE9yZGVyID0gJyc7XHJcblxyXG4gIHNvcnRLZXkgPSAnJztcclxuXHJcbiAgZ2V0IHVzZVNoYXJlZERhdGFiYXNlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtLmdldCgndXNlU2hhcmVkRGF0YWJhc2UnKS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBjb25uZWN0aW9uU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q29ubmVjdGlvblN0cmluZ0Zvcm0uZ2V0KCdkZWZhdWx0Q29ubmVjdGlvblN0cmluZycpLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZCgndGVuYW50TW9kYWxUZW1wbGF0ZScsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIHRlbmFudE1vZGFsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2Nvbm5lY3Rpb25TdHJpbmdNb2RhbFRlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgY29ubmVjdGlvblN0cmluZ01vZGFsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGdldCBpc0Rpc2FibGVkU2F2ZUJ1dHRvbigpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5zZWxlY3RlZE1vZGFsQ29udGVudCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5zZWxlY3RlZE1vZGFsQ29udGVudC50eXBlID09PSAnc2F2ZUNvbm5TdHInICYmXHJcbiAgICAgIHRoaXMuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtICYmXHJcbiAgICAgIHRoaXMuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtLmludmFsaWRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRNb2RhbENvbnRlbnQudHlwZSA9PT0gJ3NhdmVUZW5hbnQnICYmXHJcbiAgICAgIHRoaXMudGVuYW50Rm9ybSAmJlxyXG4gICAgICB0aGlzLnRlbmFudEZvcm0uaW52YWxpZFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25WaXNpYmxlRmVhdHVyZXNDaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgIHRoaXMudmlzaWJsZUZlYXR1cmVzID0gdmFsdWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRlbmFudFNlcnZpY2U6IFRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXQoKTtcclxuICB9XHJcblxyXG4gIG9uU2VhcmNoKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucGFnZVF1ZXJ5LmZpbHRlciA9IHZhbHVlO1xyXG4gICAgdGhpcy5nZXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlVGVuYW50Rm9ybSgpIHtcclxuICAgIHRoaXMudGVuYW50Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBuYW1lOiBbdGhpcy5zZWxlY3RlZC5uYW1lIHx8ICcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMjU2KV1dLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZURlZmF1bHRDb25uZWN0aW9uU3RyaW5nRm9ybSgpIHtcclxuICAgIHRoaXMuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIHVzZVNoYXJlZERhdGFiYXNlOiB0aGlzLl91c2VTaGFyZWREYXRhYmFzZSxcclxuICAgICAgZGVmYXVsdENvbm5lY3Rpb25TdHJpbmc6IFt0aGlzLmRlZmF1bHRDb25uZWN0aW9uU3RyaW5nIHx8ICcnXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKHRpdGxlOiBzdHJpbmcsIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCB0eXBlOiAnc2F2ZUNvbm5TdHInIHwgJ3NhdmVUZW5hbnQnKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkTW9kYWxDb250ZW50ID0ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgdGVtcGxhdGUsXHJcbiAgICAgIHR5cGUsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0Q29ubmVjdGlvblN0cmluZyhpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN0b3JlXHJcbiAgICAgIC5kaXNwYXRjaChuZXcgR2V0VGVuYW50QnlJZChpZCkpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHBsdWNrKCdUZW5hbnRNYW5hZ2VtZW50U3RhdGUnLCAnc2VsZWN0ZWRJdGVtJyksXHJcbiAgICAgICAgc3dpdGNoTWFwKHNlbGVjdGVkID0+IHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnRlbmFudFNlcnZpY2UuZ2V0RGVmYXVsdENvbm5lY3Rpb25TdHJpbmcoaWQpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoZmV0Y2hlZENvbm5lY3Rpb25TdHJpbmcgPT4ge1xyXG4gICAgICAgIHRoaXMuX3VzZVNoYXJlZERhdGFiYXNlID0gZmV0Y2hlZENvbm5lY3Rpb25TdHJpbmcgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0Q29ubmVjdGlvblN0cmluZyA9IGZldGNoZWRDb25uZWN0aW9uU3RyaW5nID8gZmV0Y2hlZENvbm5lY3Rpb25TdHJpbmcgOiAnJztcclxuICAgICAgICB0aGlzLmNyZWF0ZURlZmF1bHRDb25uZWN0aW9uU3RyaW5nRm9ybSgpO1xyXG4gICAgICAgIHRoaXMub3Blbk1vZGFsKFxyXG4gICAgICAgICAgJ0FicFRlbmFudE1hbmFnZW1lbnQ6OkNvbm5lY3Rpb25TdHJpbmdzJyxcclxuICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN0cmluZ01vZGFsVGVtcGxhdGUsXHJcbiAgICAgICAgICAnc2F2ZUNvbm5TdHInLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkVGVuYW50KCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHt9IGFzIEFCUC5CYXNpY0l0ZW07XHJcbiAgICB0aGlzLmNyZWF0ZVRlbmFudEZvcm0oKTtcclxuICAgIHRoaXMub3Blbk1vZGFsKCdBYnBUZW5hbnRNYW5hZ2VtZW50OjpOZXdUZW5hbnQnLCB0aGlzLnRlbmFudE1vZGFsVGVtcGxhdGUsICdzYXZlVGVuYW50Jyk7XHJcbiAgfVxyXG5cclxuICBlZGl0VGVuYW50KGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKG5ldyBHZXRUZW5hbnRCeUlkKGlkKSlcclxuICAgICAgLnBpcGUocGx1Y2soJ1RlbmFudE1hbmFnZW1lbnRTdGF0ZScsICdzZWxlY3RlZEl0ZW0nKSlcclxuICAgICAgLnN1YnNjcmliZShzZWxlY3RlZCA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVGVuYW50Rm9ybSgpO1xyXG4gICAgICAgIHRoaXMub3Blbk1vZGFsKCdBYnBUZW5hbnRNYW5hZ2VtZW50OjpFZGl0JywgdGhpcy50ZW5hbnRNb2RhbFRlbXBsYXRlLCAnc2F2ZVRlbmFudCcpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXMuc2VsZWN0ZWRNb2RhbENvbnRlbnQ7XHJcbiAgICBpZiAoIXR5cGUpIHJldHVybjtcclxuICAgIGlmICh0eXBlID09PSAnc2F2ZVRlbmFudCcpIHRoaXMuc2F2ZVRlbmFudCgpO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NhdmVDb25uU3RyJykgdGhpcy5zYXZlQ29ubmVjdGlvblN0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUNvbm5lY3Rpb25TdHJpbmcoKSB7XHJcbiAgICBpZiAodGhpcy5tb2RhbEJ1c3kpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLm1vZGFsQnVzeSA9IHRydWU7XHJcbiAgICBpZiAodGhpcy51c2VTaGFyZWREYXRhYmFzZSB8fCAoIXRoaXMudXNlU2hhcmVkRGF0YWJhc2UgJiYgIXRoaXMuY29ubmVjdGlvblN0cmluZykpIHtcclxuICAgICAgdGhpcy50ZW5hbnRTZXJ2aWNlXHJcbiAgICAgICAgLmRlbGV0ZURlZmF1bHRDb25uZWN0aW9uU3RyaW5nKHRoaXMuc2VsZWN0ZWQuaWQpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICB0YWtlKDEpLFxyXG4gICAgICAgICAgZmluYWxpemUoKCkgPT4gKHRoaXMubW9kYWxCdXN5ID0gZmFsc2UpKSxcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRlbmFudFNlcnZpY2VcclxuICAgICAgICAudXBkYXRlRGVmYXVsdENvbm5lY3Rpb25TdHJpbmcoe1xyXG4gICAgICAgICAgaWQ6IHRoaXMuc2VsZWN0ZWQuaWQsXHJcbiAgICAgICAgICBkZWZhdWx0Q29ubmVjdGlvblN0cmluZzogdGhpcy5jb25uZWN0aW9uU3RyaW5nLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICB0YWtlKDEpLFxyXG4gICAgICAgICAgZmluYWxpemUoKCkgPT4gKHRoaXMubW9kYWxCdXN5ID0gZmFsc2UpKSxcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzYXZlVGVuYW50KCkge1xyXG4gICAgaWYgKCF0aGlzLnRlbmFudEZvcm0udmFsaWQgfHwgdGhpcy5tb2RhbEJ1c3kpIHJldHVybjtcclxuICAgIHRoaXMubW9kYWxCdXN5ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnN0b3JlXHJcbiAgICAgIC5kaXNwYXRjaChcclxuICAgICAgICB0aGlzLnNlbGVjdGVkLmlkXHJcbiAgICAgICAgICA/IG5ldyBVcGRhdGVUZW5hbnQoeyAuLi50aGlzLnNlbGVjdGVkLCAuLi50aGlzLnRlbmFudEZvcm0udmFsdWUsIGlkOiB0aGlzLnNlbGVjdGVkLmlkIH0pXHJcbiAgICAgICAgICA6IG5ldyBDcmVhdGVUZW5hbnQodGhpcy50ZW5hbnRGb3JtLnZhbHVlKSxcclxuICAgICAgKVxyXG4gICAgICAucGlwZShmaW5hbGl6ZSgoKSA9PiAodGhpcy5tb2RhbEJ1c3kgPSBmYWxzZSkpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nZXQoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2VcclxuICAgICAgLndhcm4oXHJcbiAgICAgICAgJ0FicFRlbmFudE1hbmFnZW1lbnQ6OlRlbmFudERlbGV0aW9uQ29uZmlybWF0aW9uTWVzc2FnZScsXHJcbiAgICAgICAgJ0FicFRlbmFudE1hbmFnZW1lbnQ6OkFyZVlvdVN1cmUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1lc3NhZ2VMb2NhbGl6YXRpb25QYXJhbXM6IFtuYW1lXSxcclxuICAgICAgICB9LFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKHN0YXR1czogVG9hc3Rlci5TdGF0dXMpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBUb2FzdGVyLlN0YXR1cy5jb25maXJtKSB7XHJcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVUZW5hbnQoaWQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5nZXQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uUGFnZUNoYW5nZShwYWdlOiBudW1iZXIpIHtcclxuICAgIHRoaXMucGFnZVF1ZXJ5LnNraXBDb3VudCA9IChwYWdlIC0gMSkgKiB0aGlzLnBhZ2VRdWVyeS5tYXhSZXN1bHRDb3VudDtcclxuXHJcbiAgICB0aGlzLmdldCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KCkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKG5ldyBHZXRUZW5hbnRzKHRoaXMucGFnZVF1ZXJ5KSlcclxuICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4gKHRoaXMubG9hZGluZyA9IGZhbHNlKSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIG9uU2hhcmVkRGF0YWJhc2VDaGFuZ2UodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENvbm5lY3Rpb25TdHJpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICdkZWZhdWx0Q29ubmVjdGlvblN0cmluZycsXHJcbiAgICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGlmIChkZWZhdWx0Q29ubmVjdGlvblN0cmluZykge1xyXG4gICAgICAgICAgZGVmYXVsdENvbm5lY3Rpb25TdHJpbmcuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=