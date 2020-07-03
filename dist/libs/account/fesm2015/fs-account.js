import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class AccountModule {
}
AccountModule.ɵmod = ɵɵdefineNgModule({ type: AccountModule });
AccountModule.ɵinj = ɵɵdefineInjector({ factory: function AccountModule_Factory(t) { return new (t || AccountModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AccountModule, { imports: [CommonModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AccountModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AccountModule };
//# sourceMappingURL=fs-account.js.map
