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
import { UsersV7Store } from './../users-v7.store';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eRoleNames.Role,
    },
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
  usersV7Store = inject(UsersV7Store);
  roleListService = this.usersV7Store.getRoleListService();
}
