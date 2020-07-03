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
import { ACCOUNT_OPTIONS } from '@abp/ng.account';
import { AccountWrapModule } from '@fs/account/wrap';
export function accountOptionsFactory(options) {
    return Object.assign({ redirectUrl: '/' }, options);
}
let AccountNgAlainModule = AccountNgAlainModule_1 = class AccountNgAlainModule {
    static forChild(options) {
        return {
            ngModule: AccountNgAlainModule_1,
            providers: [
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
        imports: [
            CoreModule,
            NgAlainBasicModule,
            AccountWrapModule
        ]
    })
], AccountNgAlainModule);
export { AccountNgAlainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1uZy1hbGFpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9hY2NvdW50LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQXdDLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ25HLE9BQU8sRUFBRSxRQUFRLEVBQXdDLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBVyxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsT0FBZ0I7SUFDcEQsdUJBQ0UsV0FBVyxFQUFFLEdBQUcsSUFDYixPQUFPLEVBQ1Y7QUFDSixDQUFDO0FBdUJELElBQWEsb0JBQW9CLDRCQUFqQyxNQUFhLG9CQUFvQjtJQUMvQixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU87UUFDckIsT0FBTztZQUNMLFFBQVEsRUFBRSxzQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO2dCQUMvQztvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixVQUFVLEVBQUUscUJBQXFCO29CQUNqQyxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQ3hCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBZ0I7UUFDN0IsT0FBTyxJQUFJLGlCQUFpQixDQUFDLHNCQUFvQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Q0FDRixDQUFBO0FBakJZLG9CQUFvQjtJQXJCaEMsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osb0JBQW9CO1lBQ3BCLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIscUJBQXFCO1lBQ3JCLHNCQUFzQjtZQUN0Qix5QkFBeUI7WUFDekIsdUJBQXVCO1NBQ3hCO1FBQ0QsZUFBZSxFQUFFO1lBQ2Ysa0JBQWtCO1lBQ2xCLHFCQUFxQjtZQUNyQixzQkFBc0I7U0FDdkI7UUFDRCxPQUFPLEVBQUU7WUFDUCxVQUFVO1lBQ1Ysa0JBQWtCO1lBQ2xCLGlCQUFpQjtTQUNsQjtLQUNGLENBQUM7R0FDVyxvQkFBb0IsQ0FpQmhDO1NBakJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRNb2R1bGUgfSBmcm9tICdAZnMvYWNjb3VudCc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUsIEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50LCBlTGF5b3V0VHlwZSwgTGF6eU1vZHVsZUZhY3RvcnkgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGVGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQWxhaW5CYXNpY01vZHVsZSB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9iYXNpYyc7XHJcbmltcG9ydCB7IFVzZXJMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVc2VyUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFuYWdlUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tYW5hZ2UtcHJvZmlsZS9tYW5hZ2UtcHJvZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZXJzb25hbFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BlcnNvbmFsLXNldHRpbmdzL3BlcnNvbmFsLXNldHRpbmdzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0aFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXV0aC13cmFwcGVyL2F1dGgtd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZW5hbnRCb3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVuYW50LWJveC90ZW5hbnQtYm94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9wdGlvbnMsIEFDQ09VTlRfT1BUSU9OUyB9IGZyb20gJ0BhYnAvbmcuYWNjb3VudCc7XHJcbmltcG9ydCB7IEFjY291bnRXcmFwTW9kdWxlIH0gZnJvbSAnQGZzL2FjY291bnQvd3JhcCc7XHJcbmV4cG9ydCBmdW5jdGlvbiBhY2NvdW50T3B0aW9uc0ZhY3Rvcnkob3B0aW9uczogT3B0aW9ucykge1xyXG4gIHJldHVybiB7XHJcbiAgICByZWRpcmVjdFVybDogJy8nLFxyXG4gICAgLi4ub3B0aW9ucyxcclxuICB9O1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXV0aFdyYXBwZXJDb21wb25lbnQsXHJcbiAgICBUZW5hbnRCb3hDb21wb25lbnQsXHJcbiAgICBVc2VyTG9naW5Db21wb25lbnQsXHJcbiAgICBVc2VyUmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICBNYW5hZ2VQcm9maWxlQ29tcG9uZW50LFxyXG4gICAgUGVyc29uYWxTZXR0aW5nc0NvbXBvbmVudCxcclxuICAgIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50XHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIFVzZXJMb2dpbkNvbXBvbmVudCxcclxuICAgIFVzZXJSZWdpc3RlckNvbXBvbmVudCxcclxuICAgIE1hbmFnZVByb2ZpbGVDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBOZ0FsYWluQmFzaWNNb2R1bGUsXHJcbiAgICBBY2NvdW50V3JhcE1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY291bnROZ0FsYWluTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yQ2hpbGQob3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QWNjb3VudE5nQWxhaW5Nb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBBY2NvdW50TmdBbGFpbk1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBBQ0NPVU5UX09QVElPTlMsIHVzZVZhbHVlOiBvcHRpb25zIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogJ0FDQ09VTlRfT1BUSU9OUycsXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBhY2NvdW50T3B0aW9uc0ZhY3RvcnksXHJcbiAgICAgICAgICBkZXBzOiBbQUNDT1VOVF9PUFRJT05TXSxcclxuICAgICAgICB9LCAgICAgICAgXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxuICBzdGF0aWMgZm9yTGF6eShvcHRpb25zOiBPcHRpb25zKTogTmdNb2R1bGVGYWN0b3J5PEFjY291bnRNb2R1bGU+IHtcclxuICAgIHJldHVybiBuZXcgTGF6eU1vZHVsZUZhY3RvcnkoQWNjb3VudE5nQWxhaW5Nb2R1bGUuZm9yQ2hpbGQob3B0aW9ucykpO1xyXG4gIH0gIFxyXG59XHJcbiJdfQ==