/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/route-utils.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvcm91dGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBLE1BQU0sVUFBVSxjQUFjLENBQzVCLE1BQXVCLEVBQ3ZCLFFBQThCLEVBQzlCLGFBQXFDLEVBQ3JDLFVBQXlCO0lBRnpCLHlCQUFBLEVBQUEsYUFBOEI7SUFDOUIsOEJBQUEsRUFBQSxtQ0FBZ0IsRUFBRSxFQUFtQjtJQUNyQywyQkFBQSxFQUFBLGlCQUF5Qjs7UUFFbkIsTUFBTTs7OztJQUFHLFVBQUEsS0FBSztRQUNsQixJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsS0FBSyxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0RjtRQUVELElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtZQUN2RCxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsQ0FBQTtJQUVELElBQUksVUFBVSxFQUFFO1FBQ2Qsa0JBQWtCO1FBQ2xCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM5Qjs7UUFFSyxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFFNUMsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFO1FBQ3hCLE9BQU8sVUFBVSxDQUFDLGFBQWEsa0JBQUssY0FBYyxFQUFLLFFBQVEsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO0tBQ25GO0lBRUQsT0FBTyxjQUFjLENBQUM7QUFDeEIsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FDM0IsTUFBdUIsRUFDdkIsYUFBOEI7SUFFOUIsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztJQUFDLFVBQUEsS0FBSztRQUNyQixJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsS0FBSyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUMvRDs7WUFFSyxlQUFlLEdBQUcsYUFBYSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLElBQUksRUFBaEMsQ0FBZ0MsRUFBQztRQUN4RixJQUFJLGVBQWUsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQzdDLEtBQUssQ0FBQyxRQUFRLG9CQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsRUFBSyxlQUFlLENBQUMsQ0FBQztTQUNsRTtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsTUFBNEI7SUFBNUIsdUJBQUEsRUFBQSxXQUE0QjtJQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUM5QixPQUFPLE1BQU07U0FDVixHQUFHOzs7OztJQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7UUFDaEIsNEJBQ0ssS0FBSyxJQUNSLEtBQUssRUFBRSxPQUFPLEtBQUssQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUNuRTtJQUNKLENBQUMsRUFBQztTQUNELElBQUk7Ozs7O0lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFqQixDQUFpQixFQUFDO1NBQ2pDLEdBQUc7Ozs7SUFBQyxVQUFBLEtBQUs7UUFDUixJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLEVBQUMsQ0FBQztBQUNQLENBQUM7O0lBRUssVUFBVSxHQUFHLG1CQUFBLEVBQUUsRUFBbUI7Ozs7O0FBRXhDLE1BQU0sVUFBVSxZQUFZLENBQUMsTUFBdUM7SUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDMUIsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbkI7SUFFRCxVQUFVLENBQUMsSUFBSSxPQUFmLFVBQVUsbUJBQVMsTUFBTSxHQUFFO0FBQzdCLENBQUM7Ozs7QUFFRCxNQUFNLFVBQVUsWUFBWTtJQUMxQixPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi4vbW9kZWxzL2NvbW1vbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3JnYW5pemVSb3V0ZXMoXHJcbiAgcm91dGVzOiBBQlAuRnVsbFJvdXRlW10sXHJcbiAgd3JhcHBlcnM6IEFCUC5GdWxsUm91dGVbXSA9IFtdLFxyXG4gIHBhcmVudE5hbWVBcnIgPSBbXSBhcyBBQlAuRnVsbFJvdXRlW10sXHJcbiAgcGFyZW50TmFtZTogc3RyaW5nID0gbnVsbCxcclxuKTogQUJQLkZ1bGxSb3V0ZVtdIHtcclxuICBjb25zdCBmaWx0ZXIgPSByb3V0ZSA9PiB7XHJcbiAgICBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgIHJvdXRlLmNoaWxkcmVuID0gb3JnYW5pemVSb3V0ZXMocm91dGUuY2hpbGRyZW4sIHdyYXBwZXJzLCBwYXJlbnROYW1lQXJyLCByb3V0ZS5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocm91dGUucGFyZW50TmFtZSAmJiByb3V0ZS5wYXJlbnROYW1lICE9PSBwYXJlbnROYW1lKSB7XHJcbiAgICAgIHBhcmVudE5hbWVBcnIucHVzaChyb3V0ZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBpZiAocGFyZW50TmFtZSkge1xyXG4gICAgLy8gcmVjdXJzaXZlIGJsb2NrXHJcbiAgICByZXR1cm4gcm91dGVzLmZpbHRlcihmaWx0ZXIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsdGVyZWRSb3V0ZXMgPSByb3V0ZXMuZmlsdGVyKGZpbHRlcik7XHJcblxyXG4gIGlmIChwYXJlbnROYW1lQXJyLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIHNvcnRSb3V0ZXMoc2V0Q2hpbGRSb3V0ZShbLi4uZmlsdGVyZWRSb3V0ZXMsIC4uLndyYXBwZXJzXSwgcGFyZW50TmFtZUFycikpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZpbHRlcmVkUm91dGVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2hpbGRSb3V0ZShcclxuICByb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSxcclxuICBwYXJlbnROYW1lQXJyOiBBQlAuRnVsbFJvdXRlW10sXHJcbik6IEFCUC5GdWxsUm91dGVbXSB7XHJcbiAgcmV0dXJuIHJvdXRlcy5tYXAocm91dGUgPT4ge1xyXG4gICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICByb3V0ZS5jaGlsZHJlbiA9IHNldENoaWxkUm91dGUocm91dGUuY2hpbGRyZW4sIHBhcmVudE5hbWVBcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvdW5kZWRDaGlsZHJlbiA9IHBhcmVudE5hbWVBcnIuZmlsdGVyKHBhcmVudCA9PiBwYXJlbnQucGFyZW50TmFtZSA9PT0gcm91dGUubmFtZSk7XHJcbiAgICBpZiAoZm91bmRlZENoaWxkcmVuICYmIGZvdW5kZWRDaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgcm91dGUuY2hpbGRyZW4gPSBbLi4uKHJvdXRlLmNoaWxkcmVuIHx8IFtdKSwgLi4uZm91bmRlZENoaWxkcmVuXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcm91dGU7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0Um91dGVzKHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdID0gW10pOiBBQlAuRnVsbFJvdXRlW10ge1xyXG4gIGlmICghcm91dGVzLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG4gIHJldHVybiByb3V0ZXNcclxuICAgIC5tYXAoKHJvdXRlLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnJvdXRlLFxyXG4gICAgICAgIG9yZGVyOiB0eXBlb2Ygcm91dGUub3JkZXIgPT09ICd1bmRlZmluZWQnID8gaW5kZXggKyAxIDogcm91dGUub3JkZXIsXHJcbiAgICAgIH07XHJcbiAgICB9KVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKVxyXG4gICAgLm1hcChyb3V0ZSA9PiB7XHJcbiAgICAgIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICByb3V0ZS5jaGlsZHJlbiA9IHNvcnRSb3V0ZXMocm91dGUuY2hpbGRyZW4pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcm91dGU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgQUJQX1JPVVRFUyA9IFtdIGFzIEFCUC5GdWxsUm91dGVbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRBYnBSb3V0ZXMocm91dGVzOiBBQlAuRnVsbFJvdXRlIHwgQUJQLkZ1bGxSb3V0ZVtdKTogdm9pZCB7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KHJvdXRlcykpIHtcclxuICAgIHJvdXRlcyA9IFtyb3V0ZXNdO1xyXG4gIH1cclxuXHJcbiAgQUJQX1JPVVRFUy5wdXNoKC4uLnJvdXRlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBYnBSb3V0ZXMoKTogQUJQLkZ1bGxSb3V0ZVtdIHtcclxuICByZXR1cm4gQUJQX1JPVVRFUztcclxufVxyXG4iXX0=