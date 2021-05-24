import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { ModalComponent } from './modals/modal.component';
import { ModalTabComponent } from './modals/tabs/modal-tab.component';
import { ModalInfoTabComponent } from './modals/tabs/modal-info-tab/modal-info-tab.component';
import { SHARED_ABP_MODULES } from './shared-abp.module';
import { FsNgAlainTreeComponent } from './components/fs-ng-alain-tree/fs-ng-alain-tree.component';
import { FsNgAlainImagePickerComponent } from './components/fs-ng-alain-image-picker/fs-ng-alain-image-picker.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { FsGapComponent } from './components/fs-gap/fs-gap.component';
import { FsVerticalAlignmentComponent } from './components/fs-vertical-alignment/fs-vertical-alignment.component';
import { ImageUrlTempPipe } from './pipes/image-url.pipe';
import { MapperPipe } from './pipes/mapper.pipe';

const PUBLIC = [
  ModalComponent,
  ModalTabComponent,
  ModalInfoTabComponent,

  FsNgAlainTreeComponent,
  FsNgAlainImagePickerComponent,
  ValidationErrorComponent,
  FsGapComponent,
  FsVerticalAlignmentComponent,
  ImageUrlTempPipe,
  MapperPipe
];

const PRIVATE = [
];

@NgModule({
  declarations:[
    ...PRIVATE,
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

  ]
})
export class ThemeAlainSharedModule {}
