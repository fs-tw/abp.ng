/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/roles/roles.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RolesComponent as AbpRolesComponent } from '@abp/ng.identity';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
export class RolesComponent extends AbpRolesComponent {
    /**
     * @param {?} _confirmationService
     * @param {?} _fb
     * @param {?} _store
     */
    constructor(_confirmationService, _fb, _store) {
        super(_confirmationService, _fb, _store);
        this._confirmationService = _confirmationService;
        this._fb = _fb;
        this._store = _store;
    }
}
RolesComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-alain-roles',
                template: "<page-header [title]=\"'AbpIdentity::Roles' | abpLocalization\"></page-header>\r\n<nz-card [nzBordered]=\"false\">\r\n  <button nz-button [abpPermission]=\"'AbpIdentity.Roles.Create'\" (click)=\"add()\" [nzType]=\"'primary'\">\r\n    <i nz-icon nzType=\"plus\"></i>\r\n    <span>{{ 'AbpIdentity::NewRole' | abpLocalization }}</span>\r\n  </button>\r\n  <div class=\"my-md\"></div>\r\n  <nz-table #basicTable [nzData]=\"data$ | async\" [nzPageSize]=\"pageQuery.maxResultCount\" [nzTotal]=\"totalCount$ | async\"\r\n  [nzLoading]=\"loading\" [nzFrontPagination]=\"false\" (nzPageIndexChange)=\"onPageChange($event)\">\r\n  <thead>\r\n    <tr>\r\n      <th>{{ 'AbpIdentity::DisplayName:RoleName' | abpLocalization }}</th>\r\n      <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let data of basicTable.data\">\r\n      <td>{{ data.name }}\r\n          <nz-tag [nzColor]=\"'#17a2b8'\" *ngIf=\"data.isPublic\">{{ 'AbpIdentity::DisplayName:IsPublic' | abpLocalization }}</nz-tag>\r\n          <nz-tag [nzColor]=\"'#28a745'\" *ngIf=\"data.isDefault\">{{ 'AbpIdentity::DisplayName:IsDefault' | abpLocalization }}</nz-tag>\r\n      </td>\r\n      <td>\r\n          <a nz-dropdown [nzDropdownMenu]=\"opMenu\">\r\n              {{ 'AbpIdentity::Actions' | abpLocalization }}\r\n              <i nz-icon nzType=\"down\"></i>\r\n            </a>\r\n            <nz-dropdown-menu #opMenu=\"nzDropdownMenu\">\r\n              <ul nz-menu>\r\n                <li nz-menu-item [abpPermission]=\"'AbpIdentity.Roles.Update'\" (click)=\"edit(data.id)\">\r\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}</li>\r\n                <li nz-menu-item [abpPermission]=\"'AbpIdentity.Roles.ManagePermissions'\"\r\n                  (click)=\"providerKey = data.name; visiblePermissions = true\">\r\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}</li>\r\n                <li nz-menu-item [abpPermission]=\"'AbpIdentity.Roles.Delete'\" (click)=\"delete(data.id, data.name)\">\r\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}</li>\r\n              </ul>\r\n            </nz-dropdown-menu>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</nz-table>\r\n</nz-card>\r\n<nz-modal [nzStyle]=\"{ top: '20px' }\" [(nzVisible)]=\"isModalVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\"\r\n  [nzFooter]=\"modalFooter\" (nzOnCancel)=\"isModalVisible=false\">\r\n  <ng-template #modalTitle>\r\n    {{(selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization}}\r\n  </ng-template>\r\n\r\n  <ng-template #modalContent>\r\n    <ng-template #loaderRef>\r\n      <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n    </ng-template>\r\n\r\n    <form nz-form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n\r\n\r\n      <nz-form-item>\r\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"role-name\">\r\n          {{ 'AbpIdentity::RoleName' | abpLocalization }}</nz-form-label>\r\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n          <input nz-input formControlName=\"name\" id=\"role-name\" />\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\r\n          <label nz-checkbox formControlName=\"isDefault\">\r\n            <span>\r\n              {{\r\n                  'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n              }}\r\n            </span>\r\n          </label>\r\n          <label nz-checkbox formControlName=\"isPublic\">\r\n            <span>\r\n              {{\r\n                  'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n              }}\r\n            </span>\r\n          </label>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #modalFooter>\r\n    <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"save()\" [disabled]=\"form?.invalid\">\r\n      {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n      }}\r\n    </button>\r\n  </ng-template>\r\n</nz-modal>\r\n<ng-alain-permission-management [(visible)]=\"visiblePermissions\" providerName=\"R\" [providerKey]=\"providerKey\">\r\n</ng-alain-permission-management>"
            }] }
];
/** @nocollapse */
RolesComponent.ctorParameters = () => [
    { type: ConfirmationService },
    { type: FormBuilder },
    { type: Store }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2lkZW50aXR5L25nLWFsYWluLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcm9sZXMvcm9sZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsSUFBSSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLcEMsTUFBTSxPQUFPLGNBQWUsU0FBUSxpQkFBaUI7Ozs7OztJQUNuRCxZQUNVLG9CQUF5QyxFQUN6QyxHQUFnQixFQUNoQixNQUFhO1FBQ3JCLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFIakMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUN6QyxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQU87SUFFdkIsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHE0SUFBcUM7YUFDdEM7Ozs7WUFQUSxtQkFBbUI7WUFFbkIsV0FBVztZQUNYLEtBQUs7Ozs7Ozs7SUFPViw4Q0FBaUQ7Ozs7O0lBQ2pELDZCQUF3Qjs7Ozs7SUFDeEIsZ0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm9sZXNDb21wb25lbnQgYXMgQWJwUm9sZXNDb21wb25lbnQgfSBmcm9tICdAYWJwL25nLmlkZW50aXR5JztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLWFsYWluLXJvbGVzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcm9sZXMuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9sZXNDb21wb25lbnQgZXh0ZW5kcyBBYnBSb2xlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9jb25maXJtYXRpb25TZXJ2aWNlOiBDb25maXJtYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlKSB7XHJcbiAgICBzdXBlcihfY29uZmlybWF0aW9uU2VydmljZSwgX2ZiLCBfc3RvcmUpO1xyXG4gIH1cclxufVxyXG4iXX0=