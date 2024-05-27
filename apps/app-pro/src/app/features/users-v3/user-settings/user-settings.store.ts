import { signalStore, withHooks } from '@ngrx/signals';
import { withUserSettings } from './user-settings.feature';

export const UserSettingsStore = signalStore(
  withUserSettings(),
  withHooks({
    onInit() {
      console.log('UserSettingsStore initialized');
    },
  })
);
