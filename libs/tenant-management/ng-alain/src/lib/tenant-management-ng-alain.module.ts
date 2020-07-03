import { TenantManagementWrapModule } from '@fs/tenant-management/wrap';
import { AddReplaceableComponent, LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { TenantsComponent } from './components/tenants/tenants.component';
import { FeatureManagementNgAlainModule } from '@fs/feature-management/ng-alain';
import { Store } from '@ngxs/store';

@NgModule({
  declarations: [TenantsComponent],
  entryComponents: [TenantsComponent],
  exports: [TenantsComponent],
  imports: [
    NgAlainBasicModule,
    FeatureManagementNgAlainModule,
    TenantManagementWrapModule
  ]
})
export class TenantManagementNgAlainModule {
  static forChild(): ModuleWithProviders<TenantManagementNgAlainModule> {
    return {
      ngModule: TenantManagementNgAlainModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<TenantManagementNgAlainModule> {
    return new LazyModuleFactory(TenantManagementNgAlainModule.forChild());
  }
}
