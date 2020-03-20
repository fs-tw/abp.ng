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
        if (isInitAction && !this.initialized && getAbpRoutes().length) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnBsdWdpbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL2NvbmZpZy5wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxNQUFNLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFHVCxRQUFRLEVBQ1IsV0FBVyxHQUNaLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFFdEIsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFcEUsTUFBTSxLQUFPLDBCQUEwQixHQUFHLElBQUksY0FBYyxDQUFDLDRCQUE0QixDQUFDO0FBRTFGO0lBSUUsc0JBQzhDLE9BQWlCLEVBQ3JELE1BQWM7UUFEc0IsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUNyRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSmhCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBS3pCLENBQUM7Ozs7Ozs7SUFFSiw2QkFBTTs7Ozs7O0lBQU4sVUFBTyxLQUFVLEVBQUUsS0FBVSxFQUFFLElBQXNCOztZQUM3QyxPQUFPLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQzs7WUFDOUIsWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRS9ELElBQUksWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7O2dCQUN4RCxpQkFBaUIsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENB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QkFBVyxHQUFHLEVBQUssS0FBSyxFQUFFO1FBQzVCLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQTtJQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtcclxuICBhY3Rpb25NYXRjaGVyLFxyXG4gIEluaXRTdGF0ZSxcclxuICBOZ3hzTmV4dFBsdWdpbkZuLFxyXG4gIE5neHNQbHVnaW4sXHJcbiAgc2V0VmFsdWUsXHJcbiAgVXBkYXRlU3RhdGUsXHJcbn0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgY2xvbmUgZnJvbSAnanVzdC1jbG9uZSc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgZ2V0QWJwUm91dGVzLCBvcmdhbml6ZVJvdXRlcyB9IGZyb20gJy4uL3V0aWxzL3JvdXRlLXV0aWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBOR1hTX0NPTkZJR19QTFVHSU5fT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignTkdYU19DT05GSUdfUExVR0lOX09QVElPTlMnKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1BsdWdpbiBpbXBsZW1lbnRzIE5neHNQbHVnaW4ge1xyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KE5HWFNfQ09ORklHX1BMVUdJTl9PUFRJT05TKSBwcml2YXRlIG9wdGlvbnM6IEFCUC5Sb290LFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICApIHt9XHJcblxyXG4gIGhhbmRsZShzdGF0ZTogYW55LCBldmVudDogYW55LCBuZXh0OiBOZ3hzTmV4dFBsdWdpbkZuKSB7XHJcbiAgICBjb25zdCBtYXRjaGVzID0gYWN0aW9uTWF0Y2hlcihldmVudCk7XHJcbiAgICBjb25zdCBpc0luaXRBY3Rpb24gPSBtYXRjaGVzKEluaXRTdGF0ZSkgfHwgbWF0Y2hlcyhVcGRhdGVTdGF0ZSk7XHJcblxyXG4gICAgaWYgKGlzSW5pdEFjdGlvbiAmJiAhdGhpcy5pbml0aWFsaXplZCAmJiBnZXRBYnBSb3V0ZXMoKS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgdHJhbnNmb3JtZWRSb3V0ZXMgPSB0cmFuc2Zvcm1Sb3V0ZXModGhpcy5yb3V0ZXIuY29uZmlnKTtcclxuICAgICAgbGV0IHsgcm91dGVzIH0gPSB0cmFuc2Zvcm1lZFJvdXRlcztcclxuICAgICAgY29uc3QgeyB3cmFwcGVycyB9ID0gdHJhbnNmb3JtZWRSb3V0ZXM7XHJcblxyXG4gICAgICByb3V0ZXMgPSBvcmdhbml6ZVJvdXRlcyhyb3V0ZXMsIHdyYXBwZXJzKTtcclxuICAgICAgY29uc3QgZmxhdHRlZFJvdXRlcyA9IGZsYXRSb3V0ZXMoY2xvbmUocm91dGVzKSk7XHJcbiAgICAgIHN0YXRlID0gc2V0VmFsdWUoc3RhdGUsICdDb25maWdTdGF0ZScsIHtcclxuICAgICAgICAuLi4oc3RhdGUuQ29uZmlnU3RhdGUgJiYgeyAuLi5zdGF0ZS5Db25maWdTdGF0ZSB9KSxcclxuICAgICAgICAuLi50aGlzLm9wdGlvbnMsXHJcbiAgICAgICAgcm91dGVzLFxyXG4gICAgICAgIGZsYXR0ZWRSb3V0ZXMsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHQoc3RhdGUsIGV2ZW50KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybVJvdXRlcyhyb3V0ZXM6IFJvdXRlcyA9IFtdLCB3cmFwcGVyczogQUJQLkZ1bGxSb3V0ZVtdID0gW10pOiBhbnkge1xyXG4gIGNvbnN0IGFicFJvdXRlcyA9IFsuLi5nZXRBYnBSb3V0ZXMoKV07XHJcblxyXG4gIHdyYXBwZXJzID0gYWJwUm91dGVzLmZpbHRlcihhciA9PiBhci53cmFwcGVyKTtcclxuICBjb25zdCB0cmFuc2Zvcm1lZCA9IFtdIGFzIEFCUC5GdWxsUm91dGVbXTtcclxuICByb3V0ZXNcclxuICAgIC5maWx0ZXIocm91dGUgPT4gcm91dGUuY29tcG9uZW50IHx8IHJvdXRlLmxvYWRDaGlsZHJlbilcclxuICAgIC5mb3JFYWNoKHJvdXRlID0+IHtcclxuICAgICAgY29uc3QgYWJwUGFja2FnZSA9IGFicFJvdXRlcy5maW5kKFxyXG4gICAgICAgIGFicCA9PiBhYnAucGF0aC50b0xvd2VyQ2FzZSgpID09PSByb3V0ZS5wYXRoLnRvTG93ZXJDYXNlKCkgJiYgIWFicC53cmFwcGVyLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHRyYW5zZm9ybWVkO1xyXG5cclxuICAgICAgaWYgKGFicFBhY2thZ2UpIHtcclxuICAgICAgICB0cmFuc2Zvcm1lZC5wdXNoKGFicFBhY2thZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHJhbnNmb3JtZWQubGVuZ3RoID09PSBsZW5ndGggJiYgKHJvdXRlLmRhdGEgfHwge30pLnJvdXRlcykge1xyXG4gICAgICAgIHRyYW5zZm9ybWVkLnB1c2goe1xyXG4gICAgICAgICAgLi4ucm91dGUuZGF0YS5yb3V0ZXMsXHJcbiAgICAgICAgICBwYXRoOiByb3V0ZS5wYXRoLFxyXG4gICAgICAgICAgbmFtZTogc25xKCgpID0+IHJvdXRlLmRhdGEucm91dGVzLm5hbWUsIHJvdXRlLnBhdGgpLFxyXG4gICAgICAgICAgY2hpbGRyZW46IHJvdXRlLmRhdGEucm91dGVzLmNoaWxkcmVuIHx8IFtdLFxyXG4gICAgICAgIH0gYXMgQUJQLkZ1bGxSb3V0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICByZXR1cm4geyByb3V0ZXM6IHNldFVybHModHJhbnNmb3JtZWQpLCB3cmFwcGVycyB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRVcmxzKHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdLCBwYXJlbnRVcmw/OiBzdHJpbmcpOiBBQlAuRnVsbFJvdXRlW10ge1xyXG4gIGlmIChwYXJlbnRVcmwpIHtcclxuICAgIC8vIHJlY3Vyc2l2ZSBibG9ja1xyXG4gICAgcmV0dXJuIHJvdXRlcy5tYXAocm91dGUgPT4gKHtcclxuICAgICAgLi4ucm91dGUsXHJcbiAgICAgIHVybDogYCR7cGFyZW50VXJsfS8ke3JvdXRlLnBhdGh9YCxcclxuICAgICAgLi4uKHJvdXRlLmNoaWxkcmVuICYmXHJcbiAgICAgICAgcm91dGUuY2hpbGRyZW4ubGVuZ3RoICYmIHtcclxuICAgICAgICAgIGNoaWxkcmVuOiBzZXRVcmxzKHJvdXRlLmNoaWxkcmVuLCBgJHtwYXJlbnRVcmx9LyR7cm91dGUucGF0aH1gKSxcclxuICAgICAgICB9KSxcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb3V0ZXMubWFwKHJvdXRlID0+ICh7XHJcbiAgICAuLi5yb3V0ZSxcclxuICAgIHVybDogYC8ke3JvdXRlLnBhdGh9YCxcclxuICAgIC4uLihyb3V0ZS5jaGlsZHJlbiAmJlxyXG4gICAgICByb3V0ZS5jaGlsZHJlbi5sZW5ndGggJiYge1xyXG4gICAgICAgIGNoaWxkcmVuOiBzZXRVcmxzKHJvdXRlLmNoaWxkcmVuLCBgLyR7cm91dGUucGF0aH1gKSxcclxuICAgICAgfSksXHJcbiAgfSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmbGF0Um91dGVzKHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdKTogQUJQLkZ1bGxSb3V0ZVtdIHtcclxuICBjb25zdCBmbGF0ID0gKHI6IEFCUC5GdWxsUm91dGVbXSkgPT4ge1xyXG4gICAgcmV0dXJuIHIucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xyXG4gICAgICBsZXQgdmFsdWU6IEFCUC5GdWxsUm91dGVbXSA9IFt2YWxdO1xyXG4gICAgICBpZiAodmFsLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgdmFsLmNoaWxkcmVuID0gdmFsLmNoaWxkcmVuLm1hcChjaGlsZCA9PiAoeyAuLi5jaGlsZCwgcGFyZW50TmFtZTogdmFsLm5hbWUgfSkpO1xyXG4gICAgICAgIHZhbHVlID0gW3ZhbCwgLi4uZmxhdCh2YWwuY2hpbGRyZW4pXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIFsuLi5hY2MsIC4uLnZhbHVlXTtcclxuICAgIH0sIFtdKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gZmxhdChyb3V0ZXMpO1xyXG59XHJcbiJdfQ==