import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { ModalComponent } from './components/fs-ng-alain-setting-management/modal/modal.component';
import { MainComponent } from './components/fs-ng-alain-setting-management/main/main.component';
import { DetailComponent } from './components/fs-ng-alain-setting-management/detail/detail.component';
import { FsNgAlainJsonEditorComponent } from './components/fs-ng-alain-json-editor/fs-ng-alain-json-editor.component';
import { SettingManagementComponent } from './components/setting-management/setting-management.component';
import { MySettingsComponent } from './components/my-settings/my-settings.component';
import { MySettings2Component } from './components/my-settings2/my-settings2.component';

const COMPONENT = [
  ModalComponent, MainComponent, DetailComponent, FsNgAlainJsonEditorComponent, SettingManagementComponent, MySettingsComponent, MySettings2Component
]

@NgModule({
  declarations: [...COMPONENT],
  imports: [
    NgAlainBasicModule,
    NgJsonEditorModule
  ],
  exports: [
    NgAlainBasicModule,
    ...COMPONENT
  ]
})
export class SharedModule { }
