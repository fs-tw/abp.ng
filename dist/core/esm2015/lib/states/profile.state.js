import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Action, Selector, State } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ChangePassword, GetProfile, UpdateProfile } from '../actions/profile.actions';
import { ProfileService } from '../services/profile.service';
let ProfileState = class ProfileState {
    constructor(profileService) {
        this.profileService = profileService;
    }
    static getProfile({ profile }) {
        return profile;
    }
    getProfile({ patchState }) {
        return this.profileService.get().pipe(tap(profile => patchState({
            profile,
        })));
    }
    updateProfile({ patchState }, { payload }) {
        return this.profileService.update(payload).pipe(tap(profile => patchState({
            profile,
        })));
    }
    changePassword(_, { payload }) {
        return this.profileService.changePassword(payload, true);
    }
};
ProfileState.decorators = [
    { type: Injectable }
];
ProfileState.ctorParameters = () => [
    { type: ProfileService }
];
__decorate([
    Action(GetProfile),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfileState.prototype, "getProfile", null);
__decorate([
    Action(UpdateProfile),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateProfile]),
    __metadata("design:returntype", void 0)
], ProfileState.prototype, "updateProfile", null);
__decorate([
    Action(ChangePassword),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ChangePassword]),
    __metadata("design:returntype", void 0)
], ProfileState.prototype, "changePassword", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ProfileState, "getProfile", null);
ProfileState = __decorate([
    State({
        name: 'ProfileState',
        defaults: {},
    }),
    __metadata("design:paramtypes", [ProfileService])
], ProfileState);
export { ProfileState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zdGF0ZXMvcHJvZmlsZS5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7SUFPaEQsWUFBWSxTQUFaLFlBQVk7SUFNdkIsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQztJQUp0RCxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFpQjtRQUMxQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBS0QsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUErQjtRQUNwRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUNuQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDWixVQUFVLENBQUM7WUFDVCxPQUFPO1NBQ1IsQ0FBQyxDQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7SUFHRCxhQUFhLENBQUMsRUFBRSxVQUFVLEVBQStCLEVBQUUsRUFBRSxPQUFPLEVBQWlCO1FBQ25GLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM3QyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDWixVQUFVLENBQUM7WUFDVCxPQUFPO1NBQ1IsQ0FBQyxDQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7SUFHRCxjQUFjLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFrQjtRQUMzQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBQ0YsQ0FBQTs7WUFuQ0EsVUFBVTs7O1lBTkYsY0FBYzs7QUFnQnJCO0lBREMsTUFBTSxDQUFDLFVBQVUsQ0FBQzs7Ozs4Q0FTbEI7QUFHRDtJQURDLE1BQU0sQ0FBQyxhQUFhLENBQUM7OzZDQUNrRCxhQUFhOztpREFRcEY7QUFHRDtJQURDLE1BQU0sQ0FBQyxjQUFjLENBQUM7OzZDQUNRLGNBQWM7O2tEQUU1QztBQS9CRDtJQURDLFFBQVEsRUFBRTs7OztvQ0FHVjtBQUpVLFlBQVk7SUFMeEIsS0FBSyxDQUFnQjtRQUNwQixJQUFJLEVBQUUsY0FBYztRQUNwQixRQUFRLEVBQUUsRUFBbUI7S0FDOUIsQ0FBQztxQ0FRb0MsY0FBYztHQU52QyxZQUFZLENBa0N4QjtTQWxDWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0IH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkLCBHZXRQcm9maWxlLCBVcGRhdGVQcm9maWxlIH0gZnJvbSAnLi4vYWN0aW9ucy9wcm9maWxlLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi4vbW9kZWxzL3Byb2ZpbGUnO1xyXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2ZpbGUuc2VydmljZSc7XHJcblxyXG5AU3RhdGU8UHJvZmlsZS5TdGF0ZT4oe1xyXG4gIG5hbWU6ICdQcm9maWxlU3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7fSBhcyBQcm9maWxlLlN0YXRlLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlU3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldFByb2ZpbGUoeyBwcm9maWxlIH06IFByb2ZpbGUuU3RhdGUpOiBQcm9maWxlLlJlc3BvbnNlIHtcclxuICAgIHJldHVybiBwcm9maWxlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UpIHt9XHJcblxyXG4gIEBBY3Rpb24oR2V0UHJvZmlsZSlcclxuICBnZXRQcm9maWxlKHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8UHJvZmlsZS5TdGF0ZT4pIHtcclxuICAgIHJldHVybiB0aGlzLnByb2ZpbGVTZXJ2aWNlLmdldCgpLnBpcGUoXHJcbiAgICAgIHRhcChwcm9maWxlID0+XHJcbiAgICAgICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgICAgICBwcm9maWxlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oVXBkYXRlUHJvZmlsZSlcclxuICB1cGRhdGVQcm9maWxlKHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8UHJvZmlsZS5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBVcGRhdGVQcm9maWxlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9maWxlU2VydmljZS51cGRhdGUocGF5bG9hZCkucGlwZShcclxuICAgICAgdGFwKHByb2ZpbGUgPT5cclxuICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgIHByb2ZpbGUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihDaGFuZ2VQYXNzd29yZClcclxuICBjaGFuZ2VQYXNzd29yZChfLCB7IHBheWxvYWQgfTogQ2hhbmdlUGFzc3dvcmQpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2ZpbGVTZXJ2aWNlLmNoYW5nZVBhc3N3b3JkKHBheWxvYWQsIHRydWUpO1xyXG4gIH1cclxufVxyXG4iXX0=