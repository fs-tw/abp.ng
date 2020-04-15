import { NgModule, InjectionToken, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CoreModule as AbpCoreModule } from '@abp/ng.core';
import { CoreModule as NgAlainCoreModule } from '@fs/ng-alain/core';
import { DelonModule } from '@fs/ng-alain/core'
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { throwIfAlreadyLoaded } from '@fs/ng-alain/core';

@NgModule({
  imports: [
    AbpCoreModule,
    NgAlainCoreModule.forRoot(),
    NgAlainSharedModule,
    NgAlainBasicModule
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
        // { provide: NgAlainMsOptionsToken, useValue: options },
        // {
        //   provide: 'NgAlainMsOptions',
        //   useFactory: ngAlainMsOptionsFactory,
        //   deps: [NgAlainMsOptionsToken],
        // },
      ],
    };
  }
}
