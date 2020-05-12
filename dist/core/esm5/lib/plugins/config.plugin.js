/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugins/config.plugin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { actionMatcher, InitState, setValue, UpdateState, } from '@ngxs/store';
import clone from 'just-clone';
import snq from 'snq';
import { getAbpRoutes, organizeRoutes } from '../utils/route-utils';
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
            var routes = transformedRoutes.routes, wrappers = transformedRoutes.wrappers;
            wrappers = reduceWrappers(wrappers);
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
/**
 * @param {?=} wrappers
 * @return {?}
 */
function reduceWrappers(wrappers) {
    if (wrappers === void 0) { wrappers = []; }
    /** @type {?} */
    var existingWrappers = new Set();
    return wrappers.filter((/**
     * @param {?} wrapper
     * @return {?}
     */
    function (wrapper) {
        if (existingWrappers.has(wrapper.name))
            return false;
        existingWrappers.add(wrapper.name);
        return true;
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnBsdWdpbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL2NvbmZpZy5wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxNQUFNLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFHVCxRQUFRLEVBQ1IsV0FBVyxHQUNaLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFFdEIsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFcEUsTUFBTSxLQUFPLDBCQUEwQixHQUFHLElBQUksY0FBYyxDQUFDLDRCQUE0QixDQUFDO0FBRTFGO0lBSUUsc0JBQzhDLE9BQWlCLEVBQ3JELE1BQWM7UUFEc0IsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUNyRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSmhCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBS3pCLENBQUM7Ozs7Ozs7SUFFSiw2QkFBTTs7Ozs7O0lBQU4sVUFBTyxLQUFVLEVBQUUsS0FBVSxFQUFFLElBQXNCOztZQUM3QyxPQUFPLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQzs7WUFDOUIsWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRS9ELElBQUksWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTs7Z0JBQy9CLGlCQUFpQixHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUN2RCxJQUFBLGlDQUFNLEVBQUUs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QUN0QztZQUVELHdCQUFXLEdBQUcsRUFBSyxLQUFLLEVBQUU7UUFDNUIsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFBO0lBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEIsQ0FBQzs7Ozs7QUFFRCxTQUFTLGNBQWMsQ0FBQyxRQUE4QjtJQUE5Qix5QkFBQSxFQUFBLGFBQThCOztRQUM5QyxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsRUFBRTtJQUVsQyxPQUFPLFFBQVEsQ0FBQyxNQUFNOzs7O0lBQUMsVUFBQSxPQUFPO1FBQzVCLElBQUksZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUVyRCxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7XHJcbiAgYWN0aW9uTWF0Y2hlcixcclxuICBJbml0U3RhdGUsXHJcbiAgTmd4c05leHRQbHVnaW5GbixcclxuICBOZ3hzUGx1Z2luLFxyXG4gIHNldFZhbHVlLFxyXG4gIFVwZGF0ZVN0YXRlLFxyXG59IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IGNsb25lIGZyb20gJ2p1c3QtY2xvbmUnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IEFCUCB9IGZyb20gJy4uL21vZGVscy9jb21tb24nO1xyXG5pbXBvcnQgeyBnZXRBYnBSb3V0ZXMsIG9yZ2FuaXplUm91dGVzIH0gZnJvbSAnLi4vdXRpbHMvcm91dGUtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5HWFNfQ09ORklHX1BMVUdJTl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuKCdOR1hTX0NPTkZJR19QTFVHSU5fT1BUSU9OUycpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnUGx1Z2luIGltcGxlbWVudHMgTmd4c1BsdWdpbiB7XHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoTkdYU19DT05GSUdfUExVR0lOX09QVElPTlMpIHByaXZhdGUgb3B0aW9uczogQUJQLlJvb3QsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICkge31cclxuXHJcbiAgaGFuZGxlKHN0YXRlOiBhbnksIGV2ZW50OiBhbnksIG5leHQ6IE5neHNOZXh0UGx1Z2luRm4pIHtcclxuICAgIGNvbnN0IG1hdGNoZXMgPSBhY3Rpb25NYXRjaGVyKGV2ZW50KTtcclxuICAgIGNvbnN0IGlzSW5pdEFjdGlvbiA9IG1hdGNoZXMoSW5pdFN0YXRlKSB8fCBtYXRjaGVzKFVwZGF0ZVN0YXRlKTtcclxuXHJcbiAgICBpZiAoaXNJbml0QWN0aW9uICYmICF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIGNvbnN0IHRyYW5zZm9ybWVkUm91dGVzID0gdHJhbnNmb3JtUm91dGVzKHRoaXMucm91dGVyLmNvbmZpZyk7XHJcbiAgICAgIGxldCB7IHJvdXRlcywgd3JhcHBlcnMgfSA9IHRyYW5zZm9ybWVkUm91dGVzO1xyXG4gICAgICB3cmFwcGVycyA9IHJlZHVjZVdyYXBwZXJzKHdyYXBwZXJzKTtcclxuXHJcbiAgICAgIHJvdXRlcyA9IG9yZ2FuaXplUm91dGVzKHJvdXRlcywgd3JhcHBlcnMpO1xyXG4gICAgICBjb25zdCBmbGF0dGVkUm91dGVzID0gZmxhdFJvdXRlcyhjbG9uZShyb3V0ZXMpKTtcclxuICAgICAgc3RhdGUgPSBzZXRWYWx1ZShzdGF0ZSwgJ0NvbmZpZ1N0YXRlJywge1xyXG4gICAgICAgIC4uLihzdGF0ZS5Db25maWdTdGF0ZSAmJiB7IC4uLnN0YXRlLkNvbmZpZ1N0YXRlIH0pLFxyXG4gICAgICAgIC4uLnRoaXMub3B0aW9ucyxcclxuICAgICAgICByb3V0ZXMsXHJcbiAgICAgICAgZmxhdHRlZFJvdXRlcyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV4dChzdGF0ZSwgZXZlbnQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdHJhbnNmb3JtUm91dGVzKHJvdXRlczogUm91dGVzID0gW10sIHdyYXBwZXJzOiBBQlAuRnVsbFJvdXRlW10gPSBbXSk6IGFueSB7XHJcbiAgY29uc3QgYWJwUm91dGVzID0gWy4uLmdldEFicFJvdXRlcygpXTtcclxuXHJcbiAgd3JhcHBlcnMgPSBhYnBSb3V0ZXMuZmlsdGVyKGFyID0+IGFyLndyYXBwZXIpO1xyXG4gIGNvbnN0IHRyYW5zZm9ybWVkID0gW10gYXMgQUJQLkZ1bGxSb3V0ZVtdO1xyXG4gIHJvdXRlc1xyXG4gICAgLmZpbHRlcihyb3V0ZSA9PiByb3V0ZS5jb21wb25lbnQgfHwgcm91dGUubG9hZENoaWxkcmVuKVxyXG4gICAgLmZvckVhY2gocm91dGUgPT4ge1xyXG4gICAgICBjb25zdCBhYnBQYWNrYWdlID0gYWJwUm91dGVzLmZpbmQoXHJcbiAgICAgICAgYWJwID0+IGFicC5wYXRoLnRvTG93ZXJDYXNlKCkgPT09IHJvdXRlLnBhdGgudG9Mb3dlckNhc2UoKSAmJiAhYWJwLndyYXBwZXIsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCB7IGxlbmd0aCB9ID0gdHJhbnNmb3JtZWQ7XHJcblxyXG4gICAgICBpZiAoYWJwUGFja2FnZSkge1xyXG4gICAgICAgIHRyYW5zZm9ybWVkLnB1c2goYWJwUGFja2FnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0cmFuc2Zvcm1lZC5sZW5ndGggPT09IGxlbmd0aCAmJiAocm91dGUuZGF0YSB8fCB7fSkucm91dGVzKSB7XHJcbiAgICAgICAgdHJhbnNmb3JtZWQucHVzaCh7XHJcbiAgICAgICAgICAuLi5yb3V0ZS5kYXRhLnJvdXRlcyxcclxuICAgICAgICAgIHBhdGg6IHJvdXRlLnBhdGgsXHJcbiAgICAgICAgICBuYW1lOiBzbnEoKCkgPT4gcm91dGUuZGF0YS5yb3V0ZXMubmFtZSwgcm91dGUucGF0aCksXHJcbiAgICAgICAgICBjaGlsZHJlbjogcm91dGUuZGF0YS5yb3V0ZXMuY2hpbGRyZW4gfHwgW10sXHJcbiAgICAgICAgfSBhcyBBQlAuRnVsbFJvdXRlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiB7IHJvdXRlczogc2V0VXJscyh0cmFuc2Zvcm1lZCksIHdyYXBwZXJzIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFVybHMocm91dGVzOiBBQlAuRnVsbFJvdXRlW10sIHBhcmVudFVybD86IHN0cmluZyk6IEFCUC5GdWxsUm91dGVbXSB7XHJcbiAgaWYgKHBhcmVudFVybCkge1xyXG4gICAgLy8gcmVjdXJzaXZlIGJsb2NrXHJcbiAgICByZXR1cm4gcm91dGVzLm1hcChyb3V0ZSA9PiAoe1xyXG4gICAgICAuLi5yb3V0ZSxcclxuICAgICAgdXJsOiBgJHtwYXJlbnRVcmx9LyR7cm91dGUucGF0aH1gLFxyXG4gICAgICAuLi4ocm91dGUuY2hpbGRyZW4gJiZcclxuICAgICAgICByb3V0ZS5jaGlsZHJlbi5sZW5ndGggJiYge1xyXG4gICAgICAgICAgY2hpbGRyZW46IHNldFVybHMocm91dGUuY2hpbGRyZW4sIGAke3BhcmVudFVybH0vJHtyb3V0ZS5wYXRofWApLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvdXRlcy5tYXAocm91dGUgPT4gKHtcclxuICAgIC4uLnJvdXRlLFxyXG4gICAgdXJsOiBgLyR7cm91dGUucGF0aH1gLFxyXG4gICAgLi4uKHJvdXRlLmNoaWxkcmVuICYmXHJcbiAgICAgIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCAmJiB7XHJcbiAgICAgICAgY2hpbGRyZW46IHNldFVybHMocm91dGUuY2hpbGRyZW4sIGAvJHtyb3V0ZS5wYXRofWApLFxyXG4gICAgICB9KSxcclxuICB9KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZsYXRSb3V0ZXMocm91dGVzOiBBQlAuRnVsbFJvdXRlW10pOiBBQlAuRnVsbFJvdXRlW10ge1xyXG4gIGNvbnN0IGZsYXQgPSAocjogQUJQLkZ1bGxSb3V0ZVtdKSA9PiB7XHJcbiAgICByZXR1cm4gci5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XHJcbiAgICAgIGxldCB2YWx1ZTogQUJQLkZ1bGxSb3V0ZVtdID0gW3ZhbF07XHJcbiAgICAgIGlmICh2YWwuY2hpbGRyZW4pIHtcclxuICAgICAgICB2YWwuY2hpbGRyZW4gPSB2YWwuY2hpbGRyZW4ubWFwKGNoaWxkID0+ICh7IC4uLmNoaWxkLCBwYXJlbnROYW1lOiB2YWwubmFtZSB9KSk7XHJcbiAgICAgICAgdmFsdWUgPSBbdmFsLCAuLi5mbGF0KHZhbC5jaGlsZHJlbildO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gWy4uLmFjYywgLi4udmFsdWVdO1xyXG4gICAgfSwgW10pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBmbGF0KHJvdXRlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZHVjZVdyYXBwZXJzKHdyYXBwZXJzOiBBQlAuRnVsbFJvdXRlW10gPSBbXSkge1xyXG4gIGNvbnN0IGV4aXN0aW5nV3JhcHBlcnMgPSBuZXcgU2V0KCk7XHJcblxyXG4gIHJldHVybiB3cmFwcGVycy5maWx0ZXIod3JhcHBlciA9PiB7XHJcbiAgICBpZiAoZXhpc3RpbmdXcmFwcGVycy5oYXMod3JhcHBlci5uYW1lKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGV4aXN0aW5nV3JhcHBlcnMuYWRkKHdyYXBwZXIubmFtZSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9KTtcclxufVxyXG4iXX0=