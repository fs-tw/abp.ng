/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/profile-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { ProfileState } from '../states';
import { GetProfile, UpdateProfile, ChangePassword } from '../actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
export class ProfileStateService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    getProfile() {
        return this.store.selectSnapshot(ProfileState.getProfile);
    }
    /**
     * @return {?}
     */
    dispatchGetProfile() {
        return this.store.dispatch(new GetProfile());
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchUpdateProfile(...args) {
        return this.store.dispatch(new UpdateProfile(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchChangePassword(...args) {
        return this.store.dispatch(new ChangePassword(...args));
    }
}
ProfileStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProfileStateService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ ProfileStateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProfileStateService_Factory() { return new ProfileStateService(i0.ɵɵinject(i1.Store)); }, token: ProfileStateService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfileStateService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Byb2ZpbGUtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXpDLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBS3ZFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFDOUIsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDOzs7O0lBRXBDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsR0FBRyxJQUFpRDtRQUN4RSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELHNCQUFzQixDQUFDLEdBQUcsSUFBa0Q7UUFDMUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7O1lBcEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLEtBQUs7Ozs7Ozs7O0lBU0Esb0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgUHJvZmlsZVN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzJztcclxuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IEdldFByb2ZpbGUsIFVwZGF0ZVByb2ZpbGUsIENoYW5nZVBhc3N3b3JkIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVN0YXRlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIGdldFByb2ZpbGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChQcm9maWxlU3RhdGUuZ2V0UHJvZmlsZSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaEdldFByb2ZpbGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0UHJvZmlsZSgpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoVXBkYXRlUHJvZmlsZSguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIFVwZGF0ZVByb2ZpbGU+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBkYXRlUHJvZmlsZSguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaENoYW5nZVBhc3N3b3JkKC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgQ2hhbmdlUGFzc3dvcmQ+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlUGFzc3dvcmQoLi4uYXJncykpO1xyXG4gIH1cclxufVxyXG4iXX0=