import { CoreModule } from '@abp/ng.core';
import {
  ENVIRONMENT_INITIALIZER,
  EnvironmentProviders,
  Provider,
  importProvidersFrom,
  inject,
} from '@angular/core';
import localizations from './demo-details.localizations';
import { DemoDetailsTabsService } from './demo-details-tabs.service';
import { LockTab } from './lock/lock.tab';
import { SetPasswordTab } from './set-password/set-password.tab';
import { TwoFactorTab } from './two-factor/two-factor.tab';
import { provideLock } from './lock/lock.provide';
import { provideSetPassword } from './set-password/set-password.provide';
import { provideTwoFactor } from './two-factor/two-factor.provide';

export const provideDemoDetails = (): Array<
  Provider | EnvironmentProviders
> => {
  const providers: Array<Provider | EnvironmentProviders> = [
    importProvidersFrom(CoreModule.forChild({ localizations: localizations })),
    provideLock(),
    provideSetPassword(),
    provideTwoFactor(),
    {
      provide: ENVIRONMENT_INITIALIZER,
      useValue: () =>
        inject(DemoDetailsTabsService).add([
          LockTab,
          SetPasswordTab,
          TwoFactorTab,
        ]),
      multi: true,
    },
  ];

  return providers;
};
