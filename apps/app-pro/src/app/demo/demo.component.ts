import { BaseNode, TreeAdapter, TreeModule } from '@abp/ng.components/tree';
import {
  ABP,
  ConfigStateService,
  CoreModule,
  ListService,
  PagedResultDto,
  SubscriptionService,
  TreeNode,
} from '@abp/ng.core';
import {
  Confirmation,
  ConfirmationService,
  ThemeSharedModule,
  ToasterService,
} from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import {
  Component,
  Injector,
  OnInit,
  TemplateRef,
  TrackByFunction,
  ViewChild,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  UntypedFormArray,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';
import {
  GetIdentityUsersInput,
  IdentityRoleDto,
  IdentityRoleService,
  IdentityUserDto,
  IdentityUserService,
  OrganizationUnitDto,
  OrganizationUnitService,
  OrganizationUnitWithDetailsDto,
} from '@volo/abp.ng.identity/proxy';
import { finalize, switchMap, take, tap } from 'rxjs/operators';
import { eDemoNames } from './demo.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageModule } from '@abp/ng.components/page';
import {
  AdvancedEntityFiltersModule,
  CommercialUiModule,
} from '@volo/abp.commercial.ng.ui';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoStateService } from './demo-state.service';
import { DemoTabsService } from './demo-tabs.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ClaimModalComponent } from './claim-modal/claim-modal.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import {
  StepBackwardOutline
} from '@ant-design/icons-angular/icons';

import { ExtensibleFormComponent } from '@fs-tw/theme.zorro/extensions'

const icons = [StepBackwardOutline];

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eDemoNames.Demo,
    }
  ],
  standalone: true,
  imports: [
    CoreModule,
    ThemeSharedModule,
    AdvancedEntityFiltersModule,
    CommercialUiModule,
    //IdentityModule,
    PageModule,
    TreeModule,
    PermissionManagementModule,
    NgbDropdownModule,
    NgbNavModule,
    ClaimModalComponent,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    ExtensibleFormComponent
  ]
})
export class DemoComponent implements OnInit {
  stateService = inject(DemoStateService);

  tabsService = inject(DemoTabsService);

  tabs: ABP.Tab[] = [];

  selectedTab!: ABP.Tab;

  protected readonly subscription = inject(SubscriptionService);
  readonly #roleCount = new BehaviorSubject<number>(0);

  protected userRoles!: IdentityRoleDto[];

  data: PagedResultDto<IdentityUserDto> = { items: [], totalCount: 0 };

  @ViewChild('modalContent')
  modalContent!: TemplateRef<any>;

  form!: UntypedFormGroup;

  selected!: IdentityUserDto;

  roles!: IdentityRoleDto[];

  selectedOrganizationUnits!: OrganizationUnitDto[];

  visiblePermissions = false;

  providerKey!: string;

  isModalVisible!: boolean;

  isSetPasswordModalVisible!: boolean;

  modalBusy = false;

  visibleClaims = false;

  claimSubject = {} as { id: string; type: 'roles' | 'users' };

  filters = {} as GetIdentityUsersInput;

  organization = {
    response: {} as PagedResultDto<OrganizationUnitWithDetailsDto>,
    nodes: [] as TreeNode<BaseNode>[],
    checkedKeys: [] as string[],
    expandedKeys: [] as string[],
    selectFn: () => false,
  };

  entityDisplayName: string | undefined;

  trackByFn: TrackByFunction<AbstractControl> = (index, item) =>
    Object.keys(item)[0] || index;

