import { CoreModule } from '@abp/ng.core';
import {
  EnvironmentProviders,
  Provider,
  importProvidersFrom,
} from '@angular/core';
import localizations from './set-password.localizations';

export const provideSetPassword = (): Array<
  Provider | EnvironmentProviders
> => {
  const providers: Array<Provider | EnvironmentProviders> = [
    importProvidersFrom(CoreModule.forChild({ localizations: localizations })),
  ];

  return providers;
};
