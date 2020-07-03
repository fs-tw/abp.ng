(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.identity'), require('@ngx-validate/core')) :
    typeof define === 'function' && define.amd ? define('@fs/identity/wrap', ['exports', '@angular/core', '@abp/ng.identity', '@ngx-validate/core'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs.identity = global.fs.identity || {}, global.fs.identity.wrap = {}), global.ng.core, global.ng_identity, global.core));
}(this, (function (exports, i0, ng_identity, core) { 'use strict';

    var IdentityWrapModule = /** @class */ (function () {
        function IdentityWrapModule() {
        }
        return IdentityWrapModule;
    }());
    IdentityWrapModule.ɵmod = i0.ɵɵdefineNgModule({ type: IdentityWrapModule });
    IdentityWrapModule.ɵinj = i0.ɵɵdefineInjector({ factory: function IdentityWrapModule_Factory(t) { return new (t || IdentityWrapModule)(); }, imports: [[ng_identity.IdentityModule],
            ng_identity.IdentityModule, core.NgxValidateCoreModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IdentityWrapModule, { imports: [ng_identity.IdentityModule], exports: [ng_identity.IdentityModule, core.NgxValidateCoreModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(IdentityWrapModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [ng_identity.IdentityModule],
                        exports: [ng_identity.IdentityModule, core.NgxValidateCoreModule]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.IdentityWrapModule = IdentityWrapModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-identity-wrap.umd.js.map
