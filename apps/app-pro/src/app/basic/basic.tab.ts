import { ABP } from '@abp/ng.core';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
// import {
//   eEmailSettingsNames,
//   eEmailSettingsPolicyNames,
// } from './email-settings.model';

export const EmailSettingsTab: ABP.Tab = {
  name: 'eEmailSettingsNames.EmailSettings',
  order: 1,
  requiredPolicy: 'eEmailSettingsPolicyNames.EmailSettings',
  component: EmailSettingsComponent,
};
