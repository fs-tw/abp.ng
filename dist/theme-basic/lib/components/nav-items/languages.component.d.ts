import { OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ApplicationConfiguration } from '@abp/ng.core';
import { Observable } from 'rxjs';
export declare class LanguagesComponent implements OnInit {
    private store;
    get smallScreen(): boolean;
    languages$: Observable<ApplicationConfiguration.Language[]>;
    get defaultLanguage$(): Observable<string>;
    get dropdownLanguages$(): Observable<ApplicationConfiguration.Language[]>;
    get selectedLangCulture(): string;
    constructor(store: Store);
    ngOnInit(): void;
    onChangeLang(cultureName: string): void;
}
