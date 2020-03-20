var ConfigState_1;
/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/config.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import snq from 'snq';
import { AddRoute, GetAppConfiguration, PatchRouteByName, SetEnvironment, } from '../actions/config.actions';
import { SetLanguage } from '../actions/session.actions';
import { ApplicationConfigurationService } from '../services/application-configuration.service';
import { organizeRoutes } from '../utils/route-utils';
import { SessionState } from './session.state';
let ConfigState = ConfigState_1 = class ConfigState {
    /**
     * @param {?} appConfigurationService
     * @param {?} store
     */
    constructor(appConfigurationService, store) {
        this.appConfigurationService = appConfigurationService;
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
            return state.environment.apis[key || 'default'].url;
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
            if (!state.localization)
                return defaultValue || key;
            /** @type {?} */
            const defaultResourceName = snq((/**
             * @return {?}
             */
            () => state.environment.localization.defaultResourceName));
            if (keys[0] === '') {
                if (!defaultResourceName) {
                    throw new Error(`Please check your environment. May you forget set defaultResourceName?
              Here is the example:
               { production: false,
                 localization: {
                   defaultResourceName: 'MyProjectName'
                  }
               }`);
                }
                keys[0] = defaultResourceName;
            }
            /** @type {?} */
            let localization = ((/** @type {?} */ (keys))).reduce((/**
             * @param {?} acc
             * @param {?} val
             * @return {?}
             */
            (acc, val) => {
                if (acc) {
                    return acc[val];
                }
                return undefined;
            }), state.localization.values);
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
            return localization || defaultValue || key;
        }));
        return selector;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    addData({ patchState, dispatch }) {
        return this.appConfigurationService.getConfiguration().pipe(tap((/**
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
            return this.store.selectSnapshot(SessionState.getLanguage)
                ? of(null)
                : dispatch(new SetLanguage(defaultLang));
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
            route.order = route.order || route.order === 0 ? route.order : parent.children.length;
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
     * @param {?} environment
     * @return {?}
     */
    setEnvironment({ patchState }, environment) {
        return patchState({
            environment,
        });
    }
};
ConfigState.ctorParameters = () => [
    { type: ApplicationConfigurationService },
    { type: Store }
];
ConfigState.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigState.ctorParameters = () => [
    { type: ApplicationConfigurationService },
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
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
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
    tslib_1.__metadata("design:paramtypes", [ApplicationConfigurationService,
        Store])
], ConfigState);
export { ConfigState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigState.prototype.appConfigurationService;
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
            newValue.url = `${parentUrl}/${(!newValue.path && newValue.path === ''
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0YXRlcy9jb25maWcuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUNMLFFBQVEsRUFDUixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGNBQWMsR0FDZixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUd6RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0lBT2xDLFdBQVcseUJBQVgsV0FBVzs7Ozs7SUE4S3RCLFlBQ1UsdUJBQXdELEVBQ3hELEtBQVk7UUFEWiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQWlDO1FBQ3hELFVBQUssR0FBTCxLQUFLLENBQU87SUFDbkIsQ0FBQzs7Ozs7SUEvS0osTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFtQjtRQUMvQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBR0QsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQW1CO1FBQzNDLE9BQU8sS0FBSyxDQUFD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QkFBWSxLQUFLLEVBQUssUUFBUSxFQUFHO1NBQ2xDO2FBQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ2xELEtBQUssQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUM3QixLQUFLLENBQUMsUUFBUSxFQUNkLElBQUksRUFDSixRQUFRLEVBQ1IsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FDaEMsQ0FBQztTQUNIO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLEVBQUMsQ0FBQztJQUVILElBQUksU0FBUyxFQUFFO1FBQ2Isa0JBQWtCO1FBQ2xCLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFFRCxPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDOzs7Ozs7OztBQUVELFNBQVMsZUFBZSxDQUN0QixNQUF1QixFQUN2QixhQUF1QixFQUN2QixRQUF1QixFQUN2QixXQUFXLEdBQUcsQ0FBQzs7VUFFVCxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVM7Ozs7SUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFDO0lBRWxGLElBQUksV0FBVyxLQUFLLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzVDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUM7S0FDMUI7U0FBTTtRQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUN0QixhQUFhLEVBQ2IsUUFBUSxFQUNSLFdBQVcsR0FBRyxDQUFDLENBQ2hCLENBQUM7S0FDSDtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiwgY3JlYXRlU2VsZWN0b3IsIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHtcclxuICBBZGRSb3V0ZSxcclxuICBHZXRBcHBDb25maWd1cmF0aW9uLFxyXG4gIFBhdGNoUm91dGVCeU5hbWUsXHJcbiAgU2V0RW52aXJvbm1lbnQsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy9jb25maWcuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFNldExhbmd1YWdlIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9uLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZyc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcHBsaWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBvcmdhbml6ZVJvdXRlcyB9IGZyb20gJy4uL3V0aWxzL3JvdXRlLXV0aWxzJztcclxuaW1wb3J0IHsgU2Vzc2lvblN0YXRlIH0gZnJvbSAnLi9zZXNzaW9uLnN0YXRlJztcclxuXHJcbkBTdGF0ZTxDb25maWcuU3RhdGU+KHtcclxuICBuYW1lOiAnQ29uZmlnU3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7fSBhcyBDb25maWcuU3RhdGUsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1N0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRBbGwoc3RhdGU6IENvbmZpZy5TdGF0ZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0QXBwbGljYXRpb25JbmZvKHN0YXRlOiBDb25maWcuU3RhdGUpOiBDb25maWcuQXBwbGljYXRpb24ge1xyXG4gICAgcmV0dXJuIHN0YXRlLmVudmlyb25tZW50LmFwcGxpY2F0aW9uIHx8ICh7fSBhcyBDb25maWcuQXBwbGljYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldE9uZShrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gc3RhdGVba2V5XTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXREZWVwKGtleXM6IHN0cmluZ1tdIHwgc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZW9mIGtleXMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGtleXMgPSBrZXlzLnNwbGl0KCcuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBkb3Qgc3RyaW5nIG9yIGFuIHN0cmluZyBhcnJheS4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiAoa2V5cyBhcyBzdHJpbmdbXSkucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xyXG4gICAgICAgIGlmIChhY2MpIHtcclxuICAgICAgICAgIHJldHVybiBhY2NbdmFsXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH0sIHN0YXRlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRSb3V0ZShwYXRoPzogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgY29uc3QgeyBmbGF0dGVkUm91dGVzIH0gPSBzdGF0ZTtcclxuICAgICAgcmV0dXJuIChmbGF0dGVkUm91dGVzIGFzIEFCUC5GdWxsUm91dGVbXSkuZmluZChyb3V0ZSA9PiB7XHJcbiAgICAgICAgaWYgKHBhdGggJiYgcm91dGUucGF0aCA9PT0gcGF0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSAmJiByb3V0ZS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1cmwgJiYgcm91dGUudXJsID09PSB1cmwpIHtcclxuICAgICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEFwaVVybChrZXk/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpOiBzdHJpbmcgPT4ge1xyXG4gICAgICByZXR1cm4gc3RhdGUuZW52aXJvbm1lbnQuYXBpc1trZXkgfHwgJ2RlZmF1bHQnXS51cmw7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U2V0dGluZyhrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gc25xKCgpID0+IHN0YXRlLnNldHRpbmcudmFsdWVzW2tleV0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFNldHRpbmdzKGtleXdvcmQ/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgY29uc3Qgc2V0dGluZ3MgPSBzbnEoKCkgPT4gc3RhdGUuc2V0dGluZy52YWx1ZXMsIHt9KTtcclxuXHJcbiAgICAgIGlmICgha2V5d29yZCkgcmV0dXJuIHNldHRpbmdzO1xyXG5cclxuICAgICAgY29uc3Qga2V5c0ZvdW5kID0gT2JqZWN0LmtleXMoc2V0dGluZ3MpLmZpbHRlcihrZXkgPT4ga2V5LmluZGV4T2Yoa2V5d29yZCkgPiAtMSk7XHJcblxyXG4gICAgICByZXR1cm4ga2V5c0ZvdW5kLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgICAgICBhY2Nba2V5XSA9IHNldHRpbmdzW2tleV07XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgfSwge30pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEdyYW50ZWRQb2xpY3koa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpOiBib29sZWFuID0+IHtcclxuICAgICAgaWYgKCFrZXkpIHJldHVybiB0cnVlO1xyXG4gICAgICBjb25zdCBnZXRQb2xpY3kgPSBrID0+IHNucSgoKSA9PiBzdGF0ZS5hdXRoLmdyYW50ZWRQb2xpY2llc1trXSwgZmFsc2UpO1xyXG5cclxuICAgICAgY29uc3Qgb3JSZWdleHAgPSAvXFx8XFx8L2c7XHJcbiAgICAgIGNvbnN0IGFuZFJlZ2V4cCA9IC8mJi9nO1xyXG5cclxuICAgICAgaWYgKG9yUmVnZXhwLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJ3x8JykuZmlsdGVyKGsgPT4gISFrKTtcclxuXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoICE9PSAyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5c1swXS50cmltKCkpIHx8IGdldFBvbGljeShrZXlzWzFdLnRyaW0oKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYW5kUmVnZXhwLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJyYmJykuZmlsdGVyKGsgPT4gISFrKTtcclxuXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoICE9PSAyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5c1swXS50cmltKCkpICYmIGdldFBvbGljeShrZXlzWzFdLnRyaW0oKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRMb2NhbGl6YXRpb24oXHJcbiAgICBrZXk6IHN0cmluZyB8IENvbmZpZy5Mb2NhbGl6YXRpb25XaXRoRGVmYXVsdCxcclxuICAgIC4uLmludGVycG9sYXRlUGFyYW1zOiBzdHJpbmdbXVxyXG4gICkge1xyXG4gICAgaWYgKCFrZXkpIGtleSA9ICcnO1xyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBkZWZhdWx0VmFsdWUgPSBrZXkuZGVmYXVsdFZhbHVlO1xyXG4gICAgICBrZXkgPSBrZXkua2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJzo6JykgYXMgc3RyaW5nW107XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIGlmICghc3RhdGUubG9jYWxpemF0aW9uKSByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IGtleTtcclxuXHJcbiAgICAgIGNvbnN0IGRlZmF1bHRSZXNvdXJjZU5hbWUgPSBzbnEoKCkgPT4gc3RhdGUuZW52aXJvbm1lbnQubG9jYWxpemF0aW9uLmRlZmF1bHRSZXNvdXJjZU5hbWUpO1xyXG4gICAgICBpZiAoa2V5c1swXSA9PT0gJycpIHtcclxuICAgICAgICBpZiAoIWRlZmF1bHRSZXNvdXJjZU5hbWUpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgYFBsZWFzZSBjaGVjayB5b3VyIGVudmlyb25tZW50LiBNYXkgeW91IGZvcmdldCBzZXQgZGVmYXVsdFJlc291cmNlTmFtZT9cclxuICAgICAgICAgICAgICBIZXJlIGlzIHRoZSBleGFtcGxlOlxyXG4gICAgICAgICAgICAgICB7IHByb2R1Y3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgIGxvY2FsaXphdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgZGVmYXVsdFJlc291cmNlTmFtZTogJ015UHJvamVjdE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfWAsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAga2V5c1swXSA9IGRlZmF1bHRSZXNvdXJjZU5hbWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBsb2NhbGl6YXRpb24gPSAoa2V5cyBhcyBhbnkpLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcclxuICAgICAgICBpZiAoYWNjKSB7XHJcbiAgICAgICAgICByZXR1cm4gYWNjW3ZhbF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9LCBzdGF0ZS5sb2NhbGl6YXRpb24udmFsdWVzKTtcclxuXHJcbiAgICAgIGludGVycG9sYXRlUGFyYW1zID0gaW50ZXJwb2xhdGVQYXJhbXMuZmlsdGVyKHBhcmFtcyA9PiBwYXJhbXMgIT0gbnVsbCk7XHJcbiAgICAgIGlmIChsb2NhbGl6YXRpb24gJiYgaW50ZXJwb2xhdGVQYXJhbXMgJiYgaW50ZXJwb2xhdGVQYXJhbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgaW50ZXJwb2xhdGVQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XHJcbiAgICAgICAgICBsb2NhbGl6YXRpb24gPSBsb2NhbGl6YXRpb24ucmVwbGFjZSgvW1xcJ1xcXCJdP1xce1tcXGRdK1xcfVtcXCdcXFwiXT8vLCBwYXJhbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgbG9jYWxpemF0aW9uICE9PSAnc3RyaW5nJykgbG9jYWxpemF0aW9uID0gJyc7XHJcbiAgICAgIHJldHVybiBsb2NhbGl6YXRpb24gfHwgZGVmYXVsdFZhbHVlIHx8IGtleTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhcHBDb25maWd1cmF0aW9uU2VydmljZTogQXBwbGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICkge31cclxuXHJcbiAgQEFjdGlvbihHZXRBcHBDb25maWd1cmF0aW9uKVxyXG4gIGFkZERhdGEoeyBwYXRjaFN0YXRlLCBkaXNwYXRjaCB9OiBTdGF0ZUNvbnRleHQ8Q29uZmlnLlN0YXRlPikge1xyXG4gICAgcmV0dXJuIHRoaXMuYXBwQ29uZmlndXJhdGlvblNlcnZpY2UuZ2V0Q29uZmlndXJhdGlvbigpLnBpcGUoXHJcbiAgICAgIHRhcChjb25maWd1cmF0aW9uID0+XHJcbiAgICAgICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgICAgICAuLi5jb25maWd1cmF0aW9uLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgICBzd2l0Y2hNYXAoY29uZmlndXJhdGlvbiA9PiB7XHJcbiAgICAgICAgbGV0IGRlZmF1bHRMYW5nOiBzdHJpbmcgPSBjb25maWd1cmF0aW9uLnNldHRpbmcudmFsdWVzWydBYnAuTG9jYWxpemF0aW9uLkRlZmF1bHRMYW5ndWFnZSddO1xyXG5cclxuICAgICAgICBpZiAoZGVmYXVsdExhbmcuaW5jbHVkZXMoJzsnKSkge1xyXG4gICAgICAgICAgZGVmYXVsdExhbmcgPSBkZWZhdWx0TGFuZy5zcGxpdCgnOycpWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlLmdldExhbmd1YWdlKVxyXG4gICAgICAgICAgPyBvZihudWxsKVxyXG4gICAgICAgICAgOiBkaXNwYXRjaChuZXcgU2V0TGFuZ3VhZ2UoZGVmYXVsdExhbmcpKTtcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihQYXRjaFJvdXRlQnlOYW1lKVxyXG4gIHBhdGNoUm91dGUoXHJcbiAgICB7IHBhdGNoU3RhdGUsIGdldFN0YXRlIH06IFN0YXRlQ29udGV4dDxDb25maWcuU3RhdGU+LFxyXG4gICAgeyBuYW1lLCBuZXdWYWx1ZSB9OiBQYXRjaFJvdXRlQnlOYW1lLFxyXG4gICkge1xyXG4gICAgbGV0IHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdID0gZ2V0U3RhdGUoKS5yb3V0ZXM7XHJcblxyXG4gICAgcm91dGVzID0gcGF0Y2hSb3V0ZURlZXAocm91dGVzLCBuYW1lLCBuZXdWYWx1ZSk7XHJcblxyXG4gICAgY29uc3QgZmxhdHRlZFJvdXRlcyA9IGdldFN0YXRlKCkuZmxhdHRlZFJvdXRlcztcclxuICAgIGNvbnN0IGluZGV4ID0gZmxhdHRlZFJvdXRlcy5maW5kSW5kZXgocm91dGUgPT4gcm91dGUubmFtZSA9PT0gbmFtZSk7XHJcblxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgZmxhdHRlZFJvdXRlc1tpbmRleF0gPSB7IC4uLmZsYXR0ZWRSb3V0ZXNbaW5kZXhdLCAuLi5uZXdWYWx1ZSB9IGFzIEFCUC5GdWxsUm91dGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhdGNoU3RhdGUoe1xyXG4gICAgICByb3V0ZXMsXHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oQWRkUm91dGUpXHJcbiAgYWRkUm91dGUoeyBwYXRjaFN0YXRlLCBnZXRTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8Q29uZmlnLlN0YXRlPiwgeyBwYXlsb2FkIH06IEFkZFJvdXRlKSB7XHJcbiAgICBsZXQgcm91dGVzOiBBQlAuRnVsbFJvdXRlW10gPSBnZXRTdGF0ZSgpLnJvdXRlcztcclxuICAgIGNvbnN0IGZsYXR0ZWRSb3V0ZXMgPSBnZXRTdGF0ZSgpLmZsYXR0ZWRSb3V0ZXM7XHJcbiAgICBjb25zdCByb3V0ZTogQUJQLkZ1bGxSb3V0ZSA9IHsgLi4ucGF5bG9hZCB9O1xyXG5cclxuICAgIGlmIChyb3V0ZS5wYXJlbnROYW1lKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZmxhdHRlZFJvdXRlcy5maW5kSW5kZXgociA9PiByLm5hbWUgPT09IHJvdXRlLnBhcmVudE5hbWUpO1xyXG5cclxuICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgcGFyZW50ID0gZmxhdHRlZFJvdXRlc1tpbmRleF07XHJcbiAgICAgIGlmICgocGFyZW50LnVybCB8fCAnJykucmVwbGFjZSgnLycsICcnKSkge1xyXG4gICAgICAgIHJvdXRlLnVybCA9IGAke3BhcmVudC51cmx9LyR7cm91dGUucGF0aH1gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdXRlLnVybCA9IGAvJHtyb3V0ZS5wYXRofWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvdXRlLm9yZGVyID0gcm91dGUub3JkZXIgfHwgcm91dGUub3JkZXIgPT09IDAgPyByb3V0ZS5vcmRlciA6IHBhcmVudC5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgIHBhcmVudC5jaGlsZHJlbiA9IFsuLi4ocGFyZW50LmNoaWxkcmVuIHx8IFtdKSwgcm91dGVdLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcclxuXHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXNbaW5kZXhdID0gcGFyZW50O1xyXG4gICAgICBmbGF0dGVkUm91dGVzLnB1c2gocm91dGUpO1xyXG5cclxuICAgICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnQubmFtZTtcclxuICAgICAgY29uc3QgcGFyZW50TmFtZUFyciA9IFtwYXJlbnROYW1lXTtcclxuXHJcbiAgICAgIHdoaWxlIChwYXJlbnROYW1lKSB7XHJcbiAgICAgICAgcGFyZW50TmFtZSA9IHNucSgoKSA9PiBmbGF0dGVkUm91dGVzLmZpbmQociA9PiByLm5hbWUgPT09IHBhcmVudE5hbWUpLnBhcmVudE5hbWUpO1xyXG5cclxuICAgICAgICBpZiAocGFyZW50TmFtZSkge1xyXG4gICAgICAgICAgcGFyZW50TmFtZUFyci51bnNoaWZ0KHBhcmVudE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcm91dGVzID0gdXBkYXRlUm91dGVEZWVwKHJvdXRlcywgcGFyZW50TmFtZUFyciwgcGFyZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlLnVybCA9IGAvJHtyb3V0ZS5wYXRofWA7XHJcblxyXG4gICAgICBpZiAocm91dGUub3JkZXIgfHwgcm91dGUub3JkZXIgPT09IDApIHtcclxuICAgICAgICByb3V0ZXMgPSBbLi4ucm91dGVzLCByb3V0ZV0uc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdXRlLm9yZGVyID0gcm91dGVzLmxlbmd0aDtcclxuICAgICAgICByb3V0ZXMgPSBbLi4ucm91dGVzLCByb3V0ZV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXMucHVzaChyb3V0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhdGNoU3RhdGUoe1xyXG4gICAgICByb3V0ZXMsXHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oU2V0RW52aXJvbm1lbnQpXHJcbiAgc2V0RW52aXJvbm1lbnQoeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxDb25maWcuU3RhdGU+LCBlbnZpcm9ubWVudDogQ29uZmlnLkVudmlyb25tZW50KSB7XHJcbiAgICByZXR1cm4gcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIGVudmlyb25tZW50LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaFJvdXRlRGVlcChcclxuICByb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSxcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgbmV3VmFsdWU6IFBhcnRpYWw8QUJQLkZ1bGxSb3V0ZT4sXHJcbiAgcGFyZW50VXJsOiBzdHJpbmcgPSAnJyxcclxuKTogQUJQLkZ1bGxSb3V0ZVtdIHtcclxuICByb3V0ZXMgPSByb3V0ZXMubWFwKHJvdXRlID0+IHtcclxuICAgIGlmIChyb3V0ZS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgIG5ld1ZhbHVlLnVybCA9IGAke3BhcmVudFVybH0vJHsoIW5ld1ZhbHVlLnBhdGggJiYgbmV3VmFsdWUucGF0aCA9PT0gJydcclxuICAgICAgICA/IHJvdXRlLnBhdGhcclxuICAgICAgICA6IG5ld1ZhbHVlLnBhdGgpIHx8ICcnfWA7XHJcblxyXG4gICAgICBpZiAobmV3VmFsdWUuY2hpbGRyZW4gJiYgbmV3VmFsdWUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSBuZXdWYWx1ZS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gKHtcclxuICAgICAgICAgIC4uLmNoaWxkLFxyXG4gICAgICAgICAgdXJsOiBgJHtuZXdWYWx1ZS51cmx9LyR7Y2hpbGQucGF0aH1gLnJlcGxhY2UoJy8vJywgJy8nKSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7IC4uLnJvdXRlLCAuLi5uZXdWYWx1ZSB9O1xyXG4gICAgfSBlbHNlIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgcm91dGUuY2hpbGRyZW4gPSBwYXRjaFJvdXRlRGVlcChcclxuICAgICAgICByb3V0ZS5jaGlsZHJlbixcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIG5ld1ZhbHVlLFxyXG4gICAgICAgIChwYXJlbnRVcmwgfHwgJy8nKSArIHJvdXRlLnBhdGgsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJvdXRlO1xyXG4gIH0pO1xyXG5cclxuICBpZiAocGFyZW50VXJsKSB7XHJcbiAgICAvLyByZWN1cnNpdmUgYmxvY2tcclxuICAgIHJldHVybiByb3V0ZXM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb3JnYW5pemVSb3V0ZXMocm91dGVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUm91dGVEZWVwKFxyXG4gIHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdLFxyXG4gIHBhcmVudE5hbWVBcnI6IHN0cmluZ1tdLFxyXG4gIG5ld1ZhbHVlOiBBQlAuRnVsbFJvdXRlLFxyXG4gIHBhcmVudEluZGV4ID0gMCxcclxuKSB7XHJcbiAgY29uc3QgaW5kZXggPSByb3V0ZXMuZmluZEluZGV4KHJvdXRlID0+IHJvdXRlLm5hbWUgPT09IHBhcmVudE5hbWVBcnJbcGFyZW50SW5kZXhdKTtcclxuXHJcbiAgaWYgKHBhcmVudEluZGV4ID09PSBwYXJlbnROYW1lQXJyLmxlbmd0aCAtIDEpIHtcclxuICAgIHJvdXRlc1tpbmRleF0gPSBuZXdWYWx1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcm91dGVzW2luZGV4XS5jaGlsZHJlbiA9IHVwZGF0ZVJvdXRlRGVlcChcclxuICAgICAgcm91dGVzW2luZGV4XS5jaGlsZHJlbixcclxuICAgICAgcGFyZW50TmFtZUFycixcclxuICAgICAgbmV3VmFsdWUsXHJcbiAgICAgIHBhcmVudEluZGV4ICsgMSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm91dGVzO1xyXG59XHJcbiJdfQ==