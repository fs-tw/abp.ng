/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugins/config.plugin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { actionMatcher, InitState, setValue, UpdateState, } from '@ngxs/store';
import clone from 'just-clone';
import snq from 'snq';
import { getAbpRoutes, organizeRoutes } from '../utils/route-utils';
/** @type {?} */
export const NGXS_CONFIG_PLUGIN_OPTIONS = new InjectionToken('NGXS_CONFIG_PLUGIN_OPTIONS');
export class ConfigPlugin {
    /**
     * @param {?} options
     * @param {?} router
     */
    constructor(options, router) {
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
    handle(state, event, next) {
        /** @type {?} */
        const matches = actionMatcher(event);
        /** @type {?} */
        const isInitAction = matches(InitState) || matches(UpdateState);
        if (isInitAction && !this.initialized && getAbpRoutes().length) {
            /** @type {?} */
            const transformedRoutes = transformRoutes(this.router.config);
            let { routes } = transformedRoutes;
            const { wrappers } = transformedRoutes;
            routes = organizeRoutes(routes, wrappers);
            /** @type {?} */
            const flattedRoutes = flatRoutes(clone(routes));
            state = setValue(state, 'ConfigState', Object.assign({}, (state.ConfigState && Object.assign({}, state.ConfigState)), this.options, { routes,
                flattedRoutes }));
            this.initialized = true;
        }
        return next(state, event);
    }
}
ConfigPlugin.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NGXS_CONFIG_PLUGIN_OPTIONS,] }] },
    { type: Router }
];
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
function transformRoutes(routes = [], wrappers = []) {
    /** @type {?} */
    const abpRoutes = [...getAbpRoutes()];
    wrappers = abpRoutes.filter((/**
     * @param {?} ar
     * @return {?}
     */
    ar => ar.wrapper));
    /** @type {?} */
    const transformed = (/** @type {?} */ ([]));
    routes
        .filter((/**
     * @param {?} route
     * @return {?}
     */
    route => route.component || route.loadChildren))
        .forEach((/**
     * @param {?} route
     * @return {?}
     */
    route => {
        /** @type {?} */
        const abpPackage = abpRoutes.find((/**
         * @param {?} abp
         * @return {?}
         */
        abp => abp.path.toLowerCase() === route.path.toLowerCase() && !abp.wrapper));
        const { length } = transformed;
        if (abpPackage) {
            transformed.push(abpPackage);
        }
        if (transformed.length === length && (route.data || {}).routes) {
            transformed.push((/** @type {?} */ (Object.assign({}, route.data.routes, { path: route.path, name: snq((/**
                 * @return {?}
                 */
                () => route.data.routes.name), route.path), children: route.data.routes.children || [] }))));
        }
    }));
    return { routes: setUrls(transformed), wrappers };
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
        route => (Object.assign({}, route, { url: `${parentUrl}/${route.path}` }, (route.children &&
            route.children.length && {
            children: setUrls(route.children, `${parentUrl}/${route.path}`),
        })))));
    }
    return routes.map((/**
     * @param {?} route
     * @return {?}
     */
    route => (Object.assign({}, route, { url: `/${route.path}` }, (route.children &&
        route.children.length && {
        children: setUrls(route.children, `/${route.path}`),
    })))));
}
/**
 * @param {?} routes
 * @return {?}
 */
