import { CoreModule } from '@abp/ng.core';
import {
  EnvironmentProviders,
  Provider,
  importProvidersFrom,
} from '@angular/core';
import localizations from './demo.localizations';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  StepBackwardOutline
} from '@ant-design/icons-angular/icons';

const icons = [StepBackwardOutline];

export const provideDemo = (): Array<Provider | EnvironmentProviders> => {
  const providers: Array<Provider | EnvironmentProviders> = [
    importProvidersFrom(CoreModule.forChild({ localizations: localizations })),
    importProvidersFrom(NzIconModule.forChild(icons)),

  ];

  return providers;
};