  private patchRoleCount(): void {
    this.#roleCount.next(
      this.rawRoleNames.filter((obj: any) => Object.values(obj).includes(true))
        .length
    );
  }

  private get rawRoleNames() {
    return this.form.controls['roleNames']?.getRawValue();
  }

  get roleGroups(): UntypedFormGroup[] {
    return (
      ((this.form.get('roleNames') as UntypedFormArray)
        ?.controls as UntypedFormGroup[]) || []
    );
  }

  get roleCount$(): Observable<number> {
    return this.#roleCount.asObservable();
  }

  constructor(
    public readonly list: ListService<GetIdentityUsersInput>,
    public confirmationService: ConfirmationService,
    public service: IdentityUserService,
    public fb: UntypedFormBuilder,
    public toasterService: ToasterService,
    public injector: Injector,
    public configState: ConfigStateService,
    public roleService: IdentityRoleService,
    public organizationUnitService: OrganizationUnitService
  ) {
    this.tabsService.visible$.pipe(takeUntilDestroyed()).subscribe((tabs) => {
      this.tabs = tabs.filter((x) => x.invisible !== true);

      if (!this.selectedTab) this.selectedTab = this.tabs[0];
    });
  }

  ngOnInit() {
    this.hookToQuery();
  }

  isFromOrgUnit = (roleId: string | undefined) =>
    this.selectedOrganizationUnits.some((org) =>
      org.roles.some((f) => f.roleId === roleId)
    );

  clearFilters() {
    this.filters = {} as GetIdentityUsersInput;
  }

  private hookToQuery() {
    this.list
      .hookToQuery((query) => {
        return this.service.getList({
          ...query,
          ...this.filters,
        });
      })
      .subscribe((res) => (this.data = res));
  }
  buildForm() {
    const data = new FormPropData(this.injector, this.selected);
    this.form = generateFormFromProps(data);

    this.service.getAssignableRoles().subscribe(({ items }) => {
      this.roles = items as IdentityRoleDto[];
      this.form.addControl(
        'roleNames',
        this.fb.array(
          this.roles.map((role) =>
            this.fb.group({
              [role.name as string]: [
                this.selected.id
                  ? !!this.userRoles?.find(
                    (userRole) => userRole.id === role.id
                  )
                  : role.isDefault,
              ],
            })
          )
        )
      );

      this.patchRoleCount();
      this.subscription.addOne(
        this.form.controls['roleNames'].valueChanges,
        () => this.patchRoleCount()
      );
    });

    this.service.getAvailableOrganizationUnits().subscribe((res) => {
      this.organization.response = res;
      this.organization.nodes = new TreeAdapter(
        res.items as BaseNode[]
      ).getTree();
      this.organization.expandedKeys = res.items?.map(
        (item) => item.id
      ) as string[];
      this.organization.checkedKeys = this.selectedOrganizationUnits.map(
        (unit) => unit.id
      ) as string[];
    });
  }
  openModal() {
    this.buildForm();
    this.isModalVisible = true;
  }

  onAdd() {
    this.selected = {} as IdentityUserDto;
    this.userRoles = [];
    this.selectedOrganizationUnits = [];
    this.openModal();
  }

  onEdit(id: string) {
    this.service
      .get(id)
      .pipe(
        tap((selectedUser) => (this.selected = selectedUser)),
        switchMap(() => this.service.getRoles(id)),
        tap((res) => (this.userRoles = res.items || [])),
        switchMap(() => this.service.getOrganizationUnits(id)),
        tap((res) => (this.selectedOrganizationUnits = res)),
        take(1)
      )
      .subscribe(() => this.openModal());
  }

  save() {
    if (!this.form.valid) return;
    this.modalBusy = true;
    const { roleNames } = this.form.value;
    const mappedRoleNames =
      roleNames
        ?.filter((role: any) => !!role[Object.keys(role)[0]])
        ?.map((role: any) => Object.keys(role)[0]) || [];

    const { id } = this.selected;

    (id
      ? this.service.update(id, {
        ...this.selected,
        ...this.form.value,
        roleNames: mappedRoleNames,
        organizationUnitIds: this.organization.checkedKeys,
      })
      : this.service.create({
        ...this.form.value,
        roleNames: mappedRoleNames,
        organizationUnitIds: this.organization.checkedKeys,
      })
    )
      .pipe(finalize(() => (this.modalBusy = false)))
      .subscribe(() => {
        this.list.get();
        this.isModalVisible = false;
      });
  }

  delete(id: string, userName: string) {
    this.confirmationService
      .warn(
        'AbpIdentity::UserDeletionConfirmationMessage',
        'AbpIdentity::AreYouSure',
        {
          messageLocalizationParams: [userName],
        }
      )
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          this.service.delete(id).subscribe(() => this.list.get());
        }
      });
  }

  onManageClaims(id: string) {
    this.claimSubject = {
      id,
      type: 'users',
    };

    this.visibleClaims = true;
  }

  unlock(id: string) {
    this.service.unlock(id).subscribe(() => {
      this.toasterService.success('AbpIdentity::UserUnlocked');
      this.list.get();
    });
  }
}
