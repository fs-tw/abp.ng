import { RestService, ListService, DynamicLayoutComponent, AuthGuard, PermissionGuard, ReplaceableRouteContainerComponent, LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { Confirmation, ConfirmationService, getPasswordValidators, ThemeSharedModule } from '@abp/ng.theme.shared';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, Component, ViewChild, ElementRef, NgModule } from '@angular/core';
import { NgbNavModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { Action, Selector, State, Store, Select, NgxsModule } from '@ngxs/store';
import { __decorate, __metadata } from 'tslib';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap, pluck, finalize, switchMap, take } from 'rxjs/operators';
import snq from 'snq';
import { RouterModule } from '@angular/router';

class GetRoles {
    constructor(payload) {
        this.payload = payload;
    }
}
GetRoles.type = '[Identity] Get Roles';
class GetRoleById {
    constructor(payload) {
        this.payload = payload;
    }
}
GetRoleById.type = '[Identity] Get Role By Id';
class DeleteRole {
    constructor(payload) {
        this.payload = payload;
    }
}
DeleteRole.type = '[Identity] Delete Role';
class CreateRole {
    constructor(payload) {
        this.payload = payload;
    }
}
CreateRole.type = '[Identity] Create Role';
class UpdateRole {
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateRole.type = '[Identity] Update Role';
class GetUsers {
    constructor(payload) {
        this.payload = payload;
    }
}
GetUsers.type = '[Identity] Get Users';
class GetUserById {
    constructor(payload) {
        this.payload = payload;
    }
}
GetUserById.type = '[Identity] Get User By Id';
class DeleteUser {
    constructor(payload) {
        this.payload = payload;
    }
}
DeleteUser.type = '[Identity] Delete User';
class CreateUser {
    constructor(payload) {
        this.payload = payload;
    }
}
CreateUser.type = '[Identity] Create User';
class UpdateUser {
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateUser.type = '[Identity] Update User';
class GetUserRoles {
    constructor(payload) {
        this.payload = payload;
    }
}
GetUserRoles.type = '[Identity] Get User Roles';

class IdentityRoleService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'AbpIdentity';
        this.create = (input) => this.restService.request({
            method: 'POST',
            url: '/api/identity/roles',
            body: input,
        }, { apiName: this.apiName });
        this.delete = (id) => this.restService.request({
            method: 'DELETE',
            url: `/api/identity/roles/${id}`,
        }, { apiName: this.apiName });
        this.get = (id) => this.restService.request({
            method: 'GET',
            url: `/api/identity/roles/${id}`,
        }, { apiName: this.apiName });
        this.getAllList = () => this.restService.request({
            method: 'GET',
            url: '/api/identity/roles/all',
        }, { apiName: this.apiName });
        this.getList = (input) => this.restService.request({
            method: 'GET',
            url: '/api/identity/roles',
            params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
        }, { apiName: this.apiName });
        this.update = (id, input) => this.restService.request({
            method: 'PUT',
            url: `/api/identity/roles/${id}`,
            body: input,
        }, { apiName: this.apiName });
    }
}
IdentityRoleService.ɵprov = ɵɵdefineInjectable({ factory: function IdentityRoleService_Factory() { return new IdentityRoleService(ɵɵinject(RestService)); }, token: IdentityRoleService, providedIn: "root" });
IdentityRoleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
IdentityRoleService.ctorParameters = () => [
    { type: RestService }
];

