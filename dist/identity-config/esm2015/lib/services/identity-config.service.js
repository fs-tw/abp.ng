/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/identity-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addAbpRoutes } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class IdentityConfigService {
    constructor() {
        addAbpRoutes([
            {
                name: "AbpUiNavigation::Menu:Administration" /* Administration */,
                path: '',
                order: 1,
                wrapper: true,
                iconClass: 'fa fa-wrench',
            },
            {
                name: "AbpIdentity::Menu:IdentityManagement" /* IdentityManagement */,
                path: 'identity',
                order: 1,
                parentName: "AbpUiNavigation::Menu:Administration" /* Administration */,
                layout: "application" /* application */,
                iconClass: 'fa fa-id-card-o',
                children: [
                    {
                        path: 'roles',
                        name: "AbpIdentity::Roles" /* Roles */,
                        order: 1,
                        requiredPolicy: 'AbpIdentity.Roles',
                    },
                    {
                        path: 'users',
                        name: "AbpIdentity::Users" /* Users */,
                        order: 2,
                        requiredPolicy: 'AbpIdentity.Users',
                    },
                ],
            },
        ]);
    }
}
IdentityConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
IdentityConfigService.ctorParameters = () => [];
/** @nocollapse */ IdentityConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IdentityConfigService_Factory() { return new IdentityConfigService(); }, token: IdentityConfigService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmlkZW50aXR5LmNvbmZpZy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9pZGVudGl0eS1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQWUsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQztRQUNFLFlBQVksQ0FBQztZQUNYO2dCQUNFLElBQUksNkRBQW9DO2dCQUN4QyxJQUFJLEVBQUUsRUFBRTtnQkFDUixLQUFLLEVBQUUsQ0FBQztnQkFDUixPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsY0FBYzthQUMxQjtZQUNEO2dCQUNFLElBQUksaUVBQXdDO2dCQUM1QyxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsVUFBVSw2REFBb0M7Z0JBQzlDLE1BQU0saUNBQXlCO2dCQUMvQixTQUFTLEVBQUUsaUJBQWlCO2dCQUM1QixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsSUFBSSxFQUFFLE9BQU87d0JBQ2IsSUFBSSxrQ0FBMkI7d0JBQy9CLEtBQUssRUFBRSxDQUFDO3dCQUNSLGNBQWMsRUFBRSxtQkFBbUI7cUJBQ3BDO29CQUNEO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLElBQUksa0NBQTJCO3dCQUMvQixLQUFLLEVBQUUsQ0FBQzt3QkFDUixjQUFjLEVBQUUsbUJBQW1CO3FCQUNwQztpQkFDRjthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBcENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZEFicFJvdXRlcywgZUxheW91dFR5cGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGVJZGVudGl0eVJvdXRlTmFtZXMgfSBmcm9tICdAYWJwL25nLmlkZW50aXR5JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eUNvbmZpZ1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgYWRkQWJwUm91dGVzKFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IGVJZGVudGl0eVJvdXRlTmFtZXMuQWRtaW5pc3RyYXRpb24sXHJcbiAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgd3JhcHBlcjogdHJ1ZSxcclxuICAgICAgICBpY29uQ2xhc3M6ICdmYSBmYS13cmVuY2gnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogZUlkZW50aXR5Um91dGVOYW1lcy5JZGVudGl0eU1hbmFnZW1lbnQsXHJcbiAgICAgICAgcGF0aDogJ2lkZW50aXR5JyxcclxuICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICBwYXJlbnROYW1lOiBlSWRlbnRpdHlSb3V0ZU5hbWVzLkFkbWluaXN0cmF0aW9uLFxyXG4gICAgICAgIGxheW91dDogZUxheW91dFR5cGUuYXBwbGljYXRpb24sXHJcbiAgICAgICAgaWNvbkNsYXNzOiAnZmEgZmEtaWQtY2FyZC1vJyxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAncm9sZXMnLFxyXG4gICAgICAgICAgICBuYW1lOiBlSWRlbnRpdHlSb3V0ZU5hbWVzLlJvbGVzLFxyXG4gICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgcmVxdWlyZWRQb2xpY3k6ICdBYnBJZGVudGl0eS5Sb2xlcycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAndXNlcnMnLFxyXG4gICAgICAgICAgICBuYW1lOiBlSWRlbnRpdHlSb3V0ZU5hbWVzLlVzZXJzLFxyXG4gICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgcmVxdWlyZWRQb2xpY3k6ICdBYnBJZGVudGl0eS5Vc2VycycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICB9XHJcbn1cclxuIl19