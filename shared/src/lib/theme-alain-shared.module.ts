import { NgModule } from '@angular/core';
import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { ModalComponent } from './modals/modal.component';
import { ModalTabComponent } from './modals/tabs/modal-tab.component';
import { ModalInfoTabComponent } from './modals/tabs/modal-info-tab/modal-info-tab.component';
import { SHARED_ABP_MODULES } from './shared-abp.module';
import { ThemeAlainUiExtensionsModule } from '@fs-tw/theme-alain/shared/extensions';
import { FsNgAlainTreeComponent } from './components/fs-ng-alain-tree/fs-ng-alain-tree.component';
import { FsNgAlainImagePickerComponent } from './components/fs-ng-alain-image-picker/fs-ng-alain-image-picker.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { FsGapComponent } from './components/fs-gap/fs-gap.component';
import { FsVerticalAlignmentComponent } from './components/fs-vertical-alignment/fs-vertical-alignment.component';
import { ImageUrlTempPipe } from './pipes/image-url.pipe';
import { MapperPipe } from './pipes/mapper.pipe';
import { AlainThemeModule } from '@delon/theme';

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
    ...SHARED_ABP_MODULES,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    AlainThemeModule.forChild(),
    ThemeAlainUiExtensionsModule
  ],
  exports: [
    ...SHARED_ABP_MODULES,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    ThemeAlainUiExtensionsModule,
    ...PUBLIC,

  ]
})
export class ThemeAlainSharedModule {}
