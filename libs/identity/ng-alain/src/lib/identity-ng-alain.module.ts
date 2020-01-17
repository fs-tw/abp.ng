import { IdentityModule } from '@fs/identity';
import { CoreModule, AddReplaceableComponent } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';
import { Store } from '@ngxs/store';

@NgModule({
    declarations: [UsersComponent,RolesComponent],
    entryComponents: [UsersComponent,RolesComponent],
    imports: [
        CoreModule,
        NgAlainBasicModule,
        PermissionManagementNgAlainModule,
        IdentityModule
    ]
})
export class IdentityNgAlainModule {
    constructor(private store: Store) {
        store.dispatch(new AddReplaceableComponent({ component: UsersComponent, key: 'Identity.UsersComponent' }));
        store.dispatch(new AddReplaceableComponent({ component: RolesComponent, key: 'Identity.RolesComponent' }));
    }
 }
