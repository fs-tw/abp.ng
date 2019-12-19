/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/setting-management-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { addAbpRoutes } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
var SettingManagementConfigService = /** @class */ (function () {
    function SettingManagementConfigService(store) {
        this.store = store;
        /** @type {?} */
        var route = (/** @type {?} */ ({
            name: 'Setting management',
            path: 'setting-management',
            parentName: 'AbpUiNavigation::Menu:Administration',
            //requiredPolicy: 'AbpAccount.SettingManagement',
            layout: "application" /* application */,
            order: 6,
            iconClass: 'fa fa-cog',
            children: [
                {
                    path: 'settings',
                    name: 'Settings',
                    order: 1,
                    requiredPolicy: 'AbpTenantManagement.Tenants',
                },
            ],
        }));
        addAbpRoutes(route);
        // setTimeout(() => {
        //   const tabs = getSettingTabs();
        //   if (!tabs || !tabs.length) {
        //     this.store.dispatch(new PatchRouteByName('AbpSettingManagement::Settings', { ...route, invisible: true }));
        //   }
        // });
    }
    SettingManagementConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SettingManagementConfigService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ SettingManagementConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SettingManagementConfigService_Factory() { return new SettingManagementConfigService(i0.ɵɵinject(i1.Store)); }, token: SettingManagementConfigService, providedIn: "root" });
    return SettingManagementConfigService;
}());
export { SettingManagementConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingManagementConfigService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL3NldHRpbmctbWFuYWdlbWVudC9jb25maWcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2V0dGluZy1tYW5hZ2VtZW50LWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFzQyxNQUFNLGNBQWMsQ0FBQztBQUVoRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFFcEM7SUFJRSx3Q0FBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87O1lBQ3hCLEtBQUssR0FBRyxtQkFBQTtZQUNaLElBQUksRUFBRSxvQkFBb0I7WUFDMUIsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixVQUFVLEVBQUUsc0NBQXNDOztZQUVsRCxNQUFNLGlDQUF5QjtZQUMvQixLQUFLLEVBQUUsQ0FBQztZQUNSLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFFBQVEsRUFBRTtnQkFDUjtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLEtBQUssRUFBRSxDQUFDO29CQUNSLGNBQWMsRUFBRSw2QkFBNkI7aUJBQzlDO2FBQ0Y7U0FDRixFQUFpQjtRQUVsQixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEIscUJBQXFCO1FBQ3JCLG1DQUFtQztRQUNuQyxpQ0FBaUM7UUFDakMsa0hBQWtIO1FBQ2xILE1BQU07UUFDTixNQUFNO0lBQ1IsQ0FBQzs7Z0JBL0JGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsS0FBSzs7O3lDQUhkO0NBcUNDLEFBaENELElBZ0NDO1NBN0JZLDhCQUE4Qjs7Ozs7O0lBQzdCLCtDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYWRkQWJwUm91dGVzLCBlTGF5b3V0VHlwZSwgUGF0Y2hSb3V0ZUJ5TmFtZSwgQUJQIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgZ2V0U2V0dGluZ1RhYnMgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdNYW5hZ2VtZW50Q29uZmlnU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUpIHtcclxuICAgIGNvbnN0IHJvdXRlID0ge1xyXG4gICAgICBuYW1lOiAnU2V0dGluZyBtYW5hZ2VtZW50JyxcclxuICAgICAgcGF0aDogJ3NldHRpbmctbWFuYWdlbWVudCcsXHJcbiAgICAgIHBhcmVudE5hbWU6ICdBYnBVaU5hdmlnYXRpb246Ok1lbnU6QWRtaW5pc3RyYXRpb24nLFxyXG4gICAgICAvL3JlcXVpcmVkUG9saWN5OiAnQWJwQWNjb3VudC5TZXR0aW5nTWFuYWdlbWVudCcsXHJcbiAgICAgIGxheW91dDogZUxheW91dFR5cGUuYXBwbGljYXRpb24sXHJcbiAgICAgIG9yZGVyOiA2LFxyXG4gICAgICBpY29uQ2xhc3M6ICdmYSBmYS1jb2cnLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhdGg6ICdzZXR0aW5ncycsXHJcbiAgICAgICAgICBuYW1lOiAnU2V0dGluZ3MnLFxyXG4gICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICByZXF1aXJlZFBvbGljeTogJ0FicFRlbmFudE1hbmFnZW1lbnQuVGVuYW50cycsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSwgICAgICBcclxuICAgIH0gYXMgQUJQLkZ1bGxSb3V0ZTtcclxuXHJcbiAgICBhZGRBYnBSb3V0ZXMocm91dGUpO1xyXG5cclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICBjb25zdCB0YWJzID0gZ2V0U2V0dGluZ1RhYnMoKTtcclxuICAgIC8vICAgaWYgKCF0YWJzIHx8ICF0YWJzLmxlbmd0aCkge1xyXG4gICAgLy8gICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFBhdGNoUm91dGVCeU5hbWUoJ0FicFNldHRpbmdNYW5hZ2VtZW50OjpTZXR0aW5ncycsIHsgLi4ucm91dGUsIGludmlzaWJsZTogdHJ1ZSB9KSk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=