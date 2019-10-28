/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { actionMatcher, InitState, setValue, UpdateState } from '@ngxs/store';
import snq from 'snq';
import { organizeRoutes, getAbpRoutes } from '../utils/route-utils';
import clone from 'just-clone';
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
        if (isInitAction && !this.initialized) {
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
    // TODO: remove in v1
    /** @type {?} */
    const oldAbpRoutes = routes
        .filter((/**
     * @param {?} route
     * @return {?}
     */
    route => {
        return snq((/**
         * @return {?}
         */
        () => route.data.routes.routes.find((/**
         * @param {?} r
         * @return {?}
         */
        r => r.path === route.path))), false);
    }))
        .reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    (acc, val) => [...acc, ...val.data.routes.routes]), []);
    // tslint:disable-next-line: deprecation
    /** @type {?} */
    const abpRoutes = [...getAbpRoutes(), ...oldAbpRoutes];
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
        // this if block using for only recursive call
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
                value = [val, ...flat(val.children)];
            }
            return [...acc, ...value];
        }), []);
    });
    return flat(routes);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnBsdWdpbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL2NvbmZpZy5wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsTUFBTSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQWdDLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUcsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBRXRCLE9BQU8sRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEUsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDOztBQUUvQixNQUFNLE9BQU8sMEJBQTBCLEdBQUcsSUFBSSxjQUFjLENBQUMsNEJBQTRCLENBQUM7QUFHMUYsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBR3ZCLFlBQXdELE9BQWlCLEVBQVUsTUFBYztRQUF6QyxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZ6RixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUV3RSxDQUFDOzs7Ozs7O0lBRXJHLE1BQU0sQ0FBQyxLQUFVLEVBQUUsS0FBVSxFQUFFLElBQXNCOztjQUM3QyxPQUFPLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQzs7Y0FDOUIsWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRS9ELElBQUksWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTs7a0JBQy9CLGlCQUFpQixHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDekQsRUFBRSxNQUFN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UUFBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTs7Z0JBQ3ZCLEtBQUssR0FBb0IsQ0FBQyxHQUFHLENBQUM7WUFDbEMsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNoQixLQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDdEM7WUFFRCxPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUE7SUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IGFjdGlvbk1hdGNoZXIsIEluaXRTdGF0ZSwgTmd4c05leHRQbHVnaW5GbiwgTmd4c1BsdWdpbiwgc2V0VmFsdWUsIFVwZGF0ZVN0YXRlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IEFCUCB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IG9yZ2FuaXplUm91dGVzLCBnZXRBYnBSb3V0ZXMgfSBmcm9tICcuLi91dGlscy9yb3V0ZS11dGlscyc7XHJcbmltcG9ydCBjbG9uZSBmcm9tICdqdXN0LWNsb25lJztcclxuXHJcbmV4cG9ydCBjb25zdCBOR1hTX0NPTkZJR19QTFVHSU5fT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignTkdYU19DT05GSUdfUExVR0lOX09QVElPTlMnKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1BsdWdpbiBpbXBsZW1lbnRzIE5neHNQbHVnaW4ge1xyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChOR1hTX0NPTkZJR19QTFVHSU5fT1BUSU9OUykgcHJpdmF0ZSBvcHRpb25zOiBBQlAuUm9vdCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgaGFuZGxlKHN0YXRlOiBhbnksIGV2ZW50OiBhbnksIG5leHQ6IE5neHNOZXh0UGx1Z2luRm4pIHtcclxuICAgIGNvbnN0IG1hdGNoZXMgPSBhY3Rpb25NYXRjaGVyKGV2ZW50KTtcclxuICAgIGNvbnN0IGlzSW5pdEFjdGlvbiA9IG1hdGNoZXMoSW5pdFN0YXRlKSB8fCBtYXRjaGVzKFVwZGF0ZVN0YXRlKTtcclxuXHJcbiAgICBpZiAoaXNJbml0QWN0aW9uICYmICF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIGNvbnN0IHRyYW5zZm9ybWVkUm91dGVzID0gdHJhbnNmb3JtUm91dGVzKHRoaXMucm91dGVyLmNvbmZpZyk7XHJcbiAgICAgIGxldCB7IHJvdXRlcyB9ID0gdHJhbnNmb3JtZWRSb3V0ZXM7XHJcbiAgICAgIGNvbnN0IHsgd3JhcHBlcnMgfSA9IHRyYW5zZm9ybWVkUm91dGVzO1xyXG5cclxuICAgICAgcm91dGVzID0gb3JnYW5pemVSb3V0ZXMocm91dGVzLCB3cmFwcGVycyk7XHJcbiAgICAgIGNvbnN0IGZsYXR0ZWRSb3V0ZXMgPSBmbGF0Um91dGVzKGNsb25lKHJvdXRlcykpO1xyXG4gICAgICBzdGF0ZSA9IHNldFZhbHVlKHN0YXRlLCAnQ29uZmlnU3RhdGUnLCB7XHJcbiAgICAgICAgLi4uKHN0YXRlLkNvbmZpZ1N0YXRlICYmIHsgLi4uc3RhdGUuQ29uZmlnU3RhdGUgfSksXHJcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLFxyXG4gICAgICAgIHJvdXRlcyxcclxuICAgICAgICBmbGF0dGVkUm91dGVzLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXh0KHN0YXRlLCBldmVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0cmFuc2Zvcm1Sb3V0ZXMocm91dGVzOiBSb3V0ZXMgPSBbXSwgd3JhcHBlcnM6IEFCUC5GdWxsUm91dGVbXSA9IFtdKTogYW55IHtcclxuICAvLyBUT0RPOiByZW1vdmUgaW4gdjFcclxuICBjb25zdCBvbGRBYnBSb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSA9IHJvdXRlc1xyXG4gICAgLmZpbHRlcihyb3V0ZSA9PiB7XHJcbiAgICAgIHJldHVybiBzbnEoKCkgPT4gcm91dGUuZGF0YS5yb3V0ZXMucm91dGVzLmZpbmQociA9PiByLnBhdGggPT09IHJvdXRlLnBhdGgpLCBmYWxzZSk7XHJcbiAgICB9KVxyXG4gICAgLnJlZHVjZSgoYWNjLCB2YWwpID0+IFsuLi5hY2MsIC4uLnZhbC5kYXRhLnJvdXRlcy5yb3V0ZXNdLCBbXSk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxyXG4gIGNvbnN0IGFicFJvdXRlcyA9IFsuLi5nZXRBYnBSb3V0ZXMoKSwgLi4ub2xkQWJwUm91dGVzXTtcclxuXHJcbiAgd3JhcHBlcnMgPSBhYnBSb3V0ZXMuZmlsdGVyKGFyID0+IGFyLndyYXBwZXIpO1xyXG4gIGNvbnN0IHRyYW5zZm9ybWVkID0gW10gYXMgQUJQLkZ1bGxSb3V0ZVtdO1xyXG4gIHJvdXRlc1xyXG4gICAgLmZpbHRlcihyb3V0ZSA9PiByb3V0ZS5jb21wb25lbnQgfHwgcm91dGUubG9hZENoaWxkcmVuKVxyXG4gICAgLmZvckVhY2gocm91dGUgPT4ge1xyXG4gICAgICBjb25zdCBhYnBQYWNrYWdlID0gYWJwUm91dGVzLmZpbmQoYWJwID0+IGFicC5wYXRoLnRvTG93ZXJDYXNlKCkgPT09IHJvdXRlLnBhdGgudG9Mb3dlckNhc2UoKSAmJiAhYWJwLndyYXBwZXIpO1xyXG5cclxuICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHRyYW5zZm9ybWVkO1xyXG5cclxuICAgICAgaWYgKGFicFBhY2thZ2UpIHtcclxuICAgICAgICB0cmFuc2Zvcm1lZC5wdXNoKGFicFBhY2thZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHJhbnNmb3JtZWQubGVuZ3RoID09PSBsZW5ndGggJiYgKHJvdXRlLmRhdGEgfHwge30pLnJvdXRlcykge1xyXG4gICAgICAgIHRyYW5zZm9ybWVkLnB1c2goe1xyXG4gICAgICAgICAgLi4ucm91dGUuZGF0YS5yb3V0ZXMsXHJcbiAgICAgICAgICBwYXRoOiByb3V0ZS5wYXRoLFxyXG4gICAgICAgICAgbmFtZTogc25xKCgpID0+IHJvdXRlLmRhdGEucm91dGVzLm5hbWUsIHJvdXRlLnBhdGgpLFxyXG4gICAgICAgICAgY2hpbGRyZW46IHJvdXRlLmRhdGEucm91dGVzLmNoaWxkcmVuIHx8IFtdLFxyXG4gICAgICAgIH0gYXMgQUJQLkZ1bGxSb3V0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICByZXR1cm4geyByb3V0ZXM6IHNldFVybHModHJhbnNmb3JtZWQpLCB3cmFwcGVycyB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRVcmxzKHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdLCBwYXJlbnRVcmw/OiBzdHJpbmcpOiBBQlAuRnVsbFJvdXRlW10ge1xyXG4gIGlmIChwYXJlbnRVcmwpIHtcclxuICAgIC8vIHRoaXMgaWYgYmxvY2sgdXNpbmcgZm9yIG9ubHkgcmVjdXJzaXZlIGNhbGxcclxuXHJcbiAgICByZXR1cm4gcm91dGVzLm1hcChyb3V0ZSA9PiAoe1xyXG4gICAgICAuLi5yb3V0ZSxcclxuICAgICAgdXJsOiBgJHtwYXJlbnRVcmx9LyR7cm91dGUucGF0aH1gLFxyXG4gICAgICAuLi4ocm91dGUuY2hpbGRyZW4gJiZcclxuICAgICAgICByb3V0ZS5jaGlsZHJlbi5sZW5ndGggJiYge1xyXG4gICAgICAgICAgY2hpbGRyZW46IHNldFVybHMocm91dGUuY2hpbGRyZW4sIGAke3BhcmVudFVybH0vJHtyb3V0ZS5wYXRofWApLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvdXRlcy5tYXAocm91dGUgPT4gKHtcclxuICAgIC4uLnJvdXRlLFxyXG4gICAgdXJsOiBgLyR7cm91dGUucGF0aH1gLFxyXG4gICAgLi4uKHJvdXRlLmNoaWxkcmVuICYmXHJcbiAgICAgIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCAmJiB7XHJcbiAgICAgICAgY2hpbGRyZW46IHNldFVybHMocm91dGUuY2hpbGRyZW4sIGAvJHtyb3V0ZS5wYXRofWApLFxyXG4gICAgICB9KSxcclxuICB9KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZsYXRSb3V0ZXMocm91dGVzOiBBQlAuRnVsbFJvdXRlW10pOiBBQlAuRnVsbFJvdXRlW10ge1xyXG4gIGNvbnN0IGZsYXQgPSAocjogQUJQLkZ1bGxSb3V0ZVtdKSA9PiB7XHJcbiAgICByZXR1cm4gci5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XHJcbiAgICAgIGxldCB2YWx1ZTogQUJQLkZ1bGxSb3V0ZVtdID0gW3ZhbF07XHJcbiAgICAgIGlmICh2YWwuY2hpbGRyZW4pIHtcclxuICAgICAgICB2YWx1ZSA9IFt2YWwsIC4uLmZsYXQodmFsLmNoaWxkcmVuKV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBbLi4uYWNjLCAuLi52YWx1ZV07XHJcbiAgICB9LCBbXSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGZsYXQocm91dGVzKTtcclxufVxyXG4iXX0=