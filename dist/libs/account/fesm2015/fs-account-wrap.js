import { __decorate } from 'tslib';
import { NgModule } from '@angular/core';
import { AccountModule } from '@abp/ng.account';
import { NgxValidateCoreModule } from '@ngx-validate/core';

let AccountWrapModule = class AccountWrapModule {
};
AccountWrapModule = __decorate([
    NgModule({
        imports: [AccountModule],
        exports: [AccountModule, NgxValidateCoreModule]
    })
], AccountWrapModule);

/**
 * Generated bundle index. Do not edit.
 */

export { AccountWrapModule };
//# sourceMappingURL=fs-account-wrap.js.map
