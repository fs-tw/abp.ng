import { SubscriptionService, MultiTenancyService } from '@abp/ng.core';
import { OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { eAccountComponents } from '../../enums/components';
import { Account } from '../../models/account';
export declare class AuthWrapperComponent implements Account.AuthWrapperComponentInputs, Account.AuthWrapperComponentOutputs, OnInit {
    readonly multiTenancy: MultiTenancyService;
    private store;
    private subscription;
    readonly mainContentRef: TemplateRef<any>;
    readonly cancelContentRef: TemplateRef<any>;
    isMultiTenancyEnabled$: Observable<boolean>;
    enableLocalLogin: boolean;
    tenantBoxKey: eAccountComponents;
    constructor(multiTenancy: MultiTenancyService, store: Store, subscription: SubscriptionService);
    ngOnInit(): void;
}
