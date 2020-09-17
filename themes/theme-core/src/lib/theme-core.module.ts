import { NgModule, ModuleWithProviders, InjectionToken, Type } from '@angular/core';
import { CoreModule as AbpCoreModule } from '@abp/ng.core';
import { NgxsModule } from '@ngxs/store';
import { PageBarComponent } from './components/page-bar.component';
import { INITIAL_PROVIDERS } from './providers/initial.provider';
import { INITIAL_THEME_CORE_PROVIDERS } from './providers/initial-theme-core.provider';
import { RouterState } from './states/router.state';
import { ThemeCoreState } from './states/theme-core.state';
import { MapperPipe } from './pipe/mapper.pipe';
import { Options } from './models/options';
import { THEMECORE_OPTIONS } from './tokens/options.token';
import { themeCoreOptionsFactory } from './utils/factory-utils';

@NgModule({
  declarations: [
    PageBarComponent,
    MapperPipe
  ],
  imports: [
    AbpCoreModule,
    NgxsModule.forFeature([
      RouterState,
      ThemeCoreState
    ])
  ],
  exports: [
    AbpCoreModule,
    PageBarComponent,
    MapperPipe
  ]
})
export class ThemeCoreModule {
  static forRoot(): ModuleWithProviders<ThemeCoreModule> {
    return {
      ngModule: ThemeCoreModule,
      providers: [
        { provide: THEMECORE_OPTIONS, useValue: null },
        {
          provide: 'THEMECORE_OPTIONS',
          useFactory: themeCoreOptionsFactory,
          deps: [THEMECORE_OPTIONS],
        },
        INITIAL_PROVIDERS,
        INITIAL_THEME_CORE_PROVIDERS
      ],
    };
  }
}
