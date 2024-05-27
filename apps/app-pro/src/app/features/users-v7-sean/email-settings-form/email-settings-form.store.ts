import { signalStore } from '@ngrx/signals';
import { withEmailSettingsForm } from './email-settings-form.feature';


export const EmailSettingsFormStore = signalStore(
  withEmailSettingsForm()
);
