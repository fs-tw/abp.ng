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
import { EmailSettingsV2Service } from './email-settings-v2.service';
import {
  eEmailSettingsV2PolicyNames,
  EmailSettingsDto,
} from './email-settings-v2.model';
import { PageModule } from '@abp/ng.components/page';
import { CoreModule } from '@abp/ng.core';

@Component({
  selector: 'app-email-settings-v2',
  templateUrl: 'email-settings-v2.component.html',
  animations: [collapse],
  standalone: true,
  imports: [CoreModule, ThemeSharedModule, PageModule],
})
export class EmailSettingsV2Component implements OnInit {
  form!: UntypedFormGroup;
  emailTestForm!: UntypedFormGroup;
  saving = false;
  emailingPolicy = eEmailSettingsV2PolicyNames.EmailSettingsV2;
  isEmailTestModalOpen = false;
  modalSize: NgbModalOptions = { size: 'lg' };

  constructor(
    private emailSettingsV2Service: EmailSettingsV2Service,
    private fb: UntypedFormBuilder,
    private toasterService: ToasterService
  ) {}

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.emailSettingsV2Service.get().subscribe((res) => {
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
    this.emailSettingsV2Service
      .update(this.form.value)
      .pipe(finalize(() => (this.saving = false)))
      .subscribe(() => {
        this.toasterService.success('Basic::SuccessfullySaved');
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
    this.emailSettingsV2Service
      .sendTestEmail(this.emailTestForm.value)
      .subscribe((res) => {
        this.toasterService.success('Basic::SuccessfullySent');
        this.isEmailTestModalOpen = false;
      });
  }
}
