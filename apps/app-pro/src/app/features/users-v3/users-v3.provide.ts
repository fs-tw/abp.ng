import {
  EnvironmentProviders,
  Provider,
  importProvidersFrom,
} from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { localizations } from './users-v3.localizations';
import { UsersV3Store } from './users-v3.store';

export const provideUsersV3 = (): Array<Provider | EnvironmentProviders> => {
  const providers: Array<Provider | EnvironmentProviders> = [
    importProvidersFrom([
      CoreModule.forChild({
        localizations: localizations,
      }),
    ]),
    UsersV3Store,
  ];

  return providers;
};
