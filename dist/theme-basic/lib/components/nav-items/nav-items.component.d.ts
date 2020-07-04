import { NavItem, NavItemsService } from '@abp/ng.theme.shared';
import { TrackByFunction } from '@angular/core';
export declare class NavItemsComponent {
    readonly navItems: NavItemsService;
    trackByFn: TrackByFunction<NavItem>;
    constructor(navItems: NavItemsService);
}
