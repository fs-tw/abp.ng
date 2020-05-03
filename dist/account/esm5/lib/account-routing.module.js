/**
 * @fileoverview added by tsickle
 * Generated from: lib/account-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DynamicLayoutComponent, AuthGuard, ReplaceableRouteContainerComponent, } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { RegisterComponent } from './components/register/register.component';
var ɵ0 = {
    replaceableComponent: (/** @type {?} */ ({
        key: "Account.LoginComponent" /* Login */,
        defaultComponent: LoginComponent,
    })),
}, ɵ1 = {
    replaceableComponent: (/** @type {?} */ ({
        key: "Account.RegisterComponent" /* Register */,
        defaultComponent: RegisterComponent,
    })),
}, ɵ2 = {
    replaceableComponent: (/** @type {?} */ ({
        key: "Account.ManageProfileComponent" /* ManageProfile */,
        defaultComponent: ManageProfileComponent,
    })),
};
/** @type {?} */
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: DynamicLayoutComponent,
        children: [
            {
                path: 'login',
                component: ReplaceableRouteContainerComponent,
                data: ɵ0,
            },
            {
                path: 'register',
                component: ReplaceableRouteContainerComponent,
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
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return AccountRoutingModule;
}());
export { AccountRoutingModule };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC8iLCJzb3VyY2VzIjpbImxpYi9hY2NvdW50LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixTQUFTLEVBRVQsa0NBQWtDLEdBQ25DLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztTQVkvRDtJQUNKLG9CQUFvQixFQUFFLG1CQUFBO1FBQ3BCLEdBQUcsc0NBQTBCO1FBQzdCLGdCQUFnQixFQUFFLGNBQWM7S0FDakMsRUFBbUQ7Q0FDckQsT0FLSztJQUNKLG9CQUFvQixFQUFFLG1CQUFBO1FBQ3BCLEdBQUcsNENBQTZCO1FBQ2hDLGdCQUFnQixFQUFFLGlCQUFpQjtLQUNwQyxFQUFzRDtDQUN4RCxPQU1LO0lBQ0osb0JBQW9CLEVBQUUsbUJBQUE7UUFDcEIsR0FBRyxzREFBa0M7UUFDckMsZ0JBQWdCLEVBQUUsc0JBQXNCO0tBQ3pDLEVBQTJEO0NBQzdEOztJQW5DSCxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRTtJQUNwRDtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsa0NBQWtDO2dCQUM3QyxJQUFJLElBS0g7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsa0NBQWtDO2dCQUM3QyxJQUFJLElBS0g7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLFNBQVMsRUFBRSxrQ0FBa0M7Z0JBQzdDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDeEIsSUFBSSxJQUtIO2FBQ0Y7U0FDRjtLQUNGO0NBQ0Y7QUFFRDtJQUFBO0lBSW1DLENBQUM7O2dCQUpuQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4Qjs7SUFDa0MsMkJBQUM7Q0FBQSxBQUpwQyxJQUlvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgQXV0aEd1YXJkLFxyXG4gIFJlcGxhY2VhYmxlQ29tcG9uZW50cyxcclxuICBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG59IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFuYWdlUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tYW5hZ2UtcHJvZmlsZS9tYW5hZ2UtcHJvZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBlQWNjb3VudENvbXBvbmVudHMgfSBmcm9tICcuL2VudW1zL2NvbXBvbmVudHMnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgeyBwYXRoOiAnJywgcGF0aE1hdGNoOiAnZnVsbCcsIHJlZGlyZWN0VG86ICdsb2dpbicgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnbG9naW4nLFxyXG4gICAgICAgIGNvbXBvbmVudDogUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZXBsYWNlYWJsZUNvbXBvbmVudDoge1xyXG4gICAgICAgICAgICBrZXk6IGVBY2NvdW50Q29tcG9uZW50cy5Mb2dpbixcclxuICAgICAgICAgICAgZGVmYXVsdENvbXBvbmVudDogTG9naW5Db21wb25lbnQsXHJcbiAgICAgICAgICB9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5Sb3V0ZURhdGE8TG9naW5Db21wb25lbnQ+LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAncmVnaXN0ZXInLFxyXG4gICAgICAgIGNvbXBvbmVudDogUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZXBsYWNlYWJsZUNvbXBvbmVudDoge1xyXG4gICAgICAgICAgICBrZXk6IGVBY2NvdW50Q29tcG9uZW50cy5SZWdpc3RlcixcclxuICAgICAgICAgICAgZGVmYXVsdENvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICAgICAgICB9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5Sb3V0ZURhdGE8UmVnaXN0ZXJDb21wb25lbnQ+LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnbWFuYWdlLXByb2ZpbGUnLFxyXG4gICAgICAgIGNvbXBvbmVudDogUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVwbGFjZWFibGVDb21wb25lbnQ6IHtcclxuICAgICAgICAgICAga2V5OiBlQWNjb3VudENvbXBvbmVudHMuTWFuYWdlUHJvZmlsZSxcclxuICAgICAgICAgICAgZGVmYXVsdENvbXBvbmVudDogTWFuYWdlUHJvZmlsZUNvbXBvbmVudCxcclxuICAgICAgICAgIH0gYXMgUmVwbGFjZWFibGVDb21wb25lbnRzLlJvdXRlRGF0YTxNYW5hZ2VQcm9maWxlQ29tcG9uZW50PixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudFJvdXRpbmdNb2R1bGUge31cclxuIl19