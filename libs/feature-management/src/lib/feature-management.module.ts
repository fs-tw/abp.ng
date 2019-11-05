import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureManagementModule as AbpFeatureManagementModule} from '@abp/ng.feature-management'
@NgModule({
    imports: [AbpFeatureManagementModule],
    exports: [AbpFeatureManagementModule]
})
export class FeatureManagementModule {}
