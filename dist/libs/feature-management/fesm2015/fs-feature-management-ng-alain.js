import { FeatureManagementModule } from '@fs/feature-management';
import { CoreModule } from '@abp/ng.core';
import { Component, Input, NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { Store } from '@ngxs/store';
import { FeatureManagementComponent as FeatureManagementComponent$1 } from '@abp/ng.feature-management';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/feature-management/feature-management.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeatureManagementComponent extends FeatureManagementComponent$1 {
    /**
     * @param {?} _store
     */
    constructor(_store) {
        super(_store);
        this._store = _store;
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set visible(value) {
        this._visible = value;
        this.visibleChange.emit(value);
        if (value)
            this.openModal();
    }
}
FeatureManagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-alain-feature-management',
                template: "<nz-modal [(nzVisible)]=\"visible\"\r\n          [nzTitle]=\"modalTitle\"\r\n          [nzContent]=\"modalContent\"\r\n          [nzFooter]=\"modalFooter\"\r\n          (nzOnCancel)=\"visible=false\"\r\n>\r\n  <ng-template #modalTitle>\r\n    <h3>{{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #modalContent>\r\n    <ng-template #loaderRef>\r\n      <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n    </ng-template>\r\n\r\n    <form nz-form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n\r\n\r\n      <div class=\"row my-3\"\r\n           *ngFor=\"let feature of features$ | async; let i = index\"\r\n           [ngSwitch]=\"feature.valueType.name\">\r\n        <div class=\"col-4\">{{ feature.name }}</div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'ToggleStringValueType'\">\r\n          <input type=\"checkbox\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'FreeTextStringValueType'\">\r\n          <input type=\"text\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #modalFooter>\r\n    <button nz-button nzType=\"default\" (click)=\"visible=false\">\r\n      {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"save()\">\r\n      {{\r\n      'AbpFeatureManagement::Save' | abpLocalization\r\n      }}\r\n    </button>\r\n  </ng-template>\r\n</nz-modal>\r\n"
            }] }
];
/** @nocollapse */
FeatureManagementComponent.ctorParameters = () => [
    { type: Store }
];
FeatureManagementComponent.propDecorators = {
    providerKey: [{ type: Input }],
    providerName: [{ type: Input }],
    visible: [{ type: Input }]
};
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/feature-management-ng-alain.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeatureManagementNgAlainModule {
}
FeatureManagementNgAlainModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FeatureManagementComponent],
                imports: [
                    CoreModule,
                    NgAlainBasicModule,
                    FeatureManagementModule
                ],
                exports: [FeatureManagementComponent]
            },] }
];

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
 * Generated from: fs-feature-management-ng-alain.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FeatureManagementNgAlainModule, FeatureManagementComponent as ɵa };
//# sourceMappingURL=fs-feature-management-ng-alain.js.map
