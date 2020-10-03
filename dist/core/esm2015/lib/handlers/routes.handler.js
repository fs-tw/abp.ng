import { __rest } from "tslib";
import { Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesService } from '../services/routes.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/routes.service";
import * as i2 from "@angular/router";
export class RoutesHandler {
    constructor(routes, router) {
        this.routes = routes;
        this.router = router;
        this.addRoutes();
    }
    addRoutes() {
        var _a, _b;
        (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.forEach(({ path = '', data }) => {
            if (!(data === null || data === void 0 ? void 0 : data.routes))
                return;
            if (Array.isArray(data.routes)) {
                this.routes.add(data.routes);
                return;
            }
            const routes = flatRoutes([Object.assign({ path }, data.routes)], { path: '' });
            this.routes.add(routes);
        });
    }
}
RoutesHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutesHandler_Factory() { return new RoutesHandler(i0.ɵɵinject(i1.RoutesService), i0.ɵɵinject(i2.Router, 8)); }, token: RoutesHandler, providedIn: "root" });
RoutesHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
RoutesHandler.ctorParameters = () => [
    { type: RoutesService },
    { type: Router, decorators: [{ type: Optional }] }
];
function flatRoutes(routes, parent) {
    if (!routes)
        return [];
    return routes.reduce((acc, route) => {
        const _a = Object.assign(Object.assign({}, route), { parentName: parent.name, path: (parent.path + '/' + route.path).replace(/\/\//g, '/') }), { children } = _a, current = __rest(_a, ["children"]);
        acc.push(current, ...flatRoutes(children, current));
        return acc;
    }, []);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvaGFuZGxlcnMvcm91dGVzLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFLM0QsTUFBTSxPQUFPLGFBQWE7SUFDeEIsWUFBb0IsTUFBcUIsRUFBc0IsTUFBYztRQUF6RCxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQXNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDM0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTOztRQUNQLFlBQUEsSUFBSSxDQUFDLE1BQU0sMENBQUUsTUFBTSwwQ0FBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtZQUNuRCxJQUFJLEVBQUMsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLE1BQU0sQ0FBQTtnQkFBRSxPQUFPO1lBRTFCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDN0IsT0FBTzthQUNSO1lBRUQsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLGlCQUFHLElBQUksSUFBSyxJQUFJLENBQUMsTUFBTSxFQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUU7SUFDTCxDQUFDOzs7O1lBcEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBSlEsYUFBYTtZQUZiLE1BQU0sdUJBUStCLFFBQVE7O0FBbUJ0RCxTQUFTLFVBQVUsQ0FBQyxNQUFrQixFQUFFLE1BQVc7SUFDakQsSUFBSSxDQUFDLE1BQU07UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUV2QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDbEMsTUFBTSxxQ0FDRCxLQUFLLEtBQ1IsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQ3ZCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUM3RCxFQUpLLEVBQUUsUUFBUSxPQUlmLEVBSm9CLE9BQU8sY0FBdEIsWUFBd0IsQ0FJN0IsQ0FBQztRQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRXBELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFCUCB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IFJvdXRlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9yb3V0ZXMuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm91dGVzSGFuZGxlciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXM6IFJvdXRlc1NlcnZpY2UsIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMuYWRkUm91dGVzKCk7XHJcbiAgfVxyXG5cclxuICBhZGRSb3V0ZXMoKSB7XHJcbiAgICB0aGlzLnJvdXRlcj8uY29uZmlnPy5mb3JFYWNoKCh7IHBhdGggPSAnJywgZGF0YSB9KSA9PiB7XHJcbiAgICAgIGlmICghZGF0YT8ucm91dGVzKSByZXR1cm47XHJcblxyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLnJvdXRlcykpIHtcclxuICAgICAgICB0aGlzLnJvdXRlcy5hZGQoZGF0YS5yb3V0ZXMpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgcm91dGVzID0gZmxhdFJvdXRlcyhbeyBwYXRoLCAuLi5kYXRhLnJvdXRlcyB9XSwgeyBwYXRoOiAnJyB9KTtcclxuICAgICAgdGhpcy5yb3V0ZXMuYWRkKHJvdXRlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZsYXRSb3V0ZXMocm91dGVzOiBSb3V0ZURlZltdLCBwYXJlbnQ6IGFueSkge1xyXG4gIGlmICghcm91dGVzKSByZXR1cm4gW107XHJcblxyXG4gIHJldHVybiByb3V0ZXMucmVkdWNlKChhY2MsIHJvdXRlKSA9PiB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5jdXJyZW50IH0gPSB7XHJcbiAgICAgIC4uLnJvdXRlLFxyXG4gICAgICBwYXJlbnROYW1lOiBwYXJlbnQubmFtZSxcclxuICAgICAgcGF0aDogKHBhcmVudC5wYXRoICsgJy8nICsgcm91dGUucGF0aCkucmVwbGFjZSgvXFwvXFwvL2csICcvJyksXHJcbiAgICB9O1xyXG5cclxuICAgIGFjYy5wdXNoKGN1cnJlbnQsIC4uLmZsYXRSb3V0ZXMoY2hpbGRyZW4sIGN1cnJlbnQpKTtcclxuXHJcbiAgICByZXR1cm4gYWNjO1xyXG4gIH0sIFtdKTtcclxufVxyXG5cclxudHlwZSBSb3V0ZURlZiA9IEFCUC5Sb3V0ZSAmIHsgY2hpbGRyZW46IFJvdXRlRGVmW10gfTtcclxuIl19