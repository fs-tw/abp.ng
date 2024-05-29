import { inject } from '@angular/core';
import { ICrudProxy } from '../../../../shared/types';
import { AuditLogDto, AuditLogsService, GetAuditLogListDto } from '@volo/abp.ng.audit-logging/proxy';
import { of } from 'rxjs';

export const enum eAuditLogsPolicyNames {
  AuditLogs = '',
}
export const enum eAuditLogsNames {
  AuditLogs = 'UsersV5::AuditLogs',
  DefaultsResourceName = 'UsersV5',
}

const S = AuditLogsService;
export type I = GetAuditLogListDto;
export type R = AuditLogDto;
export type C = any;
export type U = any;

export const auditLogsProxy: ICrudProxy<I, R, C, U> = {
  list: (getListInput) => inject(S).getList(getListInput),
  get: (id: string) => inject(S).get(id),
  create: (data) => of({} as AuditLogDto),
  update: (id: string, data) => of({} as AuditLogDto),
  delete: (id: string) => of(),
};
