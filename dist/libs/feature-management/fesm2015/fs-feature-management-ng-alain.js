import { __decorate, __metadata } from 'tslib';
import { FeatureManagementWrapModule } from '@fs/feature-management/wrap';
import { CoreModule } from '@abp/ng.core';
import { Input, Component, NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { Store } from '@ngxs/store';
import { FeatureManagementComponent as FeatureManagementComponent$1 } from '@abp/ng.feature-management';

let FeatureManagementComponent = class FeatureManagementComponent extends FeatureManagementComponent$1 {
    constructor(_store) {
        super(_store);
        this._store = _store;
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
        this.visibleChange.emit(value);
        if (value)
            this.openModal();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], FeatureManagementComponent.prototype, "providerKey", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FeatureManagementComponent.prototype, "providerName", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], FeatureManagementComponent.prototype, "visible", null);
FeatureManagementComponent = __decorate([
    Component({
        selector: 'ng-alain-feature-management',
        template: "<nz-modal [(nzVisible)]=\"visible\"\r\n          [nzTitle]=\"modalTitle\"\r\n          [nzContent]=\"modalContent\"\r\n          [nzFooter]=\"modalFooter\"\r\n          (nzOnCancel)=\"visible=false\"\r\n>\r\n  <ng-template #modalTitle>\r\n    <h3>{{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #modalContent>\r\n    <ng-template #loaderRef>\r\n      <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n    </ng-template>\r\n\r\n    <form nz-form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n\r\n\r\n      <div class=\"row my-3\"\r\n           *ngFor=\"let feature of features$ | async; let i = index\"\r\n           [ngSwitch]=\"feature.valueType.name\">\r\n        <div class=\"col-4\">{{ feature.name }}</div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'ToggleStringValueType'\">\r\n          <input type=\"checkbox\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'FreeTextStringValueType'\">\r\n          <input type=\"text\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #modalFooter>\r\n    <button nz-button nzType=\"default\" (click)=\"visible=false\">\r\n      {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"save()\">\r\n      {{\r\n      'AbpFeatureManagement::Save' | abpLocalization\r\n      }}\r\n    </button>\r\n  </ng-template>\r\n</nz-modal>\r\n"
    }),
    __metadata("design:paramtypes", [Store])
], FeatureManagementComponent);

let FeatureManagementNgAlainModule = class FeatureManagementNgAlainModule {
};
FeatureManagementNgAlainModule = __decorate([
    NgModule({
        declarations: [FeatureManagementComponent],
        imports: [
            CoreModule,
            NgAlainBasicModule,
            FeatureManagementWrapModule
        ],
        exports: [FeatureManagementComponent]
    })
], FeatureManagementNgAlainModule);

/**
 * Generated bundle index. Do not edit.
 */

export { FeatureManagementComponent, FeatureManagementNgAlainModule };
//# sourceMappingURL=fs-feature-management-ng-alain.js.map
