import { EmailSettingsService, EmailSettingsDto, UpdateEmailSettingsDto } from '@abp/ng.setting-management/proxy';
import { inject } from '@angular/core';

export const enum eEmailSettingFormPolicyNames {
  EmailSettingForm = '',
}
export enum eEmailSettingFormNames {
  EmailSettingForm = 'UsersV3::EmailSettingForm',
  DefaultsResourceName = 'UsersV3',
}

export const S = EmailSettingsService;
export type I = any;
export type R = EmailSettingsDto;
export type C = UpdateEmailSettingsDto;
export type U = any;

export const emailSettingFormProxy = {
  fill: (input: I | void) => inject(S).get(input),
  send: (input: C) => inject(S).update(input),
};
