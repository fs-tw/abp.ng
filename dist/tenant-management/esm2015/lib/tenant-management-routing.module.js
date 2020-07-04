import { __decorate } from "tslib";
import { AuthGuard, DynamicLayoutComponent, PermissionGuard, ReplaceableRouteContainerComponent, } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TenantsComponent } from './components/tenants/tenants.component';
const ɵ0 = {
    requiredPolicy: 'AbpTenantManagement.Tenants',
    replaceableComponent: {
        key: "TenantManagement.TenantsComponent" /* Tenants */,
        defaultComponent: TenantsComponent,
    },
};
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
let TenantManagementRoutingModule = class TenantManagementRoutingModule {
};
TenantManagementRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TenantManagementRoutingModule);
export { TenantManagementRoutingModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy90ZW5hbnQtbWFuYWdlbWVudC9zcmMvbGliL3RlbmFudC1tYW5hZ2VtZW50LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHNCQUFzQixFQUN0QixlQUFlLEVBRWYsa0NBQWtDLEdBQ25DLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO1dBYTVEO0lBQ0osY0FBYyxFQUFFLDZCQUE2QjtJQUM3QyxvQkFBb0IsRUFBRTtRQUNwQixHQUFHLG1EQUFxQztRQUN4QyxnQkFBZ0IsRUFBRSxnQkFBZ0I7S0FDa0I7Q0FDdkQ7QUFoQlQsTUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN0RDtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDO1FBQ3pDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLFNBQVMsRUFBRSxrQ0FBa0M7Z0JBQzdDLElBQUksSUFNSDthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFNRixJQUFhLDZCQUE2QixHQUExQyxNQUFhLDZCQUE2QjtDQUFHLENBQUE7QUFBaEMsNkJBQTZCO0lBSnpDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO0tBQ3hCLENBQUM7R0FDVyw2QkFBNkIsQ0FBRztTQUFoQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEF1dGhHdWFyZCxcclxuICBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gIFBlcm1pc3Npb25HdWFyZCxcclxuICBSZXBsYWNlYWJsZUNvbXBvbmVudHMsXHJcbiAgUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxufSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRlbmFudHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVuYW50cy90ZW5hbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGVUZW5hbnRNYW5hZ2VtZW50Q29tcG9uZW50cyB9IGZyb20gJy4vZW51bXMvY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAndGVuYW50cycsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgUGVybWlzc2lvbkd1YXJkXSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndGVuYW50cycsXHJcbiAgICAgICAgY29tcG9uZW50OiBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlcXVpcmVkUG9saWN5OiAnQWJwVGVuYW50TWFuYWdlbWVudC5UZW5hbnRzJyxcclxuICAgICAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50OiB7XHJcbiAgICAgICAgICAgIGtleTogZVRlbmFudE1hbmFnZW1lbnRDb21wb25lbnRzLlRlbmFudHMsXHJcbiAgICAgICAgICAgIGRlZmF1bHRDb21wb25lbnQ6IFRlbmFudHNDb21wb25lbnQsXHJcbiAgICAgICAgICB9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5Sb3V0ZURhdGE8VGVuYW50c0NvbXBvbmVudD4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbmFudE1hbmFnZW1lbnRSb3V0aW5nTW9kdWxlIHt9XHJcbiJdfQ==