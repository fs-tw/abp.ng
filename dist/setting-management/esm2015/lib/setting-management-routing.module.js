/**
 * @fileoverview added by tsickle
 * Generated from: lib/setting-management-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DynamicLayoutComponent, ReplaceableRouteContainerComponent, } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingManagementComponent } from './components/setting-management.component';
const ɵ0 = {
    requiredPolicy: 'AbpAccount.SettingManagement',
    replaceableComponent: (/** @type {?} */ ({
        key: 'SettingManagement.SettingManagementComponent',
        defaultComponent: SettingManagementComponent,
    })),
};
/** @type {?} */
const routes = [
    {
        path: '',
        component: DynamicLayoutComponent,
        children: [
            {
                path: '',
                component: ReplaceableRouteContainerComponent,
                data: ɵ0,
            },
        ],
    },
];
export class SettingManagementRoutingModule {
}
SettingManagementRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5zZXR0aW5nLW1hbmFnZW1lbnQvIiwic291cmNlcyI6WyJsaWIvc2V0dGluZy1tYW5hZ2VtZW50LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHNCQUFzQixFQUV0QixrQ0FBa0MsR0FDbkMsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7V0FVekU7SUFDSixjQUFjLEVBQUUsOEJBQThCO0lBQzlDLG9CQUFvQixFQUFFLG1CQUFBO1FBQ3BCLEdBQUcsRUFBRSw4Q0FBOEM7UUFDbkQsZ0JBQWdCLEVBQUUsMEJBQTBCO0tBQzdDLEVBQW1DO0NBQ3JDOztNQWRILE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsa0NBQWtDO2dCQUM3QyxJQUFJLElBTUg7YUFDRjtTQUNGO0tBQ0Y7Q0FDRjtBQU1ELE1BQU0sT0FBTyw4QkFBOEI7OztZQUoxQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gIFJlcGxhY2VhYmxlQ29tcG9uZW50cyxcclxuICBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG59IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2V0dGluZ01hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2V0dGluZy1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICBjb21wb25lbnQ6IFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVxdWlyZWRQb2xpY3k6ICdBYnBBY2NvdW50LlNldHRpbmdNYW5hZ2VtZW50JyxcclxuICAgICAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50OiB7XHJcbiAgICAgICAgICAgIGtleTogJ1NldHRpbmdNYW5hZ2VtZW50LlNldHRpbmdNYW5hZ2VtZW50Q29tcG9uZW50JyxcclxuICAgICAgICAgICAgZGVmYXVsdENvbXBvbmVudDogU2V0dGluZ01hbmFnZW1lbnRDb21wb25lbnQsXHJcbiAgICAgICAgICB9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5Sb3V0ZURhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdNYW5hZ2VtZW50Um91dGluZ01vZHVsZSB7fVxyXG4iXX0=