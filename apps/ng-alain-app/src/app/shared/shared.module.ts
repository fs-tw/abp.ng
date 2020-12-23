import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
// import { NgxValidateCoreModule } from '@ngx-validate/core';
// import { NgAlainSharedModule } from '@fs/theme.ng-alain/shared';
// import { LayoutModule } from '@fs/theme.ng-alain/layout';
import { ThemeNgAlainModule } from '@fs/theme.ng-alain';
import { NgxValidateCoreModule } from '@ngx-validate/core';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    ThemeSharedModule,
    ThemeNgAlainModule,
    NgbDropdownModule,
    NgxValidateCoreModule
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    ThemeNgAlainModule,
    NgbDropdownModule,
    NgxValidateCoreModule
  ],
  providers: [],
})
export class SharedModule {}
