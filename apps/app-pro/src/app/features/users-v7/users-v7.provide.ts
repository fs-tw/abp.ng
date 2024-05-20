import {
  EnvironmentProviders,
  Provider,
  importProvidersFrom,
} from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { localizations } from './users-v7.localizations';
import { UsersV7Store } from './users-v7.store';

export const provideUsersV7 = (): Array<Provider | EnvironmentProviders> => {
  const providers: Array<Provider | EnvironmentProviders> = [
    importProvidersFrom([
      CoreModule.forChild({
        localizations: localizations,
      }),
    ]),
    UsersV7Store
  ];

  return providers;
};
