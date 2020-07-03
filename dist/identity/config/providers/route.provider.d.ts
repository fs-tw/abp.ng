import { RoutesService } from '@abp/ng.core';
export declare const IDENTITY_ROUTE_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof configureRoutes;
    deps: (typeof RoutesService)[];
    multi: boolean;
}[];
export declare function configureRoutes(routes: RoutesService): () => void;
