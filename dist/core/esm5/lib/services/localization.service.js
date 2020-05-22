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
var LocalizationService = /** @class */ (function () {
    function LocalizationService(actions, store, injector, ngZone, otherInstance) {
        this.actions = actions;
        this.store = store;
        this.injector = injector;
        this.ngZone = ngZone;
        if (otherInstance)
            throw new Error('LocalizationService should have only one instance.');
        this.listenToSetLanguage();
    }
    Object.defineProperty(LocalizationService.prototype, "currentLang", {
        /**
         * Returns currently selected language
         */
        get: /**
         * Returns currently selected language
         * @return {?}
         */
        function () {
            return this.store.selectSnapshot((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.SessionState.language; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationService.prototype, "languageChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this.actions.pipe(ofActionSuccessful(SetLanguage));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    LocalizationService.prototype.listenToSetLanguage = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.languageChange.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var payload = _a.payload;
            return _this.registerLocale(payload);
        }));
    };
    /**
     * @param {?} locale
     * @return {?}
     */
    LocalizationService.prototype.registerLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        var _this = this;
        /** @type {?} */
        var router = this.injector.get(Router);
        var shouldReuseRoute = router.routeReuseStrategy.shouldReuseRoute;
        router.routeReuseStrategy.shouldReuseRoute = (/**
         * @return {?}
         */
        function () { return false; });
        router.navigated = false;
        return registerLocale(locale).then((/**
         * @return {?}
         */
        function () {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, router.navigateByUrl(router.url).catch(noop)];
                        case 1:
                            _a.sent();
                            router.routeReuseStrategy.shouldReuseRoute = shouldReuseRoute;
                            return [2 /*return*/];
                    }
                });
            }); }));
        }));
    };
    /**
     * Returns an observable localized text with the given interpolation parameters in current language.
     * @param key Localizaton key to replace with localized text
     * @param interpolateParams Values to interpolate
     */
    /**
     * Returns an observable localized text with the given interpolation parameters in current language.
     * @param {?} key Localizaton key to replace with localized text
     * @param {...?} interpolateParams Values to interpolate
     * @return {?}
     */
    LocalizationService.prototype.get = /**
     * Returns an observable localized text with the given interpolation parameters in current language.
     * @param {?} key Localizaton key to replace with localized text
     * @param {...?} interpolateParams Values to interpolate
     * @return {?}
     */
    function (key) {
        var interpolateParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolateParams[_i - 1] = arguments[_i];
        }
        return this.store.select(ConfigState.getLocalization.apply(ConfigState, tslib_1.__spread([key], interpolateParams)));
    };
    /**
     * Returns localized text with the given interpolation parameters in current language.
     * @param key Localization key to replace with localized text
     * @param interpolateParams Values to intepolate.
     */
    /**
     * Returns localized text with the given interpolation parameters in current language.
     * @param {?} key Localization key to replace with localized text
     * @param {...?} interpolateParams Values to intepolate.
     * @return {?}
     */
    LocalizationService.prototype.instant = /**
     * Returns localized text with the given interpolation parameters in current language.
     * @param {?} key Localization key to replace with localized text
     * @param {...?} interpolateParams Values to intepolate.
     * @return {?}
     */
    function (key) {
        var interpolateParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolateParams[_i - 1] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getLocalization.apply(ConfigState, tslib_1.__spread([key], interpolateParams)));
    };
    /**
     * @param {?} resourceName
     * @param {?} key
     * @param {?} defaultValue
     * @return {?}
     */
    LocalizationService.prototype.localize = /**
     * @param {?} resourceName
     * @param {?} key
     * @param {?} defaultValue
     * @return {?}
     */
    function (resourceName, key, defaultValue) {
        return this.store.select(ConfigState.getOne('localization')).pipe(map(createLocalizer), map((/**
         * @param {?} localize
         * @return {?}
         */
        function (localize) { return localize(resourceName, key, defaultValue); })));
    };
    /**
     * @param {?} resourceName
     * @param {?} key
     * @param {?} defaultValue
     * @return {?}
     */
    LocalizationService.prototype.localizeSync = /**
     * @param {?} resourceName
     * @param {?} key
     * @param {?} defaultValue
     * @return {?}
     */
    function (resourceName, key, defaultValue) {
        /** @type {?} */
        var localization = this.store.selectSnapshot(ConfigState.getOne('localization'));
        return createLocalizer(localization)(resourceName, key, defaultValue);
    };
    /**
     * @param {?} resourceNames
     * @param {?} keys
     * @param {?} defaultValue
     * @return {?}
     */
    LocalizationService.prototype.localizeWithFallback = /**
     * @param {?} resourceNames
     * @param {?} keys
     * @param {?} defaultValue
     * @return {?}
     */
    function (resourceNames, keys, defaultValue) {
        return this.store.select(ConfigState.getOne('localization')).pipe(map(createLocalizerWithFallback), map((/**
         * @param {?} localizeWithFallback
         * @return {?}
         */
        function (localizeWithFallback) { return localizeWithFallback(resourceNames, keys, defaultValue); })));
    };
    /**
     * @param {?} resourceNames
     * @param {?} keys
     * @param {?} defaultValue
     * @return {?}
     */
    LocalizationService.prototype.localizeWithFallbackSync = /**
     * @param {?} resourceNames
     * @param {?} keys
     * @param {?} defaultValue
     * @return {?}
     */
    function (resourceNames, keys, defaultValue) {
        /** @type {?} */
        var localization = this.store.selectSnapshot(ConfigState.getOne('localization'));
        return createLocalizerWithFallback(localization)(resourceNames, keys, defaultValue);
    };
    LocalizationService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LocalizationService.ctorParameters = function () { return [
        { type: Actions },
        { type: Store },
        { type: Injector },
        { type: NgZone },
        { type: LocalizationService, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    /** @nocollapse */ LocalizationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LocalizationService_Factory() { return new LocalizationService(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i1.Store), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(LocalizationService, 12)); }, token: LocalizationService, providedIn: "root" });
    return LocalizationService;
}());
export { LocalizationService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9jYWxpemF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUEwQixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRSxPQUFPLEVBQUUsSUFBSSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQUkzRjtJQWFFLDZCQUNVLE9BQWdCLEVBQ2hCLEtBQVksRUFDWixRQUFrQixFQUNsQixNQUFjLEVBR3RCLGFBQWtDO1FBTjFCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUt0QixJQUFJLGFBQWE7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7UUFFekYsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQXBCRCxzQkFB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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgTmdab25lLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWN0aW9ucywgb2ZBY3Rpb25TdWNjZXNzZnVsLCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgbm9vcCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFNldExhbmd1YWdlIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9uLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnJztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvY29uZmlnLnN0YXRlJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJMb2NhbGUgfSBmcm9tICcuLi91dGlscy9pbml0aWFsLXV0aWxzJztcclxuaW1wb3J0IHsgY3JlYXRlTG9jYWxpemVyLCBjcmVhdGVMb2NhbGl6ZXJXaXRoRmFsbGJhY2sgfSBmcm9tICcuLi91dGlscy9sb2NhbGl6YXRpb24tdXRpbHMnO1xyXG5cclxudHlwZSBTaG91bGRSZXVzZVJvdXRlID0gKGZ1dHVyZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgY3VycjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkgPT4gYm9vbGVhbjtcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBMb2NhbGl6YXRpb25TZXJ2aWNlIHtcclxuICAvKipcclxuICAgKiBSZXR1cm5zIGN1cnJlbnRseSBzZWxlY3RlZCBsYW5ndWFnZVxyXG4gICAqL1xyXG4gIGdldCBjdXJyZW50TGFuZygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3Qoc3RhdGUgPT4gc3RhdGUuU2Vzc2lvblN0YXRlLmxhbmd1YWdlKTtcclxuICB9XHJcblxyXG4gIGdldCBsYW5ndWFnZUNoYW5nZSgpOiBPYnNlcnZhYmxlPFNldExhbmd1YWdlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25zLnBpcGUob2ZBY3Rpb25TdWNjZXNzZnVsKFNldExhbmd1YWdlKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYWN0aW9uczogQWN0aW9ucyxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBTa2lwU2VsZigpXHJcbiAgICBvdGhlckluc3RhbmNlOiBMb2NhbGl6YXRpb25TZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgaWYgKG90aGVySW5zdGFuY2UpIHRocm93IG5ldyBFcnJvcignTG9jYWxpemF0aW9uU2VydmljZSBzaG91bGQgaGF2ZSBvbmx5IG9uZSBpbnN0YW5jZS4nKTtcclxuXHJcbiAgICB0aGlzLmxpc3RlblRvU2V0TGFuZ3VhZ2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuVG9TZXRMYW5ndWFnZSgpIHtcclxuICAgIHRoaXMubGFuZ3VhZ2VDaGFuZ2Uuc3Vic2NyaWJlKCh7IHBheWxvYWQgfSkgPT4gdGhpcy5yZWdpc3RlckxvY2FsZShwYXlsb2FkKSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlckxvY2FsZShsb2NhbGU6IHN0cmluZykge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcclxuICAgIGNvbnN0IHsgc2hvdWxkUmV1c2VSb3V0ZSB9ID0gcm91dGVyLnJvdXRlUmV1c2VTdHJhdGVneTtcclxuICAgIHJvdXRlci5yb3V0ZVJldXNlU3RyYXRlZ3kuc2hvdWxkUmV1c2VSb3V0ZSA9ICgpID0+IGZhbHNlO1xyXG4gICAgcm91dGVyLm5hdmlnYXRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiByZWdpc3RlckxvY2FsZShsb2NhbGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IHJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJvdXRlci51cmwpLmNhdGNoKG5vb3ApO1xyXG4gICAgICAgIHJvdXRlci5yb3V0ZVJldXNlU3RyYXRlZ3kuc2hvdWxkUmV1c2VSb3V0ZSA9IHNob3VsZFJldXNlUm91dGU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgbG9jYWxpemVkIHRleHQgd2l0aCB0aGUgZ2l2ZW4gaW50ZXJwb2xhdGlvbiBwYXJhbWV0ZXJzIGluIGN1cnJlbnQgbGFuZ3VhZ2UuXHJcbiAgICogQHBhcmFtIGtleSBMb2NhbGl6YXRvbiBrZXkgdG8gcmVwbGFjZSB3aXRoIGxvY2FsaXplZCB0ZXh0XHJcbiAgICogQHBhcmFtIGludGVycG9sYXRlUGFyYW1zIFZhbHVlcyB0byBpbnRlcnBvbGF0ZVxyXG4gICAqL1xyXG4gIGdldChcclxuICAgIGtleTogc3RyaW5nIHwgQ29uZmlnLkxvY2FsaXphdGlvbldpdGhEZWZhdWx0LFxyXG4gICAgLi4uaW50ZXJwb2xhdGVQYXJhbXM6IHN0cmluZ1tdXHJcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChDb25maWdTdGF0ZS5nZXRMb2NhbGl6YXRpb24oa2V5LCAuLi5pbnRlcnBvbGF0ZVBhcmFtcykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBsb2NhbGl6ZWQgdGV4dCB3aXRoIHRoZSBnaXZlbiBpbnRlcnBvbGF0aW9uIHBhcmFtZXRlcnMgaW4gY3VycmVudCBsYW5ndWFnZS5cclxuICAgKiBAcGFyYW0ga2V5IExvY2FsaXphdGlvbiBrZXkgdG8gcmVwbGFjZSB3aXRoIGxvY2FsaXplZCB0ZXh0XHJcbiAgICogQHBhcmFtIGludGVycG9sYXRlUGFyYW1zIFZhbHVlcyB0byBpbnRlcG9sYXRlLlxyXG4gICAqL1xyXG4gIGluc3RhbnQoa2V5OiBzdHJpbmcgfCBDb25maWcuTG9jYWxpemF0aW9uV2l0aERlZmF1bHQsIC4uLmludGVycG9sYXRlUGFyYW1zOiBzdHJpbmdbXSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRMb2NhbGl6YXRpb24oa2V5LCAuLi5pbnRlcnBvbGF0ZVBhcmFtcykpO1xyXG4gIH1cclxuXHJcbiAgbG9jYWxpemUocmVzb3VyY2VOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoQ29uZmlnU3RhdGUuZ2V0T25lKCdsb2NhbGl6YXRpb24nKSkucGlwZShcclxuICAgICAgbWFwKGNyZWF0ZUxvY2FsaXplciksXHJcbiAgICAgIG1hcChsb2NhbGl6ZSA9PiBsb2NhbGl6ZShyZXNvdXJjZU5hbWUsIGtleSwgZGVmYXVsdFZhbHVlKSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbG9jYWxpemVTeW5jKHJlc291cmNlTmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbG9jYWxpemF0aW9uID0gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRPbmUoJ2xvY2FsaXphdGlvbicpKTtcclxuICAgIHJldHVybiBjcmVhdGVMb2NhbGl6ZXIobG9jYWxpemF0aW9uKShyZXNvdXJjZU5hbWUsIGtleSwgZGVmYXVsdFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGxvY2FsaXplV2l0aEZhbGxiYWNrKFxyXG4gICAgcmVzb3VyY2VOYW1lczogc3RyaW5nW10sXHJcbiAgICBrZXlzOiBzdHJpbmdbXSxcclxuICAgIGRlZmF1bHRWYWx1ZTogc3RyaW5nLFxyXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoQ29uZmlnU3RhdGUuZ2V0T25lKCdsb2NhbGl6YXRpb24nKSkucGlwZShcclxuICAgICAgbWFwKGNyZWF0ZUxvY2FsaXplcldpdGhGYWxsYmFjayksXHJcbiAgICAgIG1hcChsb2NhbGl6ZVdpdGhGYWxsYmFjayA9PiBsb2NhbGl6ZVdpdGhGYWxsYmFjayhyZXNvdXJjZU5hbWVzLCBrZXlzLCBkZWZhdWx0VmFsdWUpKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsb2NhbGl6ZVdpdGhGYWxsYmFja1N5bmMocmVzb3VyY2VOYW1lczogc3RyaW5nW10sIGtleXM6IHN0cmluZ1tdLCBkZWZhdWx0VmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBsb2NhbGl6YXRpb24gPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldE9uZSgnbG9jYWxpemF0aW9uJykpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZUxvY2FsaXplcldpdGhGYWxsYmFjayhsb2NhbGl6YXRpb24pKHJlc291cmNlTmFtZXMsIGtleXMsIGRlZmF1bHRWYWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==