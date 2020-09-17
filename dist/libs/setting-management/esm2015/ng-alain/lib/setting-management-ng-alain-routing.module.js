import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsModule } from './settings/settings.module';
import { DynamicLayoutComponent, AuthGuard, PermissionGuard } from '@abp/ng.core';
const ɵ0 = SettingsModule.forEarly;
const routes = [
    {
        path: '',
        component: DynamicLayoutComponent,
        canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'settings',
                loadChildren: ɵ0
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LW5nLWFsYWluLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9zZXR0aW5nLW1hbmFnZW1lbnQvbmctYWxhaW4vc3JjL2xpYi9zZXR0aW5nLW1hbmFnZW1lbnQtbmctYWxhaW4tcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztXQVU1RCxjQUFjLENBQUMsUUFBUTtBQVI3QyxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDO1FBQ3pDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixZQUFZLElBQXlCO2FBQ3RDO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFDRixXQUFXO0FBS1gsSUFBYSxxQ0FBcUMsR0FBbEQsTUFBYSxxQ0FBcUM7Q0FBSSxDQUFBO0FBQXpDLHFDQUFxQztJQUpqRCxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1cscUNBQXFDLENBQUk7U0FBekMscUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTZXR0aW5nc01vZHVsZSB9IGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlJztcclxuaW1wb3J0IHsgRHluYW1pY0xheW91dENvbXBvbmVudCwgQXV0aEd1YXJkLCBQZXJtaXNzaW9uR3VhcmQgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgUGVybWlzc2lvbkd1YXJkXSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnc2V0dGluZ3MnLFxyXG4gICAgICAgIGxvYWRDaGlsZHJlbjogU2V0dGluZ3NNb2R1bGUuZm9yRWFybHlcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfVxyXG5dO1xyXG4vLyBAZHluYW1pY1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nTWFuYWdlbWVudE5nQWxhaW5Sb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=