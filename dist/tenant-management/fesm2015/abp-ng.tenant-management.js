import { __decorate, __metadata } from 'tslib';
import { RestService, ListService, DynamicLayoutComponent, AuthGuard, PermissionGuard, ReplaceableRouteContainerComponent, LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { FeatureManagementModule } from '@abp/ng.feature-management';
import { getPasswordValidators, Confirmation, ConfirmationService, ThemeSharedModule } from '@abp/ng.theme.shared';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, ViewChild, TemplateRef, Component, NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { Action, Selector, State, Select, Store, NgxsModule } from '@ngxs/store';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap, pluck, switchMap, take, finalize } from 'rxjs/operators';
import { RouterModule } from '@angular/router';

class GetTenants {
    constructor(payload) {
        this.payload = payload;
    }
}
GetTenants.type = '[TenantManagement] Get Tenant';
class GetTenantById {
    constructor(payload) {
        this.payload = payload;
    }
}
GetTenantById.type = '[TenantManagement] Get Tenant By Id';
class CreateTenant {
    constructor(payload) {
        this.payload = payload;
    }
}
CreateTenant.type = '[TenantManagement] Create Tenant';
class UpdateTenant {
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateTenant.type = '[TenantManagement] Update Tenant';
class DeleteTenant {
    constructor(payload) {
        this.payload = payload;
    }
}
DeleteTenant.type = '[TenantManagement] Delete Tenant';

let TenantManagementService = class TenantManagementService {
    constructor(rest) {
        this.rest = rest;
        this.apiName = 'AbpTenantManagement';
    }
    getTenant(params = {}) {
        const request = {
            method: 'GET',
            url: '/api/multi-tenancy/tenants',
            params,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    getTenantById(id) {
        const request = {
            method: 'GET',
            url: `/api/multi-tenancy/tenants/${id}`,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    deleteTenant(id) {
        const request = {
            method: 'DELETE',
            url: `/api/multi-tenancy/tenants/${id}`,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    createTenant(body) {
        const request = {
            method: 'POST',
            url: '/api/multi-tenancy/tenants',
            body,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
    updateTenant(body) {
        const url = `/api/multi-tenancy/tenants/${body.id}`;
        delete body.id;
        const request = {
            method: 'PUT',
            url,
            body,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
    getDefaultConnectionString(id) {
        const url = `/api/multi-tenancy/tenants/${id}/default-connection-string`;
        const request = {
            method: 'GET',
            responseType: "text" /* Text */,
            url,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
    updateDefaultConnectionString(payload) {
        const url = `/api/multi-tenancy/tenants/${payload.id}/default-connection-string`;
        const request = {
            method: 'PUT',
            url,
            params: { defaultConnectionString: payload.defaultConnectionString },
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
    deleteDefaultConnectionString(id) {
        const url = `/api/multi-tenancy/tenants/${id}/default-connection-string`;
        const request = {
            method: 'DELETE',
            url,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
};
TenantManagementService.ɵprov = ɵɵdefineInjectable({ factory: function TenantManagementService_Factory() { return new TenantManagementService(ɵɵinject(RestService)); }, token: TenantManagementService, providedIn: "root" });
TenantManagementService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [RestService])
], TenantManagementService);

let TenantManagementState = class TenantManagementState {
    constructor(tenantManagementService) {
        this.tenantManagementService = tenantManagementService;
    }
    static get({ result }) {
        return result.items || [];
    }
    static getTenantsTotalCount({ result }) {
        return result.totalCount;
    }
    get({ patchState }, { payload }) {
        return this.tenantManagementService.getTenant(payload).pipe(tap(result => patchState({
            result,
        })));
    }
    getById({ patchState }, { payload }) {
        return this.tenantManagementService.getTenantById(payload).pipe(tap(selectedItem => patchState({
            selectedItem,
        })));
    }
    delete(_, { payload }) {
        return this.tenantManagementService.deleteTenant(payload);
    }
    add(_, { payload }) {
        return this.tenantManagementService.createTenant(payload);
    }
    update({ getState }, { payload }) {
        return this.tenantManagementService.updateTenant(Object.assign(Object.assign({}, getState().selectedItem), payload));
    }
};
__decorate([
    Action(GetTenants),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetTenants]),
    __metadata("design:returntype", void 0)
], TenantManagementState.prototype, "get", null);
__decorate([
    Action(GetTenantById),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetTenantById]),
    __metadata("design:returntype", void 0)
], TenantManagementState.prototype, "getById", null);
__decorate([
    Action(DeleteTenant),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteTenant]),
    __metadata("design:returntype", void 0)
], TenantManagementState.prototype, "delete", null);
__decorate([
    Action(CreateTenant),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateTenant]),
    __metadata("design:returntype", void 0)
], TenantManagementState.prototype, "add", null);
__decorate([
    Action(UpdateTenant),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateTenant]),
    __metadata("design:returntype", void 0)
], TenantManagementState.prototype, "update", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], TenantManagementState, "get", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Number)
], TenantManagementState, "getTenantsTotalCount", null);
TenantManagementState = __decorate([
    State({
        name: 'TenantManagementState',
        defaults: { result: {}, selectedItem: {} },
    }),
    Injectable(),
    __metadata("design:paramtypes", [TenantManagementService])
], TenantManagementState);

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

const ɵ0 = {
    requiredPolicy: 'AbpTenantManagement.Tenants',
    replaceableComponent: {
        key: "TenantManagement.TenantsComponent" /* Tenants */,
        defaultComponent: TenantsComponent,
    },
};
const routes = [
    { path: '', redirectTo: 'tenants', pathMatch: 'full' },
    {
        path: '',
        component: DynamicLayoutComponent,
        canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'tenants',
                component: ReplaceableRouteContainerComponent,
                data: ɵ0,
            },
        ],
    },
];
let TenantManagementRoutingModule = class TenantManagementRoutingModule {
};
TenantManagementRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TenantManagementRoutingModule);

