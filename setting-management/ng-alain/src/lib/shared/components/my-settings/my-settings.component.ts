import { ConfigStateService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-settings',
  templateUrl: './my-settings.component.html',
  styleUrls: ['./my-settings.component.less']
})
export class MySettingsComponent implements OnInit {
  settings = {};
  keys = [];
  constructor(private configStateService: ConfigStateService,) { }

  ngOnInit(): void {
    this.settings = this.configStateService.getSettings();
    this.keys = Object.keys(this.settings);
  }
}
