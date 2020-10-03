import { Injector, NgZone } from '@angular/core';
import { Actions, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetLanguage } from '../actions/session.actions';
import { Config } from '../models/config';
export declare class LocalizationService {
    private actions;
    private store;
    private injector;
    private ngZone;
    /**
     * Returns currently selected language
     */
    get currentLang(): string;
    get languageChange(): Observable<SetLanguage>;
    constructor(actions: Actions, store: Store, injector: Injector, ngZone: NgZone, otherInstance: LocalizationService);
    private listenToSetLanguage;
    registerLocale(locale: string): Promise<void>;
    /**
     * Returns an observable localized text with the given interpolation parameters in current language.
     * @param key Localizaton key to replace with localized text
     * @param interpolateParams Values to interpolate
     */
    get(key: string | Config.LocalizationWithDefault, ...interpolateParams: string[]): Observable<string>;
    getResource(resourceName: string): Observable<{
        [key: string]: string;
    }>;
    /**
     * Returns localized text with the given interpolation parameters in current language.
     * @param key Localization key to replace with localized text
     * @param interpolateParams Values to intepolate.
     */
    instant(key: string | Config.LocalizationWithDefault, ...interpolateParams: string[]): string;
    localize(resourceName: string, key: string, defaultValue: string): Observable<string>;
    localizeSync(resourceName: string, key: string, defaultValue: string): string;
    localizeWithFallback(resourceNames: string[], keys: string[], defaultValue: string): Observable<string>;
    localizeWithFallbackSync(resourceNames: string[], keys: string[], defaultValue: string): string;
}
