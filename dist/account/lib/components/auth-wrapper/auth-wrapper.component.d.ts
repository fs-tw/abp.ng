import { TemplateRef } from '@angular/core';
import { Account } from '../../models/account';
export declare class AuthWrapperComponent implements Account.AuthWrapperComponentInputs, Account.AuthWrapperComponentOutputs {
    readonly mainContentRef: TemplateRef<any>;
    readonly cancelContentRef: TemplateRef<any>;
}
