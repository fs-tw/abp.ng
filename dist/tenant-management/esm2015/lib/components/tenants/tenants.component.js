import { __decorate, __metadata } from "tslib";
import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService, getPasswordValidators } from '@abp/ng.theme.shared';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, pluck, switchMap, take } from 'rxjs/operators';
import { CreateTenant, DeleteTenant, GetTenantById, GetTenants, UpdateTenant, } from '../../actions/tenant-management.actions';
import { TenantManagementService } from '../../services/tenant-management.service';
import { TenantManagementState } from '../../states/tenant-management.state';
let TenantsComponent = class TenantsComponent {
    constructor(list, confirmationService, tenantService, fb, store) {
        this.list = list;
        this.confirmationService = confirmationService;
        this.tenantService = tenantService;
        this.fb = fb;
        this.store = store;
        this.selectedModalContent = {};
        this.visibleFeatures = false;
        this.modalBusy = false;
        this.featureManagementKey = "FeatureManagement.FeatureManagementComponent" /* FeatureManagement */;
        this.onVisibleFeaturesChange = (value) => {
            this.visibleFeatures = value;
        };
    }
    get hasSelectedTenant() {
        return Boolean(this.selected.id);
    }
    get useSharedDatabase() {
        return this.defaultConnectionStringForm.get('useSharedDatabase').value;
    }
    get connectionString() {
        return this.defaultConnectionStringForm.get('defaultConnectionString').value;
    }
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
    ngOnInit() {
        this.hookToQuery();
    }
    createTenantForm() {
        const tenantForm = this.fb.group({
            name: [this.selected.name || '', [Validators.required, Validators.maxLength(256)]],
            adminEmailAddress: [null, [Validators.required, Validators.maxLength(256), Validators.email]],
            adminPassword: [null, [Validators.required, ...getPasswordValidators(this.store)]],
        });
        if (this.hasSelectedTenant) {
            tenantForm.removeControl('adminEmailAddress');
            tenantForm.removeControl('adminPassword');
        }
        this.tenantForm = tenantForm;
    }
    createDefaultConnectionStringForm() {
        this.defaultConnectionStringForm = this.fb.group({
            useSharedDatabase: this._useSharedDatabase,
            defaultConnectionString: [this.defaultConnectionString || ''],
        });
    }
    openModal(title, template, type) {
        this.selectedModalContent = {
            title,
            template,
            type,
        };
        this.isModalVisible = true;
    }
    onEditConnectionString(id) {
        this.store
            .dispatch(new GetTenantById(id))
            .pipe(pluck('TenantManagementState', 'selectedItem'), switchMap(selected => {
            this.selected = selected;
            return this.tenantService.getDefaultConnectionString(id);
        }))
            .subscribe(fetchedConnectionString => {
            this._useSharedDatabase = fetchedConnectionString ? false : true;
            this.defaultConnectionString = fetchedConnectionString ? fetchedConnectionString : '';
            this.createDefaultConnectionStringForm();
            this.openModal('AbpTenantManagement::ConnectionStrings', this.connectionStringModalTemplate, 'saveConnStr');
        });
    }
    addTenant() {
        this.selected = {};
        this.createTenantForm();
        this.openModal('AbpTenantManagement::NewTenant', this.tenantModalTemplate, 'saveTenant');
    }
    editTenant(id) {
        this.store
            .dispatch(new GetTenantById(id))
            .pipe(pluck('TenantManagementState', 'selectedItem'))
            .subscribe(selected => {
            this.selected = selected;
            this.createTenantForm();
            this.openModal('AbpTenantManagement::Edit', this.tenantModalTemplate, 'saveTenant');
        });
    }
    save() {
        const { type } = this.selectedModalContent;
        if (!type)
            return;
        if (type === 'saveTenant')
            this.saveTenant();
        else if (type === 'saveConnStr')
            this.saveConnectionString();
    }
    saveConnectionString() {
        if (this.modalBusy)
            return;
        this.modalBusy = true;
        if (this.useSharedDatabase || (!this.useSharedDatabase && !this.connectionString)) {
            this.tenantService
                .deleteDefaultConnectionString(this.selected.id)
                .pipe(take(1), finalize(() => (this.modalBusy = false)))
                .subscribe(() => {
                this.isModalVisible = false;
            });
        }
        else {
            this.tenantService
                .updateDefaultConnectionString({
                id: this.selected.id,
                defaultConnectionString: this.connectionString,
            })
                .pipe(take(1), finalize(() => (this.modalBusy = false)))
                .subscribe(() => {
                this.isModalVisible = false;
            });
        }
    }
    saveTenant() {
        if (!this.tenantForm.valid || this.modalBusy)
            return;
        this.modalBusy = true;
        this.store
            .dispatch(this.selected.id
            ? new UpdateTenant(Object.assign(Object.assign(Object.assign({}, this.selected), this.tenantForm.value), { id: this.selected.id }))
            : new CreateTenant(this.tenantForm.value))
            .pipe(finalize(() => (this.modalBusy = false)))
            .subscribe(() => {
            this.isModalVisible = false;
            this.list.get();
        });
    }
    delete(id, name) {
        this.confirmationService
            .warn('AbpTenantManagement::TenantDeletionConfirmationMessage', 'AbpTenantManagement::AreYouSure', {
            messageLocalizationParams: [name],
        })
            .subscribe((status) => {
            if (status === Confirmation.Status.confirm) {
                this.store.dispatch(new DeleteTenant(id)).subscribe(() => this.list.get());
            }
        });
    }
    hookToQuery() {
        this.list.hookToQuery(query => this.store.dispatch(new GetTenants(query))).subscribe();
    }
    onSharedDatabaseChange(value) {
        if (!value) {
            setTimeout(() => {
                const defaultConnectionString = document.getElementById('defaultConnectionString');
                if (defaultConnectionString) {
                    defaultConnectionString.focus();
                }
            }, 0);
        }
    }
    openFeaturesModal(providerKey) {
        this.providerKey = providerKey;
        setTimeout(() => {
            this.visibleFeatures = true;
        }, 0);
    }
    sort(data) {
        const { prop, dir } = data.sorts[0];
        this.list.sortKey = prop;
        this.list.sortOrder = dir;
    }
};
__decorate([
    Select(TenantManagementState.get),
    __metadata("design:type", Observable)
], TenantsComponent.prototype, "data$", void 0);
__decorate([
    Select(TenantManagementState.getTenantsTotalCount),
    __metadata("design:type", Observable)
], TenantsComponent.prototype, "totalCount$", void 0);
__decorate([
    ViewChild('tenantModalTemplate'),
    __metadata("design:type", TemplateRef)
], TenantsComponent.prototype, "tenantModalTemplate", void 0);
__decorate([
    ViewChild('connectionStringModalTemplate'),
    __metadata("design:type", TemplateRef)
], TenantsComponent.prototype, "connectionStringModalTemplate", void 0);
TenantsComponent = __decorate([
    Component({
        selector: 'abp-tenants',
        template: "<div id=\"wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpTenantManagement::Tenants' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpTenantManagement.Tenants.Create'\"\r\n          id=\"create-tenants\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"addTenant()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpTenantManagement::NewTenant' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <div class=\"input-group\">\r\n        <input\r\n          type=\"search\"\r\n          class=\"form-control\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          [(ngModel)]=\"list.filter\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <ngx-datatable [rows]=\"data$ | async\" [count]=\"totalCount$ | async\" [list]=\"list\" default>\r\n      <ngx-datatable-column\r\n        [name]=\"'AbpTenantManagement::Actions' | abpLocalization\"\r\n        [maxWidth]=\"150\"\r\n        [sortable]=\"false\"\r\n      >\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n            <button\r\n              class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n              data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\"\r\n              ngbDropdownToggle\r\n            >\r\n              <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpTenantManagement::Actions' | abpLocalization }}\r\n            </button>\r\n            <div ngbDropdownMenu>\r\n              <button\r\n                *abpPermission=\"'AbpTenantManagement.Tenants.Update'\"\r\n                ngbDropdownItem\r\n                (click)=\"editTenant(row.id)\"\r\n              >\r\n                {{ 'AbpTenantManagement::Edit' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *abpPermission=\"'AbpTenantManagement.Tenants.ManageConnectionStrings'\"\r\n                ngbDropdownItem\r\n                (click)=\"onEditConnectionString(row.id)\"\r\n              >\r\n                {{ 'AbpTenantManagement::Permission:ManageConnectionStrings' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *abpPermission=\"'AbpTenantManagement.Tenants.ManageFeatures'\"\r\n                ngbDropdownItem\r\n                (click)=\"openFeaturesModal(row.id)\"\r\n              >\r\n                {{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *abpPermission=\"'AbpTenantManagement.Tenants.Delete'\"\r\n                ngbDropdownItem\r\n                (click)=\"delete(row.id, row.name)\"\r\n              >\r\n                {{ 'AbpTenantManagement::Delete' | abpLocalization }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column\r\n        [name]=\"'AbpTenantManagement::TenantName' | abpLocalization\"\r\n        prop=\"name\"\r\n      ></ngx-datatable-column>\r\n    </ngx-datatable>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ selectedModalContent.title | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-container *ngTemplateOutlet=\"selectedModalContent?.template\"></ng-container>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"isDisabledSaveButton\">{{\r\n      'AbpTenantManagement::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<ng-template #tenantModalTemplate>\r\n  <form [formGroup]=\"tenantForm\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <div class=\"mt-2\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">{{ 'AbpTenantManagement::TenantName' | abpLocalization }}</label>\r\n        <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" autofocus />\r\n      </div>\r\n      <div class=\"form-group\" *ngIf=\"tenantForm.controls.adminEmailAddress\">\r\n        <label for=\"name\">{{\r\n          'AbpTenantManagement::DisplayName:AdminEmailAddress' | abpLocalization\r\n        }}</label>\r\n        <input\r\n          autocomplete=\"email\"\r\n          type=\"email\"\r\n          id=\"admin-email-address\"\r\n          class=\"form-control\"\r\n          formControlName=\"adminEmailAddress\"\r\n        />\r\n      </div>\r\n      <div class=\"form-group\" *ngIf=\"tenantForm.controls.adminPassword\">\r\n        <label for=\"name\">{{\r\n          'AbpTenantManagement::DisplayName:AdminPassword' | abpLocalization\r\n        }}</label>\r\n        <input\r\n          autocomplete=\"new-password\"\r\n          type=\"password\"\r\n          id=\"admin-password\"\r\n          class=\"form-control\"\r\n          formControlName=\"adminPassword\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #connectionStringModalTemplate>\r\n  <form [formGroup]=\"defaultConnectionStringForm\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <div class=\"form-group\">\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          id=\"useSharedDatabase\"\r\n          type=\"checkbox\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"useSharedDatabase\"\r\n          autofocus\r\n          (ngModelChange)=\"onSharedDatabaseChange($event)\"\r\n        />\r\n        <label for=\"useSharedDatabase\" class=\"custom-control-label\">{{\r\n          'AbpTenantManagement::DisplayName:UseSharedDatabase' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"!useSharedDatabase\">\r\n      <label for=\"defaultConnectionString\">{{\r\n        'AbpTenantManagement::DisplayName:DefaultConnectionString' | abpLocalization\r\n      }}</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"defaultConnectionString\"\r\n        class=\"form-control\"\r\n        formControlName=\"defaultConnectionString\"\r\n      />\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<abp-feature-management\r\n  *abpReplaceableTemplate=\"{\r\n    inputs: {\r\n      providerName: { value: 'T' },\r\n      providerKey: { value: providerKey },\r\n      visible: { value: visibleFeatures, twoWay: true }\r\n    },\r\n    outputs: { visibleChange: onVisibleFeaturesChange },\r\n    componentKey: featureManagementKey\r\n  }\"\r\n  [(visible)]=\"visibleFeatures\"\r\n  providerName=\"T\"\r\n  [providerKey]=\"providerKey\"\r\n>\r\n</abp-feature-management>\r\n",
        providers: [ListService]
    }),
    __metadata("design:paramtypes", [ListService,
        ConfirmationService,
        TenantManagementService,
        FormBuilder,
        Store])
], TenantsComponent);
export { TenantsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90ZW5hbnQtbWFuYWdlbWVudC9zcmMvbGliL2NvbXBvbmVudHMvdGVuYW50cy90ZW5hbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFPLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEcsT0FBTyxFQUFFLFNBQVMsRUFBVSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFlBQVksRUFDWixZQUFZLEVBQ1osYUFBYSxFQUNiLFVBQVUsRUFDVixZQUFZLEdBQ2IsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQWE3RSxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQXVFM0IsWUFDa0IsSUFBaUIsRUFDekIsbUJBQXdDLEVBQ3hDLGFBQXNDLEVBQ3RDLEVBQWUsRUFDZixLQUFZO1FBSkosU0FBSSxHQUFKLElBQUksQ0FBYTtRQUN6Qix3QkFBbUIsR0FBbkIsbUJBQW1C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bSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgZUZlYXR1cmVNYW5hZ2VtZW50Q29tcG9uZW50cyB9IGZyb20gJ0BhYnAvbmcuZmVhdHVyZS1tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uLCBDb25maXJtYXRpb25TZXJ2aWNlLCBnZXRQYXNzd29yZFZhbGlkYXRvcnMgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmluYWxpemUsIHBsdWNrLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7XHJcbiAgQ3JlYXRlVGVuYW50LFxyXG4gIERlbGV0ZVRlbmFudCxcclxuICBHZXRUZW5hbnRCeUlkLFxyXG4gIEdldFRlbmFudHMsXHJcbiAgVXBkYXRlVGVuYW50LFxyXG59IGZyb20gJy4uLy4uL2FjdGlvbnMvdGVuYW50LW1hbmFnZW1lbnQuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVuYW50LW1hbmFnZW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFRlbmFudE1hbmFnZW1lbnRTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlcy90ZW5hbnQtbWFuYWdlbWVudC5zdGF0ZSc7XHJcblxyXG5pbnRlcmZhY2UgU2VsZWN0ZWRNb2RhbENvbnRlbnQge1xyXG4gIHR5cGU6ICdzYXZlQ29ublN0cicgfCAnc2F2ZVRlbmFudCc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtdGVuYW50cycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RlbmFudHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW0xpc3RTZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbmFudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBTZWxlY3QoVGVuYW50TWFuYWdlbWVudFN0YXRlLmdldClcclxuICBkYXRhJDogT2JzZXJ2YWJsZTxBQlAuQmFzaWNJdGVtW10+O1xyXG5cclxuICBAU2VsZWN0KFRlbmFudE1hbmFnZW1lbnRTdGF0ZS5nZXRUZW5hbnRzVG90YWxDb3VudClcclxuICB0b3RhbENvdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG5cclxuICBzZWxlY3RlZDogQUJQLkJhc2ljSXRlbTtcclxuXHJcbiAgdGVuYW50Rm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBkZWZhdWx0Q29ubmVjdGlvblN0cmluZ0Zvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgZGVmYXVsdENvbm5lY3Rpb25TdHJpbmc6IHN0cmluZztcclxuXHJcbiAgaXNNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gIHNlbGVjdGVkTW9kYWxDb250ZW50ID0ge30gYXMgU2VsZWN0ZWRNb2RhbENvbnRlbnQ7XHJcblxyXG4gIHZpc2libGVGZWF0dXJlcyA9IGZhbHNlO1xyXG5cclxuICBwcm92aWRlcktleTogc3RyaW5nO1xyXG5cclxuICBfdXNlU2hhcmVkRGF0YWJhc2U6IGJvb2xlYW47XHJcblxyXG4gIG1vZGFsQnVzeSA9IGZhbHNlO1xyXG5cclxuICBmZWF0dXJlTWFuYWdlbWVudEtleSA9IGVGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudHMuRmVhdHVyZU1hbmFnZW1lbnQ7XHJcblxyXG4gIGdldCBoYXNTZWxlY3RlZFRlbmFudCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBCb29sZWFuKHRoaXMuc2VsZWN0ZWQuaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVzZVNoYXJlZERhdGFiYXNlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtLmdldCgndXNlU2hhcmVkRGF0YWJhc2UnKS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBjb25uZWN0aW9uU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q29ubmVjdGlvblN0cmluZ0Zvcm0uZ2V0KCdkZWZhdWx0Q29ubmVjdGlvblN0cmluZycpLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZCgndGVuYW50TW9kYWxUZW1wbGF0ZScpXHJcbiAgdGVuYW50TW9kYWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29ubmVjdGlvblN0cmluZ01vZGFsVGVtcGxhdGUnKVxyXG4gIGNvbm5lY3Rpb25TdHJpbmdNb2RhbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBnZXQgaXNEaXNhYmxlZFNhdmVCdXR0b24oKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWRNb2RhbENvbnRlbnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRNb2RhbENvbnRlbnQudHlwZSA9PT0gJ3NhdmVDb25uU3RyJyAmJlxyXG4gICAgICB0aGlzLmRlZmF1bHRDb25uZWN0aW9uU3RyaW5nRm9ybSAmJlxyXG4gICAgICB0aGlzLmRlZmF1bHRDb25uZWN0aW9uU3RyaW5nRm9ybS5pbnZhbGlkXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICB0aGlzLnNlbGVjdGVkTW9kYWxDb250ZW50LnR5cGUgPT09ICdzYXZlVGVuYW50JyAmJlxyXG4gICAgICB0aGlzLnRlbmFudEZvcm0gJiZcclxuICAgICAgdGhpcy50ZW5hbnRGb3JtLmludmFsaWRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVmlzaWJsZUZlYXR1cmVzQ2hhbmdlID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XHJcbiAgICB0aGlzLnZpc2libGVGZWF0dXJlcyA9IHZhbHVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJlYWRvbmx5IGxpc3Q6IExpc3RTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb25maXJtYXRpb25TZXJ2aWNlOiBDb25maXJtYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0ZW5hbnRTZXJ2aWNlOiBUZW5hbnRNYW5hZ2VtZW50U2VydmljZSxcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaG9va1RvUXVlcnkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlVGVuYW50Rm9ybSgpIHtcclxuICAgIGNvbnN0IHRlbmFudEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgbmFtZTogW3RoaXMuc2VsZWN0ZWQubmFtZSB8fCAnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDI1NildXSxcclxuICAgICAgYWRtaW5FbWFpbEFkZHJlc3M6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMjU2KSwgVmFsaWRhdG9ycy5lbWFpbF1dLFxyXG4gICAgICBhZG1pblBhc3N3b3JkOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIC4uLmdldFBhc3N3b3JkVmFsaWRhdG9ycyh0aGlzLnN0b3JlKV1dLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaGFzU2VsZWN0ZWRUZW5hbnQpIHtcclxuICAgICAgdGVuYW50Rm9ybS5yZW1vdmVDb250cm9sKCdhZG1pbkVtYWlsQWRkcmVzcycpO1xyXG4gICAgICB0ZW5hbnRGb3JtLnJlbW92ZUNvbnRyb2woJ2FkbWluUGFzc3dvcmQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRlbmFudEZvcm0gPSB0ZW5hbnRGb3JtO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVEZWZhdWx0Q29ubmVjdGlvblN0cmluZ0Zvcm0oKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRDb25uZWN0aW9uU3RyaW5nRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICB1c2VTaGFyZWREYXRhYmFzZTogdGhpcy5fdXNlU2hhcmVkRGF0YWJhc2UsXHJcbiAgICAgIGRlZmF1bHRDb25uZWN0aW9uU3RyaW5nOiBbdGhpcy5kZWZhdWx0Q29ubmVjdGlvblN0cmluZyB8fCAnJ10sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbCh0aXRsZTogc3RyaW5nLCB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgdHlwZTogJ3NhdmVDb25uU3RyJyB8ICdzYXZlVGVuYW50Jykge1xyXG4gICAgdGhpcy5zZWxlY3RlZE1vZGFsQ29udGVudCA9IHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHRlbXBsYXRlLFxyXG4gICAgICB0eXBlLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmlzTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uRWRpdENvbm5lY3Rpb25TdHJpbmcoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2gobmV3IEdldFRlbmFudEJ5SWQoaWQpKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBwbHVjaygnVGVuYW50TWFuYWdlbWVudFN0YXRlJywgJ3NlbGVjdGVkSXRlbScpLFxyXG4gICAgICAgIHN3aXRjaE1hcChzZWxlY3RlZCA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy50ZW5hbnRTZXJ2aWNlLmdldERlZmF1bHRDb25uZWN0aW9uU3RyaW5nKGlkKTtcclxuICAgICAgICB9KSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKGZldGNoZWRDb25uZWN0aW9uU3RyaW5nID0+IHtcclxuICAgICAgICB0aGlzLl91c2VTaGFyZWREYXRhYmFzZSA9IGZldGNoZWRDb25uZWN0aW9uU3RyaW5nID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmcgPSBmZXRjaGVkQ29ubmVjdGlvblN0cmluZyA/IGZldGNoZWRDb25uZWN0aW9uU3RyaW5nIDogJyc7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVEZWZhdWx0Q29ubmVjdGlvblN0cmluZ0Zvcm0oKTtcclxuICAgICAgICB0aGlzLm9wZW5Nb2RhbChcclxuICAgICAgICAgICdBYnBUZW5hbnRNYW5hZ2VtZW50OjpDb25uZWN0aW9uU3RyaW5ncycsXHJcbiAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdHJpbmdNb2RhbFRlbXBsYXRlLFxyXG4gICAgICAgICAgJ3NhdmVDb25uU3RyJyxcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZFRlbmFudCgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB7fSBhcyBBQlAuQmFzaWNJdGVtO1xyXG4gICAgdGhpcy5jcmVhdGVUZW5hbnRGb3JtKCk7XHJcbiAgICB0aGlzLm9wZW5Nb2RhbCgnQWJwVGVuYW50TWFuYWdlbWVudDo6TmV3VGVuYW50JywgdGhpcy50ZW5hbnRNb2RhbFRlbXBsYXRlLCAnc2F2ZVRlbmFudCcpO1xyXG4gIH1cclxuXHJcbiAgZWRpdFRlbmFudChpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN0b3JlXHJcbiAgICAgIC5kaXNwYXRjaChuZXcgR2V0VGVuYW50QnlJZChpZCkpXHJcbiAgICAgIC5waXBlKHBsdWNrKCdUZW5hbnRNYW5hZ2VtZW50U3RhdGUnLCAnc2VsZWN0ZWRJdGVtJykpXHJcbiAgICAgIC5zdWJzY3JpYmUoc2VsZWN0ZWQgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuICAgICAgICB0aGlzLmNyZWF0ZVRlbmFudEZvcm0oKTtcclxuICAgICAgICB0aGlzLm9wZW5Nb2RhbCgnQWJwVGVuYW50TWFuYWdlbWVudDo6RWRpdCcsIHRoaXMudGVuYW50TW9kYWxUZW1wbGF0ZSwgJ3NhdmVUZW5hbnQnKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlKCkge1xyXG4gICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzLnNlbGVjdGVkTW9kYWxDb250ZW50O1xyXG4gICAgaWYgKCF0eXBlKSByZXR1cm47XHJcbiAgICBpZiAodHlwZSA9PT0gJ3NhdmVUZW5hbnQnKSB0aGlzLnNhdmVUZW5hbnQoKTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzYXZlQ29ublN0cicpIHRoaXMuc2F2ZUNvbm5lY3Rpb25TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIHNhdmVDb25uZWN0aW9uU3RyaW5nKCkge1xyXG4gICAgaWYgKHRoaXMubW9kYWxCdXN5KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5tb2RhbEJ1c3kgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMudXNlU2hhcmVkRGF0YWJhc2UgfHwgKCF0aGlzLnVzZVNoYXJlZERhdGFiYXNlICYmICF0aGlzLmNvbm5lY3Rpb25TdHJpbmcpKSB7XHJcbiAgICAgIHRoaXMudGVuYW50U2VydmljZVxyXG4gICAgICAgIC5kZWxldGVEZWZhdWx0Q29ubmVjdGlvblN0cmluZyh0aGlzLnNlbGVjdGVkLmlkKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZSgxKSxcclxuICAgICAgICAgIGZpbmFsaXplKCgpID0+ICh0aGlzLm1vZGFsQnVzeSA9IGZhbHNlKSksXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50ZW5hbnRTZXJ2aWNlXHJcbiAgICAgICAgLnVwZGF0ZURlZmF1bHRDb25uZWN0aW9uU3RyaW5nKHtcclxuICAgICAgICAgIGlkOiB0aGlzLnNlbGVjdGVkLmlkLFxyXG4gICAgICAgICAgZGVmYXVsdENvbm5lY3Rpb25TdHJpbmc6IHRoaXMuY29ubmVjdGlvblN0cmluZyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZSgxKSxcclxuICAgICAgICAgIGZpbmFsaXplKCgpID0+ICh0aGlzLm1vZGFsQnVzeSA9IGZhbHNlKSksXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZVRlbmFudCgpIHtcclxuICAgIGlmICghdGhpcy50ZW5hbnRGb3JtLnZhbGlkIHx8IHRoaXMubW9kYWxCdXN5KSByZXR1cm47XHJcbiAgICB0aGlzLm1vZGFsQnVzeSA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2goXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5pZFxyXG4gICAgICAgICAgPyBuZXcgVXBkYXRlVGVuYW50KHsgLi4udGhpcy5zZWxlY3RlZCwgLi4udGhpcy50ZW5hbnRGb3JtLnZhbHVlLCBpZDogdGhpcy5zZWxlY3RlZC5pZCB9KVxyXG4gICAgICAgICAgOiBuZXcgQ3JlYXRlVGVuYW50KHRoaXMudGVuYW50Rm9ybS52YWx1ZSksXHJcbiAgICAgIClcclxuICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4gKHRoaXMubW9kYWxCdXN5ID0gZmFsc2UpKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGlzdC5nZXQoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2VcclxuICAgICAgLndhcm4oXHJcbiAgICAgICAgJ0FicFRlbmFudE1hbmFnZW1lbnQ6OlRlbmFudERlbGV0aW9uQ29uZmlybWF0aW9uTWVzc2FnZScsXHJcbiAgICAgICAgJ0FicFRlbmFudE1hbmFnZW1lbnQ6OkFyZVlvdVN1cmUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1lc3NhZ2VMb2NhbGl6YXRpb25QYXJhbXM6IFtuYW1lXSxcclxuICAgICAgICB9LFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKHN0YXR1czogQ29uZmlybWF0aW9uLlN0YXR1cykgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IENvbmZpcm1hdGlvbi5TdGF0dXMuY29uZmlybSkge1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlVGVuYW50KGlkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMubGlzdC5nZXQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGhvb2tUb1F1ZXJ5KCkge1xyXG4gICAgdGhpcy5saXN0Lmhvb2tUb1F1ZXJ5KHF1ZXJ5ID0+IHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFRlbmFudHMocXVlcnkpKSkuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBvblNoYXJlZERhdGFiYXNlQ2hhbmdlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRDb25uZWN0aW9uU3RyaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAnZGVmYXVsdENvbm5lY3Rpb25TdHJpbmcnLFxyXG4gICAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBpZiAoZGVmYXVsdENvbm5lY3Rpb25TdHJpbmcpIHtcclxuICAgICAgICAgIGRlZmF1bHRDb25uZWN0aW9uU3RyaW5nLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5GZWF0dXJlc01vZGFsKHByb3ZpZGVyS2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMucHJvdmlkZXJLZXkgPSBwcm92aWRlcktleTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnZpc2libGVGZWF0dXJlcyA9IHRydWU7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIHNvcnQoZGF0YSkge1xyXG4gICAgY29uc3QgeyBwcm9wLCBkaXIgfSA9IGRhdGEuc29ydHNbMF07XHJcbiAgICB0aGlzLmxpc3Quc29ydEtleSA9IHByb3A7XHJcbiAgICB0aGlzLmxpc3Quc29ydE9yZGVyID0gZGlyO1xyXG4gIH1cclxufVxyXG4iXX0=