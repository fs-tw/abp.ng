import { CoreModule } from '@abp/ng.core';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutDefaultModule } from '@delon/theme/layout-default';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { LayoutBasicComponent } from './basic/basic.component';
import { HeaderFullScreenComponent } from './basic/widgets/fullscreen.component';
import { HeaderI18nComponent } from './basic/widgets/i18n.component';
import { HeaderUserComponent } from './basic/widgets/user.component';
import { LayoutBlankComponent } from './blank/blank.component';
import { LayoutPassportComponent } from './passport/passport.component';
import { LAYOUT_MENU_PROVIDERS } from './providers/menu.provider';

const LAYOUTCOMPONENTS = [LayoutBasicComponent, LayoutBlankComponent, LayoutPassportComponent];

const HEADERCOMPONENTS = [
  HeaderI18nComponent,
  HeaderUserComponent,
  HeaderFullScreenComponent
];
@NgModule({
  imports: [
    CoreModule,
    FormsModule,
    RouterModule,
    LayoutDefaultModule,
    NzDropDownModule,
    NzIconModule
  ],
  declarations: [...LAYOUTCOMPONENTS, ...HEADERCOMPONENTS],
  exports: [...LAYOUTCOMPONENTS, ...HEADERCOMPONENTS],
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [
        LAYOUT_MENU_PROVIDERS
      ]
    };
  }
}
