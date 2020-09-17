import { __decorate } from "tslib";
import { DynamicLayoutComponent, AuthGuard, ReplaceableRouteContainerComponent, } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationFlowGuard } from './guards/authentication-flow.guard';
const ɵ0 = {
    replaceableComponent: {
        key: "Account.LoginComponent" /* Login */,
        defaultComponent: LoginComponent,
    },
}, ɵ1 = {
    replaceableComponent: {
        key: "Account.RegisterComponent" /* Register */,
        defaultComponent: RegisterComponent,
    },
}, ɵ2 = {
    replaceableComponent: {
        key: "Account.ManageProfileComponent" /* ManageProfile */,
        defaultComponent: ManageProfileComponent,
    },
};
const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: DynamicLayoutComponent,
        children: [
            {
                path: 'login',
                component: ReplaceableRouteContainerComponent,
                canActivate: [AuthenticationFlowGuard],
                data: ɵ0,
            },
            {
                path: 'register',
                component: ReplaceableRouteContainerComponent,
                canActivate: [AuthenticationFlowGuard],
                data: ɵ1,
            },
            {
                path: 'manage-profile',
                component: ReplaceableRouteContainerComponent,
                canActivate: [AuthGuard],
                data: ɵ2,
            },
        ],
    },
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AccountRoutingModule);
export { AccountRoutingModule };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL2FjY291bnQvc3JjL2xpYi9hY2NvdW50LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLFNBQVMsRUFFVCxrQ0FBa0MsR0FDbkMsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO1dBWS9EO0lBQ0osb0JBQW9CLEVBQUU7UUFDcEIsR0FBRyxzQ0FBMEI7UUFDN0IsZ0JBQWdCLEVBQUUsY0FBYztLQUNrQjtDQUNyRCxPQU1LO0lBQ0osb0JBQW9CLEVBQUU7UUFDcEIsR0FBRyw0Q0FBNkI7UUFDaEMsZ0JBQWdCLEVBQUUsaUJBQWlCO0tBQ2tCO0NBQ3hELE9BTUs7SUFDSixvQkFBb0IsRUFBRTtRQUNwQixHQUFHLHNEQUFrQztRQUNyQyxnQkFBZ0IsRUFBRSxzQkFBc0I7S0FDa0I7Q0FDN0Q7QUFyQ1QsTUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRTtJQUNwRDtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsa0NBQWtDO2dCQUM3QyxXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDdEMsSUFBSSxJQUtIO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLGtDQUFrQztnQkFDN0MsV0FBVyxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3RDLElBQUksSUFLSDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsU0FBUyxFQUFFLGtDQUFrQztnQkFDN0MsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUN4QixJQUFJLElBS0g7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBTUYsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7Q0FBRyxDQUFBO0FBQXZCLG9CQUFvQjtJQUpoQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1csb0JBQW9CLENBQUc7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gIEF1dGhHdWFyZCxcclxuICBSZXBsYWNlYWJsZUNvbXBvbmVudHMsXHJcbiAgUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxufSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hbmFnZVByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFuYWdlLXByb2ZpbGUvbWFuYWdlLXByb2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgZUFjY291bnRDb21wb25lbnRzIH0gZnJvbSAnLi9lbnVtcy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25GbG93R3VhcmQgfSBmcm9tICcuL2d1YXJkcy9hdXRoZW50aWNhdGlvbi1mbG93Lmd1YXJkJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHsgcGF0aDogJycsIHBhdGhNYXRjaDogJ2Z1bGwnLCByZWRpcmVjdFRvOiAnbG9naW4nIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBjb21wb25lbnQ6IER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2xvZ2luJyxcclxuICAgICAgICBjb21wb25lbnQ6IFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoZW50aWNhdGlvbkZsb3dHdWFyZF0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVwbGFjZWFibGVDb21wb25lbnQ6IHtcclxuICAgICAgICAgICAga2V5OiBlQWNjb3VudENvbXBvbmVudHMuTG9naW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHRDb21wb25lbnQ6IExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgICAgfSBhcyBSZXBsYWNlYWJsZUNvbXBvbmVudHMuUm91dGVEYXRhPExvZ2luQ29tcG9uZW50PixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3JlZ2lzdGVyJyxcclxuICAgICAgICBjb21wb25lbnQ6IFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoZW50aWNhdGlvbkZsb3dHdWFyZF0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVwbGFjZWFibGVDb21wb25lbnQ6IHtcclxuICAgICAgICAgICAga2V5OiBlQWNjb3VudENvbXBvbmVudHMuUmVnaXN0ZXIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRDb21wb25lbnQ6IFJlZ2lzdGVyQ29tcG9uZW50LFxyXG4gICAgICAgICAgfSBhcyBSZXBsYWNlYWJsZUNvbXBvbmVudHMuUm91dGVEYXRhPFJlZ2lzdGVyQ29tcG9uZW50PixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ21hbmFnZS1wcm9maWxlJyxcclxuICAgICAgICBjb21wb25lbnQ6IFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50OiB7XHJcbiAgICAgICAgICAgIGtleTogZUFjY291bnRDb21wb25lbnRzLk1hbmFnZVByb2ZpbGUsXHJcbiAgICAgICAgICAgIGRlZmF1bHRDb21wb25lbnQ6IE1hbmFnZVByb2ZpbGVDb21wb25lbnQsXHJcbiAgICAgICAgICB9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5Sb3V0ZURhdGE8TWFuYWdlUHJvZmlsZUNvbXBvbmVudD4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY291bnRSb3V0aW5nTW9kdWxlIHt9XHJcbiJdfQ==