class IdentityUserService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'AbpIdentity';
        this.create = (input) => this.restService.request({
            method: 'POST',
            url: '/api/identity/users',
            body: input,
        }, { apiName: this.apiName });
        this.delete = (id) => this.restService.request({
            method: 'DELETE',
            url: `/api/identity/users/${id}`,
        }, { apiName: this.apiName });
        this.findByEmail = (email) => this.restService.request({
            method: 'GET',
            url: `/api/identity/users/by-email/${email}`,
        }, { apiName: this.apiName });
        this.findByUsername = (username) => this.restService.request({
            method: 'GET',
            url: '/api/identity/users/by-username/{userName}',
        }, { apiName: this.apiName });
        this.get = (id) => this.restService.request({
            method: 'GET',
            url: `/api/identity/users/${id}`,
        }, { apiName: this.apiName });
        this.getAssignableRoles = () => this.restService.request({
            method: 'GET',
            url: '/api/identity/users/assignable-roles',
        }, { apiName: this.apiName });
        this.getList = (input) => this.restService.request({
            method: 'GET',
            url: '/api/identity/users',
            params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
        }, { apiName: this.apiName });
        this.getRoles = (id) => this.restService.request({
            method: 'GET',
            url: `/api/identity/users/${id}/roles`,
        }, { apiName: this.apiName });
        this.update = (id, input) => this.restService.request({
            method: 'PUT',
            url: `/api/identity/users/${id}`,
            body: input,
        }, { apiName: this.apiName });
        this.updateRoles = (id, input) => this.restService.request({
            method: 'PUT',
            url: `/api/identity/users/${id}/roles`,
            body: input,
        }, { apiName: this.apiName });
    }
}
IdentityUserService.ɵprov = ɵɵdefineInjectable({ factory: function IdentityUserService_Factory() { return new IdentityUserService(ɵɵinject(RestService)); }, token: IdentityUserService, providedIn: "root" });
IdentityUserService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
IdentityUserService.ctorParameters = () => [
    { type: RestService }
];

let IdentityState = class IdentityState {
    constructor(identityUserService, identityRoleService) {
        this.identityUserService = identityUserService;
        this.identityRoleService = identityRoleService;
    }
    static getRoles({ roles }) {
        return roles.items || [];
    }
    static getRolesTotalCount({ roles }) {
        return roles.totalCount || 0;
    }
    static getUsers({ users }) {
        return users.items || [];
    }
    static getUsersTotalCount({ users }) {
        return users.totalCount || 0;
    }
    getRoles({ patchState }, { payload }) {
        return this.identityRoleService.getList(payload).pipe(tap(roles => patchState({
            roles,
        })));
    }
    getRole({ patchState }, { payload }) {
        return this.identityRoleService.get(payload).pipe(tap(selectedRole => patchState({
            selectedRole,
        })));
    }
    deleteRole(_, { payload }) {
        return this.identityRoleService.delete(payload);
    }
    addRole(_, { payload }) {
        return this.identityRoleService.create(payload);
    }
    updateRole({ getState }, { payload }) {
        return this.identityRoleService.update(payload.id, Object.assign(Object.assign({}, getState().selectedRole), payload));
    }
    getUsers({ patchState }, { payload }) {
        return this.identityUserService.getList(payload).pipe(tap(users => patchState({
            users,
        })));
    }
    getUser({ patchState }, { payload }) {
        return this.identityUserService.get(payload).pipe(tap(selectedUser => patchState({
            selectedUser,
        })));
    }
    deleteUser(_, { payload }) {
        return this.identityUserService.delete(payload);
    }
    addUser(_, { payload }) {
        return this.identityUserService.create(payload);
    }
    updateUser({ getState }, { payload }) {
        return this.identityUserService.update(payload.id, Object.assign(Object.assign({}, getState().selectedUser), payload));
    }
    getUserRoles({ patchState }, { payload }) {
        return this.identityUserService.getRoles(payload).pipe(pluck('items'), tap(selectedUserRoles => patchState({
            selectedUserRoles,
        })));
    }
};
IdentityState.decorators = [
    { type: Injectable }
];
IdentityState.ctorParameters = () => [
    { type: IdentityUserService },
    { type: IdentityRoleService }
];
__decorate([
    Action(GetRoles),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetRoles]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "getRoles", null);
__decorate([
    Action(GetRoleById),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetRoleById]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "getRole", null);
__decorate([
    Action(DeleteRole),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetRoleById]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "deleteRole", null);
__decorate([
    Action(CreateRole),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateRole]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "addRole", null);
__decorate([
    Action(UpdateRole),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateRole]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "updateRole", null);
__decorate([
    Action(GetUsers),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetUsers]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "getUsers", null);
__decorate([
    Action(GetUserById),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetUserById]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "getUser", null);
