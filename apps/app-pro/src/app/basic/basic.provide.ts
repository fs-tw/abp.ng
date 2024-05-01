import { CoreModule } from '@abp/ng.core';
import {
  inject,
  ENVIRONMENT_INITIALIZER,
  EnvironmentProviders,
  Provider,
  importProvidersFrom,
} from '@angular/core';
import localizations from './basic.localizations';
import { MergeDefaultsBasic } from './basic.default';
import { ExtensionsService } from '@abp/ng.components/extensible';
import { ExternalLoginTabsService } from './basic-tabs.service';
import { EmailSettingsTab } from './email-settings/email-settings.tab';
import { EmailSettingsV2Tab } from './email-settings-v2/email-settings-v2.tab';
import { provideEmailSettings } from './email-settings/email-settings.provide';
import { provideEmailSettingsV2 } from './email-settings-v2/email-settings-v2.provide';

export const provideBasic = (): Array<Provider | EnvironmentProviders> => {
  const providers: Array<Provider | EnvironmentProviders> = [
    importProvidersFrom(CoreModule.forChild({ localizations: localizations })),
    provideEmailSettings(),
    provideEmailSettingsV2(),
    {
      provide: ENVIRONMENT_INITIALIZER,
      useValue: () => inject(ExternalLoginTabsService).add([EmailSettingsTab, EmailSettingsV2Tab]),
      multi: true,
    },
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => MergeDefaultsBasic(inject(ExtensionsService)),
    },
  ];

  return providers;
};
