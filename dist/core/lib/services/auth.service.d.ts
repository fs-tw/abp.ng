import { Injector } from '@angular/core';
import { Actions, Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
export declare class AuthService {
    private actions;
    private injector;
    private rest;
    private oAuthService;
    private store;
    private options;
    private flow;
    private strategy;
    get isInternalAuth(): boolean;
    constructor(actions: Actions, injector: Injector, rest: RestService, oAuthService: OAuthService, store: Store, options: any);
    private setStrategy;
    private listenToSetEnvironment;
    login(username: string, password: string): Observable<any>;
    init(): Promise<any>;
    logout(): Observable<any>;
    initLogin(): void;
}
