/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/account-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RestService, addAbpRoutes } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@abp/ng.core";
var AccountConfigService = /** @class */ (function () {
    function AccountConfigService(router, restService) {
        this.router = router;
        this.restService = restService;
        addAbpRoutes({
            name: 'AbpAccount::Menu:Account',
            path: 'account',
            invisible: true,
            layout: "account" /* account */,
            children: [
                { path: 'login', name: 'AbpAccount::Login', order: 1 },
                { path: 'register', name: 'AbpAccount::Register', order: 2 },
                { path: 'manage-profile', name: 'AbpAccount::ManageYourProfile', order: 3, layout: "application" /* application */ },
            ],
        });
    }
    AccountConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AccountConfigService.ctorParameters = function () { return [
        { type: Router },
        { type: RestService }
    ]; };
    /** @nocollapse */ AccountConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AccountConfigService_Factory() { return new AccountConfigService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.RestService)); }, token: AccountConfigService, providedIn: "root" });
    return AccountConfigService;
}());
export { AccountConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AccountConfigService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AccountConfigService.prototype.restService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9hY2NvdW50L25neC1hZG1pbi9jb25maWcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWNjb3VudC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBZSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRXpDO0lBSUUsOEJBQW9CLE1BQWMsRUFBVSxXQUF3QjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDbEUsWUFBWSxDQUFDO1lBQ1gsSUFBSSxFQUFFLDBCQUEwQjtZQUNoQyxJQUFJLEVBQUUsU0FBUztZQUNmLFNBQVMsRUFBRSxJQUFJO1lBQ2YsTUFBTSx5QkFBcUI7WUFDM0IsUUFBUSxFQUFFO2dCQUNSLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDdEQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFHO2dCQUM3RCxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsK0JBQStCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxNQUFNLGlDQUF5QixFQUFHO2FBQzdHO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBaEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsTUFBTTtnQkFGTyxXQUFXOzs7K0JBQWpDO0NBcUJDLEFBakJELElBaUJDO1NBZFksb0JBQW9COzs7Ozs7SUFDbkIsc0NBQXNCOzs7OztJQUFFLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVMYXlvdXRUeXBlLCBSZXN0U2VydmljZSwgYWRkQWJwUm91dGVzIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY291bnRDb25maWdTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJlc3RTZXJ2aWNlOiBSZXN0U2VydmljZSkge1xyXG4gICAgYWRkQWJwUm91dGVzKHtcclxuICAgICAgbmFtZTogJ0FicEFjY291bnQ6Ok1lbnU6QWNjb3VudCcsXHJcbiAgICAgIHBhdGg6ICdhY2NvdW50JyxcclxuICAgICAgaW52aXNpYmxlOiB0cnVlLFxyXG4gICAgICBsYXlvdXQ6IGVMYXlvdXRUeXBlLmFjY291bnQsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgeyBwYXRoOiAnbG9naW4nLCBuYW1lOiAnQWJwQWNjb3VudDo6TG9naW4nLCBvcmRlcjogMSB9LFxyXG4gICAgICAgIHsgcGF0aDogJ3JlZ2lzdGVyJywgbmFtZTogJ0FicEFjY291bnQ6OlJlZ2lzdGVyJywgb3JkZXI6IDIgIH0sXHJcbiAgICAgICAgeyBwYXRoOiAnbWFuYWdlLXByb2ZpbGUnLCBuYW1lOiAnQWJwQWNjb3VudDo6TWFuYWdlWW91clByb2ZpbGUnLCBvcmRlcjogMyxsYXlvdXQ6IGVMYXlvdXRUeXBlLmFwcGxpY2F0aW9uICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==