var TenantManagementModule_1;
let TenantManagementModule = TenantManagementModule_1 = class TenantManagementModule {
    static forChild() {
        return {
            ngModule: TenantManagementModule_1,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(TenantManagementModule_1.forChild());
    }
};
TenantManagementModule = TenantManagementModule_1 = __decorate([
    NgModule({
        declarations: [TenantsComponent],
        exports: [TenantsComponent],
        imports: [
            TenantManagementRoutingModule,
            NgxsModule.forFeature([TenantManagementState]),
            NgxValidateCoreModule,
            CoreModule,
            ThemeSharedModule,
            NgbDropdownModule,
            FeatureManagementModule,
        ],
    })
], TenantManagementModule);

let TenantManagementStateService = class TenantManagementStateService {
    constructor(store) {
        this.store = store;
    }
    get() {
        return this.store.selectSnapshot(TenantManagementState.get);
    }
    getTenantsTotalCount() {
        return this.store.selectSnapshot(TenantManagementState.getTenantsTotalCount);
    }
    dispatchGetTenants(...args) {
        return this.store.dispatch(new GetTenants(...args));
    }
    dispatchGetTenantById(...args) {
        return this.store.dispatch(new GetTenantById(...args));
    }
    dispatchCreateTenant(...args) {
        return this.store.dispatch(new CreateTenant(...args));
    }
    dispatchUpdateTenant(...args) {
        return this.store.dispatch(new UpdateTenant(...args));
    }
    dispatchDeleteTenant(...args) {
        return this.store.dispatch(new DeleteTenant(...args));
    }
};
TenantManagementStateService.ɵprov = ɵɵdefineInjectable({ factory: function TenantManagementStateService_Factory() { return new TenantManagementStateService(ɵɵinject(Store)); }, token: TenantManagementStateService, providedIn: "root" });
TenantManagementStateService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [Store])
], TenantManagementStateService);

/**
 * Generated bundle index. Do not edit.
 */

export { CreateTenant, DeleteTenant, GetTenantById, GetTenants, TenantManagementModule, TenantManagementService, TenantManagementState, TenantManagementStateService, TenantsComponent, UpdateTenant, TenantsComponent as ɵa, TenantManagementState as ɵb, TenantManagementService as ɵc, GetTenants as ɵd, GetTenantById as ɵe, CreateTenant as ɵf, UpdateTenant as ɵg, DeleteTenant as ɵh, TenantManagementRoutingModule as ɵj };
//# sourceMappingURL=abp-ng.tenant-management.js.map
