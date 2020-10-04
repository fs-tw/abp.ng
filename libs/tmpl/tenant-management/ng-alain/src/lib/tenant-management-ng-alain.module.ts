import { TenantManagementModule, eTenantManagementComponents } from '@abp/ng.tenant-management';
import { LazyModuleFactory, CoreModule, ReplaceableComponentsService } from '@abp/ng.core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { NgAlainBasicModule } from '@fs/theme.ng-alain/basic';
import { TenantsComponent } from './components/tenants/tenants.component';
import { FeatureManagementNgAlainModule } from '@fs/feature-management/ng-alain';
import { NgxValidateCoreModule } from '@ngx-validate/core';

export function initLayouts(replaceableComponents: ReplaceableComponentsService) {
  replaceableComponents.add({
    key: eTenantManagementComponents.Tenants,
    component: TenantsComponent
  });  
}

@NgModule({
  imports: [
    NgAlainBasicModule,
    FeatureManagementNgAlainModule,
    NgxValidateCoreModule,
    TenantManagementModule
  ],
  exports: [TenantsComponent],
  declarations: [TenantsComponent],
  entryComponents: [TenantsComponent]
})
export class TenantManagementNgAlainModule {
  constructor(
    private replaceableComponents: ReplaceableComponentsService
  ) {
    initLayouts(replaceableComponents);
  }
  static forChild(): ModuleWithProviders<TenantManagementNgAlainModule> {
    return {
      ngModule: TenantManagementNgAlainModule,
      providers: [
      ],
    };
  }

  static forLazy(): NgModuleFactory<TenantManagementNgAlainModule> {
    return new LazyModuleFactory(TenantManagementNgAlainModule.forChild());
  }
}
