import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingManagementModule } from '@fs/setting-management';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';



@NgModule({
  declarations: [],
  imports: [
    SettingManagementModule,
    NgAlainBasicModule,
  ]
})
export class SharedModule { }
