import { NgZone, ChangeDetectorRef } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { LazyService } from '@delon/util';
import { SettingsService } from '@delon/theme';
export declare class SettingDrawerComponent {
    private cdr;
    private msg;
    private settingSrv;
    private lazy;
    private zone;
    private doc;
    private loadedLess;
    collapse: boolean;
    readonly layout: import("@delon/theme").Layout;
    data: any;
    color: string;
    colors: {
        key: string;
        color: string;
    }[];
    constructor(cdr: ChangeDetectorRef, msg: NzMessageService, settingSrv: SettingsService, lazy: LazyService, zone: NgZone, doc: any);
    private readonly cachedData;
    private readonly DEFAULT_PRIMARY;
    private loadLess;
    private genVars;
    private runLess;
    toggle(): void;
    changeColor(color: string): void;
    setLayout(name: string, value: any): void;
    private resetData;
    private readonly validKeys;
    apply(): void;
    reset(): void;
    copyVar(): void;
}