__decorate([
    Action(DeleteUser),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetUserById]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "deleteUser", null);
__decorate([
    Action(CreateUser),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateUser]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "addUser", null);
__decorate([
    Action(UpdateUser),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateUser]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "updateUser", null);
__decorate([
    Action(GetUserRoles),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetUserRoles]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "getUserRoles", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], IdentityState, "getRoles", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Number)
], IdentityState, "getRolesTotalCount", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], IdentityState, "getUsers", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Number)
], IdentityState, "getUsersTotalCount", null);
IdentityState = __decorate([
    State({
        name: 'IdentityState',
        defaults: { roles: {}, selectedRole: {}, users: {}, selectedUser: {} },
    }),
    __metadata("design:paramtypes", [IdentityUserService,
        IdentityRoleService])
], IdentityState);

class RolesComponent {
    constructor(list, confirmationService, fb, store) {
        this.list = list;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.store = store;
        this.visiblePermissions = false;
        this.modalBusy = false;
        this.permissionManagementKey = "PermissionManagement.PermissionManagementComponent" /* PermissionManagement */;
        this.onVisiblePermissionChange = event => {
            this.visiblePermissions = event;
        };
    }
    ngOnInit() {
        this.hookToQuery();
    }
    buildForm() {
        this.form = this.fb.group({
            name: new FormControl({ value: this.selected.name || '', disabled: this.selected.isStatic }, [
                Validators.required,
                Validators.maxLength(256),
            ]),
            isDefault: [this.selected.isDefault || false],
            isPublic: [this.selected.isPublic || false],
        });
    }
    openModal() {
        this.buildForm();
        this.isModalVisible = true;
    }
    add() {
        this.selected = {};
        this.openModal();
    }
    edit(id) {
        this.store
            .dispatch(new GetRoleById(id))
            .pipe(pluck('IdentityState', 'selectedRole'))
            .subscribe(selectedRole => {
            this.selected = selectedRole;
            this.openModal();
        });
    }
    save() {
        if (!this.form.valid)
            return;
        this.modalBusy = true;
        this.store
            .dispatch(this.selected.id
            ? new UpdateRole(Object.assign(Object.assign(Object.assign({}, this.selected), this.form.value), { id: this.selected.id }))
            : new CreateRole(this.form.value))
            .pipe(finalize(() => (this.modalBusy = false)))
            .subscribe(() => {
            this.isModalVisible = false;
            this.list.get();
        });
    }
    delete(id, name) {
        this.confirmationService
            .warn('AbpIdentity::RoleDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
            messageLocalizationParams: [name],
        })
            .subscribe((status) => {
            if (status === Confirmation.Status.confirm) {
                this.store.dispatch(new DeleteRole(id)).subscribe(() => this.list.get());
            }
        });
    }
    hookToQuery() {
        this.list.hookToQuery(query => this.store.dispatch(new GetRoles(query))).subscribe();
    }
    onClickSaveButton() {
        this.formRef.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    }
    openPermissionsModal(providerKey) {
        this.providerKey = providerKey;
        setTimeout(() => {
            this.visiblePermissions = true;
        }, 0);
    }
    sort(data) {
        const { prop, dir } = data.sorts[0];
        this.list.sortKey = prop;
        this.list.sortOrder = dir;
    }
}
RolesComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-roles',
                template: "<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Roles' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Roles.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewRole' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <ngx-datatable [rows]=\"data$ | async\" [count]=\"totalCount$ | async\" [list]=\"list\" default>\r\n      <ngx-datatable-column\r\n        [name]=\"'AbpIdentity::Actions' | abpLocalization\"\r\n        [maxWidth]=\"150\"\r\n        [sortable]=\"false\"\r\n      >\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n            <button\r\n              class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n              data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\"\r\n              ngbDropdownToggle\r\n            >\r\n              <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n            </button>\r\n            <div ngbDropdownMenu>\r\n              <button\r\n                *abpPermission=\"'AbpIdentity.Roles.Update'\"\r\n                ngbDropdownItem\r\n                (click)=\"edit(row.id)\"\r\n              >\r\n                {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *abpPermission=\"'AbpIdentity.Roles.ManagePermissions'\"\r\n                ngbDropdownItem\r\n                (click)=\"openPermissionsModal(row.name)\"\r\n              >\r\n                {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *ngIf=\"!row.isStatic\"\r\n                [abpPermission]=\"'AbpIdentity.Roles.Delete'\"\r\n                ngbDropdownItem\r\n                (click)=\"delete(row.id, row.name)\"\r\n              >\r\n                {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column [name]=\"'AbpIdentity::RoleName' | abpLocalization\" prop=\"name\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row.name }}\r\n          <span *ngIf=\"row.isDefault\" class=\"badge badge-pill badge-success ml-1\">{{\r\n            'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n          }}</span>\r\n          <span *ngIf=\"row.isPublic\" class=\"badge badge-pill badge-info ml-1\">{{\r\n            'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n          }}</span>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <form #formRef [formGroup]=\"form\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n      <div class=\"form-group\">\r\n        <label for=\"role-name\">{{ 'AbpIdentity::RoleName' | abpLocalization }}</label\r\n        ><span> * </span>\r\n        <input autofocus type=\"text\" id=\"role-name\" class=\"form-control\" formControlName=\"name\" />\r\n      </div>\r\n\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"role-is-default\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"isDefault\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"role-is-default\">{{\r\n          'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"role-is-public\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"isPublic\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"role-is-public\">{{\r\n          'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid\" (click)=\"onClickSaveButton()\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'R' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true },\r\n        hideBadges: { value: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: permissionManagementKey\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n",
                providers: [ListService]
            },] }
];
RolesComponent.ctorParameters = () => [
    { type: ListService },
    { type: ConfirmationService },
    { type: FormBuilder },
    { type: Store }
];
RolesComponent.propDecorators = {
    formRef: [{ type: ViewChild, args: ['formRef', { static: false, read: ElementRef },] }]
};
__decorate([
    Select(IdentityState.getRoles),
    __metadata("design:type", Observable)
], RolesComponent.prototype, "data$", void 0);
__decorate([
    Select(IdentityState.getRolesTotalCount),
    __metadata("design:type", Observable)
], RolesComponent.prototype, "totalCount$", void 0);

