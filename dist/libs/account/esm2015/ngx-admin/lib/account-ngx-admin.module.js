/**
 * @fileoverview added by tsickle
 * Generated from: lib/account-ngx-admin.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AccountModule } from '@fs/account';
import { CoreModule, PatchRouteByName, AddReplaceableComponent } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgxAdminBasicModule } from '@fs/ngx-admin/basic';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TenantBoxComponent } from './components/tenant-box/tenant-box.component';
import { Store } from '@ngxs/store';
export class AccountNgxAdminModule {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        store.dispatch(new PatchRouteByName('AbpAccount::Menu:Account', { layout: "account" /* account */ }));
        store.dispatch(new PatchRouteByName('AbpAccount::ManageYourProfile', { layout: "application" /* application */ }));
        store.dispatch(new AddReplaceableComponent({ component: LoginComponent, key: 'Account.LoginComponent' }));
        store.dispatch(new AddReplaceableComponent({ component: RegisterComponent, key: 'Account.RegisterComponent' }));
    }
}
AccountNgxAdminModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LoginComponent, RegisterComponent, TenantBoxComponent],
                entryComponents: [LoginComponent, RegisterComponent],
                imports: [
                    CoreModule,
                    NgxAdminBasicModule,
                    AccountModule
                ]
            },] }
];
/** @nocollapse */
AccountNgxAdminModule.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AccountNgxAdminModule.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1uZ3gtYWRtaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2FjY291bnQvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL2FjY291bnQtbmd4LWFkbWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBZSxNQUFNLGNBQWMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBV3BDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFDaEMsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87UUFDOUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLDBCQUEwQixFQUFFLEVBQUUsTUFBTSx5QkFBcUIsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNqRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsK0JBQStCLEVBQUUsRUFBRSxNQUFNLGlDQUF5QixFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLHdCQUF3QixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxHQUFHLEVBQUUsMkJBQTJCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEgsQ0FBQzs7O1lBZkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztnQkFDckUsZUFBZSxFQUFDLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDO2dCQUNuRCxPQUFPLEVBQUU7b0JBQ1AsVUFBVTtvQkFDVixtQkFBbUI7b0JBQ25CLGFBQWE7aUJBQ2Q7YUFDRjs7OztZQVZRLEtBQUs7Ozs7Ozs7SUFZQSxzQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY2NvdW50TW9kdWxlIH0gZnJvbSAnQGZzL2FjY291bnQnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlLCBQYXRjaFJvdXRlQnlOYW1lLCBBZGRSZXBsYWNlYWJsZUNvbXBvbmVudCwgZUxheW91dFR5cGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hBZG1pbkJhc2ljTW9kdWxlIH0gZnJvbSAnQGZzL25neC1hZG1pbi9iYXNpYyc7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlbmFudEJveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW5hbnQtYm94L3RlbmFudC1ib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0xvZ2luQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudCwgVGVuYW50Qm94Q29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6W0xvZ2luQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29yZU1vZHVsZSxcclxuICAgIE5neEFkbWluQmFzaWNNb2R1bGUsXHJcbiAgICBBY2NvdW50TW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudE5neEFkbWluTW9kdWxlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSkge1xyXG4gICAgc3RvcmUuZGlzcGF0Y2gobmV3IFBhdGNoUm91dGVCeU5hbWUoJ0FicEFjY291bnQ6Ok1lbnU6QWNjb3VudCcsIHsgbGF5b3V0OiBlTGF5b3V0VHlwZS5hY2NvdW50fSkpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2gobmV3IFBhdGNoUm91dGVCeU5hbWUoJ0FicEFjY291bnQ6Ok1hbmFnZVlvdXJQcm9maWxlJywgeyBsYXlvdXQ6IGVMYXlvdXRUeXBlLmFwcGxpY2F0aW9ufSkpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2gobmV3IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KHsgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCwga2V5OiAnQWNjb3VudC5Mb2dpbkNvbXBvbmVudCcgfSkpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2gobmV3IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KHsgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCwga2V5OiAnQWNjb3VudC5SZWdpc3RlckNvbXBvbmVudCcgfSkpO1xyXG4gIH1cclxuXHJcbiB9XHJcbiJdfQ==