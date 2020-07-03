import { __decorate, __metadata, __param, __rest } from "tslib";
import { Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesService } from '../services/routes.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/routes.service";
import * as i2 from "@angular/router";
let RoutesHandler = class RoutesHandler {
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
};
RoutesHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutesHandler_Factory() { return new RoutesHandler(i0.ɵɵinject(i1.RoutesService), i0.ɵɵinject(i2.Router, 8)); }, token: RoutesHandler, providedIn: "root" });
RoutesHandler = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(1, Optional()),
    __metadata("design:paramtypes", [RoutesService, Router])
], RoutesHandler);
export { RoutesHandler };
function flatRoutes(routes, parent) {
    if (!routes)
        return [];
    return routes.reduce((acc, route) => {
        const _a = Object.assign(Object.assign({}, route), { parentName: parent.name, path: (parent.path + '/' + route.path).replace(/\/\//g, '/') }), { children } = _a, current = __rest(_a, ["children"]);
        acc.push(current, ...flatRoutes(children, current));
        return acc;
    }, []);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvaGFuZGxlcnMvcm91dGVzLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFLM0QsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUN4QixZQUFvQixNQUFxQixFQUFzQixNQUFjO1FBQXpELFdBQU0sR0FBTixNQUFNLENBQWU7UUFBc0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMzRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFNBQVM7O1FBQ1AsWUFBQSxJQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLDBDQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQ25ELElBQUksRUFBQyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsTUFBTSxDQUFBO2dCQUFFLE9BQU87WUFFMUIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QixPQUFPO2FBQ1I7WUFFRCxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsaUJBQUcsSUFBSSxJQUFLLElBQUksQ0FBQyxNQUFNLEVBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBRTtJQUNMLENBQUM7Q0FDRixDQUFBOztBQWxCWSxhQUFhO0lBSHpCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUFFNEMsV0FBQSxRQUFRLEVBQUUsQ0FBQTtxQ0FBMUIsYUFBYSxFQUE4QixNQUFNO0dBRGxFLGFBQWEsQ0FrQnpCO1NBbEJZLGFBQWE7QUFvQjFCLFNBQVMsVUFBVSxDQUFDLE1BQWtCLEVBQUUsTUFBVztJQUNqRCxJQUFJLENBQUMsTUFBTTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBRXZCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNsQyxNQUFNLHVJQUlMLEVBSkssRUFBRSxRQUFRLE9BSWYsRUFKaUIsa0NBSWpCLENBQUM7UUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUVwRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcm91dGVzLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvdXRlc0hhbmRsZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVzOiBSb3V0ZXNTZXJ2aWNlLCBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB0aGlzLmFkZFJvdXRlcygpO1xyXG4gIH1cclxuXHJcbiAgYWRkUm91dGVzKCkge1xyXG4gICAgdGhpcy5yb3V0ZXI/LmNvbmZpZz8uZm9yRWFjaCgoeyBwYXRoID0gJycsIGRhdGEgfSkgPT4ge1xyXG4gICAgICBpZiAoIWRhdGE/LnJvdXRlcykgcmV0dXJuO1xyXG5cclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5yb3V0ZXMpKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXMuYWRkKGRhdGEucm91dGVzKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJvdXRlcyA9IGZsYXRSb3V0ZXMoW3sgcGF0aCwgLi4uZGF0YS5yb3V0ZXMgfV0sIHsgcGF0aDogJycgfSk7XHJcbiAgICAgIHRoaXMucm91dGVzLmFkZChyb3V0ZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmbGF0Um91dGVzKHJvdXRlczogUm91dGVEZWZbXSwgcGFyZW50OiBhbnkpIHtcclxuICBpZiAoIXJvdXRlcykgcmV0dXJuIFtdO1xyXG5cclxuICByZXR1cm4gcm91dGVzLnJlZHVjZSgoYWNjLCByb3V0ZSkgPT4ge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgLi4uY3VycmVudCB9ID0ge1xyXG4gICAgICAuLi5yb3V0ZSxcclxuICAgICAgcGFyZW50TmFtZTogcGFyZW50Lm5hbWUsXHJcbiAgICAgIHBhdGg6IChwYXJlbnQucGF0aCArICcvJyArIHJvdXRlLnBhdGgpLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpLFxyXG4gICAgfTtcclxuXHJcbiAgICBhY2MucHVzaChjdXJyZW50LCAuLi5mbGF0Um91dGVzKGNoaWxkcmVuLCBjdXJyZW50KSk7XHJcblxyXG4gICAgcmV0dXJuIGFjYztcclxuICB9LCBbXSk7XHJcbn1cclxuXHJcbnR5cGUgUm91dGVEZWYgPSBBQlAuUm91dGUgJiB7IGNoaWxkcmVuOiBSb3V0ZURlZltdIH07XHJcbiJdfQ==