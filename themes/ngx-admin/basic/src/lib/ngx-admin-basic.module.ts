import { CoreModule, AddReplaceableComponent } from '@abp/ng.core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { NgModule } from '@angular/core';
import { NgxAdminSharedModule } from '@fs/ngx-admin/shared';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { OneColumnLayoutComponent } from './components/layouts/one-column/one-column.layout';
import { HeaderComponent } from './components/header/header.component';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component'
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
import { NbUserModule } from '@nebular/theme';
import { Store } from '@ngxs/Store'

export const LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];

@NgModule({
  declarations: [
    HeaderComponent,
    OneColumnLayoutComponent,
    ...LAYOUTS
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
    ThemeBasicModule,

    //ngx-admin
    NgxAdminSharedModule,


    ...LAYOUTS
  ],
  entryComponents: [...LAYOUTS],
})
export class NgxAdminBasicModule { }
