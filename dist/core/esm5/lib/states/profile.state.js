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
var ProfileState = /** @class */ (function () {
    function ProfileState(profileService) {
        this.profileService = profileService;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    ProfileState.getProfile = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var profile = _a.profile;
        return profile;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    ProfileState.prototype.getProfile = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var patchState = _a.patchState;
        return this.profileService.get().pipe(tap((/**
         * @param {?} profile
         * @return {?}
         */
        function (profile) {
            return patchState({
                profile: profile,
            });
        })));
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    ProfileState.prototype.updateProfile = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        return this.profileService.update(payload).pipe(tap((/**
         * @param {?} profile
         * @return {?}
         */
        function (profile) {
            return patchState({
                profile: profile,
            });
        })));
    };
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    ProfileState.prototype.changePassword = /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    function (_, _a) {
        var payload = _a.payload;
        return this.profileService.changePassword(payload, true);
    };
    ProfileState.ctorParameters = function () { return [
        { type: ProfileService }
    ]; };
    ProfileState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProfileState.ctorParameters = function () { return [
        { type: ProfileService }
    ]; };
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
    return ProfileState;
}());
export { ProfileState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfileState.prototype.profileService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvcHJvZmlsZS5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFhekMsc0JBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFHLENBQUM7Ozs7O0lBSi9DLHVCQUFVOzs7O0lBQWpCLFVBQWtCLEVBQTBCO1lBQXhCLG9CQUFPO1FBQ3pCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBS0QsaUNBQVU7Ozs7SUFBVixVQUFXLEVBQTJDO1lBQXpDLDBCQUFVO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQ25DLEdBQUc7Ozs7UUFBQyxVQUFBLE9BQU87WUFDVCxPQUFBLFVBQVUsQ0FBQztnQkFDVCxPQUFPLFNBQUE7YUFDUixDQUFDO1FBRkYsQ0FFRSxFQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUdELG9DQUFhOzs7OztJQUFiLFVBQWMsRUFBMkMsRUFBRSxFQUEwQjtZQUFyRSwwQkFBVTtZQUFtQyxvQkFBTztRQUNsRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDN0MsR0FBRzs7OztRQUFDLFVBQUEsT0FBTztZQUNULE9BQUEsVUFBVSxDQUFDO2dCQUNULE9BQU8sU0FBQTthQUNSLENBQUM7UUFGRixDQUVFLEVBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBR0QscUNBQWM7Ozs7O0lBQWQsVUFBZSxDQUFDLEVBQUUsRUFBMkI7WUFBekIsb0JBQU87UUFDekIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Z0JBM0JtQyxjQUFjOzs7Z0JBUG5ELFVBQVU7Ozs7Z0JBUEYsY0FBYzs7SUFpQnJCO1FBREMsTUFBTSxDQUFDLFVBQVUsQ0FBQzs7OztrREFTbEI7SUFHRDtRQURDLE1BQU0sQ0FBQyxhQUFhLENBQUM7O3lEQUNrRCxhQUFhOztxREFRcEY7SUFHRDtRQURDLE1BQU0sQ0FBQyxjQUFjLENBQUM7O3lEQUNRLGNBQWM7O3NEQUU1QztJQS9CRDtRQURDLFFBQVEsRUFBRTs7Ozt3Q0FHVjtJQUpVLFlBQVk7UUFMeEIsS0FBSyxDQUFnQjtZQUNwQixJQUFJLEVBQUUsY0FBYztZQUNwQixRQUFRLEVBQUUsbUJBQUEsRUFBRSxFQUFpQjtTQUM5QixDQUFDO2lEQVFvQyxjQUFjO09BTnZDLFlBQVksQ0FrQ3hCO0lBQUQsbUJBQUM7Q0FBQSxJQUFBO1NBbENZLFlBQVk7Ozs7OztJQU1YLHNDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiwgU2VsZWN0b3IsIFN0YXRlLCBTdGF0ZUNvbnRleHQgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmQsIEdldFByb2ZpbGUsIFVwZGF0ZVByb2ZpbGUgfSBmcm9tICcuLi9hY3Rpb25zL3Byb2ZpbGUuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuLi9tb2RlbHMvcHJvZmlsZSc7XHJcbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFN0YXRlPFByb2ZpbGUuU3RhdGU+KHtcclxuICBuYW1lOiAnUHJvZmlsZVN0YXRlJyxcclxuICBkZWZhdWx0czoge30gYXMgUHJvZmlsZS5TdGF0ZSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVN0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRQcm9maWxlKHsgcHJvZmlsZSB9OiBQcm9maWxlLlN0YXRlKTogUHJvZmlsZS5SZXNwb25zZSB7XHJcbiAgICByZXR1cm4gcHJvZmlsZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlKSB7fVxyXG5cclxuICBAQWN0aW9uKEdldFByb2ZpbGUpXHJcbiAgZ2V0UHJvZmlsZSh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFByb2ZpbGUuU3RhdGU+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9maWxlU2VydmljZS5nZXQoKS5waXBlKFxyXG4gICAgICB0YXAocHJvZmlsZSA9PlxyXG4gICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgcHJvZmlsZSxcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFVwZGF0ZVByb2ZpbGUpXHJcbiAgdXBkYXRlUHJvZmlsZSh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFByb2ZpbGUuU3RhdGU+LCB7IHBheWxvYWQgfTogVXBkYXRlUHJvZmlsZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvZmlsZVNlcnZpY2UudXBkYXRlKHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcChwcm9maWxlID0+XHJcbiAgICAgICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgICAgICBwcm9maWxlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oQ2hhbmdlUGFzc3dvcmQpXHJcbiAgY2hhbmdlUGFzc3dvcmQoXywgeyBwYXlsb2FkIH06IENoYW5nZVBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9maWxlU2VydmljZS5jaGFuZ2VQYXNzd29yZChwYXlsb2FkLCB0cnVlKTtcclxuICB9XHJcbn1cclxuIl19