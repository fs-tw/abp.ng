import { inject } from '@angular/core';
import { Proxy } from '../../../shared/types';
import { GetIdentityRoleListInput, IdentityRoleCreateDto, IdentityRoleDto, IdentityRoleService, IdentityRoleUpdateDto } from '@volo/abp.ng.identity/proxy';

export const enum eRolePolicyNames {
  Role = '',
}
export const enum eRoleNames {
  Role = 'UsersV7::Role',
  DefaultsResourceName = 'AbpIdentity',
}

const S = IdentityRoleService;
export type I = GetIdentityRoleListInput;
export type R = IdentityRoleDto;
export type C = IdentityRoleCreateDto;
export type U = IdentityRoleUpdateDto;

export const roleProxy: Proxy<I, R, C, U> = {
  list: (getListInput) => inject(S).getList(getListInput),
  get: (id: string) => inject(S).get(id),
  create: (data) => inject(S).create(data),
  update: (id: string, data) => inject(S).update(id, data),
  delete: (id: string) => inject(S).delete(id),
};
