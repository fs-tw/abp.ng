import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { Store } from '@ngxs/store';
import { ConfigState } from '@abp/ng.core';
import { NzTreeHigherOrderServiceToken } from 'ng-zorro-antd';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent  implements OnInit{
  searchToggleStatus: boolean;
  websiteTitle:string;

  constructor(public settings: SettingsService,private store:Store) {}

  ngOnInit(){
    this.loadAbpSetting();
  }

  toggleCollapsedSidebar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  // html already hide search function
  // searchToggleChange() {
  //   this.searchToggleStatus = !this.searchToggleStatus;
  // }

  loadAbpSetting(){
    this.websiteTitle = this.store.selectSnapshot(ConfigState.getSetting("FS.Abp.Themes.Core.WebsiteOptions.Title"));
  }
}
