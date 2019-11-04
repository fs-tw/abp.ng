import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionManagementModule as AbpPermissionManagementModule} from '@abp/ng.permission-management'

@NgModule({
    imports: [AbpPermissionManagementModule],
    exports: [AbpPermissionManagementModule]
})
export class PermissionManagementModule {}
