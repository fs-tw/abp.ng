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
import { DemoStateService } from '../demo-state.service';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-set-password',
  templateUrl: 'set-password.component.html',
  animations: [collapse],
  standalone: true,
  imports: [CoreModule, ThemeSharedModule, PageModule, NzInputModule],
})
export class SetPasswordComponent implements OnInit {
  public injector = inject(Injector);
  private fb = inject(UntypedFormBuilder);
  public service = inject(IdentityUserService);
  public stateService = inject(DemoStateService);
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
        this.stateService.getSelected()?.id as string,
        this.setPasswordForm.value
      )
      .pipe(finalize(() => (this.saving = false)))
      .subscribe(() => {
        this.toasterService.success('Demo::SuccessfullySaved');
        this.setPasswordForm.reset();
        this.stateService.setSelected(undefined);
      });
  }

  generatePassword() {
    this.setPasswordForm.get('newPassword')?.setValue(generatePassword());
  }
}
