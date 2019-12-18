import { TenantBoxComponent as AbpTenantBoxComponent } from '@abp/ng.account/components/tenant-box/tenant-box.component';
import { AccountService } from '@abp/ng.account/services/account.service';
import { ToasterService } from '@abp/ng.theme.shared';
import { OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
export declare class TenantBoxComponent extends AbpTenantBoxComponent implements OnInit {
    private _store;
    private _toasterService;
    private _accountService;
    constructor(_store: Store, _toasterService: ToasterService, _accountService: AccountService);
}
