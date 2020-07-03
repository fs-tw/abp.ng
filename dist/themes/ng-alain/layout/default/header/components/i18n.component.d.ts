import { SettingsService } from '@delon/theme';
import { I18NService } from '@fs/ng-alain/core';
import { Observable } from 'rxjs';
import { ApplicationConfiguration } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import * as i0 from "@angular/core";
export declare class HeaderI18nComponent {
    private settings;
    private i18n;
    private doc;
    private store;
    languages$: Observable<ApplicationConfiguration.Language[]>;
    get defaultLanguage$(): Observable<string>;
    get dropdownLanguages$(): Observable<ApplicationConfiguration.Language[]>;
    get selectedLangCulture(): string;
    /** Whether to display language text */
    showLangText: boolean;
    get langs(): {
        code: string;
        text: string;
        abbr: string;
    }[];
    get curLangCode(): string;
    constructor(settings: SettingsService, i18n: I18NService, doc: any, store: Store);
    onChangeLang(cultureName: string): void;
    static ɵfac: i0.ɵɵFactoryDef<HeaderI18nComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<HeaderI18nComponent, "header-i18n", never, { "showLangText": "showLangText"; }, {}, never, never>;
}
