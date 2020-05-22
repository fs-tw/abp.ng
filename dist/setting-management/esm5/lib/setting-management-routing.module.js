/**
 * @fileoverview added by tsickle
 * Generated from: lib/setting-management-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DynamicLayoutComponent, ReplaceableRouteContainerComponent, AuthGuard, } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingManagementComponent } from './components/setting-management.component';
var ɵ0 = {
    requiredPolicy: 'AbpAccount.SettingManagement',
    replaceableComponent: (/** @type {?} */ ({
        key: "SettingManagement.SettingManagementComponent" /* SettingManagement */,
        defaultComponent: SettingManagementComponent,
    })),
};
/** @type {?} */
var routes = [
    {
        path: '',
        component: DynamicLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: ReplaceableRouteContainerComponent,
                data: ɵ0,
            },
        ],
    },
];
var SettingManagementRoutingModule = /** @class */ (function () {
    function SettingManagementRoutingModule() {
    }
    SettingManagementRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return SettingManagementRoutingModule;
}());
export { SettingManagementRoutingModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5zZXR0aW5nLW1hbmFnZW1lbnQvIiwic291cmNlcyI6WyJsaWIvc2V0dGluZy1tYW5hZ2VtZW50LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHNCQUFzQixFQUV0QixrQ0FBa0MsRUFDbEMsU0FBUyxHQUNWLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO1NBWXpFO0lBQ0osY0FBYyxFQUFFLDhCQUE4QjtJQUM5QyxvQkFBb0IsRUFBRSxtQkFBQTtRQUNwQixHQUFHLHdFQUFnRDtRQUNuRCxnQkFBZ0IsRUFBRSwwQkFBMEI7S0FDN0MsRUFBbUM7Q0FDckM7O0lBZkgsTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUN4QixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsa0NBQWtDO2dCQUM3QyxJQUFJLElBTUg7YUFDRjtTQUNGO0tBQ0Y7Q0FDRjtBQUVEO0lBQUE7SUFJNkMsQ0FBQzs7Z0JBSjdDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOztJQUM0QyxxQ0FBQztDQUFBLEFBSjlDLElBSThDO1NBQWpDLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICBSZXBsYWNlYWJsZUNvbXBvbmVudHMsXHJcbiAgUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICBBdXRoR3VhcmQsXHJcbn0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTZXR0aW5nTWFuYWdlbWVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zZXR0aW5nLW1hbmFnZW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgZVNldHRpbmdNYW5hZ2VtZW50Q29tcG9uZW50cyB9IGZyb20gJy4vZW51bXMvY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICBjb21wb25lbnQ6IFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVxdWlyZWRQb2xpY3k6ICdBYnBBY2NvdW50LlNldHRpbmdNYW5hZ2VtZW50JyxcclxuICAgICAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50OiB7XHJcbiAgICAgICAgICAgIGtleTogZVNldHRpbmdNYW5hZ2VtZW50Q29tcG9uZW50cy5TZXR0aW5nTWFuYWdlbWVudCxcclxuICAgICAgICAgICAgZGVmYXVsdENvbXBvbmVudDogU2V0dGluZ01hbmFnZW1lbnRDb21wb25lbnQsXHJcbiAgICAgICAgICB9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5Sb3V0ZURhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdNYW5hZ2VtZW50Um91dGluZ01vZHVsZSB7fVxyXG4iXX0=