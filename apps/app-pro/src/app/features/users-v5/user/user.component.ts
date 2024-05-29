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
import { eUserNames } from './user.types';
import { UserStore } from './user.store';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { IdentityRoleService} from '@volo/abp.ng.identity/proxy';
import { AuditLogsService} from '@volo/abp.ng.audit-logging/proxy';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eUserNames.User,
    },
    UserStore,
  ],
  standalone: true,
  imports: [
    CoreModule,
    ThemeSharedModule,
    ExtensibleModule,
    PermissionManagementModule,
    PageModule,
    AdvancedEntityFiltersModule,
    NgbNavModule
  ],
})
export class UserComponent {
  userStore = inject(UserStore);
  userListService = this.userStore.getUserListService();
  routesService = this.userStore.getUserRoutesService();
}
