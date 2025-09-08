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
import { eUserEntityNames } from './user-entity.types';
import { UserEntityStore } from './user-entity.store';

@Component({
  selector: 'app-user-entity',
  templateUrl: './user-entity.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eUserEntityNames.UserEntity,
    },
    UserEntityStore,
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
export class UserEntityComponent {
  userEntityStore = inject(UserEntityStore);
  userEntityListService = this.userEntityStore.getUserEntityListService();
}
