import { ABP, CoreModule, ListService, PagedResultDto } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  ExtensibleModule,
} from '@abp/ng.components/extensible';
import { Component, OnInit, TrackByFunction, inject } from '@angular/core';
import {
  IdentityRoleDto,
} from '@volo/abp.ng.identity/proxy';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { PageModule } from '@abp/ng.components/page';

import { eBasicNames } from './basic.model';
import { AdvancedEntityFiltersModule } from '@volo/abp.commercial.ng.ui';
import { ExternalLoginTabsService } from './basic-tabs.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eBasicNames.Basic,
    },
  ],
  standalone: true,
  imports: [
    CoreModule,
    ThemeSharedModule,
    ExtensibleModule,
    PermissionManagementModule,
    PageModule,
  ],
})
export class BasicComponent implements OnInit {
  tabsService = inject(ExternalLoginTabsService);

  trackByFn: TrackByFunction<ABP.Tab> = (_, item) => item.name;
  ngOnInit() {
    const i = 1;
  }
}
