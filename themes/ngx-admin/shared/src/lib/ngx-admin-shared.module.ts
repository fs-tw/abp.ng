import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NbAuthModule } from '@nebular/auth';
import { NbMenuModule, NbIconModule, NbAlertModule, NbInputModule, NbButtonModule, NbCheckboxModule, NbCardModule, NbActionsModule, NbLayoutModule, NbSidebarModule, NbSelectModule, NbSearchModule, NbContextMenuModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from '@fs/ngx-admin';
import { NbSecurityModule } from '@nebular/security';

@NgModule({
  imports: [
    CommonModule,
    //abp,
    CoreModule,
    ThemeSharedModule,
    //ngx-admin
    NbAuthModule,
    NbMenuModule,
    ThemeModule
    
  ],
  exports: [
    //abp,
    ThemeSharedModule,
    //ngx-admin
    ThemeModule,
    NbLayoutModule,
    NbSidebarModule,
    NbSelectModule,
    NbSearchModule,
    NbAuthModule,
    NbMenuModule,
    NbIconModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbCardModule,
    NbActionsModule,
    NbSecurityModule,
    NbContextMenuModule
    
  ]
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
