import { ToasterService } from '@abp/ng.theme.shared';
import { OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { AccountService } from '@abp/ng.account/services/account.service';
import { TenantBoxComponent as AbpTenantBoxComponent } from '@abp/ng.account/components/tenant-box/tenant-box.component';
export declare class TenantBoxComponent extends AbpTenantBoxComponent implements OnInit {
    private _store;
    private _toasterService;
    private _accountService;
    mainContentRef: TemplateRef<any>;
    constructor(_store: Store, _toasterService: ToasterService, _accountService: AccountService);
}
