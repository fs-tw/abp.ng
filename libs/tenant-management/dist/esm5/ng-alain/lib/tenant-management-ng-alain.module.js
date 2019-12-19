/**
 * @fileoverview added by tsickle
 * Generated from: lib/tenant-management-ng-alain.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TenantManagementModule } from '@fs/tenant-management';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { TenantManagementNgAlainRoutingModule } from './tenant-management-ng-alain-routing.module';
import { TenantsComponent } from './components/tenants/tenants.component';
import { FeatureManagementNgAlainModule } from '@fs/feature-management/ng-alain';
var TenantManagementNgAlainModule = /** @class */ (function () {
    function TenantManagementNgAlainModule() {
    }
    TenantManagementNgAlainModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TenantsComponent],
                    imports: [
                        CoreModule,
                        NgAlainBasicModule,
                        TenantManagementNgAlainRoutingModule,
                        TenantManagementModule,
                        FeatureManagementNgAlainModule
                    ]
                },] }
    ];
    return TenantManagementNgAlainModule;
}());
export { TenantManagementNgAlainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQtbmctYWxhaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL3RlbmFudC1tYW5hZ2VtZW50L25nLWFsYWluLyIsInNvdXJjZXMiOlsibGliL3RlbmFudC1tYW5hZ2VtZW50LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQTtBQUVoRjtJQUFBO0lBVTZDLENBQUM7O2dCQVY3QyxRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2hDLE9BQU8sRUFBRTt3QkFDTCxVQUFVO3dCQUNWLGtCQUFrQjt3QkFDbEIsb0NBQW9DO3dCQUNwQyxzQkFBc0I7d0JBQ3RCLDhCQUE4QjtxQkFDakM7aUJBQ0o7O0lBQzRDLG9DQUFDO0NBQUEsQUFWOUMsSUFVOEM7U0FBakMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVuYW50TWFuYWdlbWVudE1vZHVsZSB9IGZyb20gJ0Bmcy90ZW5hbnQtbWFuYWdlbWVudCc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0FsYWluQmFzaWNNb2R1bGUgfSBmcm9tICdAZnMvbmctYWxhaW4vYmFzaWMnO1xyXG5pbXBvcnQgeyBUZW5hbnRNYW5hZ2VtZW50TmdBbGFpblJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3RlbmFudC1tYW5hZ2VtZW50LW5nLWFsYWluLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgVGVuYW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW5hbnRzL3RlbmFudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmVhdHVyZU1hbmFnZW1lbnROZ0FsYWluTW9kdWxlIH0gZnJvbSAnQGZzL2ZlYXR1cmUtbWFuYWdlbWVudC9uZy1hbGFpbidcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtUZW5hbnRzQ29tcG9uZW50XSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb3JlTW9kdWxlLFxyXG4gICAgICAgIE5nQWxhaW5CYXNpY01vZHVsZSxcclxuICAgICAgICBUZW5hbnRNYW5hZ2VtZW50TmdBbGFpblJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgVGVuYW50TWFuYWdlbWVudE1vZHVsZSxcclxuICAgICAgICBGZWF0dXJlTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbmFudE1hbmFnZW1lbnROZ0FsYWluTW9kdWxlIHsgfVxyXG4iXX0=