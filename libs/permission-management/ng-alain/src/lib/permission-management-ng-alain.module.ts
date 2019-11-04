import { PermissionManagementModule } from '@fs/permission-management';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { PermissionManagementComponent } from './components/permission-management.component';

@NgModule({
    declarations: [PermissionManagementComponent],
    imports: [
        CoreModule,
        NgAlainBasicModule,
        PermissionManagementModule
    ],
    exports: [PermissionManagementComponent]
})
export class PermissionManagementNgAlainModule { }
