import { __decorate } from "tslib";
import { DynamicLayoutComponent, ReplaceableRouteContainerComponent, AuthGuard, } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingManagementComponent } from './components/setting-management.component';
const ɵ0 = {
    requiredPolicy: 'AbpAccount.SettingManagement',
    replaceableComponent: {
        key: "SettingManagement.SettingManagementComponent" /* SettingManagement */,
        defaultComponent: SettingManagementComponent,
    },
};
const routes = [
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
let SettingManagementRoutingModule = class SettingManagementRoutingModule {
};
SettingManagementRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SettingManagementRoutingModule);
export { SettingManagementRoutingModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvc2V0dGluZy1tYW5hZ2VtZW50L3NyYy9saWIvc2V0dGluZy1tYW5hZ2VtZW50LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLGtDQUFrQyxFQUNsQyxTQUFTLEdBQ1YsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7V0FZekU7SUFDSixjQUFjLEVBQUUsOEJBQThCO0lBQzlDLG9CQUFvQixFQUFFO1FBQ3BCLEdBQUcsd0VBQWdEO1FBQ25ELGdCQUFnQixFQUFFLDBCQUEwQjtLQUNWO0NBQ3JDO0FBZlQsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ3hCLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxrQ0FBa0M7Z0JBQzdDLElBQUksSUFNSDthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFNRixJQUFhLDhCQUE4QixHQUEzQyxNQUFhLDhCQUE4QjtDQUFHLENBQUE7QUFBakMsOEJBQThCO0lBSjFDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO0tBQ3hCLENBQUM7R0FDVyw4QkFBOEIsQ0FBRztTQUFqQyw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgUmVwbGFjZWFibGVDb21wb25lbnRzLFxyXG4gIFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgQXV0aEd1YXJkLFxyXG59IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2V0dGluZ01hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2V0dGluZy1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGVTZXR0aW5nTWFuYWdlbWVudENvbXBvbmVudHMgfSBmcm9tICcuL2VudW1zL2NvbXBvbmVudHMnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgY29tcG9uZW50OiBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlcXVpcmVkUG9saWN5OiAnQWJwQWNjb3VudC5TZXR0aW5nTWFuYWdlbWVudCcsXHJcbiAgICAgICAgICByZXBsYWNlYWJsZUNvbXBvbmVudDoge1xyXG4gICAgICAgICAgICBrZXk6IGVTZXR0aW5nTWFuYWdlbWVudENvbXBvbmVudHMuU2V0dGluZ01hbmFnZW1lbnQsXHJcbiAgICAgICAgICAgIGRlZmF1bHRDb21wb25lbnQ6IFNldHRpbmdNYW5hZ2VtZW50Q29tcG9uZW50LFxyXG4gICAgICAgICAgfSBhcyBSZXBsYWNlYWJsZUNvbXBvbmVudHMuUm91dGVEYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nTWFuYWdlbWVudFJvdXRpbmdNb2R1bGUge31cclxuIl19