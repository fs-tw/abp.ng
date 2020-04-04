import { UsersComponent as AbpUsersComponent, IdentityService } from '@abp/ng.identity';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { SettingManagementParameters } from '@fs/setting-management';
@Component({
  selector: 'ng-alain-users',
  templateUrl: './users.component.html',
})
export class UsersComponent extends AbpUsersComponent implements OnInit {
    parameters = new SettingManagementParameters;
    constructor(
        private _confirmationService: ConfirmationService,
        private _fb: FormBuilder,
        private _store: Store,
        private _identityService: IdentityService) {
        super(_confirmationService, _fb, _store,_identityService);
    }

    setting(visible, providerKey){
      this.parameters = {
        providerKey: providerKey,
        providerName: 'U',
        visible: visible,
        routerName: null
      };
    }
}
