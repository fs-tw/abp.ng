import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { LayoutModule } from '@fs/ng-alain/layout';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BASIC_THEME_STYLES_PROVIDERS } from './providers/styles.provider';

@NgModule({
    imports: [
        NgAlainSharedModule,
        ThemeBasicModule,
        LayoutModule
    ],
    exports: [
        NgAlainSharedModule,
        ThemeBasicModule
    ]
})
export class NgAlainBasicModule { 
    static forRoot(): ModuleWithProviders<NgAlainBasicModule> {
        return {
          ngModule: NgAlainBasicModule,
          providers: [BASIC_THEME_STYLES_PROVIDERS],
        };
      }    
}
