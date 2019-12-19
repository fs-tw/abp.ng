import { Store } from '@ngxs/store';
import { ApplicationConfiguration } from '@abp/ng.core';
import { Observable } from 'rxjs';
export declare class HeaderI18nComponent {
    private store;
    languages$: Observable<ApplicationConfiguration.Language[]>;
    readonly selectedLangCulture: string;
    readonly defaultLanguage$: Observable<string>;
    readonly dropdownLanguages$: Observable<ApplicationConfiguration.Language[]>;
    constructor(store: Store);
    onChangeLang(cultureName: string): void;
}
