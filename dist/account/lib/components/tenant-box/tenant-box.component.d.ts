import { ABP } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';
export declare class TenantBoxComponent implements Account.TenantBoxComponentInputs, Account.TenantBoxComponentOutputs {
    private store;
    private toasterService;
    private accountService;
    currentTenant$: Observable<ABP.BasicItem>;
    name: string;
    isModalVisible: boolean;
    modalBusy: boolean;
    constructor(store: Store, toasterService: ToasterService, accountService: AccountService);
    onSwitch(): void;
    save(): void;
    private setTenant;
    private showError;
}
