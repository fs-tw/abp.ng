import { __decorate, __metadata } from "tslib";
import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, pluck } from 'rxjs/operators';
import { CreateRole, DeleteRole, GetRoleById, GetRoles, UpdateRole, } from '../../actions/identity.actions';
import { IdentityState } from '../../states/identity.state';
let RolesComponent = class RolesComponent {
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
};
__decorate([
    Select(IdentityState.getRoles),
    __metadata("design:type", Observable)
], RolesComponent.prototype, "data$", void 0);
__decorate([
    Select(IdentityState.getRolesTotalCount),
    __metadata("design:type", Observable)
], RolesComponent.prototype, "totalCount$", void 0);
__decorate([
    ViewChild('formRef', { static: false, read: ElementRef }),
    __metadata("design:type", ElementRef)
], RolesComponent.prototype, "formRef", void 0);
RolesComponent = __decorate([
    Component({
        selector: 'abp-roles',
        template: "<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Roles' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Roles.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewRole' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <ngx-datatable [rows]=\"data$ | async\" [count]=\"totalCount$ | async\" [list]=\"list\" default>\r\n      <ngx-datatable-column\r\n        [name]=\"'AbpIdentity::Actions' | abpLocalization\"\r\n        [maxWidth]=\"150\"\r\n        [sortable]=\"false\"\r\n      >\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n            <button\r\n              class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n              data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\"\r\n              ngbDropdownToggle\r\n            >\r\n              <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n            </button>\r\n            <div ngbDropdownMenu>\r\n              <button\r\n                *abpPermission=\"'AbpIdentity.Roles.Update'\"\r\n                ngbDropdownItem\r\n                (click)=\"edit(row.id)\"\r\n              >\r\n                {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *abpPermission=\"'AbpIdentity.Roles.ManagePermissions'\"\r\n                ngbDropdownItem\r\n                (click)=\"openPermissionsModal(row.name)\"\r\n              >\r\n                {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *ngIf=\"!row.isStatic\"\r\n                [abpPermission]=\"'AbpIdentity.Roles.Delete'\"\r\n                ngbDropdownItem\r\n                (click)=\"delete(row.id, row.name)\"\r\n              >\r\n                {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column\r\n        [name]=\"'AbpIdentity::RoleName' | abpLocalization\"\r\n        prop=\"name\"\r\n      ></ngx-datatable-column>\r\n    </ngx-datatable>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <form #formRef [formGroup]=\"form\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n      <div class=\"form-group\">\r\n        <label for=\"role-name\">{{ 'AbpIdentity::RoleName' | abpLocalization }}</label\r\n        ><span> * </span>\r\n        <input autofocus type=\"text\" id=\"role-name\" class=\"form-control\" formControlName=\"name\" />\r\n      </div>\r\n\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"role-is-default\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"isDefault\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"role-is-default\">{{\r\n          'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"role-is-public\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"isPublic\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"role-is-public\">{{\r\n          'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid\" (click)=\"onClickSaveButton()\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'R' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true },\r\n        hideBadges: { value: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: permissionManagementKey\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n",
        providers: [ListService]
    }),
    __metadata("design:paramtypes", [ListService,
        ConfirmationService,
        FormBuilder,
        Store])
], RolesComponent);
export { RolesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvaWRlbnRpdHkvc3JjL2xpYi9jb21wb25lbnRzL3JvbGVzL3JvbGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLFVBQVUsR0FDWCxNQUFNLGdDQUFnQyxDQUFDO0FBRXhDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU81RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBNEJ6QixZQUNrQixJQUFpQixFQUN6QixtQkFBd0MsRUFDeEMsRUFBZSxFQUNmLEtBQVk7UUFISixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ3pCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQU87UUFuQnRCLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUkzQixjQUFTLEdB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QyxhQUFhLENBQUMsUUFBUSxDQUFDOzhCQUN4QixVQUFVOzZDQUFzQjtBQUd2QztJQURDLE1BQU0sQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7OEJBQzVCLFVBQVU7bURBQVM7QUFpQmhDO0lBREMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDOzhCQUNqRCxVQUFVOytDQUFrQjtBQXRCMUIsY0FBYztJQUwxQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQix1cktBQXFDO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQztLQUN6QixDQUFDO3FDQThCd0IsV0FBVztRQUNKLG1CQUFtQjtRQUNwQyxXQUFXO1FBQ1IsS0FBSztHQWhDWCxjQUFjLENBeUgxQjtTQXpIWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdFNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBlUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnRzIH0gZnJvbSAnQGFicC9uZy5wZXJtaXNzaW9uLW1hbmFnZW1lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb24sIENvbmZpcm1hdGlvblNlcnZpY2UgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmluYWxpemUsIHBsdWNrIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gIENyZWF0ZVJvbGUsXHJcbiAgRGVsZXRlUm9sZSxcclxuICBHZXRSb2xlQnlJZCxcclxuICBHZXRSb2xlcyxcclxuICBVcGRhdGVSb2xlLFxyXG59IGZyb20gJy4uLy4uL2FjdGlvbnMvaWRlbnRpdHkuYWN0aW9ucyc7XHJcbmltcG9ydCB7IElkZW50aXR5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2lkZW50aXR5JztcclxuaW1wb3J0IHsgSWRlbnRpdHlTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlcy9pZGVudGl0eS5zdGF0ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1yb2xlcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JvbGVzLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtMaXN0U2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb2xlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFNlbGVjdChJZGVudGl0eVN0YXRlLmdldFJvbGVzKVxyXG4gIGRhdGEkOiBPYnNlcnZhYmxlPElkZW50aXR5LlJvbGVJdGVtW10+O1xyXG5cclxuICBAU2VsZWN0KElkZW50aXR5U3RhdGUuZ2V0Um9sZXNUb3RhbENvdW50KVxyXG4gIHRvdGFsQ291bnQkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcblxyXG4gIGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgc2VsZWN0ZWQ6IElkZW50aXR5LlJvbGVJdGVtO1xyXG5cclxuICBpc01vZGFsVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgdmlzaWJsZVBlcm1pc3Npb25zID0gZmFsc2U7XHJcblxyXG4gIHByb3ZpZGVyS2V5OiBzdHJpbmc7XHJcblxyXG4gIG1vZGFsQnVzeSA9IGZhbHNlO1xyXG5cclxuICBwZXJtaXNzaW9uTWFuYWdlbWVudEtleSA9IGVQZXJtaXNzaW9uTWFuYWdlbWVudENvbXBvbmVudHMuUGVybWlzc2lvbk1hbmFnZW1lbnQ7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2Zvcm1SZWYnLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSlcclxuICBmb3JtUmVmOiBFbGVtZW50UmVmPEhUTUxGb3JtRWxlbWVudD47XHJcblxyXG4gIG9uVmlzaWJsZVBlcm1pc3Npb25DaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICB0aGlzLnZpc2libGVQZXJtaXNzaW9ucyA9IGV2ZW50O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJlYWRvbmx5IGxpc3Q6IExpc3RTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb25maXJtYXRpb25TZXJ2aWNlOiBDb25maXJtYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5ob29rVG9RdWVyeSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRGb3JtKCkge1xyXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIG5hbWU6IG5ldyBGb3JtQ29udHJvbCh7IHZhbHVlOiB0aGlzLnNlbGVjdGVkLm5hbWUgfHwgJycsIGRpc2FibGVkOiB0aGlzLnNlbGVjdGVkLmlzU3RhdGljIH0sIFtcclxuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDI1NiksXHJcbiAgICAgIF0pLFxyXG4gICAgICBpc0RlZmF1bHQ6IFt0aGlzLnNlbGVjdGVkLmlzRGVmYXVsdCB8fCBmYWxzZV0sXHJcbiAgICAgIGlzUHVibGljOiBbdGhpcy5zZWxlY3RlZC5pc1B1YmxpYyB8fCBmYWxzZV0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbCgpIHtcclxuICAgIHRoaXMuYnVpbGRGb3JtKCk7XHJcbiAgICB0aGlzLmlzTW9kYWxWaXNpYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGFkZCgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB7fSBhcyBJZGVudGl0eS5Sb2xlSXRlbTtcclxuICAgIHRoaXMub3Blbk1vZGFsKCk7XHJcbiAgfVxyXG5cclxuICBlZGl0KGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKG5ldyBHZXRSb2xlQnlJZChpZCkpXHJcbiAgICAgIC5waXBlKHBsdWNrKCdJZGVudGl0eVN0YXRlJywgJ3NlbGVjdGVkUm9sZScpKVxyXG4gICAgICAuc3Vic2NyaWJlKHNlbGVjdGVkUm9sZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkUm9sZTtcclxuICAgICAgICB0aGlzLm9wZW5Nb2RhbCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICBpZiAoIXRoaXMuZm9ybS52YWxpZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5tb2RhbEJ1c3kgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKFxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuaWRcclxuICAgICAgICAgID8gbmV3IFVwZGF0ZVJvbGUoeyAuLi50aGlzLnNlbGVjdGVkLCAuLi50aGlzLmZvcm0udmFsdWUsIGlkOiB0aGlzLnNlbGVjdGVkLmlkIH0pXHJcbiAgICAgICAgICA6IG5ldyBDcmVhdGVSb2xlKHRoaXMuZm9ybS52YWx1ZSksXHJcbiAgICAgIClcclxuICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4gKHRoaXMubW9kYWxCdXN5ID0gZmFsc2UpKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGlzdC5nZXQoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2VcclxuICAgICAgLndhcm4oJ0FicElkZW50aXR5OjpSb2xlRGVsZXRpb25Db25maXJtYXRpb25NZXNzYWdlJywgJ0FicElkZW50aXR5OjpBcmVZb3VTdXJlJywge1xyXG4gICAgICAgIG1lc3NhZ2VMb2NhbGl6YXRpb25QYXJhbXM6IFtuYW1lXSxcclxuICAgICAgfSlcclxuICAgICAgLnN1YnNjcmliZSgoc3RhdHVzOiBDb25maXJtYXRpb24uU3RhdHVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gQ29uZmlybWF0aW9uLlN0YXR1cy5jb25maXJtKSB7XHJcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVSb2xlKGlkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMubGlzdC5nZXQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaG9va1RvUXVlcnkoKSB7XHJcbiAgICB0aGlzLmxpc3QuaG9va1RvUXVlcnkocXVlcnkgPT4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0Um9sZXMocXVlcnkpKSkuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrU2F2ZUJ1dHRvbigpIHtcclxuICAgIHRoaXMuZm9ybVJlZi5uYXRpdmVFbGVtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgIG5ldyBFdmVudCgnc3VibWl0JywgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9wZW5QZXJtaXNzaW9uc01vZGFsKHByb3ZpZGVyS2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMucHJvdmlkZXJLZXkgPSBwcm92aWRlcktleTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnZpc2libGVQZXJtaXNzaW9ucyA9IHRydWU7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIHNvcnQoZGF0YSkge1xyXG4gICAgY29uc3QgeyBwcm9wLCBkaXIgfSA9IGRhdGEuc29ydHNbMF07XHJcbiAgICB0aGlzLmxpc3Quc29ydEtleSA9IHByb3A7XHJcbiAgICB0aGlzLmxpc3Quc29ydE9yZGVyID0gZGlyO1xyXG4gIH1cclxufVxyXG4iXX0=