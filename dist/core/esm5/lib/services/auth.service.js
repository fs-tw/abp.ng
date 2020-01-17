/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/auth.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var AuthService = /** @class */ (function () {
    function AuthService(rest, oAuthService, store, options) {
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
    AuthService.prototype.login = /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    function (username, password) {
        var _this = this;
        /** @type {?} */
        var tenant = this.store.selectSnapshot(SessionState.getTenant);
        this.oAuthService.configure(this.store.selectSnapshot(ConfigState.getOne('environment')).oAuthConfig);
        return from(this.oAuthService.loadDiscoveryDocument()).pipe(switchMap((/**
         * @return {?}
         */
        function () {
            return from(_this.oAuthService.fetchTokenUsingPasswordFlow(username, password, new HttpHeaders(tslib_1.__assign({}, (tenant && tenant.id && { __tenant: tenant.id })))));
        })), switchMap((/**
         * @return {?}
         */
        function () { return _this.store.dispatch(new GetAppConfiguration()); })), tap((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var redirectUrl = snq((/**
             * @return {?}
             */
            function () { return window.history.state.redirectUrl; })) || (_this.options || {}).redirectUrl || '/';
            _this.store.dispatch(new Navigate([redirectUrl]));
        })), take(1));
    };
    AuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: RestService },
        { type: OAuthService },
        { type: Store },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['ACCOUNT_OPTIONS',] }] }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.RestService), i0.ɵɵinject(i2.OAuthService), i0.ɵɵinject(i3.Store), i0.ɵɵinject("ACCOUNT_OPTIONS", 8)); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());
export { AuthService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsSUFBSSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFFckQ7SUFJRSxxQkFDVSxJQUFpQixFQUNqQixZQUEwQixFQUMxQixLQUFZLEVBQzJCLE9BQVk7UUFIbkQsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQzJCLFlBQU8sR0FBUCxPQUFPLENBQUs7SUFDMUQsQ0FBQzs7Ozs7O0lBRUosMkJBQUs7Ozs7O0lBQUwsVUFBTSxRQUFnQixFQUFFLFFBQWdCO1FBQXhDLGlCQXlCQzs7WUF4Qk8sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFFaEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQ3pFLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3pELFNBQVM7OztRQUFDO1lBQ1IsT0FBQSxJQUFJLENBQ0YsS0FBSSxDQUFDLFlBQVksQ0FBQywyQkFBMkIsQ0FDM0MsUUFBUSxFQUNSLFFBQVEsRUFDUixJQUFJLFdBQVcsc0JBQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUN6RSxDQUNGO1FBTkQsQ0FNQyxFQUNGLEVBQ0QsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxFQUE5QyxDQUE4QyxFQUFDLEVBQy9ELEdBQUc7OztRQUFDOztnQkFDSSxXQUFXLEdBQ2YsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBaEMsQ0FBZ0MsRUFBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLElBQUksR0FBRztZQUN4RixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDLEVBQUMsRUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1IsQ0FBQztJQUNKLENBQUM7O2dCQXBDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUxRLFdBQVc7Z0JBTlgsWUFBWTtnQkFEWixLQUFLO2dEQWtCVCxRQUFRLFlBQUksTUFBTSxTQUFDLGlCQUFpQjs7O3NCQXJCekM7Q0FrREMsQUFyQ0QsSUFxQ0M7U0FsQ1ksV0FBVzs7Ozs7O0lBRXBCLDJCQUF5Qjs7Ozs7SUFDekIsbUNBQWtDOzs7OztJQUNsQyw0QkFBb0I7Ozs7O0lBQ3BCLDhCQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRlIH0gZnJvbSAnQG5neHMvcm91dGVyLXBsdWdpbic7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRhcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBHZXRBcHBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9jb25maWcuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFNlc3Npb25TdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9zZXNzaW9uLnN0YXRlJztcclxuaW1wb3J0IHsgUmVzdFNlcnZpY2UgfSBmcm9tICcuL3Jlc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL2NvbmZpZy5zdGF0ZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZXN0OiBSZXN0U2VydmljZSxcclxuICAgIHByaXZhdGUgb0F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoJ0FDQ09VTlRfT1BUSU9OUycpIHByaXZhdGUgb3B0aW9uczogYW55LFxyXG4gICkge31cclxuXHJcbiAgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB0ZW5hbnQgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZS5nZXRUZW5hbnQpO1xyXG5cclxuICAgIHRoaXMub0F1dGhTZXJ2aWNlLmNvbmZpZ3VyZShcclxuICAgICAgdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRPbmUoJ2Vudmlyb25tZW50JykpLm9BdXRoQ29uZmlnLFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gZnJvbSh0aGlzLm9BdXRoU2VydmljZS5sb2FkRGlzY292ZXJ5RG9jdW1lbnQoKSkucGlwZShcclxuICAgICAgc3dpdGNoTWFwKCgpID0+XHJcbiAgICAgICAgZnJvbShcclxuICAgICAgICAgIHRoaXMub0F1dGhTZXJ2aWNlLmZldGNoVG9rZW5Vc2luZ1Bhc3N3b3JkRmxvdyhcclxuICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBuZXcgSHR0cEhlYWRlcnMoeyAuLi4odGVuYW50ICYmIHRlbmFudC5pZCAmJiB7IF9fdGVuYW50OiB0ZW5hbnQuaWQgfSkgfSksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICksXHJcbiAgICAgICksXHJcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRBcHBDb25maWd1cmF0aW9uKCkpKSxcclxuICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICBjb25zdCByZWRpcmVjdFVybCA9XHJcbiAgICAgICAgICBzbnEoKCkgPT4gd2luZG93Lmhpc3Rvcnkuc3RhdGUucmVkaXJlY3RVcmwpIHx8ICh0aGlzLm9wdGlvbnMgfHwge30pLnJlZGlyZWN0VXJsIHx8ICcvJztcclxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBOYXZpZ2F0ZShbcmVkaXJlY3RVcmxdKSk7XHJcbiAgICAgIH0pLFxyXG4gICAgICB0YWtlKDEpLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19