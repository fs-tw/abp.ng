import { inject } from '@angular/core';
import { ICrudProxy } from '../../shared/types';
import { GetIdentityUsersInput, IdentityUserCreateDto, IdentityUserDto, IdentityUserService, IdentityUserUpdateDto } from '@abp/ng.identity/proxy';

export const enum eUsersPolicyNames {
  Users = '',
}
export const enum eUsersNames {
  Users = 'Users::Users',
  DefaultsResourceName = 'Users',
}

const S = IdentityUserService;
export type I = GetIdentityUsersInput;
export type R = IdentityUserDto;
export type C = IdentityUserCreateDto;
export type U = IdentityUserUpdateDto;

export const usersProxy: ICrudProxy<I, R, C, U> = {
  list: (getListInput) => inject(S).getList(getListInput),
  get: (id: string) => inject(S).get(id),
  create: (data) => inject(S).create(data),
  update: (id: string, data) => inject(S).update(id, data),
  delete: (id: string) => inject(S).delete(id),
};
