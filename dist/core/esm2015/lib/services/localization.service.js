/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/localization.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector, NgZone, Optional, SkipSelf } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { noop } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetLanguage } from '../actions/session.actions';
import { ConfigState } from '../states/config.state';
import { registerLocale } from '../utils/initial-utils';
import { createLocalizer, createLocalizerWithFallback } from '../utils/localization-utils';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
export class LocalizationService {
    /**
     * @param {?} actions
     * @param {?} store
     * @param {?} injector
     * @param {?} ngZone
     * @param {?} otherInstance
     */
    constructor(actions, store, injector, ngZone, otherInstance) {
        this.actions = actions;
        this.store = store;
        this.injector = injector;
        this.ngZone = ngZone;
        if (otherInstance)
            throw new Error('LocalizationService should have only one instance.');
        this.listenToSetLanguage();
    }
    /**
     * Returns currently selected language
     * @return {?}
     */
    get currentLang() {
        return this.store.selectSnapshot((/**
         * @param {?} state
         * @return {?}
         */
        state => state.SessionState.language));
    }
    /**
     * @return {?}
     */
    get languageChange() {
        return this.actions.pipe(ofActionSuccessful(SetLanguage));
    }
    /**
     * @private
     * @return {?}
     */
    listenToSetLanguage() {
        this.languageChange.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ payload }) => this.registerLocale(payload)));
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    registerLocale(locale) {
        /** @type {?} */
        const router = this.injector.get(Router);
        const { shouldReuseRoute } = router.routeReuseStrategy;
        router.routeReuseStrategy.shouldReuseRoute = (/**
         * @return {?}
         */
        () => false);
        router.navigated = false;
        return registerLocale(locale).then((/**
         * @return {?}
         */
        () => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield router.navigateByUrl(router.url).catch(noop);
                router.routeReuseStrategy.shouldReuseRoute = shouldReuseRoute;
            })));
        }));
    }
    /**
     * Returns an observable localized text with the given interpolation parameters in current language.
     * @param {?} key Localizaton key to replace with localized text
     * @param {...?} interpolateParams Values to interpolate
     * @return {?}
     */
    get(key, ...interpolateParams) {
        return this.store.select(ConfigState.getLocalization(key, ...interpolateParams));
    }
    /**
     * Returns localized text with the given interpolation parameters in current language.
     * @param {?} key Localization key to replace with localized text
     * @param {...?} interpolateParams Values to intepolate.
     * @return {?}
     */
    instant(key, ...interpolateParams) {
        return this.store.selectSnapshot(ConfigState.getLocalization(key, ...interpolateParams));
    }
    /**
     * @param {?} resourceName
     * @param {?} key
     * @param {?} defaultValue
     * @return {?}
     */
    localize(resourceName, key, defaultValue) {
        return this.store.select(ConfigState.getOne('localization')).pipe(map(createLocalizer), map((/**
         * @param {?} localize
         * @return {?}
         */
        localize => localize(resourceName, key, defaultValue))));
    }
    /**
     * @param {?} resourceName
     * @param {?} key
     * @param {?} defaultValue
     * @return {?}
     */
    localizeSync(resourceName, key, defaultValue) {
        /** @type {?} */
        const localization = this.store.selectSnapshot(ConfigState.getOne('localization'));
        return createLocalizer(localization)(resourceName, key, defaultValue);
    }
    /**
     * @param {?} resourceNames
     * @param {?} keys
     * @param {?} defaultValue
     * @return {?}
     */
    localizeWithFallback(resourceNames, keys, defaultValue) {
        return this.store.select(ConfigState.getOne('localization')).pipe(map(createLocalizerWithFallback), map((/**
         * @param {?} localizeWithFallback
         * @return {?}
         */
        localizeWithFallback => localizeWithFallback(resourceNames, keys, defaultValue))));
    }
    /**
     * @param {?} resourceNames
     * @param {?} keys
     * @param {?} defaultValue
     * @return {?}
     */
    localizeWithFallbackSync(resourceNames, keys, defaultValue) {
        /** @type {?} */
        const localization = this.store.selectSnapshot(ConfigState.getOne('localization'));
        return createLocalizerWithFallback(localization)(resourceNames, keys, defaultValue);
    }
}
LocalizationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LocalizationService.ctorParameters = () => [
    { type: Actions },
    { type: Store },
    { type: Injector },
    { type: NgZone },
    { type: LocalizationService, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
/** @nocollapse */ LocalizationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LocalizationService_Factory() { return new LocalizationService(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i1.Store), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(LocalizationService, 12)); }, token: LocalizationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalizationService.prototype.actions;
    /**
     * @type {?}
     * @private
     */
    LocalizationService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    LocalizationService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    LocalizationService.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9jYWxpemF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUEwQixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRSxPQUFPLEVBQUUsSUFBSSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQUszRixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7OztJQVk5QixZQUNVLE9BQWdCLEVBQ2hCLEtBQVksRUFDWixRQUFrQixFQUNsQixNQUFjLEVBR3RCLGFBQWtDO1FBTjFCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUt0QixJQUFJLGFBQWE7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7UUFFekYsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENB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Q0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQy9ELEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxFQUNoQyxHQUFHOzs7O1FBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLEVBQUMsQ0FDckYsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFRCx3QkFBd0IsQ0FBQyxhQUF1QixFQUFFLElBQWMsRUFBRSxZQUFvQjs7Y0FDOUUsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbEYsT0FBTywyQkFBMkIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3RGLENBQUM7OztZQTVGRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBWHpCLE9BQU87WUFBc0IsS0FBSztZQUZ0QixRQUFRO1lBQUUsTUFBTTtZQWlDbEIsbUJBQW1CLHVCQUZqQyxRQUFRLFlBQ1IsUUFBUTs7Ozs7Ozs7SUFMVCxzQ0FBd0I7Ozs7O0lBQ3hCLG9DQUFvQjs7Ozs7SUFDcEIsdUNBQTBCOzs7OztJQUMxQixxQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgTmdab25lLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWN0aW9ucywgb2ZBY3Rpb25TdWNjZXNzZnVsLCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgbm9vcCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFNldExhbmd1YWdlIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9uLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnJztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvY29uZmlnLnN0YXRlJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJMb2NhbGUgfSBmcm9tICcuLi91dGlscy9pbml0aWFsLXV0aWxzJztcclxuaW1wb3J0IHsgY3JlYXRlTG9jYWxpemVyLCBjcmVhdGVMb2NhbGl6ZXJXaXRoRmFsbGJhY2sgfSBmcm9tICcuLi91dGlscy9sb2NhbGl6YXRpb24tdXRpbHMnO1xyXG5cclxudHlwZSBTaG91bGRSZXVzZVJvdXRlID0gKGZ1dHVyZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgY3VycjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkgPT4gYm9vbGVhbjtcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBMb2NhbGl6YXRpb25TZXJ2aWNlIHtcclxuICAvKipcclxuICAgKiBSZXR1cm5zIGN1cnJlbnRseSBzZWxlY3RlZCBsYW5ndWFnZVxyXG4gICAqL1xyXG4gIGdldCBjdXJyZW50TGFuZygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3Qoc3RhdGUgPT4gc3RhdGUuU2Vzc2lvblN0YXRlLmxhbmd1YWdlKTtcclxuICB9XHJcblxyXG4gIGdldCBsYW5ndWFnZUNoYW5nZSgpOiBPYnNlcnZhYmxlPFNldExhbmd1YWdlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25zLnBpcGUob2ZBY3Rpb25TdWNjZXNzZnVsKFNldExhbmd1YWdlKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYWN0aW9uczogQWN0aW9ucyxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBTa2lwU2VsZigpXHJcbiAgICBvdGhlckluc3RhbmNlOiBMb2NhbGl6YXRpb25TZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgaWYgKG90aGVySW5zdGFuY2UpIHRocm93IG5ldyBFcnJvcignTG9jYWxpemF0aW9uU2VydmljZSBzaG91bGQgaGF2ZSBvbmx5IG9uZSBpbnN0YW5jZS4nKTtcclxuXHJcbiAgICB0aGlzLmxpc3RlblRvU2V0TGFuZ3VhZ2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuVG9TZXRMYW5ndWFnZSgpIHtcclxuICAgIHRoaXMubGFuZ3VhZ2VDaGFuZ2Uuc3Vic2NyaWJlKCh7IHBheWxvYWQgfSkgPT4gdGhpcy5yZWdpc3RlckxvY2FsZShwYXlsb2FkKSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlckxvY2FsZShsb2NhbGU6IHN0cmluZykge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcclxuICAgIGNvbnN0IHsgc2hvdWxkUmV1c2VSb3V0ZSB9ID0gcm91dGVyLnJvdXRlUmV1c2VTdHJhdGVneTtcclxuICAgIHJvdXRlci5yb3V0ZVJldXNlU3RyYXRlZ3kuc2hvdWxkUmV1c2VSb3V0ZSA9ICgpID0+IGZhbHNlO1xyXG4gICAgcm91dGVyLm5hdmlnYXRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiByZWdpc3RlckxvY2FsZShsb2NhbGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IHJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJvdXRlci51cmwpLmNhdGNoKG5vb3ApO1xyXG4gICAgICAgIHJvdXRlci5yb3V0ZVJldXNlU3RyYXRlZ3kuc2hvdWxkUmV1c2VSb3V0ZSA9IHNob3VsZFJldXNlUm91dGU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgbG9jYWxpemVkIHRleHQgd2l0aCB0aGUgZ2l2ZW4gaW50ZXJwb2xhdGlvbiBwYXJhbWV0ZXJzIGluIGN1cnJlbnQgbGFuZ3VhZ2UuXHJcbiAgICogQHBhcmFtIGtleSBMb2NhbGl6YXRvbiBrZXkgdG8gcmVwbGFjZSB3aXRoIGxvY2FsaXplZCB0ZXh0XHJcbiAgICogQHBhcmFtIGludGVycG9sYXRlUGFyYW1zIFZhbHVlcyB0byBpbnRlcnBvbGF0ZVxyXG4gICAqL1xyXG4gIGdldChcclxuICAgIGtleTogc3RyaW5nIHwgQ29uZmlnLkxvY2FsaXphdGlvbldpdGhEZWZhdWx0LFxyXG4gICAgLi4uaW50ZXJwb2xhdGVQYXJhbXM6IHN0cmluZ1tdXHJcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChDb25maWdTdGF0ZS5nZXRMb2NhbGl6YXRpb24oa2V5LCAuLi5pbnRlcnBvbGF0ZVBhcmFtcykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBsb2NhbGl6ZWQgdGV4dCB3aXRoIHRoZSBnaXZlbiBpbnRlcnBvbGF0aW9uIHBhcmFtZXRlcnMgaW4gY3VycmVudCBsYW5ndWFnZS5cclxuICAgKiBAcGFyYW0ga2V5IExvY2FsaXphdGlvbiBrZXkgdG8gcmVwbGFjZSB3aXRoIGxvY2FsaXplZCB0ZXh0XHJcbiAgICogQHBhcmFtIGludGVycG9sYXRlUGFyYW1zIFZhbHVlcyB0byBpbnRlcG9sYXRlLlxyXG4gICAqL1xyXG4gIGluc3RhbnQoa2V5OiBzdHJpbmcgfCBDb25maWcuTG9jYWxpemF0aW9uV2l0aERlZmF1bHQsIC4uLmludGVycG9sYXRlUGFyYW1zOiBzdHJpbmdbXSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRMb2NhbGl6YXRpb24oa2V5LCAuLi5pbnRlcnBvbGF0ZVBhcmFtcykpO1xyXG4gIH1cclxuXHJcbiAgbG9jYWxpemUocmVzb3VyY2VOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoQ29uZmlnU3RhdGUuZ2V0T25lKCdsb2NhbGl6YXRpb24nKSkucGlwZShcclxuICAgICAgbWFwKGNyZWF0ZUxvY2FsaXplciksXHJcbiAgICAgIG1hcChsb2NhbGl6ZSA9PiBsb2NhbGl6ZShyZXNvdXJjZU5hbWUsIGtleSwgZGVmYXVsdFZhbHVlKSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbG9jYWxpemVTeW5jKHJlc291cmNlTmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbG9jYWxpemF0aW9uID0gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRPbmUoJ2xvY2FsaXphdGlvbicpKTtcclxuICAgIHJldHVybiBjcmVhdGVMb2NhbGl6ZXIobG9jYWxpemF0aW9uKShyZXNvdXJjZU5hbWUsIGtleSwgZGVmYXVsdFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGxvY2FsaXplV2l0aEZhbGxiYWNrKFxyXG4gICAgcmVzb3VyY2VOYW1lczogc3RyaW5nW10sXHJcbiAgICBrZXlzOiBzdHJpbmdbXSxcclxuICAgIGRlZmF1bHRWYWx1ZTogc3RyaW5nLFxyXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoQ29uZmlnU3RhdGUuZ2V0T25lKCdsb2NhbGl6YXRpb24nKSkucGlwZShcclxuICAgICAgbWFwKGNyZWF0ZUxvY2FsaXplcldpdGhGYWxsYmFjayksXHJcbiAgICAgIG1hcChsb2NhbGl6ZVdpdGhGYWxsYmFjayA9PiBsb2NhbGl6ZVdpdGhGYWxsYmFjayhyZXNvdXJjZU5hbWVzLCBrZXlzLCBkZWZhdWx0VmFsdWUpKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsb2NhbGl6ZVdpdGhGYWxsYmFja1N5bmMocmVzb3VyY2VOYW1lczogc3RyaW5nW10sIGtleXM6IHN0cmluZ1tdLCBkZWZhdWx0VmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsb2NhbGl6YXRpb24gPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldE9uZSgnbG9jYWxpemF0aW9uJykpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZUxvY2FsaXplcldpdGhGYWxsYmFjayhsb2NhbGl6YXRpb24pKHJlc291cmNlTmFtZXMsIGtleXMsIGRlZmF1bHRWYWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==