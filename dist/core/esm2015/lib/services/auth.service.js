import { __awaiter, __decorate, __metadata, __param } from "tslib";
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
let AuthService = class AuthService {
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
};
AuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i2.RestService), i0.ɵɵinject(i3.OAuthService), i0.ɵɵinject(i1.Store), i0.ɵɵinject("ACCOUNT_OPTIONS", 8)); }, token: AuthService, providedIn: "root" });
AuthService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(5, Optional()), __param(5, Inject('ACCOUNT_OPTIONS')),
    __metadata("design:paramtypes", [Actions,
        Injector,
        RestService,
        OAuthService,
        Store, Object])
], AuthService);
export { AuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsSUFBSSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQW9CLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUs3QyxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBUXRCLFlBQ1UsT0FBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsSUFBaUIsRUFDakIsWUFBMEIsRUFDMUIsS0FBWSxFQUMyQixPQUFZO1FBTG5ELFlB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Q0YsQ0FBQTs7QUF0RVksV0FBVztJQUh2QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBZUcsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUE7cUNBTHJCLE9BQU87UUFDTixRQUFRO1FBQ1osV0FBVztRQUNILFlBQVk7UUFDbkIsS0FBSztHQWJYLFdBQVcsQ0FzRXZCO1NBdEVZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGUgfSBmcm9tICdAbmd4cy9yb3V0ZXItcGx1Z2luJztcclxuaW1wb3J0IHsgQWN0aW9ucywgb2ZBY3Rpb25TdWNjZXNzZnVsLCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XHJcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgR2V0QXBwQ29uZmlndXJhdGlvbiwgU2V0RW52aXJvbm1lbnQgfSBmcm9tICcuLi9hY3Rpb25zL2NvbmZpZy5hY3Rpb25zJztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvY29uZmlnLnN0YXRlJztcclxuaW1wb3J0IHsgU2Vzc2lvblN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL3Nlc3Npb24uc3RhdGUnO1xyXG5pbXBvcnQgeyBBdXRoRmxvd1N0cmF0ZWd5LCBBVVRIX0ZMT1dfU1RSQVRFR1kgfSBmcm9tICcuLi9zdHJhdGVnaWVzL2F1dGgtZmxvdy5zdHJhdGVneSc7XHJcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBwcml2YXRlIGZsb3c6IHN0cmluZztcclxuICBwcml2YXRlIHN0cmF0ZWd5OiBBdXRoRmxvd1N0cmF0ZWd5O1xyXG5cclxuICBnZXQgaXNJbnRlcm5hbEF1dGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5pc0ludGVybmFsQXV0aDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhY3Rpb25zOiBBY3Rpb25zLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIHJlc3Q6IFJlc3RTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBvQXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdCgnQUNDT1VOVF9PUFRJT05TJykgcHJpdmF0ZSBvcHRpb25zOiBhbnksXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNldFN0cmF0ZWd5KCk7XHJcbiAgICB0aGlzLmxpc3RlblRvU2V0RW52aXJvbm1lbnQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3RyYXRlZ3kgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmbG93ID1cclxuICAgICAgdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXREZWVwKCdlbnZpcm9ubWVudC5vQXV0aENvbmZpZy5yZXNwb25zZVR5cGUnKSkgfHxcclxuICAgICAgJ3Bhc3N3b3JkJztcclxuICAgIGlmICh0aGlzLmZsb3cgPT09IGZsb3cpIHJldHVybjtcclxuXHJcbiAgICBpZiAodGhpcy5zdHJhdGVneSkgdGhpcy5zdHJhdGVneS5kZXN0cm95KCk7XHJcblxyXG4gICAgdGhpcy5mbG93ID0gZmxvdztcclxuICAgIHRoaXMuc3RyYXRlZ3kgPVxyXG4gICAgICB0aGlzLmZsb3cgPT09ICdjb2RlJ1xyXG4gICAgICAgID8gQVVUSF9GTE9XX1NUUkFURUdZLkNvZGUodGhpcy5pbmplY3RvcilcclxuICAgICAgICA6IEFVVEhfRkxPV19TVFJBVEVHWS5QYXNzd29yZCh0aGlzLmluamVjdG9yKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGxpc3RlblRvU2V0RW52aXJvbm1lbnQoKSB7XHJcbiAgICB0aGlzLmFjdGlvbnMucGlwZShvZkFjdGlvblN1Y2Nlc3NmdWwoU2V0RW52aXJvbm1lbnQpKS5zdWJzY3JpYmUodGhpcy5zZXRTdHJhdGVneSk7XHJcbiAgfVxyXG5cclxuICBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IHRlbmFudCA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlLmdldFRlbmFudCk7XHJcblxyXG4gICAgcmV0dXJuIGZyb20oXHJcbiAgICAgIHRoaXMub0F1dGhTZXJ2aWNlLmZldGNoVG9rZW5Vc2luZ1Bhc3N3b3JkRmxvdyhcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICBuZXcgSHR0cEhlYWRlcnMoeyAuLi4odGVuYW50ICYmIHRlbmFudC5pZCAmJiB7IF9fdGVuYW50OiB0ZW5hbnQuaWQgfSkgfSksXHJcbiAgICAgICksXHJcbiAgICApLnBpcGUoXHJcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRBcHBDb25maWd1cmF0aW9uKCkpKSxcclxuICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICBjb25zdCByZWRpcmVjdFVybCA9XHJcbiAgICAgICAgICBzbnEoKCkgPT4gd2luZG93Lmhpc3Rvcnkuc3RhdGUucmVkaXJlY3RVcmwpIHx8ICh0aGlzLm9wdGlvbnMgfHwge30pLnJlZGlyZWN0VXJsIHx8ICcvJztcclxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBOYXZpZ2F0ZShbcmVkaXJlY3RVcmxdKSk7XHJcbiAgICAgIH0pLFxyXG4gICAgICB0YWtlKDEpLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGluaXQoKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5zdHJhdGVneS5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnN0cmF0ZWd5LmxvZ291dCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdExvZ2luKCkge1xyXG4gICAgdGhpcy5zdHJhdGVneS5sb2dpbigpO1xyXG4gIH1cclxufVxyXG4iXX0=