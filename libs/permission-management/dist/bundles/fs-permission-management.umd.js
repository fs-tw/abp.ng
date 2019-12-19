(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.permission-management')) :
    typeof define === 'function' && define.amd ? define('@fs/permission-management', ['exports', '@angular/core', '@abp/ng.permission-management'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['permission-management'] = {}), global.ng.core, global.ng_permissionManagement));
}(this, (function (exports, core, ng_permissionManagement) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/permission-management.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PermissionManagementModule = /** @class */ (function () {
        function PermissionManagementModule() {
        }
        PermissionManagementModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [ng_permissionManagement.PermissionManagementModule],
                        exports: [ng_permissionManagement.PermissionManagementModule]
                    },] }
        ];
        return PermissionManagementModule;
    }());

    exports.PermissionManagementModule = PermissionManagementModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-permission-management.umd.js.map
