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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0YXRlcy9jb25maWcuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUNMLFFBQVEsRUFDUixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGNBQWMsR0FDZixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUd6RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0lBT2xDLFdBQVcseUJBQVgsV0FBVzs7Ozs7SUE4S3RCLFlBQ1UsdUJBQXdELEVBQ3hELEtBQVk7UUFEWiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQWlDO1FBQ3hELFVBQUssR0FBTCxLQUFLLENBQU87SUFDbkIsQ0FBQzs7Ozs7SUEvS0osTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFtQjtRQUMvQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBR0QsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQW1CO1FBQzNDLE9BQU8sS0FBSyxDQUFD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Q2IsUUFBUSxFQUNSLFdBQVcsR0FBRyxDQUFDLENBQ2hCLENBQUM7S0FDSDtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiwgY3JlYXRlU2VsZWN0b3IsIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHtcclxuICBBZGRSb3V0ZSxcclxuICBHZXRBcHBDb25maWd1cmF0aW9uLFxyXG4gIFBhdGNoUm91dGVCeU5hbWUsXHJcbiAgU2V0RW52aXJvbm1lbnQsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy9jb25maWcuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFNldExhbmd1YWdlIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9uLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZyc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcHBsaWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBvcmdhbml6ZVJvdXRlcyB9IGZyb20gJy4uL3V0aWxzL3JvdXRlLXV0aWxzJztcclxuaW1wb3J0IHsgU2Vzc2lvblN0YXRlIH0gZnJvbSAnLi9zZXNzaW9uLnN0YXRlJztcclxuXHJcbkBTdGF0ZTxDb25maWcuU3RhdGU+KHtcclxuICBuYW1lOiAnQ29uZmlnU3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7fSBhcyBDb25maWcuU3RhdGUsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1N0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRBbGwoc3RhdGU6IENvbmZpZy5TdGF0ZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0QXBwbGljYXRpb25JbmZvKHN0YXRlOiBDb25maWcuU3RhdGUpOiBDb25maWcuQXBwbGljYXRpb24ge1xyXG4gICAgcmV0dXJuIHN0YXRlLmVudmlyb25tZW50LmFwcGxpY2F0aW9uIHx8ICh7fSBhcyBDb25maWcuQXBwbGljYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldE9uZShrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gc3RhdGVba2V5XTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXREZWVwKGtleXM6IHN0cmluZ1tdIHwgc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZW9mIGtleXMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGtleXMgPSBrZXlzLnNwbGl0KCcuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBkb3Qgc3RyaW5nIG9yIGFuIHN0cmluZyBhcnJheS4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiAoa2V5cyBhcyBzdHJpbmdbXSkucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xyXG4gICAgICAgIGlmIChhY2MpIHtcclxuICAgICAgICAgIHJldHVybiBhY2NbdmFsXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH0sIHN0YXRlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRSb3V0ZShwYXRoPzogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgY29uc3QgeyBmbGF0dGVkUm91dGVzIH0gPSBzdGF0ZTtcclxuICAgICAgcmV0dXJuIChmbGF0dGVkUm91dGVzIGFzIEFCUC5GdWxsUm91dGVbXSkuZmluZChyb3V0ZSA9PiB7XHJcbiAgICAgICAgaWYgKHBhdGggJiYgcm91dGUucGF0aCA9PT0gcGF0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSAmJiByb3V0ZS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1cmwgJiYgcm91dGUudXJsID09PSB1cmwpIHtcclxuICAgICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEFwaVVybChrZXk/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpOiBzdHJpbmcgPT4ge1xyXG4gICAgICByZXR1cm4gKHN0YXRlLmVudmlyb25tZW50LmFwaXNba2V5IHx8ICdkZWZhdWx0J10gfHwgc3RhdGUuZW52aXJvbm1lbnQuYXBpcy5kZWZhdWx0KS51cmw7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U2V0dGluZyhrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gc25xKCgpID0+IHN0YXRlLnNldHRpbmcudmFsdWVzW2tleV0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFNldHRpbmdzKGtleXdvcmQ/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgY29uc3Qgc2V0dGluZ3MgPSBzbnEoKCkgPT4gc3RhdGUuc2V0dGluZy52YWx1ZXMsIHt9KTtcclxuXHJcbiAgICAgIGlmICgha2V5d29yZCkgcmV0dXJuIHNldHRpbmdzO1xyXG5cclxuICAgICAgY29uc3Qga2V5c0ZvdW5kID0gT2JqZWN0LmtleXMoc2V0dGluZ3MpLmZpbHRlcihrZXkgPT4ga2V5LmluZGV4T2Yoa2V5d29yZCkgPiAtMSk7XHJcblxyXG4gICAgICByZXR1cm4ga2V5c0ZvdW5kLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgICAgICBhY2Nba2V5XSA9IHNldHRpbmdzW2tleV07XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgfSwge30pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEdyYW50ZWRQb2xpY3koa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpOiBib29sZWFuID0+IHtcclxuICAgICAgaWYgKCFrZXkpIHJldHVybiB0cnVlO1xyXG4gICAgICBjb25zdCBnZXRQb2xpY3kgPSBrID0+IHNucSgoKSA9PiBzdGF0ZS5hdXRoLmdyYW50ZWRQb2xpY2llc1trXSwgZmFsc2UpO1xyXG5cclxuICAgICAgY29uc3Qgb3JSZWdleHAgPSAvXFx8XFx8L2c7XHJcbiAgICAgIGNvbnN0IGFuZFJlZ2V4cCA9IC8mJi9nO1xyXG5cclxuICAgICAgaWYgKG9yUmVnZXhwLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJ3x8JykuZmlsdGVyKGsgPT4gISFrKTtcclxuXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoICE9PSAyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5c1swXS50cmltKCkpIHx8IGdldFBvbGljeShrZXlzWzFdLnRyaW0oKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYW5kUmVnZXhwLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJyYmJykuZmlsdGVyKGsgPT4gISFrKTtcclxuXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoICE9PSAyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5c1swXS50cmltKCkpICYmIGdldFBvbGljeShrZXlzWzFdLnRyaW0oKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRMb2NhbGl6YXRpb24oXHJcbiAgICBrZXk6IHN0cmluZyB8IENvbmZpZy5Mb2NhbGl6YXRpb25XaXRoRGVmYXVsdCxcclxuICAgIC4uLmludGVycG9sYXRlUGFyYW1zOiBzdHJpbmdbXVxyXG4gICkge1xyXG4gICAgaWYgKCFrZXkpIGtleSA9ICcnO1xyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBkZWZhdWx0VmFsdWUgPSBrZXkuZGVmYXVsdFZhbHVlO1xyXG4gICAgICBrZXkgPSBrZXkua2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJzo6JykgYXMgc3RyaW5nW107XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIGlmICghc3RhdGUubG9jYWxpemF0aW9uKSByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IGtleTtcclxuXHJcbiAgICAgIGNvbnN0IGRlZmF1bHRSZXNvdXJjZU5hbWUgPSBzbnEoKCkgPT4gc3RhdGUuZW52aXJvbm1lbnQubG9jYWxpemF0aW9uLmRlZmF1bHRSZXNvdXJjZU5hbWUpO1xyXG4gICAgICBpZiAoa2V5c1swXSA9PT0gJycpIHtcclxuICAgICAgICBpZiAoIWRlZmF1bHRSZXNvdXJjZU5hbWUpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgYFBsZWFzZSBjaGVjayB5b3VyIGVudmlyb25tZW50LiBNYXkgeW91IGZvcmdldCBzZXQgZGVmYXVsdFJlc291cmNlTmFtZT9cclxuICAgICAgICAgICAgICBIZXJlIGlzIHRoZSBleGFtcGxlOlxyXG4gICAgICAgICAgICAgICB7IHByb2R1Y3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgIGxvY2FsaXphdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgZGVmYXVsdFJlc291cmNlTmFtZTogJ015UHJvamVjdE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfWAsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAga2V5c1swXSA9IGRlZmF1bHRSZXNvdXJjZU5hbWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBsb2NhbGl6YXRpb24gPSAoa2V5cyBhcyBhbnkpLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcclxuICAgICAgICBpZiAoYWNjKSB7XHJcbiAgICAgICAgICByZXR1cm4gYWNjW3ZhbF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9LCBzdGF0ZS5sb2NhbGl6YXRpb24udmFsdWVzKTtcclxuXHJcbiAgICAgIGludGVycG9sYXRlUGFyYW1zID0gaW50ZXJwb2xhdGVQYXJhbXMuZmlsdGVyKHBhcmFtcyA9PiBwYXJhbXMgIT0gbnVsbCk7XHJcbiAgICAgIGlmIChsb2NhbGl6YXRpb24gJiYgaW50ZXJwb2xhdGVQYXJhbXMgJiYgaW50ZXJwb2xhdGVQYXJhbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgaW50ZXJwb2xhdGVQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XHJcbiAgICAgICAgICBsb2NhbGl6YXRpb24gPSBsb2NhbGl6YXRpb24ucmVwbGFjZSgvW1xcJ1xcXCJdP1xce1tcXGRdK1xcfVtcXCdcXFwiXT8vLCBwYXJhbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgbG9jYWxpemF0aW9uICE9PSAnc3RyaW5nJykgbG9jYWxpemF0aW9uID0gJyc7XHJcbiAgICAgIHJldHVybiBsb2NhbGl6YXRpb24gfHwgZGVmYXVsdFZhbHVlIHx8IGtleTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhcHBDb25maWd1cmF0aW9uU2VydmljZTogQXBwbGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICkge31cclxuXHJcbiAgQEFjdGlvbihHZXRBcHBDb25maWd1cmF0aW9uKVxyXG4gIGFkZERhdGEoeyBwYXRjaFN0YXRlLCBkaXNwYXRjaCB9OiBTdGF0ZUNvbnRleHQ8Q29uZmlnLlN0YXRlPikge1xyXG4gICAgcmV0dXJuIHRoaXMuYXBwQ29uZmlndXJhdGlvblNlcnZpY2UuZ2V0Q29uZmlndXJhdGlvbigpLnBpcGUoXHJcbiAgICAgIHRhcChjb25maWd1cmF0aW9uID0+XHJcbiAgICAgICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgICAgICAuLi5jb25maWd1cmF0aW9uLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgICBzd2l0Y2hNYXAoY29uZmlndXJhdGlvbiA9PiB7XHJcbiAgICAgICAgbGV0IGRlZmF1bHRMYW5nOiBzdHJpbmcgPSBjb25maWd1cmF0aW9uLnNldHRpbmcudmFsdWVzWydBYnAuTG9jYWxpemF0aW9uLkRlZmF1bHRMYW5ndWFnZSddO1xyXG5cclxuICAgICAgICBpZiAoZGVmYXVsdExhbmcuaW5jbHVkZXMoJzsnKSkge1xyXG4gICAgICAgICAgZGVmYXVsdExhbmcgPSBkZWZhdWx0TGFuZy5zcGxpdCgnOycpWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlLmdldExhbmd1YWdlKVxyXG4gICAgICAgICAgPyBvZihudWxsKVxyXG4gICAgICAgICAgOiBkaXNwYXRjaChuZXcgU2V0TGFuZ3VhZ2UoZGVmYXVsdExhbmcpKTtcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihQYXRjaFJvdXRlQnlOYW1lKVxyXG4gIHBhdGNoUm91dGUoXHJcbiAgICB7IHBhdGNoU3RhdGUsIGdldFN0YXRlIH06IFN0YXRlQ29udGV4dDxDb25maWcuU3RhdGU+LFxyXG4gICAgeyBuYW1lLCBuZXdWYWx1ZSB9OiBQYXRjaFJvdXRlQnlOYW1lLFxyXG4gICkge1xyXG4gICAgbGV0IHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdID0gZ2V0U3RhdGUoKS5yb3V0ZXM7XHJcblxyXG4gICAgcm91dGVzID0gcGF0Y2hSb3V0ZURlZXAocm91dGVzLCBuYW1lLCBuZXdWYWx1ZSk7XHJcblxyXG4gICAgY29uc3QgZmxhdHRlZFJvdXRlcyA9IGdldFN0YXRlKCkuZmxhdHRlZFJvdXRlcztcclxuICAgIGNvbnN0IGluZGV4ID0gZmxhdHRlZFJvdXRlcy5maW5kSW5kZXgocm91dGUgPT4gcm91dGUubmFtZSA9PT0gbmFtZSk7XHJcblxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgZmxhdHRlZFJvdXRlc1tpbmRleF0gPSB7IC4uLmZsYXR0ZWRSb3V0ZXNbaW5kZXhdLCAuLi5uZXdWYWx1ZSB9IGFzIEFCUC5GdWxsUm91dGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhdGNoU3RhdGUoe1xyXG4gICAgICByb3V0ZXMsXHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oQWRkUm91dGUpXHJcbiAgYWRkUm91dGUoeyBwYXRjaFN0YXRlLCBnZXRTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8Q29uZmlnLlN0YXRlPiwgeyBwYXlsb2FkIH06IEFkZFJvdXRlKSB7XHJcbiAgICBsZXQgcm91dGVzOiBBQlAuRnVsbFJvdXRlW10gPSBnZXRTdGF0ZSgpLnJvdXRlcztcclxuICAgIGNvbnN0IGZsYXR0ZWRSb3V0ZXMgPSBnZXRTdGF0ZSgpLmZsYXR0ZWRSb3V0ZXM7XHJcbiAgICBjb25zdCByb3V0ZTogQUJQLkZ1bGxSb3V0ZSA9IHsgLi4ucGF5bG9hZCB9O1xyXG5cclxuICAgIGlmIChyb3V0ZS5wYXJlbnROYW1lKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZmxhdHRlZFJvdXRlcy5maW5kSW5kZXgociA9PiByLm5hbWUgPT09IHJvdXRlLnBhcmVudE5hbWUpO1xyXG5cclxuICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgcGFyZW50ID0gZmxhdHRlZFJvdXRlc1tpbmRleF07XHJcbiAgICAgIGlmICgocGFyZW50LnVybCB8fCAnJykucmVwbGFjZSgnLycsICcnKSkge1xyXG4gICAgICAgIHJvdXRlLnVybCA9IGAke3BhcmVudC51cmx9LyR7cm91dGUucGF0aH1gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdXRlLnVybCA9IGAvJHtyb3V0ZS5wYXRofWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvdXRlLmNoaWxkcmVuID0gcm91dGUuY2hpbGRyZW4gfHwgW107XHJcbiAgICAgIHJvdXRlLm9yZGVyID0gcm91dGUub3JkZXIgfHwgcm91dGUub3JkZXIgPT09IDAgPyByb3V0ZS5vcmRlciA6IChwYXJlbnQuY2hpbGRyZW4gfHwgW10pLmxlbmd0aDtcclxuICAgICAgcGFyZW50LmNoaWxkcmVuID0gWy4uLihwYXJlbnQuY2hpbGRyZW4gfHwgW10pLCByb3V0ZV0uc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG5cclxuICAgICAgZmxhdHRlZFJvdXRlc1tpbmRleF0gPSBwYXJlbnQ7XHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXMucHVzaChyb3V0ZSk7XHJcblxyXG4gICAgICBsZXQgcGFyZW50TmFtZSA9IHBhcmVudC5uYW1lO1xyXG4gICAgICBjb25zdCBwYXJlbnROYW1lQXJyID0gW3BhcmVudE5hbWVdO1xyXG5cclxuICAgICAgd2hpbGUgKHBhcmVudE5hbWUpIHtcclxuICAgICAgICBwYXJlbnROYW1lID0gc25xKCgpID0+IGZsYXR0ZWRSb3V0ZXMuZmluZChyID0+IHIubmFtZSA9PT0gcGFyZW50TmFtZSkucGFyZW50TmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChwYXJlbnROYW1lKSB7XHJcbiAgICAgICAgICBwYXJlbnROYW1lQXJyLnVuc2hpZnQocGFyZW50TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByb3V0ZXMgPSB1cGRhdGVSb3V0ZURlZXAocm91dGVzLCBwYXJlbnROYW1lQXJyLCBwYXJlbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGUudXJsID0gYC8ke3JvdXRlLnBhdGh9YDtcclxuXHJcbiAgICAgIGlmIChyb3V0ZS5vcmRlciB8fCByb3V0ZS5vcmRlciA9PT0gMCkge1xyXG4gICAgICAgIHJvdXRlcyA9IFsuLi5yb3V0ZXMsIHJvdXRlXS5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm91dGUub3JkZXIgPSByb3V0ZXMubGVuZ3RoO1xyXG4gICAgICAgIHJvdXRlcyA9IFsuLi5yb3V0ZXMsIHJvdXRlXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZmxhdHRlZFJvdXRlcy5wdXNoKHJvdXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIHJvdXRlcyxcclxuICAgICAgZmxhdHRlZFJvdXRlcyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihTZXRFbnZpcm9ubWVudClcclxuICBzZXRFbnZpcm9ubWVudCh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PENvbmZpZy5TdGF0ZT4sIHsgZW52aXJvbm1lbnQgfTogU2V0RW52aXJvbm1lbnQpIHtcclxuICAgIHJldHVybiBwYXRjaFN0YXRlKHtcclxuICAgICAgZW52aXJvbm1lbnQsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoUm91dGVEZWVwKFxyXG4gIHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdLFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBuZXdWYWx1ZTogUGFydGlhbDxBQlAuRnVsbFJvdXRlPixcclxuICBwYXJlbnRVcmw6IHN0cmluZyA9ICcnLFxyXG4pOiBBQlAuRnVsbFJvdXRlW10ge1xyXG4gIHJvdXRlcyA9IHJvdXRlcy5tYXAocm91dGUgPT4ge1xyXG4gICAgaWYgKHJvdXRlLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgbmV3VmFsdWUudXJsID0gYCR7cGFyZW50VXJsfS8keyghbmV3VmFsdWUucGF0aCAmJiBuZXdWYWx1ZS5wYXRoID09PSAnJ1xyXG4gICAgICAgID8gcm91dGUucGF0aFxyXG4gICAgICAgIDogbmV3VmFsdWUucGF0aCkgfHwgJyd9YDtcclxuXHJcbiAgICAgIGlmIChuZXdWYWx1ZS5jaGlsZHJlbiAmJiBuZXdWYWx1ZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IG5ld1ZhbHVlLmNoaWxkcmVuLm1hcChjaGlsZCA9PiAoe1xyXG4gICAgICAgICAgLi4uY2hpbGQsXHJcbiAgICAgICAgICB1cmw6IGAke25ld1ZhbHVlLnVybH0vJHtjaGlsZC5wYXRofWAucmVwbGFjZSgnLy8nLCAnLycpLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHsgLi4ucm91dGUsIC4uLm5ld1ZhbHVlIH07XHJcbiAgICB9IGVsc2UgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICByb3V0ZS5jaGlsZHJlbiA9IHBhdGNoUm91dGVEZWVwKFxyXG4gICAgICAgIHJvdXRlLmNoaWxkcmVuLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgbmV3VmFsdWUsXHJcbiAgICAgICAgKHBhcmVudFVybCB8fCAnLycpICsgcm91dGUucGF0aCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcm91dGU7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChwYXJlbnRVcmwpIHtcclxuICAgIC8vIHJlY3Vyc2l2ZSBibG9ja1xyXG4gICAgcmV0dXJuIHJvdXRlcztcclxuICB9XHJcblxyXG4gIHJldHVybiBvcmdhbml6ZVJvdXRlcyhyb3V0ZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVSb3V0ZURlZXAoXHJcbiAgcm91dGVzOiBBQlAuRnVsbFJvdXRlW10sXHJcbiAgcGFyZW50TmFtZUFycjogc3RyaW5nW10sXHJcbiAgbmV3VmFsdWU6IEFCUC5GdWxsUm91dGUsXHJcbiAgcGFyZW50SW5kZXggPSAwLFxyXG4pIHtcclxuICBjb25zdCBpbmRleCA9IHJvdXRlcy5maW5kSW5kZXgocm91dGUgPT4gcm91dGUubmFtZSA9PT0gcGFyZW50TmFtZUFycltwYXJlbnRJbmRleF0pO1xyXG5cclxuICBpZiAocGFyZW50SW5kZXggPT09IHBhcmVudE5hbWVBcnIubGVuZ3RoIC0gMSkge1xyXG4gICAgcm91dGVzW2luZGV4XSA9IG5ld1ZhbHVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByb3V0ZXNbaW5kZXhdLmNoaWxkcmVuID0gdXBkYXRlUm91dGVEZWVwKFxyXG4gICAgICByb3V0ZXNbaW5kZXhdLmNoaWxkcmVuLFxyXG4gICAgICBwYXJlbnROYW1lQXJyLFxyXG4gICAgICBuZXdWYWx1ZSxcclxuICAgICAgcGFyZW50SW5kZXggKyAxLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb3V0ZXM7XHJcbn1cclxuIl19