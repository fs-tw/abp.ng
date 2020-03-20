/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tenants/tenants.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ConfirmationService, Toaster } from '@abp/ng.theme.shared';
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
    get hasSelectedTenant() {
        return Boolean(this.selected.id);
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
        /** @type {?} */
        const tenantForm = this.fb.group({
            name: [this.selected.name || '', [Validators.required, Validators.maxLength(256)]],
            adminEmailAddress: [null, [Validators.required, Validators.maxLength(256), Validators.email]],
            adminPassword: [null, [Validators.required]],
        });
        if (this.hasSelectedTenant) {
            tenantForm.removeControl('adminEmailAddress');
            tenantForm.removeControl('adminPassword');
        }
        this.tenantForm = tenantForm;
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
            if (status === Toaster.Status.confirm) {
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
    /**
     * @param {?} providerKey
     * @return {?}
     */
    openFeaturesModal(providerKey) {
        this.providerKey = providerKey;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.visibleFeatures = true;
        }), 0);
    }
}
TenantsComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-tenants',
                template: "<div id=\"wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpTenantManagement::Tenants' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpTenantManagement.Tenants.Create'\"\r\n          id=\"create-tenants\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"addTenant()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpTenantManagement::NewTenant' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <label\r\n        ><input\r\n          type=\"search\"\r\n          class=\"form-control form-control-sm\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          (input.debounce)=\"onSearch($event.target.value)\"\r\n      /></label>\r\n    </div>\r\n    <abp-table\r\n      *ngIf=\"[150, 0] as columnWidths\"\r\n      [abpLoading]=\"loading\"\r\n      [abpLoadingDelay]=\"500\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [colgroupTemplate]=\"tableColGroup\"\r\n      [headerTemplate]=\"tableHeader\"\r\n      [bodyTemplate]=\"tableBody\"\r\n      [value]=\"data$ | async\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [rows]=\"pageQuery.maxResultCount\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [scrollable]=\"true\"\r\n      (pageChange)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template #tableColGroup>\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template #tableHeader let-columns>\r\n        <tr>\r\n          <th>{{ 'AbpTenantManagement::Actions' | abpLocalization }}</th>\r\n          <th (click)=\"sortOrderIcon.sort('name')\">\r\n            {{ 'AbpTenantManagement::TenantName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              sortKey=\"name\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tableBody let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpTenantManagement::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"editTenant(data.id)\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.ManageConnectionStrings'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"onEditConnectionString(data.id)\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Permission:ManageConnectionStrings' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.ManageFeatures'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"openFeaturesModal(data.id)\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.name)\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>{{ data.name }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </abp-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ selectedModalContent.title | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-container *ngTemplateOutlet=\"selectedModalContent?.template\"></ng-container>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"isDisabledSaveButton\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<ng-template #tenantModalTemplate>\r\n  <form [formGroup]=\"tenantForm\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <div class=\"mt-2\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">{{ 'AbpTenantManagement::TenantName' | abpLocalization }}</label>\r\n        <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" autofocus />\r\n      </div>\r\n      <div class=\"form-group\" *ngIf=\"tenantForm.controls.adminEmailAddress\">\r\n        <label for=\"name\">{{ 'AbpTenantManagement::DisplayName:AdminEmailAddress' | abpLocalization }}</label>\r\n        <input\r\n          autocomplete=\"email\"\r\n          type=\"email\"\r\n          id=\"admin-email-address\"\r\n          class=\"form-control\"\r\n          formControlName=\"adminEmailAddress\"\r\n        />\r\n      </div>\r\n      <div class=\"form-group\" *ngIf=\"tenantForm.controls.adminPassword\">\r\n        <label for=\"name\">{{ 'AbpTenantManagement::DisplayName:AdminPassword' | abpLocalization }}</label>\r\n        <input\r\n          autocomplete=\"new-password\"\r\n          type=\"password\"\r\n          id=\"admin-password\"\r\n          class=\"form-control\"\r\n          formControlName=\"adminPassword\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #connectionStringModalTemplate>\r\n  <form [formGroup]=\"defaultConnectionStringForm\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <div class=\"form-group\">\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          id=\"useSharedDatabase\"\r\n          type=\"checkbox\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"useSharedDatabase\"\r\n          autofocus\r\n          (ngModelChange)=\"onSharedDatabaseChange($event)\"\r\n        />\r\n        <label for=\"useSharedDatabase\" class=\"custom-control-label\">{{\r\n          'AbpTenantManagement::DisplayName:UseSharedDatabase' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"!useSharedDatabase\">\r\n      <label for=\"defaultConnectionString\">{{\r\n        'AbpTenantManagement::DisplayName:DefaultConnectionString' | abpLocalization\r\n      }}</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"defaultConnectionString\"\r\n        class=\"form-control\"\r\n        formControlName=\"defaultConnectionString\"\r\n      />\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<abp-feature-management\r\n  *abpReplaceableTemplate=\"{\r\n    inputs: {\r\n      providerName: { value: 'T' },\r\n      providerKey: { value: providerKey },\r\n      visible: { value: visibleFeatures, twoWay: true }\r\n    },\r\n    outputs: { visibleChange: onVisibleFeaturesChange },\r\n    componentKey: 'FeatureManagement.FeatureManagementComponent'\r\n  }\"\r\n  [(visible)]=\"visibleFeatures\"\r\n  providerName=\"T\"\r\n  [providerKey]=\"providerKey\"\r\n>\r\n</abp-feature-management>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRlbmFudC1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGVuYW50cy90ZW5hbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBVSxXQUFXLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCxZQUFZLEVBQ1osWUFBWSxFQUNaLGFBQWEsRUFDYixVQUFVLEVBQ1YsWUFBWSxHQUNiLE1BQU0seUNBQXlDLENBQUM7QUFDakQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFFN0UsbUNBSUM7OztJQUhDLG9DQUFtQzs7SUFDbkMscUNBQWM7O0lBQ2Qsd0NBQTJCOztBQU83QixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBNkUzQixZQUNVLG1CQUF3QyxFQUN4QyxhQUFzQyxFQUN0QyxFQUFlLEVBQ2YsS0FBWTtRQUhaLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLE9BQUUsR0FBRixFQUFF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QUMscUJBQXFCLENBQUMsR0FBRyxDQUFDO3NDQUMzQixVQUFVOytDQUFrQjtBQUduQztJQURDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQztzQ0FDdEMsVUFBVTtxREFBUzs7O0lBSmhDLGlDQUNtQzs7SUFFbkMsdUNBQ2dDOztJQUVoQyxvQ0FBd0I7O0lBRXhCLHNDQUFzQjs7SUFFdEIsdURBQXVDOztJQUV2QyxtREFBZ0M7O0lBRWhDLDBDQUF3Qjs7SUFFeEIsZ0RBQWtEOztJQUVsRCwyQ0FBd0I7O0lBRXhCLHVDQUFvQjs7SUFFcEIsOENBQTRCOztJQUU1QixxQ0FBd0Q7O0lBRXhELG1DQUFnQjs7SUFFaEIscUNBQWtCOztJQUVsQixxQ0FBZTs7SUFFZixtQ0FBYTs7SUFjYiwrQ0FDc0M7O0lBRXRDLHlEQUNnRDs7SUFzQmhELG1EQUVFOzs7OztJQUdBLCtDQUFnRDs7Ozs7SUFDaEQseUNBQThDOzs7OztJQUM5Qyw4QkFBdUI7Ozs7O0lBQ3ZCLGlDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFCUCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UsIFRvYXN0ZXIgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbmFsaXplLCBwbHVjaywgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gIENyZWF0ZVRlbmFudCxcclxuICBEZWxldGVUZW5hbnQsXHJcbiAgR2V0VGVuYW50QnlJZCxcclxuICBHZXRUZW5hbnRzLFxyXG4gIFVwZGF0ZVRlbmFudCxcclxufSBmcm9tICcuLi8uLi9hY3Rpb25zL3RlbmFudC1tYW5hZ2VtZW50LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBUZW5hbnRNYW5hZ2VtZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbmFudC1tYW5hZ2VtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZW5hbnRNYW5hZ2VtZW50U3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZXMvdGVuYW50LW1hbmFnZW1lbnQuc3RhdGUnO1xyXG5cclxuaW50ZXJmYWNlIFNlbGVjdGVkTW9kYWxDb250ZW50IHtcclxuICB0eXBlOiAnc2F2ZUNvbm5TdHInIHwgJ3NhdmVUZW5hbnQnO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLXRlbmFudHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90ZW5hbnRzLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbmFudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBTZWxlY3QoVGVuYW50TWFuYWdlbWVudFN0YXRlLmdldClcclxuICBkYXRhJDogT2JzZXJ2YWJsZTxBQlAuQmFzaWNJdGVtW10+O1xyXG5cclxuICBAU2VsZWN0KFRlbmFudE1hbmFnZW1lbnRTdGF0ZS5nZXRUZW5hbnRzVG90YWxDb3VudClcclxuICB0b3RhbENvdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG5cclxuICBzZWxlY3RlZDogQUJQLkJhc2ljSXRlbTtcclxuXHJcbiAgdGVuYW50Rm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBkZWZhdWx0Q29ubmVjdGlvblN0cmluZ0Zvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgZGVmYXVsdENvbm5lY3Rpb25TdHJpbmc6IHN0cmluZztcclxuXHJcbiAgaXNNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gIHNlbGVjdGVkTW9kYWxDb250ZW50ID0ge30gYXMgU2VsZWN0ZWRNb2RhbENvbnRlbnQ7XHJcblxyXG4gIHZpc2libGVGZWF0dXJlcyA9IGZhbHNlO1xyXG5cclxuICBwcm92aWRlcktleTogc3RyaW5nO1xyXG5cclxuICBfdXNlU2hhcmVkRGF0YWJhc2U6IGJvb2xlYW47XHJcblxyXG4gIHBhZ2VRdWVyeTogQUJQLlBhZ2VRdWVyeVBhcmFtcyA9IHsgbWF4UmVzdWx0Q291bnQ6IDEwIH07XHJcblxyXG4gIGxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgbW9kYWxCdXN5ID0gZmFsc2U7XHJcblxyXG4gIHNvcnRPcmRlciA9ICcnO1xyXG5cclxuICBzb3J0S2V5ID0gJyc7XHJcblxyXG4gIGdldCBoYXNTZWxlY3RlZFRlbmFudCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBCb29sZWFuKHRoaXMuc2VsZWN0ZWQuaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVzZVNoYXJlZERhdGFiYXNlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtLmdldCgndXNlU2hhcmVkRGF0YWJhc2UnKS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBjb25uZWN0aW9uU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q29ubmVjdGlvblN0cmluZ0Zvcm0uZ2V0KCdkZWZhdWx0Q29ubmVjdGlvblN0cmluZycpLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZCgndGVuYW50TW9kYWxUZW1wbGF0ZScsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIHRlbmFudE1vZGFsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2Nvbm5lY3Rpb25TdHJpbmdNb2RhbFRlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgY29ubmVjdGlvblN0cmluZ01vZGFsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGdldCBpc0Rpc2FibGVkU2F2ZUJ1dHRvbigpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5zZWxlY3RlZE1vZGFsQ29udGVudCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5zZWxlY3RlZE1vZGFsQ29udGVudC50eXBlID09PSAnc2F2ZUNvbm5TdHInICYmXHJcbiAgICAgIHRoaXMuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtICYmXHJcbiAgICAgIHRoaXMuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtLmludmFsaWRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRNb2RhbENvbnRlbnQudHlwZSA9PT0gJ3NhdmVUZW5hbnQnICYmXHJcbiAgICAgIHRoaXMudGVuYW50Rm9ybSAmJlxyXG4gICAgICB0aGlzLnRlbmFudEZvcm0uaW52YWxpZFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25WaXNpYmxlRmVhdHVyZXNDaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgIHRoaXMudmlzaWJsZUZlYXR1cmVzID0gdmFsdWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRlbmFudFNlcnZpY2U6IFRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXQoKTtcclxuICB9XHJcblxyXG4gIG9uU2VhcmNoKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucGFnZVF1ZXJ5LmZpbHRlciA9IHZhbHVlO1xyXG4gICAgdGhpcy5nZXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlVGVuYW50Rm9ybSgpIHtcclxuICAgIGNvbnN0IHRlbmFudEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgbmFtZTogW3RoaXMuc2VsZWN0ZWQubmFtZSB8fCAnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDI1NildXSxcclxuICAgICAgYWRtaW5FbWFpbEFkZHJlc3M6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMjU2KSwgVmFsaWRhdG9ycy5lbWFpbF1dLFxyXG4gICAgICBhZG1pblBhc3N3b3JkOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmhhc1NlbGVjdGVkVGVuYW50KSB7XHJcbiAgICAgIHRlbmFudEZvcm0ucmVtb3ZlQ29udHJvbCgnYWRtaW5FbWFpbEFkZHJlc3MnKTtcclxuICAgICAgdGVuYW50Rm9ybS5yZW1vdmVDb250cm9sKCdhZG1pblBhc3N3b3JkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50ZW5hbnRGb3JtID0gdGVuYW50Rm9ybTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtKCkge1xyXG4gICAgdGhpcy5kZWZhdWx0Q29ubmVjdGlvblN0cmluZ0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgdXNlU2hhcmVkRGF0YWJhc2U6IHRoaXMuX3VzZVNoYXJlZERhdGFiYXNlLFxyXG4gICAgICBkZWZhdWx0Q29ubmVjdGlvblN0cmluZzogW3RoaXMuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmcgfHwgJyddLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwodGl0bGU6IHN0cmluZywgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIHR5cGU6ICdzYXZlQ29ublN0cicgfCAnc2F2ZVRlbmFudCcpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRNb2RhbENvbnRlbnQgPSB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICB0ZW1wbGF0ZSxcclxuICAgICAgdHlwZSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5pc01vZGFsVmlzaWJsZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRDb25uZWN0aW9uU3RyaW5nKGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKG5ldyBHZXRUZW5hbnRCeUlkKGlkKSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgcGx1Y2soJ1RlbmFudE1hbmFnZW1lbnRTdGF0ZScsICdzZWxlY3RlZEl0ZW0nKSxcclxuICAgICAgICBzd2l0Y2hNYXAoc2VsZWN0ZWQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMudGVuYW50U2VydmljZS5nZXREZWZhdWx0Q29ubmVjdGlvblN0cmluZyhpZCk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShmZXRjaGVkQ29ubmVjdGlvblN0cmluZyA9PiB7XHJcbiAgICAgICAgdGhpcy5fdXNlU2hhcmVkRGF0YWJhc2UgPSBmZXRjaGVkQ29ubmVjdGlvblN0cmluZyA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRDb25uZWN0aW9uU3RyaW5nID0gZmV0Y2hlZENvbm5lY3Rpb25TdHJpbmcgPyBmZXRjaGVkQ29ubmVjdGlvblN0cmluZyA6ICcnO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtKCk7XHJcbiAgICAgICAgdGhpcy5vcGVuTW9kYWwoXHJcbiAgICAgICAgICAnQWJwVGVuYW50TWFuYWdlbWVudDo6Q29ubmVjdGlvblN0cmluZ3MnLFxyXG4gICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RyaW5nTW9kYWxUZW1wbGF0ZSxcclxuICAgICAgICAgICdzYXZlQ29ublN0cicsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRUZW5hbnQoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0ge30gYXMgQUJQLkJhc2ljSXRlbTtcclxuICAgIHRoaXMuY3JlYXRlVGVuYW50Rm9ybSgpO1xyXG4gICAgdGhpcy5vcGVuTW9kYWwoJ0FicFRlbmFudE1hbmFnZW1lbnQ6Ok5ld1RlbmFudCcsIHRoaXMudGVuYW50TW9kYWxUZW1wbGF0ZSwgJ3NhdmVUZW5hbnQnKTtcclxuICB9XHJcblxyXG4gIGVkaXRUZW5hbnQoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2gobmV3IEdldFRlbmFudEJ5SWQoaWQpKVxyXG4gICAgICAucGlwZShwbHVjaygnVGVuYW50TWFuYWdlbWVudFN0YXRlJywgJ3NlbGVjdGVkSXRlbScpKVxyXG4gICAgICAuc3Vic2NyaWJlKHNlbGVjdGVkID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVUZW5hbnRGb3JtKCk7XHJcbiAgICAgICAgdGhpcy5vcGVuTW9kYWwoJ0FicFRlbmFudE1hbmFnZW1lbnQ6OkVkaXQnLCB0aGlzLnRlbmFudE1vZGFsVGVtcGxhdGUsICdzYXZlVGVuYW50Jyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcy5zZWxlY3RlZE1vZGFsQ29udGVudDtcclxuICAgIGlmICghdHlwZSkgcmV0dXJuO1xyXG4gICAgaWYgKHR5cGUgPT09ICdzYXZlVGVuYW50JykgdGhpcy5zYXZlVGVuYW50KCk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnc2F2ZUNvbm5TdHInKSB0aGlzLnNhdmVDb25uZWN0aW9uU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBzYXZlQ29ubmVjdGlvblN0cmluZygpIHtcclxuICAgIGlmICh0aGlzLm1vZGFsQnVzeSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMubW9kYWxCdXN5ID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLnVzZVNoYXJlZERhdGFiYXNlIHx8ICghdGhpcy51c2VTaGFyZWREYXRhYmFzZSAmJiAhdGhpcy5jb25uZWN0aW9uU3RyaW5nKSkge1xyXG4gICAgICB0aGlzLnRlbmFudFNlcnZpY2VcclxuICAgICAgICAuZGVsZXRlRGVmYXVsdENvbm5lY3Rpb25TdHJpbmcodGhpcy5zZWxlY3RlZC5pZClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2UoMSksXHJcbiAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiAodGhpcy5tb2RhbEJ1c3kgPSBmYWxzZSkpLFxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGVuYW50U2VydmljZVxyXG4gICAgICAgIC51cGRhdGVEZWZhdWx0Q29ubmVjdGlvblN0cmluZyh7XHJcbiAgICAgICAgICBpZDogdGhpcy5zZWxlY3RlZC5pZCxcclxuICAgICAgICAgIGRlZmF1bHRDb25uZWN0aW9uU3RyaW5nOiB0aGlzLmNvbm5lY3Rpb25TdHJpbmcsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2UoMSksXHJcbiAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiAodGhpcy5tb2RhbEJ1c3kgPSBmYWxzZSkpLFxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVUZW5hbnQoKSB7XHJcbiAgICBpZiAoIXRoaXMudGVuYW50Rm9ybS52YWxpZCB8fCB0aGlzLm1vZGFsQnVzeSkgcmV0dXJuO1xyXG4gICAgdGhpcy5tb2RhbEJ1c3kgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKFxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuaWRcclxuICAgICAgICAgID8gbmV3IFVwZGF0ZVRlbmFudCh7IC4uLnRoaXMuc2VsZWN0ZWQsIC4uLnRoaXMudGVuYW50Rm9ybS52YWx1ZSwgaWQ6IHRoaXMuc2VsZWN0ZWQuaWQgfSlcclxuICAgICAgICAgIDogbmV3IENyZWF0ZVRlbmFudCh0aGlzLnRlbmFudEZvcm0udmFsdWUpLFxyXG4gICAgICApXHJcbiAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+ICh0aGlzLm1vZGFsQnVzeSA9IGZhbHNlKSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdldCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZShpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY29uZmlybWF0aW9uU2VydmljZVxyXG4gICAgICAud2FybihcclxuICAgICAgICAnQWJwVGVuYW50TWFuYWdlbWVudDo6VGVuYW50RGVsZXRpb25Db25maXJtYXRpb25NZXNzYWdlJyxcclxuICAgICAgICAnQWJwVGVuYW50TWFuYWdlbWVudDo6QXJlWW91U3VyZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWVzc2FnZUxvY2FsaXphdGlvblBhcmFtczogW25hbWVdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoc3RhdHVzOiBUb2FzdGVyLlN0YXR1cykgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IFRvYXN0ZXIuU3RhdHVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVRlbmFudChpZCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmdldCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcikge1xyXG4gICAgdGhpcy5wYWdlUXVlcnkuc2tpcENvdW50ID0gKHBhZ2UgLSAxKSAqIHRoaXMucGFnZVF1ZXJ5Lm1heFJlc3VsdENvdW50O1xyXG5cclxuICAgIHRoaXMuZ2V0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQoKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2gobmV3IEdldFRlbmFudHModGhpcy5wYWdlUXVlcnkpKVxyXG4gICAgICAucGlwZShmaW5hbGl6ZSgoKSA9PiAodGhpcy5sb2FkaW5nID0gZmFsc2UpKSlcclxuICAgICAgLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgb25TaGFyZWREYXRhYmFzZUNoYW5nZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0Q29ubmVjdGlvblN0cmluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgJ2RlZmF1bHRDb25uZWN0aW9uU3RyaW5nJyxcclxuICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRDb25uZWN0aW9uU3RyaW5nKSB7XHJcbiAgICAgICAgICBkZWZhdWx0Q29ubmVjdGlvblN0cmluZy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuRmVhdHVyZXNNb2RhbChwcm92aWRlcktleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnByb3ZpZGVyS2V5ID0gcHJvdmlkZXJLZXk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy52aXNpYmxlRmVhdHVyZXMgPSB0cnVlO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==