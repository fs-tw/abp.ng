import {
  EnvironmentProviders,
  Provider,
  importProvidersFrom,
} from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { localizations } from './users.localizations';
import { UsersStore } from './users.store';
import { RoutesService } from '../../shared/tabs.service';

export const provideUsers = (): Array<Provider | EnvironmentProviders> => {
  const providers: Array<Provider | EnvironmentProviders> = [
    importProvidersFrom([
      CoreModule.forChild({
        localizations: localizations,
      }),
    ]),
    UsersStore,
    RoutesService,
  ];

  return providers;
};
