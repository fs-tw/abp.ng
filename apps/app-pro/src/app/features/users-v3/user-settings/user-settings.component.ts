import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  ExtensibleModule,
} from '@abp/ng.components/extensible';
import { Component, inject } from '@angular/core';
import { PageModule } from '@abp/ng.components/page';
import { eUserSettingsNames } from './user-settings.types';
import { UserSettingsStore } from './user-settings.store';
import { TabsService } from '../../../shared/tabs.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eUserSettingsNames.UserSettings,
    },
    TabsService,
    UserSettingsStore,
  ],
  standalone: true,
  imports: [CoreModule, ThemeSharedModule, ExtensibleModule, PageModule],
})
export class UserSettingsComponent {
  tabsService = inject(TabsService);
  userSettingsStore = inject(UserSettingsStore);
}
