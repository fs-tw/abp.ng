import { TemplateRef } from '@angular/core';
import { Account } from '@abp/ng.account';
import * as i0 from "@angular/core";
export declare class AuthWrapperComponent implements Account.AuthWrapperComponentInputs, Account.AuthWrapperComponentOutputs {
    readonly mainContentRef: TemplateRef<any>;
    readonly cancelContentRef: TemplateRef<any>;
    static ɵfac: i0.ɵɵFactoryDef<AuthWrapperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AuthWrapperComponent, "ng-alain-auth-wrapper", never, { "mainContentRef": "mainContentRef"; "cancelContentRef": "cancelContentRef"; }, {}, never, ["*"]>;
}
