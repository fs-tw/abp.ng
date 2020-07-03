import { NgModule } from '@angular/core';
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { CoreModule as AbpCoreModule } from '@abp/ng.core';
import { environment } from '../../environments/environment';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { AccountConfigModule } from '@abp/ng.account.config';
import { IdentityConfigModule } from '@abp/ng.identity.config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management.config';
import { SettingManagementConfigModule } from '@fs/setting-management/config';
import {CodingManagementConfigModule} from '@fs/coding-management/config';
import { LayoutDefaultComponent, LayoutPassportComponent, LayoutFullScreenComponent } from '@fs/ng-alain/basic';
import {CoreModule as FSCoreModule} from '@fs/core';

const AlainLayouts = [LayoutDefaultComponent, LayoutPassportComponent, LayoutFullScreenComponent];

const LOGGERS = [NgxsLoggerPluginModule.forRoot({ disabled: false })];

const AbpModuleConfigs = [
  FSCoreModule.forRoot({layouts:AlainLayouts}),
  AccountConfigModule.forRoot({ redirectUrl: '/' }),
  IdentityConfigModule,
  TenantManagementConfigModule,
  SettingManagementConfigModule,
  CodingManagementConfigModule
]

@NgModule({
  declarations: [
  ],
  imports: [
    //abp
    AbpCoreModule.forRoot({
      environment,
    }),
    ThemeSharedModule.forRoot(),
    ...AbpModuleConfigs,
    NgxsModule.forRoot([]),

    ...(environment.production ? [] : LOGGERS),
    //ng-alain
    NgAlainSharedModule,
    //modules
  ],
  exports: [

  ],
  providers: [
    // { provide: AbpConfirmationService, useClass: ConfirmationService },
    // { provide: AbpToasterService, useClass: ToasterService }
  ]

})
export class CoreModule { }
