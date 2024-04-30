import { BaseNode, TreeAdapter } from '@abp/ng.components/tree';
import {
  CoreModule,
  PagedResultDto,
  SubscriptionService,
  TreeNode,
} from '@abp/ng.core';
import { TreeModule } from '@abp/ng.components/tree';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import {
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.components/extensible';
import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TrackByFunction,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  UntypedFormArray,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';
import {
  IdentityRoleDto,
  IdentityUserDto,
  IdentityUserService,
  OrganizationUnitDto,
  OrganizationUnitWithDetailsDto,
} from '@volo/abp.ng.identity/proxy';
import { finalize, switchMap, take, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-demo-modal',
  templateUrl: './demo-modal.component.html',
  standalone: true,
  imports: [
    CoreModule,
    ThemeSharedModule,
    CommercialUiModule,
    TreeModule,
    NgbDropdownModule,
    NgbNavModule,
  ],
})
export class DemoModalComponent implements OnChanges {
  protected _visible = false;

  @Input()
  id?: string;

  @Input()
  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    if (this._visible === value) return;

    this._visible = value;
    this.visibleChange.emit(value);
  }

  @Output()
  visibleChange = new EventEmitter<boolean>();

  @Output()
  saved = new EventEmitter<boolean>();

  protected readonly subscription = inject(SubscriptionService);
  readonly #roleCount = new BehaviorSubject<number>(0);

  protected userRoles!: IdentityRoleDto[];

  form!: UntypedFormGroup;

  selected!: IdentityUserDto;

  roles!: IdentityRoleDto[];

  selectedOrganizationUnits!: OrganizationUnitDto[];

  modalBusy = false;

  organization = {
    response: {} as PagedResultDto<OrganizationUnitWithDetailsDto>,
    nodes: [] as TreeNode<BaseNode>[],
    checkedKeys: [] as string[],
    expandedKeys: [] as string[],
    selectFn: () => false,
  };

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
    public service: IdentityUserService,
    public fb: UntypedFormBuilder,
    public injector: Injector
  ) {}
  ngOnChanges({ visible, id }: SimpleChanges): void {
    if (!visible) return;

    if (visible.currentValue) {
      if (id?.currentValue) this.onEdit(id.currentValue);
      else this.onAdd();
    }
  }

  initModal() {
    this.buildForm();
  }

  isFromOrgUnit = (roleId: string | undefined) =>
    this.selectedOrganizationUnits.some((org) =>
      org.roles.some((f) => f.roleId === roleId)
    );

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

  onAdd() {
    this.selected = {} as IdentityUserDto;
    this.userRoles = [];
    this.selectedOrganizationUnits = [];
    this.buildForm();
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
      .subscribe(() => this.buildForm());
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
        this.saved.emit();
        this.visible = false;
      });
  }
}
