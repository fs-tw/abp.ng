import {
  EnvironmentProviders,
  importProvidersFrom,
  Provider,
  LOCALE_ID
} from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { environment } from '../environments/environment';
// import { registerLocale } from '@volo/abp.ng.language-management/locale';
import { registerLocale } from './register-locale';
import { AbpOAuthModule } from '@abp/ng.oauth';
import { CommercialUiConfigModule } from '@volo/abp.commercial.ng.ui/config';
import { AccountAdminConfigModule } from '@volo/abp.ng.account/admin/config';
import { AccountPublicConfigModule } from '@volo/abp.ng.account/public/config';
import { IdentityConfigModule } from '@volo/abp.ng.identity/config';
import {
  ThemeSharedModule,
  InternetConnectionStatusComponent,
} from '@abp/ng.theme.shared';
import { FeatureManagementModule } from '@abp/ng.feature-management';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import {
  HttpErrorComponent,
  ThemeLeptonXModule,
} from '@volosoft/abp.ng.theme.lepton-x';
import { AccountLayoutModule } from '@volosoft/abp.ng.theme.lepton-x/account';
import { SideMenuLayoutModule } from '@volosoft/abp.ng.theme.lepton-x/layouts';
import { LanguageManagementConfigModule } from '@volo/abp.ng.language-management/config';
import { SaasConfigModule } from '@volo/abp.ng.saas/config';
import { AuditLoggingConfigModule } from '@volo/abp.ng.audit-logging/config';
import { OpeniddictproConfigModule } from '@volo/abp.ng.openiddictpro/config';
import { TextTemplateManagementConfigModule } from '@volo/abp.ng.text-template-management/config';
import { GdprConfigModule } from '@volo/abp.ng.gdpr/config';

import zh from '@angular/common/locales/zh';
import en from '@angular/common/locales/en';
import { zh_TW, en_US, NZ_I18N } from 'ng-zorro-antd/i18n';

export type AbpProviderConfig = {
  // config?: Config;
};

/**
 * Abp provider
 */
export const provideApp = (): Array<Provider | EnvironmentProviders> => {
  // Base providers
  const providers: Array<Provider | EnvironmentProviders> = [
    importProvidersFrom([
      CoreModule.forRoot({
        environment,
        registerLocaleFn: registerLocale(),
      }),
      AbpOAuthModule.forRoot(),
      ThemeSharedModule.forRoot(),
      AccountAdminConfigModule.forRoot(),
      AccountPublicConfigModule.forRoot(),
      IdentityConfigModule.forRoot(),
      LanguageManagementConfigModule.forRoot(),
      SaasConfigModule.forRoot(),
      AuditLoggingConfigModule.forRoot(),
      OpeniddictproConfigModule.forRoot(),
      TextTemplateManagementConfigModule.forRoot(),
      SettingManagementConfigModule.forRoot(),

      CommercialUiConfigModule.forRoot(),
      FeatureManagementModule.forRoot(),
      GdprConfigModule.forRoot({
        privacyPolicyUrl: 'gdpr-cookie-consent/privacy',
        cookiePolicyUrl: 'gdpr-cookie-consent/cookie',
      }),
      ThemeLeptonXModule.forRoot(),
      SideMenuLayoutModule.forRoot(),
    ]),
    InternetConnectionStatusComponent,
    {
      provide: NZ_I18N,
      useFactory: (localId: {
        localizationService: { latestLang: string };
      }) => {
        switch (localId.localizationService.latestLang) {
          case 'en':
            return en_US;
          case 'zh_Hant':
            return zh_TW;
          default:
            return zh_TW;
        }
      },
      deps: [LOCALE_ID],
    },
  ];

  // Return the providers
  return providers;
};
