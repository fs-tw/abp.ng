import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from './core/core.module';
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { NgAlainBasicModule, LayoutDefaultComponent, LayoutPassportComponent, LayoutFullScreenComponent } from '@fs/ng-alain/basic';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ThemeCoreModule } from '@fs/theme.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
const AlainLayouts = [LayoutDefaultComponent, LayoutPassportComponent, LayoutFullScreenComponent];

@NgModule({
  imports: [
    CoreModule.forRoot(),
    ThemeCoreModule.forRoot({ layouts: AlainLayouts }),
    ThemeSharedModule.forRoot()
  ]
})
export class NgAlainModule {
  constructor(@Optional() @SkipSelf() parentModule: NgAlainModule) {
    throwIfAlreadyLoaded(parentModule, 'NgAlainModule');
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgAlainModule,
      providers: [
      ],
    };
  }
}
