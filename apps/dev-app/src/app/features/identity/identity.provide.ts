import { EnvironmentProviders, Provider } from '@angular/core';
import { provideAbpCoreChild } from '@abp/ng.core';
import { localizations } from './identity.localizations';

export const provideIdentity = (): Array<Provider | EnvironmentProviders> => {
  const providers: Array<Provider | EnvironmentProviders> = [
    provideAbpCoreChild({
      localizations: localizations,
    }),
  ];

  return providers;
};
