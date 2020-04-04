import { NgModule } from '@angular/core';
import { IdentityModule as AbpIdentityModule } from '@abp/ng.identity';
import { TableModule } from 'primeng/table';
import { NgbDropdownModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { PermissionManagementModule } from '@fs/permission-management';
import { NgxValidateCoreModule } from '@ngx-validate/core';

@NgModule({
    imports: [AbpIdentityModule],
    exports: [
        AbpIdentityModule,
        TableModule,
        NgbDropdownModule,
        PermissionManagementModule,
        NgxValidateCoreModule,
        NgbTabsetModule
    ]
})
export class IdentityModule {}
