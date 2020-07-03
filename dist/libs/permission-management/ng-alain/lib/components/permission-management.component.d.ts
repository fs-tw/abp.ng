import { PermissionManagementComponent as AbpPermissionManagementComponent, PermissionManagement } from '@abp/ng.permission-management';
import { Renderer2, EventEmitter } from '@angular/core';
import { Store } from '@ngxs/store';
import * as i0 from "@angular/core";
export declare class PermissionManagementComponent extends AbpPermissionManagementComponent implements PermissionManagement.PermissionManagementComponentInputs, PermissionManagement.PermissionManagementComponentOutputs {
    private _store;
    private _renderer;
    readonly providerName: string;
    readonly providerKey: string;
    readonly hideBadges = false;
    protected _visible: boolean;
    get visible(): boolean;
    set visible(value: boolean);
    readonly visibleChange: EventEmitter<boolean>;
    selectAllIndeterminate: boolean;
    selectAllThisTabIndeterminate: boolean;
    constructor(_store: Store, _renderer: Renderer2);
    isGrantedByOtherProviderName(grantedProviders: PermissionManagement.GrantedProvider[]): boolean;
    onClickSelectAll(): void;
    onClickSelectThisTab(): void;
    onClickCheckbox(clickedPermission: PermissionManagement.Permission): void;
    setTabCheckboxState(): void;
    setGrantCheckboxState(): void;
    static ɵfac: i0.ɵɵFactoryDef<PermissionManagementComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PermissionManagementComponent, "ng-alain-permission-management", never, { "providerName": "providerName"; "providerKey": "providerKey"; "hideBadges": "hideBadges"; "visible": "visible"; }, { "visibleChange": "visibleChange"; }, never, never>;
}
