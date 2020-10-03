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
export class SettingManagementRoutingModule {
}
SettingManagementRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvc2V0dGluZy1tYW5hZ2VtZW50L3NyYy9saWIvc2V0dGluZy1tYW5hZ2VtZW50LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxzQkFBc0IsRUFFdEIsa0NBQWtDLEVBQ2xDLFNBQVMsR0FDVixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztXQVl6RTtJQUNKLGNBQWMsRUFBRSw4QkFBOEI7SUFDOUMsb0JBQW9CLEVBQUU7UUFDcEIsR0FBRyx3RUFBZ0Q7UUFDbkQsZ0JBQWdCLEVBQUUsMEJBQTBCO0tBQ1Y7Q0FDckM7QUFmVCxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUM7UUFDeEIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLGtDQUFrQztnQkFDN0MsSUFBSSxJQU1IO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQU1GLE1BQU0sT0FBTyw4QkFBOEI7OztZQUoxQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gIFJlcGxhY2VhYmxlQ29tcG9uZW50cyxcclxuICBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gIEF1dGhHdWFyZCxcclxufSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNldHRpbmdNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NldHRpbmctbWFuYWdlbWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBlU2V0dGluZ01hbmFnZW1lbnRDb21wb25lbnRzIH0gZnJvbSAnLi9lbnVtcy9jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgY29tcG9uZW50OiBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZXF1aXJlZFBvbGljeTogJ0FicEFjY291bnQuU2V0dGluZ01hbmFnZW1lbnQnLFxyXG4gICAgICAgICAgcmVwbGFjZWFibGVDb21wb25lbnQ6IHtcclxuICAgICAgICAgICAga2V5OiBlU2V0dGluZ01hbmFnZW1lbnRDb21wb25lbnRzLlNldHRpbmdNYW5hZ2VtZW50LFxyXG4gICAgICAgICAgICBkZWZhdWx0Q29tcG9uZW50OiBTZXR0aW5nTWFuYWdlbWVudENvbXBvbmVudCxcclxuICAgICAgICAgIH0gYXMgUmVwbGFjZWFibGVDb21wb25lbnRzLlJvdXRlRGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ01hbmFnZW1lbnRSb3V0aW5nTW9kdWxlIHt9XHJcbiJdfQ==