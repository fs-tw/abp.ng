import { ModuleWithProviders } from '@angular/core';
import { OAuthStorage } from 'angular-oauth2-oidc';
import { ABP } from './models/common';
import './utils/date-extensions';
export declare function storageFactory(): OAuthStorage;
export declare class CoreModule {
    static forRoot(options?: ABP.Root): ModuleWithProviders;
}
