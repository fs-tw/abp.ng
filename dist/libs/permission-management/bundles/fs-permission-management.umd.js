(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fs/permission-management', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['permission-management'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var PermissionManagementModule = /** @class */ (function () {
        function PermissionManagementModule() {
        }
        return PermissionManagementModule;
    }());
    PermissionManagementModule.ɵmod = i0.ɵɵdefineNgModule({ type: PermissionManagementModule });
    PermissionManagementModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PermissionManagementModule_Factory(t) { return new (t || PermissionManagementModule)(); }, imports: [[common.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PermissionManagementModule, { imports: [common.CommonModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PermissionManagementModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule],
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PermissionManagementModule = PermissionManagementModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-permission-management.umd.js.map
