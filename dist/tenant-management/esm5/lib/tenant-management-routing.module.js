/**
 * @fileoverview added by tsickle
 * Generated from: lib/tenant-management-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AuthGuard, DynamicLayoutComponent, PermissionGuard, ReplaceableRouteContainerComponent, } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TenantsComponent } from './components/tenants/tenants.component';
var ɵ0 = {
    requiredPolicy: 'AbpTenantManagement.Tenants',
    replaceableComponent: (/** @type {?} */ ({
        key: "TenantManagement.TenantsComponent" /* Tenants */,
        defaultComponent: TenantsComponent,
    })),
};
/** @type {?} */
var routes = [
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
var TenantManagementRoutingModule = /** @class */ (function () {
    function TenantManagementRoutingModule() {
    }
    TenantManagementRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return TenantManagementRoutingModule;
}());
export { TenantManagementRoutingModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRlbmFudC1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL3RlbmFudC1tYW5hZ2VtZW50LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxzQkFBc0IsRUFDdEIsZUFBZSxFQUVmLGtDQUFrQyxHQUNuQyxNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztTQWE1RDtJQUNKLGNBQWMsRUFBRSw2QkFBNkI7SUFDN0Msb0JBQW9CLEVBQUUsbUJBQUE7UUFDcEIsR0FBRyxtREFBcUM7UUFDeEMsZ0JBQWdCLEVBQUUsZ0JBQWdCO0tBQ25DLEVBQXFEO0NBQ3ZEOztJQWhCSCxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN0RDtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDO1FBQ3pDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLFNBQVMsRUFBRSxrQ0FBa0M7Z0JBQzdDLElBQUksSUFNSDthQUNGO1NBQ0Y7S0FDRjtDQUNGO0FBRUQ7SUFBQTtJQUk0QyxDQUFDOztnQkFKNUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEI7O0lBQzJDLG9DQUFDO0NBQUEsQUFKN0MsSUFJNkM7U0FBaEMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBdXRoR3VhcmQsXHJcbiAgRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICBQZXJtaXNzaW9uR3VhcmQsXHJcbiAgUmVwbGFjZWFibGVDb21wb25lbnRzLFxyXG4gIFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbn0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUZW5hbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbmFudHMvdGVuYW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBlVGVuYW50TWFuYWdlbWVudENvbXBvbmVudHMgfSBmcm9tICcuL2VudW1zL2NvbXBvbmVudHMnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ3RlbmFudHMnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgY29tcG9uZW50OiBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIFBlcm1pc3Npb25HdWFyZF0sXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3RlbmFudHMnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZXF1aXJlZFBvbGljeTogJ0FicFRlbmFudE1hbmFnZW1lbnQuVGVuYW50cycsXHJcbiAgICAgICAgICByZXBsYWNlYWJsZUNvbXBvbmVudDoge1xyXG4gICAgICAgICAgICBrZXk6IGVUZW5hbnRNYW5hZ2VtZW50Q29tcG9uZW50cy5UZW5hbnRzLFxyXG4gICAgICAgICAgICBkZWZhdWx0Q29tcG9uZW50OiBUZW5hbnRzQ29tcG9uZW50LFxyXG4gICAgICAgICAgfSBhcyBSZXBsYWNlYWJsZUNvbXBvbmVudHMuUm91dGVEYXRhPFRlbmFudHNDb21wb25lbnQ+LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW5hbnRNYW5hZ2VtZW50Um91dGluZ01vZHVsZSB7fVxyXG4iXX0=