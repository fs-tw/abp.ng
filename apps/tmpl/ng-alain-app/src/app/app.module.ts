// tslint:disable: no-duplicate-imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ThemeNgAlainModule } from '@fs/theme.ng-alain';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { CoreModule } from '@abp/ng.core';
import { environment } from '../environments/environment';
import { SettingManagementNgAlainConfigModule } from '@fs/setting-management/ng-alain/config';
import { TenantManagementNgAlainConfigModule } from '@fs/tenant-management/ng-alain/config';
import { AppRoutingModule } from './app-routing.module';
import { AccountNgAlainConfigModule } from '@fs/account/ng-alain/config';
import { IdentityNgAlainConfigModule } from '@fs/identity/ng-alain/config';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';

const LOGGERS = [NgxsLoggerPluginModule.forRoot({ disabled: false })];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot({
      environment,
      sendNullsAsQueryParam: false,
      skipGetAppConfiguration: false,
    }),
    ThemeSharedModule.forRoot(),
    AccountNgAlainConfigModule.forRoot(),
    IdentityNgAlainConfigModule.forRoot(),
    TenantManagementNgAlainConfigModule.forRoot(),
    SettingManagementNgAlainConfigModule.forRoot(),
    NgxsModule.forRoot(),

    ThemeNgAlainModule.forRoot(),
    ...(environment.production ? [] : LOGGERS)

  ],
  providers: [APP_ROUTE_PROVIDER],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
