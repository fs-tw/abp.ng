import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ClaimTypeDto,
  IdentityRoleClaimDto,
  IdentityRoleService,
  IdentityUserClaimDto,
  IdentityUserService,
} from '@volo/abp.ng.identity/proxy';
import { Observable } from 'rxjs';
import { finalize, take } from 'rxjs/operators';
import { CoreModule, SubscriptionService } from '@abp/ng.core';
import {
  FormGroupDirective,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ThemeSharedModule } from '@abp/ng.theme.shared';

type Claim = IdentityUserClaimDto | IdentityRoleClaimDto;

type ClaimTypes = Claim & { inputType?: string };
@Component({
  selector: 'app-claim-modal',
  templateUrl: './claim-modal.component.html',
  providers: [SubscriptionService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CoreModule, ThemeSharedModule],
})
export class ClaimModalComponent implements OnChanges {
  protected _visible = false;

  @Input()
  subject!: { id: string; type: 'roles' | 'users' };

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

  modalBusy = false;

  claimTypes!: ClaimTypeDto[];

  inputType = 'String';

  subjectClaims!: ClaimTypes[];

  service!: IdentityRoleService | IdentityUserService;

  form!: UntypedFormGroup;

  constructor(
    private roleService: IdentityRoleService,
    private userService: IdentityUserService,
    private subscription: SubscriptionService,
    private fb: UntypedFormBuilder
  ) {}

  ngOnChanges({ visible, subject }: SimpleChanges) {
    if (subject && subject.currentValue) {
      this.service =
        subject.currentValue.type === 'roles'
          ? this.roleService
          : this.userService;
    }

    if (!visible) return;

    if (visible.currentValue) this.initModal();
    else {
      this.subjectClaims = [];
    }
  }

  initModal() {
    this.buildForm();
    this.getClaimTypeNames();
    this.getSubjectClaims(this.subject);
  }

  claimTypeChange(item?: any) {
    let inputType: string;
    let subjectInputType = '';
    if (item) {
      inputType = this.claimTypes.find((claim) => claim.name == item)
        ?.valueTypeAsString as string;
    } else {
      inputType = this.claimTypes.find(
        (claim) => claim.name == this.form.controls['claimType'].value
      )?.valueTypeAsString as string;
    }

    switch (inputType) {
      case 'Int':
        this.inputType = 'Number';
        subjectInputType = 'Number';
        break;
      case 'Boolean':
        this.inputType = 'Boolean';
        subjectInputType = 'Boolean';
        break;
      case 'String':
        this.inputType = 'String';
        subjectInputType = 'String';
        break;
      case 'DateTime':
        this.inputType = 'datetime-local';
        subjectInputType = 'datetime-local';
        break;
    }
    return subjectInputType;
  }

  private getClaimTypeNames() {
    this.subscription.addOne(this.service.getAllClaimTypes(), (claimTypes) => {
      this.claimTypes = claimTypes;
    });
  }

  private getSubjectClaims(subject: { id: string; type: 'roles' | 'users' }) {
    this.subscription.addOne(
      (this.service.getClaims(subject.id) as Observable<Claim[]>).pipe(take(1)),
      (claims) => {
        this.subjectClaims = claims.map((item) => ({
          ...item,
          inputType: this.claimTypeChange(item.claimType),
        }));
      }
    );
  }

  addClaim(ngForm: FormGroupDirective) {
    if (this.form.invalid) {
      return;
    }
    const key = this.subject.type === 'roles' ? 'roleId' : 'userId';
    const claim: IdentityRoleClaimDto = {
      [key]: this.subject.id,
      ...this.form.value,
      inputType: this.inputType,
    };
    this.subjectClaims.push(claim);
    ngForm.resetForm();
    setTimeout(() => {
      this.form.reset();
    }, 0);
  }

  removeClaim(index: any) {
    if (!this.subjectClaims[index]) return;

    this.subjectClaims = this.subjectClaims.filter((_, i) => i !== index);
  }

  save() {
    if (this.modalBusy) return;

    this.modalBusy = true;

    this.subscription.addOne(
      this.service.updateClaims(this.subject.id, this.subjectClaims).pipe(
        take(1),
        finalize(() => (this.modalBusy = false))
      ),
      () => (this.visible = false)
    );
  }

  private buildForm() {
    this.form = this.fb.group({
      claimType: ['', [Validators.required]],
      claimValue: ['', [Validators.required]],
    });
  }
}
