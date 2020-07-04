import { ABP } from '@abp/ng.core';
export declare class SetSelectedSettingTab {
    payload: ABP.Tab;
    static readonly type = "[SettingManagement] Set Selected Tab";
    constructor(payload: ABP.Tab);
}
