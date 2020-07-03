import { ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { Options } from './models/options';
export declare class AccountModule {
    static forChild(options: Options): ModuleWithProviders<AccountModule>;
    static forLazy(options: Options): NgModuleFactory<AccountModule>;
}
