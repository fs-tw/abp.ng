import { FeatureManagementWrapModule } from '@fs/feature-management/wrap';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { FeatureManagementComponent } from './components/feature-management/feature-management.component';

@NgModule({
    declarations: [FeatureManagementComponent],
    imports: [
        CoreModule,
        NgAlainBasicModule,
        FeatureManagementWrapModule
    ],
    exports: [FeatureManagementComponent]
})
export class FeatureManagementNgAlainModule { }
