import { inject } from '@angular/core';
import { ICrudProxy } from '../../../shared/types';
import { IdentityUserService, GetIdentityUsersInput, IdentityUserDto, IdentityUserCreateDto, IdentityUserUpdateDto } from '@volo/abp.ng.identity/proxy';

export const enum eUserPolicyNames {
  User = '',
}
export const enum eUserNames {
  User = 'UsersV3::User',
  DefaultsResourceName = 'UsersV3',
}

const S = IdentityUserService;
export type I = GetIdentityUsersInput;
export type R = IdentityUserDto;
export type C = IdentityUserCreateDto;
export type U = IdentityUserUpdateDto;

export const userProxy: ICrudProxy<I, R, C, U> = {
  list: (getListInput) => inject(S).getList(getListInput),
  get: (id: string) => inject(S).get(id),
  create: (data) => inject(S).create(data),
  update: (id: string, data) => inject(S).update(id, data),
  delete: (id: string) => inject(S).delete(id),
};
