import { CoreModule } from '@abp/ng.core';
import {
  EnvironmentProviders,
  Provider,
  importProvidersFrom,
} from '@angular/core';
import localizations from './two-factor.localizations';

export const provideTwoFactor = (): Array<Provider | EnvironmentProviders> => {
  const providers: Array<Provider | EnvironmentProviders> = [
    importProvidersFrom(CoreModule.forChild({ localizations: localizations })),
  ];

  return providers;
};
