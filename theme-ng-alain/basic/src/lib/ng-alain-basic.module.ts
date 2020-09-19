import { NgAlainSharedModule } from '@fs/theme.ng-alain/shared';
import { LayoutModule } from '@fs/theme.ng-alain/layout';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BASIC_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import { FsNgAlainTreeComponent } from './components/fs-ng-alain-tree/fs-ng-alain-tree.component';
import { ThemeCoreModule } from '@fs/theme.core';

@NgModule({
    declarations:[
        FsNgAlainTreeComponent
    ],
    imports: [
        ThemeCoreModule,
        NgAlainSharedModule,
        LayoutModule
    ],
    exports: [
        ThemeCoreModule,
        NgAlainSharedModule,
        FsNgAlainTreeComponent
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