class IdentityService {
    constructor(rest) {
        this.rest = rest;
        this.apiName = 'AbpIdentity';
    }
    getRoles(params = {}) {
        const request = {
            method: 'GET',
            url: '/api/identity/roles',
            params,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    getAllRoles() {
        const request = {
            method: 'GET',
            url: '/api/identity/roles/all',
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    getRoleById(id) {
        const request = {
            method: 'GET',
            url: `/api/identity/roles/${id}`,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    deleteRole(id) {
        const request = {
            method: 'DELETE',
            url: `/api/identity/roles/${id}`,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    createRole(body) {
        const request = {
            method: 'POST',
            url: '/api/identity/roles',
            body,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
    updateRole(body) {
        const url = `/api/identity/roles/${body.id}`;
        delete body.id;
        const request = {
            method: 'PUT',
            url,
            body,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
    getUsers(params = {}) {
        const request = {
            method: 'GET',
            url: '/api/identity/users',
            params,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    getUserById(id) {
        const request = {
            method: 'GET',
            url: `/api/identity/users/${id}`,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    getUserRoles(id) {
        const request = {
            method: 'GET',
            url: `/api/identity/users/${id}/roles`,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    getUserAssingableRoles() {
        const request = {
            method: 'GET',
            url: '/api/identity/users/assignable-roles',
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    deleteUser(id) {
        const request = {
            method: 'DELETE',
            url: `/api/identity/users/${id}`,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    createUser(body) {
        const request = {
            method: 'POST',
            url: '/api/identity/users',
            body,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
    updateUser(body) {
        const url = `/api/identity/users/${body.id}`;
        delete body.id;
        const request = {
            method: 'PUT',
            url,
            body,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
}
IdentityService.ɵprov = ɵɵdefineInjectable({ factory: function IdentityService_Factory() { return new IdentityService(ɵɵinject(RestService)); }, token: IdentityService, providedIn: "root" });
IdentityService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
IdentityService.ctorParameters = () => [
    { type: RestService }
];

class UsersComponent {
    constructor(list, confirmationService, fb, store, identityService, identityUserService) {
        this.list = list;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.store = store;
        this.identityService = identityService;
        this.identityUserService = identityUserService;
        this.visiblePermissions = false;
        this.modalBusy = false;
        this.permissionManagementKey = "PermissionManagement.PermissionManagementComponent" /* PermissionManagement */;
        this.trackByFn = (index, item) => Object.keys(item)[0] || index;
        this.onVisiblePermissionChange = event => {
            this.visiblePermissions = event;
        };
    }
    get roleGroups() {
        return snq(() => this.form.get('roleNames').controls, []);
    }
    ngOnInit() {
        this.hookToQuery();
    }
    buildForm() {
        this.identityUserService.getAssignableRoles().subscribe(({ items }) => {
            this.roles = items;
            this.form = this.fb.group({
                userName: [this.selected.userName || '', [Validators.required, Validators.maxLength(256)]],
                email: [
                    this.selected.email || '',
                    [Validators.required, Validators.email, Validators.maxLength(256)],
                ],
                name: [this.selected.name || '', [Validators.maxLength(64)]],
                surname: [this.selected.surname || '', [Validators.maxLength(64)]],
                phoneNumber: [this.selected.phoneNumber || '', [Validators.maxLength(16)]],
                lockoutEnabled: [this.selected.id ? this.selected.lockoutEnabled : true],
                roleNames: this.fb.array(this.roles.map(role => this.fb.group({
                    [role.name]: [
                        this.selected.id
                            ? !!snq(() => this.selectedUserRoles.find(userRole => userRole.id === role.id))
                            : role.isDefault,
                    ],
                }))),
            });
            const passwordValidators = getPasswordValidators(this.store);
            this.form.addControl('password', new FormControl('', [...passwordValidators]));
            if (!this.selected.userName) {
                this.form.get('password').setValidators([...passwordValidators, Validators.required]);
                this.form.get('password').updateValueAndValidity();
            }
        });
    }
    openModal() {
        this.buildForm();
        this.isModalVisible = true;
    }
    add() {
        this.selected = {};
        this.selectedUserRoles = [];
        this.openModal();
    }
    edit(id) {
        this.store
            .dispatch(new GetUserById(id))
            .pipe(switchMap(() => this.store.dispatch(new GetUserRoles(id))), pluck('IdentityState'), take(1))
            .subscribe((state) => {
            this.selected = state.selectedUser;
            this.selectedUserRoles = state.selectedUserRoles || [];
            this.openModal();
        });
    }
    save() {
        if (!this.form.valid || this.modalBusy)
            return;
        this.modalBusy = true;
        const { roleNames } = this.form.value;
        const mappedRoleNames = snq(() => roleNames.filter(role => !!role[Object.keys(role)[0]]).map(role => Object.keys(role)[0]), []);
        this.store
            .dispatch(this.selected.id
            ? new UpdateUser(Object.assign(Object.assign(Object.assign({}, this.selected), this.form.value), { id: this.selected.id, roleNames: mappedRoleNames }))
            : new CreateUser(Object.assign(Object.assign({}, this.form.value), { roleNames: mappedRoleNames })))
            .pipe(finalize(() => (this.modalBusy = false)))
            .subscribe(() => {
            this.isModalVisible = false;
            this.list.get();
        });
    }
    delete(id, userName) {
        this.confirmationService
            .warn('AbpIdentity::UserDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
            messageLocalizationParams: [userName],
        })
            .subscribe((status) => {
            if (status === Confirmation.Status.confirm) {
                this.store.dispatch(new DeleteUser(id)).subscribe(() => this.list.get());
            }
        });
    }
    sort(data) {
        const { prop, dir } = data.sorts[0];
        this.list.sortKey = prop;
        this.list.sortOrder = dir;
    }
    hookToQuery() {
        this.list.hookToQuery(query => this.store.dispatch(new GetUsers(query))).subscribe();
    }
    openPermissionsModal(providerKey) {
        this.providerKey = providerKey;
        setTimeout(() => {
            this.visiblePermissions = true;
        }, 0);
    }
}
UsersComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-users',
                template: "<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Users' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Users.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewUser' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <div class=\"input-group\">\r\n        <input\r\n          type=\"search\"\r\n          class=\"form-control\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          [(ngModel)]=\"list.filter\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <ngx-datatable [rows]=\"data$ | async\" [count]=\"totalCount$ | async\" [list]=\"list\" default>\r\n      <ngx-datatable-column\r\n        [name]=\"'AbpIdentity::Actions' | abpLocalization\"\r\n        [maxWidth]=\"150\"\r\n        [sortable]=\"false\"\r\n      >\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n            <button\r\n              class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n              data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\"\r\n              ngbDropdownToggle\r\n            >\r\n              <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n            </button>\r\n            <div ngbDropdownMenu>\r\n              <button\r\n                *abpPermission=\"'AbpIdentity.Users.Update'\"\r\n                ngbDropdownItem\r\n                (click)=\"edit(row.id)\"\r\n              >\r\n                {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *abpPermission=\"'AbpIdentity.Users.ManagePermissions'\"\r\n                ngbDropdownItem\r\n                (click)=\"openPermissionsModal(row.id)\"\r\n              >\r\n                {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *abpPermission=\"'AbpIdentity.Users.Delete'\"\r\n                ngbDropdownItem\r\n                (click)=\"delete(row.id, row.userName)\"\r\n              >\r\n                {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column\r\n        [width]=\"200\"\r\n        [name]=\"'AbpIdentity::UserName' | abpLocalization\"\r\n        prop=\"userName\"\r\n      ></ngx-datatable-column>\r\n      <ngx-datatable-column\r\n        [width]=\"200\"\r\n        [name]=\"'AbpIdentity::EmailAddress' | abpLocalization\"\r\n        prop=\"email\"\r\n      ></ngx-datatable-column>\r\n      <ngx-datatable-column\r\n        [width]=\"200\"\r\n        [name]=\"'AbpIdentity::PhoneNumber' | abpLocalization\"\r\n        prop=\"phoneNumber\"\r\n      ></ngx-datatable-column>\r\n    </ngx-datatable>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\" (disappear)=\"form = null\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-template #loaderRef\r\n      ><div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div\r\n    ></ng-template>\r\n\r\n    <form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n      <ul ngbNav #nav=\"ngbNav\" class=\"nav-tabs\">\r\n        <li ngbNavItem>\r\n          <a ngbNavLink>{{ 'AbpIdentity::UserInformations' | abpLocalization }}</a>\r\n          <ng-template ngbNavContent>\r\n            <div class=\"form-group\">\r\n              <label for=\"user-name\">{{ 'AbpIdentity::UserName' | abpLocalization }}</label\r\n              ><span> * </span>\r\n              <input\r\n                type=\"text\"\r\n                id=\"user-name\"\r\n                class=\"form-control\"\r\n                formControlName=\"userName\"\r\n                autofocus\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label>\r\n              <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">{{\r\n                'AbpIdentity::DisplayName:Surname' | abpLocalization\r\n              }}</label>\r\n              <input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">{{ 'AbpIdentity::Password' | abpLocalization }}</label\r\n              ><span *ngIf=\"!selected.userName\"> * </span>\r\n              <input\r\n                type=\"password\"\r\n                id=\"password\"\r\n                autocomplete=\"new-password\"\r\n                class=\"form-control\"\r\n                formControlName=\"password\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">{{ 'AbpIdentity::EmailAddress' | abpLocalization }}</label\r\n              ><span> * </span>\r\n              <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"phone-number\">{{ 'AbpIdentity::PhoneNumber' | abpLocalization }}</label>\r\n              <input\r\n                type=\"text\"\r\n                id=\"phone-number\"\r\n                class=\"form-control\"\r\n                formControlName=\"phoneNumber\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"custom-checkbox custom-control mb-2\">\r\n              <input\r\n                type=\"checkbox\"\r\n                id=\"lockout-checkbox\"\r\n                class=\"custom-control-input\"\r\n                formControlName=\"lockoutEnabled\"\r\n              />\r\n              <label class=\"custom-control-label\" for=\"lockout-checkbox\">{{\r\n                'AbpIdentity::DisplayName:LockoutEnabled' | abpLocalization\r\n              }}</label>\r\n            </div>\r\n          </ng-template>\r\n        </li>\r\n\r\n        <li ngbNavItem>\r\n          <a ngbNavLink>{{ 'AbpIdentity::Roles' | abpLocalization }}</a>\r\n          <ng-template ngbNavContent>\r\n            <div\r\n              *ngFor=\"let roleGroup of roleGroups; let i = index; trackBy: trackByFn\"\r\n              class=\"custom-checkbox custom-control mb-2\"\r\n            >\r\n              <input\r\n                type=\"checkbox\"\r\n                class=\"custom-control-input\"\r\n                [attr.id]=\"'roles-' + i\"\r\n                [formControl]=\"roleGroup.controls[roles[i].name]\"\r\n              />\r\n              <label class=\"custom-control-label\" [attr.for]=\"'roles-' + i\">{{\r\n                roles[i].name\r\n              }}</label>\r\n            </div>\r\n          </ng-template>\r\n        </li>\r\n      </ul>\r\n\r\n      <div class=\"mt-2 fade-in-top\" [ngbNavOutlet]=\"nav\"></div>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"form?.invalid\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'U' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: permissionManagementKey\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n",
                providers: [ListService]
            },] }
];
UsersComponent.ctorParameters = () => [
    { type: ListService },
    { type: ConfirmationService },
    { type: FormBuilder },
    { type: Store },
    { type: IdentityService },
    { type: IdentityUserService }
];
UsersComponent.propDecorators = {
    modalContent: [{ type: ViewChild, args: ['modalContent', { static: false },] }]
};
__decorate([
    Select(IdentityState.getUsers),
    __metadata("design:type", Observable)
], UsersComponent.prototype, "data$", void 0);
__decorate([
    Select(IdentityState.getUsersTotalCount),
    __metadata("design:type", Observable)
], UsersComponent.prototype, "totalCount$", void 0);

const ɵ0 = {
    requiredPolicy: 'AbpIdentity.Roles',
    replaceableComponent: {
        key: "Identity.RolesComponent" /* Roles */,
        defaultComponent: RolesComponent,
    },
}, ɵ1 = {
    requiredPolicy: 'AbpIdentity.Users',
    replaceableComponent: {
        key: "Identity.UsersComponent" /* Users */,
        defaultComponent: UsersComponent,
    },
};
const routes = [
    { path: '', redirectTo: 'roles', pathMatch: 'full' },
    {
        path: '',
        component: DynamicLayoutComponent,
        canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'roles',
                component: ReplaceableRouteContainerComponent,
                data: ɵ0,
            },
            {
                path: 'users',
                component: ReplaceableRouteContainerComponent,
                data: ɵ1,
            },
        ],
    },
];
class IdentityRoutingModule {
}
IdentityRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];

class IdentityModule {
    static forChild() {
        return {
            ngModule: IdentityModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(IdentityModule.forChild());
    }
}
IdentityModule.decorators = [
    { type: NgModule, args: [{
                declarations: [RolesComponent, UsersComponent],
                exports: [RolesComponent, UsersComponent],
                imports: [
                    NgxsModule.forFeature([IdentityState]),
                    CoreModule,
                    IdentityRoutingModule,
                    NgbNavModule,
                    ThemeSharedModule,
                    NgbDropdownModule,
                    PermissionManagementModule,
                    NgxValidateCoreModule,
                ],
            },] }
];

class IdentityStateService {
    constructor(store) {
        this.store = store;
    }
    getRoles() {
        return this.store.selectSnapshot(IdentityState.getRoles);
    }
    getRolesTotalCount() {
        return this.store.selectSnapshot(IdentityState.getRolesTotalCount);
    }
    getUsers() {
        return this.store.selectSnapshot(IdentityState.getUsers);
    }
    getUsersTotalCount() {
        return this.store.selectSnapshot(IdentityState.getUsersTotalCount);
    }
    dispatchGetRoles(...args) {
        return this.store.dispatch(new GetRoles(...args));
    }
    dispatchGetRoleById(...args) {
        return this.store.dispatch(new GetRoleById(...args));
    }
    dispatchDeleteRole(...args) {
        return this.store.dispatch(new DeleteRole(...args));
    }
    dispatchCreateRole(...args) {
        return this.store.dispatch(new CreateRole(...args));
    }
    dispatchUpdateRole(...args) {
        return this.store.dispatch(new UpdateRole(...args));
    }
    dispatchGetUsers(...args) {
        return this.store.dispatch(new GetUsers(...args));
    }
    dispatchGetUserById(...args) {
        return this.store.dispatch(new GetUserById(...args));
    }
    dispatchDeleteUser(...args) {
        return this.store.dispatch(new DeleteUser(...args));
    }
    dispatchCreateUser(...args) {
        return this.store.dispatch(new CreateUser(...args));
    }
    dispatchUpdateUser(...args) {
        return this.store.dispatch(new UpdateUser(...args));
    }
    dispatchGetUserRoles(...args) {
        return this.store.dispatch(new GetUserRoles(...args));
    }
}
IdentityStateService.ɵprov = ɵɵdefineInjectable({ factory: function IdentityStateService_Factory() { return new IdentityStateService(ɵɵinject(Store)); }, token: IdentityStateService, providedIn: "root" });
IdentityStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
IdentityStateService.ctorParameters = () => [
    { type: Store }
];

class IdentityUserLookupService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'AbpIdentity';
        this.findById = (id) => this.restService.request({
            method: 'GET',
            url: `/api/identity/users/lookup/${id}`,
        }, { apiName: this.apiName });
        this.findByUserName = (userName) => this.restService.request({
            method: 'GET',
            url: `/api/identity/users/lookup/by-username/${userName}`,
        }, { apiName: this.apiName });
        this.getCount = (input) => this.restService.request({
            method: 'GET',
            url: '/api/identity/users/lookup/count',
            params: { filter: input.filter },
        }, { apiName: this.apiName });
        this.search = (input) => this.restService.request({
            method: 'GET',
            url: '/api/identity/users/lookup/search',
            params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
        }, { apiName: this.apiName });
    }
}
IdentityUserLookupService.ɵprov = ɵɵdefineInjectable({ factory: function IdentityUserLookupService_Factory() { return new IdentityUserLookupService(ɵɵinject(RestService)); }, token: IdentityUserLookupService, providedIn: "root" });
IdentityUserLookupService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
IdentityUserLookupService.ctorParameters = () => [
    { type: RestService }
];

class ProfileService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'AbpIdentity';
        this.changePassword = (input) => this.restService.request({
            method: 'POST',
            url: '/api/identity/my-profile/change-password',
            body: input,
        }, { apiName: this.apiName });
        this.get = () => this.restService.request({
            method: 'GET',
            url: '/api/identity/my-profile',
        }, { apiName: this.apiName });
        this.update = (input) => this.restService.request({
            method: 'PUT',
            url: '/api/identity/my-profile',
            body: input,
        }, { apiName: this.apiName });
    }
}
ProfileService.ɵprov = ɵɵdefineInjectable({ factory: function ProfileService_Factory() { return new ProfileService(ɵɵinject(RestService)); }, token: ProfileService, providedIn: "root" });
ProfileService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProfileService.ctorParameters = () => [
    { type: RestService }
];

/*
 * Public API Surface of identity
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CreateRole, CreateUser, DeleteRole, DeleteUser, GetRoleById, GetRoles, GetUserById, GetUserRoles, GetUsers, IdentityModule, IdentityRoleService, IdentityService, IdentityState, IdentityStateService, IdentityUserLookupService, IdentityUserService, ProfileService, RolesComponent, UpdateRole, UpdateUser, UsersComponent, RolesComponent as ɵa, IdentityUserService as ɵb, IdentityRoleService as ɵc, UsersComponent as ɵg, IdentityService as ɵh, IdentityRoutingModule as ɵi };
//# sourceMappingURL=abp-ng.identity.js.map
