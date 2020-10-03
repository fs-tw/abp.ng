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
export class PermissionGuard {
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
}
PermissionGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function PermissionGuard_Factory() { return new PermissionGuard(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.RoutesService), i0.ɵɵinject(i3.Store)); }, token: PermissionGuard, providedIn: "root" });
PermissionGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
PermissionGuard.ctorParameters = () => [
    { type: Router },
    { type: RoutesService },
    { type: Store }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9ndWFyZHMvcGVybWlzc2lvbi5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBdUMsTUFBTSxFQUF1QixNQUFNLGlCQUFpQixDQUFDO0FBQ25HLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFLL0QsTUFBTSxPQUFPLGVBQWU7SUFDMUIsWUFBb0IsTUFBYyxFQUFVLE1BQXFCLEVBQVUsS0FBWTtRQUFuRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDO0lBRTNGLFdBQVcsQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBQ25FLElBQUksRUFBRSxjQUFjLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUUxQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ25CLE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLGNBQWMsR0FBRyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsY0FBYyxDQUFDO1NBQzdDO1FBRUQsSUFBSSxDQUFDLGNBQWM7WUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDekUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDMUQ7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztZQXZCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVg2QyxNQUFNO1lBSzNDLGFBQWE7WUFKYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUmVzdE9jY3VyRXJyb3IgfSBmcm9tICcuLi9hY3Rpb25zL3Jlc3QuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFJvdXRlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9yb3V0ZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL2NvbmZpZy5zdGF0ZSc7XHJcbmltcG9ydCB7IGZpbmRSb3V0ZSwgZ2V0Um91dGVQYXRoIH0gZnJvbSAnLi4vdXRpbHMvcm91dGUtdXRpbHMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlczogUm91dGVzU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgbGV0IHsgcmVxdWlyZWRQb2xpY3kgfSA9IHJvdXRlLmRhdGEgfHwge307XHJcblxyXG4gICAgaWYgKCFyZXF1aXJlZFBvbGljeSkge1xyXG4gICAgICBjb25zdCByb3V0ZUZvdW5kID0gZmluZFJvdXRlKHRoaXMucm91dGVzLCBnZXRSb3V0ZVBhdGgodGhpcy5yb3V0ZXIsIHN0YXRlLnVybCkpO1xyXG4gICAgICByZXF1aXJlZFBvbGljeSA9IHJvdXRlRm91bmQ/LnJlcXVpcmVkUG9saWN5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVxdWlyZWRQb2xpY3kpIHJldHVybiBvZih0cnVlKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoQ29uZmlnU3RhdGUuZ2V0R3JhbnRlZFBvbGljeShyZXF1aXJlZFBvbGljeSkpLnBpcGUoXHJcbiAgICAgIHRhcChhY2Nlc3MgPT4ge1xyXG4gICAgICAgIGlmICghYWNjZXNzKSB7XHJcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBSZXN0T2NjdXJFcnJvcih7IHN0YXR1czogNDAzIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19