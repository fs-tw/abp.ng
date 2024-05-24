import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  ExtensibleModule,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.components/extensible';
import { Component, Inject, Injector, inject } from '@angular/core';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { PageModule } from '@abp/ng.components/page';
import { AdvancedEntityFiltersModule } from '@volo/abp.commercial.ng.ui';
import { eUserNames } from './user.types';
import { UsersV7Store } from './../users-v7.store';
import { IdentityUserCreateDto } from '@volo/abp.ng.identity/proxy';

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

  form = generateFormFromProps(new FormPropData(inject(Injector), {}));
}
