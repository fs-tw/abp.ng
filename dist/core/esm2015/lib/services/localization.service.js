/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/localization.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, NgZone, Optional, SkipSelf } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Actions, ofActionSuccessful } from '@ngxs/store';
import { noop } from 'rxjs';
import { ConfigState } from '../states/config.state';
import { registerLocale } from '../utils/initial-utils';
import { SetLanguage } from '../actions/session.actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
import * as i2 from "@angular/router";
export class LocalizationService {
    /**
     * @param {?} actions
     * @param {?} store
     * @param {?} router
     * @param {?} ngZone
     * @param {?} otherInstance
     */
    constructor(actions, store, router, ngZone, otherInstance) {
        this.actions = actions;
        this.store = store;
        this.router = router;
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
     * @private
     * @return {?}
     */
    listenToSetLanguage() {
        this.actions
            .pipe(ofActionSuccessful(SetLanguage))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ payload }) => this.registerLocale(payload)));
    }
    /**
     * @param {?} reuse
     * @return {?}
     */
    setRouteReuse(reuse) {
        this.router.routeReuseStrategy.shouldReuseRoute = reuse;
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    registerLocale(locale) {
        const { shouldReuseRoute } = this.router.routeReuseStrategy;
        this.setRouteReuse((/**
         * @return {?}
         */
        () => false));
        this.router.navigated = false;
        return registerLocale(locale).then((/**
         * @return {?}
         */
        () => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.router.navigateByUrl(this.router.url).catch(noop);
                this.setRouteReuse(shouldReuseRoute);
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
}
LocalizationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LocalizationService.ctorParameters = () => [
    { type: Actions },
    { type: Store },
    { type: Router },
    { type: NgZone },
    { type: LocalizationService, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
/** @nocollapse */ LocalizationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LocalizationService_Factory() { return new LocalizationService(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(LocalizationService, 12)); }, token: LocalizationService, providedIn: "root" });
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
    LocalizationService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LocalizationService.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9jYWxpemF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQTBCLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDeEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFLekQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7Ozs7SUFROUIsWUFDVSxPQUFnQixFQUNoQixLQUFZLEVBQ1osTUFBYyxFQUNkLE1BQWMsRUFHdEIsYUFBa0M7UUFOMUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFLdEIsSUFBSSxhQUFhO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1FBRXpGLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBaEJELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7O0lBZ0JPLG1CQUFtQjtRQUN6QixJQUFJLENBQUMsT0FBTzthQUNULElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNyQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBdUI7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDMUQsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsTUFBYztjQUNyQixFQUFFLGdCQUFnQixFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0I7UUFDM0QsSUFBSSxDQUFDLGFBQWE7OztRQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUU5QixPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJOzs7UUFBQyxHQUFHLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7WUFBQyxHQUFTLEVBQUU7Z0JBQ3pCLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUEsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBT0QsR0FBRyxDQUNELEdBQTRDLEVBQzVDLEdBQUcsaUJBQTJCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7OztJQU9ELE9BQU8sQ0FBQyxHQUE0QyxFQUFFLEdBQUcsaUJBQTJCO1FBQ2xGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQzs7O1lBakVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFUbEIsT0FBTztZQUFkLEtBQUs7WUFEbUIsTUFBTTtZQURsQixNQUFNO1lBMkJSLG1CQUFtQix1QkFGakMsUUFBUSxZQUNSLFFBQVE7Ozs7Ozs7O0lBTFQsc0NBQXdCOzs7OztJQUN4QixvQ0FBb0I7Ozs7O0lBQ3BCLHFDQUFzQjs7Ozs7SUFDdEIscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbnMsIG9mQWN0aW9uU3VjY2Vzc2Z1bCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgbm9vcCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9jb25maWcuc3RhdGUnO1xyXG5pbXBvcnQgeyByZWdpc3RlckxvY2FsZSB9IGZyb20gJy4uL3V0aWxzL2luaXRpYWwtdXRpbHMnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnJztcclxuaW1wb3J0IHsgU2V0TGFuZ3VhZ2UgfSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb24uYWN0aW9ucyc7XHJcblxyXG50eXBlIFNob3VsZFJldXNlUm91dGUgPSAoZnV0dXJlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBjdXJyOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSA9PiBib29sZWFuO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIExvY2FsaXphdGlvblNlcnZpY2Uge1xyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgY3VycmVudGx5IHNlbGVjdGVkIGxhbmd1YWdlXHJcbiAgICovXHJcbiAgZ2V0IGN1cnJlbnRMYW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChzdGF0ZSA9PiBzdGF0ZS5TZXNzaW9uU3RhdGUubGFuZ3VhZ2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFjdGlvbnM6IEFjdGlvbnMsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBTa2lwU2VsZigpXHJcbiAgICBvdGhlckluc3RhbmNlOiBMb2NhbGl6YXRpb25TZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgaWYgKG90aGVySW5zdGFuY2UpIHRocm93IG5ldyBFcnJvcignTG9jYWxpemF0aW9uU2VydmljZSBzaG91bGQgaGF2ZSBvbmx5IG9uZSBpbnN0YW5jZS4nKTtcclxuXHJcbiAgICB0aGlzLmxpc3RlblRvU2V0TGFuZ3VhZ2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuVG9TZXRMYW5ndWFnZSgpIHtcclxuICAgIHRoaXMuYWN0aW9uc1xyXG4gICAgICAucGlwZShvZkFjdGlvblN1Y2Nlc3NmdWwoU2V0TGFuZ3VhZ2UpKVxyXG4gICAgICAuc3Vic2NyaWJlKCh7IHBheWxvYWQgfSkgPT4gdGhpcy5yZWdpc3RlckxvY2FsZShwYXlsb2FkKSk7XHJcbiAgfVxyXG5cclxuICBzZXRSb3V0ZVJldXNlKHJldXNlOiBTaG91bGRSZXVzZVJvdXRlKSB7XHJcbiAgICB0aGlzLnJvdXRlci5yb3V0ZVJldXNlU3RyYXRlZ3kuc2hvdWxkUmV1c2VSb3V0ZSA9IHJldXNlO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJMb2NhbGUobG9jYWxlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHsgc2hvdWxkUmV1c2VSb3V0ZSB9ID0gdGhpcy5yb3V0ZXIucm91dGVSZXVzZVN0cmF0ZWd5O1xyXG4gICAgdGhpcy5zZXRSb3V0ZVJldXNlKCgpID0+IGZhbHNlKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiByZWdpc3RlckxvY2FsZShsb2NhbGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5yb3V0ZXIudXJsKS5jYXRjaChub29wKTtcclxuICAgICAgICB0aGlzLnNldFJvdXRlUmV1c2Uoc2hvdWxkUmV1c2VSb3V0ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgbG9jYWxpemVkIHRleHQgd2l0aCB0aGUgZ2l2ZW4gaW50ZXJwb2xhdGlvbiBwYXJhbWV0ZXJzIGluIGN1cnJlbnQgbGFuZ3VhZ2UuXHJcbiAgICogQHBhcmFtIGtleSBMb2NhbGl6YXRvbiBrZXkgdG8gcmVwbGFjZSB3aXRoIGxvY2FsaXplZCB0ZXh0XHJcbiAgICogQHBhcmFtIGludGVycG9sYXRlUGFyYW1zIFZhbHVlcyB0byBpbnRlcnBvbGF0ZVxyXG4gICAqL1xyXG4gIGdldChcclxuICAgIGtleTogc3RyaW5nIHwgQ29uZmlnLkxvY2FsaXphdGlvbldpdGhEZWZhdWx0LFxyXG4gICAgLi4uaW50ZXJwb2xhdGVQYXJhbXM6IHN0cmluZ1tdXHJcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChDb25maWdTdGF0ZS5nZXRMb2NhbGl6YXRpb24oa2V5LCAuLi5pbnRlcnBvbGF0ZVBhcmFtcykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBsb2NhbGl6ZWQgdGV4dCB3aXRoIHRoZSBnaXZlbiBpbnRlcnBvbGF0aW9uIHBhcmFtZXRlcnMgaW4gY3VycmVudCBsYW5ndWFnZS5cclxuICAgKiBAcGFyYW0ga2V5IExvY2FsaXphdGlvbiBrZXkgdG8gcmVwbGFjZSB3aXRoIGxvY2FsaXplZCB0ZXh0XHJcbiAgICogQHBhcmFtIGludGVycG9sYXRlUGFyYW1zIFZhbHVlcyB0byBpbnRlcG9sYXRlLlxyXG4gICAqL1xyXG4gIGluc3RhbnQoa2V5OiBzdHJpbmcgfCBDb25maWcuTG9jYWxpemF0aW9uV2l0aERlZmF1bHQsIC4uLmludGVycG9sYXRlUGFyYW1zOiBzdHJpbmdbXSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRMb2NhbGl6YXRpb24oa2V5LCAuLi5pbnRlcnBvbGF0ZVBhcmFtcykpO1xyXG4gIH1cclxufVxyXG4iXX0=