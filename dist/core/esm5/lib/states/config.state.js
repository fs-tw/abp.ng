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
            return _this.store.selectSnapshot(SessionState.getLanguage)
                ? of(null)
                : dispatch(new SetLanguage(defaultLang));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0YXRlcy9jb25maWcuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQ0wsUUFBUSxFQUNSLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsY0FBYyxHQUNmLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUl6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQXFMN0MscUJBQW9CLElBQWdCLEVBQVUsS0FBWTtRQUF0QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7b0JBOUtuRCxXQUFXOzs7OztJQUVmLGtCQUFNOzs7O0lBQWIsVUFBYyxLQUFtQjtRQUMvQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lB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QUssQ0FBQyxJQUFJLENBQ2hDLENBQUM7U0FDSDtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxFQUFDLENBQUM7SUFFSCxJQUFJLFNBQVMsRUFBRTtRQUNiLGtCQUFrQjtRQUNsQixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBRUQsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsQ0FBQzs7Ozs7Ozs7QUFFRCxTQUFTLGVBQWUsQ0FDdEIsTUFBdUIsRUFDdkIsYUFBdUIsRUFDdkIsUUFBdUIsRUFDdkIsV0FBZTtJQUFmLDRCQUFBLEVBQUEsZUFBZTs7UUFFVCxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVM7Ozs7SUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUF6QyxDQUF5QyxFQUFDO0lBRWxGLElBQUksV0FBVyxLQUFLLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzVDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUM7S0FDMUI7U0FBTTtRQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUN0QixhQUFhLEVBQ2IsUUFBUSxFQUNSLFdBQVcsR0FBRyxDQUFDLENBQ2hCLENBQUM7S0FDSDtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb24sIGNyZWF0ZVNlbGVjdG9yLCBTZWxlY3RvciwgU3RhdGUsIFN0YXRlQ29udGV4dCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7XHJcbiAgQWRkUm91dGUsXHJcbiAgR2V0QXBwQ29uZmlndXJhdGlvbixcclxuICBQYXRjaFJvdXRlQnlOYW1lLFxyXG4gIFNldEVudmlyb25tZW50LFxyXG59IGZyb20gJy4uL2FjdGlvbnMvY29uZmlnLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBSZXN0T2NjdXJFcnJvciB9IGZyb20gJy4uL2FjdGlvbnMvcmVzdC5hY3Rpb25zJztcclxuaW1wb3J0IHsgU2V0TGFuZ3VhZ2UgfSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb24uYWN0aW9ucyc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL21vZGVscy9hcHBsaWNhdGlvbi1jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi4vbW9kZWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcnO1xyXG5pbXBvcnQgeyBvcmdhbml6ZVJvdXRlcyB9IGZyb20gJy4uL3V0aWxzL3JvdXRlLXV0aWxzJztcclxuaW1wb3J0IHsgU2Vzc2lvblN0YXRlIH0gZnJvbSAnLi9zZXNzaW9uLnN0YXRlJztcclxuXHJcbkBTdGF0ZTxDb25maWcuU3RhdGU+KHtcclxuICBuYW1lOiAnQ29uZmlnU3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7fSBhcyBDb25maWcuU3RhdGUsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1N0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRBbGwoc3RhdGU6IENvbmZpZy5TdGF0ZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0QXBwbGljYXRpb25JbmZvKHN0YXRlOiBDb25maWcuU3RhdGUpOiBDb25maWcuQXBwbGljYXRpb24ge1xyXG4gICAgcmV0dXJuIHN0YXRlLmVudmlyb25tZW50LmFwcGxpY2F0aW9uIHx8ICh7fSBhcyBDb25maWcuQXBwbGljYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldE9uZShrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gc3RhdGVba2V5XTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXREZWVwKGtleXM6IHN0cmluZ1tdIHwgc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZW9mIGtleXMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGtleXMgPSBrZXlzLnNwbGl0KCcuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBkb3Qgc3RyaW5nIG9yIGFuIHN0cmluZyBhcnJheS4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiAoa2V5cyBhcyBzdHJpbmdbXSkucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xyXG4gICAgICAgIGlmIChhY2MpIHtcclxuICAgICAgICAgIHJldHVybiBhY2NbdmFsXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH0sIHN0YXRlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRSb3V0ZShwYXRoPzogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgY29uc3QgeyBmbGF0dGVkUm91dGVzIH0gPSBzdGF0ZTtcclxuICAgICAgcmV0dXJuIChmbGF0dGVkUm91dGVzIGFzIEFCUC5GdWxsUm91dGVbXSkuZmluZChyb3V0ZSA9PiB7XHJcbiAgICAgICAgaWYgKHBhdGggJiYgcm91dGUucGF0aCA9PT0gcGF0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSAmJiByb3V0ZS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1cmwgJiYgcm91dGUudXJsID09PSB1cmwpIHtcclxuICAgICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEFwaVVybChrZXk/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpOiBzdHJpbmcgPT4ge1xyXG4gICAgICByZXR1cm4gKHN0YXRlLmVudmlyb25tZW50LmFwaXNba2V5IHx8ICdkZWZhdWx0J10gfHwgc3RhdGUuZW52aXJvbm1lbnQuYXBpcy5kZWZhdWx0KS51cmw7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U2V0dGluZyhrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gc25xKCgpID0+IHN0YXRlLnNldHRpbmcudmFsdWVzW2tleV0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFNldHRpbmdzKGtleXdvcmQ/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgY29uc3Qgc2V0dGluZ3MgPSBzbnEoKCkgPT4gc3RhdGUuc2V0dGluZy52YWx1ZXMsIHt9KTtcclxuXHJcbiAgICAgIGlmICgha2V5d29yZCkgcmV0dXJuIHNldHRpbmdzO1xyXG5cclxuICAgICAgY29uc3Qga2V5c0ZvdW5kID0gT2JqZWN0LmtleXMoc2V0dGluZ3MpLmZpbHRlcihrZXkgPT4ga2V5LmluZGV4T2Yoa2V5d29yZCkgPiAtMSk7XHJcblxyXG4gICAgICByZXR1cm4ga2V5c0ZvdW5kLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgICAgICBhY2Nba2V5XSA9IHNldHRpbmdzW2tleV07XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgfSwge30pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEdyYW50ZWRQb2xpY3koa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpOiBib29sZWFuID0+IHtcclxuICAgICAgaWYgKCFrZXkpIHJldHVybiB0cnVlO1xyXG4gICAgICBjb25zdCBnZXRQb2xpY3kgPSBrID0+IHNucSgoKSA9PiBzdGF0ZS5hdXRoLmdyYW50ZWRQb2xpY2llc1trXSwgZmFsc2UpO1xyXG5cclxuICAgICAgY29uc3Qgb3JSZWdleHAgPSAvXFx8XFx8L2c7XHJcbiAgICAgIGNvbnN0IGFuZFJlZ2V4cCA9IC8mJi9nO1xyXG5cclxuICAgICAgaWYgKG9yUmVnZXhwLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJ3x8JykuZmlsdGVyKGsgPT4gISFrKTtcclxuXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoICE9PSAyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5c1swXS50cmltKCkpIHx8IGdldFBvbGljeShrZXlzWzFdLnRyaW0oKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYW5kUmVnZXhwLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJyYmJykuZmlsdGVyKGsgPT4gISFrKTtcclxuXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoICE9PSAyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5c1swXS50cmltKCkpICYmIGdldFBvbGljeShrZXlzWzFdLnRyaW0oKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRMb2NhbGl6YXRpb24oXHJcbiAgICBrZXk6IHN0cmluZyB8IENvbmZpZy5Mb2NhbGl6YXRpb25XaXRoRGVmYXVsdCxcclxuICAgIC4uLmludGVycG9sYXRlUGFyYW1zOiBzdHJpbmdbXVxyXG4gICkge1xyXG4gICAgaWYgKCFrZXkpIGtleSA9ICcnO1xyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBkZWZhdWx0VmFsdWUgPSBrZXkuZGVmYXVsdFZhbHVlO1xyXG4gICAgICBrZXkgPSBrZXkua2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJzo6JykgYXMgc3RyaW5nW107XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIGlmICghc3RhdGUubG9jYWxpemF0aW9uKSByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IGtleTtcclxuXHJcbiAgICAgIGNvbnN0IGRlZmF1bHRSZXNvdXJjZU5hbWUgPSBzbnEoKCkgPT4gc3RhdGUuZW52aXJvbm1lbnQubG9jYWxpemF0aW9uLmRlZmF1bHRSZXNvdXJjZU5hbWUpO1xyXG4gICAgICBpZiAoa2V5c1swXSA9PT0gJycpIHtcclxuICAgICAgICBpZiAoIWRlZmF1bHRSZXNvdXJjZU5hbWUpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgYFBsZWFzZSBjaGVjayB5b3VyIGVudmlyb25tZW50LiBNYXkgeW91IGZvcmdldCBzZXQgZGVmYXVsdFJlc291cmNlTmFtZT9cclxuICAgICAgICAgICAgICBIZXJlIGlzIHRoZSBleGFtcGxlOlxyXG4gICAgICAgICAgICAgICB7IHByb2R1Y3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgIGxvY2FsaXphdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgZGVmYXVsdFJlc291cmNlTmFtZTogJ015UHJvamVjdE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfWAsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAga2V5c1swXSA9IGRlZmF1bHRSZXNvdXJjZU5hbWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBsb2NhbGl6YXRpb24gPSAoa2V5cyBhcyBhbnkpLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcclxuICAgICAgICBpZiAoYWNjKSB7XHJcbiAgICAgICAgICByZXR1cm4gYWNjW3ZhbF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9LCBzdGF0ZS5sb2NhbGl6YXRpb24udmFsdWVzKTtcclxuXHJcbiAgICAgIGludGVycG9sYXRlUGFyYW1zID0gaW50ZXJwb2xhdGVQYXJhbXMuZmlsdGVyKHBhcmFtcyA9PiBwYXJhbXMgIT0gbnVsbCk7XHJcbiAgICAgIGlmIChsb2NhbGl6YXRpb24gJiYgaW50ZXJwb2xhdGVQYXJhbXMgJiYgaW50ZXJwb2xhdGVQYXJhbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgaW50ZXJwb2xhdGVQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XHJcbiAgICAgICAgICBsb2NhbGl6YXRpb24gPSBsb2NhbGl6YXRpb24ucmVwbGFjZSgvW1xcJ1xcXCJdP1xce1tcXGRdK1xcfVtcXCdcXFwiXT8vLCBwYXJhbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgbG9jYWxpemF0aW9uICE9PSAnc3RyaW5nJykgbG9jYWxpemF0aW9uID0gJyc7XHJcbiAgICAgIHJldHVybiBsb2NhbGl6YXRpb24gfHwgZGVmYXVsdFZhbHVlIHx8IGtleTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIEBBY3Rpb24oR2V0QXBwQ29uZmlndXJhdGlvbilcclxuICBhZGREYXRhKHsgcGF0Y2hTdGF0ZSwgZGlzcGF0Y2ggfTogU3RhdGVDb250ZXh0PENvbmZpZy5TdGF0ZT4pIHtcclxuICAgIGNvbnN0IGFwaU5hbWUgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldERlZXAoJ2Vudmlyb25tZW50LmFwcGxpY2F0aW9uLm5hbWUnKSk7XHJcbiAgICBjb25zdCBhcGkgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldEFwaVVybChhcGlOYW1lKSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQ8QXBwbGljYXRpb25Db25maWd1cmF0aW9uLlJlc3BvbnNlPihgJHthcGl9L2FwaS9hYnAvYXBwbGljYXRpb24tY29uZmlndXJhdGlvbmApXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcChjb25maWd1cmF0aW9uID0+XHJcbiAgICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbixcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICksXHJcbiAgICAgICAgc3dpdGNoTWFwKGNvbmZpZ3VyYXRpb24gPT4ge1xyXG4gICAgICAgICAgbGV0IGRlZmF1bHRMYW5nOiBzdHJpbmcgPVxyXG4gICAgICAgICAgICBjb25maWd1cmF0aW9uLnNldHRpbmcudmFsdWVzWydBYnAuTG9jYWxpemF0aW9uLkRlZmF1bHRMYW5ndWFnZSddO1xyXG5cclxuICAgICAgICAgIGlmIChkZWZhdWx0TGFuZy5pbmNsdWRlcygnOycpKSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRMYW5nID0gZGVmYXVsdExhbmcuc3BsaXQoJzsnKVswXTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChTZXNzaW9uU3RhdGUuZ2V0TGFuZ3VhZ2UpXHJcbiAgICAgICAgICAgID8gb2YobnVsbClcclxuICAgICAgICAgICAgOiBkaXNwYXRjaChuZXcgU2V0TGFuZ3VhZ2UoZGVmYXVsdExhbmcpKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChuZXcgUmVzdE9jY3VyRXJyb3IobmV3IEh0dHBFcnJvclJlc3BvbnNlKHsgc3RhdHVzOiAwLCBlcnJvcjogZXJyIH0pKSk7XHJcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihQYXRjaFJvdXRlQnlOYW1lKVxyXG4gIHBhdGNoUm91dGUoXHJcbiAgICB7IHBhdGNoU3RhdGUsIGdldFN0YXRlIH06IFN0YXRlQ29udGV4dDxDb25maWcuU3RhdGU+LFxyXG4gICAgeyBuYW1lLCBuZXdWYWx1ZSB9OiBQYXRjaFJvdXRlQnlOYW1lLFxyXG4gICkge1xyXG4gICAgbGV0IHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdID0gZ2V0U3RhdGUoKS5yb3V0ZXM7XHJcblxyXG4gICAgcm91dGVzID0gcGF0Y2hSb3V0ZURlZXAocm91dGVzLCBuYW1lLCBuZXdWYWx1ZSk7XHJcblxyXG4gICAgY29uc3QgZmxhdHRlZFJvdXRlcyA9IGdldFN0YXRlKCkuZmxhdHRlZFJvdXRlcztcclxuICAgIGNvbnN0IGluZGV4ID0gZmxhdHRlZFJvdXRlcy5maW5kSW5kZXgocm91dGUgPT4gcm91dGUubmFtZSA9PT0gbmFtZSk7XHJcblxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgZmxhdHRlZFJvdXRlc1tpbmRleF0gPSB7IC4uLmZsYXR0ZWRSb3V0ZXNbaW5kZXhdLCAuLi5uZXdWYWx1ZSB9IGFzIEFCUC5GdWxsUm91dGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhdGNoU3RhdGUoe1xyXG4gICAgICByb3V0ZXMsXHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oQWRkUm91dGUpXHJcbiAgYWRkUm91dGUoeyBwYXRjaFN0YXRlLCBnZXRTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8Q29uZmlnLlN0YXRlPiwgeyBwYXlsb2FkIH06IEFkZFJvdXRlKSB7XHJcbiAgICBsZXQgcm91dGVzOiBBQlAuRnVsbFJvdXRlW10gPSBnZXRTdGF0ZSgpLnJvdXRlcztcclxuICAgIGNvbnN0IGZsYXR0ZWRSb3V0ZXMgPSBnZXRTdGF0ZSgpLmZsYXR0ZWRSb3V0ZXM7XHJcbiAgICBjb25zdCByb3V0ZTogQUJQLkZ1bGxSb3V0ZSA9IHsgLi4ucGF5bG9hZCB9O1xyXG5cclxuICAgIGlmIChyb3V0ZS5wYXJlbnROYW1lKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZmxhdHRlZFJvdXRlcy5maW5kSW5kZXgociA9PiByLm5hbWUgPT09IHJvdXRlLnBhcmVudE5hbWUpO1xyXG5cclxuICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgcGFyZW50ID0gZmxhdHRlZFJvdXRlc1tpbmRleF07XHJcbiAgICAgIGlmICgocGFyZW50LnVybCB8fCAnJykucmVwbGFjZSgnLycsICcnKSkge1xyXG4gICAgICAgIHJvdXRlLnVybCA9IGAke3BhcmVudC51cmx9LyR7cm91dGUucGF0aH1gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdXRlLnVybCA9IGAvJHtyb3V0ZS5wYXRofWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvdXRlLmNoaWxkcmVuID0gcm91dGUuY2hpbGRyZW4gfHwgW107XHJcbiAgICAgIHJvdXRlLm9yZGVyID0gcm91dGUub3JkZXIgfHwgcm91dGUub3JkZXIgPT09IDAgPyByb3V0ZS5vcmRlciA6IChwYXJlbnQuY2hpbGRyZW4gfHwgW10pLmxlbmd0aDtcclxuICAgICAgcGFyZW50LmNoaWxkcmVuID0gWy4uLihwYXJlbnQuY2hpbGRyZW4gfHwgW10pLCByb3V0ZV0uc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xyXG5cclxuICAgICAgZmxhdHRlZFJvdXRlc1tpbmRleF0gPSBwYXJlbnQ7XHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXMucHVzaChyb3V0ZSk7XHJcblxyXG4gICAgICBsZXQgcGFyZW50TmFtZSA9IHBhcmVudC5uYW1lO1xyXG4gICAgICBjb25zdCBwYXJlbnROYW1lQXJyID0gW3BhcmVudE5hbWVdO1xyXG5cclxuICAgICAgd2hpbGUgKHBhcmVudE5hbWUpIHtcclxuICAgICAgICBwYXJlbnROYW1lID0gc25xKCgpID0+IGZsYXR0ZWRSb3V0ZXMuZmluZChyID0+IHIubmFtZSA9PT0gcGFyZW50TmFtZSkucGFyZW50TmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChwYXJlbnROYW1lKSB7XHJcbiAgICAgICAgICBwYXJlbnROYW1lQXJyLnVuc2hpZnQocGFyZW50TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByb3V0ZXMgPSB1cGRhdGVSb3V0ZURlZXAocm91dGVzLCBwYXJlbnROYW1lQXJyLCBwYXJlbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGUudXJsID0gYC8ke3JvdXRlLnBhdGh9YDtcclxuXHJcbiAgICAgIGlmIChyb3V0ZS5vcmRlciB8fCByb3V0ZS5vcmRlciA9PT0gMCkge1xyXG4gICAgICAgIHJvdXRlcyA9IFsuLi5yb3V0ZXMsIHJvdXRlXS5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm91dGUub3JkZXIgPSByb3V0ZXMubGVuZ3RoO1xyXG4gICAgICAgIHJvdXRlcyA9IFsuLi5yb3V0ZXMsIHJvdXRlXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZmxhdHRlZFJvdXRlcy5wdXNoKHJvdXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIHJvdXRlcyxcclxuICAgICAgZmxhdHRlZFJvdXRlcyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihTZXRFbnZpcm9ubWVudClcclxuICBzZXRFbnZpcm9ubWVudCh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PENvbmZpZy5TdGF0ZT4sIHsgZW52aXJvbm1lbnQgfTogU2V0RW52aXJvbm1lbnQpIHtcclxuICAgIHJldHVybiBwYXRjaFN0YXRlKHtcclxuICAgICAgZW52aXJvbm1lbnQsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoUm91dGVEZWVwKFxyXG4gIHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdLFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBuZXdWYWx1ZTogUGFydGlhbDxBQlAuRnVsbFJvdXRlPixcclxuICBwYXJlbnRVcmw6IHN0cmluZyA9ICcnLFxyXG4pOiBBQlAuRnVsbFJvdXRlW10ge1xyXG4gIHJvdXRlcyA9IHJvdXRlcy5tYXAocm91dGUgPT4ge1xyXG4gICAgaWYgKHJvdXRlLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgbmV3VmFsdWUudXJsID0gYCR7cGFyZW50VXJsfS8keyghbmV3VmFsdWUucGF0aCAmJiBuZXdWYWx1ZS5wYXRoID09PSAnJ1xyXG4gICAgICAgID8gcm91dGUucGF0aFxyXG4gICAgICAgIDogbmV3VmFsdWUucGF0aCkgfHwgJyd9YDtcclxuXHJcbiAgICAgIGlmIChuZXdWYWx1ZS5jaGlsZHJlbiAmJiBuZXdWYWx1ZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IG5ld1ZhbHVlLmNoaWxkcmVuLm1hcChjaGlsZCA9PiAoe1xyXG4gICAgICAgICAgLi4uY2hpbGQsXHJcbiAgICAgICAgICB1cmw6IGAke25ld1ZhbHVlLnVybH0vJHtjaGlsZC5wYXRofWAucmVwbGFjZSgnLy8nLCAnLycpLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHsgLi4ucm91dGUsIC4uLm5ld1ZhbHVlIH07XHJcbiAgICB9IGVsc2UgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICByb3V0ZS5jaGlsZHJlbiA9IHBhdGNoUm91dGVEZWVwKFxyXG4gICAgICAgIHJvdXRlLmNoaWxkcmVuLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgbmV3VmFsdWUsXHJcbiAgICAgICAgKHBhcmVudFVybCB8fCAnLycpICsgcm91dGUucGF0aCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcm91dGU7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChwYXJlbnRVcmwpIHtcclxuICAgIC8vIHJlY3Vyc2l2ZSBibG9ja1xyXG4gICAgcmV0dXJuIHJvdXRlcztcclxuICB9XHJcblxyXG4gIHJldHVybiBvcmdhbml6ZVJvdXRlcyhyb3V0ZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVSb3V0ZURlZXAoXHJcbiAgcm91dGVzOiBBQlAuRnVsbFJvdXRlW10sXHJcbiAgcGFyZW50TmFtZUFycjogc3RyaW5nW10sXHJcbiAgbmV3VmFsdWU6IEFCUC5GdWxsUm91dGUsXHJcbiAgcGFyZW50SW5kZXggPSAwLFxyXG4pIHtcclxuICBjb25zdCBpbmRleCA9IHJvdXRlcy5maW5kSW5kZXgocm91dGUgPT4gcm91dGUubmFtZSA9PT0gcGFyZW50TmFtZUFycltwYXJlbnRJbmRleF0pO1xyXG5cclxuICBpZiAocGFyZW50SW5kZXggPT09IHBhcmVudE5hbWVBcnIubGVuZ3RoIC0gMSkge1xyXG4gICAgcm91dGVzW2luZGV4XSA9IG5ld1ZhbHVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByb3V0ZXNbaW5kZXhdLmNoaWxkcmVuID0gdXBkYXRlUm91dGVEZWVwKFxyXG4gICAgICByb3V0ZXNbaW5kZXhdLmNoaWxkcmVuLFxyXG4gICAgICBwYXJlbnROYW1lQXJyLFxyXG4gICAgICBuZXdWYWx1ZSxcclxuICAgICAgcGFyZW50SW5kZXggKyAxLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb3V0ZXM7XHJcbn1cclxuIl19