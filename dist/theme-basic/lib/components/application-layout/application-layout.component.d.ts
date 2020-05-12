import { eLayoutType } from '@abp/ng.core';
import { AfterViewInit, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { eThemeBasicComponents } from '../../enums/components';
export declare class ApplicationLayoutComponent implements AfterViewInit, OnDestroy {
    private store;
    static type: eLayoutType;
    isDropdownChildDynamic: boolean;
    isCollapsed: boolean;
    smallScreen: boolean;
    logoComponentKey: eThemeBasicComponents;
    routesComponentKey: eThemeBasicComponents;
    navItemsComponentKey: eThemeBasicComponents;
    constructor(store: Store);
    private checkWindowWidth;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
