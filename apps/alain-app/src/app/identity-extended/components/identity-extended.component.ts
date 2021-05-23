import { Component, OnInit } from '@angular/core';
import { ReplaceableComponentsService } from '@abp/ng.core';
import { eIdentityComponents,IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS } from '@abp/ng.identity';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';

@Component({
  template: '<router-outlet></router-outlet>'
})
export class IdentityExtendedComponent implements OnInit {

  constructor(private replaceableComponents: ReplaceableComponentsService) {
    this.replaceableComponents.add({
      key: eIdentityComponents.Roles,
      component: RolesComponent,
    });
    this.replaceableComponents.add({
      key: eIdentityComponents.Users,
      component: UsersComponent,
    });
  }

  ngOnInit(): void {
  }

}
