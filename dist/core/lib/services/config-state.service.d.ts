import { Store } from '@ngxs/store';
import { ConfigState } from '../states';
import { PatchRouteByName, AddRoute } from '../actions/config.actions';
import { ABP } from '../models';
export declare class ConfigStateService {
    private store;
    constructor(store: Store);
    getAll(): import("../models").Config.State;
    getApplicationInfo(): import("../models").Config.Application;
    getOne(...args: Parameters<typeof ConfigState.getOne>): any;
    getDeep(...args: Parameters<typeof ConfigState.getDeep>): any;
    getRoute(...args: Parameters<typeof ConfigState.getRoute>): ABP.FullRoute;
    getApiUrl(...args: Parameters<typeof ConfigState.getApiUrl>): string;
    getSetting(...args: Parameters<typeof ConfigState.getSetting>): string;
    getSettings(...args: Parameters<typeof ConfigState.getSettings>): {};
    getGrantedPolicy(...args: Parameters<typeof ConfigState.getGrantedPolicy>): boolean;
    getLocalization(...args: Parameters<typeof ConfigState.getLocalization>): any;
    dispatchGetAppConfiguration(): import("rxjs").Observable<any>;
    dispatchPatchRouteByName(...args: ConstructorParameters<typeof PatchRouteByName>): import("rxjs").Observable<any>;
    dispatchAddRoute(...args: ConstructorParameters<typeof AddRoute>): import("rxjs").Observable<any>;
}
