import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
export declare class MessagesService {
    private modalSrv;
    confirmModal: NzModalRef;
    constructor(modalSrv: NzModalService);
    info(message: string, title?: string): any;
    success(message: string, title?: string): any;
    warn(message: string, title?: string): any;
    error(message: string, title?: string): any;
    confirm(message: string, titleOrCallBack?: string | ((result: boolean) => void), callback?: (result: boolean) => void): any;
}
