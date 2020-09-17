import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RoutesService } from '../services/routes.service';
export declare class PermissionGuard implements CanActivate {
    private router;
    private routes;
    private store;
    constructor(router: Router, routes: RoutesService, store: Store);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
}
