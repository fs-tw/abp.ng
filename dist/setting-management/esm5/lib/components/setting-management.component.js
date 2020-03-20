/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/setting-management.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ConfigState } from '@abp/ng.core';
import { getSettingTabs } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetSelectedSettingTab } from '../actions/setting-management.actions';
import { SettingManagementState } from '../states/setting-management.state';
var SettingManagementComponent = /** @class */ (function () {
    function SettingManagementComponent(store) {
        this.store = store;
        this.settings = [];
        this.trackByFn = (/**
         * @param {?} _
         * @param {?} item
         * @return {?}
         */
        function (_, item) { return item.name; });
    }
    Object.defineProperty(SettingManagementComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value = this.store.selectSnapshot(SettingManagementState.getSelectedTab);
            if ((!value || !value.component) && this.settings.length) {
                return this.settings[0];
            }
            return value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.store.dispatch(new SetSelectedSettingTab(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SettingManagementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.settings = getSettingTabs()
            .filter((/**
         * @param {?} setting
         * @return {?}
         */
        function (setting) {
            return _this.store.selectSnapshot(ConfigState.getGrantedPolicy(setting.requiredPolicy));
        }))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a.order - b.order; }));
        if (!this.selected && this.settings.length) {
            this.selected = this.settings[0];
        }
    };
    SettingManagementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-setting-management',
                    template: "<div class=\"row entry-row\">\r\n  <div class=\"col-auto\">\r\n    <h1 class=\"content-header-title\">{{ 'AbpSettingManagement::Settings' | abpLocalization }}</h1>\r\n  </div>\r\n  <div id=\"breadcrumb\" class=\"col-lg-auto pl-lg-0\">\r\n    <abp-breadcrumb></abp-breadcrumb>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"text-lg-right pt-2\" id=\"AbpContentToolbar\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"SettingManagementWrapper\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-3\">\r\n          <ul class=\"nav flex-column nav-pills\" id=\"nav-tab\" role=\"tablist\">\r\n            <li\r\n              *abpFor=\"let setting of settings; trackBy: trackByFn\"\r\n              (click)=\"selected = setting\"\r\n              class=\"nav-item pointer\"\r\n              [abpPermission]=\"setting.requiredPolicy\"\r\n            >\r\n              <a\r\n                class=\"nav-link\"\r\n                [id]=\"setting.name + '-tab'\"\r\n                role=\"tab\"\r\n                [class.active]=\"setting.name === selected.name\"\r\n                >{{ setting.name | abpLocalization }}</a\r\n              >\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-12 col-md-9\">\r\n          <div *ngIf=\"settings.length\" class=\"tab-content\">\r\n            <div class=\"tab-pane fade show active\" [id]=\"selected.name + '-tab'\" role=\"tabpanel\">\r\n              <ng-container *ngComponentOutlet=\"selected.component\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
                }] }
    ];
    /** @nocollapse */
    SettingManagementComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return SettingManagementComponent;
}());
export { SettingManagementComponent };
if (false) {
    /** @type {?} */
    SettingManagementComponent.prototype.settings;
    /** @type {?} */
    SettingManagementComponent.prototype.trackByFn;
    /**
     * @type {?}
     * @private
     */
    SettingManagementComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuc2V0dGluZy1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2V0dGluZy1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxTQUFTLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFNUU7SUFzQkUsb0NBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBakJoQyxhQUFRLEdBQWlCLEVBQUUsQ0FBQztRQWU1QixjQUFTOzs7OztRQUFnQyxVQUFDLENBQUMsRUFBRSxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFULENBQVMsRUFBQztJQUU3QixDQUFDO0lBZnBDLHNCQUFJLGdEQUFROzs7O1FBR1o7O2dCQUNRLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxjQUFjLENBQUM7WUFFOUUsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUN4RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekI7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7Ozs7O1FBWEQsVUFBYSxLQUFpQjtZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQzs7O09BQUE7Ozs7SUFlRCw2Q0FBUTs7O0lBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxFQUFFO2FBQzdCLE1BQU07Ozs7UUFBQyxVQUFBLE9BQU87WUFDYixPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFBL0UsQ0FBK0UsRUFDaEY7YUFDQSxJQUFJOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBakIsQ0FBaUIsRUFBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsOHFEQUFrRDtpQkFDbkQ7Ozs7Z0JBUFEsS0FBSzs7SUF1Q2QsaUNBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQS9CWSwwQkFBMEI7OztJQUNyQyw4Q0FBNEI7O0lBZTVCLCtDQUFnRTs7Ozs7SUFFcEQsMkNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBnZXRTZXR0aW5nVGFicywgU2V0dGluZ1RhYiB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFRyYWNrQnlGdW5jdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgU2V0U2VsZWN0ZWRTZXR0aW5nVGFiIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXR0aW5nLW1hbmFnZW1lbnQuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFNldHRpbmdNYW5hZ2VtZW50U3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvc2V0dGluZy1tYW5hZ2VtZW50LnN0YXRlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLXNldHRpbmctbWFuYWdlbWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmctbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nTWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgc2V0dGluZ3M6IFNldHRpbmdUYWJbXSA9IFtdO1xyXG5cclxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IFNldHRpbmdUYWIpIHtcclxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNldFNlbGVjdGVkU2V0dGluZ1RhYih2YWx1ZSkpO1xyXG4gIH1cclxuICBnZXQgc2VsZWN0ZWQoKTogU2V0dGluZ1RhYiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2V0dGluZ01hbmFnZW1lbnRTdGF0ZS5nZXRTZWxlY3RlZFRhYik7XHJcblxyXG4gICAgaWYgKCghdmFsdWUgfHwgIXZhbHVlLmNvbXBvbmVudCkgJiYgdGhpcy5zZXR0aW5ncy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3NbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248U2V0dGluZ1RhYj4gPSAoXywgaXRlbSkgPT4gaXRlbS5uYW1lO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gZ2V0U2V0dGluZ1RhYnMoKVxyXG4gICAgICAuZmlsdGVyKHNldHRpbmcgPT5cclxuICAgICAgICB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldEdyYW50ZWRQb2xpY3koc2V0dGluZy5yZXF1aXJlZFBvbGljeSkpLFxyXG4gICAgICApXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XHJcblxyXG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkICYmIHRoaXMuc2V0dGluZ3MubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNldHRpbmdzWzBdO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=