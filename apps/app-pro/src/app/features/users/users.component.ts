import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  ExtensibleModule,
  ExtensionsService,
} from '@abp/ng.components/extensible';
import { Component, inject } from '@angular/core';
import { PageModule } from '@abp/ng.components/page';

import { eUsersNames } from './users.model';
import { MergeDefaultsUsers } from './users.default';
import localizations from './users.localizations';

import { provideLocalization } from '../../shared/provider_collection';
import { RoutesService } from '../../shared/tabs.service';
import { eUserPolicyNames } from './user/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [
    RoutesService,
    provideLocalization(localizations),
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eUsersNames.Users,
    },
  ],
  standalone: true,
  imports: [CoreModule, ThemeSharedModule, ExtensibleModule, PageModule],
})
export class UsersComponent {
  routesService = inject(RoutesService);

  constructor() {
    MergeDefaultsUsers(inject(ExtensionsService));

    this.routesService.add([
      {
       name: 'user',
       path: 'user',
       order: 1,
       requiredPolicy: eUserPolicyNames.User,
      },
      //{
      //  name: 'basic',
      //  path: 'basic',
      //  order: 2,
      // requiredPolicy: eBasicPolicyNames.Basic,
      //},
    ]);
  }
}
