import { __decorate, __metadata } from "tslib";
import { ConfigState, GetAppConfiguration } from '@abp/ng.core';
import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { finalize, map, pluck, switchMap, take, tap } from 'rxjs/operators';
import { GetPermissions, UpdatePermissions } from '../actions/permission-management.actions';
import { PermissionManagementState } from '../states/permission-management.state';
let PermissionManagementComponent = class PermissionManagementComponent {
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
        this.trackByFn = (_, item) => item.name;
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        if (value === this._visible)
            return;
        if (value) {
            this.openModal().subscribe(() => {
                this._visible = true;
                this.visibleChange.emit(true);
            });
        }
        else {
            this.selectedGroup = null;
            this._visible = false;
            this.visibleChange.emit(false);
        }
    }
    get selectedGroupPermissions$() {
        const margin = `margin-${document.body.dir === 'rtl' ? 'right' : 'left'}.px`;
        return this.groups$.pipe(map(groups => this.selectedGroup
            ? groups.find(group => group.name === this.selectedGroup.name).permissions
            : []), map(permissions => permissions.map(permission => (Object.assign(Object.assign({}, permission), { style: { [margin]: findMargin(permissions, permission) }, isGranted: this.permissions.find(per => per.name === permission.name).isGranted })))));
    }
    getChecked(name) {
        return (this.permissions.find(per => per.name === name) || { isGranted: false }).isGranted;
    }
    isGrantedByOtherProviderName(grantedProviders) {
        if (grantedProviders.length) {
            return grantedProviders.findIndex(p => p.providerName !== this.providerName) > -1;
        }
        return false;
    }
    onClickCheckbox(clickedPermission, value) {
        if (clickedPermission.isGranted &&
            this.isGrantedByOtherProviderName(clickedPermission.grantedProviders))
            return;
        setTimeout(() => {
            this.permissions = this.permissions.map(per => {
                if (clickedPermission.name === per.name) {
                    return Object.assign(Object.assign({}, per), { isGranted: !per.isGranted });
                }
                else if (clickedPermission.name === per.parentName && clickedPermission.isGranted) {
                    return Object.assign(Object.assign({}, per), { isGranted: false });
                }
                else if (clickedPermission.parentName === per.name && !clickedPermission.isGranted) {
                    return Object.assign(Object.assign({}, per), { isGranted: true });
                }
                return per;
            });
            this.setTabCheckboxState();
            this.setGrantCheckboxState();
        }, 0);
    }
    setTabCheckboxState() {
        this.selectedGroupPermissions$.pipe(take(1)).subscribe(permissions => {
            const selectedPermissions = permissions.filter(per => per.isGranted);
            const element = document.querySelector('#select-all-in-this-tabs');
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
        });
    }
    setGrantCheckboxState() {
        const selectedAllPermissions = this.permissions.filter(per => per.isGranted);
        const checkboxElement = document.querySelector('#select-all-in-all-tabs');
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
    onClickSelectThisTab() {
        this.selectedGroupPermissions$.pipe(take(1)).subscribe(permissions => {
            permissions.forEach(permission => {
                if (permission.isGranted && this.isGrantedByOtherProviderName(permission.grantedProviders))
                    return;
                const index = this.permissions.findIndex(per => per.name === permission.name);
                this.permissions = [
                    ...this.permissions.slice(0, index),
                    Object.assign(Object.assign({}, this.permissions[index]), { isGranted: !this.selectThisTab }),
                    ...this.permissions.slice(index + 1),
                ];
            });
        });
        this.setGrantCheckboxState();
    }
    onClickSelectAll() {
        this.permissions = this.permissions.map(permission => (Object.assign(Object.assign({}, permission), { isGranted: this.isGrantedByOtherProviderName(permission.grantedProviders) || !this.selectAllTab })));
        this.selectThisTab = !this.selectAllTab;
    }
    onChangeGroup(group) {
        this.selectedGroup = group;
        this.setTabCheckboxState();
    }
    submit() {
        const unchangedPermissions = getPermissions(this.store.selectSnapshot(PermissionManagementState.getPermissionGroups));
        const changedPermissions = this.permissions
            .filter(per => unchangedPermissions.find(unchanged => unchanged.name === per.name).isGranted ===
            per.isGranted
            ? false
            : true)
            .map(({ name, isGranted }) => ({ name, isGranted }));
        if (!changedPermissions.length) {
            this.visible = false;
            return;
        }
        this.modalBusy = true;
        this.store
            .dispatch(new UpdatePermissions({
            providerKey: this.providerKey,
            providerName: this.providerName,
            permissions: changedPermissions,
        }))
            .pipe(switchMap(() => this.shouldFetchAppConfig() ? this.store.dispatch(GetAppConfiguration) : of(null)), finalize(() => (this.modalBusy = false)))
            .subscribe(() => {
            this.visible = false;
        });
    }
    openModal() {
        if (!this.providerKey || !this.providerName) {
            throw new Error('Provider Key and Provider Name are required.');
        }
        return this.store
            .dispatch(new GetPermissions({
            providerKey: this.providerKey,
            providerName: this.providerName,
        }))
            .pipe(pluck('PermissionManagementState', 'permissionRes'), tap((permissionRes) => {
            this.selectedGroup = permissionRes.groups[0];
            this.permissions = getPermissions(permissionRes.groups);
        }));
    }
    initModal() {
        this.setTabCheckboxState();
        this.setGrantCheckboxState();
    }
    getAssignedCount(groupName) {
        return this.permissions.reduce((acc, val) => (val.name.split('.')[0] === groupName && val.isGranted ? acc + 1 : acc), 0);
    }
    shouldFetchAppConfig() {
        const currentUser = this.store.selectSnapshot(ConfigState.getOne('currentUser'));
        if (this.providerName === 'R')
            return currentUser.roles.some(role => role === this.providerKey);
        if (this.providerName === 'U')
            return currentUser.id === this.providerKey;
        return false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], PermissionManagementComponent.prototype, "providerName", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PermissionManagementComponent.prototype, "providerKey", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PermissionManagementComponent.prototype, "hideBadges", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PermissionManagementComponent.prototype, "visible", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], PermissionManagementComponent.prototype, "visibleChange", void 0);
