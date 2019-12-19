/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/feature-management/feature-management.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { FeatureManagementComponent as AbpFeatureManagementComponent } from '@abp/ng.feature-management';
var FeatureManagementComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FeatureManagementComponent, _super);
    function FeatureManagementComponent(_store) {
        var _this = _super.call(this, _store) || this;
        _this._store = _store;
        return _this;
    }
    Object.defineProperty(FeatureManagementComponent.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._visible = value;
            this.visibleChange.emit(value);
            if (value)
                this.openModal();
        },
        enumerable: true,
        configurable: true
    });
    FeatureManagementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-alain-feature-management',
                    template: "<nz-modal [(nzVisible)]=\"visible\"\r\n          [nzTitle]=\"modalTitle\"\r\n          [nzContent]=\"modalContent\"\r\n          [nzFooter]=\"modalFooter\"\r\n          (nzOnCancel)=\"visible=false\"\r\n>\r\n  <ng-template #modalTitle>\r\n    <h3>{{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #modalContent>\r\n    <ng-template #loaderRef>\r\n      <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n    </ng-template>\r\n\r\n    <form nz-form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n\r\n\r\n      <div class=\"row my-3\"\r\n           *ngFor=\"let feature of features$ | async; let i = index\"\r\n           [ngSwitch]=\"feature.valueType.name\">\r\n        <div class=\"col-4\">{{ feature.name }}</div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'ToggleStringValueType'\">\r\n          <input type=\"checkbox\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'FreeTextStringValueType'\">\r\n          <input type=\"text\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #modalFooter>\r\n    <button nz-button nzType=\"default\" (click)=\"visible=false\">\r\n      {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"save()\">\r\n      {{\r\n      'AbpFeatureManagement::Save' | abpLocalization\r\n      }}\r\n    </button>\r\n  </ng-template>\r\n</nz-modal>\r\n"
                }] }
    ];
    /** @nocollapse */
    FeatureManagementComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    FeatureManagementComponent.propDecorators = {
        providerKey: [{ type: Input }],
        providerName: [{ type: Input }],
        visible: [{ type: Input }]
    };
    return FeatureManagementComponent;
}(AbpFeatureManagementComponent));
export { FeatureManagementComponent };
if (false) {
    /** @type {?} */
    FeatureManagementComponent.prototype.providerKey;
    /** @type {?} */
    FeatureManagementComponent.prototype.providerName;
    /**
     * @type {?}
     * @protected
     */
    FeatureManagementComponent.prototype._visible;
    /**
     * @type {?}
     * @private
     */
    FeatureManagementComponent.prototype._store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9mZWF0dXJlLW1hbmFnZW1lbnQvbmctYWxhaW4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mZWF0dXJlLW1hbmFnZW1lbnQvZmVhdHVyZS1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSwwQkFBMEIsSUFBSSw2QkFBNkIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3pHO0lBSWdELHNEQUE2QjtJQXFCM0Usb0NBQW9CLE1BQWE7UUFBakMsWUFDRSxrQkFBTSxNQUFNLENBQUMsU0FDZDtRQUZtQixZQUFNLEdBQU4sTUFBTSxDQUFPOztJQUVqQyxDQUFDO0lBZEQsc0JBQ0ksK0NBQU87Ozs7UUFEWDtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQUVELFVBQVksS0FBYztZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUvQixJQUFJLEtBQUs7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlCLENBQUM7OztPQVBBOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLDJuREFBa0Q7aUJBQ25EOzs7O2dCQUxRLEtBQUs7Ozs4QkFPWCxLQUFLOytCQUdMLEtBQUs7MEJBS0wsS0FBSzs7SUFlUixpQ0FBQztDQUFBLEFBNUJELENBSWdELDZCQUE2QixHQXdCNUU7U0F4QlksMEJBQTBCOzs7SUFDckMsaURBQ29COztJQUVwQixrREFDcUI7Ozs7O0lBRXJCLDhDQUFtQjs7Ozs7SUFjUCw0Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudCBhcyBBYnBGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudCB9IGZyb20gJ0BhYnAvbmcuZmVhdHVyZS1tYW5hZ2VtZW50JztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1hbGFpbi1mZWF0dXJlLW1hbmFnZW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mZWF0dXJlLW1hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudCBleHRlbmRzIEFicEZlYXR1cmVNYW5hZ2VtZW50Q29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHByb3ZpZGVyS2V5OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHJvdmlkZXJOYW1lOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCBfdmlzaWJsZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Zpc2libGUgPSB2YWx1ZTtcclxuICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuXHJcbiAgICBpZiAodmFsdWUpIHRoaXMub3Blbk1vZGFsKCk7XHJcbiAgfVxyXG4gICAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RvcmU6IFN0b3JlKSB7XHJcbiAgICBzdXBlcihfc3RvcmUpO1xyXG4gIH1cclxufVxyXG4iXX0=