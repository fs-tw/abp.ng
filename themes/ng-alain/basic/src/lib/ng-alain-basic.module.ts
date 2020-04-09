import { CoreModule, AddReplaceableComponent } from '@abp/ng.core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { LayoutDefaultComponent } from './layout/default/default.component';
import { LayoutPassportComponent } from './layout/passport/passport.component';
import { LayoutFullScreenComponent } from './layout/fullscreen/fullscreen.component';

@NgModule({
  imports: [
    CoreModule,
    ThemeBasicModule,
    NgAlainSharedModule,
    LayoutModule
  ],
  exports: [
    ThemeBasicModule,
    NgAlainSharedModule,
    LayoutModule
  ]
})
export class NgAlainBasicModule {}
