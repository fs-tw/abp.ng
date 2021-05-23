import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './components/users/users.component';
import { PageModule } from '@abp/ng.components/page';
import { UiExtensionsModule } from '@abp/ng.theme.shared/extensions';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { ThemeAlainUiExtensionsModule } from '@fs-tw/theme-alain/shared/extensions';
import { identityToolbarActionContributors } from './contributors/toolbar-action-contributors';
import { identityEntityActionContributors } from './contributors/entity-action-contributors';
import { identityEntityPropContributors } from './contributors/entity-prop-contributors';
import { RouterModule } from '@angular/router';
import { IdentityModule } from '@abp/ng.identity';
import { IdentityExtendedComponent } from './components/identity-extended.component';
import { RolesComponent } from './components/roles/roles.component';

@NgModule({
  declarations: [UsersComponent, IdentityExtendedComponent, RolesComponent],
  imports: [
    ThemeAlainUiExtensionsModule,
    SharedModule,
    PageModule,
    UiExtensionsModule,
    NgbDropdownModule,
    NgbNavModule,
    PermissionManagementModule,
    RouterModule.forChild([
      {
        path: '',
        component: IdentityExtendedComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              IdentityModule.forLazy({
                // entityActionContributors: identityEntityActionContributors,
                // toolbarActionContributors: identityToolbarActionContributors,
                // entityPropContributors: identityEntityPropContributors,
              }),
          },
        ],
      },
    ]),
  ],
})
export class IdentityExtendedModule {
}
