import { PermissionManagementModule } from '@fs/permission-management';
import { CoreModule } from '@abp/ng.core';
import { Component, Renderer2, Input, NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { PermissionManagementComponent as PermissionManagementComponent$1 } from '@abp/ng.permission-management';
import { Store } from '@ngxs/store';
import { take } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/permission-management.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PermissionManagementComponent extends PermissionManagementComponent$1 {
    /**
     * @param {?} _store
     * @param {?} _renderer
     */
    constructor(_store, _renderer) {
        super(_store, _renderer);
        this._store = _store;
        this._renderer = _renderer;
        this.selectAllIndeterminate = false;
        this.selectAllThisTabIndeterminate = false;
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set visible(value) {
        if (!this.selectedGroup)
            return;
        this._visible = value;
        this.visibleChange.emit(value);
        if (!value) {
            this.selectedGroup = null;
        }
    }
    /**
     * @param {?} grantedProviders
     * @return {?}
     */
    isGrantedByOtherProviderName(grantedProviders) {
        if (grantedProviders.length) {
            return grantedProviders.findIndex((/**
             * @param {?} p
             * @return {?}
             */
            p => p.providerName !== this.providerName)) > -1;
        }
        return false;
    }
    /**
     * @return {?}
     */
    onClickSelectAll() {
        this.selectAllIndeterminate = false;
        this.permissions = this.permissions.map((/**
         * @param {?} permission
         * @return {?}
         */
        permission => (Object.assign({}, permission, { isGranted: this.isGrantedByOtherProviderName(permission.grantedProviders) || this.selectAllTab }))));
        this.selectThisTab = this.selectAllTab;
    }
    /**
     * @return {?}
     */
    onClickSelectThisTab() {
        this.selectAllThisTabIndeterminate = false;
        this.selectedGroupPermissions$.pipe(take(1)).subscribe((/**
         * @param {?} permissions
         * @return {?}
         */
        permissions => {
            permissions.forEach((/**
             * @param {?} permission
             * @return {?}
             */
            permission => {
                if (permission.isGranted && this.isGrantedByOtherProviderName(permission.grantedProviders))
                    return;
                /** @type {?} */
                const index = this.permissions.findIndex((/**
                 * @param {?} per
                 * @return {?}
                 */
                per => per.name === permission.name));
                this.permissions = [
                    ...this.permissions.slice(0, index),
                    Object.assign({}, this.permissions[index], { isGranted: this.selectThisTab }),
                    ...this.permissions.slice(index + 1)
                ];
            }));
        }));
        this.setGrantCheckboxState();
    }
    /**
     * @param {?} clickedPermission
     * @return {?}
     */
    onClickCheckbox(clickedPermission) {
        if (clickedPermission.isGranted && this.isGrantedByOtherProviderName(clickedPermission.grantedProviders))
            return;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.permissions = this.permissions.map((/**
             * @param {?} per
             * @return {?}
             */
            per => {
                if (clickedPermission.name === per.name) {
                    return Object.assign({}, per, { isGranted: !per.isGranted });
                }
                else if (clickedPermission.name === per.parentName && clickedPermission.isGranted) {
                    return Object.assign({}, per, { isGranted: false });
                }
                else if (clickedPermission.parentName === per.name && !clickedPermission.isGranted) {
                    return Object.assign({}, per, { isGranted: true });
                }
                return per;
            }));
            this.setTabCheckboxState();
            this.setGrantCheckboxState();
        }), 0);
    }
    /**
     * @return {?}
     */
    setTabCheckboxState() {
        this.selectedGroupPermissions$.pipe(take(1)).subscribe((/**
         * @param {?} permissions
         * @return {?}
         */
        permissions => {
            /** @type {?} */
            const selectedPermissions = permissions.filter((/**
             * @param {?} per
             * @return {?}
             */
            per => per.isGranted));
            if (selectedPermissions.length === permissions.length) {
                this.selectAllThisTabIndeterminate = false;
                this.selectThisTab = true;
            }
            else if (selectedPermissions.length === 0) {
                this.selectAllThisTabIndeterminate = false;
                this.selectThisTab = false;
            }
            else {
                this.selectAllThisTabIndeterminate = true;
            }
        }));
    }
    /**
     * @return {?}
     */
    setGrantCheckboxState() {
        /** @type {?} */
        const selectedAllPermissions = this.permissions.filter((/**
         * @param {?} per
         * @return {?}
         */
        per => per.isGranted));
        if (selectedAllPermissions.length === this.permissions.length) {
            this.selectAllIndeterminate = false;
            this.selectAllTab = true;
        }
        else if (selectedAllPermissions.length === 0) {
            this.selectAllIndeterminate = false;
            this.selectAllTab = false;
        }
        else {
            this.selectAllIndeterminate = true;
        }
    }
}
PermissionManagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-alain-permission-management',
                template: "<ng-container *ngIf=\"{ entityName: entityName$ | async } as data\">\r\n  <nz-modal [(nzVisible)]=\"visible\"\r\n            (nzAfterOpen)=\"initModal()\"\r\n            [nzTitle]=\"modalTitle\"\r\n            [nzContent]=\"modalContent\"\r\n            [nzFooter]=\"modalFooter\"\r\n            (nzOnCancel)=\"visible=false\"\r\n            nzWidth=\"1040\"\r\n  >\r\n\r\n    <ng-template #modalTitle>\r\n      {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} - {{ data.entityName }}\r\n    </ng-template>\r\n\r\n    <ng-template #modalContent>\r\n      <nz-checkbox-wrapper >\r\n        <label nz-checkbox [(ngModel)]=\"selectAllTab\" (ngModelChange)=\"onClickSelectAll()\" [nzIndeterminate]=\"selectAllIndeterminate\">\r\n          {{'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization}}\r\n        </label>\r\n      </nz-checkbox-wrapper>\r\n\r\n\r\n      <div class=\"main\">\r\n        <div class=\"menu\">\r\n          <ul nz-menu nzMode=\"inline\">\r\n            <li *ngFor=\"let group of groups$ | async; trackBy: trackByFn\" nz-menu-item [nzSelected]=\"selectedGroup?.name === group?.name\" (click)=\"onChangeGroup(group)\">{{ group?.displayName }}</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"content\">\r\n          <div class=\"title\">{{ selectedGroup?.displayName }}</div>\r\n          <nz-checkbox-wrapper>\r\n            <label nz-checkbox [(ngModel)]=\"selectThisTab\" (ngModelChange)=\"onClickSelectThisTab()\" [nzIndeterminate]=\"selectAllThisTabIndeterminate\">\r\n              {{'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization}}\r\n            </label>\r\n          </nz-checkbox-wrapper>\r\n          <div *ngFor=\"let permission of selectedGroupPermissions$ | async; let i = index; trackBy: trackByFn\"\r\n               [style.margin-left]=\"permission.margin + 'px'\">\r\n            <nz-checkbox-wrapper>\r\n              <label nz-checkbox\r\n                     [ngModel]=\"getChecked(permission.name)\"\r\n                     [nzDisabled]=\"isGrantedByOtherProviderName(permission.grantedProviders)\"\r\n                     (ngModelChange)=\"onClickCheckbox(permission)\"\r\n                     >\r\n                {{ permission.displayName }}\r\n                <span *ngFor=\"let provider of permission.grantedProviders\">{{ provider.providerName }}: {{ provider.providerKey }}</span>\r\n              </label>\r\n            </nz-checkbox-wrapper>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-template>\r\n\r\n    <ng-template #modalFooter>\r\n      <button nz-button nzType=\"default\" (click)=\"visible=false\">\r\n        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n      </button>\r\n      <button nz-button nzType=\"primary\" (click)=\"submit()\">\r\n        {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n        }}\r\n      </button>\r\n    </ng-template>\r\n\r\n\r\n  </nz-modal>\r\n</ng-container>\r\n",
                styles: [":host{display:block;padding-top:24px}.main{display:flex;width:100%;overflow:auto;background-color:#fff}.menu{width:224px;border-right:1px solid #e8e8e8}.menu ::ng-deep .ant-menu-inline{border:none}.menu ::ng-deep .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{font-weight:700}.content{flex:1;padding:8px 40px}.content .title{margin-bottom:12px;color:rgba(0,0,0,.85);font-weight:500;font-size:20px;line-height:28px}.content ::ng-deep .ant-list-split .ant-list-item:last-child{border-bottom:1px solid #e8e8e8}.content ::ng-deep .ant-list-item{padding-top:14px;padding-bottom:14px}@media screen and (max-width:767px){.main{flex-direction:column}.main .menu{width:100%;border:none}.main .content{padding:40px}}"]
            }] }
];
/** @nocollapse */
PermissionManagementComponent.ctorParameters = () => [
    { type: Store },
    { type: Renderer2 }
];
PermissionManagementComponent.propDecorators = {
    providerName: [{ type: Input }],
    providerKey: [{ type: Input }],
    visible: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PermissionManagementComponent.prototype.providerName;
    /** @type {?} */
    PermissionManagementComponent.prototype.providerKey;
    /** @type {?} */
    PermissionManagementComponent.prototype.selectAllIndeterminate;
    /** @type {?} */
    PermissionManagementComponent.prototype.selectAllThisTabIndeterminate;
    /**
     * @type {?}
     * @private
     */
    PermissionManagementComponent.prototype._store;
    /**
     * @type {?}
     * @private
     */
    PermissionManagementComponent.prototype._renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/permission-management-ng-alain.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PermissionManagementNgAlainModule {
}
PermissionManagementNgAlainModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PermissionManagementComponent],
                imports: [
                    CoreModule,
                    NgAlainBasicModule,
                    PermissionManagementModule
                ],
                exports: [PermissionManagementComponent]
            },] }
];

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
 * Generated from: fs-permission-management-ng-alain.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PermissionManagementNgAlainModule, PermissionManagementComponent as ɵa };
//# sourceMappingURL=fs-permission-management-ng-alain.js.map
