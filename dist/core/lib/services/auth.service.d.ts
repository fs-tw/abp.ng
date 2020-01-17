import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
export declare class AuthService {
    private rest;
    private oAuthService;
    private store;
    private options;
    constructor(rest: RestService, oAuthService: OAuthService, store: Store, options: any);
    login(username: string, password: string): Observable<any>;
}
