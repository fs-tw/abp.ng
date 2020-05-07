import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable()
export class NotifyService {
  
  constructor(
    private notification: NzNotificationService
  ) { }

  showNotify(type: string, title: string, content: string) {
    this.notification.create(type, title, content);
  }

  success(content: string = '', title: string = "成功") {
    this.showNotify('success', title, content);
  }

  info(content: string = '', title: string = "訊息") {
    this.showNotify('info', title, content);
  }

  warning(content: string = '', title: string = "警告") {
    this.showNotify('warning', title, content);
  }

  error(content: string = '', title: string = "錯誤") {
    this.showNotify('error', title, content);
  }

}
