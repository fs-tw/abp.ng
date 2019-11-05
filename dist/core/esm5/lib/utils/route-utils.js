/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?} routes
 * @param {?=} wrappers
 * @param {?=} parentNameArr
 * @param {?=} parentName
 * @return {?}
 */
export function organizeRoutes(routes, wrappers, parentNameArr, parentName) {
    if (wrappers === void 0) { wrappers = []; }
    if (parentNameArr === void 0) { parentNameArr = (/** @type {?} */ ([])); }
    if (parentName === void 0) { parentName = null; }
    /** @type {?} */
    var filter = (/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (route.children && route.children.length) {
            route.children = organizeRoutes(route.children, wrappers, parentNameArr, route.name);
        }
        if (route.parentName && route.parentName !== parentName) {
            parentNameArr.push(route);
            return false;
        }
        return true;
    });
    if (parentName) {
        // recursive block
        return routes.filter(filter);
    }
    /** @type {?} */
    var filteredRoutes = routes.filter(filter);
    if (parentNameArr.length) {
        return sortRoutes(setChildRoute(tslib_1.__spread(filteredRoutes, wrappers), parentNameArr));
    }
    return filteredRoutes;
}
/**
 * @param {?} routes
 * @param {?} parentNameArr
 * @return {?}
 */
export function setChildRoute(routes, parentNameArr) {
    return routes.map((/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (route.children && route.children.length) {
            route.children = setChildRoute(route.children, parentNameArr);
        }
        /** @type {?} */
        var foundedChildren = parentNameArr.filter((/**
         * @param {?} parent
         * @return {?}
         */
        function (parent) { return parent.parentName === route.name; }));
        if (foundedChildren && foundedChildren.length) {
            route.children = tslib_1.__spread((route.children || []), foundedChildren);
        }
        return route;
    }));
}
/**
 * @param {?=} routes
 * @return {?}
 */
export function sortRoutes(routes) {
    if (routes === void 0) { routes = []; }
    if (!routes.length)
        return [];
    return routes
        .map((/**
     * @param {?} route
     * @param {?} index
     * @return {?}
     */
    function (route, index) {
        return tslib_1.__assign({}, route, { order: typeof route.order === 'undefined' ? index + 1 : route.order });
    }))
        .sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) { return a.order - b.order; }))
        .map((/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (route.children && route.children.length) {
            route.children = sortRoutes(route.children);
        }
        return route;
    }));
}
/** @type {?} */
var ABP_ROUTES = (/** @type {?} */ ([]));
/**
 * @param {?} routes
 * @return {?}
 */
export function addAbpRoutes(routes) {
    if (!Array.isArray(routes)) {
        routes = [routes];
    }
    ABP_ROUTES.push.apply(ABP_ROUTES, tslib_1.__spread(routes));
}
/**
 * @return {?}
 */
