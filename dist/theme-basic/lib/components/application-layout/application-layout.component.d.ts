import { eLayoutType } from '@abp/ng.core';
import { AfterViewInit, OnDestroy } from '@angular/core';
import { eThemeBasicComponents } from '../../enums/components';
export declare class ApplicationLayoutComponent implements AfterViewInit, OnDestroy {
    static type: eLayoutType;
    isCollapsed: boolean;
    smallScreen: boolean;
    logoComponentKey: eThemeBasicComponents;
    routesComponentKey: eThemeBasicComponents;
    navItemsComponentKey: eThemeBasicComponents;
    private checkWindowWidth;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
