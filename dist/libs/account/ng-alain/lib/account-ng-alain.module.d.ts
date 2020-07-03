import { AccountModule } from '@fs/account';
import { ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { Options } from '@abp/ng.account';
export declare function accountOptionsFactory(options: Options): {
    redirectUrl: string;
};
export declare class AccountNgAlainModule {
    static forChild(options: any): ModuleWithProviders<AccountNgAlainModule>;
    static forLazy(options: Options): NgModuleFactory<AccountModule>;
}
