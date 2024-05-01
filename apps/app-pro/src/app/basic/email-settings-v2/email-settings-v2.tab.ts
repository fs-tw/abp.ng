import { ABP } from '@abp/ng.core';
import { EmailSettingsV2Component } from './email-settings-v2.component';
import {
  eEmailSettingsV2Names,
  eEmailSettingsV2PolicyNames,
} from './email-settings-v2.model';

export const EmailSettingsV2Tab: ABP.Tab = {
  name: eEmailSettingsV2Names.EmailSettingsV2,
  order: 2,
  requiredPolicy: eEmailSettingsV2PolicyNames.EmailSettingsV2,
  component: EmailSettingsV2Component,
};
