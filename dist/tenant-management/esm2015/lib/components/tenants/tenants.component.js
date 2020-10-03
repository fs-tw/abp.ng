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
export class TenantsComponent {
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
}
TenantsComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-tenants',
                template: "<div id=\"wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpTenantManagement::Tenants' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'FeatureManagement.ManageHostFeatures'\"\r\n          id=\"manage-host-features\"\r\n          class=\"btn btn-primary mr-1\"\r\n          type=\"button\"\r\n          (click)=\"openFeaturesModal(null)\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpTenantManagement::ManageHostFeatures' | abpLocalization }}</span>\r\n        </button>\r\n        <button\r\n          *abpPermission=\"'AbpTenantManagement.Tenants.Create'\"\r\n          id=\"create-tenants\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"addTenant()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpTenantManagement::NewTenant' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <div class=\"input-group\">\r\n        <input\r\n          type=\"search\"\r\n          class=\"form-control\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          [(ngModel)]=\"list.filter\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <ngx-datatable [rows]=\"data$ | async\" [count]=\"totalCount$ | async\" [list]=\"list\" default>\r\n      <ngx-datatable-column\r\n        [name]=\"'AbpTenantManagement::Actions' | abpLocalization\"\r\n        [maxWidth]=\"150\"\r\n        [sortable]=\"false\"\r\n      >\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n            <button\r\n              class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n              data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\"\r\n              ngbDropdownToggle\r\n            >\r\n              <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpTenantManagement::Actions' | abpLocalization }}\r\n            </button>\r\n            <div ngbDropdownMenu>\r\n              <button\r\n                *abpPermission=\"'AbpTenantManagement.Tenants.Update'\"\r\n                ngbDropdownItem\r\n                (click)=\"editTenant(row.id)\"\r\n              >\r\n                {{ 'AbpTenantManagement::Edit' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *abpPermission=\"'AbpTenantManagement.Tenants.ManageConnectionStrings'\"\r\n                ngbDropdownItem\r\n                (click)=\"onEditConnectionString(row.id)\"\r\n              >\r\n                {{ 'AbpTenantManagement::Permission:ManageConnectionStrings' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *abpPermission=\"'AbpTenantManagement.Tenants.ManageFeatures'\"\r\n                ngbDropdownItem\r\n                (click)=\"openFeaturesModal(row.id)\"\r\n              >\r\n                {{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *abpPermission=\"'AbpTenantManagement.Tenants.Delete'\"\r\n                ngbDropdownItem\r\n                (click)=\"delete(row.id, row.name)\"\r\n              >\r\n                {{ 'AbpTenantManagement::Delete' | abpLocalization }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column\r\n        [name]=\"'AbpTenantManagement::TenantName' | abpLocalization\"\r\n        prop=\"name\"\r\n      ></ngx-datatable-column>\r\n    </ngx-datatable>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ selectedModalContent.title | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-container *ngTemplateOutlet=\"selectedModalContent?.template\"></ng-container>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"isDisabledSaveButton\">{{\r\n      'AbpTenantManagement::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<ng-template #tenantModalTemplate>\r\n  <form [formGroup]=\"tenantForm\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <div class=\"mt-2\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">{{ 'AbpTenantManagement::TenantName' | abpLocalization }}</label>\r\n        <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" autofocus />\r\n      </div>\r\n      <div class=\"form-group\" *ngIf=\"tenantForm.controls.adminEmailAddress\">\r\n        <label for=\"name\">{{\r\n          'AbpTenantManagement::DisplayName:AdminEmailAddress' | abpLocalization\r\n        }}</label>\r\n        <input\r\n          autocomplete=\"email\"\r\n          type=\"email\"\r\n          id=\"admin-email-address\"\r\n          class=\"form-control\"\r\n          formControlName=\"adminEmailAddress\"\r\n        />\r\n      </div>\r\n      <div class=\"form-group\" *ngIf=\"tenantForm.controls.adminPassword\">\r\n        <label for=\"name\">{{\r\n          'AbpTenantManagement::DisplayName:AdminPassword' | abpLocalization\r\n        }}</label>\r\n        <input\r\n          autocomplete=\"new-password\"\r\n          type=\"password\"\r\n          id=\"admin-password\"\r\n          class=\"form-control\"\r\n          formControlName=\"adminPassword\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #connectionStringModalTemplate>\r\n  <form [formGroup]=\"defaultConnectionStringForm\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <div class=\"form-group\">\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          id=\"useSharedDatabase\"\r\n          type=\"checkbox\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"useSharedDatabase\"\r\n          autofocus\r\n          (ngModelChange)=\"onSharedDatabaseChange($event)\"\r\n        />\r\n        <label for=\"useSharedDatabase\" class=\"custom-control-label\">{{\r\n          'AbpTenantManagement::DisplayName:UseSharedDatabase' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"!useSharedDatabase\">\r\n      <label for=\"defaultConnectionString\">{{\r\n        'AbpTenantManagement::DisplayName:DefaultConnectionString' | abpLocalization\r\n      }}</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"defaultConnectionString\"\r\n        class=\"form-control\"\r\n        formControlName=\"defaultConnectionString\"\r\n      />\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<abp-feature-management\r\n  *abpReplaceableTemplate=\"{\r\n    inputs: {\r\n      providerName: { value: 'T' },\r\n      providerKey: { value: providerKey },\r\n      visible: { value: visibleFeatures, twoWay: true }\r\n    },\r\n    outputs: { visibleChange: onVisibleFeaturesChange },\r\n    componentKey: featureManagementKey\r\n  }\"\r\n  [(visible)]=\"visibleFeatures\"\r\n  providerName=\"T\"\r\n  [providerKey]=\"providerKey\"\r\n>\r\n</abp-feature-management>\r\n",
                providers: [ListService]
            },] }
];
TenantsComponent.ctorParameters = () => [
    { type: ListService },
    { type: ConfirmationService },
    { type: TenantManagementService },
    { type: FormBuilder },
    { type: Store }
];
TenantsComponent.propDecorators = {
    tenantModalTemplate: [{ type: ViewChild, args: ['tenantModalTemplate',] }],
    connectionStringModalTemplate: [{ type: ViewChild, args: ['connectionStringModalTemplate',] }]
};
__decorate([
    Select(TenantManagementState.get),
    __metadata("design:type", Observable)
], TenantsComponent.prototype, "data$", void 0);
__decorate([
    Select(TenantManagementState.getTenantsTotalCount),
    __metadata("design:type", Observable)
], TenantsComponent.prototype, "totalCount$", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90ZW5hbnQtbWFuYWdlbWVudC9zcmMvbGliL2NvbXBvbmVudHMvdGVuYW50cy90ZW5hbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFPLFdBQVcsRUFBa0IsTUFBTSxjQUFjLENBQUM7QUFFaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hHLE9BQU8sRUFBRSxTQUFTLEVBQVUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCxZQUFZLEVBQ1osWUFBWSxFQUNaLGFBQWEsRUFDYixVQUFVLEVBQ1YsWUFBWSxHQUNiLE1BQU0seUNBQXlDLENBQUM7QUFFakQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFhN0UsTUFBTSxPQUFPLGdCQUFnQjtJQXVFM0IsWUFDa0IsSUFBa0MsRUFDMUMsbUJBQXdDLEVBQ3hDLGFBQXNDLEVBQ3RDLEVBQWUsRUFDZixLQUFZO1FBSkosU0FBSSxHQUFKLElBQUksQ0FBOEI7UUFDMUMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQU87UUEzRHRCLHlCQUFvQixHQUFHLEVBQTBCLENBQUM7UUFFbEQsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFNeEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQix5QkFBb0IsMEVBQWtEO1FBd0N0RSw0QkFBdUIsR0FBRyxDQUFDLEtBQWMsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUMsQ0FBQztJQVFDLENBQUM7SUFoREosSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDL0UsQ0FBQztJQVFELElBQUksb0JBQW9CO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFFN0MsSUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxLQUFLLGFBQWE7WUFDaEQsSUFBSSxDQUFDLDJCQUEyQjtZQUNoQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxFQUN4QztZQUNBLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEtBQUssWUFBWTtZQUMvQyxJQUFJLENBQUMsVUFBVTtZQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUN2QjtZQUNBLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBY0QsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLGlCQUFpQixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3RixhQUFhLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDbkYsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsVUFBVSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQzlDLFVBQVUsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRU8saUNBQWlDO1FBQ3ZDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMvQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzFDLHVCQUF1QixFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixJQUFJLEVBQUUsQ0FBQztTQUM5RCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWEsRUFBRSxRQUEwQixFQUFFLElBQWtDO1FBQ3JGLElBQUksQ0FBQyxvQkFBb0IsR0FBRztZQUMxQixLQUFLO1lBQ0wsUUFBUTtZQUNSLElBQUk7U0FDTCxDQUFDO1FBRUYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELHNCQUFzQixDQUFDLEVBQVU7UUFDL0IsSUFBSSxDQUFDLEtBQUs7YUFDUCxRQUFRLENBQUMsSUFBSSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDL0IsSUFBSSxDQUNILEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxjQUFjLENBQUMsRUFDOUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakUsSUFBSSxDQUFDLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3RGLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxTQUFTLENBQ1osd0NBQXdDLEVBQ3hDLElBQUksQ0FBQyw2QkFBNkIsRUFDbEMsYUFBYSxDQUNkLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFlLENBQUM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQ0FBZ0MsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELFVBQVUsQ0FBQyxFQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLO2FBQ1AsUUFBUSxDQUFDLElBQUksYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDcEQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3RGLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixJQUFJLElBQUksS0FBSyxZQUFZO1lBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3hDLElBQUksSUFBSSxLQUFLLGFBQWE7WUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBRTNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUNqRixJQUFJLENBQUMsYUFBYTtpQkFDZiw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDL0MsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQ3pDO2lCQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWE7aUJBQ2YsNkJBQTZCLENBQUM7Z0JBQzdCLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3BCLHVCQUF1QixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7YUFDL0MsQ0FBQztpQkFDRCxJQUFJLENBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FDekM7aUJBQ0EsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0gsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQ3JELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLO2FBQ1AsUUFBUSxDQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNkLENBQUMsQ0FBQyxJQUFJLFlBQVksK0NBQU0sSUFBSSxDQUFDLFFBQVEsR0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUc7WUFDeEYsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQzVDO2FBQ0EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUM5QyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxNQUFNLENBQUMsRUFBVSxFQUFFLElBQVk7UUFDN0IsSUFBSSxDQUFDLG1CQUFtQjthQUNyQixJQUFJLENBQ0gsd0RBQXdELEVBQ3hELGlDQUFpQyxFQUNqQztZQUNFLHlCQUF5QixFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ2xDLENBQ0Y7YUFDQSxTQUFTLENBQUMsQ0FBQyxNQUEyQixFQUFFLEVBQUU7WUFDekMsSUFBSSxNQUFNLEtBQUssWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUM1RTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN6RixDQUFDO0lBRUQsc0JBQXNCLENBQUMsS0FBYztRQUNuQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxNQUFNLHVCQUF1QixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQ3JELHlCQUF5QixDQUNOLENBQUM7Z0JBQ3RCLElBQUksdUJBQXVCLEVBQUU7b0JBQzNCLHVCQUF1QixDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNqQztZQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNQO0lBQ0gsQ0FBQztJQUVELGlCQUFpQixDQUFDLFdBQW1CO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsSUFBSSxDQUFDLElBQUk7UUFDUCxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUM1QixDQUFDOzs7WUFqUUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qix1bFBBQXVDO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDekI7OztZQTdCYSxXQUFXO1lBRUYsbUJBQW1CO1lBY2pDLHVCQUF1QjtZQVp2QixXQUFXO1lBQ0gsS0FBSzs7O2tDQWtFbkIsU0FBUyxTQUFDLHFCQUFxQjs0Q0FHL0IsU0FBUyxTQUFDLCtCQUErQjs7QUExQzFDO0lBREMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQzs4QkFDM0IsVUFBVTsrQ0FBNEI7QUFHN0M7SUFEQyxNQUFNLENBQUMscUJBQXFCLENBQUMsb0JBQW9CLENBQUM7OEJBQ3RDLFVBQVU7cURBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQlAsIExpc3RTZXJ2aWNlLCBQYWdlZFJlc3VsdER0byB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IGVGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudHMgfSBmcm9tICdAYWJwL25nLmZlYXR1cmUtbWFuYWdlbWVudCc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbiwgQ29uZmlybWF0aW9uU2VydmljZSwgZ2V0UGFzc3dvcmRWYWxpZGF0b3JzIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbmFsaXplLCBwbHVjaywgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gIENyZWF0ZVRlbmFudCxcclxuICBEZWxldGVUZW5hbnQsXHJcbiAgR2V0VGVuYW50QnlJZCxcclxuICBHZXRUZW5hbnRzLFxyXG4gIFVwZGF0ZVRlbmFudCxcclxufSBmcm9tICcuLi8uLi9hY3Rpb25zL3RlbmFudC1tYW5hZ2VtZW50LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBHZXRUZW5hbnRzSW5wdXQsIFRlbmFudER0byB9IGZyb20gJy4uLy4uL3Byb3h5L21vZGVscyc7XHJcbmltcG9ydCB7IFRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVuYW50LW1hbmFnZW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFRlbmFudE1hbmFnZW1lbnRTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlcy90ZW5hbnQtbWFuYWdlbWVudC5zdGF0ZSc7XHJcblxyXG5pbnRlcmZhY2UgU2VsZWN0ZWRNb2RhbENvbnRlbnQge1xyXG4gIHR5cGU6ICdzYXZlQ29ublN0cicgfCAnc2F2ZVRlbmFudCc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtdGVuYW50cycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RlbmFudHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW0xpc3RTZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbmFudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBTZWxlY3QoVGVuYW50TWFuYWdlbWVudFN0YXRlLmdldClcclxuICBkYXRhJDogT2JzZXJ2YWJsZTxQYWdlZFJlc3VsdER0bzxUZW5hbnREdG8+PjtcclxuXHJcbiAgQFNlbGVjdChUZW5hbnRNYW5hZ2VtZW50U3RhdGUuZ2V0VGVuYW50c1RvdGFsQ291bnQpXHJcbiAgdG90YWxDb3VudCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuXHJcbiAgc2VsZWN0ZWQ6IFRlbmFudER0bztcclxuXHJcbiAgdGVuYW50Rm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBkZWZhdWx0Q29ubmVjdGlvblN0cmluZ0Zvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgZGVmYXVsdENvbm5lY3Rpb25TdHJpbmc6IHN0cmluZztcclxuXHJcbiAgaXNNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gIHNlbGVjdGVkTW9kYWxDb250ZW50ID0ge30gYXMgU2VsZWN0ZWRNb2RhbENvbnRlbnQ7XHJcblxyXG4gIHZpc2libGVGZWF0dXJlcyA9IGZhbHNlO1xyXG5cclxuICBwcm92aWRlcktleTogc3RyaW5nO1xyXG5cclxuICBfdXNlU2hhcmVkRGF0YWJhc2U6IGJvb2xlYW47XHJcblxyXG4gIG1vZGFsQnVzeSA9IGZhbHNlO1xyXG5cclxuICBmZWF0dXJlTWFuYWdlbWVudEtleSA9IGVGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudHMuRmVhdHVyZU1hbmFnZW1lbnQ7XHJcblxyXG4gIGdldCBoYXNTZWxlY3RlZFRlbmFudCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBCb29sZWFuKHRoaXMuc2VsZWN0ZWQuaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVzZVNoYXJlZERhdGFiYXNlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtLmdldCgndXNlU2hhcmVkRGF0YWJhc2UnKS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBjb25uZWN0aW9uU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q29ubmVjdGlvblN0cmluZ0Zvcm0uZ2V0KCdkZWZhdWx0Q29ubmVjdGlvblN0cmluZycpLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZCgndGVuYW50TW9kYWxUZW1wbGF0ZScpXHJcbiAgdGVuYW50TW9kYWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29ubmVjdGlvblN0cmluZ01vZGFsVGVtcGxhdGUnKVxyXG4gIGNvbm5lY3Rpb25TdHJpbmdNb2RhbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBnZXQgaXNEaXNhYmxlZFNhdmVCdXR0b24oKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWRNb2RhbENvbnRlbnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRNb2RhbENvbnRlbnQudHlwZSA9PT0gJ3NhdmVDb25uU3RyJyAmJlxyXG4gICAgICB0aGlzLmRlZmF1bHRDb25uZWN0aW9uU3RyaW5nRm9ybSAmJlxyXG4gICAgICB0aGlzLmRlZmF1bHRDb25uZWN0aW9uU3RyaW5nRm9ybS5pbnZhbGlkXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICB0aGlzLnNlbGVjdGVkTW9kYWxDb250ZW50LnR5cGUgPT09ICdzYXZlVGVuYW50JyAmJlxyXG4gICAgICB0aGlzLnRlbmFudEZvcm0gJiZcclxuICAgICAgdGhpcy50ZW5hbnRGb3JtLmludmFsaWRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVmlzaWJsZUZlYXR1cmVzQ2hhbmdlID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XHJcbiAgICB0aGlzLnZpc2libGVGZWF0dXJlcyA9IHZhbHVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJlYWRvbmx5IGxpc3Q6IExpc3RTZXJ2aWNlPEdldFRlbmFudHNJbnB1dD4sXHJcbiAgICBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRlbmFudFNlcnZpY2U6IFRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5ob29rVG9RdWVyeSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVUZW5hbnRGb3JtKCkge1xyXG4gICAgY29uc3QgdGVuYW50Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBuYW1lOiBbdGhpcy5zZWxlY3RlZC5uYW1lIHx8ICcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMjU2KV1dLFxyXG4gICAgICBhZG1pbkVtYWlsQWRkcmVzczogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCgyNTYpLCBWYWxpZGF0b3JzLmVtYWlsXV0sXHJcbiAgICAgIGFkbWluUGFzc3dvcmQ6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgLi4uZ2V0UGFzc3dvcmRWYWxpZGF0b3JzKHRoaXMuc3RvcmUpXV0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5oYXNTZWxlY3RlZFRlbmFudCkge1xyXG4gICAgICB0ZW5hbnRGb3JtLnJlbW92ZUNvbnRyb2woJ2FkbWluRW1haWxBZGRyZXNzJyk7XHJcbiAgICAgIHRlbmFudEZvcm0ucmVtb3ZlQ29udHJvbCgnYWRtaW5QYXNzd29yZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGVuYW50Rm9ybSA9IHRlbmFudEZvcm07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZURlZmF1bHRDb25uZWN0aW9uU3RyaW5nRm9ybSgpIHtcclxuICAgIHRoaXMuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIHVzZVNoYXJlZERhdGFiYXNlOiB0aGlzLl91c2VTaGFyZWREYXRhYmFzZSxcclxuICAgICAgZGVmYXVsdENvbm5lY3Rpb25TdHJpbmc6IFt0aGlzLmRlZmF1bHRDb25uZWN0aW9uU3RyaW5nIHx8ICcnXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKHRpdGxlOiBzdHJpbmcsIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCB0eXBlOiAnc2F2ZUNvbm5TdHInIHwgJ3NhdmVUZW5hbnQnKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkTW9kYWxDb250ZW50ID0ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgdGVtcGxhdGUsXHJcbiAgICAgIHR5cGUsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0Q29ubmVjdGlvblN0cmluZyhpZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN0b3JlXHJcbiAgICAgIC5kaXNwYXRjaChuZXcgR2V0VGVuYW50QnlJZChpZCkpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHBsdWNrKCdUZW5hbnRNYW5hZ2VtZW50U3RhdGUnLCAnc2VsZWN0ZWRJdGVtJyksXHJcbiAgICAgICAgc3dpdGNoTWFwKHNlbGVjdGVkID0+IHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnRlbmFudFNlcnZpY2UuZ2V0RGVmYXVsdENvbm5lY3Rpb25TdHJpbmcoaWQpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoZmV0Y2hlZENvbm5lY3Rpb25TdHJpbmcgPT4ge1xyXG4gICAgICAgIHRoaXMuX3VzZVNoYXJlZERhdGFiYXNlID0gZmV0Y2hlZENvbm5lY3Rpb25TdHJpbmcgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0Q29ubmVjdGlvblN0cmluZyA9IGZldGNoZWRDb25uZWN0aW9uU3RyaW5nID8gZmV0Y2hlZENvbm5lY3Rpb25TdHJpbmcgOiAnJztcclxuICAgICAgICB0aGlzLmNyZWF0ZURlZmF1bHRDb25uZWN0aW9uU3RyaW5nRm9ybSgpO1xyXG4gICAgICAgIHRoaXMub3Blbk1vZGFsKFxyXG4gICAgICAgICAgJ0FicFRlbmFudE1hbmFnZW1lbnQ6OkNvbm5lY3Rpb25TdHJpbmdzJyxcclxuICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN0cmluZ01vZGFsVGVtcGxhdGUsXHJcbiAgICAgICAgICAnc2F2ZUNvbm5TdHInLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkVGVuYW50KCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHt9IGFzIFRlbmFudER0bztcclxuICAgIHRoaXMuY3JlYXRlVGVuYW50Rm9ybSgpO1xyXG4gICAgdGhpcy5vcGVuTW9kYWwoJ0FicFRlbmFudE1hbmFnZW1lbnQ6Ok5ld1RlbmFudCcsIHRoaXMudGVuYW50TW9kYWxUZW1wbGF0ZSwgJ3NhdmVUZW5hbnQnKTtcclxuICB9XHJcblxyXG4gIGVkaXRUZW5hbnQoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2gobmV3IEdldFRlbmFudEJ5SWQoaWQpKVxyXG4gICAgICAucGlwZShwbHVjaygnVGVuYW50TWFuYWdlbWVudFN0YXRlJywgJ3NlbGVjdGVkSXRlbScpKVxyXG4gICAgICAuc3Vic2NyaWJlKHNlbGVjdGVkID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVUZW5hbnRGb3JtKCk7XHJcbiAgICAgICAgdGhpcy5vcGVuTW9kYWwoJ0FicFRlbmFudE1hbmFnZW1lbnQ6OkVkaXQnLCB0aGlzLnRlbmFudE1vZGFsVGVtcGxhdGUsICdzYXZlVGVuYW50Jyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcy5zZWxlY3RlZE1vZGFsQ29udGVudDtcclxuICAgIGlmICghdHlwZSkgcmV0dXJuO1xyXG4gICAgaWYgKHR5cGUgPT09ICdzYXZlVGVuYW50JykgdGhpcy5zYXZlVGVuYW50KCk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnc2F2ZUNvbm5TdHInKSB0aGlzLnNhdmVDb25uZWN0aW9uU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBzYXZlQ29ubmVjdGlvblN0cmluZygpIHtcclxuICAgIGlmICh0aGlzLm1vZGFsQnVzeSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMubW9kYWxCdXN5ID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLnVzZVNoYXJlZERhdGFiYXNlIHx8ICghdGhpcy51c2VTaGFyZWREYXRhYmFzZSAmJiAhdGhpcy5jb25uZWN0aW9uU3RyaW5nKSkge1xyXG4gICAgICB0aGlzLnRlbmFudFNlcnZpY2VcclxuICAgICAgICAuZGVsZXRlRGVmYXVsdENvbm5lY3Rpb25TdHJpbmcodGhpcy5zZWxlY3RlZC5pZClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2UoMSksXHJcbiAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiAodGhpcy5tb2RhbEJ1c3kgPSBmYWxzZSkpLFxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGVuYW50U2VydmljZVxyXG4gICAgICAgIC51cGRhdGVEZWZhdWx0Q29ubmVjdGlvblN0cmluZyh7XHJcbiAgICAgICAgICBpZDogdGhpcy5zZWxlY3RlZC5pZCxcclxuICAgICAgICAgIGRlZmF1bHRDb25uZWN0aW9uU3RyaW5nOiB0aGlzLmNvbm5lY3Rpb25TdHJpbmcsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2UoMSksXHJcbiAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiAodGhpcy5tb2RhbEJ1c3kgPSBmYWxzZSkpLFxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVUZW5hbnQoKSB7XHJcbiAgICBpZiAoIXRoaXMudGVuYW50Rm9ybS52YWxpZCB8fCB0aGlzLm1vZGFsQnVzeSkgcmV0dXJuO1xyXG4gICAgdGhpcy5tb2RhbEJ1c3kgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKFxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuaWRcclxuICAgICAgICAgID8gbmV3IFVwZGF0ZVRlbmFudCh7IC4uLnRoaXMuc2VsZWN0ZWQsIC4uLnRoaXMudGVuYW50Rm9ybS52YWx1ZSwgaWQ6IHRoaXMuc2VsZWN0ZWQuaWQgfSlcclxuICAgICAgICAgIDogbmV3IENyZWF0ZVRlbmFudCh0aGlzLnRlbmFudEZvcm0udmFsdWUpLFxyXG4gICAgICApXHJcbiAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+ICh0aGlzLm1vZGFsQnVzeSA9IGZhbHNlKSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxpc3QuZ2V0KCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlXHJcbiAgICAgIC53YXJuKFxyXG4gICAgICAgICdBYnBUZW5hbnRNYW5hZ2VtZW50OjpUZW5hbnREZWxldGlvbkNvbmZpcm1hdGlvbk1lc3NhZ2UnLFxyXG4gICAgICAgICdBYnBUZW5hbnRNYW5hZ2VtZW50OjpBcmVZb3VTdXJlJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXNzYWdlTG9jYWxpemF0aW9uUGFyYW1zOiBbbmFtZV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKChzdGF0dXM6IENvbmZpcm1hdGlvbi5TdGF0dXMpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBDb25maXJtYXRpb24uU3RhdHVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVRlbmFudChpZCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxpc3QuZ2V0KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBob29rVG9RdWVyeSgpIHtcclxuICAgIHRoaXMubGlzdC5ob29rVG9RdWVyeShxdWVyeSA9PiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRUZW5hbnRzKHF1ZXJ5KSkpLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgb25TaGFyZWREYXRhYmFzZUNoYW5nZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0Q29ubmVjdGlvblN0cmluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgICAgICAgJ2RlZmF1bHRDb25uZWN0aW9uU3RyaW5nJyxcclxuICAgICAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRDb25uZWN0aW9uU3RyaW5nKSB7XHJcbiAgICAgICAgICBkZWZhdWx0Q29ubmVjdGlvblN0cmluZy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuRmVhdHVyZXNNb2RhbChwcm92aWRlcktleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnByb3ZpZGVyS2V5ID0gcHJvdmlkZXJLZXk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy52aXNpYmxlRmVhdHVyZXMgPSB0cnVlO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBzb3J0KGRhdGEpIHtcclxuICAgIGNvbnN0IHsgcHJvcCwgZGlyIH0gPSBkYXRhLnNvcnRzWzBdO1xyXG4gICAgdGhpcy5saXN0LnNvcnRLZXkgPSBwcm9wO1xyXG4gICAgdGhpcy5saXN0LnNvcnRPcmRlciA9IGRpcjtcclxuICB9XHJcbn1cclxuIl19