export function getAbpRoutes() {
    return ABP_ROUTES;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvcm91dGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsTUFBdUIsRUFDdkIsUUFBOEIsRUFDOUIsYUFBcUMsRUFDckMsVUFBeUI7SUFGekIseUJBQUEsRUFBQSxhQUE4QjtJQUM5Qiw4QkFBQSxFQUFBLG1DQUFnQixFQUFFLEVBQW1CO0lBQ3JDLDJCQUFBLEVBQUEsaUJBQXlCOztRQUVuQixNQUFNOzs7O0lBQUcsVUFBQSxLQUFLO1FBQ2xCLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUMzQyxLQUFLLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RGO1FBRUQsSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO1lBQ3ZELGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyxDQUFBO0lBRUQsSUFBSSxVQUFVLEVBQUU7UUFDZCxrQkFBa0I7UUFDbEIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzlCOztRQUVLLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUU1QyxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUU7UUFDeEIsT0FBTyxVQUFVLENBQUMsYUFBYSxrQkFBSyxjQUFjLEVBQUssUUFBUSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUM7S0FDbkY7SUFFRCxPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLE1BQXVCLEVBQUUsYUFBOEI7SUFDbkYsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztJQUFDLFVBQUEsS0FBSztRQUNyQixJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsS0FBSyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUMvRDs7WUFFSyxlQUFlLEdBQUcsYUFBYSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLElBQUksRUFBaEMsQ0FBZ0MsRUFBQztRQUN4RixJQUFJLGVBQWUsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQzdDLEtBQUssQ0FBQyxRQUFRLG9CQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsRUFBSyxlQUFlLENBQUMsQ0FBQztTQUNsRTtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsTUFBNEI7SUFBNUIsdUJBQUEsRUFBQSxXQUE0QjtJQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUM5QixPQUFPLE1BQU07U0FDVixHQUFHOzs7OztJQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7UUFDaEIsNEJBQ0ssS0FBSyxJQUNSLEtBQUssRUFBRSxPQUFPLEtBQUssQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUNuRTtJQUNKLENBQUMsRUFBQztTQUNELElBQUk7Ozs7O0lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFqQixDQUFpQixFQUFDO1NBQ2pDLEdBQUc7Ozs7SUFBQyxVQUFBLEtBQUs7UUFDUixJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLEVBQUMsQ0FBQztBQUNQLENBQUM7O0lBRUssVUFBVSxHQUFHLG1CQUFBLEVBQUUsRUFBbUI7Ozs7O0FBRXhDLE1BQU0sVUFBVSxZQUFZLENBQUMsTUFBdUM7SUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDMUIsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbkI7SUFFRCxVQUFVLENBQUMsSUFBSSxPQUFmLFVBQVUsbUJBQVMsTUFBTSxHQUFFO0FBQzdCLENBQUM7Ozs7QUFFRCxNQUFNLFVBQVUsWUFBWTtJQUMxQixPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcmdhbml6ZVJvdXRlcyhcclxuICByb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSxcclxuICB3cmFwcGVyczogQUJQLkZ1bGxSb3V0ZVtdID0gW10sXHJcbiAgcGFyZW50TmFtZUFyciA9IFtdIGFzIEFCUC5GdWxsUm91dGVbXSxcclxuICBwYXJlbnROYW1lOiBzdHJpbmcgPSBudWxsLFxyXG4pOiBBQlAuRnVsbFJvdXRlW10ge1xyXG4gIGNvbnN0IGZpbHRlciA9IHJvdXRlID0+IHtcclxuICAgIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgcm91dGUuY2hpbGRyZW4gPSBvcmdhbml6ZVJvdXRlcyhyb3V0ZS5jaGlsZHJlbiwgd3JhcHBlcnMsIHBhcmVudE5hbWVBcnIsIHJvdXRlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyb3V0ZS5wYXJlbnROYW1lICYmIHJvdXRlLnBhcmVudE5hbWUgIT09IHBhcmVudE5hbWUpIHtcclxuICAgICAgcGFyZW50TmFtZUFyci5wdXNoKHJvdXRlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGlmIChwYXJlbnROYW1lKSB7XHJcbiAgICAvLyByZWN1cnNpdmUgYmxvY2tcclxuICAgIHJldHVybiByb3V0ZXMuZmlsdGVyKGZpbHRlcik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaWx0ZXJlZFJvdXRlcyA9IHJvdXRlcy5maWx0ZXIoZmlsdGVyKTtcclxuXHJcbiAgaWYgKHBhcmVudE5hbWVBcnIubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gc29ydFJvdXRlcyhzZXRDaGlsZFJvdXRlKFsuLi5maWx0ZXJlZFJvdXRlcywgLi4ud3JhcHBlcnNdLCBwYXJlbnROYW1lQXJyKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmlsdGVyZWRSb3V0ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDaGlsZFJvdXRlKHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdLCBwYXJlbnROYW1lQXJyOiBBQlAuRnVsbFJvdXRlW10pOiBBQlAuRnVsbFJvdXRlW10ge1xyXG4gIHJldHVybiByb3V0ZXMubWFwKHJvdXRlID0+IHtcclxuICAgIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgcm91dGUuY2hpbGRyZW4gPSBzZXRDaGlsZFJvdXRlKHJvdXRlLmNoaWxkcmVuLCBwYXJlbnROYW1lQXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3VuZGVkQ2hpbGRyZW4gPSBwYXJlbnROYW1lQXJyLmZpbHRlcihwYXJlbnQgPT4gcGFyZW50LnBhcmVudE5hbWUgPT09IHJvdXRlLm5hbWUpO1xyXG4gICAgaWYgKGZvdW5kZWRDaGlsZHJlbiAmJiBmb3VuZGVkQ2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgIHJvdXRlLmNoaWxkcmVuID0gWy4uLihyb3V0ZS5jaGlsZHJlbiB8fCBbXSksIC4uLmZvdW5kZWRDaGlsZHJlbl07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJvdXRlO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydFJvdXRlcyhyb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSA9IFtdKTogQUJQLkZ1bGxSb3V0ZVtdIHtcclxuICBpZiAoIXJvdXRlcy5sZW5ndGgpIHJldHVybiBbXTtcclxuICByZXR1cm4gcm91dGVzXHJcbiAgICAubWFwKChyb3V0ZSwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5yb3V0ZSxcclxuICAgICAgICBvcmRlcjogdHlwZW9mIHJvdXRlLm9yZGVyID09PSAndW5kZWZpbmVkJyA/IGluZGV4ICsgMSA6IHJvdXRlLm9yZGVyLFxyXG4gICAgICB9O1xyXG4gICAgfSlcclxuICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcclxuICAgIC5tYXAocm91dGUgPT4ge1xyXG4gICAgICBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgcm91dGUuY2hpbGRyZW4gPSBzb3J0Um91dGVzKHJvdXRlLmNoaWxkcmVuKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IEFCUF9ST1VURVMgPSBbXSBhcyBBQlAuRnVsbFJvdXRlW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQWJwUm91dGVzKHJvdXRlczogQUJQLkZ1bGxSb3V0ZSB8IEFCUC5GdWxsUm91dGVbXSk6IHZvaWQge1xyXG4gIGlmICghQXJyYXkuaXNBcnJheShyb3V0ZXMpKSB7XHJcbiAgICByb3V0ZXMgPSBbcm91dGVzXTtcclxuICB9XHJcblxyXG4gIEFCUF9ST1VURVMucHVzaCguLi5yb3V0ZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWJwUm91dGVzKCk6IEFCUC5GdWxsUm91dGVbXSB7XHJcbiAgcmV0dXJuIEFCUF9ST1VURVM7XHJcbn1cclxuIl19