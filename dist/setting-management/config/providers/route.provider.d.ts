import { RoutesService, SettingTabsService } from '@abp/ng.core';
export declare const SETTING_MANAGEMENT_ROUTE_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof hideRoutes;
    deps: (typeof RoutesService | typeof SettingTabsService)[];
    multi: boolean;
}[];
export declare function configureRoutes(routes: RoutesService): () => void;
export declare function hideRoutes(routes: RoutesService, tabs: SettingTabsService): () => void;
