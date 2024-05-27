import { signalStoreFeature } from '@ngrx/signals';
import {
  eEmailSettingFormNames,
  emailSettingFormProxy,
  R,
} from './email-setting-form.types';
import {
  emailSettingFormControls,
  emailSettingFormDefaults,
} from './email-setting-form.default';
import { withDefaults } from '../../../../shared/defaults.feature';
import { FormGroup } from '../../../../shared/types';
import { withForm } from '../../../../shared/form.feature';

export function withEmailSettingForm() {
  return signalStoreFeature(
    withDefaults({
      extensionsIdentifier: eEmailSettingFormNames.EmailSettingForm,
      defaults: emailSettingFormDefaults,
    }),
    withForm({
      collection: 'emailSetting',
      formGroup: new FormGroup(emailSettingFormControls.createFormProps),
      fill: emailSettingFormProxy.fill,
      send: emailSettingFormProxy.send,
    })
  );
}
