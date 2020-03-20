/**
 * @fileoverview added by tsickle
 * Generated from: lib/tenant-management.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxsModule } from '@ngxs/store';
import { TenantsComponent } from './components/tenants/tenants.component';
import { TenantManagementState } from './states/tenant-management.state';
import { TenantManagementRoutingModule } from './tenant-management-routing.module';
import { FeatureManagementModule } from '@abp/ng.feature-management';
import { NgxValidateCoreModule } from '@ngx-validate/core';
var TenantManagementModule = /** @class */ (function () {
    function TenantManagementModule() {
    }
    TenantManagementModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TenantsComponent],
                    imports: [
                        TenantManagementRoutingModule,
                        NgxsModule.forFeature([TenantManagementState]),
                        NgxValidateCoreModule,
                        CoreModule,
                        ThemeSharedModule,
                        NgbDropdownModule,
                        FeatureManagementModule,
                    ],
                },] }
    ];
    return TenantManagementModule;
}());
export { TenantManagementModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50ZW5hbnQtbWFuYWdlbWVudC8iLCJzb3VyY2VzIjpbImxpYi90ZW5hbnQtbWFuYWdlbWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRDtJQUFBO0lBWXFDLENBQUM7O2dCQVpyQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2hDLE9BQU8sRUFBRTt3QkFDUCw2QkFBNkI7d0JBQzdCLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO3dCQUM5QyxxQkFBcUI7d0JBQ3JCLFVBQVU7d0JBQ1YsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLHVCQUF1QjtxQkFDeEI7aUJBQ0Y7O0lBQ29DLDZCQUFDO0NBQUEsQUFadEMsSUFZc0M7U0FBekIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lU2hhcmVkTW9kdWxlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiRHJvcGRvd25Nb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IE5neHNNb2R1bGUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IFRlbmFudHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVuYW50cy90ZW5hbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlbmFudE1hbmFnZW1lbnRTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL3RlbmFudC1tYW5hZ2VtZW50LnN0YXRlJztcclxuaW1wb3J0IHsgVGVuYW50TWFuYWdlbWVudFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3RlbmFudC1tYW5hZ2VtZW50LXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgRmVhdHVyZU1hbmFnZW1lbnRNb2R1bGUgfSBmcm9tICdAYWJwL25nLmZlYXR1cmUtbWFuYWdlbWVudCc7XHJcbmltcG9ydCB7IE5neFZhbGlkYXRlQ29yZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdmFsaWRhdGUvY29yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1RlbmFudHNDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFRlbmFudE1hbmFnZW1lbnRSb3V0aW5nTW9kdWxlLFxyXG4gICAgTmd4c01vZHVsZS5mb3JGZWF0dXJlKFtUZW5hbnRNYW5hZ2VtZW50U3RhdGVdKSxcclxuICAgIE5neFZhbGlkYXRlQ29yZU1vZHVsZSxcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBUaGVtZVNoYXJlZE1vZHVsZSxcclxuICAgIE5nYkRyb3Bkb3duTW9kdWxlLFxyXG4gICAgRmVhdHVyZU1hbmFnZW1lbnRNb2R1bGUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbmFudE1hbmFnZW1lbnRNb2R1bGUge31cclxuIl19