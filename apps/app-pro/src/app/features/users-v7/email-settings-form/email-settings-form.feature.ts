import { signalStoreFeature } from '@ngrx/signals';
import {
  eEmailSettingsFormNames,
  emailSettingsFormProxy
} from './email-settings-form.types';
import { emailSettingsFormControls, emailSettingsFormDefaults } from './email-settings-form.default';
import { withDefaults } from '../../../shared/defaults.feature';
import { FormGroup } from '../../../shared/types';
import { withForm } from '../../../shared/form.feature';

export function withEmailSettingsForm() {
  return signalStoreFeature(
    withDefaults({
      extensionsIdentifier: eEmailSettingsFormNames.EmailSettingsFormTop,
      defaults: {
        createFormProps: emailSettingsFormDefaults.createFormPropsTop
      }
    }),
    withDefaults({
      extensionsIdentifier: eEmailSettingsFormNames.EmailSettingsFormBotton,
      defaults: {
        createFormProps: emailSettingsFormDefaults.createFormPropsBotton
      }
    }),    
    withForm({
      collection: 'emailSettings',
      formGroup: new FormGroup(emailSettingsFormControls.createFormProps),
      fill: emailSettingsFormProxy.fill,
      send: emailSettingsFormProxy.send
    })
  )
}
