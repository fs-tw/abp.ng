import { CoreModule, ListService } from '@abp/ng.core';
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
import { Component, Injector, computed, inject, signal } from '@angular/core';
import {
  GetIdentityRoleListInput,
  IdentityRoleDto,
  IdentityRoleService,
} from '@volo/abp.ng.identity/proxy';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { PageModule } from '@abp/ng.components/page';
import { AdvancedEntityFiltersModule } from '@volo/abp.commercial.ng.ui';
import { UntypedFormGroup } from '@angular/forms';
import { finalize, take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { eRoleNames } from './role.model';
import { MergeDefaultsRole } from './role.default';
import { UsersStore } from '../users.store';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  providers: [
    ListService,
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
  usersStore = inject(UsersStore);
  roleListService = this.usersStore.getRoleListService();
  confirmationService = inject(ConfirmationService);
  service = inject(IdentityRoleService);

  form = computed(() => generateFormFromProps(new FormPropData(this.injector, this.usersStore.modal.selected())));

  //form!: UntypedFormGroup;

  //selected!: IdentityRoleDto;

  // form = this.usersStore.form();

  constructor(protected injector: Injector) {
    MergeDefaultsRole(inject(ExtensionsService));
  }

  //openModal() {
  //const data = new FormPropData(this.injector, this.selected);
  //this.form = generateFormFromProps(data);

  // this.usersStore.updateModal({ visible: true });
  //this.isModalVisible = true;
  //}

  onAdd() {
    // const selected = {} as IdentityRoleDto;
    this.usersStore.updateModal({ selectedId: null, visible: true });
    // this.openModal();
    // this.usersStore.updateModal({ visible: true });
  }

  onEdit(id: string) {
    this.usersStore.updateModal({ selectedId: id, visible: true });
    // this.service
    //   .get(id)
    //   .pipe(take(1))
    //   .subscribe((selected) => {

    //     // this.selected = selectedRole;
    //     // this.openModal();
    //     // this.usersStore.updateModal({ visible: true });
    //   });
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
          this.service.delete(id).subscribe(() => this.roleListService.get());
        }
      });
  }

  save() {
    this.usersStore.save(this.form());
    this.usersStore.getRoleListService().get();
    // return ;
    // if (!this.form().valid) return;
    // this.usersStore.updateModal({ busy: true });

    // const id = this.usersStore.modal().selectedId;

    // (id
    //   ? this.service.update(id, {
    //     ...this.usersStore.modal().selected,
    //     ...this.form().value,
    //     concurrencyStamp: this.usersStore.modal().selected?.concurrencyStamp,
    //   })
    //   : this.service.create(this.form().value)
    // )
    //   .pipe(finalize(() => {
    //     this.usersStore.updateModal({ busy: false });
    //   }))
    //   .subscribe(() => {
    //     this.roleListService.get();
    //     this.usersStore.updateModal({ visible: false });
    //   });
  }
}
