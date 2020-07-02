import { TenantBoxComponent as AbpTenantBoxComponent } from '@abp/ng.account';
import { AccountService } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'ngx-admin-tenant-box',
  templateUrl: './tenant-box.component.html'
})
export class TenantBoxComponent extends AbpTenantBoxComponent implements OnInit {
  constructor(
    private _store: Store,
    private _toasterService: ToasterService,
    private _accountService: AccountService
  ) {
    super(_store, _toasterService, _accountService);
  }

}
