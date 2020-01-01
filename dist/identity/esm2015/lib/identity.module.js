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
import { TableModule } from 'primeng/table';
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
                    TableModule,
                    NgbDropdownModule,
                    PermissionManagementModule,
                    NgxValidateCoreModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5pZGVudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9pZGVudGl0eS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQWdCM0QsTUFBTSxPQUFPLGNBQWM7OztZQWQxQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQztnQkFDOUMsT0FBTyxFQUFFO29CQUNQLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDdEMsVUFBVTtvQkFDVixxQkFBcUI7b0JBQ3JCLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixXQUFXO29CQUNYLGlCQUFpQjtvQkFDakIsMEJBQTBCO29CQUMxQixxQkFBcUI7aUJBQ3RCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neHNNb2R1bGUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IFJvbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JvbGVzL3JvbGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElkZW50aXR5Um91dGluZ01vZHVsZSB9IGZyb20gJy4vaWRlbnRpdHktcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBJZGVudGl0eVN0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvaWRlbnRpdHkuc3RhdGUnO1xyXG5pbXBvcnQgeyBOZ2JUYWJzZXRNb2R1bGUsIE5nYkRyb3Bkb3duTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBUaGVtZVNoYXJlZE1vZHVsZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgVXNlcnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGVybWlzc2lvbk1hbmFnZW1lbnRNb2R1bGUgfSBmcm9tICdAYWJwL25nLnBlcm1pc3Npb24tbWFuYWdlbWVudCc7XHJcbmltcG9ydCB7IFRhYmxlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy90YWJsZSc7XHJcbmltcG9ydCB7IE5neFZhbGlkYXRlQ29yZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdmFsaWRhdGUvY29yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1JvbGVzQ29tcG9uZW50LCBVc2Vyc0NvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmd4c01vZHVsZS5mb3JGZWF0dXJlKFtJZGVudGl0eVN0YXRlXSksXHJcbiAgICBDb3JlTW9kdWxlLFxyXG4gICAgSWRlbnRpdHlSb3V0aW5nTW9kdWxlLFxyXG4gICAgTmdiVGFic2V0TW9kdWxlLFxyXG4gICAgVGhlbWVTaGFyZWRNb2R1bGUsXHJcbiAgICBUYWJsZU1vZHVsZSxcclxuICAgIE5nYkRyb3Bkb3duTW9kdWxlLFxyXG4gICAgUGVybWlzc2lvbk1hbmFnZW1lbnRNb2R1bGUsXHJcbiAgICBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIElkZW50aXR5TW9kdWxlIHt9XHJcbiJdfQ==