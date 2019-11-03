import { IdentityModule } from '@fs/identity';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { IdentityNgAlainRoutingModule } from './identity-ng-alain-routing.module';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';

@NgModule({
    declarations: [UsersComponent,RolesComponent],
    imports: [
        CoreModule,
        NgAlainBasicModule,
        IdentityNgAlainRoutingModule,
        IdentityModule
    ]
})
export class IdentityNgAlainModule { }
