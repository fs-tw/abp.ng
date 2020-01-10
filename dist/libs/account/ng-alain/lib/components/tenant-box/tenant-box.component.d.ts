import { ToasterService } from '@abp/ng.theme.shared';
import { OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { AccountService } from '@abp/ng.account';
import { TenantBoxComponent as AbpTenantBoxComponent, Account } from '@abp/ng.account';
export declare class TenantBoxComponent extends AbpTenantBoxComponent implements OnInit, Account.TenantBoxComponentInputs, Account.TenantBoxComponentOutputs {
    private _store;
    private _toasterService;
    private _accountService;
    mainContentRef: TemplateRef<any>;
    constructor(_store: Store, _toasterService: ToasterService, _accountService: AccountService);
}
