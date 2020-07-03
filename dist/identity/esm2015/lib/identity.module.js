var IdentityModule_1;
import { __decorate } from "tslib";
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { NgxsModule } from '@ngxs/store';
import { RolesComponent } from './components/roles/roles.component';
import { UsersComponent } from './components/users/users.component';
import { IdentityRoutingModule } from './identity-routing.module';
import { IdentityState } from './states/identity.state';
let IdentityModule = IdentityModule_1 = class IdentityModule {
    static forChild() {
        return {
            ngModule: IdentityModule_1,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(IdentityModule_1.forChild());
    }
};
IdentityModule = IdentityModule_1 = __decorate([
    NgModule({
        declarations: [RolesComponent, UsersComponent],
        exports: [RolesComponent, UsersComponent],
        imports: [
            NgxsModule.forFeature([IdentityState]),
            CoreModule,
            IdentityRoutingModule,
            NgbNavModule,
            ThemeSharedModule,
            NgbDropdownModule,
            PermissionManagementModule,
            NgxValidateCoreModule,
        ],
    })
], IdentityModule);
export { IdentityModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvaWRlbnRpdHkvc3JjL2xpYi9pZGVudGl0eS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBdUIsUUFBUSxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQWdCeEQsSUFBYSxjQUFjLHNCQUEzQixNQUFhLGNBQWM7SUFDekIsTUFBTSxDQUFDLFFBQVE7UUFDYixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFjO1lBQ3hCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxnQkFBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUNGLENBQUE7QUFYWSxjQUFjO0lBZDFCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUM7UUFDOUMsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQztRQUN6QyxPQUFPLEVBQUU7WUFDUCxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEMsVUFBVTtZQUNWLHFCQUFxQjtZQUNyQixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQiwwQkFBMEI7WUFDMUIscUJBQXFCO1NBQ3RCO0tBQ0YsQ0FBQztHQUNXLGNBQWMsQ0FXMUI7U0FYWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZHVsZSwgTGF6eU1vZHVsZUZhY3RvcnkgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uTWFuYWdlbWVudE1vZHVsZSB9IGZyb20gJ0BhYnAvbmcucGVybWlzc2lvbi1tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgVGhlbWVTaGFyZWRNb2R1bGUgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiRHJvcGRvd25Nb2R1bGUsIE5nYk5hdk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTmd4VmFsaWRhdGVDb3JlTW9kdWxlIH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgTmd4c01vZHVsZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgUm9sZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm9sZXMvcm9sZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXNlcnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSWRlbnRpdHlSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9pZGVudGl0eS1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IElkZW50aXR5U3RhdGUgfSBmcm9tICcuL3N0YXRlcy9pZGVudGl0eS5zdGF0ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1JvbGVzQ29tcG9uZW50LCBVc2Vyc0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1JvbGVzQ29tcG9uZW50LCBVc2Vyc0NvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmd4c01vZHVsZS5mb3JGZWF0dXJlKFtJZGVudGl0eVN0YXRlXSksXHJcbiAgICBDb3JlTW9kdWxlLFxyXG4gICAgSWRlbnRpdHlSb3V0aW5nTW9kdWxlLFxyXG4gICAgTmdiTmF2TW9kdWxlLFxyXG4gICAgVGhlbWVTaGFyZWRNb2R1bGUsXHJcbiAgICBOZ2JEcm9wZG93bk1vZHVsZSxcclxuICAgIFBlcm1pc3Npb25NYW5hZ2VtZW50TW9kdWxlLFxyXG4gICAgTmd4VmFsaWRhdGVDb3JlTW9kdWxlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SWRlbnRpdHlNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBJZGVudGl0eU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yTGF6eSgpOiBOZ01vZHVsZUZhY3Rvcnk8SWRlbnRpdHlNb2R1bGU+IHtcclxuICAgIHJldHVybiBuZXcgTGF6eU1vZHVsZUZhY3RvcnkoSWRlbnRpdHlNb2R1bGUuZm9yQ2hpbGQoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==