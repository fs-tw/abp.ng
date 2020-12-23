// tslint:disable: no-duplicate-imports
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CoreModule} from '@abp/ng.core';
import { LayoutModule } from '@fs/theme.ng-alain/layout';
import { NGALAIN_THEME_NAV_ITEM_PROVIDERS } from './providers/nav-item.provider';
import { NGALAIN_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import { RootModule } from './root/root.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { LanguagesComponent } from './components/languages/languages.component';
import { LayoutDefaultModule } from '@delon/theme/layout-default';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CurrentUserComponent } from './components/current-user/current-user.component';

@NgModule({
  imports: [
    CoreModule,
    NzDropDownModule,
    NzIconModule,
    LayoutDefaultModule,
    LayoutModule,
    
  ],
  providers:[
    
  ],
  declarations: [
    LanguagesComponent,
    CurrentUserComponent
  ]
})
export class ThemeNgAlainModule {
  static forRoot(): ModuleWithProviders<ThemeNgAlainModule> {
    return {
      ngModule: RootModule,
      providers: [
        NGALAIN_THEME_STYLES_PROVIDERS,
        NGALAIN_THEME_NAV_ITEM_PROVIDERS
      ]
    };
  }
}
