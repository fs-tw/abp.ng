import { CoreModule, ListService } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  GetIdentityUsersInput,
  IdentityRoleService,
  IdentityUserService,
  OrganizationUnitService,
} from '@volo/abp.ng.identity/proxy';
import { PageModule } from '@abp/ng.components/page';
import {
  AdvancedEntityFiltersModule,
  CommercialUiModule,
} from '@volo/abp.commercial.ng.ui';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  providers: [
    ListService,
    //DemoListStateService
    // {
    //   provide: EXTENSIONS_IDENTIFIER,
    //   useValue: eDemoNames.Demo,
    // },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CoreModule,
    ThemeSharedModule,
    AdvancedEntityFiltersModule,
    CommercialUiModule,
    PageModule,
  ],
})
export class DemoListComponent {
  list = inject(ListService<GetIdentityUsersInput>);

  data = toSignal(
    this.list.hookToQuery((query) => {
      return this.service.getList({
        ...query,
        ...this.filters(),
      });
    }),
    { initialValue: { items: [], totalCount: 0 } }
  );

  filters = signal<GetIdentityUsersInput>({} as GetIdentityUsersInput);

  constructor(
    public service: IdentityUserService,
    public roleService: IdentityRoleService,
    public organizationUnitService: OrganizationUnitService
  ) {}

  clearFilters() {
    this.filters.set({} as GetIdentityUsersInput);
  }
}