import { Component, Injector, OnInit } from '@angular/core';
import {
  UsersComponent as AbpUsersComponent,
  IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS,
} from '@abp/ng.identity';

import { ListService } from '@abp/ng.core';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  IdentityUserService,
  GetIdentityUsersInput,
  IdentityRoleDto,
  IdentityUserDto,
  DEFAULT_IDENTITY_TOOLBAR_ACTIONS,
  DEFAULT_IDENTITY_ENTITY_PROPS,
  IDENTITY_ENTITY_ACTION_CONTRIBUTORS,
  IDENTITY_ENTITY_PROP_CONTRIBUTORS
} from '@abp/ng.identity';
import { eIdentityComponents } from '@abp/ng.identity';
import { identityToolbarActionContributors } from '../../contributors/toolbar-action-contributors';
import { identityEntityActionContributors } from '../../contributors/entity-action-contributors';
import { identityEntityPropContributors} from '../../contributors/entity-prop-contributors';
import {
  UiExtensionsModule,
  ToolbarAction,
  ExtensionsService,
  getObjectExtensionEntitiesFromStore,
  mergeWithDefaultActions,
} from '@abp/ng.theme.shared/extensions';
import {
  IdentityContributor,
} from '../../providers/contributor.provider';

@Component({
  selector: 'fs-tw-users',
  templateUrl: './users.component.html',
  styles: [],
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eIdentityComponents.Users,
    },
    ListService,
    IdentityContributor,
    {
      provide: IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS,
      useValue: identityToolbarActionContributors,
    },
    {
      provide: IDENTITY_ENTITY_ACTION_CONTRIBUTORS,
      useValue: identityEntityActionContributors,
    },
    {
      provide: IDENTITY_ENTITY_PROP_CONTRIBUTORS,
      useValue: identityEntityPropContributors,
    },
    {
      provide: AbpUsersComponent,
      useExisting: UsersComponent,
    },
  ],
})
export class UsersComponent extends AbpUsersComponent implements OnInit {
  constructor(
    list: ListService<GetIdentityUsersInput>,
    confirmationService: ConfirmationService,
    userService: IdentityUserService,
    fb: FormBuilder,
    store: Store,
    injector: Injector,
    identityContributor: IdentityContributor
  ) {
    super(list, confirmationService, userService, fb, store, injector);
  }
}
