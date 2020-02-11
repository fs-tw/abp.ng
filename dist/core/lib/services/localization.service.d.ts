import { NgZone } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Config } from '../models/config';
declare type ShouldReuseRoute = (future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot) => boolean;
export declare class LocalizationService {
    private store;
    private router;
    private ngZone;
    /**
     * Returns currently selected language
     */
    readonly currentLang: string;
    constructor(store: Store, router: Router, ngZone: NgZone, otherInstance: LocalizationService);
    setRouteReuse(reuse: ShouldReuseRoute): void;
    registerLocale(locale: string): Promise<void>;
    /**
     * Returns an observable localized text with the given interpolation parameters in current language.
     * @param key Localizaton key to replace with localized text
     * @param interpolateParams Values to interpolate
     */
    get(key: string | Config.LocalizationWithDefault, ...interpolateParams: string[]): Observable<string>;
    /**
     * Returns localized text with the given interpolation parameters in current language.
     * @param key Localization key to replace with localized text
     * @param interpolateParams Values to intepolate.
     */
    instant(key: string | Config.LocalizationWithDefault, ...interpolateParams: string[]): string;
}
export {};
