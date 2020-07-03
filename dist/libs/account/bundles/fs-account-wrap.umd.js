(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.account'), require('@ngx-validate/core')) :
    typeof define === 'function' && define.amd ? define('@fs/account/wrap', ['exports', '@angular/core', '@abp/ng.account', '@ngx-validate/core'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs.account = global.fs.account || {}, global.fs.account.wrap = {}), global.ng.core, global.ng_account, global.core));
}(this, (function (exports, i0, ng_account, core) { 'use strict';

    var AccountWrapModule = /** @class */ (function () {
        function AccountWrapModule() {
        }
        return AccountWrapModule;
    }());
    AccountWrapModule.ɵmod = i0.ɵɵdefineNgModule({ type: AccountWrapModule });
    AccountWrapModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AccountWrapModule_Factory(t) { return new (t || AccountWrapModule)(); }, imports: [[ng_account.AccountModule],
            ng_account.AccountModule, core.NgxValidateCoreModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AccountWrapModule, { imports: [ng_account.AccountModule], exports: [ng_account.AccountModule, core.NgxValidateCoreModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AccountWrapModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [ng_account.AccountModule],
                        exports: [ng_account.AccountModule, core.NgxValidateCoreModule]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AccountWrapModule = AccountWrapModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-account-wrap.umd.js.map
