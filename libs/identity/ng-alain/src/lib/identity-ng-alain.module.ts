import { IdentityModule } from '@fs/identity';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { IdentityNgAlainRoutingModule } from './identity-ng-alain-routing.module';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';

@NgModule({
    declarations: [UsersComponent,RolesComponent],
    imports: [
        CoreModule,
        NgAlainBasicModule,
        IdentityNgAlainRoutingModule,
        PermissionManagementNgAlainModule,
        IdentityModule
    ]
})
export class IdentityNgAlainModule { }
