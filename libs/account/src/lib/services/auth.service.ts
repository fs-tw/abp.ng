import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { OAuthService } from 'angular-oauth2-oidc';
import { from, Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import snq from 'snq';
import { Router } from '@angular/router';
import {
  EnvironmentService, ConfigStateService,
  AbpApplicationConfigurationService, SessionStateService, AuthFlowStrategy,
  AUTH_FLOW_STRATEGY
} from '@abp/ng.core';
import { AuthPasswordFlowStrategy } from '../strategies/auth-flow.strategy'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private flow: string;
  private strategy: AuthFlowStrategy;

  constructor(
    private injector: Injector,
    private environment: EnvironmentService,
    private oAuthService: OAuthService,
    private abpApplicationConfigurationService: AbpApplicationConfigurationService,
    private router: Router,
    private sessionStateService: SessionStateService,
    private configStateService: ConfigStateService,
    @Optional() @Inject('ACCOUNT_OPTIONS') private options: any,
  ) {
    this.setStrategy();
    this.listenToSetEnvironment();
  }


  initLogin() {
    this.strategy.login();
  }

  private setStrategy = () => {
    const flow = this.environment.getEnvironment().oAuthConfig.responseType || 'password';
    if (this.flow === flow) return;
    if (this.strategy) this.strategy.destroy();
    this.flow = flow;
    if (flow === 'password') {
      this.strategy = new AuthPasswordFlowStrategy(this.injector);
    }
    else {
      this.strategy = AUTH_FLOW_STRATEGY.Code(this.injector);
    }

  };


  get isInternalAuth() {
    return this.strategy.isInternalAuth;
  }

  private listenToSetEnvironment() {
    this.environment.createOnUpdateStream(state => state.oAuthConfig).subscribe(this.setStrategy);
  }

  async init() {
    return await this.strategy.init();
  }

  logout(): Observable<any> {
    return this.strategy.logout()
  }

  login(username: string, password: string): Observable<any> {
    const tenant = this.sessionStateService.getTenant();

    return from(
      this.oAuthService.fetchTokenUsingPasswordFlow(
        username,
        password,
        new HttpHeaders({ ...(tenant && tenant.id && { __tenant: tenant.id }) }),
      ),
    ).pipe(
      switchMap(() => {
        return this.abpApplicationConfigurationService.get()
          .pipe(tap(x => this.configStateService.setState(x)))
      }),
      tap(() => {
        const redirectUrl =
          snq(() => window.history.state.redirectUrl) || (this.options || {}).redirectUrl || '/';
        this.router.navigateByUrl(redirectUrl)
      }),
      take(1),
    );

  }

}
