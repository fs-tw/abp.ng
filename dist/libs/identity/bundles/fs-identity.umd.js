(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.identity'), require('@ng-bootstrap/ng-bootstrap'), require('@abp/ng.permission-management'), require('@ngx-validate/core')) :
    typeof define === 'function' && define.amd ? define('@fs/identity', ['exports', '@angular/core', '@abp/ng.identity', '@ng-bootstrap/ng-bootstrap', '@abp/ng.permission-management', '@ngx-validate/core'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs.identity = {}), global.ng.core, global.ng_identity, global.ngBootstrap, global.ng_permissionManagement, global.core$1));
}(this, (function (exports, core, ng_identity, ngBootstrap, ng_permissionManagement, core$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/identity.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IdentityModule = /** @class */ (function () {
        function IdentityModule() {
        }
        IdentityModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [ng_identity.IdentityModule],
                        exports: [
                            ng_identity.IdentityModule,
                            ngBootstrap.NgbDropdownModule,
                            ng_permissionManagement.PermissionManagementModule,
                            core$1.NgxValidateCoreModule,
                            ngBootstrap.NgbTabsetModule
                        ]
                    },] }
        ];
        return IdentityModule;
    }());

    exports.IdentityModule = IdentityModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-identity.umd.js.map
