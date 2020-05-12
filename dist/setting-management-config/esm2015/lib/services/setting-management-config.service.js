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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5zZXR0aW5nLW1hbmFnZW1lbnQuY29uZmlnLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NldHRpbmctbWFuYWdlbWVudC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQWUsZ0JBQWdCLEVBQU8sTUFBTSxjQUFjLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBTXBDLE1BQU0sT0FBTyw4QkFBOEI7Ozs7SUFLekMsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTs7Y0FDOUIsS0FBSyxHQUFHLG1CQUFBO1lBQ1osSUFBSSxpREFBdUM7WUFDM0MsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixVQUFVLEVBQUUsc0NBQXNDO1lBQ2xELGNBQWMsRUFBRSw4QkFBOEI7WUFDOUMsTUFBTSxpQ0FBeUI7WUFDL0IsS0FBSyxFQUFFLENBQUM7WUFDUixTQUFTLEVBQUUsV0FBVztTQUN2QixFQUFpQjtRQUVsQixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFOztrQkFDUixJQUFJLEdBQUcsY0FBYyxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxnQkFBZ0IsQ0FBQyxnQ0FBZ0Msb0JBQU8sS0FBSyxJQUFFLFNBQVMsRUFBRSxJQUFJLElBQUcsQ0FDdEYsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBekJELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBTkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUm9CLFFBQVE7Ozs7Ozs7O0lBY2Ysa0RBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYWRkQWJwUm91dGVzLCBlTGF5b3V0VHlwZSwgUGF0Y2hSb3V0ZUJ5TmFtZSwgQUJQIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgZ2V0U2V0dGluZ1RhYnMgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBlU2V0dGluZ01hbmFnZW1lbnRSb3V0ZU5hbWVzIH0gZnJvbSAnQGFicC9uZy5zZXR0aW5nLW1hbmFnZW1lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdNYW5hZ2VtZW50Q29uZmlnU2VydmljZSB7XHJcbiAgZ2V0IHN0b3JlKCk6IFN0b3JlIHtcclxuICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldChTdG9yZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgY29uc3Qgcm91dGUgPSB7XHJcbiAgICAgIG5hbWU6IGVTZXR0aW5nTWFuYWdlbWVudFJvdXRlTmFtZXMuU2V0dGluZ3MsXHJcbiAgICAgIHBhdGg6ICdzZXR0aW5nLW1hbmFnZW1lbnQnLFxyXG4gICAgICBwYXJlbnROYW1lOiAnQWJwVWlOYXZpZ2F0aW9uOjpNZW51OkFkbWluaXN0cmF0aW9uJyxcclxuICAgICAgcmVxdWlyZWRQb2xpY3k6ICdBYnBBY2NvdW50LlNldHRpbmdNYW5hZ2VtZW50JyxcclxuICAgICAgbGF5b3V0OiBlTGF5b3V0VHlwZS5hcHBsaWNhdGlvbixcclxuICAgICAgb3JkZXI6IDYsXHJcbiAgICAgIGljb25DbGFzczogJ2ZhIGZhLWNvZycsXHJcbiAgICB9IGFzIEFCUC5GdWxsUm91dGU7XHJcblxyXG4gICAgYWRkQWJwUm91dGVzKHJvdXRlKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgdGFicyA9IGdldFNldHRpbmdUYWJzKCk7XHJcbiAgICAgIGlmICghdGFicyB8fCAhdGFicy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgICAgbmV3IFBhdGNoUm91dGVCeU5hbWUoJ0FicFNldHRpbmdNYW5hZ2VtZW50OjpTZXR0aW5ncycsIHsgLi4ucm91dGUsIGludmlzaWJsZTogdHJ1ZSB9KSxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19