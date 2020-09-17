import { __decorate, __metadata } from "tslib";
import { fadeIn } from '@abp/ng.theme.shared';
import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetProfile, ProfileState } from '@abp/ng.core';
let ManageProfileComponent = class ManageProfileComponent {
    constructor(store) {
        this.store = store;
        this.selectedTab = 0;
        this.changePasswordKey = "Account.ChangePasswordComponent" /* ChangePassword */;
        this.personalSettingsKey = "Account.PersonalSettingsComponent" /* PersonalSettings */;
    }
    ngOnInit() {
        this.store.dispatch(new GetProfile()).subscribe(() => {
            this.isProfileLoaded = true;
            if (this.store.selectSnapshot(ProfileState.getProfile).isExternal) {
                this.hideChangePasswordTab = true;
                this.selectedTab = 1;
            }
        });
    }
};
ManageProfileComponent = __decorate([
    Component({
        selector: 'abp-manage-profile',
        template: "<div id=\"AbpContentToolbar\"></div>\r\n\r\n<div class=\"card border-0 shadow-sm min-h-400\" [abpLoading]=\"!isProfileLoaded\">\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-md-3\">\r\n        <ul class=\"nav flex-column nav-pills\" id=\"nav-tab\" role=\"tablist\">\r\n          <li\r\n            *ngIf=\"!hideChangePasswordTab && isProfileLoaded\"\r\n            class=\"nav-item\"\r\n            (click)=\"selectedTab = 0\"\r\n          >\r\n            <a\r\n              class=\"nav-link\"\r\n              [ngClass]=\"{ active: selectedTab === 0 }\"\r\n              role=\"tab\"\r\n              href=\"javascript:void(0)\"\r\n              >{{ 'AbpUi::ChangePassword' | abpLocalization }}</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item mb-2\" (click)=\"selectedTab = 1\">\r\n            <a\r\n              class=\"nav-link\"\r\n              [ngClass]=\"{ active: selectedTab === 1 }\"\r\n              role=\"tab\"\r\n              href=\"javascript:void(0)\"\r\n              >{{ 'AbpAccount::PersonalSettings' | abpLocalization }}</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div *ngIf=\"isProfileLoaded\" class=\"col-12 col-md-9\">\r\n        <div class=\"tab-content\" *ngIf=\"selectedTab === 0\" [@fadeIn]>\r\n          <div class=\"tab-pane active\" role=\"tabpanel\">\r\n            <h4>\r\n              {{ 'AbpIdentity::ChangePassword' | abpLocalization }}\r\n              <hr />\r\n            </h4>\r\n            <abp-change-password-form\r\n              *abpReplaceableTemplate=\"{ componentKey: changePasswordKey }\"\r\n            ></abp-change-password-form>\r\n          </div>\r\n        </div>\r\n        <div class=\"tab-content\" *ngIf=\"selectedTab === 1\" [@fadeIn]>\r\n          <div class=\"tab-pane active\" role=\"tabpanel\">\r\n            <h4>\r\n              {{ 'AbpIdentity::PersonalSettings' | abpLocalization }}\r\n              <hr />\r\n            </h4>\r\n            <abp-personal-settings-form\r\n              *abpReplaceableTemplate=\"{ componentKey: personalSettingsKey }\"\r\n            ></abp-personal-settings-form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
        animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])],
        styles: [`
      .min-h-400 {
        min-height: 400px;
      }
    `]
    }),
    __metadata("design:paramtypes", [Store])
], ManageProfileComponent);
export { ManageProfileComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWNjb3VudC9zcmMvbGliL2NvbXBvbmVudHMvbWFuYWdlLXByb2ZpbGUvbWFuYWdlLXByb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBY3hELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBV2pDLFlBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBVmhDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLHNCQUFpQiwwREFBcUM7UUFFdEQsd0JBQW1CLDhEQUF1QztJQU12QixDQUFDO0lBRXBDLFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQXRCWSxzQkFBc0I7SUFabEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixpdkVBQThDO1FBQzlDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFFM0U7Ozs7S0FJQztLQUVKLENBQUM7cUNBWTJCLEtBQUs7R0FYckIsc0JBQXNCLENBc0JsQztTQXRCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmYWRlSW4gfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IHRyYW5zaXRpb24sIHRyaWdnZXIsIHVzZUFuaW1hdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBlQWNjb3VudENvbXBvbmVudHMgfSBmcm9tICcuLi8uLi9lbnVtcy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IEdldFByb2ZpbGUsIFByb2ZpbGVTdGF0ZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1tYW5hZ2UtcHJvZmlsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21hbmFnZS1wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcclxuICBhbmltYXRpb25zOiBbdHJpZ2dlcignZmFkZUluJywgW3RyYW5zaXRpb24oJzplbnRlcicsIHVzZUFuaW1hdGlvbihmYWRlSW4pKV0pXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLm1pbi1oLTQwMCB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICAgIH1cclxuICAgIGAsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hbmFnZVByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHNlbGVjdGVkVGFiID0gMDtcclxuXHJcbiAgY2hhbmdlUGFzc3dvcmRLZXkgPSBlQWNjb3VudENvbXBvbmVudHMuQ2hhbmdlUGFzc3dvcmQ7XHJcblxyXG4gIHBlcnNvbmFsU2V0dGluZ3NLZXkgPSBlQWNjb3VudENvbXBvbmVudHMuUGVyc29uYWxTZXR0aW5ncztcclxuXHJcbiAgaXNQcm9maWxlTG9hZGVkOiBib29sZWFuO1xyXG5cclxuICBoaWRlQ2hhbmdlUGFzc3dvcmRUYWI6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFByb2ZpbGUoKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5pc1Byb2ZpbGVMb2FkZWQgPSB0cnVlO1xyXG4gICAgICBpZiAodGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChQcm9maWxlU3RhdGUuZ2V0UHJvZmlsZSkuaXNFeHRlcm5hbCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUNoYW5nZVBhc3N3b3JkVGFiID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==