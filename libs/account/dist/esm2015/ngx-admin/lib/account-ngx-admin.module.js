/**
 * @fileoverview added by tsickle
 * Generated from: lib/account-ngx-admin.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AccountModule } from '@fs/account';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgxAdminBasicModule } from '@fs/ngx-admin/basic';
import { AccountNgxAdminRoutingModule } from './account-ngx-admin-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TenantBoxComponent } from './components/tenant-box/tenant-box.component';
export class AccountNgxAdminModule {
}
AccountNgxAdminModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LoginComponent, RegisterComponent, TenantBoxComponent],
                imports: [
                    CoreModule,
                    NgxAdminBasicModule,
                    AccountNgxAdminRoutingModule,
                    AccountModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1uZ3gtYWRtaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2FjY291bnQvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL2FjY291bnQtbmd4LWFkbWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQVdsRixNQUFNLE9BQU8scUJBQXFCOzs7WUFUakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztnQkFDckUsT0FBTyxFQUFFO29CQUNQLFVBQVU7b0JBQ1YsbUJBQW1CO29CQUNuQiw0QkFBNEI7b0JBQzVCLGFBQWE7aUJBQ2Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRNb2R1bGUgfSBmcm9tICdAZnMvYWNjb3VudCc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hBZG1pbkJhc2ljTW9kdWxlIH0gZnJvbSAnQGZzL25neC1hZG1pbi9iYXNpYyc7XHJcbmltcG9ydCB7IEFjY291bnROZ3hBZG1pblJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FjY291bnQtbmd4LWFkbWluLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGVuYW50Qm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbmFudC1ib3gvdGVuYW50LWJveC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtMb2dpbkNvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQsIFRlbmFudEJveENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29yZU1vZHVsZSxcclxuICAgIE5neEFkbWluQmFzaWNNb2R1bGUsXHJcbiAgICBBY2NvdW50Tmd4QWRtaW5Sb3V0aW5nTW9kdWxlLFxyXG4gICAgQWNjb3VudE1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY291bnROZ3hBZG1pbk1vZHVsZSB7IH1cclxuIl19