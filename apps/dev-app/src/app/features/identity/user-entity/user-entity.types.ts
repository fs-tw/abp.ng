import { inject } from '@angular/core';
import { ICrudProxy } from '../../../shared/types';
import { GetIdentityUsersInput, IdentityUserCreateDto, IdentityUserDto, IdentityUserService, IdentityUserUpdateDto } from '@abp/ng.identity/proxy';

const S = IdentityUserService;
export type I = GetIdentityUsersInput;
export type R = IdentityUserDto;
export type C = IdentityUserCreateDto;
export type U = IdentityUserUpdateDto;

export const enum eUserEntityPolicyNames {
  UserEntity = '',
}
export const enum eUserEntityNames {
  UserEntity = 'Identity::UserEntity',
}

export const userEntityProxy: ICrudProxy<I, R, C, U> = {
  list: (getListInput) => inject(S).getList(getListInput),
  get: (id: string) => inject(S).get(id),
  create: (data) => inject(S).create(data),
  update: (id: string, data) => inject(S).update(id, data),
  delete: (id: string) => inject(S).delete(id),
};
