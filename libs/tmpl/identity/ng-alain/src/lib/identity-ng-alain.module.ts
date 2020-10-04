import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { NgAlainBasicModule } from '@fs/theme.ng-alain/basic';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { LazyModuleFactory, CoreModule, ReplaceableComponentsService } from '@abp/ng.core';
import { PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { IdentityModule, eIdentityComponents } from '@abp/ng.identity';

export function initLayouts(replaceableComponents: ReplaceableComponentsService) {
  replaceableComponents.add({
    key: eIdentityComponents.Users,
    component: UsersComponent
  });
  replaceableComponents.add({
    key: eIdentityComponents.Roles,
    component: RolesComponent
  });  
}


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
  constructor(private replaceableComponents: ReplaceableComponentsService){
    initLayouts(replaceableComponents);
  }
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
