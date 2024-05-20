import { PageModule } from '@abp/ng.components/page';
import { CoreModule } from '@abp/ng.core';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import {
  collapse,
  ThemeSharedModule,
  ToasterService,
} from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { UserFormService } from './user-form.service';
import { EmailSettingsDto } from './user-form.types';

@Component({
  selector: 'app-user-form',
  templateUrl: 'user-form.component.html',
  animations: [collapse],
  standalone: true,
  imports: [CoreModule, ThemeSharedModule, PageModule],
  providers: [],
})
export class UserFormComponent implements OnInit {
  form!: UntypedFormGroup;
  emailTestForm!: UntypedFormGroup;
  saving = false;
  isEmailTestModalOpen = false;
  modalSize: NgbModalOptions = { size: 'lg' };

  constructor(
    private userFormService: UserFormService,
    private fb: UntypedFormBuilder,
    private toasterService: ToasterService
  ) {}

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.userFormService.get().subscribe((res) => {
      this.buildForm(res);
    });
  }

  private buildForm(emailSettings: EmailSettingsDto) {
    this.form = this.fb.group({
      defaultFromDisplayName: [
        emailSettings.defaultFromDisplayName,
        [Validators.required],
      ],
      defaultFromAddress: [
        emailSettings.defaultFromAddress,
        [Validators.required],
      ],
      smtpHost: [emailSettings.smtpHost],
      smtpPort: [emailSettings.smtpPort, [Validators.required]],
      smtpEnableSsl: [emailSettings.smtpEnableSsl],
      smtpUseDefaultCredentials: [emailSettings.smtpUseDefaultCredentials],
      smtpDomain: [emailSettings.smtpDomain],
      smtpUserName: [emailSettings.smtpUserName],
      smtpPassword: [emailSettings.smtpPassword],
    });
  }

  submit() {
    if (this.saving || this.form.invalid) return;

    this.saving = true;
    this.userFormService
      .update(this.form.value)
      .pipe(finalize(() => (this.saving = false)))
      .subscribe(() => {
        this.toasterService.success('AbpUi::SuccessfullySaved');
        this.getData();
      });
  }
  openSendEmailModal() {
    this.buildEmailTestForm();
    this.isEmailTestModalOpen = true;
  }

  buildEmailTestForm() {
    this.emailTestForm = this.fb.group({
      senderEmailAddress: ['', [Validators.required, Validators.email]],
      targetEmailAddress: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      body: [''],
    });
  }

  emailTestFormSubmit() {
    if (this.emailTestForm.invalid) {
      return;
    }
    this.userFormService
      .sendTestEmail(this.emailTestForm.value)
      .subscribe((res) => {
        this.toasterService.success('UsersV7::SuccessfullySent');
        this.isEmailTestModalOpen = false;
      });
  }
}
