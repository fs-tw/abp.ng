import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
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
export class SettingManagementNgAlainRoutingModule {
}
SettingManagementNgAlainRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: SettingManagementNgAlainRoutingModule });
SettingManagementNgAlainRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SettingManagementNgAlainRoutingModule_Factory(t) { return new (t || SettingManagementNgAlainRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
        RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SettingManagementNgAlainRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SettingManagementNgAlainRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LW5nLWFsYWluLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9zZXR0aW5nLW1hbmFnZW1lbnQvbmctYWxhaW4vc3JjL2xpYi9zZXR0aW5nLW1hbmFnZW1lbnQtbmctYWxhaW4tcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQVUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUV2RCxNQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0lBQ3ZEO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixxQ0FBcUM7UUFDckMsNkNBQTZDO1FBQzdDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxVQUFVO2FBRWpCO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFDRixXQUFXO0FBS1gsTUFBTSxPQUFPLHFDQUFxQzs7eUVBQXJDLHFDQUFxQzt5SkFBckMscUNBQXFDLGtCQUh2QyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsWUFBWTt3RkFFWCxxQ0FBcUMsMENBRnRDLFlBQVk7a0RBRVgscUNBQXFDO2NBSmpELFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7IHBhdGg6ICcnLCBwYXRoTWF0Y2g6ICdmdWxsJywgcmVkaXJlY3RUbzogJ3NldHRpbmdzJyB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgLy8gY29tcG9uZW50OiBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgLy8gY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIFBlcm1pc3Npb25HdWFyZF0sXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3NldHRpbmdzJyxcclxuICAgICAgICAvL2xvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZScpLnRoZW4obSA9PiBtLlNldHRpbmdzTW9kdWxlLmZvckxhenkoKSlcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfVxyXG5dO1xyXG4vLyBAZHluYW1pY1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nTWFuYWdlbWVudE5nQWxhaW5Sb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=