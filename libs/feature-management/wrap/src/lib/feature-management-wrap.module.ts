import { NgModule } from '@angular/core';
import { FeatureManagementModule } from '@abp/ng.feature-management';

@NgModule({
    imports: [FeatureManagementModule],
    exports: [FeatureManagementModule]
})
export class FeatureManagementWrapModule { }
