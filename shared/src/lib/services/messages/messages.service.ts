import { Injectable } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  confirmModal: NzModalRef;

  constructor(private modalSrv: NzModalService) { }

  info(message: string, title: string = "訊息"): any {
    this.modalSrv.info({
        nzTitle: title,
        nzContent: message
    })
}

success(message: string, title: string = "成功訊息"): any {
    this.modalSrv.success({
        nzTitle: title,
        nzContent: message
    })
}

warn(message: string, title: string = "警告訊息"): any {
    this.modalSrv.warning({
        nzTitle: title,
        nzContent: message
    })
}

error(message: string, title: string = "錯誤訊息"): any {
    this.modalSrv.error({
        nzTitle: title,
        nzContent: message
    })
}

confirm(message: string, titleOrCallBack?: string | ((result: boolean) => void), callback?: (result: boolean) => void): any {
    if (typeof titleOrCallBack == 'string') {
        this.modalSrv.confirm({
            nzTitle: titleOrCallBack,
            nzContent: message,
            nzOnOk() {
                if (callback) callback(true);
            },
            nzOnCancel() {
                if (callback) callback(false);
            }
        });
    } else {
        this.modalSrv.confirm({
            nzTitle: "請確認",
            nzContent: message,
            nzOnOk() {
                if (titleOrCallBack) titleOrCallBack(true);
            },
            nzOnCancel() {
                if (titleOrCallBack) titleOrCallBack(false);
            }
        });
    }
}
}