__decorate([
    Select(PermissionManagementState.getPermissionGroups),
    __metadata("design:type", Observable)
], PermissionManagementComponent.prototype, "groups$", void 0);
__decorate([
    Select(PermissionManagementState.getEntityDisplayName),
    __metadata("design:type", Observable)
], PermissionManagementComponent.prototype, "entityName$", void 0);
PermissionManagementComponent = __decorate([
    Component({
        selector: 'abp-permission-management',
        template: "<abp-modal [(visible)]=\"visible\" (init)=\"initModal()\" [busy]=\"modalBusy\">\r\n  <ng-container *ngIf=\"{ entityName: entityName$ | async } as data\">\r\n    <ng-template #abpHeader>\r\n      <h4>\r\n        {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} - {{ data.entityName }}\r\n      </h4>\r\n    </ng-template>\r\n    <ng-template #abpBody>\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"select-all-in-all-tabs\"\r\n          name=\"select-all-in-all-tabs\"\r\n          class=\"custom-control-input\"\r\n          [(ngModel)]=\"selectAllTab\"\r\n          (click)=\"onClickSelectAll()\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"select-all-in-all-tabs\">{{\r\n          'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n\r\n      <hr class=\"mt-2 mb-2\" />\r\n      <div class=\"row\">\r\n        <div class=\"overflow-scroll col-md-4\">\r\n          <ul class=\"nav nav-pills flex-column\">\r\n            <li *ngFor=\"let group of groups$ | async; trackBy: trackByFn\" class=\"nav-item\">\r\n              <a\r\n                *ngIf=\"{ assignedCount: getAssignedCount(group.name) } as data\"\r\n                class=\"nav-link pointer\"\r\n                [class.active]=\"selectedGroup?.name === group?.name\"\r\n                (click)=\"onChangeGroup(group)\"\r\n              >\r\n                <div [class.font-weight-bold]=\"data.assignedCount\">\r\n                  {{ group?.displayName }}\r\n                  <span>({{ data.assignedCount }})</span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-8 overflow-scroll\">\r\n          <h4>{{ selectedGroup?.displayName }}</h4>\r\n          <hr class=\"mt-2 mb-3\" />\r\n          <div class=\"pl-1 pt-1\">\r\n            <div class=\"custom-checkbox custom-control mb-2\">\r\n              <input\r\n                type=\"checkbox\"\r\n                id=\"select-all-in-this-tabs\"\r\n                name=\"select-all-in-this-tabs\"\r\n                class=\"custom-control-input\"\r\n                [(ngModel)]=\"selectThisTab\"\r\n                (click)=\"onClickSelectThisTab()\"\r\n              />\r\n              <label class=\"custom-control-label\" for=\"select-all-in-this-tabs\">{{\r\n                'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization\r\n              }}</label>\r\n            </div>\r\n            <hr class=\"mb-3\" />\r\n            <div\r\n              *ngFor=\"\r\n                let permission of selectedGroupPermissions$ | async;\r\n                let i = index;\r\n                trackBy: trackByFn\r\n              \"\r\n              [ngStyle]=\"permission.style\"\r\n              class=\"custom-checkbox custom-control mb-2\"\r\n            >\r\n              <input\r\n                #permissionCheckbox\r\n                type=\"checkbox\"\r\n                [checked]=\"getChecked(permission.name)\"\r\n                [value]=\"getChecked(permission.name)\"\r\n                [attr.id]=\"permission.name\"\r\n                class=\"custom-control-input\"\r\n                [disabled]=\"isGrantedByOtherProviderName(permission.grantedProviders)\"\r\n              />\r\n              <label\r\n                class=\"custom-control-label\"\r\n                [attr.for]=\"permission.name\"\r\n                (click)=\"onClickCheckbox(permission, permissionCheckbox.value)\"\r\n                >{{ permission.displayName }}\r\n                <ng-container *ngIf=\"!hideBadges\">\r\n                  <span\r\n                    *ngFor=\"let provider of permission.grantedProviders\"\r\n                    class=\"badge badge-light\"\r\n                    >{{ provider.providerName }}: {{ provider.providerKey }}</span\r\n                  >\r\n                </ng-container>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template #abpFooter>\r\n      <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button iconClass=\"fa fa-check\" (click)=\"submit()\">{{\r\n        'AbpIdentity::Save' | abpLocalization\r\n      }}</abp-button>\r\n    </ng-template>\r\n  </ng-container>\r\n</abp-modal>\r\n",
        exportAs: 'abpPermissionManagement',
        styles: [`
      .overflow-scroll {
        max-height: 70vh;
        overflow-y: scroll;
      }
    `]
    }),
    __metadata("design:paramtypes", [Store, Renderer2])
], PermissionManagementComponent);
export { PermissionManagementComponent };
function findMargin(permissions, permission) {
    const parentPermission = permissions.find(per => per.name === permission.parentName);
    if (parentPermission && parentPermission.parentName) {
        let margin = 20;
        return (margin += findMargin(permissions, parentPermission));
    }
    return parentPermission ? 20 : 0;
}
function getPermissions(groups) {
    return groups.reduce((acc, val) => [...acc, ...val.permissions], []);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3Blcm1pc3Npb24tbWFuYWdlbWVudC9zcmMvbGliL2NvbXBvbmVudHMvcGVybWlzc2lvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUE0QixXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFMUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUU3RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQW1CbEYsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBNkI7SUErRXhDLFlBQW9CLEtBQVksRUFBVSxRQUFtQjtRQUF6QyxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQXBFcEQsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBc0JSLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVUvRCxnQkFBVyxHQUFzQyxFQUFFLENBQUM7UUFFcEQsa0JBQWEsR0FBRyxLQUFLLENB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MFF6QztTQTFRWSw2QkFBNkI7QUE0UTFDLFNBQVMsVUFBVSxDQUNqQixXQUE4QyxFQUM5QyxVQUEyQztJQUUzQyxNQUFNLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVyRixJQUFJLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRTtRQUNuRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztLQUM5RDtJQUVELE9BQU8sZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxNQUFvQztJQUMxRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24sIENvbmZpZ1N0YXRlLCBHZXRBcHBDb25maWd1cmF0aW9uIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgTG9jYWxlRGlyZWN0aW9uIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyLCBUcmFja0J5RnVuY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmluYWxpemUsIG1hcCwgcGx1Y2ssIHN3aXRjaE1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBHZXRQZXJtaXNzaW9ucywgVXBkYXRlUGVybWlzc2lvbnMgfSBmcm9tICcuLi9hY3Rpb25zL3Blcm1pc3Npb24tbWFuYWdlbWVudC5hY3Rpb25zJztcclxuaW1wb3J0IHsgUGVybWlzc2lvbk1hbmFnZW1lbnQgfSBmcm9tICcuLi9tb2RlbHMvcGVybWlzc2lvbi1tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgUGVybWlzc2lvbk1hbmFnZW1lbnRTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuc3RhdGUnO1xyXG5cclxudHlwZSBQZXJtaXNzaW9uV2l0aFN0eWxlID0gUGVybWlzc2lvbk1hbmFnZW1lbnQuUGVybWlzc2lvbiAmIHtcclxuICBzdHlsZTogc3RyaW5nO1xyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtcGVybWlzc2lvbi1tYW5hZ2VtZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGVybWlzc2lvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBleHBvcnRBczogJ2FicFBlcm1pc3Npb25NYW5hZ2VtZW50JyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLm92ZXJmbG93LXNjcm9sbCB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNzB2aDtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgIH1cclxuICAgIGAsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50XHJcbiAgaW1wbGVtZW50c1xyXG4gICAgUGVybWlzc2lvbk1hbmFnZW1lbnQuUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnRJbnB1dHMsXHJcbiAgICBQZXJtaXNzaW9uTWFuYWdlbWVudC5QZXJtaXNzaW9uTWFuYWdlbWVudENvbXBvbmVudE91dHB1dHMge1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVhZG9ubHkgcHJvdmlkZXJOYW1lOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcmVhZG9ubHkgcHJvdmlkZXJLZXk6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICByZWFkb25seSBoaWRlQmFkZ2VzID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCBfdmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLl92aXNpYmxlKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMub3Blbk1vZGFsKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLl92aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkR3JvdXAgPSBudWxsO1xyXG4gICAgICB0aGlzLl92aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBAU2VsZWN0KFBlcm1pc3Npb25NYW5hZ2VtZW50U3RhdGUuZ2V0UGVybWlzc2lvbkdyb3VwcylcclxuICBncm91cHMkOiBPYnNlcnZhYmxlPFBlcm1pc3Npb25NYW5hZ2VtZW50Lkdyb3VwW10+O1xyXG5cclxuICBAU2VsZWN0KFBlcm1pc3Npb25NYW5hZ2VtZW50U3RhdGUuZ2V0RW50aXR5RGlzcGxheU5hbWUpXHJcbiAgZW50aXR5TmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcbiAgc2VsZWN0ZWRHcm91cDogUGVybWlzc2lvbk1hbmFnZW1lbnQuR3JvdXA7XHJcblxyXG4gIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uTWFuYWdlbWVudC5QZXJtaXNzaW9uW10gPSBbXTtcclxuXHJcbiAgc2VsZWN0VGhpc1RhYiA9IGZhbHNlO1xyXG5cclxuICBzZWxlY3RBbGxUYWIgPSBmYWxzZTtcclxuXHJcbiAgbW9kYWxCdXN5ID0gZmFsc2U7XHJcblxyXG4gIHRyYWNrQnlGbjogVHJhY2tCeUZ1bmN0aW9uPFBlcm1pc3Npb25NYW5hZ2VtZW50Lkdyb3VwPiA9IChfLCBpdGVtKSA9PiBpdGVtLm5hbWU7XHJcblxyXG4gIGdldCBzZWxlY3RlZEdyb3VwUGVybWlzc2lvbnMkKCk6IE9ic2VydmFibGU8UGVybWlzc2lvbldpdGhTdHlsZVtdPiB7XHJcbiAgICBjb25zdCBtYXJnaW4gPSBgbWFyZ2luLSR7XHJcbiAgICAgIChkb2N1bWVudC5ib2R5LmRpciBhcyBMb2NhbGVEaXJlY3Rpb24pID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCdcclxuICAgIH0ucHhgO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmdyb3VwcyQucGlwZShcclxuICAgICAgbWFwKGdyb3VwcyA9PlxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHcm91cFxyXG4gICAgICAgICAgPyBncm91cHMuZmluZChncm91cCA9PiBncm91cC5uYW1lID09PSB0aGlzLnNlbGVjdGVkR3JvdXAubmFtZSkucGVybWlzc2lvbnNcclxuICAgICAgICAgIDogW10sXHJcbiAgICAgICksXHJcbiAgICAgIG1hcDxQZXJtaXNzaW9uTWFuYWdlbWVudC5QZXJtaXNzaW9uW10sIFBlcm1pc3Npb25XaXRoU3R5bGVbXT4ocGVybWlzc2lvbnMgPT5cclxuICAgICAgICBwZXJtaXNzaW9ucy5tYXAoXHJcbiAgICAgICAgICBwZXJtaXNzaW9uID0+XHJcbiAgICAgICAgICAgICgoe1xyXG4gICAgICAgICAgICAgIC4uLnBlcm1pc3Npb24sXHJcbiAgICAgICAgICAgICAgc3R5bGU6IHsgW21hcmdpbl06IGZpbmRNYXJnaW4ocGVybWlzc2lvbnMsIHBlcm1pc3Npb24pIH0sXHJcbiAgICAgICAgICAgICAgaXNHcmFudGVkOiB0aGlzLnBlcm1pc3Npb25zLmZpbmQocGVyID0+IHBlci5uYW1lID09PSBwZXJtaXNzaW9uLm5hbWUpLmlzR3JhbnRlZCxcclxuICAgICAgICAgICAgfSBhcyBhbnkpIGFzIFBlcm1pc3Npb25XaXRoU3R5bGUpLFxyXG4gICAgICAgICksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cclxuXHJcbiAgZ2V0Q2hlY2tlZChuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAodGhpcy5wZXJtaXNzaW9ucy5maW5kKHBlciA9PiBwZXIubmFtZSA9PT0gbmFtZSkgfHwgeyBpc0dyYW50ZWQ6IGZhbHNlIH0pLmlzR3JhbnRlZDtcclxuICB9XHJcblxyXG4gIGlzR3JhbnRlZEJ5T3RoZXJQcm92aWRlck5hbWUoZ3JhbnRlZFByb3ZpZGVyczogUGVybWlzc2lvbk1hbmFnZW1lbnQuR3JhbnRlZFByb3ZpZGVyW10pOiBib29sZWFuIHtcclxuICAgIGlmIChncmFudGVkUHJvdmlkZXJzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZ3JhbnRlZFByb3ZpZGVycy5maW5kSW5kZXgocCA9PiBwLnByb3ZpZGVyTmFtZSAhPT0gdGhpcy5wcm92aWRlck5hbWUpID4gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrQ2hlY2tib3goY2xpY2tlZFBlcm1pc3Npb246IFBlcm1pc3Npb25NYW5hZ2VtZW50LlBlcm1pc3Npb24sIHZhbHVlKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGNsaWNrZWRQZXJtaXNzaW9uLmlzR3JhbnRlZCAmJlxyXG4gICAgICB0aGlzLmlzR3JhbnRlZEJ5T3RoZXJQcm92aWRlck5hbWUoY2xpY2tlZFBlcm1pc3Npb24uZ3JhbnRlZFByb3ZpZGVycylcclxuICAgIClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnBlcm1pc3Npb25zID0gdGhpcy5wZXJtaXNzaW9ucy5tYXAocGVyID0+IHtcclxuICAgICAgICBpZiAoY2xpY2tlZFBlcm1pc3Npb24ubmFtZSA9PT0gcGVyLm5hbWUpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLnBlciwgaXNHcmFudGVkOiAhcGVyLmlzR3JhbnRlZCB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2xpY2tlZFBlcm1pc3Npb24ubmFtZSA9PT0gcGVyLnBhcmVudE5hbWUgJiYgY2xpY2tlZFBlcm1pc3Npb24uaXNHcmFudGVkKSB7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5wZXIsIGlzR3JhbnRlZDogZmFsc2UgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNsaWNrZWRQZXJtaXNzaW9uLnBhcmVudE5hbWUgPT09IHBlci5uYW1lICYmICFjbGlja2VkUGVybWlzc2lvbi5pc0dyYW50ZWQpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLnBlciwgaXNHcmFudGVkOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGVyO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuc2V0VGFiQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgICB0aGlzLnNldEdyYW50Q2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBzZXRUYWJDaGVja2JveFN0YXRlKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEdyb3VwUGVybWlzc2lvbnMkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHBlcm1pc3Npb25zID0+IHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRQZXJtaXNzaW9ucyA9IHBlcm1pc3Npb25zLmZpbHRlcihwZXIgPT4gcGVyLmlzR3JhbnRlZCk7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LWFsbC1pbi10aGlzLXRhYnMnKSBhcyBhbnk7XHJcblxyXG4gICAgICBpZiAoc2VsZWN0ZWRQZXJtaXNzaW9ucy5sZW5ndGggPT09IHBlcm1pc3Npb25zLmxlbmd0aCkge1xyXG4gICAgICAgIGVsZW1lbnQuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0VGhpc1RhYiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRQZXJtaXNzaW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBlbGVtZW50LmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFRoaXNUYWIgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEdyYW50Q2hlY2tib3hTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkQWxsUGVybWlzc2lvbnMgPSB0aGlzLnBlcm1pc3Npb25zLmZpbHRlcihwZXIgPT4gcGVyLmlzR3JhbnRlZCk7XHJcbiAgICBjb25zdCBjaGVja2JveEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LWFsbC1pbi1hbGwtdGFicycpIGFzIGFueTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRBbGxQZXJtaXNzaW9ucy5sZW5ndGggPT09IHRoaXMucGVybWlzc2lvbnMubGVuZ3RoKSB7XHJcbiAgICAgIGNoZWNrYm94RWxlbWVudC5pbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsVGFiID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBbGxQZXJtaXNzaW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgY2hlY2tib3hFbGVtZW50LmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zZWxlY3RBbGxUYWIgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoZWNrYm94RWxlbWVudC5pbmRldGVybWluYXRlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tTZWxlY3RUaGlzVGFiKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEdyb3VwUGVybWlzc2lvbnMkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHBlcm1pc3Npb25zID0+IHtcclxuICAgICAgcGVybWlzc2lvbnMuZm9yRWFjaChwZXJtaXNzaW9uID0+IHtcclxuICAgICAgICBpZiAocGVybWlzc2lvbi5pc0dyYW50ZWQgJiYgdGhpcy5pc0dyYW50ZWRCeU90aGVyUHJvdmlkZXJOYW1lKHBlcm1pc3Npb24uZ3JhbnRlZFByb3ZpZGVycykpXHJcbiAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wZXJtaXNzaW9ucy5maW5kSW5kZXgocGVyID0+IHBlci5uYW1lID09PSBwZXJtaXNzaW9uLm5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gW1xyXG4gICAgICAgICAgLi4udGhpcy5wZXJtaXNzaW9ucy5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgICB7IC4uLnRoaXMucGVybWlzc2lvbnNbaW5kZXhdLCBpc0dyYW50ZWQ6ICF0aGlzLnNlbGVjdFRoaXNUYWIgfSxcclxuICAgICAgICAgIC4uLnRoaXMucGVybWlzc2lvbnMuc2xpY2UoaW5kZXggKyAxKSxcclxuICAgICAgICBdO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0R3JhbnRDaGVja2JveFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrU2VsZWN0QWxsKCkge1xyXG4gICAgdGhpcy5wZXJtaXNzaW9ucyA9IHRoaXMucGVybWlzc2lvbnMubWFwKHBlcm1pc3Npb24gPT4gKHtcclxuICAgICAgLi4ucGVybWlzc2lvbixcclxuICAgICAgaXNHcmFudGVkOlxyXG4gICAgICAgIHRoaXMuaXNHcmFudGVkQnlPdGhlclByb3ZpZGVyTmFtZShwZXJtaXNzaW9uLmdyYW50ZWRQcm92aWRlcnMpIHx8ICF0aGlzLnNlbGVjdEFsbFRhYixcclxuICAgIH0pKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdFRoaXNUYWIgPSAhdGhpcy5zZWxlY3RBbGxUYWI7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZUdyb3VwKGdyb3VwOiBQZXJtaXNzaW9uTWFuYWdlbWVudC5Hcm91cCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEdyb3VwID0gZ3JvdXA7XHJcbiAgICB0aGlzLnNldFRhYkNoZWNrYm94U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIGNvbnN0IHVuY2hhbmdlZFBlcm1pc3Npb25zID0gZ2V0UGVybWlzc2lvbnMoXHJcbiAgICAgIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoUGVybWlzc2lvbk1hbmFnZW1lbnRTdGF0ZS5nZXRQZXJtaXNzaW9uR3JvdXBzKSxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlZFBlcm1pc3Npb25zOiBQZXJtaXNzaW9uTWFuYWdlbWVudC5NaW5pbXVtUGVybWlzc2lvbltdID0gdGhpcy5wZXJtaXNzaW9uc1xyXG4gICAgICAuZmlsdGVyKHBlciA9PlxyXG4gICAgICAgIHVuY2hhbmdlZFBlcm1pc3Npb25zLmZpbmQodW5jaGFuZ2VkID0+IHVuY2hhbmdlZC5uYW1lID09PSBwZXIubmFtZSkuaXNHcmFudGVkID09PVxyXG4gICAgICAgIHBlci5pc0dyYW50ZWRcclxuICAgICAgICAgID8gZmFsc2VcclxuICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgKVxyXG4gICAgICAubWFwKCh7IG5hbWUsIGlzR3JhbnRlZCB9KSA9PiAoeyBuYW1lLCBpc0dyYW50ZWQgfSkpO1xyXG5cclxuICAgIGlmICghY2hhbmdlZFBlcm1pc3Npb25zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubW9kYWxCdXN5ID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKFxyXG4gICAgICAgIG5ldyBVcGRhdGVQZXJtaXNzaW9ucyh7XHJcbiAgICAgICAgICBwcm92aWRlcktleTogdGhpcy5wcm92aWRlcktleSxcclxuICAgICAgICAgIHByb3ZpZGVyTmFtZTogdGhpcy5wcm92aWRlck5hbWUsXHJcbiAgICAgICAgICBwZXJtaXNzaW9uczogY2hhbmdlZFBlcm1pc3Npb25zLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PlxyXG4gICAgICAgICAgdGhpcy5zaG91bGRGZXRjaEFwcENvbmZpZygpID8gdGhpcy5zdG9yZS5kaXNwYXRjaChHZXRBcHBDb25maWd1cmF0aW9uKSA6IG9mKG51bGwpLFxyXG4gICAgICAgICksXHJcbiAgICAgICAgZmluYWxpemUoKCkgPT4gKHRoaXMubW9kYWxCdXN5ID0gZmFsc2UpKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwoKSB7XHJcbiAgICBpZiAoIXRoaXMucHJvdmlkZXJLZXkgfHwgIXRoaXMucHJvdmlkZXJOYW1lKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUHJvdmlkZXIgS2V5IGFuZCBQcm92aWRlciBOYW1lIGFyZSByZXF1aXJlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2goXHJcbiAgICAgICAgbmV3IEdldFBlcm1pc3Npb25zKHtcclxuICAgICAgICAgIHByb3ZpZGVyS2V5OiB0aGlzLnByb3ZpZGVyS2V5LFxyXG4gICAgICAgICAgcHJvdmlkZXJOYW1lOiB0aGlzLnByb3ZpZGVyTmFtZSxcclxuICAgICAgICB9KSxcclxuICAgICAgKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBwbHVjaygnUGVybWlzc2lvbk1hbmFnZW1lbnRTdGF0ZScsICdwZXJtaXNzaW9uUmVzJyksXHJcbiAgICAgICAgdGFwKChwZXJtaXNzaW9uUmVzOiBQZXJtaXNzaW9uTWFuYWdlbWVudC5SZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEdyb3VwID0gcGVybWlzc2lvblJlcy5ncm91cHNbMF07XHJcbiAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gZ2V0UGVybWlzc2lvbnMocGVybWlzc2lvblJlcy5ncm91cHMpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgaW5pdE1vZGFsKCkge1xyXG4gICAgdGhpcy5zZXRUYWJDaGVja2JveFN0YXRlKCk7XHJcbiAgICB0aGlzLnNldEdyYW50Q2hlY2tib3hTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXNzaWduZWRDb3VudChncm91cE5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMucGVybWlzc2lvbnMucmVkdWNlKFxyXG4gICAgICAoYWNjLCB2YWwpID0+ICh2YWwubmFtZS5zcGxpdCgnLicpWzBdID09PSBncm91cE5hbWUgJiYgdmFsLmlzR3JhbnRlZCA/IGFjYyArIDEgOiBhY2MpLFxyXG4gICAgICAwLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNob3VsZEZldGNoQXBwQ29uZmlnKCkge1xyXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFxyXG4gICAgICBDb25maWdTdGF0ZS5nZXRPbmUoJ2N1cnJlbnRVc2VyJyksXHJcbiAgICApIGFzIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5DdXJyZW50VXNlcjtcclxuXHJcbiAgICBpZiAodGhpcy5wcm92aWRlck5hbWUgPT09ICdSJykgcmV0dXJuIGN1cnJlbnRVc2VyLnJvbGVzLnNvbWUocm9sZSA9PiByb2xlID09PSB0aGlzLnByb3ZpZGVyS2V5KTtcclxuXHJcbiAgICBpZiAodGhpcy5wcm92aWRlck5hbWUgPT09ICdVJykgcmV0dXJuIGN1cnJlbnRVc2VyLmlkID09PSB0aGlzLnByb3ZpZGVyS2V5O1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRNYXJnaW4oXHJcbiAgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25NYW5hZ2VtZW50LlBlcm1pc3Npb25bXSxcclxuICBwZXJtaXNzaW9uOiBQZXJtaXNzaW9uTWFuYWdlbWVudC5QZXJtaXNzaW9uLFxyXG4pIHtcclxuICBjb25zdCBwYXJlbnRQZXJtaXNzaW9uID0gcGVybWlzc2lvbnMuZmluZChwZXIgPT4gcGVyLm5hbWUgPT09IHBlcm1pc3Npb24ucGFyZW50TmFtZSk7XHJcblxyXG4gIGlmIChwYXJlbnRQZXJtaXNzaW9uICYmIHBhcmVudFBlcm1pc3Npb24ucGFyZW50TmFtZSkge1xyXG4gICAgbGV0IG1hcmdpbiA9IDIwO1xyXG4gICAgcmV0dXJuIChtYXJnaW4gKz0gZmluZE1hcmdpbihwZXJtaXNzaW9ucywgcGFyZW50UGVybWlzc2lvbikpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhcmVudFBlcm1pc3Npb24gPyAyMCA6IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBlcm1pc3Npb25zKGdyb3VwczogUGVybWlzc2lvbk1hbmFnZW1lbnQuR3JvdXBbXSk6IFBlcm1pc3Npb25NYW5hZ2VtZW50LlBlcm1pc3Npb25bXSB7XHJcbiAgcmV0dXJuIGdyb3Vwcy5yZWR1Y2UoKGFjYywgdmFsKSA9PiBbLi4uYWNjLCAuLi52YWwucGVybWlzc2lvbnNdLCBbXSk7XHJcbn1cclxuIl19