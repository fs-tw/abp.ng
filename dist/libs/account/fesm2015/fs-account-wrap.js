import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { AccountModule } from '@abp/ng.account';
import { NgxValidateCoreModule } from '@ngx-validate/core';

class AccountWrapModule {
}
AccountWrapModule.ɵmod = ɵɵdefineNgModule({ type: AccountWrapModule });
AccountWrapModule.ɵinj = ɵɵdefineInjector({ factory: function AccountWrapModule_Factory(t) { return new (t || AccountWrapModule)(); }, imports: [[AccountModule],
        AccountModule, NgxValidateCoreModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AccountWrapModule, { imports: [AccountModule], exports: [AccountModule, NgxValidateCoreModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AccountWrapModule, [{
        type: NgModule,
        args: [{
                imports: [AccountModule],
                exports: [AccountModule, NgxValidateCoreModule]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AccountWrapModule };
//# sourceMappingURL=fs-account-wrap.js.map
