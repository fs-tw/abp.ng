import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { ModalComponent } from './modals/modal.component';
import { ModalTabComponent } from './modals/tabs/modal-tab.component';
import { ModalInfoTabComponent } from './modals/tabs/modal-info-tab/modal-info-tab.component';
import { EntityBaseComponent } from './components/entity-base/entity-base.component';
import { SHARED_ABP_MODULES } from './shared-abp.module';

const PUBLIC = [
  EntityBaseComponent,
  ModalComponent,
  ModalTabComponent,
  ModalInfoTabComponent
];

@NgModule({
  declarations:[
    ...PUBLIC
  ],
  imports: [
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    ...SHARED_ABP_MODULES
  ],
  exports: [
    ...PUBLIC,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    ...SHARED_ABP_MODULES

  ],
})
export class ThemeAlainSharedModule {}
