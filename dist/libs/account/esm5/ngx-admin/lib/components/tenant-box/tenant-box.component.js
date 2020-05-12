/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tenant-box/tenant-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { TenantBoxComponent as AbpTenantBoxComponent } from '@abp/ng.account';
import { AccountService } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
var TenantBoxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TenantBoxComponent, _super);
    function TenantBoxComponent(_store, _toasterService, _accountService) {
        var _this = _super.call(this, _store, _toasterService, _accountService) || this;
        _this._store = _store;
        _this._toasterService = _toasterService;
        _this._accountService = _accountService;
        return _this;
    }
    TenantBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-admin-tenant-box',
                    template: "<nb-card class=\"shadow-sm rounded mb-3 bg-light\" *ngIf=\"(currentTenant$ | async) || {} as currentTenant\">\r\n  <nb-card-body class=\"px-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <span style=\"font-size: 0.8em;\" class=\"text-uppercase text-muted\">{{\r\n          'AbpUiMultiTenancy::Tenant' | abpLocalization\r\n        }}</span\r\n        ><br />\r\n        <h6 class=\"m-0 d-inline-block\">\r\n          <span>\r\n            {{ currentTenant.name || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }}\r\n          </span>\r\n        </h6>\r\n      </div>\r\n      <div class=\"col-auto\">\r\n        <a\r\n          id=\"AbpTenantSwitchLink\"\r\n          href=\"javascript:void(0);\"\r\n          class=\"btn btn-sm mt-3 btn-outline-primary\"\r\n          (click)=\"onSwitch()\"\r\n          >{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n<abp-modal [(visible)]=\"isModalVisible\" size=\"md\">\r\n  <ng-template #abpHeader>\r\n    <h5>Switch Tenant</h5>\r\n  </ng-template>\r\n  <ng-template #abpBody>\r\n    <form (ngSubmit)=\"save()\">\r\n      <div class=\"mt-2\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}</label>\r\n          <input [(ngModel)]=\"name\" type=\"text\" id=\"name\" name=\"tenant\" class=\"form-control\" autofocus />\r\n        </div>\r\n        <p>{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}</p>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n  <ng-template #abpFooter>\r\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">\r\n      <i class=\"fa fa-check mr-1\"></i> <span>{{ 'AbpTenantManagement::Save' | abpLocalization }}</span>\r\n    </button>\r\n  </ng-template>\r\n</abp-modal>\r\n"
                }] }
    ];
    /** @nocollapse */
    TenantBoxComponent.ctorParameters = function () { return [
        { type: Store },
        { type: ToasterService },
        { type: AccountService }
    ]; };
    return TenantBoxComponent;
}(AbpTenantBoxComponent));
export { TenantBoxComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TenantBoxComponent.prototype._store;
    /**
     * @type {?}
     * @private
     */
    TenantBoxComponent.prototype._toasterService;
    /**
     * @type {?}
     * @private
     */
    TenantBoxComponent.prototype._accountService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvYWNjb3VudC9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90ZW5hbnQtYm94L3RlbmFudC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsSUFBSSxxQkFBcUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDO0lBSXdDLDhDQUFxQjtJQUMzRCw0QkFDVSxNQUFhLEVBQ2IsZUFBK0IsRUFDL0IsZUFBK0I7UUFIekMsWUFLRSxrQkFBTSxNQUFNLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxTQUNoRDtRQUxTLFlBQU0sR0FBTixNQUFNLENBQU87UUFDYixxQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IscUJBQWUsR0FBZixlQUFlLENBQWdCOztJQUd6QyxDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMscS9EQUEwQztpQkFDM0M7Ozs7Z0JBTFEsS0FBSztnQkFGTCxjQUFjO2dCQURkLGNBQWM7O0lBa0J2Qix5QkFBQztDQUFBLEFBYkQsQ0FJd0MscUJBQXFCLEdBUzVEO1NBVFksa0JBQWtCOzs7Ozs7SUFFM0Isb0NBQXFCOzs7OztJQUNyQiw2Q0FBdUM7Ozs7O0lBQ3ZDLDZDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbmFudEJveENvbXBvbmVudCBhcyBBYnBUZW5hbnRCb3hDb21wb25lbnQgfSBmcm9tICdAYWJwL25nLmFjY291bnQnO1xyXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJ0BhYnAvbmcuYWNjb3VudCc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWFkbWluLXRlbmFudC1ib3gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90ZW5hbnQtYm94LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVuYW50Qm94Q29tcG9uZW50IGV4dGVuZHMgQWJwVGVuYW50Qm94Q29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3N0b3JlOiBTdG9yZSxcclxuICAgIHByaXZhdGUgX3RvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgX2FjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoX3N0b3JlLCBfdG9hc3RlclNlcnZpY2UsIF9hY2NvdW50U2VydmljZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=