import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class IdentityModule {
}
IdentityModule.ɵmod = ɵɵdefineNgModule({ type: IdentityModule });
IdentityModule.ɵinj = ɵɵdefineInjector({ factory: function IdentityModule_Factory(t) { return new (t || IdentityModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(IdentityModule, { imports: [CommonModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(IdentityModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { IdentityModule };
//# sourceMappingURL=fs-identity.js.map
