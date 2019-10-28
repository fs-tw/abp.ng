import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from '@fs/alain';
@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        ThemeSharedModule,//abp
        SharedModule,//alain
    ],
    exports: [SharedModule, ThemeSharedModule]
})
export class NgxAdminSharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxAdminSharedModule,
            providers: [
            ]
        };
    }

}
