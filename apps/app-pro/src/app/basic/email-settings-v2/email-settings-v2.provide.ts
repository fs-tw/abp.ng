import { CoreModule } from '@abp/ng.core';
import {
  EnvironmentProviders,
  Provider,
  importProvidersFrom,
} from '@angular/core';
import localizations from './email-settings-v2.localizations';

export const provideEmailSettingsV2 = (): Array<
  Provider | EnvironmentProviders
> => {
  const providers: Array<Provider | EnvironmentProviders> = [
    importProvidersFrom(CoreModule.forChild({ localizations: localizations })),
  ];

  return providers;
};
