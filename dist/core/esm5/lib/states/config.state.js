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
var ConfigState = /** @class */ (function () {
    function ConfigState(appConfigurationService, store) {
        this.appConfigurationService = appConfigurationService;
        this.store = store;
    }
    ConfigState_1 = ConfigState;
    /**
     * @param {?} state
     * @return {?}
     */
    ConfigState.getAll = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        return state;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    ConfigState.getApplicationInfo = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        return state.environment.application || ((/** @type {?} */ ({})));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ConfigState.getOne = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return state[key];
        }));
        return selector;
    };
    /**
     * @param {?} keys
     * @return {?}
     */
    ConfigState.getDeep = /**
     * @param {?} keys
     * @return {?}
     */
    function (keys) {
        if (typeof keys === 'string') {
            keys = keys.split('.');
        }
        if (!Array.isArray(keys)) {
            throw new Error('The argument must be a dot string or an string array.');
        }
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return ((/** @type {?} */ (keys))).reduce((/**
             * @param {?} acc
             * @param {?} val
             * @return {?}
             */
            function (acc, val) {
                if (acc) {
                    return acc[val];
                }
                return undefined;
            }), state);
        }));
        return selector;
    };
    /**
     * @param {?=} path
     * @param {?=} name
     * @param {?=} url
     * @return {?}
     */
    ConfigState.getRoute = /**
     * @param {?=} path
     * @param {?=} name
     * @param {?=} url
     * @return {?}
     */
    function (path, name, url) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            var flattedRoutes = state.flattedRoutes;
            return ((/** @type {?} */ (flattedRoutes))).find((/**
             * @param {?} route
             * @return {?}
             */
            function (route) {
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
    };
    /**
     * @param {?=} key
     * @return {?}
     */
    ConfigState.getApiUrl = /**
     * @param {?=} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return state.environment.apis[key || 'default'].url;
        }));
        return selector;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ConfigState.getSetting = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return snq((/**
             * @return {?}
             */
            function () { return state.setting.values[key]; }));
        }));
        return selector;
    };
    /**
     * @param {?=} keyword
     * @return {?}
     */
    ConfigState.getSettings = /**
     * @param {?=} keyword
     * @return {?}
     */
    function (keyword) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            /** @type {?} */
            var settings = snq((/**
             * @return {?}
             */
            function () { return state.setting.values; }), {});
            if (!keyword)
                return settings;
            /** @type {?} */
            var keysFound = Object.keys(settings).filter((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return key.indexOf(keyword) > -1; }));
            return keysFound.reduce((/**
             * @param {?} acc
             * @param {?} key
             * @return {?}
             */
            function (acc, key) {
                acc[key] = settings[key];
                return acc;
            }), {});
        }));
        return selector;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ConfigState.getGrantedPolicy = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            if (!key)
                return true;
            /** @type {?} */
            var getPolicy = (/**
             * @param {?} k
             * @return {?}
             */
            function (k) { return snq((/**
             * @return {?}
             */
            function () { return state.auth.grantedPolicies[k]; }), false); });
            /** @type {?} */
            var orRegexp = /\|\|/g;
            /** @type {?} */
            var andRegexp = /&&/g;
            if (orRegexp.test(key)) {
                /** @type {?} */
                var keys = key.split('||').filter((/**
                 * @param {?} k
                 * @return {?}
                 */
                function (k) { return !!k; }));
                if (keys.length !== 2)
                    return false;
                return getPolicy(keys[0].trim()) || getPolicy(keys[1].trim());
            }
            else if (andRegexp.test(key)) {
                /** @type {?} */
                var keys = key.split('&&').filter((/**
                 * @param {?} k
                 * @return {?}
                 */
                function (k) { return !!k; }));
                if (keys.length !== 2)
                    return false;
                return getPolicy(keys[0].trim()) && getPolicy(keys[1].trim());
            }
            return getPolicy(key);
        }));
        return selector;
    };
    /**
     * @param {?} key
     * @param {...?} interpolateParams
     * @return {?}
     */
    ConfigState.getLocalization = /**
     * @param {?} key
     * @param {...?} interpolateParams
     * @return {?}
     */
    function (key) {
        var interpolateParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolateParams[_i - 1] = arguments[_i];
        }
        if (!key)
            key = '';
        /** @type {?} */
        var defaultValue;
        if (typeof key !== 'string') {
            defaultValue = key.defaultValue;
            key = key.key;
        }
        /** @type {?} */
        var keys = (/** @type {?} */ (key.split('::')));
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            if (!state.localization)
                return defaultValue || key;
            /** @type {?} */
            var defaultResourceName = snq((/**
             * @return {?}
             */
            function () { return state.environment.localization.defaultResourceName; }));
            if (keys[0] === '') {
                if (!defaultResourceName) {
                    throw new Error("Please check your environment. May you forget set defaultResourceName?\n              Here is the example:\n               { production: false,\n                 localization: {\n                   defaultResourceName: 'MyProjectName'\n                  }\n               }");
                }
                keys[0] = defaultResourceName;
            }
            /** @type {?} */
            var localization = ((/** @type {?} */ (keys))).reduce((/**
             * @param {?} acc
             * @param {?} val
             * @return {?}
             */
            function (acc, val) {
                if (acc) {
                    return acc[val];
                }
                return undefined;
            }), state.localization.values);
            interpolateParams = interpolateParams.filter((/**
             * @param {?} params
             * @return {?}
             */
            function (params) { return params != null; }));
            if (localization && interpolateParams && interpolateParams.length) {
                interpolateParams.forEach((/**
                 * @param {?} param
                 * @return {?}
                 */
                function (param) {
                    localization = localization.replace(/[\'\"]?\{[\d]+\}[\'\"]?/, param);
                }));
            }
            if (typeof localization !== 'string')
                localization = '';
            return localization || defaultValue || key;
        }));
        return selector;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    ConfigState.prototype.addData = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var patchState = _a.patchState, dispatch = _a.dispatch;
        return this.appConfigurationService.getConfiguration().pipe(tap((/**
         * @param {?} configuration
         * @return {?}
         */
        function (configuration) {
            return patchState(tslib_1.__assign({}, configuration));
        })), switchMap((/**
         * @param {?} configuration
         * @return {?}
         */
        function (configuration) {
            /** @type {?} */
            var defaultLang = configuration.setting.values['Abp.Localization.DefaultLanguage'];
            if (defaultLang.includes(';')) {
                defaultLang = defaultLang.split(';')[0];
            }
            return _this.store.selectSnapshot(SessionState.getLanguage)
                ? of(null)
                : dispatch(new SetLanguage(defaultLang));
        })));
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    ConfigState.prototype.patchRoute = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState, getState = _a.getState;
        var name = _b.name, newValue = _b.newValue;
        /** @type {?} */
        var routes = getState().routes;
        routes = patchRouteDeep(routes, name, newValue);
        /** @type {?} */
        var flattedRoutes = getState().flattedRoutes;
        /** @type {?} */
        var index = flattedRoutes.findIndex((/**
         * @param {?} route
         * @return {?}
         */
        function (route) { return route.name === name; }));
        if (index > -1) {
            flattedRoutes[index] = (/** @type {?} */ (tslib_1.__assign({}, flattedRoutes[index], newValue)));
        }
        return patchState({
            routes: routes,
            flattedRoutes: flattedRoutes,
        });
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    ConfigState.prototype.addRoute = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState, getState = _a.getState;
        var payload = _b.payload;
        /** @type {?} */
        var routes = getState().routes;
        /** @type {?} */
        var flattedRoutes = getState().flattedRoutes;
        /** @type {?} */
        var route = tslib_1.__assign({}, payload);
        if (route.parentName) {
            /** @type {?} */
            var index = flattedRoutes.findIndex((/**
             * @param {?} r
             * @return {?}
             */
            function (r) { return r.name === route.parentName; }));
            if (index < 0)
                return;
            /** @type {?} */
            var parent_1 = flattedRoutes[index];
            if ((parent_1.url || '').replace('/', '')) {
                route.url = parent_1.url + "/" + route.path;
            }
            else {
                route.url = "/" + route.path;
            }
            route.order = route.order || route.order === 0 ? route.order : parent_1.children.length;
            parent_1.children = tslib_1.__spread((parent_1.children || []), [route]).sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a.order - b.order; }));
            flattedRoutes[index] = parent_1;
            flattedRoutes.push(route);
            /** @type {?} */
            var parentName_1 = parent_1.name;
            /** @type {?} */
            var parentNameArr = [parentName_1];
            while (parentName_1) {
                parentName_1 = snq((/**
                 * @return {?}
                 */
                function () { return flattedRoutes.find((/**
                 * @param {?} r
                 * @return {?}
                 */
                function (r) { return r.name === parentName_1; })).parentName; }));
                if (parentName_1) {
                    parentNameArr.unshift(parentName_1);
                }
            }
            routes = updateRouteDeep(routes, parentNameArr, parent_1);
        }
        else {
            route.url = "/" + route.path;
            if (route.order || route.order === 0) {
                routes = tslib_1.__spread(routes, [route]).sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) { return a.order - b.order; }));
            }
            else {
                route.order = routes.length;
                routes = tslib_1.__spread(routes, [route]);
            }
            flattedRoutes.push(route);
        }
        return patchState({
            routes: routes,
            flattedRoutes: flattedRoutes,
        });
    };
    /**
     * @param {?} __0
     * @param {?} environment
     * @return {?}
     */
    ConfigState.prototype.setEnvironment = /**
     * @param {?} __0
     * @param {?} environment
     * @return {?}
     */
    function (_a, environment) {
        var patchState = _a.patchState;
        return patchState({
            environment: environment,
        });
    };
    var ConfigState_1;
    ConfigState.ctorParameters = function () { return [
        { type: ApplicationConfigurationService },
        { type: Store }
    ]; };
    ConfigState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigState.ctorParameters = function () { return [
        { type: ApplicationConfigurationService },
        { type: Store }
    ]; };
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
    return ConfigState;
}());
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
function patchRouteDeep(routes, name, newValue, parentUrl) {
    if (parentUrl === void 0) { parentUrl = ''; }
    routes = routes.map((/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (route.name === name) {
            newValue.url = parentUrl + "/" + ((!newValue.path && newValue.path === ''
                ? route.path
                : newValue.path) || '');
            if (newValue.children && newValue.children.length) {
                newValue.children = newValue.children.map((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return (tslib_1.__assign({}, child, { url: (newValue.url + "/" + child.path).replace('//', '/') })); }));
            }
            return tslib_1.__assign({}, route, newValue);
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
function updateRouteDeep(routes, parentNameArr, newValue, parentIndex) {
    if (parentIndex === void 0) { parentIndex = 0; }
    /** @type {?} */
    var index = routes.findIndex((/**
     * @param {?} route
     * @return {?}
     */
    function (route) { return route.name === parentNameArr[parentIndex]; }));
    if (parentIndex === parentNameArr.length - 1) {
        routes[index] = newValue;
    }
    else {
        routes[index].children = updateRouteDeep(routes[index].children, parentNameArr, newValue, parentIndex + 1);
    }
    return routes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0YXRlcy9jb25maWcuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0YsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQ0wsUUFBUSxFQUNSLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsY0FBYyxHQUNmLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR3pELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBcUw3QyxxQkFDVSx1QkFBd0QsRUFDeEQsS0FBWTtRQURaLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBaUM7UUFDeEQsVUFBSyxHQUFMLEtBQUssQ0FBTztJQUNuQixDQUFDO29CQWpMTyxXQUFXOzs7OztJQUVmLGtCQUFNOzs7O0lBQWIsVUFBYyxLQUFtQjtRQUMvQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBR00sOEJBQWtCOzs7O0lBQXpCLFVBQTBCLEtBQW1CO1FBQzNDLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFX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QVEsRUFDUixXQUFXLEdBQUcsQ0FBQyxDQUNoQixDQUFDO0tBQ0g7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb24sIGNyZWF0ZVNlbGVjdG9yLCBTZWxlY3RvciwgU3RhdGUsIFN0YXRlQ29udGV4dCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7XHJcbiAgQWRkUm91dGUsXHJcbiAgR2V0QXBwQ29uZmlndXJhdGlvbixcclxuICBQYXRjaFJvdXRlQnlOYW1lLFxyXG4gIFNldEVudmlyb25tZW50LFxyXG59IGZyb20gJy4uL2FjdGlvbnMvY29uZmlnLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBTZXRMYW5ndWFnZSB9IGZyb20gJy4uL2FjdGlvbnMvc2Vzc2lvbi5hY3Rpb25zJztcclxuaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi4vbW9kZWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXBwbGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgb3JnYW5pemVSb3V0ZXMgfSBmcm9tICcuLi91dGlscy9yb3V0ZS11dGlscyc7XHJcbmltcG9ydCB7IFNlc3Npb25TdGF0ZSB9IGZyb20gJy4vc2Vzc2lvbi5zdGF0ZSc7XHJcblxyXG5AU3RhdGU8Q29uZmlnLlN0YXRlPih7XHJcbiAgbmFtZTogJ0NvbmZpZ1N0YXRlJyxcclxuICBkZWZhdWx0czoge30gYXMgQ29uZmlnLlN0YXRlLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTdGF0ZSB7XHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0QWxsKHN0YXRlOiBDb25maWcuU3RhdGUpIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldEFwcGxpY2F0aW9uSW5mbyhzdGF0ZTogQ29uZmlnLlN0YXRlKTogQ29uZmlnLkFwcGxpY2F0aW9uIHtcclxuICAgIHJldHVybiBzdGF0ZS5lbnZpcm9ubWVudC5hcHBsaWNhdGlvbiB8fCAoe30gYXMgQ29uZmlnLkFwcGxpY2F0aW9uKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRPbmUoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHN0YXRlW2tleV07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0RGVlcChrZXlzOiBzdHJpbmdbXSB8IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGVvZiBrZXlzID09PSAnc3RyaW5nJykge1xyXG4gICAgICBrZXlzID0ga2V5cy5zcGxpdCgnLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBhcmd1bWVudCBtdXN0IGJlIGEgZG90IHN0cmluZyBvciBhbiBzdHJpbmcgYXJyYXkuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gKGtleXMgYXMgc3RyaW5nW10pLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcclxuICAgICAgICBpZiAoYWNjKSB7XHJcbiAgICAgICAgICByZXR1cm4gYWNjW3ZhbF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9LCBzdGF0ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0Um91dGUocGF0aD86IHN0cmluZywgbmFtZT86IHN0cmluZywgdXJsPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZmxhdHRlZFJvdXRlcyB9ID0gc3RhdGU7XHJcbiAgICAgIHJldHVybiAoZmxhdHRlZFJvdXRlcyBhcyBBQlAuRnVsbFJvdXRlW10pLmZpbmQocm91dGUgPT4ge1xyXG4gICAgICAgIGlmIChwYXRoICYmIHJvdXRlLnBhdGggPT09IHBhdGgpIHtcclxuICAgICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgJiYgcm91dGUubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodXJsICYmIHJvdXRlLnVybCA9PT0gdXJsKSB7XHJcbiAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRBcGlVcmwoa2V5Pzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKTogc3RyaW5nID0+IHtcclxuICAgICAgcmV0dXJuIHN0YXRlLmVudmlyb25tZW50LmFwaXNba2V5IHx8ICdkZWZhdWx0J10udXJsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFNldHRpbmcoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHNucSgoKSA9PiBzdGF0ZS5zZXR0aW5nLnZhbHVlc1trZXldKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRTZXR0aW5ncyhrZXl3b3JkPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdzID0gc25xKCgpID0+IHN0YXRlLnNldHRpbmcudmFsdWVzLCB7fSk7XHJcblxyXG4gICAgICBpZiAoIWtleXdvcmQpIHJldHVybiBzZXR0aW5ncztcclxuXHJcbiAgICAgIGNvbnN0IGtleXNGb3VuZCA9IE9iamVjdC5rZXlzKHNldHRpbmdzKS5maWx0ZXIoa2V5ID0+IGtleS5pbmRleE9mKGtleXdvcmQpID4gLTEpO1xyXG5cclxuICAgICAgcmV0dXJuIGtleXNGb3VuZC5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XHJcbiAgICAgICAgYWNjW2tleV0gPSBzZXR0aW5nc1trZXldO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRHcmFudGVkUG9saWN5KGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgIGlmICgha2V5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgY29uc3QgZ2V0UG9saWN5ID0gayA9PiBzbnEoKCkgPT4gc3RhdGUuYXV0aC5ncmFudGVkUG9saWNpZXNba10sIGZhbHNlKTtcclxuXHJcbiAgICAgIGNvbnN0IG9yUmVnZXhwID0gL1xcfFxcfC9nO1xyXG4gICAgICBjb25zdCBhbmRSZWdleHAgPSAvJiYvZztcclxuXHJcbiAgICAgIGlmIChvclJlZ2V4cC50ZXN0KGtleSkpIHtcclxuICAgICAgICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KCd8fCcpLmZpbHRlcihrID0+ICEhayk7XHJcblxyXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCAhPT0gMikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gZ2V0UG9saWN5KGtleXNbMF0udHJpbSgpKSB8fCBnZXRQb2xpY3koa2V5c1sxXS50cmltKCkpO1xyXG4gICAgICB9IGVsc2UgaWYgKGFuZFJlZ2V4cC50ZXN0KGtleSkpIHtcclxuICAgICAgICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KCcmJicpLmZpbHRlcihrID0+ICEhayk7XHJcblxyXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCAhPT0gMikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gZ2V0UG9saWN5KGtleXNbMF0udHJpbSgpKSAmJiBnZXRQb2xpY3koa2V5c1sxXS50cmltKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZ2V0UG9saWN5KGtleSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0TG9jYWxpemF0aW9uKFxyXG4gICAga2V5OiBzdHJpbmcgfCBDb25maWcuTG9jYWxpemF0aW9uV2l0aERlZmF1bHQsXHJcbiAgICAuLi5pbnRlcnBvbGF0ZVBhcmFtczogc3RyaW5nW11cclxuICApIHtcclxuICAgIGlmICgha2V5KSBrZXkgPSAnJztcclxuICAgIGxldCBkZWZhdWx0VmFsdWU6IHN0cmluZztcclxuXHJcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgZGVmYXVsdFZhbHVlID0ga2V5LmRlZmF1bHRWYWx1ZTtcclxuICAgICAga2V5ID0ga2V5LmtleTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KCc6OicpIGFzIHN0cmluZ1tdO1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICBpZiAoIXN0YXRlLmxvY2FsaXphdGlvbikgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCBrZXk7XHJcblxyXG4gICAgICBjb25zdCBkZWZhdWx0UmVzb3VyY2VOYW1lID0gc25xKCgpID0+IHN0YXRlLmVudmlyb25tZW50LmxvY2FsaXphdGlvbi5kZWZhdWx0UmVzb3VyY2VOYW1lKTtcclxuICAgICAgaWYgKGtleXNbMF0gPT09ICcnKSB7XHJcbiAgICAgICAgaWYgKCFkZWZhdWx0UmVzb3VyY2VOYW1lKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgIGBQbGVhc2UgY2hlY2sgeW91ciBlbnZpcm9ubWVudC4gTWF5IHlvdSBmb3JnZXQgc2V0IGRlZmF1bHRSZXNvdXJjZU5hbWU/XHJcbiAgICAgICAgICAgICAgSGVyZSBpcyB0aGUgZXhhbXBsZTpcclxuICAgICAgICAgICAgICAgeyBwcm9kdWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICBsb2NhbGl6YXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgIGRlZmF1bHRSZXNvdXJjZU5hbWU6ICdNeVByb2plY3ROYW1lJ1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1gLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGtleXNbMF0gPSBkZWZhdWx0UmVzb3VyY2VOYW1lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbG9jYWxpemF0aW9uID0gKGtleXMgYXMgYW55KS5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XHJcbiAgICAgICAgaWYgKGFjYykge1xyXG4gICAgICAgICAgcmV0dXJuIGFjY1t2YWxdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfSwgc3RhdGUubG9jYWxpemF0aW9uLnZhbHVlcyk7XHJcblxyXG4gICAgICBpbnRlcnBvbGF0ZVBhcmFtcyA9IGludGVycG9sYXRlUGFyYW1zLmZpbHRlcihwYXJhbXMgPT4gcGFyYW1zICE9IG51bGwpO1xyXG4gICAgICBpZiAobG9jYWxpemF0aW9uICYmIGludGVycG9sYXRlUGFyYW1zICYmIGludGVycG9sYXRlUGFyYW1zLmxlbmd0aCkge1xyXG4gICAgICAgIGludGVycG9sYXRlUGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xyXG4gICAgICAgICAgbG9jYWxpemF0aW9uID0gbG9jYWxpemF0aW9uLnJlcGxhY2UoL1tcXCdcXFwiXT9cXHtbXFxkXStcXH1bXFwnXFxcIl0/LywgcGFyYW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGxvY2FsaXphdGlvbiAhPT0gJ3N0cmluZycpIGxvY2FsaXphdGlvbiA9ICcnO1xyXG4gICAgICByZXR1cm4gbG9jYWxpemF0aW9uIHx8IGRlZmF1bHRWYWx1ZSB8fCBrZXk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYXBwQ29uZmlndXJhdGlvblNlcnZpY2U6IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICApIHt9XHJcblxyXG4gIEBBY3Rpb24oR2V0QXBwQ29uZmlndXJhdGlvbilcclxuICBhZGREYXRhKHsgcGF0Y2hTdGF0ZSwgZGlzcGF0Y2ggfTogU3RhdGVDb250ZXh0PENvbmZpZy5TdGF0ZT4pIHtcclxuICAgIHJldHVybiB0aGlzLmFwcENvbmZpZ3VyYXRpb25TZXJ2aWNlLmdldENvbmZpZ3VyYXRpb24oKS5waXBlKFxyXG4gICAgICB0YXAoY29uZmlndXJhdGlvbiA9PlxyXG4gICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgLi4uY29uZmlndXJhdGlvbixcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICAgc3dpdGNoTWFwKGNvbmZpZ3VyYXRpb24gPT4ge1xyXG4gICAgICAgIGxldCBkZWZhdWx0TGFuZzogc3RyaW5nID0gY29uZmlndXJhdGlvbi5zZXR0aW5nLnZhbHVlc1snQWJwLkxvY2FsaXphdGlvbi5EZWZhdWx0TGFuZ3VhZ2UnXTtcclxuXHJcbiAgICAgICAgaWYgKGRlZmF1bHRMYW5nLmluY2x1ZGVzKCc7JykpIHtcclxuICAgICAgICAgIGRlZmF1bHRMYW5nID0gZGVmYXVsdExhbmcuc3BsaXQoJzsnKVswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZS5nZXRMYW5ndWFnZSlcclxuICAgICAgICAgID8gb2YobnVsbClcclxuICAgICAgICAgIDogZGlzcGF0Y2gobmV3IFNldExhbmd1YWdlKGRlZmF1bHRMYW5nKSk7XHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oUGF0Y2hSb3V0ZUJ5TmFtZSlcclxuICBwYXRjaFJvdXRlKFxyXG4gICAgeyBwYXRjaFN0YXRlLCBnZXRTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8Q29uZmlnLlN0YXRlPixcclxuICAgIHsgbmFtZSwgbmV3VmFsdWUgfTogUGF0Y2hSb3V0ZUJ5TmFtZSxcclxuICApIHtcclxuICAgIGxldCByb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSA9IGdldFN0YXRlKCkucm91dGVzO1xyXG5cclxuICAgIHJvdXRlcyA9IHBhdGNoUm91dGVEZWVwKHJvdXRlcywgbmFtZSwgbmV3VmFsdWUpO1xyXG5cclxuICAgIGNvbnN0IGZsYXR0ZWRSb3V0ZXMgPSBnZXRTdGF0ZSgpLmZsYXR0ZWRSb3V0ZXM7XHJcbiAgICBjb25zdCBpbmRleCA9IGZsYXR0ZWRSb3V0ZXMuZmluZEluZGV4KHJvdXRlID0+IHJvdXRlLm5hbWUgPT09IG5hbWUpO1xyXG5cclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXNbaW5kZXhdID0geyAuLi5mbGF0dGVkUm91dGVzW2luZGV4XSwgLi4ubmV3VmFsdWUgfSBhcyBBQlAuRnVsbFJvdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRjaFN0YXRlKHtcclxuICAgICAgcm91dGVzLFxyXG4gICAgICBmbGF0dGVkUm91dGVzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKEFkZFJvdXRlKVxyXG4gIGFkZFJvdXRlKHsgcGF0Y2hTdGF0ZSwgZ2V0U3RhdGUgfTogU3RhdGVDb250ZXh0PENvbmZpZy5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBBZGRSb3V0ZSkge1xyXG4gICAgbGV0IHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdID0gZ2V0U3RhdGUoKS5yb3V0ZXM7XHJcbiAgICBjb25zdCBmbGF0dGVkUm91dGVzID0gZ2V0U3RhdGUoKS5mbGF0dGVkUm91dGVzO1xyXG4gICAgY29uc3Qgcm91dGU6IEFCUC5GdWxsUm91dGUgPSB7IC4uLnBheWxvYWQgfTtcclxuXHJcbiAgICBpZiAocm91dGUucGFyZW50TmFtZSkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGZsYXR0ZWRSb3V0ZXMuZmluZEluZGV4KHIgPT4gci5uYW1lID09PSByb3V0ZS5wYXJlbnROYW1lKTtcclxuXHJcbiAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IGZsYXR0ZWRSb3V0ZXNbaW5kZXhdO1xyXG4gICAgICBpZiAoKHBhcmVudC51cmwgfHwgJycpLnJlcGxhY2UoJy8nLCAnJykpIHtcclxuICAgICAgICByb3V0ZS51cmwgPSBgJHtwYXJlbnQudXJsfS8ke3JvdXRlLnBhdGh9YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByb3V0ZS51cmwgPSBgLyR7cm91dGUucGF0aH1gO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByb3V0ZS5vcmRlciA9IHJvdXRlLm9yZGVyIHx8IHJvdXRlLm9yZGVyID09PSAwID8gcm91dGUub3JkZXIgOiBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICBwYXJlbnQuY2hpbGRyZW4gPSBbLi4uKHBhcmVudC5jaGlsZHJlbiB8fCBbXSksIHJvdXRlXS5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XHJcblxyXG4gICAgICBmbGF0dGVkUm91dGVzW2luZGV4XSA9IHBhcmVudDtcclxuICAgICAgZmxhdHRlZFJvdXRlcy5wdXNoKHJvdXRlKTtcclxuXHJcbiAgICAgIGxldCBwYXJlbnROYW1lID0gcGFyZW50Lm5hbWU7XHJcbiAgICAgIGNvbnN0IHBhcmVudE5hbWVBcnIgPSBbcGFyZW50TmFtZV07XHJcblxyXG4gICAgICB3aGlsZSAocGFyZW50TmFtZSkge1xyXG4gICAgICAgIHBhcmVudE5hbWUgPSBzbnEoKCkgPT4gZmxhdHRlZFJvdXRlcy5maW5kKHIgPT4gci5uYW1lID09PSBwYXJlbnROYW1lKS5wYXJlbnROYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHBhcmVudE5hbWUpIHtcclxuICAgICAgICAgIHBhcmVudE5hbWVBcnIudW5zaGlmdChwYXJlbnROYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvdXRlcyA9IHVwZGF0ZVJvdXRlRGVlcChyb3V0ZXMsIHBhcmVudE5hbWVBcnIsIHBhcmVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZS51cmwgPSBgLyR7cm91dGUucGF0aH1gO1xyXG5cclxuICAgICAgaWYgKHJvdXRlLm9yZGVyIHx8IHJvdXRlLm9yZGVyID09PSAwKSB7XHJcbiAgICAgICAgcm91dGVzID0gWy4uLnJvdXRlcywgcm91dGVdLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByb3V0ZS5vcmRlciA9IHJvdXRlcy5sZW5ndGg7XHJcbiAgICAgICAgcm91dGVzID0gWy4uLnJvdXRlcywgcm91dGVdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmbGF0dGVkUm91dGVzLnB1c2gocm91dGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRjaFN0YXRlKHtcclxuICAgICAgcm91dGVzLFxyXG4gICAgICBmbGF0dGVkUm91dGVzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFNldEVudmlyb25tZW50KVxyXG4gIHNldEVudmlyb25tZW50KHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8Q29uZmlnLlN0YXRlPiwgZW52aXJvbm1lbnQ6IENvbmZpZy5FbnZpcm9ubWVudCkge1xyXG4gICAgcmV0dXJuIHBhdGNoU3RhdGUoe1xyXG4gICAgICBlbnZpcm9ubWVudCxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hSb3V0ZURlZXAoXHJcbiAgcm91dGVzOiBBQlAuRnVsbFJvdXRlW10sXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIG5ld1ZhbHVlOiBQYXJ0aWFsPEFCUC5GdWxsUm91dGU+LFxyXG4gIHBhcmVudFVybDogc3RyaW5nID0gJycsXHJcbik6IEFCUC5GdWxsUm91dGVbXSB7XHJcbiAgcm91dGVzID0gcm91dGVzLm1hcChyb3V0ZSA9PiB7XHJcbiAgICBpZiAocm91dGUubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICBuZXdWYWx1ZS51cmwgPSBgJHtwYXJlbnRVcmx9LyR7KCFuZXdWYWx1ZS5wYXRoICYmIG5ld1ZhbHVlLnBhdGggPT09ICcnXHJcbiAgICAgICAgPyByb3V0ZS5wYXRoXHJcbiAgICAgICAgOiBuZXdWYWx1ZS5wYXRoKSB8fCAnJ31gO1xyXG5cclxuICAgICAgaWYgKG5ld1ZhbHVlLmNoaWxkcmVuICYmIG5ld1ZhbHVlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0gbmV3VmFsdWUuY2hpbGRyZW4ubWFwKGNoaWxkID0+ICh7XHJcbiAgICAgICAgICAuLi5jaGlsZCxcclxuICAgICAgICAgIHVybDogYCR7bmV3VmFsdWUudXJsfS8ke2NoaWxkLnBhdGh9YC5yZXBsYWNlKCcvLycsICcvJyksXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyAuLi5yb3V0ZSwgLi4ubmV3VmFsdWUgfTtcclxuICAgIH0gZWxzZSBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgIHJvdXRlLmNoaWxkcmVuID0gcGF0Y2hSb3V0ZURlZXAoXHJcbiAgICAgICAgcm91dGUuY2hpbGRyZW4sXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBuZXdWYWx1ZSxcclxuICAgICAgICAocGFyZW50VXJsIHx8ICcvJykgKyByb3V0ZS5wYXRoLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByb3V0ZTtcclxuICB9KTtcclxuXHJcbiAgaWYgKHBhcmVudFVybCkge1xyXG4gICAgLy8gcmVjdXJzaXZlIGJsb2NrXHJcbiAgICByZXR1cm4gcm91dGVzO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9yZ2FuaXplUm91dGVzKHJvdXRlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVJvdXRlRGVlcChcclxuICByb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSxcclxuICBwYXJlbnROYW1lQXJyOiBzdHJpbmdbXSxcclxuICBuZXdWYWx1ZTogQUJQLkZ1bGxSb3V0ZSxcclxuICBwYXJlbnRJbmRleCA9IDAsXHJcbikge1xyXG4gIGNvbnN0IGluZGV4ID0gcm91dGVzLmZpbmRJbmRleChyb3V0ZSA9PiByb3V0ZS5uYW1lID09PSBwYXJlbnROYW1lQXJyW3BhcmVudEluZGV4XSk7XHJcblxyXG4gIGlmIChwYXJlbnRJbmRleCA9PT0gcGFyZW50TmFtZUFyci5sZW5ndGggLSAxKSB7XHJcbiAgICByb3V0ZXNbaW5kZXhdID0gbmV3VmFsdWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJvdXRlc1tpbmRleF0uY2hpbGRyZW4gPSB1cGRhdGVSb3V0ZURlZXAoXHJcbiAgICAgIHJvdXRlc1tpbmRleF0uY2hpbGRyZW4sXHJcbiAgICAgIHBhcmVudE5hbWVBcnIsXHJcbiAgICAgIG5ld1ZhbHVlLFxyXG4gICAgICBwYXJlbnRJbmRleCArIDEsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvdXRlcztcclxufVxyXG4iXX0=