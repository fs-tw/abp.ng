var ConfigState_1;
/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/config.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext, Store } from '@ngxs/store';
import { of, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import snq from 'snq';
import { AddRoute, GetAppConfiguration, PatchRouteByName, SetEnvironment, } from '../actions/config.actions';
import { RestOccurError } from '../actions/rest.actions';
import { SetLanguage } from '../actions/session.actions';
import { organizeRoutes } from '../utils/route-utils';
import { SessionState } from './session.state';
let ConfigState = ConfigState_1 = class ConfigState {
    /**
     * @param {?} http
     * @param {?} store
     */
    constructor(http, store) {
        this.http = http;
        this.store = store;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    static getAll(state) {
        return state;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    static getApplicationInfo(state) {
        return state.environment.application || ((/** @type {?} */ ({})));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    static getOne(key) {
        /** @type {?} */
        const selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            return state[key];
        }));
        return selector;
    }
    /**
     * @param {?} keys
     * @return {?}
     */
    static getDeep(keys) {
        if (typeof keys === 'string') {
            keys = keys.split('.');
        }
        if (!Array.isArray(keys)) {
            throw new Error('The argument must be a dot string or an string array.');
        }
        /** @type {?} */
        const selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            return ((/** @type {?} */ (keys))).reduce((/**
             * @param {?} acc
             * @param {?} val
             * @return {?}
             */
            (acc, val) => {
                if (acc) {
                    return acc[val];
                }
                return undefined;
            }), state);
        }));
        return selector;
    }
    /**
     * @param {?=} path
     * @param {?=} name
     * @param {?=} url
     * @return {?}
     */
    static getRoute(path, name, url) {
        /** @type {?} */
        const selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            const { flattedRoutes } = state;
            return ((/** @type {?} */ (flattedRoutes))).find((/**
             * @param {?} route
             * @return {?}
             */
            route => {
                if (path && route.path === path) {
                    return route;
                }
                else if (name && route.name === name) {
                    return route;
                }
                else if (url && route.url === url) {
                    return route;
                }
            }));
        }));
        return selector;
    }
    /**
     * @param {?=} key
     * @return {?}
     */
    static getApiUrl(key) {
        /** @type {?} */
        const selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            return (state.environment.apis[key || 'default'] || state.environment.apis.default).url;
        }));
        return selector;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    static getSetting(key) {
        /** @type {?} */
        const selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            return snq((/**
             * @return {?}
             */
            () => state.setting.values[key]));
        }));
        return selector;
    }
    /**
     * @param {?=} keyword
     * @return {?}
     */
    static getSettings(keyword) {
        /** @type {?} */
        const selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            /** @type {?} */
            const settings = snq((/**
             * @return {?}
             */
            () => state.setting.values), {});
            if (!keyword)
                return settings;
            /** @type {?} */
            const keysFound = Object.keys(settings).filter((/**
             * @param {?} key
             * @return {?}
             */
            key => key.indexOf(keyword) > -1));
            return keysFound.reduce((/**
             * @param {?} acc
             * @param {?} key
             * @return {?}
             */
            (acc, key) => {
                acc[key] = settings[key];
                return acc;
            }), {});
        }));
        return selector;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    static getGrantedPolicy(key) {
        /** @type {?} */
        const selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            if (!key)
                return true;
            /** @type {?} */
            const getPolicy = (/**
             * @param {?} k
             * @return {?}
             */
            k => snq((/**
             * @return {?}
             */
            () => state.auth.grantedPolicies[k]), false));
            /** @type {?} */
            const orRegexp = /\|\|/g;
            /** @type {?} */
            const andRegexp = /&&/g;
            if (orRegexp.test(key)) {
                /** @type {?} */
                const keys = key.split('||').filter((/**
                 * @param {?} k
                 * @return {?}
                 */
                k => !!k));
                if (keys.length !== 2)
                    return false;
                return getPolicy(keys[0].trim()) || getPolicy(keys[1].trim());
            }
            else if (andRegexp.test(key)) {
                /** @type {?} */
                const keys = key.split('&&').filter((/**
                 * @param {?} k
                 * @return {?}
                 */
                k => !!k));
                if (keys.length !== 2)
                    return false;
                return getPolicy(keys[0].trim()) && getPolicy(keys[1].trim());
            }
            return getPolicy(key);
        }));
        return selector;
    }
    /**
     * @param {?} key
     * @param {...?} interpolateParams
     * @return {?}
     */
    static getLocalization(key, ...interpolateParams) {
        if (!key)
            key = '';
        /** @type {?} */
        let defaultValue;
        if (typeof key !== 'string') {
            defaultValue = key.defaultValue;
            key = key.key;
        }
        /** @type {?} */
        const keys = (/** @type {?} */ (key.split('::')));
        /** @type {?} */
        const selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            /** @type {?} */
            const warn = (/**
             * @param {?} message
             * @return {?}
             */
            (message) => {
                if (!state.environment.production)
                    console.warn(message);
            });
            if (keys.length < 2) {
                warn('The localization source separator (::) not found.');
                return defaultValue || ((/** @type {?} */ (key)));
            }
            if (!state.localization)
                return defaultValue || keys[1];
            /** @type {?} */
            const sourceName = keys[0] ||
                snq((/**
                 * @return {?}
                 */
                () => state.environment.localization.defaultResourceName)) ||
                state.localization.defaultResourceName;
            /** @type {?} */
            const sourceKey = keys[1];
            if (sourceName === '_') {
                return defaultValue || sourceKey;
            }
            if (!sourceName) {
                warn('Localization source name is not specified and the defaultResourceName was not defined!');
                return defaultValue || sourceKey;
            }
            /** @type {?} */
            const source = state.localization.values[sourceName];
            if (!source) {
                warn('Could not find localization source: ' + sourceName);
                return defaultValue || sourceKey;
            }
            /** @type {?} */
            let localization = source[sourceKey];
            if (typeof localization === 'undefined') {
                return defaultValue || sourceKey;
            }
            interpolateParams = interpolateParams.filter((/**
             * @param {?} params
             * @return {?}
             */
            params => params != null));
            if (localization && interpolateParams && interpolateParams.length) {
                interpolateParams.forEach((/**
                 * @param {?} param
                 * @return {?}
                 */
                param => {
                    localization = localization.replace(/[\'\"]?\{[\d]+\}[\'\"]?/, param);
                }));
            }
            if (typeof localization !== 'string')
                localization = '';
            return localization || defaultValue || ((/** @type {?} */ (key)));
        }));
        return selector;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    addData({ patchState, dispatch }) {
        /** @type {?} */
        const apiName = this.store.selectSnapshot(ConfigState_1.getDeep('environment.application.name'));
        /** @type {?} */
        const api = this.store.selectSnapshot(ConfigState_1.getApiUrl(apiName));
        return this.http
            .get(`${api}/api/abp/application-configuration`)
            .pipe(tap((/**
         * @param {?} configuration
         * @return {?}
         */
        configuration => patchState(Object.assign({}, configuration)))), switchMap((/**
         * @param {?} configuration
         * @return {?}
         */
        configuration => {
            /** @type {?} */
            let defaultLang = configuration.setting.values['Abp.Localization.DefaultLanguage'];
            if (defaultLang.includes(';')) {
                defaultLang = defaultLang.split(';')[0];
            }
            document.documentElement.setAttribute('lang', configuration.localization.currentCulture.cultureName);
            return this.store.selectSnapshot(SessionState.getLanguage)
                ? of(null)
                : dispatch(new SetLanguage(defaultLang, false));
        })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            dispatch(new RestOccurError(new HttpErrorResponse({ status: 0, error: err })));
            return throwError(err);
        })));
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    patchRoute({ patchState, getState }, { name, newValue }) {
        /** @type {?} */
        let routes = getState().routes;
        routes = patchRouteDeep(routes, name, newValue);
        /** @type {?} */
        const flattedRoutes = getState().flattedRoutes;
        /** @type {?} */
        const index = flattedRoutes.findIndex((/**
         * @param {?} route
         * @return {?}
         */
        route => route.name === name));
        if (index > -1) {
            flattedRoutes[index] = (/** @type {?} */ (Object.assign({}, flattedRoutes[index], newValue)));
        }
        return patchState({
            routes,
            flattedRoutes,
        });
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    addRoute({ patchState, getState }, { payload }) {
        /** @type {?} */
        let routes = getState().routes;
        /** @type {?} */
        const flattedRoutes = getState().flattedRoutes;
        /** @type {?} */
        const route = Object.assign({}, payload);
        if (route.parentName) {
            /** @type {?} */
            const index = flattedRoutes.findIndex((/**
             * @param {?} r
             * @return {?}
             */
            r => r.name === route.parentName));
            if (index < 0)
                return;
            /** @type {?} */
            const parent = flattedRoutes[index];
            if ((parent.url || '').replace('/', '')) {
                route.url = `${parent.url}/${route.path}`;
            }
            else {
                route.url = `/${route.path}`;
            }
            route.children = route.children || [];
            route.order = route.order || route.order === 0 ? route.order : (parent.children || []).length;
            parent.children = [...(parent.children || []), route].sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a.order - b.order));
            flattedRoutes[index] = parent;
            flattedRoutes.push(route);
            /** @type {?} */
            let parentName = parent.name;
            /** @type {?} */
            const parentNameArr = [parentName];
            while (parentName) {
                parentName = snq((/**
                 * @return {?}
                 */
                () => flattedRoutes.find((/**
                 * @param {?} r
                 * @return {?}
                 */
                r => r.name === parentName)).parentName));
                if (parentName) {
                    parentNameArr.unshift(parentName);
                }
            }
            routes = updateRouteDeep(routes, parentNameArr, parent);
        }
        else {
            route.url = `/${route.path}`;
            if (route.order || route.order === 0) {
                routes = [...routes, route].sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => a.order - b.order));
            }
            else {
                route.order = routes.length;
                routes = [...routes, route];
            }
            flattedRoutes.push(route);
        }
        return patchState({
            routes,
            flattedRoutes,
        });
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    setEnvironment({ patchState }, { environment }) {
        return patchState({
            environment,
        });
    }
};
ConfigState.ctorParameters = () => [
    { type: HttpClient },
    { type: Store }
];
ConfigState.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigState.ctorParameters = () => [
    { type: HttpClient },
    { type: Store }
];
tslib_1.__decorate([
    Action(GetAppConfiguration),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ConfigState.prototype, "addData", null);
tslib_1.__decorate([
    Action(PatchRouteByName),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, PatchRouteByName]),
    tslib_1.__metadata("design:returntype", void 0)
], ConfigState.prototype, "patchRoute", null);
tslib_1.__decorate([
    Action(AddRoute),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, AddRoute]),
    tslib_1.__metadata("design:returntype", void 0)
], ConfigState.prototype, "addRoute", null);
tslib_1.__decorate([
    Action(SetEnvironment),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, SetEnvironment]),
    tslib_1.__metadata("design:returntype", void 0)
], ConfigState.prototype, "setEnvironment", null);
tslib_1.__decorate([
    Selector(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ConfigState, "getAll", null);
tslib_1.__decorate([
    Selector(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Object)
], ConfigState, "getApplicationInfo", null);
ConfigState = ConfigState_1 = tslib_1.__decorate([
    State({
        name: 'ConfigState',
        defaults: (/** @type {?} */ ({})),
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient, Store])
], ConfigState);
export { ConfigState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigState.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ConfigState.prototype.store;
}
/**
 * @param {?} routes
 * @param {?} name
 * @param {?} newValue
 * @param {?=} parentUrl
 * @return {?}
 */
function patchRouteDeep(routes, name, newValue, parentUrl = '') {
    routes = routes.map((/**
     * @param {?} route
     * @return {?}
     */
    route => {
        if (route.name === name) {
            newValue.url = `${parentUrl}/${(!newValue.path || newValue.path === ''
                ? route.path
                : newValue.path) || ''}`;
            if (newValue.children && newValue.children.length) {
                newValue.children = newValue.children.map((/**
                 * @param {?} child
                 * @return {?}
                 */
                child => (Object.assign({}, child, { url: `${newValue.url}/${child.path}`.replace('//', '/') }))));
            }
            return Object.assign({}, route, newValue);
        }
        else if (route.children && route.children.length) {
            route.children = patchRouteDeep(route.children, name, newValue, (parentUrl || '/') + route.path);
        }
        return route;
    }));
    if (parentUrl) {
        // recursive block
        return routes;
    }
    return organizeRoutes(routes);
}
/**
 * @param {?} routes
 * @param {?} parentNameArr
 * @param {?} newValue
 * @param {?=} parentIndex
 * @return {?}
 */
function updateRouteDeep(routes, parentNameArr, newValue, parentIndex = 0) {
    /** @type {?} */
    const index = routes.findIndex((/**
     * @param {?} route
     * @return {?}
     */
    route => route.name === parentNameArr[parentIndex]));
    if (parentIndex === parentNameArr.length - 1) {
        routes[index] = newValue;
    }
    else {
        routes[index].children = updateRouteDeep(routes[index].children, parentNameArr, newValue, parentIndex + 1);
    }
    return routes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0YXRlcy9jb25maWcuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzRixPQUFPLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUNMLFFBQVEsRUFDUixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGNBQWMsR0FDZixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztJQU9sQyxXQUFXLHlCQUFYLFdBQVc7Ozs7O0lBMEx0QixZQUFvQixJQUFnQixFQUFVLEtBQVk7UUFBdEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDOzs7OztJQXhMOUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFtQjtRQUMvQixPQUFPLEtBQUssQ0FBQztJ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TSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQ3RCLGFBQWEsRUFDYixRQUFRLEVBQ1IsV0FBVyxHQUFHLENBQUMsQ0FDaEIsQ0FBQztLQUNIO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiwgY3JlYXRlU2VsZWN0b3IsIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHtcclxuICBBZGRSb3V0ZSxcclxuICBHZXRBcHBDb25maWd1cmF0aW9uLFxyXG4gIFBhdGNoUm91dGVCeU5hbWUsXHJcbiAgU2V0RW52aXJvbm1lbnQsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy9jb25maWcuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFJlc3RPY2N1ckVycm9yIH0gZnJvbSAnLi4vYWN0aW9ucy9yZXN0LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBTZXRMYW5ndWFnZSB9IGZyb20gJy4uL2FjdGlvbnMvc2Vzc2lvbi5hY3Rpb25zJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2FwcGxpY2F0aW9uLWNvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZyc7XHJcbmltcG9ydCB7IG9yZ2FuaXplUm91dGVzIH0gZnJvbSAnLi4vdXRpbHMvcm91dGUtdXRpbHMnO1xyXG5pbXBvcnQgeyBTZXNzaW9uU3RhdGUgfSBmcm9tICcuL3Nlc3Npb24uc3RhdGUnO1xyXG5cclxuQFN0YXRlPENvbmZpZy5TdGF0ZT4oe1xyXG4gIG5hbWU6ICdDb25maWdTdGF0ZScsXHJcbiAgZGVmYXVsdHM6IHt9IGFzIENvbmZpZy5TdGF0ZSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldEFsbChzdGF0ZTogQ29uZmlnLlN0YXRlKSB7XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRBcHBsaWNhdGlvbkluZm8oc3RhdGU6IENvbmZpZy5TdGF0ZSk6IENvbmZpZy5BcHBsaWNhdGlvbiB7XHJcbiAgICByZXR1cm4gc3RhdGUuZW52aXJvbm1lbnQuYXBwbGljYXRpb24gfHwgKHt9IGFzIENvbmZpZy5BcHBsaWNhdGlvbik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0T25lKGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZVtrZXldO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldERlZXAoa2V5czogc3RyaW5nW10gfCBzdHJpbmcpIHtcclxuICAgIGlmICh0eXBlb2Yga2V5cyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAga2V5cyA9IGtleXMuc3BsaXQoJy4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYXJndW1lbnQgbXVzdCBiZSBhIGRvdCBzdHJpbmcgb3IgYW4gc3RyaW5nIGFycmF5LicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIChrZXlzIGFzIHN0cmluZ1tdKS5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XHJcbiAgICAgICAgaWYgKGFjYykge1xyXG4gICAgICAgICAgcmV0dXJuIGFjY1t2YWxdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfSwgc3RhdGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFJvdXRlKHBhdGg/OiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHVybD86IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCB7IGZsYXR0ZWRSb3V0ZXMgfSA9IHN0YXRlO1xyXG4gICAgICByZXR1cm4gKGZsYXR0ZWRSb3V0ZXMgYXMgQUJQLkZ1bGxSb3V0ZVtdKS5maW5kKHJvdXRlID0+IHtcclxuICAgICAgICBpZiAocGF0aCAmJiByb3V0ZS5wYXRoID09PSBwYXRoKSB7XHJcbiAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lICYmIHJvdXRlLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHVybCAmJiByb3V0ZS51cmwgPT09IHVybCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0QXBpVXJsKGtleT86IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSk6IHN0cmluZyA9PiB7XHJcbiAgICAgIHJldHVybiAoc3RhdGUuZW52aXJvbm1lbnQuYXBpc1trZXkgfHwgJ2RlZmF1bHQnXSB8fCBzdGF0ZS5lbnZpcm9ubWVudC5hcGlzLmRlZmF1bHQpLnVybDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRTZXR0aW5nKGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiBzbnEoKCkgPT4gc3RhdGUuc2V0dGluZy52YWx1ZXNba2V5XSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U2V0dGluZ3Moa2V5d29yZD86IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHNucSgoKSA9PiBzdGF0ZS5zZXR0aW5nLnZhbHVlcywge30pO1xyXG5cclxuICAgICAgaWYgKCFrZXl3b3JkKSByZXR1cm4gc2V0dGluZ3M7XHJcblxyXG4gICAgICBjb25zdCBrZXlzRm91bmQgPSBPYmplY3Qua2V5cyhzZXR0aW5ncykuZmlsdGVyKGtleSA9PiBrZXkuaW5kZXhPZihrZXl3b3JkKSA+IC0xKTtcclxuXHJcbiAgICAgIHJldHVybiBrZXlzRm91bmQucmVkdWNlKChhY2MsIGtleSkgPT4ge1xyXG4gICAgICAgIGFjY1trZXldID0gc2V0dGluZ3Nba2V5XTtcclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0R3JhbnRlZFBvbGljeShrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICBpZiAoIWtleSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIGNvbnN0IGdldFBvbGljeSA9IGsgPT4gc25xKCgpID0+IHN0YXRlLmF1dGguZ3JhbnRlZFBvbGljaWVzW2tdLCBmYWxzZSk7XHJcblxyXG4gICAgICBjb25zdCBvclJlZ2V4cCA9IC9cXHxcXHwvZztcclxuICAgICAgY29uc3QgYW5kUmVnZXhwID0gLyYmL2c7XHJcblxyXG4gICAgICBpZiAob3JSZWdleHAudGVzdChrZXkpKSB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IGtleS5zcGxpdCgnfHwnKS5maWx0ZXIoayA9PiAhIWspO1xyXG5cclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggIT09IDIpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdldFBvbGljeShrZXlzWzBdLnRyaW0oKSkgfHwgZ2V0UG9saWN5KGtleXNbMV0udHJpbSgpKTtcclxuICAgICAgfSBlbHNlIGlmIChhbmRSZWdleHAudGVzdChrZXkpKSB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IGtleS5zcGxpdCgnJiYnKS5maWx0ZXIoayA9PiAhIWspO1xyXG5cclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggIT09IDIpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdldFBvbGljeShrZXlzWzBdLnRyaW0oKSkgJiYgZ2V0UG9saWN5KGtleXNbMV0udHJpbSgpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGdldFBvbGljeShrZXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldExvY2FsaXphdGlvbihcclxuICAgIGtleTogc3RyaW5nIHwgQ29uZmlnLkxvY2FsaXphdGlvbldpdGhEZWZhdWx0LFxyXG4gICAgLi4uaW50ZXJwb2xhdGVQYXJhbXM6IHN0cmluZ1tdXHJcbiAgKSB7XHJcbiAgICBpZiAoIWtleSkga2V5ID0gJyc7XHJcbiAgICBsZXQgZGVmYXVsdFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IGtleS5kZWZhdWx0VmFsdWU7XHJcbiAgICAgIGtleSA9IGtleS5rZXk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qga2V5cyA9IGtleS5zcGxpdCgnOjonKSBhcyBzdHJpbmdbXTtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpOiBzdHJpbmcgPT4ge1xyXG4gICAgICBjb25zdCB3YXJuID0gKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmICghc3RhdGUuZW52aXJvbm1lbnQucHJvZHVjdGlvbikgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKGtleXMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHdhcm4oJ1RoZSBsb2NhbGl6YXRpb24gc291cmNlIHNlcGFyYXRvciAoOjopIG5vdCBmb3VuZC4nKTtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IChrZXkgYXMgc3RyaW5nKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXN0YXRlLmxvY2FsaXphdGlvbikgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCBrZXlzWzFdO1xyXG5cclxuICAgICAgY29uc3Qgc291cmNlTmFtZSA9XHJcbiAgICAgICAga2V5c1swXSB8fFxyXG4gICAgICAgIHNucSgoKSA9PiBzdGF0ZS5lbnZpcm9ubWVudC5sb2NhbGl6YXRpb24uZGVmYXVsdFJlc291cmNlTmFtZSkgfHxcclxuICAgICAgICBzdGF0ZS5sb2NhbGl6YXRpb24uZGVmYXVsdFJlc291cmNlTmFtZTtcclxuICAgICAgY29uc3Qgc291cmNlS2V5ID0ga2V5c1sxXTtcclxuXHJcbiAgICAgIGlmIChzb3VyY2VOYW1lID09PSAnXycpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IHNvdXJjZUtleTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFzb3VyY2VOYW1lKSB7XHJcbiAgICAgICAgd2FybihcclxuICAgICAgICAgICdMb2NhbGl6YXRpb24gc291cmNlIG5hbWUgaXMgbm90IHNwZWNpZmllZCBhbmQgdGhlIGRlZmF1bHRSZXNvdXJjZU5hbWUgd2FzIG5vdCBkZWZpbmVkIScsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCBzb3VyY2VLZXk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNvdXJjZSA9IHN0YXRlLmxvY2FsaXphdGlvbi52YWx1ZXNbc291cmNlTmFtZV07XHJcbiAgICAgIGlmICghc291cmNlKSB7XHJcbiAgICAgICAgd2FybignQ291bGQgbm90IGZpbmQgbG9jYWxpemF0aW9uIHNvdXJjZTogJyArIHNvdXJjZU5hbWUpO1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUgfHwgc291cmNlS2V5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbG9jYWxpemF0aW9uID0gc291cmNlW3NvdXJjZUtleV07XHJcbiAgICAgIGlmICh0eXBlb2YgbG9jYWxpemF0aW9uID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUgfHwgc291cmNlS2V5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnRlcnBvbGF0ZVBhcmFtcyA9IGludGVycG9sYXRlUGFyYW1zLmZpbHRlcihwYXJhbXMgPT4gcGFyYW1zICE9IG51bGwpO1xyXG4gICAgICBpZiAobG9jYWxpemF0aW9uICYmIGludGVycG9sYXRlUGFyYW1zICYmIGludGVycG9sYXRlUGFyYW1zLmxlbmd0aCkge1xyXG4gICAgICAgIGludGVycG9sYXRlUGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xyXG4gICAgICAgICAgbG9jYWxpemF0aW9uID0gbG9jYWxpemF0aW9uLnJlcGxhY2UoL1tcXCdcXFwiXT9cXHtbXFxkXStcXH1bXFwnXFxcIl0/LywgcGFyYW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGxvY2FsaXphdGlvbiAhPT0gJ3N0cmluZycpIGxvY2FsaXphdGlvbiA9ICcnO1xyXG4gICAgICByZXR1cm4gbG9jYWxpemF0aW9uIHx8IGRlZmF1bHRWYWx1ZSB8fCAoa2V5IGFzIHN0cmluZyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBAQWN0aW9uKEdldEFwcENvbmZpZ3VyYXRpb24pXHJcbiAgYWRkRGF0YSh7IHBhdGNoU3RhdGUsIGRpc3BhdGNoIH06IFN0YXRlQ29udGV4dDxDb25maWcuU3RhdGU+KSB7XHJcbiAgICBjb25zdCBhcGlOYW1lID0gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXREZWVwKCdlbnZpcm9ubWVudC5hcHBsaWNhdGlvbi5uYW1lJykpO1xyXG4gICAgY29uc3QgYXBpID0gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRBcGlVcmwoYXBpTmFtZSkpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0PEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5SZXNwb25zZT4oYCR7YXBpfS9hcGkvYWJwL2FwcGxpY2F0aW9uLWNvbmZpZ3VyYXRpb25gKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoY29uZmlndXJhdGlvbiA9PlxyXG4gICAgICAgICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICApLFxyXG4gICAgICAgIHN3aXRjaE1hcChjb25maWd1cmF0aW9uID0+IHtcclxuICAgICAgICAgIGxldCBkZWZhdWx0TGFuZzogc3RyaW5nID1cclxuICAgICAgICAgICAgY29uZmlndXJhdGlvbi5zZXR0aW5nLnZhbHVlc1snQWJwLkxvY2FsaXphdGlvbi5EZWZhdWx0TGFuZ3VhZ2UnXTtcclxuXHJcbiAgICAgICAgICBpZiAoZGVmYXVsdExhbmcuaW5jbHVkZXMoJzsnKSkge1xyXG4gICAgICAgICAgICBkZWZhdWx0TGFuZyA9IGRlZmF1bHRMYW5nLnNwbGl0KCc7JylbMF07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgJ2xhbmcnLFxyXG4gICAgICAgICAgICBjb25maWd1cmF0aW9uLmxvY2FsaXphdGlvbi5jdXJyZW50Q3VsdHVyZS5jdWx0dXJlTmFtZSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChTZXNzaW9uU3RhdGUuZ2V0TGFuZ3VhZ2UpXHJcbiAgICAgICAgICAgID8gb2YobnVsbClcclxuICAgICAgICAgICAgOiBkaXNwYXRjaChuZXcgU2V0TGFuZ3VhZ2UoZGVmYXVsdExhbmcsIGZhbHNlKSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2gobmV3IFJlc3RPY2N1ckVycm9yKG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7IHN0YXR1czogMCwgZXJyb3I6IGVyciB9KSkpO1xyXG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuICAgICAgICB9KSxcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oUGF0Y2hSb3V0ZUJ5TmFtZSlcclxuICBwYXRjaFJvdXRlKFxyXG4gICAgeyBwYXRjaFN0YXRlLCBnZXRTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8Q29uZmlnLlN0YXRlPixcclxuICAgIHsgbmFtZSwgbmV3VmFsdWUgfTogUGF0Y2hSb3V0ZUJ5TmFtZSxcclxuICApIHtcclxuICAgIGxldCByb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSA9IGdldFN0YXRlKCkucm91dGVzO1xyXG5cclxuICAgIHJvdXRlcyA9IHBhdGNoUm91dGVEZWVwKHJvdXRlcywgbmFtZSwgbmV3VmFsdWUpO1xyXG5cclxuICAgIGNvbnN0IGZsYXR0ZWRSb3V0ZXMgPSBnZXRTdGF0ZSgpLmZsYXR0ZWRSb3V0ZXM7XHJcbiAgICBjb25zdCBpbmRleCA9IGZsYXR0ZWRSb3V0ZXMuZmluZEluZGV4KHJvdXRlID0+IHJvdXRlLm5hbWUgPT09IG5hbWUpO1xyXG5cclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXNbaW5kZXhdID0geyAuLi5mbGF0dGVkUm91dGVzW2luZGV4XSwgLi4ubmV3VmFsdWUgfSBhcyBBQlAuRnVsbFJvdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRjaFN0YXRlKHtcclxuICAgICAgcm91dGVzLFxyXG4gICAgICBmbGF0dGVkUm91dGVzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKEFkZFJvdXRlKVxyXG4gIGFkZFJvdXRlKHsgcGF0Y2hTdGF0ZSwgZ2V0U3RhdGUgfTogU3RhdGVDb250ZXh0PENvbmZpZy5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBBZGRSb3V0ZSkge1xyXG4gICAgbGV0IHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdID0gZ2V0U3RhdGUoKS5yb3V0ZXM7XHJcbiAgICBjb25zdCBmbGF0dGVkUm91dGVzID0gZ2V0U3RhdGUoKS5mbGF0dGVkUm91dGVzO1xyXG4gICAgY29uc3Qgcm91dGU6IEFCUC5GdWxsUm91dGUgPSB7IC4uLnBheWxvYWQgfTtcclxuXHJcbiAgICBpZiAocm91dGUucGFyZW50TmFtZSkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGZsYXR0ZWRSb3V0ZXMuZmluZEluZGV4KHIgPT4gci5uYW1lID09PSByb3V0ZS5wYXJlbnROYW1lKTtcclxuXHJcbiAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IGZsYXR0ZWRSb3V0ZXNbaW5kZXhdO1xyXG4gICAgICBpZiAoKHBhcmVudC51cmwgfHwgJycpLnJlcGxhY2UoJy8nLCAnJykpIHtcclxuICAgICAgICByb3V0ZS51cmwgPSBgJHtwYXJlbnQudXJsfS8ke3JvdXRlLnBhdGh9YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByb3V0ZS51cmwgPSBgLyR7cm91dGUucGF0aH1gO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByb3V0ZS5jaGlsZHJlbiA9IHJvdXRlLmNoaWxkcmVuIHx8IFtdO1xyXG4gICAgICByb3V0ZS5vcmRlciA9IHJvdXRlLm9yZGVyIHx8IHJvdXRlLm9yZGVyID09PSAwID8gcm91dGUub3JkZXIgOiAocGFyZW50LmNoaWxkcmVuIHx8IFtdKS5sZW5ndGg7XHJcbiAgICAgIHBhcmVudC5jaGlsZHJlbiA9IFsuLi4ocGFyZW50LmNoaWxkcmVuIHx8IFtdKSwgcm91dGVdLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcclxuXHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXNbaW5kZXhdID0gcGFyZW50O1xyXG4gICAgICBmbGF0dGVkUm91dGVzLnB1c2gocm91dGUpO1xyXG5cclxuICAgICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnQubmFtZTtcclxuICAgICAgY29uc3QgcGFyZW50TmFtZUFyciA9IFtwYXJlbnROYW1lXTtcclxuXHJcbiAgICAgIHdoaWxlIChwYXJlbnROYW1lKSB7XHJcbiAgICAgICAgcGFyZW50TmFtZSA9IHNucSgoKSA9PiBmbGF0dGVkUm91dGVzLmZpbmQociA9PiByLm5hbWUgPT09IHBhcmVudE5hbWUpLnBhcmVudE5hbWUpO1xyXG5cclxuICAgICAgICBpZiAocGFyZW50TmFtZSkge1xyXG4gICAgICAgICAgcGFyZW50TmFtZUFyci51bnNoaWZ0KHBhcmVudE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcm91dGVzID0gdXBkYXRlUm91dGVEZWVwKHJvdXRlcywgcGFyZW50TmFtZUFyciwgcGFyZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlLnVybCA9IGAvJHtyb3V0ZS5wYXRofWA7XHJcblxyXG4gICAgICBpZiAocm91dGUub3JkZXIgfHwgcm91dGUub3JkZXIgPT09IDApIHtcclxuICAgICAgICByb3V0ZXMgPSBbLi4ucm91dGVzLCByb3V0ZV0uc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdXRlLm9yZGVyID0gcm91dGVzLmxlbmd0aDtcclxuICAgICAgICByb3V0ZXMgPSBbLi4ucm91dGVzLCByb3V0ZV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXMucHVzaChyb3V0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhdGNoU3RhdGUoe1xyXG4gICAgICByb3V0ZXMsXHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oU2V0RW52aXJvbm1lbnQpXHJcbiAgc2V0RW52aXJvbm1lbnQoeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxDb25maWcuU3RhdGU+LCB7IGVudmlyb25tZW50IH06IFNldEVudmlyb25tZW50KSB7XHJcbiAgICByZXR1cm4gcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIGVudmlyb25tZW50LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaFJvdXRlRGVlcChcclxuICByb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSxcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgbmV3VmFsdWU6IFBhcnRpYWw8QUJQLkZ1bGxSb3V0ZT4sXHJcbiAgcGFyZW50VXJsOiBzdHJpbmcgPSAnJyxcclxuKTogQUJQLkZ1bGxSb3V0ZVtdIHtcclxuICByb3V0ZXMgPSByb3V0ZXMubWFwKHJvdXRlID0+IHtcclxuICAgIGlmIChyb3V0ZS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgIG5ld1ZhbHVlLnVybCA9IGAke3BhcmVudFVybH0vJHsoIW5ld1ZhbHVlLnBhdGggfHwgbmV3VmFsdWUucGF0aCA9PT0gJydcclxuICAgICAgICA/IHJvdXRlLnBhdGhcclxuICAgICAgICA6IG5ld1ZhbHVlLnBhdGgpIHx8ICcnfWA7XHJcblxyXG4gICAgICBpZiAobmV3VmFsdWUuY2hpbGRyZW4gJiYgbmV3VmFsdWUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSBuZXdWYWx1ZS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gKHtcclxuICAgICAgICAgIC4uLmNoaWxkLFxyXG4gICAgICAgICAgdXJsOiBgJHtuZXdWYWx1ZS51cmx9LyR7Y2hpbGQucGF0aH1gLnJlcGxhY2UoJy8vJywgJy8nKSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7IC4uLnJvdXRlLCAuLi5uZXdWYWx1ZSB9O1xyXG4gICAgfSBlbHNlIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgcm91dGUuY2hpbGRyZW4gPSBwYXRjaFJvdXRlRGVlcChcclxuICAgICAgICByb3V0ZS5jaGlsZHJlbixcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIG5ld1ZhbHVlLFxyXG4gICAgICAgIChwYXJlbnRVcmwgfHwgJy8nKSArIHJvdXRlLnBhdGgsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJvdXRlO1xyXG4gIH0pO1xyXG5cclxuICBpZiAocGFyZW50VXJsKSB7XHJcbiAgICAvLyByZWN1cnNpdmUgYmxvY2tcclxuICAgIHJldHVybiByb3V0ZXM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb3JnYW5pemVSb3V0ZXMocm91dGVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUm91dGVEZWVwKFxyXG4gIHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdLFxyXG4gIHBhcmVudE5hbWVBcnI6IHN0cmluZ1tdLFxyXG4gIG5ld1ZhbHVlOiBBQlAuRnVsbFJvdXRlLFxyXG4gIHBhcmVudEluZGV4ID0gMCxcclxuKSB7XHJcbiAgY29uc3QgaW5kZXggPSByb3V0ZXMuZmluZEluZGV4KHJvdXRlID0+IHJvdXRlLm5hbWUgPT09IHBhcmVudE5hbWVBcnJbcGFyZW50SW5kZXhdKTtcclxuXHJcbiAgaWYgKHBhcmVudEluZGV4ID09PSBwYXJlbnROYW1lQXJyLmxlbmd0aCAtIDEpIHtcclxuICAgIHJvdXRlc1tpbmRleF0gPSBuZXdWYWx1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcm91dGVzW2luZGV4XS5jaGlsZHJlbiA9IHVwZGF0ZVJvdXRlRGVlcChcclxuICAgICAgcm91dGVzW2luZGV4XS5jaGlsZHJlbixcclxuICAgICAgcGFyZW50TmFtZUFycixcclxuICAgICAgbmV3VmFsdWUsXHJcbiAgICAgIHBhcmVudEluZGV4ICsgMSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm91dGVzO1xyXG59XHJcbiJdfQ==