import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  ExtensibleModule,
} from '@abp/ng.components/extensible';
import { Component, inject } from '@angular/core';
import { PageModule } from '@abp/ng.components/page';
import { eUsersV7Names } from './users-v7.types';
import { UsersV7Store } from './users-v7.store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-v7',
  templateUrl: './users-v7.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eUsersV7Names.UsersV7,
    },
  ],
  standalone: true,
  imports: [CoreModule, ThemeSharedModule, ExtensibleModule, PageModule],
})
export class UsersV7Component {
  usersV7Store = inject(UsersV7Store);
  routesService = this.usersV7Store.getUsersV7RoutesService();
  activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.usersV7Store.hookUsersV7Router(this.activatedRoute);
  }
}
