import { NgModule } from '@angular/core';
import { TenantManagementModule as TenantManagementModule$1 } from '@abp/ng.tenant-management';
import { FeatureManagementModule } from '@abp/ng.feature-management';
import { TableModule } from 'primeng/table';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tenant-management.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TenantManagementModule = /** @class */ (function () {
    function TenantManagementModule() {
    }
    TenantManagementModule.decorators = [
        { type: NgModule, args: [{
                    imports: [TenantManagementModule$1],
                    exports: [
                        TableModule,
                        TenantManagementModule$1,
                        FeatureManagementModule
                    ]
                },] }
    ];
    return TenantManagementModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: fs-tenant-management.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TenantManagementModule };
//# sourceMappingURL=fs-tenant-management.js.map
