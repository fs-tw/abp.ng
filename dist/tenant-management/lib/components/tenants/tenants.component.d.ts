import { ABP } from '@abp/ng.core';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TenantManagementService } from '../../services/tenant-management.service';
import { eFeatureManagementComponents } from '@abp/ng.feature-management';
interface SelectedModalContent {
    type: 'saveConnStr' | 'saveTenant';
    title: string;
    template: TemplateRef<any>;
}
export declare class TenantsComponent implements OnInit {
    private confirmationService;
    private tenantService;
    private fb;
    private store;
    data$: Observable<ABP.BasicItem[]>;
    totalCount$: Observable<number>;
    selected: ABP.BasicItem;
    tenantForm: FormGroup;
    defaultConnectionStringForm: FormGroup;
    defaultConnectionString: string;
    isModalVisible: boolean;
    selectedModalContent: SelectedModalContent;
    visibleFeatures: boolean;
    providerKey: string;
    _useSharedDatabase: boolean;
    pageQuery: ABP.PageQueryParams;
    loading: boolean;
    modalBusy: boolean;
    sortOrder: string;
    sortKey: string;
    featureManagementKey: eFeatureManagementComponents;
    readonly hasSelectedTenant: boolean;
    readonly useSharedDatabase: boolean;
    readonly connectionString: string;
    tenantModalTemplate: TemplateRef<any>;
    connectionStringModalTemplate: TemplateRef<any>;
    readonly isDisabledSaveButton: boolean;
    onVisibleFeaturesChange: (value: boolean) => void;
    constructor(confirmationService: ConfirmationService, tenantService: TenantManagementService, fb: FormBuilder, store: Store);
    ngOnInit(): void;
    onSearch(value: string): void;
    private createTenantForm;
    private createDefaultConnectionStringForm;
    openModal(title: string, template: TemplateRef<any>, type: 'saveConnStr' | 'saveTenant'): void;
    onEditConnectionString(id: string): void;
    addTenant(): void;
    editTenant(id: string): void;
    save(): void;
    saveConnectionString(): void;
    saveTenant(): void;
    delete(id: string, name: string): void;
    onPageChange(page: number): void;
    get(): void;
    onSharedDatabaseChange(value: boolean): void;
    openFeaturesModal(providerKey: string): void;
}
export {};
