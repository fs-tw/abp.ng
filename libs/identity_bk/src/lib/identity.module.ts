import { NgModule } from '@angular/core';
import { IdentityModule as AbpIdentityModule } from '@abp/ng.identity';
import { NgbDropdownModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { PermissionManagementModule } from '@fs/permission-management';
import { NgxValidateCoreModule } from '@ngx-validate/core';

@NgModule({
    imports: [AbpIdentityModule],
    exports: [
        AbpIdentityModule,
        NgbDropdownModule,
        PermissionManagementModule,
        NgxValidateCoreModule,
        NgbTabsetModule
    ]
})
export class IdentityModule {}
