import { NgModule } from '@angular/core';
import { IdentityModule } from '@abp/ng.identity';
import { NgxValidateCoreModule } from '@ngx-validate/core';

@NgModule({
    imports: [IdentityModule],
    exports: [IdentityModule, NgxValidateCoreModule]
})
export class IdentityWrapModule {}
