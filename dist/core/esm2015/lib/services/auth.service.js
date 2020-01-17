/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/auth.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { from } from 'rxjs';
import { switchMap, tap, take } from 'rxjs/operators';
import snq from 'snq';
import { GetAppConfiguration } from '../actions/config.actions';
import { SessionState } from '../states/session.state';
import { RestService } from './rest.service';
import { ConfigState } from '../states/config.state';
import * as i0 from "@angular/core";
import * as i1 from "./rest.service";
import * as i2 from "angular-oauth2-oidc";
import * as i3 from "@ngxs/store";
export class AuthService {
    /**
     * @param {?} rest
     * @param {?} oAuthService
     * @param {?} store
     * @param {?} options
     */
    constructor(rest, oAuthService, store, options) {
        this.rest = rest;
        this.oAuthService = oAuthService;
        this.store = store;
        this.options = options;
    }
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    login(username, password) {
        /** @type {?} */
        const tenant = this.store.selectSnapshot(SessionState.getTenant);
        this.oAuthService.configure(this.store.selectSnapshot(ConfigState.getOne('environment')).oAuthConfig);
        return from(this.oAuthService.loadDiscoveryDocument()).pipe(switchMap((/**
         * @return {?}
         */
        () => from(this.oAuthService.fetchTokenUsingPasswordFlow(username, password, new HttpHeaders(Object.assign({}, (tenant && tenant.id && { __tenant: tenant.id }))))))), switchMap((/**
         * @return {?}
         */
        () => this.store.dispatch(new GetAppConfiguration()))), tap((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const redirectUrl = snq((/**
             * @return {?}
             */
            () => window.history.state.redirectUrl)) || (this.options || {}).redirectUrl || '/';
            this.store.dispatch(new Navigate([redirectUrl]));
        })), take(1));
    }
}
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: RestService },
    { type: OAuthService },
    { type: Store },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['ACCOUNT_OPTIONS',] }] }
];
/** @nocollapse */ AuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.RestService), i0.ɵɵinject(i2.OAuthService), i0.ɵɵinject(i3.Store), i0.ɵɵinject("ACCOUNT_OPTIONS", 8)); }, token: AuthService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.rest;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.oAuthService;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDeEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQUtyRCxNQUFNLE9BQU8sV0FBVzs7Ozs7OztJQUN0QixZQUNVLElBQWlCLEVBQ2pCLFlBQTBCLEVBQzFCLEtBQVksRUFDMkIsT0FBWTtRQUhuRCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDMkIsWUFBTyxHQUFQLE9BQU8sQ0FBSztJQUMxRCxDQUFDOzs7Ozs7SUFFSixLQUFLLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjs7Y0FDaEMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFFaEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQ3pFLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3pELFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUNiLElBQUksQ0FDRixJQUFJLENBQUMsWUFBWSxDQUFDLDJCQUEyQixDQUMzQyxRQUFRLEVBQ1IsUUFBUSxFQUNSLElBQUksV0FBVyxtQkFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQ3pFLENBQ0YsRUFDRixFQUNELFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxFQUFDLEVBQy9ELEdBQUc7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ0QsV0FBVyxHQUNmLEdBQUc7OztZQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLElBQUksR0FBRztZQUN4RixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDLEVBQUMsRUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1IsQ0FBQztJQUNKLENBQUM7OztZQXBDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMUSxXQUFXO1lBTlgsWUFBWTtZQURaLEtBQUs7NENBa0JULFFBQVEsWUFBSSxNQUFNLFNBQUMsaUJBQWlCOzs7Ozs7OztJQUhyQywyQkFBeUI7Ozs7O0lBQ3pCLG1DQUFrQzs7Ozs7SUFDbEMsNEJBQW9COzs7OztJQUNwQiw4QkFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZSB9IGZyb20gJ0BuZ3hzL3JvdXRlci1wbHVnaW4nO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XHJcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgR2V0QXBwQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvY29uZmlnLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBTZXNzaW9uU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvc2Vzc2lvbi5zdGF0ZSc7XHJcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9jb25maWcuc3RhdGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVzdDogUmVzdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG9BdXRoU2VydmljZTogT0F1dGhTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KCdBQ0NPVU5UX09QVElPTlMnKSBwcml2YXRlIG9wdGlvbnM6IGFueSxcclxuICApIHt9XHJcblxyXG4gIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgdGVuYW50ID0gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChTZXNzaW9uU3RhdGUuZ2V0VGVuYW50KTtcclxuXHJcbiAgICB0aGlzLm9BdXRoU2VydmljZS5jb25maWd1cmUoXHJcbiAgICAgIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0T25lKCdlbnZpcm9ubWVudCcpKS5vQXV0aENvbmZpZyxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIGZyb20odGhpcy5vQXV0aFNlcnZpY2UubG9hZERpc2NvdmVyeURvY3VtZW50KCkpLnBpcGUoXHJcbiAgICAgIHN3aXRjaE1hcCgoKSA9PlxyXG4gICAgICAgIGZyb20oXHJcbiAgICAgICAgICB0aGlzLm9BdXRoU2VydmljZS5mZXRjaFRva2VuVXNpbmdQYXNzd29yZEZsb3coXHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgICAgbmV3IEh0dHBIZWFkZXJzKHsgLi4uKHRlbmFudCAmJiB0ZW5hbnQuaWQgJiYgeyBfX3RlbmFudDogdGVuYW50LmlkIH0pIH0pLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICApLFxyXG4gICAgICApLFxyXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0QXBwQ29uZmlndXJhdGlvbigpKSksXHJcbiAgICAgIHRhcCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVkaXJlY3RVcmwgPVxyXG4gICAgICAgICAgc25xKCgpID0+IHdpbmRvdy5oaXN0b3J5LnN0YXRlLnJlZGlyZWN0VXJsKSB8fCAodGhpcy5vcHRpb25zIHx8IHt9KS5yZWRpcmVjdFVybCB8fCAnLyc7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTmF2aWdhdGUoW3JlZGlyZWN0VXJsXSkpO1xyXG4gICAgICB9KSxcclxuICAgICAgdGFrZSgxKSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==