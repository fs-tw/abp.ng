/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/route-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} routes
 * @param {?=} wrappers
 * @param {?=} parentNameArr
 * @param {?=} parentName
 * @return {?}
 */
export function organizeRoutes(routes, wrappers = [], parentNameArr = (/** @type {?} */ ([])), parentName = null) {
    /** @type {?} */
    const filter = (/**
     * @param {?} route
     * @return {?}
     */
    route => {
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
    const filteredRoutes = routes.filter(filter);
    if (parentNameArr.length) {
        return sortRoutes(setChildRoute([...filteredRoutes, ...wrappers], parentNameArr));
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
    route => {
        if (route.children && route.children.length) {
            route.children = setChildRoute(route.children, parentNameArr);
        }
        /** @type {?} */
        const foundedChildren = parentNameArr.filter((/**
         * @param {?} parent
         * @return {?}
         */
        parent => parent.parentName === route.name));
        if (foundedChildren && foundedChildren.length) {
            route.children = [...(route.children || []), ...foundedChildren];
        }
        return route;
    }));
}
/**
 * @param {?=} routes
 * @return {?}
 */
export function sortRoutes(routes = []) {
    if (!routes.length)
        return [];
    return routes
        .map((/**
     * @param {?} route
     * @param {?} index
     * @return {?}
     */
    (route, index) => {
        return Object.assign({}, route, { order: typeof route.order === 'undefined' ? index + 1 : route.order });
    }))
        .sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    (a, b) => a.order - b.order))
        .map((/**
     * @param {?} route
     * @return {?}
     */
    route => {
        if (route.children && route.children.length) {
            route.children = sortRoutes(route.children);
        }
        return route;
    }));
}
/** @type {?} */
const ABP_ROUTES = (/** @type {?} */ ([]));
/**
 * @param {?} routes
 * @return {?}
 */
export function addAbpRoutes(routes) {
    if (!Array.isArray(routes)) {
        routes = [routes];
    }
    ABP_ROUTES.push(...routes);
}
/**
 * @return {?}
 */
