import { PageModule } from '@abp/ng.components/page';
import { CoreModule } from '@abp/ng.core';
import {
  collapse,
  ThemeSharedModule,
} from '@abp/ng.theme.shared';
import { Component, inject } from '@angular/core';
import { ExtensibleModule } from '@abp/ng.components/extensible';
import {
  ExtensionsIdentifierDirective,
  ExtensionsIdentifierRenderDirective,
} from '../../../shared/extensions-identifier.directive';
import {
  eEmailSettingsFormNames,
} from './email-settings-form.types';
import { EmailSettingsFormStore } from './email-settings-form.store';

@Component({
  selector: 'app-email-settings-form',
  templateUrl: 'email-settings-form.component.html',
  animations: [collapse],
  standalone: true,
  imports: [
    CoreModule,
    ThemeSharedModule,
    PageModule,
    ExtensibleModule,
    ExtensionsIdentifierDirective,
    ExtensionsIdentifierRenderDirective
  ],
  providers: [EmailSettingsFormStore],
})
export class EmailSettingsFormComponent {
  public get eEmailSettingsFormNames(): typeof eEmailSettingsFormNames {
    return eEmailSettingsFormNames;
  }
  emailSettingsFormStore = inject(EmailSettingsFormStore);
  form = this.emailSettingsFormStore.getEmailSettingsForm();

  constructor() {
    //this.form.controls.
  }


}
