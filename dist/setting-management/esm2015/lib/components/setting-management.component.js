import { __decorate, __metadata } from "tslib";
import { SettingTabsService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { SetSelectedSettingTab } from '../actions/setting-management.actions';
import { SettingManagementState } from '../states/setting-management.state';
let SettingManagementComponent = class SettingManagementComponent {
    constructor(store, settingTabs) {
        this.store = store;
        this.settingTabs = settingTabs;
        this.subscription = new Subscription();
        this.settings = [];
        this.trackByFn = (_, item) => item.name;
    }
    set selected(value) {
        this.store.dispatch(new SetSelectedSettingTab(value));
    }
    get selected() {
        const value = this.store.selectSnapshot(SettingManagementState.getSelectedTab);
        return (value === null || value === void 0 ? void 0 : value.component) ? value : this.settings[0] || {};
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        this.subscription.add(this.settingTabs.visible$.subscribe(settings => {
            this.settings = settings;
            if (!this.selected)
                this.selected = this.settings[0];
        }));
    }
};
SettingManagementComponent = __decorate([
    Component({
        selector: 'abp-setting-management',
        template: "<div class=\"row entry-row\">\r\n  <div class=\"col-auto\">\r\n    <h1 class=\"content-header-title\">{{ 'AbpSettingManagement::Settings' | abpLocalization }}</h1>\r\n  </div>\r\n  <div id=\"breadcrumb\" class=\"col-lg-auto pl-lg-0\">\r\n    <abp-breadcrumb></abp-breadcrumb>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"text-lg-right pt-2\" id=\"AbpContentToolbar\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"SettingManagementWrapper\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-3\">\r\n          <ul class=\"nav flex-column nav-pills\" id=\"nav-tab\" role=\"tablist\">\r\n            <li\r\n              *abpFor=\"let setting of settings; trackBy: trackByFn\"\r\n              (click)=\"selected = setting\"\r\n              class=\"nav-item pointer\"\r\n              [abpPermission]=\"setting.requiredPolicy\"\r\n            >\r\n              <a\r\n                class=\"nav-link\"\r\n                [id]=\"setting.name + '-tab'\"\r\n                role=\"tab\"\r\n                [class.active]=\"setting.name === selected.name\"\r\n                >{{ setting.name | abpLocalization }}</a\r\n              >\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-12 col-md-9\">\r\n          <div *ngIf=\"settings.length\" class=\"tab-content\">\r\n            <div class=\"tab-pane fade show active\" [id]=\"selected.name + '-tab'\" role=\"tabpanel\">\r\n              <ng-container *ngComponentOutlet=\"selected.component\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [Store, SettingTabsService])
], SettingManagementComponent);
export { SettingManagementComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NldHRpbmctbWFuYWdlbWVudC9zcmMvbGliL2NvbXBvbmVudHMvc2V0dGluZy1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFPLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQXNDLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQU01RSxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQWVyQyxZQUFvQixLQUFZLEVBQVUsV0FBK0I7UUFBckQsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQWRqRSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUMsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQVd6QixjQUFTLEdBQTZCLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUVlLENBQUM7SUFYN0UsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRS9FLE9BQU8sQ0FBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUssRUFBYyxDQUFDO0lBQ3hFLENBQUM7SUFNRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFFekIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO2dCQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUE5QlksMEJBQTBCO0lBSnRDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsOHFEQUFrRDtLQUNuRCxDQUFDO3FDQWdCMkIsS0FBSyxFQUF1QixrQkFBa0I7R0FmOUQsMEJBQTBCLENBOEJ0QztTQTlCWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQlAsIFNldHRpbmdUYWJzU2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFRyYWNrQnlGdW5jdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNldFNlbGVjdGVkU2V0dGluZ1RhYiB9IGZyb20gJy4uL2FjdGlvbnMvc2V0dGluZy1tYW5hZ2VtZW50LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBTZXR0aW5nTWFuYWdlbWVudFN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL3NldHRpbmctbWFuYWdlbWVudC5zdGF0ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1zZXR0aW5nLW1hbmFnZW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5nLW1hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ01hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgc2V0dGluZ3M6IEFCUC5UYWJbXSA9IFtdO1xyXG5cclxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IEFCUC5UYWIpIHtcclxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNldFNlbGVjdGVkU2V0dGluZ1RhYih2YWx1ZSkpO1xyXG4gIH1cclxuICBnZXQgc2VsZWN0ZWQoKTogQUJQLlRhYiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2V0dGluZ01hbmFnZW1lbnRTdGF0ZS5nZXRTZWxlY3RlZFRhYik7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlPy5jb21wb25lbnQgPyB2YWx1ZSA6IHRoaXMuc2V0dGluZ3NbMF0gfHwgKHt9IGFzIEFCUC5UYWIpO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248QUJQLlRhYj4gPSAoXywgaXRlbSkgPT4gaXRlbS5uYW1lO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSwgcHJpdmF0ZSBzZXR0aW5nVGFiczogU2V0dGluZ1RhYnNTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcclxuICAgICAgdGhpcy5zZXR0aW5nVGFicy52aXNpYmxlJC5zdWJzY3JpYmUoc2V0dGluZ3MgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkKSB0aGlzLnNlbGVjdGVkID0gdGhpcy5zZXR0aW5nc1swXTtcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=