import {
  EnvironmentProviders,
  Provider,
  importProvidersFrom,
} from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { localizations } from './users-v5.localizations';
import { UsersV5Store } from './users-v5.store';

export const provideUsersV5 = (): Array<Provider | EnvironmentProviders> => {
  const providers: Array<Provider | EnvironmentProviders> = [
    importProvidersFrom([
      CoreModule.forChild({
        localizations: localizations,
      }),
    ]),
    UsersV5Store,
  ];

  return providers;
};
