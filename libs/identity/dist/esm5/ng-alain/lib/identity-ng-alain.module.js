/**
 * @fileoverview added by tsickle
 * Generated from: lib/identity-ng-alain.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { IdentityModule } from '@fs/identity';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { IdentityNgAlainRoutingModule } from './identity-ng-alain-routing.module';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';
var IdentityNgAlainModule = /** @class */ (function () {
    function IdentityNgAlainModule() {
    }
    IdentityNgAlainModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [UsersComponent, RolesComponent],
                    imports: [
                        CoreModule,
                        NgAlainBasicModule,
                        IdentityNgAlainRoutingModule,
                        PermissionManagementNgAlainModule,
                        IdentityModule
                    ]
                },] }
    ];
    return IdentityNgAlainModule;
}());
export { IdentityNgAlainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktbmctYWxhaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2lkZW50aXR5L25nLWFsYWluLyIsInNvdXJjZXMiOlsibGliL2lkZW50aXR5LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdkY7SUFBQTtJQVVxQyxDQUFDOztnQkFWckMsUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBQyxjQUFjLENBQUM7b0JBQzdDLE9BQU8sRUFBRTt3QkFDTCxVQUFVO3dCQUNWLGtCQUFrQjt3QkFDbEIsNEJBQTRCO3dCQUM1QixpQ0FBaUM7d0JBQ2pDLGNBQWM7cUJBQ2pCO2lCQUNKOztJQUNvQyw0QkFBQztDQUFBLEFBVnRDLElBVXNDO1NBQXpCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElkZW50aXR5TW9kdWxlIH0gZnJvbSAnQGZzL2lkZW50aXR5JztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQWxhaW5CYXNpY01vZHVsZSB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9iYXNpYyc7XHJcbmltcG9ydCB7IElkZW50aXR5TmdBbGFpblJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2lkZW50aXR5LW5nLWFsYWluLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgVXNlcnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm9sZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm9sZXMvcm9sZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGVybWlzc2lvbk1hbmFnZW1lbnROZ0FsYWluTW9kdWxlIH0gZnJvbSAnQGZzL3Blcm1pc3Npb24tbWFuYWdlbWVudC9uZy1hbGFpbic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbVXNlcnNDb21wb25lbnQsUm9sZXNDb21wb25lbnRdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvcmVNb2R1bGUsXHJcbiAgICAgICAgTmdBbGFpbkJhc2ljTW9kdWxlLFxyXG4gICAgICAgIElkZW50aXR5TmdBbGFpblJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgUGVybWlzc2lvbk1hbmFnZW1lbnROZ0FsYWluTW9kdWxlLFxyXG4gICAgICAgIElkZW50aXR5TW9kdWxlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eU5nQWxhaW5Nb2R1bGUgeyB9XHJcbiJdfQ==