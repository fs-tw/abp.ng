import { NgModule } from '@angular/core';
import { IdentityModule as IdentityModule$1 } from '@abp/ng.identity';
import { NgbDropdownModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { NgxValidateCoreModule } from '@ngx-validate/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/identity.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IdentityModule = /** @class */ (function () {
    function IdentityModule() {
    }
    IdentityModule.decorators = [
        { type: NgModule, args: [{
                    imports: [IdentityModule$1],
                    exports: [
                        IdentityModule$1,
                        NgbDropdownModule,
                        PermissionManagementModule,
                        NgxValidateCoreModule,
                        NgbTabsetModule
                    ]
                },] }
    ];
    return IdentityModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: fs-identity.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { IdentityModule };
//# sourceMappingURL=fs-identity.js.map
