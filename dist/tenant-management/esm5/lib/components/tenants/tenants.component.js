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
var TenantsComponent = /** @class */ (function () {
    function TenantsComponent(confirmationService, tenantService, fb, store) {
        var _this = this;
        this.confirmationService = confirmationService;
        this.tenantService = tenantService;
        this.fb = fb;
        this.store = store;
        this.selectedModalContent = (/** @type {?} */ ({}));
        this.visibleFeatures = false;
        this.pageQuery = {};
        this.loading = false;
        this.modalBusy = false;
        this.sortOrder = '';
        this.sortKey = '';
        this.onVisibleFeaturesChange = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.visibleFeatures = value;
        });
    }
    Object.defineProperty(TenantsComponent.prototype, "useSharedDatabase", {
        get: /**
         * @return {?}
         */
        function () {
            return this.defaultConnectionStringForm.get('useSharedDatabase').value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TenantsComponent.prototype, "connectionString", {
        get: /**
         * @return {?}
         */
        function () {
            return this.defaultConnectionStringForm.get('defaultConnectionString').value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TenantsComponent.prototype, "isDisabledSaveButton", {
        get: /**
         * @return {?}
         */
        function () {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TenantsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.get();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TenantsComponent.prototype.onSearch = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.pageQuery.filter = value;
        this.get();
    };
    /**
     * @private
     * @return {?}
     */
    TenantsComponent.prototype.createTenantForm = /**
     * @private
     * @return {?}
     */
    function () {
        this.tenantForm = this.fb.group({
            name: [this.selected.name || '', [Validators.required, Validators.maxLength(256)]],
        });
    };
    /**
     * @private
     * @return {?}
     */
    TenantsComponent.prototype.createDefaultConnectionStringForm = /**
     * @private
     * @return {?}
     */
    function () {
        this.defaultConnectionStringForm = this.fb.group({
            useSharedDatabase: this._useSharedDatabase,
            defaultConnectionString: [this.defaultConnectionString || ''],
        });
    };
    /**
     * @param {?} title
     * @param {?} template
     * @param {?} type
     * @return {?}
     */
    TenantsComponent.prototype.openModal = /**
     * @param {?} title
     * @param {?} template
     * @param {?} type
     * @return {?}
     */
    function (title, template, type) {
        this.selectedModalContent = {
            title: title,
            template: template,
            type: type,
        };
        this.isModalVisible = true;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    TenantsComponent.prototype.onEditConnectionString = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        this.store
            .dispatch(new GetTenantById(id))
            .pipe(pluck('TenantManagementState', 'selectedItem'), switchMap((/**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            _this.selected = selected;
            return _this.tenantService.getDefaultConnectionString(id);
        })))
            .subscribe((/**
         * @param {?} fetchedConnectionString
         * @return {?}
         */
        function (fetchedConnectionString) {
            _this._useSharedDatabase = fetchedConnectionString ? false : true;
            _this.defaultConnectionString = fetchedConnectionString ? fetchedConnectionString : '';
            _this.createDefaultConnectionStringForm();
            _this.openModal('AbpTenantManagement::ConnectionStrings', _this.connectionStringModalTemplate, 'saveConnStr');
        }));
    };
    /**
     * @return {?}
     */
    TenantsComponent.prototype.addTenant = /**
     * @return {?}
     */
    function () {
        this.selected = (/** @type {?} */ ({}));
        this.createTenantForm();
        this.openModal('AbpTenantManagement::NewTenant', this.tenantModalTemplate, 'saveTenant');
    };
    /**
     * @param {?} id
     * @return {?}
     */
    TenantsComponent.prototype.editTenant = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        this.store
            .dispatch(new GetTenantById(id))
            .pipe(pluck('TenantManagementState', 'selectedItem'))
            .subscribe((/**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            _this.selected = selected;
            _this.createTenantForm();
            _this.openModal('AbpTenantManagement::Edit', _this.tenantModalTemplate, 'saveTenant');
        }));
    };
    /**
     * @return {?}
     */
    TenantsComponent.prototype.save = /**
     * @return {?}
     */
    function () {
        var type = this.selectedModalContent.type;
        if (!type)
            return;
        if (type === 'saveTenant')
            this.saveTenant();
        else if (type === 'saveConnStr')
            this.saveConnectionString();
    };
    /**
     * @return {?}
     */
    TenantsComponent.prototype.saveConnectionString = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.modalBusy)
            return;
        this.modalBusy = true;
        if (this.useSharedDatabase || (!this.useSharedDatabase && !this.connectionString)) {
            this.tenantService
                .deleteDefaultConnectionString(this.selected.id)
                .pipe(take(1), finalize((/**
             * @return {?}
             */
            function () { return (_this.modalBusy = false); })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.isModalVisible = false;
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
            function () { return (_this.modalBusy = false); })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.isModalVisible = false;
            }));
        }
    };
    /**
     * @return {?}
     */
    TenantsComponent.prototype.saveTenant = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.tenantForm.valid || this.modalBusy)
            return;
        this.modalBusy = true;
        this.store
            .dispatch(this.selected.id
            ? new UpdateTenant(tslib_1.__assign({}, this.selected, this.tenantForm.value, { id: this.selected.id }))
            : new CreateTenant(this.tenantForm.value))
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
    TenantsComponent.prototype.delete = /**
     * @param {?} id
     * @param {?} name
     * @return {?}
     */
    function (id, name) {
        var _this = this;
        this.confirmationService
            .warn('AbpTenantManagement::TenantDeletionConfirmationMessage', 'AbpTenantManagement::AreYouSure', {
            messageLocalizationParams: [name],
        })
            .subscribe((/**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            if (status === "confirm" /* confirm */) {
                _this.store.dispatch(new DeleteTenant(id)).subscribe((/**
                 * @return {?}
                 */
                function () { return _this.get(); }));
            }
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TenantsComponent.prototype.onPageChange = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.pageQuery.skipCount = data.first;
        this.pageQuery.maxResultCount = data.rows;
        this.get();
    };
    /**
     * @return {?}
     */
    TenantsComponent.prototype.get = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loading = true;
        this.store
            .dispatch(new GetTenants(this.pageQuery))
            .pipe(finalize((/**
         * @return {?}
         */
        function () { return (_this.loading = false); })))
            .subscribe();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TenantsComponent.prototype.onSharedDatabaseChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var defaultConnectionString = (/** @type {?} */ (document.getElementById('defaultConnectionString')));
                if (defaultConnectionString) {
                    defaultConnectionString.focus();
                }
            }), 0);
        }
    };
    TenantsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-tenants',
                    template: "<div id=\"wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpTenantManagement::Tenants' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpTenantManagement.Tenants.Create'\"\r\n          id=\"create-tenants\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"addTenant()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpTenantManagement::NewTenant' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <label\r\n        ><input\r\n          type=\"search\"\r\n          class=\"form-control form-control-sm\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          (input.debounce)=\"onSearch($event.target.value)\"\r\n      /></label>\r\n    </div>\r\n    <p-table\r\n      *ngIf=\"[150, 0] as columnWidths\"\r\n      [value]=\"data$ | async\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [lazy]=\"true\"\r\n      [lazyLoadOnInit]=\"false\"\r\n      [paginator]=\"true\"\r\n      [rows]=\"10\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [loading]=\"loading\"\r\n      [resizableColumns]=\"true\"\r\n      [scrollable]=\"true\"\r\n      (onLazyLoad)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template pTemplate=\"colgroup\">\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"emptymessage\" let-columns>\r\n        <tr\r\n          abp-table-empty-message\r\n          [attr.colspan]=\"columnWidths.length\"\r\n          localizationResource=\"AbpTenantManagement\"\r\n          localizationProp=\"NoDataAvailableInDatatable\"\r\n        ></tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th>{{ 'AbpTenantManagement::Actions' | abpLocalization }}</th>\r\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('name')\">\r\n            {{ 'AbpTenantManagement::TenantName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              sortKey=\"name\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpTenantManagement::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"editTenant(data.id)\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.ManageConnectionStrings'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"onEditConnectionString(data.id)\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Permission:ManageConnectionStrings' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.ManageFeatures'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"providerKey = data.id; visibleFeatures = true\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpTenantManagement.Tenants.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.name)\"\r\n                >\r\n                  {{ 'AbpTenantManagement::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>{{ data.name }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ selectedModalContent.title | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-container *ngTemplateOutlet=\"selectedModalContent?.template\"></ng-container>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"isDisabledSaveButton\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<ng-template #tenantModalTemplate>\r\n  <form [formGroup]=\"tenantForm\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <div class=\"mt-2\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">{{ 'AbpTenantManagement::TenantName' | abpLocalization }}</label>\r\n        <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" autofocus />\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #connectionStringModalTemplate>\r\n  <form [formGroup]=\"defaultConnectionStringForm\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <div class=\"form-group\">\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          id=\"useSharedDatabase\"\r\n          type=\"checkbox\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"useSharedDatabase\"\r\n          autofocus\r\n          (ngModelChange)=\"onSharedDatabaseChange($event)\"\r\n        />\r\n        <label for=\"useSharedDatabase\" class=\"custom-control-label\">{{\r\n          'AbpTenantManagement::DisplayName:UseSharedDatabase' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"!useSharedDatabase\">\r\n      <label for=\"defaultConnectionString\">{{\r\n        'AbpTenantManagement::DisplayName:DefaultConnectionString' | abpLocalization\r\n      }}</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"defaultConnectionString\"\r\n        class=\"form-control\"\r\n        formControlName=\"defaultConnectionString\"\r\n      />\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<abp-feature-management\r\n  *abpReplaceableTemplate=\"{\r\n    inputs: {\r\n      providerName: { value: 'T' },\r\n      providerKey: { value: providerKey },\r\n      visible: { value: visibleFeatures, twoWay: true }\r\n    },\r\n    outputs: { visibleChange: onVisibleFeaturesChange },\r\n    componentKey: 'FeatureManagement.FeatureManagementComponent'\r\n  }\"\r\n  [(visible)]=\"visibleFeatures\"\r\n  providerName=\"T\"\r\n  [providerKey]=\"providerKey\"\r\n>\r\n</abp-feature-management>\r\n"
                }] }
    ];
    /** @nocollapse */
    TenantsComponent.ctorParameters = function () { return [
        { type: ConfirmationService },
        { type: TenantManagementService },
        { type: FormBuilder },
        { type: Store }
    ]; };
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
    return TenantsComponent;
}());
export { TenantsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRlbmFudC1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGVuYW50cy90ZW5hbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsbUJBQW1CLEVBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFVLFdBQVcsRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFlBQVksRUFDWixZQUFZLEVBQ1osYUFBYSxFQUNiLFVBQVUsRUFDVixZQUFZLEdBQ2IsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUU3RSxtQ0FJQzs7O0lBSEMsb0NBQW1DOztJQUNuQyxxQ0FBYzs7SUFDZCx3Q0FBMkI7O0FBRzdCO0lBNkVFLDBCQUNVLG1CQUF3QyxFQUN4QyxhQUFzQyxFQUN0QyxFQUFlLEVBQ2YsS0FBWTtRQUp0QixpQkFLSTtRQUpNLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUws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Z0Q7Ozs7O0lBQ2hELHlDQUE4Qzs7Ozs7SUFDOUMsOEJBQXVCOzs7OztJQUN2QixpQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQlAgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlLCBUb2FzdGVyIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgcGx1Y2ssIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtcclxuICBDcmVhdGVUZW5hbnQsXHJcbiAgRGVsZXRlVGVuYW50LFxyXG4gIEdldFRlbmFudEJ5SWQsXHJcbiAgR2V0VGVuYW50cyxcclxuICBVcGRhdGVUZW5hbnQsXHJcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy90ZW5hbnQtbWFuYWdlbWVudC5hY3Rpb25zJztcclxuaW1wb3J0IHsgVGVuYW50TWFuYWdlbWVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZW5hbnQtbWFuYWdlbWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGVuYW50TWFuYWdlbWVudFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGVzL3RlbmFudC1tYW5hZ2VtZW50LnN0YXRlJztcclxuXHJcbmludGVyZmFjZSBTZWxlY3RlZE1vZGFsQ29udGVudCB7XHJcbiAgdHlwZTogJ3NhdmVDb25uU3RyJyB8ICdzYXZlVGVuYW50JztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC10ZW5hbnRzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGVuYW50cy5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW5hbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAU2VsZWN0KFRlbmFudE1hbmFnZW1lbnRTdGF0ZS5nZXQpXHJcbiAgZGF0YSQ6IE9ic2VydmFibGU8QUJQLkJhc2ljSXRlbVtdPjtcclxuXHJcbiAgQFNlbGVjdChUZW5hbnRNYW5hZ2VtZW50U3RhdGUuZ2V0VGVuYW50c1RvdGFsQ291bnQpXHJcbiAgdG90YWxDb3VudCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuXHJcbiAgc2VsZWN0ZWQ6IEFCUC5CYXNpY0l0ZW07XHJcblxyXG4gIHRlbmFudEZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgZGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIGRlZmF1bHRDb25uZWN0aW9uU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gIGlzTW9kYWxWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICBzZWxlY3RlZE1vZGFsQ29udGVudCA9IHt9IGFzIFNlbGVjdGVkTW9kYWxDb250ZW50O1xyXG5cclxuICB2aXNpYmxlRmVhdHVyZXMgPSBmYWxzZTtcclxuXHJcbiAgcHJvdmlkZXJLZXk6IHN0cmluZztcclxuXHJcbiAgX3VzZVNoYXJlZERhdGFiYXNlOiBib29sZWFuO1xyXG5cclxuICBwYWdlUXVlcnk6IEFCUC5QYWdlUXVlcnlQYXJhbXMgPSB7fTtcclxuXHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBtb2RhbEJ1c3kgPSBmYWxzZTtcclxuXHJcbiAgc29ydE9yZGVyID0gJyc7XHJcblxyXG4gIHNvcnRLZXkgPSAnJztcclxuXHJcbiAgZ2V0IHVzZVNoYXJlZERhdGFiYXNlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtLmdldCgndXNlU2hhcmVkRGF0YWJhc2UnKS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBjb25uZWN0aW9uU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q29ubmVjdGlvblN0cmluZ0Zvcm0uZ2V0KCdkZWZhdWx0Q29ubmVjdGlvblN0cmluZycpLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZCgndGVuYW50TW9kYWxUZW1wbGF0ZScsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIHRlbmFudE1vZGFsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2Nvbm5lY3Rpb25TdHJpbmdNb2RhbFRlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgY29ubmVjdGlvblN0cmluZ01vZGFsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGdldCBpc0Rpc2FibGVkU2F2ZUJ1dHRvbigpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5zZWxlY3RlZE1vZGFsQ29udGVudCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5zZWxlY3RlZE1vZGFsQ29udGVudC50eXBlID09PSAnc2F2ZUNvbm5TdHInICYmXHJcbiAgICAgIHRoaXMuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtICYmXHJcbiAgICAgIHRoaXMuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtLmludmFsaWRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRNb2RhbENvbnRlbnQudHlwZSA9PT0gJ3NhdmVUZW5hbnQnICYmXHJcbiAgICAgIHRoaXMudGVuYW50Rm9ybSAmJlxyXG4gICAgICB0aGlzLnRlbmFudEZvcm0uaW52YWxpZFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25WaXNpYmxlRmVhdHVyZXNDaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgIHRoaXMudmlzaWJsZUZlYXR1cmVzID0gdmFsdWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRlbmFudFNlcnZpY2U6IFRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXQoKTtcclxuICB9XHJcblxyXG4gIG9uU2VhcmNoKHZhbHVlKSB7XHJcbiAgICB0aGlzLnBhZ2VRdWVyeS5maWx0ZXIgPSB2YWx1ZTtcclxuICAgIHRoaXMuZ2V0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVRlbmFudEZvcm0oKSB7XHJcbiAgICB0aGlzLnRlbmFudEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgbmFtZTogW3RoaXMuc2VsZWN0ZWQubmFtZSB8fCAnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDI1NildXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVEZWZhdWx0Q29ubmVjdGlvblN0cmluZ0Zvcm0oKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRDb25uZWN0aW9uU3RyaW5nRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICB1c2VTaGFyZWREYXRhYmFzZTogdGhpcy5fdXNlU2hhcmVkRGF0YWJhc2UsXHJcbiAgICAgIGRlZmF1bHRDb25uZWN0aW9uU3RyaW5nOiBbdGhpcy5kZWZhdWx0Q29ubmVjdGlvblN0cmluZyB8fCAnJ10sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbCh0aXRsZTogc3RyaW5nLCB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgdHlwZTogJ3NhdmVDb25uU3RyJyB8ICdzYXZlVGVuYW50Jykge1xyXG4gICAgdGhpcy5zZWxlY3RlZE1vZGFsQ29udGVudCA9IHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHRlbXBsYXRlLFxyXG4gICAgICB0eXBlLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmlzTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uRWRpdENvbm5lY3Rpb25TdHJpbmcoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2gobmV3IEdldFRlbmFudEJ5SWQoaWQpKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBwbHVjaygnVGVuYW50TWFuYWdlbWVudFN0YXRlJywgJ3NlbGVjdGVkSXRlbScpLFxyXG4gICAgICAgIHN3aXRjaE1hcChzZWxlY3RlZCA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy50ZW5hbnRTZXJ2aWNlLmdldERlZmF1bHRDb25uZWN0aW9uU3RyaW5nKGlkKTtcclxuICAgICAgICB9KSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKGZldGNoZWRDb25uZWN0aW9uU3RyaW5nID0+IHtcclxuICAgICAgICB0aGlzLl91c2VTaGFyZWREYXRhYmFzZSA9IGZldGNoZWRDb25uZWN0aW9uU3RyaW5nID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmcgPSBmZXRjaGVkQ29ubmVjdGlvblN0cmluZyA/IGZldGNoZWRDb25uZWN0aW9uU3RyaW5nIDogJyc7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVEZWZhdWx0Q29ubmVjdGlvblN0cmluZ0Zvcm0oKTtcclxuICAgICAgICB0aGlzLm9wZW5Nb2RhbChcclxuICAgICAgICAgICdBYnBUZW5hbnRNYW5hZ2VtZW50OjpDb25uZWN0aW9uU3RyaW5ncycsXHJcbiAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdHJpbmdNb2RhbFRlbXBsYXRlLFxyXG4gICAgICAgICAgJ3NhdmVDb25uU3RyJyxcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZFRlbmFudCgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB7fSBhcyBBQlAuQmFzaWNJdGVtO1xyXG4gICAgdGhpcy5jcmVhdGVUZW5hbnRGb3JtKCk7XHJcbiAgICB0aGlzLm9wZW5Nb2RhbCgnQWJwVGVuYW50TWFuYWdlbWVudDo6TmV3VGVuYW50JywgdGhpcy50ZW5hbnRNb2RhbFRlbXBsYXRlLCAnc2F2ZVRlbmFudCcpO1xyXG4gIH1cclxuXHJcbiAgZWRpdFRlbmFudChpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN0b3JlXHJcbiAgICAgIC5kaXNwYXRjaChuZXcgR2V0VGVuYW50QnlJZChpZCkpXHJcbiAgICAgIC5waXBlKHBsdWNrKCdUZW5hbnRNYW5hZ2VtZW50U3RhdGUnLCAnc2VsZWN0ZWRJdGVtJykpXHJcbiAgICAgIC5zdWJzY3JpYmUoc2VsZWN0ZWQgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuICAgICAgICB0aGlzLmNyZWF0ZVRlbmFudEZvcm0oKTtcclxuICAgICAgICB0aGlzLm9wZW5Nb2RhbCgnQWJwVGVuYW50TWFuYWdlbWVudDo6RWRpdCcsIHRoaXMudGVuYW50TW9kYWxUZW1wbGF0ZSwgJ3NhdmVUZW5hbnQnKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlKCkge1xyXG4gICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzLnNlbGVjdGVkTW9kYWxDb250ZW50O1xyXG4gICAgaWYgKCF0eXBlKSByZXR1cm47XHJcbiAgICBpZiAodHlwZSA9PT0gJ3NhdmVUZW5hbnQnKSB0aGlzLnNhdmVUZW5hbnQoKTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzYXZlQ29ublN0cicpIHRoaXMuc2F2ZUNvbm5lY3Rpb25TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIHNhdmVDb25uZWN0aW9uU3RyaW5nKCkge1xyXG4gICAgaWYgKHRoaXMubW9kYWxCdXN5KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5tb2RhbEJ1c3kgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMudXNlU2hhcmVkRGF0YWJhc2UgfHwgKCF0aGlzLnVzZVNoYXJlZERhdGFiYXNlICYmICF0aGlzLmNvbm5lY3Rpb25TdHJpbmcpKSB7XHJcbiAgICAgIHRoaXMudGVuYW50U2VydmljZVxyXG4gICAgICAgIC5kZWxldGVEZWZhdWx0Q29ubmVjdGlvblN0cmluZyh0aGlzLnNlbGVjdGVkLmlkKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZSgxKSxcclxuICAgICAgICAgIGZpbmFsaXplKCgpID0+ICh0aGlzLm1vZGFsQnVzeSA9IGZhbHNlKSksXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50ZW5hbnRTZXJ2aWNlXHJcbiAgICAgICAgLnVwZGF0ZURlZmF1bHRDb25uZWN0aW9uU3RyaW5nKHtcclxuICAgICAgICAgIGlkOiB0aGlzLnNlbGVjdGVkLmlkLFxyXG4gICAgICAgICAgZGVmYXVsdENvbm5lY3Rpb25TdHJpbmc6IHRoaXMuY29ubmVjdGlvblN0cmluZyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZSgxKSxcclxuICAgICAgICAgIGZpbmFsaXplKCgpID0+ICh0aGlzLm1vZGFsQnVzeSA9IGZhbHNlKSksXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZVRlbmFudCgpIHtcclxuICAgIGlmICghdGhpcy50ZW5hbnRGb3JtLnZhbGlkIHx8IHRoaXMubW9kYWxCdXN5KSByZXR1cm47XHJcbiAgICB0aGlzLm1vZGFsQnVzeSA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2goXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5pZFxyXG4gICAgICAgICAgPyBuZXcgVXBkYXRlVGVuYW50KHsgLi4udGhpcy5zZWxlY3RlZCwgLi4udGhpcy50ZW5hbnRGb3JtLnZhbHVlLCBpZDogdGhpcy5zZWxlY3RlZC5pZCB9KVxyXG4gICAgICAgICAgOiBuZXcgQ3JlYXRlVGVuYW50KHRoaXMudGVuYW50Rm9ybS52YWx1ZSksXHJcbiAgICAgIClcclxuICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4gKHRoaXMubW9kYWxCdXN5ID0gZmFsc2UpKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2V0KCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlXHJcbiAgICAgIC53YXJuKFxyXG4gICAgICAgICdBYnBUZW5hbnRNYW5hZ2VtZW50OjpUZW5hbnREZWxldGlvbkNvbmZpcm1hdGlvbk1lc3NhZ2UnLFxyXG4gICAgICAgICdBYnBUZW5hbnRNYW5hZ2VtZW50OjpBcmVZb3VTdXJlJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXNzYWdlTG9jYWxpemF0aW9uUGFyYW1zOiBbbmFtZV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKChzdGF0dXM6IFRvYXN0ZXIuU3RhdHVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gVG9hc3Rlci5TdGF0dXMuY29uZmlybSkge1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlVGVuYW50KGlkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuZ2V0KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblBhZ2VDaGFuZ2UoZGF0YSkge1xyXG4gICAgdGhpcy5wYWdlUXVlcnkuc2tpcENvdW50ID0gZGF0YS5maXJzdDtcclxuICAgIHRoaXMucGFnZVF1ZXJ5Lm1heFJlc3VsdENvdW50ID0gZGF0YS5yb3dzO1xyXG5cclxuICAgIHRoaXMuZ2V0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQoKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2gobmV3IEdldFRlbmFudHModGhpcy5wYWdlUXVlcnkpKVxyXG4gICAgICAucGlwZShmaW5hbGl6ZSgoKSA9PiAodGhpcy5sb2FkaW5nID0gZmFsc2UpKSlcclxuICAgICAgLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgb25TaGFyZWREYXRhYmFzZUNoYW5nZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0Q29ubmVjdGlvblN0cmluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgJ2RlZmF1bHRDb25uZWN0aW9uU3RyaW5nJyxcclxuICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRDb25uZWN0aW9uU3RyaW5nKSB7XHJcbiAgICAgICAgICBkZWZhdWx0Q29ubmVjdGlvblN0cmluZy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==