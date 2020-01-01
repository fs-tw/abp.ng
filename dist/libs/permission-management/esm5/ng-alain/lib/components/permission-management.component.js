/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/permission-management.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PermissionManagementComponent as AbpPermissionManagementComponent } from '@abp/ng.permission-management';
import { Component, Renderer2, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { take } from 'rxjs/operators';
var PermissionManagementComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PermissionManagementComponent, _super);
    function PermissionManagementComponent(_store, _renderer) {
        var _this = _super.call(this, _store, _renderer) || this;
        _this._store = _store;
        _this._renderer = _renderer;
        _this.selectAllIndeterminate = false;
        _this.selectAllThisTabIndeterminate = false;
        return _this;
    }
    Object.defineProperty(PermissionManagementComponent.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!this.selectedGroup)
                return;
            this._visible = value;
            this.visibleChange.emit(value);
            if (!value) {
                this.selectedGroup = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} grantedProviders
     * @return {?}
     */
    PermissionManagementComponent.prototype.isGrantedByOtherProviderName = /**
     * @param {?} grantedProviders
     * @return {?}
     */
    function (grantedProviders) {
        var _this = this;
        if (grantedProviders.length) {
            return grantedProviders.findIndex((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p.providerName !== _this.providerName; })) > -1;
        }
        return false;
    };
    /**
     * @return {?}
     */
    PermissionManagementComponent.prototype.onClickSelectAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectAllIndeterminate = false;
        this.permissions = this.permissions.map((/**
         * @param {?} permission
         * @return {?}
         */
        function (permission) { return (tslib_1.__assign({}, permission, { isGranted: _this.isGrantedByOtherProviderName(permission.grantedProviders) || _this.selectAllTab })); }));
        this.selectThisTab = this.selectAllTab;
    };
    /**
     * @return {?}
     */
    PermissionManagementComponent.prototype.onClickSelectThisTab = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectAllThisTabIndeterminate = false;
        this.selectedGroupPermissions$.pipe(take(1)).subscribe((/**
         * @param {?} permissions
         * @return {?}
         */
        function (permissions) {
            permissions.forEach((/**
             * @param {?} permission
             * @return {?}
             */
            function (permission) {
                if (permission.isGranted && _this.isGrantedByOtherProviderName(permission.grantedProviders))
                    return;
                /** @type {?} */
                var index = _this.permissions.findIndex((/**
                 * @param {?} per
                 * @return {?}
                 */
                function (per) { return per.name === permission.name; }));
                _this.permissions = tslib_1.__spread(_this.permissions.slice(0, index), [
                    tslib_1.__assign({}, _this.permissions[index], { isGranted: _this.selectThisTab })
                ], _this.permissions.slice(index + 1));
            }));
        }));
        this.setGrantCheckboxState();
    };
    /**
     * @param {?} clickedPermission
     * @return {?}
     */
    PermissionManagementComponent.prototype.onClickCheckbox = /**
     * @param {?} clickedPermission
     * @return {?}
     */
    function (clickedPermission) {
        var _this = this;
        if (clickedPermission.isGranted && this.isGrantedByOtherProviderName(clickedPermission.grantedProviders))
            return;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.permissions = _this.permissions.map((/**
             * @param {?} per
             * @return {?}
             */
            function (per) {
                if (clickedPermission.name === per.name) {
                    return tslib_1.__assign({}, per, { isGranted: !per.isGranted });
                }
                else if (clickedPermission.name === per.parentName && clickedPermission.isGranted) {
                    return tslib_1.__assign({}, per, { isGranted: false });
                }
                else if (clickedPermission.parentName === per.name && !clickedPermission.isGranted) {
                    return tslib_1.__assign({}, per, { isGranted: true });
                }
                return per;
            }));
            _this.setTabCheckboxState();
            _this.setGrantCheckboxState();
        }), 0);
    };
    /**
     * @return {?}
     */
    PermissionManagementComponent.prototype.setTabCheckboxState = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectedGroupPermissions$.pipe(take(1)).subscribe((/**
         * @param {?} permissions
         * @return {?}
         */
        function (permissions) {
            /** @type {?} */
            var selectedPermissions = permissions.filter((/**
             * @param {?} per
             * @return {?}
             */
            function (per) { return per.isGranted; }));
            if (selectedPermissions.length === permissions.length) {
                _this.selectAllThisTabIndeterminate = false;
                _this.selectThisTab = true;
            }
            else if (selectedPermissions.length === 0) {
                _this.selectAllThisTabIndeterminate = false;
                _this.selectThisTab = false;
            }
            else {
                _this.selectAllThisTabIndeterminate = true;
            }
        }));
    };
    /**
     * @return {?}
     */
    PermissionManagementComponent.prototype.setGrantCheckboxState = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectedAllPermissions = this.permissions.filter((/**
         * @param {?} per
         * @return {?}
         */
        function (per) { return per.isGranted; }));
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
    };
    PermissionManagementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-alain-permission-management',
                    template: "<ng-container *ngIf=\"{ entityName: entityName$ | async } as data\">\r\n  <nz-modal [(nzVisible)]=\"visible\"\r\n            (nzAfterOpen)=\"initModal()\"\r\n            [nzTitle]=\"modalTitle\"\r\n            [nzContent]=\"modalContent\"\r\n            [nzFooter]=\"modalFooter\"\r\n            (nzOnCancel)=\"visible=false\"\r\n            nzWidth=\"1040\"\r\n  >\r\n\r\n    <ng-template #modalTitle>\r\n      {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} - {{ data.entityName }}\r\n    </ng-template>\r\n\r\n    <ng-template #modalContent>\r\n      <nz-checkbox-wrapper >\r\n        <label nz-checkbox [(ngModel)]=\"selectAllTab\" (ngModelChange)=\"onClickSelectAll()\" [nzIndeterminate]=\"selectAllIndeterminate\">\r\n          {{'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization}}\r\n        </label>\r\n      </nz-checkbox-wrapper>\r\n\r\n\r\n      <div class=\"main\">\r\n        <div class=\"menu\">\r\n          <ul nz-menu nzMode=\"inline\">\r\n            <li *ngFor=\"let group of groups$ | async; trackBy: trackByFn\" nz-menu-item [nzSelected]=\"selectedGroup?.name === group?.name\" (click)=\"onChangeGroup(group)\">{{ group?.displayName }}</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"content\">\r\n          <div class=\"title\">{{ selectedGroup?.displayName }}</div>\r\n          <nz-checkbox-wrapper>\r\n            <label nz-checkbox [(ngModel)]=\"selectThisTab\" (ngModelChange)=\"onClickSelectThisTab()\" [nzIndeterminate]=\"selectAllThisTabIndeterminate\">\r\n              {{'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization}}\r\n            </label>\r\n          </nz-checkbox-wrapper>\r\n          <div *ngFor=\"let permission of selectedGroupPermissions$ | async; let i = index; trackBy: trackByFn\"\r\n               [style.margin-left]=\"permission.margin + 'px'\">\r\n            <nz-checkbox-wrapper>\r\n              <label nz-checkbox\r\n                     [ngModel]=\"getChecked(permission.name)\"\r\n                     [nzDisabled]=\"isGrantedByOtherProviderName(permission.grantedProviders)\"\r\n                     (ngModelChange)=\"onClickCheckbox(permission)\"\r\n                     >\r\n                {{ permission.displayName }}\r\n                <span *ngFor=\"let provider of permission.grantedProviders\">{{ provider.providerName }}: {{ provider.providerKey }}</span>\r\n              </label>\r\n            </nz-checkbox-wrapper>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-template>\r\n\r\n    <ng-template #modalFooter>\r\n      <button nz-button nzType=\"default\" (click)=\"visible=false\">\r\n        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n      </button>\r\n      <button nz-button nzType=\"primary\" (click)=\"submit()\">\r\n        {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n        }}\r\n      </button>\r\n    </ng-template>\r\n\r\n\r\n  </nz-modal>\r\n</ng-container>\r\n",
                    styles: [":host{display:block;padding-top:24px}.main{display:flex;width:100%;overflow:auto;background-color:#fff}.menu{width:224px;border-right:1px solid #e8e8e8}.menu ::ng-deep .ant-menu-inline{border:none}.menu ::ng-deep .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{font-weight:700}.content{flex:1;padding:8px 40px}.content .title{margin-bottom:12px;color:rgba(0,0,0,.85);font-weight:500;font-size:20px;line-height:28px}.content ::ng-deep .ant-list-split .ant-list-item:last-child{border-bottom:1px solid #e8e8e8}.content ::ng-deep .ant-list-item{padding-top:14px;padding-bottom:14px}@media screen and (max-width:767px){.main{flex-direction:column}.main .menu{width:100%;border:none}.main .content{padding:40px}}"]
                }] }
    ];
    /** @nocollapse */
    PermissionManagementComponent.ctorParameters = function () { return [
        { type: Store },
        { type: Renderer2 }
    ]; };
    PermissionManagementComponent.propDecorators = {
        providerName: [{ type: Input }],
        providerKey: [{ type: Input }],
        visible: [{ type: Input }]
    };
    return PermissionManagementComponent;
}(AbpPermissionManagementComponent));
export { PermissionManagementComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQvbmctYWxhaW4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSw2QkFBNkIsSUFBSSxnQ0FBZ0MsRUFBd0IsTUFBTSwrQkFBK0IsQ0FBQztBQUN4SSxPQUFPLEVBQUUsU0FBUyxFQUFxQixTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDO0lBS21ELHlEQUFnQztJQTRCakYsdUNBQW9CLE1BQWEsRUFBVSxTQUFvQjtRQUEvRCxZQUNFLGtCQUFNLE1BQU0sRUFBRSxTQUFTLENBQUMsU0FDekI7UUFGbUIsWUFBTSxHQUFOLE1BQU0sQ0FBTztRQUFVLGVBQVMsR0FBVCxTQUFTLENBQVc7UUFGL0QsNEJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLG1DQUE2QixHQUFHLEtBQUssQ0FBQzs7SUFHdEMsQ0FBQztJQXBCRCxzQkFDSSxrREFBTzs7OztRQURYO1lBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7Ozs7O1FBRUQsVUFBWSxLQUFjO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYTtnQkFBRSxPQUFPO1lBRWhDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRS9CLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7YUFD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QUcsQ0FBQyxTQUFTLEVBQWIsQ0FBYSxFQUFDO1FBRTVFLElBQUksc0JBQXNCLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQzdELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7YUFBTSxJQUFJLHNCQUFzQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztTQUNwQztJQUNILENBQUM7O2dCQWxIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFFMUMsaTVGQUFxRDs7aUJBQ3REOzs7O2dCQU5RLEtBQUs7Z0JBRHlCLFNBQVM7OzsrQkFZN0MsS0FBSzs4QkFHTCxLQUFLOzBCQUdMLEtBQUs7O0lBb0dSLG9DQUFDO0NBQUEsQUFuSEQsQ0FLbUQsZ0NBQWdDLEdBOEdsRjtTQTlHWSw2QkFBNkI7OztJQUl4QyxxREFDcUI7O0lBRXJCLG9EQUNvQjs7SUFrQnBCLCtEQUErQjs7SUFDL0Isc0VBQXNDOzs7OztJQUMxQiwrQ0FBcUI7Ozs7O0lBQUUsa0RBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnQgYXMgQWJwUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnQsIFBlcm1pc3Npb25NYW5hZ2VtZW50IH0gZnJvbSAnQGFicC9uZy5wZXJtaXNzaW9uLW1hbmFnZW1lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLWFsYWluLXBlcm1pc3Npb24tbWFuYWdlbWVudCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGVybWlzc2lvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5sZXNzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Blcm1pc3Npb24tbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50IGV4dGVuZHMgQWJwUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnRcclxuICBpbXBsZW1lbnRzXHJcbiAgICBQZXJtaXNzaW9uTWFuYWdlbWVudC5QZXJtaXNzaW9uTWFuYWdlbWVudENvbXBvbmVudElucHV0cyxcclxuICAgIFBlcm1pc3Npb25NYW5hZ2VtZW50LlBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50T3V0cHV0cyB7XHJcbiAgQElucHV0KClcclxuICBwcm92aWRlck5hbWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBwcm92aWRlcktleTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkR3JvdXApIHJldHVybjtcclxuXHJcbiAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XHJcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkR3JvdXAgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBzZWxlY3RBbGxJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgc2VsZWN0QWxsVGhpc1RhYkluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdG9yZTogU3RvcmUsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKF9zdG9yZSwgX3JlbmRlcmVyKTtcclxuICB9XHJcbiAgaXNHcmFudGVkQnlPdGhlclByb3ZpZGVyTmFtZShncmFudGVkUHJvdmlkZXJzOiBQZXJtaXNzaW9uTWFuYWdlbWVudC5HcmFudGVkUHJvdmlkZXJbXSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGdyYW50ZWRQcm92aWRlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBncmFudGVkUHJvdmlkZXJzLmZpbmRJbmRleChwID0+IHAucHJvdmlkZXJOYW1lICE9PSB0aGlzLnByb3ZpZGVyTmFtZSkgPiAtMTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgb25DbGlja1NlbGVjdEFsbCgpIHtcclxuICAgIHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5wZXJtaXNzaW9ucyA9IHRoaXMucGVybWlzc2lvbnMubWFwKHBlcm1pc3Npb24gPT4gKHtcclxuICAgICAgLi4ucGVybWlzc2lvbixcclxuICAgICAgaXNHcmFudGVkOiB0aGlzLmlzR3JhbnRlZEJ5T3RoZXJQcm92aWRlck5hbWUocGVybWlzc2lvbi5ncmFudGVkUHJvdmlkZXJzKSB8fCB0aGlzLnNlbGVjdEFsbFRhYixcclxuICAgIH0pKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdFRoaXNUYWIgPSB0aGlzLnNlbGVjdEFsbFRhYjtcclxuICB9XHJcbiAgb25DbGlja1NlbGVjdFRoaXNUYWIoKSB7XHJcbiAgICB0aGlzLnNlbGVjdEFsbFRoaXNUYWJJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlbGVjdGVkR3JvdXBQZXJtaXNzaW9ucyQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUocGVybWlzc2lvbnMgPT4ge1xyXG4gICAgICBwZXJtaXNzaW9ucy5mb3JFYWNoKHBlcm1pc3Npb24gPT4ge1xyXG4gICAgICAgIGlmIChwZXJtaXNzaW9uLmlzR3JhbnRlZCAmJiB0aGlzLmlzR3JhbnRlZEJ5T3RoZXJQcm92aWRlck5hbWUocGVybWlzc2lvbi5ncmFudGVkUHJvdmlkZXJzKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucGVybWlzc2lvbnMuZmluZEluZGV4KHBlciA9PiBwZXIubmFtZSA9PT0gcGVybWlzc2lvbi5uYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IFtcclxuICAgICAgICAgIC4uLnRoaXMucGVybWlzc2lvbnMuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgICAgeyAuLi50aGlzLnBlcm1pc3Npb25zW2luZGV4XSwgaXNHcmFudGVkOiB0aGlzLnNlbGVjdFRoaXNUYWIgfSxcclxuICAgICAgICAgIC4uLnRoaXMucGVybWlzc2lvbnMuc2xpY2UoaW5kZXggKyAxKVxyXG4gICAgICAgIF07XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRHcmFudENoZWNrYm94U3RhdGUoKTtcclxuICB9XHJcbiAgb25DbGlja0NoZWNrYm94KGNsaWNrZWRQZXJtaXNzaW9uOiBQZXJtaXNzaW9uTWFuYWdlbWVudC5QZXJtaXNzaW9uKSB7XHJcbiAgICBpZiAoY2xpY2tlZFBlcm1pc3Npb24uaXNHcmFudGVkICYmIHRoaXMuaXNHcmFudGVkQnlPdGhlclByb3ZpZGVyTmFtZShjbGlja2VkUGVybWlzc2lvbi5ncmFudGVkUHJvdmlkZXJzKSkgcmV0dXJuO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucGVybWlzc2lvbnMgPSB0aGlzLnBlcm1pc3Npb25zLm1hcChwZXIgPT4ge1xyXG4gICAgICAgIGlmIChjbGlja2VkUGVybWlzc2lvbi5uYW1lID09PSBwZXIubmFtZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4ucGVyLCBpc0dyYW50ZWQ6ICFwZXIuaXNHcmFudGVkIH07XHJcbiAgICAgICAgfSBlbHNlIGlmIChjbGlja2VkUGVybWlzc2lvbi5uYW1lID09PSBwZXIucGFyZW50TmFtZSAmJiBjbGlja2VkUGVybWlzc2lvbi5pc0dyYW50ZWQpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLnBlciwgaXNHcmFudGVkOiBmYWxzZSB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2xpY2tlZFBlcm1pc3Npb24ucGFyZW50TmFtZSA9PT0gcGVyLm5hbWUgJiYgIWNsaWNrZWRQZXJtaXNzaW9uLmlzR3JhbnRlZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4ucGVyLCBpc0dyYW50ZWQ6IHRydWUgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwZXI7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zZXRUYWJDaGVja2JveFN0YXRlKCk7XHJcbiAgICAgIHRoaXMuc2V0R3JhbnRDaGVja2JveFN0YXRlKCk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgc2V0VGFiQ2hlY2tib3hTdGF0ZSgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRHcm91cFBlcm1pc3Npb25zJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZShwZXJtaXNzaW9ucyA9PiB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkUGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucy5maWx0ZXIocGVyID0+IHBlci5pc0dyYW50ZWQpO1xyXG4gICAgICBpZiAoc2VsZWN0ZWRQZXJtaXNzaW9ucy5sZW5ndGggPT09IHBlcm1pc3Npb25zLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsVGhpc1RhYkluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFRoaXNUYWIgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkUGVybWlzc2lvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBbGxUaGlzVGFiSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0VGhpc1RhYiA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsVGhpc1RhYkluZGV0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc2V0R3JhbnRDaGVja2JveFN0YXRlKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRBbGxQZXJtaXNzaW9ucyA9IHRoaXMucGVybWlzc2lvbnMuZmlsdGVyKHBlciA9PiBwZXIuaXNHcmFudGVkKTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRBbGxQZXJtaXNzaW9ucy5sZW5ndGggPT09IHRoaXMucGVybWlzc2lvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNlbGVjdEFsbFRhYiA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWxsUGVybWlzc2lvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNlbGVjdEFsbFRhYiA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RBbGxJbmRldGVybWluYXRlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ==