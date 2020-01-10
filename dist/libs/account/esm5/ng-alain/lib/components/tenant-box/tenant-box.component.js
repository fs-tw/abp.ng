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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvYWNjb3VudC9uZy1hbGFpbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbmFudC1ib3gvdGVuYW50LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQVUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLElBQUkscUJBQXFCLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRjtJQUtVLDhDQUFxQjtJQUk3Qiw0QkFDVSxNQUFhLEVBQ2IsZUFBK0IsRUFDL0IsZUFBK0I7UUFIekMsWUFLRSxrQkFBTSxNQUFNLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxTQUNoRDtRQUxTLFlBQU0sR0FBTixNQUFNLENBQU87UUFDYixxQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IscUJBQWUsR0FBZixlQUFlLENBQWdCOztJQUd6QyxDQUFDOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsdWlFQUEwQztpQkFDM0M7Ozs7Z0JBVlEsS0FBSztnQkFGTCxjQUFjO2dCQU1kLGNBQWM7OztpQ0FVcEIsS0FBSzs7SUFXUix5QkFBQztDQUFBLEFBbEJELENBS1UscUJBQXFCLEdBYTlCO1NBZFksa0JBQWtCOzs7SUFHN0IsNENBQ2lDOzs7OztJQUUvQixvQ0FBcUI7Ozs7O0lBQ3JCLDZDQUF1Qzs7Ozs7SUFDdkMsNkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQLCBTZXRUZW5hbnQsIFNlc3Npb25TdGF0ZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVGVtcGxhdGVSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmFjY291bnQnO1xyXG5pbXBvcnQgeyBUZW5hbnRCb3hDb21wb25lbnQgYXMgQWJwVGVuYW50Qm94Q29tcG9uZW50LEFjY291bnR9IGZyb20gJ0BhYnAvbmcuYWNjb3VudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLWFsYWluLXRlbmFudC1ib3gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90ZW5hbnQtYm94LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVuYW50Qm94Q29tcG9uZW50IFxyXG4gIGV4dGVuZHMgQWJwVGVuYW50Qm94Q29tcG9uZW50IFxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBBY2NvdW50LlRlbmFudEJveENvbXBvbmVudElucHV0cywgQWNjb3VudC5UZW5hbnRCb3hDb21wb25lbnRPdXRwdXRzIHtcclxuICBASW5wdXQoKVxyXG4gIG1haW5Db250ZW50UmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSBfdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihfc3RvcmUsIF90b2FzdGVyU2VydmljZSwgX2FjY291bnRTZXJ2aWNlKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=