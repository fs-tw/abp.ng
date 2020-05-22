import { Type } from '@angular/core';
import { AuthConfig } from 'angular-oauth2-oidc';
import { ApplicationConfiguration } from './application-configuration';
import { ABP } from './common';
export declare namespace Config {
    type State = ApplicationConfiguration.Response & ABP.Root & {
        environment: Environment;
    } & {
        routes: ABP.FullRoute[];
        flattedRoutes: ABP.FullRoute[];
    };
    interface Environment {
        application: Application;
        production: boolean;
        hmr?: boolean;
        oAuthConfig: AuthConfig;
        apis: Apis;
        localization?: {
            defaultResourceName?: string;
        };
    }
    interface Application {
        name: string;
        logoUrl?: string;
    }
    interface ApiConfig {
        [key: string]: string;
        url: string;
    }
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
}
