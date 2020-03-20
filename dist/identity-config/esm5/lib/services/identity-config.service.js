/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/identity-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addAbpRoutes } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var IdentityConfigService = /** @class */ (function () {
    function IdentityConfigService() {
        addAbpRoutes([
            {
                name: 'AbpUiNavigation::Menu:Administration',
                path: '',
                order: 1,
                wrapper: true,
                iconClass: 'fa fa-wrench',
            },
            {
                name: 'AbpIdentity::Menu:IdentityManagement',
                path: 'identity',
                order: 1,
                parentName: 'AbpUiNavigation::Menu:Administration',
                layout: "application" /* application */,
                iconClass: 'fa fa-id-card-o',
                children: [
                    {
                        path: 'roles',
                        name: 'AbpIdentity::Roles',
                        order: 1,
                        requiredPolicy: 'AbpIdentity.Roles',
                    },
                    {
                        path: 'users',
                        name: 'AbpIdentity::Users',
                        order: 2,
                        requiredPolicy: 'AbpIdentity.Users',
                    },
                ],
            },
        ]);
    }
    IdentityConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    IdentityConfigService.ctorParameters = function () { return []; };
    /** @nocollapse */ IdentityConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IdentityConfigService_Factory() { return new IdentityConfigService(); }, token: IdentityConfigService, providedIn: "root" });
    return IdentityConfigService;
}());
export { IdentityConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmlkZW50aXR5LmNvbmZpZy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9pZGVudGl0eS1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQWUsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFJRTtRQUNFLFlBQVksQ0FBQztZQUNYO2dCQUNFLElBQUksRUFBRSxzQ0FBc0M7Z0JBQzVDLElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2dCQUNSLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSxjQUFjO2FBQzFCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLHNDQUFzQztnQkFDNUMsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxDQUFDO2dCQUNSLFVBQVUsRUFBRSxzQ0FBc0M7Z0JBQ2xELE1BQU0saUNBQXlCO2dCQUMvQixTQUFTLEVBQUUsaUJBQWlCO2dCQUM1QixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsSUFBSSxFQUFFLE9BQU87d0JBQ2IsSUFBSSxFQUFFLG9CQUFvQjt3QkFDMUIsS0FBSyxFQUFFLENBQUM7d0JBQ1IsY0FBYyxFQUFFLG1CQUFtQjtxQkFDcEM7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLE9BQU87d0JBQ2IsSUFBSSxFQUFFLG9CQUFvQjt3QkFDMUIsS0FBSyxFQUFFLENBQUM7d0JBQ1IsY0FBYyxFQUFFLG1CQUFtQjtxQkFDcEM7aUJBQ0Y7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXBDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OztnQ0FMRDtDQXdDQyxBQXJDRCxJQXFDQztTQWxDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRBYnBSb3V0ZXMsIGVMYXlvdXRUeXBlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIElkZW50aXR5Q29uZmlnU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBhZGRBYnBSb3V0ZXMoW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0FicFVpTmF2aWdhdGlvbjo6TWVudTpBZG1pbmlzdHJhdGlvbicsXHJcbiAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgd3JhcHBlcjogdHJ1ZSxcclxuICAgICAgICBpY29uQ2xhc3M6ICdmYSBmYS13cmVuY2gnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0FicElkZW50aXR5OjpNZW51OklkZW50aXR5TWFuYWdlbWVudCcsXHJcbiAgICAgICAgcGF0aDogJ2lkZW50aXR5JyxcclxuICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICBwYXJlbnROYW1lOiAnQWJwVWlOYXZpZ2F0aW9uOjpNZW51OkFkbWluaXN0cmF0aW9uJyxcclxuICAgICAgICBsYXlvdXQ6IGVMYXlvdXRUeXBlLmFwcGxpY2F0aW9uLFxyXG4gICAgICAgIGljb25DbGFzczogJ2ZhIGZhLWlkLWNhcmQtbycsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJ3JvbGVzJyxcclxuICAgICAgICAgICAgbmFtZTogJ0FicElkZW50aXR5OjpSb2xlcycsXHJcbiAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICByZXF1aXJlZFBvbGljeTogJ0FicElkZW50aXR5LlJvbGVzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICd1c2VycycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdBYnBJZGVudGl0eTo6VXNlcnMnLFxyXG4gICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgcmVxdWlyZWRQb2xpY3k6ICdBYnBJZGVudGl0eS5Vc2VycycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICB9XHJcbn1cclxuIl19