/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tenant-box/tenant-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GetAppConfiguration, SessionState, SetTenant } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AccountService } from '../../services/account.service';
var TenantBoxComponent = /** @class */ (function () {
    function TenantBoxComponent(store, toasterService, accountService) {
        this.store = store;
        this.toasterService = toasterService;
        this.accountService = accountService;
    }
    /**
     * @return {?}
     */
    TenantBoxComponent.prototype.onSwitch = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tenant = this.store.selectSnapshot(SessionState.getTenant);
        this.name = (tenant || ((/** @type {?} */ ({})))).name;
        this.isModalVisible = true;
    };
    /**
     * @return {?}
     */
    TenantBoxComponent.prototype.save = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.name) {
            this.setTenant(null);
            this.isModalVisible = false;
            return;
        }
        this.modalBusy = true;
        this.accountService
            .findTenant(this.name)
            .pipe(finalize((/**
         * @return {?}
         */
        function () { return (_this.modalBusy = false); })))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var success = _a.success, id = _a.tenantId, name = _a.name;
            if (!success) {
                _this.showError();
                return;
            }
            _this.setTenant({ id: id, name: name });
            _this.isModalVisible = false;
        }));
    };
    /**
     * @private
     * @param {?} tenant
     * @return {?}
     */
    TenantBoxComponent.prototype.setTenant = /**
     * @private
     * @param {?} tenant
     * @return {?}
     */
    function (tenant) {
        return this.store.dispatch([new SetTenant(tenant), new GetAppConfiguration()]);
    };
    /**
     * @private
     * @return {?}
     */
    TenantBoxComponent.prototype.showError = /**
     * @private
     * @return {?}
     */
    function () {
        this.toasterService.error('AbpUiMultiTenancy::GivenTenantIsNotAvailable', 'AbpUi::Error', {
            messageLocalizationParams: [this.name],
        });
    };
    TenantBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-tenant-box',
                    template: "<ng-container *ngIf=\"(currentTenant$ | async) || {} as currentTenant\">\r\n  <div class=\"card shadow-sm rounded mb-3\">\r\n    <div class=\"card-body px-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <span style=\"font-size: 0.8em;\" class=\"text-uppercase text-muted\">{{\r\n            'AbpUiMultiTenancy::Tenant' | abpLocalization\r\n          }}</span\r\n          ><br />\r\n          <h6 class=\"m-0 d-inline-block\">\r\n            <i>{{ currentTenant.name || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }}</i>\r\n          </h6>\r\n        </div>\r\n        <div class=\"col-auto\">\r\n          <a\r\n            id=\"AbpTenantSwitchLink\"\r\n            href=\"javascript:void(0);\"\r\n            class=\"btn btn-sm mt-3 btn-outline-primary\"\r\n            (click)=\"onSwitch()\"\r\n            >{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n    <ng-template #abpHeader>\r\n      <h5>Switch Tenant</h5>\r\n    </ng-template>\r\n    <ng-template #abpBody>\r\n      <form (ngSubmit)=\"save()\">\r\n        <div class=\"mt-2\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}</label>\r\n            <input\r\n              [(ngModel)]=\"name\"\r\n              type=\"text\"\r\n              id=\"name\"\r\n              name=\"tenant\"\r\n              class=\"form-control\"\r\n              autofocus\r\n            />\r\n          </div>\r\n          <p>{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}</p>\r\n        </div>\r\n      </form>\r\n    </ng-template>\r\n    <ng-template #abpFooter>\r\n      <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n        {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button\r\n        type=\"abp-button\"\r\n        iconClass=\"fa fa-check\"\r\n        (click)=\"save()\"\r\n        [disabled]=\"currentTenant?.name === name\"\r\n      >\r\n        <span>{{ 'AbpTenantManagement::Save' | abpLocalization }}</span>\r\n      </abp-button>\r\n    </ng-template>\r\n  </abp-modal>\r\n</ng-container>\r\n"
                }] }
    ];
    /** @nocollapse */
    TenantBoxComponent.ctorParameters = function () { return [
        { type: Store },
        { type: ToasterService },
        { type: AccountService }
    ]; };
    tslib_1.__decorate([
        Select(SessionState.getTenant),
        tslib_1.__metadata("design:type", Observable)
    ], TenantBoxComponent.prototype, "currentTenant$", void 0);
    return TenantBoxComponent;
}());
export { TenantBoxComponent };
if (false) {
    /** @type {?} */
    TenantBoxComponent.prototype.currentTenant$;
    /** @type {?} */
    TenantBoxComponent.prototype.name;
    /** @type {?} */
    TenantBoxComponent.prototype.isModalVisible;
    /** @type {?} */
    TenantBoxComponent.prototype.modalBusy;
    /**
     * @type {?}
     * @private
     */
    TenantBoxComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    TenantBoxComponent.prototype.toasterService;
    /**
     * @type {?}
     * @private
     */
    TenantBoxComponent.prototype.accountService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmFjY291bnQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90ZW5hbnQtYm94L3RlbmFudC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBTyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVoRTtJQWVFLDRCQUNVLEtBQVksRUFDWixjQUE4QixFQUM5QixjQUE4QjtRQUY5QixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNyQyxDQUFDOzs7O0lBRUoscUNBQVE7OztJQUFSOztZQUNRLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxtQkFBQSxFQUFFLEVBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsaUNBQUk7OztJQUFKO1FBQUEsaUJBb0JDO1FBbkJDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYzthQUNoQixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNyQixJQUFJLENBQUMsUUFBUTs7O1FBQUMsY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBeEIsQ0FBd0IsRUFBQyxDQUFDO2FBQzlDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQStCO2dCQUE3QixvQkFBTyxFQUFFLGdCQUFZLEVBQUUsY0FBSTtZQUN2QyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNaLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsT0FBTzthQUNSO1lBRUQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsSUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7OztJQUVPLHNDQUFTOzs7OztJQUFqQixVQUFrQixNQUFxQjtRQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7OztJQUVPLHNDQUFTOzs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsOENBQThDLEVBQUUsY0FBYyxFQUFFO1lBQ3hGLHlCQUF5QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN2QyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkF6REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLHV4RUFBMEM7aUJBQzNDOzs7O2dCQVRnQixLQUFLO2dCQUZiLGNBQWM7Z0JBTWQsY0FBYzs7SUFTckI7UUFEQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQzswQ0FDZixVQUFVOzhEQUFnQjtJQW1ENUMseUJBQUM7Q0FBQSxBQTFERCxJQTBEQztTQXREWSxrQkFBa0I7OztJQUU3Qiw0Q0FDMEM7O0lBRTFDLGtDQUFhOztJQUViLDRDQUF3Qjs7SUFFeEIsdUNBQW1COzs7OztJQUdqQixtQ0FBb0I7Ozs7O0lBQ3BCLDRDQUFzQzs7Ozs7SUFDdEMsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQLCBHZXRBcHBDb25maWd1cmF0aW9uLCBTZXNzaW9uU3RhdGUsIFNldFRlbmFudCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gJy4uLy4uL21vZGVscy9hY2NvdW50JztcclxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtdGVuYW50LWJveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RlbmFudC1ib3guY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVuYW50Qm94Q29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBBY2NvdW50LlRlbmFudEJveENvbXBvbmVudElucHV0cywgQWNjb3VudC5UZW5hbnRCb3hDb21wb25lbnRPdXRwdXRzIHtcclxuICBAU2VsZWN0KFNlc3Npb25TdGF0ZS5nZXRUZW5hbnQpXHJcbiAgY3VycmVudFRlbmFudCQ6IE9ic2VydmFibGU8QUJQLkJhc2ljSXRlbT47XHJcblxyXG4gIG5hbWU6IHN0cmluZztcclxuXHJcbiAgaXNNb2RhbFZpc2libGU6IGJvb2xlYW47XHJcblxyXG4gIG1vZGFsQnVzeTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIHByaXZhdGUgdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsXHJcbiAgKSB7fVxyXG5cclxuICBvblN3aXRjaCgpIHtcclxuICAgIGNvbnN0IHRlbmFudCA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlLmdldFRlbmFudCk7XHJcbiAgICB0aGlzLm5hbWUgPSAodGVuYW50IHx8ICh7fSBhcyBBQlAuQmFzaWNJdGVtKSkubmFtZTtcclxuICAgIHRoaXMuaXNNb2RhbFZpc2libGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIGlmICghdGhpcy5uYW1lKSB7XHJcbiAgICAgIHRoaXMuc2V0VGVuYW50KG51bGwpO1xyXG4gICAgICB0aGlzLmlzTW9kYWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1vZGFsQnVzeSA9IHRydWU7XHJcbiAgICB0aGlzLmFjY291bnRTZXJ2aWNlXHJcbiAgICAgIC5maW5kVGVuYW50KHRoaXMubmFtZSlcclxuICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4gKHRoaXMubW9kYWxCdXN5ID0gZmFsc2UpKSlcclxuICAgICAgLnN1YnNjcmliZSgoeyBzdWNjZXNzLCB0ZW5hbnRJZDogaWQsIG5hbWUgfSkgPT4ge1xyXG4gICAgICAgIGlmICghc3VjY2Vzcykge1xyXG4gICAgICAgICAgdGhpcy5zaG93RXJyb3IoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VGVuYW50KHsgaWQsIG5hbWUgfSk7XHJcbiAgICAgICAgdGhpcy5pc01vZGFsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VGVuYW50KHRlbmFudDogQUJQLkJhc2ljSXRlbSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2goW25ldyBTZXRUZW5hbnQodGVuYW50KSwgbmV3IEdldEFwcENvbmZpZ3VyYXRpb24oKV0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RXJyb3IoKSB7XHJcbiAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmVycm9yKCdBYnBVaU11bHRpVGVuYW5jeTo6R2l2ZW5UZW5hbnRJc05vdEF2YWlsYWJsZScsICdBYnBVaTo6RXJyb3InLCB7XHJcbiAgICAgIG1lc3NhZ2VMb2NhbGl6YXRpb25QYXJhbXM6IFt0aGlzLm5hbWVdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==