import { ThemeCoreModule } from '@fs/theme.core';
import { NgModule, LOCALE_ID, ModuleWithProviders } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { SharedModule } from './ng-alain/shared.module';

@NgModule({
  imports: [
    ThemeCoreModule,//fs
    ThemeSharedModule,//abp
    SharedModule,//alain
  ],
  exports: [
    ThemeCoreModule,
    ThemeSharedModule,
    SharedModule
  ]
})
export class NgAlainSharedModule {

}
