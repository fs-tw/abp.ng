/**
 * @fileoverview added by tsickle
 * Generated from: lib/setting-management-ng-alain-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';
import { LayoutDefaultComponent } from '@fs/ng-alain/basic';
import { SettingsModule } from './settings/settings.module';
const ɵ0 = /**
 * @return {?}
 */
() => SettingsModule;
/** @type {?} */
const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'settings' },
    {
        path: '',
        component: LayoutDefaultComponent,
        canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'settings',
                loadChildren: (ɵ0)
            },
        ],
    }
];
// @dynamic
export class SettingManagementNgAlainRoutingModule {
}
SettingManagementNgAlainRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LW5nLWFsYWluLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL3NldHRpbmctbWFuYWdlbWVudC9uZy1hbGFpbi8iLCJzb3VyY2VzIjpbImxpYi9zZXR0aW5nLW1hbmFnZW1lbnQtbmctYWxhaW4tcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQXdCLE1BQU0saUJBQWlCLENBQUM7QUFDN0UsT0FBTyxFQUEwQixTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xGLE9BQU8sRUFBMkIsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFXOUIsR0FBSSxFQUFFLENBQUUsY0FBYzs7TUFUOUMsTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUU7SUFDdkQ7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQztRQUN6QyxRQUFRLEVBQUU7WUFDTjtnQkFDSSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsWUFBWSxNQUF3QjthQUN2QztTQUNKO0tBQ0o7Q0FDSjs7QUFPRCxNQUFNLE9BQU8scUNBQXFDOzs7WUFKakQsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlLCBMb2FkQ2hpbGRyZW5DYWxsYmFjayB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IER5bmFtaWNMYXlvdXRDb21wb25lbnQsIEF1dGhHdWFyZCwgUGVybWlzc2lvbkd1YXJkIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgTGF5b3V0UGFzc3BvcnRDb21wb25lbnQsIExheW91dERlZmF1bHRDb21wb25lbnQgfSBmcm9tICdAZnMvbmctYWxhaW4vYmFzaWMnO1xyXG5pbXBvcnQgeyBTZXR0aW5nc01vZHVsZSB9IGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiAnJywgcGF0aE1hdGNoOiAnZnVsbCcsIHJlZGlyZWN0VG86ICdzZXR0aW5ncycgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICBjb21wb25lbnQ6IExheW91dERlZmF1bHRDb21wb25lbnQsXHJcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIFBlcm1pc3Npb25HdWFyZF0sXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJ3NldHRpbmdzJyxcclxuICAgICAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogKCkgID0+ICBTZXR0aW5nc01vZHVsZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9XHJcbl07XHJcblxyXG4vLyBAZHluYW1pY1xyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ01hbmFnZW1lbnROZ0FsYWluUm91dGluZ01vZHVsZSB7IH1cclxuIl19