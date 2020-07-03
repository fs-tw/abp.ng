import { NoticeIconList, NoticeItem } from '@delon/abc/notice-icon';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as i0 from "@angular/core";
/**
 * 菜单通知
 */
export declare class HeaderNotifyComponent {
    private msg;
    private nzI18n;
    data: NoticeItem[];
    count: number;
    loading: boolean;
    constructor(msg: NzMessageService, nzI18n: NzI18nService);
    updateNoticeData(notices: NoticeIconList[]): NoticeItem[];
    loadData(): void;
    clear(type: string): void;
    select(res: any): void;
    static ɵfac: i0.ɵɵFactoryDef<HeaderNotifyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<HeaderNotifyComponent, "header-notify", never, {}, {}, never, never>;
}
