import { OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Account } from '../../models/account';
export declare class AuthWrapperComponent implements Account.AuthWrapperComponentInputs, Account.AuthWrapperComponentOutputs, OnInit, OnDestroy {
    private store;
    readonly mainContentRef: TemplateRef<any>;
    readonly cancelContentRef: TemplateRef<any>;
    isMultiTenancyEnabled$: Observable<boolean>;
    enableLocalLogin: boolean;
    constructor(store: Store);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
