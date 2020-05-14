import { IdentityModule } from '@fs/identity';
import { AddReplaceableComponent, CoreModule } from '@abp/ng.core';
import { Component, NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { __extends } from 'tslib';
import { IdentityService, UsersComponent as UsersComponent$1, RolesComponent as RolesComponent$1 } from '@abp/ng.identity';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/users/users.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UsersComponent = /** @class */ (function (_super) {
    __extends(UsersComponent, _super);
    function UsersComponent(_confirmationService, _fb, _store, _identityService) {
        var _this = _super.call(this, _confirmationService, _fb, _store, _identityService) || this;
        _this._confirmationService = _confirmationService;
        _this._fb = _fb;
        _this._store = _store;
        _this._identityService = _identityService;
        return _this;
    }
    UsersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-alain-users',
                    template: "<page-header [title]=\"'AbpIdentity::NewUser' | abpLocalization\"></page-header>\r\n<nz-card [nzBordered]=\"false\">\r\n  <form nz-form [nzLayout]=\"'inline'\" class=\"search__form\">\r\n    <div nz-row [nzGutter]=\"{ xs: 8, sm: 8, md: 8, lg: 24, xl: 48, xxl: 48 }\">\r\n      <div nz-col nzMd=\"8\" nzSm=\"24\">\r\n        <nz-form-item>\r\n          <nz-form-label nzFor=\"no\">{{'AbpIdentity::PagerSearch' | abpLocalization }}</nz-form-label>\r\n          <nz-form-control>\r\n            <input nz-input type=\"search\" [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n              (input.debounce)=\"onSearch($event.target.value)\" />\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <button nz-button [abpPermission]=\"'AbpIdentity.Users.Create'\" (click)=\"add()\" [nzType]=\"'primary'\">\r\n    <i nz-icon nzType=\"plus\"></i>\r\n    <span>{{ 'AbpIdentity::NewUser' | abpLocalization }}</span>\r\n  </button>\r\n  <div class=\"my-md\"></div>\r\n  <nz-table #basicTable [nzData]=\"data$ | async\" [nzPageSize]=\"pageQuery.maxResultCount\" [nzTotal]=\"totalCount$ | async\"\r\n    [nzLoading]=\"loading\" [nzFrontPagination]=\"false\" (nzPageIndexChange)=\"onPageChange($event)\">\r\n    <thead>\r\n      <tr>\r\n        <th>{{ 'AbpIdentity::DisplayName:UserName' | abpLocalization }}</th>\r\n        <th>{{ 'AbpIdentity::DisplayName:Email' | abpLocalization }}</th>\r\n        <th>{{ 'AbpIdentity::DisplayName:PhoneNumber' | abpLocalization }}</th>\r\n        <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of basicTable.data\">\r\n        <td>{{ data.userName }}</td>\r\n        <td>{{ data.email }}</td>\r\n        <td>{{ data.phoneNumber }}</td>\r\n        <td>\r\n          <a class=\"ant-dropdown-link\" nz-dropdown [nzDropdownMenu]=\"opMenu\">\r\n            {{ 'AbpIdentity::Actions' | abpLocalization }}\r\n            <i nz-icon nzType=\"down\"></i>\r\n          </a>\r\n          <nz-dropdown-menu #opMenu=\"nzDropdownMenu\">\r\n            <ul nz-menu>\r\n              <li nz-menu-item [abpPermission]=\"'AbpIdentity.Users.Update'\" (click)=\"edit(data.id)\">\r\n                {{ 'AbpIdentity::Edit' | abpLocalization }}</li>\r\n              <li nz-menu-item [abpPermission]=\"'AbpIdentity.Users.ManagePermissions'\"\r\n                (click)=\"providerKey = data.id; visiblePermissions = true\">\r\n                {{ 'AbpIdentity::Permissions' | abpLocalization }}</li>\r\n              <li nz-menu-item [abpPermission]=\"'AbpIdentity.Users.Delete'\" (click)=\"delete(data.id, data.userName)\">\r\n                {{ 'AbpIdentity::Delete' | abpLocalization }}</li>\r\n            </ul>\r\n          </nz-dropdown-menu>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </nz-table>\r\n</nz-card>\r\n<nz-modal [nzStyle]=\"{ top: '20px' }\" [(nzVisible)]=\"isModalVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\"\r\n  [nzFooter]=\"modalFooter\" (nzOnCancel)=\"isModalVisible=false\">\r\n  <ng-template #modalTitle>\r\n    {{(selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization}}\r\n  </ng-template>\r\n\r\n  <ng-template #modalContent>\r\n    <ng-template #loaderRef>\r\n      <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n    </ng-template>\r\n\r\n    <form nz-form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n      <nz-tabset>\r\n        <nz-tab nzTitle=\"{{'AbpIdentity::UserInformations' | abpLocalization}}\">\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"user-name\">\r\n              {{ 'AbpIdentity::UserName' | abpLocalization }}</nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n              <input nz-input formControlName=\"userName\" id=\"user-name\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}\r\n            </nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n              <input nz-input formControlName=\"name\" id=\"name\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"surname\">\r\n              {{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n              <input nz-input formControlName=\"surname\" id=\"surname\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"password\" nzRequired>\r\n              {{ 'AbpIdentity::Password' | abpLocalization }}</nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n              <input nz-input type=\"password\" id=\"password\" formControlName=\"password\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"email\">\r\n              {{ 'AbpIdentity::EmailAddress' | abpLocalization }}</nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n              <input nz-input formControlName=\"email\" id=\"email\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"phoneNumber\">{{ 'AbpIdentity::PhoneNumber' | abpLocalization }}\r\n            </nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n              <input nz-input formControlName=\"phoneNumber\" id=\"phoneNumber\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control>\r\n              <label nz-checkbox formControlName=\"lockoutEnabled\">\r\n                <span>\r\n                  {{\r\n                  'AbpIdentity::DisplayName:LockoutEnabled' | abpLocalization\r\n                  }}\r\n                </span>\r\n              </label>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control>\r\n              <label nz-checkbox formControlName=\"twoFactorEnabled\">\r\n                <span>\r\n                  {{\r\n                  'AbpIdentity::DisplayName:TwoFactorEnabled' | abpLocalization\r\n                  }}\r\n                </span>\r\n              </label>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"{{'AbpIdentity::Roles' | abpLocalization}}\">\r\n          <nz-form-item>\r\n            <nz-form-control *ngFor=\"let roleGroup of roleGroups; let i = index; trackBy: trackByFn\">\r\n              <label nz-checkbox [formControl]=\"roleGroup.controls[roles[i].name]\">\r\n                <span>\r\n                  {{ roles[i].name }}\r\n                </span>\r\n              </label>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </nz-tab>\r\n      </nz-tabset>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #modalFooter>\r\n    <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"save()\" [disabled]=\"form?.invalid\">\r\n      {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n      }}\r\n    </button>\r\n  </ng-template>\r\n</nz-modal>\r\n<ng-alain-permission-management [(visible)]=\"visiblePermissions\" providerName=\"U\" [providerKey]=\"providerKey\">\r\n</ng-alain-permission-management>"
                }] }
    ];
    /** @nocollapse */
    UsersComponent.ctorParameters = function () { return [
        { type: ConfirmationService },
        { type: FormBuilder },
        { type: Store },
        { type: IdentityService }
    ]; };
    return UsersComponent;
}(UsersComponent$1));
if (false) {
    /**
     * @type {?}
     * @private
     */
    UsersComponent.prototype._confirmationService;
    /**
     * @type {?}
     * @private
     */
    UsersComponent.prototype._fb;
    /**
     * @type {?}
     * @private
     */
    UsersComponent.prototype._store;
    /**
     * @type {?}
     * @private
     */
    UsersComponent.prototype._identityService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/roles/roles.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RolesComponent = /** @class */ (function (_super) {
    __extends(RolesComponent, _super);
    function RolesComponent(_confirmationService, _fb, _store) {
        var _this = _super.call(this, _confirmationService, _fb, _store) || this;
        _this._confirmationService = _confirmationService;
        _this._fb = _fb;
        _this._store = _store;
        return _this;
    }
    RolesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-alain-roles',
                    template: "<page-header [title]=\"'AbpIdentity::Roles' | abpLocalization\"></page-header>\r\n<nz-card [nzBordered]=\"false\">\r\n  <button nz-button [abpPermission]=\"'AbpIdentity.Roles.Create'\" (click)=\"add()\" [nzType]=\"'primary'\">\r\n    <i nz-icon nzType=\"plus\"></i>\r\n    <span>{{ 'AbpIdentity::NewRole' | abpLocalization }}</span>\r\n  </button>\r\n  <div class=\"my-md\"></div>\r\n  <nz-table #basicTable [nzData]=\"data$ | async\" [nzPageSize]=\"pageQuery.maxResultCount\" [nzTotal]=\"totalCount$ | async\"\r\n  [nzLoading]=\"loading\" [nzFrontPagination]=\"false\" (nzPageIndexChange)=\"onPageChange($event)\">\r\n  <thead>\r\n    <tr>\r\n      <th>{{ 'AbpIdentity::DisplayName:RoleName' | abpLocalization }}</th>\r\n      <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let data of basicTable.data\">\r\n      <td>{{ data.name }}\r\n          <nz-tag [nzColor]=\"'#17a2b8'\" *ngIf=\"data.isPublic\">{{ 'AbpIdentity::DisplayName:IsPublic' | abpLocalization }}</nz-tag>\r\n          <nz-tag [nzColor]=\"'#28a745'\" *ngIf=\"data.isDefault\">{{ 'AbpIdentity::DisplayName:IsDefault' | abpLocalization }}</nz-tag>\r\n      </td>\r\n      <td>\r\n          <a nz-dropdown [nzDropdownMenu]=\"opMenu\">\r\n              {{ 'AbpIdentity::Actions' | abpLocalization }}\r\n              <i nz-icon nzType=\"down\"></i>\r\n            </a>\r\n            <nz-dropdown-menu #opMenu=\"nzDropdownMenu\">\r\n              <ul nz-menu>\r\n                <li nz-menu-item [abpPermission]=\"'AbpIdentity.Roles.Update'\" (click)=\"edit(data.id)\">\r\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}</li>\r\n                <li nz-menu-item [abpPermission]=\"'AbpIdentity.Roles.ManagePermissions'\"\r\n                  (click)=\"providerKey = data.name; visiblePermissions = true\">\r\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}</li>\r\n                <li nz-menu-item [abpPermission]=\"'AbpIdentity.Roles.Delete'\" (click)=\"delete(data.id, data.name)\">\r\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}</li>\r\n              </ul>\r\n            </nz-dropdown-menu>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</nz-table>\r\n</nz-card>\r\n<nz-modal [nzStyle]=\"{ top: '20px' }\" [(nzVisible)]=\"isModalVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\"\r\n  [nzFooter]=\"modalFooter\" (nzOnCancel)=\"isModalVisible=false\">\r\n  <ng-template #modalTitle>\r\n    {{(selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization}}\r\n  </ng-template>\r\n\r\n  <ng-template #modalContent>\r\n    <ng-template #loaderRef>\r\n      <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n    </ng-template>\r\n\r\n    <form nz-form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n\r\n\r\n      <nz-form-item>\r\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"role-name\">\r\n          {{ 'AbpIdentity::RoleName' | abpLocalization }}</nz-form-label>\r\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n          <input nz-input formControlName=\"name\" id=\"role-name\" />\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\r\n          <label nz-checkbox formControlName=\"isDefault\">\r\n            <span>\r\n              {{\r\n                  'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n              }}\r\n            </span>\r\n          </label>\r\n          <label nz-checkbox formControlName=\"isPublic\">\r\n            <span>\r\n              {{\r\n                  'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n              }}\r\n            </span>\r\n          </label>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #modalFooter>\r\n    <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"save()\" [disabled]=\"form?.invalid\">\r\n      {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n      }}\r\n    </button>\r\n  </ng-template>\r\n</nz-modal>\r\n<ng-alain-permission-management [(visible)]=\"visiblePermissions\" providerName=\"R\" [providerKey]=\"providerKey\">\r\n</ng-alain-permission-management>"
                }] }
    ];
    /** @nocollapse */
    RolesComponent.ctorParameters = function () { return [
        { type: ConfirmationService },
        { type: FormBuilder },
        { type: Store }
    ]; };
    return RolesComponent;
}(RolesComponent$1));
if (false) {
    /**
     * @type {?}
     * @private
     */
    RolesComponent.prototype._confirmationService;
    /**
     * @type {?}
     * @private
     */
    RolesComponent.prototype._fb;
    /**
     * @type {?}
     * @private
     */
    RolesComponent.prototype._store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/identity-ng-alain.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IdentityNgAlainModule = /** @class */ (function () {
    function IdentityNgAlainModule(store) {
        this.store = store;
        store.dispatch(new AddReplaceableComponent({ component: UsersComponent, key: 'Identity.UsersComponent' }));
        store.dispatch(new AddReplaceableComponent({ component: RolesComponent, key: 'Identity.RolesComponent' }));
    }
    IdentityNgAlainModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [UsersComponent, RolesComponent],
                    entryComponents: [UsersComponent, RolesComponent],
                    imports: [
                        CoreModule,
                        NgAlainBasicModule,
                        PermissionManagementNgAlainModule,
                        IdentityModule
                    ]
                },] }
    ];
    /** @nocollapse */
    IdentityNgAlainModule.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return IdentityNgAlainModule;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    IdentityNgAlainModule.prototype.store;
}

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
 * Generated from: fs-identity-ng-alain.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { IdentityNgAlainModule, UsersComponent as ɵa, RolesComponent as ɵb };
//# sourceMappingURL=fs-identity-ng-alain.js.map
