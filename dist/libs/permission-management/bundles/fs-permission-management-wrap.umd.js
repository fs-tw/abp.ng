(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.permission-management')) :
    typeof define === 'function' && define.amd ? define('@fs/permission-management/wrap', ['exports', '@angular/core', '@abp/ng.permission-management'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['permission-management'] = global.fs['permission-management'] || {}, global.fs['permission-management'].wrap = {}), global.ng.core, global.ng_permissionManagement));
}(this, (function (exports, i0, ng_permissionManagement) { 'use strict';

    var PermissionManagementWrapModule = /** @class */ (function () {
        function PermissionManagementWrapModule() {
        }
        return PermissionManagementWrapModule;
    }());
    PermissionManagementWrapModule.ɵmod = i0.ɵɵdefineNgModule({ type: PermissionManagementWrapModule });
    PermissionManagementWrapModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PermissionManagementWrapModule_Factory(t) { return new (t || PermissionManagementWrapModule)(); }, imports: [[ng_permissionManagement.PermissionManagementModule],
            ng_permissionManagement.PermissionManagementModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PermissionManagementWrapModule, { imports: [ng_permissionManagement.PermissionManagementModule], exports: [ng_permissionManagement.PermissionManagementModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PermissionManagementWrapModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [ng_permissionManagement.PermissionManagementModule],
                        exports: [ng_permissionManagement.PermissionManagementModule]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PermissionManagementWrapModule = PermissionManagementWrapModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-permission-management-wrap.umd.js.map
