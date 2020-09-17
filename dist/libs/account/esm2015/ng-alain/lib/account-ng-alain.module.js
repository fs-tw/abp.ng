var AccountNgAlainModule_1;
import { __decorate } from "tslib";
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { UserLoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/register/register.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { PersonalSettingsComponent } from './components/personal-settings/personal-settings.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthWrapperComponent } from './components/auth-wrapper/auth-wrapper.component';
import { TenantBoxComponent } from './components/tenant-box/tenant-box.component';
import { ACCOUNT_OPTIONS, AuthenticationFlowGuard } from '@abp/ng.account';
import { AccountModule } from '@abp/ng.account';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { LoginService } from './service/login.service';
export function accountOptionsFactory(options) {
    return Object.assign({ redirectUrl: '/' }, options);
}
let AccountNgAlainModule = AccountNgAlainModule_1 = class AccountNgAlainModule {
    static forChild(options) {
        return {
            ngModule: AccountNgAlainModule_1,
            providers: [
                AuthenticationFlowGuard,
                { provide: ACCOUNT_OPTIONS, useValue: options },
                {
                    provide: 'ACCOUNT_OPTIONS',
                    useFactory: accountOptionsFactory,
                    deps: [ACCOUNT_OPTIONS],
                },
            ],
        };
    }
    static forLazy(options) {
        return new LazyModuleFactory(AccountNgAlainModule_1.forChild(options));
    }
};
AccountNgAlainModule = AccountNgAlainModule_1 = __decorate([
    NgModule({
        imports: [
            CoreModule,
            NgAlainBasicModule,
            NgxValidateCoreModule,
            AccountModule
        ],
        declarations: [
            AuthWrapperComponent,
            TenantBoxComponent,
            UserLoginComponent,
            UserRegisterComponent,
            ManageProfileComponent,
            PersonalSettingsComponent,
            ChangePasswordComponent
        ],
        entryComponents: [
            UserLoginComponent,
            UserRegisterComponent,
            ManageProfileComponent
        ],
        providers: [
            LoginService
        ]
    })
], AccountNgAlainModule);
export { AccountNgAlainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1uZy1hbGFpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9hY2NvdW50LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQXdDLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ25HLE9BQU8sRUFBRSxRQUFRLEVBQXdDLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBVyxlQUFlLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxPQUFnQjtJQUNwRCx1QkFDRSxXQUFXLEVBQUUsR0FBRyxJQUNiLE9BQU8sRUFDVjtBQUNKLENBQUM7QUEyQkQsSUFBYSxvQkFBb0IsNEJBQWpDLE1BQWEsb0JBQW9CO0lBQy9CLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTztRQUNyQixPQUFPO1lBQ0wsUUFBUSxFQUFFLHNCQUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1QsdUJBQXVCO2dCQUN2QixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRTtnQkFDL0M7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsVUFBVSxFQUFFLHFCQUFxQjtvQkFDakMsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUN4QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQWdCO1FBQzdCLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxzQkFBb0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0NBQ0YsQ0FBQTtBQWxCWSxvQkFBb0I7SUF6QmhDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFVBQVU7WUFDVixrQkFBa0I7WUFDbEIscUJBQXFCO1lBQ3JCLGFBQWE7U0FDZDtRQUNELFlBQVksRUFBRTtZQUNaLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIseUJBQXlCO1lBQ3pCLHVCQUF1QjtTQUN4QjtRQUNELGVBQWUsRUFBRTtZQUNmLGtCQUFrQjtZQUNsQixxQkFBcUI7WUFDckIsc0JBQXNCO1NBQ3ZCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsWUFBWTtTQUNiO0tBQ0YsQ0FBQztHQUNXLG9CQUFvQixDQWtCaEM7U0FsQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZHVsZSwgQWRkUmVwbGFjZWFibGVDb21wb25lbnQsIGVMYXlvdXRUeXBlLCBMYXp5TW9kdWxlRmFjdG9yeSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZUZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdBbGFpbkJhc2ljTW9kdWxlIH0gZnJvbSAnQGZzL25nLWFsYWluL2Jhc2ljJztcclxuaW1wb3J0IHsgVXNlckxvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYW5hZ2VQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21hbmFnZS1wcm9maWxlL21hbmFnZS1wcm9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBlcnNvbmFsU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGVyc29uYWwtc2V0dGluZ3MvcGVyc29uYWwtc2V0dGluZ3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRoV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hdXRoLXdyYXBwZXIvYXV0aC13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlbmFudEJveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW5hbnQtYm94L3RlbmFudC1ib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3B0aW9ucywgQUNDT1VOVF9PUFRJT05TLCBBdXRoZW50aWNhdGlvbkZsb3dHdWFyZCB9IGZyb20gJ0BhYnAvbmcuYWNjb3VudCc7XHJcbmltcG9ydCB7IEFjY291bnRNb2R1bGUgfSBmcm9tICdAYWJwL25nLmFjY291bnQnO1xyXG5pbXBvcnQgeyBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUgfSBmcm9tICdAbmd4LXZhbGlkYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvbG9naW4uc2VydmljZSc7XHJcbmV4cG9ydCBmdW5jdGlvbiBhY2NvdW50T3B0aW9uc0ZhY3Rvcnkob3B0aW9uczogT3B0aW9ucykge1xyXG4gIHJldHVybiB7XHJcbiAgICByZWRpcmVjdFVybDogJy8nLFxyXG4gICAgLi4ub3B0aW9ucyxcclxuICB9O1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBOZ0FsYWluQmFzaWNNb2R1bGUsXHJcbiAgICBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUsXHJcbiAgICBBY2NvdW50TW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEF1dGhXcmFwcGVyQ29tcG9uZW50LFxyXG4gICAgVGVuYW50Qm94Q29tcG9uZW50LFxyXG4gICAgVXNlckxvZ2luQ29tcG9uZW50LFxyXG4gICAgVXNlclJlZ2lzdGVyQ29tcG9uZW50LFxyXG4gICAgTWFuYWdlUHJvZmlsZUNvbXBvbmVudCxcclxuICAgIFBlcnNvbmFsU2V0dGluZ3NDb21wb25lbnQsXHJcbiAgICBDaGFuZ2VQYXNzd29yZENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBVc2VyTG9naW5Db21wb25lbnQsXHJcbiAgICBVc2VyUmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICBNYW5hZ2VQcm9maWxlQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIExvZ2luU2VydmljZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY291bnROZ0FsYWluTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yQ2hpbGQob3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QWNjb3VudE5nQWxhaW5Nb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBBY2NvdW50TmdBbGFpbk1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQXV0aGVudGljYXRpb25GbG93R3VhcmQsXHJcbiAgICAgICAgeyBwcm92aWRlOiBBQ0NPVU5UX09QVElPTlMsIHVzZVZhbHVlOiBvcHRpb25zIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogJ0FDQ09VTlRfT1BUSU9OUycsXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBhY2NvdW50T3B0aW9uc0ZhY3RvcnksXHJcbiAgICAgICAgICBkZXBzOiBbQUNDT1VOVF9PUFRJT05TXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbiAgc3RhdGljIGZvckxhenkob3B0aW9uczogT3B0aW9ucyk6IE5nTW9kdWxlRmFjdG9yeTxBY2NvdW50TmdBbGFpbk1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIG5ldyBMYXp5TW9kdWxlRmFjdG9yeShBY2NvdW50TmdBbGFpbk1vZHVsZS5mb3JDaGlsZChvcHRpb25zKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==