import {
  EnvironmentProviders,
  importProvidersFrom,
  Inject,
  Provider,
} from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { environment } from '../environments/environment';
import { registerLocale } from '@volo/abp.ng.language-management/locale';
import { AbpOAuthModule } from '@abp/ng.oauth';
import { CommercialUiConfigModule } from '@volo/abp.commercial.ng.ui/config';
import { AccountAdminConfigModule } from '@volo/abp.ng.account/admin/config';
import { AccountPublicConfigModule } from '@volo/abp.ng.account/public/config';
import { IdentityConfigModule } from '@volo/abp.ng.identity/config';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
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
import {
  VALIDATION_BLUEPRINTS, Validation
} from '@ngx-validate/core';
import { Injector } from '@angular/core'

const configureValidate = (injector: Injector) => {

  return injector.get(VALIDATION_BLUEPRINTS);
}


export type AbpProviderConfig = {
  // config?: Config;
};

/**
 * Abp provider
 */
export const provideApp = (): Array<Provider | EnvironmentProviders> => {
  // Base providers
  const providers: Array<Provider | EnvironmentProviders> = [
    importProvidersFrom(
      CoreModule.forRoot({
        environment,
        registerLocaleFn: registerLocale(),
      })
    ),
    importProvidersFrom(AbpOAuthModule.forRoot()),


    importProvidersFrom(
      ThemeSharedModule.forRoot({
        httpErrorConfig: {
          errorScreen: {
            component: HttpErrorComponent,
            forWhichErrors: [401, 403, 404, 500],
            hideCloseIcon: true,
          },
        },
      })
    ),
    importProvidersFrom(AccountAdminConfigModule.forRoot()),
    importProvidersFrom(AccountPublicConfigModule.forRoot()),
    importProvidersFrom(AccountLayoutModule.forRoot()),
    importProvidersFrom(IdentityConfigModule.forRoot()),

    importProvidersFrom(LanguageManagementConfigModule.forRoot()),
    importProvidersFrom(SaasConfigModule.forRoot()),
    importProvidersFrom(AuditLoggingConfigModule.forRoot()),
    importProvidersFrom(OpeniddictproConfigModule.forRoot()),
    importProvidersFrom(TextTemplateManagementConfigModule.forRoot()),

    importProvidersFrom(SettingManagementConfigModule.forRoot()),
    importProvidersFrom(ThemeLeptonXModule.forRoot()),
    importProvidersFrom(SideMenuLayoutModule.forRoot()),
    importProvidersFrom(CommercialUiConfigModule.forRoot()),
    importProvidersFrom(FeatureManagementModule.forRoot()),
    importProvidersFrom(
      GdprConfigModule.forRoot({
        cookieConsent: {
          privacyPolicyUrl: 'gdpr-cookie-consent/privacy',
          cookiePolicyUrl: 'gdpr-cookie-consent/cookie',
        },
      })
    )
  ];

  // Return the providers
  return providers;
};