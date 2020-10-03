import { RestService, GetAppConfiguration, ConfigState, CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, EventEmitter, Component, Renderer2, Input, Output, NgModule } from '@angular/core';
import { Action, Selector, State, Store, Select, NgxsModule } from '@ngxs/store';
import { __decorate, __metadata } from 'tslib';
import { of, Observable } from 'rxjs';
import { tap, map, take, switchMap, finalize, pluck } from 'rxjs/operators';

class GetPermissions {
    constructor(payload) {
        this.payload = payload;
    }
}
GetPermissions.type = '[PermissionManagement] Get Permissions';
class UpdatePermissions {
    constructor(payload) {
        this.payload = payload;
    }
}
UpdatePermissions.type = '[PermissionManagement] Update Permissions';

class PermissionsService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'AbpPermissionManagement';
        this.get = (providerName, providerKey) => this.restService.request({
            method: 'GET',
            url: '/api/permission-management/permissions',
            params: { providerName, providerKey },
        }, { apiName: this.apiName });
        this.update = (providerName, providerKey, input) => this.restService.request({
            method: 'PUT',
            url: '/api/permission-management/permissions',
            params: { providerName, providerKey },
            body: input,
        }, { apiName: this.apiName });
    }
}
PermissionsService.ɵprov = ɵɵdefineInjectable({ factory: function PermissionsService_Factory() { return new PermissionsService(ɵɵinject(RestService)); }, token: PermissionsService, providedIn: "root" });
PermissionsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
PermissionsService.ctorParameters = () => [
    { type: RestService }
];

let PermissionManagementState = class PermissionManagementState {
    constructor(service) {
        this.service = service;
    }
    static getPermissionGroups({ permissionRes }) {
        return permissionRes.groups || [];
    }
    static getEntityDisplayName({ permissionRes }) {
        return permissionRes.entityDisplayName;
    }
    permissionManagementGet({ patchState }, { payload: { providerKey, providerName } = {}, }) {
        return this.service.get(providerName, providerKey).pipe(tap(permissionResponse => patchState({
            permissionRes: permissionResponse,
        })));
    }
    permissionManagementUpdate(_, { payload }) {
        return this.service.update(payload.providerName, payload.providerKey, {
            permissions: payload.permissions,
        });
    }
};
PermissionManagementState.decorators = [
    { type: Injectable }
];
PermissionManagementState.ctorParameters = () => [
    { type: PermissionsService }
];
__decorate([
    Action(GetPermissions),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetPermissions]),
    __metadata("design:returntype", void 0)
], PermissionManagementState.prototype, "permissionManagementGet", null);
__decorate([
    Action(UpdatePermissions),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdatePermissions]),
    __metadata("design:returntype", void 0)
], PermissionManagementState.prototype, "permissionManagementUpdate", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PermissionManagementState, "getPermissionGroups", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], PermissionManagementState, "getEntityDisplayName", null);
PermissionManagementState = __decorate([
    State({
        name: 'PermissionManagementState',
        defaults: { permissionRes: {} },
    }),
    __metadata("design:paramtypes", [PermissionsService])
], PermissionManagementState);

