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
var LocalizationService = /** @class */ (function () {
    function LocalizationService(actions, store, router, ngZone, otherInstance) {
        this.actions = actions;
        this.store = store;
        this.router = router;
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
        this.actions
            .pipe(ofActionSuccessful(SetLanguage))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var payload = _a.payload;
            return _this.registerLocale(payload);
        }));
    };
    /**
     * @param {?} reuse
     * @return {?}
     */
    LocalizationService.prototype.setRouteReuse = /**
     * @param {?} reuse
     * @return {?}
     */
    function (reuse) {
        this.router.routeReuseStrategy.shouldReuseRoute = reuse;
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
        var shouldReuseRoute = this.router.routeReuseStrategy.shouldReuseRoute;
        this.setRouteReuse((/**
         * @return {?}
         */
        function () { return false; }));
        this.router.navigated = false;
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
                        case 0: return [4 /*yield*/, this.router.navigateByUrl(this.router.url).catch(noop)];
                        case 1:
                            _a.sent();
                            this.setRouteReuse(shouldReuseRoute);
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
    LocalizationService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LocalizationService.ctorParameters = function () { return [
        { type: Actions },
        { type: Store },
        { type: Router },
        { type: NgZone },
        { type: LocalizationService, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    /** @nocollapse */ LocalizationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LocalizationService_Factory() { return new LocalizationService(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(LocalizationService, 12)); }, token: LocalizationService, providedIn: "root" });
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
    LocalizationService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LocalizationService.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9jYWxpemF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQTBCLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDeEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFJekQ7SUFTRSw2QkFDVSxPQUFnQixFQUNoQixLQUFZLEVBQ1osTUFBYyxFQUNkLE1BQWMsRUFHdEIsYUFBa0M7UUFOMUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFLdEIsSUFBSSxhQUFhO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1FBRXpGLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFoQkQsc0JBQUksNENBQVc7UUFIZjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBM0IsQ0FBMkIsRUFBQyxDQUFDO1FBQ3pFLENBQUM7OztPQUFBOzs7OztJQWdCTyxpREFBbUI7Ozs7SUFBM0I7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxPQUFPO2FBQ1QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3JDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQVc7Z0JBQVQsb0JBQU87WUFBTyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBQTVCLENBQTRCLEVBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVELDJDQUFhOzs7O0lBQWIsVUFBYyxLQUF1QjtRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUMxRCxDQUFDOzs7OztJQUVELDRDQUFjOzs7O0lBQWQsVUFBZSxNQUFjO1FBQTdCLGlCQVdDO1FBVlMsSUFBQSxrRUFBZ0I7UUFDeEIsSUFBSSxDQUFDLGFBQWE7OztRQUFDLGNBQU0sT0FBQSxLQUFLLEVBQUwsQ0FBSyxFQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRTlCLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUk7OztRQUFDO1lBQ2pDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzs7O1lBQUM7OztnQ0FDZCxxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7NEJBQTVELFNBQTRELENBQUM7NEJBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7OztpQkFDdEMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILGlDQUFHOzs7Ozs7SUFBSCxVQUNFLEdBQTRDO1FBQzVDLDJCQUE4QjthQUE5QixVQUE4QixFQUE5QixxQkFBOEIsRUFBOUIsSUFBOEI7WUFBOUIsMENBQThCOztRQUU5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLE9BQTNCLFdBQVcsb0JBQWlCLEdBQUcsR0FBSyxpQkFBaUIsR0FBRSxDQUFDO0lBQ25GLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gscUNBQU87Ozs7OztJQUFQLFVBQVEsR0FBNEM7UUFBRSwyQkFBOEI7YUFBOUIsVUFBOEIsRUFBOUIscUJBQThCLEVBQTlCLElBQThCO1lBQTlCLDBDQUE4Qjs7UUFDbEYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsZUFBZSxPQUEzQixXQUFXLG9CQUFpQixHQUFHLEdBQUssaUJBQWlCLEdBQUUsQ0FBQztJQUMzRixDQUFDOztnQkFqRUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFUbEIsT0FBTztnQkFBZCxLQUFLO2dCQURtQixNQUFNO2dCQURsQixNQUFNO2dCQTJCUixtQkFBbUIsdUJBRmpDLFFBQVEsWUFDUixRQUFROzs7OEJBMUJiO0NBNkVDLEFBbEVELElBa0VDO1NBakVZLG1CQUFtQjs7Ozs7O0lBUzVCLHNDQUF3Qjs7Ozs7SUFDeEIsb0NBQW9COzs7OztJQUNwQixxQ0FBc0I7Ozs7O0lBQ3RCLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN0b3JlLCBBY3Rpb25zLCBvZkFjdGlvblN1Y2Nlc3NmdWwgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IG5vb3AsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvY29uZmlnLnN0YXRlJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJMb2NhbGUgfSBmcm9tICcuLi91dGlscy9pbml0aWFsLXV0aWxzJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZyc7XHJcbmltcG9ydCB7IFNldExhbmd1YWdlIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9uLmFjdGlvbnMnO1xyXG5cclxudHlwZSBTaG91bGRSZXVzZVJvdXRlID0gKGZ1dHVyZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgY3VycjogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkgPT4gYm9vbGVhbjtcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBMb2NhbGl6YXRpb25TZXJ2aWNlIHtcclxuICAvKipcclxuICAgKiBSZXR1cm5zIGN1cnJlbnRseSBzZWxlY3RlZCBsYW5ndWFnZVxyXG4gICAqL1xyXG4gIGdldCBjdXJyZW50TGFuZygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3Qoc3RhdGUgPT4gc3RhdGUuU2Vzc2lvblN0YXRlLmxhbmd1YWdlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhY3Rpb25zOiBBY3Rpb25zLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBAU2tpcFNlbGYoKVxyXG4gICAgb3RoZXJJbnN0YW5jZTogTG9jYWxpemF0aW9uU2VydmljZSxcclxuICApIHtcclxuICAgIGlmIChvdGhlckluc3RhbmNlKSB0aHJvdyBuZXcgRXJyb3IoJ0xvY2FsaXphdGlvblNlcnZpY2Ugc2hvdWxkIGhhdmUgb25seSBvbmUgaW5zdGFuY2UuJyk7XHJcblxyXG4gICAgdGhpcy5saXN0ZW5Ub1NldExhbmd1YWdlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxpc3RlblRvU2V0TGFuZ3VhZ2UoKSB7XHJcbiAgICB0aGlzLmFjdGlvbnNcclxuICAgICAgLnBpcGUob2ZBY3Rpb25TdWNjZXNzZnVsKFNldExhbmd1YWdlKSlcclxuICAgICAgLnN1YnNjcmliZSgoeyBwYXlsb2FkIH0pID0+IHRoaXMucmVnaXN0ZXJMb2NhbGUocGF5bG9hZCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0Um91dGVSZXVzZShyZXVzZTogU2hvdWxkUmV1c2VSb3V0ZSkge1xyXG4gICAgdGhpcy5yb3V0ZXIucm91dGVSZXVzZVN0cmF0ZWd5LnNob3VsZFJldXNlUm91dGUgPSByZXVzZTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyTG9jYWxlKGxvY2FsZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB7IHNob3VsZFJldXNlUm91dGUgfSA9IHRoaXMucm91dGVyLnJvdXRlUmV1c2VTdHJhdGVneTtcclxuICAgIHRoaXMuc2V0Um91dGVSZXVzZSgoKSA9PiBmYWxzZSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gcmVnaXN0ZXJMb2NhbGUobG9jYWxlKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucm91dGVyLnVybCkuY2F0Y2gobm9vcCk7XHJcbiAgICAgICAgdGhpcy5zZXRSb3V0ZVJldXNlKHNob3VsZFJldXNlUm91dGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIGxvY2FsaXplZCB0ZXh0IHdpdGggdGhlIGdpdmVuIGludGVycG9sYXRpb24gcGFyYW1ldGVycyBpbiBjdXJyZW50IGxhbmd1YWdlLlxyXG4gICAqIEBwYXJhbSBrZXkgTG9jYWxpemF0b24ga2V5IHRvIHJlcGxhY2Ugd2l0aCBsb2NhbGl6ZWQgdGV4dFxyXG4gICAqIEBwYXJhbSBpbnRlcnBvbGF0ZVBhcmFtcyBWYWx1ZXMgdG8gaW50ZXJwb2xhdGVcclxuICAgKi9cclxuICBnZXQoXHJcbiAgICBrZXk6IHN0cmluZyB8IENvbmZpZy5Mb2NhbGl6YXRpb25XaXRoRGVmYXVsdCxcclxuICAgIC4uLmludGVycG9sYXRlUGFyYW1zOiBzdHJpbmdbXVxyXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoQ29uZmlnU3RhdGUuZ2V0TG9jYWxpemF0aW9uKGtleSwgLi4uaW50ZXJwb2xhdGVQYXJhbXMpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgbG9jYWxpemVkIHRleHQgd2l0aCB0aGUgZ2l2ZW4gaW50ZXJwb2xhdGlvbiBwYXJhbWV0ZXJzIGluIGN1cnJlbnQgbGFuZ3VhZ2UuXHJcbiAgICogQHBhcmFtIGtleSBMb2NhbGl6YXRpb24ga2V5IHRvIHJlcGxhY2Ugd2l0aCBsb2NhbGl6ZWQgdGV4dFxyXG4gICAqIEBwYXJhbSBpbnRlcnBvbGF0ZVBhcmFtcyBWYWx1ZXMgdG8gaW50ZXBvbGF0ZS5cclxuICAgKi9cclxuICBpbnN0YW50KGtleTogc3RyaW5nIHwgQ29uZmlnLkxvY2FsaXphdGlvbldpdGhEZWZhdWx0LCAuLi5pbnRlcnBvbGF0ZVBhcmFtczogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0TG9jYWxpemF0aW9uKGtleSwgLi4uaW50ZXJwb2xhdGVQYXJhbXMpKTtcclxuICB9XHJcbn1cclxuIl19