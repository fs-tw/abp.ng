import { __decorate, __metadata, __param } from "tslib";
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
let AuthService = class AuthService {
    constructor(rest, oAuthService, store, options) {
        this.rest = rest;
        this.oAuthService = oAuthService;
        this.store = store;
        this.options = options;
        this.oAuthService.configure(this.store.selectSnapshot(ConfigState.getOne('environment')).oAuthConfig);
    }
    login(username, password) {
        const tenant = this.store.selectSnapshot(SessionState.getTenant);
        return from(this.oAuthService.loadDiscoveryDocument()).pipe(switchMap(() => from(this.oAuthService.fetchTokenUsingPasswordFlow(username, password, new HttpHeaders(Object.assign({}, (tenant && tenant.id && { __tenant: tenant.id })))))), switchMap(() => this.store.dispatch(new GetAppConfiguration())), tap(() => {
            const redirectUrl = snq(() => window.history.state.redirectUrl) || (this.options || {}).redirectUrl || '/';
            this.store.dispatch(new Navigate([redirectUrl]));
        }), take(1));
    }
    logout() {
        const issuer = this.store.selectSnapshot(ConfigState.getDeep('environment.oAuthConfig.issuer'));
        return this.rest
            .request({
            method: 'GET',
            url: '/api/account/logout',
        }, null, issuer)
            .pipe(switchMap(() => {
            this.oAuthService.logOut(true);
            return this.store.dispatch(new GetAppConfiguration());
        }));
    }
};
AuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.RestService), i0.ɵɵinject(i2.OAuthService), i0.ɵɵinject(i3.Store), i0.ɵɵinject("ACCOUNT_OPTIONS", 8)); }, token: AuthService, providedIn: "root" });
AuthService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(3, Optional()), __param(3, Inject('ACCOUNT_OPTIONS')),
    __metadata("design:paramtypes", [RestService,
        OAuthService,
        Store, Object])
], AuthService);
export { AuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBS3JELElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFDdEIsWUFDVSxJQUFpQixFQUNqQixZQUEwQixFQUMxQixLQUFZLEVBQzJCLE9BQVk7UUFIbkQsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQzJCLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFFM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQ3pFLENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7UUFDdEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWpFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDekQsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUNiLElBQUksQ0FDRixJQUFJLENBQUMsWUFBWSxDQUFDLDJCQUEyQixDQUMzQyxRQUFRLEVBQ1IsUUFBUSxFQUNSLElBQUksV0FBVyxtQkFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQ3pFLENBQ0YsQ0FDRixFQUNELFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxFQUMvRCxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1AsTUFBTSxXQUFXLEdBQ2YsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxFQUNGLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUixDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUVoRyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsT0FBTyxDQUNOO1lBQ0UsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUscUJBQXFCO1NBQzNCLEVBQ0QsSUFBSSxFQUNKLE1BQU0sQ0FDUDthQUNBLElBQUksQ0FDSCxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQztDQUNGLENBQUE7O0FBdERZLFdBQVc7SUFIdkIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQU1HLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO3FDQUh4QixXQUFXO1FBQ0gsWUFBWTtRQUNuQixLQUFLO0dBSlgsV0FBVyxDQXNEdkI7U0F0RFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRlIH0gZnJvbSAnQG5neHMvcm91dGVyLXBsdWdpbic7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRhcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBHZXRBcHBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9jb25maWcuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFNlc3Npb25TdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9zZXNzaW9uLnN0YXRlJztcclxuaW1wb3J0IHsgUmVzdFNlcnZpY2UgfSBmcm9tICcuL3Jlc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL2NvbmZpZy5zdGF0ZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZXN0OiBSZXN0U2VydmljZSxcclxuICAgIHByaXZhdGUgb0F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoJ0FDQ09VTlRfT1BUSU9OUycpIHByaXZhdGUgb3B0aW9uczogYW55LFxyXG4gICkge1xyXG4gICAgdGhpcy5vQXV0aFNlcnZpY2UuY29uZmlndXJlKFxyXG4gICAgICB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldE9uZSgnZW52aXJvbm1lbnQnKSkub0F1dGhDb25maWcsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB0ZW5hbnQgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZS5nZXRUZW5hbnQpO1xyXG5cclxuICAgIHJldHVybiBmcm9tKHRoaXMub0F1dGhTZXJ2aWNlLmxvYWREaXNjb3ZlcnlEb2N1bWVudCgpKS5waXBlKFxyXG4gICAgICBzd2l0Y2hNYXAoKCkgPT5cclxuICAgICAgICBmcm9tKFxyXG4gICAgICAgICAgdGhpcy5vQXV0aFNlcnZpY2UuZmV0Y2hUb2tlblVzaW5nUGFzc3dvcmRGbG93KFxyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIG5ldyBIdHRwSGVhZGVycyh7IC4uLih0ZW5hbnQgJiYgdGVuYW50LmlkICYmIHsgX190ZW5hbnQ6IHRlbmFudC5pZCB9KSB9KSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgKSxcclxuICAgICAgKSxcclxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEFwcENvbmZpZ3VyYXRpb24oKSkpLFxyXG4gICAgICB0YXAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZGlyZWN0VXJsID1cclxuICAgICAgICAgIHNucSgoKSA9PiB3aW5kb3cuaGlzdG9yeS5zdGF0ZS5yZWRpcmVjdFVybCkgfHwgKHRoaXMub3B0aW9ucyB8fCB7fSkucmVkaXJlY3RVcmwgfHwgJy8nO1xyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IE5hdmlnYXRlKFtyZWRpcmVjdFVybF0pKTtcclxuICAgICAgfSksXHJcbiAgICAgIHRha2UoMSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgY29uc3QgaXNzdWVyID0gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXREZWVwKCdlbnZpcm9ubWVudC5vQXV0aENvbmZpZy5pc3N1ZXInKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdFxyXG4gICAgICAucmVxdWVzdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgdXJsOiAnL2FwaS9hY2NvdW50L2xvZ291dCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIGlzc3VlcixcclxuICAgICAgKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vQXV0aFNlcnZpY2UubG9nT3V0KHRydWUpO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEFwcENvbmZpZ3VyYXRpb24oKSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==