import { ConfigStateService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-settings2',
  templateUrl: './my-settings2.component.html',
  styleUrls: ['./my-settings2.component.less']
})
export class MySettings2Component implements OnInit {
  settings = {};
  keys = [];
  constructor(private configStateService: ConfigStateService,) { }

  ngOnInit(): void {
    this.settings = this.configStateService.getSettings();
    this.keys = Object.keys(this.settings);
  }
}