function flatRoutes(routes) {
    /** @type {?} */
    const flat = (/**
     * @param {?} r
     * @return {?}
     */
    (r) => {
        return r.reduce((/**
         * @param {?} acc
         * @param {?} val
         * @return {?}
         */
        (acc, val) => {
            /** @type {?} */
            let value = [val];
            if (val.children) {
                val.children = val.children.map((/**
                 * @param {?} child
                 * @return {?}
                 */
                child => (Object.assign({}, child, { parentName: val.name }))));
                value = [val, ...flat(val.children)];
            }
            return [...acc, ...value];
        }), []);
    });
    return flat(routes);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnBsdWdpbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL2NvbmZpZy5wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxhQUFhLEVBQ2IsU0FBUyxFQUdULFFBQVEsRUFDUixXQUFXLEdBQ1osTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUV0QixPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUVwRSxNQUFNLE9BQU8sMEJBQTBCLEdBQUcsSUFBSSxjQUFjLENBQUMsNEJBQTRCLENBQUM7QUFHMUYsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBR3ZCLFlBQzhDLE9BQWlCLEVBQ3JELE1BQWM7UUFEc0IsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUNyRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSmhCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBS3pCLENBQUM7Ozs7Ozs7SUFFSixNQUFNLENBQUMsS0FBVSxFQUFFLEtBQVUsRUFBRSxJQUFzQjs7Y0FDN0MsT0FBTyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7O2NBQzlCLFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUUvRCxJQUFJLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFOztrQkFDeEQsaUJBQWlCLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMs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LENBQUM7UUFDNUIsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFBO0lBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG4gIGFjdGlvbk1hdGNoZXIsXHJcbiAgSW5pdFN0YXRlLFxyXG4gIE5neHNOZXh0UGx1Z2luRm4sXHJcbiAgTmd4c1BsdWdpbixcclxuICBzZXRWYWx1ZSxcclxuICBVcGRhdGVTdGF0ZSxcclxufSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCBjbG9uZSBmcm9tICdqdXN0LWNsb25lJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBnZXRBYnBSb3V0ZXMsIG9yZ2FuaXplUm91dGVzIH0gZnJvbSAnLi4vdXRpbHMvcm91dGUtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5HWFNfQ09ORklHX1BMVUdJTl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuKCdOR1hTX0NPTkZJR19QTFVHSU5fT1BUSU9OUycpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnUGx1Z2luIGltcGxlbWVudHMgTmd4c1BsdWdpbiB7XHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoTkdYU19DT05GSUdfUExVR0lOX09QVElPTlMpIHByaXZhdGUgb3B0aW9uczogQUJQLlJvb3QsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICkge31cclxuXHJcbiAgaGFuZGxlKHN0YXRlOiBhbnksIGV2ZW50OiBhbnksIG5leHQ6IE5neHNOZXh0UGx1Z2luRm4pIHtcclxuICAgIGNvbnN0IG1hdGNoZXMgPSBhY3Rpb25NYXRjaGVyKGV2ZW50KTtcclxuICAgIGNvbnN0IGlzSW5pdEFjdGlvbiA9IG1hdGNoZXMoSW5pdFN0YXRlKSB8fCBtYXRjaGVzKFVwZGF0ZVN0YXRlKTtcclxuXHJcbiAgICBpZiAoaXNJbml0QWN0aW9uICYmICF0aGlzLmluaXRpYWxpemVkICYmIGdldEFicFJvdXRlcygpLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCB0cmFuc2Zvcm1lZFJvdXRlcyA9IHRyYW5zZm9ybVJvdXRlcyh0aGlzLnJvdXRlci5jb25maWcpO1xyXG4gICAgICBsZXQgeyByb3V0ZXMgfSA9IHRyYW5zZm9ybWVkUm91dGVzO1xyXG4gICAgICBjb25zdCB7IHdyYXBwZXJzIH0gPSB0cmFuc2Zvcm1lZFJvdXRlcztcclxuXHJcbiAgICAgIHJvdXRlcyA9IG9yZ2FuaXplUm91dGVzKHJvdXRlcywgd3JhcHBlcnMpO1xyXG4gICAgICBjb25zdCBmbGF0dGVkUm91dGVzID0gZmxhdFJvdXRlcyhjbG9uZShyb3V0ZXMpKTtcclxuICAgICAgc3RhdGUgPSBzZXRWYWx1ZShzdGF0ZSwgJ0NvbmZpZ1N0YXRlJywge1xyXG4gICAgICAgIC4uLihzdGF0ZS5Db25maWdTdGF0ZSAmJiB7IC4uLnN0YXRlLkNvbmZpZ1N0YXRlIH0pLFxyXG4gICAgICAgIC4uLnRoaXMub3B0aW9ucyxcclxuICAgICAgICByb3V0ZXMsXHJcbiAgICAgICAgZmxhdHRlZFJvdXRlcyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV4dChzdGF0ZSwgZXZlbnQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdHJhbnNmb3JtUm91dGVzKHJvdXRlczogUm91dGVzID0gW10sIHdyYXBwZXJzOiBBQlAuRnVsbFJvdXRlW10gPSBbXSk6IGFueSB7XHJcbiAgY29uc3QgYWJwUm91dGVzID0gWy4uLmdldEFicFJvdXRlcygpXTtcclxuXHJcbiAgd3JhcHBlcnMgPSBhYnBSb3V0ZXMuZmlsdGVyKGFyID0+IGFyLndyYXBwZXIpO1xyXG4gIGNvbnN0IHRyYW5zZm9ybWVkID0gW10gYXMgQUJQLkZ1bGxSb3V0ZVtdO1xyXG4gIHJvdXRlc1xyXG4gICAgLmZpbHRlcihyb3V0ZSA9PiByb3V0ZS5jb21wb25lbnQgfHwgcm91dGUubG9hZENoaWxkcmVuKVxyXG4gICAgLmZvckVhY2gocm91dGUgPT4ge1xyXG4gICAgICBjb25zdCBhYnBQYWNrYWdlID0gYWJwUm91dGVzLmZpbmQoXHJcbiAgICAgICAgYWJwID0+IGFicC5wYXRoLnRvTG93ZXJDYXNlKCkgPT09IHJvdXRlLnBhdGgudG9Mb3dlckNhc2UoKSAmJiAhYWJwLndyYXBwZXIsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCB7IGxlbmd0aCB9ID0gdHJhbnNmb3JtZWQ7XHJcblxyXG4gICAgICBpZiAoYWJwUGFja2FnZSkge1xyXG4gICAgICAgIHRyYW5zZm9ybWVkLnB1c2goYWJwUGFja2FnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0cmFuc2Zvcm1lZC5sZW5ndGggPT09IGxlbmd0aCAmJiAocm91dGUuZGF0YSB8fCB7fSkucm91dGVzKSB7XHJcbiAgICAgICAgdHJhbnNmb3JtZWQucHVzaCh7XHJcbiAgICAgICAgICAuLi5yb3V0ZS5kYXRhLnJvdXRlcyxcclxuICAgICAgICAgIHBhdGg6IHJvdXRlLnBhdGgsXHJcbiAgICAgICAgICBuYW1lOiBzbnEoKCkgPT4gcm91dGUuZGF0YS5yb3V0ZXMubmFtZSwgcm91dGUucGF0aCksXHJcbiAgICAgICAgICBjaGlsZHJlbjogcm91dGUuZGF0YS5yb3V0ZXMuY2hpbGRyZW4gfHwgW10sXHJcbiAgICAgICAgfSBhcyBBQlAuRnVsbFJvdXRlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiB7IHJvdXRlczogc2V0VXJscyh0cmFuc2Zvcm1lZCksIHdyYXBwZXJzIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFVybHMocm91dGVzOiBBQlAuRnVsbFJvdXRlW10sIHBhcmVudFVybD86IHN0cmluZyk6IEFCUC5GdWxsUm91dGVbXSB7XHJcbiAgaWYgKHBhcmVudFVybCkge1xyXG4gICAgLy8gcmVjdXJzaXZlIGJsb2NrXHJcbiAgICByZXR1cm4gcm91dGVzLm1hcChyb3V0ZSA9PiAoe1xyXG4gICAgICAuLi5yb3V0ZSxcclxuICAgICAgdXJsOiBgJHtwYXJlbnRVcmx9LyR7cm91dGUucGF0aH1gLFxyXG4gICAgICAuLi4ocm91dGUuY2hpbGRyZW4gJiZcclxuICAgICAgICByb3V0ZS5jaGlsZHJlbi5sZW5ndGggJiYge1xyXG4gICAgICAgICAgY2hpbGRyZW46IHNldFVybHMocm91dGUuY2hpbGRyZW4sIGAke3BhcmVudFVybH0vJHtyb3V0ZS5wYXRofWApLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvdXRlcy5tYXAocm91dGUgPT4gKHtcclxuICAgIC4uLnJvdXRlLFxyXG4gICAgdXJsOiBgLyR7cm91dGUucGF0aH1gLFxyXG4gICAgLi4uKHJvdXRlLmNoaWxkcmVuICYmXHJcbiAgICAgIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCAmJiB7XHJcbiAgICAgICAgY2hpbGRyZW46IHNldFVybHMocm91dGUuY2hpbGRyZW4sIGAvJHtyb3V0ZS5wYXRofWApLFxyXG4gICAgICB9KSxcclxuICB9KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZsYXRSb3V0ZXMocm91dGVzOiBBQlAuRnVsbFJvdXRlW10pOiBBQlAuRnVsbFJvdXRlW10ge1xyXG4gIGNvbnN0IGZsYXQgPSAocjogQUJQLkZ1bGxSb3V0ZVtdKSA9PiB7XHJcbiAgICByZXR1cm4gci5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XHJcbiAgICAgIGxldCB2YWx1ZTogQUJQLkZ1bGxSb3V0ZVtdID0gW3ZhbF07XHJcbiAgICAgIGlmICh2YWwuY2hpbGRyZW4pIHtcclxuICAgICAgICB2YWwuY2hpbGRyZW4gPSB2YWwuY2hpbGRyZW4ubWFwKGNoaWxkID0+ICh7IC4uLmNoaWxkLCBwYXJlbnROYW1lOiB2YWwubmFtZSB9KSk7XHJcbiAgICAgICAgdmFsdWUgPSBbdmFsLCAuLi5mbGF0KHZhbC5jaGlsZHJlbildO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gWy4uLmFjYywgLi4udmFsdWVdO1xyXG4gICAgfSwgW10pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBmbGF0KHJvdXRlcyk7XHJcbn1cclxuIl19