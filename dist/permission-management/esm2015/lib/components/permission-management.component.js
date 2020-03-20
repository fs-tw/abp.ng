/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/permission-management.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, map, pluck, take, tap } from 'rxjs/operators';
import { GetPermissions, UpdatePermissions } from '../actions/permission-management.actions';
import { PermissionManagementState } from '../states/permission-management.state';
export class PermissionManagementComponent {
    /**
     * @param {?} store
     * @param {?} renderer
     */
    constructor(store, renderer) {
        this.store = store;
        this.renderer = renderer;
        this.hideBadges = false;
        this._visible = false;
        this.visibleChange = new EventEmitter();
        this.permissions = [];
        this.selectThisTab = false;
        this.selectAllTab = false;
        this.modalBusy = false;
        this.trackByFn = (/**
         * @param {?} _
         * @param {?} item
         * @return {?}
         */
        (_, item) => item.name);
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
        if (value === this._visible)
            return;
        if (value) {
            this.openModal().subscribe((/**
             * @return {?}
             */
            () => {
                this._visible = true;
                this.visibleChange.emit(true);
            }));
        }
        else {
            this.selectedGroup = null;
            this._visible = false;
            this.visibleChange.emit(false);
        }
    }
    /**
     * @return {?}
     */
    get selectedGroupPermissions$() {
        return this.groups$.pipe(map((/**
         * @param {?} groups
         * @return {?}
         */
        groups => this.selectedGroup
            ? groups.find((/**
             * @param {?} group
             * @return {?}
             */
            group => group.name === this.selectedGroup.name)).permissions
            : [])), map((/**
         * @param {?} permissions
         * @return {?}
         */
        permissions => permissions.map((/**
         * @param {?} permission
         * @return {?}
         */
        permission => ((/** @type {?} */ (((/** @type {?} */ (Object.assign({}, permission, { margin: findMargin(permissions, permission), isGranted: this.permissions.find((/**
             * @param {?} per
             * @return {?}
             */
            per => per.name === permission.name)).isGranted }))))))))))));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getChecked(name) {
        return (this.permissions.find((/**
         * @param {?} per
         * @return {?}
         */
        per => per.name === name)) || { isGranted: false }).isGranted;
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
     * @param {?} clickedPermission
     * @param {?} value
     * @return {?}
     */
    onClickCheckbox(clickedPermission, value) {
        if (clickedPermission.isGranted &&
            this.isGrantedByOtherProviderName(clickedPermission.grantedProviders))
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
            /** @type {?} */
            const element = (/** @type {?} */ (document.querySelector('#select-all-in-this-tabs')));
            if (selectedPermissions.length === permissions.length) {
                element.indeterminate = false;
                this.selectThisTab = true;
            }
            else if (selectedPermissions.length === 0) {
                element.indeterminate = false;
                this.selectThisTab = false;
            }
            else {
                element.indeterminate = true;
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
        /** @type {?} */
        const checkboxElement = (/** @type {?} */ (document.querySelector('#select-all-in-all-tabs')));
        if (selectedAllPermissions.length === this.permissions.length) {
            checkboxElement.indeterminate = false;
            this.selectAllTab = true;
        }
        else if (selectedAllPermissions.length === 0) {
            checkboxElement.indeterminate = false;
            this.selectAllTab = false;
        }
        else {
            checkboxElement.indeterminate = true;
        }
    }
    /**
     * @return {?}
     */
    onClickSelectThisTab() {
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
                    Object.assign({}, this.permissions[index], { isGranted: !this.selectThisTab }),
                    ...this.permissions.slice(index + 1),
                ];
            }));
        }));
        this.setGrantCheckboxState();
    }
    /**
     * @return {?}
     */
    onClickSelectAll() {
        this.permissions = this.permissions.map((/**
         * @param {?} permission
         * @return {?}
         */
        permission => (Object.assign({}, permission, { isGranted: this.isGrantedByOtherProviderName(permission.grantedProviders) || !this.selectAllTab }))));
        this.selectThisTab = !this.selectAllTab;
    }
    /**
     * @param {?} group
     * @return {?}
     */
    onChangeGroup(group) {
        this.selectedGroup = group;
        this.setTabCheckboxState();
    }
    /**
     * @return {?}
     */
    submit() {
        this.modalBusy = true;
        /** @type {?} */
        const unchangedPermissions = getPermissions(this.store.selectSnapshot(PermissionManagementState.getPermissionGroups));
        /** @type {?} */
        const changedPermissions = this.permissions
            .filter((/**
         * @param {?} per
         * @return {?}
         */
        per => unchangedPermissions.find((/**
         * @param {?} unchanged
         * @return {?}
         */
        unchanged => unchanged.name === per.name)).isGranted ===
            per.isGranted
            ? false
            : true))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ name, isGranted }) => ({ name, isGranted })));
        if (changedPermissions.length) {
            this.store
                .dispatch(new UpdatePermissions({
                providerKey: this.providerKey,
                providerName: this.providerName,
                permissions: changedPermissions,
            }))
                .pipe(finalize((/**
             * @return {?}
             */
            () => (this.modalBusy = false))))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.visible = false;
            }));
        }
        else {
            this.modalBusy = false;
            this.visible = false;
        }
    }
    /**
     * @return {?}
     */
    openModal() {
        if (!this.providerKey || !this.providerName) {
            throw new Error('Provider Key and Provider Name are required.');
        }
        return this.store
            .dispatch(new GetPermissions({
            providerKey: this.providerKey,
            providerName: this.providerName,
        }))
            .pipe(pluck('PermissionManagementState', 'permissionRes'), tap((/**
         * @param {?} permissionRes
         * @return {?}
         */
        (permissionRes) => {
            this.selectedGroup = permissionRes.groups[0];
            this.permissions = getPermissions(permissionRes.groups);
        })));
    }
    /**
     * @return {?}
     */
    initModal() {
        this.setTabCheckboxState();
        this.setGrantCheckboxState();
    }
}
PermissionManagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-permission-management',
                template: "<abp-modal [(visible)]=\"visible\" (init)=\"initModal()\" [busy]=\"modalBusy\">\r\n  <ng-container *ngIf=\"{ entityName: entityName$ | async } as data\">\r\n    <ng-template #abpHeader>\r\n      <h4>\r\n        {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} - {{ data.entityName }}\r\n      </h4>\r\n    </ng-template>\r\n    <ng-template #abpBody>\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"select-all-in-all-tabs\"\r\n          name=\"select-all-in-all-tabs\"\r\n          class=\"custom-control-input\"\r\n          [(ngModel)]=\"selectAllTab\"\r\n          (click)=\"onClickSelectAll()\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"select-all-in-all-tabs\">{{\r\n          'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n\r\n      <hr class=\"mt-2 mb-2\" />\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <ul class=\"nav nav-pills flex-column\">\r\n            <li *ngFor=\"let group of groups$ | async; trackBy: trackByFn\" class=\"nav-item\">\r\n              <a\r\n                class=\"nav-link pointer\"\r\n                [class.active]=\"selectedGroup?.name === group?.name\"\r\n                (click)=\"onChangeGroup(group)\"\r\n                >{{ group?.displayName }}</a\r\n              >\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n          <h4>{{ selectedGroup?.displayName }}</h4>\r\n          <hr class=\"mt-2 mb-3\" />\r\n          <div class=\"pl-1 pt-1\">\r\n            <div class=\"custom-checkbox custom-control mb-2\">\r\n              <input\r\n                type=\"checkbox\"\r\n                id=\"select-all-in-this-tabs\"\r\n                name=\"select-all-in-this-tabs\"\r\n                class=\"custom-control-input\"\r\n                [(ngModel)]=\"selectThisTab\"\r\n                (click)=\"onClickSelectThisTab()\"\r\n              />\r\n              <label class=\"custom-control-label\" for=\"select-all-in-this-tabs\">{{\r\n                'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization\r\n              }}</label>\r\n            </div>\r\n            <hr class=\"mb-3\" />\r\n            <div\r\n              *ngFor=\"\r\n                let permission of selectedGroupPermissions$ | async;\r\n                let i = index;\r\n                trackBy: trackByFn\r\n              \"\r\n              [style.margin-left]=\"permission.margin + 'px'\"\r\n              class=\"custom-checkbox custom-control mb-2\"\r\n            >\r\n              <input\r\n                #permissionCheckbox\r\n                type=\"checkbox\"\r\n                [checked]=\"getChecked(permission.name)\"\r\n                [value]=\"getChecked(permission.name)\"\r\n                [attr.id]=\"permission.name\"\r\n                class=\"custom-control-input\"\r\n                [disabled]=\"isGrantedByOtherProviderName(permission.grantedProviders)\"\r\n              />\r\n              <label\r\n                class=\"custom-control-label\"\r\n                [attr.for]=\"permission.name\"\r\n                (click)=\"onClickCheckbox(permission, permissionCheckbox.value)\"\r\n                >{{ permission.displayName }}\r\n                <ng-container *ngIf=\"!hideBadges\">\r\n                  <span\r\n                    *ngFor=\"let provider of permission.grantedProviders\"\r\n                    class=\"badge badge-light\"\r\n                    >{{ provider.providerName }}: {{ provider.providerKey }}</span\r\n                  >\r\n                </ng-container>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template #abpFooter>\r\n      <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button iconClass=\"fa fa-check\" (click)=\"submit()\">{{\r\n        'AbpIdentity::Save' | abpLocalization\r\n      }}</abp-button>\r\n    </ng-template>\r\n  </ng-container>\r\n</abp-modal>\r\n",
                exportAs: 'abpPermissionManagement'
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
    hideBadges: [{ type: Input }],
    visible: [{ type: Input }],
    visibleChange: [{ type: Output }]
};
tslib_1.__decorate([
    Select(PermissionManagementState.getPermissionGroups),
    tslib_1.__metadata("design:type", Observable)
], PermissionManagementComponent.prototype, "groups$", void 0);
tslib_1.__decorate([
    Select(PermissionManagementState.getEntityDisplayName),
    tslib_1.__metadata("design:type", Observable)
], PermissionManagementComponent.prototype, "entityName$", void 0);
if (false) {
    /** @type {?} */
    PermissionManagementComponent.prototype.providerName;
    /** @type {?} */
    PermissionManagementComponent.prototype.providerKey;
    /** @type {?} */
    PermissionManagementComponent.prototype.hideBadges;
    /**
     * @type {?}
     * @protected
     */
    PermissionManagementComponent.prototype._visible;
    /** @type {?} */
    PermissionManagementComponent.prototype.visibleChange;
    /** @type {?} */
    PermissionManagementComponent.prototype.groups$;
    /** @type {?} */
    PermissionManagementComponent.prototype.entityName$;
    /** @type {?} */
    PermissionManagementComponent.prototype.selectedGroup;
    /** @type {?} */
    PermissionManagementComponent.prototype.permissions;
    /** @type {?} */
    PermissionManagementComponent.prototype.selectThisTab;
    /** @type {?} */
    PermissionManagementComponent.prototype.selectAllTab;
    /** @type {?} */
    PermissionManagementComponent.prototype.modalBusy;
    /** @type {?} */
    PermissionManagementComponent.prototype.trackByFn;
    /**
     * @type {?}
     * @private
     */
    PermissionManagementComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    PermissionManagementComponent.prototype.renderer;
}
/**
 * @param {?} permissions
 * @param {?} permission
 * @return {?}
 */
