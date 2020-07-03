import { NzNotificationService } from 'ng-zorro-antd/notification';
export declare class NotifyService {
    private notification;
    constructor(notification: NzNotificationService);
    showNotify(type: string, title: string, content: string): void;
    success(content?: string, title?: string): void;
    info(content?: string, title?: string): void;
    warning(content?: string, title?: string): void;
    error(content?: string, title?: string): void;
}
