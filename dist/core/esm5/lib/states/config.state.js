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
            if (keyword) {
                /** @type {?} */
                var keys = snq((/**
                 * @return {?}
                 */
                function () { return Object.keys(state.setting.values).filter((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return key.indexOf(keyword) > -1; })); }), []);
                if (keys.length) {
                    return keys.reduce((/**
                     * @param {?} acc
                     * @param {?} key
                     * @return {?}
                     */
                    function (acc, key) {
                        var _a;
                        return (tslib_1.__assign({}, acc, (_a = {}, _a[key] = state.setting.values[key], _a)));
                    }), {});
                }
            }
            return snq((/**
             * @return {?}
             */
            function () { return state.setting.values; }), {});
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
        /** @type {?} */
        var defaultValue;
        if (typeof key !== 'string') {
            defaultValue = key.defaultValue;
            key = key.key;
        }
        if (!key)
            key = '';
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
            var defaultResourceName = state.environment.localization.defaultResourceName;
            if (keys[0] === '') {
                if (!defaultResourceName) {
                    throw new Error("Please check your environment. May you forget set defaultResourceName?\n              Here is the example:\n               { production: false,\n                 localization: {\n                   defaultResourceName: 'MyProjectName'\n                  }\n               }");
                }
                keys[0] = snq((/**
                 * @return {?}
                 */
                function () { return defaultResourceName; }));
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
            if (parent_1.url.replace('/', '')) {
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
    var ConfigState_1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0YXRlcy9jb25maWcuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUd6RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQXFMN0MscUJBQ1UsdUJBQXdELEVBQ3hELEtBQVk7UUFEWiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQWlDO1FBQ3hELFVBQUssR0FBTCxLQUFLLENBQU87SUFDbkIsQ0FBQztvQkFsTE8sV0FBVzs7Ozs7SUFFZixrQkFBTTs7OztJQUFiLFVBQWMsS0FBbUI7UUFDL0IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUdNLDhCQUFrQjs7OztJQUF6QixVQUEwQixLQUFtQjtRQUMzQyxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxJQUFJLENBQUMsbUJBQUEsRUFBRSxFQUFzQixDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7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QUFLLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FDN0IsS0FBSyxDQUFDLFFBQVEsRUFDZCxJQUFJLEVBQ0osUUFBUSxFQUNSLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQ2hDLENBQUM7U0FDSDtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxFQUFDLENBQUM7SUFFSCxJQUFJLFNBQVMsRUFBRTtRQUNiLGtCQUFrQjtRQUNsQixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBRUQsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsQ0FBQzs7Ozs7Ozs7QUFFRCxTQUFTLGVBQWUsQ0FDdEIsTUFBdUIsRUFDdkIsYUFBdUIsRUFDdkIsUUFBdUIsRUFDdkIsV0FBZTtJQUFmLDRCQUFBLEVBQUEsZUFBZTs7UUFFVCxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVM7Ozs7SUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUF6QyxDQUF5QyxFQUFDO0lBRWxGLElBQUksV0FBVyxLQUFLLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzVDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUM7S0FDMUI7U0FBTTtRQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUN0QixhQUFhLEVBQ2IsUUFBUSxFQUNSLFdBQVcsR0FBRyxDQUFDLENBQ2hCLENBQUM7S0FDSDtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIGNyZWF0ZVNlbGVjdG9yLCBTZWxlY3RvciwgU3RhdGUsIFN0YXRlQ29udGV4dCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IEdldEFwcENvbmZpZ3VyYXRpb24sIFBhdGNoUm91dGVCeU5hbWUsIEFkZFJvdXRlIH0gZnJvbSAnLi4vYWN0aW9ucy9jb25maWcuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFNldExhbmd1YWdlIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9uLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZyc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcHBsaWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBvcmdhbml6ZVJvdXRlcyB9IGZyb20gJy4uL3V0aWxzL3JvdXRlLXV0aWxzJztcclxuaW1wb3J0IHsgU2Vzc2lvblN0YXRlIH0gZnJvbSAnLi9zZXNzaW9uLnN0YXRlJztcclxuXHJcbkBTdGF0ZTxDb25maWcuU3RhdGU+KHtcclxuICBuYW1lOiAnQ29uZmlnU3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7fSBhcyBDb25maWcuU3RhdGUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTdGF0ZSB7XHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0QWxsKHN0YXRlOiBDb25maWcuU3RhdGUpIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldEFwcGxpY2F0aW9uSW5mbyhzdGF0ZTogQ29uZmlnLlN0YXRlKTogQ29uZmlnLkFwcGxpY2F0aW9uIHtcclxuICAgIHJldHVybiBzdGF0ZS5lbnZpcm9ubWVudC5hcHBsaWNhdGlvbiB8fCAoe30gYXMgQ29uZmlnLkFwcGxpY2F0aW9uKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRPbmUoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHN0YXRlW2tleV07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0RGVlcChrZXlzOiBzdHJpbmdbXSB8IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGVvZiBrZXlzID09PSAnc3RyaW5nJykge1xyXG4gICAgICBrZXlzID0ga2V5cy5zcGxpdCgnLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBhcmd1bWVudCBtdXN0IGJlIGEgZG90IHN0cmluZyBvciBhbiBzdHJpbmcgYXJyYXkuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gKGtleXMgYXMgc3RyaW5nW10pLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcclxuICAgICAgICBpZiAoYWNjKSB7XHJcbiAgICAgICAgICByZXR1cm4gYWNjW3ZhbF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9LCBzdGF0ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0Um91dGUocGF0aD86IHN0cmluZywgbmFtZT86IHN0cmluZywgdXJsPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZmxhdHRlZFJvdXRlcyB9ID0gc3RhdGU7XHJcbiAgICAgIHJldHVybiAoZmxhdHRlZFJvdXRlcyBhcyBBQlAuRnVsbFJvdXRlW10pLmZpbmQocm91dGUgPT4ge1xyXG4gICAgICAgIGlmIChwYXRoICYmIHJvdXRlLnBhdGggPT09IHBhdGgpIHtcclxuICAgICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgJiYgcm91dGUubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodXJsICYmIHJvdXRlLnVybCA9PT0gdXJsKSB7XHJcbiAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRBcGlVcmwoa2V5Pzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKTogc3RyaW5nID0+IHtcclxuICAgICAgcmV0dXJuIHN0YXRlLmVudmlyb25tZW50LmFwaXNba2V5IHx8ICdkZWZhdWx0J10udXJsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFNldHRpbmcoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHNucSgoKSA9PiBzdGF0ZS5zZXR0aW5nLnZhbHVlc1trZXldKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFNldHRpbmdzKGtleXdvcmQ/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgaWYgKGtleXdvcmQpIHtcclxuICAgICAgICBjb25zdCBrZXlzID0gc25xKFxyXG4gICAgICAgICAgKCkgPT4gT2JqZWN0LmtleXMoc3RhdGUuc2V0dGluZy52YWx1ZXMpLmZpbHRlcihrZXkgPT4ga2V5LmluZGV4T2Yoa2V5d29yZCkgPiAtMSksXHJcbiAgICAgICAgICBbXSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiBrZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+ICh7IC4uLmFjYywgW2tleV06IHN0YXRlLnNldHRpbmcudmFsdWVzW2tleV0gfSksIHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBzbnEoKCkgPT4gc3RhdGUuc2V0dGluZy52YWx1ZXMsIHt9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEdyYW50ZWRQb2xpY3koa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpOiBib29sZWFuID0+IHtcclxuICAgICAgaWYgKCFrZXkpIHJldHVybiB0cnVlO1xyXG4gICAgICBjb25zdCBnZXRQb2xpY3kgPSBrID0+IHNucSgoKSA9PiBzdGF0ZS5hdXRoLmdyYW50ZWRQb2xpY2llc1trXSwgZmFsc2UpO1xyXG5cclxuICAgICAgY29uc3Qgb3JSZWdleHAgPSAvXFx8XFx8L2c7XHJcbiAgICAgIGNvbnN0IGFuZFJlZ2V4cCA9IC8mJi9nO1xyXG5cclxuICAgICAgaWYgKG9yUmVnZXhwLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJ3x8JykuZmlsdGVyKGsgPT4gISFrKTtcclxuXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoICE9PSAyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5c1swXS50cmltKCkpIHx8IGdldFBvbGljeShrZXlzWzFdLnRyaW0oKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYW5kUmVnZXhwLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJyYmJykuZmlsdGVyKGsgPT4gISFrKTtcclxuXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoICE9PSAyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5c1swXS50cmltKCkpICYmIGdldFBvbGljeShrZXlzWzFdLnRyaW0oKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRMb2NhbGl6YXRpb24oXHJcbiAgICBrZXk6IHN0cmluZyB8IENvbmZpZy5Mb2NhbGl6YXRpb25XaXRoRGVmYXVsdCxcclxuICAgIC4uLmludGVycG9sYXRlUGFyYW1zOiBzdHJpbmdbXVxyXG4gICkge1xyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBkZWZhdWx0VmFsdWUgPSBrZXkuZGVmYXVsdFZhbHVlO1xyXG4gICAgICBrZXkgPSBrZXkua2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgha2V5KSBrZXkgPSAnJztcclxuXHJcbiAgICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KCc6OicpIGFzIHN0cmluZ1tdO1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICBpZiAoIXN0YXRlLmxvY2FsaXphdGlvbikgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCBrZXk7XHJcblxyXG4gICAgICBjb25zdCB7IGRlZmF1bHRSZXNvdXJjZU5hbWUgfSA9IHN0YXRlLmVudmlyb25tZW50LmxvY2FsaXphdGlvbjtcclxuICAgICAgaWYgKGtleXNbMF0gPT09ICcnKSB7XHJcbiAgICAgICAgaWYgKCFkZWZhdWx0UmVzb3VyY2VOYW1lKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgIGBQbGVhc2UgY2hlY2sgeW91ciBlbnZpcm9ubWVudC4gTWF5IHlvdSBmb3JnZXQgc2V0IGRlZmF1bHRSZXNvdXJjZU5hbWU/XHJcbiAgICAgICAgICAgICAgSGVyZSBpcyB0aGUgZXhhbXBsZTpcclxuICAgICAgICAgICAgICAgeyBwcm9kdWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICBsb2NhbGl6YXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgIGRlZmF1bHRSZXNvdXJjZU5hbWU6ICdNeVByb2plY3ROYW1lJ1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1gLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGtleXNbMF0gPSBzbnEoKCkgPT4gZGVmYXVsdFJlc291cmNlTmFtZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBsb2NhbGl6YXRpb24gPSAoa2V5cyBhcyBhbnkpLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcclxuICAgICAgICBpZiAoYWNjKSB7XHJcbiAgICAgICAgICByZXR1cm4gYWNjW3ZhbF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9LCBzdGF0ZS5sb2NhbGl6YXRpb24udmFsdWVzKTtcclxuXHJcbiAgICAgIGludGVycG9sYXRlUGFyYW1zID0gaW50ZXJwb2xhdGVQYXJhbXMuZmlsdGVyKHBhcmFtcyA9PiBwYXJhbXMgIT0gbnVsbCk7XHJcbiAgICAgIGlmIChsb2NhbGl6YXRpb24gJiYgaW50ZXJwb2xhdGVQYXJhbXMgJiYgaW50ZXJwb2xhdGVQYXJhbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgaW50ZXJwb2xhdGVQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XHJcbiAgICAgICAgICBsb2NhbGl6YXRpb24gPSBsb2NhbGl6YXRpb24ucmVwbGFjZSgvW1xcJ1xcXCJdP1xce1tcXGRdK1xcfVtcXCdcXFwiXT8vLCBwYXJhbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgbG9jYWxpemF0aW9uICE9PSAnc3RyaW5nJykgbG9jYWxpemF0aW9uID0gJyc7XHJcbiAgICAgIHJldHVybiBsb2NhbGl6YXRpb24gfHwgZGVmYXVsdFZhbHVlIHx8IGtleTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhcHBDb25maWd1cmF0aW9uU2VydmljZTogQXBwbGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICkge31cclxuXHJcbiAgQEFjdGlvbihHZXRBcHBDb25maWd1cmF0aW9uKVxyXG4gIGFkZERhdGEoeyBwYXRjaFN0YXRlLCBkaXNwYXRjaCB9OiBTdGF0ZUNvbnRleHQ8Q29uZmlnLlN0YXRlPikge1xyXG4gICAgcmV0dXJuIHRoaXMuYXBwQ29uZmlndXJhdGlvblNlcnZpY2UuZ2V0Q29uZmlndXJhdGlvbigpLnBpcGUoXHJcbiAgICAgIHRhcChjb25maWd1cmF0aW9uID0+XHJcbiAgICAgICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgICAgICAuLi5jb25maWd1cmF0aW9uLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgICBzd2l0Y2hNYXAoY29uZmlndXJhdGlvbiA9PiB7XHJcbiAgICAgICAgbGV0IGRlZmF1bHRMYW5nOiBzdHJpbmcgPSBjb25maWd1cmF0aW9uLnNldHRpbmcudmFsdWVzWydBYnAuTG9jYWxpemF0aW9uLkRlZmF1bHRMYW5ndWFnZSddO1xyXG5cclxuICAgICAgICBpZiAoZGVmYXVsdExhbmcuaW5jbHVkZXMoJzsnKSkge1xyXG4gICAgICAgICAgZGVmYXVsdExhbmcgPSBkZWZhdWx0TGFuZy5zcGxpdCgnOycpWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlLmdldExhbmd1YWdlKVxyXG4gICAgICAgICAgPyBvZihudWxsKVxyXG4gICAgICAgICAgOiBkaXNwYXRjaChuZXcgU2V0TGFuZ3VhZ2UoZGVmYXVsdExhbmcpKTtcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihQYXRjaFJvdXRlQnlOYW1lKVxyXG4gIHBhdGNoUm91dGUoXHJcbiAgICB7IHBhdGNoU3RhdGUsIGdldFN0YXRlIH06IFN0YXRlQ29udGV4dDxDb25maWcuU3RhdGU+LFxyXG4gICAgeyBuYW1lLCBuZXdWYWx1ZSB9OiBQYXRjaFJvdXRlQnlOYW1lLFxyXG4gICkge1xyXG4gICAgbGV0IHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdID0gZ2V0U3RhdGUoKS5yb3V0ZXM7XHJcblxyXG4gICAgcm91dGVzID0gcGF0Y2hSb3V0ZURlZXAocm91dGVzLCBuYW1lLCBuZXdWYWx1ZSk7XHJcblxyXG4gICAgY29uc3QgZmxhdHRlZFJvdXRlcyA9IGdldFN0YXRlKCkuZmxhdHRlZFJvdXRlcztcclxuICAgIGNvbnN0IGluZGV4ID0gZmxhdHRlZFJvdXRlcy5maW5kSW5kZXgocm91dGUgPT4gcm91dGUubmFtZSA9PT0gbmFtZSk7XHJcblxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgZmxhdHRlZFJvdXRlc1tpbmRleF0gPSB7IC4uLmZsYXR0ZWRSb3V0ZXNbaW5kZXhdLCAuLi5uZXdWYWx1ZSB9IGFzIEFCUC5GdWxsUm91dGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhdGNoU3RhdGUoe1xyXG4gICAgICByb3V0ZXMsXHJcbiAgICAgIGZsYXR0ZWRSb3V0ZXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oQWRkUm91dGUpXHJcbiAgYWRkUm91dGUoeyBwYXRjaFN0YXRlLCBnZXRTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8Q29uZmlnLlN0YXRlPiwgeyBwYXlsb2FkIH06IEFkZFJvdXRlKSB7XHJcbiAgICBsZXQgcm91dGVzOiBBQlAuRnVsbFJvdXRlW10gPSBnZXRTdGF0ZSgpLnJvdXRlcztcclxuICAgIGNvbnN0IGZsYXR0ZWRSb3V0ZXMgPSBnZXRTdGF0ZSgpLmZsYXR0ZWRSb3V0ZXM7XHJcbiAgICBjb25zdCByb3V0ZTogQUJQLkZ1bGxSb3V0ZSA9IHsgLi4ucGF5bG9hZCB9O1xyXG5cclxuICAgIGlmIChyb3V0ZS5wYXJlbnROYW1lKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZmxhdHRlZFJvdXRlcy5maW5kSW5kZXgociA9PiByLm5hbWUgPT09IHJvdXRlLnBhcmVudE5hbWUpO1xyXG5cclxuICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgcGFyZW50ID0gZmxhdHRlZFJvdXRlc1tpbmRleF07XHJcbiAgICAgIGlmIChwYXJlbnQudXJsLnJlcGxhY2UoJy8nLCAnJykpIHtcclxuICAgICAgICByb3V0ZS51cmwgPSBgJHtwYXJlbnQudXJsfS8ke3JvdXRlLnBhdGh9YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByb3V0ZS51cmwgPSBgLyR7cm91dGUucGF0aH1gO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByb3V0ZS5vcmRlciA9IHJvdXRlLm9yZGVyIHx8IHJvdXRlLm9yZGVyID09PSAwID8gcm91dGUub3JkZXIgOiBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICBwYXJlbnQuY2hpbGRyZW4gPSBbLi4uKHBhcmVudC5jaGlsZHJlbiB8fCBbXSksIHJvdXRlXS5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XHJcblxyXG4gICAgICBmbGF0dGVkUm91dGVzW2luZGV4XSA9IHBhcmVudDtcclxuICAgICAgZmxhdHRlZFJvdXRlcy5wdXNoKHJvdXRlKTtcclxuXHJcbiAgICAgIGxldCBwYXJlbnROYW1lID0gcGFyZW50Lm5hbWU7XHJcbiAgICAgIGNvbnN0IHBhcmVudE5hbWVBcnIgPSBbcGFyZW50TmFtZV07XHJcblxyXG4gICAgICB3aGlsZSAocGFyZW50TmFtZSkge1xyXG4gICAgICAgIHBhcmVudE5hbWUgPSBzbnEoKCkgPT4gZmxhdHRlZFJvdXRlcy5maW5kKHIgPT4gci5uYW1lID09PSBwYXJlbnROYW1lKS5wYXJlbnROYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHBhcmVudE5hbWUpIHtcclxuICAgICAgICAgIHBhcmVudE5hbWVBcnIudW5zaGlmdChwYXJlbnROYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvdXRlcyA9IHVwZGF0ZVJvdXRlRGVlcChyb3V0ZXMsIHBhcmVudE5hbWVBcnIsIHBhcmVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZS51cmwgPSBgLyR7cm91dGUucGF0aH1gO1xyXG5cclxuICAgICAgaWYgKHJvdXRlLm9yZGVyIHx8IHJvdXRlLm9yZGVyID09PSAwKSB7XHJcbiAgICAgICAgcm91dGVzID0gWy4uLnJvdXRlcywgcm91dGVdLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByb3V0ZS5vcmRlciA9IHJvdXRlcy5sZW5ndGg7XHJcbiAgICAgICAgcm91dGVzID0gWy4uLnJvdXRlcywgcm91dGVdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmbGF0dGVkUm91dGVzLnB1c2gocm91dGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRjaFN0YXRlKHtcclxuICAgICAgcm91dGVzLFxyXG4gICAgICBmbGF0dGVkUm91dGVzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaFJvdXRlRGVlcChcclxuICByb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSxcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgbmV3VmFsdWU6IFBhcnRpYWw8QUJQLkZ1bGxSb3V0ZT4sXHJcbiAgcGFyZW50VXJsOiBzdHJpbmcgPSAnJyxcclxuKTogQUJQLkZ1bGxSb3V0ZVtdIHtcclxuICByb3V0ZXMgPSByb3V0ZXMubWFwKHJvdXRlID0+IHtcclxuICAgIGlmIChyb3V0ZS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgIG5ld1ZhbHVlLnVybCA9IGAke3BhcmVudFVybH0vJHsoIW5ld1ZhbHVlLnBhdGggJiYgbmV3VmFsdWUucGF0aCA9PT0gJydcclxuICAgICAgICA/IHJvdXRlLnBhdGhcclxuICAgICAgICA6IG5ld1ZhbHVlLnBhdGgpIHx8ICcnfWA7XHJcblxyXG4gICAgICBpZiAobmV3VmFsdWUuY2hpbGRyZW4gJiYgbmV3VmFsdWUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSBuZXdWYWx1ZS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gKHtcclxuICAgICAgICAgIC4uLmNoaWxkLFxyXG4gICAgICAgICAgdXJsOiBgJHtuZXdWYWx1ZS51cmx9LyR7Y2hpbGQucGF0aH1gLnJlcGxhY2UoJy8vJywgJy8nKSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7IC4uLnJvdXRlLCAuLi5uZXdWYWx1ZSB9O1xyXG4gICAgfSBlbHNlIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgcm91dGUuY2hpbGRyZW4gPSBwYXRjaFJvdXRlRGVlcChcclxuICAgICAgICByb3V0ZS5jaGlsZHJlbixcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIG5ld1ZhbHVlLFxyXG4gICAgICAgIChwYXJlbnRVcmwgfHwgJy8nKSArIHJvdXRlLnBhdGgsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJvdXRlO1xyXG4gIH0pO1xyXG5cclxuICBpZiAocGFyZW50VXJsKSB7XHJcbiAgICAvLyByZWN1cnNpdmUgYmxvY2tcclxuICAgIHJldHVybiByb3V0ZXM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb3JnYW5pemVSb3V0ZXMocm91dGVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUm91dGVEZWVwKFxyXG4gIHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdLFxyXG4gIHBhcmVudE5hbWVBcnI6IHN0cmluZ1tdLFxyXG4gIG5ld1ZhbHVlOiBBQlAuRnVsbFJvdXRlLFxyXG4gIHBhcmVudEluZGV4ID0gMCxcclxuKSB7XHJcbiAgY29uc3QgaW5kZXggPSByb3V0ZXMuZmluZEluZGV4KHJvdXRlID0+IHJvdXRlLm5hbWUgPT09IHBhcmVudE5hbWVBcnJbcGFyZW50SW5kZXhdKTtcclxuXHJcbiAgaWYgKHBhcmVudEluZGV4ID09PSBwYXJlbnROYW1lQXJyLmxlbmd0aCAtIDEpIHtcclxuICAgIHJvdXRlc1tpbmRleF0gPSBuZXdWYWx1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcm91dGVzW2luZGV4XS5jaGlsZHJlbiA9IHVwZGF0ZVJvdXRlRGVlcChcclxuICAgICAgcm91dGVzW2luZGV4XS5jaGlsZHJlbixcclxuICAgICAgcGFyZW50TmFtZUFycixcclxuICAgICAgbmV3VmFsdWUsXHJcbiAgICAgIHBhcmVudEluZGV4ICsgMSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm91dGVzO1xyXG59XHJcbiJdfQ==