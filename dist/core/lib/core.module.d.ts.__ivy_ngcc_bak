import { ModuleWithProviders } from '@angular/core';
import { OAuthStorage } from 'angular-oauth2-oidc';
import { ABP } from './models/common';
import './utils/date-extensions';
export declare function storageFactory(): OAuthStorage;
/**
 * BaseCoreModule is the module that holds
 * all imports, declarations, exports, and entryComponents
 * but not the providers.
 * This module will be imported and exported by all others.
 */
export declare class BaseCoreModule {
}
/**
 * RootCoreModule is the module that will be used at root level
 * and it introduces imports useful at root level (e.g. NGXS)
 */
export declare class RootCoreModule {
}
/**
 * TestCoreModule is the module that will be used in tests
 * and it provides mock alternatives
 */
export declare class TestCoreModule {
}
/**
 * CoreModule is the module that is publicly available
 */
export declare class CoreModule {
    static forTest({ baseHref }?: ABP.Test): ModuleWithProviders<TestCoreModule>;
    static forRoot(options?: ABP.Root): ModuleWithProviders<RootCoreModule>;
}
