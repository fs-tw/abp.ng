import { ABP } from '../models/common';
import { Config } from '../models/config';
export declare class PatchRouteByName {
    name: string;
    newValue: Partial<ABP.Route>;
    static readonly type = "[Config] Patch Route By Name";
    constructor(name: string, newValue: Partial<ABP.Route>);
}
export declare class GetAppConfiguration {
    static readonly type = "[Config] Get App Configuration";
}
/**
 * @see usage: https://github.com/abpframework/abp/pull/2425#issue-355018812
 */
export declare class AddRoute {
    payload: Omit<ABP.Route, 'children'>;
    static readonly type = "[Config] Add Route";
    constructor(payload: Omit<ABP.Route, 'children'>);
}
export declare class SetEnvironment {
    environment: Config.Environment;
    static readonly type = "[Config] Set Environment";
    constructor(environment: Config.Environment);
}
