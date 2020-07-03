import { RoutesService } from '@abp/ng.core';
export declare const ROUTE_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof configureRoutes;
    deps: (typeof RoutesService)[];
    multi: boolean;
}[];
declare function configureRoutes(routes: RoutesService): () => void;
export {};
