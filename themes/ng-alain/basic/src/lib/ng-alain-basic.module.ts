import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        NgAlainSharedModule,
        ThemeBasicModule
    ],
    exports: [
        NgAlainSharedModule,
        ThemeBasicModule
    ]
})
export class NgAlainBasicModule { }
