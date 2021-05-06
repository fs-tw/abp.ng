import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { PageModule } from '@abp/ng.components/page';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ThemeAlainUiExtensionsModule } from '@fs-tw/theme-alain/shared/extensions';
import { ModalComponent } from './modals/modal.component';
import { ModalTabComponent } from './modals/tabs/modal-tab.component';
import { ModalInfoTabComponent } from './modals/tabs/modal-info-tab/modal-info-tab.component';
import { EntityBaseComponent } from './components/entity-base/entity-base.component';

const COMPONENTS = [
  EntityBaseComponent,
  ModalComponent,
  ModalTabComponent,
  ModalInfoTabComponent
];

const ABPMODULES = [
  CoreModule,
  ThemeSharedModule,
  PageModule,
  NgxValidateCoreModule,
  ThemeAlainUiExtensionsModule
];

@NgModule({
  declarations:[
    ...COMPONENTS
  ],
  imports: [
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    ...ABPMODULES
  ],
  exports: [
    ...COMPONENTS,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    ...ABPMODULES

  ],
})
export class ThemeAlainSharedModule {}
