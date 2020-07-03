import { IdentityWrapModule } from '@fs/identity/wrap';
import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { PermissionManagementComponent } from './components/permission-management.component';
// import { RolesComponent } from './components/roles/roles.component';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { PermissionManagementWrapModule } from '@fs/permission-management/wrap';
//import { PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';
//import { SettingManagementNgAlainModule } from '@fs/setting-management/ng-alain';
//import { InitialService} from './services/initial.service'

@NgModule({
  declarations: [PermissionManagementComponent],
  entryComponents: [PermissionManagementComponent],
  imports: [
    CoreModule,
    NgAlainBasicModule,
    PermissionManagementWrapModule
  ],
  exports:[
    PermissionManagementComponent
  ]
})
export class PermissionManagementNgAlainModule {
  // static forChild(): ModuleWithProviders<PermissionManagementNgAlainModule> {
  //   return {
  //     ngModule: PermissionManagementNgAlainModule,
  //     providers: [],
  //   };
  // }

  // static forLazy(): NgModuleFactory<PermissionManagementNgAlainModule> {
  //   return new LazyModuleFactory(PermissionManagementNgAlainModule.forChild());
  // }
}
