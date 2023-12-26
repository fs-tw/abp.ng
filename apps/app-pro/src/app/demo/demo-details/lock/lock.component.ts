import {
  collapse,
  ThemeSharedModule,
  ToasterService,
} from '@abp/ng.theme.shared';
import { Component, inject, Injector, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { PageModule } from '@abp/ng.components/page';
import { CoreModule } from '@abp/ng.core';
import { IdentityUserService } from '@volo/abp.ng.identity/proxy';
import { DemoDetailsStateService } from '../demo-details-state.service';
import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';

@Component({
  selector: 'app-lock',
  templateUrl: 'lock.component.html',
  animations: [collapse],
  standalone: true,
  imports: [CoreModule, ThemeSharedModule, PageModule],
})
export class LockComponent implements OnInit {
  public injector = inject(Injector);
  private fb = inject(UntypedFormBuilder);
  public service = inject(IdentityUserService);
  public stateService = inject(DemoDetailsStateService);
  private toasterService = inject(ToasterService);

  lockForm!: UntypedFormGroup;

  saving = false;

  dateTimePickerProps = FormProp.create({
    displayName: 'AbpIdentity::DisplayName:LockoutEnd',
    validators: () => [Validators.required],
    name: 'lockoutEnd',
    id: 'lockout-end',
    type: ePropType.DateTime,
  });

  ngOnInit(): void {
    this.lockForm = this.fb.group({
      lockoutEnd: [new Date().toISOString(), [Validators.required]],
    });
  }

  setPassword() {
    if (this.saving || this.lockForm.invalid) return;

    const { lockoutEnd } = this.lockForm.value;

    this.saving = true;
    this.service
      .lock(this.stateService.selectedData()?.id as string, lockoutEnd)
      .pipe(finalize(() => (this.saving = false)))
      .subscribe(() => {
        this.toasterService.success('Demo::SuccessfullySaved');
        this.lockForm.reset({
          lockoutEnd: new Date().toISOString(),
        });
        this.stateService.selectedData$.next(null);
      });
  }
}