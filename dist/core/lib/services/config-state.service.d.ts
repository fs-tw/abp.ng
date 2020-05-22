import { Store } from '@ngxs/store';
import { AddRoute, PatchRouteByName, SetEnvironment } from '../actions/config.actions';
import { ConfigState } from '../states';
export declare class ConfigStateService {
    private store;
    constructor(store: Store);
    getAll(): import("../models").Config.State;
    getApplicationInfo(): import("../models").Config.Application;
    getOne(...args: Parameters<typeof ConfigState.getOne>): any;
    getDeep(...args: Parameters<typeof ConfigState.getDeep>): any;
    getRoute(...args: Parameters<typeof ConfigState.getRoute>): import("../models").ABP.FullRoute;
    getApiUrl(...args: Parameters<typeof ConfigState.getApiUrl>): string;
    getSetting(...args: Parameters<typeof ConfigState.getSetting>): string;
    getSettings(...args: Parameters<typeof ConfigState.getSettings>): {};
    getGrantedPolicy(...args: Parameters<typeof ConfigState.getGrantedPolicy>): boolean;
    getLocalization(...args: Parameters<typeof ConfigState.getLocalization>): string;
    dispatchGetAppConfiguration(): import("rxjs").Observable<any>;
    dispatchPatchRouteByName(...args: ConstructorParameters<typeof PatchRouteByName>): import("rxjs").Observable<any>;
    dispatchAddRoute(...args: ConstructorParameters<typeof AddRoute>): import("rxjs").Observable<any>;
    dispatchSetEnvironment(...args: ConstructorParameters<typeof SetEnvironment>): import("rxjs").Observable<any>;
}
