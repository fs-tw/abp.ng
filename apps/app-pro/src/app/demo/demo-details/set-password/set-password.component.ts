import {
  collapse,
  getPasswordValidators,
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
import { CoreModule, generatePassword } from '@abp/ng.core';
import { IdentityUserService } from '@volo/abp.ng.identity/proxy';
import { DemoDetailsStateService } from '../demo-details-state.service';

@Component({
  selector: 'app-set-password',
  templateUrl: 'set-password.component.html',
  animations: [collapse],
  standalone: true,
  imports: [CoreModule, ThemeSharedModule, PageModule],
})
export class SetPasswordComponent implements OnInit {
  public injector = inject(Injector);
  private fb = inject(UntypedFormBuilder);
  public service = inject(IdentityUserService);
  public stateService = inject(DemoDetailsStateService);
  private toasterService = inject(ToasterService);

  setPasswordForm!: UntypedFormGroup;

  saving = false;

  fieldTextType!: boolean;

  ngOnInit(): void {
    this.setPasswordForm = this.fb.group({
      newPassword: [
        '',
        {
          validators: [
            Validators.required,
            ...getPasswordValidators(this.injector),
          ],
        },
      ],
    });
  }

  setPassword() {
    if (this.saving || this.setPasswordForm.invalid) return;

    this.saving = true;
    this.service
      .updatePassword(
        this.stateService.selectedData()?.id as string,
        this.setPasswordForm.value
      )
      .pipe(finalize(() => (this.saving = false)))
      .subscribe(() => {
        this.toasterService.success('Demo::SuccessfullySaved');
        this.setPasswordForm.reset();
        this.stateService.selectedData$.next(null);
      });
  }

  generatePassword() {
    this.setPasswordForm.get('newPassword')?.setValue(generatePassword());
  }
}
