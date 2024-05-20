import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  ExtensibleModule,
} from '@abp/ng.components/extensible';
import { Component, inject } from '@angular/core';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { PageModule } from '@abp/ng.components/page';
import { AdvancedEntityFiltersModule } from '@volo/abp.commercial.ng.ui';
import { eLanguageNames } from './language.types';
import { UsersV7Store } from './../users-v7.store';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eLanguageNames.Language,
    },
  ],
  standalone: true,
  imports: [
    CoreModule,
    ThemeSharedModule,
    ExtensibleModule,
    PermissionManagementModule,
    PageModule,
    AdvancedEntityFiltersModule,
  ],
})
export class LanguageComponent {
  usersV7Store = inject(UsersV7Store);
  languageListService = this.usersV7Store.getLanguageListService();
}
