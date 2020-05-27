import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        //CoreModule,
        NgAlainSharedModule,
        ThemeBasicModule,
        
        LayoutModule,
        SharedModule
    ],
    exports: [
        NgAlainSharedModule,
        ThemeBasicModule,
        
        LayoutModule,
        SharedModule
    ]
})
export class NgAlainBasicModule { }
