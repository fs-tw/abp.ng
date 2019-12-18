import { PermissionManagementComponent as AbpPermissionManagementComponent, PermissionManagement } from '@abp/ng.permission-management';
import { OnChanges, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngxs/store';
export declare class PermissionManagementComponent extends AbpPermissionManagementComponent implements OnInit, OnChanges {
    private _store;
    private _renderer;
    providerName: string;
    providerKey: string;
    visible: boolean;
    selectAllIndeterminate: boolean;
    selectAllThisTabIndeterminate: boolean;
    constructor(_store: Store, _renderer: Renderer2);
    isGrantedByOtherProviderName(grantedProviders: PermissionManagement.GrantedProvider[]): boolean;
    onClickSelectAll(): void;
    onClickSelectThisTab(): void;
    onClickCheckbox(clickedPermission: PermissionManagement.Permission): void;
    setTabCheckboxState(): void;
    setGrantCheckboxState(): void;
}
