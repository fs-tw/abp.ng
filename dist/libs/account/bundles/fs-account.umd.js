(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.account'), require('@ngx-validate/core')) :
    typeof define === 'function' && define.amd ? define('@fs/account', ['exports', '@angular/core', '@abp/ng.account', '@ngx-validate/core'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs.account = {}), global.ng.core, global.ng_account, global.core$1));
}(this, (function (exports, core, ng_account, core$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/account.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AccountModule = /** @class */ (function () {
        function AccountModule() {
        }
        AccountModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [ng_account.AccountModule],
                        exports: [ng_account.AccountModule, core$1.NgxValidateCoreModule]
                    },] }
        ];
        return AccountModule;
    }());

    exports.AccountModule = AccountModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-account.umd.js.map
