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
var AccountNgxAdminModule = /** @class */ (function () {
    function AccountNgxAdminModule() {
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
    return AccountNgxAdminModule;
}());
export { AccountNgxAdminModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1uZ3gtYWRtaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2FjY291bnQvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL2FjY291bnQtbmd4LWFkbWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUVsRjtJQUFBO0lBU3FDLENBQUM7O2dCQVRyQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDO29CQUNyRSxPQUFPLEVBQUU7d0JBQ1AsVUFBVTt3QkFDVixtQkFBbUI7d0JBQ25CLDRCQUE0Qjt3QkFDNUIsYUFBYTtxQkFDZDtpQkFDRjs7SUFDb0MsNEJBQUM7Q0FBQSxBQVR0QyxJQVNzQztTQUF6QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY2NvdW50TW9kdWxlIH0gZnJvbSAnQGZzL2FjY291bnQnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4QWRtaW5CYXNpY01vZHVsZSB9IGZyb20gJ0Bmcy9uZ3gtYWRtaW4vYmFzaWMnO1xyXG5pbXBvcnQgeyBBY2NvdW50Tmd4QWRtaW5Sb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hY2NvdW50LW5neC1hZG1pbi1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlbmFudEJveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW5hbnQtYm94L3RlbmFudC1ib3guY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTG9naW5Db21wb25lbnQsIFJlZ2lzdGVyQ29tcG9uZW50LCBUZW5hbnRCb3hDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBOZ3hBZG1pbkJhc2ljTW9kdWxlLFxyXG4gICAgQWNjb3VudE5neEFkbWluUm91dGluZ01vZHVsZSxcclxuICAgIEFjY291bnRNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50Tmd4QWRtaW5Nb2R1bGUgeyB9XHJcbiJdfQ==