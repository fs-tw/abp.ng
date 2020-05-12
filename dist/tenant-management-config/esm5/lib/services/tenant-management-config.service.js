/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/tenant-management-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { addAbpRoutes } from '@abp/ng.core';
import * as i0 from "@angular/core";
var TenantManagementConfigService = /** @class */ (function () {
    function TenantManagementConfigService() {
        addAbpRoutes([
            {
                name: "AbpUiNavigation::Menu:Administration" /* Administration */,
                path: '',
                order: 1,
                wrapper: true,
                iconClass: 'fa fa-wrench',
            },
            {
                name: "AbpTenantManagement::Menu:TenantManagement" /* TenantManagement */,
                path: 'tenant-management',
                parentName: "AbpUiNavigation::Menu:Administration" /* Administration */,
                layout: "application" /* application */,
                iconClass: 'fa fa-users',
                children: [
                    {
                        path: 'tenants',
                        name: "AbpTenantManagement::Tenants" /* Tenants */,
                        order: 1,
                        requiredPolicy: 'AbpTenantManagement.Tenants',
                    },
                ],
            },
        ]);
    }
    TenantManagementConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    TenantManagementConfigService.ctorParameters = function () { return []; };
    /** @nocollapse */ TenantManagementConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TenantManagementConfigService_Factory() { return new TenantManagementConfigService(); }, token: TenantManagementConfigService, providedIn: "root" });
    return TenantManagementConfigService;
}());
export { TenantManagementConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRlbmFudC1tYW5hZ2VtZW50LmNvbmZpZy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90ZW5hbnQtbWFuYWdlbWVudC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBZSxNQUFNLGNBQWMsQ0FBQzs7QUFFekQ7SUFJRTtRQUNFLFlBQVksQ0FBQztZQUNYO2dCQUNFLElBQUksNkRBQTRDO2dCQUNoRCxJQUFJLEVBQUUsRUFBRTtnQkFDUixLQUFLLEVBQUUsQ0FBQztnQkFDUixPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsY0FBYzthQUMxQjtZQUNEO2dCQUNFLElBQUkscUVBQThDO2dCQUNsRCxJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixVQUFVLDZEQUE0QztnQkFDdEQsTUFBTSxpQ0FBeUI7Z0JBQy9CLFNBQVMsRUFBRSxhQUFhO2dCQUN4QixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsSUFBSSw4Q0FBcUM7d0JBQ3pDLEtBQUssRUFBRSxDQUFDO3dCQUNSLGNBQWMsRUFBRSw2QkFBNkI7cUJBQzlDO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkE3QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7d0NBTEQ7Q0FpQ0MsQUE5QkQsSUE4QkM7U0EzQlksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBhZGRBYnBSb3V0ZXMsIGVMYXlvdXRUeXBlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgZVRlbmFudE1hbmFnZW1lbnRSb3V0ZU5hbWVzIH0gZnJvbSAnQGFicC9uZy50ZW5hbnQtbWFuYWdlbWVudCc7XHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW5hbnRNYW5hZ2VtZW50Q29uZmlnU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBhZGRBYnBSb3V0ZXMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogZVRlbmFudE1hbmFnZW1lbnRSb3V0ZU5hbWVzLkFkbWluaXN0cmF0aW9uLFxyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgIHdyYXBwZXI6IHRydWUsXHJcbiAgICAgICAgaWNvbkNsYXNzOiAnZmEgZmEtd3JlbmNoJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IGVUZW5hbnRNYW5hZ2VtZW50Um91dGVOYW1lcy5UZW5hbnRNYW5hZ2VtZW50LFxyXG4gICAgICAgIHBhdGg6ICd0ZW5hbnQtbWFuYWdlbWVudCcsXHJcbiAgICAgICAgcGFyZW50TmFtZTogZVRlbmFudE1hbmFnZW1lbnRSb3V0ZU5hbWVzLkFkbWluaXN0cmF0aW9uLFxyXG4gICAgICAgIGxheW91dDogZUxheW91dFR5cGUuYXBwbGljYXRpb24sXHJcbiAgICAgICAgaWNvbkNsYXNzOiAnZmEgZmEtdXNlcnMnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICd0ZW5hbnRzJyxcclxuICAgICAgICAgICAgbmFtZTogZVRlbmFudE1hbmFnZW1lbnRSb3V0ZU5hbWVzLlRlbmFudHMsXHJcbiAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICByZXF1aXJlZFBvbGljeTogJ0FicFRlbmFudE1hbmFnZW1lbnQuVGVuYW50cycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICB9XHJcbn1cclxuIl19