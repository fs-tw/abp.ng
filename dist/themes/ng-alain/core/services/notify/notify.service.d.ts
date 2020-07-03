import { NzNotificationService } from 'ng-zorro-antd/notification';
import * as i0 from "@angular/core";
export declare class NotifyService {
    private notification;
    constructor(notification: NzNotificationService);
    showNotify(type: string, title: string, content: string): void;
    success(content?: string, title?: string): void;
    info(content?: string, title?: string): void;
    warning(content?: string, title?: string): void;
    error(content?: string, title?: string): void;
    static ɵfac: i0.ɵɵFactoryDef<NotifyService, never>;
    static ɵprov: i0.ɵɵInjectableDef<NotifyService>;
}
