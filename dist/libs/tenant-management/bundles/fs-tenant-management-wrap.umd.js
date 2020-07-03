(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.tenant-management'), require('@ngx-validate/core'), require('@abp/ng.core')) :
    typeof define === 'function' && define.amd ? define('@fs/tenant-management/wrap', ['exports', '@angular/core', '@abp/ng.tenant-management', '@ngx-validate/core', '@abp/ng.core'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['tenant-management'] = global.fs['tenant-management'] || {}, global.fs['tenant-management'].wrap = {}), global.ng.core, global.ng_tenantManagement, global.core, global.ng_core));
}(this, (function (exports, i0, ng_tenantManagement, core, ng_core) { 'use strict';

    var TenantManagementWrapModule = /** @class */ (function () {
        function TenantManagementWrapModule() {
        }
        return TenantManagementWrapModule;
    }());
    TenantManagementWrapModule.ɵmod = i0.ɵɵdefineNgModule({ type: TenantManagementWrapModule });
    TenantManagementWrapModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TenantManagementWrapModule_Factory(t) { return new (t || TenantManagementWrapModule)(); }, imports: [[ng_tenantManagement.TenantManagementModule],
            ng_tenantManagement.TenantManagementModule, ng_core.CoreModule, core.NgxValidateCoreModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TenantManagementWrapModule, { imports: [ng_tenantManagement.TenantManagementModule], exports: [ng_tenantManagement.TenantManagementModule, ng_core.CoreModule, core.NgxValidateCoreModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TenantManagementWrapModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [ng_tenantManagement.TenantManagementModule],
                        exports: [ng_tenantManagement.TenantManagementModule, ng_core.CoreModule, core.NgxValidateCoreModule]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TenantManagementWrapModule = TenantManagementWrapModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tenant-management-wrap.umd.js.map
