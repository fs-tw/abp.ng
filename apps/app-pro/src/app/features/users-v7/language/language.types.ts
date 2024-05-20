import { inject } from '@angular/core';
import { Proxy } from '../../../shared/types';
import { CreateLanguageDto, GetLanguagesTextsInput, LanguageDto, LanguageService, UpdateLanguageDto } from '@volo/abp.ng.language-management/proxy';

export const enum eLanguagePolicyNames {
  Language = '',
}
export const enum eLanguageNames {
  Language = 'UsersV7::Language',
  DefaultsResourceName = 'UsersV7',
}

const S = LanguageService;
export type I = GetLanguagesTextsInput;
export type R = LanguageDto;
export type C = CreateLanguageDto;
export type U = UpdateLanguageDto;

export const languageProxy: Proxy<I, R, C, U> = {
  list: (getListInput) => inject(S).getList(getListInput),
  get: (id: string) => inject(S).get(id),
  create: (data) => inject(S).create(data),
  update: (id: string, data) => inject(S).update(id, data),
  delete: (id: string) => inject(S).delete(id),
};
