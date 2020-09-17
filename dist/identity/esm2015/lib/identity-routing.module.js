import { __decorate } from "tslib";
import { AuthGuard, DynamicLayoutComponent, PermissionGuard, ReplaceableRouteContainerComponent, } from '@abp/ng.core';
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
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], IdentityRoutingModule);
export { IdentityRoutingModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9pZGVudGl0eS9zcmMvbGliL2lkZW50aXR5LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHNCQUFzQixFQUN0QixlQUFlLEVBRWYsa0NBQWtDLEdBQ25DLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7V0FhdEQ7SUFDSixjQUFjLEVBQUUsbUJBQW1CO0lBQ25DLG9CQUFvQixFQUFFO1FBQ3BCLEdBQUcsdUNBQTJCO1FBQzlCLGdCQUFnQixFQUFFLGNBQWM7S0FDa0I7Q0FDckQsT0FLSztJQUNKLGNBQWMsRUFBRSxtQkFBbUI7SUFDbkMsb0JBQW9CLEVBQUU7UUFDcEIsR0FBRyx1Q0FBMkI7UUFDOUIsZ0JBQWdCLEVBQUUsY0FBYztLQUNrQjtDQUNyRDtBQTNCVCxNQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BEO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7UUFDekMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsU0FBUyxFQUFFLGtDQUFrQztnQkFDN0MsSUFBSSxJQU1IO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsa0NBQWtDO2dCQUM3QyxJQUFJLElBTUg7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBTUYsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7Q0FBRyxDQUFBO0FBQXhCLHFCQUFxQjtJQUpqQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1cscUJBQXFCLENBQUc7U0FBeEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBdXRoR3VhcmQsXHJcbiAgRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICBQZXJtaXNzaW9uR3VhcmQsXHJcbiAgUmVwbGFjZWFibGVDb21wb25lbnRzLFxyXG4gIFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbn0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb2xlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yb2xlcy9yb2xlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVc2Vyc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBlSWRlbnRpdHlDb21wb25lbnRzIH0gZnJvbSAnLi9lbnVtcy9jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdyb2xlcycsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgUGVybWlzc2lvbkd1YXJkXSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAncm9sZXMnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZXF1aXJlZFBvbGljeTogJ0FicElkZW50aXR5LlJvbGVzJyxcclxuICAgICAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50OiB7XHJcbiAgICAgICAgICAgIGtleTogZUlkZW50aXR5Q29tcG9uZW50cy5Sb2xlcyxcclxuICAgICAgICAgICAgZGVmYXVsdENvbXBvbmVudDogUm9sZXNDb21wb25lbnQsXHJcbiAgICAgICAgICB9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5Sb3V0ZURhdGE8Um9sZXNDb21wb25lbnQ+LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndXNlcnMnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZXF1aXJlZFBvbGljeTogJ0FicElkZW50aXR5LlVzZXJzJyxcclxuICAgICAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50OiB7XHJcbiAgICAgICAgICAgIGtleTogZUlkZW50aXR5Q29tcG9uZW50cy5Vc2VycyxcclxuICAgICAgICAgICAgZGVmYXVsdENvbXBvbmVudDogVXNlcnNDb21wb25lbnQsXHJcbiAgICAgICAgICB9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5Sb3V0ZURhdGE8VXNlcnNDb21wb25lbnQ+LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eVJvdXRpbmdNb2R1bGUge31cclxuIl19