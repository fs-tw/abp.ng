import { CoreModule } from '@abp/ng.core';
import {
  Confirmation,
  ConfirmationService,
  ThemeSharedModule,
} from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  ExtensibleModule,
  generateFormFromProps,
  ExtensionsService,
} from '@abp/ng.components/extensible';
import { Component, Injector, inject } from '@angular/core';
import {
  IdentityRoleDto,
  IdentityRoleService,
} from '@volo/abp.ng.identity/proxy';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { PageModule } from '@abp/ng.components/page';
import { AdvancedEntityFiltersModule } from '@volo/abp.commercial.ng.ui';
import { UntypedFormGroup } from '@angular/forms';
import { finalize, take } from 'rxjs';

import { eUserNames } from './user.model';
import { MergeDefaultsUser } from './user.default';
import { UsersStore } from '../users.store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [
    UsersStore,
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
  confirmationService = inject(ConfirmationService);
  service = inject(IdentityRoleService);
  store = inject(UsersStore);
  list = this.store.listService();

  form!: UntypedFormGroup;

  selected!: IdentityRoleDto;

  isModalVisible!: boolean;

  modalBusy = false;

  constructor(protected injector: Injector) {
    MergeDefaultsUser(inject(ExtensionsService));
  }

  openModal() {
    const data = new FormPropData(this.injector, this.selected);
    this.form = generateFormFromProps(data);
    this.isModalVisible = true;
  }

  onAdd() {
    this.selected = {} as IdentityRoleDto;
    this.openModal();

  }

  onEdit(id: string) {
    this.service
      .get(id)
      .pipe(take(1))
      .subscribe((selectedRole) => {
        this.selected = selectedRole;
        this.openModal();
      });
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
          this.service.delete(id).subscribe(() => this.list.get());
        }
      });
  }

  save() {
    if (!this.form.valid) return;
    this.modalBusy = true;

    const { id } = this.selected;

    (id
      ? this.service.update(id, {
        ...this.selected,
        ...this.form.value,
        concurrencyStamp: this.selected.concurrencyStamp,
      })
      : this.service.create(this.form.value)
    )
      .pipe(finalize(() => (this.modalBusy = false)))
      .subscribe(() => {
        this.list.get();
        this.isModalVisible = false;
      });
  }
}
