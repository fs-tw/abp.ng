import { __decorate, __metadata } from "tslib";
import { ConfigState } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, TemplateRef, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AccountService } from '@abp/ng.account';
import { TenantBoxComponent as AbpTenantBoxComponent } from '@abp/ng.account';
let TenantBoxComponent = class TenantBoxComponent extends AbpTenantBoxComponent {
    constructor(_store, _toasterService, _accountService) {
        super(_store, _toasterService, _accountService);
        this._store = _store;
        this._toasterService = _toasterService;
        this._accountService = _accountService;
    }
};
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], TenantBoxComponent.prototype, "mainContentRef", void 0);
__decorate([
    Select(ConfigState.getDeep('multiTenancy.isEnabled')),
    __metadata("design:type", Observable)
], TenantBoxComponent.prototype, "isMultiTenancyEnabled$", void 0);
TenantBoxComponent = __decorate([
    Component({
        selector: 'ng-alain-tenant-box',
        template: "<nz-card [nzTitle]=\"cardTitle\" [nzExtra]=\"extraTemplate\">\r\n  <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n</nz-card>\r\n<ng-template #extraTemplate>\r\n  <a id=\"AbpTenantSwitchLink\" href=\"javascript:void(0);\" class=\"btn btn-sm mt-3 btn-outline-primary\"\r\n    *ngIf=\"isMultiTenancyEnabled$ | async\" (click)=\"onSwitch()\">{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a>\r\n</ng-template>\r\n\r\n<ng-template #cardTitle>\r\n  <div *ngIf=\"(currentTenant$ | async) || {} as currentTenant\">\r\n    <span *ngIf=\"isMultiTenancyEnabled$ | async\">\r\n      {{'AbpUiMultiTenancy::Tenant' | abpLocalization}}\r\n      ({{ currentTenant.name || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }})\r\n    </span>\r\n  </div>\r\n\r\n</ng-template>\r\n\r\n<nz-modal [nzStyle]=\"{ top: '20px' }\" [(nzVisible)]=\"isModalVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\"\r\n  [nzFooter]=\"modalFooter\" (nzOnCancel)=\"isModalVisible=false\">\r\n  <ng-template #modalTitle>\r\n    {{'AbpUiMultiTenancy::Tenant' | abpLocalization}}\r\n  </ng-template>\r\n\r\n  <ng-template #modalContent>\r\n    <ng-template #loaderRef>\r\n      <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n    </ng-template>\r\n\r\n    <form nz-form (ngSubmit)=\"save()\">\r\n\r\n\r\n      <nz-form-item>\r\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}\r\n        </nz-form-label>\r\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\"\r\n          nzExtra=\"{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}\">\r\n          <input nz-input [(ngModel)]=\"name\" id=\"name\" name=\"name\" />\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #modalFooter>\r\n    <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"save()\">\r\n      {{\r\n      'AbpTenantManagement::Save' | abpLocalization\r\n        }}\r\n    </button>\r\n  </ng-template>\r\n</nz-modal>"
    }),
    __metadata("design:paramtypes", [Store,
        ToasterService,
        AccountService])
], TenantBoxComponent);
export { TenantBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9jb21wb25lbnRzL3RlbmFudC1ib3gvdGVuYW50LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0MsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFVLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixJQUFJLHFCQUFxQixFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFNckYsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFDWCxTQUFRLHFCQUFxQjtJQU83QixZQUNVLE1BQWEsRUFDYixlQUErQixFQUMvQixlQUErQjtRQUV2QyxLQUFLLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUp4QyxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUd6QyxDQUFDO0NBR0YsQ0FBQTtBQWJDO0lBREMsS0FBSyxFQUFFOzhCQUNRLFdBQVc7MERBQU07QUFHakM7SUFEQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOzhCQUM5QixVQUFVO2tFQUFVO0FBUGpDLGtCQUFrQjtJQUo5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLGtyRUFBMEM7S0FDM0MsQ0FBQztxQ0FVa0IsS0FBSztRQUNJLGNBQWM7UUFDZCxjQUFjO0dBWDlCLGtCQUFrQixDQWlCOUI7U0FqQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQLCBTZXRUZW5hbnQsIFNlc3Npb25TdGF0ZSwgQ29uZmlnU3RhdGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSAsU2VsZWN0fSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IHRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5hY2NvdW50JztcclxuaW1wb3J0IHsgVGVuYW50Qm94Q29tcG9uZW50IGFzIEFicFRlbmFudEJveENvbXBvbmVudCxBY2NvdW50fSBmcm9tICdAYWJwL25nLmFjY291bnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1hbGFpbi10ZW5hbnQtYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGVuYW50LWJveC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbmFudEJveENvbXBvbmVudCBcclxuICBleHRlbmRzIEFicFRlbmFudEJveENvbXBvbmVudCBcclxuICBpbXBsZW1lbnRzIEFjY291bnQuVGVuYW50Qm94Q29tcG9uZW50SW5wdXRzLCBBY2NvdW50LlRlbmFudEJveENvbXBvbmVudE91dHB1dHMge1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFpbkNvbnRlbnRSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBTZWxlY3QoQ29uZmlnU3RhdGUuZ2V0RGVlcCgnbXVsdGlUZW5hbmN5LmlzRW5hYmxlZCcpKVxyXG4gIGlzTXVsdGlUZW5hbmN5RW5hYmxlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9zdG9yZTogU3RvcmUsXHJcbiAgICBwcml2YXRlIF90b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9hY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKF9zdG9yZSwgX3RvYXN0ZXJTZXJ2aWNlLCBfYWNjb3VudFNlcnZpY2UpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==