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
export class IdentityNgAlainModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktbmctYWxhaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2lkZW50aXR5L25nLWFsYWluLyIsInNvdXJjZXMiOlsibGliL2lkZW50aXR5LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFZdkYsTUFBTSxPQUFPLHFCQUFxQjs7O1lBVmpDLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUMsY0FBYyxDQUFDO2dCQUM3QyxPQUFPLEVBQUU7b0JBQ0wsVUFBVTtvQkFDVixrQkFBa0I7b0JBQ2xCLDRCQUE0QjtvQkFDNUIsaUNBQWlDO29CQUNqQyxjQUFjO2lCQUNqQjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWRlbnRpdHlNb2R1bGUgfSBmcm9tICdAZnMvaWRlbnRpdHknO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdBbGFpbkJhc2ljTW9kdWxlIH0gZnJvbSAnQGZzL25nLWFsYWluL2Jhc2ljJztcclxuaW1wb3J0IHsgSWRlbnRpdHlOZ0FsYWluUm91dGluZ01vZHVsZSB9IGZyb20gJy4vaWRlbnRpdHktbmctYWxhaW4tcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBVc2Vyc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb2xlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yb2xlcy9yb2xlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGUgfSBmcm9tICdAZnMvcGVybWlzc2lvbi1tYW5hZ2VtZW50L25nLWFsYWluJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtVc2Vyc0NvbXBvbmVudCxSb2xlc0NvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29yZU1vZHVsZSxcclxuICAgICAgICBOZ0FsYWluQmFzaWNNb2R1bGUsXHJcbiAgICAgICAgSWRlbnRpdHlOZ0FsYWluUm91dGluZ01vZHVsZSxcclxuICAgICAgICBQZXJtaXNzaW9uTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGUsXHJcbiAgICAgICAgSWRlbnRpdHlNb2R1bGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIElkZW50aXR5TmdBbGFpbk1vZHVsZSB7IH1cclxuIl19