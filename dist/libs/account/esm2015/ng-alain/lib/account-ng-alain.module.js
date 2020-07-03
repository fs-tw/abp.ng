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
import * as i0 from "@angular/core";
export function accountOptionsFactory(options) {
    return Object.assign({ redirectUrl: '/' }, options);
}
export class AccountNgAlainModule {
    static forChild(options) {
        return {
            ngModule: AccountNgAlainModule,
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
        return new LazyModuleFactory(AccountNgAlainModule.forChild(options));
    }
}
AccountNgAlainModule.ɵmod = i0.ɵɵdefineNgModule({ type: AccountNgAlainModule });
AccountNgAlainModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AccountNgAlainModule_Factory(t) { return new (t || AccountNgAlainModule)(); }, imports: [[
            CoreModule,
            NgAlainBasicModule,
            AccountWrapModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AccountNgAlainModule, { declarations: [AuthWrapperComponent,
        TenantBoxComponent,
        UserLoginComponent,
        UserRegisterComponent,
        ManageProfileComponent,
        PersonalSettingsComponent,
        ChangePasswordComponent], imports: [CoreModule,
        NgAlainBasicModule,
        AccountWrapModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AccountNgAlainModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1uZy1hbGFpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9hY2NvdW50LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUF3QyxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRyxPQUFPLEVBQUUsUUFBUSxFQUF3QyxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQVcsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBQ3JELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxPQUFnQjtJQUNwRCx1QkFDRSxXQUFXLEVBQUUsR0FBRyxJQUNiLE9BQU8sRUFDVjtBQUNKLENBQUM7QUF1QkQsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU87UUFDckIsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO2dCQUMvQztvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixVQUFVLEVBQUUscUJBQXFCO29CQUNqQyxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQ3hCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBZ0I7UUFDN0IsT0FBTyxJQUFJLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7O3dEQWhCVSxvQkFBb0I7dUhBQXBCLG9CQUFvQixrQkFOdEI7WUFDUCxVQUFVO1lBQ1Ysa0JBQWtCO1lBQ2xCLGlCQUFpQjtTQUNsQjt3RkFFVSxvQkFBb0IsbUJBbkI3QixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6Qix1QkFBdUIsYUFRdkIsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixpQkFBaUI7a0RBR1Isb0JBQW9CO2NBckJoQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixrQkFBa0I7b0JBQ2xCLHFCQUFxQjtvQkFDckIsc0JBQXNCO29CQUN0Qix5QkFBeUI7b0JBQ3pCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLGtCQUFrQjtvQkFDbEIscUJBQXFCO29CQUNyQixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxVQUFVO29CQUNWLGtCQUFrQjtvQkFDbEIsaUJBQWlCO2lCQUNsQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjb3VudE1vZHVsZSB9IGZyb20gJ0Bmcy9hY2NvdW50JztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSwgQWRkUmVwbGFjZWFibGVDb21wb25lbnQsIGVMYXlvdXRUeXBlLCBMYXp5TW9kdWxlRmFjdG9yeSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZUZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdBbGFpbkJhc2ljTW9kdWxlIH0gZnJvbSAnQGZzL25nLWFsYWluL2Jhc2ljJztcclxuaW1wb3J0IHsgVXNlckxvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYW5hZ2VQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21hbmFnZS1wcm9maWxlL21hbmFnZS1wcm9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBlcnNvbmFsU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGVyc29uYWwtc2V0dGluZ3MvcGVyc29uYWwtc2V0dGluZ3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRoV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hdXRoLXdyYXBwZXIvYXV0aC13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlbmFudEJveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW5hbnQtYm94L3RlbmFudC1ib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3B0aW9ucywgQUNDT1VOVF9PUFRJT05TIH0gZnJvbSAnQGFicC9uZy5hY2NvdW50JztcclxuaW1wb3J0IHsgQWNjb3VudFdyYXBNb2R1bGUgfSBmcm9tICdAZnMvYWNjb3VudC93cmFwJztcclxuZXhwb3J0IGZ1bmN0aW9uIGFjY291bnRPcHRpb25zRmFjdG9yeShvcHRpb25zOiBPcHRpb25zKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlZGlyZWN0VXJsOiAnLycsXHJcbiAgICAuLi5vcHRpb25zLFxyXG4gIH07XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBdXRoV3JhcHBlckNvbXBvbmVudCxcclxuICAgIFRlbmFudEJveENvbXBvbmVudCxcclxuICAgIFVzZXJMb2dpbkNvbXBvbmVudCxcclxuICAgIFVzZXJSZWdpc3RlckNvbXBvbmVudCxcclxuICAgIE1hbmFnZVByb2ZpbGVDb21wb25lbnQsXHJcbiAgICBQZXJzb25hbFNldHRpbmdzQ29tcG9uZW50LFxyXG4gICAgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnRcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgVXNlckxvZ2luQ29tcG9uZW50LFxyXG4gICAgVXNlclJlZ2lzdGVyQ29tcG9uZW50LFxyXG4gICAgTWFuYWdlUHJvZmlsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29yZU1vZHVsZSxcclxuICAgIE5nQWxhaW5CYXNpY01vZHVsZSxcclxuICAgIEFjY291bnRXcmFwTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudE5nQWxhaW5Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JDaGlsZChvcHRpb25zKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBY2NvdW50TmdBbGFpbk1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEFjY291bnROZ0FsYWluTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IEFDQ09VTlRfT1BUSU9OUywgdXNlVmFsdWU6IG9wdGlvbnMgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiAnQUNDT1VOVF9PUFRJT05TJyxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGFjY291bnRPcHRpb25zRmFjdG9yeSxcclxuICAgICAgICAgIGRlcHM6IFtBQ0NPVU5UX09QVElPTlNdLFxyXG4gICAgICAgIH0sICAgICAgICBcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG4gIHN0YXRpYyBmb3JMYXp5KG9wdGlvbnM6IE9wdGlvbnMpOiBOZ01vZHVsZUZhY3Rvcnk8QWNjb3VudE1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIG5ldyBMYXp5TW9kdWxlRmFjdG9yeShBY2NvdW50TmdBbGFpbk1vZHVsZS5mb3JDaGlsZChvcHRpb25zKSk7XHJcbiAgfSAgXHJcbn1cclxuIl19