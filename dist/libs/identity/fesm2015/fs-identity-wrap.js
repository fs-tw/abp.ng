import { __decorate } from 'tslib';
import { NgModule } from '@angular/core';
import { IdentityModule } from '@abp/ng.identity';
import { NgxValidateCoreModule } from '@ngx-validate/core';

let IdentityWrapModule = class IdentityWrapModule {
};
IdentityWrapModule = __decorate([
    NgModule({
        imports: [IdentityModule],
        exports: [IdentityModule, NgxValidateCoreModule]
    })
], IdentityWrapModule);

/**
 * Generated bundle index. Do not edit.
 */

export { IdentityWrapModule };
//# sourceMappingURL=fs-identity-wrap.js.map
