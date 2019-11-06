import { CoreModule } from '@abp/ng.core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { NgModule } from '@angular/core';
import { NgxAdminSharedModule } from '@fs/ngx-admin/shared';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { OneColumnLayoutComponent } from './components/layouts/one-column/one-column.layout';
import { HeaderComponent } from './components/header/header.component';
import { NbUserModule } from '@nebular/theme';

@NgModule({
  declarations: [
    HeaderComponent,
    OneColumnLayoutComponent,
    ApplicationLayoutComponent
  ],
  imports: [
    //abp
    CoreModule,
    ThemeBasicModule,

    //ngx-admin
    NgxAdminSharedModule,
    NbUserModule
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
