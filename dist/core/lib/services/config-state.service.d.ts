import { Store } from '@ngxs/store';
import { SetEnvironment } from '../actions/config.actions';
import { ConfigState } from '../states';
export declare class ConfigStateService {
    private store;
    constructor(store: Store);
    getAll(): import("../models").Config.State;
    getApplicationInfo(): import("../models").Config.Application;
    getOne(...args: Parameters<typeof ConfigState.getOne>): any;
    getDeep(...args: Parameters<typeof ConfigState.getDeep>): any;
    getApiUrl(...args: Parameters<typeof ConfigState.getApiUrl>): string;
    getFeature(...args: Parameters<typeof ConfigState.getFeature>): string;
    getSetting(...args: Parameters<typeof ConfigState.getSetting>): string;
    getSettings(...args: Parameters<typeof ConfigState.getSettings>): import("../models").ABP.Dictionary<string>;
    getGrantedPolicy(...args: Parameters<typeof ConfigState.getGrantedPolicy>): boolean;
    getLocalization(...args: Parameters<typeof ConfigState.getLocalization>): string;
    getLocalizationResource(...args: Parameters<typeof ConfigState.getLocalizationResource>): {
        [key: string]: string;
    };
    dispatchGetAppConfiguration(): import("rxjs").Observable<any>;
    dispatchSetEnvironment(...args: ConstructorParameters<typeof SetEnvironment>): import("rxjs").Observable<any>;
}
