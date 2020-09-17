import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RestOccurError } from '../actions/rest.actions';
import { RoutesService } from '../services/routes.service';
import { ConfigState } from '../states/config.state';
import { findRoute, getRoutePath } from '../utils/route-utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../services/routes.service";
import * as i3 from "@ngxs/store";
let PermissionGuard = class PermissionGuard {
    constructor(router, routes, store) {
        this.router = router;
        this.routes = routes;
        this.store = store;
    }
    canActivate(route, state) {
        let { requiredPolicy } = route.data || {};
        if (!requiredPolicy) {
            const routeFound = findRoute(this.routes, getRoutePath(this.router, state.url));
            requiredPolicy = routeFound === null || routeFound === void 0 ? void 0 : routeFound.requiredPolicy;
        }
        if (!requiredPolicy)
            return of(true);
        return this.store.select(ConfigState.getGrantedPolicy(requiredPolicy)).pipe(tap(access => {
            if (!access) {
                this.store.dispatch(new RestOccurError({ status: 403 }));
            }
        }));
    }
};
PermissionGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function PermissionGuard_Factory() { return new PermissionGuard(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.RoutesService), i0.ɵɵinject(i3.Store)); }, token: PermissionGuard, providedIn: "root" });
PermissionGuard = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [Router, RoutesService, Store])
], PermissionGuard);
export { PermissionGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9ndWFyZHMvcGVybWlzc2lvbi5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXVDLE1BQU0sRUFBdUIsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBSy9ELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFDMUIsWUFBb0IsTUFBYyxFQUFVLE1BQXFCLEVBQVUsS0FBWTtRQUFuRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDO0lBRTNGLFdBQVcsQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBQ25FLElBQUksRUFBRSxjQUFjLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUUxQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ25CLE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLGNBQWMsR0FBRyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsY0FBYyxDQUFDO1NBQzdDO1FBRUQsSUFBSSxDQUFDLGNBQWM7WUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDekUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDMUQ7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O0FBckJZLGVBQWU7SUFIM0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztxQ0FFNEIsTUFBTSxFQUFrQixhQUFhLEVBQWlCLEtBQUs7R0FENUUsZUFBZSxDQXFCM0I7U0FyQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFJlc3RPY2N1ckVycm9yIH0gZnJvbSAnLi4vYWN0aW9ucy9yZXN0LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcm91dGVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9jb25maWcuc3RhdGUnO1xyXG5pbXBvcnQgeyBmaW5kUm91dGUsIGdldFJvdXRlUGF0aCB9IGZyb20gJy4uL3V0aWxzL3JvdXRlLXV0aWxzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXM6IFJvdXRlc1NlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIGxldCB7IHJlcXVpcmVkUG9saWN5IH0gPSByb3V0ZS5kYXRhIHx8IHt9O1xyXG5cclxuICAgIGlmICghcmVxdWlyZWRQb2xpY3kpIHtcclxuICAgICAgY29uc3Qgcm91dGVGb3VuZCA9IGZpbmRSb3V0ZSh0aGlzLnJvdXRlcywgZ2V0Um91dGVQYXRoKHRoaXMucm91dGVyLCBzdGF0ZS51cmwpKTtcclxuICAgICAgcmVxdWlyZWRQb2xpY3kgPSByb3V0ZUZvdW5kPy5yZXF1aXJlZFBvbGljeTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlcXVpcmVkUG9saWN5KSByZXR1cm4gb2YodHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KENvbmZpZ1N0YXRlLmdldEdyYW50ZWRQb2xpY3kocmVxdWlyZWRQb2xpY3kpKS5waXBlKFxyXG4gICAgICB0YXAoYWNjZXNzID0+IHtcclxuICAgICAgICBpZiAoIWFjY2Vzcykge1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgUmVzdE9jY3VyRXJyb3IoeyBzdGF0dXM6IDQwMyB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==