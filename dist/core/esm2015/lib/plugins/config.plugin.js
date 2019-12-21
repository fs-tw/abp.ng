/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugins/config.plugin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { actionMatcher, InitState, setValue, UpdateState, } from '@ngxs/store';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnBsdWdpbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL2NvbmZpZy5wbHVnaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFDTCxhQUFhLEVBQ2IsU0FBUyxFQUdULFFBQVEsRUFDUixXQUFXLEdBQ1osTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBRXRCLE9BQU8sRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEUsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDOztBQUUvQixNQUFNLE9BQU8sMEJBQTBCLEdBQUcsSUFBSSxjQUFjLENBQUMsNEJBQTRCLENBQUM7QUFHMUYsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBR3ZCLFlBQzhDLE9BQWlCLEVBQ3JELE1BQWM7UUFEc0IsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUNyRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSmhCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBS3pCLENBQUM7Ozs7Ozs7SUFFSixNQUFNLENBQUMsS0FBVSxFQUFFLEtBQVUsRUFBRSxJQUFzQjs7Y0FDN0MsT0FBTyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7O2NBQzlCLFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUUvRCxJQUFJLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7O2tCQUMvQixpQkFBaUIsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ3pELEVBQUUsTUFB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RSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUE7SUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7XHJcbiAgYWN0aW9uTWF0Y2hlcixcclxuICBJbml0U3RhdGUsXHJcbiAgTmd4c05leHRQbHVnaW5GbixcclxuICBOZ3hzUGx1Z2luLFxyXG4gIHNldFZhbHVlLFxyXG4gIFVwZGF0ZVN0YXRlLFxyXG59IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBvcmdhbml6ZVJvdXRlcywgZ2V0QWJwUm91dGVzIH0gZnJvbSAnLi4vdXRpbHMvcm91dGUtdXRpbHMnO1xyXG5pbXBvcnQgY2xvbmUgZnJvbSAnanVzdC1jbG9uZSc7XHJcblxyXG5leHBvcnQgY29uc3QgTkdYU19DT05GSUdfUExVR0lOX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ05HWFNfQ09ORklHX1BMVUdJTl9PUFRJT05TJyk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdQbHVnaW4gaW1wbGVtZW50cyBOZ3hzUGx1Z2luIHtcclxuICBwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChOR1hTX0NPTkZJR19QTFVHSU5fT1BUSU9OUykgcHJpdmF0ZSBvcHRpb25zOiBBQlAuUm9vdCxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgKSB7fVxyXG5cclxuICBoYW5kbGUoc3RhdGU6IGFueSwgZXZlbnQ6IGFueSwgbmV4dDogTmd4c05leHRQbHVnaW5Gbikge1xyXG4gICAgY29uc3QgbWF0Y2hlcyA9IGFjdGlvbk1hdGNoZXIoZXZlbnQpO1xyXG4gICAgY29uc3QgaXNJbml0QWN0aW9uID0gbWF0Y2hlcyhJbml0U3RhdGUpIHx8IG1hdGNoZXMoVXBkYXRlU3RhdGUpO1xyXG5cclxuICAgIGlmIChpc0luaXRBY3Rpb24gJiYgIXRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgY29uc3QgdHJhbnNmb3JtZWRSb3V0ZXMgPSB0cmFuc2Zvcm1Sb3V0ZXModGhpcy5yb3V0ZXIuY29uZmlnKTtcclxuICAgICAgbGV0IHsgcm91dGVzIH0gPSB0cmFuc2Zvcm1lZFJvdXRlcztcclxuICAgICAgY29uc3QgeyB3cmFwcGVycyB9ID0gdHJhbnNmb3JtZWRSb3V0ZXM7XHJcblxyXG4gICAgICByb3V0ZXMgPSBvcmdhbml6ZVJvdXRlcyhyb3V0ZXMsIHdyYXBwZXJzKTtcclxuICAgICAgY29uc3QgZmxhdHRlZFJvdXRlcyA9IGZsYXRSb3V0ZXMoY2xvbmUocm91dGVzKSk7XHJcbiAgICAgIHN0YXRlID0gc2V0VmFsdWUoc3RhdGUsICdDb25maWdTdGF0ZScsIHtcclxuICAgICAgICAuLi4oc3RhdGUuQ29uZmlnU3RhdGUgJiYgeyAuLi5zdGF0ZS5Db25maWdTdGF0ZSB9KSxcclxuICAgICAgICAuLi50aGlzLm9wdGlvbnMsXHJcbiAgICAgICAgcm91dGVzLFxyXG4gICAgICAgIGZsYXR0ZWRSb3V0ZXMsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHQoc3RhdGUsIGV2ZW50KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybVJvdXRlcyhyb3V0ZXM6IFJvdXRlcyA9IFtdLCB3cmFwcGVyczogQUJQLkZ1bGxSb3V0ZVtdID0gW10pOiBhbnkge1xyXG4gIGNvbnN0IGFicFJvdXRlcyA9IFsuLi5nZXRBYnBSb3V0ZXMoKV07XHJcblxyXG4gIHdyYXBwZXJzID0gYWJwUm91dGVzLmZpbHRlcihhciA9PiBhci53cmFwcGVyKTtcclxuICBjb25zdCB0cmFuc2Zvcm1lZCA9IFtdIGFzIEFCUC5GdWxsUm91dGVbXTtcclxuICByb3V0ZXNcclxuICAgIC5maWx0ZXIocm91dGUgPT4gcm91dGUuY29tcG9uZW50IHx8IHJvdXRlLmxvYWRDaGlsZHJlbilcclxuICAgIC5mb3JFYWNoKHJvdXRlID0+IHtcclxuICAgICAgY29uc3QgYWJwUGFja2FnZSA9IGFicFJvdXRlcy5maW5kKFxyXG4gICAgICAgIGFicCA9PiBhYnAucGF0aC50b0xvd2VyQ2FzZSgpID09PSByb3V0ZS5wYXRoLnRvTG93ZXJDYXNlKCkgJiYgIWFicC53cmFwcGVyLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHRyYW5zZm9ybWVkO1xyXG5cclxuICAgICAgaWYgKGFicFBhY2thZ2UpIHtcclxuICAgICAgICB0cmFuc2Zvcm1lZC5wdXNoKGFicFBhY2thZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHJhbnNmb3JtZWQubGVuZ3RoID09PSBsZW5ndGggJiYgKHJvdXRlLmRhdGEgfHwge30pLnJvdXRlcykge1xyXG4gICAgICAgIHRyYW5zZm9ybWVkLnB1c2goe1xyXG4gICAgICAgICAgLi4ucm91dGUuZGF0YS5yb3V0ZXMsXHJcbiAgICAgICAgICBwYXRoOiByb3V0ZS5wYXRoLFxyXG4gICAgICAgICAgbmFtZTogc25xKCgpID0+IHJvdXRlLmRhdGEucm91dGVzLm5hbWUsIHJvdXRlLnBhdGgpLFxyXG4gICAgICAgICAgY2hpbGRyZW46IHJvdXRlLmRhdGEucm91dGVzLmNoaWxkcmVuIHx8IFtdLFxyXG4gICAgICAgIH0gYXMgQUJQLkZ1bGxSb3V0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICByZXR1cm4geyByb3V0ZXM6IHNldFVybHModHJhbnNmb3JtZWQpLCB3cmFwcGVycyB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRVcmxzKHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdLCBwYXJlbnRVcmw/OiBzdHJpbmcpOiBBQlAuRnVsbFJvdXRlW10ge1xyXG4gIGlmIChwYXJlbnRVcmwpIHtcclxuICAgIC8vIHJlY3Vyc2l2ZSBibG9ja1xyXG4gICAgcmV0dXJuIHJvdXRlcy5tYXAocm91dGUgPT4gKHtcclxuICAgICAgLi4ucm91dGUsXHJcbiAgICAgIHVybDogYCR7cGFyZW50VXJsfS8ke3JvdXRlLnBhdGh9YCxcclxuICAgICAgLi4uKHJvdXRlLmNoaWxkcmVuICYmXHJcbiAgICAgICAgcm91dGUuY2hpbGRyZW4ubGVuZ3RoICYmIHtcclxuICAgICAgICAgIGNoaWxkcmVuOiBzZXRVcmxzKHJvdXRlLmNoaWxkcmVuLCBgJHtwYXJlbnRVcmx9LyR7cm91dGUucGF0aH1gKSxcclxuICAgICAgICB9KSxcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb3V0ZXMubWFwKHJvdXRlID0+ICh7XHJcbiAgICAuLi5yb3V0ZSxcclxuICAgIHVybDogYC8ke3JvdXRlLnBhdGh9YCxcclxuICAgIC4uLihyb3V0ZS5jaGlsZHJlbiAmJlxyXG4gICAgICByb3V0ZS5jaGlsZHJlbi5sZW5ndGggJiYge1xyXG4gICAgICAgIGNoaWxkcmVuOiBzZXRVcmxzKHJvdXRlLmNoaWxkcmVuLCBgLyR7cm91dGUucGF0aH1gKSxcclxuICAgICAgfSksXHJcbiAgfSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmbGF0Um91dGVzKHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdKTogQUJQLkZ1bGxSb3V0ZVtdIHtcclxuICBjb25zdCBmbGF0ID0gKHI6IEFCUC5GdWxsUm91dGVbXSkgPT4ge1xyXG4gICAgcmV0dXJuIHIucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xyXG4gICAgICBsZXQgdmFsdWU6IEFCUC5GdWxsUm91dGVbXSA9IFt2YWxdO1xyXG4gICAgICBpZiAodmFsLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgdmFsLmNoaWxkcmVuID0gdmFsLmNoaWxkcmVuLm1hcChjaGlsZCA9PiAoeyAuLi5jaGlsZCwgcGFyZW50TmFtZTogdmFsLm5hbWUgfSkpO1xyXG4gICAgICAgIHZhbHVlID0gW3ZhbCwgLi4uZmxhdCh2YWwuY2hpbGRyZW4pXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIFsuLi5hY2MsIC4uLnZhbHVlXTtcclxuICAgIH0sIFtdKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gZmxhdChyb3V0ZXMpO1xyXG59XHJcbiJdfQ==