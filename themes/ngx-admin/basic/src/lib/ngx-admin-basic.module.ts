import { CoreModule } from '@abp/ng.core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { AlainSharedModule } from '@fs/alain/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { NbAuthModule } from '@nebular/auth';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '@fs/ngx-admin';
import { CoreModule as NgxAdminCoreModule } from '@fs/ngx-admin';
import { NgxAdminSharedModule } from '@fs/ngx-admin/shared';
@NgModule({
    declarations: [
        ApplicationLayoutComponent
    ],
    imports: [
        //abp
        CoreModule,
        ThemeBasicModule,

        //ngx-admin
        NgxAdminSharedModule
    ],
    exports: [
        //abp
        CoreModule,
        ThemeBasicModule,

        //ngx-admin
        NgxAdminSharedModule,
        //layout
        ApplicationLayoutComponent
    ],
    entryComponents: [ApplicationLayoutComponent],
})
export class NgxAdminBasicModule { }
