import { CoreModule } from '@abp/ng.core';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { LayoutModule } from '@fs-tw/theme-alain/layout';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
import { BaseRootModule } from './root/base-root.module';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { RootModule } from './root/root.module';
import { NG_ALAIN_THEME_STYLES_PROVIDERS } from './providers/styles.provider';

// @NgModule({
//   imports: [CommonModule],
// })
// export class ThemeAlainModule {}


@NgModule({
  imports: [
    CoreModule,
    ThemeSharedModule,
    LayoutModule
  ],
  declarations: [ApplicationLayoutComponent,AccountLayoutComponent,EmptyLayoutComponent]
})
export class ThemeAlainModule {
  static forRoot(): ModuleWithProviders<ThemeAlainModule> {
    return {
      ngModule: RootModule,
      providers: [
         NG_ALAIN_THEME_STYLES_PROVIDERS,
        // NG_ALAIN_MS_THEME_NAV_ITEM_PROVIDERS,
      ]
    };
  }
}