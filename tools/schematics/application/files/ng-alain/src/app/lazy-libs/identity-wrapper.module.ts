import { NgModule } from '@angular/core';
import { IdentityModule } from '@abp/ng.identity';
import { IdentityNgAlainModule } from '@fs/identity/ng-alain';

@NgModule({
    imports: [IdentityNgAlainModule],
})
export class IdentityWrapperModule {}
