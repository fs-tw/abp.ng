import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { Config, ConfigState } from '@abp/ng.core';
import {Store,Select} from '@ngxs/store';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Select(ConfigState.getSetting('FS.Abp.Themes.Core.WebsiteOptions.Title')) title$;
  

  get appInfo(): Config.Application {
    return this.store.selectSnapshot(ConfigState.getApplicationInfo);
  }  
  searchToggleStatus: boolean;

  constructor(
    public settings: SettingsService,
    private store: Store
    ) {}

  toggleCollapsedSidebar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }
}
