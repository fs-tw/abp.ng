/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/profile-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { ProfileState } from '../states';
import { GetProfile, UpdateProfile, ChangePassword } from '../actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
var ProfileStateService = /** @class */ (function () {
    function ProfileStateService(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ProfileStateService.prototype.getProfile = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(ProfileState.getProfile);
    };
    /**
     * @return {?}
     */
    ProfileStateService.prototype.dispatchGetProfile = /**
     * @return {?}
     */
    function () {
        return this.store.dispatch(new GetProfile());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ProfileStateService.prototype.dispatchUpdateProfile = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (UpdateProfile.bind.apply(UpdateProfile, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ProfileStateService.prototype.dispatchChangePassword = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (ChangePassword.bind.apply(ChangePassword, tslib_1.__spread([void 0], args)))());
    };
    ProfileStateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProfileStateService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ ProfileStateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProfileStateService_Factory() { return new ProfileStateService(i0.ɵɵinject(i1.Store)); }, token: ProfileStateService, providedIn: "root" });
    return ProfileStateService;
}());
export { ProfileStateService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfileStateService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Byb2ZpbGUtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSxZQUFZLENBQUM7OztBQUV2RTtJQUlFLDZCQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7Ozs7SUFFcEMsd0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELGdEQUFrQjs7O0lBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxtREFBcUI7Ozs7SUFBckI7UUFBc0IsY0FBb0Q7YUFBcEQsVUFBb0QsRUFBcEQscUJBQW9ELEVBQXBELElBQW9EO1lBQXBELHlCQUFvRDs7UUFDeEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsTUFBSyxhQUFhLFlBQWIsYUFBYSw2QkFBSSxJQUFJLE1BQUUsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELG9EQUFzQjs7OztJQUF0QjtRQUF1QixjQUFxRDthQUFyRCxVQUFxRCxFQUFyRCxxQkFBcUQsRUFBckQsSUFBcUQ7WUFBckQseUJBQXFEOztRQUMxRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxNQUFLLGNBQWMsWUFBZCxjQUFjLDZCQUFJLElBQUksTUFBRSxDQUFDO0lBQzFELENBQUM7O2dCQXBCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLEtBQUs7Ozs4QkFEZDtDQTJCQyxBQXJCRCxJQXFCQztTQWxCWSxtQkFBbUI7Ozs7OztJQUNsQixvQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBQcm9maWxlU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMnO1xyXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgR2V0UHJvZmlsZSwgVXBkYXRlUHJvZmlsZSwgQ2hhbmdlUGFzc3dvcmQgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlU3RhdGVTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgZ2V0UHJvZmlsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFByb2ZpbGVTdGF0ZS5nZXRQcm9maWxlKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoR2V0UHJvZmlsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRQcm9maWxlKCkpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hVcGRhdGVQcm9maWxlKC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgVXBkYXRlUHJvZmlsZT4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcGRhdGVQcm9maWxlKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoQ2hhbmdlUGFzc3dvcmQoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBDaGFuZ2VQYXNzd29yZD4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VQYXNzd29yZCguLi5hcmdzKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==