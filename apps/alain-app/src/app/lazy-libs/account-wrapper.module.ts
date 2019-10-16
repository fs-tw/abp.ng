import { NgModule, APP_INITIALIZER, Injectable, ModuleWithProviders } from '@angular/core';
import { AccountModule } from '@abp/ng.account';
import { Router } from '@angular/router';
import { RestService, noop, eLayoutType, addAbpRoutes } from '@abp/ng.core';
import { AccountConfigService } from '@abp/ng.account.config';
import { AccountWrapperRoutingModule } from './account-wrapper-routing.module';
import { UserLoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [UserLoginComponent, UserRegisterComponent],
    imports: [SharedModule, AccountWrapperRoutingModule,AccountModule]
})
export class AccountWrapperModule {
}

