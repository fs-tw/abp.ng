/**
 * @fileoverview added by tsickle
 * Generated from: lib/guards/permission.guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import snq from 'snq';
import { RestOccurError } from '../actions';
import { ConfigState } from '../states';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
var PermissionGuard = /** @class */ (function () {
    function PermissionGuard(store) {
        this.store = store;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    PermissionGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        var _this = this;
        /** @type {?} */
        var resource = snq((/**
         * @return {?}
         */
        function () { return route.data.routes.requiredPolicy; })) || snq((/**
         * @return {?}
         */
        function () { return (/** @type {?} */ (route.data.requiredPolicy)); }));
        if (!resource) {
            resource = snq((/**
             * @return {?}
             */
            function () {
                return route.routeConfig.children.find((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return state.url.indexOf(child.path) > -1; })).data
                    .requiredPolicy;
            }));
            if (!resource) {
                return of(true);
            }
        }
        return this.store.select(ConfigState.getGrantedPolicy(resource)).pipe(tap((/**
         * @param {?} access
         * @return {?}
         */
        function (access) {
            if (!access) {
                _this.store.dispatch(new RestOccurError({ status: 403 }));
            }
        })));
    };
    PermissionGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    PermissionGuard.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ PermissionGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PermissionGuard_Factory() { return new PermissionGuard(i0.ɵɵinject(i1.Store)); }, token: PermissionGuard, providedIn: "root" });
    return PermissionGuard;
}());
export { PermissionGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PermissionGuard.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9ndWFyZHMvcGVybWlzc2lvbi5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7QUFFeEM7SUFJRSx5QkFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDOzs7Ozs7SUFFcEMscUNBQVc7Ozs7O0lBQVgsVUFBWSxLQUE2QixFQUFFLEtBQTBCO1FBQXJFLGlCQXNCQzs7WUFyQkssUUFBUSxHQUNWLEdBQUc7OztRQUFDLGNBQU0sT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQWhDLENBQWdDLEVBQUMsSUFBSSxHQUFHOzs7UUFBQyxxQkFBTSxtQkFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBVSxHQUFBLEVBQUM7UUFDL0YsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLFFBQVEsR0FBRyxHQUFHOzs7WUFDWjtnQkFDRSxPQUFBLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUk7Ozs7Z0JBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQWxDLENBQWtDLEVBQUMsQ0FBQyxJQUFJO3FCQUM5RSxjQUFjO1lBRGpCLENBQ2lCLEVBQ3BCLENBQUM7WUFFRixJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDbkUsR0FBRzs7OztRQUFDLFVBQUEsTUFBTTtZQUNSLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzFEO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQTVCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVRRLEtBQUs7OzswQkFGZDtDQXNDQyxBQTdCRCxJQTZCQztTQTFCWSxlQUFlOzs7Ozs7SUFDZCxnQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBSZXN0T2NjdXJFcnJvciB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIGxldCByZXNvdXJjZSA9XHJcbiAgICAgIHNucSgoKSA9PiByb3V0ZS5kYXRhLnJvdXRlcy5yZXF1aXJlZFBvbGljeSkgfHwgc25xKCgpID0+IHJvdXRlLmRhdGEucmVxdWlyZWRQb2xpY3kgYXMgc3RyaW5nKTtcclxuICAgIGlmICghcmVzb3VyY2UpIHtcclxuICAgICAgcmVzb3VyY2UgPSBzbnEoXHJcbiAgICAgICAgKCkgPT5cclxuICAgICAgICAgIHJvdXRlLnJvdXRlQ29uZmlnLmNoaWxkcmVuLmZpbmQoY2hpbGQgPT4gc3RhdGUudXJsLmluZGV4T2YoY2hpbGQucGF0aCkgPiAtMSkuZGF0YVxyXG4gICAgICAgICAgICAucmVxdWlyZWRQb2xpY3ksXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoIXJlc291cmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIG9mKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KENvbmZpZ1N0YXRlLmdldEdyYW50ZWRQb2xpY3kocmVzb3VyY2UpKS5waXBlKFxyXG4gICAgICB0YXAoYWNjZXNzID0+IHtcclxuICAgICAgICBpZiAoIWFjY2Vzcykge1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgUmVzdE9jY3VyRXJyb3IoeyBzdGF0dXM6IDQwMyB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==