/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/profile.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Action, Selector, State } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ChangePassword, GetProfile, UpdateProfile } from '../actions/profile.actions';
import { ProfileService } from '../services/profile.service';
import { Injectable } from '@angular/core';
let ProfileState = class ProfileState {
    /**
     * @param {?} profileService
     */
    constructor(profileService) {
        this.profileService = profileService;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getProfile({ profile }) {
        return profile;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    getProfile({ patchState }) {
        return this.profileService.get().pipe(tap((/**
         * @param {?} profile
         * @return {?}
         */
        profile => patchState({
            profile,
        }))));
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    updateProfile({ patchState }, { payload }) {
        return this.profileService.update(payload).pipe(tap((/**
         * @param {?} profile
         * @return {?}
         */
        profile => patchState({
            profile,
        }))));
    }
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    changePassword(_, { payload }) {
        return this.profileService.changePassword(payload, true);
    }
};
ProfileState.ctorParameters = () => [
    { type: ProfileService }
];
ProfileState.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProfileState.ctorParameters = () => [
    { type: ProfileService }
];
tslib_1.__decorate([
    Action(GetProfile),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ProfileState.prototype, "getProfile", null);
tslib_1.__decorate([
    Action(UpdateProfile),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, UpdateProfile]),
    tslib_1.__metadata("design:returntype", void 0)
], ProfileState.prototype, "updateProfile", null);
tslib_1.__decorate([
    Action(ChangePassword),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, ChangePassword]),
    tslib_1.__metadata("design:returntype", void 0)
], ProfileState.prototype, "changePassword", null);
tslib_1.__decorate([
    Selector(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Object)
], ProfileState, "getProfile", null);
ProfileState = tslib_1.__decorate([
    State({
        name: 'ProfileState',
        defaults: (/** @type {?} */ ({})),
    }),
    tslib_1.__metadata("design:paramtypes", [ProfileService])
], ProfileState);
export { ProfileState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfileState.prototype.profileService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvcHJvZmlsZS5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztJQU85QixZQUFZLFNBQVosWUFBWTs7OztJQU12QixZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDOzs7OztJQUp0RCxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFpQjtRQUMxQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7OztJQUtELFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBK0I7UUFDcEQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FDbkMsR0FBRzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ1osVUFBVSxDQUFDO1lBQ1QsT0FBTztTQUNSLENBQUMsRUFDSCxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFHRCxhQUFhLENBQUMsRUFBRSxVQUFVLEVBQStCLEVBQUUsRUFBRSxPQUFPLEVBQWlCO1FBQ25GLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM3QyxHQUFHOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDWixVQUFVLENBQUM7WUFDVCxPQUFPO1NBQ1IsQ0FBQyxFQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUdELGNBQWMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQWtCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FDRixDQUFBOztZQTVCcUMsY0FBYzs7O1lBUG5ELFVBQVU7Ozs7WUFQRixjQUFjOztBQWlCckI7SUFEQyxNQUFNLENBQUMsVUFBVSxDQUFDOzs7OzhDQVNsQjtBQUdEO0lBREMsTUFBTSxDQUFDLGFBQWEsQ0FBQzs7cURBQ2tELGFBQWE7O2lEQVFwRjtBQUdEO0lBREMsTUFBTSxDQUFDLGNBQWMsQ0FBQzs7cURBQ1EsY0FBYzs7a0RBRTVDO0FBL0JEO0lBREMsUUFBUSxFQUFFOzs7O29DQUdWO0FBSlUsWUFBWTtJQUx4QixLQUFLLENBQWdCO1FBQ3BCLElBQUksRUFBRSxjQUFjO1FBQ3BCLFFBQVEsRUFBRSxtQkFBQSxFQUFFLEVBQWlCO0tBQzlCLENBQUM7NkNBUW9DLGNBQWM7R0FOdkMsWUFBWSxDQWtDeEI7U0FsQ1ksWUFBWTs7Ozs7O0lBTVgsc0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uLCBTZWxlY3RvciwgU3RhdGUsIFN0YXRlQ29udGV4dCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZCwgR2V0UHJvZmlsZSwgVXBkYXRlUHJvZmlsZSB9IGZyb20gJy4uL2FjdGlvbnMvcHJvZmlsZS5hY3Rpb25zJztcclxuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4uL21vZGVscy9wcm9maWxlJztcclxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wcm9maWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AU3RhdGU8UHJvZmlsZS5TdGF0ZT4oe1xyXG4gIG5hbWU6ICdQcm9maWxlU3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7fSBhcyBQcm9maWxlLlN0YXRlLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlU3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldFByb2ZpbGUoeyBwcm9maWxlIH06IFByb2ZpbGUuU3RhdGUpOiBQcm9maWxlLlJlc3BvbnNlIHtcclxuICAgIHJldHVybiBwcm9maWxlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UpIHt9XHJcblxyXG4gIEBBY3Rpb24oR2V0UHJvZmlsZSlcclxuICBnZXRQcm9maWxlKHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8UHJvZmlsZS5TdGF0ZT4pIHtcclxuICAgIHJldHVybiB0aGlzLnByb2ZpbGVTZXJ2aWNlLmdldCgpLnBpcGUoXHJcbiAgICAgIHRhcChwcm9maWxlID0+XHJcbiAgICAgICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgICAgICBwcm9maWxlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oVXBkYXRlUHJvZmlsZSlcclxuICB1cGRhdGVQcm9maWxlKHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8UHJvZmlsZS5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBVcGRhdGVQcm9maWxlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9maWxlU2VydmljZS51cGRhdGUocGF5bG9hZCkucGlwZShcclxuICAgICAgdGFwKHByb2ZpbGUgPT5cclxuICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgIHByb2ZpbGUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihDaGFuZ2VQYXNzd29yZClcclxuICBjaGFuZ2VQYXNzd29yZChfLCB7IHBheWxvYWQgfTogQ2hhbmdlUGFzc3dvcmQpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2ZpbGVTZXJ2aWNlLmNoYW5nZVBhc3N3b3JkKHBheWxvYWQsIHRydWUpO1xyXG4gIH1cclxufVxyXG4iXX0=