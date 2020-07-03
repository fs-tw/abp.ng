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
        console.log('yc');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcGVybWlzc2lvbi1tYW5hZ2VtZW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsNkJBQTZCLElBQUksZ0NBQWdDLEVBQXdCLE1BQU0sK0JBQStCLENBQUM7QUFDeEksT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNdEMsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBOEIsU0FBUSxnQ0FBZ0M7SUF1Q2pGLFlBQW9CLE1BQWEsRUFBVSxTQUFvQjtRQUM3RCxLQUFLLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRFAsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUE1QnRELGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQXNCUixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFL0QsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLGtDQUE2QixHQUFHLEtBQUssQ0FBQztRQUlwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUEzQkQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElB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b25lbnQgYXMgQWJwUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnQsIFBlcm1pc3Npb25NYW5hZ2VtZW50IH0gZnJvbSAnQGFicC9uZy5wZXJtaXNzaW9uLW1hbmFnZW1lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLWFsYWluLXBlcm1pc3Npb24tbWFuYWdlbWVudCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGVybWlzc2lvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5sZXNzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Blcm1pc3Npb24tbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50IGV4dGVuZHMgQWJwUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnRcclxuICBpbXBsZW1lbnRzXHJcbiAgUGVybWlzc2lvbk1hbmFnZW1lbnQuUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnRJbnB1dHMsXHJcbiAgUGVybWlzc2lvbk1hbmFnZW1lbnQuUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnRPdXRwdXRzIHtcclxuICBASW5wdXQoKVxyXG4gIHJlYWRvbmx5IHByb3ZpZGVyTmFtZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHJlYWRvbmx5IHByb3ZpZGVyS2V5OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcmVhZG9ubHkgaGlkZUJhZGdlcyA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgX3Zpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fdmlzaWJsZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLm9wZW5Nb2RhbCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEdyb3VwID0gbnVsbDtcclxuICAgICAgdGhpcy5fdmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gIHNlbGVjdEFsbFRoaXNUYWJJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RvcmU6IFN0b3JlLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihfc3RvcmUsIF9yZW5kZXJlcik7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3ljJyk7XHJcbiAgfVxyXG4gIGlzR3JhbnRlZEJ5T3RoZXJQcm92aWRlck5hbWUoZ3JhbnRlZFByb3ZpZGVyczogUGVybWlzc2lvbk1hbmFnZW1lbnQuR3JhbnRlZFByb3ZpZGVyW10pOiBib29sZWFuIHtcclxuICAgIGlmIChncmFudGVkUHJvdmlkZXJzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZ3JhbnRlZFByb3ZpZGVycy5maW5kSW5kZXgocCA9PiBwLnByb3ZpZGVyTmFtZSAhPT0gdGhpcy5wcm92aWRlck5hbWUpID4gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIG9uQ2xpY2tTZWxlY3RBbGwoKSB7XHJcbiAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgIHRoaXMucGVybWlzc2lvbnMgPSB0aGlzLnBlcm1pc3Npb25zLm1hcChwZXJtaXNzaW9uID0+ICh7XHJcbiAgICAgIC4uLnBlcm1pc3Npb24sXHJcbiAgICAgIGlzR3JhbnRlZDogdGhpcy5pc0dyYW50ZWRCeU90aGVyUHJvdmlkZXJOYW1lKHBlcm1pc3Npb24uZ3JhbnRlZFByb3ZpZGVycykgfHwgdGhpcy5zZWxlY3RBbGxUYWIsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RUaGlzVGFiID0gdGhpcy5zZWxlY3RBbGxUYWI7XHJcbiAgfVxyXG4gIG9uQ2xpY2tTZWxlY3RUaGlzVGFiKCkge1xyXG4gICAgdGhpcy5zZWxlY3RBbGxUaGlzVGFiSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZWxlY3RlZEdyb3VwUGVybWlzc2lvbnMkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHBlcm1pc3Npb25zID0+IHtcclxuICAgICAgcGVybWlzc2lvbnMuZm9yRWFjaChwZXJtaXNzaW9uID0+IHtcclxuICAgICAgICBpZiAocGVybWlzc2lvbi5pc0dyYW50ZWQgJiYgdGhpcy5pc0dyYW50ZWRCeU90aGVyUHJvdmlkZXJOYW1lKHBlcm1pc3Npb24uZ3JhbnRlZFByb3ZpZGVycykpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBlcm1pc3Npb25zLmZpbmRJbmRleChwZXIgPT4gcGVyLm5hbWUgPT09IHBlcm1pc3Npb24ubmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBbXHJcbiAgICAgICAgICAuLi50aGlzLnBlcm1pc3Npb25zLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICAgIHsgLi4udGhpcy5wZXJtaXNzaW9uc1tpbmRleF0sIGlzR3JhbnRlZDogdGhpcy5zZWxlY3RUaGlzVGFiIH0sXHJcbiAgICAgICAgICAuLi50aGlzLnBlcm1pc3Npb25zLnNsaWNlKGluZGV4ICsgMSlcclxuICAgICAgICBdO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0R3JhbnRDaGVja2JveFN0YXRlKCk7XHJcbiAgfVxyXG4gIG9uQ2xpY2tDaGVja2JveChjbGlja2VkUGVybWlzc2lvbjogUGVybWlzc2lvbk1hbmFnZW1lbnQuUGVybWlzc2lvbikge1xyXG4gICAgaWYgKGNsaWNrZWRQZXJtaXNzaW9uLmlzR3JhbnRlZCAmJiB0aGlzLmlzR3JhbnRlZEJ5T3RoZXJQcm92aWRlck5hbWUoY2xpY2tlZFBlcm1pc3Npb24uZ3JhbnRlZFByb3ZpZGVycykpIHJldHVybjtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnBlcm1pc3Npb25zID0gdGhpcy5wZXJtaXNzaW9ucy5tYXAocGVyID0+IHtcclxuICAgICAgICBpZiAoY2xpY2tlZFBlcm1pc3Npb24ubmFtZSA9PT0gcGVyLm5hbWUpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLnBlciwgaXNHcmFudGVkOiAhcGVyLmlzR3JhbnRlZCB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2xpY2tlZFBlcm1pc3Npb24ubmFtZSA9PT0gcGVyLnBhcmVudE5hbWUgJiYgY2xpY2tlZFBlcm1pc3Npb24uaXNHcmFudGVkKSB7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5wZXIsIGlzR3JhbnRlZDogZmFsc2UgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNsaWNrZWRQZXJtaXNzaW9uLnBhcmVudE5hbWUgPT09IHBlci5uYW1lICYmICFjbGlja2VkUGVybWlzc2lvbi5pc0dyYW50ZWQpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLnBlciwgaXNHcmFudGVkOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGVyO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuc2V0VGFiQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgICB0aGlzLnNldEdyYW50Q2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIHNldFRhYkNoZWNrYm94U3RhdGUoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkR3JvdXBQZXJtaXNzaW9ucyQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUocGVybWlzc2lvbnMgPT4ge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZFBlcm1pc3Npb25zID0gcGVybWlzc2lvbnMuZmlsdGVyKHBlciA9PiBwZXIuaXNHcmFudGVkKTtcclxuICAgICAgaWYgKHNlbGVjdGVkUGVybWlzc2lvbnMubGVuZ3RoID09PSBwZXJtaXNzaW9ucy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEFsbFRoaXNUYWJJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaGlzVGFiID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFBlcm1pc3Npb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsVGhpc1RhYkluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFRoaXNUYWIgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEFsbFRoaXNUYWJJbmRldGVybWluYXRlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNldEdyYW50Q2hlY2tib3hTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkQWxsUGVybWlzc2lvbnMgPSB0aGlzLnBlcm1pc3Npb25zLmZpbHRlcihwZXIgPT4gcGVyLmlzR3JhbnRlZCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkQWxsUGVybWlzc2lvbnMubGVuZ3RoID09PSB0aGlzLnBlcm1pc3Npb25zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zZWxlY3RBbGxUYWIgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEFsbFBlcm1pc3Npb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zZWxlY3RBbGxUYWIgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=