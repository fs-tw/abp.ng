import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { NgAlainBasicModule } from '@fs/theme.ng-alain/basic';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';
//import { InitialService} from './services/initial.service'
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { IdentityModule } from '@abp/ng.identity';

@NgModule({
  imports: [
    CoreModule,
    NgAlainBasicModule,
    PermissionManagementNgAlainModule,
    NgxValidateCoreModule,
    IdentityModule
  ],
  declarations: [UsersComponent, RolesComponent],
  entryComponents: [UsersComponent, RolesComponent]
})
export class IdentityNgAlainModule {
  static forChild(): ModuleWithProviders<IdentityNgAlainModule> {
    return {
      ngModule: IdentityNgAlainModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<IdentityNgAlainModule> {
    return new LazyModuleFactory(IdentityNgAlainModule.forChild());
  }
}
