import { Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
export declare class AuthGuard implements CanActivate {
    private oauthService;
    private injector;
    constructor(oauthService: OAuthService, injector: Injector);
    canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean | UrlTree;
}
