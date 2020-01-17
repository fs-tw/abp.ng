import { ABP } from '../models';
export declare class SetLanguage {
    payload: string;
    static readonly type = "[Session] Set Language";
    constructor(payload: string);
}
export declare class SetTenant {
    payload: ABP.BasicItem;
    static readonly type = "[Session] Set Tenant";
    constructor(payload: ABP.BasicItem);
}
export declare class ModifyOpenedTabCount {
    operation: 'increase' | 'decrease';
    static readonly type = "[Session] Modify Opened Tab Count";
    constructor(operation: 'increase' | 'decrease');
}
export declare class SetRemember {
    payload: boolean;
    static readonly type = "[Session] Set Remember";
    constructor(payload: boolean);
}
