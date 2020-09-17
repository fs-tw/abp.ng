// tslint:disable: no-duplicate-imports
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgAlainModule } from '@fs/ng-alain';
import { SharedModule } from './shared/shared.module';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { CoreModule } from '@abp/ng.core';
import { environment } from '../environments/environment';
import { SettingManagementNgAlainConfigModule } from '@fs/setting-management/ng-alain/config';
import { CodingManagementNgAlainConfigModule } from '@fs/coding-management/ng-alain/config';
import { TenantManagementNgAlainConfigModule } from '@fs/tenant-management/ng-alain/config';
import { AppRoutingModule } from './app-routing.module';
import { AccountNgAlainConfigModule } from '@fs/account/ng-alain/config';
import { IdentityNgAlainConfigModule } from '@fs/identity/ng-alain/config';


const LOGGERS = [NgxsLoggerPluginModule.forRoot({ disabled: false })];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgAlainModule.forRoot(),
    SharedModule,
    // RoutesModule,
    AppRoutingModule,
    CoreModule.forRoot({
      environment,
      sendNullsAsQueryParam: false,
      skipGetAppConfiguration: false,
    }),
    AccountNgAlainConfigModule.forRoot(),
    IdentityNgAlainConfigModule.forRoot(),
    TenantManagementNgAlainConfigModule.forRoot(),
    SettingManagementNgAlainConfigModule.forRoot(),
    CodingManagementNgAlainConfigModule.forRoot(),
    NgxsModule.forRoot(),
    ...(environment.production ? [] : LOGGERS)


  ],
  providers: [
    APP_ROUTE_PROVIDER
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
