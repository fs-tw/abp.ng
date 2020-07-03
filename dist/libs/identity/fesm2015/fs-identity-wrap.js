import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { IdentityModule } from '@abp/ng.identity';
import { NgxValidateCoreModule } from '@ngx-validate/core';

class IdentityWrapModule {
}
IdentityWrapModule.ɵmod = ɵɵdefineNgModule({ type: IdentityWrapModule });
IdentityWrapModule.ɵinj = ɵɵdefineInjector({ factory: function IdentityWrapModule_Factory(t) { return new (t || IdentityWrapModule)(); }, imports: [[IdentityModule],
        IdentityModule, NgxValidateCoreModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(IdentityWrapModule, { imports: [IdentityModule], exports: [IdentityModule, NgxValidateCoreModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(IdentityWrapModule, [{
        type: NgModule,
        args: [{
                imports: [IdentityModule],
                exports: [IdentityModule, NgxValidateCoreModule]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { IdentityWrapModule };
//# sourceMappingURL=fs-identity-wrap.js.map
