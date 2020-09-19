import { TenantManagementModule } from '@abp/ng.tenant-management';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { TenantsComponent } from './components/tenants/tenants.component';
import { FeatureManagementNgAlainModule } from '@fs/feature-management/ng-alain';
import { NgxValidateCoreModule } from '@ngx-validate/core';

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
