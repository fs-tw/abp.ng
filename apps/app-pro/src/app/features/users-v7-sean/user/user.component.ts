import {
  Confirmation,
  ConfirmationService,
  ToasterService,
} from '@abp/ng.theme.shared';
import { CoreModule, ABP, ListService } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  ExtensibleModule,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.components/extensible';
import { Component, Injector, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { PageModule } from '@abp/ng.components/page';
import { AdvancedEntityFiltersModule } from '@volo/abp.commercial.ng.ui';
import { eUserNames, type R } from './user.types';
import { UsersV7Store } from './../users-v7.store';
import {
  IdentityUserService,
  type IdentityUserCreateDto,
  type IdentityUserUpdateDto,
} from '@volo/abp.ng.identity/proxy';
import {
  injectQuery,
  injectMutation,
} from '@tanstack/angular-query-experimental';
import { userKeys } from './query-keys';
import { filter, lastValueFrom, tap } from 'rxjs';
import { UntypedFormGroup } from '@angular/forms';

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
  injector = inject(Injector);
  listService = new ListService<ABP.PageQueryParams>(this.injector);
  usersV7Store = inject(UsersV7Store);
  identityUserService = inject(IdentityUserService);
  confirmationService = inject(ConfirmationService);
  toaster = inject(ToasterService);

  newQueries = toSignal(this.listService.query$);

  // Query
  userListQuery = injectQuery(() => {
    const queries = this.newQueries();
    return {
      queryKey: userKeys.list({
        filter: queries?.filter,
        maxResultCount: queries?.maxResultCount ?? 10,
        skipCount: queries?.skipCount,
        sorting: queries?.sorting,
      }),
      queryFn: ({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        queryKey: [_, __, { filter, maxResultCount, skipCount, sorting }],
      }) =>
        lastValueFrom(
          this.identityUserService.getList({
            filter,
            skipCount,
            maxResultCount,
            sorting,
          })
        ),
    };
  });

  // Create
  createUserMutation = injectMutation((client) => ({
    mutationFn: (input: IdentityUserCreateDto) => {
      return lastValueFrom(this.identityUserService.create(input));
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: userKeys.all });
    },
  }));

  // Update
  updateUserMutation = injectMutation((client) => ({
    mutationFn: ({
      id,
      input,
    }: {
      id: string;
      input: IdentityUserUpdateDto;
    }) => {
      return lastValueFrom(this.identityUserService.update(id, input));
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: userKeys.all });
    },
  }));

  // Delete
  deleteUserMutation = injectMutation((client) => ({
    mutationFn: (id: string) => {
      return lastValueFrom(this.identityUserService.delete(id));
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: userKeys.all });
    },
  }));

  form = generateFormFromProps(new FormPropData(this.injector, {}));

  // UI create/update user handler
  createOrUpdateUser({ id, form }: { id?: string; form: UntypedFormGroup }) {
    if (form.invalid) {
      return;
    }
    if (id) {
      this.updateUserMutation.mutate(
        { id, input: form.value },
        {
          onSuccess: () => {
            this.toaster.success('AbpIdentity::RoleUpdatedMessage');
          },
          onError: () => {
            this.toaster.error('AbpIdentity::RoleUpdateFailedMessage');
          },
        }
      );
    } else {
      this.createUserMutation.mutate(form.value, {
        onSuccess: () => {
          this.toaster.success('AbpIdentity::RoleCreatedMessage');
        },
        onError: () => {
          this.toaster.error('AbpIdentity::RoleCreationFailedMessage');
        },
      });
    }
  }

  // UI delete user handler
  deleteUser(record: R) {
    if (this.deleteUserMutation.isPending()) {
      return;
    }

    this.confirmationService
      .warn(
        'AbpIdentity::RoleDeletionConfirmationMessage',
        'AbpUi::AreYouSure',
        {
          messageLocalizationParams: [record.name || ''],
        }
      )
      .pipe(
        filter((status) => status === Confirmation.Status.confirm),
        tap({
          next: () => {
            if (record.id) {
              this.deleteUserMutation.mutate(record.id, {
                onSuccess: () => {
                  this.toaster.success('AbpIdentity::RoleDeletedMessage');
                },
                onError: () => {
                  this.toaster.error('AbpIdentity::RoleDeletionFailedMessage');
                },
              });
            }
          },
        })
      )
      .subscribe();
  }
}
