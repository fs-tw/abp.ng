import { CommonModule } from '@angular/common';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ThemeAlainUiExtensionsModule } from '@fs-tw/theme-alain/shared/extensions';
import { ModalComponent } from './modals/modal.component';
import { ModalTabComponent } from './modals/tabs/modal-tab.component';
import { ModalInfoTabComponent } from './modals/tabs/modal-info-tab/modal-info-tab.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

const MODALS_COMPONENTS = [
  ModalComponent,
  ModalTabComponent,
  ModalInfoTabComponent
];

const ABPMODULES = [
  CoreModule,
  ThemeSharedModule,
  NgxValidateCoreModule,
  ThemeAlainUiExtensionsModule
];

@NgModule({
  declarations:[
    ModalComponent,
    ModalTabComponent,
    ModalInfoTabComponent,
    ...MODALS_COMPONENTS
  ],
  imports: [
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    ...ABPMODULES,
    NgbNavModule
  ],
  exports: [
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    ...ABPMODULES,
    ...MODALS_COMPONENTS
  ],
})
export class ThemeAlainSharedModule {}
