import { NgModule, Injectable } from '@angular/core';
import { DelonModule, CoreModule as AlainCoreModule } from '@fs/alain';
import { HttpClient } from '@angular/common/http'; import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AlainSharedModule } from '@fs/alain/shared';
import { LAYOUTS } from '@abp/ng.theme.basic';
import { CoreModule as AbpCoreModule, RestService, addAbpRoutes, eLayoutType } from '@abp/ng.core';
import { environment } from '../../environments/environment';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { AccountConfigModule, AccountConfigService } from '@abp/ng.account.config';
import { IdentityConfigModule } from '@abp/ng.identity.config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management.config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management.config';
import { LayoutDefaultComponent , LayoutPassportComponent, LayoutFullScreenComponent } from '@fs/alain/basic';
import { Router } from '@angular/router';
// 加载i18n语言文件
export function I18nHttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, `assets/tmp/i18n/`, '.json');
}

const I18NSERVICE_MODULES = [
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: I18nHttpLoaderFactory,
            deps: [HttpClient],
        },
        isolate: true
    }),
];
const AlainLayouts = [LayoutDefaultComponent, LayoutPassportComponent, LayoutFullScreenComponent];

@NgModule({
    declarations: [
    ],
    imports: [
        ...I18NSERVICE_MODULES,
        //abp
        AbpCoreModule.forRoot({
            environment,
            requirements: {
                layouts: AlainLayouts,
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

        //ng-alain
        AlainCoreModule,
        DelonModule.forRoot(),
        //@fs/alain
        AlainSharedModule.forRoot(),
        //modules
    ],
    exports: [

    ]
})
export class CoreModule { }