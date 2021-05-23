import { Component, OnInit, Injector } from '@angular/core';
import { RolesComponent as AbpRolesComponent } from '@abp/ng.identity';
import { ListService, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import { ePermissionManagementComponents } from '@abp/ng.permission-management';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { eIdentityComponents } from '@abp/ng.identity';
import { Store } from '@ngxs/store';

@Component({
  selector: 'fs-tw-roles',
  templateUrl: './roles.component.html',
  styles: [],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eIdentityComponents.Roles,
    },
    {
      provide: AbpRolesComponent,
      useExisting: RolesComponent,
    }
  ],
})
export class RolesComponent extends AbpRolesComponent implements OnInit {
  constructor(
    public readonly list: ListService<PagedAndSortedResultRequestDto>,
    protected confirmationService: ConfirmationService,
    protected store: Store,
    protected injector: Injector
  ) {
    super(list, confirmationService, store, injector);
  }
}
