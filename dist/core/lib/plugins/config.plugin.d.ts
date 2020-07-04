import { InjectionToken } from '@angular/core';
import { NgxsNextPluginFn, NgxsPlugin } from '@ngxs/store';
import { ABP } from '../models/common';
export declare const NGXS_CONFIG_PLUGIN_OPTIONS: InjectionToken<unknown>;
export declare class ConfigPlugin implements NgxsPlugin {
    private options;
    private initialized;
    constructor(options: ABP.Root);
    handle(state: any, event: any, next: NgxsNextPluginFn): any;
}
