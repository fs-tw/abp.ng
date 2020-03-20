/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/setting-management-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { addAbpRoutes, PatchRouteByName } from '@abp/ng.core';
import { getSettingTabs } from '@abp/ng.theme.shared';
import { Store } from '@ngxs/store';
import * as i0 from "@angular/core";
export class SettingManagementConfigService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        /** @type {?} */
        const route = (/** @type {?} */ ({
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
        () => {
            /** @type {?} */
            const tabs = getSettingTabs();
            if (!tabs || !tabs.length) {
                this.store.dispatch(new PatchRouteByName('AbpSettingManagement::Settings', Object.assign({}, route, { invisible: true })));
            }
        }));
    }
    /**
     * @return {?}
     */
    get store() {
        return this.injector.get(Store);
    }
}
SettingManagementConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SettingManagementConfigService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ SettingManagementConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SettingManagementConfigService_Factory() { return new SettingManagementConfigService(i0.ɵɵinject(i0.INJECTOR)); }, token: SettingManagementConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingManagementConfigService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5zZXR0aW5nLW1hbmFnZW1lbnQuY29uZmlnLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NldHRpbmctbWFuYWdlbWVudC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQWUsZ0JBQWdCLEVBQU8sTUFBTSxjQUFjLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBS3BDLE1BQU0sT0FBTyw4QkFBOEI7Ozs7SUFLekMsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTs7Y0FDOUIsS0FBSyxHQUFHLG1CQUFBO1lBQ1osSUFBSSxFQUFFLGdDQUFnQztZQUN0QyxJQUFJLEVBQUUsb0JBQW9CO1lBQzFCLFVBQVUsRUFBRSxzQ0FBc0M7WUFDbEQsY0FBYyxFQUFFLDhCQUE4QjtZQUM5QyxNQUFNLGlDQUF5QjtZQUMvQixLQUFLLEVBQUUsQ0FBQztZQUNSLFNBQVMsRUFBRSxXQUFXO1NBQ3ZCLEVBQWlCO1FBRWxCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwQixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7O2tCQUNSLElBQUksR0FBRyxjQUFjLEVBQUU7WUFDN0IsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGdCQUFnQixDQUFDLGdDQUFnQyxvQkFBTyxLQUFLLElBQUUsU0FBUyxFQUFFLElBQUksSUFBRyxDQUN0RixDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUF6QkQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUFORixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQb0IsUUFBUTs7Ozs7Ozs7SUFhZixrREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBhZGRBYnBSb3V0ZXMsIGVMYXlvdXRUeXBlLCBQYXRjaFJvdXRlQnlOYW1lLCBBQlAgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBnZXRTZXR0aW5nVGFicyB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ01hbmFnZW1lbnRDb25maWdTZXJ2aWNlIHtcclxuICBnZXQgc3RvcmUoKTogU3RvcmUge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KFN0b3JlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IHtcclxuICAgICAgbmFtZTogJ0FicFNldHRpbmdNYW5hZ2VtZW50OjpTZXR0aW5ncycsXHJcbiAgICAgIHBhdGg6ICdzZXR0aW5nLW1hbmFnZW1lbnQnLFxyXG4gICAgICBwYXJlbnROYW1lOiAnQWJwVWlOYXZpZ2F0aW9uOjpNZW51OkFkbWluaXN0cmF0aW9uJyxcclxuICAgICAgcmVxdWlyZWRQb2xpY3k6ICdBYnBBY2NvdW50LlNldHRpbmdNYW5hZ2VtZW50JyxcclxuICAgICAgbGF5b3V0OiBlTGF5b3V0VHlwZS5hcHBsaWNhdGlvbixcclxuICAgICAgb3JkZXI6IDYsXHJcbiAgICAgIGljb25DbGFzczogJ2ZhIGZhLWNvZycsXHJcbiAgICB9IGFzIEFCUC5GdWxsUm91dGU7XHJcblxyXG4gICAgYWRkQWJwUm91dGVzKHJvdXRlKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgdGFicyA9IGdldFNldHRpbmdUYWJzKCk7XHJcbiAgICAgIGlmICghdGFicyB8fCAhdGFicy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgICAgbmV3IFBhdGNoUm91dGVCeU5hbWUoJ0FicFNldHRpbmdNYW5hZ2VtZW50OjpTZXR0aW5ncycsIHsgLi4ucm91dGUsIGludmlzaWJsZTogdHJ1ZSB9KSxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19