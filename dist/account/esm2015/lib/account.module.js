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
let AccountModule = AccountModule_1 = class AccountModule {
    static forChild(options) {
        return {
            ngModule: AccountModule_1,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9hY2NvdW50L3NyYy9saWIvYWNjb3VudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBdUIsUUFBUSxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDOUYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBcUI5RCxJQUFhLGFBQWEscUJBQTFCLE1BQWEsYUFBYTtJQUN4QixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQWdCO1FBQzlCLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7Z0JBQy9DO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFVBQVUsRUFBRSxxQkFBcUI7b0JBQ2pDLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDeEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFnQjtRQUM3QixPQUFPLElBQUksaUJBQWlCLENBQUMsZUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDRixDQUFBO0FBbEJZLGFBQWE7SUFuQnpCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLG9CQUFvQjtZQUNwQixjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQix1QkFBdUI7WUFDdkIsc0JBQXNCO1lBQ3RCLHlCQUF5QjtTQUMxQjtRQUNELE9BQU8sRUFBRTtZQUNQLFVBQVU7WUFDVixvQkFBb0I7WUFDcEIsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixxQkFBcUI7U0FDdEI7UUFDRCxPQUFPLEVBQUUsRUFBRTtLQUNaLENBQUM7R0FDVyxhQUFhLENBa0J6QjtTQWxCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZHVsZSwgTGF6eU1vZHVsZUZhY3RvcnkgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZVNoYXJlZE1vZHVsZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JEcm9wZG93bk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTmd4VmFsaWRhdGVDb3JlTW9kdWxlIH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgQWNjb3VudFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FjY291bnQtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBdXRoV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hdXRoLXdyYXBwZXIvYXV0aC13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFuYWdlUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tYW5hZ2UtcHJvZmlsZS9tYW5hZ2UtcHJvZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZXJzb25hbFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BlcnNvbmFsLXNldHRpbmdzL3BlcnNvbmFsLXNldHRpbmdzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlbmFudEJveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW5hbnQtYm94L3RlbmFudC1ib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL29wdGlvbnMnO1xyXG5pbXBvcnQgeyBBQ0NPVU5UX09QVElPTlMgfSBmcm9tICcuL3Rva2Vucy9vcHRpb25zLnRva2VuJztcclxuaW1wb3J0IHsgYWNjb3VudE9wdGlvbnNGYWN0b3J5IH0gZnJvbSAnLi91dGlscy9mYWN0b3J5LXV0aWxzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBdXRoV3JhcHBlckNvbXBvbmVudCxcclxuICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgUmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICBUZW5hbnRCb3hDb21wb25lbnQsXHJcbiAgICBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCxcclxuICAgIE1hbmFnZVByb2ZpbGVDb21wb25lbnQsXHJcbiAgICBQZXJzb25hbFNldHRpbmdzQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29yZU1vZHVsZSxcclxuICAgIEFjY291bnRSb3V0aW5nTW9kdWxlLFxyXG4gICAgVGhlbWVTaGFyZWRNb2R1bGUsXHJcbiAgICBOZ2JEcm9wZG93bk1vZHVsZSxcclxuICAgIE5neFZhbGlkYXRlQ29yZU1vZHVsZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvckNoaWxkKG9wdGlvbnM6IE9wdGlvbnMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEFjY291bnRNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBBY2NvdW50TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IEFDQ09VTlRfT1BUSU9OUywgdXNlVmFsdWU6IG9wdGlvbnMgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiAnQUNDT1VOVF9PUFRJT05TJyxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGFjY291bnRPcHRpb25zRmFjdG9yeSxcclxuICAgICAgICAgIGRlcHM6IFtBQ0NPVU5UX09QVElPTlNdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZvckxhenkob3B0aW9uczogT3B0aW9ucyk6IE5nTW9kdWxlRmFjdG9yeTxBY2NvdW50TW9kdWxlPiB7XHJcbiAgICByZXR1cm4gbmV3IExhenlNb2R1bGVGYWN0b3J5KEFjY291bnRNb2R1bGUuZm9yQ2hpbGQob3B0aW9ucykpO1xyXG4gIH1cclxufVxyXG4iXX0=