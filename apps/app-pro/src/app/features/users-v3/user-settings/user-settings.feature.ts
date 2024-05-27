import { inject } from '@angular/core';
import { signalStoreFeature, withHooks } from '@ngrx/signals';
import { eUserSettingsNames } from './user-settings.types';
import { userSettingsDefaults } from './user-settings.default';
import { withDefaults } from '../../../shared/defaults.feature';
import { TabsService } from '../../../shared/tabs.service';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { EmailSettingFormComponent } from './email-setting-form/email-setting-form.component';

export function withUserSettings() {
  return signalStoreFeature(
    withDefaults({
      extensionsIdentifier: eUserSettingsNames.UserSettings,
      defaults: userSettingsDefaults,
    }),
    withHooks({
      onInit(store, tabsService = inject(TabsService)) {
        tabsService.add([
          {
            name: 'AbpSettingManagement::Emailing',
            order: 1,
            requiredPolicy: '',
            component: EmailSettingsComponent,
          },
          {
            name: 'EmailingSettingForm',
            order: 2,
            requiredPolicy: '',
            component: EmailSettingFormComponent,
          },
        ]);
      },
    })
  );
}
