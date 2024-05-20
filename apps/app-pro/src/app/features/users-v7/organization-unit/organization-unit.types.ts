import { inject } from '@angular/core';
import { Proxy } from '../../../shared/types';
import { GetOrganizationUnitInput, OrganizationUnitCreateDto, OrganizationUnitService, OrganizationUnitUpdateDto, OrganizationUnitWithDetailsDto } from '@volo/abp.ng.identity/proxy';

export const enum eOrganizationUnitPolicyNames {
  OrganizationUnit = '',
}
export const enum eOrganizationUnitNames {
  OrganizationUnit = 'UsersV7::OrganizationUnit',
  DefaultsResourceName = 'AbpIdentity',
}

const S = OrganizationUnitService;
export type I = GetOrganizationUnitInput;
export type R = OrganizationUnitWithDetailsDto;
export type C = OrganizationUnitCreateDto;
export type U = OrganizationUnitUpdateDto;

export const organizationUnitProxy: Proxy<I, R, C, U> = {
  list: (getListInput) => inject(S).getList(getListInput),
  get: (id: string) => inject(S).get(id),
  create: (data) => inject(S).create(data),
  update: (id: string, data) => inject(S).update(id, data),
  delete: (id: string) => inject(S).delete(id),
};
