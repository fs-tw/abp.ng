import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  ExtensibleModule,
} from '@abp/ng.components/extensible';
import { Component, inject } from '@angular/core';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { PageModule } from '@abp/ng.components/page';
import { AdvancedEntityFiltersModule } from '@volo/abp.commercial.ng.ui';
import { eAuditLogsNames } from './audit-logs.types';
import { AuditLogsStore } from './audit-logs.store';

@Component({
  selector: 'app-audit-logs',
  templateUrl: './audit-logs.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eAuditLogsNames.AuditLogs,
    },
    AuditLogsStore,
  ],
  standalone: true,
  imports: [
    CoreModule,
    ThemeSharedModule,
    ExtensibleModule,
    PermissionManagementModule,
    PageModule,
    AdvancedEntityFiltersModule,
  ],
})
export class AuditLogsComponent {
  auditLogsStore = inject(AuditLogsStore);
  auditLogsListService = this.auditLogsStore.getAuditLogsListService();
}
