import { CoreModule } from '@abp/ng.core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
    imports: [
        CoreModule,
        ThemeBasicModule,
        NgAlainSharedModule,
        LayoutModule,
        SharedModule
    ],
    exports: [
        ThemeBasicModule,
        NgAlainSharedModule,
        LayoutModule,
        SharedModule
    ]
})
export class NgAlainBasicModule { }
