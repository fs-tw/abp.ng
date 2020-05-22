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
var ConfigState = /** @class */ (function () {
    function ConfigState(http, store) {
        this.http = http;
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
            return (state.environment.apis[key || 'default'] || state.environment.apis.default).url;
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
            /** @type {?} */
            var warn = (/**
             * @param {?} message
             * @return {?}
             */
            function (message) {
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
            var sourceName = keys[0] ||
                snq((/**
                 * @return {?}
                 */
                function () { return state.environment.localization.defaultResourceName; })) ||
                state.localization.defaultResourceName;
            /** @type {?} */
            var sourceKey = keys[1];
            if (sourceName === '_') {
                return defaultValue || sourceKey;
            }
            if (!sourceName) {
                warn('Localization source name is not specified and the defaultResourceName was not defined!');
                return defaultValue || sourceKey;
            }
            /** @type {?} */
            var source = state.localization.values[sourceName];
            if (!source) {
                warn('Could not find localization source: ' + sourceName);
                return defaultValue || sourceKey;
            }
            /** @type {?} */
            var localization = source[sourceKey];
            if (typeof localization === 'undefined') {
                return defaultValue || sourceKey;
            }
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
            return localization || defaultValue || ((/** @type {?} */ (key)));
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
        /** @type {?} */
        var apiName = this.store.selectSnapshot(ConfigState_1.getDeep('environment.application.name'));
        /** @type {?} */
        var api = this.store.selectSnapshot(ConfigState_1.getApiUrl(apiName));
        return this.http
            .get(api + "/api/abp/application-configuration")
            .pipe(tap((/**
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
            document.documentElement.setAttribute('lang', configuration.localization.currentCulture.cultureName);
            return _this.store.selectSnapshot(SessionState.getLanguage)
                ? of(null)
                : dispatch(new SetLanguage(defaultLang, false));
        })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            dispatch(new RestOccurError(new HttpErrorResponse({ status: 0, error: err })));
            return throwError(err);
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
            route.children = route.children || [];
            route.order = route.order || route.order === 0 ? route.order : (parent_1.children || []).length;
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
     * @param {?} __1
     * @return {?}
     */
    ConfigState.prototype.setEnvironment = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState;
        var environment = _b.environment;
        return patchState({
            environment: environment,
        });
    };
    var ConfigState_1;
    ConfigState.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store }
    ]; };
    ConfigState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigState.ctorParameters = function () { return [
        { type: HttpClient },
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
    return ConfigState;
}());
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
function patchRouteDeep(routes, name, newValue, parentUrl) {
    if (parentUrl === void 0) { parentUrl = ''; }
    routes = routes.map((/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (route.name === name) {
            newValue.url = parentUrl + "/" + ((!newValue.path || newValue.path === ''
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0YXRlcy9jb25maWcuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQ0wsUUFBUSxFQUNSLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsY0FBYyxHQUNmLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUl6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQWlNN0MscUJBQW9CLElBQWdCLEVBQVUsS0FBWTtRQUF0QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7b0JBMUxuRCxXQUFXOzs7OztJQUVmLGtCQUFNOzs7O0lBQWIsVUFBYyxLQUFtQjtRQUMvQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lB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LFdBQVcsQ0FBQyxFQUF6QyxDQUF5QyxFQUFDO0lBRWxGLElBQUksV0FBVyxLQUFLLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzVDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUM7S0FDMUI7U0FBTTtRQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUN0QixhQUFhLEVBQ2IsUUFBUSxFQUNSLFdBQVcsR0FBRyxDQUFDLENBQ2hCLENBQUM7S0FDSDtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb24sIGNyZWF0ZVNlbGVjdG9yLCBTZWxlY3RvciwgU3RhdGUsIFN0YXRlQ29udGV4dCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7XHJcbiAgQWRkUm91dGUsXHJcbiAgR2V0QXBwQ29uZmlndXJhdGlvbixcclxuICBQYXRjaFJvdXRlQnlOYW1lLFxyXG4gIFNldEVudmlyb25tZW50LFxyXG59IGZyb20gJy4uL2FjdGlvbnMvY29uZmlnLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBSZXN0T2NjdXJFcnJvciB9IGZyb20gJy4uL2FjdGlvbnMvcmVzdC5hY3Rpb25zJztcclxuaW1wb3J0IHsgU2V0TGFuZ3VhZ2UgfSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb24uYWN0aW9ucyc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL21vZGVscy9hcHBsaWNhdGlvbi1jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi4vbW9kZWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcnO1xyXG5pbXBvcnQgeyBvcmdhbml6ZVJvdXRlcyB9IGZyb20gJy4uL3V0aWxzL3JvdXRlLXV0aWxzJztcclxuaW1wb3J0IHsgU2Vzc2lvblN0YXRlIH0gZnJvbSAnLi9zZXNzaW9uLnN0YXRlJztcclxuXHJcbkBTdGF0ZTxDb25maWcuU3RhdGU+KHtcclxuICBuYW1lOiAnQ29uZmlnU3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7fSBhcyBDb25maWcuU3RhdGUsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1N0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRBbGwoc3RhdGU6IENvbmZpZy5TdGF0ZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0QXBwbGljYXRpb25JbmZvKHN0YXRlOiBDb25maWcuU3RhdGUpOiBDb25maWcuQXBwbGljYXRpb24ge1xyXG4gICAgcmV0dXJuIHN0YXRlLmVudmlyb25tZW50LmFwcGxpY2F0aW9uIHx8ICh7fSBhcyBDb25maWcuQXBwbGljYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldE9uZShrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gc3RhdGVba2V5XTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXREZWVwKGtleXM6IHN0cmluZ1tdIHwgc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZW9mIGtleXMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGtleXMgPSBrZXlzLnNwbGl0KCcuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBkb3Qgc3RyaW5nIG9yIGFuIHN0cmluZyBhcnJheS4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiAoa2V5cyBhcyBzdHJpbmdbXSkucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xyXG4gICAgICAgIGlmIChhY2MpIHtcclxuICAgICAgICAgIHJldHVybiBhY2NbdmFsXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH0sIHN0YXRlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRSb3V0ZShwYXRoPzogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgY29uc3QgeyBmbGF0dGVkUm91dGVzIH0gPSBzdGF0ZTtcclxuICAgICAgcmV0dXJuIChmbGF0dGVkUm91dGVzIGFzIEFCUC5GdWxsUm91dGVbXSkuZmluZChyb3V0ZSA9PiB7XHJcbiAgICAgICAgaWYgKHBhdGggJiYgcm91dGUucGF0aCA9PT0gcGF0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSAmJiByb3V0ZS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1cmwgJiYgcm91dGUudXJsID09PSB1cmwpIHtcclxuICAgICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEFwaVVybChrZXk/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpOiBzdHJpbmcgPT4ge1xyXG4gICAgICByZXR1cm4gKHN0YXRlLmVudmlyb25tZW50LmFwaXNba2V5IHx8ICdkZWZhdWx0J10gfHwgc3RhdGUuZW52aXJvbm1lbnQuYXBpcy5kZWZhdWx0KS51cmw7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U2V0dGluZyhrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gc25xKCgpID0+IHN0YXRlLnNldHRpbmcudmFsdWVzW2tleV0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFNldHRpbmdzKGtleXdvcmQ/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgY29uc3Qgc2V0dGluZ3MgPSBzbnEoKCkgPT4gc3RhdGUuc2V0dGluZy52YWx1ZXMsIHt9KTtcclxuXHJcbiAgICAgIGlmICgha2V5d29yZCkgcmV0dXJuIHNldHRpbmdzO1xyXG5cclxuICAgICAgY29uc3Qga2V5c0ZvdW5kID0gT2JqZWN0LmtleXMoc2V0dGluZ3MpLmZpbHRlcihrZXkgPT4ga2V5LmluZGV4T2Yoa2V5d29yZCkgPiAtMSk7XHJcblxyXG4gICAgICByZXR1cm4ga2V5c0ZvdW5kLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgICAgICBhY2Nba2V5XSA9IHNldHRpbmdzW2tleV07XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgfSwge30pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEdyYW50ZWRQb2xpY3koa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpOiBib29sZWFuID0+IHtcclxuICAgICAgaWYgKCFrZXkpIHJldHVybiB0cnVlO1xyXG4gICAgICBjb25zdCBnZXRQb2xpY3kgPSBrID0+IHNucSgoKSA9PiBzdGF0ZS5hdXRoLmdyYW50ZWRQb2xpY2llc1trXSwgZmFsc2UpO1xyXG5cclxuICAgICAgY29uc3Qgb3JSZWdleHAgPSAvXFx8XFx8L2c7XHJcbiAgICAgIGNvbnN0IGFuZFJlZ2V4cCA9IC8mJi9nO1xyXG5cclxuICAgICAgaWYgKG9yUmVnZXhwLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJ3x8JykuZmlsdGVyKGsgPT4gISFrKTtcclxuXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoICE9PSAyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5c1swXS50cmltKCkpIHx8IGdldFBvbGljeShrZXlzWzFdLnRyaW0oKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYW5kUmVnZXhwLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJyYmJykuZmlsdGVyKGsgPT4gISFrKTtcclxuXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoICE9PSAyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5c1swXS50cmltKCkpICYmIGdldFBvbGljeShrZXlzWzFdLnRyaW0oKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRMb2NhbGl6YXRpb24oXHJcbiAgICBrZXk6IHN0cmluZyB8IENvbmZpZy5Mb2NhbGl6YXRpb25XaXRoRGVmYXVsdCxcclxuICAgIC4uLmludGVycG9sYXRlUGFyYW1zOiBzdHJpbmdbXVxyXG4gICkge1xyXG4gICAgaWYgKCFrZXkpIGtleSA9ICcnO1xyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBkZWZhdWx0VmFsdWUgPSBrZXkuZGVmYXVsdFZhbHVlO1xyXG4gICAgICBrZXkgPSBrZXkua2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJzo6JykgYXMgc3RyaW5nW107XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKTogc3RyaW5nID0+IHtcclxuICAgICAgY29uc3Qgd2FybiA9IChtZXNzYWdlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAoIXN0YXRlLmVudmlyb25tZW50LnByb2R1Y3Rpb24pIGNvbnNvbGUud2FybihtZXNzYWdlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChrZXlzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICB3YXJuKCdUaGUgbG9jYWxpemF0aW9uIHNvdXJjZSBzZXBhcmF0b3IgKDo6KSBub3QgZm91bmQuJyk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCAoa2V5IGFzIHN0cmluZyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFzdGF0ZS5sb2NhbGl6YXRpb24pIHJldHVybiBkZWZhdWx0VmFsdWUgfHwga2V5c1sxXTtcclxuXHJcbiAgICAgIGNvbnN0IHNvdXJjZU5hbWUgPVxyXG4gICAgICAgIGtleXNbMF0gfHxcclxuICAgICAgICBzbnEoKCkgPT4gc3RhdGUuZW52aXJvbm1lbnQubG9jYWxpemF0aW9uLmRlZmF1bHRSZXNvdXJjZU5hbWUpIHx8XHJcbiAgICAgICAgc3RhdGUubG9jYWxpemF0aW9uLmRlZmF1bHRSZXNvdXJjZU5hbWU7XHJcbiAgICAgIGNvbnN0IHNvdXJjZUtleSA9IGtleXNbMV07XHJcblxyXG4gICAgICBpZiAoc291cmNlTmFtZSA9PT0gJ18nKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCBzb3VyY2VLZXk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghc291cmNlTmFtZSkge1xyXG4gICAgICAgIHdhcm4oXHJcbiAgICAgICAgICAnTG9jYWxpemF0aW9uIHNvdXJjZSBuYW1lIGlzIG5vdCBzcGVjaWZpZWQgYW5kIHRoZSBkZWZhdWx0UmVzb3VyY2VOYW1lIHdhcyBub3QgZGVmaW5lZCEnLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUgfHwgc291cmNlS2V5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzb3VyY2UgPSBzdGF0ZS5sb2NhbGl6YXRpb24udmFsdWVzW3NvdXJjZU5hbWVdO1xyXG4gICAgICBpZiAoIXNvdXJjZSkge1xyXG4gICAgICAgIHdhcm4oJ0NvdWxkIG5vdCBmaW5kIGxvY2FsaXphdGlvbiBzb3VyY2U6ICcgKyBzb3VyY2VOYW1lKTtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IHNvdXJjZUtleTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGxvY2FsaXphdGlvbiA9IHNvdXJjZVtzb3VyY2VLZXldO1xyXG4gICAgICBpZiAodHlwZW9mIGxvY2FsaXphdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IHNvdXJjZUtleTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW50ZXJwb2xhdGVQYXJhbXMgPSBpbnRlcnBvbGF0ZVBhcmFtcy5maWx0ZXIocGFyYW1zID0+IHBhcmFtcyAhPSBudWxsKTtcclxuICAgICAgaWYgKGxvY2FsaXphdGlvbiAmJiBpbnRlcnBvbGF0ZVBhcmFtcyAmJiBpbnRlcnBvbGF0ZVBhcmFtcy5sZW5ndGgpIHtcclxuICAgICAgICBpbnRlcnBvbGF0ZVBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcclxuICAgICAgICAgIGxvY2FsaXphdGlvbiA9IGxvY2FsaXphdGlvbi5yZXBsYWNlKC9bXFwnXFxcIl0/XFx7W1xcZF0rXFx9W1xcJ1xcXCJdPy8sIHBhcmFtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBsb2NhbGl6YXRpb24gIT09ICdzdHJpbmcnKSBsb2NhbGl6YXRpb24gPSAnJztcclxuICAgICAgcmV0dXJuIGxvY2FsaXphdGlvbiB8fCBkZWZhdWx0VmFsdWUgfHwgKGtleSBhcyBzdHJpbmcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgQEFjdGlvbihHZXRBcHBDb25maWd1cmF0aW9uKVxyXG4gIGFkZERhdGEoeyBwYXRjaFN0YXRlLCBkaXNwYXRjaCB9OiBTdGF0ZUNvbnRleHQ8Q29uZmlnLlN0YXRlPikge1xyXG4gICAgY29uc3QgYXBpTmFtZSA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0RGVlcCgnZW52aXJvbm1lbnQuYXBwbGljYXRpb24ubmFtZScpKTtcclxuICAgIGNvbnN0IGFwaSA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0QXBpVXJsKGFwaU5hbWUpKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldDxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uUmVzcG9uc2U+KGAke2FwaX0vYXBpL2FicC9hcHBsaWNhdGlvbi1jb25maWd1cmF0aW9uYClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFwKGNvbmZpZ3VyYXRpb24gPT5cclxuICAgICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgICAuLi5jb25maWd1cmF0aW9uLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgKSxcclxuICAgICAgICBzd2l0Y2hNYXAoY29uZmlndXJhdGlvbiA9PiB7XHJcbiAgICAgICAgICBsZXQgZGVmYXVsdExhbmc6IHN0cmluZyA9XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24uc2V0dGluZy52YWx1ZXNbJ0FicC5Mb2NhbGl6YXRpb24uRGVmYXVsdExhbmd1YWdlJ107XHJcblxyXG4gICAgICAgICAgaWYgKGRlZmF1bHRMYW5nLmluY2x1ZGVzKCc7JykpIHtcclxuICAgICAgICAgICAgZGVmYXVsdExhbmcgPSBkZWZhdWx0TGFuZy5zcGxpdCgnOycpWzBdO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICdsYW5nJyxcclxuICAgICAgICAgICAgY29uZmlndXJhdGlvbi5sb2NhbGl6YXRpb24uY3VycmVudEN1bHR1cmUuY3VsdHVyZU5hbWUsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlLmdldExhbmd1YWdlKVxyXG4gICAgICAgICAgICA/IG9mKG51bGwpXHJcbiAgICAgICAgICAgIDogZGlzcGF0Y2gobmV3IFNldExhbmd1YWdlKGRlZmF1bHRMYW5nLCBmYWxzZSkpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKG5ldyBSZXN0T2NjdXJFcnJvcihuZXcgSHR0cEVycm9yUmVzcG9uc2UoeyBzdGF0dXM6IDAsIGVycm9yOiBlcnIgfSkpKTtcclxuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFBhdGNoUm91dGVCeU5hbWUpXHJcbiAgcGF0Y2hSb3V0ZShcclxuICAgIHsgcGF0Y2hTdGF0ZSwgZ2V0U3RhdGUgfTogU3RhdGVDb250ZXh0PENvbmZpZy5TdGF0ZT4sXHJcbiAgICB7IG5hbWUsIG5ld1ZhbHVlIH06IFBhdGNoUm91dGVCeU5hbWUsXHJcbiAgKSB7XHJcbiAgICBsZXQgcm91dGVzOiBBQlAuRnVsbFJvdXRlW10gPSBnZXRTdGF0ZSgpLnJvdXRlcztcclxuXHJcbiAgICByb3V0ZXMgPSBwYXRjaFJvdXRlRGVlcChyb3V0ZXMsIG5hbWUsIG5ld1ZhbHVlKTtcclxuXHJcbiAgICBjb25zdCBmbGF0dGVkUm91dGVzID0gZ2V0U3RhdGUoKS5mbGF0dGVkUm91dGVzO1xyXG4gICAgY29uc3QgaW5kZXggPSBmbGF0dGVkUm91dGVzLmZpbmRJbmRleChyb3V0ZSA9PiByb3V0ZS5uYW1lID09PSBuYW1lKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICBmbGF0dGVkUm91dGVzW2luZGV4XSA9IHsgLi4uZmxhdHRlZFJvdXRlc1tpbmRleF0sIC4uLm5ld1ZhbHVlIH0gYXMgQUJQLkZ1bGxSb3V0ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIHJvdXRlcyxcclxuICAgICAgZmxhdHRlZFJvdXRlcyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihBZGRSb3V0ZSlcclxuICBhZGRSb3V0ZSh7IHBhdGNoU3RhdGUsIGdldFN0YXRlIH06IFN0YXRlQ29udGV4dDxDb25maWcuU3RhdGU+LCB7IHBheWxvYWQgfTogQWRkUm91dGUpIHtcclxuICAgIGxldCByb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSA9IGdldFN0YXRlKCkucm91dGVzO1xyXG4gICAgY29uc3QgZmxhdHRlZFJvdXRlcyA9IGdldFN0YXRlKCkuZmxhdHRlZFJvdXRlcztcclxuICAgIGNvbnN0IHJvdXRlOiBBQlAuRnVsbFJvdXRlID0geyAuLi5wYXlsb2FkIH07XHJcblxyXG4gICAgaWYgKHJvdXRlLnBhcmVudE5hbWUpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBmbGF0dGVkUm91dGVzLmZpbmRJbmRleChyID0+IHIubmFtZSA9PT0gcm91dGUucGFyZW50TmFtZSk7XHJcblxyXG4gICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBwYXJlbnQgPSBmbGF0dGVkUm91dGVzW2luZGV4XTtcclxuICAgICAgaWYgKChwYXJlbnQudXJsIHx8ICcnKS5yZXBsYWNlKCcvJywgJycpKSB7XHJcbiAgICAgICAgcm91dGUudXJsID0gYCR7cGFyZW50LnVybH0vJHtyb3V0ZS5wYXRofWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm91dGUudXJsID0gYC8ke3JvdXRlLnBhdGh9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcm91dGUuY2hpbGRyZW4gPSByb3V0ZS5jaGlsZHJlbiB8fCBbXTtcclxuICAgICAgcm91dGUub3JkZXIgPSByb3V0ZS5vcmRlciB8fCByb3V0ZS5vcmRlciA9PT0gMCA/IHJvdXRlLm9yZGVyIDogKHBhcmVudC5jaGlsZHJlbiB8fCBbXSkubGVuZ3RoO1xyXG4gICAgICBwYXJlbnQuY2hpbGRyZW4gPSBbLi4uKHBhcmVudC5jaGlsZHJlbiB8fCBbXSksIHJvdXRlXS5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XHJcblxyXG4gICAgICBmbGF0dGVkUm91dGVzW2luZGV4XSA9IHBhcmVudDtcclxuICAgICAgZmxhdHRlZFJvdXRlcy5wdXNoKHJvdXRlKTtcclxuXHJcbiAgICAgIGxldCBwYXJlbnROYW1lID0gcGFyZW50Lm5hbWU7XHJcbiAgICAgIGNvbnN0IHBhcmVudE5hbWVBcnIgPSBbcGFyZW50TmFtZV07XHJcblxyXG4gICAgICB3aGlsZSAocGFyZW50TmFtZSkge1xyXG4gICAgICAgIHBhcmVudE5hbWUgPSBzbnEoKCkgPT4gZmxhdHRlZFJvdXRlcy5maW5kKHIgPT4gci5uYW1lID09PSBwYXJlbnROYW1lKS5wYXJlbnROYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHBhcmVudE5hbWUpIHtcclxuICAgICAgICAgIHBhcmVudE5hbWVBcnIudW5zaGlmdChwYXJlbnROYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvdXRlcyA9IHVwZGF0ZVJvdXRlRGVlcChyb3V0ZXMsIHBhcmVudE5hbWVBcnIsIHBhcmVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZS51cmwgPSBgLyR7cm91dGUucGF0aH1gO1xyXG5cclxuICAgICAgaWYgKHJvdXRlLm9yZGVyIHx8IHJvdXRlLm9yZGVyID09PSAwKSB7XHJcbiAgICAgICAgcm91dGVzID0gWy4uLnJvdXRlcywgcm91dGVdLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByb3V0ZS5vcmRlciA9IHJvdXRlcy5sZW5ndGg7XHJcbiAgICAgICAgcm91dGVzID0gWy4uLnJvdXRlcywgcm91dGVdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmbGF0dGVkUm91dGVzLnB1c2gocm91dGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRjaFN0YXRlKHtcclxuICAgICAgcm91dGVzLFxyXG4gICAgICBmbGF0dGVkUm91dGVzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFNldEVudmlyb25tZW50KVxyXG4gIHNldEVudmlyb25tZW50KHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8Q29uZmlnLlN0YXRlPiwgeyBlbnZpcm9ubWVudCB9OiBTZXRFbnZpcm9ubWVudCkge1xyXG4gICAgcmV0dXJuIHBhdGNoU3RhdGUoe1xyXG4gICAgICBlbnZpcm9ubWVudCxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hSb3V0ZURlZXAoXHJcbiAgcm91dGVzOiBBQlAuRnVsbFJvdXRlW10sXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIG5ld1ZhbHVlOiBQYXJ0aWFsPEFCUC5GdWxsUm91dGU+LFxyXG4gIHBhcmVudFVybDogc3RyaW5nID0gJycsXHJcbik6IEFCUC5GdWxsUm91dGVbXSB7XHJcbiAgcm91dGVzID0gcm91dGVzLm1hcChyb3V0ZSA9PiB7XHJcbiAgICBpZiAocm91dGUubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICBuZXdWYWx1ZS51cmwgPSBgJHtwYXJlbnRVcmx9LyR7KCFuZXdWYWx1ZS5wYXRoIHx8IG5ld1ZhbHVlLnBhdGggPT09ICcnXHJcbiAgICAgICAgPyByb3V0ZS5wYXRoXHJcbiAgICAgICAgOiBuZXdWYWx1ZS5wYXRoKSB8fCAnJ31gO1xyXG5cclxuICAgICAgaWYgKG5ld1ZhbHVlLmNoaWxkcmVuICYmIG5ld1ZhbHVlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0gbmV3VmFsdWUuY2hpbGRyZW4ubWFwKGNoaWxkID0+ICh7XHJcbiAgICAgICAgICAuLi5jaGlsZCxcclxuICAgICAgICAgIHVybDogYCR7bmV3VmFsdWUudXJsfS8ke2NoaWxkLnBhdGh9YC5yZXBsYWNlKCcvLycsICcvJyksXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyAuLi5yb3V0ZSwgLi4ubmV3VmFsdWUgfTtcclxuICAgIH0gZWxzZSBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgIHJvdXRlLmNoaWxkcmVuID0gcGF0Y2hSb3V0ZURlZXAoXHJcbiAgICAgICAgcm91dGUuY2hpbGRyZW4sXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBuZXdWYWx1ZSxcclxuICAgICAgICAocGFyZW50VXJsIHx8ICcvJykgKyByb3V0ZS5wYXRoLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByb3V0ZTtcclxuICB9KTtcclxuXHJcbiAgaWYgKHBhcmVudFVybCkge1xyXG4gICAgLy8gcmVjdXJzaXZlIGJsb2NrXHJcbiAgICByZXR1cm4gcm91dGVzO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9yZ2FuaXplUm91dGVzKHJvdXRlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVJvdXRlRGVlcChcclxuICByb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSxcclxuICBwYXJlbnROYW1lQXJyOiBzdHJpbmdbXSxcclxuICBuZXdWYWx1ZTogQUJQLkZ1bGxSb3V0ZSxcclxuICBwYXJlbnRJbmRleCA9IDAsXHJcbikge1xyXG4gIGNvbnN0IGluZGV4ID0gcm91dGVzLmZpbmRJbmRleChyb3V0ZSA9PiByb3V0ZS5uYW1lID09PSBwYXJlbnROYW1lQXJyW3BhcmVudEluZGV4XSk7XHJcblxyXG4gIGlmIChwYXJlbnRJbmRleCA9PT0gcGFyZW50TmFtZUFyci5sZW5ndGggLSAxKSB7XHJcbiAgICByb3V0ZXNbaW5kZXhdID0gbmV3VmFsdWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJvdXRlc1tpbmRleF0uY2hpbGRyZW4gPSB1cGRhdGVSb3V0ZURlZXAoXHJcbiAgICAgIHJvdXRlc1tpbmRleF0uY2hpbGRyZW4sXHJcbiAgICAgIHBhcmVudE5hbWVBcnIsXHJcbiAgICAgIG5ld1ZhbHVlLFxyXG4gICAgICBwYXJlbnRJbmRleCArIDEsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvdXRlcztcclxufVxyXG4iXX0=