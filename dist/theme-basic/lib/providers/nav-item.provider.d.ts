import { NavItemsService } from '@abp/ng.theme.shared';
export declare const BASIC_THEME_NAV_ITEM_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof configureNavItems;
    deps: (typeof NavItemsService)[];
    multi: boolean;
}[];
export declare function configureNavItems(navItems: NavItemsService): () => void;
