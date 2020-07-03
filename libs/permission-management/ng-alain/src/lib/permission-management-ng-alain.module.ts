
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { PermissionManagementComponent } from './components/permission-management.component';
import { CoreModule } from '@abp/ng.core';
import { PermissionManagementWrapModule } from '@fs/permission-management/wrap';

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
