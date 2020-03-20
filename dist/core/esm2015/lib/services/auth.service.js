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
    /**
     * @return {?}
     */
    logout() {
        /** @type {?} */
        const issuer = this.store.selectSnapshot(ConfigState.getDeep('environment.oAuthConfig.issuer'));
        return this.rest
            .request({
            method: 'GET',
            url: '/api/account/logout',
        }, null, issuer)
            .pipe(switchMap((/**
         * @return {?}
         */
        () => {
            this.oAuthService.logOut();
            return this.store.dispatch(new GetAppConfiguration());
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDeEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQUtyRCxNQUFNLE9BQU8sV0FBVzs7Ozs7OztJQUN0QixZQUNVLElBQWlCLEVBQ2pCLFlBQTBCLEVBQzFCLEtBQVksRUFDMkIsT0FBWTtRQUhuRCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDMkIsWUFBTyxHQUFQLE9BQU8sQ0FBSztJQUMxRCxDQUFDOzs7Ozs7SUFFSixLQUFLLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjs7Y0FDaEMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFFaEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQ3pFLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3pELFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUNiLElBQUksQ0FDRixJQUFJLENBQUMsWUFBWSxDQUFDLDJCQUEyQixDQUMzQyxRQUFRLEVBQ1IsUUFBUSxFQUNSLElBQUksV0FBVyxtQkFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQ3pFLENBQ0YsRUFDRixFQUNELFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxFQUFDLEVBQy9ELEdBQUc7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ0QsV0FBVyxHQUNmLEdBQUc7OztZQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLElBQUksR0FBRztZQUN4RixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDLEVBQUMsRUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1IsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxNQUFNOztjQUNFLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFFL0YsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLE9BQU8sQ0FDTjtZQUNFLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLHFCQUFxQjtTQUMzQixFQUNELElBQUksRUFDSixNQUFNLENBQ1A7YUFDQSxJQUFJLENBQ0gsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELENBQUMsRUFBQyxDQUNILENBQUM7SUFDTixDQUFDOzs7WUF4REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEsV0FBVztZQU5YLFlBQVk7WUFEWixLQUFLOzRDQWtCVCxRQUFRLFlBQUksTUFBTSxTQUFDLGlCQUFpQjs7Ozs7Ozs7SUFIckMsMkJBQXlCOzs7OztJQUN6QixtQ0FBa0M7Ozs7O0lBQ2xDLDRCQUFvQjs7Ozs7SUFDcEIsOEJBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGUgfSBmcm9tICdAbmd4cy9yb3V0ZXItcGx1Z2luJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJ2FuZ3VsYXItb2F1dGgyLW9pZGMnO1xyXG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IEdldEFwcENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9hY3Rpb25zL2NvbmZpZy5hY3Rpb25zJztcclxuaW1wb3J0IHsgU2Vzc2lvblN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL3Nlc3Npb24uc3RhdGUnO1xyXG5pbXBvcnQgeyBSZXN0U2VydmljZSB9IGZyb20gJy4vcmVzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvY29uZmlnLnN0YXRlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlc3Q6IFJlc3RTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBvQXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdCgnQUNDT1VOVF9PUFRJT05TJykgcHJpdmF0ZSBvcHRpb25zOiBhbnksXHJcbiAgKSB7fVxyXG5cclxuICBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IHRlbmFudCA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlLmdldFRlbmFudCk7XHJcblxyXG4gICAgdGhpcy5vQXV0aFNlcnZpY2UuY29uZmlndXJlKFxyXG4gICAgICB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldE9uZSgnZW52aXJvbm1lbnQnKSkub0F1dGhDb25maWcsXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBmcm9tKHRoaXMub0F1dGhTZXJ2aWNlLmxvYWREaXNjb3ZlcnlEb2N1bWVudCgpKS5waXBlKFxyXG4gICAgICBzd2l0Y2hNYXAoKCkgPT5cclxuICAgICAgICBmcm9tKFxyXG4gICAgICAgICAgdGhpcy5vQXV0aFNlcnZpY2UuZmV0Y2hUb2tlblVzaW5nUGFzc3dvcmRGbG93KFxyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIG5ldyBIdHRwSGVhZGVycyh7IC4uLih0ZW5hbnQgJiYgdGVuYW50LmlkICYmIHsgX190ZW5hbnQ6IHRlbmFudC5pZCB9KSB9KSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgKSxcclxuICAgICAgKSxcclxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEFwcENvbmZpZ3VyYXRpb24oKSkpLFxyXG4gICAgICB0YXAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZGlyZWN0VXJsID1cclxuICAgICAgICAgIHNucSgoKSA9PiB3aW5kb3cuaGlzdG9yeS5zdGF0ZS5yZWRpcmVjdFVybCkgfHwgKHRoaXMub3B0aW9ucyB8fCB7fSkucmVkaXJlY3RVcmwgfHwgJy8nO1xyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IE5hdmlnYXRlKFtyZWRpcmVjdFVybF0pKTtcclxuICAgICAgfSksXHJcbiAgICAgIHRha2UoMSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgY29uc3QgaXNzdWVyID0gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXREZWVwKCdlbnZpcm9ubWVudC5vQXV0aENvbmZpZy5pc3N1ZXInKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdFxyXG4gICAgICAucmVxdWVzdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgdXJsOiAnL2FwaS9hY2NvdW50L2xvZ291dCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIGlzc3VlcixcclxuICAgICAgKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vQXV0aFNlcnZpY2UubG9nT3V0KCk7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0QXBwQ29uZmlndXJhdGlvbigpKTtcclxuICAgICAgICB9KSxcclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuIl19