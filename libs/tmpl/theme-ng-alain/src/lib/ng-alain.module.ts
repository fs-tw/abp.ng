// tslint:disable: no-duplicate-imports
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RootModule } from './root/root.module';
import { NgAlainBasicModule } from '@fs/theme.ng-alain/basic';

@NgModule({
  imports: [
    NgAlainBasicModule
  ],
  exports:[
    NgAlainBasicModule
  ],
})
export class ThemeNgAlainModule {
  static forRoot(): ModuleWithProviders<ThemeNgAlainModule> {
    return {
      ngModule: RootModule,
      providers: [
      ],
    };
  }
}