export function getAbpRoutes() {
    return ABP_ROUTES;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvcm91dGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsTUFBdUIsRUFDdkIsV0FBNEIsRUFBRSxFQUM5QixhQUFhLEdBQUcsbUJBQUEsRUFBRSxFQUFtQixFQUNyQyxhQUFxQixJQUFJOztVQUVuQixNQUFNOzs7O0lBQUcsS0FBSyxDQUFDLEVBQUU7UUFDckIsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzNDLEtBQUssQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEY7UUFFRCxJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7WUFDdkQsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUE7SUFFRCxJQUFJLFVBQVUsRUFBRTtRQUNkLGtCQUFrQjtRQUNsQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDOUI7O1VBRUssY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBRTVDLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRTtRQUN4QixPQUFPLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLGNBQWMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7S0FDbkY7SUFFRCxPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUMzQixNQUF1QixFQUN2QixhQUE4QjtJQUU5QixPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O0lBQUMsS0FBSyxDQUFDLEVBQUU7UUFDeEIsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzNDLEtBQUssQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDL0Q7O2NBRUssZUFBZSxHQUFHLGFBQWEsQ0FBQyxNQUFNOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxJQUFJLEVBQUM7UUFDeEYsSUFBSSxlQUFlLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtZQUM3QyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxlQUFlLENBQUMsQ0FBQztTQUNsRTtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsU0FBMEIsRUFBRTtJQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUM5QixPQUFPLE1BQU07U0FDVixHQUFHOzs7OztJQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ3BCLHlCQUNLLEtBQUssSUFDUixLQUFLLEVBQUUsT0FBTyxLQUFLLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssSUFDbkU7SUFDSixDQUFDLEVBQUM7U0FDRCxJQUFJOzs7OztJQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFDO1NBQ2pDLEdBQUc7Ozs7SUFBQyxLQUFLLENBQUMsRUFBRTtRQUNYLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUMzQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0M7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsRUFBQyxDQUFDO0FBQ1AsQ0FBQzs7TUFFSyxVQUFVLEdBQUcsbUJBQUEsRUFBRSxFQUFtQjs7Ozs7QUFFeEMsTUFBTSxVQUFVLFlBQVksQ0FBQyxNQUF1QztJQUNsRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUMxQixNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNuQjtJQUVELFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUM3QixDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLFlBQVk7SUFDMUIsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFCUCB9IGZyb20gJy4uL21vZGVscy9jb21tb24nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9yZ2FuaXplUm91dGVzKFxyXG4gIHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdLFxyXG4gIHdyYXBwZXJzOiBBQlAuRnVsbFJvdXRlW10gPSBbXSxcclxuICBwYXJlbnROYW1lQXJyID0gW10gYXMgQUJQLkZ1bGxSb3V0ZVtdLFxyXG4gIHBhcmVudE5hbWU6IHN0cmluZyA9IG51bGwsXHJcbik6IEFCUC5GdWxsUm91dGVbXSB7XHJcbiAgY29uc3QgZmlsdGVyID0gcm91dGUgPT4ge1xyXG4gICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICByb3V0ZS5jaGlsZHJlbiA9IG9yZ2FuaXplUm91dGVzKHJvdXRlLmNoaWxkcmVuLCB3cmFwcGVycywgcGFyZW50TmFtZUFyciwgcm91dGUubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJvdXRlLnBhcmVudE5hbWUgJiYgcm91dGUucGFyZW50TmFtZSAhPT0gcGFyZW50TmFtZSkge1xyXG4gICAgICBwYXJlbnROYW1lQXJyLnB1c2gocm91dGUpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHBhcmVudE5hbWUpIHtcclxuICAgIC8vIHJlY3Vyc2l2ZSBibG9ja1xyXG4gICAgcmV0dXJuIHJvdXRlcy5maWx0ZXIoZmlsdGVyKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkUm91dGVzID0gcm91dGVzLmZpbHRlcihmaWx0ZXIpO1xyXG5cclxuICBpZiAocGFyZW50TmFtZUFyci5sZW5ndGgpIHtcclxuICAgIHJldHVybiBzb3J0Um91dGVzKHNldENoaWxkUm91dGUoWy4uLmZpbHRlcmVkUm91dGVzLCAuLi53cmFwcGVyc10sIHBhcmVudE5hbWVBcnIpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmaWx0ZXJlZFJvdXRlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENoaWxkUm91dGUoXHJcbiAgcm91dGVzOiBBQlAuRnVsbFJvdXRlW10sXHJcbiAgcGFyZW50TmFtZUFycjogQUJQLkZ1bGxSb3V0ZVtdLFxyXG4pOiBBQlAuRnVsbFJvdXRlW10ge1xyXG4gIHJldHVybiByb3V0ZXMubWFwKHJvdXRlID0+IHtcclxuICAgIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgcm91dGUuY2hpbGRyZW4gPSBzZXRDaGlsZFJvdXRlKHJvdXRlLmNoaWxkcmVuLCBwYXJlbnROYW1lQXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3VuZGVkQ2hpbGRyZW4gPSBwYXJlbnROYW1lQXJyLmZpbHRlcihwYXJlbnQgPT4gcGFyZW50LnBhcmVudE5hbWUgPT09IHJvdXRlLm5hbWUpO1xyXG4gICAgaWYgKGZvdW5kZWRDaGlsZHJlbiAmJiBmb3VuZGVkQ2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgIHJvdXRlLmNoaWxkcmVuID0gWy4uLihyb3V0ZS5jaGlsZHJlbiB8fCBbXSksIC4uLmZvdW5kZWRDaGlsZHJlbl07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJvdXRlO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc29ydFJvdXRlcyhyb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSA9IFtdKTogQUJQLkZ1bGxSb3V0ZVtdIHtcclxuICBpZiAoIXJvdXRlcy5sZW5ndGgpIHJldHVybiBbXTtcclxuICByZXR1cm4gcm91dGVzXHJcbiAgICAubWFwKChyb3V0ZSwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5yb3V0ZSxcclxuICAgICAgICBvcmRlcjogdHlwZW9mIHJvdXRlLm9yZGVyID09PSAndW5kZWZpbmVkJyA/IGluZGV4ICsgMSA6IHJvdXRlLm9yZGVyLFxyXG4gICAgICB9O1xyXG4gICAgfSlcclxuICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcilcclxuICAgIC5tYXAocm91dGUgPT4ge1xyXG4gICAgICBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgcm91dGUuY2hpbGRyZW4gPSBzb3J0Um91dGVzKHJvdXRlLmNoaWxkcmVuKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IEFCUF9ST1VURVMgPSBbXSBhcyBBQlAuRnVsbFJvdXRlW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQWJwUm91dGVzKHJvdXRlczogQUJQLkZ1bGxSb3V0ZSB8IEFCUC5GdWxsUm91dGVbXSk6IHZvaWQge1xyXG4gIGlmICghQXJyYXkuaXNBcnJheShyb3V0ZXMpKSB7XHJcbiAgICByb3V0ZXMgPSBbcm91dGVzXTtcclxuICB9XHJcblxyXG4gIEFCUF9ST1VURVMucHVzaCguLi5yb3V0ZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWJwUm91dGVzKCk6IEFCUC5GdWxsUm91dGVbXSB7XHJcbiAgcmV0dXJuIEFCUF9ST1VURVM7XHJcbn1cclxuIl19