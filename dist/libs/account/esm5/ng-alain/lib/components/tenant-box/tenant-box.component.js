/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tenant-box/tenant-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, TemplateRef, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { AccountService } from '@abp/ng.account';
import { TenantBoxComponent as AbpTenantBoxComponent } from '@abp/ng.account';
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
                    selector: 'ng-alain-tenant-box',
                    template: "  <nz-card nzTitle=\"{{'AbpUiMultiTenancy::Tenant' | abpLocalization}} ({{ tenantName || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }}) \" [nzExtra]=\"extraTemplate\">\r\n    <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n  </nz-card>\r\n  <ng-template #extraTemplate>\r\n    <a id=\"AbpTenantSwitchLink\"\r\n       href=\"javascript:void(0);\"\r\n       class=\"btn btn-sm mt-3 btn-outline-primary\"\r\n       (click)=\"onSwitch()\">{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a>\r\n  </ng-template>\r\n\r\n  <nz-modal [nzStyle]=\"{ top: '20px' }\"\r\n            [(nzVisible)]=\"isModalVisible\"\r\n            [nzTitle]=\"modalTitle\"\r\n            [nzContent]=\"modalContent\"\r\n            [nzFooter]=\"modalFooter\"\r\n            (nzOnCancel)=\"isModalVisible=false\">\r\n    <ng-template #modalTitle>\r\n      Switch Tenan\r\n    </ng-template>\r\n\r\n    <ng-template #modalContent>\r\n      <ng-template #loaderRef>\r\n        <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n      </ng-template>\r\n\r\n      <form nz-form *ngIf=\"tenant; else loaderRef\"  (ngSubmit)=\"save()\">\r\n\r\n\r\n        <nz-form-item>\r\n          <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}</nz-form-label>\r\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzExtra=\"{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}\">\r\n            <input nz-input [(ngModel)]=\"tenant.name\" id=\"name\" name=\"name\" />\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n      </form>\r\n    </ng-template>\r\n\r\n    <ng-template #modalFooter>\r\n      <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n        {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n      </button>\r\n      <button nz-button nzType=\"primary\" (click)=\"save()\">\r\n        {{\r\n      'AbpTenantManagement::Save' | abpLocalization\r\n        }}\r\n      </button>\r\n    </ng-template>\r\n  </nz-modal>\r\n\r\n"
                }] }
    ];
    /** @nocollapse */
    TenantBoxComponent.ctorParameters = function () { return [
        { type: Store },
        { type: ToasterService },
        { type: AccountService }
    ]; };
    TenantBoxComponent.propDecorators = {
        mainContentRef: [{ type: Input }]
    };
    return TenantBoxComponent;
}(AbpTenantBoxComponent));
export { TenantBoxComponent };
if (false) {
    /** @type {?} */
    TenantBoxComponent.prototype.mainContentRef;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvYWNjb3VudC9uZy1hbGFpbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbmFudC1ib3gvdGVuYW50LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQVUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLElBQUkscUJBQXFCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3RTtJQUl3Qyw4Q0FBcUI7SUFHM0QsNEJBQ1UsTUFBYSxFQUNiLGVBQStCLEVBQy9CLGVBQStCO1FBSHpDLFlBS0Usa0JBQU0sTUFBTSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUMsU0FDaEQ7UUFMUyxZQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2IscUJBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLHFCQUFlLEdBQWYsZUFBZSxDQUFnQjs7SUFHekMsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHVpRUFBMEM7aUJBQzNDOzs7O2dCQVZRLEtBQUs7Z0JBRkwsY0FBYztnQkFNZCxjQUFjOzs7aUNBUXBCLEtBQUs7O0lBV1IseUJBQUM7Q0FBQSxBQWhCRCxDQUl3QyxxQkFBcUIsR0FZNUQ7U0FaWSxrQkFBa0I7OztJQUM3Qiw0Q0FDaUM7Ozs7O0lBRS9CLG9DQUFxQjs7Ozs7SUFDckIsNkNBQXVDOzs7OztJQUN2Qyw2Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQlAsIFNldFRlbmFudCwgU2Vzc2lvblN0YXRlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgVG9hc3RlclNlcnZpY2UgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJ0BhYnAvbmcuYWNjb3VudCc7XHJcbmltcG9ydCB7IFRlbmFudEJveENvbXBvbmVudCBhcyBBYnBUZW5hbnRCb3hDb21wb25lbnR9IGZyb20gJ0BhYnAvbmcuYWNjb3VudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLWFsYWluLXRlbmFudC1ib3gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90ZW5hbnQtYm94LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVuYW50Qm94Q29tcG9uZW50IGV4dGVuZHMgQWJwVGVuYW50Qm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIG1haW5Db250ZW50UmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSBfdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihfc3RvcmUsIF90b2FzdGVyU2VydmljZSwgX2FjY291bnRTZXJ2aWNlKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=