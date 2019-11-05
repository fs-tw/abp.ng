import { FeatureManagementModule } from '@fs/feature-management';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { FeatureManagementComponent } from './components/feature-management/feature-management.component';

@NgModule({
    declarations: [FeatureManagementComponent],
    imports: [
        CoreModule,
        NgAlainBasicModule,
        FeatureManagementModule
    ],
    exports: [FeatureManagementComponent]
})
export class FeatureManagementNgAlainModule { }
