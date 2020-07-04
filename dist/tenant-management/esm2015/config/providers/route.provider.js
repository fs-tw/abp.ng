import { RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
export const TENANT_MANAGEMENT_ROUTE_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];
export function configureRoutes(routes) {
    return () => {
        routes.add([
            {
                path: '/tenant-management',
                name: "AbpTenantManagement::Menu:TenantManagement" /* TenantManagement */,
                parentName: "AbpUiNavigation::Menu:Administration" /* Administration */,
                requiredPolicy: "AbpTenantManagement.Tenants" /* TenantManagement */,
                layout: "application" /* application */,
                iconClass: 'fa fa-users',
                order: 2,
            },
            {
                path: '/tenant-management/tenants',
                name: "AbpTenantManagement::Tenants" /* Tenants */,
                parentName: "AbpTenantManagement::Menu:TenantManagement" /* TenantManagement */,
                requiredPolicy: "AbpTenantManagement.Tenants" /* Tenants */,
                order: 1,
            },
        ]);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUucHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90ZW5hbnQtbWFuYWdlbWVudC9jb25maWcvc3JjL3Byb3ZpZGVycy9yb3V0ZS5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJaEQsTUFBTSxDQUFDLE1BQU0saUNBQWlDLEdBQUc7SUFDL0MsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtDQUM5RixDQUFDO0FBRUYsTUFBTSxVQUFVLGVBQWUsQ0FBQyxNQUFxQjtJQUNuRCxPQUFPLEdBQUcsRUFBRTtRQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDVDtnQkFDRSxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixJQUFJLHFFQUE4QztnQkFDbEQsVUFBVSw2REFBdUM7Z0JBQ2pELGNBQWMsc0RBQStDO2dCQUM3RCxNQUFNLGlDQUF5QjtnQkFDL0IsU0FBUyxFQUFFLGFBQWE7Z0JBQ3hCLEtBQUssRUFBRSxDQUFDO2FBQ1Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsNEJBQTRCO2dCQUNsQyxJQUFJLDhDQUFxQztnQkFDekMsVUFBVSxxRUFBOEM7Z0JBQ3hELGNBQWMsNkNBQXNDO2dCQUNwRCxLQUFLLEVBQUUsQ0FBQzthQUNUO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVMYXlvdXRUeXBlLCBSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgZVRoZW1lU2hhcmVkUm91dGVOYW1lcyB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGVUZW5hbnRNYW5hZ2VtZW50UG9saWN5TmFtZXMgfSBmcm9tICcuLi9lbnVtcy9wb2xpY3ktbmFtZXMnO1xyXG5pbXBvcnQgeyBlVGVuYW50TWFuYWdlbWVudFJvdXRlTmFtZXMgfSBmcm9tICcuLi9lbnVtcy9yb3V0ZS1uYW1lcyc7XHJcblxyXG5leHBvcnQgY29uc3QgVEVOQU5UX01BTkFHRU1FTlRfUk9VVEVfUFJPVklERVJTID0gW1xyXG4gIHsgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLCB1c2VGYWN0b3J5OiBjb25maWd1cmVSb3V0ZXMsIGRlcHM6IFtSb3V0ZXNTZXJ2aWNlXSwgbXVsdGk6IHRydWUgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVSb3V0ZXMocm91dGVzOiBSb3V0ZXNTZXJ2aWNlKSB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIHJvdXRlcy5hZGQoW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy90ZW5hbnQtbWFuYWdlbWVudCcsXHJcbiAgICAgICAgbmFtZTogZVRlbmFudE1hbmFnZW1lbnRSb3V0ZU5hbWVzLlRlbmFudE1hbmFnZW1lbnQsXHJcbiAgICAgICAgcGFyZW50TmFtZTogZVRoZW1lU2hhcmVkUm91dGVOYW1lcy5BZG1pbmlzdHJhdGlvbixcclxuICAgICAgICByZXF1aXJlZFBvbGljeTogZVRlbmFudE1hbmFnZW1lbnRQb2xpY3lOYW1lcy5UZW5hbnRNYW5hZ2VtZW50LFxyXG4gICAgICAgIGxheW91dDogZUxheW91dFR5cGUuYXBwbGljYXRpb24sXHJcbiAgICAgICAgaWNvbkNsYXNzOiAnZmEgZmEtdXNlcnMnLFxyXG4gICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy90ZW5hbnQtbWFuYWdlbWVudC90ZW5hbnRzJyxcclxuICAgICAgICBuYW1lOiBlVGVuYW50TWFuYWdlbWVudFJvdXRlTmFtZXMuVGVuYW50cyxcclxuICAgICAgICBwYXJlbnROYW1lOiBlVGVuYW50TWFuYWdlbWVudFJvdXRlTmFtZXMuVGVuYW50TWFuYWdlbWVudCxcclxuICAgICAgICByZXF1aXJlZFBvbGljeTogZVRlbmFudE1hbmFnZW1lbnRQb2xpY3lOYW1lcy5UZW5hbnRzLFxyXG4gICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgfTtcclxufVxyXG4iXX0=