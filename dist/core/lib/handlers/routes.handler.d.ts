import { Router } from '@angular/router';
import { RoutesService } from '../services/routes.service';
export declare class RoutesHandler {
    private routes;
    private router;
    constructor(routes: RoutesService, router: Router);
    addRoutes(): void;
}
