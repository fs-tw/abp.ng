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

import { eOrganizationUnitNames } from './organization-unit.types';
import { UsersV7Store } from './../users-v7.store';

@Component({
  selector: 'app-organization-unit',
  templateUrl: './organization-unit.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eOrganizationUnitNames.OrganizationUnit,
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
export class OrganizationUnitComponent {
  usersV7Store = inject(UsersV7Store);
  organizationUnitListService =
    this.usersV7Store.getOrganizationUnitListService();
  confirmationService = inject(ConfirmationService);
  service = inject(IdentityRoleService);

  onAdd() {
    this.usersV7Store.openOrganizationUnitEditModal(null);
  }

  onEdit(id: string) {
    this.usersV7Store.openOrganizationUnitEditModal(id);
  }

  save() {
    this.usersV7Store.saveOrganizationUnitEditModal(
      this.usersV7Store.organizationUnitForm()
    );
    this.organizationUnitListService.get();
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
          this.service
            .delete(id)
            .subscribe(() => this.organizationUnitListService.get());
        }
      });
  }
}
