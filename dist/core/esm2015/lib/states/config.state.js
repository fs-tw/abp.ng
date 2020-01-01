var ConfigState_1;
/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/config.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Action, createSelector, Selector, State, StateContext, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import snq from 'snq';
import { GetAppConfiguration, PatchRouteByName, AddRoute } from '../actions/config.actions';
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
            if (keyword) {
                /** @type {?} */
                const keys = snq((/**
                 * @return {?}
                 */
                () => Object.keys(state.setting.values).filter((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => key.indexOf(keyword) > -1))), []);
                if (keys.length) {
                    return keys.reduce((/**
                     * @param {?} acc
                     * @param {?} key
                     * @return {?}
                     */
                    (acc, key) => (Object.assign({}, acc, { [key]: state.setting.values[key] }))), {});
                }
            }
            return snq((/**
             * @return {?}
             */
            () => state.setting.values), {});
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
        /** @type {?} */
        let defaultValue;
        if (typeof key !== 'string') {
            defaultValue = key.defaultValue;
            key = key.key;
        }
        if (!key)
            key = '';
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
            const { defaultResourceName } = state.environment.localization;
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
                keys[0] = snq((/**
                 * @return {?}
                 */
                () => defaultResourceName));
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
            if (parent.url.replace('/', '')) {
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
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0YXRlcy9jb25maWcuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzRixPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHekQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDaEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztJQU1sQyxXQUFXLHlCQUFYLFdBQVc7Ozs7O0lBK0t0QixZQUNVLHVCQUF3RCxFQUN4RCxLQUFZO1FBRFosNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFpQztRQUN4RCxVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQ25CLENBQUM7Ozs7O0lBaExKLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBbUI7UUFDL0IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUdELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFtQjtRQUMzQyxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxJQUFJLENBQUMsbUJBQUEsRUFBRSxFQUFzQixDQUFDLENBQUM7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SUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUNoQyxDQUFDO1NBQ0g7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsRUFBQyxDQUFDO0lBRUgsSUFBSSxTQUFTLEVBQUU7UUFDYixrQkFBa0I7UUFDbEIsT0FBTyxNQUFNLENBQUM7S0FDZjtJQUVELE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLENBQUM7Ozs7Ozs7O0FBRUQsU0FBUyxlQUFlLENBQ3RCLE1BQXVCLEVBQ3ZCLGFBQXVCLEVBQ3ZCLFFBQXVCLEVBQ3ZCLFdBQVcsR0FBRyxDQUFDOztVQUVULEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUzs7OztJQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUM7SUFFbEYsSUFBSSxXQUFXLEtBQUssYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztLQUMxQjtTQUFNO1FBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQ3RCLGFBQWEsRUFDYixRQUFRLEVBQ1IsV0FBVyxHQUFHLENBQUMsQ0FDaEIsQ0FBQztLQUNIO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiwgY3JlYXRlU2VsZWN0b3IsIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgR2V0QXBwQ29uZmlndXJhdGlvbiwgUGF0Y2hSb3V0ZUJ5TmFtZSwgQWRkUm91dGUgfSBmcm9tICcuLi9hY3Rpb25zL2NvbmZpZy5hY3Rpb25zJztcclxuaW1wb3J0IHsgU2V0TGFuZ3VhZ2UgfSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb24uYWN0aW9ucyc7XHJcbmltcG9ydCB7IEFCUCB9IGZyb20gJy4uL21vZGVscy9jb21tb24nO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwcGxpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IG9yZ2FuaXplUm91dGVzIH0gZnJvbSAnLi4vdXRpbHMvcm91dGUtdXRpbHMnO1xyXG5pbXBvcnQgeyBTZXNzaW9uU3RhdGUgfSBmcm9tICcuL3Nlc3Npb24uc3RhdGUnO1xyXG5cclxuQFN0YXRlPENvbmZpZy5TdGF0ZT4oe1xyXG4gIG5hbWU6ICdDb25maWdTdGF0ZScsXHJcbiAgZGVmYXVsdHM6IHt9IGFzIENvbmZpZy5TdGF0ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1N0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRBbGwoc3RhdGU6IENvbmZpZy5TdGF0ZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0QXBwbGljYXRpb25JbmZvKHN0YXRlOiBDb25maWcuU3RhdGUpOiBDb25maWcuQXBwbGljYXRpb24ge1xyXG4gICAgcmV0dXJuIHN0YXRlLmVudmlyb25tZW50LmFwcGxpY2F0aW9uIHx8ICh7fSBhcyBDb25maWcuQXBwbGljYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldE9uZShrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gc3RhdGVba2V5XTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXREZWVwKGtleXM6IHN0cmluZ1tdIHwgc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZW9mIGtleXMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGtleXMgPSBrZXlzLnNwbGl0KCcuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBkb3Qgc3RyaW5nIG9yIGFuIHN0cmluZyBhcnJheS4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiAoa2V5cyBhcyBzdHJpbmdbXSkucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xyXG4gICAgICAgIGlmIChhY2MpIHtcclxuICAgICAgICAgIHJldHVybiBhY2NbdmFsXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH0sIHN0YXRlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRSb3V0ZShwYXRoPzogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgY29uc3QgeyBmbGF0dGVkUm91dGVzIH0gPSBzdGF0ZTtcclxuICAgICAgcmV0dXJuIChmbGF0dGVkUm91dGVzIGFzIEFCUC5GdWxsUm91dGVbXSkuZmluZChyb3V0ZSA9PiB7XHJcbiAgICAgICAgaWYgKHBhdGggJiYgcm91dGUucGF0aCA9PT0gcGF0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSAmJiByb3V0ZS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1cmwgJiYgcm91dGUudXJsID09PSB1cmwpIHtcclxuICAgICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEFwaVVybChrZXk/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpOiBzdHJpbmcgPT4ge1xyXG4gICAgICByZXR1cm4gc3RhdGUuZW52aXJvbm1lbnQuYXBpc1trZXkgfHwgJ2RlZmF1bHQnXS51cmw7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U2V0dGluZyhrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gc25xKCgpID0+IHN0YXRlLnNldHRpbmcudmFsdWVzW2tleV0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U2V0dGluZ3Moa2V5d29yZD86IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICBpZiAoa2V5d29yZCkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBzbnEoXHJcbiAgICAgICAgICAoKSA9PiBPYmplY3Qua2V5cyhzdGF0ZS5zZXR0aW5nLnZhbHVlcykuZmlsdGVyKGtleSA9PiBrZXkuaW5kZXhPZihrZXl3b3JkKSA+IC0xKSxcclxuICAgICAgICAgIFtdLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIGtleXMucmVkdWNlKChhY2MsIGtleSkgPT4gKHsgLi4uYWNjLCBba2V5XTogc3RhdGUuc2V0dGluZy52YWx1ZXNba2V5XSB9KSwge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHNucSgoKSA9PiBzdGF0ZS5zZXR0aW5nLnZhbHVlcywge30pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0R3JhbnRlZFBvbGljeShrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICBpZiAoIWtleSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIGNvbnN0IGdldFBvbGljeSA9IGsgPT4gc25xKCgpID0+IHN0YXRlLmF1dGguZ3JhbnRlZFBvbGljaWVzW2tdLCBmYWxzZSk7XHJcblxyXG4gICAgICBjb25zdCBvclJlZ2V4cCA9IC9cXHxcXHwvZztcclxuICAgICAgY29uc3QgYW5kUmVnZXhwID0gLyYmL2c7XHJcblxyXG4gICAgICBpZiAob3JSZWdleHAudGVzdChrZXkpKSB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IGtleS5zcGxpdCgnfHwnKS5maWx0ZXIoayA9PiAhIWspO1xyXG5cclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggIT09IDIpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdldFBvbGljeShrZXlzWzBdLnRyaW0oKSkgfHwgZ2V0UG9saWN5KGtleXNbMV0udHJpbSgpKTtcclxuICAgICAgfSBlbHNlIGlmIChhbmRSZWdleHAudGVzdChrZXkpKSB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IGtleS5zcGxpdCgnJiYnKS5maWx0ZXIoayA9PiAhIWspO1xyXG5cclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggIT09IDIpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdldFBvbGljeShrZXlzWzBdLnRyaW0oKSkgJiYgZ2V0UG9saWN5KGtleXNbMV0udHJpbSgpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGdldFBvbGljeShrZXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldExvY2FsaXphdGlvbihcclxuICAgIGtleTogc3RyaW5nIHwgQ29uZmlnLkxvY2FsaXphdGlvbldpdGhEZWZhdWx0LFxyXG4gICAgLi4uaW50ZXJwb2xhdGVQYXJhbXM6IHN0cmluZ1tdXHJcbiAgKSB7XHJcbiAgICBsZXQgZGVmYXVsdFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IGtleS5kZWZhdWx0VmFsdWU7XHJcbiAgICAgIGtleSA9IGtleS5rZXk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFrZXkpIGtleSA9ICcnO1xyXG5cclxuICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJzo6JykgYXMgc3RyaW5nW107XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIGlmICghc3RhdGUubG9jYWxpemF0aW9uKSByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IGtleTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGVmYXVsdFJlc291cmNlTmFtZSB9ID0gc3RhdGUuZW52aXJvbm1lbnQubG9jYWxpemF0aW9uO1xyXG4gICAgICBpZiAoa2V5c1swXSA9PT0gJycpIHtcclxuICAgICAgICBpZiAoIWRlZmF1bHRSZXNvdXJjZU5hbWUpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgYFBsZWFzZSBjaGVjayB5b3VyIGVudmlyb25tZW50LiBNYXkgeW91IGZvcmdldCBzZXQgZGVmYXVsdFJlc291cmNlTmFtZT9cclxuICAgICAgICAgICAgICBIZXJlIGlzIHRoZSBleGFtcGxlOlxyXG4gICAgICAgICAgICAgICB7IHByb2R1Y3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgIGxvY2FsaXphdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgZGVmYXVsdFJlc291cmNlTmFtZTogJ015UHJvamVjdE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfWAsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAga2V5c1swXSA9IHNucSgoKSA9PiBkZWZhdWx0UmVzb3VyY2VOYW1lKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGxvY2FsaXphdGlvbiA9IChrZXlzIGFzIGFueSkucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xyXG4gICAgICAgIGlmIChhY2MpIHtcclxuICAgICAgICAgIHJldHVybiBhY2NbdmFsXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH0sIHN0YXRlLmxvY2FsaXphdGlvbi52YWx1ZXMpO1xyXG5cclxuICAgICAgaW50ZXJwb2xhdGVQYXJhbXMgPSBpbnRlcnBvbGF0ZVBhcmFtcy5maWx0ZXIocGFyYW1zID0+IHBhcmFtcyAhPSBudWxsKTtcclxuICAgICAgaWYgKGxvY2FsaXphdGlvbiAmJiBpbnRlcnBvbGF0ZVBhcmFtcyAmJiBpbnRlcnBvbGF0ZVBhcmFtcy5sZW5ndGgpIHtcclxuICAgICAgICBpbnRlcnBvbGF0ZVBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcclxuICAgICAgICAgIGxvY2FsaXphdGlvbiA9IGxvY2FsaXphdGlvbi5yZXBsYWNlKC9bXFwnXFxcIl0/XFx7W1xcZF0rXFx9W1xcJ1xcXCJdPy8sIHBhcmFtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBsb2NhbGl6YXRpb24gIT09ICdzdHJpbmcnKSBsb2NhbGl6YXRpb24gPSAnJztcclxuICAgICAgcmV0dXJuIGxvY2FsaXphdGlvbiB8fCBkZWZhdWx0VmFsdWUgfHwga2V5O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFwcENvbmZpZ3VyYXRpb25TZXJ2aWNlOiBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgKSB7fVxyXG5cclxuICBAQWN0aW9uKEdldEFwcENvbmZpZ3VyYXRpb24pXHJcbiAgYWRkRGF0YSh7IHBhdGNoU3RhdGUsIGRpc3BhdGNoIH06IFN0YXRlQ29udGV4dDxDb25maWcuU3RhdGU+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5hcHBDb25maWd1cmF0aW9uU2VydmljZS5nZXRDb25maWd1cmF0aW9uKCkucGlwZShcclxuICAgICAgdGFwKGNvbmZpZ3VyYXRpb24gPT5cclxuICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgIC4uLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICAgIHN3aXRjaE1hcChjb25maWd1cmF0aW9uID0+IHtcclxuICAgICAgICBsZXQgZGVmYXVsdExhbmc6IHN0cmluZyA9IGNvbmZpZ3VyYXRpb24uc2V0dGluZy52YWx1ZXNbJ0FicC5Mb2NhbGl6YXRpb24uRGVmYXVsdExhbmd1YWdlJ107XHJcblxyXG4gICAgICAgIGlmIChkZWZhdWx0TGFuZy5pbmNsdWRlcygnOycpKSB7XHJcbiAgICAgICAgICBkZWZhdWx0TGFuZyA9IGRlZmF1bHRMYW5nLnNwbGl0KCc7JylbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChTZXNzaW9uU3RhdGUuZ2V0TGFuZ3VhZ2UpXHJcbiAgICAgICAgICA/IG9mKG51bGwpXHJcbiAgICAgICAgICA6IGRpc3BhdGNoKG5ldyBTZXRMYW5ndWFnZShkZWZhdWx0TGFuZykpO1xyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFBhdGNoUm91dGVCeU5hbWUpXHJcbiAgcGF0Y2hSb3V0ZShcclxuICAgIHsgcGF0Y2hTdGF0ZSwgZ2V0U3RhdGUgfTogU3RhdGVDb250ZXh0PENvbmZpZy5TdGF0ZT4sXHJcbiAgICB7IG5hbWUsIG5ld1ZhbHVlIH06IFBhdGNoUm91dGVCeU5hbWUsXHJcbiAgKSB7XHJcbiAgICBsZXQgcm91dGVzOiBBQlAuRnVsbFJvdXRlW10gPSBnZXRTdGF0ZSgpLnJvdXRlcztcclxuXHJcbiAgICByb3V0ZXMgPSBwYXRjaFJvdXRlRGVlcChyb3V0ZXMsIG5hbWUsIG5ld1ZhbHVlKTtcclxuXHJcbiAgICBjb25zdCBmbGF0dGVkUm91dGVzID0gZ2V0U3RhdGUoKS5mbGF0dGVkUm91dGVzO1xyXG4gICAgY29uc3QgaW5kZXggPSBmbGF0dGVkUm91dGVzLmZpbmRJbmRleChyb3V0ZSA9PiByb3V0ZS5uYW1lID09PSBuYW1lKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICBmbGF0dGVkUm91dGVzW2luZGV4XSA9IHsgLi4uZmxhdHRlZFJvdXRlc1tpbmRleF0sIC4uLm5ld1ZhbHVlIH0gYXMgQUJQLkZ1bGxSb3V0ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIHJvdXRlcyxcclxuICAgICAgZmxhdHRlZFJvdXRlcyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihBZGRSb3V0ZSlcclxuICBhZGRSb3V0ZSh7IHBhdGNoU3RhdGUsIGdldFN0YXRlIH06IFN0YXRlQ29udGV4dDxDb25maWcuU3RhdGU+LCB7IHBheWxvYWQgfTogQWRkUm91dGUpIHtcclxuICAgIGxldCByb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSA9IGdldFN0YXRlKCkucm91dGVzO1xyXG4gICAgY29uc3QgZmxhdHRlZFJvdXRlcyA9IGdldFN0YXRlKCkuZmxhdHRlZFJvdXRlcztcclxuICAgIGNvbnN0IHJvdXRlOiBBQlAuRnVsbFJvdXRlID0geyAuLi5wYXlsb2FkIH07XHJcblxyXG4gICAgaWYgKHJvdXRlLnBhcmVudE5hbWUpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBmbGF0dGVkUm91dGVzLmZpbmRJbmRleChyID0+IHIubmFtZSA9PT0gcm91dGUucGFyZW50TmFtZSk7XHJcblxyXG4gICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBwYXJlbnQgPSBmbGF0dGVkUm91dGVzW2luZGV4XTtcclxuICAgICAgaWYgKHBhcmVudC51cmwucmVwbGFjZSgnLycsICcnKSkge1xyXG4gICAgICAgIHJvdXRlLnVybCA9IGAke3BhcmVudC51cmx9LyR7cm91dGUucGF0aH1gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdXRlLnVybCA9IGAvJHtyb3V0ZS5wYXRofWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvdXRlLm9yZGVyID0gcm91dGUub3JkZXIgfHwgcm91dGUub3JkZXIgPT09IDAgPyByb3V0ZS5vcmRlciA6IHBhcmVudC5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgIHBhcmVudC5jaGlsZHJlbiA9IFsuLi4ocGFyZW50LmNoaWxkcmVuIHx8IFtdKSwgcm91dGVdLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcclxuXHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXNbaW5kZXhdID0gcGFyZW50O1xyXG4gICAgICBmbGF0dGVkUm91dGVzLnB1c2gocm91dGUpO1xyXG5cclxuICAgICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnQubmFtZTtcclxuICAgICAgY29uc3QgcGFyZW50TmFtZUFyciA9IFtwYXJlbnROYW1lXTtcclxuXHJcbiAgICAgIHdoaWxlIChwYXJlbnROYW1lKSB7XHJcbiAgICAgICAgcGFyZW50TmFtZSA9IHNucSgoKSA9PiBmbGF0dGVkUm91dGVzLmZpbmQociA9PiByLm5hbWUgPT09IHBhcmVudE5hbWUpLnBhcmVudE5hbWUpO1xyXG5cclxuICAgICAgICBpZiAocGFyZW50TmFtZSkge1xyXG4gICAgICAgICAgcGFyZW50TmFtZUFyci51bnNoaWZ0KHBhcmVudE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcm91dGVzID0gdXBkYXRlUm91dGVEZWVwKHJvdXRlcywgcGFyZW50TmFtZUFyciwgcGFyZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlLnVybCA9IGAvJHtyb3V0ZS5wYXRofWA7XHJcblxyXG4gICAgICBpZiAocm91dGUub3JkZXIgfHwgcm91dGUub3JkZXIgPT09IDApIHtcclxuICAgICAgICByb3V0ZXMgPSBbLi4ucm91dGVzLCByb3V0ZV0uc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdXRlLm9yZGVyID0gcm91dGVzLmxlbmd0aDtcclxuICAgICAgICByb3V0ZXMgPSBbLi4ucm91dGVzLCByb3V0ZV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXMucHVzaChyb3V0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhdGNoU3RhdGUoe1xyXG4gICAgICByb3V0ZXMsXHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXMsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoUm91dGVEZWVwKFxyXG4gIHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdLFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBuZXdWYWx1ZTogUGFydGlhbDxBQlAuRnVsbFJvdXRlPixcclxuICBwYXJlbnRVcmw6IHN0cmluZyA9ICcnLFxyXG4pOiBBQlAuRnVsbFJvdXRlW10ge1xyXG4gIHJvdXRlcyA9IHJvdXRlcy5tYXAocm91dGUgPT4ge1xyXG4gICAgaWYgKHJvdXRlLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgbmV3VmFsdWUudXJsID0gYCR7cGFyZW50VXJsfS8keyghbmV3VmFsdWUucGF0aCAmJiBuZXdWYWx1ZS5wYXRoID09PSAnJ1xyXG4gICAgICAgID8gcm91dGUucGF0aFxyXG4gICAgICAgIDogbmV3VmFsdWUucGF0aCkgfHwgJyd9YDtcclxuXHJcbiAgICAgIGlmIChuZXdWYWx1ZS5jaGlsZHJlbiAmJiBuZXdWYWx1ZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IG5ld1ZhbHVlLmNoaWxkcmVuLm1hcChjaGlsZCA9PiAoe1xyXG4gICAgICAgICAgLi4uY2hpbGQsXHJcbiAgICAgICAgICB1cmw6IGAke25ld1ZhbHVlLnVybH0vJHtjaGlsZC5wYXRofWAucmVwbGFjZSgnLy8nLCAnLycpLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHsgLi4ucm91dGUsIC4uLm5ld1ZhbHVlIH07XHJcbiAgICB9IGVsc2UgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICByb3V0ZS5jaGlsZHJlbiA9IHBhdGNoUm91dGVEZWVwKFxyXG4gICAgICAgIHJvdXRlLmNoaWxkcmVuLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgbmV3VmFsdWUsXHJcbiAgICAgICAgKHBhcmVudFVybCB8fCAnLycpICsgcm91dGUucGF0aCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcm91dGU7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChwYXJlbnRVcmwpIHtcclxuICAgIC8vIHJlY3Vyc2l2ZSBibG9ja1xyXG4gICAgcmV0dXJuIHJvdXRlcztcclxuICB9XHJcblxyXG4gIHJldHVybiBvcmdhbml6ZVJvdXRlcyhyb3V0ZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVSb3V0ZURlZXAoXHJcbiAgcm91dGVzOiBBQlAuRnVsbFJvdXRlW10sXHJcbiAgcGFyZW50TmFtZUFycjogc3RyaW5nW10sXHJcbiAgbmV3VmFsdWU6IEFCUC5GdWxsUm91dGUsXHJcbiAgcGFyZW50SW5kZXggPSAwLFxyXG4pIHtcclxuICBjb25zdCBpbmRleCA9IHJvdXRlcy5maW5kSW5kZXgocm91dGUgPT4gcm91dGUubmFtZSA9PT0gcGFyZW50TmFtZUFycltwYXJlbnRJbmRleF0pO1xyXG5cclxuICBpZiAocGFyZW50SW5kZXggPT09IHBhcmVudE5hbWVBcnIubGVuZ3RoIC0gMSkge1xyXG4gICAgcm91dGVzW2luZGV4XSA9IG5ld1ZhbHVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByb3V0ZXNbaW5kZXhdLmNoaWxkcmVuID0gdXBkYXRlUm91dGVEZWVwKFxyXG4gICAgICByb3V0ZXNbaW5kZXhdLmNoaWxkcmVuLFxyXG4gICAgICBwYXJlbnROYW1lQXJyLFxyXG4gICAgICBuZXdWYWx1ZSxcclxuICAgICAgcGFyZW50SW5kZXggKyAxLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb3V0ZXM7XHJcbn1cclxuIl19