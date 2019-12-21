(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.tenant-management'), require('@abp/ng.feature-management'), require('primeng/table')) :
    typeof define === 'function' && define.amd ? define('@fs/tenant-management', ['exports', '@angular/core', '@abp/ng.tenant-management', '@abp/ng.feature-management', 'primeng/table'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['tenant-management'] = {}), global.ng.core, global.ng_tenantManagement, global.ng_featureManagement, global.table));
}(this, (function (exports, core, ng_tenantManagement, ng_featureManagement, table) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/tenant-management.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TenantManagementModule = /** @class */ (function () {
        function TenantManagementModule() {
        }
        TenantManagementModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [ng_tenantManagement.TenantManagementModule],
                        exports: [
                            table.TableModule,
                            ng_tenantManagement.TenantManagementModule,
                            ng_featureManagement.FeatureManagementModule
                        ]
                    },] }
        ];
        return TenantManagementModule;
    }());

    exports.TenantManagementModule = TenantManagementModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tenant-management.umd.js.map
