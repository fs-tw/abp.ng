import { Config } from '@abp/ng.core';
import { Store } from '@ngxs/store';
export declare class LogoComponent {
    private store;
    readonly appInfo: Config.Application;
    constructor(store: Store);
}
