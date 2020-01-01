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
        key: 'Identity.RolesComponent',
        defaultComponent: RolesComponent,
    })),
}, ɵ1 = {
    requiredPolicy: 'AbpIdentity.Users',
    replaceableComponent: (/** @type {?} */ ({
        key: 'Identity.UsersComponent',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmlkZW50aXR5LyIsInNvdXJjZXMiOlsibGliL2lkZW50aXR5LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxzQkFBc0IsRUFDdEIsZUFBZSxFQUNmLFVBQVUsRUFDVixrQ0FBa0MsR0FFbkMsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFrQyxNQUFNLGlCQUFpQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7U0FZdEQ7SUFDSixjQUFjLEVBQUUsbUJBQW1CO0lBQ25DLG9CQUFvQixFQUFFLG1CQUFBO1FBQ3BCLEdBQUcsRUFBRSx5QkFBeUI7UUFDOUIsZ0JBQWdCLEVBQUUsY0FBYztLQUNqQyxFQUFtRDtDQUNyRCxPQUtLO0lBQ0osY0FBYyxFQUFFLG1CQUFtQjtJQUNuQyxvQkFBb0IsRUFBRSxtQkFBQTtRQUNwQixHQUFHLEVBQUUseUJBQXlCO1FBQzlCLGdCQUFnQixFQUFFLGNBQWM7S0FDakMsRUFBbUQ7Q0FDckQ7O0lBM0JILE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BEO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsU0FBUyxFQUFFLGtDQUFrQztnQkFDN0MsSUFBSSxJQU1IO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsa0NBQWtDO2dCQUM3QyxJQUFJLElBTUg7YUFDRjtTQUNGO0tBQ0Y7Q0FDRjtBQUVEO0lBQUE7SUFJb0MsQ0FBQzs7Z0JBSnBDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQVUsQ0FBQztvQkFDcEQsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4Qjs7SUFDbUMsNEJBQUM7Q0FBQSxBQUpyQyxJQUlxQztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEF1dGhHdWFyZCxcclxuICBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gIFBlcm1pc3Npb25HdWFyZCxcclxuICBDb3JlTW9kdWxlLFxyXG4gIFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgUmVwbGFjZWFibGVDb21wb25lbnRzLFxyXG59IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm9sZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm9sZXMvcm9sZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXNlcnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdyb2xlcycsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgUGVybWlzc2lvbkd1YXJkXSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAncm9sZXMnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZXF1aXJlZFBvbGljeTogJ0FicElkZW50aXR5LlJvbGVzJyxcclxuICAgICAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50OiB7XHJcbiAgICAgICAgICAgIGtleTogJ0lkZW50aXR5LlJvbGVzQ29tcG9uZW50JyxcclxuICAgICAgICAgICAgZGVmYXVsdENvbXBvbmVudDogUm9sZXNDb21wb25lbnQsXHJcbiAgICAgICAgICB9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5Sb3V0ZURhdGE8Um9sZXNDb21wb25lbnQ+LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndXNlcnMnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZXF1aXJlZFBvbGljeTogJ0FicElkZW50aXR5LlVzZXJzJyxcclxuICAgICAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50OiB7XHJcbiAgICAgICAgICAgIGtleTogJ0lkZW50aXR5LlVzZXJzQ29tcG9uZW50JyxcclxuICAgICAgICAgICAgZGVmYXVsdENvbXBvbmVudDogVXNlcnNDb21wb25lbnQsXHJcbiAgICAgICAgICB9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5Sb3V0ZURhdGE8VXNlcnNDb21wb25lbnQ+LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSwgQ29yZU1vZHVsZV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eVJvdXRpbmdNb2R1bGUge31cclxuIl19