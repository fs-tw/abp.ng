/**
 * @fileoverview added by tsickle
 * Generated from: lib/identity-ng-alain-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';
import { LayoutDefaultComponent } from '@fs/ng-alain/basic';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
const ɵ0 = { requiredPolicy: 'AbpIdentity.Roles' }, ɵ1 = { requiredPolicy: 'AbpIdentity.Users' };
/** @type {?} */
const routes = [
    { path: '', redirectTo: 'roles', pathMatch: 'full' },
    {
        path: '',
        component: LayoutDefaultComponent,
        canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'roles',
                component: RolesComponent,
                data: ɵ0,
            },
            {
                path: 'users',
                component: UsersComponent,
                data: ɵ1,
            },
        ],
    },
];
export class IdentityNgAlainRoutingModule {
}
IdentityNgAlainRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktbmctYWxhaW4tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvaWRlbnRpdHkvbmctYWxhaW4vIiwic291cmNlcyI6WyJsaWIvaWRlbnRpdHktbmctYWxhaW4tcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQTBCLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztXQVk5QyxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxPQUt2QyxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRTs7TUFmdkQsTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEQ7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQztRQUN6QyxRQUFRLEVBQUU7WUFDTjtnQkFDSSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsY0FBYztnQkFDekIsSUFBSSxJQUF5QzthQUNoRDtZQUNEO2dCQUNJLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSxjQUFjO2dCQUN6QixJQUFJLElBQXlDO2FBQ2hEO1NBQ0o7S0FDSjtDQUNKO0FBTUQsTUFBTSxPQUFPLDRCQUE0Qjs7O1lBSnhDLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IER5bmFtaWNMYXlvdXRDb21wb25lbnQsIEF1dGhHdWFyZCwgUGVybWlzc2lvbkd1YXJkIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdENvbXBvbmVudCB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9iYXNpYyc7XHJcbmltcG9ydCB7IFVzZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JvbGVzL3JvbGVzLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdyb2xlcycsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgY29tcG9uZW50OiBMYXlvdXREZWZhdWx0Q29tcG9uZW50LFxyXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBQZXJtaXNzaW9uR3VhcmRdLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICdyb2xlcycsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFJvbGVzQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyByZXF1aXJlZFBvbGljeTogJ0FicElkZW50aXR5LlJvbGVzJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiAndXNlcnMnLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBVc2Vyc0NvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgcmVxdWlyZWRQb2xpY3k6ICdBYnBJZGVudGl0eS5Vc2VycycgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eU5nQWxhaW5Sb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=