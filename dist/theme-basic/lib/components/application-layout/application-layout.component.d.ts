import { eLayoutType, SubscriptionService } from '@abp/ng.core';
import { AfterViewInit, OnDestroy } from '@angular/core';
import { eThemeBasicComponents } from '../../enums/components';
export declare class ApplicationLayoutComponent implements AfterViewInit, OnDestroy {
    private subscription;
    static type: eLayoutType;
    isCollapsed: boolean;
    smallScreen: boolean;
    logoComponentKey: eThemeBasicComponents;
    routesComponentKey: eThemeBasicComponents;
    navItemsComponentKey: eThemeBasicComponents;
    constructor(subscription: SubscriptionService);
    private checkWindowWidth;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
