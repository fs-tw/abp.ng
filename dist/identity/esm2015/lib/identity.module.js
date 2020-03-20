/**
 * @fileoverview added by tsickle
 * Generated from: lib/identity.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { RolesComponent } from './components/roles/roles.component';
import { IdentityRoutingModule } from './identity-routing.module';
import { IdentityState } from './states/identity.state';
import { NgbTabsetModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { UsersComponent } from './components/users/users.component';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { NgxValidateCoreModule } from '@ngx-validate/core';
export class IdentityModule {
}
IdentityModule.decorators = [
    { type: NgModule, args: [{
                declarations: [RolesComponent, UsersComponent],
                imports: [
                    NgxsModule.forFeature([IdentityState]),
                    CoreModule,
                    IdentityRoutingModule,
                    NgbTabsetModule,
                    ThemeSharedModule,
                    NgbDropdownModule,
                    PermissionManagementModule,
                    NgxValidateCoreModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5pZGVudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9pZGVudGl0eS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFlM0QsTUFBTSxPQUFPLGNBQWM7OztZQWIxQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQztnQkFDOUMsT0FBTyxFQUFFO29CQUNQLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDdEMsVUFBVTtvQkFDVixxQkFBcUI7b0JBQ3JCLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLDBCQUEwQjtvQkFDMUIscUJBQXFCO2lCQUN0QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hzTW9kdWxlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBSb2xlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yb2xlcy9yb2xlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJZGVudGl0eVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2lkZW50aXR5LXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgSWRlbnRpdHlTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2lkZW50aXR5LnN0YXRlJztcclxuaW1wb3J0IHsgTmdiVGFic2V0TW9kdWxlLCBOZ2JEcm9wZG93bk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgVGhlbWVTaGFyZWRNb2R1bGUgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IFVzZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25NYW5hZ2VtZW50TW9kdWxlIH0gZnJvbSAnQGFicC9uZy5wZXJtaXNzaW9uLW1hbmFnZW1lbnQnO1xyXG5pbXBvcnQgeyBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUgfSBmcm9tICdAbmd4LXZhbGlkYXRlL2NvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtSb2xlc0NvbXBvbmVudCwgVXNlcnNDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE5neHNNb2R1bGUuZm9yRmVhdHVyZShbSWRlbnRpdHlTdGF0ZV0pLFxyXG4gICAgQ29yZU1vZHVsZSxcclxuICAgIElkZW50aXR5Um91dGluZ01vZHVsZSxcclxuICAgIE5nYlRhYnNldE1vZHVsZSxcclxuICAgIFRoZW1lU2hhcmVkTW9kdWxlLFxyXG4gICAgTmdiRHJvcGRvd25Nb2R1bGUsXHJcbiAgICBQZXJtaXNzaW9uTWFuYWdlbWVudE1vZHVsZSxcclxuICAgIE5neFZhbGlkYXRlQ29yZU1vZHVsZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWRlbnRpdHlNb2R1bGUge31cclxuIl19