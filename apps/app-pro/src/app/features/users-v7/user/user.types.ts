import { inject } from '@angular/core';
import { Proxy } from '../../../shared/types';
import { GetIdentityUsersInput, IdentityUserCreateDto, IdentityUserDto, IdentityUserService, IdentityUserUpdateDto } from '@volo/abp.ng.identity/proxy';

export const enum eUserPolicyNames {
  User = '',
}
export const enum eUserNames {
  User = 'UsersV7::User',
  DefaultsResourceName = 'AbpIdentity',
}

const S = IdentityUserService;
export type I = GetIdentityUsersInput;
export type R = IdentityUserDto;
export type C = IdentityUserCreateDto;
export type U = IdentityUserUpdateDto;

export const userProxy: Proxy<I, R, C, U> = {
  list: (getListInput) => inject(S).getList(getListInput),
  get: (id: string) => inject(S).get(id),
  create: (data) => inject(S).create(data),
  update: (id: string, data) => inject(S).update(id, data),
  delete: (id: string) => inject(S).delete(id),
};
