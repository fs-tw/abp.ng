import { UsersComponent as AbpUsersComponent, IdentityService, GetIdentityUsersInput, IdentityUserService } from '@abp/ng.identity';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ListService } from '@abp/ng.core';

@Component({
  selector: 'ng-alain-users',
  templateUrl: './users.component.html',
  providers: [ListService],
})
export class UsersComponent extends AbpUsersComponent implements OnInit {
  constructor(
    private _list: ListService<GetIdentityUsersInput>,
    private _confirmationService: ConfirmationService,
    private _fb: FormBuilder,
    private _store: Store,
    private _identityService: IdentityService,
    private _identityUserService: IdentityUserService) {
    super(_list, _confirmationService, _fb, _store, _identityService,_identityUserService);
  }
}
