import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from './core/core.module';
import { NgAlainBasicModule, LayoutDefaultComponent, LayoutPassportComponent, LayoutFullScreenComponent } from '@fs/ng-alain/basic';
import { ThemeCoreModule,throwIfAlreadyLoaded } from '@fs/theme.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { InitialService } from './core/services/initial.service';

@NgModule({
  imports: [
    CoreModule.forRoot(),
    NgAlainBasicModule,
    ThemeCoreModule,
    ThemeSharedModule.forRoot()
  ]
})
export class NgAlainModule {
  constructor(@Optional() @SkipSelf() parentModule: NgAlainModule,initialService:InitialService) {
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
