var AccountModule_1;
import { __decorate } from "tslib";
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { AccountRoutingModule } from './account-routing.module';
import { AuthWrapperComponent } from './components/auth-wrapper/auth-wrapper.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginComponent } from './components/login/login.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { PersonalSettingsComponent } from './components/personal-settings/personal-settings.component';
import { RegisterComponent } from './components/register/register.component';
import { TenantBoxComponent } from './components/tenant-box/tenant-box.component';
import { ACCOUNT_OPTIONS } from './tokens/options.token';
import { accountOptionsFactory } from './utils/factory-utils';
import { AuthenticationFlowGuard } from './guards/authentication-flow.guard';
let AccountModule = AccountModule_1 = class AccountModule {
    static forChild(options) {
        return {
            ngModule: AccountModule_1,
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
        return new LazyModuleFactory(AccountModule_1.forChild(options));
    }
};
AccountModule = AccountModule_1 = __decorate([
    NgModule({
        declarations: [
            AuthWrapperComponent,
            LoginComponent,
            RegisterComponent,
            TenantBoxComponent,
            ChangePasswordComponent,
            ManageProfileComponent,
            PersonalSettingsComponent,
        ],
        imports: [
            CoreModule,
            AccountRoutingModule,
            ThemeSharedModule,
            NgbDropdownModule,
            NgxValidateCoreModule,
        ],
        exports: [],
    })
], AccountModule);
export { AccountModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9hY2NvdW50L3NyYy9saWIvYWNjb3VudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBdUIsUUFBUSxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDOUYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBcUI3RSxJQUFhLGFBQWEscUJBQTFCLE1BQWEsYUFBYTtJQUN4QixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQWdCO1FBQzlCLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1QsdUJBQXVCO2dCQUN2QixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRTtnQkFDL0M7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsVUFBVSxFQUFFLHFCQUFxQjtvQkFDakMsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUN4QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQWdCO1FBQzdCLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxlQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNGLENBQUE7QUFuQlksYUFBYTtJQW5CekIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osb0JBQW9CO1lBQ3BCLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLHVCQUF1QjtZQUN2QixzQkFBc0I7WUFDdEIseUJBQXlCO1NBQzFCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsVUFBVTtZQUNWLG9CQUFvQjtZQUNwQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLHFCQUFxQjtTQUN0QjtRQUNELE9BQU8sRUFBRSxFQUFFO0tBQ1osQ0FBQztHQUNXLGFBQWEsQ0FtQnpCO1NBbkJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3JlTW9kdWxlLCBMYXp5TW9kdWxlRmFjdG9yeSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lU2hhcmVkTW9kdWxlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYkRyb3Bkb3duTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUgfSBmcm9tICdAbmd4LXZhbGlkYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBBY2NvdW50Um91dGluZ01vZHVsZSB9IGZyb20gJy4vYWNjb3VudC1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IEF1dGhXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2F1dGgtd3JhcHBlci9hdXRoLXdyYXBwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYW5hZ2VQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21hbmFnZS1wcm9maWxlL21hbmFnZS1wcm9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBlcnNvbmFsU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGVyc29uYWwtc2V0dGluZ3MvcGVyc29uYWwtc2V0dGluZ3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGVuYW50Qm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbmFudC1ib3gvdGVuYW50LWJveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMvb3B0aW9ucyc7XHJcbmltcG9ydCB7IEFDQ09VTlRfT1BUSU9OUyB9IGZyb20gJy4vdG9rZW5zL29wdGlvbnMudG9rZW4nO1xyXG5pbXBvcnQgeyBhY2NvdW50T3B0aW9uc0ZhY3RvcnkgfSBmcm9tICcuL3V0aWxzL2ZhY3RvcnktdXRpbHMnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkZsb3dHdWFyZCB9IGZyb20gJy4vZ3VhcmRzL2F1dGhlbnRpY2F0aW9uLWZsb3cuZ3VhcmQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEF1dGhXcmFwcGVyQ29tcG9uZW50LFxyXG4gICAgTG9naW5Db21wb25lbnQsXHJcbiAgICBSZWdpc3RlckNvbXBvbmVudCxcclxuICAgIFRlbmFudEJveENvbXBvbmVudCxcclxuICAgIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgTWFuYWdlUHJvZmlsZUNvbXBvbmVudCxcclxuICAgIFBlcnNvbmFsU2V0dGluZ3NDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb3JlTW9kdWxlLFxyXG4gICAgQWNjb3VudFJvdXRpbmdNb2R1bGUsXHJcbiAgICBUaGVtZVNoYXJlZE1vZHVsZSxcclxuICAgIE5nYkRyb3Bkb3duTW9kdWxlLFxyXG4gICAgTmd4VmFsaWRhdGVDb3JlTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yQ2hpbGQob3B0aW9uczogT3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QWNjb3VudE1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEFjY291bnRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uRmxvd0d1YXJkLFxyXG4gICAgICAgIHsgcHJvdmlkZTogQUNDT1VOVF9PUFRJT05TLCB1c2VWYWx1ZTogb3B0aW9ucyB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6ICdBQ0NPVU5UX09QVElPTlMnLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogYWNjb3VudE9wdGlvbnNGYWN0b3J5LFxyXG4gICAgICAgICAgZGVwczogW0FDQ09VTlRfT1BUSU9OU10sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yTGF6eShvcHRpb25zOiBPcHRpb25zKTogTmdNb2R1bGVGYWN0b3J5PEFjY291bnRNb2R1bGU+IHtcclxuICAgIHJldHVybiBuZXcgTGF6eU1vZHVsZUZhY3RvcnkoQWNjb3VudE1vZHVsZS5mb3JDaGlsZChvcHRpb25zKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==