import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  ExtensibleModule,
} from '@abp/ng.components/extensible';
import { Component, inject } from '@angular/core';
import { PageModule } from '@abp/ng.components/page';
import { eUsersV3Names } from './users-v3.types';
import { UsersV3Store } from './users-v3.store';
import { ActivatedRoute } from '@angular/router';
import { EmailSettingsService } from '@abp/ng.setting-management/proxy'

@Component({
  selector: 'app-users-v3',
  templateUrl: './users-v3.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eUsersV3Names.UsersV3,
    },
  ],
  standalone: true,
  imports: [CoreModule, ThemeSharedModule, ExtensibleModule, PageModule],
})
export class UsersV3Component {
  usersV3Store = inject(UsersV3Store);
  routesService = this.usersV3Store.getUsersV3RoutesService();
  activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.usersV3Store.hookUsersV3Router(this.activatedRoute);
  }
}
