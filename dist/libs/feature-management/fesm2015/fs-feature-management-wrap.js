import { __decorate } from 'tslib';
import { NgModule } from '@angular/core';
import { FeatureManagementModule } from '@abp/ng.feature-management';

let FeatureManagementWrapModule = class FeatureManagementWrapModule {
};
FeatureManagementWrapModule = __decorate([
    NgModule({
        imports: [FeatureManagementModule],
        exports: [FeatureManagementModule]
    })
], FeatureManagementWrapModule);

/**
 * Generated bundle index. Do not edit.
 */

export { FeatureManagementWrapModule };
//# sourceMappingURL=fs-feature-management-wrap.js.map
