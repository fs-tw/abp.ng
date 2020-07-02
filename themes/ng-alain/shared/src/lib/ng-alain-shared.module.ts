import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { SharedModule } from './shared.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        ThemeSharedModule,
        SharedModule
    ],
    exports: [
        ThemeSharedModule,
        SharedModule
    ]
})
export class NgAlainSharedModule { }
