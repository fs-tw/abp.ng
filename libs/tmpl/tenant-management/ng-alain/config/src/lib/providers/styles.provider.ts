import { ReplaceableComponentsService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eTenantManagementComponents } from '@abp/ng.tenant-management';
import { TenantsComponent } from '@fs/tenant-management/ng-alain';

export const STYLES_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureStyles,
    deps: [ReplaceableComponentsService],
    multi: true,
  },
];

export function configureStyles(replaceableComponents: ReplaceableComponentsService) {
  return () => {
    initLayouts(replaceableComponents);
  };
}

function initLayouts(replaceableComponents: ReplaceableComponentsService) {
  replaceableComponents.add({
    key: eTenantManagementComponents.Tenants,
    component: TenantsComponent
  });  
}
