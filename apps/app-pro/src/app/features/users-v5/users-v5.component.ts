import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  ExtensibleModule,
} from '@abp/ng.components/extensible';
import { Component, inject } from '@angular/core';
import { PageModule } from '@abp/ng.components/page';
import { eUsersV5Names } from './users-v5.types';
import { UsersV5Store } from './users-v5.store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-v5',
  templateUrl: './users-v5.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eUsersV5Names.UsersV5,
    },
  ],
  standalone: true,
  imports: [CoreModule, ThemeSharedModule, ExtensibleModule, PageModule],
})
export class UsersV5Component {
  usersV5Store = inject(UsersV5Store);
  routesService = this.usersV5Store.getUsersV5RoutesService();
  activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.usersV5Store.hookUsersV5Router(this.activatedRoute);
  }
}
