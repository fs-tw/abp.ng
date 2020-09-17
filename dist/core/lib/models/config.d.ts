import { Type } from '@angular/core';
import { AuthConfig } from 'angular-oauth2-oidc';
import { ApplicationConfiguration } from './application-configuration';
import { ABP } from './common';
export declare namespace Config {
    type State = ApplicationConfiguration.Response & ABP.Root & {
        environment: Environment;
    };
    interface Environment {
        apis: Apis;
        application: Application;
        hmr?: boolean;
        localization?: {
            defaultResourceName?: string;
        };
        oAuthConfig: AuthConfig;
        production: boolean;
        remoteEnv?: RemoteEnv;
    }
    interface Application {
        name: string;
        baseUrl?: string;
        logoUrl?: string;
    }
    type ApiConfig = {
        [key: string]: string;
        url: string;
    } & Partial<{
        rootNamespace: string;
    }>;
    interface Apis {
        [key: string]: ApiConfig;
        default: ApiConfig;
    }
    interface Requirements {
        layouts: Type<any>[];
    }
    interface LocalizationWithDefault {
        key: string;
        defaultValue: string;
    }
    type LocalizationParam = string | LocalizationWithDefault;
    type customMergeFn = (localEnv: Partial<Config.Environment>, remoteEnv: any) => Config.Environment;
    interface RemoteEnv {
        url: string;
        mergeStrategy: 'deepmerge' | 'overwrite' | customMergeFn;
        method?: string;
        headers?: ABP.Dictionary<string>;
    }
}
