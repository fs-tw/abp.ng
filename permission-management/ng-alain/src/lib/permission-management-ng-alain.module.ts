
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/theme.ng-alain/basic';
import { PermissionManagementComponent } from './components/permission-management.component';
import { CoreModule } from '@abp/ng.core';
import { PermissionManagementModule } from '@abp/ng.permission-management';

@NgModule({
  imports: [
    CoreModule,
    NgAlainBasicModule,
    PermissionManagementModule
  ],
  exports: [
    PermissionManagementComponent
  ],
  declarations: [PermissionManagementComponent],
  entryComponents: [PermissionManagementComponent]
})
export class PermissionManagementNgAlainModule { }
