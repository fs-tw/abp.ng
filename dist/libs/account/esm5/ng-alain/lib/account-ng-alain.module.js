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
var AccountNgAlainModule = /** @class */ (function () {
    function AccountNgAlainModule(store) {
        this.store = store;
        store.dispatch(new PatchRouteByName('AbpAccount::Menu:Account', { layout: "account" /* account */ }));
        store.dispatch(new PatchRouteByName('AbpAccount::ManageYourProfile', { layout: "application" /* application */ }));
        store.dispatch(new AddReplaceableComponent({ component: UserLoginComponent, key: 'Account.LoginComponent' }));
        store.dispatch(new AddReplaceableComponent({ component: UserRegisterComponent, key: 'Account.RegisterComponent' }));
        store.dispatch(new AddReplaceableComponent({ component: ManageProfileComponent, key: 'Account.ManageProfileComponent' }));
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
    AccountNgAlainModule.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return AccountNgAlainModule;
}());
export { AccountNgAlainModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AccountNgAlainModule.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1uZy1hbGFpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvYWNjb3VudC9uZy1hbGFpbi8iLCJzb3VyY2VzIjpbImxpYi9hY2NvdW50LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxnQkFBZ0IsRUFBZSxNQUFNLGNBQWMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEM7SUFzQkUsOEJBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBRTlCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQywwQkFBMEIsRUFBRSxFQUFFLE1BQU0seUJBQXFCLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLCtCQUErQixFQUFFLEVBQUUsTUFBTSxpQ0FBeUIsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUMxRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQXVCLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxFQUFFLHdCQUF3QixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBRSxHQUFHLEVBQUUsMkJBQTJCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEgsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLEVBQUUsU0FBUyxFQUFFLHNCQUFzQixFQUFFLEdBQUcsRUFBRSxnQ0FBZ0MsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUc1SCxDQUFDOztnQkEvQkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIseUJBQXlCO3dCQUN6Qix1QkFBdUI7cUJBQ3hCO29CQUNELGVBQWUsRUFBQzt3QkFDZCxrQkFBa0I7d0JBQ2xCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsVUFBVTt3QkFDVixrQkFBa0I7d0JBQ2xCLGFBQWE7cUJBQ2Q7aUJBQ0Y7Ozs7Z0JBdEJRLEtBQUs7O0lBbUNiLDJCQUFDO0NBQUEsQUFqQ0YsSUFpQ0U7U0FaVyxvQkFBb0I7Ozs7OztJQUNuQixxQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY2NvdW50TW9kdWxlIH0gZnJvbSAnQGZzL2FjY291bnQnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlLCBBZGRSZXBsYWNlYWJsZUNvbXBvbmVudCwgUGF0Y2hSb3V0ZUJ5TmFtZSwgZUxheW91dFR5cGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0FsYWluQmFzaWNNb2R1bGUgfSBmcm9tICdAZnMvbmctYWxhaW4vYmFzaWMnO1xyXG5pbXBvcnQgeyBVc2VyTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXNlclJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hbmFnZVByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFuYWdlLXByb2ZpbGUvbWFuYWdlLXByb2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGVyc29uYWxTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wZXJzb25hbC1zZXR0aW5ncy9wZXJzb25hbC1zZXR0aW5ncy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1dGhXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2F1dGgtd3JhcHBlci9hdXRoLXdyYXBwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGVuYW50Qm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbmFudC1ib3gvdGVuYW50LWJveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBdXRoV3JhcHBlckNvbXBvbmVudCxcclxuICAgIFRlbmFudEJveENvbXBvbmVudCxcclxuICAgIFVzZXJMb2dpbkNvbXBvbmVudCxcclxuICAgIFVzZXJSZWdpc3RlckNvbXBvbmVudCxcclxuICAgIE1hbmFnZVByb2ZpbGVDb21wb25lbnQsXHJcbiAgICBQZXJzb25hbFNldHRpbmdzQ29tcG9uZW50LFxyXG4gICAgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnRcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czpbXHJcbiAgICBVc2VyTG9naW5Db21wb25lbnQsXHJcbiAgICBVc2VyUmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICBNYW5hZ2VQcm9maWxlQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb3JlTW9kdWxlLFxyXG4gICAgTmdBbGFpbkJhc2ljTW9kdWxlLFxyXG4gICAgQWNjb3VudE1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY291bnROZ0FsYWluTW9kdWxlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSkge1xyXG5cclxuICAgIHN0b3JlLmRpc3BhdGNoKG5ldyBQYXRjaFJvdXRlQnlOYW1lKCdBYnBBY2NvdW50OjpNZW51OkFjY291bnQnLCB7IGxheW91dDogZUxheW91dFR5cGUuYWNjb3VudH0pKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKG5ldyBQYXRjaFJvdXRlQnlOYW1lKCdBYnBBY2NvdW50OjpNYW5hZ2VZb3VyUHJvZmlsZScsIHsgbGF5b3V0OiBlTGF5b3V0VHlwZS5hcHBsaWNhdGlvbn0pKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKG5ldyBBZGRSZXBsYWNlYWJsZUNvbXBvbmVudCh7IGNvbXBvbmVudDogVXNlckxvZ2luQ29tcG9uZW50LCBrZXk6ICdBY2NvdW50LkxvZ2luQ29tcG9uZW50JyB9KSk7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChuZXcgQWRkUmVwbGFjZWFibGVDb21wb25lbnQoeyBjb21wb25lbnQ6IFVzZXJSZWdpc3RlckNvbXBvbmVudCwga2V5OiAnQWNjb3VudC5SZWdpc3RlckNvbXBvbmVudCcgfSkpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2gobmV3IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KHsgY29tcG9uZW50OiBNYW5hZ2VQcm9maWxlQ29tcG9uZW50LCBrZXk6ICdBY2NvdW50Lk1hbmFnZVByb2ZpbGVDb21wb25lbnQnIH0pKTtcclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuIH1cclxuIl19