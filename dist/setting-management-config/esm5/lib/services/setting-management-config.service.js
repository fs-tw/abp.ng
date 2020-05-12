/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/setting-management-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { addAbpRoutes, PatchRouteByName } from '@abp/ng.core';
import { getSettingTabs } from '@abp/ng.theme.shared';
import { Store } from '@ngxs/store';
import * as i0 from "@angular/core";
var SettingManagementConfigService = /** @class */ (function () {
    function SettingManagementConfigService(injector) {
        var _this = this;
        this.injector = injector;
        /** @type {?} */
        var route = (/** @type {?} */ ({
            name: "AbpSettingManagement::Settings" /* Settings */,
            path: 'setting-management',
            parentName: 'AbpUiNavigation::Menu:Administration',
            requiredPolicy: 'AbpAccount.SettingManagement',
            layout: "application" /* application */,
            order: 6,
            iconClass: 'fa fa-cog',
        }));
        addAbpRoutes(route);
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var tabs = getSettingTabs();
            if (!tabs || !tabs.length) {
                _this.store.dispatch(new PatchRouteByName('AbpSettingManagement::Settings', tslib_1.__assign({}, route, { invisible: true })));
            }
        }));
    }
    Object.defineProperty(SettingManagementConfigService.prototype, "store", {
        get: /**
         * @return {?}
         */
        function () {
            return this.injector.get(Store);
        },
        enumerable: true,
        configurable: true
    });
    SettingManagementConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SettingManagementConfigService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ SettingManagementConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SettingManagementConfigService_Factory() { return new SettingManagementConfigService(i0.ɵɵinject(i0.INJECTOR)); }, token: SettingManagementConfigService, providedIn: "root" });
    return SettingManagementConfigService;
}());
export { SettingManagementConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingManagementConfigService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5zZXR0aW5nLW1hbmFnZW1lbnQuY29uZmlnLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NldHRpbmctbWFuYWdlbWVudC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFlLGdCQUFnQixFQUFPLE1BQU0sY0FBYyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUdwQztJQVFFLHdDQUFvQixRQUFrQjtRQUF0QyxpQkFxQkM7UUFyQm1CLGFBQVEsR0FBUixRQUFRLENBQVU7O1lBQzlCLEtBQUssR0FBRyxtQkFBQTtZQUNaLElBQUksaURBQXVDO1lBQzNDLElBQUksRUFBRSxvQkFBb0I7WUFDMUIsVUFBVSxFQUFFLHNDQUFzQztZQUNsRCxjQUFjLEVBQUUsOEJBQThCO1lBQzlDLE1BQU0saUNBQXlCO1lBQy9CLEtBQUssRUFBRSxDQUFDO1lBQ1IsU0FBUyxFQUFFLFdBQVc7U0FDdkIsRUFBaUI7UUFFbEIsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBCLFVBQVU7OztRQUFDOztnQkFDSCxJQUFJLEdBQUcsY0FBYyxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN6QixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxnQkFBZ0IsQ0FBQyxnQ0FBZ0MsdUJBQU8sS0FBSyxJQUFFLFNBQVMsRUFBRSxJQUFJLElBQUcsQ0FDdEYsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBekJELHNCQUFJLGlEQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVJvQixRQUFROzs7eUNBQTdCO0NBb0NDLEFBOUJELElBOEJDO1NBM0JZLDhCQUE4Qjs7Ozs7O0lBSzdCLGtEQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGFkZEFicFJvdXRlcywgZUxheW91dFR5cGUsIFBhdGNoUm91dGVCeU5hbWUsIEFCUCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IGdldFNldHRpbmdUYWJzIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgZVNldHRpbmdNYW5hZ2VtZW50Um91dGVOYW1lcyB9IGZyb20gJ0BhYnAvbmcuc2V0dGluZy1tYW5hZ2VtZW50JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nTWFuYWdlbWVudENvbmZpZ1NlcnZpY2Uge1xyXG4gIGdldCBzdG9yZSgpOiBTdG9yZSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoU3RvcmUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIGNvbnN0IHJvdXRlID0ge1xyXG4gICAgICBuYW1lOiBlU2V0dGluZ01hbmFnZW1lbnRSb3V0ZU5hbWVzLlNldHRpbmdzLFxyXG4gICAgICBwYXRoOiAnc2V0dGluZy1tYW5hZ2VtZW50JyxcclxuICAgICAgcGFyZW50TmFtZTogJ0FicFVpTmF2aWdhdGlvbjo6TWVudTpBZG1pbmlzdHJhdGlvbicsXHJcbiAgICAgIHJlcXVpcmVkUG9saWN5OiAnQWJwQWNjb3VudC5TZXR0aW5nTWFuYWdlbWVudCcsXHJcbiAgICAgIGxheW91dDogZUxheW91dFR5cGUuYXBwbGljYXRpb24sXHJcbiAgICAgIG9yZGVyOiA2LFxyXG4gICAgICBpY29uQ2xhc3M6ICdmYSBmYS1jb2cnLFxyXG4gICAgfSBhcyBBQlAuRnVsbFJvdXRlO1xyXG5cclxuICAgIGFkZEFicFJvdXRlcyhyb3V0ZSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhYnMgPSBnZXRTZXR0aW5nVGFicygpO1xyXG4gICAgICBpZiAoIXRhYnMgfHwgIXRhYnMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcclxuICAgICAgICAgIG5ldyBQYXRjaFJvdXRlQnlOYW1lKCdBYnBTZXR0aW5nTWFuYWdlbWVudDo6U2V0dGluZ3MnLCB7IC4uLnJvdXRlLCBpbnZpc2libGU6IHRydWUgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==