class PermissionManagementComponent {
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
}
PermissionManagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-permission-management',
                template: "<abp-modal [(visible)]=\"visible\" (init)=\"initModal()\" [busy]=\"modalBusy\">\r\n  <ng-container *ngIf=\"{ entityName: entityName$ | async } as data\">\r\n    <ng-template #abpHeader>\r\n      <h4>\r\n        {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} - {{ data.entityName }}\r\n      </h4>\r\n    </ng-template>\r\n    <ng-template #abpBody>\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"select-all-in-all-tabs\"\r\n          name=\"select-all-in-all-tabs\"\r\n          class=\"custom-control-input\"\r\n          [(ngModel)]=\"selectAllTab\"\r\n          (click)=\"onClickSelectAll()\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"select-all-in-all-tabs\">{{\r\n          'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n\r\n      <hr class=\"mt-2 mb-2\" />\r\n      <div class=\"row\">\r\n        <div class=\"overflow-scroll col-md-4\">\r\n          <ul class=\"nav nav-pills flex-column\">\r\n            <li *ngFor=\"let group of groups$ | async; trackBy: trackByFn\" class=\"nav-item\">\r\n              <a\r\n                *ngIf=\"{ assignedCount: getAssignedCount(group.name) } as data\"\r\n                class=\"nav-link pointer\"\r\n                [class.active]=\"selectedGroup?.name === group?.name\"\r\n                (click)=\"onChangeGroup(group)\"\r\n              >\r\n                <div [class.font-weight-bold]=\"data.assignedCount\">\r\n                  {{ group?.displayName }}\r\n                  <span>({{ data.assignedCount }})</span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-8 overflow-scroll\">\r\n          <h4>{{ selectedGroup?.displayName }}</h4>\r\n          <hr class=\"mt-2 mb-3\" />\r\n          <div class=\"pl-1 pt-1\">\r\n            <div class=\"custom-checkbox custom-control mb-2\">\r\n              <input\r\n                type=\"checkbox\"\r\n                id=\"select-all-in-this-tabs\"\r\n                name=\"select-all-in-this-tabs\"\r\n                class=\"custom-control-input\"\r\n                [(ngModel)]=\"selectThisTab\"\r\n                (click)=\"onClickSelectThisTab()\"\r\n              />\r\n              <label class=\"custom-control-label\" for=\"select-all-in-this-tabs\">{{\r\n                'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization\r\n              }}</label>\r\n            </div>\r\n            <hr class=\"mb-3\" />\r\n            <div\r\n              *ngFor=\"\r\n                let permission of selectedGroupPermissions$ | async;\r\n                let i = index;\r\n                trackBy: trackByFn\r\n              \"\r\n              [ngStyle]=\"permission.style\"\r\n              class=\"custom-checkbox custom-control mb-2\"\r\n            >\r\n              <input\r\n                #permissionCheckbox\r\n                type=\"checkbox\"\r\n                [checked]=\"getChecked(permission.name)\"\r\n                [value]=\"getChecked(permission.name)\"\r\n                [attr.id]=\"permission.name\"\r\n                class=\"custom-control-input\"\r\n                [disabled]=\"isGrantedByOtherProviderName(permission.grantedProviders)\"\r\n              />\r\n              <label\r\n                class=\"custom-control-label\"\r\n                [attr.for]=\"permission.name\"\r\n                (click)=\"onClickCheckbox(permission, permissionCheckbox.value)\"\r\n                >{{ permission.displayName }}\r\n                <ng-container *ngIf=\"!hideBadges\">\r\n                  <span\r\n                    *ngFor=\"let provider of permission.grantedProviders\"\r\n                    class=\"badge badge-light\"\r\n                    >{{ provider.providerName }}: {{ provider.providerKey }}</span\r\n                  >\r\n                </ng-container>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template #abpFooter>\r\n      <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button iconClass=\"fa fa-check\" (click)=\"submit()\">{{\r\n        'AbpIdentity::Save' | abpLocalization\r\n      }}</abp-button>\r\n    </ng-template>\r\n  </ng-container>\r\n</abp-modal>\r\n",
                exportAs: 'abpPermissionManagement',
                styles: [`
      .overflow-scroll {
        max-height: 70vh;
        overflow-y: scroll;
      }
    `]
            },] }
];
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
__decorate([
    Select(PermissionManagementState.getPermissionGroups),
    __metadata("design:type", Observable)
], PermissionManagementComponent.prototype, "groups$", void 0);
__decorate([
    Select(PermissionManagementState.getEntityDisplayName),
    __metadata("design:type", Observable)
], PermissionManagementComponent.prototype, "entityName$", void 0);
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

class PermissionManagementModule {
}
PermissionManagementModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PermissionManagementComponent],
                imports: [CoreModule, ThemeSharedModule, NgxsModule.forFeature([PermissionManagementState])],
                exports: [PermissionManagementComponent],
            },] }
];

class PermissionManagementService {
    constructor(rest) {
        this.rest = rest;
        this.apiName = 'AbpPermissionManagement';
    }
    getPermissions(params) {
        const request = {
            method: 'GET',
            url: '/api/permission-management/permissions',
            params,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    updatePermissions({ permissions, providerKey, providerName, }) {
        const request = {
            method: 'PUT',
            url: '/api/permission-management/permissions',
            body: { permissions },
            params: { providerKey, providerName },
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
}
PermissionManagementService.ɵprov = ɵɵdefineInjectable({ factory: function PermissionManagementService_Factory() { return new PermissionManagementService(ɵɵinject(RestService)); }, token: PermissionManagementService, providedIn: "root" });
PermissionManagementService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
PermissionManagementService.ctorParameters = () => [
    { type: RestService }
];

class PermissionManagementStateService {
    constructor(store) {
        this.store = store;
    }
    getPermissionGroups() {
        return this.store.selectSnapshot(PermissionManagementState.getPermissionGroups);
    }
    getEntityDisplayName() {
        return this.store.selectSnapshot(PermissionManagementState.getEntityDisplayName);
    }
    dispatchGetPermissions(...args) {
        return this.store.dispatch(new GetPermissions(...args));
    }
    dispatchUpdatePermissions(...args) {
        return this.store.dispatch(new UpdatePermissions(...args));
    }
}
PermissionManagementStateService.ɵprov = ɵɵdefineInjectable({ factory: function PermissionManagementStateService_Factory() { return new PermissionManagementStateService(ɵɵinject(Store)); }, token: PermissionManagementStateService, providedIn: "root" });
PermissionManagementStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
PermissionManagementStateService.ctorParameters = () => [
    { type: Store }
];

/*
 * Public API Surface of permission-management
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GetPermissions, PermissionManagementComponent, PermissionManagementModule, PermissionManagementService, PermissionManagementState, PermissionManagementStateService, PermissionsService, UpdatePermissions, PermissionManagementComponent as ɵa, PermissionManagementState as ɵb, PermissionsService as ɵc, GetPermissions as ɵd, UpdatePermissions as ɵe };
//# sourceMappingURL=abp-ng.permission-management.js.map
