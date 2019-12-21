/**
 * @fileoverview added by tsickle
 * Generated from: lib/account-ng-alain-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserLoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/register/register.component';
import { AuthGuard } from '@abp/ng.core';
import { LayoutPassportComponent, LayoutDefaultComponent } from '@fs/ng-alain/basic';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
/** @type {?} */
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: LayoutDefaultComponent,
        children: [
            {
                canActivate: [AuthGuard],
                path: 'manage-profile',
                component: ManageProfileComponent,
            }
        ],
    },
    {
        path: '',
        component: LayoutPassportComponent,
        children: [
            { path: 'login', component: UserLoginComponent },
            { path: 'register', component: UserRegisterComponent },
        ],
    },
];
var AccountNgAlainRoutingModule = /** @class */ (function () {
    function AccountNgAlainRoutingModule() {
    }
    AccountNgAlainRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return AccountNgAlainRoutingModule;
}());
export { AccountNgAlainRoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1uZy1hbGFpbi1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9hY2NvdW50L25nLWFsYWluLyIsInNvdXJjZXMiOlsibGliL2FjY291bnQtbmctYWxhaW4tcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQTtBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQTBCLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUMsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7SUFFeEYsTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUU7SUFDcEQ7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsUUFBUSxFQUFFO1lBQ047Z0JBQ0ksV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUN4QixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixTQUFTLEVBQUUsc0JBQXNCO2FBQ3BDO1NBQ0o7S0FDSjtJQUNEO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsdUJBQXVCO1FBQ2xDLFFBQVEsRUFBRTtZQUNOLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUU7WUFDaEQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBRTtTQUN6RDtLQUNKO0NBRUo7QUFFRDtJQUFBO0lBSTJDLENBQUM7O2dCQUozQyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUMxQjs7SUFDMEMsa0NBQUM7Q0FBQSxBQUo1QyxJQUk0QztTQUEvQiwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFVzZXJMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnXHJcbmltcG9ydCB7IFVzZXJSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeW5hbWljTGF5b3V0Q29tcG9uZW50LCBBdXRoR3VhcmQgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBMYXlvdXRQYXNzcG9ydENvbXBvbmVudCxMYXlvdXREZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnQGZzL25nLWFsYWluL2Jhc2ljJztcclxuaW1wb3J0IHsgTWFuYWdlUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tYW5hZ2UtcHJvZmlsZS9tYW5hZ2UtcHJvZmlsZS5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6ICcnLCBwYXRoTWF0Y2g6ICdmdWxsJywgcmVkaXJlY3RUbzogJ2xvZ2luJyB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIGNvbXBvbmVudDogTGF5b3V0RGVmYXVsdENvbXBvbmVudCxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnbWFuYWdlLXByb2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBNYW5hZ2VQcm9maWxlQ29tcG9uZW50LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgY29tcG9uZW50OiBMYXlvdXRQYXNzcG9ydENvbXBvbmVudCxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogVXNlckxvZ2luQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ3JlZ2lzdGVyJywgY29tcG9uZW50OiBVc2VyUmVnaXN0ZXJDb21wb25lbnQgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudE5nQWxhaW5Sb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=