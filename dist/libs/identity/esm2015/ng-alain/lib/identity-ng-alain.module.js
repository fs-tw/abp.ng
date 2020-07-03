import { IdentityWrapModule } from '@fs/identity/wrap';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';
import * as i0 from "@angular/core";
//import { SettingManagementNgAlainModule } from '@fs/setting-management/ng-alain';
//import { InitialService} from './services/initial.service'
export class IdentityNgAlainModule {
    static forChild() {
        return {
            ngModule: IdentityNgAlainModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(IdentityNgAlainModule.forChild());
    }
}
IdentityNgAlainModule.ɵmod = i0.ɵɵdefineNgModule({ type: IdentityNgAlainModule });
IdentityNgAlainModule.ɵinj = i0.ɵɵdefineInjector({ factory: function IdentityNgAlainModule_Factory(t) { return new (t || IdentityNgAlainModule)(); }, imports: [[
            CoreModule,
            NgAlainBasicModule,
            PermissionManagementNgAlainModule,
            IdentityWrapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IdentityNgAlainModule, { declarations: [UsersComponent, RolesComponent], imports: [CoreModule,
        NgAlainBasicModule,
        PermissionManagementNgAlainModule,
        IdentityWrapModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IdentityNgAlainModule, [{
        type: NgModule,
        args: [{
                declarations: [UsersComponent, RolesComponent],
                entryComponents: [UsersComponent, RolesComponent],
                imports: [
                    CoreModule,
                    NgAlainBasicModule,
                    PermissionManagementNgAlainModule,
                    IdentityWrapModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktbmctYWxhaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9pZGVudGl0eS9uZy1hbGFpbi9zcmMvbGliL2lkZW50aXR5LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUF3QyxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBQ3ZGLG1GQUFtRjtBQUNuRiw0REFBNEQ7QUFhNUQsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxNQUFNLENBQUMsUUFBUTtRQUNiLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7O3lEQVZVLHFCQUFxQjt5SEFBckIscUJBQXFCLGtCQVJ2QjtZQUNQLFVBQVU7WUFDVixrQkFBa0I7WUFDbEIsaUNBQWlDO1lBQ2pDLGtCQUFrQjtTQUVuQjt3RkFFVSxxQkFBcUIsbUJBVmpCLGNBQWMsRUFBRSxjQUFjLGFBRzNDLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsaUNBQWlDO1FBQ2pDLGtCQUFrQjtrREFJVCxxQkFBcUI7Y0FYakMsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUM7Z0JBQzlDLGVBQWUsRUFBRSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUM7Z0JBQ2pELE9BQU8sRUFBRTtvQkFDUCxVQUFVO29CQUNWLGtCQUFrQjtvQkFDbEIsaUNBQWlDO29CQUNqQyxrQkFBa0I7aUJBRW5CO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZGVudGl0eVdyYXBNb2R1bGUgfSBmcm9tICdAZnMvaWRlbnRpdHkvd3JhcCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZUZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdBbGFpbkJhc2ljTW9kdWxlIH0gZnJvbSAnQGZzL25nLWFsYWluL2Jhc2ljJztcclxuaW1wb3J0IHsgVXNlcnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm9sZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm9sZXMvcm9sZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF6eU1vZHVsZUZhY3RvcnksIENvcmVNb2R1bGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGUgfSBmcm9tICdAZnMvcGVybWlzc2lvbi1tYW5hZ2VtZW50L25nLWFsYWluJztcclxuLy9pbXBvcnQgeyBTZXR0aW5nTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGUgfSBmcm9tICdAZnMvc2V0dGluZy1tYW5hZ2VtZW50L25nLWFsYWluJztcclxuLy9pbXBvcnQgeyBJbml0aWFsU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9pbml0aWFsLnNlcnZpY2UnXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1VzZXJzQ29tcG9uZW50LCBSb2xlc0NvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVXNlcnNDb21wb25lbnQsIFJvbGVzQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb3JlTW9kdWxlLFxyXG4gICAgTmdBbGFpbkJhc2ljTW9kdWxlLFxyXG4gICAgUGVybWlzc2lvbk1hbmFnZW1lbnROZ0FsYWluTW9kdWxlLFxyXG4gICAgSWRlbnRpdHlXcmFwTW9kdWxlLFxyXG4gICAgLy9TZXR0aW5nTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eU5nQWxhaW5Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPElkZW50aXR5TmdBbGFpbk1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IElkZW50aXR5TmdBbGFpbk1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yTGF6eSgpOiBOZ01vZHVsZUZhY3Rvcnk8SWRlbnRpdHlOZ0FsYWluTW9kdWxlPiB7XHJcbiAgICByZXR1cm4gbmV3IExhenlNb2R1bGVGYWN0b3J5KElkZW50aXR5TmdBbGFpbk1vZHVsZS5mb3JDaGlsZCgpKTtcclxuICB9XHJcbn1cclxuIl19