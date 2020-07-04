import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'settings' },
    {
        path: '',
        // component: DynamicLayoutComponent,
        // canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'settings',
            },
        ],
    }
];
// @dynamic
let SettingManagementNgAlainRoutingModule = class SettingManagementNgAlainRoutingModule {
};
SettingManagementNgAlainRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SettingManagementNgAlainRoutingModule);
export { SettingManagementNgAlainRoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LW5nLWFsYWluLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9zZXR0aW5nLW1hbmFnZW1lbnQvbmctYWxhaW4vc3JjL2xpYi9zZXR0aW5nLW1hbmFnZW1lbnQtbmctYWxhaW4tcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE1BQU0sTUFBTSxHQUFXO0lBQ3JCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUU7SUFDdkQ7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLHFDQUFxQztRQUNyQyw2Q0FBNkM7UUFDN0MsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7YUFFakI7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUNGLFdBQVc7QUFLWCxJQUFhLHFDQUFxQyxHQUFsRCxNQUFhLHFDQUFxQztDQUFJLENBQUE7QUFBekMscUNBQXFDO0lBSmpELFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO0tBQ3hCLENBQUM7R0FDVyxxQ0FBcUMsQ0FBSTtTQUF6QyxxQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7IHBhdGg6ICcnLCBwYXRoTWF0Y2g6ICdmdWxsJywgcmVkaXJlY3RUbzogJ3NldHRpbmdzJyB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgLy8gY29tcG9uZW50OiBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgLy8gY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIFBlcm1pc3Npb25HdWFyZF0sXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3NldHRpbmdzJyxcclxuICAgICAgICAvL2xvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZScpLnRoZW4obSA9PiBtLlNldHRpbmdzTW9kdWxlLmZvckxhenkoKSlcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfVxyXG5dO1xyXG4vLyBAZHluYW1pY1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nTWFuYWdlbWVudE5nQWxhaW5Sb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=