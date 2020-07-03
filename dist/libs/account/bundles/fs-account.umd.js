(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fs/account', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs.account = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var AccountModule = /** @class */ (function () {
        function AccountModule() {
        }
        return AccountModule;
    }());
    AccountModule.ɵmod = i0.ɵɵdefineNgModule({ type: AccountModule });
    AccountModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AccountModule_Factory(t) { return new (t || AccountModule)(); }, imports: [[common.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AccountModule, { imports: [common.CommonModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AccountModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AccountModule = AccountModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-account.umd.js.map
