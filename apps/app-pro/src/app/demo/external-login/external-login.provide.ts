import { CoreModule } from '@abp/ng.core';
import {
  inject,
  ENVIRONMENT_INITIALIZER,
  EnvironmentProviders,
  Provider,
  importProvidersFrom,
} from '@angular/core';
import { provideEmailSettings } from './email-settings/email-settings.provide';
import localizations from './external-login.localizations';
import { ExternalLoginTabsService } from './external-login-tabs.service';
import { EmailSettingsTab } from './email-settings/email-settings.tab';

export const provideExternalLogin = (): Array<
  Provider | EnvironmentProviders
> => {
  const providers: Array<Provider | EnvironmentProviders> = [
    importProvidersFrom(CoreModule.forChild({ localizations: localizations })),
    provideEmailSettings(),
    {
      provide: ENVIRONMENT_INITIALIZER,
      useValue: () => inject(ExternalLoginTabsService).add([EmailSettingsTab]),
      multi: true,
    },
  ];

  return providers;
};
