/**
 * @fileoverview added by tsickle
 * Generated from: lib/tenant-management-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AuthGuard, DynamicLayoutComponent, PermissionGuard, ReplaceableRouteContainerComponent, } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TenantsComponent } from './components/tenants/tenants.component';
const ɵ0 = {
    requiredPolicy: 'AbpTenantManagement.Tenants',
    replaceableComponent: (/** @type {?} */ ({
        key: 'TenantManagement.TenantsComponent',
        defaultComponent: TenantsComponent,
    })),
};
/** @type {?} */
const routes = [
    { path: '', redirectTo: 'tenants', pathMatch: 'full' },
    {
        path: '',
        component: DynamicLayoutComponent,
        canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'tenants',
                component: ReplaceableRouteContainerComponent,
                data: ɵ0,
            },
        ],
    },
];
export class TenantManagementRoutingModule {
}
TenantManagementRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRlbmFudC1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL3RlbmFudC1tYW5hZ2VtZW50LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxzQkFBc0IsRUFDdEIsZUFBZSxFQUVmLGtDQUFrQyxHQUNuQyxNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztXQVk1RDtJQUNKLGNBQWMsRUFBRSw2QkFBNkI7SUFDN0Msb0JBQW9CLEVBQUUsbUJBQUE7UUFDcEIsR0FBRyxFQUFFLG1DQUFtQztRQUN4QyxnQkFBZ0IsRUFBRSxnQkFBZ0I7S0FDbkMsRUFBcUQ7Q0FDdkQ7O01BaEJILE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3REO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsU0FBUyxFQUFFLGtDQUFrQztnQkFDN0MsSUFBSSxJQU1IO2FBQ0Y7U0FDRjtLQUNGO0NBQ0Y7QUFNRCxNQUFNLE9BQU8sNkJBQTZCOzs7WUFKekMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQXV0aEd1YXJkLFxyXG4gIER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgUGVybWlzc2lvbkd1YXJkLFxyXG4gIFJlcGxhY2VhYmxlQ29tcG9uZW50cyxcclxuICBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG59IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVGVuYW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW5hbnRzL3RlbmFudHMuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICd0ZW5hbnRzJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBQZXJtaXNzaW9uR3VhcmRdLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd0ZW5hbnRzJyxcclxuICAgICAgICBjb21wb25lbnQ6IFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVxdWlyZWRQb2xpY3k6ICdBYnBUZW5hbnRNYW5hZ2VtZW50LlRlbmFudHMnLFxyXG4gICAgICAgICAgcmVwbGFjZWFibGVDb21wb25lbnQ6IHtcclxuICAgICAgICAgICAga2V5OiAnVGVuYW50TWFuYWdlbWVudC5UZW5hbnRzQ29tcG9uZW50JyxcclxuICAgICAgICAgICAgZGVmYXVsdENvbXBvbmVudDogVGVuYW50c0NvbXBvbmVudCxcclxuICAgICAgICAgIH0gYXMgUmVwbGFjZWFibGVDb21wb25lbnRzLlJvdXRlRGF0YTxUZW5hbnRzQ29tcG9uZW50PixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVuYW50TWFuYWdlbWVudFJvdXRpbmdNb2R1bGUge31cclxuIl19