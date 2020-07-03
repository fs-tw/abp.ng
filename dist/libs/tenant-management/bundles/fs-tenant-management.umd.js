(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fs/tenant-management', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['tenant-management'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var TenantManagementModule = /** @class */ (function () {
        function TenantManagementModule() {
        }
        return TenantManagementModule;
    }());
    TenantManagementModule.ɵmod = i0.ɵɵdefineNgModule({ type: TenantManagementModule });
    TenantManagementModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TenantManagementModule_Factory(t) { return new (t || TenantManagementModule)(); }, imports: [[common.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TenantManagementModule, { imports: [common.CommonModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TenantManagementModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule],
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TenantManagementModule = TenantManagementModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tenant-management.umd.js.map
