import { NgModule, Injectable, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CoreModule as NgxAdminCoreModule } from '@fs/ngx-admin';
import { HttpClient } from '@angular/common/http'; import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { LAYOUTS } from '@abp/ng.theme.basic';
import { CoreModule as AbpCoreModule, RestService, addAbpRoutes, eLayoutType } from '@abp/ng.core';
import { environment } from '../../environments/environment';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { AccountConfigModule } from '@fs/account/ngx-admin/config';
import { IdentityConfigModule } from '@abp/ng.identity.config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management.config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management.config';
import { ApplicationLayoutComponent } from '@fs/ngx-admin/basic';
import { Router } from '@angular/router';
import { ThemeModule } from '@fs/ngx-admin';
import { NbSidebarModule, NbMenuModule, NbDatepickerModule, NbDialogModule, NbWindowModule, NbToastrModule, NbChatModule } from '@nebular/theme';
import { NbAuthComponent, NbAuthModule } from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LAYOUTS as NgxAdminLayouts } from '@fs/ngx-admin/basic'

@NgModule({
  declarations: [

  ],
  providers: [
  ],
  imports: [
    //abp
    AbpCoreModule.forRoot({
      environment,
      requirements: {
        layouts: NgxAdminLayouts,
      },
    }),
    ThemeSharedModule.forRoot(),
    AccountConfigModule.forRoot({ redirectUrl: '/' }),
    IdentityConfigModule,
    TenantManagementConfigModule,
    SettingManagementConfigModule,
    OAuthModule.forRoot(),
    NgxsModule.forRoot([]),

    NgxsReduxDevtoolsPluginModule.forRoot(),

    //ngx-admin
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    NgxAdminCoreModule.forRoot(),
    NbEvaIconsModule
    //modules
  ],
  exports: [
  ]
})
export class CoreModule {
}
