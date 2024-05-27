import { EmailSettingsService, EmailSettingsDto, UpdateEmailSettingsDto } from '@abp/ng.setting-management/proxy';
import { inject } from '@angular/core';

export const enum eEmailSettingsFormPolicyNames {
  EmailSettingsForm = '',
}
export enum eEmailSettingsFormNames {
  EmailSettingsForm = 'UsersV7::EmailSettingsForm',
  EmailSettingsFormTop = 'UsersV7::EmailSettingsFormTop',
  EmailSettingsFormBotton = 'UsersV7::EmailSettingsFormBotton',
  DefaultsResourceName = 'UsersV7',
}

export const S = EmailSettingsService;
export type I = any;
export type R = EmailSettingsDto;
export type C = any;
export type U = UpdateEmailSettingsDto;

export const emailSettingsFormProxy = {
  fill: (input: I | void) => inject(S).get(input),
  send: (input: U) => inject(S).update(input),
};