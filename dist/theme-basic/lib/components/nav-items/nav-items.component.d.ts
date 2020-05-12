import { AfterViewInit, TrackByFunction, TemplateRef, OnDestroy } from '@angular/core';
import { ABP, AuthService, ApplicationConfiguration } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Layout } from '../../models/layout';
export declare class NavItemsComponent implements AfterViewInit, OnDestroy {
    private store;
    private authService;
    navElements$: Observable<Layout.NavigationElement[]>;
    currentUser$: Observable<ApplicationConfiguration.CurrentUser>;
    languages$: Observable<ApplicationConfiguration.Language[]>;
    currentUserRef: TemplateRef<any>;
    languageRef: TemplateRef<any>;
    smallScreen: boolean;
    rightPartElements: TemplateRef<any>[];
    trackByFn: TrackByFunction<ABP.FullRoute>;
    readonly defaultLanguage$: Observable<string>;
    readonly dropdownLanguages$: Observable<ApplicationConfiguration.Language[]>;
    readonly selectedLangCulture: string;
    constructor(store: Store, authService: AuthService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onChangeLang(cultureName: string): void;
    logout(): void;
}
