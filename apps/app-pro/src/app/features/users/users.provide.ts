import { EnvironmentProviders, Provider } from '@angular/core';
import { UsersStore } from './users.store';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.components/extensible';
import { eRoleNames } from './role/role.model';

export const provideUsers = (): Array<Provider | EnvironmentProviders> => {
  const providers: Array<Provider | EnvironmentProviders> = [
    UsersStore,
    // {
    //   provide: EXTENSIONS_IDENTIFIER,
    //   useValue: eRoleNames.Role,
    // },
  ];

  return providers;
};
