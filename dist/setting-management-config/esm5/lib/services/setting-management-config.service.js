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
            name: 'AbpSettingManagement::Settings',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5zZXR0aW5nLW1hbmFnZW1lbnQuY29uZmlnLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NldHRpbmctbWFuYWdlbWVudC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFlLGdCQUFnQixFQUFPLE1BQU0sY0FBYyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUVwQztJQVFFLHdDQUFvQixRQUFrQjtRQUF0QyxpQkFxQkM7UUFyQm1CLGFBQVEsR0FBUixRQUFRLENBQVU7O1lBQzlCLEtBQUssR0FBRyxtQkFBQTtZQUNaLElBQUksRUFBRSxnQ0FBZ0M7WUFDdEMsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixVQUFVLEVBQUUsc0NBQXNDO1lBQ2xELGNBQWMsRUFBRSw4QkFBOEI7WUFDOUMsTUFBTSxpQ0FBeUI7WUFDL0IsS0FBSyxFQUFFLENBQUM7WUFDUixTQUFTLEVBQUUsV0FBVztTQUN2QixFQUFpQjtRQUVsQixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEIsVUFBVTs7O1FBQUM7O2dCQUNILElBQUksR0FBRyxjQUFjLEVBQUU7WUFDN0IsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGdCQUFnQixDQUFDLGdDQUFnQyx1QkFBTyxLQUFLLElBQUUsU0FBUyxFQUFFLElBQUksSUFBRyxDQUN0RixDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUF6QkQsc0JBQUksaURBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7O2dCQU5GLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUG9CLFFBQVE7Ozt5Q0FBN0I7Q0FtQ0MsQUE5QkQsSUE4QkM7U0EzQlksOEJBQThCOzs7Ozs7SUFLN0Isa0RBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYWRkQWJwUm91dGVzLCBlTGF5b3V0VHlwZSwgUGF0Y2hSb3V0ZUJ5TmFtZSwgQUJQIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgZ2V0U2V0dGluZ1RhYnMgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdNYW5hZ2VtZW50Q29uZmlnU2VydmljZSB7XHJcbiAgZ2V0IHN0b3JlKCk6IFN0b3JlIHtcclxuICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldChTdG9yZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgY29uc3Qgcm91dGUgPSB7XHJcbiAgICAgIG5hbWU6ICdBYnBTZXR0aW5nTWFuYWdlbWVudDo6U2V0dGluZ3MnLFxyXG4gICAgICBwYXRoOiAnc2V0dGluZy1tYW5hZ2VtZW50JyxcclxuICAgICAgcGFyZW50TmFtZTogJ0FicFVpTmF2aWdhdGlvbjo6TWVudTpBZG1pbmlzdHJhdGlvbicsXHJcbiAgICAgIHJlcXVpcmVkUG9saWN5OiAnQWJwQWNjb3VudC5TZXR0aW5nTWFuYWdlbWVudCcsXHJcbiAgICAgIGxheW91dDogZUxheW91dFR5cGUuYXBwbGljYXRpb24sXHJcbiAgICAgIG9yZGVyOiA2LFxyXG4gICAgICBpY29uQ2xhc3M6ICdmYSBmYS1jb2cnLFxyXG4gICAgfSBhcyBBQlAuRnVsbFJvdXRlO1xyXG5cclxuICAgIGFkZEFicFJvdXRlcyhyb3V0ZSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhYnMgPSBnZXRTZXR0aW5nVGFicygpO1xyXG4gICAgICBpZiAoIXRhYnMgfHwgIXRhYnMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcclxuICAgICAgICAgIG5ldyBQYXRjaFJvdXRlQnlOYW1lKCdBYnBTZXR0aW5nTWFuYWdlbWVudDo6U2V0dGluZ3MnLCB7IC4uLnJvdXRlLCBpbnZpc2libGU6IHRydWUgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==