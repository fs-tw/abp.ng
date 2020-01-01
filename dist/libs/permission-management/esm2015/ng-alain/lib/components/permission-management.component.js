/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/permission-management.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PermissionManagementComponent as AbpPermissionManagementComponent } from '@abp/ng.permission-management';
import { Component, Renderer2, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { take } from 'rxjs/operators';
export class PermissionManagementComponent extends AbpPermissionManagementComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQvbmctYWxhaW4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLDZCQUE2QixJQUFJLGdDQUFnQyxFQUF3QixNQUFNLCtCQUErQixDQUFDO0FBQ3hJLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNdEMsTUFBTSxPQUFPLDZCQUE4QixTQUFRLGdDQUFnQzs7Ozs7SUE0QmpGLFlBQW9CLE1BQWEsRUFBVSxTQUFvQjtRQUM3RCxLQUFLLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRFAsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFGL0QsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLGtDQUE2QixHQUFHLEtBQUssQ0FBQztJQUd0QyxDQUFDOzs7O0lBcEJELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQUUsT0FBTztRQUVoQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLGFBQWEsR0FB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c0IsR0FBRyxLQUFLLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7YUFBTSxJQUFJLHNCQUFzQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztTQUNwQztJQUNILENBQUM7OztZQWxIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFFMUMsaTVGQUFxRDs7YUFDdEQ7Ozs7WUFOUSxLQUFLO1lBRHlCLFNBQVM7OzsyQkFZN0MsS0FBSzswQkFHTCxLQUFLO3NCQUdMLEtBQUs7Ozs7SUFOTixxREFDcUI7O0lBRXJCLG9EQUNvQjs7SUFrQnBCLCtEQUErQjs7SUFDL0Isc0VBQXNDOzs7OztJQUMxQiwrQ0FBcUI7Ozs7O0lBQUUsa0RBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnQgYXMgQWJwUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnQsIFBlcm1pc3Npb25NYW5hZ2VtZW50IH0gZnJvbSAnQGFicC9uZy5wZXJtaXNzaW9uLW1hbmFnZW1lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLWFsYWluLXBlcm1pc3Npb24tbWFuYWdlbWVudCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGVybWlzc2lvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5sZXNzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Blcm1pc3Npb24tbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50IGV4dGVuZHMgQWJwUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnRcclxuICBpbXBsZW1lbnRzXHJcbiAgICBQZXJtaXNzaW9uTWFuYWdlbWVudC5QZXJtaXNzaW9uTWFuYWdlbWVudENvbXBvbmVudElucHV0cyxcclxuICAgIFBlcm1pc3Npb25NYW5hZ2VtZW50LlBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50T3V0cHV0cyB7XHJcbiAgQElucHV0KClcclxuICBwcm92aWRlck5hbWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBwcm92aWRlcktleTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkR3JvdXApIHJldHVybjtcclxuXHJcbiAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XHJcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkR3JvdXAgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBzZWxlY3RBbGxJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgc2VsZWN0QWxsVGhpc1RhYkluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdG9yZTogU3RvcmUsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKF9zdG9yZSwgX3JlbmRlcmVyKTtcclxuICB9XHJcbiAgaXNHcmFudGVkQnlPdGhlclByb3ZpZGVyTmFtZShncmFudGVkUHJvdmlkZXJzOiBQZXJtaXNzaW9uTWFuYWdlbWVudC5HcmFudGVkUHJvdmlkZXJbXSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGdyYW50ZWRQcm92aWRlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBncmFudGVkUHJvdmlkZXJzLmZpbmRJbmRleChwID0+IHAucHJvdmlkZXJOYW1lICE9PSB0aGlzLnByb3ZpZGVyTmFtZSkgPiAtMTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgb25DbGlja1NlbGVjdEFsbCgpIHtcclxuICAgIHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5wZXJtaXNzaW9ucyA9IHRoaXMucGVybWlzc2lvbnMubWFwKHBlcm1pc3Npb24gPT4gKHtcclxuICAgICAgLi4ucGVybWlzc2lvbixcclxuICAgICAgaXNHcmFudGVkOiB0aGlzLmlzR3JhbnRlZEJ5T3RoZXJQcm92aWRlck5hbWUocGVybWlzc2lvbi5ncmFudGVkUHJvdmlkZXJzKSB8fCB0aGlzLnNlbGVjdEFsbFRhYixcclxuICAgIH0pKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdFRoaXNUYWIgPSB0aGlzLnNlbGVjdEFsbFRhYjtcclxuICB9XHJcbiAgb25DbGlja1NlbGVjdFRoaXNUYWIoKSB7XHJcbiAgICB0aGlzLnNlbGVjdEFsbFRoaXNUYWJJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlbGVjdGVkR3JvdXBQZXJtaXNzaW9ucyQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUocGVybWlzc2lvbnMgPT4ge1xyXG4gICAgICBwZXJtaXNzaW9ucy5mb3JFYWNoKHBlcm1pc3Npb24gPT4ge1xyXG4gICAgICAgIGlmIChwZXJtaXNzaW9uLmlzR3JhbnRlZCAmJiB0aGlzLmlzR3JhbnRlZEJ5T3RoZXJQcm92aWRlck5hbWUocGVybWlzc2lvbi5ncmFudGVkUHJvdmlkZXJzKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucGVybWlzc2lvbnMuZmluZEluZGV4KHBlciA9PiBwZXIubmFtZSA9PT0gcGVybWlzc2lvbi5uYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IFtcclxuICAgICAgICAgIC4uLnRoaXMucGVybWlzc2lvbnMuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgICAgeyAuLi50aGlzLnBlcm1pc3Npb25zW2luZGV4XSwgaXNHcmFudGVkOiB0aGlzLnNlbGVjdFRoaXNUYWIgfSxcclxuICAgICAgICAgIC4uLnRoaXMucGVybWlzc2lvbnMuc2xpY2UoaW5kZXggKyAxKVxyXG4gICAgICAgIF07XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRHcmFudENoZWNrYm94U3RhdGUoKTtcclxuICB9XHJcbiAgb25DbGlja0NoZWNrYm94KGNsaWNrZWRQZXJtaXNzaW9uOiBQZXJtaXNzaW9uTWFuYWdlbWVudC5QZXJtaXNzaW9uKSB7XHJcbiAgICBpZiAoY2xpY2tlZFBlcm1pc3Npb24uaXNHcmFudGVkICYmIHRoaXMuaXNHcmFudGVkQnlPdGhlclByb3ZpZGVyTmFtZShjbGlja2VkUGVybWlzc2lvbi5ncmFudGVkUHJvdmlkZXJzKSkgcmV0dXJuO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucGVybWlzc2lvbnMgPSB0aGlzLnBlcm1pc3Npb25zLm1hcChwZXIgPT4ge1xyXG4gICAgICAgIGlmIChjbGlja2VkUGVybWlzc2lvbi5uYW1lID09PSBwZXIubmFtZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4ucGVyLCBpc0dyYW50ZWQ6ICFwZXIuaXNHcmFudGVkIH07XHJcbiAgICAgICAgfSBlbHNlIGlmIChjbGlja2VkUGVybWlzc2lvbi5uYW1lID09PSBwZXIucGFyZW50TmFtZSAmJiBjbGlja2VkUGVybWlzc2lvbi5pc0dyYW50ZWQpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLnBlciwgaXNHcmFudGVkOiBmYWxzZSB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2xpY2tlZFBlcm1pc3Npb24ucGFyZW50TmFtZSA9PT0gcGVyLm5hbWUgJiYgIWNsaWNrZWRQZXJtaXNzaW9uLmlzR3JhbnRlZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4ucGVyLCBpc0dyYW50ZWQ6IHRydWUgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwZXI7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zZXRUYWJDaGVja2JveFN0YXRlKCk7XHJcbiAgICAgIHRoaXMuc2V0R3JhbnRDaGVja2JveFN0YXRlKCk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgc2V0VGFiQ2hlY2tib3hTdGF0ZSgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRHcm91cFBlcm1pc3Npb25zJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZShwZXJtaXNzaW9ucyA9PiB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkUGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucy5maWx0ZXIocGVyID0+IHBlci5pc0dyYW50ZWQpO1xyXG4gICAgICBpZiAoc2VsZWN0ZWRQZXJtaXNzaW9ucy5sZW5ndGggPT09IHBlcm1pc3Npb25zLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsVGhpc1RhYkluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFRoaXNUYWIgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkUGVybWlzc2lvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBbGxUaGlzVGFiSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0VGhpc1RhYiA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsVGhpc1RhYkluZGV0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc2V0R3JhbnRDaGVja2JveFN0YXRlKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRBbGxQZXJtaXNzaW9ucyA9IHRoaXMucGVybWlzc2lvbnMuZmlsdGVyKHBlciA9PiBwZXIuaXNHcmFudGVkKTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRBbGxQZXJtaXNzaW9ucy5sZW5ndGggPT09IHRoaXMucGVybWlzc2lvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNlbGVjdEFsbFRhYiA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWxsUGVybWlzc2lvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNlbGVjdEFsbFRhYiA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RBbGxJbmRldGVybWluYXRlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ==