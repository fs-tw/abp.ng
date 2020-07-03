import { ChangeDetectorRef, NgZone } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { LazyService } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
export declare class SettingDrawerComponent {
    private cdr;
    private msg;
    private settingSrv;
    private lazy;
    private zone;
    private doc;
    private loadedLess;
    collapse: boolean;
    get layout(): import("@delon/theme").Layout;
    data: any;
    color: string;
    colors: {
        key: string;
        color: string;
    }[];
    constructor(cdr: ChangeDetectorRef, msg: NzMessageService, settingSrv: SettingsService, lazy: LazyService, zone: NgZone, doc: any);
    private get cachedData();
    private get DEFAULT_PRIMARY();
    private loadLess;
    private genVars;
    private runLess;
    toggle(): void;
    changeColor(color: string): void;
    setLayout(name: string, value: any): void;
    private resetData;
    private get validKeys();
    apply(): void;
    reset(): void;
    copyVar(): void;
}
