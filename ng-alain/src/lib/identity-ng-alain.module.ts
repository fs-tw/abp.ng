import { IdentityModule } from '@fs/identity';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';
import { SettingManagementNgAlainModule } from '@fs/setting-management/ng-alain';
import { InitialService} from './services/initial.service'

@NgModule({
    declarations: [UsersComponent, RolesComponent],
    entryComponents: [UsersComponent, RolesComponent],
    imports: [
        NgAlainBasicModule,
        PermissionManagementNgAlainModule,
        IdentityModule,
        SettingManagementNgAlainModule
    ]
})
export class IdentityNgAlainModule {
    constructor(initialService: InitialService) { }
}
