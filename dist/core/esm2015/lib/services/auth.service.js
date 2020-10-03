import { __awaiter } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { from } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import snq from 'snq';
import { GetAppConfiguration, SetEnvironment } from '../actions/config.actions';
import { ConfigState } from '../states/config.state';
import { SessionState } from '../states/session.state';
import { AUTH_FLOW_STRATEGY } from '../strategies/auth-flow.strategy';
import { RestService } from './rest.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
import * as i2 from "./rest.service";
import * as i3 from "angular-oauth2-oidc";
export class AuthService {
    constructor(actions, injector, rest, oAuthService, store, options) {
        this.actions = actions;
        this.injector = injector;
        this.rest = rest;
        this.oAuthService = oAuthService;
        this.store = store;
        this.options = options;
        this.setStrategy = () => {
            const flow = this.store.selectSnapshot(ConfigState.getDeep('environment.oAuthConfig.responseType')) ||
                'password';
            if (this.flow === flow)
                return;
            if (this.strategy)
                this.strategy.destroy();
            this.flow = flow;
            this.strategy =
                this.flow === 'code'
                    ? AUTH_FLOW_STRATEGY.Code(this.injector)
                    : AUTH_FLOW_STRATEGY.Password(this.injector);
        };
        this.setStrategy();
        this.listenToSetEnvironment();
    }
    get isInternalAuth() {
        return this.strategy.isInternalAuth;
    }
    listenToSetEnvironment() {
        this.actions.pipe(ofActionSuccessful(SetEnvironment)).subscribe(this.setStrategy);
    }
    login(username, password) {
        const tenant = this.store.selectSnapshot(SessionState.getTenant);
        return from(this.oAuthService.fetchTokenUsingPasswordFlow(username, password, new HttpHeaders(Object.assign({}, (tenant && tenant.id && { __tenant: tenant.id }))))).pipe(switchMap(() => this.store.dispatch(new GetAppConfiguration())), tap(() => {
            const redirectUrl = snq(() => window.history.state.redirectUrl) || (this.options || {}).redirectUrl || '/';
            this.store.dispatch(new Navigate([redirectUrl]));
        }), take(1));
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.strategy.init();
        });
    }
    logout() {
        return this.strategy.logout();
    }
    initLogin() {
        this.strategy.login();
    }
}
AuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i2.RestService), i0.ɵɵinject(i3.OAuthService), i0.ɵɵinject(i1.Store), i0.ɵɵinject("ACCOUNT_OPTIONS", 8)); }, token: AuthService, providedIn: "root" });
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AuthService.ctorParameters = () => [
    { type: Actions },
    { type: Injector },
    { type: RestService },
    { type: OAuthService },
    { type: Store },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['ACCOUNT_OPTIONS',] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsSUFBSSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQW9CLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUs3QyxNQUFNLE9BQU8sV0FBVztJQVF0QixZQUNVLE9BQWdCLEVBQ2hCLFFBQWtCLEVBQ2xCLElBQWlCLEVBQ2pCLFlBQTBCLEVBQzFCLEtBQVksRUFDMkIsT0FBWTtRQUxuRCxZQUFPLEdBQVAsT0FB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LFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQWJRLE9BQU87WUFGYSxRQUFRO1lBVzVCLFdBQVc7WUFSWCxZQUFZO1lBRGlCLEtBQUs7NENBNEJ0QyxRQUFRLFlBQUksTUFBTSxTQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZSB9IGZyb20gJ0BuZ3hzL3JvdXRlci1wbHVnaW4nO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBvZkFjdGlvblN1Y2Nlc3NmdWwsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBHZXRBcHBDb25maWd1cmF0aW9uLCBTZXRFbnZpcm9ubWVudCB9IGZyb20gJy4uL2FjdGlvbnMvY29uZmlnLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9jb25maWcuc3RhdGUnO1xyXG5pbXBvcnQgeyBTZXNzaW9uU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvc2Vzc2lvbi5zdGF0ZSc7XHJcbmltcG9ydCB7IEF1dGhGbG93U3RyYXRlZ3ksIEFVVEhfRkxPV19TVFJBVEVHWSB9IGZyb20gJy4uL3N0cmF0ZWdpZXMvYXV0aC1mbG93LnN0cmF0ZWd5JztcclxuaW1wb3J0IHsgUmVzdFNlcnZpY2UgfSBmcm9tICcuL3Jlc3Quc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgZmxvdzogc3RyaW5nO1xyXG4gIHByaXZhdGUgc3RyYXRlZ3k6IEF1dGhGbG93U3RyYXRlZ3k7XHJcblxyXG4gIGdldCBpc0ludGVybmFsQXV0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0cmF0ZWd5LmlzSW50ZXJuYWxBdXRoO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFjdGlvbnM6IEFjdGlvbnMsXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgcmVzdDogUmVzdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG9BdXRoU2VydmljZTogT0F1dGhTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KCdBQ0NPVU5UX09QVElPTlMnKSBwcml2YXRlIG9wdGlvbnM6IGFueSxcclxuICApIHtcclxuICAgIHRoaXMuc2V0U3RyYXRlZ3koKTtcclxuICAgIHRoaXMubGlzdGVuVG9TZXRFbnZpcm9ubWVudCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdHJhdGVneSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZsb3cgPVxyXG4gICAgICB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldERlZXAoJ2Vudmlyb25tZW50Lm9BdXRoQ29uZmlnLnJlc3BvbnNlVHlwZScpKSB8fFxyXG4gICAgICAncGFzc3dvcmQnO1xyXG4gICAgaWYgKHRoaXMuZmxvdyA9PT0gZmxvdykgcmV0dXJuO1xyXG5cclxuICAgIGlmICh0aGlzLnN0cmF0ZWd5KSB0aGlzLnN0cmF0ZWd5LmRlc3Ryb3koKTtcclxuXHJcbiAgICB0aGlzLmZsb3cgPSBmbG93O1xyXG4gICAgdGhpcy5zdHJhdGVneSA9XHJcbiAgICAgIHRoaXMuZmxvdyA9PT0gJ2NvZGUnXHJcbiAgICAgICAgPyBBVVRIX0ZMT1dfU1RSQVRFR1kuQ29kZSh0aGlzLmluamVjdG9yKVxyXG4gICAgICAgIDogQVVUSF9GTE9XX1NUUkFURUdZLlBhc3N3b3JkKHRoaXMuaW5qZWN0b3IpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuVG9TZXRFbnZpcm9ubWVudCgpIHtcclxuICAgIHRoaXMuYWN0aW9ucy5waXBlKG9mQWN0aW9uU3VjY2Vzc2Z1bChTZXRFbnZpcm9ubWVudCkpLnN1YnNjcmliZSh0aGlzLnNldFN0cmF0ZWd5KTtcclxuICB9XHJcblxyXG4gIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgdGVuYW50ID0gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChTZXNzaW9uU3RhdGUuZ2V0VGVuYW50KTtcclxuXHJcbiAgICByZXR1cm4gZnJvbShcclxuICAgICAgdGhpcy5vQXV0aFNlcnZpY2UuZmV0Y2hUb2tlblVzaW5nUGFzc3dvcmRGbG93KFxyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIG5ldyBIdHRwSGVhZGVycyh7IC4uLih0ZW5hbnQgJiYgdGVuYW50LmlkICYmIHsgX190ZW5hbnQ6IHRlbmFudC5pZCB9KSB9KSxcclxuICAgICAgKSxcclxuICAgICkucGlwZShcclxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEFwcENvbmZpZ3VyYXRpb24oKSkpLFxyXG4gICAgICB0YXAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZGlyZWN0VXJsID1cclxuICAgICAgICAgIHNucSgoKSA9PiB3aW5kb3cuaGlzdG9yeS5zdGF0ZS5yZWRpcmVjdFVybCkgfHwgKHRoaXMub3B0aW9ucyB8fCB7fSkucmVkaXJlY3RVcmwgfHwgJy8nO1xyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IE5hdmlnYXRlKFtyZWRpcmVjdFVybF0pKTtcclxuICAgICAgfSksXHJcbiAgICAgIHRha2UoMSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaW5pdCgpIHtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLnN0cmF0ZWd5LmluaXQoKTtcclxuICB9XHJcblxyXG4gIGxvZ291dCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kubG9nb3V0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0TG9naW4oKSB7XHJcbiAgICB0aGlzLnN0cmF0ZWd5LmxvZ2luKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==