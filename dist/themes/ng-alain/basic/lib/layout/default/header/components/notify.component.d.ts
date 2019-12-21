import { ChangeDetectorRef } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { NoticeItem } from '@delon/abc';
/**
 * 菜单通知
 */
export declare class HeaderNotifyComponent {
    private msg;
    private cdr;
    data: NoticeItem[];
    count: number;
    loading: boolean;
    constructor(msg: NzMessageService, cdr: ChangeDetectorRef);
    private updateNoticeData;
    loadData(): void;
    clear(type: string): void;
    select(res: any): void;
}
