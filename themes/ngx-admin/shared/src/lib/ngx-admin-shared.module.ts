import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NbAuthModule } from '@nebular/auth';
import { NbMenuModule, NbIconModule } from '@nebular/theme';
import { ThemeModule } from '@fs/ngx-admin';

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
    NbAuthModule,
    NbMenuModule,
    ThemeModule,
    NbIconModule
    
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
