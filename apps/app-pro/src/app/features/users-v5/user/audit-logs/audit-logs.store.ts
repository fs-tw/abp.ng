import { signalStore, withHooks } from '@ngrx/signals';
import { withAuditLogs } from './audit-logs.feature';

export const AuditLogsStore = signalStore(
  withAuditLogs(),
  withHooks({
    onInit() {
      console.log('AuditLogsStore initialized');
    },
  })
);
