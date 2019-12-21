/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugins/config.plugin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { actionMatcher, InitState, setValue, UpdateState, } from '@ngxs/store';
import snq from 'snq';
import { organizeRoutes, getAbpRoutes } from '../utils/route-utils';
import clone from 'just-clone';
/** @type {?} */
export var NGXS_CONFIG_PLUGIN_OPTIONS = new InjectionToken('NGXS_CONFIG_PLUGIN_OPTIONS');
var ConfigPlugin = /** @class */ (function () {
    function ConfigPlugin(options, router) {
        this.options = options;
        this.router = router;
        this.initialized = false;
    }
    /**
     * @param {?} state
     * @param {?} event
     * @param {?} next
     * @return {?}
     */
    ConfigPlugin.prototype.handle = /**
     * @param {?} state
     * @param {?} event
     * @param {?} next
     * @return {?}
     */
    function (state, event, next) {
        /** @type {?} */
        var matches = actionMatcher(event);
        /** @type {?} */
        var isInitAction = matches(InitState) || matches(UpdateState);
        if (isInitAction && !this.initialized) {
            /** @type {?} */
            var transformedRoutes = transformRoutes(this.router.config);
            var routes = transformedRoutes.routes;
            var wrappers = transformedRoutes.wrappers;
            routes = organizeRoutes(routes, wrappers);
            /** @type {?} */
            var flattedRoutes = flatRoutes(clone(routes));
            state = setValue(state, 'ConfigState', tslib_1.__assign({}, (state.ConfigState && tslib_1.__assign({}, state.ConfigState)), this.options, { routes: routes,
                flattedRoutes: flattedRoutes }));
            this.initialized = true;
        }
        return next(state, event);
    };
    ConfigPlugin.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [NGXS_CONFIG_PLUGIN_OPTIONS,] }] },
        { type: Router }
    ]; };
    return ConfigPlugin;
}());
export { ConfigPlugin };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigPlugin.prototype.initialized;
    /**
     * @type {?}
     * @private
     */
    ConfigPlugin.prototype.options;
    /**
     * @type {?}
     * @private
     */
    ConfigPlugin.prototype.router;
}
/**
 * @param {?=} routes
 * @param {?=} wrappers
 * @return {?}
 */
function transformRoutes(routes, wrappers) {
    if (routes === void 0) { routes = []; }
    if (wrappers === void 0) { wrappers = []; }
    /** @type {?} */
    var abpRoutes = tslib_1.__spread(getAbpRoutes());
    wrappers = abpRoutes.filter((/**
     * @param {?} ar
     * @return {?}
     */
    function (ar) { return ar.wrapper; }));
    /** @type {?} */
    var transformed = (/** @type {?} */ ([]));
    routes
        .filter((/**
     * @param {?} route
     * @return {?}
     */
    function (route) { return route.component || route.loadChildren; }))
        .forEach((/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var abpPackage = abpRoutes.find((/**
         * @param {?} abp
         * @return {?}
         */
        function (abp) { return abp.path.toLowerCase() === route.path.toLowerCase() && !abp.wrapper; }));
        var length = transformed.length;
        if (abpPackage) {
            transformed.push(abpPackage);
        }
        if (transformed.length === length && (route.data || {}).routes) {
            transformed.push((/** @type {?} */ (tslib_1.__assign({}, route.data.routes, { path: route.path, name: snq((/**
                 * @return {?}
                 */
                function () { return route.data.routes.name; }), route.path), children: route.data.routes.children || [] }))));
        }
    }));
    return { routes: setUrls(transformed), wrappers: wrappers };
}
/**
 * @param {?} routes
 * @param {?=} parentUrl
 * @return {?}
 */
function setUrls(routes, parentUrl) {
    if (parentUrl) {
        // recursive block
        return routes.map((/**
         * @param {?} route
         * @return {?}
         */
        function (route) { return (tslib_1.__assign({}, route, { url: parentUrl + "/" + route.path }, (route.children &&
            route.children.length && {
            children: setUrls(route.children, parentUrl + "/" + route.path),
        }))); }));
    }
    return routes.map((/**
     * @param {?} route
     * @return {?}
     */
    function (route) { return (tslib_1.__assign({}, route, { url: "/" + route.path }, (route.children &&
        route.children.length && {
        children: setUrls(route.children, "/" + route.path),
    }))); }));
}
/**
 * @param {?} routes
 * @return {?}
 */
