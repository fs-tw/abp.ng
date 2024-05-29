import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  ExtensibleModule,
} from '@abp/ng.components/extensible';
import { Component, inject } from '@angular/core';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { PageModule } from '@abp/ng.components/page';
import { AdvancedEntityFiltersModule } from '@volo/abp.commercial.ng.ui';
import { eRoleNames } from './role.types';
import { RoleStore } from './role.store';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eRoleNames.Role,
    },
    RoleStore,
  ],
  standalone: true,
  imports: [
    CoreModule,
    ThemeSharedModule,
    ExtensibleModule,
    PermissionManagementModule,
    PageModule,
    AdvancedEntityFiltersModule,
  ],
})
export class RoleComponent {
  roleStore = inject(RoleStore);
  roleListService = this.roleStore.getRoleListService();
}
