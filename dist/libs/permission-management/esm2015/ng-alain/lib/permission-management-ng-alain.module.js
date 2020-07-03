import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { PermissionManagementComponent } from './components/permission-management.component';
// import { RolesComponent } from './components/roles/roles.component';
import { CoreModule } from '@abp/ng.core';
import { PermissionManagementWrapModule } from '@fs/permission-management/wrap';
import * as i0 from "@angular/core";
//import { PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';
//import { SettingManagementNgAlainModule } from '@fs/setting-management/ng-alain';
//import { InitialService} from './services/initial.service'
export class PermissionManagementNgAlainModule {
}
PermissionManagementNgAlainModule.ɵmod = i0.ɵɵdefineNgModule({ type: PermissionManagementNgAlainModule });
PermissionManagementNgAlainModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PermissionManagementNgAlainModule_Factory(t) { return new (t || PermissionManagementNgAlainModule)(); }, imports: [[
            CoreModule,
            NgAlainBasicModule,
            PermissionManagementWrapModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PermissionManagementNgAlainModule, { declarations: [PermissionManagementComponent], imports: [CoreModule,
        NgAlainBasicModule,
        PermissionManagementWrapModule], exports: [PermissionManagementComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PermissionManagementNgAlainModule, [{
        type: NgModule,
        args: [{
                declarations: [PermissionManagementComponent],
                entryComponents: [PermissionManagementComponent],
                imports: [
                    CoreModule,
                    NgAlainBasicModule,
                    PermissionManagementWrapModule
                ],
                exports: [
                    PermissionManagementComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LW5nLWFsYWluLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcGVybWlzc2lvbi1tYW5hZ2VtZW50L25nLWFsYWluL3NyYy9saWIvcGVybWlzc2lvbi1tYW5hZ2VtZW50LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUF3QyxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM3Rix1RUFBdUU7QUFDdkUsT0FBTyxFQUFxQixVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0QsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBQ2hGLHlGQUF5RjtBQUN6RixtRkFBbUY7QUFDbkYsNERBQTREO0FBYzVELE1BQU0sT0FBTyxpQ0FBaUM7O3FFQUFqQyxpQ0FBaUM7aUpBQWpDLGlDQUFpQyxrQkFUbkM7WUFDUCxVQUFVO1lBQ1Ysa0JBQWtCO1lBQ2xCLDhCQUE4QjtTQUMvQjt3RkFLVSxpQ0FBaUMsbUJBWDdCLDZCQUE2QixhQUcxQyxVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLDhCQUE4QixhQUc5Qiw2QkFBNkI7a0RBR3BCLGlDQUFpQztjQVo3QyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzdDLGVBQWUsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2dCQUNoRCxPQUFPLEVBQUU7b0JBQ1AsVUFBVTtvQkFDVixrQkFBa0I7b0JBQ2xCLDhCQUE4QjtpQkFDL0I7Z0JBQ0QsT0FBTyxFQUFDO29CQUNOLDZCQUE2QjtpQkFDOUI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElkZW50aXR5V3JhcE1vZHVsZSB9IGZyb20gJ0Bmcy9pZGVudGl0eS93cmFwJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0FsYWluQmFzaWNNb2R1bGUgfSBmcm9tICdAZnMvbmctYWxhaW4vYmFzaWMnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uTWFuYWdlbWVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgUm9sZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm9sZXMvcm9sZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF6eU1vZHVsZUZhY3RvcnksIENvcmVNb2R1bGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uTWFuYWdlbWVudFdyYXBNb2R1bGUgfSBmcm9tICdAZnMvcGVybWlzc2lvbi1tYW5hZ2VtZW50L3dyYXAnO1xyXG4vL2ltcG9ydCB7IFBlcm1pc3Npb25NYW5hZ2VtZW50TmdBbGFpbk1vZHVsZSB9IGZyb20gJ0Bmcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQvbmctYWxhaW4nO1xyXG4vL2ltcG9ydCB7IFNldHRpbmdNYW5hZ2VtZW50TmdBbGFpbk1vZHVsZSB9IGZyb20gJ0Bmcy9zZXR0aW5nLW1hbmFnZW1lbnQvbmctYWxhaW4nO1xyXG4vL2ltcG9ydCB7IEluaXRpYWxTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2luaXRpYWwuc2VydmljZSdcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1Blcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb3JlTW9kdWxlLFxyXG4gICAgTmdBbGFpbkJhc2ljTW9kdWxlLFxyXG4gICAgUGVybWlzc2lvbk1hbmFnZW1lbnRXcmFwTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOltcclxuICAgIFBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbk1hbmFnZW1lbnROZ0FsYWluTW9kdWxlIHtcclxuICAvLyBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxQZXJtaXNzaW9uTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGU+IHtcclxuICAvLyAgIHJldHVybiB7XHJcbiAgLy8gICAgIG5nTW9kdWxlOiBQZXJtaXNzaW9uTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGUsXHJcbiAgLy8gICAgIHByb3ZpZGVyczogW10sXHJcbiAgLy8gICB9O1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gc3RhdGljIGZvckxhenkoKTogTmdNb2R1bGVGYWN0b3J5PFBlcm1pc3Npb25NYW5hZ2VtZW50TmdBbGFpbk1vZHVsZT4ge1xyXG4gIC8vICAgcmV0dXJuIG5ldyBMYXp5TW9kdWxlRmFjdG9yeShQZXJtaXNzaW9uTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGUuZm9yQ2hpbGQoKSk7XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==