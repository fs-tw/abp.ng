import { TemplateRef } from '@angular/core';
import { Account } from '../../models/account';
import { Observable } from 'rxjs';
export declare class AuthWrapperComponent implements Account.AuthWrapperComponentInputs, Account.AuthWrapperComponentOutputs {
    enableLocalLogin$: Observable<'True' | 'False'>;
    readonly mainContentRef: TemplateRef<any>;
    readonly cancelContentRef: TemplateRef<any>;
}
