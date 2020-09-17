import { __decorate, __metadata } from "tslib";
import { PermissionManagementComponent as AbpPermissionManagementComponent } from '@abp/ng.permission-management';
import { Component, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngxs/store';
import { take } from 'rxjs/operators';
let PermissionManagementComponent = class PermissionManagementComponent extends AbpPermissionManagementComponent {
    constructor(_store, _renderer) {
        super(_store, _renderer);
        this._store = _store;
        this._renderer = _renderer;
        this.hideBadges = false;
        this._visible = false;
        this.visibleChange = new EventEmitter();
        this.selectAllIndeterminate = false;
        this.selectAllThisTabIndeterminate = false;
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
    isGrantedByOtherProviderName(grantedProviders) {
        if (grantedProviders.length) {
            return grantedProviders.findIndex(p => p.providerName !== this.providerName) > -1;
        }
        return false;
    }
    onClickSelectAll() {
        this.selectAllIndeterminate = false;
        this.permissions = this.permissions.map(permission => (Object.assign(Object.assign({}, permission), { isGranted: this.isGrantedByOtherProviderName(permission.grantedProviders) || this.selectAllTab })));
        this.selectThisTab = this.selectAllTab;
    }
    onClickSelectThisTab() {
        this.selectAllThisTabIndeterminate = false;
        this.selectedGroupPermissions$.pipe(take(1)).subscribe(permissions => {
            permissions.forEach(permission => {
                if (permission.isGranted && this.isGrantedByOtherProviderName(permission.grantedProviders))
                    return;
                const index = this.permissions.findIndex(per => per.name === permission.name);
                this.permissions = [
                    ...this.permissions.slice(0, index),
                    Object.assign(Object.assign({}, this.permissions[index]), { isGranted: this.selectThisTab }),
                    ...this.permissions.slice(index + 1)
                ];
            });
        });
        this.setGrantCheckboxState();
    }
    onClickCheckbox(clickedPermission) {
        if (clickedPermission.isGranted && this.isGrantedByOtherProviderName(clickedPermission.grantedProviders))
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
        });
    }
    setGrantCheckboxState() {
        const selectedAllPermissions = this.permissions.filter(per => per.isGranted);
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
PermissionManagementComponent = __decorate([
    Component({
        selector: 'ng-alain-permission-management',
        template: "<ng-container *ngIf=\"{ entityName: entityName$ | async } as data\">\r\n  <nz-modal [(nzVisible)]=\"visible\"\r\n            (nzAfterOpen)=\"initModal()\"\r\n            [nzTitle]=\"modalTitle\"\r\n            [nzContent]=\"modalContent\"\r\n            [nzFooter]=\"modalFooter\"\r\n            (nzOnCancel)=\"visible=false\"\r\n            nzWidth=\"1040\"\r\n  >\r\n\r\n    <ng-template #modalTitle>\r\n      {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} - {{ data.entityName }}\r\n    </ng-template>\r\n\r\n    <ng-template #modalContent>\r\n      <nz-checkbox-wrapper >\r\n        <label nz-checkbox [(ngModel)]=\"selectAllTab\" (ngModelChange)=\"onClickSelectAll()\" [nzIndeterminate]=\"selectAllIndeterminate\">\r\n          {{'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization}}\r\n        </label>\r\n      </nz-checkbox-wrapper>\r\n\r\n\r\n      <div class=\"main\">\r\n        <div class=\"menu\">\r\n          <ul nz-menu nzMode=\"inline\">\r\n            <li *ngFor=\"let group of groups$ | async; trackBy: trackByFn\" nz-menu-item [nzSelected]=\"selectedGroup?.name === group?.name\" (click)=\"onChangeGroup(group)\">{{ group?.displayName }}</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"content\">\r\n          <div class=\"title\">{{ selectedGroup?.displayName }}</div>\r\n          <nz-checkbox-wrapper>\r\n            <label nz-checkbox [(ngModel)]=\"selectThisTab\" (ngModelChange)=\"onClickSelectThisTab()\" [nzIndeterminate]=\"selectAllThisTabIndeterminate\">\r\n              {{'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization}}\r\n            </label>\r\n          </nz-checkbox-wrapper>\r\n          <div *ngFor=\"let permission of selectedGroupPermissions$ | async; let i = index; trackBy: trackByFn\"\r\n               [style.margin-left]=\"permission.margin + 'px'\">\r\n            <nz-checkbox-wrapper>\r\n              <label nz-checkbox\r\n                     [ngModel]=\"getChecked(permission.name)\"\r\n                     [nzDisabled]=\"isGrantedByOtherProviderName(permission.grantedProviders)\"\r\n                     (ngModelChange)=\"onClickCheckbox(permission)\"\r\n                     >\r\n                {{ permission.displayName }}\r\n                <span *ngFor=\"let provider of permission.grantedProviders\">{{ provider.providerName }}: {{ provider.providerKey }}</span>\r\n              </label>\r\n            </nz-checkbox-wrapper>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-template>\r\n\r\n    <ng-template #modalFooter>\r\n      <button nz-button nzType=\"default\" (click)=\"visible=false\">\r\n        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n      </button>\r\n      <button nz-button nzType=\"primary\" (click)=\"submit()\">\r\n        {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n        }}\r\n      </button>\r\n    </ng-template>\r\n\r\n\r\n  </nz-modal>\r\n</ng-container>\r\n",
        styles: [":host{display:block;padding-top:24px}.main{background-color:#fff;display:flex;overflow:auto;width:100%}.menu{border-right:1px solid #f0f0f0;width:224px}.menu ::ng-deep .ant-menu-inline{border:none}.menu ::ng-deep .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{font-weight:700}.content{flex:1;padding:8px 40px}.content .title{color:rgba(0,0,0,.85);font-size:20px;font-weight:500;line-height:28px;margin-bottom:12px}.content ::ng-deep .ant-list-split .ant-list-item:last-child{border-bottom:1px solid #e8e8e8}.content ::ng-deep .ant-list-item{padding-bottom:14px;padding-top:14px}@media screen and (max-width:767px){.main{flex-direction:column}.main .menu{border:none;width:100%}.main .content{padding:40px}}"]
    }),
    __metadata("design:paramtypes", [Store, Renderer2])
], PermissionManagementComponent);
export { PermissionManagementComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcGVybWlzc2lvbi1tYW5hZ2VtZW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsNkJBQTZCLElBQUksZ0NBQWdDLEVBQXdCLE1BQU0sK0JBQStCLENBQUM7QUFDeEksT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNdEMsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBOEIsU0FBUSxnQ0FBZ0M7SUF1Q2pGLFlBQW9CLE1BQWEsRUFBVSxTQUFvQjtRQUM3RCxLQUFLLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRFAsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUE1QnRELGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQXNCUixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFL0QsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLGtDQUE2QixHQUFHLEtBQUssQ0FBQztJQUd0QyxDQUFDO0lBekJELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFF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QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDO2FBQzNDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QscUJBQXFCO1FBQ25CLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFN0UsSUFBSSxzQkFBc0IsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDN0QsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjthQUFNLElBQUksc0JBQXNCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFwSEM7SUFEQyxLQUFLLEVBQUU7O21FQUNzQjtBQUc5QjtJQURDLEtBQUssRUFBRTs7a0VBQ3FCO0FBRzdCO0lBREMsS0FBSyxFQUFFOztpRUFDb0I7QUFLNUI7SUFEQyxLQUFLLEVBQUU7Ozs0REFHUDtBQWlCUztJQUFULE1BQU0sRUFBRTs7b0VBQXNEO0FBbkNwRCw2QkFBNkI7SUFMekMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdDQUFnQztRQUUxQyxpNUZBQXFEOztLQUN0RCxDQUFDO3FDQXdDNEIsS0FBSyxFQUFxQixTQUFTO0dBdkNwRCw2QkFBNkIsQ0F5SHpDO1NBekhZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50IGFzIEFicFBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50LCBQZXJtaXNzaW9uTWFuYWdlbWVudCB9IGZyb20gJ0BhYnAvbmcucGVybWlzc2lvbi1tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1hbGFpbi1wZXJtaXNzaW9uLW1hbmFnZW1lbnQnLFxyXG4gIHN0eWxlVXJsczogWycuL3Blcm1pc3Npb24tbWFuYWdlbWVudC5jb21wb25lbnQubGVzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uTWFuYWdlbWVudENvbXBvbmVudCBleHRlbmRzIEFicFBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50XHJcbiAgaW1wbGVtZW50c1xyXG4gIFBlcm1pc3Npb25NYW5hZ2VtZW50LlBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50SW5wdXRzLFxyXG4gIFBlcm1pc3Npb25NYW5hZ2VtZW50LlBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50T3V0cHV0cyB7XHJcbiAgQElucHV0KClcclxuICByZWFkb25seSBwcm92aWRlck5hbWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICByZWFkb25seSBwcm92aWRlcktleTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHJlYWRvbmx5IGhpZGVCYWRnZXMgPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIF92aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcclxuICB9XHJcblxyXG4gIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX3Zpc2libGUpIHJldHVybjtcclxuXHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5vcGVuTW9kYWwoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRHcm91cCA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIHNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBzZWxlY3RBbGxUaGlzVGFiSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0b3JlOiBTdG9yZSwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgc3VwZXIoX3N0b3JlLCBfcmVuZGVyZXIpO1xyXG4gIH1cclxuICBpc0dyYW50ZWRCeU90aGVyUHJvdmlkZXJOYW1lKGdyYW50ZWRQcm92aWRlcnM6IFBlcm1pc3Npb25NYW5hZ2VtZW50LkdyYW50ZWRQcm92aWRlcltdKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoZ3JhbnRlZFByb3ZpZGVycy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGdyYW50ZWRQcm92aWRlcnMuZmluZEluZGV4KHAgPT4gcC5wcm92aWRlck5hbWUgIT09IHRoaXMucHJvdmlkZXJOYW1lKSA+IC0xO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBvbkNsaWNrU2VsZWN0QWxsKCkge1xyXG4gICAgdGhpcy5zZWxlY3RBbGxJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgICB0aGlzLnBlcm1pc3Npb25zID0gdGhpcy5wZXJtaXNzaW9ucy5tYXAocGVybWlzc2lvbiA9PiAoe1xyXG4gICAgICAuLi5wZXJtaXNzaW9uLFxyXG4gICAgICBpc0dyYW50ZWQ6IHRoaXMuaXNHcmFudGVkQnlPdGhlclByb3ZpZGVyTmFtZShwZXJtaXNzaW9uLmdyYW50ZWRQcm92aWRlcnMpIHx8IHRoaXMuc2VsZWN0QWxsVGFiLFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0VGhpc1RhYiA9IHRoaXMuc2VsZWN0QWxsVGFiO1xyXG4gIH1cclxuICBvbkNsaWNrU2VsZWN0VGhpc1RhYigpIHtcclxuICAgIHRoaXMuc2VsZWN0QWxsVGhpc1RhYkluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VsZWN0ZWRHcm91cFBlcm1pc3Npb25zJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZShwZXJtaXNzaW9ucyA9PiB7XHJcbiAgICAgIHBlcm1pc3Npb25zLmZvckVhY2gocGVybWlzc2lvbiA9PiB7XHJcbiAgICAgICAgaWYgKHBlcm1pc3Npb24uaXNHcmFudGVkICYmIHRoaXMuaXNHcmFudGVkQnlPdGhlclByb3ZpZGVyTmFtZShwZXJtaXNzaW9uLmdyYW50ZWRQcm92aWRlcnMpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wZXJtaXNzaW9ucy5maW5kSW5kZXgocGVyID0+IHBlci5uYW1lID09PSBwZXJtaXNzaW9uLm5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gW1xyXG4gICAgICAgICAgLi4udGhpcy5wZXJtaXNzaW9ucy5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgICB7IC4uLnRoaXMucGVybWlzc2lvbnNbaW5kZXhdLCBpc0dyYW50ZWQ6IHRoaXMuc2VsZWN0VGhpc1RhYiB9LFxyXG4gICAgICAgICAgLi4udGhpcy5wZXJtaXNzaW9ucy5zbGljZShpbmRleCArIDEpXHJcbiAgICAgICAgXTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldEdyYW50Q2hlY2tib3hTdGF0ZSgpO1xyXG4gIH1cclxuICBvbkNsaWNrQ2hlY2tib3goY2xpY2tlZFBlcm1pc3Npb246IFBlcm1pc3Npb25NYW5hZ2VtZW50LlBlcm1pc3Npb24pIHtcclxuICAgIGlmIChjbGlja2VkUGVybWlzc2lvbi5pc0dyYW50ZWQgJiYgdGhpcy5pc0dyYW50ZWRCeU90aGVyUHJvdmlkZXJOYW1lKGNsaWNrZWRQZXJtaXNzaW9uLmdyYW50ZWRQcm92aWRlcnMpKSByZXR1cm47XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IHRoaXMucGVybWlzc2lvbnMubWFwKHBlciA9PiB7XHJcbiAgICAgICAgaWYgKGNsaWNrZWRQZXJtaXNzaW9uLm5hbWUgPT09IHBlci5uYW1lKSB7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5wZXIsIGlzR3JhbnRlZDogIXBlci5pc0dyYW50ZWQgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNsaWNrZWRQZXJtaXNzaW9uLm5hbWUgPT09IHBlci5wYXJlbnROYW1lICYmIGNsaWNrZWRQZXJtaXNzaW9uLmlzR3JhbnRlZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4ucGVyLCBpc0dyYW50ZWQ6IGZhbHNlIH07XHJcbiAgICAgICAgfSBlbHNlIGlmIChjbGlja2VkUGVybWlzc2lvbi5wYXJlbnROYW1lID09PSBwZXIubmFtZSAmJiAhY2xpY2tlZFBlcm1pc3Npb24uaXNHcmFudGVkKSB7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5wZXIsIGlzR3JhbnRlZDogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBlcjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnNldFRhYkNoZWNrYm94U3RhdGUoKTtcclxuICAgICAgdGhpcy5zZXRHcmFudENoZWNrYm94U3RhdGUoKTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBzZXRUYWJDaGVja2JveFN0YXRlKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEdyb3VwUGVybWlzc2lvbnMkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHBlcm1pc3Npb25zID0+IHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRQZXJtaXNzaW9ucyA9IHBlcm1pc3Npb25zLmZpbHRlcihwZXIgPT4gcGVyLmlzR3JhbnRlZCk7XHJcbiAgICAgIGlmIChzZWxlY3RlZFBlcm1pc3Npb25zLmxlbmd0aCA9PT0gcGVybWlzc2lvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBbGxUaGlzVGFiSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0VGhpc1RhYiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRQZXJtaXNzaW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEFsbFRoaXNUYWJJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaGlzVGFiID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBbGxUaGlzVGFiSW5kZXRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBzZXRHcmFudENoZWNrYm94U3RhdGUoKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEFsbFBlcm1pc3Npb25zID0gdGhpcy5wZXJtaXNzaW9ucy5maWx0ZXIocGVyID0+IHBlci5pc0dyYW50ZWQpO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZEFsbFBlcm1pc3Npb25zLmxlbmd0aCA9PT0gdGhpcy5wZXJtaXNzaW9ucy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RBbGxJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsVGFiID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBbGxQZXJtaXNzaW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5zZWxlY3RBbGxJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsVGFiID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19