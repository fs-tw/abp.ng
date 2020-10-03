import { HttpClient } from '@angular/common/http';
import { State, StateContext, Store } from '@ngxs/store';
import { SetEnvironment } from '../actions/config.actions';
import { Config } from '../models/config';
export declare class ConfigState {
    private http;
    private store;
    static getAll(state: Config.State): Config.State;
    static getApplicationInfo(state: Config.State): Config.Application;
    static getOne(key: string): (state: Config.State) => any;
    static getDeep(keys: string[] | string): (state: Config.State) => any;
    static getApiUrl(key?: string): (state: Config.State) => string;
    static getFeature(key: string): (state: Config.State) => string;
    static getSetting(key: string): (state: Config.State) => string;
    static getSettings(keyword?: string): (state: Config.State) => import("../models").ABP.Dictionary<string>;
    static getGrantedPolicy(key: string): (state: Config.State) => boolean;
    static getLocalizationResource(resourceName: string): (state: Config.State) => {
        [key: string]: string;
    };
    static getLocalization(key: string | Config.LocalizationWithDefault, ...interpolateParams: string[]): (state: Config.State) => string;
    constructor(http: HttpClient, store: Store);
    addData({ patchState, dispatch }: StateContext<Config.State>): import("rxjs").Observable<any>;
    setEnvironment({ patchState }: StateContext<Config.State>, { environment }: SetEnvironment): Config.State;
}
