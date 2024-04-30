import { CoreModule } from '@abp/ng.core';
import {
  ENVIRONMENT_INITIALIZER,
  EnvironmentProviders,
  Provider,
  importProvidersFrom,
  inject,
} from '@angular/core';
import localizations from './demo.localizations';
import { MergeDefaultsDemo } from './demo.default';
import { ExtensionsService } from '@abp/ng.components/extensible';
import { provideDemoDetails } from './demo-details/demo-details.provide';
import { provideExternalLogin } from './external-login/external-login.provide';

export const provideDemo = (): Array<Provider | EnvironmentProviders> => {
  const providers: Array<Provider | EnvironmentProviders> = [
    provideDemoDetails(),
    provideExternalLogin(),

    importProvidersFrom(CoreModule.forChild({ localizations })),
    {
      provide: ENVIRONMENT_INITIALIZER,
      useValue: () => MergeDefaultsDemo(inject(ExtensionsService)),
      multi: true,
    },
    // {
    //   provide: ENVIRONMENT_INITIALIZER,
    //   useValue: () => inject(DemoTabsService).add([
    //     ExternalLoginTab,
    //     DemoDetailsTab
    //   ]),
    //   multi: true,
    // },
  ];

  return providers;
};
