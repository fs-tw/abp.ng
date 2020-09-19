import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-helpcenter',
  templateUrl: './helpcenter.component.html',
})
export class HelpCenterComponent {
  type = '';
  q = '';

  quick(key: string) {
    this.q = key;
    this.search();
  }

  search() {
    this.msg.success(`搜索：${this.q}`);
  }

  constructor(public msg: NzMessageService) {}
}
