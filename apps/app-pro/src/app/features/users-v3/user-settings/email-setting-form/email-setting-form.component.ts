import { PageModule } from '@abp/ng.components/page';
import { CoreModule } from '@abp/ng.core';
import { collapse, ThemeSharedModule } from '@abp/ng.theme.shared';
import { Component, inject } from '@angular/core';
import { ExtensibleModule } from '@abp/ng.components/extensible';
import {
  ExtensionsIdentifierDirective,
  ExtensionsIdentifierRenderDirective,
} from '../../../../shared/extensions-identifier.directive';
import { eEmailSettingFormNames } from './email-setting-form.types';
import { EmailSettingFormStore } from './email-setting-form.store';

@Component({
  selector: 'app-email-setting-form',
  templateUrl: 'email-setting-form.component.html',
  animations: [collapse],
  standalone: true,
  imports: [
    CoreModule,
    ThemeSharedModule,
    PageModule,
    ExtensibleModule,
    ExtensionsIdentifierDirective,
    ExtensionsIdentifierRenderDirective,
  ],
  providers: [EmailSettingFormStore],
})
export class EmailSettingFormComponent {
  public get eEmailSettingFormNames(): typeof eEmailSettingFormNames {
    return eEmailSettingFormNames;
  }
  emailSettingFormStore = inject(EmailSettingFormStore);
  form = this.emailSettingFormStore.getEmailSettingForm();
}
