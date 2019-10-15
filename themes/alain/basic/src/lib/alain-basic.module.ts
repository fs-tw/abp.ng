import { CoreModule } from '@abp/ng.core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { AlainSharedModule } from '@fs/alain/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
@NgModule({
    imports: [
        CoreModule,
        ThemeBasicModule,
        AlainSharedModule,
        LayoutModule
    ]
})
export class AlainBasicModule { }