function flatRoutes(routes) {
    /** @type {?} */
    var flat = (/**
     * @param {?} r
     * @return {?}
     */
    function (r) {
        return r.reduce((/**
         * @param {?} acc
         * @param {?} val
         * @return {?}
         */
        function (acc, val) {
            /** @type {?} */
            var value = [val];
            if (val.children) {
                val.children = val.children.map((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return (tslib_1.__assign({}, child, { parentName: val.name })); }));
                value = tslib_1.__spread([val], flat(val.children));
            }
            return tslib_1.__spread(acc, value);
        }), []);
    });
    return flat(routes);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnBsdWdpbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL2NvbmZpZy5wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxNQUFNLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFHVCxRQUFRLEVBQ1IsV0FBVyxHQUNaLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUV0QixPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQzs7QUFFL0IsTUFBTSxLQUFPLDBCQUEwQixHQUFHLElBQUksY0FBYyxDQUFDLDRCQUE0QixDQUFDO0FBRTFGO0lBSUUsc0JBQzhDLE9BQWlCLEVBQ3JELE1BQWM7UUFEc0IsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUNyRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSmhCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBS3pCLENBQUM7Ozs7Ozs7SUFFSiw2QkFBTTs7Ozs7O0lBQU4sVUFBTyxLQUFVLEVBQUUsS0FBVSxFQUFFLElBQXNCOztZQUM3QyxPQUFPLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQzs7WUFDOUIsWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRS9ELElBQUksWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTs7Z0JBQy9CLGlCQUFpQixHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUN2RCxJQUFBLGlDQUFNO1lBQ0os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UUFDNUIsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFBO0lBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG4gIGFjdGlvbk1hdGNoZXIsXHJcbiAgSW5pdFN0YXRlLFxyXG4gIE5neHNOZXh0UGx1Z2luRm4sXHJcbiAgTmd4c1BsdWdpbixcclxuICBzZXRWYWx1ZSxcclxuICBVcGRhdGVTdGF0ZSxcclxufSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgb3JnYW5pemVSb3V0ZXMsIGdldEFicFJvdXRlcyB9IGZyb20gJy4uL3V0aWxzL3JvdXRlLXV0aWxzJztcclxuaW1wb3J0IGNsb25lIGZyb20gJ2p1c3QtY2xvbmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5HWFNfQ09ORklHX1BMVUdJTl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuKCdOR1hTX0NPTkZJR19QTFVHSU5fT1BUSU9OUycpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnUGx1Z2luIGltcGxlbWVudHMgTmd4c1BsdWdpbiB7XHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoTkdYU19DT05GSUdfUExVR0lOX09QVElPTlMpIHByaXZhdGUgb3B0aW9uczogQUJQLlJvb3QsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICkge31cclxuXHJcbiAgaGFuZGxlKHN0YXRlOiBhbnksIGV2ZW50OiBhbnksIG5leHQ6IE5neHNOZXh0UGx1Z2luRm4pIHtcclxuICAgIGNvbnN0IG1hdGNoZXMgPSBhY3Rpb25NYXRjaGVyKGV2ZW50KTtcclxuICAgIGNvbnN0IGlzSW5pdEFjdGlvbiA9IG1hdGNoZXMoSW5pdFN0YXRlKSB8fCBtYXRjaGVzKFVwZGF0ZVN0YXRlKTtcclxuXHJcbiAgICBpZiAoaXNJbml0QWN0aW9uICYmICF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIGNvbnN0IHRyYW5zZm9ybWVkUm91dGVzID0gdHJhbnNmb3JtUm91dGVzKHRoaXMucm91dGVyLmNvbmZpZyk7XHJcbiAgICAgIGxldCB7IHJvdXRlcyB9ID0gdHJhbnNmb3JtZWRSb3V0ZXM7XHJcbiAgICAgIGNvbnN0IHsgd3JhcHBlcnMgfSA9IHRyYW5zZm9ybWVkUm91dGVzO1xyXG5cclxuICAgICAgcm91dGVzID0gb3JnYW5pemVSb3V0ZXMocm91dGVzLCB3cmFwcGVycyk7XHJcbiAgICAgIGNvbnN0IGZsYXR0ZWRSb3V0ZXMgPSBmbGF0Um91dGVzKGNsb25lKHJvdXRlcykpO1xyXG4gICAgICBzdGF0ZSA9IHNldFZhbHVlKHN0YXRlLCAnQ29uZmlnU3RhdGUnLCB7XHJcbiAgICAgICAgLi4uKHN0YXRlLkNvbmZpZ1N0YXRlICYmIHsgLi4uc3RhdGUuQ29uZmlnU3RhdGUgfSksXHJcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLFxyXG4gICAgICAgIHJvdXRlcyxcclxuICAgICAgICBmbGF0dGVkUm91dGVzLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXh0KHN0YXRlLCBldmVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0cmFuc2Zvcm1Sb3V0ZXMocm91dGVzOiBSb3V0ZXMgPSBbXSwgd3JhcHBlcnM6IEFCUC5GdWxsUm91dGVbXSA9IFtdKTogYW55IHtcclxuICBjb25zdCBhYnBSb3V0ZXMgPSBbLi4uZ2V0QWJwUm91dGVzKCldO1xyXG5cclxuICB3cmFwcGVycyA9IGFicFJvdXRlcy5maWx0ZXIoYXIgPT4gYXIud3JhcHBlcik7XHJcbiAgY29uc3QgdHJhbnNmb3JtZWQgPSBbXSBhcyBBQlAuRnVsbFJvdXRlW107XHJcbiAgcm91dGVzXHJcbiAgICAuZmlsdGVyKHJvdXRlID0+IHJvdXRlLmNvbXBvbmVudCB8fCByb3V0ZS5sb2FkQ2hpbGRyZW4pXHJcbiAgICAuZm9yRWFjaChyb3V0ZSA9PiB7XHJcbiAgICAgIGNvbnN0IGFicFBhY2thZ2UgPSBhYnBSb3V0ZXMuZmluZChcclxuICAgICAgICBhYnAgPT4gYWJwLnBhdGgudG9Mb3dlckNhc2UoKSA9PT0gcm91dGUucGF0aC50b0xvd2VyQ2FzZSgpICYmICFhYnAud3JhcHBlcixcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSB0cmFuc2Zvcm1lZDtcclxuXHJcbiAgICAgIGlmIChhYnBQYWNrYWdlKSB7XHJcbiAgICAgICAgdHJhbnNmb3JtZWQucHVzaChhYnBQYWNrYWdlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRyYW5zZm9ybWVkLmxlbmd0aCA9PT0gbGVuZ3RoICYmIChyb3V0ZS5kYXRhIHx8IHt9KS5yb3V0ZXMpIHtcclxuICAgICAgICB0cmFuc2Zvcm1lZC5wdXNoKHtcclxuICAgICAgICAgIC4uLnJvdXRlLmRhdGEucm91dGVzLFxyXG4gICAgICAgICAgcGF0aDogcm91dGUucGF0aCxcclxuICAgICAgICAgIG5hbWU6IHNucSgoKSA9PiByb3V0ZS5kYXRhLnJvdXRlcy5uYW1lLCByb3V0ZS5wYXRoKSxcclxuICAgICAgICAgIGNoaWxkcmVuOiByb3V0ZS5kYXRhLnJvdXRlcy5jaGlsZHJlbiB8fCBbXSxcclxuICAgICAgICB9IGFzIEFCUC5GdWxsUm91dGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgcm91dGVzOiBzZXRVcmxzKHRyYW5zZm9ybWVkKSwgd3JhcHBlcnMgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VXJscyhyb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSwgcGFyZW50VXJsPzogc3RyaW5nKTogQUJQLkZ1bGxSb3V0ZVtdIHtcclxuICBpZiAocGFyZW50VXJsKSB7XHJcbiAgICAvLyByZWN1cnNpdmUgYmxvY2tcclxuICAgIHJldHVybiByb3V0ZXMubWFwKHJvdXRlID0+ICh7XHJcbiAgICAgIC4uLnJvdXRlLFxyXG4gICAgICB1cmw6IGAke3BhcmVudFVybH0vJHtyb3V0ZS5wYXRofWAsXHJcbiAgICAgIC4uLihyb3V0ZS5jaGlsZHJlbiAmJlxyXG4gICAgICAgIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCAmJiB7XHJcbiAgICAgICAgICBjaGlsZHJlbjogc2V0VXJscyhyb3V0ZS5jaGlsZHJlbiwgYCR7cGFyZW50VXJsfS8ke3JvdXRlLnBhdGh9YCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm91dGVzLm1hcChyb3V0ZSA9PiAoe1xyXG4gICAgLi4ucm91dGUsXHJcbiAgICB1cmw6IGAvJHtyb3V0ZS5wYXRofWAsXHJcbiAgICAuLi4ocm91dGUuY2hpbGRyZW4gJiZcclxuICAgICAgcm91dGUuY2hpbGRyZW4ubGVuZ3RoICYmIHtcclxuICAgICAgICBjaGlsZHJlbjogc2V0VXJscyhyb3V0ZS5jaGlsZHJlbiwgYC8ke3JvdXRlLnBhdGh9YCksXHJcbiAgICAgIH0pLFxyXG4gIH0pKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmxhdFJvdXRlcyhyb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSk6IEFCUC5GdWxsUm91dGVbXSB7XHJcbiAgY29uc3QgZmxhdCA9IChyOiBBQlAuRnVsbFJvdXRlW10pID0+IHtcclxuICAgIHJldHVybiByLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcclxuICAgICAgbGV0IHZhbHVlOiBBQlAuRnVsbFJvdXRlW10gPSBbdmFsXTtcclxuICAgICAgaWYgKHZhbC5jaGlsZHJlbikge1xyXG4gICAgICAgIHZhbC5jaGlsZHJlbiA9IHZhbC5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gKHsgLi4uY2hpbGQsIHBhcmVudE5hbWU6IHZhbC5uYW1lIH0pKTtcclxuICAgICAgICB2YWx1ZSA9IFt2YWwsIC4uLmZsYXQodmFsLmNoaWxkcmVuKV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBbLi4uYWNjLCAuLi52YWx1ZV07XHJcbiAgICB9LCBbXSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGZsYXQocm91dGVzKTtcclxufVxyXG4iXX0=