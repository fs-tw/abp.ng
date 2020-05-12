import { TenantBoxComponent as AbpTenantBoxComponent } from '@abp/ng.account';
import { AccountService } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Store } from '@ngxs/store';
export declare class TenantBoxComponent extends AbpTenantBoxComponent {
    private _store;
    private _toasterService;
    private _accountService;
    constructor(_store: Store, _toasterService: ToasterService, _accountService: AccountService);
}
