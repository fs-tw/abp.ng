import { NgModule } from '@angular/core';
import { PermissionManagementModule } from '@abp/ng.permission-management';

@NgModule({
    imports: [PermissionManagementModule],
    exports: [PermissionManagementModule]
})
export class PermissionManagementWrapModule {}
