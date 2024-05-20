import { CoreModule } from '@abp/ng.core';
import {
  Confirmation,
  ConfirmationService,
  ThemeSharedModule,
} from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  ExtensibleModule,
} from '@abp/ng.components/extensible';
import { Component, inject } from '@angular/core';
import { IdentityRoleService } from '@volo/abp.ng.identity/proxy';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { PageModule } from '@abp/ng.components/page';
import { AdvancedEntityFiltersModule } from '@volo/abp.commercial.ng.ui';

import { eUserNames } from './user.types';
import { UsersV7Store } from './../users-v7.store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eUserNames.User,
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
export class UserComponent {
  usersV7Store = inject(UsersV7Store);
  userListService = this.usersV7Store.getUserListService();
  confirmationService = inject(ConfirmationService);
  service = inject(IdentityRoleService);

  onAdd() {
    this.usersV7Store.openUserEditModal(null);
  }

  onEdit(id: string) {
    this.usersV7Store.openUserEditModal(id);
  }

  save() {
    this.usersV7Store.saveUserEditModal(this.usersV7Store.userForm());
    this.userListService.get();
  }

  onDelete(id: string, roleName: string) {
    this.confirmationService
      .warn(
        'AbpIdentity::RoleDeletionConfirmationMessage',
        'AbpUi::AreYouSure',
        {
          messageLocalizationParams: [roleName],
        }
      )
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          this.service.delete(id).subscribe(() => this.userListService.get());
        }
      });
  }
}
