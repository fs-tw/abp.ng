import { __decorate, __metadata } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Router, } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import * as i0 from "@angular/core";
import * as i1 from "angular-oauth2-oidc";
let AuthGuard = class AuthGuard {
    constructor(oauthService, injector) {
        this.oauthService = oauthService;
        this.injector = injector;
    }
    canActivate(_, state) {
        const router = this.injector.get(Router);
        const hasValidAccessToken = this.oauthService.hasValidAccessToken();
        if (hasValidAccessToken) {
            return hasValidAccessToken;
        }
        router.navigate(['/account/login'], { state: { redirectUrl: state.url } });
        return true;
    }
};
AuthGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(i0.ɵɵinject(i1.OAuthService), i0.ɵɵinject(i0.INJECTOR)); }, token: AuthGuard, providedIn: "root" });
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [OAuthService, Injector])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9ndWFyZHMvYXV0aC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUdMLE1BQU0sR0FHUCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBTW5ELElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7SUFDcEIsWUFBb0IsWUFBMEIsRUFBVSxRQUFrQjtRQUF0RCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDO0lBRTlFLFdBQVcsQ0FDVCxDQUF5QixFQUN6QixLQUEwQjtRQUUxQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV6QyxNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNwRSxJQUFJLG1CQUFtQixFQUFFO1lBQ3ZCLE9BQU8sbUJBQW1CLENBQUM7U0FDNUI7UUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUE7O0FBakJZLFNBQVM7SUFIckIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztxQ0FFa0MsWUFBWSxFQUFvQixRQUFRO0dBRC9ELFNBQVMsQ0FpQnJCO1NBakJZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgQ2FuQWN0aXZhdGUsXHJcbiAgUm91dGVyLFxyXG4gIFJvdXRlclN0YXRlU25hcHNob3QsXHJcbiAgVXJsVHJlZSxcclxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9hdXRoU2VydmljZTogT0F1dGhTZXJ2aWNlLCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cclxuXHJcbiAgY2FuQWN0aXZhdGUoXHJcbiAgICBfOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsXHJcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IGJvb2xlYW4gfCBVcmxUcmVlIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XHJcblxyXG4gICAgY29uc3QgaGFzVmFsaWRBY2Nlc3NUb2tlbiA9IHRoaXMub2F1dGhTZXJ2aWNlLmhhc1ZhbGlkQWNjZXNzVG9rZW4oKTtcclxuICAgIGlmIChoYXNWYWxpZEFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgIHJldHVybiBoYXNWYWxpZEFjY2Vzc1Rva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdXRlci5uYXZpZ2F0ZShbJy9hY2NvdW50L2xvZ2luJ10sIHsgc3RhdGU6IHsgcmVkaXJlY3RVcmw6IHN0YXRlLnVybCB9IH0pO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==