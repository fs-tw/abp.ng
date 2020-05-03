/**
 * @fileoverview added by tsickle
 * Generated from: lib/identity-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AuthGuard, DynamicLayoutComponent, PermissionGuard, CoreModule, ReplaceableRouteContainerComponent, } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { UsersComponent } from './components/users/users.component';
var ɵ0 = {
    requiredPolicy: 'AbpIdentity.Roles',
    replaceableComponent: (/** @type {?} */ ({
        key: "Identity.RolesComponent" /* Roles */,
        defaultComponent: RolesComponent,
    })),
}, ɵ1 = {
    requiredPolicy: 'AbpIdentity.Users',
    replaceableComponent: (/** @type {?} */ ({
        key: "Identity.UsersComponent" /* Users */,
        defaultComponent: UsersComponent,
    })),
};
/** @type {?} */
var routes = [
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
var IdentityRoutingModule = /** @class */ (function () {
    function IdentityRoutingModule() {
    }
    IdentityRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes), CoreModule],
                    exports: [RouterModule],
                },] }
    ];
    return IdentityRoutingModule;
}());
export { IdentityRoutingModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmlkZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2lkZW50aXR5LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxzQkFBc0IsRUFDdEIsZUFBZSxFQUNmLFVBQVUsRUFDVixrQ0FBa0MsR0FFbkMsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFrQyxNQUFNLGlCQUFpQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7U0FhdEQ7SUFDSixjQUFjLEVBQUUsbUJBQW1CO0lBQ25DLG9CQUFvQixFQUFFLG1CQUFBO1FBQ3BCLEdBQUcsdUNBQTJCO1FBQzlCLGdCQUFnQixFQUFFLGNBQWM7S0FDakMsRUFBbUQ7Q0FDckQsT0FLSztJQUNKLGNBQWMsRUFBRSxtQkFBbUI7SUFDbkMsb0JBQW9CLEVBQUUsbUJBQUE7UUFDcEIsR0FBRyx1Q0FBMkI7UUFDOUIsZ0JBQWdCLEVBQUUsY0FBYztLQUNqQyxFQUFtRDtDQUNyRDs7SUEzQkgsTUFBTSxHQUFXO0lBQ3JCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEQ7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQztRQUN6QyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsa0NBQWtDO2dCQUM3QyxJQUFJLElBTUg7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSxrQ0FBa0M7Z0JBQzdDLElBQUksSUFNSDthQUNGO1NBQ0Y7S0FDRjtDQUNGO0FBRUQ7SUFBQTtJQUlvQyxDQUFDOztnQkFKcEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBVSxDQUFDO29CQUNwRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOztJQUNtQyw0QkFBQztDQUFBLEFBSnJDLElBSXFDO1NBQXhCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQXV0aEd1YXJkLFxyXG4gIER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgUGVybWlzc2lvbkd1YXJkLFxyXG4gIENvcmVNb2R1bGUsXHJcbiAgUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICBSZXBsYWNlYWJsZUNvbXBvbmVudHMsXHJcbn0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMsIFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb2xlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yb2xlcy9yb2xlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVc2Vyc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBlSWRlbnRpdHlDb21wb25lbnRzIH0gZnJvbSAnLi9lbnVtcy9jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdyb2xlcycsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgUGVybWlzc2lvbkd1YXJkXSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAncm9sZXMnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZXF1aXJlZFBvbGljeTogJ0FicElkZW50aXR5LlJvbGVzJyxcclxuICAgICAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50OiB7XHJcbiAgICAgICAgICAgIGtleTogZUlkZW50aXR5Q29tcG9uZW50cy5Sb2xlcyxcclxuICAgICAgICAgICAgZGVmYXVsdENvbXBvbmVudDogUm9sZXNDb21wb25lbnQsXHJcbiAgICAgICAgICB9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5Sb3V0ZURhdGE8Um9sZXNDb21wb25lbnQ+LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndXNlcnMnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZXF1aXJlZFBvbGljeTogJ0FicElkZW50aXR5LlVzZXJzJyxcclxuICAgICAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50OiB7XHJcbiAgICAgICAgICAgIGtleTogZUlkZW50aXR5Q29tcG9uZW50cy5Vc2VycyxcclxuICAgICAgICAgICAgZGVmYXVsdENvbXBvbmVudDogVXNlcnNDb21wb25lbnQsXHJcbiAgICAgICAgICB9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5Sb3V0ZURhdGE8VXNlcnNDb21wb25lbnQ+LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSwgQ29yZU1vZHVsZV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eVJvdXRpbmdNb2R1bGUge31cclxuIl19