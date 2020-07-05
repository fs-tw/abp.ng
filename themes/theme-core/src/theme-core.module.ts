import { NgModule, ModuleWithProviders, InjectionToken, Type } from '@angular/core';
import { CoreModule as AbpCoreModule, noop } from '@abp/ng.core';
import { NgxsModule } from '@ngxs/store';
import { PageBarComponent } from './components/page-bar.component';
import { INITIAL_PROVIDERS } from './providers/initial.provider';
import { RouterState } from './states/router.state';



export interface ThemeCoreOptions {
  layouts: Type<any>[];
}

export function themeCoreOptionsFactory(options: ThemeCoreOptions) {
  return {
    ...options,
  };
}

export const THEME_CORE_OPTIONS = new InjectionToken('ThemeCoreOptions');

@NgModule({
  declarations: [
    PageBarComponent
  ],
  imports: [
    AbpCoreModule,
    NgxsModule.forFeature([
      RouterState
      //ThemeCoreState
    ])
  ],
  exports: [
    AbpCoreModule,
    PageBarComponent
  ]
})
export class ThemeCoreModule {
  static forRoot(options: ThemeCoreOptions): ModuleWithProviders<ThemeCoreModule> {
    return {
      ngModule: ThemeCoreModule,
      providers: [
        INITIAL_PROVIDERS,
        
        { provide: THEME_CORE_OPTIONS, useValue: options },
        {
          provide: 'ThemeCoreOptions',
          useFactory: themeCoreOptionsFactory,
          deps: [THEME_CORE_OPTIONS],
        }
      ],
    };
  }
}
