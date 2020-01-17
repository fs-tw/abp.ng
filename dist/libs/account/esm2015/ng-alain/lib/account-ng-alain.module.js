/**
 * @fileoverview added by tsickle
 * Generated from: lib/account-ng-alain.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AccountModule } from '@fs/account';
import { CoreModule, AddReplaceableComponent, PatchRouteByName } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { UserLoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/register/register.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { PersonalSettingsComponent } from './components/personal-settings/personal-settings.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthWrapperComponent } from './components/auth-wrapper/auth-wrapper.component';
import { TenantBoxComponent } from './components/tenant-box/tenant-box.component';
import { Store } from '@ngxs/store';
export class AccountNgAlainModule {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        store.dispatch(new PatchRouteByName('AbpAccount::Menu:Account', { layout: "account" /* account */ }));
        store.dispatch(new PatchRouteByName('AbpAccount::ManageYourProfile', { layout: "application" /* application */ }));
        store.dispatch(new AddReplaceableComponent({ component: UserLoginComponent, key: 'Account.LoginComponent' }));
        store.dispatch(new AddReplaceableComponent({ component: UserRegisterComponent, key: 'Account.RegisterComponent' }));
        store.dispatch(new AddReplaceableComponent({ component: ManageProfileComponent, key: 'Account.ManageProfileComponent' }));
    }
}
AccountNgAlainModule.decorators = [
    { type: NgModule, args: [{
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
                    AccountModule
                ]
            },] }
];
/** @nocollapse */
AccountNgAlainModule.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AccountNgAlainModule.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1uZy1hbGFpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvYWNjb3VudC9uZy1hbGFpbi8iLCJzb3VyY2VzIjpbImxpYi9hY2NvdW50LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxnQkFBZ0IsRUFBZSxNQUFNLGNBQWMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUF1QnBDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFDL0IsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87UUFFOUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLDBCQUEwQixFQUFFLEVBQUUsTUFBTSx5QkFBcUIsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNqRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsK0JBQStCLEVBQUUsRUFBRSxNQUFNLGlDQUF5QixFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxHQUFHLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLEdBQUcsRUFBRSwyQkFBMkIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwSCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQXVCLENBQUMsRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUUsR0FBRyxFQUFFLGdDQUFnQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRzVILENBQUM7OztZQS9CRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixrQkFBa0I7b0JBQ2xCLHFCQUFxQjtvQkFDckIsc0JBQXNCO29CQUN0Qix5QkFBeUI7b0JBQ3pCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsZUFBZSxFQUFDO29CQUNkLGtCQUFrQjtvQkFDbEIscUJBQXFCO29CQUNyQixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxVQUFVO29CQUNWLGtCQUFrQjtvQkFDbEIsYUFBYTtpQkFDZDthQUNGOzs7O1lBdEJRLEtBQUs7Ozs7Ozs7SUF3QkEscUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjb3VudE1vZHVsZSB9IGZyb20gJ0Bmcy9hY2NvdW50JztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSwgQWRkUmVwbGFjZWFibGVDb21wb25lbnQsIFBhdGNoUm91dGVCeU5hbWUsIGVMYXlvdXRUeXBlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdBbGFpbkJhc2ljTW9kdWxlIH0gZnJvbSAnQGZzL25nLWFsYWluL2Jhc2ljJztcclxuaW1wb3J0IHsgVXNlckxvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYW5hZ2VQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21hbmFnZS1wcm9maWxlL21hbmFnZS1wcm9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBlcnNvbmFsU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGVyc29uYWwtc2V0dGluZ3MvcGVyc29uYWwtc2V0dGluZ3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRoV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hdXRoLXdyYXBwZXIvYXV0aC13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlbmFudEJveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW5hbnQtYm94L3RlbmFudC1ib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXV0aFdyYXBwZXJDb21wb25lbnQsXHJcbiAgICBUZW5hbnRCb3hDb21wb25lbnQsXHJcbiAgICBVc2VyTG9naW5Db21wb25lbnQsXHJcbiAgICBVc2VyUmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICBNYW5hZ2VQcm9maWxlQ29tcG9uZW50LFxyXG4gICAgUGVyc29uYWxTZXR0aW5nc0NvbXBvbmVudCxcclxuICAgIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50XHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6W1xyXG4gICAgVXNlckxvZ2luQ29tcG9uZW50LFxyXG4gICAgVXNlclJlZ2lzdGVyQ29tcG9uZW50LFxyXG4gICAgTWFuYWdlUHJvZmlsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29yZU1vZHVsZSxcclxuICAgIE5nQWxhaW5CYXNpY01vZHVsZSxcclxuICAgIEFjY291bnRNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50TmdBbGFpbk1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUpIHtcclxuXHJcbiAgICBzdG9yZS5kaXNwYXRjaChuZXcgUGF0Y2hSb3V0ZUJ5TmFtZSgnQWJwQWNjb3VudDo6TWVudTpBY2NvdW50JywgeyBsYXlvdXQ6IGVMYXlvdXRUeXBlLmFjY291bnR9KSk7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChuZXcgUGF0Y2hSb3V0ZUJ5TmFtZSgnQWJwQWNjb3VudDo6TWFuYWdlWW91clByb2ZpbGUnLCB7IGxheW91dDogZUxheW91dFR5cGUuYXBwbGljYXRpb259KSk7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChuZXcgQWRkUmVwbGFjZWFibGVDb21wb25lbnQoeyBjb21wb25lbnQ6IFVzZXJMb2dpbkNvbXBvbmVudCwga2V5OiAnQWNjb3VudC5Mb2dpbkNvbXBvbmVudCcgfSkpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2gobmV3IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KHsgY29tcG9uZW50OiBVc2VyUmVnaXN0ZXJDb21wb25lbnQsIGtleTogJ0FjY291bnQuUmVnaXN0ZXJDb21wb25lbnQnIH0pKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKG5ldyBBZGRSZXBsYWNlYWJsZUNvbXBvbmVudCh7IGNvbXBvbmVudDogTWFuYWdlUHJvZmlsZUNvbXBvbmVudCwga2V5OiAnQWNjb3VudC5NYW5hZ2VQcm9maWxlQ29tcG9uZW50JyB9KSk7XHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuXHJcbiB9XHJcbiJdfQ==