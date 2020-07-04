import { __decorate } from "tslib";
import { AuthGuard, DynamicLayoutComponent, PermissionGuard, CoreModule, ReplaceableRouteContainerComponent, } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { UsersComponent } from './components/users/users.component';
const ɵ0 = {
    requiredPolicy: 'AbpIdentity.Roles',
    replaceableComponent: {
        key: "Identity.RolesComponent" /* Roles */,
        defaultComponent: RolesComponent,
    },
}, ɵ1 = {
    requiredPolicy: 'AbpIdentity.Users',
    replaceableComponent: {
        key: "Identity.UsersComponent" /* Users */,
        defaultComponent: UsersComponent,
    },
};
const routes = [
    { path: '', redirectTo: 'roles', pathMatch: 'full' },
    {
        path: '',
        component: DynamicLayoutComponent,
        canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'roles',
                component: ReplaceableRouteContainerComponent,
                data: ɵ0,
            },
            {
                path: 'users',
                component: ReplaceableRouteContainerComponent,
                data: ɵ1,
            },
        ],
    },
];
let IdentityRoutingModule = class IdentityRoutingModule {
};
IdentityRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes), CoreModule],
        exports: [RouterModule],
    })
], IdentityRoutingModule);
export { IdentityRoutingModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9pZGVudGl0eS9zcmMvbGliL2lkZW50aXR5LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHNCQUFzQixFQUN0QixlQUFlLEVBQ2YsVUFBVSxFQUNWLGtDQUFrQyxHQUVuQyxNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQWtDLE1BQU0saUJBQWlCLENBQUM7QUFDL0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztXQWF0RDtJQUNKLGNBQWMsRUFBRSxtQkFBbUI7SUFDbkMsb0JBQW9CLEVBQUU7UUFDcEIsR0FBRyx1Q0FBMkI7UUFDOUIsZ0JBQWdCLEVBQUUsY0FBYztLQUNrQjtDQUNyRCxPQUtLO0lBQ0osY0FBYyxFQUFFLG1CQUFtQjtJQUNuQyxvQkFBb0IsRUFBRTtRQUNwQixHQUFHLHVDQUEyQjtRQUM5QixnQkFBZ0IsRUFBRSxjQUFjO0tBQ2tCO0NBQ3JEO0FBM0JULE1BQU0sTUFBTSxHQUFXO0lBQ3JCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEQ7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQztRQUN6QyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsa0NBQWtDO2dCQUM3QyxJQUFJLElBTUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSxrQ0FBa0M7Z0JBQzdDLElBQUksSUFNSDthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFNRixJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtDQUFHLENBQUE7QUFBeEIscUJBQXFCO0lBSmpDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBVSxDQUFDO1FBQ3BELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1cscUJBQXFCLENBQUc7U0FBeEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBdXRoR3VhcmQsXHJcbiAgRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICBQZXJtaXNzaW9uR3VhcmQsXHJcbiAgQ29yZU1vZHVsZSxcclxuICBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gIFJlcGxhY2VhYmxlQ29tcG9uZW50cyxcclxufSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcywgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJvbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JvbGVzL3JvbGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGVJZGVudGl0eUNvbXBvbmVudHMgfSBmcm9tICcuL2VudW1zL2NvbXBvbmVudHMnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ3JvbGVzJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBQZXJtaXNzaW9uR3VhcmRdLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdyb2xlcycsXHJcbiAgICAgICAgY29tcG9uZW50OiBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlcXVpcmVkUG9saWN5OiAnQWJwSWRlbnRpdHkuUm9sZXMnLFxyXG4gICAgICAgICAgcmVwbGFjZWFibGVDb21wb25lbnQ6IHtcclxuICAgICAgICAgICAga2V5OiBlSWRlbnRpdHlDb21wb25lbnRzLlJvbGVzLFxyXG4gICAgICAgICAgICBkZWZhdWx0Q29tcG9uZW50OiBSb2xlc0NvbXBvbmVudCxcclxuICAgICAgICAgIH0gYXMgUmVwbGFjZWFibGVDb21wb25lbnRzLlJvdXRlRGF0YTxSb2xlc0NvbXBvbmVudD4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd1c2VycycsXHJcbiAgICAgICAgY29tcG9uZW50OiBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlcXVpcmVkUG9saWN5OiAnQWJwSWRlbnRpdHkuVXNlcnMnLFxyXG4gICAgICAgICAgcmVwbGFjZWFibGVDb21wb25lbnQ6IHtcclxuICAgICAgICAgICAga2V5OiBlSWRlbnRpdHlDb21wb25lbnRzLlVzZXJzLFxyXG4gICAgICAgICAgICBkZWZhdWx0Q29tcG9uZW50OiBVc2Vyc0NvbXBvbmVudCxcclxuICAgICAgICAgIH0gYXMgUmVwbGFjZWFibGVDb21wb25lbnRzLlJvdXRlRGF0YTxVc2Vyc0NvbXBvbmVudD4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLCBDb3JlTW9kdWxlXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIElkZW50aXR5Um91dGluZ01vZHVsZSB7fVxyXG4iXX0=