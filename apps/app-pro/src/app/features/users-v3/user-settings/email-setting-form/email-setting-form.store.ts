import { signalStore } from '@ngrx/signals';
import { withEmailSettingForm } from './email-setting-form.feature';

export const EmailSettingFormStore = signalStore(withEmailSettingForm());