function findMargin(permissions, permission) {
    /** @type {?} */
    const parentPermission = permissions.find((/**
     * @param {?} per
     * @return {?}
     */
    per => per.name === permission.parentName));
    if (parentPermission && parentPermission.parentName) {
        /** @type {?} */
        let margin = 20;
        return (margin += findMargin(permissions, parentPermission));
    }
    return parentPermission ? 20 : 0;
}
/**
 * @param {?} groups
 * @return {?}
 */
function getPermissions(groups) {
    return groups.reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    (acc, val) => [...acc, ...val.permissions]), []);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcucGVybWlzc2lvbi1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGVybWlzc2lvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUU3RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQVdsRixNQUFNLE9BQU8sNkJBQTZCOzs7OztJQTJFeEMsWUFBb0IsS0FBWSxFQUFVLFFBQW1CO1FBQXpDLFVBQUssR0FBTCxLQUFLLENBQU87UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBaEVwRCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFzQlIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBVS9ELGdCQUFXLEdBQXNDLEVBQUUsQ0FBQztRQUVwRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUVyQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGNBQVM7Ozs7O1FBQWdELENBQUMsQ0FBQyxFQUFFLElB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MEM7O0lBRTFDLG9EQUFvRDs7SUFFcEQsc0RBQXNCOztJQUV0QixxREFBcUI7O0lBRXJCLGtEQUFrQjs7SUFFbEIsa0RBQWdGOzs7OztJQXNCcEUsOENBQW9COzs7OztJQUFFLGlEQUEyQjs7Ozs7OztBQXFLL0QsU0FBUyxVQUFVLENBQ2pCLFdBQThDLEVBQzlDLFVBQTJDOztVQUVyQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsSUFBSTs7OztJQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsVUFBVSxFQUFDO0lBRXBGLElBQUksZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFOztZQUMvQyxNQUFNLEdBQUcsRUFBRTtRQUNmLE9BQU8sQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7S0FDOUQ7SUFFRCxPQUFPLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQyxDQUFDOzs7OztBQUVELFNBQVMsY0FBYyxDQUFDLE1BQW9DO0lBQzFELE9BQU8sTUFBTSxDQUFDLE1BQU07Ozs7O0lBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyLCBUcmFja0J5RnVuY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgbWFwLCBwbHVjaywgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBHZXRQZXJtaXNzaW9ucywgVXBkYXRlUGVybWlzc2lvbnMgfSBmcm9tICcuLi9hY3Rpb25zL3Blcm1pc3Npb24tbWFuYWdlbWVudC5hY3Rpb25zJztcclxuaW1wb3J0IHsgUGVybWlzc2lvbk1hbmFnZW1lbnQgfSBmcm9tICcuLi9tb2RlbHMvcGVybWlzc2lvbi1tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgUGVybWlzc2lvbk1hbmFnZW1lbnRTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuc3RhdGUnO1xyXG5cclxudHlwZSBQZXJtaXNzaW9uV2l0aE1hcmdpbiA9IFBlcm1pc3Npb25NYW5hZ2VtZW50LlBlcm1pc3Npb24gJiB7XHJcbiAgbWFyZ2luOiBudW1iZXI7XHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1wZXJtaXNzaW9uLW1hbmFnZW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGV4cG9ydEFzOiAnYWJwUGVybWlzc2lvbk1hbmFnZW1lbnQnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnRcclxuICBpbXBsZW1lbnRzXHJcbiAgICBQZXJtaXNzaW9uTWFuYWdlbWVudC5QZXJtaXNzaW9uTWFuYWdlbWVudENvbXBvbmVudElucHV0cyxcclxuICAgIFBlcm1pc3Npb25NYW5hZ2VtZW50LlBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50T3V0cHV0cyB7XHJcbiAgQElucHV0KClcclxuICByZWFkb25seSBwcm92aWRlck5hbWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICByZWFkb25seSBwcm92aWRlcktleTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHJlYWRvbmx5IGhpZGVCYWRnZXMgPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIF92aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcclxuICB9XHJcblxyXG4gIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX3Zpc2libGUpIHJldHVybjtcclxuXHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5vcGVuTW9kYWwoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRHcm91cCA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBTZWxlY3QoUGVybWlzc2lvbk1hbmFnZW1lbnRTdGF0ZS5nZXRQZXJtaXNzaW9uR3JvdXBzKVxyXG4gIGdyb3VwcyQ6IE9ic2VydmFibGU8UGVybWlzc2lvbk1hbmFnZW1lbnQuR3JvdXBbXT47XHJcblxyXG4gIEBTZWxlY3QoUGVybWlzc2lvbk1hbmFnZW1lbnRTdGF0ZS5nZXRFbnRpdHlEaXNwbGF5TmFtZSlcclxuICBlbnRpdHlOYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cclxuICBzZWxlY3RlZEdyb3VwOiBQZXJtaXNzaW9uTWFuYWdlbWVudC5Hcm91cDtcclxuXHJcbiAgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25NYW5hZ2VtZW50LlBlcm1pc3Npb25bXSA9IFtdO1xyXG5cclxuICBzZWxlY3RUaGlzVGFiID0gZmFsc2U7XHJcblxyXG4gIHNlbGVjdEFsbFRhYiA9IGZhbHNlO1xyXG5cclxuICBtb2RhbEJ1c3kgPSBmYWxzZTtcclxuXHJcbiAgdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248UGVybWlzc2lvbk1hbmFnZW1lbnQuR3JvdXA+ID0gKF8sIGl0ZW0pID0+IGl0ZW0ubmFtZTtcclxuXHJcbiAgZ2V0IHNlbGVjdGVkR3JvdXBQZXJtaXNzaW9ucyQoKTogT2JzZXJ2YWJsZTxQZXJtaXNzaW9uV2l0aE1hcmdpbltdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5ncm91cHMkLnBpcGUoXHJcbiAgICAgIG1hcChncm91cHMgPT5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkR3JvdXBcclxuICAgICAgICAgID8gZ3JvdXBzLmZpbmQoZ3JvdXAgPT4gZ3JvdXAubmFtZSA9PT0gdGhpcy5zZWxlY3RlZEdyb3VwLm5hbWUpLnBlcm1pc3Npb25zXHJcbiAgICAgICAgICA6IFtdLFxyXG4gICAgICApLFxyXG4gICAgICBtYXA8UGVybWlzc2lvbk1hbmFnZW1lbnQuUGVybWlzc2lvbltdLCBQZXJtaXNzaW9uV2l0aE1hcmdpbltdPihwZXJtaXNzaW9ucyA9PlxyXG4gICAgICAgIHBlcm1pc3Npb25zLm1hcChcclxuICAgICAgICAgIHBlcm1pc3Npb24gPT5cclxuICAgICAgICAgICAgKCh7XHJcbiAgICAgICAgICAgICAgLi4ucGVybWlzc2lvbixcclxuICAgICAgICAgICAgICBtYXJnaW46IGZpbmRNYXJnaW4ocGVybWlzc2lvbnMsIHBlcm1pc3Npb24pLFxyXG4gICAgICAgICAgICAgIGlzR3JhbnRlZDogdGhpcy5wZXJtaXNzaW9ucy5maW5kKHBlciA9PiBwZXIubmFtZSA9PT0gcGVybWlzc2lvbi5uYW1lKS5pc0dyYW50ZWQsXHJcbiAgICAgICAgICAgIH0gYXMgYW55KSBhcyBQZXJtaXNzaW9uV2l0aE1hcmdpbiksXHJcbiAgICAgICAgKSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxyXG5cclxuICBnZXRDaGVja2VkKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICh0aGlzLnBlcm1pc3Npb25zLmZpbmQocGVyID0+IHBlci5uYW1lID09PSBuYW1lKSB8fCB7IGlzR3JhbnRlZDogZmFsc2UgfSkuaXNHcmFudGVkO1xyXG4gIH1cclxuXHJcbiAgaXNHcmFudGVkQnlPdGhlclByb3ZpZGVyTmFtZShncmFudGVkUHJvdmlkZXJzOiBQZXJtaXNzaW9uTWFuYWdlbWVudC5HcmFudGVkUHJvdmlkZXJbXSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGdyYW50ZWRQcm92aWRlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBncmFudGVkUHJvdmlkZXJzLmZpbmRJbmRleChwID0+IHAucHJvdmlkZXJOYW1lICE9PSB0aGlzLnByb3ZpZGVyTmFtZSkgPiAtMTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tDaGVja2JveChjbGlja2VkUGVybWlzc2lvbjogUGVybWlzc2lvbk1hbmFnZW1lbnQuUGVybWlzc2lvbiwgdmFsdWUpIHtcclxuICAgIGlmIChcclxuICAgICAgY2xpY2tlZFBlcm1pc3Npb24uaXNHcmFudGVkICYmXHJcbiAgICAgIHRoaXMuaXNHcmFudGVkQnlPdGhlclByb3ZpZGVyTmFtZShjbGlja2VkUGVybWlzc2lvbi5ncmFudGVkUHJvdmlkZXJzKVxyXG4gICAgKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucGVybWlzc2lvbnMgPSB0aGlzLnBlcm1pc3Npb25zLm1hcChwZXIgPT4ge1xyXG4gICAgICAgIGlmIChjbGlja2VkUGVybWlzc2lvbi5uYW1lID09PSBwZXIubmFtZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4ucGVyLCBpc0dyYW50ZWQ6ICFwZXIuaXNHcmFudGVkIH07XHJcbiAgICAgICAgfSBlbHNlIGlmIChjbGlja2VkUGVybWlzc2lvbi5uYW1lID09PSBwZXIucGFyZW50TmFtZSAmJiBjbGlja2VkUGVybWlzc2lvbi5pc0dyYW50ZWQpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLnBlciwgaXNHcmFudGVkOiBmYWxzZSB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2xpY2tlZFBlcm1pc3Npb24ucGFyZW50TmFtZSA9PT0gcGVyLm5hbWUgJiYgIWNsaWNrZWRQZXJtaXNzaW9uLmlzR3JhbnRlZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4ucGVyLCBpc0dyYW50ZWQ6IHRydWUgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwZXI7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zZXRUYWJDaGVja2JveFN0YXRlKCk7XHJcbiAgICAgIHRoaXMuc2V0R3JhbnRDaGVja2JveFN0YXRlKCk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIHNldFRhYkNoZWNrYm94U3RhdGUoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkR3JvdXBQZXJtaXNzaW9ucyQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUocGVybWlzc2lvbnMgPT4ge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZFBlcm1pc3Npb25zID0gcGVybWlzc2lvbnMuZmlsdGVyKHBlciA9PiBwZXIuaXNHcmFudGVkKTtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtYWxsLWluLXRoaXMtdGFicycpIGFzIGFueTtcclxuXHJcbiAgICAgIGlmIChzZWxlY3RlZFBlcm1pc3Npb25zLmxlbmd0aCA9PT0gcGVybWlzc2lvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgZWxlbWVudC5pbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaGlzVGFiID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFBlcm1pc3Npb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGVsZW1lbnQuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0VGhpc1RhYiA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0R3JhbnRDaGVja2JveFN0YXRlKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRBbGxQZXJtaXNzaW9ucyA9IHRoaXMucGVybWlzc2lvbnMuZmlsdGVyKHBlciA9PiBwZXIuaXNHcmFudGVkKTtcclxuICAgIGNvbnN0IGNoZWNrYm94RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtYWxsLWluLWFsbC10YWJzJykgYXMgYW55O1xyXG5cclxuICAgIGlmIChzZWxlY3RlZEFsbFBlcm1pc3Npb25zLmxlbmd0aCA9PT0gdGhpcy5wZXJtaXNzaW9ucy5sZW5ndGgpIHtcclxuICAgICAgY2hlY2tib3hFbGVtZW50LmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zZWxlY3RBbGxUYWIgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEFsbFBlcm1pc3Npb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjaGVja2JveEVsZW1lbnQuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNlbGVjdEFsbFRhYiA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2hlY2tib3hFbGVtZW50LmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGlja1NlbGVjdFRoaXNUYWIoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkR3JvdXBQZXJtaXNzaW9ucyQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUocGVybWlzc2lvbnMgPT4ge1xyXG4gICAgICBwZXJtaXNzaW9ucy5mb3JFYWNoKHBlcm1pc3Npb24gPT4ge1xyXG4gICAgICAgIGlmIChwZXJtaXNzaW9uLmlzR3JhbnRlZCAmJiB0aGlzLmlzR3JhbnRlZEJ5T3RoZXJQcm92aWRlck5hbWUocGVybWlzc2lvbi5ncmFudGVkUHJvdmlkZXJzKSlcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBlcm1pc3Npb25zLmZpbmRJbmRleChwZXIgPT4gcGVyLm5hbWUgPT09IHBlcm1pc3Npb24ubmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBbXHJcbiAgICAgICAgICAuLi50aGlzLnBlcm1pc3Npb25zLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICAgIHsgLi4udGhpcy5wZXJtaXNzaW9uc1tpbmRleF0sIGlzR3JhbnRlZDogIXRoaXMuc2VsZWN0VGhpc1RhYiB9LFxyXG4gICAgICAgICAgLi4udGhpcy5wZXJtaXNzaW9ucy5zbGljZShpbmRleCArIDEpLFxyXG4gICAgICAgIF07XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRHcmFudENoZWNrYm94U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tTZWxlY3RBbGwoKSB7XHJcbiAgICB0aGlzLnBlcm1pc3Npb25zID0gdGhpcy5wZXJtaXNzaW9ucy5tYXAocGVybWlzc2lvbiA9PiAoe1xyXG4gICAgICAuLi5wZXJtaXNzaW9uLFxyXG4gICAgICBpc0dyYW50ZWQ6XHJcbiAgICAgICAgdGhpcy5pc0dyYW50ZWRCeU90aGVyUHJvdmlkZXJOYW1lKHBlcm1pc3Npb24uZ3JhbnRlZFByb3ZpZGVycykgfHwgIXRoaXMuc2VsZWN0QWxsVGFiLFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0VGhpc1RhYiA9ICF0aGlzLnNlbGVjdEFsbFRhYjtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlR3JvdXAoZ3JvdXA6IFBlcm1pc3Npb25NYW5hZ2VtZW50Lkdyb3VwKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkR3JvdXAgPSBncm91cDtcclxuICAgIHRoaXMuc2V0VGFiQ2hlY2tib3hTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgdGhpcy5tb2RhbEJ1c3kgPSB0cnVlO1xyXG4gICAgY29uc3QgdW5jaGFuZ2VkUGVybWlzc2lvbnMgPSBnZXRQZXJtaXNzaW9ucyhcclxuICAgICAgdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChQZXJtaXNzaW9uTWFuYWdlbWVudFN0YXRlLmdldFBlcm1pc3Npb25Hcm91cHMpLFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VkUGVybWlzc2lvbnM6IFBlcm1pc3Npb25NYW5hZ2VtZW50Lk1pbmltdW1QZXJtaXNzaW9uW10gPSB0aGlzLnBlcm1pc3Npb25zXHJcbiAgICAgIC5maWx0ZXIocGVyID0+XHJcbiAgICAgICAgdW5jaGFuZ2VkUGVybWlzc2lvbnMuZmluZCh1bmNoYW5nZWQgPT4gdW5jaGFuZ2VkLm5hbWUgPT09IHBlci5uYW1lKS5pc0dyYW50ZWQgPT09XHJcbiAgICAgICAgcGVyLmlzR3JhbnRlZFxyXG4gICAgICAgICAgPyBmYWxzZVxyXG4gICAgICAgICAgOiB0cnVlLFxyXG4gICAgICApXHJcbiAgICAgIC5tYXAoKHsgbmFtZSwgaXNHcmFudGVkIH0pID0+ICh7IG5hbWUsIGlzR3JhbnRlZCB9KSk7XHJcblxyXG4gICAgaWYgKGNoYW5nZWRQZXJtaXNzaW9ucy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zdG9yZVxyXG4gICAgICAgIC5kaXNwYXRjaChcclxuICAgICAgICAgIG5ldyBVcGRhdGVQZXJtaXNzaW9ucyh7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyS2V5OiB0aGlzLnByb3ZpZGVyS2V5LFxyXG4gICAgICAgICAgICBwcm92aWRlck5hbWU6IHRoaXMucHJvdmlkZXJOYW1lLFxyXG4gICAgICAgICAgICBwZXJtaXNzaW9uczogY2hhbmdlZFBlcm1pc3Npb25zLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+ICh0aGlzLm1vZGFsQnVzeSA9IGZhbHNlKSkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW9kYWxCdXN5ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKCkge1xyXG4gICAgaWYgKCF0aGlzLnByb3ZpZGVyS2V5IHx8ICF0aGlzLnByb3ZpZGVyTmFtZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb3ZpZGVyIEtleSBhbmQgUHJvdmlkZXIgTmFtZSBhcmUgcmVxdWlyZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKFxyXG4gICAgICAgIG5ldyBHZXRQZXJtaXNzaW9ucyh7XHJcbiAgICAgICAgICBwcm92aWRlcktleTogdGhpcy5wcm92aWRlcktleSxcclxuICAgICAgICAgIHByb3ZpZGVyTmFtZTogdGhpcy5wcm92aWRlck5hbWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgcGx1Y2soJ1Blcm1pc3Npb25NYW5hZ2VtZW50U3RhdGUnLCAncGVybWlzc2lvblJlcycpLFxyXG4gICAgICAgIHRhcCgocGVybWlzc2lvblJlczogUGVybWlzc2lvbk1hbmFnZW1lbnQuUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRHcm91cCA9IHBlcm1pc3Npb25SZXMuZ3JvdXBzWzBdO1xyXG4gICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IGdldFBlcm1pc3Npb25zKHBlcm1pc3Npb25SZXMuZ3JvdXBzKTtcclxuICAgICAgICB9KSxcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGluaXRNb2RhbCgpIHtcclxuICAgIHRoaXMuc2V0VGFiQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgdGhpcy5zZXRHcmFudENoZWNrYm94U3RhdGUoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRNYXJnaW4oXHJcbiAgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25NYW5hZ2VtZW50LlBlcm1pc3Npb25bXSxcclxuICBwZXJtaXNzaW9uOiBQZXJtaXNzaW9uTWFuYWdlbWVudC5QZXJtaXNzaW9uLFxyXG4pIHtcclxuICBjb25zdCBwYXJlbnRQZXJtaXNzaW9uID0gcGVybWlzc2lvbnMuZmluZChwZXIgPT4gcGVyLm5hbWUgPT09IHBlcm1pc3Npb24ucGFyZW50TmFtZSk7XHJcblxyXG4gIGlmIChwYXJlbnRQZXJtaXNzaW9uICYmIHBhcmVudFBlcm1pc3Npb24ucGFyZW50TmFtZSkge1xyXG4gICAgbGV0IG1hcmdpbiA9IDIwO1xyXG4gICAgcmV0dXJuIChtYXJnaW4gKz0gZmluZE1hcmdpbihwZXJtaXNzaW9ucywgcGFyZW50UGVybWlzc2lvbikpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhcmVudFBlcm1pc3Npb24gPyAyMCA6IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBlcm1pc3Npb25zKGdyb3VwczogUGVybWlzc2lvbk1hbmFnZW1lbnQuR3JvdXBbXSk6IFBlcm1pc3Npb25NYW5hZ2VtZW50LlBlcm1pc3Npb25bXSB7XHJcbiAgcmV0dXJuIGdyb3Vwcy5yZWR1Y2UoKGFjYywgdmFsKSA9PiBbLi4uYWNjLCAuLi52YWwucGVybWlzc2lvbnNdLCBbXSk7XHJcbn1cclxuIl19