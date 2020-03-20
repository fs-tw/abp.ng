/**
 * @fileoverview added by tsickle
 * Generated from: lib/guards/auth.guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { Router, } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import * as i0 from "@angular/core";
import * as i1 from "angular-oauth2-oidc";
var AuthGuard = /** @class */ (function () {
    function AuthGuard(oauthService, injector) {
        this.oauthService = oauthService;
        this.injector = injector;
    }
    /**
     * @param {?} _
     * @param {?} state
     * @return {?}
     */
    AuthGuard.prototype.canActivate = /**
     * @param {?} _
     * @param {?} state
     * @return {?}
     */
    function (_, state) {
        /** @type {?} */
        var router = this.injector.get(Router);
        /** @type {?} */
        var hasValidAccessToken = this.oauthService.hasValidAccessToken();
        if (hasValidAccessToken) {
            return hasValidAccessToken;
        }
        return router.createUrlTree(['/account/login'], { state: { redirectUrl: state.url } });
    };
    AuthGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: OAuthService },
        { type: Injector }
    ]; };
    /** @nocollapse */ AuthGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(i0.ɵɵinject(i1.OAuthService), i0.ɵɵinject(i0.INJECTOR)); }, token: AuthGuard, providedIn: "root" });
    return AuthGuard;
}());
export { AuthGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthGuard.prototype.oauthService;
    /**
     * @type {?}
     * @private
     */
    AuthGuard.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9ndWFyZHMvYXV0aC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFHTCxNQUFNLEdBR1AsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUduRDtJQUlFLG1CQUFvQixZQUEwQixFQUFVLFFBQWtCO1FBQXRELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7Ozs7OztJQUU5RSwrQkFBVzs7Ozs7SUFBWCxVQUNFLENBQXlCLEVBQ3pCLEtBQTBCOztZQUVwQixNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDOztZQUVsQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFO1FBQ25FLElBQUksbUJBQW1CLEVBQUU7WUFDdkIsT0FBTyxtQkFBbUIsQ0FBQztTQUM1QjtRQUVELE9BQU8sTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDOztnQkFsQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxZQUFZO2dCQVJBLFFBQVE7OztvQkFBN0I7Q0E4QkMsQUFuQkQsSUFtQkM7U0FoQlksU0FBUzs7Ozs7O0lBQ1IsaUNBQWtDOzs7OztJQUFFLDZCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICBDYW5BY3RpdmF0ZSxcclxuICBSb3V0ZXIsXHJcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcclxuICBVcmxUcmVlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJ2FuZ3VsYXItb2F1dGgyLW9pZGMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb2F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2UsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxyXG5cclxuICBjYW5BY3RpdmF0ZShcclxuICAgIF86IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCxcclxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgYm9vbGVhbiB8IFVybFRyZWUge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcclxuXHJcbiAgICBjb25zdCBoYXNWYWxpZEFjY2Vzc1Rva2VuID0gdGhpcy5vYXV0aFNlcnZpY2UuaGFzVmFsaWRBY2Nlc3NUb2tlbigpO1xyXG4gICAgaWYgKGhhc1ZhbGlkQWNjZXNzVG9rZW4pIHtcclxuICAgICAgcmV0dXJuIGhhc1ZhbGlkQWNjZXNzVG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJvdXRlci5jcmVhdGVVcmxUcmVlKFsnL2FjY291bnQvbG9naW4nXSwgeyBzdGF0ZTogeyByZWRpcmVjdFVybDogc3RhdGUudXJsIH0gfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==