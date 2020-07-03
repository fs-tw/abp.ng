import { IdentityWrapModule } from '@fs/identity/wrap';
import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';
//import { SettingManagementNgAlainModule } from '@fs/setting-management/ng-alain';
//import { InitialService} from './services/initial.service'

@NgModule({
  declarations: [UsersComponent, RolesComponent],
  entryComponents: [UsersComponent, RolesComponent],
  imports: [
    CoreModule,
    NgAlainBasicModule,
    PermissionManagementNgAlainModule,
    IdentityWrapModule,
    //SettingManagementNgAlainModule
  ]
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
