/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { actionMatcher, InitState, setValue, UpdateState } from '@ngxs/store';
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
    // TODO: remove in v1
    /** @type {?} */
    var oldAbpRoutes = routes
        .filter((/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return snq((/**
         * @return {?}
         */
        function () { return route.data.routes.routes.find((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return r.path === route.path; })); }), false);
    }))
        .reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    function (acc, val) { return tslib_1.__spread(acc, val.data.routes.routes); }), []);
    // tslint:disable-next-line: deprecation
    /** @type {?} */
    var abpRoutes = tslib_1.__spread(getAbpRoutes(), oldAbpRoutes);
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
        // this if block using for only recursive call
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
                value = tslib_1.__spread([val], flat(val.children));
            }
            return tslib_1.__spread(acc, value);
        }), []);
    });
    return flat(routes);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnBsdWdpbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL2NvbmZpZy5wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFnQyxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVHLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUV0QixPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQzs7QUFFL0IsTUFBTSxLQUFPLDBCQUEwQixHQUFHLElBQUksY0FBYyxDQUFDLDRCQUE0QixDQUFDO0FBRTFGO0lBSUUsc0JBQXdELE9BQWlCLEVBQVUsTUFBYztRQUF6QyxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZ6RixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUV3RSxDQUFDOzs7Ozs7O0lBRXJHLDZCQUFNOzs7Ozs7SUFBTixVQUFPLEtBQVUsRUFBRSxLQUFVLEVBQUUsSUFBc0I7O1lBQzdDLE9BQU8sR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDOztZQUM5QixZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFL0QsSUFBSSxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFOztnQkFDL0IsaUJBQWlCLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3ZELElBQUEsaUNBQU07WUFDSixJ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RyxVQUFDLENBQWtCO1FBQzlCLE9BQU8sQ0FBQyxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRzs7Z0JBQ25CLEtBQUssR0FBb0IsQ0FBQyxHQUFHLENBQUM7WUFDbEMsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNoQixLQUFLLHFCQUFJLEdBQUcsR0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDdEM7WUFFRCx3QkFBVyxHQUFHLEVBQUssS0FBSyxFQUFFO1FBQzVCLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQTtJQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgYWN0aW9uTWF0Y2hlciwgSW5pdFN0YXRlLCBOZ3hzTmV4dFBsdWdpbkZuLCBOZ3hzUGx1Z2luLCBzZXRWYWx1ZSwgVXBkYXRlU3RhdGUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgb3JnYW5pemVSb3V0ZXMsIGdldEFicFJvdXRlcyB9IGZyb20gJy4uL3V0aWxzL3JvdXRlLXV0aWxzJztcclxuaW1wb3J0IGNsb25lIGZyb20gJ2p1c3QtY2xvbmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5HWFNfQ09ORklHX1BMVUdJTl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuKCdOR1hTX0NPTkZJR19QTFVHSU5fT1BUSU9OUycpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnUGx1Z2luIGltcGxlbWVudHMgTmd4c1BsdWdpbiB7XHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE5HWFNfQ09ORklHX1BMVUdJTl9PUFRJT05TKSBwcml2YXRlIG9wdGlvbnM6IEFCUC5Sb290LCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICBoYW5kbGUoc3RhdGU6IGFueSwgZXZlbnQ6IGFueSwgbmV4dDogTmd4c05leHRQbHVnaW5Gbikge1xyXG4gICAgY29uc3QgbWF0Y2hlcyA9IGFjdGlvbk1hdGNoZXIoZXZlbnQpO1xyXG4gICAgY29uc3QgaXNJbml0QWN0aW9uID0gbWF0Y2hlcyhJbml0U3RhdGUpIHx8IG1hdGNoZXMoVXBkYXRlU3RhdGUpO1xyXG5cclxuICAgIGlmIChpc0luaXRBY3Rpb24gJiYgIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgY29uc3QgdHJhbnNmb3JtZWRSb3V0ZXMgPSB0cmFuc2Zvcm1Sb3V0ZXModGhpcy5yb3V0ZXIuY29uZmlnKTtcclxuICAgICAgbGV0IHsgcm91dGVzIH0gPSB0cmFuc2Zvcm1lZFJvdXRlcztcclxuICAgICAgY29uc3QgeyB3cmFwcGVycyB9ID0gdHJhbnNmb3JtZWRSb3V0ZXM7XHJcblxyXG4gICAgICByb3V0ZXMgPSBvcmdhbml6ZVJvdXRlcyhyb3V0ZXMsIHdyYXBwZXJzKTtcclxuICAgICAgY29uc3QgZmxhdHRlZFJvdXRlcyA9IGZsYXRSb3V0ZXMoY2xvbmUocm91dGVzKSk7XHJcbiAgICAgIHN0YXRlID0gc2V0VmFsdWUoc3RhdGUsICdDb25maWdTdGF0ZScsIHtcclxuICAgICAgICAuLi4oc3RhdGUuQ29uZmlnU3RhdGUgJiYgeyAuLi5zdGF0ZS5Db25maWdTdGF0ZSB9KSxcclxuICAgICAgICAuLi50aGlzLm9wdGlvbnMsXHJcbiAgICAgICAgcm91dGVzLFxyXG4gICAgICAgIGZsYXR0ZWRSb3V0ZXMsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHQoc3RhdGUsIGV2ZW50KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybVJvdXRlcyhyb3V0ZXM6IFJvdXRlcyA9IFtdLCB3cmFwcGVyczogQUJQLkZ1bGxSb3V0ZVtdID0gW10pOiBhbnkge1xyXG4gIC8vIFRPRE86IHJlbW92ZSBpbiB2MVxyXG4gIGNvbnN0IG9sZEFicFJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdID0gcm91dGVzXHJcbiAgICAuZmlsdGVyKHJvdXRlID0+IHtcclxuICAgICAgcmV0dXJuIHNucSgoKSA9PiByb3V0ZS5kYXRhLnJvdXRlcy5yb3V0ZXMuZmluZChyID0+IHIucGF0aCA9PT0gcm91dGUucGF0aCksIGZhbHNlKTtcclxuICAgIH0pXHJcbiAgICAucmVkdWNlKChhY2MsIHZhbCkgPT4gWy4uLmFjYywgLi4udmFsLmRhdGEucm91dGVzLnJvdXRlc10sIFtdKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXHJcbiAgY29uc3QgYWJwUm91dGVzID0gWy4uLmdldEFicFJvdXRlcygpLCAuLi5vbGRBYnBSb3V0ZXNdO1xyXG5cclxuICB3cmFwcGVycyA9IGFicFJvdXRlcy5maWx0ZXIoYXIgPT4gYXIud3JhcHBlcik7XHJcbiAgY29uc3QgdHJhbnNmb3JtZWQgPSBbXSBhcyBBQlAuRnVsbFJvdXRlW107XHJcbiAgcm91dGVzXHJcbiAgICAuZmlsdGVyKHJvdXRlID0+IHJvdXRlLmNvbXBvbmVudCB8fCByb3V0ZS5sb2FkQ2hpbGRyZW4pXHJcbiAgICAuZm9yRWFjaChyb3V0ZSA9PiB7XHJcbiAgICAgIGNvbnN0IGFicFBhY2thZ2UgPSBhYnBSb3V0ZXMuZmluZChhYnAgPT4gYWJwLnBhdGgudG9Mb3dlckNhc2UoKSA9PT0gcm91dGUucGF0aC50b0xvd2VyQ2FzZSgpICYmICFhYnAud3JhcHBlcik7XHJcblxyXG4gICAgICBjb25zdCB7IGxlbmd0aCB9ID0gdHJhbnNmb3JtZWQ7XHJcblxyXG4gICAgICBpZiAoYWJwUGFja2FnZSkge1xyXG4gICAgICAgIHRyYW5zZm9ybWVkLnB1c2goYWJwUGFja2FnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0cmFuc2Zvcm1lZC5sZW5ndGggPT09IGxlbmd0aCAmJiAocm91dGUuZGF0YSB8fCB7fSkucm91dGVzKSB7XHJcbiAgICAgICAgdHJhbnNmb3JtZWQucHVzaCh7XHJcbiAgICAgICAgICAuLi5yb3V0ZS5kYXRhLnJvdXRlcyxcclxuICAgICAgICAgIHBhdGg6IHJvdXRlLnBhdGgsXHJcbiAgICAgICAgICBuYW1lOiBzbnEoKCkgPT4gcm91dGUuZGF0YS5yb3V0ZXMubmFtZSwgcm91dGUucGF0aCksXHJcbiAgICAgICAgICBjaGlsZHJlbjogcm91dGUuZGF0YS5yb3V0ZXMuY2hpbGRyZW4gfHwgW10sXHJcbiAgICAgICAgfSBhcyBBQlAuRnVsbFJvdXRlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiB7IHJvdXRlczogc2V0VXJscyh0cmFuc2Zvcm1lZCksIHdyYXBwZXJzIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFVybHMocm91dGVzOiBBQlAuRnVsbFJvdXRlW10sIHBhcmVudFVybD86IHN0cmluZyk6IEFCUC5GdWxsUm91dGVbXSB7XHJcbiAgaWYgKHBhcmVudFVybCkge1xyXG4gICAgLy8gdGhpcyBpZiBibG9jayB1c2luZyBmb3Igb25seSByZWN1cnNpdmUgY2FsbFxyXG5cclxuICAgIHJldHVybiByb3V0ZXMubWFwKHJvdXRlID0+ICh7XHJcbiAgICAgIC4uLnJvdXRlLFxyXG4gICAgICB1cmw6IGAke3BhcmVudFVybH0vJHtyb3V0ZS5wYXRofWAsXHJcbiAgICAgIC4uLihyb3V0ZS5jaGlsZHJlbiAmJlxyXG4gICAgICAgIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCAmJiB7XHJcbiAgICAgICAgICBjaGlsZHJlbjogc2V0VXJscyhyb3V0ZS5jaGlsZHJlbiwgYCR7cGFyZW50VXJsfS8ke3JvdXRlLnBhdGh9YCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm91dGVzLm1hcChyb3V0ZSA9PiAoe1xyXG4gICAgLi4ucm91dGUsXHJcbiAgICB1cmw6IGAvJHtyb3V0ZS5wYXRofWAsXHJcbiAgICAuLi4ocm91dGUuY2hpbGRyZW4gJiZcclxuICAgICAgcm91dGUuY2hpbGRyZW4ubGVuZ3RoICYmIHtcclxuICAgICAgICBjaGlsZHJlbjogc2V0VXJscyhyb3V0ZS5jaGlsZHJlbiwgYC8ke3JvdXRlLnBhdGh9YCksXHJcbiAgICAgIH0pLFxyXG4gIH0pKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmxhdFJvdXRlcyhyb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSk6IEFCUC5GdWxsUm91dGVbXSB7XHJcbiAgY29uc3QgZmxhdCA9IChyOiBBQlAuRnVsbFJvdXRlW10pID0+IHtcclxuICAgIHJldHVybiByLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcclxuICAgICAgbGV0IHZhbHVlOiBBQlAuRnVsbFJvdXRlW10gPSBbdmFsXTtcclxuICAgICAgaWYgKHZhbC5jaGlsZHJlbikge1xyXG4gICAgICAgIHZhbHVlID0gW3ZhbCwgLi4uZmxhdCh2YWwuY2hpbGRyZW4pXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIFsuLi5hY2MsIC4uLnZhbHVlXTtcclxuICAgIH0sIFtdKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gZmxhdChyb3V0ZXMpO1xyXG59XHJcbiJdfQ==