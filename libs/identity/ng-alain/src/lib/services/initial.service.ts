import { AddReplaceableComponent } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { eIdentityComponents } from '@abp/ng.identity'
import { UsersComponent } from '../components/users/users.component';
import { RolesComponent } from '../components/roles/roles.component';

@Injectable({ providedIn: 'root' })
export class InitialService {
  constructor(private store: Store) {
    store.dispatch([
      new AddReplaceableComponent({
        key: eIdentityComponents.Users,
        component: UsersComponent,
      }),
      new AddReplaceableComponent({
        key: eIdentityComponents.Roles,
        component: RolesComponent
      })
    ]);
  }

}
