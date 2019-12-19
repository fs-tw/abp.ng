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
export class SettingManagementConfigService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        /** @type {?} */
        const route = (/** @type {?} */ ({
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
}
SettingManagementConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SettingManagementConfigService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ SettingManagementConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SettingManagementConfigService_Factory() { return new SettingManagementConfigService(i0.ɵɵinject(i1.Store)); }, token: SettingManagementConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingManagementConfigService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL3NldHRpbmctbWFuYWdlbWVudC9jb25maWcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2V0dGluZy1tYW5hZ2VtZW50LWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFzQyxNQUFNLGNBQWMsQ0FBQztBQUVoRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFLcEMsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQUN6QyxZQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTzs7Y0FDeEIsS0FBSyxHQUFHLG1CQUFBO1lBQ1osSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixJQUFJLEVBQUUsb0JBQW9CO1lBQzFCLFVBQVUsRUFBRSxzQ0FBc0M7O1lBRWxELE1BQU0saUNBQXlCO1lBQy9CLEtBQUssRUFBRSxDQUFDO1lBQ1IsU0FBUyxFQUFFLFdBQVc7WUFDdEIsUUFBUSxFQUFFO2dCQUNSO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsS0FBSyxFQUFFLENBQUM7b0JBQ1IsY0FBYyxFQUFFLDZCQUE2QjtpQkFDOUM7YUFDRjtTQUNGLEVBQWlCO1FBRWxCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwQixxQkFBcUI7UUFDckIsbUNBQW1DO1FBQ25DLGlDQUFpQztRQUNqQyxrSEFBa0g7UUFDbEgsTUFBTTtRQUNOLE1BQU07SUFDUixDQUFDOzs7WUEvQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBSlEsS0FBSzs7Ozs7Ozs7SUFNQSwrQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGFkZEFicFJvdXRlcywgZUxheW91dFR5cGUsIFBhdGNoUm91dGVCeU5hbWUsIEFCUCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IGdldFNldHRpbmdUYWJzIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nTWFuYWdlbWVudENvbmZpZ1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IHtcclxuICAgICAgbmFtZTogJ1NldHRpbmcgbWFuYWdlbWVudCcsXHJcbiAgICAgIHBhdGg6ICdzZXR0aW5nLW1hbmFnZW1lbnQnLFxyXG4gICAgICBwYXJlbnROYW1lOiAnQWJwVWlOYXZpZ2F0aW9uOjpNZW51OkFkbWluaXN0cmF0aW9uJyxcclxuICAgICAgLy9yZXF1aXJlZFBvbGljeTogJ0FicEFjY291bnQuU2V0dGluZ01hbmFnZW1lbnQnLFxyXG4gICAgICBsYXlvdXQ6IGVMYXlvdXRUeXBlLmFwcGxpY2F0aW9uLFxyXG4gICAgICBvcmRlcjogNixcclxuICAgICAgaWNvbkNsYXNzOiAnZmEgZmEtY29nJyxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXRoOiAnc2V0dGluZ3MnLFxyXG4gICAgICAgICAgbmFtZTogJ1NldHRpbmdzJyxcclxuICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgcmVxdWlyZWRQb2xpY3k6ICdBYnBUZW5hbnRNYW5hZ2VtZW50LlRlbmFudHMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sICAgICAgXHJcbiAgICB9IGFzIEFCUC5GdWxsUm91dGU7XHJcblxyXG4gICAgYWRkQWJwUm91dGVzKHJvdXRlKTtcclxuXHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgY29uc3QgdGFicyA9IGdldFNldHRpbmdUYWJzKCk7XHJcbiAgICAvLyAgIGlmICghdGFicyB8fCAhdGFicy5sZW5ndGgpIHtcclxuICAgIC8vICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBQYXRjaFJvdXRlQnlOYW1lKCdBYnBTZXR0aW5nTWFuYWdlbWVudDo6U2V0dGluZ3MnLCB7IC4uLnJvdXRlLCBpbnZpc2libGU6IHRydWUgfSkpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuICB9XHJcbn1cclxuIl19