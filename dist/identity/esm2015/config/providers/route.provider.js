import { RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
export const IDENTITY_ROUTE_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];
export function configureRoutes(routes) {
    return () => {
        routes.add([
            {
                path: '/identity',
                name: "AbpIdentity::Menu:IdentityManagement" /* IdentityManagement */,
                parentName: "AbpUiNavigation::Menu:Administration" /* Administration */,
                requiredPolicy: "AbpIdentity.Roles || AbpIdentity.Users" /* IdentityManagement */,
                iconClass: 'fa fa-id-card-o',
                layout: "application" /* application */,
                order: 1,
            },
            {
                path: '/identity/roles',
                name: "AbpIdentity::Roles" /* Roles */,
                parentName: "AbpIdentity::Menu:IdentityManagement" /* IdentityManagement */,
                requiredPolicy: "AbpIdentity.Roles" /* Roles */,
                order: 1,
            },
            {
                path: '/identity/users',
                name: "AbpIdentity::Users" /* Users */,
                parentName: "AbpIdentity::Menu:IdentityManagement" /* IdentityManagement */,
                requiredPolicy: "AbpIdentity.Users" /* Users */,
                order: 2,
            },
        ]);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUucHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pZGVudGl0eS9jb25maWcvc3JjL3Byb3ZpZGVycy9yb3V0ZS5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJaEQsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUc7SUFDdEMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtDQUM5RixDQUFDO0FBRUYsTUFBTSxVQUFVLGVBQWUsQ0FBQyxNQUFxQjtJQUNuRCxPQUFPLEdBQUcsRUFBRTtRQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDVDtnQkFDRSxJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxpRUFBd0M7Z0JBQzVDLFVBQVUsNkRBQXVDO2dCQUNqRCxjQUFjLG1FQUF5QztnQkFDdkQsU0FBUyxFQUFFLGlCQUFpQjtnQkFDNUIsTUFBTSxpQ0FBeUI7Z0JBQy9CLEtBQUssRUFBRSxDQUFDO2FBQ1Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixJQUFJLGtDQUEyQjtnQkFDL0IsVUFBVSxpRUFBd0M7Z0JBQ2xELGNBQWMsaUNBQTRCO2dCQUMxQyxLQUFLLEVBQUUsQ0FBQzthQUNUO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsSUFBSSxrQ0FBMkI7Z0JBQy9CLFVBQVUsaUVBQXdDO2dCQUNsRCxjQUFjLGlDQUE0QjtnQkFDMUMsS0FBSyxFQUFFLENBQUM7YUFDVDtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlTGF5b3V0VHlwZSwgUm91dGVzU2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IGVUaGVtZVNoYXJlZFJvdXRlTmFtZXMgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBlSWRlbnRpdHlQb2xpY3lOYW1lcyB9IGZyb20gJy4uL2VudW1zL3BvbGljeS1uYW1lcyc7XHJcbmltcG9ydCB7IGVJZGVudGl0eVJvdXRlTmFtZXMgfSBmcm9tICcuLi9lbnVtcy9yb3V0ZS1uYW1lcyc7XHJcblxyXG5leHBvcnQgY29uc3QgSURFTlRJVFlfUk9VVEVfUFJPVklERVJTID0gW1xyXG4gIHsgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLCB1c2VGYWN0b3J5OiBjb25maWd1cmVSb3V0ZXMsIGRlcHM6IFtSb3V0ZXNTZXJ2aWNlXSwgbXVsdGk6IHRydWUgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVSb3V0ZXMocm91dGVzOiBSb3V0ZXNTZXJ2aWNlKSB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIHJvdXRlcy5hZGQoW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9pZGVudGl0eScsXHJcbiAgICAgICAgbmFtZTogZUlkZW50aXR5Um91dGVOYW1lcy5JZGVudGl0eU1hbmFnZW1lbnQsXHJcbiAgICAgICAgcGFyZW50TmFtZTogZVRoZW1lU2hhcmVkUm91dGVOYW1lcy5BZG1pbmlzdHJhdGlvbixcclxuICAgICAgICByZXF1aXJlZFBvbGljeTogZUlkZW50aXR5UG9saWN5TmFtZXMuSWRlbnRpdHlNYW5hZ2VtZW50LFxyXG4gICAgICAgIGljb25DbGFzczogJ2ZhIGZhLWlkLWNhcmQtbycsXHJcbiAgICAgICAgbGF5b3V0OiBlTGF5b3V0VHlwZS5hcHBsaWNhdGlvbixcclxuICAgICAgICBvcmRlcjogMSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvaWRlbnRpdHkvcm9sZXMnLFxyXG4gICAgICAgIG5hbWU6IGVJZGVudGl0eVJvdXRlTmFtZXMuUm9sZXMsXHJcbiAgICAgICAgcGFyZW50TmFtZTogZUlkZW50aXR5Um91dGVOYW1lcy5JZGVudGl0eU1hbmFnZW1lbnQsXHJcbiAgICAgICAgcmVxdWlyZWRQb2xpY3k6IGVJZGVudGl0eVBvbGljeU5hbWVzLlJvbGVzLFxyXG4gICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9pZGVudGl0eS91c2VycycsXHJcbiAgICAgICAgbmFtZTogZUlkZW50aXR5Um91dGVOYW1lcy5Vc2VycyxcclxuICAgICAgICBwYXJlbnROYW1lOiBlSWRlbnRpdHlSb3V0ZU5hbWVzLklkZW50aXR5TWFuYWdlbWVudCxcclxuICAgICAgICByZXF1aXJlZFBvbGljeTogZUlkZW50aXR5UG9saWN5TmFtZXMuVXNlcnMsXHJcbiAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICB9O1xyXG59XHJcbiJdfQ==